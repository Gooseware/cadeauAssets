webpackHotUpdate("main",{

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module, __dirname) {/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-plugin-universal-import/universalImport */ "./node_modules/babel-plugin-universal-import/universalImport.js");
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-loader/root */ "./node_modules/react-hot-loader/root.js");
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-universal-component */ "./node_modules/react-universal-component/dist/index.js");
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_universal_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _css_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/App */ "./src/css/App.styl");
/* harmony import */ var _css_App__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_App__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");
/* harmony import */ var _Pages_Home__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Pages/Home */ "./src/components/Pages/Home/index.js");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Loading */ "./src/components/Loading.js");
/* harmony import */ var _NotFound__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./NotFound */ "./src/components/NotFound.js");



(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};


 //import { connect, Provider } from 'react-redux'






 //import configureStore from '../store/configure'
//const store = configureStore();

var determineHowToLoad = function determineHowToLoad(_ref) {
  var page = _ref.page;
  return typeof page !== 'string' ? function () {
    return page();
  } : babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
    id: "./${page}",
    load: function load() {
      return Promise.all([__webpack_require__("./src/components lazy recursive ^\\.\\/.*$")("./".concat(page))]).then(function (proms) {
        return proms[0];
      });
    },
    path: function path() {
      return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, "./".concat(page));
    },
    resolve: function resolve() {
      return /*require.resolve*/(__webpack_require__("./src/components weak recursive ^\\.\\/.*$").resolve("./".concat(page)));
    },
    chunkName: function chunkName() {
      return "".concat(page);
    }
  });
};

var UniversalComponent = react_universal_component__WEBPACK_IMPORTED_MODULE_4___default()(determineHowToLoad, {
  onError: function onError(error) {
    throw error;
  },
  minDelay: 1200,
  loading: _Loading__WEBPACK_IMPORTED_MODULE_8__["default"],
  error: _NotFound__WEBPACK_IMPORTED_MODULE_9__["default"]
});
console.log(_css_App__WEBPACK_IMPORTED_MODULE_5___default.a, _css_App__WEBPACK_IMPORTED_MODULE_5___default.a.toString());

var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  _createClass(App, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          index = _this$state.index,
          done = _this$state.done,
          loading = _this$state.loading;
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("style", null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(UniversalComponent, {
        page: "Pages/Home",
        onBefore: this.beforeChange,
        onAfter: this.afterChange,
        onError: this.handleError
      }));
    }
  }]);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "changePage", function () {
      var _this$state2 = _this.state,
          loading = _this$state2.loading,
          index = _this$state2.index;
      var history = _this.props.history;
      if (loading) return;
      var idx = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["nextIndex"])(index);
      var page = _utils__WEBPACK_IMPORTED_MODULE_6__["pages"][idx];
      history.push("/".concat(page));
    });

    _defineProperty(_assertThisInitialized(_this), "beforeChange", function (_ref2) {
      var isSync = _ref2.isSync;

      if (!isSync) {
        _this.setState({
          loading: true,
          error: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "afterChange", function (_ref3) {
      var isSync = _ref3.isSync,
          isServer = _ref3.isServer,
          isMount = _ref3.isMount;

      if (!isSync) {
        _this.setState({
          loading: false,
          error: false
        });
      } else if (!isServer && !isMount) {
        _this.setState({
          done: true,
          error: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleError", function (error) {
      _this.setState({
        error: true,
        loading: false
      });
    });

    _this.state = {
      loading: false,
      done: false,
      error: false
    };
    return _this;
  }

  _createClass(App, [{
    key: "buttonText",
    value: function buttonText() {
      var _this$state3 = this.state,
          loading = _this$state3.loading,
          error = _this$state3.error;
      if (error) return 'ERROR';
      return loading ? 'LOADING...' : 'CHANGE PAGE';
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component); // const Apps = connect((store) => {return { page:store.routes }} )(App)
// const Provided = () => (<Provider store={store}><Apps /></Provider>)


var _default = Object(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_3__["hot"])(App);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(determineHowToLoad, "determineHowToLoad", "/home/gooseware/repos/gooseware/cadeau/src/components/App.js");
  reactHotLoader.register(UniversalComponent, "UniversalComponent", "/home/gooseware/repos/gooseware/cadeau/src/components/App.js");
  reactHotLoader.register(App, "App", "/home/gooseware/repos/gooseware/cadeau/src/components/App.js");
  reactHotLoader.register(_default, "default", "/home/gooseware/repos/gooseware/cadeau/src/components/App.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module), "/"))

/***/ }),

/***/ "./src/css/App.styl":
/*!**************************!*\
  !*** ./src/css/App.styl ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {"logo":"App__logo--2wMjS","logoBottom":"App__logoBottom--1EtUe","item":"App__item--C8pUF","itemScroll":"App__itemScroll--2-owK","button":"App__button--20ndb","medium":"App__medium--3B333","socialMedia":"App__socialMedia---uyx2","socialLayout":"App__socialLayout--2adSt"};
    if(true) {
      // 1579001826713
      var cssReload = __webpack_require__(/*! ./node_modules/extract-css-chunks-webpack-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/extract-css-chunks-webpack-plugin/dist/hmr/hotModuleReplacement.js")(module.i, {"hot":true,"reloadAll":true,"locals":true});
      module.hot.dispose(cssReload);
      
    }
  

/***/ }),

/***/ "./src/css/Loading.styl":
/*!******************************!*\
  !*** ./src/css/Loading.styl ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {"Foo":"Loading__Foo--19wsh","fade-Foo":"Loading__fade-Foo--zQY81","Bar":"Loading__Bar--2CNk6","fade-Bar":"Loading__fade-Bar--2lL-g","Baz":"Loading__Baz--1Ogq_","fade-Baz":"Loading__fade-Baz--4tdPE","Rudy":"Loading__Rudy--14fup","fade-Rudy":"Loading__fade-Rudy--1Uh0e","Example":"Loading__Example--2_6x-","fade-Example":"Loading__fade-Example--1i_lJ","ReduxFirstRouter":"Loading__ReduxFirstRouter--2GRtn","fade-ReduxFirstRouter":"Loading__fade-ReduxFirstRouter--3Ruph","Universal":"Loading__Universal--2rG8S","fade-Universal":"Loading__fade-Universal--1ju0i","FaceySpacey":"Loading__FaceySpacey--1LcC4","fade-FaceySpacey":"Loading__fade-FaceySpacey--3bzqE","spinner":"Loading__spinner--23XF9","spin":"Loading__spin--3IDJM"};
    if(true) {
      // 1579001827009
      var cssReload = __webpack_require__(/*! ./node_modules/extract-css-chunks-webpack-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/extract-css-chunks-webpack-plugin/dist/hmr/hotModuleReplacement.js")(module.i, {"hot":true,"reloadAll":true,"locals":true});
      module.hot.dispose(cssReload);
      
    }
  

/***/ }),

/***/ "./src/css/NotFound.styl":
/*!*******************************!*\
  !*** ./src/css/NotFound.styl ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {"container":"NotFound__container--2k0Pn"};
    if(true) {
      // 1579001827045
      var cssReload = __webpack_require__(/*! ./node_modules/extract-css-chunks-webpack-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/extract-css-chunks-webpack-plugin/dist/hmr/hotModuleReplacement.js")(module.i, {"hot":true,"reloadAll":true,"locals":true});
      module.hot.dispose(cssReload);
      
    }
  

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9BcHAuc3R5bD80ZWJmIiwid2VicGFjazovLy8uL3NyYy9jc3MvTG9hZGluZy5zdHlsPzYzMzIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9Ob3RGb3VuZC5zdHlsPzZlZDUiXSwibmFtZXMiOlsiZGV0ZXJtaW5lSG93VG9Mb2FkIiwicGFnZSIsIlVuaXZlcnNhbENvbXBvbmVudCIsInVuaXZlcnNhbCIsIm9uRXJyb3IiLCJlcnJvciIsIm1pbkRlbGF5IiwibG9hZGluZyIsIkxvYWRpbmciLCJOb3RGb3VuZCIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZXMiLCJ0b1N0cmluZyIsIkFwcCIsInN0YXRlIiwiaW5kZXgiLCJkb25lIiwiYmVmb3JlQ2hhbmdlIiwiYWZ0ZXJDaGFuZ2UiLCJoYW5kbGVFcnJvciIsInByb3BzIiwiaGlzdG9yeSIsImlkeCIsIm5leHRJbmRleCIsInBhZ2VzIiwicHVzaCIsImlzU3luYyIsInNldFN0YXRlIiwiaXNTZXJ2ZXIiLCJpc01vdW50IiwiUmVhY3QiLCJDb21wb25lbnQiLCJob3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7QUFFQTs7QUFDQSxJQUFNQSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCO0FBQUEsTUFBR0MsSUFBSCxRQUFHQSxJQUFIO0FBQUEsU0FBYyxPQUFPQSxJQUFQLEtBQWdCLFFBQWhCLEdBQTJCO0FBQUEsV0FBTUEsSUFBSSxFQUFWO0FBQUEsR0FBM0I7QUFBQTtBQUFBO0FBQUEsMEJBQTBDLDhFQUFZQSxJQUFaLEVBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxRkFBc0RBLElBQXREO0FBQUE7QUFBQTtBQUFBLHVIQUFzREEsSUFBdEQ7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SUEsS0FBSixFQUFXLE9BQU8sT0FBUDtBQUNYLGFBQU9FLE9BQU8sR0FBRyxZQUFILEdBQWtCLGFBQWhDO0FBQ0Q7Ozs7Ozs7Ozs7O0VBOURld0IsNENBQUssQ0FBQ0MsUyxHQWdFeEI7QUFDQTs7O2VBQ2VDLGlFQUFHLENBQUNuQixHQUFELEM7O0FBQUg7Ozs7Ozs7Ozs7MEJBN0VUZCxrQjswQkFFQUUsa0I7MEJBU0FZLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCTjtBQUNBLGtCQUFrQjtBQUNsQixPQUFPLElBQVU7QUFDakI7QUFDQSxzQkFBc0IsbUJBQU8sQ0FBQyw0S0FBd0gsRUFBRSxRQUFTLEdBQUcsMENBQTBDO0FBQzlNOztBQUVBOzs7Ozs7Ozs7Ozs7QUNQQTtBQUNBLGtCQUFrQjtBQUNsQixPQUFPLElBQVU7QUFDakI7QUFDQSxzQkFBc0IsbUJBQU8sQ0FBQyw0S0FBd0gsRUFBRSxRQUFTLEdBQUcsMENBQTBDO0FBQzlNOztBQUVBOzs7Ozs7Ozs7Ozs7QUNQQTtBQUNBLGtCQUFrQjtBQUNsQixPQUFPLElBQVU7QUFDakI7QUFDQSxzQkFBc0IsbUJBQU8sQ0FBQyw0S0FBd0gsRUFBRSxRQUFTLEdBQUcsMENBQTBDO0FBQzlNOztBQUVBIiwiZmlsZSI6Im1haW4uMWIyNjE4MzQ2ZmMyYjQ4MmQyMjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgaG90IH0gZnJvbSAncmVhY3QtaG90LWxvYWRlci9yb290J1xuLy9pbXBvcnQgeyBjb25uZWN0LCBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHVuaXZlcnNhbCBmcm9tICdyZWFjdC11bml2ZXJzYWwtY29tcG9uZW50J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9jc3MvQXBwJ1xuaW1wb3J0IHsgcGFnZXMsIG5leHRJbmRleCwgaW5kZXhGcm9tUGF0aCB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9QYWdlcy9Ib21lJ1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi9Mb2FkaW5nJ1xuaW1wb3J0IE5vdEZvdW5kIGZyb20gJy4vTm90Rm91bmQnXG4vL2ltcG9ydCBjb25maWd1cmVTdG9yZSBmcm9tICcuLi9zdG9yZS9jb25maWd1cmUnXG5cbi8vY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSgpO1xuY29uc3QgZGV0ZXJtaW5lSG93VG9Mb2FkID0gKHsgcGFnZSB9KSA9PiB0eXBlb2YgcGFnZSAhPT0gJ3N0cmluZycgPyAoKSA9PiBwYWdlKCkgOiBpbXBvcnQoYC4vJHtwYWdlfWApXG5cbmNvbnN0IFVuaXZlcnNhbENvbXBvbmVudCA9IHVuaXZlcnNhbChkZXRlcm1pbmVIb3dUb0xvYWQsIHtcbiAgb25FcnJvcjogZXJyb3IgPT4ge1xuICAgIHRocm93IGVycm9yXG4gIH0sXG4gIG1pbkRlbGF5OiAxMjAwLFxuICBsb2FkaW5nOiBMb2FkaW5nLFxuICBlcnJvcjogTm90Rm91bmRcbn0pXG5jb25zb2xlLmxvZyhzdHlsZXMsc3R5bGVzLnRvU3RyaW5nKCkpXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpbmRleCwgZG9uZSwgbG9hZGluZyB9ID0gdGhpcy5zdGF0ZVxuICAgIHJldHVybiAoXG4gICAgICA8RnJhZ21lbnQ+XG4gICAgICAgIDxzdHlsZT5cbiAgICAgICAgICB7fVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8VW5pdmVyc2FsQ29tcG9uZW50XG4gICAgICAgICAgcGFnZT0nUGFnZXMvSG9tZSdcbiAgICAgICAgICBvbkJlZm9yZT17dGhpcy5iZWZvcmVDaGFuZ2V9XG4gICAgICAgICAgb25BZnRlcj17dGhpcy5hZnRlckNoYW5nZX1cbiAgICAgICAgICBvbkVycm9yPXt0aGlzLmhhbmRsZUVycm9yfVxuICAgICAgICAvPlxuICAgICAgPC9GcmFnbWVudD5cbiAgICApXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgZXJyb3I6IGZhbHNlXG4gICAgfVxuICB9XG5cblxuICBjaGFuZ2VQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgbG9hZGluZywgaW5kZXggfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCB7IGhpc3RvcnkgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAobG9hZGluZykgcmV0dXJuXG5cbiAgICBjb25zdCBpZHggPSBuZXh0SW5kZXgoaW5kZXgpXG4gICAgY29uc3QgcGFnZSA9IHBhZ2VzW2lkeF1cblxuICAgIGhpc3RvcnkucHVzaChgLyR7cGFnZX1gKVxuICB9XG5cbiAgYmVmb3JlQ2hhbmdlID0gKHsgaXNTeW5jIH0pID0+IHtcbiAgICBpZiAoIWlzU3luYykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUsIGVycm9yOiBmYWxzZSB9KVxuICAgIH1cbiAgfVxuXG4gIGFmdGVyQ2hhbmdlID0gKHsgaXNTeW5jLCBpc1NlcnZlciwgaXNNb3VudCB9KSA9PiB7XG4gICAgaWYgKCFpc1N5bmMpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSwgZXJyb3I6IGZhbHNlIH0pXG4gICAgfVxuICAgIGVsc2UgaWYgKCFpc1NlcnZlciAmJiAhaXNNb3VudCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRvbmU6IHRydWUsIGVycm9yOiBmYWxzZSB9KVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUVycm9yID0gZXJyb3IgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcjogdHJ1ZSwgbG9hZGluZzogZmFsc2UgfSlcbiAgfVxuXG4gIGJ1dHRvblRleHQoKSB7XG4gICAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciB9ID0gdGhpcy5zdGF0ZVxuICAgIGlmIChlcnJvcikgcmV0dXJuICdFUlJPUidcbiAgICByZXR1cm4gbG9hZGluZyA/ICdMT0FESU5HLi4uJyA6ICdDSEFOR0UgUEFHRSdcbiAgfVxufVxuLy8gY29uc3QgQXBwcyA9IGNvbm5lY3QoKHN0b3JlKSA9PiB7cmV0dXJuIHsgcGFnZTpzdG9yZS5yb3V0ZXMgfX0gKShBcHApXG4vLyBjb25zdCBQcm92aWRlZCA9ICgpID0+ICg8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT48QXBwcyAvPjwvUHJvdmlkZXI+KVxuZXhwb3J0IGRlZmF1bHQgaG90KEFwcClcbiIsIi8vIGV4dHJhY3RlZCBieSBleHRyYWN0LWNzcy1jaHVua3Mtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wibG9nb1wiOlwiQXBwX19sb2dvLS0yd01qU1wiLFwibG9nb0JvdHRvbVwiOlwiQXBwX19sb2dvQm90dG9tLS0xRXRVZVwiLFwiaXRlbVwiOlwiQXBwX19pdGVtLS1DOHBVRlwiLFwiaXRlbVNjcm9sbFwiOlwiQXBwX19pdGVtU2Nyb2xsLS0yLW93S1wiLFwiYnV0dG9uXCI6XCJBcHBfX2J1dHRvbi0tMjBuZGJcIixcIm1lZGl1bVwiOlwiQXBwX19tZWRpdW0tLTNCMzMzXCIsXCJzb2NpYWxNZWRpYVwiOlwiQXBwX19zb2NpYWxNZWRpYS0tLXV5eDJcIixcInNvY2lhbExheW91dFwiOlwiQXBwX19zb2NpYWxMYXlvdXQtLTJhZFN0XCJ9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE1NzkwMDE4MjY3MTNcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiL2hvbWUvZ29vc2V3YXJlL3JlcG9zL2dvb3Nld2FyZS9jYWRlYXUvbm9kZV9tb2R1bGVzL2V4dHJhY3QtY3NzLWNodW5rcy13ZWJwYWNrLXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImhvdFwiOnRydWUsXCJyZWxvYWRBbGxcIjp0cnVlLFwibG9jYWxzXCI6dHJ1ZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBcbiAgICB9XG4gICIsIi8vIGV4dHJhY3RlZCBieSBleHRyYWN0LWNzcy1jaHVua3Mtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiRm9vXCI6XCJMb2FkaW5nX19Gb28tLTE5d3NoXCIsXCJmYWRlLUZvb1wiOlwiTG9hZGluZ19fZmFkZS1Gb28tLXpRWTgxXCIsXCJCYXJcIjpcIkxvYWRpbmdfX0Jhci0tMkNOazZcIixcImZhZGUtQmFyXCI6XCJMb2FkaW5nX19mYWRlLUJhci0tMmxMLWdcIixcIkJhelwiOlwiTG9hZGluZ19fQmF6LS0xT2dxX1wiLFwiZmFkZS1CYXpcIjpcIkxvYWRpbmdfX2ZhZGUtQmF6LS00dGRQRVwiLFwiUnVkeVwiOlwiTG9hZGluZ19fUnVkeS0tMTRmdXBcIixcImZhZGUtUnVkeVwiOlwiTG9hZGluZ19fZmFkZS1SdWR5LS0xVWgwZVwiLFwiRXhhbXBsZVwiOlwiTG9hZGluZ19fRXhhbXBsZS0tMl82eC1cIixcImZhZGUtRXhhbXBsZVwiOlwiTG9hZGluZ19fZmFkZS1FeGFtcGxlLS0xaV9sSlwiLFwiUmVkdXhGaXJzdFJvdXRlclwiOlwiTG9hZGluZ19fUmVkdXhGaXJzdFJvdXRlci0tMkdSdG5cIixcImZhZGUtUmVkdXhGaXJzdFJvdXRlclwiOlwiTG9hZGluZ19fZmFkZS1SZWR1eEZpcnN0Um91dGVyLS0zUnVwaFwiLFwiVW5pdmVyc2FsXCI6XCJMb2FkaW5nX19Vbml2ZXJzYWwtLTJyRzhTXCIsXCJmYWRlLVVuaXZlcnNhbFwiOlwiTG9hZGluZ19fZmFkZS1Vbml2ZXJzYWwtLTFqdTBpXCIsXCJGYWNleVNwYWNleVwiOlwiTG9hZGluZ19fRmFjZXlTcGFjZXktLTFMY0M0XCIsXCJmYWRlLUZhY2V5U3BhY2V5XCI6XCJMb2FkaW5nX19mYWRlLUZhY2V5U3BhY2V5LS0zYnpxRVwiLFwic3Bpbm5lclwiOlwiTG9hZGluZ19fc3Bpbm5lci0tMjNYRjlcIixcInNwaW5cIjpcIkxvYWRpbmdfX3NwaW4tLTNJREpNXCJ9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE1NzkwMDE4MjcwMDlcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiL2hvbWUvZ29vc2V3YXJlL3JlcG9zL2dvb3Nld2FyZS9jYWRlYXUvbm9kZV9tb2R1bGVzL2V4dHJhY3QtY3NzLWNodW5rcy13ZWJwYWNrLXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImhvdFwiOnRydWUsXCJyZWxvYWRBbGxcIjp0cnVlLFwibG9jYWxzXCI6dHJ1ZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBcbiAgICB9XG4gICIsIi8vIGV4dHJhY3RlZCBieSBleHRyYWN0LWNzcy1jaHVua3Mtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiY29udGFpbmVyXCI6XCJOb3RGb3VuZF9fY29udGFpbmVyLS0yazBQblwifTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNTc5MDAxODI3MDQ1XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi9ob21lL2dvb3Nld2FyZS9yZXBvcy9nb29zZXdhcmUvY2FkZWF1L25vZGVfbW9kdWxlcy9leHRyYWN0LWNzcy1jaHVua3Mtd2VicGFjay1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJob3RcIjp0cnVlLFwicmVsb2FkQWxsXCI6dHJ1ZSxcImxvY2Fsc1wiOnRydWV9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgXG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9