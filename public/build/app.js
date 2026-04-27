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
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var core_js_modules_es_string_pad_start_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! core-js/modules/es.string.pad-start.js */ "./node_modules/core-js/modules/es.string.pad-start.js");
/* harmony import */ var core_js_modules_es_string_pad_start_js__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_pad_start_js__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! core-js/modules/esnext.iterator.filter.js */ "./node_modules/core-js/modules/esnext.iterator.filter.js");
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_45__);
/* harmony import */ var core_js_modules_esnext_iterator_reduce_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! core-js/modules/esnext.iterator.reduce.js */ "./node_modules/core-js/modules/esnext.iterator.reduce.js");
/* harmony import */ var core_js_modules_esnext_iterator_reduce_js__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_reduce_js__WEBPACK_IMPORTED_MODULE_46__);
/* harmony import */ var core_js_modules_esnext_json_parse_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! core-js/modules/esnext.json.parse.js */ "./node_modules/core-js/modules/esnext.json.parse.js");
/* harmony import */ var core_js_modules_esnext_json_parse_js__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_json_parse_js__WEBPACK_IMPORTED_MODULE_47__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_48__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_49___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_49__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_50___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_50__);
/* harmony import */ var leaflet_control_geocoder__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! leaflet-control-geocoder */ "./node_modules/leaflet-control-geocoder/dist/Control.Geocoder.modern.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }



















































function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }

function initBaladeMap() {
  var _cfg$defaultView, _cfg$orsProfile, _cfg$initialWaypoints, _wpInput$value, _cfg$initialRouteGeoJ, _routeInput$value, _cfg$initialDistance, _cfg$initialDuration;
  var cfg = window.BALADE_MAP_CONFIG || {};

  // ── Carte ──────────────────────────────────────────────────────────────
  var _ref = (_cfg$defaultView = cfg.defaultView) !== null && _cfg$defaultView !== void 0 ? _cfg$defaultView : [44.8378, -0.5792, 13],
    _ref2 = _slicedToArray(_ref, 3),
    defLat = _ref2[0],
    defLng = _ref2[1],
    defZoom = _ref2[2];
  var map = L.map('map', {
    doubleClickZoom: false
  }).setView([defLat, defLng], defZoom);
  setTimeout(function () {
    return map.invalidateSize();
  }, 150);
  L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
    maxZoom: 19
  }).addTo(map);

  // ── Recherche géocodage ────────────────────────────────────────────────
  leaflet_control_geocoder__WEBPACK_IMPORTED_MODULE_51__.geocoder({
    geocoder: leaflet_control_geocoder__WEBPACK_IMPORTED_MODULE_51__.geocoders.nominatim(),
    defaultMarkGeocode: false,
    placeholder: 'Rechercher un lieu…',
    errorMessage: 'Aucun résultat.',
    showResultIcons: false,
    collapsed: true
  }).on('markgeocode', function (e) {
    var _e$geocode = e.geocode,
      center = _e$geocode.center,
      bbox = _e$geocode.bbox;
    map.fitBounds(bbox !== null && bbox !== void 0 ? bbox : L.latLngBounds([center, center]).pad(0.05));
  }).addTo(map);
  var wpInput = document.getElementById('balade_waypointsJson');
  var routeInput = document.getElementById('balade_routeGeoJson');
  var distInput = document.getElementById('balade_distanceMeters');
  var durInput = document.getElementById('balade_durationSeconds');
  var btnUndo = document.getElementById('btn-undo');
  var btnClose = document.getElementById('btn-close');
  var btnClear = document.getElementById('btn-clear');
  var btnFreeToggle = document.getElementById('btn-free-toggle');
  var pillEl = document.getElementById('free-toggle-pill');
  var freeDescEl = document.getElementById('free-toggle-desc');
  var hintEl = document.getElementById('map-hint');
  var statusBarEl = document.getElementById('map-status');
  var statsBox = document.getElementById('route-stats');
  var distanceEl = document.getElementById('route-distance');
  var durationEl = document.getElementById('route-duration');
  var segListEl = document.getElementById('seg-list');
  var orsProfile = (_cfg$orsProfile = cfg.orsProfile) !== null && _cfg$orsProfile !== void 0 ? _cfg$orsProfile : 'foot-walking';
  var freeMode = false;
  var cursor = null;
  var segments = [];
  var startMarker = null;
  var cursorMk = null;
  var previewLine = null;
  var orsSeq = 0;
  var restorationLayer = null;

  // ── Icônes ─────────────────────────────────────────────────────────────
  function makePin(bg, emoji) {
    return L.divIcon({
      html: "<div style=\"background:".concat(bg, ";width:32px;height:32px;border-radius:50% 50% 50% 0;\n        transform:rotate(-45deg);border:3px solid white;box-shadow:0 2px 8px rgba(0,0,0,.28);\n        display:flex;align-items:center;justify-content:center\">\n        <span style=\"transform:rotate(45deg);font-size:14px\">").concat(emoji, "</span></div>"),
      className: '',
      iconSize: [32, 32],
      iconAnchor: [16, 32]
    });
  }
  var IC = {
    start: makePin('#4a7c59', '🏠'),
    cursor: makePin('#e87040', '🐾')
  };
  map.on('click', function (e) {
    if (!cursor) {
      cursor = e.latlng;
      startMarker = L.marker(cursor, {
        icon: IC.start
      }).addTo(map);
      setStatus(freeMode ? 'free' : 'ors');
    } else {
      if (freeMode) addFreeSeg(cursor, e.latlng);else addORSSeg(cursor, e.latlng);
    }
    updateHint();
    renderSegList();
    persist();
  });
  map.on('mousemove', function (e) {
    if (!cursor) return;
    if (previewLine) {
      map.removeLayer(previewLine);
      previewLine = null;
    }
    previewLine = L.polyline([cursor, e.latlng], {
      color: freeMode ? '#7b5ea7' : '#4a7c59',
      weight: 3,
      opacity: .4,
      dashArray: '5 8',
      lineCap: 'round'
    }).addTo(map);
  });
  function addFreeSeg(from, to) {
    if (restorationLayer) {
      restorationLayer.clearLayers();
      restorationLayer.remove();
      restorationLayer = null;
    }
    var pts = [from, to];
    var layers = drawPoly(pts, 'free');
    var distM = from.distanceTo(to);
    segments.push({
      type: 'free',
      from: from,
      to: to,
      points: pts,
      layers: layers,
      distanceMeters: distM,
      durationSeconds: distM / 1000 / 4 * 3600
    });
    moveCursor(to);
    updateStats();
    renderSegList();
    persist();
  }
  function addORSSeg(_x, _x2) {
    return _addORSSeg.apply(this, arguments);
  }
  function _addORSSeg() {
    _addORSSeg = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(from, to) {
      var seq, _data$geojson$geometr, _data$geojson, _data$distance, _data$duration, res, data, coords, pts, distM, durS, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            if (restorationLayer) {
              restorationLayer.clearLayers();
              restorationLayer.remove();
              restorationLayer = null;
            }
            seq = ++orsSeq;
            setStatus('load');
            _context.p = 1;
            _context.n = 2;
            return fetch('/api/hiking-route', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                points: [[from.lat, from.lng], [to.lat, to.lng]],
                profile: orsProfile
              })
            });
          case 2:
            res = _context.v;
            if (!(seq !== orsSeq)) {
              _context.n = 3;
              break;
            }
            return _context.a(2);
          case 3:
            _context.n = 4;
            return res.json();
          case 4:
            data = _context.v;
            if (res.ok) {
              _context.n = 5;
              break;
            }
            console.error('[ORS]', data);
            setStatus(freeMode ? 'free' : 'ors');
            setHint('⚠️ Erreur ORS — vérifiez la console.');
            return _context.a(2);
          case 5:
            coords = (_data$geojson$geometr = (_data$geojson = data.geojson) === null || _data$geojson === void 0 || (_data$geojson = _data$geojson.geometry) === null || _data$geojson === void 0 ? void 0 : _data$geojson.coordinates) !== null && _data$geojson$geometr !== void 0 ? _data$geojson$geometr : [];
            if (coords.length) {
              _context.n = 6;
              break;
            }
            setStatus(freeMode ? 'free' : 'ors');
            setHint('⚠️ ORS n\'a retourné aucun tracé.');
            return _context.a(2);
          case 6:
            pts = coords.map(function (c) {
              return L.latLng(c[1], c[0]);
            });
            distM = (_data$distance = data.distance) !== null && _data$distance !== void 0 ? _data$distance : from.distanceTo(to);
            durS = (_data$duration = data.duration) !== null && _data$duration !== void 0 ? _data$duration : distM / 1000 / 4 * 3600;
            segments.push({
              type: 'ors',
              from: from,
              to: to,
              points: pts,
              layers: drawPoly(pts, 'ors'),
              distanceMeters: distM,
              durationSeconds: durS
            });
            moveCursor(to);
            updateStats();
            renderSegList();
            setStatus(freeMode ? 'free' : 'ors');
            updateHint();
            persist();
            _context.n = 9;
            break;
          case 7:
            _context.p = 7;
            _t = _context.v;
            if (!(seq !== orsSeq)) {
              _context.n = 8;
              break;
            }
            return _context.a(2);
          case 8:
            console.error('[ORS]', _t);
            setStatus(freeMode ? 'free' : 'ors');
            setHint('⚠️ Impossible de joindre /api/hiking-route.');
          case 9:
            return _context.a(2);
        }
      }, _callee, null, [[1, 7]]);
    }));
    return _addORSSeg.apply(this, arguments);
  }
  function drawPoly(pts, type) {
    var color = type === 'ors' ? '#4a7c59' : '#7b5ea7';
    var shadow = L.polyline(pts, {
      color: '#3d2b1f',
      weight: 9,
      opacity: .07
    }).addTo(map);
    var line = L.polyline(pts, _objectSpread({
      color: color,
      weight: 5,
      opacity: .9,
      lineCap: 'round',
      lineJoin: 'round'
    }, type === 'free' ? {
      dashArray: '8 6'
    } : {})).addTo(map);
    return [shadow, line];
  }
  function removeLayers(layers) {
    layers.forEach(function (l) {
      return map.removeLayer(l);
    });
  }
  function moveCursor(ll) {
    cursor = ll;
    if (cursorMk) map.removeLayer(cursorMk);
    cursorMk = L.marker(ll, {
      icon: IC.cursor
    }).addTo(map);
  }
  function closeLoop() {
    if (!cursor || !segments.length) return;
    var first = segments[0].from;
    var same = Math.abs(cursor.lat - first.lat) < 1e-6 && Math.abs(cursor.lng - first.lng) < 1e-6;
    if (same) return;
    if (freeMode) addFreeSeg(cursor, first);else addORSSeg(cursor, first);
  }
  function undoLast() {
    if (previewLine) {
      map.removeLayer(previewLine);
      previewLine = null;
    }
    if (segments.length) {
      var seg = segments.pop();
      removeLayers(seg.layers);
      cursor = seg.from;
      if (cursorMk) {
        map.removeLayer(cursorMk);
        cursorMk = null;
      }
      if (segments.length === 0) {
        if (startMarker) map.removeLayer(startMarker);
        startMarker = L.marker(cursor, {
          icon: IC.start
        }).addTo(map);
      } else {
        cursorMk = L.marker(cursor, {
          icon: IC.cursor
        }).addTo(map);
      }
    } else if (cursor) {
      if (startMarker) {
        map.removeLayer(startMarker);
        startMarker = null;
      }
      if (cursorMk) {
        map.removeLayer(cursorMk);
        cursorMk = null;
      }
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
      restorationLayer.eachLayer(function (l) {
        return map.removeLayer(l);
      });
      restorationLayer.clearLayers();
      map.removeLayer(restorationLayer);
      restorationLayer = null;
    }
    segments.forEach(function (s) {
      return removeLayers(s.layers);
    });
    segments = [];
    if (startMarker) {
      map.removeLayer(startMarker);
      startMarker = null;
    }
    if (cursorMk) {
      map.removeLayer(cursorMk);
      cursorMk = null;
    }
    if (previewLine) {
      map.removeLayer(previewLine);
      previewLine = null;
    }
    cursor = null;
    map.eachLayer(function (l) {
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
    btnFreeToggle === null || btnFreeToggle === void 0 || btnFreeToggle.classList.toggle('on', freeMode);
    pillEl === null || pillEl === void 0 || pillEl.classList.toggle('on', freeMode);
    if (freeDescEl) freeDescEl.textContent = 'Libre';
    map.getContainer().style.cursor = freeMode ? 'crosshair' : '';
    if (cursor) setStatus(freeMode ? 'free' : 'ors');
    updateHint();
  }
  function setProfile(p) {
    orsProfile = p;
    document.querySelectorAll('[data-ors-profile]').forEach(function (el) {
      return el.classList.toggle('active', el.dataset.orsProfile === p);
    });
  }
  function persist() {
    var wps = [];
    if (cursor || segments.length) {
      if (segments.length) {
        segments.forEach(function (s) {
          return wps.push([s.from.lat, s.from.lng, s.type]);
        });
        wps.push([cursor.lat, cursor.lng, freeMode ? 'free' : 'ors']);
      } else if (cursor) {
        wps.push([cursor.lat, cursor.lng, freeMode ? 'free' : 'ors']);
      }
    }
    if (wpInput) wpInput.value = JSON.stringify(wps);
    if (segments.length) {
      var allCoords = [];
      segments.forEach(function (s) {
        var pts = s.points.map(function (p) {
          return [p.lng, p.lat];
        });
        allCoords.push.apply(allCoords, _toConsumableArray(allCoords.length ? pts.slice(1) : pts));
      });
      var totalDist = segments.reduce(function (a, s) {
        var _s$distanceMeters;
        return a + ((_s$distanceMeters = s.distanceMeters) !== null && _s$distanceMeters !== void 0 ? _s$distanceMeters : 0);
      }, 0);
      var totalDur = segments.reduce(function (a, s) {
        var _s$durationSeconds;
        return a + ((_s$durationSeconds = s.durationSeconds) !== null && _s$durationSeconds !== void 0 ? _s$durationSeconds : 0);
      }, 0);
      if (routeInput) routeInput.value = JSON.stringify({
        type: 'FeatureCollection',
        features: [{
          type: 'Feature',
          geometry: {
            type: 'LineString',
            coordinates: allCoords
          },
          properties: {
            summary: {
              distance: totalDist / 1000,
              duration: totalDur
            }
          }
        }]
      });
      if (distInput) distInput.value = String(Math.round(totalDist));
      if (durInput) durInput.value = String(Math.round(totalDur));
    } else {
      if (routeInput) routeInput.value = '';
      if (distInput) distInput.value = '';
      if (durInput) durInput.value = '';
    }
  }
  function updateStats() {
    if (!segments.length) {
      if (statsBox) statsBox.style.display = 'none';
      if (distanceEl) distanceEl.textContent = '—';
      if (durationEl) durationEl.textContent = '—';
      return;
    }
    var totalDist = segments.reduce(function (a, s) {
      var _s$distanceMeters2;
      return a + ((_s$distanceMeters2 = s.distanceMeters) !== null && _s$distanceMeters2 !== void 0 ? _s$distanceMeters2 : 0);
    }, 0);
    var totalDur = segments.reduce(function (a, s) {
      var _s$durationSeconds2;
      return a + ((_s$durationSeconds2 = s.durationSeconds) !== null && _s$durationSeconds2 !== void 0 ? _s$durationSeconds2 : 0);
    }, 0);
    if (statsBox) statsBox.style.display = 'inline-flex';
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
    segments.forEach(function (s, i) {
      var isORS = s.type === 'ors';
      var li = document.createElement('li');
      li.className = "seg-item ".concat(isORS ? 'seg-ors' : 'seg-free');
      li.innerHTML = "\n        <span class=\"seg-dot ".concat(isORS ? 'seg-dot-ors' : 'seg-dot-free', "\"></span>\n        <span class=\"seg-label\">Segment ").concat(i + 1, " \xB7 ").concat(fmtDist(s.distanceMeters), "</span>\n        <span class=\"seg-badge ").concat(isORS ? 'seg-badge-ors' : 'seg-badge-free', "\">").concat(isORS ? 'ORS' : 'Libre', "</span>\n      ");
      segListEl.appendChild(li);
    });
  }
  function updateHint() {
    if (!hintEl) return;
    if (!cursor) hintEl.textContent = 'Clique sur la carte pour poser le premier point.';else if (freeMode) hintEl.textContent = 'Mode libre — chaque clic trace une ligne directe.';else hintEl.textContent = 'Clique pour ajouter un point — ORS calcule le chemin.';
  }
  function setHint(msg) {
    if (hintEl) hintEl.textContent = msg;
  }
  function setStatus(type) {
    if (!statusBarEl) return;
    statusBarEl.className = 'map-status';
    statusBarEl.hidden = false;
    if (type === 'hide') {
      statusBarEl.hidden = true;
      return;
    }
    var cls = {
      load: 'map-status--load',
      ors: 'map-status--ors',
      free: 'map-status--free'
    };
    var txt = {
      load: '<span class="map-status__spin"></span>Calcul en cours…',
      ors: '<span class="map-status__dot"></span>Mode Calcul actif',
      free: '<span class="map-status__dot"></span>Mode Libre actif'
    };
    statusBarEl.classList.add(cls[type]);
    statusBarEl.innerHTML = txt[type];
  }
  function fmtDist(m) {
    if (m == null) return '—';
    return m < 1000 ? "".concat(Math.round(m), " m") : "".concat((m / 1000).toFixed(2).replace('.', ','), " km");
  }
  function fmtDur(s) {
    if (s == null) return '—';
    s = Math.round(s);
    var h = Math.floor(s / 3600),
      m = Math.floor(s % 3600 / 60);
    return h <= 0 ? "".concat(m, " min") : "".concat(h, " h ").concat(String(m).padStart(2, '0'), " min");
  }
  function tryParse(str) {
    try {
      return JSON.parse(str);
    } catch (_unused) {
      return null;
    }
  }
  btnUndo === null || btnUndo === void 0 || btnUndo.addEventListener('click', undoLast);
  btnClose === null || btnClose === void 0 || btnClose.addEventListener('click', closeLoop);
  btnClear === null || btnClear === void 0 || btnClear.addEventListener('click', clearAll);
  btnFreeToggle === null || btnFreeToggle === void 0 || btnFreeToggle.addEventListener('click', toggleFree);
  document.querySelectorAll('[data-ors-profile]').forEach(function (el) {
    return el.addEventListener('click', function () {
      return setProfile(el.dataset.orsProfile);
    });
  });
  var savedWp = (_cfg$initialWaypoints = cfg.initialWaypoints) !== null && _cfg$initialWaypoints !== void 0 ? _cfg$initialWaypoints : tryParse((_wpInput$value = wpInput === null || wpInput === void 0 ? void 0 : wpInput.value) !== null && _wpInput$value !== void 0 ? _wpInput$value : '');
  var savedGeo = (_cfg$initialRouteGeoJ = cfg.initialRouteGeoJson) !== null && _cfg$initialRouteGeoJ !== void 0 ? _cfg$initialRouteGeoJ : tryParse((_routeInput$value = routeInput === null || routeInput === void 0 ? void 0 : routeInput.value) !== null && _routeInput$value !== void 0 ? _routeInput$value : '');
  if (Array.isArray(savedWp) && savedWp.length >= 2 && savedGeo) {
    try {
      restorationLayer = L.geoJSON(savedGeo, {
        style: function style() {
          return {
            color: '#4a7c59',
            weight: 5,
            opacity: .9,
            lineCap: 'round'
          };
        }
      }).addTo(map);
      if (cfg.initialRouteGeoJson) cfg.initialRouteGeoJson = null;
    } catch (e) {
      console.warn('[balade-map] GeoJSON invalide', e);
    }
    savedWp.forEach(function (p, i) {
      if (!Array.isArray(p) || p.length < 2) return;
      var ll = L.latLng(p[0], p[1]);
      if (i === 0) {
        cursor = ll;
        startMarker = L.marker(ll, {
          icon: IC.start
        }).addTo(map);
      } else {
        var _prev$;
        var prev = savedWp[i - 1];
        var from = L.latLng(prev[0], prev[1]);
        var type = (_prev$ = prev[2]) !== null && _prev$ !== void 0 ? _prev$ : 'ors';
        segments.push({
          type: type,
          from: from,
          to: ll,
          points: [from, ll],
          layers: [],
          distanceMeters: from.distanceTo(ll),
          durationSeconds: from.distanceTo(ll) / 1000 / 4 * 3600
        });
        moveCursor(ll);
      }
    });
    map.fitBounds(L.latLngBounds(savedWp.map(function (p) {
      return L.latLng(p[0], p[1]);
    })), {
      padding: [30, 30]
    });
    setStatus(freeMode ? 'free' : 'ors');
  } else if (Array.isArray(savedWp) && savedWp.length === 1) {
    var ll = L.latLng(savedWp[0][0], savedWp[0][1]);
    cursor = ll;
    startMarker = L.marker(ll, {
      icon: IC.start
    }).addTo(map);
    map.setView(ll, 15);
    setStatus(freeMode ? 'free' : 'ors');
  }
  var existingDist = (_cfg$initialDistance = cfg.initialDistance) !== null && _cfg$initialDistance !== void 0 ? _cfg$initialDistance : distInput !== null && distInput !== void 0 && distInput.value ? parseFloat(distInput.value) : null;
  var existingDur = (_cfg$initialDuration = cfg.initialDuration) !== null && _cfg$initialDuration !== void 0 ? _cfg$initialDuration : durInput !== null && durInput !== void 0 && durInput.value ? parseFloat(durInput.value) : null;
  if (existingDist != null && segments.length) {
    if (statsBox) statsBox.style.display = 'inline-flex';
    if (distanceEl) distanceEl.textContent = fmtDist(existingDist);
    if (durationEl) durationEl.textContent = fmtDur(existingDur);
  }
  setProfile(orsProfile);
  renderSegList();
  updateHint();
}

/***/ },

/***/ "./assets/app.js"
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css");
/* harmony import */ var _fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/all.js */ "./node_modules/@fortawesome/fontawesome-free/js/all.js");
/* harmony import */ var _fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ "./node_modules/leaflet/dist/leaflet.css");
/* harmony import */ var leaflet_draw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! leaflet-draw */ "./node_modules/leaflet-draw/dist/leaflet.draw.js");
/* harmony import */ var leaflet_draw__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(leaflet_draw__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var leaflet_draw_dist_leaflet_draw_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! leaflet-draw/dist/leaflet.draw.css */ "./node_modules/leaflet-draw/dist/leaflet.draw.css");
/* harmony import */ var leaflet_routing_machine__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! leaflet-routing-machine */ "./node_modules/leaflet-routing-machine/dist/leaflet-routing-machine.js");
/* harmony import */ var leaflet_routing_machine__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(leaflet_routing_machine__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var leaflet_routing_machine_dist_leaflet_routing_machine_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! leaflet-routing-machine/dist/leaflet-routing-machine.css */ "./node_modules/leaflet-routing-machine/dist/leaflet-routing-machine.css");
/* harmony import */ var leaflet_dist_images_marker_icon_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! leaflet/dist/images/marker-icon.png */ "./node_modules/leaflet/dist/images/marker-icon.png");
/* harmony import */ var leaflet_dist_images_marker_shadow_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! leaflet/dist/images/marker-shadow.png */ "./node_modules/leaflet/dist/images/marker-shadow.png");
/* harmony import */ var leaflet_control_geocoder_dist_Control_Geocoder_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! leaflet-control-geocoder/dist/Control.Geocoder.css */ "./node_modules/leaflet-control-geocoder/dist/Control.Geocoder.css");
/* harmony import */ var _Javascript_balade_map_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Javascript/balade-map.js */ "./assets/Javascript/balade-map.js");












delete (leaflet__WEBPACK_IMPORTED_MODULE_3___default().Icon).Default.prototype._getIconUrl;
leaflet__WEBPACK_IMPORTED_MODULE_3___default().Icon.Default.mergeOptions({
  iconUrl: leaflet_dist_images_marker_icon_png__WEBPACK_IMPORTED_MODULE_9__,
  shadowUrl: leaflet_dist_images_marker_shadow_png__WEBPACK_IMPORTED_MODULE_10__
});
window.L = (leaflet__WEBPACK_IMPORTED_MODULE_3___default());

if (document.getElementById('map')) {
  (0,_Javascript_balade_map_js__WEBPACK_IMPORTED_MODULE_12__.initBaladeMap)();
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_fortawesome_fontawesome-free_js_all_js-node_modules_leaflet-draw_dist_le-1f076e"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ekI7QUFDVTtBQUVaO0FBQ3NCO0FBRVg7QUFDaUM7QUFFTDtBQUNJO0FBRUw7QUFFNUQsT0FBT3JFLHFEQUFNLENBQUNvTixPQUFPLENBQUN4VCxTQUFTLENBQUN5VCxXQUFXO0FBQzNDck4sbURBQU0sQ0FBQ29OLE9BQU8sQ0FBQ0UsWUFBWSxDQUFDO0VBQzFCQyxPQUFPLEVBQUVOLGdFQUFVO0VBQ25CTyxTQUFTLEVBQUVOLG1FQUFZQTtBQUN6QixDQUFDLENBQUM7QUFFRjNOLE1BQU0sQ0FBQ1MsQ0FBQyxHQUFHQSxnREFBQztBQUUrQztBQUMzRCxJQUFJMEIsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDLEVBQUU7RUFDaEM5Qyx5RUFBYSxDQUFDLENBQUM7QUFDbkIsQzs7Ozs7Ozs7Ozs7QUM3QkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvSmF2YXNjcmlwdC9iYWxhZGUtbWFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2Nzcz84ZjU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIExDRyBmcm9tICdsZWFmbGV0LWNvbnRyb2wtZ2VvY29kZXInO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRCYWxhZGVNYXAoKSB7XHJcblxyXG4gIGNvbnN0IGNmZyA9IHdpbmRvdy5CQUxBREVfTUFQX0NPTkZJRyB8fCB7fTtcclxuXHJcbiAgLy8g4pSA4pSAIENhcnRlIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxyXG4gIGNvbnN0IFtkZWZMYXQsIGRlZkxuZywgZGVmWm9vbV0gPSBjZmcuZGVmYXVsdFZpZXcgPz8gWzQ0LjgzNzgsIC0wLjU3OTIsIDEzXTtcclxuICBjb25zdCBtYXAgPSBMLm1hcCgnbWFwJywgeyBkb3VibGVDbGlja1pvb206IGZhbHNlIH0pLnNldFZpZXcoW2RlZkxhdCwgZGVmTG5nXSwgZGVmWm9vbSk7XHJcbiAgc2V0VGltZW91dCgoKSA9PiBtYXAuaW52YWxpZGF0ZVNpemUoKSwgMTUwKTtcclxuXHJcbiAgTC50aWxlTGF5ZXIoJ2h0dHBzOi8ve3N9LnRpbGUub3BlbnN0cmVldG1hcC5mci9vc21mci97en0ve3h9L3t5fS5wbmcnLCB7XHJcbiAgICBhdHRyaWJ1dGlvbjogJyZjb3B5OyBPcGVuU3RyZWV0TWFwIGNvbnRyaWJ1dG9ycycsIG1heFpvb206IDE5LFxyXG4gIH0pLmFkZFRvKG1hcCk7XHJcblxyXG4gIC8vIOKUgOKUgCBSZWNoZXJjaGUgZ8Opb2NvZGFnZSDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcclxuICBMQ0cuZ2VvY29kZXIoe1xyXG4gICAgZ2VvY29kZXI6IExDRy5nZW9jb2RlcnMubm9taW5hdGltKCksXHJcbiAgICBkZWZhdWx0TWFya0dlb2NvZGU6IGZhbHNlLFxyXG4gICAgcGxhY2Vob2xkZXI6ICdSZWNoZXJjaGVyIHVuIGxpZXXigKYnLFxyXG4gICAgZXJyb3JNZXNzYWdlOiAnQXVjdW4gcsOpc3VsdGF0LicsXHJcbiAgICBzaG93UmVzdWx0SWNvbnM6IGZhbHNlLFxyXG4gICAgY29sbGFwc2VkOiB0cnVlLFxyXG4gIH0pXHJcbiAgLm9uKCdtYXJrZ2VvY29kZScsIChlKSA9PiB7XHJcbiAgICBjb25zdCB7IGNlbnRlciwgYmJveCB9ID0gZS5nZW9jb2RlO1xyXG4gICAgbWFwLmZpdEJvdW5kcyhiYm94ID8/IEwubGF0TG5nQm91bmRzKFtjZW50ZXIsIGNlbnRlcl0pLnBhZCgwLjA1KSk7XHJcbiAgfSlcclxuICAuYWRkVG8obWFwKTtcclxuXHJcbiAgY29uc3Qgd3BJbnB1dCAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWxhZGVfd2F5cG9pbnRzSnNvbicpO1xyXG4gIGNvbnN0IHJvdXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFsYWRlX3JvdXRlR2VvSnNvbicpO1xyXG4gIGNvbnN0IGRpc3RJbnB1dCAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFsYWRlX2Rpc3RhbmNlTWV0ZXJzJyk7XHJcbiAgY29uc3QgZHVySW5wdXQgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWxhZGVfZHVyYXRpb25TZWNvbmRzJyk7XHJcblxyXG4gIGNvbnN0IGJ0blVuZG8gICAgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLXVuZG8nKTtcclxuICBjb25zdCBidG5DbG9zZSAgICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1jbG9zZScpO1xyXG4gIGNvbnN0IGJ0bkNsZWFyICAgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLWNsZWFyJyk7XHJcbiAgY29uc3QgYnRuRnJlZVRvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tZnJlZS10b2dnbGUnKTtcclxuICBjb25zdCBwaWxsRWwgICAgICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZyZWUtdG9nZ2xlLXBpbGwnKTtcclxuICBjb25zdCBmcmVlRGVzY0VsICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZyZWUtdG9nZ2xlLWRlc2MnKTtcclxuICBjb25zdCBoaW50RWwgICAgICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcC1oaW50Jyk7XHJcbiAgY29uc3Qgc3RhdHVzQmFyRWwgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAtc3RhdHVzJyk7XHJcbiAgY29uc3Qgc3RhdHNCb3ggICAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb3V0ZS1zdGF0cycpO1xyXG4gIGNvbnN0IGRpc3RhbmNlRWwgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm91dGUtZGlzdGFuY2UnKTtcclxuICBjb25zdCBkdXJhdGlvbkVsICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JvdXRlLWR1cmF0aW9uJyk7XHJcbiAgY29uc3Qgc2VnTGlzdEVsICAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWctbGlzdCcpO1xyXG5cclxuICBsZXQgb3JzUHJvZmlsZSAgICAgID0gY2ZnLm9yc1Byb2ZpbGUgPz8gJ2Zvb3Qtd2Fsa2luZyc7XHJcbiAgbGV0IGZyZWVNb2RlICAgICAgICA9IGZhbHNlO1xyXG4gIGxldCBjdXJzb3IgICAgICAgICAgPSBudWxsO1xyXG4gIGxldCBzZWdtZW50cyAgICAgICAgPSBbXTtcclxuICBsZXQgc3RhcnRNYXJrZXIgICAgID0gbnVsbDtcclxuICBsZXQgY3Vyc29yTWsgICAgICAgID0gbnVsbDtcclxuICBsZXQgcHJldmlld0xpbmUgICAgID0gbnVsbDtcclxuICBsZXQgb3JzU2VxICAgICAgICAgID0gMDtcclxuICBsZXQgcmVzdG9yYXRpb25MYXllciA9IG51bGw7XHJcblxyXG4gIC8vIOKUgOKUgCBJY8O0bmVzIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxyXG4gIGZ1bmN0aW9uIG1ha2VQaW4oYmcsIGVtb2ppKSB7XHJcbiAgICByZXR1cm4gTC5kaXZJY29uKHtcclxuICAgICAgaHRtbDogYDxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kOiR7Ymd9O3dpZHRoOjMycHg7aGVpZ2h0OjMycHg7Ym9yZGVyLXJhZGl1czo1MCUgNTAlIDUwJSAwO1xyXG4gICAgICAgIHRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTtib3JkZXI6M3B4IHNvbGlkIHdoaXRlO2JveC1zaGFkb3c6MCAycHggOHB4IHJnYmEoMCwwLDAsLjI4KTtcclxuICAgICAgICBkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJcIj5cclxuICAgICAgICA8c3BhbiBzdHlsZT1cInRyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO2ZvbnQtc2l6ZToxNHB4XCI+JHtlbW9qaX08L3NwYW4+PC9kaXY+YCxcclxuICAgICAgY2xhc3NOYW1lOiAnJywgaWNvblNpemU6IFszMiwgMzJdLCBpY29uQW5jaG9yOiBbMTYsIDMyXSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgSUMgPSB7IHN0YXJ0OiBtYWtlUGluKCcjNGE3YzU5JywgJ/Cfj6AnKSwgY3Vyc29yOiBtYWtlUGluKCcjZTg3MDQwJywgJ/CfkL4nKSB9O1xyXG5cclxuICBtYXAub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGlmICghY3Vyc29yKSB7XHJcbiAgICAgIGN1cnNvciA9IGUubGF0bG5nO1xyXG4gICAgICBzdGFydE1hcmtlciA9IEwubWFya2VyKGN1cnNvciwgeyBpY29uOiBJQy5zdGFydCB9KS5hZGRUbyhtYXApO1xyXG4gICAgICBzZXRTdGF0dXMoZnJlZU1vZGUgPyAnZnJlZScgOiAnb3JzJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoZnJlZU1vZGUpIGFkZEZyZWVTZWcoY3Vyc29yLCBlLmxhdGxuZyk7XHJcbiAgICAgIGVsc2UgICAgICAgICAgYWRkT1JTU2VnKGN1cnNvciwgZS5sYXRsbmcpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlSGludCgpO1xyXG4gICAgcmVuZGVyU2VnTGlzdCgpO1xyXG4gICAgcGVyc2lzdCgpO1xyXG4gIH0pO1xyXG5cclxuICBtYXAub24oJ21vdXNlbW92ZScsIChlKSA9PiB7XHJcbiAgICBpZiAoIWN1cnNvcikgcmV0dXJuO1xyXG4gICAgaWYgKHByZXZpZXdMaW5lKSB7IG1hcC5yZW1vdmVMYXllcihwcmV2aWV3TGluZSk7IHByZXZpZXdMaW5lID0gbnVsbDsgfVxyXG4gICAgcHJldmlld0xpbmUgPSBMLnBvbHlsaW5lKFtjdXJzb3IsIGUubGF0bG5nXSwge1xyXG4gICAgICBjb2xvcjogZnJlZU1vZGUgPyAnIzdiNWVhNycgOiAnIzRhN2M1OScsXHJcbiAgICAgIHdlaWdodDogMywgb3BhY2l0eTogLjQsIGRhc2hBcnJheTogJzUgOCcsIGxpbmVDYXA6ICdyb3VuZCcsXHJcbiAgICB9KS5hZGRUbyhtYXApO1xyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBhZGRGcmVlU2VnKGZyb20sIHRvKSB7XHJcbiAgICBpZiAocmVzdG9yYXRpb25MYXllcikgeyByZXN0b3JhdGlvbkxheWVyLmNsZWFyTGF5ZXJzKCk7IHJlc3RvcmF0aW9uTGF5ZXIucmVtb3ZlKCk7IHJlc3RvcmF0aW9uTGF5ZXIgPSBudWxsOyB9XHJcbiAgICBjb25zdCBwdHMgICAgPSBbZnJvbSwgdG9dO1xyXG4gICAgY29uc3QgbGF5ZXJzID0gZHJhd1BvbHkocHRzLCAnZnJlZScpO1xyXG4gICAgY29uc3QgZGlzdE0gID0gZnJvbS5kaXN0YW5jZVRvKHRvKTtcclxuICAgIHNlZ21lbnRzLnB1c2goeyB0eXBlOiAnZnJlZScsIGZyb20sIHRvLCBwb2ludHM6IHB0cywgbGF5ZXJzLFxyXG4gICAgICBkaXN0YW5jZU1ldGVyczogZGlzdE0sIGR1cmF0aW9uU2Vjb25kczogKGRpc3RNIC8gMTAwMCAvIDQpICogMzYwMCB9KTtcclxuICAgIG1vdmVDdXJzb3IodG8pO1xyXG4gICAgdXBkYXRlU3RhdHMoKTtcclxuICAgIHJlbmRlclNlZ0xpc3QoKTtcclxuICAgIHBlcnNpc3QoKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGFkZE9SU1NlZyhmcm9tLCB0bykge1xyXG4gICAgaWYgKHJlc3RvcmF0aW9uTGF5ZXIpIHsgcmVzdG9yYXRpb25MYXllci5jbGVhckxheWVycygpOyByZXN0b3JhdGlvbkxheWVyLnJlbW92ZSgpOyByZXN0b3JhdGlvbkxheWVyID0gbnVsbDsgfVxyXG4gICAgY29uc3Qgc2VxID0gKytvcnNTZXE7XHJcbiAgICBzZXRTdGF0dXMoJ2xvYWQnKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnL2FwaS9oaWtpbmctcm91dGUnLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgcG9pbnRzOiAgW1tmcm9tLmxhdCwgZnJvbS5sbmddLCBbdG8ubGF0LCB0by5sbmddXSxcclxuICAgICAgICAgIHByb2ZpbGU6IG9yc1Byb2ZpbGUsXHJcbiAgICAgICAgfSksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHNlcSAhPT0gb3JzU2VxKSByZXR1cm47XHJcblxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICAgIGlmICghcmVzLm9rKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignW09SU10nLCBkYXRhKTtcclxuICAgICAgICBzZXRTdGF0dXMoZnJlZU1vZGUgPyAnZnJlZScgOiAnb3JzJyk7XHJcbiAgICAgICAgc2V0SGludCgn4pqg77iPIEVycmV1ciBPUlMg4oCUIHbDqXJpZmlleiBsYSBjb25zb2xlLicpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgY29vcmRzID0gZGF0YS5nZW9qc29uPy5nZW9tZXRyeT8uY29vcmRpbmF0ZXMgPz8gW107XHJcbiAgICAgIGlmICghY29vcmRzLmxlbmd0aCkge1xyXG4gICAgICAgIHNldFN0YXR1cyhmcmVlTW9kZSA/ICdmcmVlJyA6ICdvcnMnKTtcclxuICAgICAgICBzZXRIaW50KCfimqDvuI8gT1JTIG5cXCdhIHJldG91cm7DqSBhdWN1biB0cmFjw6kuJyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBwdHMgICA9IGNvb3Jkcy5tYXAoYyA9PiBMLmxhdExuZyhjWzFdLCBjWzBdKSk7XHJcbiAgICAgIGNvbnN0IGRpc3RNID0gZGF0YS5kaXN0YW5jZSA/PyBmcm9tLmRpc3RhbmNlVG8odG8pO1xyXG4gICAgICBjb25zdCBkdXJTICA9IGRhdGEuZHVyYXRpb24gPz8gKGRpc3RNIC8gMTAwMCAvIDQpICogMzYwMDtcclxuXHJcbiAgICAgIHNlZ21lbnRzLnB1c2goeyB0eXBlOiAnb3JzJywgZnJvbSwgdG8sXHJcbiAgICAgICAgcG9pbnRzOiBwdHMsIGxheWVyczogZHJhd1BvbHkocHRzLCAnb3JzJyksXHJcbiAgICAgICAgZGlzdGFuY2VNZXRlcnM6IGRpc3RNLCBkdXJhdGlvblNlY29uZHM6IGR1clMgfSk7XHJcblxyXG4gICAgICBtb3ZlQ3Vyc29yKHRvKTtcclxuICAgICAgdXBkYXRlU3RhdHMoKTtcclxuICAgICAgcmVuZGVyU2VnTGlzdCgpO1xyXG4gICAgICBzZXRTdGF0dXMoZnJlZU1vZGUgPyAnZnJlZScgOiAnb3JzJyk7XHJcbiAgICAgIHVwZGF0ZUhpbnQoKTtcclxuICAgICAgcGVyc2lzdCgpO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBpZiAoc2VxICE9PSBvcnNTZXEpIHJldHVybjtcclxuICAgICAgY29uc29sZS5lcnJvcignW09SU10nLCBlcnIpO1xyXG4gICAgICBzZXRTdGF0dXMoZnJlZU1vZGUgPyAnZnJlZScgOiAnb3JzJyk7XHJcbiAgICAgIHNldEhpbnQoJ+KaoO+4jyBJbXBvc3NpYmxlIGRlIGpvaW5kcmUgL2FwaS9oaWtpbmctcm91dGUuJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBkcmF3UG9seShwdHMsIHR5cGUpIHtcclxuICAgIGNvbnN0IGNvbG9yICA9IHR5cGUgPT09ICdvcnMnID8gJyM0YTdjNTknIDogJyM3YjVlYTcnO1xyXG4gICAgY29uc3Qgc2hhZG93ID0gTC5wb2x5bGluZShwdHMsIHsgY29sb3I6ICcjM2QyYjFmJywgd2VpZ2h0OiA5LCBvcGFjaXR5OiAuMDcgfSkuYWRkVG8obWFwKTtcclxuICAgIGNvbnN0IGxpbmUgICA9IEwucG9seWxpbmUocHRzLCB7XHJcbiAgICAgIGNvbG9yLCB3ZWlnaHQ6IDUsIG9wYWNpdHk6IC45LCBsaW5lQ2FwOiAncm91bmQnLCBsaW5lSm9pbjogJ3JvdW5kJyxcclxuICAgICAgLi4uKHR5cGUgPT09ICdmcmVlJyA/IHsgZGFzaEFycmF5OiAnOCA2JyB9IDoge30pLFxyXG4gICAgfSkuYWRkVG8obWFwKTtcclxuICAgIHJldHVybiBbc2hhZG93LCBsaW5lXTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlbW92ZUxheWVycyhsYXllcnMpIHsgbGF5ZXJzLmZvckVhY2gobCA9PiBtYXAucmVtb3ZlTGF5ZXIobCkpOyB9XHJcblxyXG4gIGZ1bmN0aW9uIG1vdmVDdXJzb3IobGwpIHtcclxuICAgIGN1cnNvciA9IGxsO1xyXG4gICAgaWYgKGN1cnNvck1rKSBtYXAucmVtb3ZlTGF5ZXIoY3Vyc29yTWspO1xyXG4gICAgY3Vyc29yTWsgPSBMLm1hcmtlcihsbCwgeyBpY29uOiBJQy5jdXJzb3IgfSkuYWRkVG8obWFwKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNsb3NlTG9vcCgpIHtcclxuICAgIGlmICghY3Vyc29yIHx8ICFzZWdtZW50cy5sZW5ndGgpIHJldHVybjtcclxuICAgIGNvbnN0IGZpcnN0ID0gc2VnbWVudHNbMF0uZnJvbTtcclxuICAgIGNvbnN0IHNhbWUgID0gTWF0aC5hYnMoY3Vyc29yLmxhdCAtIGZpcnN0LmxhdCkgPCAxZS02XHJcbiAgICAgICAgICAgICAgICYmIE1hdGguYWJzKGN1cnNvci5sbmcgLSBmaXJzdC5sbmcpIDwgMWUtNjtcclxuICAgIGlmIChzYW1lKSByZXR1cm47XHJcbiAgICBpZiAoZnJlZU1vZGUpIGFkZEZyZWVTZWcoY3Vyc29yLCBmaXJzdCk7XHJcbiAgICBlbHNlICAgICAgICAgIGFkZE9SU1NlZyhjdXJzb3IsIGZpcnN0KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHVuZG9MYXN0KCkge1xyXG4gICAgaWYgKHByZXZpZXdMaW5lKSB7IG1hcC5yZW1vdmVMYXllcihwcmV2aWV3TGluZSk7IHByZXZpZXdMaW5lID0gbnVsbDsgfVxyXG5cclxuICAgIGlmIChzZWdtZW50cy5sZW5ndGgpIHtcclxuICAgICAgY29uc3Qgc2VnID0gc2VnbWVudHMucG9wKCk7XHJcbiAgICAgIHJlbW92ZUxheWVycyhzZWcubGF5ZXJzKTtcclxuICAgICAgY3Vyc29yID0gc2VnLmZyb207XHJcbiAgICAgIGlmIChjdXJzb3JNaykgeyBtYXAucmVtb3ZlTGF5ZXIoY3Vyc29yTWspOyBjdXJzb3JNayA9IG51bGw7IH1cclxuICAgICAgaWYgKHNlZ21lbnRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIGlmIChzdGFydE1hcmtlcikgbWFwLnJlbW92ZUxheWVyKHN0YXJ0TWFya2VyKTtcclxuICAgICAgICBzdGFydE1hcmtlciA9IEwubWFya2VyKGN1cnNvciwgeyBpY29uOiBJQy5zdGFydCB9KS5hZGRUbyhtYXApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGN1cnNvck1rID0gTC5tYXJrZXIoY3Vyc29yLCB7IGljb246IElDLmN1cnNvciB9KS5hZGRUbyhtYXApO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGN1cnNvcikge1xyXG4gICAgICBpZiAoc3RhcnRNYXJrZXIpIHsgbWFwLnJlbW92ZUxheWVyKHN0YXJ0TWFya2VyKTsgc3RhcnRNYXJrZXIgPSBudWxsOyB9XHJcbiAgICAgIGlmIChjdXJzb3JNaykgICAgeyBtYXAucmVtb3ZlTGF5ZXIoY3Vyc29yTWspOyAgICBjdXJzb3JNayAgICA9IG51bGw7IH1cclxuICAgICAgY3Vyc29yID0gbnVsbDtcclxuICAgICAgc2V0U3RhdHVzKCdoaWRlJyk7XHJcbiAgICB9IGVsc2UgcmV0dXJuO1xyXG5cclxuICAgIHJlbmRlclNlZ0xpc3QoKTtcclxuICAgIHVwZGF0ZVN0YXRzKCk7XHJcbiAgICB1cGRhdGVIaW50KCk7XHJcbiAgICBwZXJzaXN0KCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjbGVhckFsbCgpIHtcclxuICAgIG9yc1NlcSsrO1xyXG5cclxuICAgIGlmIChyZXN0b3JhdGlvbkxheWVyKSB7XHJcbiAgICAgIHJlc3RvcmF0aW9uTGF5ZXIuZWFjaExheWVyKGwgPT4gbWFwLnJlbW92ZUxheWVyKGwpKTtcclxuICAgICAgcmVzdG9yYXRpb25MYXllci5jbGVhckxheWVycygpO1xyXG4gICAgICBtYXAucmVtb3ZlTGF5ZXIocmVzdG9yYXRpb25MYXllcik7XHJcbiAgICAgIHJlc3RvcmF0aW9uTGF5ZXIgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgc2VnbWVudHMuZm9yRWFjaChzID0+IHJlbW92ZUxheWVycyhzLmxheWVycykpO1xyXG4gICAgc2VnbWVudHMgPSBbXTtcclxuICAgIGlmIChzdGFydE1hcmtlcikgeyBtYXAucmVtb3ZlTGF5ZXIoc3RhcnRNYXJrZXIpOyBzdGFydE1hcmtlciA9IG51bGw7IH1cclxuICAgIGlmIChjdXJzb3JNaykgICAgeyBtYXAucmVtb3ZlTGF5ZXIoY3Vyc29yTWspOyAgICBjdXJzb3JNayAgICA9IG51bGw7IH1cclxuICAgIGlmIChwcmV2aWV3TGluZSkgeyBtYXAucmVtb3ZlTGF5ZXIocHJldmlld0xpbmUpOyBwcmV2aWV3TGluZSA9IG51bGw7IH1cclxuICAgIGN1cnNvciA9IG51bGw7XHJcbiAgICBtYXAuZWFjaExheWVyKGwgPT4ge1xyXG4gICAgICBpZiAobCBpbnN0YW5jZW9mIEwuUG9seWxpbmUgfHwgbCBpbnN0YW5jZW9mIEwuR2VvSlNPTikge1xyXG4gICAgICAgIG1hcC5yZW1vdmVMYXllcihsKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZW5kZXJTZWdMaXN0KCk7XHJcbiAgICB1cGRhdGVTdGF0cygpO1xyXG4gICAgdXBkYXRlSGludCgpO1xyXG4gICAgc2V0U3RhdHVzKCdoaWRlJyk7XHJcbiAgICBwZXJzaXN0KCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB0b2dnbGVGcmVlKCkge1xyXG4gICAgZnJlZU1vZGUgPSAhZnJlZU1vZGU7XHJcbiAgICBidG5GcmVlVG9nZ2xlPy5jbGFzc0xpc3QudG9nZ2xlKCdvbicsIGZyZWVNb2RlKTtcclxuICAgIHBpbGxFbD8uY2xhc3NMaXN0LnRvZ2dsZSgnb24nLCBmcmVlTW9kZSk7XHJcbiAgICBpZiAoZnJlZURlc2NFbCkgZnJlZURlc2NFbC50ZXh0Q29udGVudCA9ICdMaWJyZSc7XHJcbiAgICBtYXAuZ2V0Q29udGFpbmVyKCkuc3R5bGUuY3Vyc29yID0gZnJlZU1vZGUgPyAnY3Jvc3NoYWlyJyA6ICcnO1xyXG4gICAgaWYgKGN1cnNvcikgc2V0U3RhdHVzKGZyZWVNb2RlID8gJ2ZyZWUnIDogJ29ycycpO1xyXG4gICAgdXBkYXRlSGludCgpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0UHJvZmlsZShwKSB7XHJcbiAgICBvcnNQcm9maWxlID0gcDtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW9ycy1wcm9maWxlXScpLmZvckVhY2goZWwgPT5cclxuICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJywgZWwuZGF0YXNldC5vcnNQcm9maWxlID09PSBwKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHBlcnNpc3QoKSB7XHJcbiAgICBjb25zdCB3cHMgPSBbXTtcclxuICAgIGlmIChjdXJzb3IgfHwgc2VnbWVudHMubGVuZ3RoKSB7XHJcbiAgICAgIGlmIChzZWdtZW50cy5sZW5ndGgpIHtcclxuICAgICAgICBzZWdtZW50cy5mb3JFYWNoKHMgPT4gd3BzLnB1c2goW3MuZnJvbS5sYXQsIHMuZnJvbS5sbmcsIHMudHlwZV0pKTtcclxuICAgICAgICB3cHMucHVzaChbY3Vyc29yLmxhdCwgY3Vyc29yLmxuZywgZnJlZU1vZGUgPyAnZnJlZScgOiAnb3JzJ10pO1xyXG4gICAgICB9IGVsc2UgaWYgKGN1cnNvcikge1xyXG4gICAgICAgIHdwcy5wdXNoKFtjdXJzb3IubGF0LCBjdXJzb3IubG5nLCBmcmVlTW9kZSA/ICdmcmVlJyA6ICdvcnMnXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh3cElucHV0KSB3cElucHV0LnZhbHVlID0gSlNPTi5zdHJpbmdpZnkod3BzKTtcclxuXHJcbiAgICBpZiAoc2VnbWVudHMubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IGFsbENvb3JkcyA9IFtdO1xyXG4gICAgICBzZWdtZW50cy5mb3JFYWNoKHMgPT4ge1xyXG4gICAgICAgIGNvbnN0IHB0cyA9IHMucG9pbnRzLm1hcChwID0+IFtwLmxuZywgcC5sYXRdKTtcclxuICAgICAgICBhbGxDb29yZHMucHVzaCguLi4oYWxsQ29vcmRzLmxlbmd0aCA/IHB0cy5zbGljZSgxKSA6IHB0cykpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHRvdGFsRGlzdCA9IHNlZ21lbnRzLnJlZHVjZSgoYSwgcykgPT4gYSArIChzLmRpc3RhbmNlTWV0ZXJzICA/PyAwKSwgMCk7XHJcbiAgICAgIGNvbnN0IHRvdGFsRHVyICA9IHNlZ21lbnRzLnJlZHVjZSgoYSwgcykgPT4gYSArIChzLmR1cmF0aW9uU2Vjb25kcyA/PyAwKSwgMCk7XHJcblxyXG4gICAgICBpZiAocm91dGVJbnB1dCkgcm91dGVJbnB1dC52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICB0eXBlOiAnRmVhdHVyZUNvbGxlY3Rpb24nLFxyXG4gICAgICAgIGZlYXR1cmVzOiBbe1xyXG4gICAgICAgICAgdHlwZTogJ0ZlYXR1cmUnLFxyXG4gICAgICAgICAgZ2VvbWV0cnk6IHsgdHlwZTogJ0xpbmVTdHJpbmcnLCBjb29yZGluYXRlczogYWxsQ29vcmRzIH0sXHJcbiAgICAgICAgICBwcm9wZXJ0aWVzOiB7IHN1bW1hcnk6IHsgZGlzdGFuY2U6IHRvdGFsRGlzdCAvIDEwMDAsIGR1cmF0aW9uOiB0b3RhbER1ciB9IH0sXHJcbiAgICAgICAgfV0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoZGlzdElucHV0KSBkaXN0SW5wdXQudmFsdWUgPSBTdHJpbmcoTWF0aC5yb3VuZCh0b3RhbERpc3QpKTtcclxuICAgICAgaWYgKGR1cklucHV0KSAgZHVySW5wdXQudmFsdWUgID0gU3RyaW5nKE1hdGgucm91bmQodG90YWxEdXIpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChyb3V0ZUlucHV0KSByb3V0ZUlucHV0LnZhbHVlID0gJyc7XHJcbiAgICAgIGlmIChkaXN0SW5wdXQpICBkaXN0SW5wdXQudmFsdWUgID0gJyc7XHJcbiAgICAgIGlmIChkdXJJbnB1dCkgICBkdXJJbnB1dC52YWx1ZSAgID0gJyc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB1cGRhdGVTdGF0cygpIHtcclxuICAgIGlmICghc2VnbWVudHMubGVuZ3RoKSB7XHJcbiAgICAgIGlmIChzdGF0c0JveCkgICBzdGF0c0JveC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICBpZiAoZGlzdGFuY2VFbCkgZGlzdGFuY2VFbC50ZXh0Q29udGVudCA9ICfigJQnO1xyXG4gICAgICBpZiAoZHVyYXRpb25FbCkgZHVyYXRpb25FbC50ZXh0Q29udGVudCA9ICfigJQnO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCB0b3RhbERpc3QgPSBzZWdtZW50cy5yZWR1Y2UoKGEsIHMpID0+IGEgKyAocy5kaXN0YW5jZU1ldGVycyAgPz8gMCksIDApO1xyXG4gICAgY29uc3QgdG90YWxEdXIgID0gc2VnbWVudHMucmVkdWNlKChhLCBzKSA9PiBhICsgKHMuZHVyYXRpb25TZWNvbmRzID8/IDApLCAwKTtcclxuICAgIGlmIChzdGF0c0JveCkgICBzdGF0c0JveC5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1mbGV4JztcclxuICAgIGlmIChkaXN0YW5jZUVsKSBkaXN0YW5jZUVsLnRleHRDb250ZW50ID0gZm10RGlzdCh0b3RhbERpc3QpO1xyXG4gICAgaWYgKGR1cmF0aW9uRWwpIGR1cmF0aW9uRWwudGV4dENvbnRlbnQgPSBmbXREdXIodG90YWxEdXIpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVuZGVyU2VnTGlzdCgpIHtcclxuICAgIGlmICghc2VnTGlzdEVsKSByZXR1cm47XHJcbiAgICBzZWdMaXN0RWwuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBpZiAoIXNlZ21lbnRzLmxlbmd0aCkge1xyXG4gICAgICBzZWdMaXN0RWwuaW5uZXJIVE1MID0gJzxsaSBjbGFzcz1cInNlZy1lbXB0eVwiPkF1Y3VuIHNlZ21lbnQgcG91ciBsXFwnaW5zdGFudDwvbGk+JztcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgc2VnbWVudHMuZm9yRWFjaCgocywgaSkgPT4ge1xyXG4gICAgICBjb25zdCBpc09SUyA9IHMudHlwZSA9PT0gJ29ycyc7XHJcbiAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgbGkuY2xhc3NOYW1lID0gYHNlZy1pdGVtICR7aXNPUlMgPyAnc2VnLW9ycycgOiAnc2VnLWZyZWUnfWA7XHJcbiAgICAgIGxpLmlubmVySFRNTCA9IGBcclxuICAgICAgICA8c3BhbiBjbGFzcz1cInNlZy1kb3QgJHtpc09SUyA/ICdzZWctZG90LW9ycycgOiAnc2VnLWRvdC1mcmVlJ31cIj48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJzZWctbGFiZWxcIj5TZWdtZW50ICR7aSArIDF9IMK3ICR7Zm10RGlzdChzLmRpc3RhbmNlTWV0ZXJzKX08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJzZWctYmFkZ2UgJHtpc09SUyA/ICdzZWctYmFkZ2Utb3JzJyA6ICdzZWctYmFkZ2UtZnJlZSd9XCI+JHtpc09SUyA/ICdPUlMnIDogJ0xpYnJlJ308L3NwYW4+XHJcbiAgICAgIGA7XHJcbiAgICAgIHNlZ0xpc3RFbC5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHVwZGF0ZUhpbnQoKSB7XHJcbiAgICBpZiAoIWhpbnRFbCkgcmV0dXJuO1xyXG4gICAgaWYgKCFjdXJzb3IpICAgICAgIGhpbnRFbC50ZXh0Q29udGVudCA9ICdDbGlxdWUgc3VyIGxhIGNhcnRlIHBvdXIgcG9zZXIgbGUgcHJlbWllciBwb2ludC4nO1xyXG4gICAgZWxzZSBpZiAoZnJlZU1vZGUpIGhpbnRFbC50ZXh0Q29udGVudCA9ICdNb2RlIGxpYnJlIOKAlCBjaGFxdWUgY2xpYyB0cmFjZSB1bmUgbGlnbmUgZGlyZWN0ZS4nO1xyXG4gICAgZWxzZSAgICAgICAgICAgICAgIGhpbnRFbC50ZXh0Q29udGVudCA9ICdDbGlxdWUgcG91ciBham91dGVyIHVuIHBvaW50IOKAlCBPUlMgY2FsY3VsZSBsZSBjaGVtaW4uJztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNldEhpbnQobXNnKSB7IGlmIChoaW50RWwpIGhpbnRFbC50ZXh0Q29udGVudCA9IG1zZzsgfVxyXG5cclxuICBmdW5jdGlvbiBzZXRTdGF0dXModHlwZSkge1xyXG4gICAgaWYgKCFzdGF0dXNCYXJFbCkgcmV0dXJuO1xyXG4gICAgc3RhdHVzQmFyRWwuY2xhc3NOYW1lID0gJ21hcC1zdGF0dXMnO1xyXG4gICAgc3RhdHVzQmFyRWwuaGlkZGVuICAgID0gZmFsc2U7XHJcbiAgICBpZiAodHlwZSA9PT0gJ2hpZGUnKSB7IHN0YXR1c0JhckVsLmhpZGRlbiA9IHRydWU7IHJldHVybjsgfVxyXG4gICAgY29uc3QgY2xzID0geyBsb2FkOiAnbWFwLXN0YXR1cy0tbG9hZCcsIG9yczogJ21hcC1zdGF0dXMtLW9ycycsIGZyZWU6ICdtYXAtc3RhdHVzLS1mcmVlJyB9O1xyXG4gICAgY29uc3QgdHh0ID0ge1xyXG4gICAgICBsb2FkOiAnPHNwYW4gY2xhc3M9XCJtYXAtc3RhdHVzX19zcGluXCI+PC9zcGFuPkNhbGN1bCBlbiBjb3Vyc+KApicsXHJcbiAgICAgIG9yczogICc8c3BhbiBjbGFzcz1cIm1hcC1zdGF0dXNfX2RvdFwiPjwvc3Bhbj5Nb2RlIENhbGN1bCBhY3RpZicsXHJcbiAgICAgIGZyZWU6ICc8c3BhbiBjbGFzcz1cIm1hcC1zdGF0dXNfX2RvdFwiPjwvc3Bhbj5Nb2RlIExpYnJlIGFjdGlmJyxcclxuICAgIH07XHJcbiAgICBzdGF0dXNCYXJFbC5jbGFzc0xpc3QuYWRkKGNsc1t0eXBlXSk7XHJcbiAgICBzdGF0dXNCYXJFbC5pbm5lckhUTUwgPSB0eHRbdHlwZV07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBmbXREaXN0KG0pIHtcclxuICAgIGlmIChtID09IG51bGwpIHJldHVybiAn4oCUJztcclxuICAgIHJldHVybiBtIDwgMTAwMCA/IGAke01hdGgucm91bmQobSl9IG1gIDogYCR7KG0gLyAxMDAwKS50b0ZpeGVkKDIpLnJlcGxhY2UoJy4nLCAnLCcpfSBrbWA7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBmbXREdXIocykge1xyXG4gICAgaWYgKHMgPT0gbnVsbCkgcmV0dXJuICfigJQnO1xyXG4gICAgcyA9IE1hdGgucm91bmQocyk7XHJcbiAgICBjb25zdCBoID0gTWF0aC5mbG9vcihzIC8gMzYwMCksIG0gPSBNYXRoLmZsb29yKChzICUgMzYwMCkgLyA2MCk7XHJcbiAgICByZXR1cm4gaCA8PSAwID8gYCR7bX0gbWluYCA6IGAke2h9IGggJHtTdHJpbmcobSkucGFkU3RhcnQoMiwgJzAnKX0gbWluYDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHRyeVBhcnNlKHN0cikge1xyXG4gICAgdHJ5IHsgcmV0dXJuIEpTT04ucGFyc2Uoc3RyKTsgfSBjYXRjaCB7IHJldHVybiBudWxsOyB9XHJcbiAgfVxyXG5cclxuICBidG5VbmRvPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHVuZG9MYXN0KTtcclxuICBidG5DbG9zZT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZUxvb3ApO1xyXG4gIGJ0bkNsZWFyPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsZWFyQWxsKTtcclxuICBidG5GcmVlVG9nZ2xlPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZUZyZWUpO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW9ycy1wcm9maWxlXScpLmZvckVhY2goZWwgPT5cclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2V0UHJvZmlsZShlbC5kYXRhc2V0Lm9yc1Byb2ZpbGUpKVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHNhdmVkV3AgID0gY2ZnLmluaXRpYWxXYXlwb2ludHMgICAgPz8gdHJ5UGFyc2Uod3BJbnB1dD8udmFsdWUgICAgPz8gJycpO1xyXG4gIGNvbnN0IHNhdmVkR2VvID0gY2ZnLmluaXRpYWxSb3V0ZUdlb0pzb24gPz8gdHJ5UGFyc2Uocm91dGVJbnB1dD8udmFsdWUgPz8gJycpO1xyXG5cclxuICBpZiAoQXJyYXkuaXNBcnJheShzYXZlZFdwKSAmJiBzYXZlZFdwLmxlbmd0aCA+PSAyICYmIHNhdmVkR2VvKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICByZXN0b3JhdGlvbkxheWVyID0gTC5nZW9KU09OKHNhdmVkR2VvLCB7XHJcbiAgICAgICAgc3R5bGU6ICgpID0+ICh7IGNvbG9yOiAnIzRhN2M1OScsIHdlaWdodDogNSwgb3BhY2l0eTogLjksIGxpbmVDYXA6ICdyb3VuZCcgfSksXHJcbiAgICAgIH0pLmFkZFRvKG1hcCk7XHJcbiAgICAgIGlmIChjZmcuaW5pdGlhbFJvdXRlR2VvSnNvbikgY2ZnLmluaXRpYWxSb3V0ZUdlb0pzb24gPSBudWxsO1xyXG4gICAgfSBjYXRjaCAoZSkgeyBjb25zb2xlLndhcm4oJ1tiYWxhZGUtbWFwXSBHZW9KU09OIGludmFsaWRlJywgZSk7IH1cclxuXHJcbiAgICBzYXZlZFdwLmZvckVhY2goKHAsIGkpID0+IHtcclxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHApIHx8IHAubGVuZ3RoIDwgMikgcmV0dXJuO1xyXG4gICAgICBjb25zdCBsbCA9IEwubGF0TG5nKHBbMF0sIHBbMV0pO1xyXG4gICAgICBpZiAoaSA9PT0gMCkge1xyXG4gICAgICAgIGN1cnNvciA9IGxsO1xyXG4gICAgICAgIHN0YXJ0TWFya2VyID0gTC5tYXJrZXIobGwsIHsgaWNvbjogSUMuc3RhcnQgfSkuYWRkVG8obWFwKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBwcmV2ID0gc2F2ZWRXcFtpIC0gMV07XHJcbiAgICAgICAgY29uc3QgZnJvbSA9IEwubGF0TG5nKHByZXZbMF0sIHByZXZbMV0pO1xyXG4gICAgICAgIGNvbnN0IHR5cGUgPSBwcmV2WzJdID8/ICdvcnMnO1xyXG4gICAgICAgIHNlZ21lbnRzLnB1c2goe1xyXG4gICAgICAgICAgdHlwZSwgZnJvbSwgdG86IGxsLFxyXG4gICAgICAgICAgcG9pbnRzOiBbZnJvbSwgbGxdLFxyXG4gICAgICAgICAgbGF5ZXJzOiBbXSxcclxuICAgICAgICAgIGRpc3RhbmNlTWV0ZXJzOiAgZnJvbS5kaXN0YW5jZVRvKGxsKSxcclxuICAgICAgICAgIGR1cmF0aW9uU2Vjb25kczogKGZyb20uZGlzdGFuY2VUbyhsbCkgLyAxMDAwIC8gNCkgKiAzNjAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG1vdmVDdXJzb3IobGwpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBtYXAuZml0Qm91bmRzKEwubGF0TG5nQm91bmRzKHNhdmVkV3AubWFwKHAgPT4gTC5sYXRMbmcocFswXSwgcFsxXSkpKSwgeyBwYWRkaW5nOiBbMzAsIDMwXSB9KTtcclxuICAgIHNldFN0YXR1cyhmcmVlTW9kZSA/ICdmcmVlJyA6ICdvcnMnKTtcclxuXHJcbiAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHNhdmVkV3ApICYmIHNhdmVkV3AubGVuZ3RoID09PSAxKSB7XHJcbiAgICBjb25zdCBsbCA9IEwubGF0TG5nKHNhdmVkV3BbMF1bMF0sIHNhdmVkV3BbMF1bMV0pO1xyXG4gICAgY3Vyc29yID0gbGw7XHJcbiAgICBzdGFydE1hcmtlciA9IEwubWFya2VyKGxsLCB7IGljb246IElDLnN0YXJ0IH0pLmFkZFRvKG1hcCk7XHJcbiAgICBtYXAuc2V0VmlldyhsbCwgMTUpO1xyXG4gICAgc2V0U3RhdHVzKGZyZWVNb2RlID8gJ2ZyZWUnIDogJ29ycycpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZXhpc3RpbmdEaXN0ID0gY2ZnLmluaXRpYWxEaXN0YW5jZSA/PyAoZGlzdElucHV0Py52YWx1ZSAgPyBwYXJzZUZsb2F0KGRpc3RJbnB1dC52YWx1ZSkgIDogbnVsbCk7XHJcbiAgY29uc3QgZXhpc3RpbmdEdXIgID0gY2ZnLmluaXRpYWxEdXJhdGlvbiA/PyAoZHVySW5wdXQ/LnZhbHVlICAgPyBwYXJzZUZsb2F0KGR1cklucHV0LnZhbHVlKSAgIDogbnVsbCk7XHJcbiAgaWYgKGV4aXN0aW5nRGlzdCAhPSBudWxsICYmIHNlZ21lbnRzLmxlbmd0aCkge1xyXG4gICAgaWYgKHN0YXRzQm94KSAgIHN0YXRzQm94LnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWZsZXgnO1xyXG4gICAgaWYgKGRpc3RhbmNlRWwpIGRpc3RhbmNlRWwudGV4dENvbnRlbnQgPSBmbXREaXN0KGV4aXN0aW5nRGlzdCk7XHJcbiAgICBpZiAoZHVyYXRpb25FbCkgZHVyYXRpb25FbC50ZXh0Q29udGVudCA9IGZtdER1cihleGlzdGluZ0R1cik7XHJcbiAgfVxyXG5cclxuICBzZXRQcm9maWxlKG9yc1Byb2ZpbGUpO1xyXG4gIHJlbmRlclNlZ0xpc3QoKTtcclxuICB1cGRhdGVIaW50KCk7XHJcbn1cclxuIiwiaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XHJcbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvY3NzL2FsbC5taW4uY3NzJztcclxuaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9qcy9hbGwuanMnO1xyXG5cclxuaW1wb3J0IEwgZnJvbSAnbGVhZmxldCc7XHJcbmltcG9ydCAnbGVhZmxldC9kaXN0L2xlYWZsZXQuY3NzJztcclxuXHJcbmltcG9ydCAnbGVhZmxldC1kcmF3JztcclxuaW1wb3J0ICdsZWFmbGV0LWRyYXcvZGlzdC9sZWFmbGV0LmRyYXcuY3NzJztcclxuXHJcbmltcG9ydCAnbGVhZmxldC1yb3V0aW5nLW1hY2hpbmUnO1xyXG5pbXBvcnQgJ2xlYWZsZXQtcm91dGluZy1tYWNoaW5lL2Rpc3QvbGVhZmxldC1yb3V0aW5nLW1hY2hpbmUuY3NzJztcclxuXHJcbmltcG9ydCBtYXJrZXJJY29uIGZyb20gJ2xlYWZsZXQvZGlzdC9pbWFnZXMvbWFya2VyLWljb24ucG5nJztcclxuaW1wb3J0IG1hcmtlclNoYWRvdyBmcm9tICdsZWFmbGV0L2Rpc3QvaW1hZ2VzL21hcmtlci1zaGFkb3cucG5nJztcclxuXHJcbmltcG9ydCAnbGVhZmxldC1jb250cm9sLWdlb2NvZGVyL2Rpc3QvQ29udHJvbC5HZW9jb2Rlci5jc3MnO1xyXG5cclxuZGVsZXRlIEwuSWNvbi5EZWZhdWx0LnByb3RvdHlwZS5fZ2V0SWNvblVybDtcclxuTC5JY29uLkRlZmF1bHQubWVyZ2VPcHRpb25zKHtcclxuICBpY29uVXJsOiBtYXJrZXJJY29uLFxyXG4gIHNoYWRvd1VybDogbWFya2VyU2hhZG93LFxyXG59KTtcclxuXHJcbndpbmRvdy5MID0gTDtcclxuXHJcbmltcG9ydCB7IGluaXRCYWxhZGVNYXAgfSBmcm9tICcuL0phdmFzY3JpcHQvYmFsYWRlLW1hcC5qcyc7XHJcbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJykpIHtcclxuICAgIGluaXRCYWxhZGVNYXAoKTtcclxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJlIiwidCIsInIiLCJTeW1ib2wiLCJuIiwiaXRlcmF0b3IiLCJvIiwidG9TdHJpbmdUYWciLCJpIiwiYyIsInByb3RvdHlwZSIsIkdlbmVyYXRvciIsInUiLCJPYmplY3QiLCJjcmVhdGUiLCJfcmVnZW5lcmF0b3JEZWZpbmUyIiwiZiIsInAiLCJ5IiwiRyIsInYiLCJhIiwiZCIsImJpbmQiLCJsZW5ndGgiLCJsIiwiVHlwZUVycm9yIiwiY2FsbCIsImRvbmUiLCJ2YWx1ZSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJnZXRQcm90b3R5cGVPZiIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiZGlzcGxheU5hbWUiLCJfcmVnZW5lcmF0b3IiLCJ3IiwibSIsImRlZmluZVByb3BlcnR5IiwiX3JlZ2VuZXJhdG9yRGVmaW5lIiwiX2ludm9rZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIl90b0NvbnN1bWFibGVBcnJheSIsIl9hcnJheVdpdGhvdXRIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXkiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVTcHJlYWQiLCJBcnJheSIsImZyb20iLCJpc0FycmF5IiwiX2FycmF5TGlrZVRvQXJyYXkiLCJvd25LZXlzIiwia2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsImZpbHRlciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInB1c2giLCJhcHBseSIsIl9vYmplY3RTcHJlYWQiLCJhcmd1bWVudHMiLCJmb3JFYWNoIiwiX2RlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJfdG9Qcm9wZXJ0eUtleSIsIl90b1ByaW1pdGl2ZSIsIl90eXBlb2YiLCJ0b1ByaW1pdGl2ZSIsIlN0cmluZyIsIk51bWJlciIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX25leHQiLCJfdGhyb3ciLCJfc2xpY2VkVG9BcnJheSIsIl9hcnJheVdpdGhIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXlMaW1pdCIsIl9ub25JdGVyYWJsZVJlc3QiLCJ0b1N0cmluZyIsInNsaWNlIiwiY29uc3RydWN0b3IiLCJuYW1lIiwidGVzdCIsIm5leHQiLCJMQ0ciLCJpbml0QmFsYWRlTWFwIiwiX2NmZyRkZWZhdWx0VmlldyIsIl9jZmckb3JzUHJvZmlsZSIsIl9jZmckaW5pdGlhbFdheXBvaW50cyIsIl93cElucHV0JHZhbHVlIiwiX2NmZyRpbml0aWFsUm91dGVHZW9KIiwiX3JvdXRlSW5wdXQkdmFsdWUiLCJfY2ZnJGluaXRpYWxEaXN0YW5jZSIsIl9jZmckaW5pdGlhbER1cmF0aW9uIiwiY2ZnIiwid2luZG93IiwiQkFMQURFX01BUF9DT05GSUciLCJfcmVmIiwiZGVmYXVsdFZpZXciLCJfcmVmMiIsImRlZkxhdCIsImRlZkxuZyIsImRlZlpvb20iLCJtYXAiLCJMIiwiZG91YmxlQ2xpY2tab29tIiwic2V0VmlldyIsInNldFRpbWVvdXQiLCJpbnZhbGlkYXRlU2l6ZSIsInRpbGVMYXllciIsImF0dHJpYnV0aW9uIiwibWF4Wm9vbSIsImFkZFRvIiwiZ2VvY29kZXIiLCJnZW9jb2RlcnMiLCJub21pbmF0aW0iLCJkZWZhdWx0TWFya0dlb2NvZGUiLCJwbGFjZWhvbGRlciIsImVycm9yTWVzc2FnZSIsInNob3dSZXN1bHRJY29ucyIsImNvbGxhcHNlZCIsIm9uIiwiX2UkZ2VvY29kZSIsImdlb2NvZGUiLCJjZW50ZXIiLCJiYm94IiwiZml0Qm91bmRzIiwibGF0TG5nQm91bmRzIiwicGFkIiwid3BJbnB1dCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb3V0ZUlucHV0IiwiZGlzdElucHV0IiwiZHVySW5wdXQiLCJidG5VbmRvIiwiYnRuQ2xvc2UiLCJidG5DbGVhciIsImJ0bkZyZWVUb2dnbGUiLCJwaWxsRWwiLCJmcmVlRGVzY0VsIiwiaGludEVsIiwic3RhdHVzQmFyRWwiLCJzdGF0c0JveCIsImRpc3RhbmNlRWwiLCJkdXJhdGlvbkVsIiwic2VnTGlzdEVsIiwib3JzUHJvZmlsZSIsImZyZWVNb2RlIiwiY3Vyc29yIiwic2VnbWVudHMiLCJzdGFydE1hcmtlciIsImN1cnNvck1rIiwicHJldmlld0xpbmUiLCJvcnNTZXEiLCJyZXN0b3JhdGlvbkxheWVyIiwibWFrZVBpbiIsImJnIiwiZW1vamkiLCJkaXZJY29uIiwiaHRtbCIsImNvbmNhdCIsImNsYXNzTmFtZSIsImljb25TaXplIiwiaWNvbkFuY2hvciIsIklDIiwic3RhcnQiLCJsYXRsbmciLCJtYXJrZXIiLCJpY29uIiwic2V0U3RhdHVzIiwiYWRkRnJlZVNlZyIsImFkZE9SU1NlZyIsInVwZGF0ZUhpbnQiLCJyZW5kZXJTZWdMaXN0IiwicGVyc2lzdCIsInJlbW92ZUxheWVyIiwicG9seWxpbmUiLCJjb2xvciIsIndlaWdodCIsIm9wYWNpdHkiLCJkYXNoQXJyYXkiLCJsaW5lQ2FwIiwidG8iLCJjbGVhckxheWVycyIsInJlbW92ZSIsInB0cyIsImxheWVycyIsImRyYXdQb2x5IiwiZGlzdE0iLCJkaXN0YW5jZVRvIiwidHlwZSIsInBvaW50cyIsImRpc3RhbmNlTWV0ZXJzIiwiZHVyYXRpb25TZWNvbmRzIiwibW92ZUN1cnNvciIsInVwZGF0ZVN0YXRzIiwiX3giLCJfeDIiLCJfYWRkT1JTU2VnIiwiX2NhbGxlZSIsInNlcSIsIl9kYXRhJGdlb2pzb24kZ2VvbWV0ciIsIl9kYXRhJGdlb2pzb24iLCJfZGF0YSRkaXN0YW5jZSIsIl9kYXRhJGR1cmF0aW9uIiwicmVzIiwiZGF0YSIsImNvb3JkcyIsImR1clMiLCJfdCIsIl9jb250ZXh0IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJsYXQiLCJsbmciLCJwcm9maWxlIiwianNvbiIsIm9rIiwiY29uc29sZSIsImVycm9yIiwic2V0SGludCIsImdlb2pzb24iLCJnZW9tZXRyeSIsImNvb3JkaW5hdGVzIiwibGF0TG5nIiwiZGlzdGFuY2UiLCJkdXJhdGlvbiIsInNoYWRvdyIsImxpbmUiLCJsaW5lSm9pbiIsInJlbW92ZUxheWVycyIsImxsIiwiY2xvc2VMb29wIiwiZmlyc3QiLCJzYW1lIiwiTWF0aCIsImFicyIsInVuZG9MYXN0Iiwic2VnIiwicG9wIiwiY2xlYXJBbGwiLCJlYWNoTGF5ZXIiLCJzIiwiUG9seWxpbmUiLCJHZW9KU09OIiwidG9nZ2xlRnJlZSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInRleHRDb250ZW50IiwiZ2V0Q29udGFpbmVyIiwic3R5bGUiLCJzZXRQcm9maWxlIiwicXVlcnlTZWxlY3RvckFsbCIsImVsIiwiZGF0YXNldCIsIndwcyIsImFsbENvb3JkcyIsInRvdGFsRGlzdCIsInJlZHVjZSIsIl9zJGRpc3RhbmNlTWV0ZXJzIiwidG90YWxEdXIiLCJfcyRkdXJhdGlvblNlY29uZHMiLCJmZWF0dXJlcyIsInByb3BlcnRpZXMiLCJzdW1tYXJ5Iiwicm91bmQiLCJkaXNwbGF5IiwiX3MkZGlzdGFuY2VNZXRlcnMyIiwiX3MkZHVyYXRpb25TZWNvbmRzMiIsImZtdERpc3QiLCJmbXREdXIiLCJpbm5lckhUTUwiLCJpc09SUyIsImxpIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwibXNnIiwiaGlkZGVuIiwiY2xzIiwibG9hZCIsIm9ycyIsImZyZWUiLCJ0eHQiLCJhZGQiLCJ0b0ZpeGVkIiwicmVwbGFjZSIsImgiLCJmbG9vciIsInBhZFN0YXJ0IiwidHJ5UGFyc2UiLCJzdHIiLCJwYXJzZSIsIl91bnVzZWQiLCJhZGRFdmVudExpc3RlbmVyIiwic2F2ZWRXcCIsImluaXRpYWxXYXlwb2ludHMiLCJzYXZlZEdlbyIsImluaXRpYWxSb3V0ZUdlb0pzb24iLCJnZW9KU09OIiwid2FybiIsIl9wcmV2JCIsInByZXYiLCJwYWRkaW5nIiwiZXhpc3RpbmdEaXN0IiwiaW5pdGlhbERpc3RhbmNlIiwicGFyc2VGbG9hdCIsImV4aXN0aW5nRHVyIiwiaW5pdGlhbER1cmF0aW9uIiwibWFya2VySWNvbiIsIm1hcmtlclNoYWRvdyIsIkljb24iLCJEZWZhdWx0IiwiX2dldEljb25VcmwiLCJtZXJnZU9wdGlvbnMiLCJpY29uVXJsIiwic2hhZG93VXJsIl0sInNvdXJjZVJvb3QiOiIifQ==