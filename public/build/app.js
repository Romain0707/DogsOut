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
/**
 * balade-map.js
 *
 * Carte de création/édition de balade chien — Symfony
 *
 * Utilise uniquement les deux champs existants :
 *   #balade_waypointsJson  → [[lat, lng, "ors"|"free"], …]
 *   #balade_routeGeoJson   → FeatureCollection LineString fusionnée
 *   #balade_distanceMeters → mètres
 *   #balade_durationSeconds→ secondes
 *
 * Éléments UI :
 *   #map, #btn-undo, #btn-close, #btn-clear
 *   #btn-free-toggle, #free-toggle-pill, #free-toggle-desc
 *   #map-hint, #map-status
 *   #route-stats, #route-distance, #route-duration
 *   #seg-list
 *   [data-ors-profile] → boutons profil
 */

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

  // ── Champs Symfony ─────────────────────────────────────────────────────
  var wpInput = document.getElementById('balade_waypointsJson');
  var routeInput = document.getElementById('balade_routeGeoJson');
  var distInput = document.getElementById('balade_distanceMeters');
  var durInput = document.getElementById('balade_durationSeconds');

  // ── UI ─────────────────────────────────────────────────────────────────
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

  // ── État ───────────────────────────────────────────────────────────────
  var orsProfile = (_cfg$orsProfile = cfg.orsProfile) !== null && _cfg$orsProfile !== void 0 ? _cfg$orsProfile : 'foot-walking';
  var freeMode = false;
  var cursor = null; // L.LatLng — dernier point confirmé
  var segments = []; // [{ type, from, to, points, layers, distanceMeters, durationSeconds }]
  var startMarker = null;
  var cursorMk = null;
  var previewLine = null;
  var orsSeq = 0;
  var restorationLayer = null; // layer GeoJSON affiché au chargement (mode édition)

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

  // ── Événements carte ───────────────────────────────────────────────────
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

  // ── Segment libre ──────────────────────────────────────────────────────
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

  // ── Segment ORS ────────────────────────────────────────────────────────
  function addORSSeg(_x, _x2) {
    return _addORSSeg.apply(this, arguments);
  } // ── Dessin polyline ────────────────────────────────────────────────────
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
            // Le contrôleur retourne data.geojson = un Feature (pas FeatureCollection)
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
            distM = (_data$distance = data.distance) !== null && _data$distance !== void 0 ? _data$distance : from.distanceTo(to); // déjà en mètres (contrôleur fait km→m)
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

  // ── Fermer la boucle ───────────────────────────────────────────────────
  function closeLoop() {
    if (!cursor || !segments.length) return;
    var first = segments[0].from;
    var same = Math.abs(cursor.lat - first.lat) < 1e-6 && Math.abs(cursor.lng - first.lng) < 1e-6;
    if (same) return;
    if (freeMode) addFreeSeg(cursor, first);else addORSSeg(cursor, first);
  }

  // ── Annuler dernier ────────────────────────────────────────────────────
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

  // ── Tout effacer ───────────────────────────────────────────────────────
  function clearAll() {
    orsSeq++;
    // Supprimer le layer de restauration (L.GeoJSON = LayerGroup)
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
    // Forcer la suppression de toutes les polylines/paths restants sur la carte
    // (filet de sécurité au cas où un layer aurait échappé au tracking)
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

  // ── Toggle mode libre ──────────────────────────────────────────────────
  function toggleFree() {
    freeMode = !freeMode;
    btnFreeToggle === null || btnFreeToggle === void 0 || btnFreeToggle.classList.toggle('on', freeMode);
    pillEl === null || pillEl === void 0 || pillEl.classList.toggle('on', freeMode);
    if (freeDescEl) freeDescEl.textContent = freeMode ? '✓ Actif — tracé libre en cours' : 'Tracé libre pour les chemins hors carte';
    map.getContainer().style.cursor = freeMode ? 'crosshair' : '';
    if (cursor) setStatus(freeMode ? 'free' : 'ors');
    updateHint();
  }

  // ── Profil ORS ─────────────────────────────────────────────────────────
  function setProfile(p) {
    orsProfile = p;
    document.querySelectorAll('[data-ors-profile]').forEach(function (el) {
      return el.classList.toggle('active', el.dataset.orsProfile === p);
    });
  }

  // ── Persistance ────────────────────────────────────────────────────────
  //
  // waypointsJson = [[lat, lng, "ors"|"free"], …]
  //   • Le type du segment N est celui qui relie le point N → N+1
  //   • Le dernier élément n'a pas de segment sortant, on met le type courant
  //
  // routeGeoJson  = FeatureCollection avec une LineString fusionnée
  //
  function persist() {
    // 1. Waypoints avec type de segment
    var wps = [];
    if (cursor || segments.length) {
      if (segments.length) {
        segments.forEach(function (s) {
          return wps.push([s.from.lat, s.from.lng, s.type]);
        });
        wps.push([cursor.lat, cursor.lng, freeMode ? 'free' : 'ors']); // dernier point
      } else if (cursor) {
        wps.push([cursor.lat, cursor.lng, freeMode ? 'free' : 'ors']);
      }
    }
    if (wpInput) wpInput.value = JSON.stringify(wps);

    // 2. GeoJSON fusionné — une seule LineString
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

  // ── Stats UI ───────────────────────────────────────────────────────────
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

  // ── Liste segments ─────────────────────────────────────────────────────
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

  // ── Hint & statut ──────────────────────────────────────────────────────
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
      load: '<span class="map-status__spin"></span>Calcul ORS en cours…',
      ors: '<span class="map-status__dot"></span>Mode ORS actif',
      free: '<span class="map-status__dot"></span>Mode Libre actif'
    };
    statusBarEl.classList.add(cls[type]);
    statusBarEl.innerHTML = txt[type];
  }

  // ── Formatters ─────────────────────────────────────────────────────────
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

  // ── Bindings ───────────────────────────────────────────────────────────
  btnUndo === null || btnUndo === void 0 || btnUndo.addEventListener('click', undoLast);
  btnClose === null || btnClose === void 0 || btnClose.addEventListener('click', closeLoop);
  btnClear === null || btnClear === void 0 || btnClear.addEventListener('click', clearAll);
  btnFreeToggle === null || btnFreeToggle === void 0 || btnFreeToggle.addEventListener('click', toggleFree);
  document.querySelectorAll('[data-ors-profile]').forEach(function (el) {
    return el.addEventListener('click', function () {
      return setProfile(el.dataset.orsProfile);
    });
  });

  // ── Restauration (mode édition) ────────────────────────────────────────
  //
  // On relit waypointsJson = [[lat, lng, "ors"|"free"], …]
  // Pour chaque paire de points consécutifs, on recrée le segment visuellement.
  //
  // Pour les segments ORS : on ne rappelle PAS l'API (trop coûteux au chargement).
  // On affiche directement le routeGeoJson déjà sauvegardé, et on reconstitue
  // les waypoints/markers pour permettre l'édition (ajout/annulation).
  //
  var savedWp = (_cfg$initialWaypoints = cfg.initialWaypoints) !== null && _cfg$initialWaypoints !== void 0 ? _cfg$initialWaypoints : tryParse((_wpInput$value = wpInput === null || wpInput === void 0 ? void 0 : wpInput.value) !== null && _wpInput$value !== void 0 ? _wpInput$value : '');
  var savedGeo = (_cfg$initialRouteGeoJ = cfg.initialRouteGeoJson) !== null && _cfg$initialRouteGeoJ !== void 0 ? _cfg$initialRouteGeoJ : tryParse((_routeInput$value = routeInput === null || routeInput === void 0 ? void 0 : routeInput.value) !== null && _routeInput$value !== void 0 ? _routeInput$value : '');
  if (Array.isArray(savedWp) && savedWp.length >= 2 && savedGeo) {
    // Afficher le tracé GeoJSON sauvegardé tel quel (vert plein)
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
      // Vider cfg pour éviter toute réutilisation après clearAll
      if (cfg.initialRouteGeoJson) cfg.initialRouteGeoJson = null;
    } catch (e) {
      console.warn('[balade-map] GeoJSON invalide', e);
    }

    // Restaurer les marqueurs de waypoints pour permettre l'édition
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
        // Recréer un segment "fantôme" sans layer propre
        // (le layer est déjà affiché via le GeoJSON global)
        var prev = savedWp[i - 1];
        var from = L.latLng(prev[0], prev[1]);
        var type = (_prev$ = prev[2]) !== null && _prev$ !== void 0 ? _prev$ : 'ors';
        segments.push({
          type: type,
          from: from,
          to: ll,
          points: [from, ll],
          // approximatif, suffit pour undo/persist
          layers: [],
          // layers vides car le GeoJSON est déjà affiché
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
    // Un seul point posé, pas encore de segment
    var ll = L.latLng(savedWp[0][0], savedWp[0][1]);
    cursor = ll;
    startMarker = L.marker(ll, {
      icon: IC.start
    }).addTo(map);
    map.setView(ll, 15);
    setStatus(freeMode ? 'free' : 'ors');
  }

  // Restaurer distance/durée affichées
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_leaflet-draw_dist_leaflet_draw_js-node_modules_leaflet-routing-machine_d-caadf1"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQztFQUMxQkMsT0FBTyxFQUFFTixnRUFBVTtFQUNuQk8sU0FBUyxFQUFFTixrRUFBWUE7QUFDekIsQ0FBQyxDQUFDO0FBRUY5TSxNQUFNLENBQUNTLENBQUMsR0FBR0EsZ0RBQUM7QUFFK0M7QUFDM0QsSUFBSVUsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDLEVBQUU7RUFDaEM5Qix3RUFBYSxDQUFDLENBQUM7QUFDbkIsQzs7Ozs7Ozs7Ozs7QUN6QkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvSmF2YXNjcmlwdC9iYWxhZGUtbWFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogYmFsYWRlLW1hcC5qc1xyXG4gKlxyXG4gKiBDYXJ0ZSBkZSBjcsOpYXRpb24vw6lkaXRpb24gZGUgYmFsYWRlIGNoaWVuIOKAlCBTeW1mb255XHJcbiAqXHJcbiAqIFV0aWxpc2UgdW5pcXVlbWVudCBsZXMgZGV1eCBjaGFtcHMgZXhpc3RhbnRzIDpcclxuICogICAjYmFsYWRlX3dheXBvaW50c0pzb24gIOKGkiBbW2xhdCwgbG5nLCBcIm9yc1wifFwiZnJlZVwiXSwg4oCmXVxyXG4gKiAgICNiYWxhZGVfcm91dGVHZW9Kc29uICAg4oaSIEZlYXR1cmVDb2xsZWN0aW9uIExpbmVTdHJpbmcgZnVzaW9ubsOpZVxyXG4gKiAgICNiYWxhZGVfZGlzdGFuY2VNZXRlcnMg4oaSIG3DqHRyZXNcclxuICogICAjYmFsYWRlX2R1cmF0aW9uU2Vjb25kc+KGkiBzZWNvbmRlc1xyXG4gKlxyXG4gKiDDiWzDqW1lbnRzIFVJIDpcclxuICogICAjbWFwLCAjYnRuLXVuZG8sICNidG4tY2xvc2UsICNidG4tY2xlYXJcclxuICogICAjYnRuLWZyZWUtdG9nZ2xlLCAjZnJlZS10b2dnbGUtcGlsbCwgI2ZyZWUtdG9nZ2xlLWRlc2NcclxuICogICAjbWFwLWhpbnQsICNtYXAtc3RhdHVzXHJcbiAqICAgI3JvdXRlLXN0YXRzLCAjcm91dGUtZGlzdGFuY2UsICNyb3V0ZS1kdXJhdGlvblxyXG4gKiAgICNzZWctbGlzdFxyXG4gKiAgIFtkYXRhLW9ycy1wcm9maWxlXSDihpIgYm91dG9ucyBwcm9maWxcclxuICovXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdEJhbGFkZU1hcCgpIHtcclxuXHJcbiAgY29uc3QgY2ZnID0gd2luZG93LkJBTEFERV9NQVBfQ09ORklHIHx8IHt9O1xyXG5cclxuICAvLyDilIDilIAgQ2FydGUg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXHJcbiAgY29uc3QgW2RlZkxhdCwgZGVmTG5nLCBkZWZab29tXSA9IGNmZy5kZWZhdWx0VmlldyA/PyBbNDQuODM3OCwgLTAuNTc5MiwgMTNdO1xyXG4gIGNvbnN0IG1hcCA9IEwubWFwKCdtYXAnLCB7IGRvdWJsZUNsaWNrWm9vbTogZmFsc2UgfSkuc2V0VmlldyhbZGVmTGF0LCBkZWZMbmddLCBkZWZab29tKTtcclxuICBzZXRUaW1lb3V0KCgpID0+IG1hcC5pbnZhbGlkYXRlU2l6ZSgpLCAxNTApO1xyXG5cclxuICBMLnRpbGVMYXllcignaHR0cHM6Ly97c30udGlsZS5vcGVuc3RyZWV0bWFwLmZyL29zbWZyL3t6fS97eH0ve3l9LnBuZycsIHtcclxuICAgIGF0dHJpYnV0aW9uOiAnJmNvcHk7IE9wZW5TdHJlZXRNYXAgY29udHJpYnV0b3JzJywgbWF4Wm9vbTogMTksXHJcbiAgfSkuYWRkVG8obWFwKTtcclxuXHJcbiAgLy8g4pSA4pSAIENoYW1wcyBTeW1mb255IOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxyXG4gIGNvbnN0IHdwSW5wdXQgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFsYWRlX3dheXBvaW50c0pzb24nKTtcclxuICBjb25zdCByb3V0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhbGFkZV9yb3V0ZUdlb0pzb24nKTtcclxuICBjb25zdCBkaXN0SW5wdXQgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhbGFkZV9kaXN0YW5jZU1ldGVycycpO1xyXG4gIGNvbnN0IGR1cklucHV0ICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFsYWRlX2R1cmF0aW9uU2Vjb25kcycpO1xyXG5cclxuICAvLyDilIDilIAgVUkg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXHJcbiAgY29uc3QgYnRuVW5kbyAgICAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tdW5kbycpO1xyXG4gIGNvbnN0IGJ0bkNsb3NlICAgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLWNsb3NlJyk7XHJcbiAgY29uc3QgYnRuQ2xlYXIgICAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tY2xlYXInKTtcclxuICBjb25zdCBidG5GcmVlVG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1mcmVlLXRvZ2dsZScpO1xyXG4gIGNvbnN0IHBpbGxFbCAgICAgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnJlZS10b2dnbGUtcGlsbCcpO1xyXG4gIGNvbnN0IGZyZWVEZXNjRWwgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnJlZS10b2dnbGUtZGVzYycpO1xyXG4gIGNvbnN0IGhpbnRFbCAgICAgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwLWhpbnQnKTtcclxuICBjb25zdCBzdGF0dXNCYXJFbCAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcC1zdGF0dXMnKTtcclxuICBjb25zdCBzdGF0c0JveCAgICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JvdXRlLXN0YXRzJyk7XHJcbiAgY29uc3QgZGlzdGFuY2VFbCAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb3V0ZS1kaXN0YW5jZScpO1xyXG4gIGNvbnN0IGR1cmF0aW9uRWwgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm91dGUtZHVyYXRpb24nKTtcclxuICBjb25zdCBzZWdMaXN0RWwgICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlZy1saXN0Jyk7XHJcblxyXG4gIC8vIOKUgOKUgCDDiXRhdCDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcclxuICBsZXQgb3JzUHJvZmlsZSAgPSBjZmcub3JzUHJvZmlsZSA/PyAnZm9vdC13YWxraW5nJztcclxuICBsZXQgZnJlZU1vZGUgICAgPSBmYWxzZTtcclxuICBsZXQgY3Vyc29yICAgICAgPSBudWxsOyAgIC8vIEwuTGF0TG5nIOKAlCBkZXJuaWVyIHBvaW50IGNvbmZpcm3DqVxyXG4gIGxldCBzZWdtZW50cyAgICA9IFtdOyAgICAgLy8gW3sgdHlwZSwgZnJvbSwgdG8sIHBvaW50cywgbGF5ZXJzLCBkaXN0YW5jZU1ldGVycywgZHVyYXRpb25TZWNvbmRzIH1dXHJcbiAgbGV0IHN0YXJ0TWFya2VyID0gbnVsbDtcclxuICBsZXQgY3Vyc29yTWsgICAgPSBudWxsO1xyXG4gIGxldCBwcmV2aWV3TGluZSA9IG51bGw7XHJcbiAgbGV0IG9yc1NlcSAgICAgICAgICA9IDA7XHJcbiAgbGV0IHJlc3RvcmF0aW9uTGF5ZXIgPSBudWxsOyAgLy8gbGF5ZXIgR2VvSlNPTiBhZmZpY2jDqSBhdSBjaGFyZ2VtZW50IChtb2RlIMOpZGl0aW9uKVxyXG5cclxuICAvLyDilIDilIAgSWPDtG5lcyDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcclxuICBmdW5jdGlvbiBtYWtlUGluKGJnLCBlbW9qaSkge1xyXG4gICAgcmV0dXJuIEwuZGl2SWNvbih7XHJcbiAgICAgIGh0bWw6IGA8ZGl2IHN0eWxlPVwiYmFja2dyb3VuZDoke2JnfTt3aWR0aDozMnB4O2hlaWdodDozMnB4O2JvcmRlci1yYWRpdXM6NTAlIDUwJSA1MCUgMDtcclxuICAgICAgICB0cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7Ym9yZGVyOjNweCBzb2xpZCB3aGl0ZTtib3gtc2hhZG93OjAgMnB4IDhweCByZ2JhKDAsMCwwLC4yOCk7XHJcbiAgICAgICAgZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyXCI+XHJcbiAgICAgICAgPHNwYW4gc3R5bGU9XCJ0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTtmb250LXNpemU6MTRweFwiPiR7ZW1vaml9PC9zcGFuPjwvZGl2PmAsXHJcbiAgICAgIGNsYXNzTmFtZTogJycsIGljb25TaXplOiBbMzIsIDMyXSwgaWNvbkFuY2hvcjogWzE2LCAzMl0sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IElDID0geyBzdGFydDogbWFrZVBpbignIzRhN2M1OScsICfwn4+gJyksIGN1cnNvcjogbWFrZVBpbignI2U4NzA0MCcsICfwn5C+JykgfTtcclxuXHJcbiAgLy8g4pSA4pSAIMOJdsOpbmVtZW50cyBjYXJ0ZSDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcclxuICBtYXAub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGlmICghY3Vyc29yKSB7XHJcbiAgICAgIGN1cnNvciA9IGUubGF0bG5nO1xyXG4gICAgICBzdGFydE1hcmtlciA9IEwubWFya2VyKGN1cnNvciwgeyBpY29uOiBJQy5zdGFydCB9KS5hZGRUbyhtYXApO1xyXG4gICAgICBzZXRTdGF0dXMoZnJlZU1vZGUgPyAnZnJlZScgOiAnb3JzJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoZnJlZU1vZGUpIGFkZEZyZWVTZWcoY3Vyc29yLCBlLmxhdGxuZyk7XHJcbiAgICAgIGVsc2UgICAgICAgICAgYWRkT1JTU2VnKGN1cnNvciwgZS5sYXRsbmcpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlSGludCgpO1xyXG4gICAgcmVuZGVyU2VnTGlzdCgpO1xyXG4gICAgcGVyc2lzdCgpO1xyXG4gIH0pO1xyXG5cclxuICBtYXAub24oJ21vdXNlbW92ZScsIChlKSA9PiB7XHJcbiAgICBpZiAoIWN1cnNvcikgcmV0dXJuO1xyXG4gICAgaWYgKHByZXZpZXdMaW5lKSB7IG1hcC5yZW1vdmVMYXllcihwcmV2aWV3TGluZSk7IHByZXZpZXdMaW5lID0gbnVsbDsgfVxyXG4gICAgcHJldmlld0xpbmUgPSBMLnBvbHlsaW5lKFtjdXJzb3IsIGUubGF0bG5nXSwge1xyXG4gICAgICBjb2xvcjogZnJlZU1vZGUgPyAnIzdiNWVhNycgOiAnIzRhN2M1OScsXHJcbiAgICAgIHdlaWdodDogMywgb3BhY2l0eTogLjQsIGRhc2hBcnJheTogJzUgOCcsIGxpbmVDYXA6ICdyb3VuZCcsXHJcbiAgICB9KS5hZGRUbyhtYXApO1xyXG4gIH0pO1xyXG5cclxuICAvLyDilIDilIAgU2VnbWVudCBsaWJyZSDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcclxuICBmdW5jdGlvbiBhZGRGcmVlU2VnKGZyb20sIHRvKSB7XHJcbiAgICBpZiAocmVzdG9yYXRpb25MYXllcikgeyByZXN0b3JhdGlvbkxheWVyLmNsZWFyTGF5ZXJzKCk7IHJlc3RvcmF0aW9uTGF5ZXIucmVtb3ZlKCk7IHJlc3RvcmF0aW9uTGF5ZXIgPSBudWxsOyB9XHJcbiAgICBjb25zdCBwdHMgICAgPSBbZnJvbSwgdG9dO1xyXG4gICAgY29uc3QgbGF5ZXJzID0gZHJhd1BvbHkocHRzLCAnZnJlZScpO1xyXG4gICAgY29uc3QgZGlzdE0gID0gZnJvbS5kaXN0YW5jZVRvKHRvKTtcclxuICAgIHNlZ21lbnRzLnB1c2goeyB0eXBlOiAnZnJlZScsIGZyb20sIHRvLCBwb2ludHM6IHB0cywgbGF5ZXJzLFxyXG4gICAgICBkaXN0YW5jZU1ldGVyczogZGlzdE0sIGR1cmF0aW9uU2Vjb25kczogKGRpc3RNIC8gMTAwMCAvIDQpICogMzYwMCB9KTtcclxuICAgIG1vdmVDdXJzb3IodG8pO1xyXG4gICAgdXBkYXRlU3RhdHMoKTtcclxuICAgIHJlbmRlclNlZ0xpc3QoKTtcclxuICAgIHBlcnNpc3QoKTtcclxuICB9XHJcblxyXG4gIC8vIOKUgOKUgCBTZWdtZW50IE9SUyDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcclxuICBhc3luYyBmdW5jdGlvbiBhZGRPUlNTZWcoZnJvbSwgdG8pIHtcclxuICAgIGlmIChyZXN0b3JhdGlvbkxheWVyKSB7IHJlc3RvcmF0aW9uTGF5ZXIuY2xlYXJMYXllcnMoKTsgcmVzdG9yYXRpb25MYXllci5yZW1vdmUoKTsgcmVzdG9yYXRpb25MYXllciA9IG51bGw7IH1cclxuICAgIGNvbnN0IHNlcSA9ICsrb3JzU2VxO1xyXG4gICAgc2V0U3RhdHVzKCdsb2FkJyk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9hcGkvaGlraW5nLXJvdXRlJywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIHBvaW50czogIFtbZnJvbS5sYXQsIGZyb20ubG5nXSwgW3RvLmxhdCwgdG8ubG5nXV0sXHJcbiAgICAgICAgICBwcm9maWxlOiBvcnNQcm9maWxlLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChzZXEgIT09IG9yc1NlcSkgcmV0dXJuO1xyXG5cclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgICBpZiAoIXJlcy5vaykge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tPUlNdJywgZGF0YSk7XHJcbiAgICAgICAgc2V0U3RhdHVzKGZyZWVNb2RlID8gJ2ZyZWUnIDogJ29ycycpO1xyXG4gICAgICAgIHNldEhpbnQoJ+KaoO+4jyBFcnJldXIgT1JTIOKAlCB2w6lyaWZpZXogbGEgY29uc29sZS4nKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIExlIGNvbnRyw7RsZXVyIHJldG91cm5lIGRhdGEuZ2VvanNvbiA9IHVuIEZlYXR1cmUgKHBhcyBGZWF0dXJlQ29sbGVjdGlvbilcclxuICAgICAgY29uc3QgY29vcmRzID0gZGF0YS5nZW9qc29uPy5nZW9tZXRyeT8uY29vcmRpbmF0ZXMgPz8gW107XHJcbiAgICAgIGlmICghY29vcmRzLmxlbmd0aCkge1xyXG4gICAgICAgIHNldFN0YXR1cyhmcmVlTW9kZSA/ICdmcmVlJyA6ICdvcnMnKTtcclxuICAgICAgICBzZXRIaW50KCfimqDvuI8gT1JTIG5cXCdhIHJldG91cm7DqSBhdWN1biB0cmFjw6kuJyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBwdHMgICA9IGNvb3Jkcy5tYXAoYyA9PiBMLmxhdExuZyhjWzFdLCBjWzBdKSk7XHJcbiAgICAgIGNvbnN0IGRpc3RNID0gZGF0YS5kaXN0YW5jZSA/PyBmcm9tLmRpc3RhbmNlVG8odG8pOyAvLyBkw6lqw6AgZW4gbcOodHJlcyAoY29udHLDtGxldXIgZmFpdCBrbeKGkm0pXHJcbiAgICAgIGNvbnN0IGR1clMgID0gZGF0YS5kdXJhdGlvbiA/PyAoZGlzdE0gLyAxMDAwIC8gNCkgKiAzNjAwO1xyXG5cclxuICAgICAgc2VnbWVudHMucHVzaCh7IHR5cGU6ICdvcnMnLCBmcm9tLCB0byxcclxuICAgICAgICBwb2ludHM6IHB0cywgbGF5ZXJzOiBkcmF3UG9seShwdHMsICdvcnMnKSxcclxuICAgICAgICBkaXN0YW5jZU1ldGVyczogZGlzdE0sIGR1cmF0aW9uU2Vjb25kczogZHVyUyB9KTtcclxuXHJcbiAgICAgIG1vdmVDdXJzb3IodG8pO1xyXG4gICAgICB1cGRhdGVTdGF0cygpO1xyXG4gICAgICByZW5kZXJTZWdMaXN0KCk7XHJcbiAgICAgIHNldFN0YXR1cyhmcmVlTW9kZSA/ICdmcmVlJyA6ICdvcnMnKTtcclxuICAgICAgdXBkYXRlSGludCgpO1xyXG4gICAgICBwZXJzaXN0KCk7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGlmIChzZXEgIT09IG9yc1NlcSkgcmV0dXJuO1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdbT1JTXScsIGVycik7XHJcbiAgICAgIHNldFN0YXR1cyhmcmVlTW9kZSA/ICdmcmVlJyA6ICdvcnMnKTtcclxuICAgICAgc2V0SGludCgn4pqg77iPIEltcG9zc2libGUgZGUgam9pbmRyZSAvYXBpL2hpa2luZy1yb3V0ZS4nKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIOKUgOKUgCBEZXNzaW4gcG9seWxpbmUg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXHJcbiAgZnVuY3Rpb24gZHJhd1BvbHkocHRzLCB0eXBlKSB7XHJcbiAgICBjb25zdCBjb2xvciAgPSB0eXBlID09PSAnb3JzJyA/ICcjNGE3YzU5JyA6ICcjN2I1ZWE3JztcclxuICAgIGNvbnN0IHNoYWRvdyA9IEwucG9seWxpbmUocHRzLCB7IGNvbG9yOiAnIzNkMmIxZicsIHdlaWdodDogOSwgb3BhY2l0eTogLjA3IH0pLmFkZFRvKG1hcCk7XHJcbiAgICBjb25zdCBsaW5lICAgPSBMLnBvbHlsaW5lKHB0cywge1xyXG4gICAgICBjb2xvciwgd2VpZ2h0OiA1LCBvcGFjaXR5OiAuOSwgbGluZUNhcDogJ3JvdW5kJywgbGluZUpvaW46ICdyb3VuZCcsXHJcbiAgICAgIC4uLih0eXBlID09PSAnZnJlZScgPyB7IGRhc2hBcnJheTogJzggNicgfSA6IHt9KSxcclxuICAgIH0pLmFkZFRvKG1hcCk7XHJcbiAgICByZXR1cm4gW3NoYWRvdywgbGluZV07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZW1vdmVMYXllcnMobGF5ZXJzKSB7IGxheWVycy5mb3JFYWNoKGwgPT4gbWFwLnJlbW92ZUxheWVyKGwpKTsgfVxyXG5cclxuICBmdW5jdGlvbiBtb3ZlQ3Vyc29yKGxsKSB7XHJcbiAgICBjdXJzb3IgPSBsbDtcclxuICAgIGlmIChjdXJzb3JNaykgbWFwLnJlbW92ZUxheWVyKGN1cnNvck1rKTtcclxuICAgIGN1cnNvck1rID0gTC5tYXJrZXIobGwsIHsgaWNvbjogSUMuY3Vyc29yIH0pLmFkZFRvKG1hcCk7XHJcbiAgfVxyXG5cclxuICAvLyDilIDilIAgRmVybWVyIGxhIGJvdWNsZSDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcclxuICBmdW5jdGlvbiBjbG9zZUxvb3AoKSB7XHJcbiAgICBpZiAoIWN1cnNvciB8fCAhc2VnbWVudHMubGVuZ3RoKSByZXR1cm47XHJcbiAgICBjb25zdCBmaXJzdCA9IHNlZ21lbnRzWzBdLmZyb207XHJcbiAgICBjb25zdCBzYW1lICA9IE1hdGguYWJzKGN1cnNvci5sYXQgLSBmaXJzdC5sYXQpIDwgMWUtNlxyXG4gICAgICAgICAgICAgICAmJiBNYXRoLmFicyhjdXJzb3IubG5nIC0gZmlyc3QubG5nKSA8IDFlLTY7XHJcbiAgICBpZiAoc2FtZSkgcmV0dXJuO1xyXG4gICAgaWYgKGZyZWVNb2RlKSBhZGRGcmVlU2VnKGN1cnNvciwgZmlyc3QpO1xyXG4gICAgZWxzZSAgICAgICAgICBhZGRPUlNTZWcoY3Vyc29yLCBmaXJzdCk7XHJcbiAgfVxyXG5cclxuICAvLyDilIDilIAgQW5udWxlciBkZXJuaWVyIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxyXG4gIGZ1bmN0aW9uIHVuZG9MYXN0KCkge1xyXG4gICAgaWYgKHByZXZpZXdMaW5lKSB7IG1hcC5yZW1vdmVMYXllcihwcmV2aWV3TGluZSk7IHByZXZpZXdMaW5lID0gbnVsbDsgfVxyXG5cclxuICAgIGlmIChzZWdtZW50cy5sZW5ndGgpIHtcclxuICAgICAgY29uc3Qgc2VnID0gc2VnbWVudHMucG9wKCk7XHJcbiAgICAgIHJlbW92ZUxheWVycyhzZWcubGF5ZXJzKTtcclxuICAgICAgY3Vyc29yID0gc2VnLmZyb207XHJcbiAgICAgIGlmIChjdXJzb3JNaykgeyBtYXAucmVtb3ZlTGF5ZXIoY3Vyc29yTWspOyBjdXJzb3JNayA9IG51bGw7IH1cclxuICAgICAgaWYgKHNlZ21lbnRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIGlmIChzdGFydE1hcmtlcikgbWFwLnJlbW92ZUxheWVyKHN0YXJ0TWFya2VyKTtcclxuICAgICAgICBzdGFydE1hcmtlciA9IEwubWFya2VyKGN1cnNvciwgeyBpY29uOiBJQy5zdGFydCB9KS5hZGRUbyhtYXApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGN1cnNvck1rID0gTC5tYXJrZXIoY3Vyc29yLCB7IGljb246IElDLmN1cnNvciB9KS5hZGRUbyhtYXApO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGN1cnNvcikge1xyXG4gICAgICBpZiAoc3RhcnRNYXJrZXIpIHsgbWFwLnJlbW92ZUxheWVyKHN0YXJ0TWFya2VyKTsgc3RhcnRNYXJrZXIgPSBudWxsOyB9XHJcbiAgICAgIGlmIChjdXJzb3JNaykgICAgeyBtYXAucmVtb3ZlTGF5ZXIoY3Vyc29yTWspOyAgICBjdXJzb3JNayAgICA9IG51bGw7IH1cclxuICAgICAgY3Vyc29yID0gbnVsbDtcclxuICAgICAgc2V0U3RhdHVzKCdoaWRlJyk7XHJcbiAgICB9IGVsc2UgcmV0dXJuO1xyXG5cclxuICAgIHJlbmRlclNlZ0xpc3QoKTtcclxuICAgIHVwZGF0ZVN0YXRzKCk7XHJcbiAgICB1cGRhdGVIaW50KCk7XHJcbiAgICBwZXJzaXN0KCk7XHJcbiAgfVxyXG5cclxuICAvLyDilIDilIAgVG91dCBlZmZhY2VyIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxyXG4gIGZ1bmN0aW9uIGNsZWFyQWxsKCkge1xyXG4gICAgb3JzU2VxKys7XHJcbiAgICAvLyBTdXBwcmltZXIgbGUgbGF5ZXIgZGUgcmVzdGF1cmF0aW9uIChMLkdlb0pTT04gPSBMYXllckdyb3VwKVxyXG4gICAgaWYgKHJlc3RvcmF0aW9uTGF5ZXIpIHtcclxuICAgICAgcmVzdG9yYXRpb25MYXllci5lYWNoTGF5ZXIobCA9PiBtYXAucmVtb3ZlTGF5ZXIobCkpO1xyXG4gICAgICByZXN0b3JhdGlvbkxheWVyLmNsZWFyTGF5ZXJzKCk7XHJcbiAgICAgIG1hcC5yZW1vdmVMYXllcihyZXN0b3JhdGlvbkxheWVyKTtcclxuICAgICAgcmVzdG9yYXRpb25MYXllciA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBzZWdtZW50cy5mb3JFYWNoKHMgPT4gcmVtb3ZlTGF5ZXJzKHMubGF5ZXJzKSk7XHJcbiAgICBzZWdtZW50cyA9IFtdO1xyXG4gICAgaWYgKHN0YXJ0TWFya2VyKSB7IG1hcC5yZW1vdmVMYXllcihzdGFydE1hcmtlcik7IHN0YXJ0TWFya2VyID0gbnVsbDsgfVxyXG4gICAgaWYgKGN1cnNvck1rKSAgICB7IG1hcC5yZW1vdmVMYXllcihjdXJzb3JNayk7ICAgIGN1cnNvck1rICAgID0gbnVsbDsgfVxyXG4gICAgaWYgKHByZXZpZXdMaW5lKSB7IG1hcC5yZW1vdmVMYXllcihwcmV2aWV3TGluZSk7IHByZXZpZXdMaW5lID0gbnVsbDsgfVxyXG4gICAgY3Vyc29yID0gbnVsbDtcclxuICAgIC8vIEZvcmNlciBsYSBzdXBwcmVzc2lvbiBkZSB0b3V0ZXMgbGVzIHBvbHlsaW5lcy9wYXRocyByZXN0YW50cyBzdXIgbGEgY2FydGVcclxuICAgIC8vIChmaWxldCBkZSBzw6ljdXJpdMOpIGF1IGNhcyBvw7kgdW4gbGF5ZXIgYXVyYWl0IMOpY2hhcHDDqSBhdSB0cmFja2luZylcclxuICAgIG1hcC5lYWNoTGF5ZXIobCA9PiB7XHJcbiAgICAgIGlmIChsIGluc3RhbmNlb2YgTC5Qb2x5bGluZSB8fCBsIGluc3RhbmNlb2YgTC5HZW9KU09OKSB7XHJcbiAgICAgICAgbWFwLnJlbW92ZUxheWVyKGwpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJlbmRlclNlZ0xpc3QoKTtcclxuICAgIHVwZGF0ZVN0YXRzKCk7XHJcbiAgICB1cGRhdGVIaW50KCk7XHJcbiAgICBzZXRTdGF0dXMoJ2hpZGUnKTtcclxuICAgIHBlcnNpc3QoKTtcclxuICB9XHJcblxyXG4gIC8vIOKUgOKUgCBUb2dnbGUgbW9kZSBsaWJyZSDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcclxuICBmdW5jdGlvbiB0b2dnbGVGcmVlKCkge1xyXG4gICAgZnJlZU1vZGUgPSAhZnJlZU1vZGU7XHJcbiAgICBidG5GcmVlVG9nZ2xlPy5jbGFzc0xpc3QudG9nZ2xlKCdvbicsIGZyZWVNb2RlKTtcclxuICAgIHBpbGxFbD8uY2xhc3NMaXN0LnRvZ2dsZSgnb24nLCBmcmVlTW9kZSk7XHJcbiAgICBpZiAoZnJlZURlc2NFbCkgZnJlZURlc2NFbC50ZXh0Q29udGVudCA9IGZyZWVNb2RlXHJcbiAgICAgID8gJ+KckyBBY3RpZiDigJQgdHJhY8OpIGxpYnJlIGVuIGNvdXJzJ1xyXG4gICAgICA6ICdUcmFjw6kgbGlicmUgcG91ciBsZXMgY2hlbWlucyBob3JzIGNhcnRlJztcclxuICAgIG1hcC5nZXRDb250YWluZXIoKS5zdHlsZS5jdXJzb3IgPSBmcmVlTW9kZSA/ICdjcm9zc2hhaXInIDogJyc7XHJcbiAgICBpZiAoY3Vyc29yKSBzZXRTdGF0dXMoZnJlZU1vZGUgPyAnZnJlZScgOiAnb3JzJyk7XHJcbiAgICB1cGRhdGVIaW50KCk7XHJcbiAgfVxyXG5cclxuICAvLyDilIDilIAgUHJvZmlsIE9SUyDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcclxuICBmdW5jdGlvbiBzZXRQcm9maWxlKHApIHtcclxuICAgIG9yc1Byb2ZpbGUgPSBwO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtb3JzLXByb2ZpbGVdJykuZm9yRWFjaChlbCA9PlxyXG4gICAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnLCBlbC5kYXRhc2V0Lm9yc1Byb2ZpbGUgPT09IHApXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLy8g4pSA4pSAIFBlcnNpc3RhbmNlIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxyXG4gIC8vXHJcbiAgLy8gd2F5cG9pbnRzSnNvbiA9IFtbbGF0LCBsbmcsIFwib3JzXCJ8XCJmcmVlXCJdLCDigKZdXHJcbiAgLy8gICDigKIgTGUgdHlwZSBkdSBzZWdtZW50IE4gZXN0IGNlbHVpIHF1aSByZWxpZSBsZSBwb2ludCBOIOKGkiBOKzFcclxuICAvLyAgIOKAoiBMZSBkZXJuaWVyIMOpbMOpbWVudCBuJ2EgcGFzIGRlIHNlZ21lbnQgc29ydGFudCwgb24gbWV0IGxlIHR5cGUgY291cmFudFxyXG4gIC8vXHJcbiAgLy8gcm91dGVHZW9Kc29uICA9IEZlYXR1cmVDb2xsZWN0aW9uIGF2ZWMgdW5lIExpbmVTdHJpbmcgZnVzaW9ubsOpZVxyXG4gIC8vXHJcbiAgZnVuY3Rpb24gcGVyc2lzdCgpIHtcclxuICAgIC8vIDEuIFdheXBvaW50cyBhdmVjIHR5cGUgZGUgc2VnbWVudFxyXG4gICAgY29uc3Qgd3BzID0gW107XHJcbiAgICBpZiAoY3Vyc29yIHx8IHNlZ21lbnRzLmxlbmd0aCkge1xyXG4gICAgICBpZiAoc2VnbWVudHMubGVuZ3RoKSB7XHJcbiAgICAgICAgc2VnbWVudHMuZm9yRWFjaChzID0+IHdwcy5wdXNoKFtzLmZyb20ubGF0LCBzLmZyb20ubG5nLCBzLnR5cGVdKSk7XHJcbiAgICAgICAgd3BzLnB1c2goW2N1cnNvci5sYXQsIGN1cnNvci5sbmcsIGZyZWVNb2RlID8gJ2ZyZWUnIDogJ29ycyddKTsgLy8gZGVybmllciBwb2ludFxyXG4gICAgICB9IGVsc2UgaWYgKGN1cnNvcikge1xyXG4gICAgICAgIHdwcy5wdXNoKFtjdXJzb3IubGF0LCBjdXJzb3IubG5nLCBmcmVlTW9kZSA/ICdmcmVlJyA6ICdvcnMnXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh3cElucHV0KSB3cElucHV0LnZhbHVlID0gSlNPTi5zdHJpbmdpZnkod3BzKTtcclxuXHJcbiAgICAvLyAyLiBHZW9KU09OIGZ1c2lvbm7DqSDigJQgdW5lIHNldWxlIExpbmVTdHJpbmdcclxuICAgIGlmIChzZWdtZW50cy5sZW5ndGgpIHtcclxuICAgICAgY29uc3QgYWxsQ29vcmRzID0gW107XHJcbiAgICAgIHNlZ21lbnRzLmZvckVhY2gocyA9PiB7XHJcbiAgICAgICAgY29uc3QgcHRzID0gcy5wb2ludHMubWFwKHAgPT4gW3AubG5nLCBwLmxhdF0pO1xyXG4gICAgICAgIGFsbENvb3Jkcy5wdXNoKC4uLihhbGxDb29yZHMubGVuZ3RoID8gcHRzLnNsaWNlKDEpIDogcHRzKSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgdG90YWxEaXN0ID0gc2VnbWVudHMucmVkdWNlKChhLCBzKSA9PiBhICsgKHMuZGlzdGFuY2VNZXRlcnMgID8/IDApLCAwKTtcclxuICAgICAgY29uc3QgdG90YWxEdXIgID0gc2VnbWVudHMucmVkdWNlKChhLCBzKSA9PiBhICsgKHMuZHVyYXRpb25TZWNvbmRzID8/IDApLCAwKTtcclxuXHJcbiAgICAgIGlmIChyb3V0ZUlucHV0KSByb3V0ZUlucHV0LnZhbHVlID0gSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIHR5cGU6ICdGZWF0dXJlQ29sbGVjdGlvbicsXHJcbiAgICAgICAgZmVhdHVyZXM6IFt7XHJcbiAgICAgICAgICB0eXBlOiAnRmVhdHVyZScsXHJcbiAgICAgICAgICBnZW9tZXRyeTogeyB0eXBlOiAnTGluZVN0cmluZycsIGNvb3JkaW5hdGVzOiBhbGxDb29yZHMgfSxcclxuICAgICAgICAgIHByb3BlcnRpZXM6IHsgc3VtbWFyeTogeyBkaXN0YW5jZTogdG90YWxEaXN0IC8gMTAwMCwgZHVyYXRpb246IHRvdGFsRHVyIH0gfSxcclxuICAgICAgICB9XSxcclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChkaXN0SW5wdXQpIGRpc3RJbnB1dC52YWx1ZSA9IFN0cmluZyhNYXRoLnJvdW5kKHRvdGFsRGlzdCkpO1xyXG4gICAgICBpZiAoZHVySW5wdXQpICBkdXJJbnB1dC52YWx1ZSAgPSBTdHJpbmcoTWF0aC5yb3VuZCh0b3RhbER1cikpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHJvdXRlSW5wdXQpIHJvdXRlSW5wdXQudmFsdWUgPSAnJztcclxuICAgICAgaWYgKGRpc3RJbnB1dCkgIGRpc3RJbnB1dC52YWx1ZSAgPSAnJztcclxuICAgICAgaWYgKGR1cklucHV0KSAgIGR1cklucHV0LnZhbHVlICAgPSAnJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIOKUgOKUgCBTdGF0cyBVSSDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcclxuICBmdW5jdGlvbiB1cGRhdGVTdGF0cygpIHtcclxuICAgIGlmICghc2VnbWVudHMubGVuZ3RoKSB7XHJcbiAgICAgIGlmIChzdGF0c0JveCkgICBzdGF0c0JveC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICBpZiAoZGlzdGFuY2VFbCkgZGlzdGFuY2VFbC50ZXh0Q29udGVudCA9ICfigJQnO1xyXG4gICAgICBpZiAoZHVyYXRpb25FbCkgZHVyYXRpb25FbC50ZXh0Q29udGVudCA9ICfigJQnO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCB0b3RhbERpc3QgPSBzZWdtZW50cy5yZWR1Y2UoKGEsIHMpID0+IGEgKyAocy5kaXN0YW5jZU1ldGVycyAgPz8gMCksIDApO1xyXG4gICAgY29uc3QgdG90YWxEdXIgID0gc2VnbWVudHMucmVkdWNlKChhLCBzKSA9PiBhICsgKHMuZHVyYXRpb25TZWNvbmRzID8/IDApLCAwKTtcclxuICAgIGlmIChzdGF0c0JveCkgICBzdGF0c0JveC5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1mbGV4JztcclxuICAgIGlmIChkaXN0YW5jZUVsKSBkaXN0YW5jZUVsLnRleHRDb250ZW50ID0gZm10RGlzdCh0b3RhbERpc3QpO1xyXG4gICAgaWYgKGR1cmF0aW9uRWwpIGR1cmF0aW9uRWwudGV4dENvbnRlbnQgPSBmbXREdXIodG90YWxEdXIpO1xyXG4gIH1cclxuXHJcbiAgLy8g4pSA4pSAIExpc3RlIHNlZ21lbnRzIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxyXG4gIGZ1bmN0aW9uIHJlbmRlclNlZ0xpc3QoKSB7XHJcbiAgICBpZiAoIXNlZ0xpc3RFbCkgcmV0dXJuO1xyXG4gICAgc2VnTGlzdEVsLmlubmVySFRNTCA9ICcnO1xyXG4gICAgaWYgKCFzZWdtZW50cy5sZW5ndGgpIHtcclxuICAgICAgc2VnTGlzdEVsLmlubmVySFRNTCA9ICc8bGkgY2xhc3M9XCJzZWctZW1wdHlcIj5BdWN1biBzZWdtZW50IHBvdXIgbFxcJ2luc3RhbnQ8L2xpPic7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHNlZ21lbnRzLmZvckVhY2goKHMsIGkpID0+IHtcclxuICAgICAgY29uc3QgaXNPUlMgPSBzLnR5cGUgPT09ICdvcnMnO1xyXG4gICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgIGxpLmNsYXNzTmFtZSA9IGBzZWctaXRlbSAke2lzT1JTID8gJ3NlZy1vcnMnIDogJ3NlZy1mcmVlJ31gO1xyXG4gICAgICBsaS5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJzZWctZG90ICR7aXNPUlMgPyAnc2VnLWRvdC1vcnMnIDogJ3NlZy1kb3QtZnJlZSd9XCI+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwic2VnLWxhYmVsXCI+U2VnbWVudCAke2kgKyAxfSDCtyAke2ZtdERpc3Qocy5kaXN0YW5jZU1ldGVycyl9PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwic2VnLWJhZGdlICR7aXNPUlMgPyAnc2VnLWJhZGdlLW9ycycgOiAnc2VnLWJhZGdlLWZyZWUnfVwiPiR7aXNPUlMgPyAnT1JTJyA6ICdMaWJyZSd9PC9zcGFuPlxyXG4gICAgICBgO1xyXG4gICAgICBzZWdMaXN0RWwuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyDilIDilIAgSGludCAmIHN0YXR1dCDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcclxuICBmdW5jdGlvbiB1cGRhdGVIaW50KCkge1xyXG4gICAgaWYgKCFoaW50RWwpIHJldHVybjtcclxuICAgIGlmICghY3Vyc29yKSAgICAgICBoaW50RWwudGV4dENvbnRlbnQgPSAnQ2xpcXVlIHN1ciBsYSBjYXJ0ZSBwb3VyIHBvc2VyIGxlIHByZW1pZXIgcG9pbnQuJztcclxuICAgIGVsc2UgaWYgKGZyZWVNb2RlKSBoaW50RWwudGV4dENvbnRlbnQgPSAnTW9kZSBsaWJyZSDigJQgY2hhcXVlIGNsaWMgdHJhY2UgdW5lIGxpZ25lIGRpcmVjdGUuJztcclxuICAgIGVsc2UgICAgICAgICAgICAgICBoaW50RWwudGV4dENvbnRlbnQgPSAnQ2xpcXVlIHBvdXIgYWpvdXRlciB1biBwb2ludCDigJQgT1JTIGNhbGN1bGUgbGUgY2hlbWluLic7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzZXRIaW50KG1zZykgeyBpZiAoaGludEVsKSBoaW50RWwudGV4dENvbnRlbnQgPSBtc2c7IH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0U3RhdHVzKHR5cGUpIHtcclxuICAgIGlmICghc3RhdHVzQmFyRWwpIHJldHVybjtcclxuICAgIHN0YXR1c0JhckVsLmNsYXNzTmFtZSA9ICdtYXAtc3RhdHVzJztcclxuICAgIHN0YXR1c0JhckVsLmhpZGRlbiAgICA9IGZhbHNlO1xyXG4gICAgaWYgKHR5cGUgPT09ICdoaWRlJykgeyBzdGF0dXNCYXJFbC5oaWRkZW4gPSB0cnVlOyByZXR1cm47IH1cclxuICAgIGNvbnN0IGNscyA9IHsgbG9hZDogJ21hcC1zdGF0dXMtLWxvYWQnLCBvcnM6ICdtYXAtc3RhdHVzLS1vcnMnLCBmcmVlOiAnbWFwLXN0YXR1cy0tZnJlZScgfTtcclxuICAgIGNvbnN0IHR4dCA9IHtcclxuICAgICAgbG9hZDogJzxzcGFuIGNsYXNzPVwibWFwLXN0YXR1c19fc3BpblwiPjwvc3Bhbj5DYWxjdWwgT1JTIGVuIGNvdXJz4oCmJyxcclxuICAgICAgb3JzOiAgJzxzcGFuIGNsYXNzPVwibWFwLXN0YXR1c19fZG90XCI+PC9zcGFuPk1vZGUgT1JTIGFjdGlmJyxcclxuICAgICAgZnJlZTogJzxzcGFuIGNsYXNzPVwibWFwLXN0YXR1c19fZG90XCI+PC9zcGFuPk1vZGUgTGlicmUgYWN0aWYnLFxyXG4gICAgfTtcclxuICAgIHN0YXR1c0JhckVsLmNsYXNzTGlzdC5hZGQoY2xzW3R5cGVdKTtcclxuICAgIHN0YXR1c0JhckVsLmlubmVySFRNTCA9IHR4dFt0eXBlXTtcclxuICB9XHJcblxyXG4gIC8vIOKUgOKUgCBGb3JtYXR0ZXJzIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxyXG4gIGZ1bmN0aW9uIGZtdERpc3QobSkge1xyXG4gICAgaWYgKG0gPT0gbnVsbCkgcmV0dXJuICfigJQnO1xyXG4gICAgcmV0dXJuIG0gPCAxMDAwID8gYCR7TWF0aC5yb3VuZChtKX0gbWAgOiBgJHsobSAvIDEwMDApLnRvRml4ZWQoMikucmVwbGFjZSgnLicsICcsJyl9IGttYDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGZtdER1cihzKSB7XHJcbiAgICBpZiAocyA9PSBudWxsKSByZXR1cm4gJ+KAlCc7XHJcbiAgICBzID0gTWF0aC5yb3VuZChzKTtcclxuICAgIGNvbnN0IGggPSBNYXRoLmZsb29yKHMgLyAzNjAwKSwgbSA9IE1hdGguZmxvb3IoKHMgJSAzNjAwKSAvIDYwKTtcclxuICAgIHJldHVybiBoIDw9IDAgPyBgJHttfSBtaW5gIDogYCR7aH0gaCAke1N0cmluZyhtKS5wYWRTdGFydCgyLCAnMCcpfSBtaW5gO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdHJ5UGFyc2Uoc3RyKSB7XHJcbiAgICB0cnkgeyByZXR1cm4gSlNPTi5wYXJzZShzdHIpOyB9IGNhdGNoIHsgcmV0dXJuIG51bGw7IH1cclxuICB9XHJcblxyXG4gIC8vIOKUgOKUgCBCaW5kaW5ncyDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcclxuICBidG5VbmRvPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHVuZG9MYXN0KTtcclxuICBidG5DbG9zZT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZUxvb3ApO1xyXG4gIGJ0bkNsZWFyPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsZWFyQWxsKTtcclxuICBidG5GcmVlVG9nZ2xlPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZUZyZWUpO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW9ycy1wcm9maWxlXScpLmZvckVhY2goZWwgPT5cclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2V0UHJvZmlsZShlbC5kYXRhc2V0Lm9yc1Byb2ZpbGUpKVxyXG4gICk7XHJcblxyXG4gIC8vIOKUgOKUgCBSZXN0YXVyYXRpb24gKG1vZGUgw6lkaXRpb24pIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxyXG4gIC8vXHJcbiAgLy8gT24gcmVsaXQgd2F5cG9pbnRzSnNvbiA9IFtbbGF0LCBsbmcsIFwib3JzXCJ8XCJmcmVlXCJdLCDigKZdXHJcbiAgLy8gUG91ciBjaGFxdWUgcGFpcmUgZGUgcG9pbnRzIGNvbnPDqWN1dGlmcywgb24gcmVjcsOpZSBsZSBzZWdtZW50IHZpc3VlbGxlbWVudC5cclxuICAvL1xyXG4gIC8vIFBvdXIgbGVzIHNlZ21lbnRzIE9SUyA6IG9uIG5lIHJhcHBlbGxlIFBBUyBsJ0FQSSAodHJvcCBjb8O7dGV1eCBhdSBjaGFyZ2VtZW50KS5cclxuICAvLyBPbiBhZmZpY2hlIGRpcmVjdGVtZW50IGxlIHJvdXRlR2VvSnNvbiBkw6lqw6Agc2F1dmVnYXJkw6ksIGV0IG9uIHJlY29uc3RpdHVlXHJcbiAgLy8gbGVzIHdheXBvaW50cy9tYXJrZXJzIHBvdXIgcGVybWV0dHJlIGwnw6lkaXRpb24gKGFqb3V0L2FubnVsYXRpb24pLlxyXG4gIC8vXHJcbiAgY29uc3Qgc2F2ZWRXcCAgPSBjZmcuaW5pdGlhbFdheXBvaW50cyAgICA/PyB0cnlQYXJzZSh3cElucHV0Py52YWx1ZSAgICA/PyAnJyk7XHJcbiAgY29uc3Qgc2F2ZWRHZW8gPSBjZmcuaW5pdGlhbFJvdXRlR2VvSnNvbiA/PyB0cnlQYXJzZShyb3V0ZUlucHV0Py52YWx1ZSA/PyAnJyk7XHJcblxyXG4gIGlmIChBcnJheS5pc0FycmF5KHNhdmVkV3ApICYmIHNhdmVkV3AubGVuZ3RoID49IDIgJiYgc2F2ZWRHZW8pIHtcclxuICAgIC8vIEFmZmljaGVyIGxlIHRyYWPDqSBHZW9KU09OIHNhdXZlZ2FyZMOpIHRlbCBxdWVsICh2ZXJ0IHBsZWluKVxyXG4gICAgdHJ5IHtcclxuICAgICAgcmVzdG9yYXRpb25MYXllciA9IEwuZ2VvSlNPTihzYXZlZEdlbywge1xyXG4gICAgICAgIHN0eWxlOiAoKSA9PiAoeyBjb2xvcjogJyM0YTdjNTknLCB3ZWlnaHQ6IDUsIG9wYWNpdHk6IC45LCBsaW5lQ2FwOiAncm91bmQnIH0pLFxyXG4gICAgICB9KS5hZGRUbyhtYXApO1xyXG4gICAgICAvLyBWaWRlciBjZmcgcG91ciDDqXZpdGVyIHRvdXRlIHLDqXV0aWxpc2F0aW9uIGFwcsOocyBjbGVhckFsbFxyXG4gICAgICBpZiAoY2ZnLmluaXRpYWxSb3V0ZUdlb0pzb24pIGNmZy5pbml0aWFsUm91dGVHZW9Kc29uID0gbnVsbDtcclxuICAgIH0gY2F0Y2ggKGUpIHsgY29uc29sZS53YXJuKCdbYmFsYWRlLW1hcF0gR2VvSlNPTiBpbnZhbGlkZScsIGUpOyB9XHJcblxyXG4gICAgLy8gUmVzdGF1cmVyIGxlcyBtYXJxdWV1cnMgZGUgd2F5cG9pbnRzIHBvdXIgcGVybWV0dHJlIGwnw6lkaXRpb25cclxuICAgIHNhdmVkV3AuZm9yRWFjaCgocCwgaSkgPT4ge1xyXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkocCkgfHwgcC5sZW5ndGggPCAyKSByZXR1cm47XHJcbiAgICAgIGNvbnN0IGxsID0gTC5sYXRMbmcocFswXSwgcFsxXSk7XHJcbiAgICAgIGlmIChpID09PSAwKSB7XHJcbiAgICAgICAgY3Vyc29yID0gbGw7XHJcbiAgICAgICAgc3RhcnRNYXJrZXIgPSBMLm1hcmtlcihsbCwgeyBpY29uOiBJQy5zdGFydCB9KS5hZGRUbyhtYXApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIFJlY3LDqWVyIHVuIHNlZ21lbnQgXCJmYW50w7RtZVwiIHNhbnMgbGF5ZXIgcHJvcHJlXHJcbiAgICAgICAgLy8gKGxlIGxheWVyIGVzdCBkw6lqw6AgYWZmaWNow6kgdmlhIGxlIEdlb0pTT04gZ2xvYmFsKVxyXG4gICAgICAgIGNvbnN0IHByZXYgPSBzYXZlZFdwW2kgLSAxXTtcclxuICAgICAgICBjb25zdCBmcm9tID0gTC5sYXRMbmcocHJldlswXSwgcHJldlsxXSk7XHJcbiAgICAgICAgY29uc3QgdHlwZSA9IHByZXZbMl0gPz8gJ29ycyc7XHJcbiAgICAgICAgc2VnbWVudHMucHVzaCh7XHJcbiAgICAgICAgICB0eXBlLCBmcm9tLCB0bzogbGwsXHJcbiAgICAgICAgICBwb2ludHM6IFtmcm9tLCBsbF0sICAvLyBhcHByb3hpbWF0aWYsIHN1ZmZpdCBwb3VyIHVuZG8vcGVyc2lzdFxyXG4gICAgICAgICAgbGF5ZXJzOiBbXSwgICAgICAgICAgIC8vIGxheWVycyB2aWRlcyBjYXIgbGUgR2VvSlNPTiBlc3QgZMOpasOgIGFmZmljaMOpXHJcbiAgICAgICAgICBkaXN0YW5jZU1ldGVyczogIGZyb20uZGlzdGFuY2VUbyhsbCksXHJcbiAgICAgICAgICBkdXJhdGlvblNlY29uZHM6IChmcm9tLmRpc3RhbmNlVG8obGwpIC8gMTAwMCAvIDQpICogMzYwMCxcclxuICAgICAgICB9KTtcclxuICAgICAgICBtb3ZlQ3Vyc29yKGxsKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgbWFwLmZpdEJvdW5kcyhMLmxhdExuZ0JvdW5kcyhzYXZlZFdwLm1hcChwID0+IEwubGF0TG5nKHBbMF0sIHBbMV0pKSksIHsgcGFkZGluZzogWzMwLCAzMF0gfSk7XHJcbiAgICBzZXRTdGF0dXMoZnJlZU1vZGUgPyAnZnJlZScgOiAnb3JzJyk7XHJcblxyXG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShzYXZlZFdwKSAmJiBzYXZlZFdwLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgLy8gVW4gc2V1bCBwb2ludCBwb3PDqSwgcGFzIGVuY29yZSBkZSBzZWdtZW50XHJcbiAgICBjb25zdCBsbCA9IEwubGF0TG5nKHNhdmVkV3BbMF1bMF0sIHNhdmVkV3BbMF1bMV0pO1xyXG4gICAgY3Vyc29yID0gbGw7XHJcbiAgICBzdGFydE1hcmtlciA9IEwubWFya2VyKGxsLCB7IGljb246IElDLnN0YXJ0IH0pLmFkZFRvKG1hcCk7XHJcbiAgICBtYXAuc2V0VmlldyhsbCwgMTUpO1xyXG4gICAgc2V0U3RhdHVzKGZyZWVNb2RlID8gJ2ZyZWUnIDogJ29ycycpO1xyXG4gIH1cclxuXHJcbiAgLy8gUmVzdGF1cmVyIGRpc3RhbmNlL2R1csOpZSBhZmZpY2jDqWVzXHJcbiAgY29uc3QgZXhpc3RpbmdEaXN0ID0gY2ZnLmluaXRpYWxEaXN0YW5jZSA/PyAoZGlzdElucHV0Py52YWx1ZSAgPyBwYXJzZUZsb2F0KGRpc3RJbnB1dC52YWx1ZSkgIDogbnVsbCk7XHJcbiAgY29uc3QgZXhpc3RpbmdEdXIgID0gY2ZnLmluaXRpYWxEdXJhdGlvbiA/PyAoZHVySW5wdXQ/LnZhbHVlICAgPyBwYXJzZUZsb2F0KGR1cklucHV0LnZhbHVlKSAgIDogbnVsbCk7XHJcbiAgaWYgKGV4aXN0aW5nRGlzdCAhPSBudWxsICYmIHNlZ21lbnRzLmxlbmd0aCkge1xyXG4gICAgaWYgKHN0YXRzQm94KSAgIHN0YXRzQm94LnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWZsZXgnO1xyXG4gICAgaWYgKGRpc3RhbmNlRWwpIGRpc3RhbmNlRWwudGV4dENvbnRlbnQgPSBmbXREaXN0KGV4aXN0aW5nRGlzdCk7XHJcbiAgICBpZiAoZHVyYXRpb25FbCkgZHVyYXRpb25FbC50ZXh0Q29udGVudCA9IGZtdER1cihleGlzdGluZ0R1cik7XHJcbiAgfVxyXG5cclxuICBzZXRQcm9maWxlKG9yc1Byb2ZpbGUpO1xyXG4gIHJlbmRlclNlZ0xpc3QoKTtcclxuICB1cGRhdGVIaW50KCk7XHJcbn0iLCJpbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcclxuXHJcbmltcG9ydCBMIGZyb20gJ2xlYWZsZXQnO1xyXG5pbXBvcnQgJ2xlYWZsZXQvZGlzdC9sZWFmbGV0LmNzcyc7XHJcblxyXG5pbXBvcnQgJ2xlYWZsZXQtZHJhdyc7XHJcbmltcG9ydCAnbGVhZmxldC1kcmF3L2Rpc3QvbGVhZmxldC5kcmF3LmNzcyc7XHJcblxyXG5pbXBvcnQgJ2xlYWZsZXQtcm91dGluZy1tYWNoaW5lJztcclxuaW1wb3J0ICdsZWFmbGV0LXJvdXRpbmctbWFjaGluZS9kaXN0L2xlYWZsZXQtcm91dGluZy1tYWNoaW5lLmNzcyc7XHJcblxyXG5pbXBvcnQgbWFya2VySWNvbiBmcm9tICdsZWFmbGV0L2Rpc3QvaW1hZ2VzL21hcmtlci1pY29uLnBuZyc7XHJcbmltcG9ydCBtYXJrZXJTaGFkb3cgZnJvbSAnbGVhZmxldC9kaXN0L2ltYWdlcy9tYXJrZXItc2hhZG93LnBuZyc7XHJcblxyXG5kZWxldGUgTC5JY29uLkRlZmF1bHQucHJvdG90eXBlLl9nZXRJY29uVXJsO1xyXG5MLkljb24uRGVmYXVsdC5tZXJnZU9wdGlvbnMoe1xyXG4gIGljb25Vcmw6IG1hcmtlckljb24sXHJcbiAgc2hhZG93VXJsOiBtYXJrZXJTaGFkb3csXHJcbn0pO1xyXG5cclxud2luZG93LkwgPSBMO1xyXG5cclxuaW1wb3J0IHsgaW5pdEJhbGFkZU1hcCB9IGZyb20gJy4vSmF2YXNjcmlwdC9iYWxhZGUtbWFwLmpzJztcclxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnKSkge1xyXG4gICAgaW5pdEJhbGFkZU1hcCgpO1xyXG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbImUiLCJ0IiwiciIsIlN5bWJvbCIsIm4iLCJpdGVyYXRvciIsIm8iLCJ0b1N0cmluZ1RhZyIsImkiLCJjIiwicHJvdG90eXBlIiwiR2VuZXJhdG9yIiwidSIsIk9iamVjdCIsImNyZWF0ZSIsIl9yZWdlbmVyYXRvckRlZmluZTIiLCJmIiwicCIsInkiLCJHIiwidiIsImEiLCJkIiwiYmluZCIsImxlbmd0aCIsImwiLCJUeXBlRXJyb3IiLCJjYWxsIiwiZG9uZSIsInZhbHVlIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsImdldFByb3RvdHlwZU9mIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJkaXNwbGF5TmFtZSIsIl9yZWdlbmVyYXRvciIsInciLCJtIiwiZGVmaW5lUHJvcGVydHkiLCJfcmVnZW5lcmF0b3JEZWZpbmUiLCJfaW52b2tlIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiX2FycmF5V2l0aG91dEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheSIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVNwcmVhZCIsIkFycmF5IiwiZnJvbSIsImlzQXJyYXkiLCJfYXJyYXlMaWtlVG9BcnJheSIsIm93bktleXMiLCJrZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiZmlsdGVyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwicHVzaCIsImFwcGx5IiwiX29iamVjdFNwcmVhZCIsImFyZ3VtZW50cyIsImZvckVhY2giLCJfZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZGVmaW5lUHJvcGVydGllcyIsIl90b1Byb3BlcnR5S2V5IiwiX3RvUHJpbWl0aXZlIiwiX3R5cGVvZiIsInRvUHJpbWl0aXZlIiwiU3RyaW5nIiwiTnVtYmVyIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0aGVuIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJfbmV4dCIsIl90aHJvdyIsIl9zbGljZWRUb0FycmF5IiwiX2FycmF5V2l0aEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheUxpbWl0IiwiX25vbkl0ZXJhYmxlUmVzdCIsInRvU3RyaW5nIiwic2xpY2UiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJ0ZXN0IiwibmV4dCIsImluaXRCYWxhZGVNYXAiLCJfY2ZnJGRlZmF1bHRWaWV3IiwiX2NmZyRvcnNQcm9maWxlIiwiX2NmZyRpbml0aWFsV2F5cG9pbnRzIiwiX3dwSW5wdXQkdmFsdWUiLCJfY2ZnJGluaXRpYWxSb3V0ZUdlb0oiLCJfcm91dGVJbnB1dCR2YWx1ZSIsIl9jZmckaW5pdGlhbERpc3RhbmNlIiwiX2NmZyRpbml0aWFsRHVyYXRpb24iLCJjZmciLCJ3aW5kb3ciLCJCQUxBREVfTUFQX0NPTkZJRyIsIl9yZWYiLCJkZWZhdWx0VmlldyIsIl9yZWYyIiwiZGVmTGF0IiwiZGVmTG5nIiwiZGVmWm9vbSIsIm1hcCIsIkwiLCJkb3VibGVDbGlja1pvb20iLCJzZXRWaWV3Iiwic2V0VGltZW91dCIsImludmFsaWRhdGVTaXplIiwidGlsZUxheWVyIiwiYXR0cmlidXRpb24iLCJtYXhab29tIiwiYWRkVG8iLCJ3cElucHV0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvdXRlSW5wdXQiLCJkaXN0SW5wdXQiLCJkdXJJbnB1dCIsImJ0blVuZG8iLCJidG5DbG9zZSIsImJ0bkNsZWFyIiwiYnRuRnJlZVRvZ2dsZSIsInBpbGxFbCIsImZyZWVEZXNjRWwiLCJoaW50RWwiLCJzdGF0dXNCYXJFbCIsInN0YXRzQm94IiwiZGlzdGFuY2VFbCIsImR1cmF0aW9uRWwiLCJzZWdMaXN0RWwiLCJvcnNQcm9maWxlIiwiZnJlZU1vZGUiLCJjdXJzb3IiLCJzZWdtZW50cyIsInN0YXJ0TWFya2VyIiwiY3Vyc29yTWsiLCJwcmV2aWV3TGluZSIsIm9yc1NlcSIsInJlc3RvcmF0aW9uTGF5ZXIiLCJtYWtlUGluIiwiYmciLCJlbW9qaSIsImRpdkljb24iLCJodG1sIiwiY29uY2F0IiwiY2xhc3NOYW1lIiwiaWNvblNpemUiLCJpY29uQW5jaG9yIiwiSUMiLCJzdGFydCIsIm9uIiwibGF0bG5nIiwibWFya2VyIiwiaWNvbiIsInNldFN0YXR1cyIsImFkZEZyZWVTZWciLCJhZGRPUlNTZWciLCJ1cGRhdGVIaW50IiwicmVuZGVyU2VnTGlzdCIsInBlcnNpc3QiLCJyZW1vdmVMYXllciIsInBvbHlsaW5lIiwiY29sb3IiLCJ3ZWlnaHQiLCJvcGFjaXR5IiwiZGFzaEFycmF5IiwibGluZUNhcCIsInRvIiwiY2xlYXJMYXllcnMiLCJyZW1vdmUiLCJwdHMiLCJsYXllcnMiLCJkcmF3UG9seSIsImRpc3RNIiwiZGlzdGFuY2VUbyIsInR5cGUiLCJwb2ludHMiLCJkaXN0YW5jZU1ldGVycyIsImR1cmF0aW9uU2Vjb25kcyIsIm1vdmVDdXJzb3IiLCJ1cGRhdGVTdGF0cyIsIl94IiwiX3gyIiwiX2FkZE9SU1NlZyIsIl9jYWxsZWUiLCJzZXEiLCJfZGF0YSRnZW9qc29uJGdlb21ldHIiLCJfZGF0YSRnZW9qc29uIiwiX2RhdGEkZGlzdGFuY2UiLCJfZGF0YSRkdXJhdGlvbiIsInJlcyIsImRhdGEiLCJjb29yZHMiLCJkdXJTIiwiX3QiLCJfY29udGV4dCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibGF0IiwibG5nIiwicHJvZmlsZSIsImpzb24iLCJvayIsImNvbnNvbGUiLCJlcnJvciIsInNldEhpbnQiLCJnZW9qc29uIiwiZ2VvbWV0cnkiLCJjb29yZGluYXRlcyIsImxhdExuZyIsImRpc3RhbmNlIiwiZHVyYXRpb24iLCJzaGFkb3ciLCJsaW5lIiwibGluZUpvaW4iLCJyZW1vdmVMYXllcnMiLCJsbCIsImNsb3NlTG9vcCIsImZpcnN0Iiwic2FtZSIsIk1hdGgiLCJhYnMiLCJ1bmRvTGFzdCIsInNlZyIsInBvcCIsImNsZWFyQWxsIiwiZWFjaExheWVyIiwicyIsIlBvbHlsaW5lIiwiR2VvSlNPTiIsInRvZ2dsZUZyZWUiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJ0ZXh0Q29udGVudCIsImdldENvbnRhaW5lciIsInN0eWxlIiwic2V0UHJvZmlsZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbCIsImRhdGFzZXQiLCJ3cHMiLCJhbGxDb29yZHMiLCJ0b3RhbERpc3QiLCJyZWR1Y2UiLCJfcyRkaXN0YW5jZU1ldGVycyIsInRvdGFsRHVyIiwiX3MkZHVyYXRpb25TZWNvbmRzIiwiZmVhdHVyZXMiLCJwcm9wZXJ0aWVzIiwic3VtbWFyeSIsInJvdW5kIiwiZGlzcGxheSIsIl9zJGRpc3RhbmNlTWV0ZXJzMiIsIl9zJGR1cmF0aW9uU2Vjb25kczIiLCJmbXREaXN0IiwiZm10RHVyIiwiaW5uZXJIVE1MIiwiaXNPUlMiLCJsaSIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsIm1zZyIsImhpZGRlbiIsImNscyIsImxvYWQiLCJvcnMiLCJmcmVlIiwidHh0IiwiYWRkIiwidG9GaXhlZCIsInJlcGxhY2UiLCJoIiwiZmxvb3IiLCJwYWRTdGFydCIsInRyeVBhcnNlIiwic3RyIiwicGFyc2UiLCJfdW51c2VkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNhdmVkV3AiLCJpbml0aWFsV2F5cG9pbnRzIiwic2F2ZWRHZW8iLCJpbml0aWFsUm91dGVHZW9Kc29uIiwiZ2VvSlNPTiIsIndhcm4iLCJfcHJldiQiLCJwcmV2IiwiZml0Qm91bmRzIiwibGF0TG5nQm91bmRzIiwicGFkZGluZyIsImV4aXN0aW5nRGlzdCIsImluaXRpYWxEaXN0YW5jZSIsInBhcnNlRmxvYXQiLCJleGlzdGluZ0R1ciIsImluaXRpYWxEdXJhdGlvbiIsIm1hcmtlckljb24iLCJtYXJrZXJTaGFkb3ciLCJJY29uIiwiRGVmYXVsdCIsIl9nZXRJY29uVXJsIiwibWVyZ2VPcHRpb25zIiwiaWNvblVybCIsInNoYWRvd1VybCJdLCJzb3VyY2VSb290IjoiIn0=