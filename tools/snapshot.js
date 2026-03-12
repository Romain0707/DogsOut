const { chromium } = require('playwright');

async function main() {
  const filePath = process.argv[2];
  const out      = process.argv[3];

  if (!filePath || !out) {
    console.error('Usage: node tools/snapshot.js <html_file_path> <output.png>');
    process.exit(1);
  }

  const browser = await chromium.launch({ headless: true });

  const context = await browser.newContext({
    viewport: { width: 800, height: 450 },
    // Autoriser les requêtes réseau externes (tuiles OpenStreetMap, Leaflet CDN…)
    // même depuis un file:// — nécessite de passer par une URL http://localhost
    // → on utilise un serveur statique intégré ci-dessous
  });

  const page = await context.newPage();

  page.on('console',   (msg) => console.log('[PAGE]',    msg.type(), msg.text()));
  page.on('pageerror', (err) => console.error('[PAGEERROR]', err));

  // ── Stratégie : servir le fichier HTML via un mini serveur HTTP local ──
  // Playwright en file:// bloque les requêtes cross-origin (tuiles OSM).
  // On monte un serveur express temporaire sur un port aléatoire.
  const http = require('http');
  const fs   = require('fs');
  const path = require('path');
  const url  = require('url');

  const htmlDir  = path.dirname(filePath);
  const htmlFile = path.basename(filePath);

  // Mini serveur statique : sert les fichiers du dossier temporaire
  const server = http.createServer((req, res) => {
    const parsed   = url.parse(req.url);
    const fileSafe = path.join(htmlDir, path.basename(parsed.pathname));
    fs.readFile(fileSafe, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end('Not found');
        return;
      }
      const ext = path.extname(fileSafe);
      const mime = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css' }[ext] || 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': mime });
      res.end(data);
    });
  });

  // Choisir un port libre
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const port     = server.address().port;
  const localUrl = `http://127.0.0.1:${port}/${htmlFile}`;

  console.log('[SNAPSHOT] Serving on:', localUrl);

  try {
    // Naviguer — on utilise domcontentloaded car networkidle peut bloquer
    // sur des tuiles qui chargent indéfiniment
    await page.goto(localUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });

    // Attendre que le DOM #map soit visible
    await page.waitForSelector('#map', { state: 'visible', timeout: 30000 });

    // Attendre le signal JS __SNAPSHOT_READY__ posé par le twig
    await page.waitForFunction(
      () => window.__SNAPSHOT_READY__ === true,
      null,
      { timeout: 30000 }
    );

    // Petit délai pour laisser les tuiles finir de se peindre
    await page.waitForTimeout(1200);

    // Screenshot du seul élément #map
    const mapEl = await page.$('#map');
    if (!mapEl) throw new Error('#map element not found');

    await mapEl.screenshot({ path: out });
    console.log('[SNAPSHOT] Saved:', out);

  } finally {
    await browser.close();
    server.close();
  }
}

main().catch((e) => {
  console.error('[SNAPSHOT] Failed:', e);
  process.exit(1);
});
