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
      load: '<span class="map-status__spin"></span>Calcul en cours…',
      ors: '<span class="map-status__dot"></span>Mode Calcul actif',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQztFQUMxQkMsT0FBTyxFQUFFTixnRUFBVTtFQUNuQk8sU0FBUyxFQUFFTixrRUFBWUE7QUFDekIsQ0FBQyxDQUFDO0FBRUY5TSxNQUFNLENBQUNTLENBQUMsR0FBR0EsZ0RBQUM7QUFFK0M7QUFDM0QsSUFBSVUsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDLEVBQUU7RUFDaEM5Qix3RUFBYSxDQUFDLENBQUM7QUFDbkIsQzs7Ozs7Ozs7Ozs7QUN6QkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvSmF2YXNjcmlwdC9iYWxhZGUtbWFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2Nzcz84ZjU5Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBiYWxhZGUtbWFwLmpzXHJcbiAqXHJcbiAqIENhcnRlIGRlIGNyw6lhdGlvbi/DqWRpdGlvbiBkZSBiYWxhZGUgY2hpZW4g4oCUIFN5bWZvbnlcclxuICpcclxuICogVXRpbGlzZSB1bmlxdWVtZW50IGxlcyBkZXV4IGNoYW1wcyBleGlzdGFudHMgOlxyXG4gKiAgICNiYWxhZGVfd2F5cG9pbnRzSnNvbiAg4oaSIFtbbGF0LCBsbmcsIFwib3JzXCJ8XCJmcmVlXCJdLCDigKZdXHJcbiAqICAgI2JhbGFkZV9yb3V0ZUdlb0pzb24gICDihpIgRmVhdHVyZUNvbGxlY3Rpb24gTGluZVN0cmluZyBmdXNpb25uw6llXHJcbiAqICAgI2JhbGFkZV9kaXN0YW5jZU1ldGVycyDihpIgbcOodHJlc1xyXG4gKiAgICNiYWxhZGVfZHVyYXRpb25TZWNvbmRz4oaSIHNlY29uZGVzXHJcbiAqXHJcbiAqIMOJbMOpbWVudHMgVUkgOlxyXG4gKiAgICNtYXAsICNidG4tdW5kbywgI2J0bi1jbG9zZSwgI2J0bi1jbGVhclxyXG4gKiAgICNidG4tZnJlZS10b2dnbGUsICNmcmVlLXRvZ2dsZS1waWxsLCAjZnJlZS10b2dnbGUtZGVzY1xyXG4gKiAgICNtYXAtaGludCwgI21hcC1zdGF0dXNcclxuICogICAjcm91dGUtc3RhdHMsICNyb3V0ZS1kaXN0YW5jZSwgI3JvdXRlLWR1cmF0aW9uXHJcbiAqICAgI3NlZy1saXN0XHJcbiAqICAgW2RhdGEtb3JzLXByb2ZpbGVdIOKGkiBib3V0b25zIHByb2ZpbFxyXG4gKi9cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0QmFsYWRlTWFwKCkge1xyXG5cclxuICBjb25zdCBjZmcgPSB3aW5kb3cuQkFMQURFX01BUF9DT05GSUcgfHwge307XHJcblxyXG4gIC8vIOKUgOKUgCBDYXJ0ZSDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcclxuICBjb25zdCBbZGVmTGF0LCBkZWZMbmcsIGRlZlpvb21dID0gY2ZnLmRlZmF1bHRWaWV3ID8/IFs0NC44Mzc4LCAtMC41NzkyLCAxM107XHJcbiAgY29uc3QgbWFwID0gTC5tYXAoJ21hcCcsIHsgZG91YmxlQ2xpY2tab29tOiBmYWxzZSB9KS5zZXRWaWV3KFtkZWZMYXQsIGRlZkxuZ10sIGRlZlpvb20pO1xyXG4gIHNldFRpbWVvdXQoKCkgPT4gbWFwLmludmFsaWRhdGVTaXplKCksIDE1MCk7XHJcblxyXG4gIEwudGlsZUxheWVyKCdodHRwczovL3tzfS50aWxlLm9wZW5zdHJlZXRtYXAuZnIvb3NtZnIve3p9L3t4fS97eX0ucG5nJywge1xyXG4gICAgYXR0cmlidXRpb246ICcmY29weTsgT3BlblN0cmVldE1hcCBjb250cmlidXRvcnMnLCBtYXhab29tOiAxOSxcclxuICB9KS5hZGRUbyhtYXApO1xyXG5cclxuICAvLyDilIDilIAgQ2hhbXBzIFN5bWZvbnkg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXHJcbiAgY29uc3Qgd3BJbnB1dCAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWxhZGVfd2F5cG9pbnRzSnNvbicpO1xyXG4gIGNvbnN0IHJvdXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFsYWRlX3JvdXRlR2VvSnNvbicpO1xyXG4gIGNvbnN0IGRpc3RJbnB1dCAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFsYWRlX2Rpc3RhbmNlTWV0ZXJzJyk7XHJcbiAgY29uc3QgZHVySW5wdXQgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWxhZGVfZHVyYXRpb25TZWNvbmRzJyk7XHJcblxyXG4gIC8vIOKUgOKUgCBVSSDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcclxuICBjb25zdCBidG5VbmRvICAgICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi11bmRvJyk7XHJcbiAgY29uc3QgYnRuQ2xvc2UgICAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tY2xvc2UnKTtcclxuICBjb25zdCBidG5DbGVhciAgICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1jbGVhcicpO1xyXG4gIGNvbnN0IGJ0bkZyZWVUb2dnbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLWZyZWUtdG9nZ2xlJyk7XHJcbiAgY29uc3QgcGlsbEVsICAgICAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmcmVlLXRvZ2dsZS1waWxsJyk7XHJcbiAgY29uc3QgZnJlZURlc2NFbCAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmcmVlLXRvZ2dsZS1kZXNjJyk7XHJcbiAgY29uc3QgaGludEVsICAgICAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAtaGludCcpO1xyXG4gIGNvbnN0IHN0YXR1c0JhckVsICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwLXN0YXR1cycpO1xyXG4gIGNvbnN0IHN0YXRzQm94ICAgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm91dGUtc3RhdHMnKTtcclxuICBjb25zdCBkaXN0YW5jZUVsICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JvdXRlLWRpc3RhbmNlJyk7XHJcbiAgY29uc3QgZHVyYXRpb25FbCAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb3V0ZS1kdXJhdGlvbicpO1xyXG4gIGNvbnN0IHNlZ0xpc3RFbCAgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VnLWxpc3QnKTtcclxuXHJcbiAgLy8g4pSA4pSAIMOJdGF0IOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxyXG4gIGxldCBvcnNQcm9maWxlICA9IGNmZy5vcnNQcm9maWxlID8/ICdmb290LXdhbGtpbmcnO1xyXG4gIGxldCBmcmVlTW9kZSAgICA9IGZhbHNlO1xyXG4gIGxldCBjdXJzb3IgICAgICA9IG51bGw7ICAgLy8gTC5MYXRMbmcg4oCUIGRlcm5pZXIgcG9pbnQgY29uZmlybcOpXHJcbiAgbGV0IHNlZ21lbnRzICAgID0gW107ICAgICAvLyBbeyB0eXBlLCBmcm9tLCB0bywgcG9pbnRzLCBsYXllcnMsIGRpc3RhbmNlTWV0ZXJzLCBkdXJhdGlvblNlY29uZHMgfV1cclxuICBsZXQgc3RhcnRNYXJrZXIgPSBudWxsO1xyXG4gIGxldCBjdXJzb3JNayAgICA9IG51bGw7XHJcbiAgbGV0IHByZXZpZXdMaW5lID0gbnVsbDtcclxuICBsZXQgb3JzU2VxICAgICAgICAgID0gMDtcclxuICBsZXQgcmVzdG9yYXRpb25MYXllciA9IG51bGw7ICAvLyBsYXllciBHZW9KU09OIGFmZmljaMOpIGF1IGNoYXJnZW1lbnQgKG1vZGUgw6lkaXRpb24pXHJcblxyXG4gIC8vIOKUgOKUgCBJY8O0bmVzIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxyXG4gIGZ1bmN0aW9uIG1ha2VQaW4oYmcsIGVtb2ppKSB7XHJcbiAgICByZXR1cm4gTC5kaXZJY29uKHtcclxuICAgICAgaHRtbDogYDxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kOiR7Ymd9O3dpZHRoOjMycHg7aGVpZ2h0OjMycHg7Ym9yZGVyLXJhZGl1czo1MCUgNTAlIDUwJSAwO1xyXG4gICAgICAgIHRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTtib3JkZXI6M3B4IHNvbGlkIHdoaXRlO2JveC1zaGFkb3c6MCAycHggOHB4IHJnYmEoMCwwLDAsLjI4KTtcclxuICAgICAgICBkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJcIj5cclxuICAgICAgICA8c3BhbiBzdHlsZT1cInRyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO2ZvbnQtc2l6ZToxNHB4XCI+JHtlbW9qaX08L3NwYW4+PC9kaXY+YCxcclxuICAgICAgY2xhc3NOYW1lOiAnJywgaWNvblNpemU6IFszMiwgMzJdLCBpY29uQW5jaG9yOiBbMTYsIDMyXSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgSUMgPSB7IHN0YXJ0OiBtYWtlUGluKCcjNGE3YzU5JywgJ/Cfj6AnKSwgY3Vyc29yOiBtYWtlUGluKCcjZTg3MDQwJywgJ/CfkL4nKSB9O1xyXG5cclxuICAvLyDilIDilIAgw4l2w6luZW1lbnRzIGNhcnRlIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxyXG4gIG1hcC5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgaWYgKCFjdXJzb3IpIHtcclxuICAgICAgY3Vyc29yID0gZS5sYXRsbmc7XHJcbiAgICAgIHN0YXJ0TWFya2VyID0gTC5tYXJrZXIoY3Vyc29yLCB7IGljb246IElDLnN0YXJ0IH0pLmFkZFRvKG1hcCk7XHJcbiAgICAgIHNldFN0YXR1cyhmcmVlTW9kZSA/ICdmcmVlJyA6ICdvcnMnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChmcmVlTW9kZSkgYWRkRnJlZVNlZyhjdXJzb3IsIGUubGF0bG5nKTtcclxuICAgICAgZWxzZSAgICAgICAgICBhZGRPUlNTZWcoY3Vyc29yLCBlLmxhdGxuZyk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVIaW50KCk7XHJcbiAgICByZW5kZXJTZWdMaXN0KCk7XHJcbiAgICBwZXJzaXN0KCk7XHJcbiAgfSk7XHJcblxyXG4gIG1hcC5vbignbW91c2Vtb3ZlJywgKGUpID0+IHtcclxuICAgIGlmICghY3Vyc29yKSByZXR1cm47XHJcbiAgICBpZiAocHJldmlld0xpbmUpIHsgbWFwLnJlbW92ZUxheWVyKHByZXZpZXdMaW5lKTsgcHJldmlld0xpbmUgPSBudWxsOyB9XHJcbiAgICBwcmV2aWV3TGluZSA9IEwucG9seWxpbmUoW2N1cnNvciwgZS5sYXRsbmddLCB7XHJcbiAgICAgIGNvbG9yOiBmcmVlTW9kZSA/ICcjN2I1ZWE3JyA6ICcjNGE3YzU5JyxcclxuICAgICAgd2VpZ2h0OiAzLCBvcGFjaXR5OiAuNCwgZGFzaEFycmF5OiAnNSA4JywgbGluZUNhcDogJ3JvdW5kJyxcclxuICAgIH0pLmFkZFRvKG1hcCk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIOKUgOKUgCBTZWdtZW50IGxpYnJlIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxyXG4gIGZ1bmN0aW9uIGFkZEZyZWVTZWcoZnJvbSwgdG8pIHtcclxuICAgIGlmIChyZXN0b3JhdGlvbkxheWVyKSB7IHJlc3RvcmF0aW9uTGF5ZXIuY2xlYXJMYXllcnMoKTsgcmVzdG9yYXRpb25MYXllci5yZW1vdmUoKTsgcmVzdG9yYXRpb25MYXllciA9IG51bGw7IH1cclxuICAgIGNvbnN0IHB0cyAgICA9IFtmcm9tLCB0b107XHJcbiAgICBjb25zdCBsYXllcnMgPSBkcmF3UG9seShwdHMsICdmcmVlJyk7XHJcbiAgICBjb25zdCBkaXN0TSAgPSBmcm9tLmRpc3RhbmNlVG8odG8pO1xyXG4gICAgc2VnbWVudHMucHVzaCh7IHR5cGU6ICdmcmVlJywgZnJvbSwgdG8sIHBvaW50czogcHRzLCBsYXllcnMsXHJcbiAgICAgIGRpc3RhbmNlTWV0ZXJzOiBkaXN0TSwgZHVyYXRpb25TZWNvbmRzOiAoZGlzdE0gLyAxMDAwIC8gNCkgKiAzNjAwIH0pO1xyXG4gICAgbW92ZUN1cnNvcih0byk7XHJcbiAgICB1cGRhdGVTdGF0cygpO1xyXG4gICAgcmVuZGVyU2VnTGlzdCgpO1xyXG4gICAgcGVyc2lzdCgpO1xyXG4gIH1cclxuXHJcbiAgLy8g4pSA4pSAIFNlZ21lbnQgT1JTIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxyXG4gIGFzeW5jIGZ1bmN0aW9uIGFkZE9SU1NlZyhmcm9tLCB0bykge1xyXG4gICAgaWYgKHJlc3RvcmF0aW9uTGF5ZXIpIHsgcmVzdG9yYXRpb25MYXllci5jbGVhckxheWVycygpOyByZXN0b3JhdGlvbkxheWVyLnJlbW92ZSgpOyByZXN0b3JhdGlvbkxheWVyID0gbnVsbDsgfVxyXG4gICAgY29uc3Qgc2VxID0gKytvcnNTZXE7XHJcbiAgICBzZXRTdGF0dXMoJ2xvYWQnKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnL2FwaS9oaWtpbmctcm91dGUnLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgcG9pbnRzOiAgW1tmcm9tLmxhdCwgZnJvbS5sbmddLCBbdG8ubGF0LCB0by5sbmddXSxcclxuICAgICAgICAgIHByb2ZpbGU6IG9yc1Byb2ZpbGUsXHJcbiAgICAgICAgfSksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHNlcSAhPT0gb3JzU2VxKSByZXR1cm47XHJcblxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICAgIGlmICghcmVzLm9rKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignW09SU10nLCBkYXRhKTtcclxuICAgICAgICBzZXRTdGF0dXMoZnJlZU1vZGUgPyAnZnJlZScgOiAnb3JzJyk7XHJcbiAgICAgICAgc2V0SGludCgn4pqg77iPIEVycmV1ciBPUlMg4oCUIHbDqXJpZmlleiBsYSBjb25zb2xlLicpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gTGUgY29udHLDtGxldXIgcmV0b3VybmUgZGF0YS5nZW9qc29uID0gdW4gRmVhdHVyZSAocGFzIEZlYXR1cmVDb2xsZWN0aW9uKVxyXG4gICAgICBjb25zdCBjb29yZHMgPSBkYXRhLmdlb2pzb24/Lmdlb21ldHJ5Py5jb29yZGluYXRlcyA/PyBbXTtcclxuICAgICAgaWYgKCFjb29yZHMubGVuZ3RoKSB7XHJcbiAgICAgICAgc2V0U3RhdHVzKGZyZWVNb2RlID8gJ2ZyZWUnIDogJ29ycycpO1xyXG4gICAgICAgIHNldEhpbnQoJ+KaoO+4jyBPUlMgblxcJ2EgcmV0b3VybsOpIGF1Y3VuIHRyYWPDqS4nKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHB0cyAgID0gY29vcmRzLm1hcChjID0+IEwubGF0TG5nKGNbMV0sIGNbMF0pKTtcclxuICAgICAgY29uc3QgZGlzdE0gPSBkYXRhLmRpc3RhbmNlID8/IGZyb20uZGlzdGFuY2VUbyh0byk7IC8vIGTDqWrDoCBlbiBtw6h0cmVzIChjb250csO0bGV1ciBmYWl0IGtt4oaSbSlcclxuICAgICAgY29uc3QgZHVyUyAgPSBkYXRhLmR1cmF0aW9uID8/IChkaXN0TSAvIDEwMDAgLyA0KSAqIDM2MDA7XHJcblxyXG4gICAgICBzZWdtZW50cy5wdXNoKHsgdHlwZTogJ29ycycsIGZyb20sIHRvLFxyXG4gICAgICAgIHBvaW50czogcHRzLCBsYXllcnM6IGRyYXdQb2x5KHB0cywgJ29ycycpLFxyXG4gICAgICAgIGRpc3RhbmNlTWV0ZXJzOiBkaXN0TSwgZHVyYXRpb25TZWNvbmRzOiBkdXJTIH0pO1xyXG5cclxuICAgICAgbW92ZUN1cnNvcih0byk7XHJcbiAgICAgIHVwZGF0ZVN0YXRzKCk7XHJcbiAgICAgIHJlbmRlclNlZ0xpc3QoKTtcclxuICAgICAgc2V0U3RhdHVzKGZyZWVNb2RlID8gJ2ZyZWUnIDogJ29ycycpO1xyXG4gICAgICB1cGRhdGVIaW50KCk7XHJcbiAgICAgIHBlcnNpc3QoKTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgaWYgKHNlcSAhPT0gb3JzU2VxKSByZXR1cm47XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tPUlNdJywgZXJyKTtcclxuICAgICAgc2V0U3RhdHVzKGZyZWVNb2RlID8gJ2ZyZWUnIDogJ29ycycpO1xyXG4gICAgICBzZXRIaW50KCfimqDvuI8gSW1wb3NzaWJsZSBkZSBqb2luZHJlIC9hcGkvaGlraW5nLXJvdXRlLicpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g4pSA4pSAIERlc3NpbiBwb2x5bGluZSDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcclxuICBmdW5jdGlvbiBkcmF3UG9seShwdHMsIHR5cGUpIHtcclxuICAgIGNvbnN0IGNvbG9yICA9IHR5cGUgPT09ICdvcnMnID8gJyM0YTdjNTknIDogJyM3YjVlYTcnO1xyXG4gICAgY29uc3Qgc2hhZG93ID0gTC5wb2x5bGluZShwdHMsIHsgY29sb3I6ICcjM2QyYjFmJywgd2VpZ2h0OiA5LCBvcGFjaXR5OiAuMDcgfSkuYWRkVG8obWFwKTtcclxuICAgIGNvbnN0IGxpbmUgICA9IEwucG9seWxpbmUocHRzLCB7XHJcbiAgICAgIGNvbG9yLCB3ZWlnaHQ6IDUsIG9wYWNpdHk6IC45LCBsaW5lQ2FwOiAncm91bmQnLCBsaW5lSm9pbjogJ3JvdW5kJyxcclxuICAgICAgLi4uKHR5cGUgPT09ICdmcmVlJyA/IHsgZGFzaEFycmF5OiAnOCA2JyB9IDoge30pLFxyXG4gICAgfSkuYWRkVG8obWFwKTtcclxuICAgIHJldHVybiBbc2hhZG93LCBsaW5lXTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlbW92ZUxheWVycyhsYXllcnMpIHsgbGF5ZXJzLmZvckVhY2gobCA9PiBtYXAucmVtb3ZlTGF5ZXIobCkpOyB9XHJcblxyXG4gIGZ1bmN0aW9uIG1vdmVDdXJzb3IobGwpIHtcclxuICAgIGN1cnNvciA9IGxsO1xyXG4gICAgaWYgKGN1cnNvck1rKSBtYXAucmVtb3ZlTGF5ZXIoY3Vyc29yTWspO1xyXG4gICAgY3Vyc29yTWsgPSBMLm1hcmtlcihsbCwgeyBpY29uOiBJQy5jdXJzb3IgfSkuYWRkVG8obWFwKTtcclxuICB9XHJcblxyXG4gIC8vIOKUgOKUgCBGZXJtZXIgbGEgYm91Y2xlIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxyXG4gIGZ1bmN0aW9uIGNsb3NlTG9vcCgpIHtcclxuICAgIGlmICghY3Vyc29yIHx8ICFzZWdtZW50cy5sZW5ndGgpIHJldHVybjtcclxuICAgIGNvbnN0IGZpcnN0ID0gc2VnbWVudHNbMF0uZnJvbTtcclxuICAgIGNvbnN0IHNhbWUgID0gTWF0aC5hYnMoY3Vyc29yLmxhdCAtIGZpcnN0LmxhdCkgPCAxZS02XHJcbiAgICAgICAgICAgICAgICYmIE1hdGguYWJzKGN1cnNvci5sbmcgLSBmaXJzdC5sbmcpIDwgMWUtNjtcclxuICAgIGlmIChzYW1lKSByZXR1cm47XHJcbiAgICBpZiAoZnJlZU1vZGUpIGFkZEZyZWVTZWcoY3Vyc29yLCBmaXJzdCk7XHJcbiAgICBlbHNlICAgICAgICAgIGFkZE9SU1NlZyhjdXJzb3IsIGZpcnN0KTtcclxuICB9XHJcblxyXG4gIC8vIOKUgOKUgCBBbm51bGVyIGRlcm5pZXIg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXHJcbiAgZnVuY3Rpb24gdW5kb0xhc3QoKSB7XHJcbiAgICBpZiAocHJldmlld0xpbmUpIHsgbWFwLnJlbW92ZUxheWVyKHByZXZpZXdMaW5lKTsgcHJldmlld0xpbmUgPSBudWxsOyB9XHJcblxyXG4gICAgaWYgKHNlZ21lbnRzLmxlbmd0aCkge1xyXG4gICAgICBjb25zdCBzZWcgPSBzZWdtZW50cy5wb3AoKTtcclxuICAgICAgcmVtb3ZlTGF5ZXJzKHNlZy5sYXllcnMpO1xyXG4gICAgICBjdXJzb3IgPSBzZWcuZnJvbTtcclxuICAgICAgaWYgKGN1cnNvck1rKSB7IG1hcC5yZW1vdmVMYXllcihjdXJzb3JNayk7IGN1cnNvck1rID0gbnVsbDsgfVxyXG4gICAgICBpZiAoc2VnbWVudHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgaWYgKHN0YXJ0TWFya2VyKSBtYXAucmVtb3ZlTGF5ZXIoc3RhcnRNYXJrZXIpO1xyXG4gICAgICAgIHN0YXJ0TWFya2VyID0gTC5tYXJrZXIoY3Vyc29yLCB7IGljb246IElDLnN0YXJ0IH0pLmFkZFRvKG1hcCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY3Vyc29yTWsgPSBMLm1hcmtlcihjdXJzb3IsIHsgaWNvbjogSUMuY3Vyc29yIH0pLmFkZFRvKG1hcCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoY3Vyc29yKSB7XHJcbiAgICAgIGlmIChzdGFydE1hcmtlcikgeyBtYXAucmVtb3ZlTGF5ZXIoc3RhcnRNYXJrZXIpOyBzdGFydE1hcmtlciA9IG51bGw7IH1cclxuICAgICAgaWYgKGN1cnNvck1rKSAgICB7IG1hcC5yZW1vdmVMYXllcihjdXJzb3JNayk7ICAgIGN1cnNvck1rICAgID0gbnVsbDsgfVxyXG4gICAgICBjdXJzb3IgPSBudWxsO1xyXG4gICAgICBzZXRTdGF0dXMoJ2hpZGUnKTtcclxuICAgIH0gZWxzZSByZXR1cm47XHJcblxyXG4gICAgcmVuZGVyU2VnTGlzdCgpO1xyXG4gICAgdXBkYXRlU3RhdHMoKTtcclxuICAgIHVwZGF0ZUhpbnQoKTtcclxuICAgIHBlcnNpc3QoKTtcclxuICB9XHJcblxyXG4gIC8vIOKUgOKUgCBUb3V0IGVmZmFjZXIg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXHJcbiAgZnVuY3Rpb24gY2xlYXJBbGwoKSB7XHJcbiAgICBvcnNTZXErKztcclxuICAgIC8vIFN1cHByaW1lciBsZSBsYXllciBkZSByZXN0YXVyYXRpb24gKEwuR2VvSlNPTiA9IExheWVyR3JvdXApXHJcbiAgICBpZiAocmVzdG9yYXRpb25MYXllcikge1xyXG4gICAgICByZXN0b3JhdGlvbkxheWVyLmVhY2hMYXllcihsID0+IG1hcC5yZW1vdmVMYXllcihsKSk7XHJcbiAgICAgIHJlc3RvcmF0aW9uTGF5ZXIuY2xlYXJMYXllcnMoKTtcclxuICAgICAgbWFwLnJlbW92ZUxheWVyKHJlc3RvcmF0aW9uTGF5ZXIpO1xyXG4gICAgICByZXN0b3JhdGlvbkxheWVyID0gbnVsbDtcclxuICAgIH1cclxuICAgIHNlZ21lbnRzLmZvckVhY2gocyA9PiByZW1vdmVMYXllcnMocy5sYXllcnMpKTtcclxuICAgIHNlZ21lbnRzID0gW107XHJcbiAgICBpZiAoc3RhcnRNYXJrZXIpIHsgbWFwLnJlbW92ZUxheWVyKHN0YXJ0TWFya2VyKTsgc3RhcnRNYXJrZXIgPSBudWxsOyB9XHJcbiAgICBpZiAoY3Vyc29yTWspICAgIHsgbWFwLnJlbW92ZUxheWVyKGN1cnNvck1rKTsgICAgY3Vyc29yTWsgICAgPSBudWxsOyB9XHJcbiAgICBpZiAocHJldmlld0xpbmUpIHsgbWFwLnJlbW92ZUxheWVyKHByZXZpZXdMaW5lKTsgcHJldmlld0xpbmUgPSBudWxsOyB9XHJcbiAgICBjdXJzb3IgPSBudWxsO1xyXG4gICAgLy8gRm9yY2VyIGxhIHN1cHByZXNzaW9uIGRlIHRvdXRlcyBsZXMgcG9seWxpbmVzL3BhdGhzIHJlc3RhbnRzIHN1ciBsYSBjYXJ0ZVxyXG4gICAgLy8gKGZpbGV0IGRlIHPDqWN1cml0w6kgYXUgY2FzIG/DuSB1biBsYXllciBhdXJhaXQgw6ljaGFwcMOpIGF1IHRyYWNraW5nKVxyXG4gICAgbWFwLmVhY2hMYXllcihsID0+IHtcclxuICAgICAgaWYgKGwgaW5zdGFuY2VvZiBMLlBvbHlsaW5lIHx8IGwgaW5zdGFuY2VvZiBMLkdlb0pTT04pIHtcclxuICAgICAgICBtYXAucmVtb3ZlTGF5ZXIobCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmVuZGVyU2VnTGlzdCgpO1xyXG4gICAgdXBkYXRlU3RhdHMoKTtcclxuICAgIHVwZGF0ZUhpbnQoKTtcclxuICAgIHNldFN0YXR1cygnaGlkZScpO1xyXG4gICAgcGVyc2lzdCgpO1xyXG4gIH1cclxuXHJcbiAgLy8g4pSA4pSAIFRvZ2dsZSBtb2RlIGxpYnJlIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxyXG4gIGZ1bmN0aW9uIHRvZ2dsZUZyZWUoKSB7XHJcbiAgICBmcmVlTW9kZSA9ICFmcmVlTW9kZTtcclxuICAgIGJ0bkZyZWVUb2dnbGU/LmNsYXNzTGlzdC50b2dnbGUoJ29uJywgZnJlZU1vZGUpO1xyXG4gICAgcGlsbEVsPy5jbGFzc0xpc3QudG9nZ2xlKCdvbicsIGZyZWVNb2RlKTtcclxuICAgIGlmIChmcmVlRGVzY0VsKSBmcmVlRGVzY0VsLnRleHRDb250ZW50ID0gZnJlZU1vZGVcclxuICAgICAgPyAn4pyTIEFjdGlmIOKAlCB0cmFjw6kgbGlicmUgZW4gY291cnMnXHJcbiAgICAgIDogJ1RyYWPDqSBsaWJyZSBwb3VyIGxlcyBjaGVtaW5zIGhvcnMgY2FydGUnO1xyXG4gICAgbWFwLmdldENvbnRhaW5lcigpLnN0eWxlLmN1cnNvciA9IGZyZWVNb2RlID8gJ2Nyb3NzaGFpcicgOiAnJztcclxuICAgIGlmIChjdXJzb3IpIHNldFN0YXR1cyhmcmVlTW9kZSA/ICdmcmVlJyA6ICdvcnMnKTtcclxuICAgIHVwZGF0ZUhpbnQoKTtcclxuICB9XHJcblxyXG4gIC8vIOKUgOKUgCBQcm9maWwgT1JTIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxyXG4gIGZ1bmN0aW9uIHNldFByb2ZpbGUocCkge1xyXG4gICAgb3JzUHJvZmlsZSA9IHA7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1vcnMtcHJvZmlsZV0nKS5mb3JFYWNoKGVsID0+XHJcbiAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScsIGVsLmRhdGFzZXQub3JzUHJvZmlsZSA9PT0gcClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvLyDilIDilIAgUGVyc2lzdGFuY2Ug4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXHJcbiAgLy9cclxuICAvLyB3YXlwb2ludHNKc29uID0gW1tsYXQsIGxuZywgXCJvcnNcInxcImZyZWVcIl0sIOKApl1cclxuICAvLyAgIOKAoiBMZSB0eXBlIGR1IHNlZ21lbnQgTiBlc3QgY2VsdWkgcXVpIHJlbGllIGxlIHBvaW50IE4g4oaSIE4rMVxyXG4gIC8vICAg4oCiIExlIGRlcm5pZXIgw6lsw6ltZW50IG4nYSBwYXMgZGUgc2VnbWVudCBzb3J0YW50LCBvbiBtZXQgbGUgdHlwZSBjb3VyYW50XHJcbiAgLy9cclxuICAvLyByb3V0ZUdlb0pzb24gID0gRmVhdHVyZUNvbGxlY3Rpb24gYXZlYyB1bmUgTGluZVN0cmluZyBmdXNpb25uw6llXHJcbiAgLy9cclxuICBmdW5jdGlvbiBwZXJzaXN0KCkge1xyXG4gICAgLy8gMS4gV2F5cG9pbnRzIGF2ZWMgdHlwZSBkZSBzZWdtZW50XHJcbiAgICBjb25zdCB3cHMgPSBbXTtcclxuICAgIGlmIChjdXJzb3IgfHwgc2VnbWVudHMubGVuZ3RoKSB7XHJcbiAgICAgIGlmIChzZWdtZW50cy5sZW5ndGgpIHtcclxuICAgICAgICBzZWdtZW50cy5mb3JFYWNoKHMgPT4gd3BzLnB1c2goW3MuZnJvbS5sYXQsIHMuZnJvbS5sbmcsIHMudHlwZV0pKTtcclxuICAgICAgICB3cHMucHVzaChbY3Vyc29yLmxhdCwgY3Vyc29yLmxuZywgZnJlZU1vZGUgPyAnZnJlZScgOiAnb3JzJ10pOyAvLyBkZXJuaWVyIHBvaW50XHJcbiAgICAgIH0gZWxzZSBpZiAoY3Vyc29yKSB7XHJcbiAgICAgICAgd3BzLnB1c2goW2N1cnNvci5sYXQsIGN1cnNvci5sbmcsIGZyZWVNb2RlID8gJ2ZyZWUnIDogJ29ycyddKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHdwSW5wdXQpIHdwSW5wdXQudmFsdWUgPSBKU09OLnN0cmluZ2lmeSh3cHMpO1xyXG5cclxuICAgIC8vIDIuIEdlb0pTT04gZnVzaW9ubsOpIOKAlCB1bmUgc2V1bGUgTGluZVN0cmluZ1xyXG4gICAgaWYgKHNlZ21lbnRzLmxlbmd0aCkge1xyXG4gICAgICBjb25zdCBhbGxDb29yZHMgPSBbXTtcclxuICAgICAgc2VnbWVudHMuZm9yRWFjaChzID0+IHtcclxuICAgICAgICBjb25zdCBwdHMgPSBzLnBvaW50cy5tYXAocCA9PiBbcC5sbmcsIHAubGF0XSk7XHJcbiAgICAgICAgYWxsQ29vcmRzLnB1c2goLi4uKGFsbENvb3Jkcy5sZW5ndGggPyBwdHMuc2xpY2UoMSkgOiBwdHMpKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCB0b3RhbERpc3QgPSBzZWdtZW50cy5yZWR1Y2UoKGEsIHMpID0+IGEgKyAocy5kaXN0YW5jZU1ldGVycyAgPz8gMCksIDApO1xyXG4gICAgICBjb25zdCB0b3RhbER1ciAgPSBzZWdtZW50cy5yZWR1Y2UoKGEsIHMpID0+IGEgKyAocy5kdXJhdGlvblNlY29uZHMgPz8gMCksIDApO1xyXG5cclxuICAgICAgaWYgKHJvdXRlSW5wdXQpIHJvdXRlSW5wdXQudmFsdWUgPSBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgdHlwZTogJ0ZlYXR1cmVDb2xsZWN0aW9uJyxcclxuICAgICAgICBmZWF0dXJlczogW3tcclxuICAgICAgICAgIHR5cGU6ICdGZWF0dXJlJyxcclxuICAgICAgICAgIGdlb21ldHJ5OiB7IHR5cGU6ICdMaW5lU3RyaW5nJywgY29vcmRpbmF0ZXM6IGFsbENvb3JkcyB9LFxyXG4gICAgICAgICAgcHJvcGVydGllczogeyBzdW1tYXJ5OiB7IGRpc3RhbmNlOiB0b3RhbERpc3QgLyAxMDAwLCBkdXJhdGlvbjogdG90YWxEdXIgfSB9LFxyXG4gICAgICAgIH1dLFxyXG4gICAgICB9KTtcclxuICAgICAgaWYgKGRpc3RJbnB1dCkgZGlzdElucHV0LnZhbHVlID0gU3RyaW5nKE1hdGgucm91bmQodG90YWxEaXN0KSk7XHJcbiAgICAgIGlmIChkdXJJbnB1dCkgIGR1cklucHV0LnZhbHVlICA9IFN0cmluZyhNYXRoLnJvdW5kKHRvdGFsRHVyKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAocm91dGVJbnB1dCkgcm91dGVJbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgICBpZiAoZGlzdElucHV0KSAgZGlzdElucHV0LnZhbHVlICA9ICcnO1xyXG4gICAgICBpZiAoZHVySW5wdXQpICAgZHVySW5wdXQudmFsdWUgICA9ICcnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g4pSA4pSAIFN0YXRzIFVJIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxyXG4gIGZ1bmN0aW9uIHVwZGF0ZVN0YXRzKCkge1xyXG4gICAgaWYgKCFzZWdtZW50cy5sZW5ndGgpIHtcclxuICAgICAgaWYgKHN0YXRzQm94KSAgIHN0YXRzQm94LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIGlmIChkaXN0YW5jZUVsKSBkaXN0YW5jZUVsLnRleHRDb250ZW50ID0gJ+KAlCc7XHJcbiAgICAgIGlmIChkdXJhdGlvbkVsKSBkdXJhdGlvbkVsLnRleHRDb250ZW50ID0gJ+KAlCc7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IHRvdGFsRGlzdCA9IHNlZ21lbnRzLnJlZHVjZSgoYSwgcykgPT4gYSArIChzLmRpc3RhbmNlTWV0ZXJzICA/PyAwKSwgMCk7XHJcbiAgICBjb25zdCB0b3RhbER1ciAgPSBzZWdtZW50cy5yZWR1Y2UoKGEsIHMpID0+IGEgKyAocy5kdXJhdGlvblNlY29uZHMgPz8gMCksIDApO1xyXG4gICAgaWYgKHN0YXRzQm94KSAgIHN0YXRzQm94LnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWZsZXgnO1xyXG4gICAgaWYgKGRpc3RhbmNlRWwpIGRpc3RhbmNlRWwudGV4dENvbnRlbnQgPSBmbXREaXN0KHRvdGFsRGlzdCk7XHJcbiAgICBpZiAoZHVyYXRpb25FbCkgZHVyYXRpb25FbC50ZXh0Q29udGVudCA9IGZtdER1cih0b3RhbER1cik7XHJcbiAgfVxyXG5cclxuICAvLyDilIDilIAgTGlzdGUgc2VnbWVudHMg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXHJcbiAgZnVuY3Rpb24gcmVuZGVyU2VnTGlzdCgpIHtcclxuICAgIGlmICghc2VnTGlzdEVsKSByZXR1cm47XHJcbiAgICBzZWdMaXN0RWwuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBpZiAoIXNlZ21lbnRzLmxlbmd0aCkge1xyXG4gICAgICBzZWdMaXN0RWwuaW5uZXJIVE1MID0gJzxsaSBjbGFzcz1cInNlZy1lbXB0eVwiPkF1Y3VuIHNlZ21lbnQgcG91ciBsXFwnaW5zdGFudDwvbGk+JztcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgc2VnbWVudHMuZm9yRWFjaCgocywgaSkgPT4ge1xyXG4gICAgICBjb25zdCBpc09SUyA9IHMudHlwZSA9PT0gJ29ycyc7XHJcbiAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgbGkuY2xhc3NOYW1lID0gYHNlZy1pdGVtICR7aXNPUlMgPyAnc2VnLW9ycycgOiAnc2VnLWZyZWUnfWA7XHJcbiAgICAgIGxpLmlubmVySFRNTCA9IGBcclxuICAgICAgICA8c3BhbiBjbGFzcz1cInNlZy1kb3QgJHtpc09SUyA/ICdzZWctZG90LW9ycycgOiAnc2VnLWRvdC1mcmVlJ31cIj48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJzZWctbGFiZWxcIj5TZWdtZW50ICR7aSArIDF9IMK3ICR7Zm10RGlzdChzLmRpc3RhbmNlTWV0ZXJzKX08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJzZWctYmFkZ2UgJHtpc09SUyA/ICdzZWctYmFkZ2Utb3JzJyA6ICdzZWctYmFkZ2UtZnJlZSd9XCI+JHtpc09SUyA/ICdPUlMnIDogJ0xpYnJlJ308L3NwYW4+XHJcbiAgICAgIGA7XHJcbiAgICAgIHNlZ0xpc3RFbC5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIOKUgOKUgCBIaW50ICYgc3RhdHV0IOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxyXG4gIGZ1bmN0aW9uIHVwZGF0ZUhpbnQoKSB7XHJcbiAgICBpZiAoIWhpbnRFbCkgcmV0dXJuO1xyXG4gICAgaWYgKCFjdXJzb3IpICAgICAgIGhpbnRFbC50ZXh0Q29udGVudCA9ICdDbGlxdWUgc3VyIGxhIGNhcnRlIHBvdXIgcG9zZXIgbGUgcHJlbWllciBwb2ludC4nO1xyXG4gICAgZWxzZSBpZiAoZnJlZU1vZGUpIGhpbnRFbC50ZXh0Q29udGVudCA9ICdNb2RlIGxpYnJlIOKAlCBjaGFxdWUgY2xpYyB0cmFjZSB1bmUgbGlnbmUgZGlyZWN0ZS4nO1xyXG4gICAgZWxzZSAgICAgICAgICAgICAgIGhpbnRFbC50ZXh0Q29udGVudCA9ICdDbGlxdWUgcG91ciBham91dGVyIHVuIHBvaW50IOKAlCBPUlMgY2FsY3VsZSBsZSBjaGVtaW4uJztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNldEhpbnQobXNnKSB7IGlmIChoaW50RWwpIGhpbnRFbC50ZXh0Q29udGVudCA9IG1zZzsgfVxyXG5cclxuICBmdW5jdGlvbiBzZXRTdGF0dXModHlwZSkge1xyXG4gICAgaWYgKCFzdGF0dXNCYXJFbCkgcmV0dXJuO1xyXG4gICAgc3RhdHVzQmFyRWwuY2xhc3NOYW1lID0gJ21hcC1zdGF0dXMnO1xyXG4gICAgc3RhdHVzQmFyRWwuaGlkZGVuICAgID0gZmFsc2U7XHJcbiAgICBpZiAodHlwZSA9PT0gJ2hpZGUnKSB7IHN0YXR1c0JhckVsLmhpZGRlbiA9IHRydWU7IHJldHVybjsgfVxyXG4gICAgY29uc3QgY2xzID0geyBsb2FkOiAnbWFwLXN0YXR1cy0tbG9hZCcsIG9yczogJ21hcC1zdGF0dXMtLW9ycycsIGZyZWU6ICdtYXAtc3RhdHVzLS1mcmVlJyB9O1xyXG4gICAgY29uc3QgdHh0ID0ge1xyXG4gICAgICBsb2FkOiAnPHNwYW4gY2xhc3M9XCJtYXAtc3RhdHVzX19zcGluXCI+PC9zcGFuPkNhbGN1bCBlbiBjb3Vyc+KApicsXHJcbiAgICAgIG9yczogICc8c3BhbiBjbGFzcz1cIm1hcC1zdGF0dXNfX2RvdFwiPjwvc3Bhbj5Nb2RlIENhbGN1bCBhY3RpZicsXHJcbiAgICAgIGZyZWU6ICc8c3BhbiBjbGFzcz1cIm1hcC1zdGF0dXNfX2RvdFwiPjwvc3Bhbj5Nb2RlIExpYnJlIGFjdGlmJyxcclxuICAgIH07XHJcbiAgICBzdGF0dXNCYXJFbC5jbGFzc0xpc3QuYWRkKGNsc1t0eXBlXSk7XHJcbiAgICBzdGF0dXNCYXJFbC5pbm5lckhUTUwgPSB0eHRbdHlwZV07XHJcbiAgfVxyXG5cclxuICAvLyDilIDilIAgRm9ybWF0dGVycyDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcclxuICBmdW5jdGlvbiBmbXREaXN0KG0pIHtcclxuICAgIGlmIChtID09IG51bGwpIHJldHVybiAn4oCUJztcclxuICAgIHJldHVybiBtIDwgMTAwMCA/IGAke01hdGgucm91bmQobSl9IG1gIDogYCR7KG0gLyAxMDAwKS50b0ZpeGVkKDIpLnJlcGxhY2UoJy4nLCAnLCcpfSBrbWA7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBmbXREdXIocykge1xyXG4gICAgaWYgKHMgPT0gbnVsbCkgcmV0dXJuICfigJQnO1xyXG4gICAgcyA9IE1hdGgucm91bmQocyk7XHJcbiAgICBjb25zdCBoID0gTWF0aC5mbG9vcihzIC8gMzYwMCksIG0gPSBNYXRoLmZsb29yKChzICUgMzYwMCkgLyA2MCk7XHJcbiAgICByZXR1cm4gaCA8PSAwID8gYCR7bX0gbWluYCA6IGAke2h9IGggJHtTdHJpbmcobSkucGFkU3RhcnQoMiwgJzAnKX0gbWluYDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHRyeVBhcnNlKHN0cikge1xyXG4gICAgdHJ5IHsgcmV0dXJuIEpTT04ucGFyc2Uoc3RyKTsgfSBjYXRjaCB7IHJldHVybiBudWxsOyB9XHJcbiAgfVxyXG5cclxuICAvLyDilIDilIAgQmluZGluZ3Mg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXHJcbiAgYnRuVW5kbz8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB1bmRvTGFzdCk7XHJcbiAgYnRuQ2xvc2U/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VMb29wKTtcclxuICBidG5DbGVhcj8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGVhckFsbCk7XHJcbiAgYnRuRnJlZVRvZ2dsZT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVGcmVlKTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1vcnMtcHJvZmlsZV0nKS5mb3JFYWNoKGVsID0+XHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNldFByb2ZpbGUoZWwuZGF0YXNldC5vcnNQcm9maWxlKSlcclxuICApO1xyXG5cclxuICAvLyDilIDilIAgUmVzdGF1cmF0aW9uIChtb2RlIMOpZGl0aW9uKSDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcclxuICAvL1xyXG4gIC8vIE9uIHJlbGl0IHdheXBvaW50c0pzb24gPSBbW2xhdCwgbG5nLCBcIm9yc1wifFwiZnJlZVwiXSwg4oCmXVxyXG4gIC8vIFBvdXIgY2hhcXVlIHBhaXJlIGRlIHBvaW50cyBjb25zw6ljdXRpZnMsIG9uIHJlY3LDqWUgbGUgc2VnbWVudCB2aXN1ZWxsZW1lbnQuXHJcbiAgLy9cclxuICAvLyBQb3VyIGxlcyBzZWdtZW50cyBPUlMgOiBvbiBuZSByYXBwZWxsZSBQQVMgbCdBUEkgKHRyb3AgY2/Du3RldXggYXUgY2hhcmdlbWVudCkuXHJcbiAgLy8gT24gYWZmaWNoZSBkaXJlY3RlbWVudCBsZSByb3V0ZUdlb0pzb24gZMOpasOgIHNhdXZlZ2FyZMOpLCBldCBvbiByZWNvbnN0aXR1ZVxyXG4gIC8vIGxlcyB3YXlwb2ludHMvbWFya2VycyBwb3VyIHBlcm1ldHRyZSBsJ8OpZGl0aW9uIChham91dC9hbm51bGF0aW9uKS5cclxuICAvL1xyXG4gIGNvbnN0IHNhdmVkV3AgID0gY2ZnLmluaXRpYWxXYXlwb2ludHMgICAgPz8gdHJ5UGFyc2Uod3BJbnB1dD8udmFsdWUgICAgPz8gJycpO1xyXG4gIGNvbnN0IHNhdmVkR2VvID0gY2ZnLmluaXRpYWxSb3V0ZUdlb0pzb24gPz8gdHJ5UGFyc2Uocm91dGVJbnB1dD8udmFsdWUgPz8gJycpO1xyXG5cclxuICBpZiAoQXJyYXkuaXNBcnJheShzYXZlZFdwKSAmJiBzYXZlZFdwLmxlbmd0aCA+PSAyICYmIHNhdmVkR2VvKSB7XHJcbiAgICAvLyBBZmZpY2hlciBsZSB0cmFjw6kgR2VvSlNPTiBzYXV2ZWdhcmTDqSB0ZWwgcXVlbCAodmVydCBwbGVpbilcclxuICAgIHRyeSB7XHJcbiAgICAgIHJlc3RvcmF0aW9uTGF5ZXIgPSBMLmdlb0pTT04oc2F2ZWRHZW8sIHtcclxuICAgICAgICBzdHlsZTogKCkgPT4gKHsgY29sb3I6ICcjNGE3YzU5Jywgd2VpZ2h0OiA1LCBvcGFjaXR5OiAuOSwgbGluZUNhcDogJ3JvdW5kJyB9KSxcclxuICAgICAgfSkuYWRkVG8obWFwKTtcclxuICAgICAgLy8gVmlkZXIgY2ZnIHBvdXIgw6l2aXRlciB0b3V0ZSByw6l1dGlsaXNhdGlvbiBhcHLDqHMgY2xlYXJBbGxcclxuICAgICAgaWYgKGNmZy5pbml0aWFsUm91dGVHZW9Kc29uKSBjZmcuaW5pdGlhbFJvdXRlR2VvSnNvbiA9IG51bGw7XHJcbiAgICB9IGNhdGNoIChlKSB7IGNvbnNvbGUud2FybignW2JhbGFkZS1tYXBdIEdlb0pTT04gaW52YWxpZGUnLCBlKTsgfVxyXG5cclxuICAgIC8vIFJlc3RhdXJlciBsZXMgbWFycXVldXJzIGRlIHdheXBvaW50cyBwb3VyIHBlcm1ldHRyZSBsJ8OpZGl0aW9uXHJcbiAgICBzYXZlZFdwLmZvckVhY2goKHAsIGkpID0+IHtcclxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHApIHx8IHAubGVuZ3RoIDwgMikgcmV0dXJuO1xyXG4gICAgICBjb25zdCBsbCA9IEwubGF0TG5nKHBbMF0sIHBbMV0pO1xyXG4gICAgICBpZiAoaSA9PT0gMCkge1xyXG4gICAgICAgIGN1cnNvciA9IGxsO1xyXG4gICAgICAgIHN0YXJ0TWFya2VyID0gTC5tYXJrZXIobGwsIHsgaWNvbjogSUMuc3RhcnQgfSkuYWRkVG8obWFwKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBSZWNyw6llciB1biBzZWdtZW50IFwiZmFudMO0bWVcIiBzYW5zIGxheWVyIHByb3ByZVxyXG4gICAgICAgIC8vIChsZSBsYXllciBlc3QgZMOpasOgIGFmZmljaMOpIHZpYSBsZSBHZW9KU09OIGdsb2JhbClcclxuICAgICAgICBjb25zdCBwcmV2ID0gc2F2ZWRXcFtpIC0gMV07XHJcbiAgICAgICAgY29uc3QgZnJvbSA9IEwubGF0TG5nKHByZXZbMF0sIHByZXZbMV0pO1xyXG4gICAgICAgIGNvbnN0IHR5cGUgPSBwcmV2WzJdID8/ICdvcnMnO1xyXG4gICAgICAgIHNlZ21lbnRzLnB1c2goe1xyXG4gICAgICAgICAgdHlwZSwgZnJvbSwgdG86IGxsLFxyXG4gICAgICAgICAgcG9pbnRzOiBbZnJvbSwgbGxdLCAgLy8gYXBwcm94aW1hdGlmLCBzdWZmaXQgcG91ciB1bmRvL3BlcnNpc3RcclxuICAgICAgICAgIGxheWVyczogW10sICAgICAgICAgICAvLyBsYXllcnMgdmlkZXMgY2FyIGxlIEdlb0pTT04gZXN0IGTDqWrDoCBhZmZpY2jDqVxyXG4gICAgICAgICAgZGlzdGFuY2VNZXRlcnM6ICBmcm9tLmRpc3RhbmNlVG8obGwpLFxyXG4gICAgICAgICAgZHVyYXRpb25TZWNvbmRzOiAoZnJvbS5kaXN0YW5jZVRvKGxsKSAvIDEwMDAgLyA0KSAqIDM2MDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbW92ZUN1cnNvcihsbCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIG1hcC5maXRCb3VuZHMoTC5sYXRMbmdCb3VuZHMoc2F2ZWRXcC5tYXAocCA9PiBMLmxhdExuZyhwWzBdLCBwWzFdKSkpLCB7IHBhZGRpbmc6IFszMCwgMzBdIH0pO1xyXG4gICAgc2V0U3RhdHVzKGZyZWVNb2RlID8gJ2ZyZWUnIDogJ29ycycpO1xyXG5cclxuICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoc2F2ZWRXcCkgJiYgc2F2ZWRXcC5sZW5ndGggPT09IDEpIHtcclxuICAgIC8vIFVuIHNldWwgcG9pbnQgcG9zw6ksIHBhcyBlbmNvcmUgZGUgc2VnbWVudFxyXG4gICAgY29uc3QgbGwgPSBMLmxhdExuZyhzYXZlZFdwWzBdWzBdLCBzYXZlZFdwWzBdWzFdKTtcclxuICAgIGN1cnNvciA9IGxsO1xyXG4gICAgc3RhcnRNYXJrZXIgPSBMLm1hcmtlcihsbCwgeyBpY29uOiBJQy5zdGFydCB9KS5hZGRUbyhtYXApO1xyXG4gICAgbWFwLnNldFZpZXcobGwsIDE1KTtcclxuICAgIHNldFN0YXR1cyhmcmVlTW9kZSA/ICdmcmVlJyA6ICdvcnMnKTtcclxuICB9XHJcblxyXG4gIC8vIFJlc3RhdXJlciBkaXN0YW5jZS9kdXLDqWUgYWZmaWNow6llc1xyXG4gIGNvbnN0IGV4aXN0aW5nRGlzdCA9IGNmZy5pbml0aWFsRGlzdGFuY2UgPz8gKGRpc3RJbnB1dD8udmFsdWUgID8gcGFyc2VGbG9hdChkaXN0SW5wdXQudmFsdWUpICA6IG51bGwpO1xyXG4gIGNvbnN0IGV4aXN0aW5nRHVyICA9IGNmZy5pbml0aWFsRHVyYXRpb24gPz8gKGR1cklucHV0Py52YWx1ZSAgID8gcGFyc2VGbG9hdChkdXJJbnB1dC52YWx1ZSkgICA6IG51bGwpO1xyXG4gIGlmIChleGlzdGluZ0Rpc3QgIT0gbnVsbCAmJiBzZWdtZW50cy5sZW5ndGgpIHtcclxuICAgIGlmIChzdGF0c0JveCkgICBzdGF0c0JveC5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1mbGV4JztcclxuICAgIGlmIChkaXN0YW5jZUVsKSBkaXN0YW5jZUVsLnRleHRDb250ZW50ID0gZm10RGlzdChleGlzdGluZ0Rpc3QpO1xyXG4gICAgaWYgKGR1cmF0aW9uRWwpIGR1cmF0aW9uRWwudGV4dENvbnRlbnQgPSBmbXREdXIoZXhpc3RpbmdEdXIpO1xyXG4gIH1cclxuXHJcbiAgc2V0UHJvZmlsZShvcnNQcm9maWxlKTtcclxuICByZW5kZXJTZWdMaXN0KCk7XHJcbiAgdXBkYXRlSGludCgpO1xyXG59IiwiaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XHJcblxyXG5pbXBvcnQgTCBmcm9tICdsZWFmbGV0JztcclxuaW1wb3J0ICdsZWFmbGV0L2Rpc3QvbGVhZmxldC5jc3MnO1xyXG5cclxuaW1wb3J0ICdsZWFmbGV0LWRyYXcnO1xyXG5pbXBvcnQgJ2xlYWZsZXQtZHJhdy9kaXN0L2xlYWZsZXQuZHJhdy5jc3MnO1xyXG5cclxuaW1wb3J0ICdsZWFmbGV0LXJvdXRpbmctbWFjaGluZSc7XHJcbmltcG9ydCAnbGVhZmxldC1yb3V0aW5nLW1hY2hpbmUvZGlzdC9sZWFmbGV0LXJvdXRpbmctbWFjaGluZS5jc3MnO1xyXG5cclxuaW1wb3J0IG1hcmtlckljb24gZnJvbSAnbGVhZmxldC9kaXN0L2ltYWdlcy9tYXJrZXItaWNvbi5wbmcnO1xyXG5pbXBvcnQgbWFya2VyU2hhZG93IGZyb20gJ2xlYWZsZXQvZGlzdC9pbWFnZXMvbWFya2VyLXNoYWRvdy5wbmcnO1xyXG5cclxuZGVsZXRlIEwuSWNvbi5EZWZhdWx0LnByb3RvdHlwZS5fZ2V0SWNvblVybDtcclxuTC5JY29uLkRlZmF1bHQubWVyZ2VPcHRpb25zKHtcclxuICBpY29uVXJsOiBtYXJrZXJJY29uLFxyXG4gIHNoYWRvd1VybDogbWFya2VyU2hhZG93LFxyXG59KTtcclxuXHJcbndpbmRvdy5MID0gTDtcclxuXHJcbmltcG9ydCB7IGluaXRCYWxhZGVNYXAgfSBmcm9tICcuL0phdmFzY3JpcHQvYmFsYWRlLW1hcC5qcyc7XHJcbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJykpIHtcclxuICAgIGluaXRCYWxhZGVNYXAoKTtcclxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJlIiwidCIsInIiLCJTeW1ib2wiLCJuIiwiaXRlcmF0b3IiLCJvIiwidG9TdHJpbmdUYWciLCJpIiwiYyIsInByb3RvdHlwZSIsIkdlbmVyYXRvciIsInUiLCJPYmplY3QiLCJjcmVhdGUiLCJfcmVnZW5lcmF0b3JEZWZpbmUyIiwiZiIsInAiLCJ5IiwiRyIsInYiLCJhIiwiZCIsImJpbmQiLCJsZW5ndGgiLCJsIiwiVHlwZUVycm9yIiwiY2FsbCIsImRvbmUiLCJ2YWx1ZSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJnZXRQcm90b3R5cGVPZiIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiZGlzcGxheU5hbWUiLCJfcmVnZW5lcmF0b3IiLCJ3IiwibSIsImRlZmluZVByb3BlcnR5IiwiX3JlZ2VuZXJhdG9yRGVmaW5lIiwiX2ludm9rZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIl90b0NvbnN1bWFibGVBcnJheSIsIl9hcnJheVdpdGhvdXRIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXkiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVTcHJlYWQiLCJBcnJheSIsImZyb20iLCJpc0FycmF5IiwiX2FycmF5TGlrZVRvQXJyYXkiLCJvd25LZXlzIiwia2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsImZpbHRlciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInB1c2giLCJhcHBseSIsIl9vYmplY3RTcHJlYWQiLCJhcmd1bWVudHMiLCJmb3JFYWNoIiwiX2RlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJfdG9Qcm9wZXJ0eUtleSIsIl90b1ByaW1pdGl2ZSIsIl90eXBlb2YiLCJ0b1ByaW1pdGl2ZSIsIlN0cmluZyIsIk51bWJlciIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX25leHQiLCJfdGhyb3ciLCJfc2xpY2VkVG9BcnJheSIsIl9hcnJheVdpdGhIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXlMaW1pdCIsIl9ub25JdGVyYWJsZVJlc3QiLCJ0b1N0cmluZyIsInNsaWNlIiwiY29uc3RydWN0b3IiLCJuYW1lIiwidGVzdCIsIm5leHQiLCJpbml0QmFsYWRlTWFwIiwiX2NmZyRkZWZhdWx0VmlldyIsIl9jZmckb3JzUHJvZmlsZSIsIl9jZmckaW5pdGlhbFdheXBvaW50cyIsIl93cElucHV0JHZhbHVlIiwiX2NmZyRpbml0aWFsUm91dGVHZW9KIiwiX3JvdXRlSW5wdXQkdmFsdWUiLCJfY2ZnJGluaXRpYWxEaXN0YW5jZSIsIl9jZmckaW5pdGlhbER1cmF0aW9uIiwiY2ZnIiwid2luZG93IiwiQkFMQURFX01BUF9DT05GSUciLCJfcmVmIiwiZGVmYXVsdFZpZXciLCJfcmVmMiIsImRlZkxhdCIsImRlZkxuZyIsImRlZlpvb20iLCJtYXAiLCJMIiwiZG91YmxlQ2xpY2tab29tIiwic2V0VmlldyIsInNldFRpbWVvdXQiLCJpbnZhbGlkYXRlU2l6ZSIsInRpbGVMYXllciIsImF0dHJpYnV0aW9uIiwibWF4Wm9vbSIsImFkZFRvIiwid3BJbnB1dCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb3V0ZUlucHV0IiwiZGlzdElucHV0IiwiZHVySW5wdXQiLCJidG5VbmRvIiwiYnRuQ2xvc2UiLCJidG5DbGVhciIsImJ0bkZyZWVUb2dnbGUiLCJwaWxsRWwiLCJmcmVlRGVzY0VsIiwiaGludEVsIiwic3RhdHVzQmFyRWwiLCJzdGF0c0JveCIsImRpc3RhbmNlRWwiLCJkdXJhdGlvbkVsIiwic2VnTGlzdEVsIiwib3JzUHJvZmlsZSIsImZyZWVNb2RlIiwiY3Vyc29yIiwic2VnbWVudHMiLCJzdGFydE1hcmtlciIsImN1cnNvck1rIiwicHJldmlld0xpbmUiLCJvcnNTZXEiLCJyZXN0b3JhdGlvbkxheWVyIiwibWFrZVBpbiIsImJnIiwiZW1vamkiLCJkaXZJY29uIiwiaHRtbCIsImNvbmNhdCIsImNsYXNzTmFtZSIsImljb25TaXplIiwiaWNvbkFuY2hvciIsIklDIiwic3RhcnQiLCJvbiIsImxhdGxuZyIsIm1hcmtlciIsImljb24iLCJzZXRTdGF0dXMiLCJhZGRGcmVlU2VnIiwiYWRkT1JTU2VnIiwidXBkYXRlSGludCIsInJlbmRlclNlZ0xpc3QiLCJwZXJzaXN0IiwicmVtb3ZlTGF5ZXIiLCJwb2x5bGluZSIsImNvbG9yIiwid2VpZ2h0Iiwib3BhY2l0eSIsImRhc2hBcnJheSIsImxpbmVDYXAiLCJ0byIsImNsZWFyTGF5ZXJzIiwicmVtb3ZlIiwicHRzIiwibGF5ZXJzIiwiZHJhd1BvbHkiLCJkaXN0TSIsImRpc3RhbmNlVG8iLCJ0eXBlIiwicG9pbnRzIiwiZGlzdGFuY2VNZXRlcnMiLCJkdXJhdGlvblNlY29uZHMiLCJtb3ZlQ3Vyc29yIiwidXBkYXRlU3RhdHMiLCJfeCIsIl94MiIsIl9hZGRPUlNTZWciLCJfY2FsbGVlIiwic2VxIiwiX2RhdGEkZ2VvanNvbiRnZW9tZXRyIiwiX2RhdGEkZ2VvanNvbiIsIl9kYXRhJGRpc3RhbmNlIiwiX2RhdGEkZHVyYXRpb24iLCJyZXMiLCJkYXRhIiwiY29vcmRzIiwiZHVyUyIsIl90IiwiX2NvbnRleHQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImxhdCIsImxuZyIsInByb2ZpbGUiLCJqc29uIiwib2siLCJjb25zb2xlIiwiZXJyb3IiLCJzZXRIaW50IiwiZ2VvanNvbiIsImdlb21ldHJ5IiwiY29vcmRpbmF0ZXMiLCJsYXRMbmciLCJkaXN0YW5jZSIsImR1cmF0aW9uIiwic2hhZG93IiwibGluZSIsImxpbmVKb2luIiwicmVtb3ZlTGF5ZXJzIiwibGwiLCJjbG9zZUxvb3AiLCJmaXJzdCIsInNhbWUiLCJNYXRoIiwiYWJzIiwidW5kb0xhc3QiLCJzZWciLCJwb3AiLCJjbGVhckFsbCIsImVhY2hMYXllciIsInMiLCJQb2x5bGluZSIsIkdlb0pTT04iLCJ0b2dnbGVGcmVlIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwidGV4dENvbnRlbnQiLCJnZXRDb250YWluZXIiLCJzdHlsZSIsInNldFByb2ZpbGUiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWwiLCJkYXRhc2V0Iiwid3BzIiwiYWxsQ29vcmRzIiwidG90YWxEaXN0IiwicmVkdWNlIiwiX3MkZGlzdGFuY2VNZXRlcnMiLCJ0b3RhbER1ciIsIl9zJGR1cmF0aW9uU2Vjb25kcyIsImZlYXR1cmVzIiwicHJvcGVydGllcyIsInN1bW1hcnkiLCJyb3VuZCIsImRpc3BsYXkiLCJfcyRkaXN0YW5jZU1ldGVyczIiLCJfcyRkdXJhdGlvblNlY29uZHMyIiwiZm10RGlzdCIsImZtdER1ciIsImlubmVySFRNTCIsImlzT1JTIiwibGkiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJtc2ciLCJoaWRkZW4iLCJjbHMiLCJsb2FkIiwib3JzIiwiZnJlZSIsInR4dCIsImFkZCIsInRvRml4ZWQiLCJyZXBsYWNlIiwiaCIsImZsb29yIiwicGFkU3RhcnQiLCJ0cnlQYXJzZSIsInN0ciIsInBhcnNlIiwiX3VudXNlZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzYXZlZFdwIiwiaW5pdGlhbFdheXBvaW50cyIsInNhdmVkR2VvIiwiaW5pdGlhbFJvdXRlR2VvSnNvbiIsImdlb0pTT04iLCJ3YXJuIiwiX3ByZXYkIiwicHJldiIsImZpdEJvdW5kcyIsImxhdExuZ0JvdW5kcyIsInBhZGRpbmciLCJleGlzdGluZ0Rpc3QiLCJpbml0aWFsRGlzdGFuY2UiLCJwYXJzZUZsb2F0IiwiZXhpc3RpbmdEdXIiLCJpbml0aWFsRHVyYXRpb24iLCJtYXJrZXJJY29uIiwibWFya2VyU2hhZG93IiwiSWNvbiIsIkRlZmF1bHQiLCJfZ2V0SWNvblVybCIsIm1lcmdlT3B0aW9ucyIsImljb25VcmwiLCJzaGFkb3dVcmwiXSwic291cmNlUm9vdCI6IiJ9