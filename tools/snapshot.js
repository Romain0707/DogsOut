const { chromium } = require('playwright');

async function main() {
  const filePath = process.argv[2]; // chemin du fichier HTML
  const out = process.argv[3];

  if (!filePath || !out) {
    console.error('Usage: node tools/snapshot.js <html_file_path> <output.png>');
    process.exit(1);
  }

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 800, height: 450 }
  });

  const page = await context.newPage();

  page.on('console', (msg) => console.log('[PAGE]', msg.type(), msg.text()));
  page.on('pageerror', (err) => console.error('[PAGEERROR]', err));

  // file:/// URL
  const url = 'file:///' + filePath.replace(/\\/g, '/');
  console.log('[SNAPSHOT] Opening:', url);

  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });

  await page.waitForSelector('#map', { state: 'visible', timeout: 60000 });
  await page.waitForFunction(() => window.__SNAPSHOT_READY__ === true, null, { timeout: 60000 });

  await page.waitForTimeout(800);

  const mapEl = await page.$('#map');
  await mapEl.screenshot({ path: out });

  console.log('[SNAPSHOT] Saved:', out);
  await browser.close();
}

main().catch((e) => {
  console.error('[SNAPSHOT] Failed:', e);
  process.exit(1);
});