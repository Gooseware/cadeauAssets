(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["utils-GetLocation"],{

/***/ "./src/components/utils/GetLocation/index.js":
/*!***************************************************!*\
  !*** ./src/components/utils/GetLocation/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

var _default = function _default(success, failure) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, failure);
  } else {
    failure();
  }
};

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/home/gooseware/repos/gooseware/cadeau/src/components/utils/GetLocation/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91dGlscy9HZXRMb2NhdGlvbi9pbmRleC5qcyJdLCJuYW1lcyI6WyJzdWNjZXNzIiwiZmFpbHVyZSIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwiZ2V0Q3VycmVudFBvc2l0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQUFlLGtCQUFDQSxPQUFELEVBQVVDLE9BQVYsRUFBc0I7QUFDbkMsTUFBSUMsU0FBUyxDQUFDQyxXQUFkLEVBQTJCO0FBQ3pCRCxhQUFTLENBQUNDLFdBQVYsQ0FBc0JDLGtCQUF0QixDQUF5Q0osT0FBekMsRUFBa0RDLE9BQWxEO0FBQ0QsR0FGRCxNQUVPO0FBQ0xBLFdBQU87QUFDUjtBQUNGLEM7O0FBTmMiLCJmaWxlIjoidXRpbHMtR2V0TG9jYXRpb24uY2h1bmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoc3VjY2VzcywgZmFpbHVyZSkgPT4ge1xuICBpZiAobmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XG4gICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihzdWNjZXNzLCBmYWlsdXJlKVxuICB9IGVsc2Uge1xuICAgIGZhaWx1cmUoKVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9