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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");
/* harmony import */ var _Pages_Home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Pages/Home */ "./src/components/Pages/Home/index.js");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Loading */ "./src/components/Loading.js");
/* harmony import */ var _NotFound__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./NotFound */ "./src/components/NotFound.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");



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

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n@font-face{\n  font-family:\"Apercu\";\n  src: url('https://cdn.jsdelivr.net/gh/Gooseware/cadeauAssets@master/fonts/Apercu.ttf')  format('truetype'); /* Safari, Android, iOS */\n  font-weight:400;\n}\n@font-face{}\n  font-family:\"Apercu\";\n  src: url('https://cdn.jsdelivr.net/gh/Gooseware/cadeauAssets@master/fonts/Apercu%20Italic.ttf')  format('truetype'); /* Safari, Android, iOS */\n  font-weight:400;\n  font-style: italic;\n}\n@font-face{\n  font-family:\"Apercu\";\n  src: url('https://cdn.jsdelivr.net/gh/Gooseware/cadeauAssets@master/fonts/Apercu%20Medium.ttf')  format('truetype'); /* Safari, Android, iOS */\n  font-weight:500;\n}\n@font-face{\n  font-family:\"Apercu\";\n  src: url('https://cdn.jsdelivr.net/gh/Gooseware/cadeauAssets@master/fonts/Apercu%20Bold.ttf')  format('truetype'); /* Safari, Android, iOS */\n  font-weight: 700;\n}\n@font-face{\n  font-family:\"Apercu\";\n  src: url('https://cdn.jsdelivr.net/gh/Gooseware/cadeauAssets@master/fonts/Apercu%20Bold%20Italic.ttf')  format('truetype'); /* Safari, Android, iOS */\n  font-weight: 700;\n  font-style: italic;\n}\n@font-face{\n  font-family:\"Apercu\"\n  src: url('https://cdn.jsdelivr.net/gh/Gooseware/cadeauAssets@master/fonts/Apercu%20Light.ttf')  format('truetype');\n  font-weight:200;\n}\n\nbody{\n  font-family: \"Apercu\", Times, serif\n  padding: 0;\n  margin: 0;\n  background: #013B51;\n  color: ", ";\n  font-size: 32px;\n  @media\n  only screen and (-webkit-min-device-pixel-ratio: 2),\n  only screen and (   min--moz-device-pixel-ratio: 2),\n  only screen and (     -o-min-device-pixel-ratio: 2/1),\n  only screen and (        min-device-pixel-ratio: 2),\n  only screen and (                min-resolution: 192dpi),\n  only screen and (                min-resolution: 2dppx) {\n    font-size: 64px;\n  }\n}\n\na{\n  color: ", ";\n  &:hover\n    color: ", ";\n}\np{\n  margin-block-start: 0;\n  margin-block-end: 1em;\n}\n\n.logo{\n  object-fit: contain;\n  width: calc(100vw - 80px);\n  max-width: 500px;\n}\n.logoBottom{\n  object-fit: contain;\n  width: calc(100vw - 80px);\n  max-width: 200px;\n  margin: 0 auto;\n}\n.item{\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  flex-direction: column;\n  width: 100vw;\n  height: 100vh;\n}\n.itemScroll{\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  flex-direction: column;\n  width: 100vw;\n  height: 100vh;\n  overflow-y: auto;\n}\n\n.button{\n  border: 2px solid ", ";\n  font-weight: 500;\n  border-radius: 1.5em;\n  text-decoration: none;\n  padding: .5em 1em;\n  box-sizing: border-box;\n  display: inline-block;\n  &:hover{\n    text-decoration: none;\n  }\n}\n.medium{\n  font-weight: 500\n}\n.socialMedia{\n  width: 3.3rem;\n  object-fit: contain;\n}\n.socialLayout{\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  & > div:first-of-type{\n    padding-right: 3.3rem;\n  }\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};


 //import { connect, Provider } from 'react-redux'

 //import styles from '../css/App'





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

var color = '#D0AF95';
var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_9__["createGlobalStyle"])(_templateObject(), color, color, color, color);
var UniversalComponent = react_universal_component__WEBPACK_IMPORTED_MODULE_4___default()(determineHowToLoad, {
  onError: function onError(error) {
    throw error;
  },
  minDelay: 1200,
  loading: _Loading__WEBPACK_IMPORTED_MODULE_7__["default"],
  error: _NotFound__WEBPACK_IMPORTED_MODULE_8__["default"]
});

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
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(GlobalStyle, null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(UniversalComponent, {
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
      var idx = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["nextIndex"])(index);
      var page = _utils__WEBPACK_IMPORTED_MODULE_5__["pages"][idx];
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
  reactHotLoader.register(color, "color", "/home/gooseware/repos/gooseware/cadeau/src/components/App.js");
  reactHotLoader.register(GlobalStyle, "GlobalStyle", "/home/gooseware/repos/gooseware/cadeau/src/components/App.js");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BcHAuanMiXSwibmFtZXMiOlsiZGV0ZXJtaW5lSG93VG9Mb2FkIiwicGFnZSIsImNvbG9yIiwiR2xvYmFsU3R5bGUiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIlVuaXZlcnNhbENvbXBvbmVudCIsInVuaXZlcnNhbCIsIm9uRXJyb3IiLCJlcnJvciIsIm1pbkRlbGF5IiwibG9hZGluZyIsIkxvYWRpbmciLCJOb3RGb3VuZCIsIkFwcCIsInN0YXRlIiwiaW5kZXgiLCJkb25lIiwiYmVmb3JlQ2hhbmdlIiwiYWZ0ZXJDaGFuZ2UiLCJoYW5kbGVFcnJvciIsInByb3BzIiwiaGlzdG9yeSIsImlkeCIsIm5leHRJbmRleCIsInBhZ2VzIiwicHVzaCIsImlzU3luYyIsInNldFN0YXRlIiwiaXNTZXJ2ZXIiLCJpc01vdW50IiwiUmVhY3QiLCJDb21wb25lbnQiLCJob3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7QUFFQTs7QUFDQSxJQUFNQSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCO0FBQUEsTUFBR0MsSUFBSCxRQUFHQSxJQUFIO0FBQUEsU0FBYyxPQUFPQSxJQUFQLEtBQWdCLFFBQWhCLEdBQTJCO0FBQUEsV0FBTUEsSUFBSSxFQUFWO0FBQUEsR0FBM0I7QUFBQTtBQUFBO0FBQUEsMEJBQTBDLDhFQUFZQSxJQUFaLEVBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxRkFBc0RBLElBQXREO0FBQUE7QUFBQTtBQUFBLHVIQUFzREEsSUFBdEQ7QUFBQTtBQUFBO0FBQUEsdUJBQXNEQSxJQUF0RDtBQUFBO0FBQUEsSUFBZDtBQUFBLENBQTNCOztBQUNBLElBQU1DLEtBQUssR0FBRyxTQUFkO0FBQ0EsSUFBTUMsV0FBVyxHQUFH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LFlBQUgsR0FBa0IsYUFBaEM7QUFDRDs7Ozs7Ozs7Ozs7RUE1RGVvQiw0Q0FBSyxDQUFDQyxTLEdBOER4QjtBQUNBOzs7ZUFDZUMsaUVBQUcsQ0FBQ25CLEdBQUQsQzs7QUFBSDs7Ozs7Ozs7OzswQkFuTVRiLGtCOzBCQUNBRSxLOzBCQUNBQyxXOzBCQXdIQUUsa0I7MEJBU0FRLEciLCJmaWxlIjoibWFpbi43NDg1ZDk5MmE4Y2IzY2MxZTA3Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBob3QgfSBmcm9tICdyZWFjdC1ob3QtbG9hZGVyL3Jvb3QnXG4vL2ltcG9ydCB7IGNvbm5lY3QsIFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgdW5pdmVyc2FsIGZyb20gJ3JlYWN0LXVuaXZlcnNhbC1jb21wb25lbnQnXG4vL2ltcG9ydCBzdHlsZXMgZnJvbSAnLi4vY3NzL0FwcCdcbmltcG9ydCB7IHBhZ2VzLCBuZXh0SW5kZXgsIGluZGV4RnJvbVBhdGggfSBmcm9tICcuLi91dGlscydcbmltcG9ydCBIb21lIGZyb20gJy4vUGFnZXMvSG9tZSdcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4vTG9hZGluZydcbmltcG9ydCBOb3RGb3VuZCBmcm9tICcuL05vdEZvdW5kJ1xuaW1wb3J0IHN0eWxlZCwgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG4vL2ltcG9ydCBjb25maWd1cmVTdG9yZSBmcm9tICcuLi9zdG9yZS9jb25maWd1cmUnXG5cbi8vY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSgpO1xuY29uc3QgZGV0ZXJtaW5lSG93VG9Mb2FkID0gKHsgcGFnZSB9KSA9PiB0eXBlb2YgcGFnZSAhPT0gJ3N0cmluZycgPyAoKSA9PiBwYWdlKCkgOiBpbXBvcnQoYC4vJHtwYWdlfWApXG5jb25zdCBjb2xvciA9ICcjRDBBRjk1JztcbmNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXG5AZm9udC1mYWNle1xuICBmb250LWZhbWlseTpcIkFwZXJjdVwiO1xuICBzcmM6IHVybCgnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL0dvb3Nld2FyZS9jYWRlYXVBc3NldHNAbWFzdGVyL2ZvbnRzL0FwZXJjdS50dGYnKSAgZm9ybWF0KCd0cnVldHlwZScpOyAvKiBTYWZhcmksIEFuZHJvaWQsIGlPUyAqL1xuICBmb250LXdlaWdodDo0MDA7XG59XG5AZm9udC1mYWNle31cbiAgZm9udC1mYW1pbHk6XCJBcGVyY3VcIjtcbiAgc3JjOiB1cmwoJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9Hb29zZXdhcmUvY2FkZWF1QXNzZXRzQG1hc3Rlci9mb250cy9BcGVyY3UlMjBJdGFsaWMudHRmJykgIGZvcm1hdCgndHJ1ZXR5cGUnKTsgLyogU2FmYXJpLCBBbmRyb2lkLCBpT1MgKi9cbiAgZm9udC13ZWlnaHQ6NDAwO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5AZm9udC1mYWNle1xuICBmb250LWZhbWlseTpcIkFwZXJjdVwiO1xuICBzcmM6IHVybCgnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL0dvb3Nld2FyZS9jYWRlYXVBc3NldHNAbWFzdGVyL2ZvbnRzL0FwZXJjdSUyME1lZGl1bS50dGYnKSAgZm9ybWF0KCd0cnVldHlwZScpOyAvKiBTYWZhcmksIEFuZHJvaWQsIGlPUyAqL1xuICBmb250LXdlaWdodDo1MDA7XG59XG5AZm9udC1mYWNle1xuICBmb250LWZhbWlseTpcIkFwZXJjdVwiO1xuICBzcmM6IHVybCgnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL0dvb3Nld2FyZS9jYWRlYXVBc3NldHNAbWFzdGVyL2ZvbnRzL0FwZXJjdSUyMEJvbGQudHRmJykgIGZvcm1hdCgndHJ1ZXR5cGUnKTsgLyogU2FmYXJpLCBBbmRyb2lkLCBpT1MgKi9cbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbkBmb250LWZhY2V7XG4gIGZvbnQtZmFtaWx5OlwiQXBlcmN1XCI7XG4gIHNyYzogdXJsKCdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvR29vc2V3YXJlL2NhZGVhdUFzc2V0c0BtYXN0ZXIvZm9udHMvQXBlcmN1JTIwQm9sZCUyMEl0YWxpYy50dGYnKSAgZm9ybWF0KCd0cnVldHlwZScpOyAvKiBTYWZhcmksIEFuZHJvaWQsIGlPUyAqL1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5AZm9udC1mYWNle1xuICBmb250LWZhbWlseTpcIkFwZXJjdVwiXG4gIHNyYzogdXJsKCdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvR29vc2V3YXJlL2NhZGVhdUFzc2V0c0BtYXN0ZXIvZm9udHMvQXBlcmN1JTIwTGlnaHQudHRmJykgIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbiAgZm9udC13ZWlnaHQ6MjAwO1xufVxuXG5ib2R5e1xuICBmb250LWZhbWlseTogXCJBcGVyY3VcIiwgVGltZXMsIHNlcmlmXG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYmFja2dyb3VuZDogIzAxM0I1MTtcbiAgY29sb3I6ICR7Y29sb3J9O1xuICBmb250LXNpemU6IDMycHg7XG4gIEBtZWRpYVxuICBvbmx5IHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksXG4gIG9ubHkgc2NyZWVuIGFuZCAoICAgbWluLS1tb3otZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSxcbiAgb25seSBzY3JlZW4gYW5kICggICAgIC1vLW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIvMSksXG4gIG9ubHkgc2NyZWVuIGFuZCAoICAgICAgICBtaW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSxcbiAgb25seSBzY3JlZW4gYW5kICggICAgICAgICAgICAgICAgbWluLXJlc29sdXRpb246IDE5MmRwaSksXG4gIG9ubHkgc2NyZWVuIGFuZCAoICAgICAgICAgICAgICAgIG1pbi1yZXNvbHV0aW9uOiAyZHBweCkge1xuICAgIGZvbnQtc2l6ZTogNjRweDtcbiAgfVxufVxuXG5he1xuICBjb2xvcjogJHtjb2xvcn07XG4gICY6aG92ZXJcbiAgICBjb2xvcjogJHtjb2xvcn07XG59XG5we1xuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDA7XG4gIG1hcmdpbi1ibG9jay1lbmQ6IDFlbTtcbn1cblxuLmxvZ297XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIHdpZHRoOiBjYWxjKDEwMHZ3IC0gODBweCk7XG4gIG1heC13aWR0aDogNTAwcHg7XG59XG4ubG9nb0JvdHRvbXtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgd2lkdGg6IGNhbGMoMTAwdncgLSA4MHB4KTtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uaXRlbXtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuLml0ZW1TY3JvbGx7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmJ1dHRvbntcbiAgYm9yZGVyOiAycHggc29saWQgJHtjb2xvcn07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJvcmRlci1yYWRpdXM6IDEuNWVtO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBhZGRpbmc6IC41ZW0gMWVtO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICY6aG92ZXJ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG59XG4ubWVkaXVte1xuICBmb250LXdlaWdodDogNTAwXG59XG4uc29jaWFsTWVkaWF7XG4gIHdpZHRoOiAzLjNyZW07XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG4uc29jaWFsTGF5b3V0e1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgJiA+IGRpdjpmaXJzdC1vZi10eXBle1xuICAgIHBhZGRpbmctcmlnaHQ6IDMuM3JlbTtcbiAgfVxufVxuYFxuXG5jb25zdCBVbml2ZXJzYWxDb21wb25lbnQgPSB1bml2ZXJzYWwoZGV0ZXJtaW5lSG93VG9Mb2FkLCB7XG4gIG9uRXJyb3I6IGVycm9yID0+IHtcbiAgICB0aHJvdyBlcnJvclxuICB9LFxuICBtaW5EZWxheTogMTIwMCxcbiAgbG9hZGluZzogTG9hZGluZyxcbiAgZXJyb3I6IE5vdEZvdW5kXG59KVxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpbmRleCwgZG9uZSwgbG9hZGluZyB9ID0gdGhpcy5zdGF0ZVxuICAgIHJldHVybiAoXG4gICAgICA8RnJhZ21lbnQ+XG4gICAgICAgIDxHbG9iYWxTdHlsZSAvPlxuICAgICAgICA8VW5pdmVyc2FsQ29tcG9uZW50XG4gICAgICAgICAgcGFnZT0nUGFnZXMvSG9tZSdcbiAgICAgICAgICBvbkJlZm9yZT17dGhpcy5iZWZvcmVDaGFuZ2V9XG4gICAgICAgICAgb25BZnRlcj17dGhpcy5hZnRlckNoYW5nZX1cbiAgICAgICAgICBvbkVycm9yPXt0aGlzLmhhbmRsZUVycm9yfVxuICAgICAgICAvPlxuICAgICAgPC9GcmFnbWVudD5cbiAgICApXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgZXJyb3I6IGZhbHNlXG4gICAgfVxuICB9XG5cblxuICBjaGFuZ2VQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgbG9hZGluZywgaW5kZXggfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCB7IGhpc3RvcnkgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAobG9hZGluZykgcmV0dXJuXG5cbiAgICBjb25zdCBpZHggPSBuZXh0SW5kZXgoaW5kZXgpXG4gICAgY29uc3QgcGFnZSA9IHBhZ2VzW2lkeF1cblxuICAgIGhpc3RvcnkucHVzaChgLyR7cGFnZX1gKVxuICB9XG5cbiAgYmVmb3JlQ2hhbmdlID0gKHsgaXNTeW5jIH0pID0+IHtcbiAgICBpZiAoIWlzU3luYykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUsIGVycm9yOiBmYWxzZSB9KVxuICAgIH1cbiAgfVxuXG4gIGFmdGVyQ2hhbmdlID0gKHsgaXNTeW5jLCBpc1NlcnZlciwgaXNNb3VudCB9KSA9PiB7XG4gICAgaWYgKCFpc1N5bmMpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSwgZXJyb3I6IGZhbHNlIH0pXG4gICAgfVxuICAgIGVsc2UgaWYgKCFpc1NlcnZlciAmJiAhaXNNb3VudCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRvbmU6IHRydWUsIGVycm9yOiBmYWxzZSB9KVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUVycm9yID0gZXJyb3IgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcjogdHJ1ZSwgbG9hZGluZzogZmFsc2UgfSlcbiAgfVxuXG4gIGJ1dHRvblRleHQoKSB7XG4gICAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciB9ID0gdGhpcy5zdGF0ZVxuICAgIGlmIChlcnJvcikgcmV0dXJuICdFUlJPUidcbiAgICByZXR1cm4gbG9hZGluZyA/ICdMT0FESU5HLi4uJyA6ICdDSEFOR0UgUEFHRSdcbiAgfVxufVxuLy8gY29uc3QgQXBwcyA9IGNvbm5lY3QoKHN0b3JlKSA9PiB7cmV0dXJuIHsgcGFnZTpzdG9yZS5yb3V0ZXMgfX0gKShBcHApXG4vLyBjb25zdCBQcm92aWRlZCA9ICgpID0+ICg8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT48QXBwcyAvPjwvUHJvdmlkZXI+KVxuZXhwb3J0IGRlZmF1bHQgaG90KEFwcClcbiJdLCJzb3VyY2VSb290IjoiIn0=