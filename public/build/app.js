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
    if (freeDescEl) freeDescEl.textContent = freeMode ? 'Libre' : 'Libre';
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
/* harmony import */ var _Javascript_balade_map_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Javascript/balade-map.js */ "./assets/Javascript/balade-map.js");











delete (leaflet__WEBPACK_IMPORTED_MODULE_3___default().Icon).Default.prototype._getIconUrl;
leaflet__WEBPACK_IMPORTED_MODULE_3___default().Icon.Default.mergeOptions({
  iconUrl: leaflet_dist_images_marker_icon_png__WEBPACK_IMPORTED_MODULE_9__,
  shadowUrl: leaflet_dist_images_marker_shadow_png__WEBPACK_IMPORTED_MODULE_10__
});
window.L = (leaflet__WEBPACK_IMPORTED_MODULE_3___default());

if (document.getElementById('map')) {
  (0,_Javascript_balade_map_js__WEBPACK_IMPORTED_MODULE_11__.initBaladeMap)();
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_fortawesome_fontawesome-free_js_all_js-node_modules_leaflet-draw_dist_le-570bce"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxJQUFJakssUUFBUSxDQUFDbkgsTUFBTSxFQUFFO0lBQzNDLElBQUk0RyxRQUFRLEVBQUlBLFFBQVEsQ0FBQ2lILEtBQUssQ0FBQ2dCLE9BQU8sR0FBRyxhQUFhO0lBQ3RELElBQUloSSxVQUFVLEVBQUVBLFVBQVUsQ0FBQzhHLFdBQVcsR0FBR3FCLE9BQU8sQ0FBQ29DLFlBQVksQ0FBQztJQUM5RCxJQUFJdEssVUFBVSxFQUFFQSxVQUFVLENBQUM2RyxXQUFXLEdBQUdzQixNQUFNLENBQUNzQyxXQUFXLENBQUM7RUFDOUQ7RUFFQXpELFVBQVUsQ0FBQzlHLFVBQVUsQ0FBQztFQUN0QjRCLGFBQWEsQ0FBQyxDQUFDO0VBQ2ZELFVBQVUsQ0FBQyxDQUFDO0FBQ2QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeGEyQjtBQUM0QjtBQUNOO0FBRXpCO0FBQ1U7QUFFWjtBQUNzQjtBQUVYO0FBQ2lDO0FBRUw7QUFDSTtBQUVqRSxPQUFPdEQscURBQU0sQ0FBQ3VNLE9BQU8sQ0FBQzFTLFNBQVMsQ0FBQzJTLFdBQVc7QUFDM0N4TSxtREFBTSxDQUFDdU0sT0FBTyxDQUFDRSxZQUFZLENBQUM7RUFDMUJDLE9BQU8sRUFBRU4sZ0VBQVU7RUFDbkJPLFNBQVMsRUFBRU4sbUVBQVlBO0FBQ3pCLENBQUMsQ0FBQztBQUVGOU0sTUFBTSxDQUFDUyxDQUFDLEdBQUdBLGdEQUFDO0FBRStDO0FBQzNELElBQUlVLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQyxFQUFFO0VBQ2hDOUIseUVBQWEsQ0FBQyxDQUFDO0FBQ25CLEM7Ozs7Ozs7Ozs7O0FDM0JBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0phdmFzY3JpcHQvYmFsYWRlLW1hcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGluaXRCYWxhZGVNYXAoKSB7XHJcblxyXG4gIGNvbnN0IGNmZyA9IHdpbmRvdy5CQUxBREVfTUFQX0NPTkZJRyB8fCB7fTtcclxuXHJcbiAgLy8g4pSA4pSAIENhcnRlIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxyXG4gIGNvbnN0IFtkZWZMYXQsIGRlZkxuZywgZGVmWm9vbV0gPSBjZmcuZGVmYXVsdFZpZXcgPz8gWzQ0LjgzNzgsIC0wLjU3OTIsIDEzXTtcclxuICBjb25zdCBtYXAgPSBMLm1hcCgnbWFwJywgeyBkb3VibGVDbGlja1pvb206IGZhbHNlIH0pLnNldFZpZXcoW2RlZkxhdCwgZGVmTG5nXSwgZGVmWm9vbSk7XHJcbiAgc2V0VGltZW91dCgoKSA9PiBtYXAuaW52YWxpZGF0ZVNpemUoKSwgMTUwKTtcclxuXHJcbiAgTC50aWxlTGF5ZXIoJ2h0dHBzOi8ve3N9LnRpbGUub3BlbnN0cmVldG1hcC5mci9vc21mci97en0ve3h9L3t5fS5wbmcnLCB7XHJcbiAgICBhdHRyaWJ1dGlvbjogJyZjb3B5OyBPcGVuU3RyZWV0TWFwIGNvbnRyaWJ1dG9ycycsIG1heFpvb206IDE5LFxyXG4gIH0pLmFkZFRvKG1hcCk7XHJcblxyXG4gIGNvbnN0IHdwSW5wdXQgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFsYWRlX3dheXBvaW50c0pzb24nKTtcclxuICBjb25zdCByb3V0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhbGFkZV9yb3V0ZUdlb0pzb24nKTtcclxuICBjb25zdCBkaXN0SW5wdXQgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhbGFkZV9kaXN0YW5jZU1ldGVycycpO1xyXG4gIGNvbnN0IGR1cklucHV0ICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFsYWRlX2R1cmF0aW9uU2Vjb25kcycpO1xyXG5cclxuICBjb25zdCBidG5VbmRvICAgICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi11bmRvJyk7XHJcbiAgY29uc3QgYnRuQ2xvc2UgICAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tY2xvc2UnKTtcclxuICBjb25zdCBidG5DbGVhciAgICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1jbGVhcicpO1xyXG4gIGNvbnN0IGJ0bkZyZWVUb2dnbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLWZyZWUtdG9nZ2xlJyk7XHJcbiAgY29uc3QgcGlsbEVsICAgICAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmcmVlLXRvZ2dsZS1waWxsJyk7XHJcbiAgY29uc3QgZnJlZURlc2NFbCAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmcmVlLXRvZ2dsZS1kZXNjJyk7XHJcbiAgY29uc3QgaGludEVsICAgICAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAtaGludCcpO1xyXG4gIGNvbnN0IHN0YXR1c0JhckVsICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwLXN0YXR1cycpO1xyXG4gIGNvbnN0IHN0YXRzQm94ICAgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm91dGUtc3RhdHMnKTtcclxuICBjb25zdCBkaXN0YW5jZUVsICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JvdXRlLWRpc3RhbmNlJyk7XHJcbiAgY29uc3QgZHVyYXRpb25FbCAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb3V0ZS1kdXJhdGlvbicpO1xyXG4gIGNvbnN0IHNlZ0xpc3RFbCAgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VnLWxpc3QnKTtcclxuXHJcbiAgbGV0IG9yc1Byb2ZpbGUgID0gY2ZnLm9yc1Byb2ZpbGUgPz8gJ2Zvb3Qtd2Fsa2luZyc7XHJcbiAgbGV0IGZyZWVNb2RlICAgID0gZmFsc2U7XHJcbiAgbGV0IGN1cnNvciAgICAgID0gbnVsbDsgICBcclxuICBsZXQgc2VnbWVudHMgICAgPSBbXTsgICAgIFxyXG4gIGxldCBzdGFydE1hcmtlciA9IG51bGw7XHJcbiAgbGV0IGN1cnNvck1rICAgID0gbnVsbDtcclxuICBsZXQgcHJldmlld0xpbmUgPSBudWxsO1xyXG4gIGxldCBvcnNTZXEgICAgICAgICAgPSAwO1xyXG4gIGxldCByZXN0b3JhdGlvbkxheWVyID0gbnVsbDsgIFxyXG5cclxuICAvLyDilIDilIAgSWPDtG5lcyDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcclxuICBmdW5jdGlvbiBtYWtlUGluKGJnLCBlbW9qaSkge1xyXG4gICAgcmV0dXJuIEwuZGl2SWNvbih7XHJcbiAgICAgIGh0bWw6IGA8ZGl2IHN0eWxlPVwiYmFja2dyb3VuZDoke2JnfTt3aWR0aDozMnB4O2hlaWdodDozMnB4O2JvcmRlci1yYWRpdXM6NTAlIDUwJSA1MCUgMDtcclxuICAgICAgICB0cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7Ym9yZGVyOjNweCBzb2xpZCB3aGl0ZTtib3gtc2hhZG93OjAgMnB4IDhweCByZ2JhKDAsMCwwLC4yOCk7XHJcbiAgICAgICAgZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyXCI+XHJcbiAgICAgICAgPHNwYW4gc3R5bGU9XCJ0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTtmb250LXNpemU6MTRweFwiPiR7ZW1vaml9PC9zcGFuPjwvZGl2PmAsXHJcbiAgICAgIGNsYXNzTmFtZTogJycsIGljb25TaXplOiBbMzIsIDMyXSwgaWNvbkFuY2hvcjogWzE2LCAzMl0sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IElDID0geyBzdGFydDogbWFrZVBpbignIzRhN2M1OScsICfwn4+gJyksIGN1cnNvcjogbWFrZVBpbignI2U4NzA0MCcsICfwn5C+JykgfTtcclxuXHJcbiAgbWFwLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBpZiAoIWN1cnNvcikge1xyXG4gICAgICBjdXJzb3IgPSBlLmxhdGxuZztcclxuICAgICAgc3RhcnRNYXJrZXIgPSBMLm1hcmtlcihjdXJzb3IsIHsgaWNvbjogSUMuc3RhcnQgfSkuYWRkVG8obWFwKTtcclxuICAgICAgc2V0U3RhdHVzKGZyZWVNb2RlID8gJ2ZyZWUnIDogJ29ycycpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKGZyZWVNb2RlKSBhZGRGcmVlU2VnKGN1cnNvciwgZS5sYXRsbmcpO1xyXG4gICAgICBlbHNlICAgICAgICAgIGFkZE9SU1NlZyhjdXJzb3IsIGUubGF0bG5nKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZUhpbnQoKTtcclxuICAgIHJlbmRlclNlZ0xpc3QoKTtcclxuICAgIHBlcnNpc3QoKTtcclxuICB9KTtcclxuXHJcbiAgbWFwLm9uKCdtb3VzZW1vdmUnLCAoZSkgPT4ge1xyXG4gICAgaWYgKCFjdXJzb3IpIHJldHVybjtcclxuICAgIGlmIChwcmV2aWV3TGluZSkgeyBtYXAucmVtb3ZlTGF5ZXIocHJldmlld0xpbmUpOyBwcmV2aWV3TGluZSA9IG51bGw7IH1cclxuICAgIHByZXZpZXdMaW5lID0gTC5wb2x5bGluZShbY3Vyc29yLCBlLmxhdGxuZ10sIHtcclxuICAgICAgY29sb3I6IGZyZWVNb2RlID8gJyM3YjVlYTcnIDogJyM0YTdjNTknLFxyXG4gICAgICB3ZWlnaHQ6IDMsIG9wYWNpdHk6IC40LCBkYXNoQXJyYXk6ICc1IDgnLCBsaW5lQ2FwOiAncm91bmQnLFxyXG4gICAgfSkuYWRkVG8obWFwKTtcclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gYWRkRnJlZVNlZyhmcm9tLCB0bykge1xyXG4gICAgaWYgKHJlc3RvcmF0aW9uTGF5ZXIpIHsgcmVzdG9yYXRpb25MYXllci5jbGVhckxheWVycygpOyByZXN0b3JhdGlvbkxheWVyLnJlbW92ZSgpOyByZXN0b3JhdGlvbkxheWVyID0gbnVsbDsgfVxyXG4gICAgY29uc3QgcHRzICAgID0gW2Zyb20sIHRvXTtcclxuICAgIGNvbnN0IGxheWVycyA9IGRyYXdQb2x5KHB0cywgJ2ZyZWUnKTtcclxuICAgIGNvbnN0IGRpc3RNICA9IGZyb20uZGlzdGFuY2VUbyh0byk7XHJcbiAgICBzZWdtZW50cy5wdXNoKHsgdHlwZTogJ2ZyZWUnLCBmcm9tLCB0bywgcG9pbnRzOiBwdHMsIGxheWVycyxcclxuICAgICAgZGlzdGFuY2VNZXRlcnM6IGRpc3RNLCBkdXJhdGlvblNlY29uZHM6IChkaXN0TSAvIDEwMDAgLyA0KSAqIDM2MDAgfSk7XHJcbiAgICBtb3ZlQ3Vyc29yKHRvKTtcclxuICAgIHVwZGF0ZVN0YXRzKCk7XHJcbiAgICByZW5kZXJTZWdMaXN0KCk7XHJcbiAgICBwZXJzaXN0KCk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBhZGRPUlNTZWcoZnJvbSwgdG8pIHtcclxuICAgIGlmIChyZXN0b3JhdGlvbkxheWVyKSB7IHJlc3RvcmF0aW9uTGF5ZXIuY2xlYXJMYXllcnMoKTsgcmVzdG9yYXRpb25MYXllci5yZW1vdmUoKTsgcmVzdG9yYXRpb25MYXllciA9IG51bGw7IH1cclxuICAgIGNvbnN0IHNlcSA9ICsrb3JzU2VxO1xyXG4gICAgc2V0U3RhdHVzKCdsb2FkJyk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9hcGkvaGlraW5nLXJvdXRlJywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIHBvaW50czogIFtbZnJvbS5sYXQsIGZyb20ubG5nXSwgW3RvLmxhdCwgdG8ubG5nXV0sXHJcbiAgICAgICAgICBwcm9maWxlOiBvcnNQcm9maWxlLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChzZXEgIT09IG9yc1NlcSkgcmV0dXJuO1xyXG5cclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgICBpZiAoIXJlcy5vaykge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tPUlNdJywgZGF0YSk7XHJcbiAgICAgICAgc2V0U3RhdHVzKGZyZWVNb2RlID8gJ2ZyZWUnIDogJ29ycycpO1xyXG4gICAgICAgIHNldEhpbnQoJ+KaoO+4jyBFcnJldXIgT1JTIOKAlCB2w6lyaWZpZXogbGEgY29uc29sZS4nKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGNvb3JkcyA9IGRhdGEuZ2VvanNvbj8uZ2VvbWV0cnk/LmNvb3JkaW5hdGVzID8/IFtdO1xyXG4gICAgICBpZiAoIWNvb3Jkcy5sZW5ndGgpIHtcclxuICAgICAgICBzZXRTdGF0dXMoZnJlZU1vZGUgPyAnZnJlZScgOiAnb3JzJyk7XHJcbiAgICAgICAgc2V0SGludCgn4pqg77iPIE9SUyBuXFwnYSByZXRvdXJuw6kgYXVjdW4gdHJhY8OpLicpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgcHRzICAgPSBjb29yZHMubWFwKGMgPT4gTC5sYXRMbmcoY1sxXSwgY1swXSkpO1xyXG4gICAgICBjb25zdCBkaXN0TSA9IGRhdGEuZGlzdGFuY2UgPz8gZnJvbS5kaXN0YW5jZVRvKHRvKTtcclxuICAgICAgY29uc3QgZHVyUyAgPSBkYXRhLmR1cmF0aW9uID8/IChkaXN0TSAvIDEwMDAgLyA0KSAqIDM2MDA7XHJcblxyXG4gICAgICBzZWdtZW50cy5wdXNoKHsgdHlwZTogJ29ycycsIGZyb20sIHRvLFxyXG4gICAgICAgIHBvaW50czogcHRzLCBsYXllcnM6IGRyYXdQb2x5KHB0cywgJ29ycycpLFxyXG4gICAgICAgIGRpc3RhbmNlTWV0ZXJzOiBkaXN0TSwgZHVyYXRpb25TZWNvbmRzOiBkdXJTIH0pO1xyXG5cclxuICAgICAgbW92ZUN1cnNvcih0byk7XHJcbiAgICAgIHVwZGF0ZVN0YXRzKCk7XHJcbiAgICAgIHJlbmRlclNlZ0xpc3QoKTtcclxuICAgICAgc2V0U3RhdHVzKGZyZWVNb2RlID8gJ2ZyZWUnIDogJ29ycycpO1xyXG4gICAgICB1cGRhdGVIaW50KCk7XHJcbiAgICAgIHBlcnNpc3QoKTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgaWYgKHNlcSAhPT0gb3JzU2VxKSByZXR1cm47XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tPUlNdJywgZXJyKTtcclxuICAgICAgc2V0U3RhdHVzKGZyZWVNb2RlID8gJ2ZyZWUnIDogJ29ycycpO1xyXG4gICAgICBzZXRIaW50KCfimqDvuI8gSW1wb3NzaWJsZSBkZSBqb2luZHJlIC9hcGkvaGlraW5nLXJvdXRlLicpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZHJhd1BvbHkocHRzLCB0eXBlKSB7XHJcbiAgICBjb25zdCBjb2xvciAgPSB0eXBlID09PSAnb3JzJyA/ICcjNGE3YzU5JyA6ICcjN2I1ZWE3JztcclxuICAgIGNvbnN0IHNoYWRvdyA9IEwucG9seWxpbmUocHRzLCB7IGNvbG9yOiAnIzNkMmIxZicsIHdlaWdodDogOSwgb3BhY2l0eTogLjA3IH0pLmFkZFRvKG1hcCk7XHJcbiAgICBjb25zdCBsaW5lICAgPSBMLnBvbHlsaW5lKHB0cywge1xyXG4gICAgICBjb2xvciwgd2VpZ2h0OiA1LCBvcGFjaXR5OiAuOSwgbGluZUNhcDogJ3JvdW5kJywgbGluZUpvaW46ICdyb3VuZCcsXHJcbiAgICAgIC4uLih0eXBlID09PSAnZnJlZScgPyB7IGRhc2hBcnJheTogJzggNicgfSA6IHt9KSxcclxuICAgIH0pLmFkZFRvKG1hcCk7XHJcbiAgICByZXR1cm4gW3NoYWRvdywgbGluZV07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZW1vdmVMYXllcnMobGF5ZXJzKSB7IGxheWVycy5mb3JFYWNoKGwgPT4gbWFwLnJlbW92ZUxheWVyKGwpKTsgfVxyXG5cclxuICBmdW5jdGlvbiBtb3ZlQ3Vyc29yKGxsKSB7XHJcbiAgICBjdXJzb3IgPSBsbDtcclxuICAgIGlmIChjdXJzb3JNaykgbWFwLnJlbW92ZUxheWVyKGN1cnNvck1rKTtcclxuICAgIGN1cnNvck1rID0gTC5tYXJrZXIobGwsIHsgaWNvbjogSUMuY3Vyc29yIH0pLmFkZFRvKG1hcCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjbG9zZUxvb3AoKSB7XHJcbiAgICBpZiAoIWN1cnNvciB8fCAhc2VnbWVudHMubGVuZ3RoKSByZXR1cm47XHJcbiAgICBjb25zdCBmaXJzdCA9IHNlZ21lbnRzWzBdLmZyb207XHJcbiAgICBjb25zdCBzYW1lICA9IE1hdGguYWJzKGN1cnNvci5sYXQgLSBmaXJzdC5sYXQpIDwgMWUtNlxyXG4gICAgICAgICAgICAgICAmJiBNYXRoLmFicyhjdXJzb3IubG5nIC0gZmlyc3QubG5nKSA8IDFlLTY7XHJcbiAgICBpZiAoc2FtZSkgcmV0dXJuO1xyXG4gICAgaWYgKGZyZWVNb2RlKSBhZGRGcmVlU2VnKGN1cnNvciwgZmlyc3QpO1xyXG4gICAgZWxzZSAgICAgICAgICBhZGRPUlNTZWcoY3Vyc29yLCBmaXJzdCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB1bmRvTGFzdCgpIHtcclxuICAgIGlmIChwcmV2aWV3TGluZSkgeyBtYXAucmVtb3ZlTGF5ZXIocHJldmlld0xpbmUpOyBwcmV2aWV3TGluZSA9IG51bGw7IH1cclxuXHJcbiAgICBpZiAoc2VnbWVudHMubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IHNlZyA9IHNlZ21lbnRzLnBvcCgpO1xyXG4gICAgICByZW1vdmVMYXllcnMoc2VnLmxheWVycyk7XHJcbiAgICAgIGN1cnNvciA9IHNlZy5mcm9tO1xyXG4gICAgICBpZiAoY3Vyc29yTWspIHsgbWFwLnJlbW92ZUxheWVyKGN1cnNvck1rKTsgY3Vyc29yTWsgPSBudWxsOyB9XHJcbiAgICAgIGlmIChzZWdtZW50cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBpZiAoc3RhcnRNYXJrZXIpIG1hcC5yZW1vdmVMYXllcihzdGFydE1hcmtlcik7XHJcbiAgICAgICAgc3RhcnRNYXJrZXIgPSBMLm1hcmtlcihjdXJzb3IsIHsgaWNvbjogSUMuc3RhcnQgfSkuYWRkVG8obWFwKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjdXJzb3JNayA9IEwubWFya2VyKGN1cnNvciwgeyBpY29uOiBJQy5jdXJzb3IgfSkuYWRkVG8obWFwKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChjdXJzb3IpIHtcclxuICAgICAgaWYgKHN0YXJ0TWFya2VyKSB7IG1hcC5yZW1vdmVMYXllcihzdGFydE1hcmtlcik7IHN0YXJ0TWFya2VyID0gbnVsbDsgfVxyXG4gICAgICBpZiAoY3Vyc29yTWspICAgIHsgbWFwLnJlbW92ZUxheWVyKGN1cnNvck1rKTsgICAgY3Vyc29yTWsgICAgPSBudWxsOyB9XHJcbiAgICAgIGN1cnNvciA9IG51bGw7XHJcbiAgICAgIHNldFN0YXR1cygnaGlkZScpO1xyXG4gICAgfSBlbHNlIHJldHVybjtcclxuXHJcbiAgICByZW5kZXJTZWdMaXN0KCk7XHJcbiAgICB1cGRhdGVTdGF0cygpO1xyXG4gICAgdXBkYXRlSGludCgpO1xyXG4gICAgcGVyc2lzdCgpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2xlYXJBbGwoKSB7XHJcbiAgICBvcnNTZXErKztcclxuXHJcbiAgICBpZiAocmVzdG9yYXRpb25MYXllcikge1xyXG4gICAgICByZXN0b3JhdGlvbkxheWVyLmVhY2hMYXllcihsID0+IG1hcC5yZW1vdmVMYXllcihsKSk7XHJcbiAgICAgIHJlc3RvcmF0aW9uTGF5ZXIuY2xlYXJMYXllcnMoKTtcclxuICAgICAgbWFwLnJlbW92ZUxheWVyKHJlc3RvcmF0aW9uTGF5ZXIpO1xyXG4gICAgICByZXN0b3JhdGlvbkxheWVyID0gbnVsbDtcclxuICAgIH1cclxuICAgIHNlZ21lbnRzLmZvckVhY2gocyA9PiByZW1vdmVMYXllcnMocy5sYXllcnMpKTtcclxuICAgIHNlZ21lbnRzID0gW107XHJcbiAgICBpZiAoc3RhcnRNYXJrZXIpIHsgbWFwLnJlbW92ZUxheWVyKHN0YXJ0TWFya2VyKTsgc3RhcnRNYXJrZXIgPSBudWxsOyB9XHJcbiAgICBpZiAoY3Vyc29yTWspICAgIHsgbWFwLnJlbW92ZUxheWVyKGN1cnNvck1rKTsgICAgY3Vyc29yTWsgICAgPSBudWxsOyB9XHJcbiAgICBpZiAocHJldmlld0xpbmUpIHsgbWFwLnJlbW92ZUxheWVyKHByZXZpZXdMaW5lKTsgcHJldmlld0xpbmUgPSBudWxsOyB9XHJcbiAgICBjdXJzb3IgPSBudWxsO1xyXG4gICAgbWFwLmVhY2hMYXllcihsID0+IHtcclxuICAgICAgaWYgKGwgaW5zdGFuY2VvZiBMLlBvbHlsaW5lIHx8IGwgaW5zdGFuY2VvZiBMLkdlb0pTT04pIHtcclxuICAgICAgICBtYXAucmVtb3ZlTGF5ZXIobCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmVuZGVyU2VnTGlzdCgpO1xyXG4gICAgdXBkYXRlU3RhdHMoKTtcclxuICAgIHVwZGF0ZUhpbnQoKTtcclxuICAgIHNldFN0YXR1cygnaGlkZScpO1xyXG4gICAgcGVyc2lzdCgpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdG9nZ2xlRnJlZSgpIHtcclxuICAgIGZyZWVNb2RlID0gIWZyZWVNb2RlO1xyXG4gICAgYnRuRnJlZVRvZ2dsZT8uY2xhc3NMaXN0LnRvZ2dsZSgnb24nLCBmcmVlTW9kZSk7XHJcbiAgICBwaWxsRWw/LmNsYXNzTGlzdC50b2dnbGUoJ29uJywgZnJlZU1vZGUpO1xyXG4gICAgaWYgKGZyZWVEZXNjRWwpIGZyZWVEZXNjRWwudGV4dENvbnRlbnQgPSBmcmVlTW9kZVxyXG4gICAgICA/ICdMaWJyZSdcclxuICAgICAgOiAnTGlicmUnO1xyXG4gICAgbWFwLmdldENvbnRhaW5lcigpLnN0eWxlLmN1cnNvciA9IGZyZWVNb2RlID8gJ2Nyb3NzaGFpcicgOiAnJztcclxuICAgIGlmIChjdXJzb3IpIHNldFN0YXR1cyhmcmVlTW9kZSA/ICdmcmVlJyA6ICdvcnMnKTtcclxuICAgIHVwZGF0ZUhpbnQoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNldFByb2ZpbGUocCkge1xyXG4gICAgb3JzUHJvZmlsZSA9IHA7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1vcnMtcHJvZmlsZV0nKS5mb3JFYWNoKGVsID0+XHJcbiAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScsIGVsLmRhdGFzZXQub3JzUHJvZmlsZSA9PT0gcClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuXHJcbiAgZnVuY3Rpb24gcGVyc2lzdCgpIHtcclxuXHJcbiAgICBjb25zdCB3cHMgPSBbXTtcclxuICAgIGlmIChjdXJzb3IgfHwgc2VnbWVudHMubGVuZ3RoKSB7XHJcbiAgICAgIGlmIChzZWdtZW50cy5sZW5ndGgpIHtcclxuICAgICAgICBzZWdtZW50cy5mb3JFYWNoKHMgPT4gd3BzLnB1c2goW3MuZnJvbS5sYXQsIHMuZnJvbS5sbmcsIHMudHlwZV0pKTtcclxuICAgICAgICB3cHMucHVzaChbY3Vyc29yLmxhdCwgY3Vyc29yLmxuZywgZnJlZU1vZGUgPyAnZnJlZScgOiAnb3JzJ10pO1xyXG4gICAgICB9IGVsc2UgaWYgKGN1cnNvcikge1xyXG4gICAgICAgIHdwcy5wdXNoKFtjdXJzb3IubGF0LCBjdXJzb3IubG5nLCBmcmVlTW9kZSA/ICdmcmVlJyA6ICdvcnMnXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh3cElucHV0KSB3cElucHV0LnZhbHVlID0gSlNPTi5zdHJpbmdpZnkod3BzKTtcclxuXHJcbiAgICBpZiAoc2VnbWVudHMubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IGFsbENvb3JkcyA9IFtdO1xyXG4gICAgICBzZWdtZW50cy5mb3JFYWNoKHMgPT4ge1xyXG4gICAgICAgIGNvbnN0IHB0cyA9IHMucG9pbnRzLm1hcChwID0+IFtwLmxuZywgcC5sYXRdKTtcclxuICAgICAgICBhbGxDb29yZHMucHVzaCguLi4oYWxsQ29vcmRzLmxlbmd0aCA/IHB0cy5zbGljZSgxKSA6IHB0cykpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHRvdGFsRGlzdCA9IHNlZ21lbnRzLnJlZHVjZSgoYSwgcykgPT4gYSArIChzLmRpc3RhbmNlTWV0ZXJzICA/PyAwKSwgMCk7XHJcbiAgICAgIGNvbnN0IHRvdGFsRHVyICA9IHNlZ21lbnRzLnJlZHVjZSgoYSwgcykgPT4gYSArIChzLmR1cmF0aW9uU2Vjb25kcyA/PyAwKSwgMCk7XHJcblxyXG4gICAgICBpZiAocm91dGVJbnB1dCkgcm91dGVJbnB1dC52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICB0eXBlOiAnRmVhdHVyZUNvbGxlY3Rpb24nLFxyXG4gICAgICAgIGZlYXR1cmVzOiBbe1xyXG4gICAgICAgICAgdHlwZTogJ0ZlYXR1cmUnLFxyXG4gICAgICAgICAgZ2VvbWV0cnk6IHsgdHlwZTogJ0xpbmVTdHJpbmcnLCBjb29yZGluYXRlczogYWxsQ29vcmRzIH0sXHJcbiAgICAgICAgICBwcm9wZXJ0aWVzOiB7IHN1bW1hcnk6IHsgZGlzdGFuY2U6IHRvdGFsRGlzdCAvIDEwMDAsIGR1cmF0aW9uOiB0b3RhbER1ciB9IH0sXHJcbiAgICAgICAgfV0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoZGlzdElucHV0KSBkaXN0SW5wdXQudmFsdWUgPSBTdHJpbmcoTWF0aC5yb3VuZCh0b3RhbERpc3QpKTtcclxuICAgICAgaWYgKGR1cklucHV0KSAgZHVySW5wdXQudmFsdWUgID0gU3RyaW5nKE1hdGgucm91bmQodG90YWxEdXIpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChyb3V0ZUlucHV0KSByb3V0ZUlucHV0LnZhbHVlID0gJyc7XHJcbiAgICAgIGlmIChkaXN0SW5wdXQpICBkaXN0SW5wdXQudmFsdWUgID0gJyc7XHJcbiAgICAgIGlmIChkdXJJbnB1dCkgICBkdXJJbnB1dC52YWx1ZSAgID0gJyc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB1cGRhdGVTdGF0cygpIHtcclxuICAgIGlmICghc2VnbWVudHMubGVuZ3RoKSB7XHJcbiAgICAgIGlmIChzdGF0c0JveCkgICBzdGF0c0JveC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICBpZiAoZGlzdGFuY2VFbCkgZGlzdGFuY2VFbC50ZXh0Q29udGVudCA9ICfigJQnO1xyXG4gICAgICBpZiAoZHVyYXRpb25FbCkgZHVyYXRpb25FbC50ZXh0Q29udGVudCA9ICfigJQnO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCB0b3RhbERpc3QgPSBzZWdtZW50cy5yZWR1Y2UoKGEsIHMpID0+IGEgKyAocy5kaXN0YW5jZU1ldGVycyAgPz8gMCksIDApO1xyXG4gICAgY29uc3QgdG90YWxEdXIgID0gc2VnbWVudHMucmVkdWNlKChhLCBzKSA9PiBhICsgKHMuZHVyYXRpb25TZWNvbmRzID8/IDApLCAwKTtcclxuICAgIGlmIChzdGF0c0JveCkgICBzdGF0c0JveC5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1mbGV4JztcclxuICAgIGlmIChkaXN0YW5jZUVsKSBkaXN0YW5jZUVsLnRleHRDb250ZW50ID0gZm10RGlzdCh0b3RhbERpc3QpO1xyXG4gICAgaWYgKGR1cmF0aW9uRWwpIGR1cmF0aW9uRWwudGV4dENvbnRlbnQgPSBmbXREdXIodG90YWxEdXIpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVuZGVyU2VnTGlzdCgpIHtcclxuICAgIGlmICghc2VnTGlzdEVsKSByZXR1cm47XHJcbiAgICBzZWdMaXN0RWwuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBpZiAoIXNlZ21lbnRzLmxlbmd0aCkge1xyXG4gICAgICBzZWdMaXN0RWwuaW5uZXJIVE1MID0gJzxsaSBjbGFzcz1cInNlZy1lbXB0eVwiPkF1Y3VuIHNlZ21lbnQgcG91ciBsXFwnaW5zdGFudDwvbGk+JztcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgc2VnbWVudHMuZm9yRWFjaCgocywgaSkgPT4ge1xyXG4gICAgICBjb25zdCBpc09SUyA9IHMudHlwZSA9PT0gJ29ycyc7XHJcbiAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgbGkuY2xhc3NOYW1lID0gYHNlZy1pdGVtICR7aXNPUlMgPyAnc2VnLW9ycycgOiAnc2VnLWZyZWUnfWA7XHJcbiAgICAgIGxpLmlubmVySFRNTCA9IGBcclxuICAgICAgICA8c3BhbiBjbGFzcz1cInNlZy1kb3QgJHtpc09SUyA/ICdzZWctZG90LW9ycycgOiAnc2VnLWRvdC1mcmVlJ31cIj48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJzZWctbGFiZWxcIj5TZWdtZW50ICR7aSArIDF9IMK3ICR7Zm10RGlzdChzLmRpc3RhbmNlTWV0ZXJzKX08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJzZWctYmFkZ2UgJHtpc09SUyA/ICdzZWctYmFkZ2Utb3JzJyA6ICdzZWctYmFkZ2UtZnJlZSd9XCI+JHtpc09SUyA/ICdPUlMnIDogJ0xpYnJlJ308L3NwYW4+XHJcbiAgICAgIGA7XHJcbiAgICAgIHNlZ0xpc3RFbC5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHVwZGF0ZUhpbnQoKSB7XHJcbiAgICBpZiAoIWhpbnRFbCkgcmV0dXJuO1xyXG4gICAgaWYgKCFjdXJzb3IpICAgICAgIGhpbnRFbC50ZXh0Q29udGVudCA9ICdDbGlxdWUgc3VyIGxhIGNhcnRlIHBvdXIgcG9zZXIgbGUgcHJlbWllciBwb2ludC4nO1xyXG4gICAgZWxzZSBpZiAoZnJlZU1vZGUpIGhpbnRFbC50ZXh0Q29udGVudCA9ICdNb2RlIGxpYnJlIOKAlCBjaGFxdWUgY2xpYyB0cmFjZSB1bmUgbGlnbmUgZGlyZWN0ZS4nO1xyXG4gICAgZWxzZSAgICAgICAgICAgICAgIGhpbnRFbC50ZXh0Q29udGVudCA9ICdDbGlxdWUgcG91ciBham91dGVyIHVuIHBvaW50IOKAlCBPUlMgY2FsY3VsZSBsZSBjaGVtaW4uJztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNldEhpbnQobXNnKSB7IGlmIChoaW50RWwpIGhpbnRFbC50ZXh0Q29udGVudCA9IG1zZzsgfVxyXG5cclxuICBmdW5jdGlvbiBzZXRTdGF0dXModHlwZSkge1xyXG4gICAgaWYgKCFzdGF0dXNCYXJFbCkgcmV0dXJuO1xyXG4gICAgc3RhdHVzQmFyRWwuY2xhc3NOYW1lID0gJ21hcC1zdGF0dXMnO1xyXG4gICAgc3RhdHVzQmFyRWwuaGlkZGVuICAgID0gZmFsc2U7XHJcbiAgICBpZiAodHlwZSA9PT0gJ2hpZGUnKSB7IHN0YXR1c0JhckVsLmhpZGRlbiA9IHRydWU7IHJldHVybjsgfVxyXG4gICAgY29uc3QgY2xzID0geyBsb2FkOiAnbWFwLXN0YXR1cy0tbG9hZCcsIG9yczogJ21hcC1zdGF0dXMtLW9ycycsIGZyZWU6ICdtYXAtc3RhdHVzLS1mcmVlJyB9O1xyXG4gICAgY29uc3QgdHh0ID0ge1xyXG4gICAgICBsb2FkOiAnPHNwYW4gY2xhc3M9XCJtYXAtc3RhdHVzX19zcGluXCI+PC9zcGFuPkNhbGN1bCBlbiBjb3Vyc+KApicsXHJcbiAgICAgIG9yczogICc8c3BhbiBjbGFzcz1cIm1hcC1zdGF0dXNfX2RvdFwiPjwvc3Bhbj5Nb2RlIENhbGN1bCBhY3RpZicsXHJcbiAgICAgIGZyZWU6ICc8c3BhbiBjbGFzcz1cIm1hcC1zdGF0dXNfX2RvdFwiPjwvc3Bhbj5Nb2RlIExpYnJlIGFjdGlmJyxcclxuICAgIH07XHJcbiAgICBzdGF0dXNCYXJFbC5jbGFzc0xpc3QuYWRkKGNsc1t0eXBlXSk7XHJcbiAgICBzdGF0dXNCYXJFbC5pbm5lckhUTUwgPSB0eHRbdHlwZV07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBmbXREaXN0KG0pIHtcclxuICAgIGlmIChtID09IG51bGwpIHJldHVybiAn4oCUJztcclxuICAgIHJldHVybiBtIDwgMTAwMCA/IGAke01hdGgucm91bmQobSl9IG1gIDogYCR7KG0gLyAxMDAwKS50b0ZpeGVkKDIpLnJlcGxhY2UoJy4nLCAnLCcpfSBrbWA7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBmbXREdXIocykge1xyXG4gICAgaWYgKHMgPT0gbnVsbCkgcmV0dXJuICfigJQnO1xyXG4gICAgcyA9IE1hdGgucm91bmQocyk7XHJcbiAgICBjb25zdCBoID0gTWF0aC5mbG9vcihzIC8gMzYwMCksIG0gPSBNYXRoLmZsb29yKChzICUgMzYwMCkgLyA2MCk7XHJcbiAgICByZXR1cm4gaCA8PSAwID8gYCR7bX0gbWluYCA6IGAke2h9IGggJHtTdHJpbmcobSkucGFkU3RhcnQoMiwgJzAnKX0gbWluYDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHRyeVBhcnNlKHN0cikge1xyXG4gICAgdHJ5IHsgcmV0dXJuIEpTT04ucGFyc2Uoc3RyKTsgfSBjYXRjaCB7IHJldHVybiBudWxsOyB9XHJcbiAgfVxyXG5cclxuICBidG5VbmRvPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHVuZG9MYXN0KTtcclxuICBidG5DbG9zZT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZUxvb3ApO1xyXG4gIGJ0bkNsZWFyPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsZWFyQWxsKTtcclxuICBidG5GcmVlVG9nZ2xlPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZUZyZWUpO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW9ycy1wcm9maWxlXScpLmZvckVhY2goZWwgPT5cclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2V0UHJvZmlsZShlbC5kYXRhc2V0Lm9yc1Byb2ZpbGUpKVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHNhdmVkV3AgID0gY2ZnLmluaXRpYWxXYXlwb2ludHMgICAgPz8gdHJ5UGFyc2Uod3BJbnB1dD8udmFsdWUgICAgPz8gJycpO1xyXG4gIGNvbnN0IHNhdmVkR2VvID0gY2ZnLmluaXRpYWxSb3V0ZUdlb0pzb24gPz8gdHJ5UGFyc2Uocm91dGVJbnB1dD8udmFsdWUgPz8gJycpO1xyXG5cclxuICBpZiAoQXJyYXkuaXNBcnJheShzYXZlZFdwKSAmJiBzYXZlZFdwLmxlbmd0aCA+PSAyICYmIHNhdmVkR2VvKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICByZXN0b3JhdGlvbkxheWVyID0gTC5nZW9KU09OKHNhdmVkR2VvLCB7XHJcbiAgICAgICAgc3R5bGU6ICgpID0+ICh7IGNvbG9yOiAnIzRhN2M1OScsIHdlaWdodDogNSwgb3BhY2l0eTogLjksIGxpbmVDYXA6ICdyb3VuZCcgfSksXHJcbiAgICAgIH0pLmFkZFRvKG1hcCk7XHJcbiAgICAgIGlmIChjZmcuaW5pdGlhbFJvdXRlR2VvSnNvbikgY2ZnLmluaXRpYWxSb3V0ZUdlb0pzb24gPSBudWxsO1xyXG4gICAgfSBjYXRjaCAoZSkgeyBjb25zb2xlLndhcm4oJ1tiYWxhZGUtbWFwXSBHZW9KU09OIGludmFsaWRlJywgZSk7IH1cclxuXHJcbiAgICBzYXZlZFdwLmZvckVhY2goKHAsIGkpID0+IHtcclxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHApIHx8IHAubGVuZ3RoIDwgMikgcmV0dXJuO1xyXG4gICAgICBjb25zdCBsbCA9IEwubGF0TG5nKHBbMF0sIHBbMV0pO1xyXG4gICAgICBpZiAoaSA9PT0gMCkge1xyXG4gICAgICAgIGN1cnNvciA9IGxsO1xyXG4gICAgICAgIHN0YXJ0TWFya2VyID0gTC5tYXJrZXIobGwsIHsgaWNvbjogSUMuc3RhcnQgfSkuYWRkVG8obWFwKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBwcmV2ID0gc2F2ZWRXcFtpIC0gMV07XHJcbiAgICAgICAgY29uc3QgZnJvbSA9IEwubGF0TG5nKHByZXZbMF0sIHByZXZbMV0pO1xyXG4gICAgICAgIGNvbnN0IHR5cGUgPSBwcmV2WzJdID8/ICdvcnMnO1xyXG4gICAgICAgIHNlZ21lbnRzLnB1c2goe1xyXG4gICAgICAgICAgdHlwZSwgZnJvbSwgdG86IGxsLFxyXG4gICAgICAgICAgcG9pbnRzOiBbZnJvbSwgbGxdLFxyXG4gICAgICAgICAgbGF5ZXJzOiBbXSxcclxuICAgICAgICAgIGRpc3RhbmNlTWV0ZXJzOiAgZnJvbS5kaXN0YW5jZVRvKGxsKSxcclxuICAgICAgICAgIGR1cmF0aW9uU2Vjb25kczogKGZyb20uZGlzdGFuY2VUbyhsbCkgLyAxMDAwIC8gNCkgKiAzNjAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG1vdmVDdXJzb3IobGwpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBtYXAuZml0Qm91bmRzKEwubGF0TG5nQm91bmRzKHNhdmVkV3AubWFwKHAgPT4gTC5sYXRMbmcocFswXSwgcFsxXSkpKSwgeyBwYWRkaW5nOiBbMzAsIDMwXSB9KTtcclxuICAgIHNldFN0YXR1cyhmcmVlTW9kZSA/ICdmcmVlJyA6ICdvcnMnKTtcclxuXHJcbiAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHNhdmVkV3ApICYmIHNhdmVkV3AubGVuZ3RoID09PSAxKSB7XHJcbiAgICBjb25zdCBsbCA9IEwubGF0TG5nKHNhdmVkV3BbMF1bMF0sIHNhdmVkV3BbMF1bMV0pO1xyXG4gICAgY3Vyc29yID0gbGw7XHJcbiAgICBzdGFydE1hcmtlciA9IEwubWFya2VyKGxsLCB7IGljb246IElDLnN0YXJ0IH0pLmFkZFRvKG1hcCk7XHJcbiAgICBtYXAuc2V0VmlldyhsbCwgMTUpO1xyXG4gICAgc2V0U3RhdHVzKGZyZWVNb2RlID8gJ2ZyZWUnIDogJ29ycycpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZXhpc3RpbmdEaXN0ID0gY2ZnLmluaXRpYWxEaXN0YW5jZSA/PyAoZGlzdElucHV0Py52YWx1ZSAgPyBwYXJzZUZsb2F0KGRpc3RJbnB1dC52YWx1ZSkgIDogbnVsbCk7XHJcbiAgY29uc3QgZXhpc3RpbmdEdXIgID0gY2ZnLmluaXRpYWxEdXJhdGlvbiA/PyAoZHVySW5wdXQ/LnZhbHVlICAgPyBwYXJzZUZsb2F0KGR1cklucHV0LnZhbHVlKSAgIDogbnVsbCk7XHJcbiAgaWYgKGV4aXN0aW5nRGlzdCAhPSBudWxsICYmIHNlZ21lbnRzLmxlbmd0aCkge1xyXG4gICAgaWYgKHN0YXRzQm94KSAgIHN0YXRzQm94LnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWZsZXgnO1xyXG4gICAgaWYgKGRpc3RhbmNlRWwpIGRpc3RhbmNlRWwudGV4dENvbnRlbnQgPSBmbXREaXN0KGV4aXN0aW5nRGlzdCk7XHJcbiAgICBpZiAoZHVyYXRpb25FbCkgZHVyYXRpb25FbC50ZXh0Q29udGVudCA9IGZtdER1cihleGlzdGluZ0R1cik7XHJcbiAgfVxyXG5cclxuICBzZXRQcm9maWxlKG9yc1Byb2ZpbGUpO1xyXG4gIHJlbmRlclNlZ0xpc3QoKTtcclxuICB1cGRhdGVIaW50KCk7XHJcbn0iLCJpbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcclxuaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9jc3MvYWxsLm1pbi5jc3MnO1xyXG5pbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2pzL2FsbC5qcyc7XHJcblxyXG5pbXBvcnQgTCBmcm9tICdsZWFmbGV0JztcclxuaW1wb3J0ICdsZWFmbGV0L2Rpc3QvbGVhZmxldC5jc3MnO1xyXG5cclxuaW1wb3J0ICdsZWFmbGV0LWRyYXcnO1xyXG5pbXBvcnQgJ2xlYWZsZXQtZHJhdy9kaXN0L2xlYWZsZXQuZHJhdy5jc3MnO1xyXG5cclxuaW1wb3J0ICdsZWFmbGV0LXJvdXRpbmctbWFjaGluZSc7XHJcbmltcG9ydCAnbGVhZmxldC1yb3V0aW5nLW1hY2hpbmUvZGlzdC9sZWFmbGV0LXJvdXRpbmctbWFjaGluZS5jc3MnO1xyXG5cclxuaW1wb3J0IG1hcmtlckljb24gZnJvbSAnbGVhZmxldC9kaXN0L2ltYWdlcy9tYXJrZXItaWNvbi5wbmcnO1xyXG5pbXBvcnQgbWFya2VyU2hhZG93IGZyb20gJ2xlYWZsZXQvZGlzdC9pbWFnZXMvbWFya2VyLXNoYWRvdy5wbmcnO1xyXG5cclxuZGVsZXRlIEwuSWNvbi5EZWZhdWx0LnByb3RvdHlwZS5fZ2V0SWNvblVybDtcclxuTC5JY29uLkRlZmF1bHQubWVyZ2VPcHRpb25zKHtcclxuICBpY29uVXJsOiBtYXJrZXJJY29uLFxyXG4gIHNoYWRvd1VybDogbWFya2VyU2hhZG93LFxyXG59KTtcclxuXHJcbndpbmRvdy5MID0gTDtcclxuXHJcbmltcG9ydCB7IGluaXRCYWxhZGVNYXAgfSBmcm9tICcuL0phdmFzY3JpcHQvYmFsYWRlLW1hcC5qcyc7XHJcbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJykpIHtcclxuICAgIGluaXRCYWxhZGVNYXAoKTtcclxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJlIiwidCIsInIiLCJTeW1ib2wiLCJuIiwiaXRlcmF0b3IiLCJvIiwidG9TdHJpbmdUYWciLCJpIiwiYyIsInByb3RvdHlwZSIsIkdlbmVyYXRvciIsInUiLCJPYmplY3QiLCJjcmVhdGUiLCJfcmVnZW5lcmF0b3JEZWZpbmUyIiwiZiIsInAiLCJ5IiwiRyIsInYiLCJhIiwiZCIsImJpbmQiLCJsZW5ndGgiLCJsIiwiVHlwZUVycm9yIiwiY2FsbCIsImRvbmUiLCJ2YWx1ZSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJnZXRQcm90b3R5cGVPZiIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiZGlzcGxheU5hbWUiLCJfcmVnZW5lcmF0b3IiLCJ3IiwibSIsImRlZmluZVByb3BlcnR5IiwiX3JlZ2VuZXJhdG9yRGVmaW5lIiwiX2ludm9rZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIl90b0NvbnN1bWFibGVBcnJheSIsIl9hcnJheVdpdGhvdXRIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXkiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVTcHJlYWQiLCJBcnJheSIsImZyb20iLCJpc0FycmF5IiwiX2FycmF5TGlrZVRvQXJyYXkiLCJvd25LZXlzIiwia2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsImZpbHRlciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInB1c2giLCJhcHBseSIsIl9vYmplY3RTcHJlYWQiLCJhcmd1bWVudHMiLCJmb3JFYWNoIiwiX2RlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJfdG9Qcm9wZXJ0eUtleSIsIl90b1ByaW1pdGl2ZSIsIl90eXBlb2YiLCJ0b1ByaW1pdGl2ZSIsIlN0cmluZyIsIk51bWJlciIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX25leHQiLCJfdGhyb3ciLCJfc2xpY2VkVG9BcnJheSIsIl9hcnJheVdpdGhIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXlMaW1pdCIsIl9ub25JdGVyYWJsZVJlc3QiLCJ0b1N0cmluZyIsInNsaWNlIiwiY29uc3RydWN0b3IiLCJuYW1lIiwidGVzdCIsIm5leHQiLCJpbml0QmFsYWRlTWFwIiwiX2NmZyRkZWZhdWx0VmlldyIsIl9jZmckb3JzUHJvZmlsZSIsIl9jZmckaW5pdGlhbFdheXBvaW50cyIsIl93cElucHV0JHZhbHVlIiwiX2NmZyRpbml0aWFsUm91dGVHZW9KIiwiX3JvdXRlSW5wdXQkdmFsdWUiLCJfY2ZnJGluaXRpYWxEaXN0YW5jZSIsIl9jZmckaW5pdGlhbER1cmF0aW9uIiwiY2ZnIiwid2luZG93IiwiQkFMQURFX01BUF9DT05GSUciLCJfcmVmIiwiZGVmYXVsdFZpZXciLCJfcmVmMiIsImRlZkxhdCIsImRlZkxuZyIsImRlZlpvb20iLCJtYXAiLCJMIiwiZG91YmxlQ2xpY2tab29tIiwic2V0VmlldyIsInNldFRpbWVvdXQiLCJpbnZhbGlkYXRlU2l6ZSIsInRpbGVMYXllciIsImF0dHJpYnV0aW9uIiwibWF4Wm9vbSIsImFkZFRvIiwid3BJbnB1dCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb3V0ZUlucHV0IiwiZGlzdElucHV0IiwiZHVySW5wdXQiLCJidG5VbmRvIiwiYnRuQ2xvc2UiLCJidG5DbGVhciIsImJ0bkZyZWVUb2dnbGUiLCJwaWxsRWwiLCJmcmVlRGVzY0VsIiwiaGludEVsIiwic3RhdHVzQmFyRWwiLCJzdGF0c0JveCIsImRpc3RhbmNlRWwiLCJkdXJhdGlvbkVsIiwic2VnTGlzdEVsIiwib3JzUHJvZmlsZSIsImZyZWVNb2RlIiwiY3Vyc29yIiwic2VnbWVudHMiLCJzdGFydE1hcmtlciIsImN1cnNvck1rIiwicHJldmlld0xpbmUiLCJvcnNTZXEiLCJyZXN0b3JhdGlvbkxheWVyIiwibWFrZVBpbiIsImJnIiwiZW1vamkiLCJkaXZJY29uIiwiaHRtbCIsImNvbmNhdCIsImNsYXNzTmFtZSIsImljb25TaXplIiwiaWNvbkFuY2hvciIsIklDIiwic3RhcnQiLCJvbiIsImxhdGxuZyIsIm1hcmtlciIsImljb24iLCJzZXRTdGF0dXMiLCJhZGRGcmVlU2VnIiwiYWRkT1JTU2VnIiwidXBkYXRlSGludCIsInJlbmRlclNlZ0xpc3QiLCJwZXJzaXN0IiwicmVtb3ZlTGF5ZXIiLCJwb2x5bGluZSIsImNvbG9yIiwid2VpZ2h0Iiwib3BhY2l0eSIsImRhc2hBcnJheSIsImxpbmVDYXAiLCJ0byIsImNsZWFyTGF5ZXJzIiwicmVtb3ZlIiwicHRzIiwibGF5ZXJzIiwiZHJhd1BvbHkiLCJkaXN0TSIsImRpc3RhbmNlVG8iLCJ0eXBlIiwicG9pbnRzIiwiZGlzdGFuY2VNZXRlcnMiLCJkdXJhdGlvblNlY29uZHMiLCJtb3ZlQ3Vyc29yIiwidXBkYXRlU3RhdHMiLCJfeCIsIl94MiIsIl9hZGRPUlNTZWciLCJfY2FsbGVlIiwic2VxIiwiX2RhdGEkZ2VvanNvbiRnZW9tZXRyIiwiX2RhdGEkZ2VvanNvbiIsIl9kYXRhJGRpc3RhbmNlIiwiX2RhdGEkZHVyYXRpb24iLCJyZXMiLCJkYXRhIiwiY29vcmRzIiwiZHVyUyIsIl90IiwiX2NvbnRleHQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImxhdCIsImxuZyIsInByb2ZpbGUiLCJqc29uIiwib2siLCJjb25zb2xlIiwiZXJyb3IiLCJzZXRIaW50IiwiZ2VvanNvbiIsImdlb21ldHJ5IiwiY29vcmRpbmF0ZXMiLCJsYXRMbmciLCJkaXN0YW5jZSIsImR1cmF0aW9uIiwic2hhZG93IiwibGluZSIsImxpbmVKb2luIiwicmVtb3ZlTGF5ZXJzIiwibGwiLCJjbG9zZUxvb3AiLCJmaXJzdCIsInNhbWUiLCJNYXRoIiwiYWJzIiwidW5kb0xhc3QiLCJzZWciLCJwb3AiLCJjbGVhckFsbCIsImVhY2hMYXllciIsInMiLCJQb2x5bGluZSIsIkdlb0pTT04iLCJ0b2dnbGVGcmVlIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwidGV4dENvbnRlbnQiLCJnZXRDb250YWluZXIiLCJzdHlsZSIsInNldFByb2ZpbGUiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWwiLCJkYXRhc2V0Iiwid3BzIiwiYWxsQ29vcmRzIiwidG90YWxEaXN0IiwicmVkdWNlIiwiX3MkZGlzdGFuY2VNZXRlcnMiLCJ0b3RhbER1ciIsIl9zJGR1cmF0aW9uU2Vjb25kcyIsImZlYXR1cmVzIiwicHJvcGVydGllcyIsInN1bW1hcnkiLCJyb3VuZCIsImRpc3BsYXkiLCJfcyRkaXN0YW5jZU1ldGVyczIiLCJfcyRkdXJhdGlvblNlY29uZHMyIiwiZm10RGlzdCIsImZtdER1ciIsImlubmVySFRNTCIsImlzT1JTIiwibGkiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJtc2ciLCJoaWRkZW4iLCJjbHMiLCJsb2FkIiwib3JzIiwiZnJlZSIsInR4dCIsImFkZCIsInRvRml4ZWQiLCJyZXBsYWNlIiwiaCIsImZsb29yIiwicGFkU3RhcnQiLCJ0cnlQYXJzZSIsInN0ciIsInBhcnNlIiwiX3VudXNlZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzYXZlZFdwIiwiaW5pdGlhbFdheXBvaW50cyIsInNhdmVkR2VvIiwiaW5pdGlhbFJvdXRlR2VvSnNvbiIsImdlb0pTT04iLCJ3YXJuIiwiX3ByZXYkIiwicHJldiIsImZpdEJvdW5kcyIsImxhdExuZ0JvdW5kcyIsInBhZGRpbmciLCJleGlzdGluZ0Rpc3QiLCJpbml0aWFsRGlzdGFuY2UiLCJwYXJzZUZsb2F0IiwiZXhpc3RpbmdEdXIiLCJpbml0aWFsRHVyYXRpb24iLCJtYXJrZXJJY29uIiwibWFya2VyU2hhZG93IiwiSWNvbiIsIkRlZmF1bHQiLCJfZ2V0SWNvblVybCIsIm1lcmdlT3B0aW9ucyIsImljb25VcmwiLCJzaGFkb3dVcmwiXSwic291cmNlUm9vdCI6IiJ9