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
console.log('test', _css_App__WEBPACK_IMPORTED_MODULE_5___default.a);

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
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("style", null, _css_App__WEBPACK_IMPORTED_MODULE_5___default.a), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(UniversalComponent, {
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BcHAuanMiXSwibmFtZXMiOlsiZGV0ZXJtaW5lSG93VG9Mb2FkIiwicGFnZSIsIlVuaXZlcnNhbENvbXBvbmVudCIsInVuaXZlcnNhbCIsIm9uRXJyb3IiLCJlcnJvciIsIm1pbkRlbGF5IiwibG9hZGluZyIsIkxvYWRpbmciLCJOb3RGb3VuZCIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZXMiLCJBcHAiLCJzdGF0ZSIsImluZGV4IiwiZG9uZSIsImJlZm9yZUNoYW5nZSIsImFmdGVyQ2hhbmdlIiwiaGFuZGxlRXJyb3IiLCJwcm9wcyIsImhpc3RvcnkiLCJpZHgiLCJuZXh0SW5kZXgiLCJwYWdlcyIsInB1c2giLCJpc1N5bmMiLCJzZXRTdGF0ZSIsImlzU2VydmVyIiwiaXNNb3VudCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiaG90Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBO0FBRUE7O0FBQ0EsSUFBTUEsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQjtBQUFBLE1BQUdDLElBQUgsUUFBR0EsSUFBSDtBQUFBLFNBQWMsT0FBT0EsSUFBUCxLQUFnQixRQUFoQixHQUEyQjtBQUFBLFdBQU1BLElBQUksRUFBVjtBQUFBLEdBQTNCO0FBQUE7QUFBQTtBQUFBLDBCQUEwQyw4RUFBWUEsSUFBWixFQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUZBQXNEQSxJQUF0RDtBQUFBO0FBQUE7QUFBQSx1SEFBc0RBLElBQXREO0FBQUE7QUFBQTtBQUFBLHVCQUFzREEsSUFBdEQ7QUFBQTtBQUFBLElBQWQ7QUFBQSxDQUEzQjs7QUFFQSxJQUFNQyxrQkFBa0IsR0FBR0MsZ0VBQVMsQ0FBQ0gsa0JBQUQsRUFBcUI7QUFDdkRJLFNBQU8sRUFBRSxpQkFBQUMsS0FB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O0FBQUg7Ozs7Ozs7Ozs7MEJBN0VUYixrQjswQkFFQUUsa0I7MEJBU0FXLEciLCJmaWxlIjoibWFpbi4wNzE2ODA3MWY4OTc2MzQ4YTM5NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBob3QgfSBmcm9tICdyZWFjdC1ob3QtbG9hZGVyL3Jvb3QnXG4vL2ltcG9ydCB7IGNvbm5lY3QsIFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgdW5pdmVyc2FsIGZyb20gJ3JlYWN0LXVuaXZlcnNhbC1jb21wb25lbnQnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL2Nzcy9BcHAnXG5pbXBvcnQgeyBwYWdlcywgbmV4dEluZGV4LCBpbmRleEZyb21QYXRoIH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgSG9tZSBmcm9tICcuL1BhZ2VzL0hvbWUnXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuL0xvYWRpbmcnXG5pbXBvcnQgTm90Rm91bmQgZnJvbSAnLi9Ob3RGb3VuZCdcbi8vaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJy4uL3N0b3JlL2NvbmZpZ3VyZSdcblxuLy9jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKCk7XG5jb25zdCBkZXRlcm1pbmVIb3dUb0xvYWQgPSAoeyBwYWdlIH0pID0+IHR5cGVvZiBwYWdlICE9PSAnc3RyaW5nJyA/ICgpID0+IHBhZ2UoKSA6IGltcG9ydChgLi8ke3BhZ2V9YClcblxuY29uc3QgVW5pdmVyc2FsQ29tcG9uZW50ID0gdW5pdmVyc2FsKGRldGVybWluZUhvd1RvTG9hZCwge1xuICBvbkVycm9yOiBlcnJvciA9PiB7XG4gICAgdGhyb3cgZXJyb3JcbiAgfSxcbiAgbWluRGVsYXk6IDEyMDAsXG4gIGxvYWRpbmc6IExvYWRpbmcsXG4gIGVycm9yOiBOb3RGb3VuZFxufSlcbmNvbnNvbGUubG9nKCd0ZXN0Jywgc3R5bGVzKVxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaW5kZXgsIGRvbmUsIGxvYWRpbmcgfSA9IHRoaXMuc3RhdGVcbiAgICByZXR1cm4gKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICA8c3R5bGU+XG4gICAgICAgICAge3N0eWxlc31cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPFVuaXZlcnNhbENvbXBvbmVudFxuICAgICAgICAgIHBhZ2U9J1BhZ2VzL0hvbWUnXG4gICAgICAgICAgb25CZWZvcmU9e3RoaXMuYmVmb3JlQ2hhbmdlfVxuICAgICAgICAgIG9uQWZ0ZXI9e3RoaXMuYWZ0ZXJDaGFuZ2V9XG4gICAgICAgICAgb25FcnJvcj17dGhpcy5oYW5kbGVFcnJvcn1cbiAgICAgICAgLz5cbiAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICBkb25lOiBmYWxzZSxcbiAgICAgIGVycm9yOiBmYWxzZVxuICAgIH1cbiAgfVxuXG5cbiAgY2hhbmdlUGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IGxvYWRpbmcsIGluZGV4IH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgeyBoaXN0b3J5IH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKGxvYWRpbmcpIHJldHVyblxuXG4gICAgY29uc3QgaWR4ID0gbmV4dEluZGV4KGluZGV4KVxuICAgIGNvbnN0IHBhZ2UgPSBwYWdlc1tpZHhdXG5cbiAgICBoaXN0b3J5LnB1c2goYC8ke3BhZ2V9YClcbiAgfVxuXG4gIGJlZm9yZUNoYW5nZSA9ICh7IGlzU3luYyB9KSA9PiB7XG4gICAgaWYgKCFpc1N5bmMpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlLCBlcnJvcjogZmFsc2UgfSlcbiAgICB9XG4gIH1cblxuICBhZnRlckNoYW5nZSA9ICh7IGlzU3luYywgaXNTZXJ2ZXIsIGlzTW91bnQgfSkgPT4ge1xuICAgIGlmICghaXNTeW5jKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UsIGVycm9yOiBmYWxzZSB9KVxuICAgIH1cbiAgICBlbHNlIGlmICghaXNTZXJ2ZXIgJiYgIWlzTW91bnQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBkb25lOiB0cnVlLCBlcnJvcjogZmFsc2UgfSlcbiAgICB9XG4gIH1cblxuICBoYW5kbGVFcnJvciA9IGVycm9yID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3I6IHRydWUsIGxvYWRpbmc6IGZhbHNlIH0pXG4gIH1cblxuICBidXR0b25UZXh0KCkge1xuICAgIGNvbnN0IHsgbG9hZGluZywgZXJyb3IgfSA9IHRoaXMuc3RhdGVcbiAgICBpZiAoZXJyb3IpIHJldHVybiAnRVJST1InXG4gICAgcmV0dXJuIGxvYWRpbmcgPyAnTE9BRElORy4uLicgOiAnQ0hBTkdFIFBBR0UnXG4gIH1cbn1cbi8vIGNvbnN0IEFwcHMgPSBjb25uZWN0KChzdG9yZSkgPT4ge3JldHVybiB7IHBhZ2U6c3RvcmUucm91dGVzIH19ICkoQXBwKVxuLy8gY29uc3QgUHJvdmlkZWQgPSAoKSA9PiAoPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+PEFwcHMgLz48L1Byb3ZpZGVyPilcbmV4cG9ydCBkZWZhdWx0IGhvdChBcHApXG4iXSwic291cmNlUm9vdCI6IiJ9