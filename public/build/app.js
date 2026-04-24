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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ekI7QUFDVTtBQUVaO0FBQ3NCO0FBRVg7QUFDaUM7QUFFTDtBQUNJO0FBRUw7QUFFNUQsT0FBT3JFLHFEQUFNLENBQUNvTixPQUFPLENBQUN4VCxTQUFTLENBQUN5VCxXQUFXO0FBQzNDck4sbURBQU0sQ0FBQ29OLE9BQU8sQ0FBQ0UsWUFBWSxDQUFDO0VBQzFCQyxPQUFPLEVBQUVOLGdFQUFVO0VBQ25CTyxTQUFTLEVBQUVOLG1FQUFZQTtBQUN6QixDQUFDLENBQUM7QUFFRjNOLE1BQU0sQ0FBQ1MsQ0FBQyxHQUFHQSxnREFBQztBQUUrQztBQUMzRCxJQUFJMEIsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDLEVBQUU7RUFDaEM5Qyx5RUFBYSxDQUFDLENBQUM7QUFDbkIsQzs7Ozs7Ozs7Ozs7QUM3QkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvSmF2YXNjcmlwdC9iYWxhZGUtbWFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBMQ0cgZnJvbSAnbGVhZmxldC1jb250cm9sLWdlb2NvZGVyJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0QmFsYWRlTWFwKCkge1xyXG5cclxuICBjb25zdCBjZmcgPSB3aW5kb3cuQkFMQURFX01BUF9DT05GSUcgfHwge307XHJcblxyXG4gIC8vIOKUgOKUgCBDYXJ0ZSDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcclxuICBjb25zdCBbZGVmTGF0LCBkZWZMbmcsIGRlZlpvb21dID0gY2ZnLmRlZmF1bHRWaWV3ID8/IFs0NC44Mzc4LCAtMC41NzkyLCAxM107XHJcbiAgY29uc3QgbWFwID0gTC5tYXAoJ21hcCcsIHsgZG91YmxlQ2xpY2tab29tOiBmYWxzZSB9KS5zZXRWaWV3KFtkZWZMYXQsIGRlZkxuZ10sIGRlZlpvb20pO1xyXG4gIHNldFRpbWVvdXQoKCkgPT4gbWFwLmludmFsaWRhdGVTaXplKCksIDE1MCk7XHJcblxyXG4gIEwudGlsZUxheWVyKCdodHRwczovL3tzfS50aWxlLm9wZW5zdHJlZXRtYXAuZnIvb3NtZnIve3p9L3t4fS97eX0ucG5nJywge1xyXG4gICAgYXR0cmlidXRpb246ICcmY29weTsgT3BlblN0cmVldE1hcCBjb250cmlidXRvcnMnLCBtYXhab29tOiAxOSxcclxuICB9KS5hZGRUbyhtYXApO1xyXG5cclxuICAvLyDilIDilIAgUmVjaGVyY2hlIGfDqW9jb2RhZ2Ug4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXHJcbiAgTENHLmdlb2NvZGVyKHtcclxuICAgIGdlb2NvZGVyOiBMQ0cuZ2VvY29kZXJzLm5vbWluYXRpbSgpLFxyXG4gICAgZGVmYXVsdE1hcmtHZW9jb2RlOiBmYWxzZSxcclxuICAgIHBsYWNlaG9sZGVyOiAnUmVjaGVyY2hlciB1biBsaWV14oCmJyxcclxuICAgIGVycm9yTWVzc2FnZTogJ0F1Y3VuIHLDqXN1bHRhdC4nLFxyXG4gICAgc2hvd1Jlc3VsdEljb25zOiBmYWxzZSxcclxuICAgIGNvbGxhcHNlZDogdHJ1ZSxcclxuICB9KVxyXG4gIC5vbignbWFya2dlb2NvZGUnLCAoZSkgPT4ge1xyXG4gICAgY29uc3QgeyBjZW50ZXIsIGJib3ggfSA9IGUuZ2VvY29kZTtcclxuICAgIG1hcC5maXRCb3VuZHMoYmJveCA/PyBMLmxhdExuZ0JvdW5kcyhbY2VudGVyLCBjZW50ZXJdKS5wYWQoMC4wNSkpO1xyXG4gIH0pXHJcbiAgLmFkZFRvKG1hcCk7XHJcblxyXG4gIGNvbnN0IHdwSW5wdXQgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFsYWRlX3dheXBvaW50c0pzb24nKTtcclxuICBjb25zdCByb3V0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhbGFkZV9yb3V0ZUdlb0pzb24nKTtcclxuICBjb25zdCBkaXN0SW5wdXQgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhbGFkZV9kaXN0YW5jZU1ldGVycycpO1xyXG4gIGNvbnN0IGR1cklucHV0ICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFsYWRlX2R1cmF0aW9uU2Vjb25kcycpO1xyXG5cclxuICBjb25zdCBidG5VbmRvICAgICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi11bmRvJyk7XHJcbiAgY29uc3QgYnRuQ2xvc2UgICAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tY2xvc2UnKTtcclxuICBjb25zdCBidG5DbGVhciAgICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1jbGVhcicpO1xyXG4gIGNvbnN0IGJ0bkZyZWVUb2dnbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLWZyZWUtdG9nZ2xlJyk7XHJcbiAgY29uc3QgcGlsbEVsICAgICAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmcmVlLXRvZ2dsZS1waWxsJyk7XHJcbiAgY29uc3QgZnJlZURlc2NFbCAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmcmVlLXRvZ2dsZS1kZXNjJyk7XHJcbiAgY29uc3QgaGludEVsICAgICAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAtaGludCcpO1xyXG4gIGNvbnN0IHN0YXR1c0JhckVsICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwLXN0YXR1cycpO1xyXG4gIGNvbnN0IHN0YXRzQm94ICAgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm91dGUtc3RhdHMnKTtcclxuICBjb25zdCBkaXN0YW5jZUVsICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JvdXRlLWRpc3RhbmNlJyk7XHJcbiAgY29uc3QgZHVyYXRpb25FbCAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb3V0ZS1kdXJhdGlvbicpO1xyXG4gIGNvbnN0IHNlZ0xpc3RFbCAgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VnLWxpc3QnKTtcclxuXHJcbiAgbGV0IG9yc1Byb2ZpbGUgICAgICA9IGNmZy5vcnNQcm9maWxlID8/ICdmb290LXdhbGtpbmcnO1xyXG4gIGxldCBmcmVlTW9kZSAgICAgICAgPSBmYWxzZTtcclxuICBsZXQgY3Vyc29yICAgICAgICAgID0gbnVsbDtcclxuICBsZXQgc2VnbWVudHMgICAgICAgID0gW107XHJcbiAgbGV0IHN0YXJ0TWFya2VyICAgICA9IG51bGw7XHJcbiAgbGV0IGN1cnNvck1rICAgICAgICA9IG51bGw7XHJcbiAgbGV0IHByZXZpZXdMaW5lICAgICA9IG51bGw7XHJcbiAgbGV0IG9yc1NlcSAgICAgICAgICA9IDA7XHJcbiAgbGV0IHJlc3RvcmF0aW9uTGF5ZXIgPSBudWxsO1xyXG5cclxuICAvLyDilIDilIAgSWPDtG5lcyDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcclxuICBmdW5jdGlvbiBtYWtlUGluKGJnLCBlbW9qaSkge1xyXG4gICAgcmV0dXJuIEwuZGl2SWNvbih7XHJcbiAgICAgIGh0bWw6IGA8ZGl2IHN0eWxlPVwiYmFja2dyb3VuZDoke2JnfTt3aWR0aDozMnB4O2hlaWdodDozMnB4O2JvcmRlci1yYWRpdXM6NTAlIDUwJSA1MCUgMDtcclxuICAgICAgICB0cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7Ym9yZGVyOjNweCBzb2xpZCB3aGl0ZTtib3gtc2hhZG93OjAgMnB4IDhweCByZ2JhKDAsMCwwLC4yOCk7XHJcbiAgICAgICAgZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyXCI+XHJcbiAgICAgICAgPHNwYW4gc3R5bGU9XCJ0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTtmb250LXNpemU6MTRweFwiPiR7ZW1vaml9PC9zcGFuPjwvZGl2PmAsXHJcbiAgICAgIGNsYXNzTmFtZTogJycsIGljb25TaXplOiBbMzIsIDMyXSwgaWNvbkFuY2hvcjogWzE2LCAzMl0sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IElDID0geyBzdGFydDogbWFrZVBpbignIzRhN2M1OScsICfwn4+gJyksIGN1cnNvcjogbWFrZVBpbignI2U4NzA0MCcsICfwn5C+JykgfTtcclxuXHJcbiAgbWFwLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBpZiAoIWN1cnNvcikge1xyXG4gICAgICBjdXJzb3IgPSBlLmxhdGxuZztcclxuICAgICAgc3RhcnRNYXJrZXIgPSBMLm1hcmtlcihjdXJzb3IsIHsgaWNvbjogSUMuc3RhcnQgfSkuYWRkVG8obWFwKTtcclxuICAgICAgc2V0U3RhdHVzKGZyZWVNb2RlID8gJ2ZyZWUnIDogJ29ycycpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKGZyZWVNb2RlKSBhZGRGcmVlU2VnKGN1cnNvciwgZS5sYXRsbmcpO1xyXG4gICAgICBlbHNlICAgICAgICAgIGFkZE9SU1NlZyhjdXJzb3IsIGUubGF0bG5nKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZUhpbnQoKTtcclxuICAgIHJlbmRlclNlZ0xpc3QoKTtcclxuICAgIHBlcnNpc3QoKTtcclxuICB9KTtcclxuXHJcbiAgbWFwLm9uKCdtb3VzZW1vdmUnLCAoZSkgPT4ge1xyXG4gICAgaWYgKCFjdXJzb3IpIHJldHVybjtcclxuICAgIGlmIChwcmV2aWV3TGluZSkgeyBtYXAucmVtb3ZlTGF5ZXIocHJldmlld0xpbmUpOyBwcmV2aWV3TGluZSA9IG51bGw7IH1cclxuICAgIHByZXZpZXdMaW5lID0gTC5wb2x5bGluZShbY3Vyc29yLCBlLmxhdGxuZ10sIHtcclxuICAgICAgY29sb3I6IGZyZWVNb2RlID8gJyM3YjVlYTcnIDogJyM0YTdjNTknLFxyXG4gICAgICB3ZWlnaHQ6IDMsIG9wYWNpdHk6IC40LCBkYXNoQXJyYXk6ICc1IDgnLCBsaW5lQ2FwOiAncm91bmQnLFxyXG4gICAgfSkuYWRkVG8obWFwKTtcclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gYWRkRnJlZVNlZyhmcm9tLCB0bykge1xyXG4gICAgaWYgKHJlc3RvcmF0aW9uTGF5ZXIpIHsgcmVzdG9yYXRpb25MYXllci5jbGVhckxheWVycygpOyByZXN0b3JhdGlvbkxheWVyLnJlbW92ZSgpOyByZXN0b3JhdGlvbkxheWVyID0gbnVsbDsgfVxyXG4gICAgY29uc3QgcHRzICAgID0gW2Zyb20sIHRvXTtcclxuICAgIGNvbnN0IGxheWVycyA9IGRyYXdQb2x5KHB0cywgJ2ZyZWUnKTtcclxuICAgIGNvbnN0IGRpc3RNICA9IGZyb20uZGlzdGFuY2VUbyh0byk7XHJcbiAgICBzZWdtZW50cy5wdXNoKHsgdHlwZTogJ2ZyZWUnLCBmcm9tLCB0bywgcG9pbnRzOiBwdHMsIGxheWVycyxcclxuICAgICAgZGlzdGFuY2VNZXRlcnM6IGRpc3RNLCBkdXJhdGlvblNlY29uZHM6IChkaXN0TSAvIDEwMDAgLyA0KSAqIDM2MDAgfSk7XHJcbiAgICBtb3ZlQ3Vyc29yKHRvKTtcclxuICAgIHVwZGF0ZVN0YXRzKCk7XHJcbiAgICByZW5kZXJTZWdMaXN0KCk7XHJcbiAgICBwZXJzaXN0KCk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBhZGRPUlNTZWcoZnJvbSwgdG8pIHtcclxuICAgIGlmIChyZXN0b3JhdGlvbkxheWVyKSB7IHJlc3RvcmF0aW9uTGF5ZXIuY2xlYXJMYXllcnMoKTsgcmVzdG9yYXRpb25MYXllci5yZW1vdmUoKTsgcmVzdG9yYXRpb25MYXllciA9IG51bGw7IH1cclxuICAgIGNvbnN0IHNlcSA9ICsrb3JzU2VxO1xyXG4gICAgc2V0U3RhdHVzKCdsb2FkJyk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9hcGkvaGlraW5nLXJvdXRlJywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIHBvaW50czogIFtbZnJvbS5sYXQsIGZyb20ubG5nXSwgW3RvLmxhdCwgdG8ubG5nXV0sXHJcbiAgICAgICAgICBwcm9maWxlOiBvcnNQcm9maWxlLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChzZXEgIT09IG9yc1NlcSkgcmV0dXJuO1xyXG5cclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgICBpZiAoIXJlcy5vaykge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tPUlNdJywgZGF0YSk7XHJcbiAgICAgICAgc2V0U3RhdHVzKGZyZWVNb2RlID8gJ2ZyZWUnIDogJ29ycycpO1xyXG4gICAgICAgIHNldEhpbnQoJ+KaoO+4jyBFcnJldXIgT1JTIOKAlCB2w6lyaWZpZXogbGEgY29uc29sZS4nKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGNvb3JkcyA9IGRhdGEuZ2VvanNvbj8uZ2VvbWV0cnk/LmNvb3JkaW5hdGVzID8/IFtdO1xyXG4gICAgICBpZiAoIWNvb3Jkcy5sZW5ndGgpIHtcclxuICAgICAgICBzZXRTdGF0dXMoZnJlZU1vZGUgPyAnZnJlZScgOiAnb3JzJyk7XHJcbiAgICAgICAgc2V0SGludCgn4pqg77iPIE9SUyBuXFwnYSByZXRvdXJuw6kgYXVjdW4gdHJhY8OpLicpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgcHRzICAgPSBjb29yZHMubWFwKGMgPT4gTC5sYXRMbmcoY1sxXSwgY1swXSkpO1xyXG4gICAgICBjb25zdCBkaXN0TSA9IGRhdGEuZGlzdGFuY2UgPz8gZnJvbS5kaXN0YW5jZVRvKHRvKTtcclxuICAgICAgY29uc3QgZHVyUyAgPSBkYXRhLmR1cmF0aW9uID8/IChkaXN0TSAvIDEwMDAgLyA0KSAqIDM2MDA7XHJcblxyXG4gICAgICBzZWdtZW50cy5wdXNoKHsgdHlwZTogJ29ycycsIGZyb20sIHRvLFxyXG4gICAgICAgIHBvaW50czogcHRzLCBsYXllcnM6IGRyYXdQb2x5KHB0cywgJ29ycycpLFxyXG4gICAgICAgIGRpc3RhbmNlTWV0ZXJzOiBkaXN0TSwgZHVyYXRpb25TZWNvbmRzOiBkdXJTIH0pO1xyXG5cclxuICAgICAgbW92ZUN1cnNvcih0byk7XHJcbiAgICAgIHVwZGF0ZVN0YXRzKCk7XHJcbiAgICAgIHJlbmRlclNlZ0xpc3QoKTtcclxuICAgICAgc2V0U3RhdHVzKGZyZWVNb2RlID8gJ2ZyZWUnIDogJ29ycycpO1xyXG4gICAgICB1cGRhdGVIaW50KCk7XHJcbiAgICAgIHBlcnNpc3QoKTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgaWYgKHNlcSAhPT0gb3JzU2VxKSByZXR1cm47XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tPUlNdJywgZXJyKTtcclxuICAgICAgc2V0U3RhdHVzKGZyZWVNb2RlID8gJ2ZyZWUnIDogJ29ycycpO1xyXG4gICAgICBzZXRIaW50KCfimqDvuI8gSW1wb3NzaWJsZSBkZSBqb2luZHJlIC9hcGkvaGlraW5nLXJvdXRlLicpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZHJhd1BvbHkocHRzLCB0eXBlKSB7XHJcbiAgICBjb25zdCBjb2xvciAgPSB0eXBlID09PSAnb3JzJyA/ICcjNGE3YzU5JyA6ICcjN2I1ZWE3JztcclxuICAgIGNvbnN0IHNoYWRvdyA9IEwucG9seWxpbmUocHRzLCB7IGNvbG9yOiAnIzNkMmIxZicsIHdlaWdodDogOSwgb3BhY2l0eTogLjA3IH0pLmFkZFRvKG1hcCk7XHJcbiAgICBjb25zdCBsaW5lICAgPSBMLnBvbHlsaW5lKHB0cywge1xyXG4gICAgICBjb2xvciwgd2VpZ2h0OiA1LCBvcGFjaXR5OiAuOSwgbGluZUNhcDogJ3JvdW5kJywgbGluZUpvaW46ICdyb3VuZCcsXHJcbiAgICAgIC4uLih0eXBlID09PSAnZnJlZScgPyB7IGRhc2hBcnJheTogJzggNicgfSA6IHt9KSxcclxuICAgIH0pLmFkZFRvKG1hcCk7XHJcbiAgICByZXR1cm4gW3NoYWRvdywgbGluZV07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZW1vdmVMYXllcnMobGF5ZXJzKSB7IGxheWVycy5mb3JFYWNoKGwgPT4gbWFwLnJlbW92ZUxheWVyKGwpKTsgfVxyXG5cclxuICBmdW5jdGlvbiBtb3ZlQ3Vyc29yKGxsKSB7XHJcbiAgICBjdXJzb3IgPSBsbDtcclxuICAgIGlmIChjdXJzb3JNaykgbWFwLnJlbW92ZUxheWVyKGN1cnNvck1rKTtcclxuICAgIGN1cnNvck1rID0gTC5tYXJrZXIobGwsIHsgaWNvbjogSUMuY3Vyc29yIH0pLmFkZFRvKG1hcCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjbG9zZUxvb3AoKSB7XHJcbiAgICBpZiAoIWN1cnNvciB8fCAhc2VnbWVudHMubGVuZ3RoKSByZXR1cm47XHJcbiAgICBjb25zdCBmaXJzdCA9IHNlZ21lbnRzWzBdLmZyb207XHJcbiAgICBjb25zdCBzYW1lICA9IE1hdGguYWJzKGN1cnNvci5sYXQgLSBmaXJzdC5sYXQpIDwgMWUtNlxyXG4gICAgICAgICAgICAgICAmJiBNYXRoLmFicyhjdXJzb3IubG5nIC0gZmlyc3QubG5nKSA8IDFlLTY7XHJcbiAgICBpZiAoc2FtZSkgcmV0dXJuO1xyXG4gICAgaWYgKGZyZWVNb2RlKSBhZGRGcmVlU2VnKGN1cnNvciwgZmlyc3QpO1xyXG4gICAgZWxzZSAgICAgICAgICBhZGRPUlNTZWcoY3Vyc29yLCBmaXJzdCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB1bmRvTGFzdCgpIHtcclxuICAgIGlmIChwcmV2aWV3TGluZSkgeyBtYXAucmVtb3ZlTGF5ZXIocHJldmlld0xpbmUpOyBwcmV2aWV3TGluZSA9IG51bGw7IH1cclxuXHJcbiAgICBpZiAoc2VnbWVudHMubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IHNlZyA9IHNlZ21lbnRzLnBvcCgpO1xyXG4gICAgICByZW1vdmVMYXllcnMoc2VnLmxheWVycyk7XHJcbiAgICAgIGN1cnNvciA9IHNlZy5mcm9tO1xyXG4gICAgICBpZiAoY3Vyc29yTWspIHsgbWFwLnJlbW92ZUxheWVyKGN1cnNvck1rKTsgY3Vyc29yTWsgPSBudWxsOyB9XHJcbiAgICAgIGlmIChzZWdtZW50cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBpZiAoc3RhcnRNYXJrZXIpIG1hcC5yZW1vdmVMYXllcihzdGFydE1hcmtlcik7XHJcbiAgICAgICAgc3RhcnRNYXJrZXIgPSBMLm1hcmtlcihjdXJzb3IsIHsgaWNvbjogSUMuc3RhcnQgfSkuYWRkVG8obWFwKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjdXJzb3JNayA9IEwubWFya2VyKGN1cnNvciwgeyBpY29uOiBJQy5jdXJzb3IgfSkuYWRkVG8obWFwKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChjdXJzb3IpIHtcclxuICAgICAgaWYgKHN0YXJ0TWFya2VyKSB7IG1hcC5yZW1vdmVMYXllcihzdGFydE1hcmtlcik7IHN0YXJ0TWFya2VyID0gbnVsbDsgfVxyXG4gICAgICBpZiAoY3Vyc29yTWspICAgIHsgbWFwLnJlbW92ZUxheWVyKGN1cnNvck1rKTsgICAgY3Vyc29yTWsgICAgPSBudWxsOyB9XHJcbiAgICAgIGN1cnNvciA9IG51bGw7XHJcbiAgICAgIHNldFN0YXR1cygnaGlkZScpO1xyXG4gICAgfSBlbHNlIHJldHVybjtcclxuXHJcbiAgICByZW5kZXJTZWdMaXN0KCk7XHJcbiAgICB1cGRhdGVTdGF0cygpO1xyXG4gICAgdXBkYXRlSGludCgpO1xyXG4gICAgcGVyc2lzdCgpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2xlYXJBbGwoKSB7XHJcbiAgICBvcnNTZXErKztcclxuXHJcbiAgICBpZiAocmVzdG9yYXRpb25MYXllcikge1xyXG4gICAgICByZXN0b3JhdGlvbkxheWVyLmVhY2hMYXllcihsID0+IG1hcC5yZW1vdmVMYXllcihsKSk7XHJcbiAgICAgIHJlc3RvcmF0aW9uTGF5ZXIuY2xlYXJMYXllcnMoKTtcclxuICAgICAgbWFwLnJlbW92ZUxheWVyKHJlc3RvcmF0aW9uTGF5ZXIpO1xyXG4gICAgICByZXN0b3JhdGlvbkxheWVyID0gbnVsbDtcclxuICAgIH1cclxuICAgIHNlZ21lbnRzLmZvckVhY2gocyA9PiByZW1vdmVMYXllcnMocy5sYXllcnMpKTtcclxuICAgIHNlZ21lbnRzID0gW107XHJcbiAgICBpZiAoc3RhcnRNYXJrZXIpIHsgbWFwLnJlbW92ZUxheWVyKHN0YXJ0TWFya2VyKTsgc3RhcnRNYXJrZXIgPSBudWxsOyB9XHJcbiAgICBpZiAoY3Vyc29yTWspICAgIHsgbWFwLnJlbW92ZUxheWVyKGN1cnNvck1rKTsgICAgY3Vyc29yTWsgICAgPSBudWxsOyB9XHJcbiAgICBpZiAocHJldmlld0xpbmUpIHsgbWFwLnJlbW92ZUxheWVyKHByZXZpZXdMaW5lKTsgcHJldmlld0xpbmUgPSBudWxsOyB9XHJcbiAgICBjdXJzb3IgPSBudWxsO1xyXG4gICAgbWFwLmVhY2hMYXllcihsID0+IHtcclxuICAgICAgaWYgKGwgaW5zdGFuY2VvZiBMLlBvbHlsaW5lIHx8IGwgaW5zdGFuY2VvZiBMLkdlb0pTT04pIHtcclxuICAgICAgICBtYXAucmVtb3ZlTGF5ZXIobCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmVuZGVyU2VnTGlzdCgpO1xyXG4gICAgdXBkYXRlU3RhdHMoKTtcclxuICAgIHVwZGF0ZUhpbnQoKTtcclxuICAgIHNldFN0YXR1cygnaGlkZScpO1xyXG4gICAgcGVyc2lzdCgpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdG9nZ2xlRnJlZSgpIHtcclxuICAgIGZyZWVNb2RlID0gIWZyZWVNb2RlO1xyXG4gICAgYnRuRnJlZVRvZ2dsZT8uY2xhc3NMaXN0LnRvZ2dsZSgnb24nLCBmcmVlTW9kZSk7XHJcbiAgICBwaWxsRWw/LmNsYXNzTGlzdC50b2dnbGUoJ29uJywgZnJlZU1vZGUpO1xyXG4gICAgaWYgKGZyZWVEZXNjRWwpIGZyZWVEZXNjRWwudGV4dENvbnRlbnQgPSAnTGlicmUnO1xyXG4gICAgbWFwLmdldENvbnRhaW5lcigpLnN0eWxlLmN1cnNvciA9IGZyZWVNb2RlID8gJ2Nyb3NzaGFpcicgOiAnJztcclxuICAgIGlmIChjdXJzb3IpIHNldFN0YXR1cyhmcmVlTW9kZSA/ICdmcmVlJyA6ICdvcnMnKTtcclxuICAgIHVwZGF0ZUhpbnQoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNldFByb2ZpbGUocCkge1xyXG4gICAgb3JzUHJvZmlsZSA9IHA7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1vcnMtcHJvZmlsZV0nKS5mb3JFYWNoKGVsID0+XHJcbiAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScsIGVsLmRhdGFzZXQub3JzUHJvZmlsZSA9PT0gcClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBwZXJzaXN0KCkge1xyXG4gICAgY29uc3Qgd3BzID0gW107XHJcbiAgICBpZiAoY3Vyc29yIHx8IHNlZ21lbnRzLmxlbmd0aCkge1xyXG4gICAgICBpZiAoc2VnbWVudHMubGVuZ3RoKSB7XHJcbiAgICAgICAgc2VnbWVudHMuZm9yRWFjaChzID0+IHdwcy5wdXNoKFtzLmZyb20ubGF0LCBzLmZyb20ubG5nLCBzLnR5cGVdKSk7XHJcbiAgICAgICAgd3BzLnB1c2goW2N1cnNvci5sYXQsIGN1cnNvci5sbmcsIGZyZWVNb2RlID8gJ2ZyZWUnIDogJ29ycyddKTtcclxuICAgICAgfSBlbHNlIGlmIChjdXJzb3IpIHtcclxuICAgICAgICB3cHMucHVzaChbY3Vyc29yLmxhdCwgY3Vyc29yLmxuZywgZnJlZU1vZGUgPyAnZnJlZScgOiAnb3JzJ10pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAod3BJbnB1dCkgd3BJbnB1dC52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHdwcyk7XHJcblxyXG4gICAgaWYgKHNlZ21lbnRzLmxlbmd0aCkge1xyXG4gICAgICBjb25zdCBhbGxDb29yZHMgPSBbXTtcclxuICAgICAgc2VnbWVudHMuZm9yRWFjaChzID0+IHtcclxuICAgICAgICBjb25zdCBwdHMgPSBzLnBvaW50cy5tYXAocCA9PiBbcC5sbmcsIHAubGF0XSk7XHJcbiAgICAgICAgYWxsQ29vcmRzLnB1c2goLi4uKGFsbENvb3Jkcy5sZW5ndGggPyBwdHMuc2xpY2UoMSkgOiBwdHMpKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCB0b3RhbERpc3QgPSBzZWdtZW50cy5yZWR1Y2UoKGEsIHMpID0+IGEgKyAocy5kaXN0YW5jZU1ldGVycyAgPz8gMCksIDApO1xyXG4gICAgICBjb25zdCB0b3RhbER1ciAgPSBzZWdtZW50cy5yZWR1Y2UoKGEsIHMpID0+IGEgKyAocy5kdXJhdGlvblNlY29uZHMgPz8gMCksIDApO1xyXG5cclxuICAgICAgaWYgKHJvdXRlSW5wdXQpIHJvdXRlSW5wdXQudmFsdWUgPSBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgdHlwZTogJ0ZlYXR1cmVDb2xsZWN0aW9uJyxcclxuICAgICAgICBmZWF0dXJlczogW3tcclxuICAgICAgICAgIHR5cGU6ICdGZWF0dXJlJyxcclxuICAgICAgICAgIGdlb21ldHJ5OiB7IHR5cGU6ICdMaW5lU3RyaW5nJywgY29vcmRpbmF0ZXM6IGFsbENvb3JkcyB9LFxyXG4gICAgICAgICAgcHJvcGVydGllczogeyBzdW1tYXJ5OiB7IGRpc3RhbmNlOiB0b3RhbERpc3QgLyAxMDAwLCBkdXJhdGlvbjogdG90YWxEdXIgfSB9LFxyXG4gICAgICAgIH1dLFxyXG4gICAgICB9KTtcclxuICAgICAgaWYgKGRpc3RJbnB1dCkgZGlzdElucHV0LnZhbHVlID0gU3RyaW5nKE1hdGgucm91bmQodG90YWxEaXN0KSk7XHJcbiAgICAgIGlmIChkdXJJbnB1dCkgIGR1cklucHV0LnZhbHVlICA9IFN0cmluZyhNYXRoLnJvdW5kKHRvdGFsRHVyKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAocm91dGVJbnB1dCkgcm91dGVJbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgICBpZiAoZGlzdElucHV0KSAgZGlzdElucHV0LnZhbHVlICA9ICcnO1xyXG4gICAgICBpZiAoZHVySW5wdXQpICAgZHVySW5wdXQudmFsdWUgICA9ICcnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdXBkYXRlU3RhdHMoKSB7XHJcbiAgICBpZiAoIXNlZ21lbnRzLmxlbmd0aCkge1xyXG4gICAgICBpZiAoc3RhdHNCb3gpICAgc3RhdHNCb3guc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgaWYgKGRpc3RhbmNlRWwpIGRpc3RhbmNlRWwudGV4dENvbnRlbnQgPSAn4oCUJztcclxuICAgICAgaWYgKGR1cmF0aW9uRWwpIGR1cmF0aW9uRWwudGV4dENvbnRlbnQgPSAn4oCUJztcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdG90YWxEaXN0ID0gc2VnbWVudHMucmVkdWNlKChhLCBzKSA9PiBhICsgKHMuZGlzdGFuY2VNZXRlcnMgID8/IDApLCAwKTtcclxuICAgIGNvbnN0IHRvdGFsRHVyICA9IHNlZ21lbnRzLnJlZHVjZSgoYSwgcykgPT4gYSArIChzLmR1cmF0aW9uU2Vjb25kcyA/PyAwKSwgMCk7XHJcbiAgICBpZiAoc3RhdHNCb3gpICAgc3RhdHNCb3guc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtZmxleCc7XHJcbiAgICBpZiAoZGlzdGFuY2VFbCkgZGlzdGFuY2VFbC50ZXh0Q29udGVudCA9IGZtdERpc3QodG90YWxEaXN0KTtcclxuICAgIGlmIChkdXJhdGlvbkVsKSBkdXJhdGlvbkVsLnRleHRDb250ZW50ID0gZm10RHVyKHRvdGFsRHVyKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlbmRlclNlZ0xpc3QoKSB7XHJcbiAgICBpZiAoIXNlZ0xpc3RFbCkgcmV0dXJuO1xyXG4gICAgc2VnTGlzdEVsLmlubmVySFRNTCA9ICcnO1xyXG4gICAgaWYgKCFzZWdtZW50cy5sZW5ndGgpIHtcclxuICAgICAgc2VnTGlzdEVsLmlubmVySFRNTCA9ICc8bGkgY2xhc3M9XCJzZWctZW1wdHlcIj5BdWN1biBzZWdtZW50IHBvdXIgbFxcJ2luc3RhbnQ8L2xpPic7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHNlZ21lbnRzLmZvckVhY2goKHMsIGkpID0+IHtcclxuICAgICAgY29uc3QgaXNPUlMgPSBzLnR5cGUgPT09ICdvcnMnO1xyXG4gICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgIGxpLmNsYXNzTmFtZSA9IGBzZWctaXRlbSAke2lzT1JTID8gJ3NlZy1vcnMnIDogJ3NlZy1mcmVlJ31gO1xyXG4gICAgICBsaS5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJzZWctZG90ICR7aXNPUlMgPyAnc2VnLWRvdC1vcnMnIDogJ3NlZy1kb3QtZnJlZSd9XCI+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwic2VnLWxhYmVsXCI+U2VnbWVudCAke2kgKyAxfSDCtyAke2ZtdERpc3Qocy5kaXN0YW5jZU1ldGVycyl9PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwic2VnLWJhZGdlICR7aXNPUlMgPyAnc2VnLWJhZGdlLW9ycycgOiAnc2VnLWJhZGdlLWZyZWUnfVwiPiR7aXNPUlMgPyAnT1JTJyA6ICdMaWJyZSd9PC9zcGFuPlxyXG4gICAgICBgO1xyXG4gICAgICBzZWdMaXN0RWwuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB1cGRhdGVIaW50KCkge1xyXG4gICAgaWYgKCFoaW50RWwpIHJldHVybjtcclxuICAgIGlmICghY3Vyc29yKSAgICAgICBoaW50RWwudGV4dENvbnRlbnQgPSAnQ2xpcXVlIHN1ciBsYSBjYXJ0ZSBwb3VyIHBvc2VyIGxlIHByZW1pZXIgcG9pbnQuJztcclxuICAgIGVsc2UgaWYgKGZyZWVNb2RlKSBoaW50RWwudGV4dENvbnRlbnQgPSAnTW9kZSBsaWJyZSDigJQgY2hhcXVlIGNsaWMgdHJhY2UgdW5lIGxpZ25lIGRpcmVjdGUuJztcclxuICAgIGVsc2UgICAgICAgICAgICAgICBoaW50RWwudGV4dENvbnRlbnQgPSAnQ2xpcXVlIHBvdXIgYWpvdXRlciB1biBwb2ludCDigJQgT1JTIGNhbGN1bGUgbGUgY2hlbWluLic7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzZXRIaW50KG1zZykgeyBpZiAoaGludEVsKSBoaW50RWwudGV4dENvbnRlbnQgPSBtc2c7IH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0U3RhdHVzKHR5cGUpIHtcclxuICAgIGlmICghc3RhdHVzQmFyRWwpIHJldHVybjtcclxuICAgIHN0YXR1c0JhckVsLmNsYXNzTmFtZSA9ICdtYXAtc3RhdHVzJztcclxuICAgIHN0YXR1c0JhckVsLmhpZGRlbiAgICA9IGZhbHNlO1xyXG4gICAgaWYgKHR5cGUgPT09ICdoaWRlJykgeyBzdGF0dXNCYXJFbC5oaWRkZW4gPSB0cnVlOyByZXR1cm47IH1cclxuICAgIGNvbnN0IGNscyA9IHsgbG9hZDogJ21hcC1zdGF0dXMtLWxvYWQnLCBvcnM6ICdtYXAtc3RhdHVzLS1vcnMnLCBmcmVlOiAnbWFwLXN0YXR1cy0tZnJlZScgfTtcclxuICAgIGNvbnN0IHR4dCA9IHtcclxuICAgICAgbG9hZDogJzxzcGFuIGNsYXNzPVwibWFwLXN0YXR1c19fc3BpblwiPjwvc3Bhbj5DYWxjdWwgZW4gY291cnPigKYnLFxyXG4gICAgICBvcnM6ICAnPHNwYW4gY2xhc3M9XCJtYXAtc3RhdHVzX19kb3RcIj48L3NwYW4+TW9kZSBDYWxjdWwgYWN0aWYnLFxyXG4gICAgICBmcmVlOiAnPHNwYW4gY2xhc3M9XCJtYXAtc3RhdHVzX19kb3RcIj48L3NwYW4+TW9kZSBMaWJyZSBhY3RpZicsXHJcbiAgICB9O1xyXG4gICAgc3RhdHVzQmFyRWwuY2xhc3NMaXN0LmFkZChjbHNbdHlwZV0pO1xyXG4gICAgc3RhdHVzQmFyRWwuaW5uZXJIVE1MID0gdHh0W3R5cGVdO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZm10RGlzdChtKSB7XHJcbiAgICBpZiAobSA9PSBudWxsKSByZXR1cm4gJ+KAlCc7XHJcbiAgICByZXR1cm4gbSA8IDEwMDAgPyBgJHtNYXRoLnJvdW5kKG0pfSBtYCA6IGAkeyhtIC8gMTAwMCkudG9GaXhlZCgyKS5yZXBsYWNlKCcuJywgJywnKX0ga21gO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZm10RHVyKHMpIHtcclxuICAgIGlmIChzID09IG51bGwpIHJldHVybiAn4oCUJztcclxuICAgIHMgPSBNYXRoLnJvdW5kKHMpO1xyXG4gICAgY29uc3QgaCA9IE1hdGguZmxvb3IocyAvIDM2MDApLCBtID0gTWF0aC5mbG9vcigocyAlIDM2MDApIC8gNjApO1xyXG4gICAgcmV0dXJuIGggPD0gMCA/IGAke219IG1pbmAgOiBgJHtofSBoICR7U3RyaW5nKG0pLnBhZFN0YXJ0KDIsICcwJyl9IG1pbmA7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB0cnlQYXJzZShzdHIpIHtcclxuICAgIHRyeSB7IHJldHVybiBKU09OLnBhcnNlKHN0cik7IH0gY2F0Y2ggeyByZXR1cm4gbnVsbDsgfVxyXG4gIH1cclxuXHJcbiAgYnRuVW5kbz8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB1bmRvTGFzdCk7XHJcbiAgYnRuQ2xvc2U/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VMb29wKTtcclxuICBidG5DbGVhcj8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGVhckFsbCk7XHJcbiAgYnRuRnJlZVRvZ2dsZT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVGcmVlKTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1vcnMtcHJvZmlsZV0nKS5mb3JFYWNoKGVsID0+XHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNldFByb2ZpbGUoZWwuZGF0YXNldC5vcnNQcm9maWxlKSlcclxuICApO1xyXG5cclxuICBjb25zdCBzYXZlZFdwICA9IGNmZy5pbml0aWFsV2F5cG9pbnRzICAgID8/IHRyeVBhcnNlKHdwSW5wdXQ/LnZhbHVlICAgID8/ICcnKTtcclxuICBjb25zdCBzYXZlZEdlbyA9IGNmZy5pbml0aWFsUm91dGVHZW9Kc29uID8/IHRyeVBhcnNlKHJvdXRlSW5wdXQ/LnZhbHVlID8/ICcnKTtcclxuXHJcbiAgaWYgKEFycmF5LmlzQXJyYXkoc2F2ZWRXcCkgJiYgc2F2ZWRXcC5sZW5ndGggPj0gMiAmJiBzYXZlZEdlbykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmVzdG9yYXRpb25MYXllciA9IEwuZ2VvSlNPTihzYXZlZEdlbywge1xyXG4gICAgICAgIHN0eWxlOiAoKSA9PiAoeyBjb2xvcjogJyM0YTdjNTknLCB3ZWlnaHQ6IDUsIG9wYWNpdHk6IC45LCBsaW5lQ2FwOiAncm91bmQnIH0pLFxyXG4gICAgICB9KS5hZGRUbyhtYXApO1xyXG4gICAgICBpZiAoY2ZnLmluaXRpYWxSb3V0ZUdlb0pzb24pIGNmZy5pbml0aWFsUm91dGVHZW9Kc29uID0gbnVsbDtcclxuICAgIH0gY2F0Y2ggKGUpIHsgY29uc29sZS53YXJuKCdbYmFsYWRlLW1hcF0gR2VvSlNPTiBpbnZhbGlkZScsIGUpOyB9XHJcblxyXG4gICAgc2F2ZWRXcC5mb3JFYWNoKChwLCBpKSA9PiB7XHJcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShwKSB8fCBwLmxlbmd0aCA8IDIpIHJldHVybjtcclxuICAgICAgY29uc3QgbGwgPSBMLmxhdExuZyhwWzBdLCBwWzFdKTtcclxuICAgICAgaWYgKGkgPT09IDApIHtcclxuICAgICAgICBjdXJzb3IgPSBsbDtcclxuICAgICAgICBzdGFydE1hcmtlciA9IEwubWFya2VyKGxsLCB7IGljb246IElDLnN0YXJ0IH0pLmFkZFRvKG1hcCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgcHJldiA9IHNhdmVkV3BbaSAtIDFdO1xyXG4gICAgICAgIGNvbnN0IGZyb20gPSBMLmxhdExuZyhwcmV2WzBdLCBwcmV2WzFdKTtcclxuICAgICAgICBjb25zdCB0eXBlID0gcHJldlsyXSA/PyAnb3JzJztcclxuICAgICAgICBzZWdtZW50cy5wdXNoKHtcclxuICAgICAgICAgIHR5cGUsIGZyb20sIHRvOiBsbCxcclxuICAgICAgICAgIHBvaW50czogW2Zyb20sIGxsXSxcclxuICAgICAgICAgIGxheWVyczogW10sXHJcbiAgICAgICAgICBkaXN0YW5jZU1ldGVyczogIGZyb20uZGlzdGFuY2VUbyhsbCksXHJcbiAgICAgICAgICBkdXJhdGlvblNlY29uZHM6IChmcm9tLmRpc3RhbmNlVG8obGwpIC8gMTAwMCAvIDQpICogMzYwMCxcclxuICAgICAgICB9KTtcclxuICAgICAgICBtb3ZlQ3Vyc29yKGxsKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgbWFwLmZpdEJvdW5kcyhMLmxhdExuZ0JvdW5kcyhzYXZlZFdwLm1hcChwID0+IEwubGF0TG5nKHBbMF0sIHBbMV0pKSksIHsgcGFkZGluZzogWzMwLCAzMF0gfSk7XHJcbiAgICBzZXRTdGF0dXMoZnJlZU1vZGUgPyAnZnJlZScgOiAnb3JzJyk7XHJcblxyXG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShzYXZlZFdwKSAmJiBzYXZlZFdwLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgY29uc3QgbGwgPSBMLmxhdExuZyhzYXZlZFdwWzBdWzBdLCBzYXZlZFdwWzBdWzFdKTtcclxuICAgIGN1cnNvciA9IGxsO1xyXG4gICAgc3RhcnRNYXJrZXIgPSBMLm1hcmtlcihsbCwgeyBpY29uOiBJQy5zdGFydCB9KS5hZGRUbyhtYXApO1xyXG4gICAgbWFwLnNldFZpZXcobGwsIDE1KTtcclxuICAgIHNldFN0YXR1cyhmcmVlTW9kZSA/ICdmcmVlJyA6ICdvcnMnKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGV4aXN0aW5nRGlzdCA9IGNmZy5pbml0aWFsRGlzdGFuY2UgPz8gKGRpc3RJbnB1dD8udmFsdWUgID8gcGFyc2VGbG9hdChkaXN0SW5wdXQudmFsdWUpICA6IG51bGwpO1xyXG4gIGNvbnN0IGV4aXN0aW5nRHVyICA9IGNmZy5pbml0aWFsRHVyYXRpb24gPz8gKGR1cklucHV0Py52YWx1ZSAgID8gcGFyc2VGbG9hdChkdXJJbnB1dC52YWx1ZSkgICA6IG51bGwpO1xyXG4gIGlmIChleGlzdGluZ0Rpc3QgIT0gbnVsbCAmJiBzZWdtZW50cy5sZW5ndGgpIHtcclxuICAgIGlmIChzdGF0c0JveCkgICBzdGF0c0JveC5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1mbGV4JztcclxuICAgIGlmIChkaXN0YW5jZUVsKSBkaXN0YW5jZUVsLnRleHRDb250ZW50ID0gZm10RGlzdChleGlzdGluZ0Rpc3QpO1xyXG4gICAgaWYgKGR1cmF0aW9uRWwpIGR1cmF0aW9uRWwudGV4dENvbnRlbnQgPSBmbXREdXIoZXhpc3RpbmdEdXIpO1xyXG4gIH1cclxuXHJcbiAgc2V0UHJvZmlsZShvcnNQcm9maWxlKTtcclxuICByZW5kZXJTZWdMaXN0KCk7XHJcbiAgdXBkYXRlSGludCgpO1xyXG59XHJcbiIsImltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xyXG5pbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwubWluLmNzcyc7XHJcbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvYWxsLmpzJztcclxuXHJcbmltcG9ydCBMIGZyb20gJ2xlYWZsZXQnO1xyXG5pbXBvcnQgJ2xlYWZsZXQvZGlzdC9sZWFmbGV0LmNzcyc7XHJcblxyXG5pbXBvcnQgJ2xlYWZsZXQtZHJhdyc7XHJcbmltcG9ydCAnbGVhZmxldC1kcmF3L2Rpc3QvbGVhZmxldC5kcmF3LmNzcyc7XHJcblxyXG5pbXBvcnQgJ2xlYWZsZXQtcm91dGluZy1tYWNoaW5lJztcclxuaW1wb3J0ICdsZWFmbGV0LXJvdXRpbmctbWFjaGluZS9kaXN0L2xlYWZsZXQtcm91dGluZy1tYWNoaW5lLmNzcyc7XHJcblxyXG5pbXBvcnQgbWFya2VySWNvbiBmcm9tICdsZWFmbGV0L2Rpc3QvaW1hZ2VzL21hcmtlci1pY29uLnBuZyc7XHJcbmltcG9ydCBtYXJrZXJTaGFkb3cgZnJvbSAnbGVhZmxldC9kaXN0L2ltYWdlcy9tYXJrZXItc2hhZG93LnBuZyc7XHJcblxyXG5pbXBvcnQgJ2xlYWZsZXQtY29udHJvbC1nZW9jb2Rlci9kaXN0L0NvbnRyb2wuR2VvY29kZXIuY3NzJztcclxuXHJcbmRlbGV0ZSBMLkljb24uRGVmYXVsdC5wcm90b3R5cGUuX2dldEljb25Vcmw7XHJcbkwuSWNvbi5EZWZhdWx0Lm1lcmdlT3B0aW9ucyh7XHJcbiAgaWNvblVybDogbWFya2VySWNvbixcclxuICBzaGFkb3dVcmw6IG1hcmtlclNoYWRvdyxcclxufSk7XHJcblxyXG53aW5kb3cuTCA9IEw7XHJcblxyXG5pbXBvcnQgeyBpbml0QmFsYWRlTWFwIH0gZnJvbSAnLi9KYXZhc2NyaXB0L2JhbGFkZS1tYXAuanMnO1xyXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcpKSB7XHJcbiAgICBpbml0QmFsYWRlTWFwKCk7XHJcbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiZSIsInQiLCJyIiwiU3ltYm9sIiwibiIsIml0ZXJhdG9yIiwibyIsInRvU3RyaW5nVGFnIiwiaSIsImMiLCJwcm90b3R5cGUiLCJHZW5lcmF0b3IiLCJ1IiwiT2JqZWN0IiwiY3JlYXRlIiwiX3JlZ2VuZXJhdG9yRGVmaW5lMiIsImYiLCJwIiwieSIsIkciLCJ2IiwiYSIsImQiLCJiaW5kIiwibGVuZ3RoIiwibCIsIlR5cGVFcnJvciIsImNhbGwiLCJkb25lIiwidmFsdWUiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiZ2V0UHJvdG90eXBlT2YiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImRpc3BsYXlOYW1lIiwiX3JlZ2VuZXJhdG9yIiwidyIsIm0iLCJkZWZpbmVQcm9wZXJ0eSIsIl9yZWdlbmVyYXRvckRlZmluZSIsIl9pbnZva2UiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJfYXJyYXlXaXRob3V0SG9sZXMiLCJfaXRlcmFibGVUb0FycmF5IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiX25vbkl0ZXJhYmxlU3ByZWFkIiwiQXJyYXkiLCJmcm9tIiwiaXNBcnJheSIsIl9hcnJheUxpa2VUb0FycmF5Iiwib3duS2V5cyIsImtleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJmaWx0ZXIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJwdXNoIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwiYXJndW1lbnRzIiwiZm9yRWFjaCIsIl9kZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiX3RvUHJvcGVydHlLZXkiLCJfdG9QcmltaXRpdmUiLCJfdHlwZW9mIiwidG9QcmltaXRpdmUiLCJTdHJpbmciLCJOdW1iZXIiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9uZXh0IiwiX3Rocm93IiwiX3NsaWNlZFRvQXJyYXkiLCJfYXJyYXlXaXRoSG9sZXMiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJfbm9uSXRlcmFibGVSZXN0IiwidG9TdHJpbmciLCJzbGljZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsInRlc3QiLCJuZXh0IiwiTENHIiwiaW5pdEJhbGFkZU1hcCIsIl9jZmckZGVmYXVsdFZpZXciLCJfY2ZnJG9yc1Byb2ZpbGUiLCJfY2ZnJGluaXRpYWxXYXlwb2ludHMiLCJfd3BJbnB1dCR2YWx1ZSIsIl9jZmckaW5pdGlhbFJvdXRlR2VvSiIsIl9yb3V0ZUlucHV0JHZhbHVlIiwiX2NmZyRpbml0aWFsRGlzdGFuY2UiLCJfY2ZnJGluaXRpYWxEdXJhdGlvbiIsImNmZyIsIndpbmRvdyIsIkJBTEFERV9NQVBfQ09ORklHIiwiX3JlZiIsImRlZmF1bHRWaWV3IiwiX3JlZjIiLCJkZWZMYXQiLCJkZWZMbmciLCJkZWZab29tIiwibWFwIiwiTCIsImRvdWJsZUNsaWNrWm9vbSIsInNldFZpZXciLCJzZXRUaW1lb3V0IiwiaW52YWxpZGF0ZVNpemUiLCJ0aWxlTGF5ZXIiLCJhdHRyaWJ1dGlvbiIsIm1heFpvb20iLCJhZGRUbyIsImdlb2NvZGVyIiwiZ2VvY29kZXJzIiwibm9taW5hdGltIiwiZGVmYXVsdE1hcmtHZW9jb2RlIiwicGxhY2Vob2xkZXIiLCJlcnJvck1lc3NhZ2UiLCJzaG93UmVzdWx0SWNvbnMiLCJjb2xsYXBzZWQiLCJvbiIsIl9lJGdlb2NvZGUiLCJnZW9jb2RlIiwiY2VudGVyIiwiYmJveCIsImZpdEJvdW5kcyIsImxhdExuZ0JvdW5kcyIsInBhZCIsIndwSW5wdXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm91dGVJbnB1dCIsImRpc3RJbnB1dCIsImR1cklucHV0IiwiYnRuVW5kbyIsImJ0bkNsb3NlIiwiYnRuQ2xlYXIiLCJidG5GcmVlVG9nZ2xlIiwicGlsbEVsIiwiZnJlZURlc2NFbCIsImhpbnRFbCIsInN0YXR1c0JhckVsIiwic3RhdHNCb3giLCJkaXN0YW5jZUVsIiwiZHVyYXRpb25FbCIsInNlZ0xpc3RFbCIsIm9yc1Byb2ZpbGUiLCJmcmVlTW9kZSIsImN1cnNvciIsInNlZ21lbnRzIiwic3RhcnRNYXJrZXIiLCJjdXJzb3JNayIsInByZXZpZXdMaW5lIiwib3JzU2VxIiwicmVzdG9yYXRpb25MYXllciIsIm1ha2VQaW4iLCJiZyIsImVtb2ppIiwiZGl2SWNvbiIsImh0bWwiLCJjb25jYXQiLCJjbGFzc05hbWUiLCJpY29uU2l6ZSIsImljb25BbmNob3IiLCJJQyIsInN0YXJ0IiwibGF0bG5nIiwibWFya2VyIiwiaWNvbiIsInNldFN0YXR1cyIsImFkZEZyZWVTZWciLCJhZGRPUlNTZWciLCJ1cGRhdGVIaW50IiwicmVuZGVyU2VnTGlzdCIsInBlcnNpc3QiLCJyZW1vdmVMYXllciIsInBvbHlsaW5lIiwiY29sb3IiLCJ3ZWlnaHQiLCJvcGFjaXR5IiwiZGFzaEFycmF5IiwibGluZUNhcCIsInRvIiwiY2xlYXJMYXllcnMiLCJyZW1vdmUiLCJwdHMiLCJsYXllcnMiLCJkcmF3UG9seSIsImRpc3RNIiwiZGlzdGFuY2VUbyIsInR5cGUiLCJwb2ludHMiLCJkaXN0YW5jZU1ldGVycyIsImR1cmF0aW9uU2Vjb25kcyIsIm1vdmVDdXJzb3IiLCJ1cGRhdGVTdGF0cyIsIl94IiwiX3gyIiwiX2FkZE9SU1NlZyIsIl9jYWxsZWUiLCJzZXEiLCJfZGF0YSRnZW9qc29uJGdlb21ldHIiLCJfZGF0YSRnZW9qc29uIiwiX2RhdGEkZGlzdGFuY2UiLCJfZGF0YSRkdXJhdGlvbiIsInJlcyIsImRhdGEiLCJjb29yZHMiLCJkdXJTIiwiX3QiLCJfY29udGV4dCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibGF0IiwibG5nIiwicHJvZmlsZSIsImpzb24iLCJvayIsImNvbnNvbGUiLCJlcnJvciIsInNldEhpbnQiLCJnZW9qc29uIiwiZ2VvbWV0cnkiLCJjb29yZGluYXRlcyIsImxhdExuZyIsImRpc3RhbmNlIiwiZHVyYXRpb24iLCJzaGFkb3ciLCJsaW5lIiwibGluZUpvaW4iLCJyZW1vdmVMYXllcnMiLCJsbCIsImNsb3NlTG9vcCIsImZpcnN0Iiwic2FtZSIsIk1hdGgiLCJhYnMiLCJ1bmRvTGFzdCIsInNlZyIsInBvcCIsImNsZWFyQWxsIiwiZWFjaExheWVyIiwicyIsIlBvbHlsaW5lIiwiR2VvSlNPTiIsInRvZ2dsZUZyZWUiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJ0ZXh0Q29udGVudCIsImdldENvbnRhaW5lciIsInN0eWxlIiwic2V0UHJvZmlsZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbCIsImRhdGFzZXQiLCJ3cHMiLCJhbGxDb29yZHMiLCJ0b3RhbERpc3QiLCJyZWR1Y2UiLCJfcyRkaXN0YW5jZU1ldGVycyIsInRvdGFsRHVyIiwiX3MkZHVyYXRpb25TZWNvbmRzIiwiZmVhdHVyZXMiLCJwcm9wZXJ0aWVzIiwic3VtbWFyeSIsInJvdW5kIiwiZGlzcGxheSIsIl9zJGRpc3RhbmNlTWV0ZXJzMiIsIl9zJGR1cmF0aW9uU2Vjb25kczIiLCJmbXREaXN0IiwiZm10RHVyIiwiaW5uZXJIVE1MIiwiaXNPUlMiLCJsaSIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsIm1zZyIsImhpZGRlbiIsImNscyIsImxvYWQiLCJvcnMiLCJmcmVlIiwidHh0IiwiYWRkIiwidG9GaXhlZCIsInJlcGxhY2UiLCJoIiwiZmxvb3IiLCJwYWRTdGFydCIsInRyeVBhcnNlIiwic3RyIiwicGFyc2UiLCJfdW51c2VkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNhdmVkV3AiLCJpbml0aWFsV2F5cG9pbnRzIiwic2F2ZWRHZW8iLCJpbml0aWFsUm91dGVHZW9Kc29uIiwiZ2VvSlNPTiIsIndhcm4iLCJfcHJldiQiLCJwcmV2IiwicGFkZGluZyIsImV4aXN0aW5nRGlzdCIsImluaXRpYWxEaXN0YW5jZSIsInBhcnNlRmxvYXQiLCJleGlzdGluZ0R1ciIsImluaXRpYWxEdXJhdGlvbiIsIm1hcmtlckljb24iLCJtYXJrZXJTaGFkb3ciLCJJY29uIiwiRGVmYXVsdCIsIl9nZXRJY29uVXJsIiwibWVyZ2VPcHRpb25zIiwiaWNvblVybCIsInNoYWRvd1VybCJdLCJzb3VyY2VSb290IjoiIn0=