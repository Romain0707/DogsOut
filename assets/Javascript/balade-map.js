export function initBaladeMap() {

  const cfg = window.BALADE_MAP_CONFIG || {};

  // ── Carte ──────────────────────────────────────────────────────────────
  const [defLat, defLng, defZoom] = cfg.defaultView ?? [44.8378, -0.5792, 13];
  const map = L.map('map', { doubleClickZoom: false }).setView([defLat, defLng], defZoom);
  setTimeout(() => map.invalidateSize(), 150);

  L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors', maxZoom: 19,
  }).addTo(map);

  const wpInput    = document.getElementById('balade_waypointsJson');
  const routeInput = document.getElementById('balade_routeGeoJson');
  const distInput  = document.getElementById('balade_distanceMeters');
  const durInput   = document.getElementById('balade_durationSeconds');

  const btnUndo       = document.getElementById('btn-undo');
  const btnClose      = document.getElementById('btn-close');
  const btnClear      = document.getElementById('btn-clear');
  const btnFreeToggle = document.getElementById('btn-free-toggle');
  const pillEl        = document.getElementById('free-toggle-pill');
  const freeDescEl    = document.getElementById('free-toggle-desc');
  const hintEl        = document.getElementById('map-hint');
  const statusBarEl   = document.getElementById('map-status');
  const statsBox      = document.getElementById('route-stats');
  const distanceEl    = document.getElementById('route-distance');
  const durationEl    = document.getElementById('route-duration');
  const segListEl     = document.getElementById('seg-list');

  let orsProfile  = cfg.orsProfile ?? 'foot-walking';
  let freeMode    = false;
  let cursor      = null;   
  let segments    = [];     
  let startMarker = null;
  let cursorMk    = null;
  let previewLine = null;
  let orsSeq          = 0;
  let restorationLayer = null;  

  // ── Icônes ─────────────────────────────────────────────────────────────
  function makePin(bg, emoji) {
    return L.divIcon({
      html: `<div style="background:${bg};width:32px;height:32px;border-radius:50% 50% 50% 0;
        transform:rotate(-45deg);border:3px solid white;box-shadow:0 2px 8px rgba(0,0,0,.28);
        display:flex;align-items:center;justify-content:center">
        <span style="transform:rotate(45deg);font-size:14px">${emoji}</span></div>`,
      className: '', iconSize: [32, 32], iconAnchor: [16, 32],
    });
  }

  const IC = { start: makePin('#4a7c59', '🏠'), cursor: makePin('#e87040', '🐾') };

  map.on('click', (e) => {
    if (!cursor) {
      cursor = e.latlng;
      startMarker = L.marker(cursor, { icon: IC.start }).addTo(map);
      setStatus(freeMode ? 'free' : 'ors');
    } else {
      if (freeMode) addFreeSeg(cursor, e.latlng);
      else          addORSSeg(cursor, e.latlng);
    }
    updateHint();
    renderSegList();
    persist();
  });

  map.on('mousemove', (e) => {
    if (!cursor) return;
    if (previewLine) { map.removeLayer(previewLine); previewLine = null; }
    previewLine = L.polyline([cursor, e.latlng], {
      color: freeMode ? '#7b5ea7' : '#4a7c59',
      weight: 3, opacity: .4, dashArray: '5 8', lineCap: 'round',
    }).addTo(map);
  });

  function addFreeSeg(from, to) {
    if (restorationLayer) { restorationLayer.clearLayers(); restorationLayer.remove(); restorationLayer = null; }
    const pts    = [from, to];
    const layers = drawPoly(pts, 'free');
    const distM  = from.distanceTo(to);
    segments.push({ type: 'free', from, to, points: pts, layers,
      distanceMeters: distM, durationSeconds: (distM / 1000 / 4) * 3600 });
    moveCursor(to);
    updateStats();
    renderSegList();
    persist();
  }

  async function addORSSeg(from, to) {
    if (restorationLayer) { restorationLayer.clearLayers(); restorationLayer.remove(); restorationLayer = null; }
    const seq = ++orsSeq;
    setStatus('load');

    try {
      const res = await fetch('/api/hiking-route', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          points:  [[from.lat, from.lng], [to.lat, to.lng]],
          profile: orsProfile,
        }),
      });

      if (seq !== orsSeq) return;

      const data = await res.json();

      if (!res.ok) {
        console.error('[ORS]', data);
        setStatus(freeMode ? 'free' : 'ors');
        setHint('⚠️ Erreur ORS — vérifiez la console.');
        return;
      }

      const coords = data.geojson?.geometry?.coordinates ?? [];
      if (!coords.length) {
        setStatus(freeMode ? 'free' : 'ors');
        setHint('⚠️ ORS n\'a retourné aucun tracé.');
        return;
      }

      const pts   = coords.map(c => L.latLng(c[1], c[0]));
      const distM = data.distance ?? from.distanceTo(to);
      const durS  = data.duration ?? (distM / 1000 / 4) * 3600;

      segments.push({ type: 'ors', from, to,
        points: pts, layers: drawPoly(pts, 'ors'),
        distanceMeters: distM, durationSeconds: durS });

      moveCursor(to);
      updateStats();
      renderSegList();
      setStatus(freeMode ? 'free' : 'ors');
      updateHint();
      persist();

    } catch (err) {
      if (seq !== orsSeq) return;
      console.error('[ORS]', err);
      setStatus(freeMode ? 'free' : 'ors');
      setHint('⚠️ Impossible de joindre /api/hiking-route.');
    }
  }

  function drawPoly(pts, type) {
    const color  = type === 'ors' ? '#4a7c59' : '#7b5ea7';
    const shadow = L.polyline(pts, { color: '#3d2b1f', weight: 9, opacity: .07 }).addTo(map);
    const line   = L.polyline(pts, {
      color, weight: 5, opacity: .9, lineCap: 'round', lineJoin: 'round',
      ...(type === 'free' ? { dashArray: '8 6' } : {}),
    }).addTo(map);
    return [shadow, line];
  }

  function removeLayers(layers) { layers.forEach(l => map.removeLayer(l)); }

  function moveCursor(ll) {
    cursor = ll;
    if (cursorMk) map.removeLayer(cursorMk);
    cursorMk = L.marker(ll, { icon: IC.cursor }).addTo(map);
  }

  function closeLoop() {
    if (!cursor || !segments.length) return;
    const first = segments[0].from;
    const same  = Math.abs(cursor.lat - first.lat) < 1e-6
               && Math.abs(cursor.lng - first.lng) < 1e-6;
    if (same) return;
    if (freeMode) addFreeSeg(cursor, first);
    else          addORSSeg(cursor, first);
  }

  function undoLast() {
    if (previewLine) { map.removeLayer(previewLine); previewLine = null; }

    if (segments.length) {
      const seg = segments.pop();
      removeLayers(seg.layers);
      cursor = seg.from;
      if (cursorMk) { map.removeLayer(cursorMk); cursorMk = null; }
      if (segments.length === 0) {
        if (startMarker) map.removeLayer(startMarker);
        startMarker = L.marker(cursor, { icon: IC.start }).addTo(map);
      } else {
        cursorMk = L.marker(cursor, { icon: IC.cursor }).addTo(map);
      }
    } else if (cursor) {
      if (startMarker) { map.removeLayer(startMarker); startMarker = null; }
      if (cursorMk)    { map.removeLayer(cursorMk);    cursorMk    = null; }
      cursor = null;
      setStatus('hide');
    } else return;

    renderSegList();
    updateStats();
    updateHint();
    persist();
  }

  function clearAll() {
    orsSeq++;

    if (restorationLayer) {
      restorationLayer.eachLayer(l => map.removeLayer(l));
      restorationLayer.clearLayers();
      map.removeLayer(restorationLayer);
      restorationLayer = null;
    }
    segments.forEach(s => removeLayers(s.layers));
    segments = [];
    if (startMarker) { map.removeLayer(startMarker); startMarker = null; }
    if (cursorMk)    { map.removeLayer(cursorMk);    cursorMk    = null; }
    if (previewLine) { map.removeLayer(previewLine); previewLine = null; }
    cursor = null;
    map.eachLayer(l => {
      if (l instanceof L.Polyline || l instanceof L.GeoJSON) {
        map.removeLayer(l);
      }
    });
    renderSegList();
    updateStats();
    updateHint();
    setStatus('hide');
    persist();
  }

  function toggleFree() {
    freeMode = !freeMode;
    btnFreeToggle?.classList.toggle('on', freeMode);
    pillEl?.classList.toggle('on', freeMode);
    if (freeDescEl) freeDescEl.textContent = freeMode
      ? 'Libre'
      : 'Libre';
    map.getContainer().style.cursor = freeMode ? 'crosshair' : '';
    if (cursor) setStatus(freeMode ? 'free' : 'ors');
    updateHint();
  }

  function setProfile(p) {
    orsProfile = p;
    document.querySelectorAll('[data-ors-profile]').forEach(el =>
      el.classList.toggle('active', el.dataset.orsProfile === p)
    );
  }


  function persist() {

    const wps = [];
    if (cursor || segments.length) {
      if (segments.length) {
        segments.forEach(s => wps.push([s.from.lat, s.from.lng, s.type]));
        wps.push([cursor.lat, cursor.lng, freeMode ? 'free' : 'ors']);
      } else if (cursor) {
        wps.push([cursor.lat, cursor.lng, freeMode ? 'free' : 'ors']);
      }
    }
    if (wpInput) wpInput.value = JSON.stringify(wps);

    if (segments.length) {
      const allCoords = [];
      segments.forEach(s => {
        const pts = s.points.map(p => [p.lng, p.lat]);
        allCoords.push(...(allCoords.length ? pts.slice(1) : pts));
      });

      const totalDist = segments.reduce((a, s) => a + (s.distanceMeters  ?? 0), 0);
      const totalDur  = segments.reduce((a, s) => a + (s.durationSeconds ?? 0), 0);

      if (routeInput) routeInput.value = JSON.stringify({
        type: 'FeatureCollection',
        features: [{
          type: 'Feature',
          geometry: { type: 'LineString', coordinates: allCoords },
          properties: { summary: { distance: totalDist / 1000, duration: totalDur } },
        }],
      });
      if (distInput) distInput.value = String(Math.round(totalDist));
      if (durInput)  durInput.value  = String(Math.round(totalDur));
    } else {
      if (routeInput) routeInput.value = '';
      if (distInput)  distInput.value  = '';
      if (durInput)   durInput.value   = '';
    }
  }

  function updateStats() {
    if (!segments.length) {
      if (statsBox)   statsBox.style.display = 'none';
      if (distanceEl) distanceEl.textContent = '—';
      if (durationEl) durationEl.textContent = '—';
      return;
    }
    const totalDist = segments.reduce((a, s) => a + (s.distanceMeters  ?? 0), 0);
    const totalDur  = segments.reduce((a, s) => a + (s.durationSeconds ?? 0), 0);
    if (statsBox)   statsBox.style.display = 'inline-flex';
    if (distanceEl) distanceEl.textContent = fmtDist(totalDist);
    if (durationEl) durationEl.textContent = fmtDur(totalDur);
  }

  function renderSegList() {
    if (!segListEl) return;
    segListEl.innerHTML = '';
    if (!segments.length) {
      segListEl.innerHTML = '<li class="seg-empty">Aucun segment pour l\'instant</li>';
      return;
    }
    segments.forEach((s, i) => {
      const isORS = s.type === 'ors';
      const li = document.createElement('li');
      li.className = `seg-item ${isORS ? 'seg-ors' : 'seg-free'}`;
      li.innerHTML = `
        <span class="seg-dot ${isORS ? 'seg-dot-ors' : 'seg-dot-free'}"></span>
        <span class="seg-label">Segment ${i + 1} · ${fmtDist(s.distanceMeters)}</span>
        <span class="seg-badge ${isORS ? 'seg-badge-ors' : 'seg-badge-free'}">${isORS ? 'ORS' : 'Libre'}</span>
      `;
      segListEl.appendChild(li);
    });
  }

  function updateHint() {
    if (!hintEl) return;
    if (!cursor)       hintEl.textContent = 'Clique sur la carte pour poser le premier point.';
    else if (freeMode) hintEl.textContent = 'Mode libre — chaque clic trace une ligne directe.';
    else               hintEl.textContent = 'Clique pour ajouter un point — ORS calcule le chemin.';
  }

  function setHint(msg) { if (hintEl) hintEl.textContent = msg; }

  function setStatus(type) {
    if (!statusBarEl) return;
    statusBarEl.className = 'map-status';
    statusBarEl.hidden    = false;
    if (type === 'hide') { statusBarEl.hidden = true; return; }
    const cls = { load: 'map-status--load', ors: 'map-status--ors', free: 'map-status--free' };
    const txt = {
      load: '<span class="map-status__spin"></span>Calcul en cours…',
      ors:  '<span class="map-status__dot"></span>Mode Calcul actif',
      free: '<span class="map-status__dot"></span>Mode Libre actif',
    };
    statusBarEl.classList.add(cls[type]);
    statusBarEl.innerHTML = txt[type];
  }

  function fmtDist(m) {
    if (m == null) return '—';
    return m < 1000 ? `${Math.round(m)} m` : `${(m / 1000).toFixed(2).replace('.', ',')} km`;
  }

  function fmtDur(s) {
    if (s == null) return '—';
    s = Math.round(s);
    const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60);
    return h <= 0 ? `${m} min` : `${h} h ${String(m).padStart(2, '0')} min`;
  }

  function tryParse(str) {
    try { return JSON.parse(str); } catch { return null; }
  }

  btnUndo?.addEventListener('click', undoLast);
  btnClose?.addEventListener('click', closeLoop);
  btnClear?.addEventListener('click', clearAll);
  btnFreeToggle?.addEventListener('click', toggleFree);
  document.querySelectorAll('[data-ors-profile]').forEach(el =>
    el.addEventListener('click', () => setProfile(el.dataset.orsProfile))
  );

  const savedWp  = cfg.initialWaypoints    ?? tryParse(wpInput?.value    ?? '');
  const savedGeo = cfg.initialRouteGeoJson ?? tryParse(routeInput?.value ?? '');

  if (Array.isArray(savedWp) && savedWp.length >= 2 && savedGeo) {
    try {
      restorationLayer = L.geoJSON(savedGeo, {
        style: () => ({ color: '#4a7c59', weight: 5, opacity: .9, lineCap: 'round' }),
      }).addTo(map);
      if (cfg.initialRouteGeoJson) cfg.initialRouteGeoJson = null;
    } catch (e) { console.warn('[balade-map] GeoJSON invalide', e); }

    savedWp.forEach((p, i) => {
      if (!Array.isArray(p) || p.length < 2) return;
      const ll = L.latLng(p[0], p[1]);
      if (i === 0) {
        cursor = ll;
        startMarker = L.marker(ll, { icon: IC.start }).addTo(map);
      } else {
        const prev = savedWp[i - 1];
        const from = L.latLng(prev[0], prev[1]);
        const type = prev[2] ?? 'ors';
        segments.push({
          type, from, to: ll,
          points: [from, ll],
          layers: [],
          distanceMeters:  from.distanceTo(ll),
          durationSeconds: (from.distanceTo(ll) / 1000 / 4) * 3600,
        });
        moveCursor(ll);
      }
    });

    map.fitBounds(L.latLngBounds(savedWp.map(p => L.latLng(p[0], p[1]))), { padding: [30, 30] });
    setStatus(freeMode ? 'free' : 'ors');

  } else if (Array.isArray(savedWp) && savedWp.length === 1) {
    const ll = L.latLng(savedWp[0][0], savedWp[0][1]);
    cursor = ll;
    startMarker = L.marker(ll, { icon: IC.start }).addTo(map);
    map.setView(ll, 15);
    setStatus(freeMode ? 'free' : 'ors');
  }

  const existingDist = cfg.initialDistance ?? (distInput?.value  ? parseFloat(distInput.value)  : null);
  const existingDur  = cfg.initialDuration ?? (durInput?.value   ? parseFloat(durInput.value)   : null);
  if (existingDist != null && segments.length) {
    if (statsBox)   statsBox.style.display = 'inline-flex';
    if (distanceEl) distanceEl.textContent = fmtDist(existingDist);
    if (durationEl) durationEl.textContent = fmtDur(existingDur);
  }

  setProfile(orsProfile);
  renderSegList();
  updateHint();
}