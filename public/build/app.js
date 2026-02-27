"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/Javascript/balade-map.js"
/*!*****************************************!*\
  !*** ./assets/Javascript/balade-map.js ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initBaladeMap: () => (/* binding */ initBaladeMap)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_string_pad_start_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.string.pad-start.js */ "./node_modules/core-js/modules/es.string.pad-start.js");
/* harmony import */ var core_js_modules_es_string_pad_start_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_pad_start_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_esnext_json_parse_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/esnext.json.parse.js */ "./node_modules/core-js/modules/esnext.json.parse.js");
/* harmony import */ var core_js_modules_esnext_json_parse_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_json_parse_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_31__);
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
































function initBaladeMap() {
  var _cfg$initialWaypoints, _cfg$initialRouteGeoJ, _cfg$initialDistance, _cfg$initialDuration;
  var cfg = window.BALADE_MAP_CONFIG || {};

  // ---- MAP SETUP ----------------------------------------------------------
  var map = L.map('map').setView([48.8566, 2.3522], 13);
  setTimeout(function () {
    return map.invalidateSize();
  }, 100);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
    maxZoom: 19
  }).addTo(map);

  // ---- INPUTS (hidden Symfony fields) -------------------------------------
  var routeInput = document.getElementById('balade_routeGeoJson');
  var wpInput = document.getElementById('balade_waypointsJson');
  var distInput = document.getElementById('balade_distanceMeters');
  var durInput = document.getElementById('balade_durationSeconds');

  // ---- UI -----------------------------------------------------------------
  var btnAdd = document.getElementById('btn-add');
  var btnUndo = document.getElementById('btn-undo');
  var btnClose = document.getElementById('btn-close');
  var btnCalc = document.getElementById('btn-calc');
  var btnClear = document.getElementById('btn-clear');
  var hint = document.getElementById('map-hint');
  var statsBox = document.getElementById('route-stats');
  var distanceEl = document.getElementById('route-distance');
  var durationEl = document.getElementById('route-duration');

  // ---- STATE --------------------------------------------------------------
  var points = []; // Array<LatLng>
  var pointMarkers = []; // Array<Marker>
  var previewLine = null;
  var routeLayer = null;

  // ---- HELPERS ------------------------------------------------------------
  function formatDistance(meters) {
    if (meters == null) return '—';
    if (meters < 1000) return "".concat(Math.round(meters), " m");
    return "".concat((meters / 1000).toFixed(2), " km").replace('.', ',');
  }
  function formatDuration(seconds) {
    if (seconds == null) return '—';
    var s = Math.round(seconds);
    var h = Math.floor(s / 3600);
    var m = Math.floor(s % 3600 / 60);
    if (h <= 0) return "".concat(m, " min");
    return "".concat(h, " h ").concat(String(m).padStart(2, '0'), " min");
  }
  function setHiddenDistanceDuration(distanceMeters, durationSeconds) {
    if (distInput) distInput.value = distanceMeters == null ? '' : String(Math.round(distanceMeters));
    if (durInput) durInput.value = durationSeconds == null ? '' : String(Math.round(durationSeconds));
  }
  function saveWaypoints() {
    if (!wpInput) return;
    wpInput.value = JSON.stringify(points.map(function (p) {
      return [p.lat, p.lng];
    }));
  }
  function clearStats() {
    if (statsBox) statsBox.style.display = 'none';
    if (distanceEl) distanceEl.textContent = '—';
    if (durationEl) durationEl.textContent = '—';
    setHiddenDistanceDuration(null, null);
  }
  function showStats(distanceMeters, durationSeconds) {
    if (statsBox) statsBox.style.display = 'inline-flex';
    if (distanceEl) distanceEl.textContent = formatDistance(distanceMeters);
    if (durationEl) durationEl.textContent = formatDuration(durationSeconds);
    setHiddenDistanceDuration(distanceMeters, durationSeconds);
  }
  function clearRouteLayer() {
    if (routeLayer) {
      map.removeLayer(routeLayer);
      routeLayer = null;
    }
    if (routeInput) routeInput.value = '';
    clearStats();
  }
  function refreshPreviewAndUI() {
    if (previewLine) {
      map.removeLayer(previewLine);
      previewLine = null;
    }
    if (points.length >= 2) {
      previewLine = L.polyline(points, {
        opacity: 0.4
      }).addTo(map);
    }
    if (btnCalc) btnCalc.disabled = points.length < 2;
    if (hint) {
      hint.textContent = points.length < 2 ? 'Clique sur la carte pour ajouter des points (min 2).' : 'Ajoute des points, puis clique sur "Calculer". (Ferme la boucle si tu veux revenir au départ)';
    }
  }
  function addPoint(latlng) {
    points.push(latlng);
    var marker = L.marker(latlng, {
      draggable: true
    }).addTo(map);
    marker.on('dragend', function () {
      var idx = pointMarkers.indexOf(marker);
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
  btnAdd === null || btnAdd === void 0 || btnAdd.addEventListener('click', function () {
    btnAdd.classList.add('active');
    if (hint) hint.textContent = 'Clique sur la carte pour ajouter des points.';
  });
  btnUndo === null || btnUndo === void 0 || btnUndo.addEventListener('click', function () {
    if (!points.length) return;
    points.pop();
    var m = pointMarkers.pop();
    if (m) map.removeLayer(m);
    saveWaypoints();
    clearRouteLayer();
    refreshPreviewAndUI();
  });
  btnClose === null || btnClose === void 0 || btnClose.addEventListener('click', function () {
    if (points.length < 2) return;
    var first = points[0];
    var last = points[points.length - 1];
    var same = Math.abs(first.lat - last.lat) < 1e-6 && Math.abs(first.lng - last.lng) < 1e-6;
    if (!same) addPoint(L.latLng(first.lat, first.lng));
  });
  btnClear === null || btnClear === void 0 || btnClear.addEventListener('click', function () {
    points = [];
    pointMarkers.forEach(function (m) {
      return map.removeLayer(m);
    });
    pointMarkers = [];
    if (previewLine) {
      map.removeLayer(previewLine);
      previewLine = null;
    }
    if (routeLayer) {
      map.removeLayer(routeLayer);
      routeLayer = null;
    }
    if (routeInput) routeInput.value = '';
    if (wpInput) wpInput.value = '';
    clearStats();
    refreshPreviewAndUI();
  });

  // ---- MAP CLICK ----------------------------------------------------------
  map.on('click', function (e) {
    return addPoint(e.latlng);
  });

  // ---- CALCULATE ORS ROUTE ------------------------------------------------
  btnCalc === null || btnCalc === void 0 || btnCalc.addEventListener('click', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var _ref2, _data$geojson$propert, _data$geojson, _ref3, _data$geojson$propert2, _data$geojson2;
    var res, data, dist, dur;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          if (!(points.length < 2)) {
            _context.n = 1;
            break;
          }
          return _context.a(2);
        case 1:
          if (hint) hint.textContent = "Calcul de l'itinéraire rando…";
          saveWaypoints();
          _context.n = 2;
          return fetch('/api/hiking-route', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              points: points.map(function (p) {
                return [p.lat, p.lng];
              })
            })
          });
        case 2:
          res = _context.v;
          _context.n = 3;
          return res.json();
        case 3:
          data = _context.v;
          if (res.ok) {
            _context.n = 4;
            break;
          }
          console.error(data);
          if (hint) hint.textContent = 'Erreur ORS (voir console).';
          return _context.a(2);
        case 4:
          if (routeInput) routeInput.value = JSON.stringify(data.geojson);
          if (routeLayer) map.removeLayer(routeLayer);
          routeLayer = L.geoJSON(data.geojson, {
            style: function style() {
              return {
                weight: 6,
                opacity: 0.90
              };
            }
          }).addTo(map);
          try {
            map.fitBounds(routeLayer.getBounds(), {
              padding: [20, 20]
            });
          } catch (_) {}

          // Supporte les deux formats de réponse API
          dist = (_ref2 = (_data$geojson$propert = (_data$geojson = data.geojson) === null || _data$geojson === void 0 || (_data$geojson = _data$geojson.properties) === null || _data$geojson === void 0 || (_data$geojson = _data$geojson.summary) === null || _data$geojson === void 0 ? void 0 : _data$geojson.distance) !== null && _data$geojson$propert !== void 0 ? _data$geojson$propert : data.distance) !== null && _ref2 !== void 0 ? _ref2 : null;
          dur = (_ref3 = (_data$geojson$propert2 = (_data$geojson2 = data.geojson) === null || _data$geojson2 === void 0 || (_data$geojson2 = _data$geojson2.properties) === null || _data$geojson2 === void 0 || (_data$geojson2 = _data$geojson2.summary) === null || _data$geojson2 === void 0 ? void 0 : _data$geojson2.duration) !== null && _data$geojson$propert2 !== void 0 ? _data$geojson$propert2 : data.duration) !== null && _ref3 !== void 0 ? _ref3 : null;
          showStats(dist, dur);
          if (hint) hint.textContent = 'Itinéraire calculé ✅ Déplace les points puis recalcule si besoin.';
        case 5:
          return _context.a(2);
      }
    }, _callee);
  })));

  // ---- INIT / RESTORE STATE -----------------------------------------------
  // 1) Waypoints sauvegardés (mode édition ou retour arrière formulaire)
  var savedWp = (_cfg$initialWaypoints = cfg.initialWaypoints) !== null && _cfg$initialWaypoints !== void 0 ? _cfg$initialWaypoints : wpInput !== null && wpInput !== void 0 && wpInput.value ? tryParse(wpInput.value) : null;
  if (Array.isArray(savedWp) && savedWp.length) {
    savedWp.forEach(function (p) {
      if (Array.isArray(p) && p.length === 2) addPoint(L.latLng(p[0], p[1]));
    });
    if (points.length) map.fitBounds(L.latLngBounds(points), {
      padding: [20, 20]
    });
  } else {
    refreshPreviewAndUI();
  }

  // 2) Route GeoJSON déjà enregistrée
  var savedGeo = (_cfg$initialRouteGeoJ = cfg.initialRouteGeoJson) !== null && _cfg$initialRouteGeoJ !== void 0 ? _cfg$initialRouteGeoJ : routeInput !== null && routeInput !== void 0 && routeInput.value ? tryParse(routeInput.value) : null;
  if (savedGeo) {
    try {
      routeLayer = L.geoJSON(savedGeo, {
        style: function style() {
          return {
            weight: 6,
            opacity: 0.90
          };
        }
      }).addTo(map);
      if (!points.length) map.fitBounds(routeLayer.getBounds(), {
        padding: [20, 20]
      });
    } catch (e) {
      console.warn('GeoJSON invalide dans routeGeoJson');
    }
  }

  // 3) Distance / durée déjà en base (mode édition)
  var existingDist = (_cfg$initialDistance = cfg.initialDistance) !== null && _cfg$initialDistance !== void 0 ? _cfg$initialDistance : (distInput === null || distInput === void 0 ? void 0 : distInput.value) !== '' ? parseFloat(distInput.value) : null;
  var existingDur = (_cfg$initialDuration = cfg.initialDuration) !== null && _cfg$initialDuration !== void 0 ? _cfg$initialDuration : (durInput === null || durInput === void 0 ? void 0 : durInput.value) !== '' ? parseFloat(durInput.value) : null;
  if (existingDist != null || existingDur != null) showStats(existingDist, existingDur);

  // ---- UTIL ---------------------------------------------------------------
  function tryParse(str) {
    try {
      return JSON.parse(str);
    } catch (_) {
      return null;
    }
  }
}
;

/***/ },

/***/ "./assets/app.js"
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ "./node_modules/leaflet/dist/leaflet.css");
/* harmony import */ var leaflet_draw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet-draw */ "./node_modules/leaflet-draw/dist/leaflet.draw.js");
/* harmony import */ var leaflet_draw__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(leaflet_draw__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var leaflet_draw_dist_leaflet_draw_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet-draw/dist/leaflet.draw.css */ "./node_modules/leaflet-draw/dist/leaflet.draw.css");
/* harmony import */ var leaflet_routing_machine__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! leaflet-routing-machine */ "./node_modules/leaflet-routing-machine/dist/leaflet-routing-machine.js");
/* harmony import */ var leaflet_routing_machine__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(leaflet_routing_machine__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var leaflet_routing_machine_dist_leaflet_routing_machine_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! leaflet-routing-machine/dist/leaflet-routing-machine.css */ "./node_modules/leaflet-routing-machine/dist/leaflet-routing-machine.css");
/* harmony import */ var leaflet_dist_images_marker_icon_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! leaflet/dist/images/marker-icon.png */ "./node_modules/leaflet/dist/images/marker-icon.png");
/* harmony import */ var leaflet_dist_images_marker_shadow_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! leaflet/dist/images/marker-shadow.png */ "./node_modules/leaflet/dist/images/marker-shadow.png");
/* harmony import */ var _Javascript_balade_map_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Javascript/balade-map.js */ "./assets/Javascript/balade-map.js");









delete (leaflet__WEBPACK_IMPORTED_MODULE_1___default().Icon).Default.prototype._getIconUrl;
leaflet__WEBPACK_IMPORTED_MODULE_1___default().Icon.Default.mergeOptions({
  iconUrl: leaflet_dist_images_marker_icon_png__WEBPACK_IMPORTED_MODULE_7__,
  shadowUrl: leaflet_dist_images_marker_shadow_png__WEBPACK_IMPORTED_MODULE_8__
});
window.L = (leaflet__WEBPACK_IMPORTED_MODULE_1___default());

if (document.getElementById('map')) {
  (0,_Javascript_balade_map_js__WEBPACK_IMPORTED_MODULE_9__.initBaladeMap)();
}

/***/ },

/***/ "./assets/styles/app.scss"
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_leaflet-draw_dist_leaflet_draw_js-node_modules_leaflet-routing-machine_d-8de0fe"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ckIsSUFBSTtNQUFFLE9BQU8vRSxJQUFJLENBQUNnRixLQUFLLENBQUNELEdBQUcsQ0FBQztJQUFFLENBQUMsQ0FBQyxPQUFPbkIsQ0FBQyxFQUFFO01BQUUsT0FBTyxJQUFJO0lBQUU7RUFDM0Q7QUFDRjtBQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFOMEI7QUFFSDtBQUNVO0FBRVo7QUFDc0I7QUFFWDtBQUNpQztBQUVMO0FBQ0k7QUFFakUsT0FBT3pHLHFEQUFNLENBQUNpSSxPQUFPLENBQUN0TCxTQUFTLENBQUN1TCxXQUFXO0FBQzNDbEksbURBQU0sQ0FBQ2lJLE9BQU8sQ0FBQ0UsWUFBWSxDQUFDO0VBQzFCQyxPQUFPLEVBQUVOLGdFQUFVO0VBQ25CTyxTQUFTLEVBQUVOLGtFQUFZQTtBQUN6QixDQUFDLENBQUM7QUFFRmxJLE1BQU0sQ0FBQ0csQ0FBQyxHQUFHQSxnREFBQztBQUUrQztBQUMzRCxJQUFJUyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRTtFQUNoQ25CLHdFQUFhLENBQUMsQ0FBQztBQUNuQixDOzs7Ozs7Ozs7OztBQ3pCQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9KYXZhc2NyaXB0L2JhbGFkZS1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBpbml0QmFsYWRlTWFwKCkge1xyXG4gIGNvbnN0IGNmZyA9IHdpbmRvdy5CQUxBREVfTUFQX0NPTkZJRyB8fCB7fTtcclxuXHJcbiAgLy8gLS0tLSBNQVAgU0VUVVAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGNvbnN0IG1hcCA9IEwubWFwKCdtYXAnKS5zZXRWaWV3KFs0OC44NTY2LCAyLjM1MjJdLCAxMyk7XHJcbiAgc2V0VGltZW91dCgoKSA9PiBtYXAuaW52YWxpZGF0ZVNpemUoKSwgMTAwKTtcclxuXHJcbiAgTC50aWxlTGF5ZXIoICdodHRwczovL3tzfS50aWxlLm9wZW5zdHJlZXRtYXAub3JnL3t6fS97eH0ve3l9LnBuZycsIHsgYXR0cmlidXRpb246ICcmY29weTsgT3BlblN0cmVldE1hcCBjb250cmlidXRvcnMnLCBtYXhab29tOiAxOSB9ICkuYWRkVG8obWFwKVxyXG5cclxuICAvLyAtLS0tIElOUFVUUyAoaGlkZGVuIFN5bWZvbnkgZmllbGRzKSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgY29uc3Qgcm91dGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWxhZGVfcm91dGVHZW9Kc29uJyk7XHJcbiAgY29uc3Qgd3BJbnB1dCAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWxhZGVfd2F5cG9pbnRzSnNvbicpO1xyXG4gIGNvbnN0IGRpc3RJbnB1dCAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFsYWRlX2Rpc3RhbmNlTWV0ZXJzJyk7XHJcbiAgY29uc3QgZHVySW5wdXQgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWxhZGVfZHVyYXRpb25TZWNvbmRzJyk7XHJcblxyXG4gIC8vIC0tLS0gVUkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBjb25zdCBidG5BZGQgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tYWRkJyk7XHJcbiAgY29uc3QgYnRuVW5kbyAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLXVuZG8nKTtcclxuICBjb25zdCBidG5DbG9zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tY2xvc2UnKTtcclxuICBjb25zdCBidG5DYWxjICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tY2FsYycpO1xyXG4gIGNvbnN0IGJ0bkNsZWFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1jbGVhcicpO1xyXG4gIGNvbnN0IGhpbnQgICAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAtaGludCcpO1xyXG4gIGNvbnN0IHN0YXRzQm94ICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb3V0ZS1zdGF0cycpO1xyXG4gIGNvbnN0IGRpc3RhbmNlRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm91dGUtZGlzdGFuY2UnKTtcclxuICBjb25zdCBkdXJhdGlvbkVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JvdXRlLWR1cmF0aW9uJyk7XHJcblxyXG4gIC8vIC0tLS0gU1RBVEUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBsZXQgcG9pbnRzICAgICAgID0gW107ICAvLyBBcnJheTxMYXRMbmc+XHJcbiAgbGV0IHBvaW50TWFya2VycyA9IFtdOyAgLy8gQXJyYXk8TWFya2VyPlxyXG4gIGxldCBwcmV2aWV3TGluZSAgPSBudWxsO1xyXG4gIGxldCByb3V0ZUxheWVyICAgPSBudWxsO1xyXG5cclxuICAvLyAtLS0tIEhFTFBFUlMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UobWV0ZXJzKSB7XHJcbiAgICBpZiAobWV0ZXJzID09IG51bGwpIHJldHVybiAn4oCUJztcclxuICAgIGlmIChtZXRlcnMgPCAxMDAwKSByZXR1cm4gYCR7TWF0aC5yb3VuZChtZXRlcnMpfSBtYDtcclxuICAgIHJldHVybiBgJHsobWV0ZXJzIC8gMTAwMCkudG9GaXhlZCgyKX0ga21gLnJlcGxhY2UoJy4nLCAnLCcpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZm9ybWF0RHVyYXRpb24oc2Vjb25kcykge1xyXG4gICAgaWYgKHNlY29uZHMgPT0gbnVsbCkgcmV0dXJuICfigJQnO1xyXG4gICAgY29uc3QgcyA9IE1hdGgucm91bmQoc2Vjb25kcyk7XHJcbiAgICBjb25zdCBoID0gTWF0aC5mbG9vcihzIC8gMzYwMCk7XHJcbiAgICBjb25zdCBtID0gTWF0aC5mbG9vcigocyAlIDM2MDApIC8gNjApO1xyXG4gICAgaWYgKGggPD0gMCkgcmV0dXJuIGAke219IG1pbmA7XHJcbiAgICByZXR1cm4gYCR7aH0gaCAke1N0cmluZyhtKS5wYWRTdGFydCgyLCAnMCcpfSBtaW5gO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0SGlkZGVuRGlzdGFuY2VEdXJhdGlvbihkaXN0YW5jZU1ldGVycywgZHVyYXRpb25TZWNvbmRzKSB7XHJcbiAgICBpZiAoZGlzdElucHV0KSBkaXN0SW5wdXQudmFsdWUgPSBkaXN0YW5jZU1ldGVycyA9PSBudWxsID8gJycgOiBTdHJpbmcoTWF0aC5yb3VuZChkaXN0YW5jZU1ldGVycykpO1xyXG4gICAgaWYgKGR1cklucHV0KSAgZHVySW5wdXQudmFsdWUgID0gZHVyYXRpb25TZWNvbmRzID09IG51bGwgPyAnJyA6IFN0cmluZyhNYXRoLnJvdW5kKGR1cmF0aW9uU2Vjb25kcykpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2F2ZVdheXBvaW50cygpIHtcclxuICAgIGlmICghd3BJbnB1dCkgcmV0dXJuO1xyXG4gICAgd3BJbnB1dC52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHBvaW50cy5tYXAocCA9PiBbcC5sYXQsIHAubG5nXSkpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2xlYXJTdGF0cygpIHtcclxuICAgIGlmIChzdGF0c0JveCkgICAgc3RhdHNCb3guc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIGlmIChkaXN0YW5jZUVsKSAgZGlzdGFuY2VFbC50ZXh0Q29udGVudCA9ICfigJQnO1xyXG4gICAgaWYgKGR1cmF0aW9uRWwpICBkdXJhdGlvbkVsLnRleHRDb250ZW50ID0gJ+KAlCc7XHJcbiAgICBzZXRIaWRkZW5EaXN0YW5jZUR1cmF0aW9uKG51bGwsIG51bGwpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2hvd1N0YXRzKGRpc3RhbmNlTWV0ZXJzLCBkdXJhdGlvblNlY29uZHMpIHtcclxuICAgIGlmIChzdGF0c0JveCkgICAgc3RhdHNCb3guc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtZmxleCc7XHJcbiAgICBpZiAoZGlzdGFuY2VFbCkgIGRpc3RhbmNlRWwudGV4dENvbnRlbnQgPSBmb3JtYXREaXN0YW5jZShkaXN0YW5jZU1ldGVycyk7XHJcbiAgICBpZiAoZHVyYXRpb25FbCkgIGR1cmF0aW9uRWwudGV4dENvbnRlbnQgPSBmb3JtYXREdXJhdGlvbihkdXJhdGlvblNlY29uZHMpO1xyXG4gICAgc2V0SGlkZGVuRGlzdGFuY2VEdXJhdGlvbihkaXN0YW5jZU1ldGVycywgZHVyYXRpb25TZWNvbmRzKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNsZWFyUm91dGVMYXllcigpIHtcclxuICAgIGlmIChyb3V0ZUxheWVyKSB7IG1hcC5yZW1vdmVMYXllcihyb3V0ZUxheWVyKTsgcm91dGVMYXllciA9IG51bGw7IH1cclxuICAgIGlmIChyb3V0ZUlucHV0KSByb3V0ZUlucHV0LnZhbHVlID0gJyc7XHJcbiAgICBjbGVhclN0YXRzKCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZWZyZXNoUHJldmlld0FuZFVJKCkge1xyXG4gICAgaWYgKHByZXZpZXdMaW5lKSB7IG1hcC5yZW1vdmVMYXllcihwcmV2aWV3TGluZSk7IHByZXZpZXdMaW5lID0gbnVsbDsgfVxyXG4gICAgaWYgKHBvaW50cy5sZW5ndGggPj0gMikge1xyXG4gICAgICBwcmV2aWV3TGluZSA9IEwucG9seWxpbmUocG9pbnRzLCB7IG9wYWNpdHk6IDAuNCB9KS5hZGRUbyhtYXApO1xyXG4gICAgfVxyXG4gICAgaWYgKGJ0bkNhbGMpIGJ0bkNhbGMuZGlzYWJsZWQgPSBwb2ludHMubGVuZ3RoIDwgMjtcclxuICAgIGlmIChoaW50KSB7XHJcbiAgICAgIGhpbnQudGV4dENvbnRlbnQgPSBwb2ludHMubGVuZ3RoIDwgMlxyXG4gICAgICAgID8gJ0NsaXF1ZSBzdXIgbGEgY2FydGUgcG91ciBham91dGVyIGRlcyBwb2ludHMgKG1pbiAyKS4nXHJcbiAgICAgICAgOiAnQWpvdXRlIGRlcyBwb2ludHMsIHB1aXMgY2xpcXVlIHN1ciBcIkNhbGN1bGVyXCIuIChGZXJtZSBsYSBib3VjbGUgc2kgdHUgdmV1eCByZXZlbmlyIGF1IGTDqXBhcnQpJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGFkZFBvaW50KGxhdGxuZykge1xyXG4gICAgcG9pbnRzLnB1c2gobGF0bG5nKTtcclxuICAgIGNvbnN0IG1hcmtlciA9IEwubWFya2VyKGxhdGxuZywgeyBkcmFnZ2FibGU6IHRydWUgfSkuYWRkVG8obWFwKTtcclxuICAgIG1hcmtlci5vbignZHJhZ2VuZCcsICgpID0+IHtcclxuICAgICAgY29uc3QgaWR4ID0gcG9pbnRNYXJrZXJzLmluZGV4T2YobWFya2VyKTtcclxuICAgICAgaWYgKGlkeCAhPT0gLTEpIHBvaW50c1tpZHhdID0gbWFya2VyLmdldExhdExuZygpO1xyXG4gICAgICBzYXZlV2F5cG9pbnRzKCk7XHJcbiAgICAgIGNsZWFyUm91dGVMYXllcigpO1xyXG4gICAgICByZWZyZXNoUHJldmlld0FuZFVJKCk7XHJcbiAgICB9KTtcclxuICAgIHBvaW50TWFya2Vycy5wdXNoKG1hcmtlcik7XHJcbiAgICBzYXZlV2F5cG9pbnRzKCk7XHJcbiAgICBjbGVhclJvdXRlTGF5ZXIoKTtcclxuICAgIHJlZnJlc2hQcmV2aWV3QW5kVUkoKTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0gQlVUVE9OUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBidG5BZGQ/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgYnRuQWRkLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgaWYgKGhpbnQpIGhpbnQudGV4dENvbnRlbnQgPSAnQ2xpcXVlIHN1ciBsYSBjYXJ0ZSBwb3VyIGFqb3V0ZXIgZGVzIHBvaW50cy4nO1xyXG4gIH0pO1xyXG5cclxuICBidG5VbmRvPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGlmICghcG9pbnRzLmxlbmd0aCkgcmV0dXJuO1xyXG4gICAgcG9pbnRzLnBvcCgpO1xyXG4gICAgY29uc3QgbSA9IHBvaW50TWFya2Vycy5wb3AoKTtcclxuICAgIGlmIChtKSBtYXAucmVtb3ZlTGF5ZXIobSk7XHJcbiAgICBzYXZlV2F5cG9pbnRzKCk7XHJcbiAgICBjbGVhclJvdXRlTGF5ZXIoKTtcclxuICAgIHJlZnJlc2hQcmV2aWV3QW5kVUkoKTtcclxuICB9KTtcclxuXHJcbiAgYnRuQ2xvc2U/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgaWYgKHBvaW50cy5sZW5ndGggPCAyKSByZXR1cm47XHJcbiAgICBjb25zdCBmaXJzdCA9IHBvaW50c1swXTtcclxuICAgIGNvbnN0IGxhc3QgID0gcG9pbnRzW3BvaW50cy5sZW5ndGggLSAxXTtcclxuICAgIGNvbnN0IHNhbWUgID0gTWF0aC5hYnMoZmlyc3QubGF0IC0gbGFzdC5sYXQpIDwgMWUtNiAmJiBNYXRoLmFicyhmaXJzdC5sbmcgLSBsYXN0LmxuZykgPCAxZS02O1xyXG4gICAgaWYgKCFzYW1lKSBhZGRQb2ludChMLmxhdExuZyhmaXJzdC5sYXQsIGZpcnN0LmxuZykpO1xyXG4gIH0pO1xyXG5cclxuICBidG5DbGVhcj8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBwb2ludHMgPSBbXTtcclxuICAgIHBvaW50TWFya2Vycy5mb3JFYWNoKG0gPT4gbWFwLnJlbW92ZUxheWVyKG0pKTtcclxuICAgIHBvaW50TWFya2VycyA9IFtdO1xyXG4gICAgaWYgKHByZXZpZXdMaW5lKSB7IG1hcC5yZW1vdmVMYXllcihwcmV2aWV3TGluZSk7IHByZXZpZXdMaW5lID0gbnVsbDsgfVxyXG4gICAgaWYgKHJvdXRlTGF5ZXIpICB7IG1hcC5yZW1vdmVMYXllcihyb3V0ZUxheWVyKTsgIHJvdXRlTGF5ZXIgID0gbnVsbDsgfVxyXG4gICAgaWYgKHJvdXRlSW5wdXQpIHJvdXRlSW5wdXQudmFsdWUgPSAnJztcclxuICAgIGlmICh3cElucHV0KSAgICB3cElucHV0LnZhbHVlICAgID0gJyc7XHJcbiAgICBjbGVhclN0YXRzKCk7XHJcbiAgICByZWZyZXNoUHJldmlld0FuZFVJKCk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIC0tLS0gTUFQIENMSUNLIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBtYXAub24oJ2NsaWNrJywgKGUpID0+IGFkZFBvaW50KGUubGF0bG5nKSk7XHJcblxyXG4gIC8vIC0tLS0gQ0FMQ1VMQVRFIE9SUyBST1VURSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBidG5DYWxjPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcclxuICAgIGlmIChwb2ludHMubGVuZ3RoIDwgMikgcmV0dXJuO1xyXG4gICAgaWYgKGhpbnQpIGhpbnQudGV4dENvbnRlbnQgPSBcIkNhbGN1bCBkZSBsJ2l0aW7DqXJhaXJlIHJhbmRv4oCmXCI7XHJcbiAgICBzYXZlV2F5cG9pbnRzKCk7XHJcblxyXG4gICAgY29uc3QgcmVzICA9IGF3YWl0IGZldGNoKCcvYXBpL2hpa2luZy1yb3V0ZScsIHtcclxuICAgICAgbWV0aG9kOiAgJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgYm9keTogICAgSlNPTi5zdHJpbmdpZnkoeyBwb2ludHM6IHBvaW50cy5tYXAocCA9PiBbcC5sYXQsIHAubG5nXSkgfSlcclxuICAgIH0pO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgaWYgKCFyZXMub2spIHtcclxuICAgICAgY29uc29sZS5lcnJvcihkYXRhKTtcclxuICAgICAgaWYgKGhpbnQpIGhpbnQudGV4dENvbnRlbnQgPSAnRXJyZXVyIE9SUyAodm9pciBjb25zb2xlKS4nO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJvdXRlSW5wdXQpIHJvdXRlSW5wdXQudmFsdWUgPSBKU09OLnN0cmluZ2lmeShkYXRhLmdlb2pzb24pO1xyXG5cclxuICAgIGlmIChyb3V0ZUxheWVyKSBtYXAucmVtb3ZlTGF5ZXIocm91dGVMYXllcik7XHJcbiAgICByb3V0ZUxheWVyID0gTC5nZW9KU09OKGRhdGEuZ2VvanNvbiwge1xyXG4gICAgICBzdHlsZTogKCkgPT4gKHsgd2VpZ2h0OiA2LCBvcGFjaXR5OiAwLjkwIH0pXHJcbiAgICB9KS5hZGRUbyhtYXApO1xyXG5cclxuICAgIHRyeSB7IG1hcC5maXRCb3VuZHMocm91dGVMYXllci5nZXRCb3VuZHMoKSwgeyBwYWRkaW5nOiBbMjAsIDIwXSB9KTsgfSBjYXRjaCAoXykge31cclxuXHJcbiAgICAvLyBTdXBwb3J0ZSBsZXMgZGV1eCBmb3JtYXRzIGRlIHLDqXBvbnNlIEFQSVxyXG4gICAgY29uc3QgZGlzdCA9IGRhdGEuZ2VvanNvbj8ucHJvcGVydGllcz8uc3VtbWFyeT8uZGlzdGFuY2UgPz8gZGF0YS5kaXN0YW5jZSA/PyBudWxsO1xyXG4gICAgY29uc3QgZHVyICA9IGRhdGEuZ2VvanNvbj8ucHJvcGVydGllcz8uc3VtbWFyeT8uZHVyYXRpb24gPz8gZGF0YS5kdXJhdGlvbiA/PyBudWxsO1xyXG4gICAgc2hvd1N0YXRzKGRpc3QsIGR1cik7XHJcblxyXG4gICAgaWYgKGhpbnQpIGhpbnQudGV4dENvbnRlbnQgPSAnSXRpbsOpcmFpcmUgY2FsY3Vsw6kg4pyFIETDqXBsYWNlIGxlcyBwb2ludHMgcHVpcyByZWNhbGN1bGUgc2kgYmVzb2luLic7XHJcbiAgfSk7XHJcblxyXG4gIC8vIC0tLS0gSU5JVCAvIFJFU1RPUkUgU1RBVEUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAvLyAxKSBXYXlwb2ludHMgc2F1dmVnYXJkw6lzIChtb2RlIMOpZGl0aW9uIG91IHJldG91ciBhcnJpw6hyZSBmb3JtdWxhaXJlKVxyXG4gIGNvbnN0IHNhdmVkV3AgPSBjZmcuaW5pdGlhbFdheXBvaW50c1xyXG4gICAgPz8gKHdwSW5wdXQ/LnZhbHVlID8gdHJ5UGFyc2Uod3BJbnB1dC52YWx1ZSkgOiBudWxsKTtcclxuXHJcbiAgaWYgKEFycmF5LmlzQXJyYXkoc2F2ZWRXcCkgJiYgc2F2ZWRXcC5sZW5ndGgpIHtcclxuICAgIHNhdmVkV3AuZm9yRWFjaChwID0+IHtcclxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocCkgJiYgcC5sZW5ndGggPT09IDIpIGFkZFBvaW50KEwubGF0TG5nKHBbMF0sIHBbMV0pKTtcclxuICAgIH0pO1xyXG4gICAgaWYgKHBvaW50cy5sZW5ndGgpIG1hcC5maXRCb3VuZHMoTC5sYXRMbmdCb3VuZHMocG9pbnRzKSwgeyBwYWRkaW5nOiBbMjAsIDIwXSB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmVmcmVzaFByZXZpZXdBbmRVSSgpO1xyXG4gIH1cclxuXHJcbiAgLy8gMikgUm91dGUgR2VvSlNPTiBkw6lqw6AgZW5yZWdpc3Ryw6llXHJcbiAgY29uc3Qgc2F2ZWRHZW8gPSBjZmcuaW5pdGlhbFJvdXRlR2VvSnNvblxyXG4gICAgPz8gKHJvdXRlSW5wdXQ/LnZhbHVlID8gdHJ5UGFyc2Uocm91dGVJbnB1dC52YWx1ZSkgOiBudWxsKTtcclxuXHJcbiAgaWYgKHNhdmVkR2VvKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICByb3V0ZUxheWVyID0gTC5nZW9KU09OKHNhdmVkR2VvLCB7XHJcbiAgICAgICAgc3R5bGU6ICgpID0+ICh7IHdlaWdodDogNiwgb3BhY2l0eTogMC45MCB9KVxyXG4gICAgICB9KS5hZGRUbyhtYXApO1xyXG4gICAgICBpZiAoIXBvaW50cy5sZW5ndGgpIG1hcC5maXRCb3VuZHMocm91dGVMYXllci5nZXRCb3VuZHMoKSwgeyBwYWRkaW5nOiBbMjAsIDIwXSB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHsgY29uc29sZS53YXJuKCdHZW9KU09OIGludmFsaWRlIGRhbnMgcm91dGVHZW9Kc29uJyk7IH1cclxuICB9XHJcblxyXG4gIC8vIDMpIERpc3RhbmNlIC8gZHVyw6llIGTDqWrDoCBlbiBiYXNlIChtb2RlIMOpZGl0aW9uKVxyXG4gIGNvbnN0IGV4aXN0aW5nRGlzdCA9IGNmZy5pbml0aWFsRGlzdGFuY2UgPz8gKGRpc3RJbnB1dD8udmFsdWUgIT09ICcnID8gcGFyc2VGbG9hdChkaXN0SW5wdXQudmFsdWUpIDogbnVsbCk7XHJcbiAgY29uc3QgZXhpc3RpbmdEdXIgID0gY2ZnLmluaXRpYWxEdXJhdGlvbiA/PyAoZHVySW5wdXQ/LnZhbHVlICAhPT0gJycgPyBwYXJzZUZsb2F0KGR1cklucHV0LnZhbHVlKSAgOiBudWxsKTtcclxuICBpZiAoZXhpc3RpbmdEaXN0ICE9IG51bGwgfHwgZXhpc3RpbmdEdXIgIT0gbnVsbCkgc2hvd1N0YXRzKGV4aXN0aW5nRGlzdCwgZXhpc3RpbmdEdXIpO1xyXG5cclxuICAvLyAtLS0tIFVUSUwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgZnVuY3Rpb24gdHJ5UGFyc2Uoc3RyKSB7XHJcbiAgICB0cnkgeyByZXR1cm4gSlNPTi5wYXJzZShzdHIpOyB9IGNhdGNoIChfKSB7IHJldHVybiBudWxsOyB9XHJcbiAgfVxyXG59OyIsImltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xyXG5cclxuaW1wb3J0IEwgZnJvbSAnbGVhZmxldCc7XHJcbmltcG9ydCAnbGVhZmxldC9kaXN0L2xlYWZsZXQuY3NzJztcclxuXHJcbmltcG9ydCAnbGVhZmxldC1kcmF3JztcclxuaW1wb3J0ICdsZWFmbGV0LWRyYXcvZGlzdC9sZWFmbGV0LmRyYXcuY3NzJztcclxuXHJcbmltcG9ydCAnbGVhZmxldC1yb3V0aW5nLW1hY2hpbmUnO1xyXG5pbXBvcnQgJ2xlYWZsZXQtcm91dGluZy1tYWNoaW5lL2Rpc3QvbGVhZmxldC1yb3V0aW5nLW1hY2hpbmUuY3NzJztcclxuXHJcbmltcG9ydCBtYXJrZXJJY29uIGZyb20gJ2xlYWZsZXQvZGlzdC9pbWFnZXMvbWFya2VyLWljb24ucG5nJztcclxuaW1wb3J0IG1hcmtlclNoYWRvdyBmcm9tICdsZWFmbGV0L2Rpc3QvaW1hZ2VzL21hcmtlci1zaGFkb3cucG5nJztcclxuXHJcbmRlbGV0ZSBMLkljb24uRGVmYXVsdC5wcm90b3R5cGUuX2dldEljb25Vcmw7XHJcbkwuSWNvbi5EZWZhdWx0Lm1lcmdlT3B0aW9ucyh7XHJcbiAgaWNvblVybDogbWFya2VySWNvbixcclxuICBzaGFkb3dVcmw6IG1hcmtlclNoYWRvdyxcclxufSk7XHJcblxyXG53aW5kb3cuTCA9IEw7XHJcblxyXG5pbXBvcnQgeyBpbml0QmFsYWRlTWFwIH0gZnJvbSAnLi9KYXZhc2NyaXB0L2JhbGFkZS1tYXAuanMnO1xyXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcpKSB7XHJcbiAgICBpbml0QmFsYWRlTWFwKCk7XHJcbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiZSIsInQiLCJyIiwiU3ltYm9sIiwibiIsIml0ZXJhdG9yIiwibyIsInRvU3RyaW5nVGFnIiwiaSIsImMiLCJwcm90b3R5cGUiLCJHZW5lcmF0b3IiLCJ1IiwiT2JqZWN0IiwiY3JlYXRlIiwiX3JlZ2VuZXJhdG9yRGVmaW5lMiIsImYiLCJwIiwieSIsIkciLCJ2IiwiYSIsImQiLCJiaW5kIiwibGVuZ3RoIiwibCIsIlR5cGVFcnJvciIsImNhbGwiLCJkb25lIiwidmFsdWUiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiZ2V0UHJvdG90eXBlT2YiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImRpc3BsYXlOYW1lIiwiX3JlZ2VuZXJhdG9yIiwidyIsIm0iLCJkZWZpbmVQcm9wZXJ0eSIsIl9yZWdlbmVyYXRvckRlZmluZSIsIl9pbnZva2UiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3VtZW50cyIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJpbml0QmFsYWRlTWFwIiwiX2NmZyRpbml0aWFsV2F5cG9pbnRzIiwiX2NmZyRpbml0aWFsUm91dGVHZW9KIiwiX2NmZyRpbml0aWFsRGlzdGFuY2UiLCJfY2ZnJGluaXRpYWxEdXJhdGlvbiIsImNmZyIsIndpbmRvdyIsIkJBTEFERV9NQVBfQ09ORklHIiwibWFwIiwiTCIsInNldFZpZXciLCJzZXRUaW1lb3V0IiwiaW52YWxpZGF0ZVNpemUiLCJ0aWxlTGF5ZXIiLCJhdHRyaWJ1dGlvbiIsIm1heFpvb20iLCJhZGRUbyIsInJvdXRlSW5wdXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwid3BJbnB1dCIsImRpc3RJbnB1dCIsImR1cklucHV0IiwiYnRuQWRkIiwiYnRuVW5kbyIsImJ0bkNsb3NlIiwiYnRuQ2FsYyIsImJ0bkNsZWFyIiwiaGludCIsInN0YXRzQm94IiwiZGlzdGFuY2VFbCIsImR1cmF0aW9uRWwiLCJwb2ludHMiLCJwb2ludE1hcmtlcnMiLCJwcmV2aWV3TGluZSIsInJvdXRlTGF5ZXIiLCJmb3JtYXREaXN0YW5jZSIsIm1ldGVycyIsImNvbmNhdCIsIk1hdGgiLCJyb3VuZCIsInRvRml4ZWQiLCJyZXBsYWNlIiwiZm9ybWF0RHVyYXRpb24iLCJzZWNvbmRzIiwicyIsImgiLCJmbG9vciIsIlN0cmluZyIsInBhZFN0YXJ0Iiwic2V0SGlkZGVuRGlzdGFuY2VEdXJhdGlvbiIsImRpc3RhbmNlTWV0ZXJzIiwiZHVyYXRpb25TZWNvbmRzIiwic2F2ZVdheXBvaW50cyIsIkpTT04iLCJzdHJpbmdpZnkiLCJsYXQiLCJsbmciLCJjbGVhclN0YXRzIiwic3R5bGUiLCJkaXNwbGF5IiwidGV4dENvbnRlbnQiLCJzaG93U3RhdHMiLCJjbGVhclJvdXRlTGF5ZXIiLCJyZW1vdmVMYXllciIsInJlZnJlc2hQcmV2aWV3QW5kVUkiLCJwb2x5bGluZSIsIm9wYWNpdHkiLCJkaXNhYmxlZCIsImFkZFBvaW50IiwibGF0bG5nIiwicHVzaCIsIm1hcmtlciIsImRyYWdnYWJsZSIsIm9uIiwiaWR4IiwiaW5kZXhPZiIsImdldExhdExuZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJwb3AiLCJmaXJzdCIsImxhc3QiLCJzYW1lIiwiYWJzIiwibGF0TG5nIiwiZm9yRWFjaCIsIl9jYWxsZWUiLCJfcmVmMiIsIl9kYXRhJGdlb2pzb24kcHJvcGVydCIsIl9kYXRhJGdlb2pzb24iLCJfcmVmMyIsIl9kYXRhJGdlb2pzb24kcHJvcGVydDIiLCJfZGF0YSRnZW9qc29uMiIsInJlcyIsImRhdGEiLCJkaXN0IiwiZHVyIiwiX2NvbnRleHQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwianNvbiIsIm9rIiwiY29uc29sZSIsImVycm9yIiwiZ2VvanNvbiIsImdlb0pTT04iLCJ3ZWlnaHQiLCJmaXRCb3VuZHMiLCJnZXRCb3VuZHMiLCJwYWRkaW5nIiwiXyIsInByb3BlcnRpZXMiLCJzdW1tYXJ5IiwiZGlzdGFuY2UiLCJkdXJhdGlvbiIsInNhdmVkV3AiLCJpbml0aWFsV2F5cG9pbnRzIiwidHJ5UGFyc2UiLCJBcnJheSIsImlzQXJyYXkiLCJsYXRMbmdCb3VuZHMiLCJzYXZlZEdlbyIsImluaXRpYWxSb3V0ZUdlb0pzb24iLCJ3YXJuIiwiZXhpc3RpbmdEaXN0IiwiaW5pdGlhbERpc3RhbmNlIiwicGFyc2VGbG9hdCIsImV4aXN0aW5nRHVyIiwiaW5pdGlhbER1cmF0aW9uIiwic3RyIiwicGFyc2UiLCJtYXJrZXJJY29uIiwibWFya2VyU2hhZG93IiwiSWNvbiIsIkRlZmF1bHQiLCJfZ2V0SWNvblVybCIsIm1lcmdlT3B0aW9ucyIsImljb25VcmwiLCJzaGFkb3dVcmwiXSwic291cmNlUm9vdCI6IiJ9