(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["utils-MergePropsIntoChildren"],{

/***/ "./src/components/utils/MergePropsIntoChildren/index.js":
/*!**************************************************************!*\
  !*** ./src/components/utils/MergePropsIntoChildren/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};




var PropsToChildren = function PropsToChildren(_ref) {
  var props = _extends({}, _ref);

  var addedProps = props.addedProps,
      children = props.children;
  var cleanProps = Object(ramda__WEBPACK_IMPORTED_MODULE_1__["omit"])(['addedProps', 'children'], props);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(children, function (Child) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(Child, _objectSpread({}, addedProps, {}, cleanProps, {}, Child.props));
  }));
};

var _default = PropsToChildren;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(PropsToChildren, "PropsToChildren", "/home/gooseware/repos/gooseware/cadeau/src/components/utils/MergePropsIntoChildren/index.js");
  reactHotLoader.register(_default, "default", "/home/gooseware/repos/gooseware/cadeau/src/components/utils/MergePropsIntoChildren/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91dGlscy9NZXJnZVByb3BzSW50b0NoaWxkcmVuL2luZGV4LmpzIl0sIm5hbWVzIjpbIlByb3BzVG9DaGlsZHJlbiIsInByb3BzIiwiYWRkZWRQcm9wcyIsImNoaWxkcmVuIiwiY2xlYW5Qcm9wcyIsIm9taXQiLCJSZWFjdCIsIkNoaWxkcmVuIiwibWFwIiwiQ2hpbGQiLCJjbG9uZUVsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsT0FBZ0I7QUFBQSxNQUFYQyxLQUFXOztBQUFBLE1BQzlCQyxVQUQ4QixHQUNMRCxLQURLLENBQzlCQyxVQUQ4QjtBQUFBLE1BQ2xCQyxRQURrQixHQUNMRixLQURLLENBQ2xCRSxRQURrQjtBQUV0QyxNQUFNQyxVQUFVLEdBQUdDLGtEQUFJLENBQUMsQ0FBQyxZQUFELEVBQWUsVUFBZixDQUFELEVBQTZCSixLQUE3QixDQUF2QjtBQUNBLFNBQ0UsMkRBQUMsOENBQUQsUUFDR0ssNENBQUssQ0FBQ0MsUUFBTixDQUFlQyxHQUFmLENBQW1CTCxRQUFuQixFQUE2QixVQUFDTSxLQUFELEVBQVc7QUFDdkMsV0FBT0gsNENBQUssQ0FBQ0ksWUFBTixDQUFtQkQsS0FBbkIsb0JBQStCUCxVQUEvQixNQUE4Q0UsVUFBOUMsTUFBNkRLLEtBQUssQ0FBQ1IsS0FBbkUsRUFBUDtBQUNELEdBRkEsQ0FESCxDQURGO0FBT0QsQ0FWRDs7ZUFZZUQsZTtBQUFBOzs7Ozs7Ozs7OzBCQVpUQSxlIiwiZmlsZSI6InV0aWxzLU1lcmdlUHJvcHNJbnRvQ2hpbGRyZW4uY2h1bmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIENoaWxkcmVuIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBvbWl0IH0gZnJvbSAncmFtZGEnXG5cbmNvbnN0IFByb3BzVG9DaGlsZHJlbiA9ICh7Li4ucHJvcHN9KSA9PiB7XG4gIGNvbnN0IHsgYWRkZWRQcm9wcywgY2hpbGRyZW4gfSA9IHByb3BzXG4gIGNvbnN0IGNsZWFuUHJvcHMgPSBvbWl0KFsnYWRkZWRQcm9wcycsICdjaGlsZHJlbiddLCBwcm9wcylcbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICB7UmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoQ2hpbGQpID0+IHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChDaGlsZCwgeyAuLi5hZGRlZFByb3BzLCAuLi5jbGVhblByb3BzLCAuLi5DaGlsZC5wcm9wcyB9KVxuICAgICAgfSl9XG4gICAgPC9GcmFnbWVudD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9wc1RvQ2hpbGRyZW5cbiJdLCJzb3VyY2VSb290IjoiIn0=