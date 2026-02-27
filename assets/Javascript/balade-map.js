export function initBaladeMap() {
  const cfg = window.BALADE_MAP_CONFIG || {};

  // ---- MAP SETUP ----------------------------------------------------------
  const map = L.map('map').setView([48.8566, 2.3522], 13);
  setTimeout(() => map.invalidateSize(), 100);

  L.tileLayer( 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; OpenStreetMap contributors', maxZoom: 19 } ).addTo(map)

  // ---- INPUTS (hidden Symfony fields) -------------------------------------
  const routeInput = document.getElementById('balade_routeGeoJson');
  const wpInput    = document.getElementById('balade_waypointsJson');
  const distInput  = document.getElementById('balade_distanceMeters');
  const durInput   = document.getElementById('balade_durationSeconds');

  // ---- UI -----------------------------------------------------------------
  const btnAdd   = document.getElementById('btn-add');
  const btnUndo  = document.getElementById('btn-undo');
  const btnClose = document.getElementById('btn-close');
  const btnCalc  = document.getElementById('btn-calc');
  const btnClear = document.getElementById('btn-clear');
  const hint      = document.getElementById('map-hint');
  const statsBox  = document.getElementById('route-stats');
  const distanceEl = document.getElementById('route-distance');
  const durationEl = document.getElementById('route-duration');

  // ---- STATE --------------------------------------------------------------
  let points       = [];  // Array<LatLng>
  let pointMarkers = [];  // Array<Marker>
  let previewLine  = null;
  let routeLayer   = null;

  // ---- HELPERS ------------------------------------------------------------
  function formatDistance(meters) {
    if (meters == null) return '—';
    if (meters < 1000) return `${Math.round(meters)} m`;
    return `${(meters / 1000).toFixed(2)} km`.replace('.', ',');
  }

  function formatDuration(seconds) {
    if (seconds == null) return '—';
    const s = Math.round(seconds);
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    if (h <= 0) return `${m} min`;
    return `${h} h ${String(m).padStart(2, '0')} min`;
  }

  function setHiddenDistanceDuration(distanceMeters, durationSeconds) {
    if (distInput) distInput.value = distanceMeters == null ? '' : String(Math.round(distanceMeters));
    if (durInput)  durInput.value  = durationSeconds == null ? '' : String(Math.round(durationSeconds));
  }

  function saveWaypoints() {
    if (!wpInput) return;
    wpInput.value = JSON.stringify(points.map(p => [p.lat, p.lng]));
  }

  function clearStats() {
    if (statsBox)    statsBox.style.display = 'none';
    if (distanceEl)  distanceEl.textContent = '—';
    if (durationEl)  durationEl.textContent = '—';
    setHiddenDistanceDuration(null, null);
  }

  function showStats(distanceMeters, durationSeconds) {
    if (statsBox)    statsBox.style.display = 'inline-flex';
    if (distanceEl)  distanceEl.textContent = formatDistance(distanceMeters);
    if (durationEl)  durationEl.textContent = formatDuration(durationSeconds);
    setHiddenDistanceDuration(distanceMeters, durationSeconds);
  }

  function clearRouteLayer() {
    if (routeLayer) { map.removeLayer(routeLayer); routeLayer = null; }
    if (routeInput) routeInput.value = '';
    clearStats();
  }

  function refreshPreviewAndUI() {
    if (previewLine) { map.removeLayer(previewLine); previewLine = null; }
    if (points.length >= 2) {
      previewLine = L.polyline(points, { opacity: 0.4 }).addTo(map);
    }
    if (btnCalc) btnCalc.disabled = points.length < 2;
    if (hint) {
      hint.textContent = points.length < 2
        ? 'Clique sur la carte pour ajouter des points (min 2).'
        : 'Ajoute des points, puis clique sur "Calculer". (Ferme la boucle si tu veux revenir au départ)';
    }
  }

  function addPoint(latlng) {
    points.push(latlng);
    const marker = L.marker(latlng, { draggable: true }).addTo(map);
    marker.on('dragend', () => {
      const idx = pointMarkers.indexOf(marker);
      if (idx !== -1) points[idx] = marker.getLatLng();
      saveWaypoints();
      clearRouteLayer();
      refreshPreviewAndUI();
    });
    pointMarkers.push(marker);
    saveWaypoints();
    clearRouteLayer();
    refreshPreviewAndUI();
  }

  // ---- BUTTONS ------------------------------------------------------------
  btnAdd?.addEventListener('click', () => {
    btnAdd.classList.add('active');
    if (hint) hint.textContent = 'Clique sur la carte pour ajouter des points.';
  });

  btnUndo?.addEventListener('click', () => {
    if (!points.length) return;
    points.pop();
    const m = pointMarkers.pop();
    if (m) map.removeLayer(m);
    saveWaypoints();
    clearRouteLayer();
    refreshPreviewAndUI();
  });

  btnClose?.addEventListener('click', () => {
    if (points.length < 2) return;
    const first = points[0];
    const last  = points[points.length - 1];
    const same  = Math.abs(first.lat - last.lat) < 1e-6 && Math.abs(first.lng - last.lng) < 1e-6;
    if (!same) addPoint(L.latLng(first.lat, first.lng));
  });

  btnClear?.addEventListener('click', () => {
    points = [];
    pointMarkers.forEach(m => map.removeLayer(m));
    pointMarkers = [];
    if (previewLine) { map.removeLayer(previewLine); previewLine = null; }
    if (routeLayer)  { map.removeLayer(routeLayer);  routeLayer  = null; }
    if (routeInput) routeInput.value = '';
    if (wpInput)    wpInput.value    = '';
    clearStats();
    refreshPreviewAndUI();
  });

  // ---- MAP CLICK ----------------------------------------------------------
  map.on('click', (e) => addPoint(e.latlng));

  // ---- CALCULATE ORS ROUTE ------------------------------------------------
  btnCalc?.addEventListener('click', async () => {
    if (points.length < 2) return;
    if (hint) hint.textContent = "Calcul de l'itinéraire rando…";
    saveWaypoints();

    const res  = await fetch('/api/hiking-route', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ points: points.map(p => [p.lat, p.lng]) })
    });
    const data = await res.json();

    if (!res.ok) {
      console.error(data);
      if (hint) hint.textContent = 'Erreur ORS (voir console).';
      return;
    }

    if (routeInput) routeInput.value = JSON.stringify(data.geojson);

    if (routeLayer) map.removeLayer(routeLayer);
    routeLayer = L.geoJSON(data.geojson, {
      style: () => ({ weight: 6, opacity: 0.90 })
    }).addTo(map);

    try { map.fitBounds(routeLayer.getBounds(), { padding: [20, 20] }); } catch (_) {}

    // Supporte les deux formats de réponse API
    const dist = data.geojson?.properties?.summary?.distance ?? data.distance ?? null;
    const dur  = data.geojson?.properties?.summary?.duration ?? data.duration ?? null;
    showStats(dist, dur);

    if (hint) hint.textContent = 'Itinéraire calculé ✅ Déplace les points puis recalcule si besoin.';
  });

  // ---- INIT / RESTORE STATE -----------------------------------------------
  // 1) Waypoints sauvegardés (mode édition ou retour arrière formulaire)
  const savedWp = cfg.initialWaypoints
    ?? (wpInput?.value ? tryParse(wpInput.value) : null);

  if (Array.isArray(savedWp) && savedWp.length) {
    savedWp.forEach(p => {
      if (Array.isArray(p) && p.length === 2) addPoint(L.latLng(p[0], p[1]));
    });
    if (points.length) map.fitBounds(L.latLngBounds(points), { padding: [20, 20] });
  } else {
    refreshPreviewAndUI();
  }

  // 2) Route GeoJSON déjà enregistrée
  const savedGeo = cfg.initialRouteGeoJson
    ?? (routeInput?.value ? tryParse(routeInput.value) : null);

  if (savedGeo) {
    try {
      routeLayer = L.geoJSON(savedGeo, {
        style: () => ({ weight: 6, opacity: 0.90 })
      }).addTo(map);
      if (!points.length) map.fitBounds(routeLayer.getBounds(), { padding: [20, 20] });
    } catch (e) { console.warn('GeoJSON invalide dans routeGeoJson'); }
  }

  // 3) Distance / durée déjà en base (mode édition)
  const existingDist = cfg.initialDistance ?? (distInput?.value !== '' ? parseFloat(distInput.value) : null);
  const existingDur  = cfg.initialDuration ?? (durInput?.value  !== '' ? parseFloat(durInput.value)  : null);
  if (existingDist != null || existingDur != null) showStats(existingDist, existingDur);

  // ---- UTIL ---------------------------------------------------------------
  function tryParse(str) {
    try { return JSON.parse(str); } catch (_) { return null; }
  }
};