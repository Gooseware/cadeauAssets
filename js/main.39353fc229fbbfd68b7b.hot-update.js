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
  var data = _taggedTemplateLiteral(["\n@font-face{\n  font-family:\"Apercu\";\n  src: url('https://cdn.jsdelivr.net/gh/Gooseware/cadeauAssets@master/fonts/Apercu.ttf')  format('truetype'); /* Safari, Android, iOS */\n  font-weight:400;\n}\n@font-face{}\n  font-family:\"Apercu\";\n  src: url('https://cdn.jsdelivr.net/gh/Gooseware/cadeauAssets@master/fonts/Apercu%20Italic.ttf')  format('truetype'); /* Safari, Android, iOS */\n  font-weight:400;\n  font-style: italic;\n}\n@font-face{\n  font-family:\"Apercu\";\n  src: url('https://cdn.jsdelivr.net/gh/Gooseware/cadeauAssets@master/fonts/Apercu%20Medium.ttf')  format('truetype'); /* Safari, Android, iOS */\n  font-weight:500;\n}\n@font-face{\n  font-family:\"Apercu\";\n  src: url('https://cdn.jsdelivr.net/gh/Gooseware/cadeauAssets@master/fonts/Apercu%20Bold.ttf')  format('truetype'); /* Safari, Android, iOS */\n  font-weight: 700;\n}\n@font-face{\n  font-family:\"Apercu\";\n  src: url('https://cdn.jsdelivr.net/gh/Gooseware/cadeauAssets@master/fonts/Apercu%20Bold%20Italic.ttf')  format('truetype'); /* Safari, Android, iOS */\n  font-weight: 700;\n  font-style: italic;\n}\n@font-face{\n  font-family:\"Apercu\"\n  src: url('https://cdn.jsdelivr.net/gh/Gooseware/cadeauAssets@master/fonts/Apercu%20Light.ttf')  format('truetype');\n  font-weight:200;\n}\n\nbody{\n  font-family: \"Apercu\", Times, serif\n  padding: 0;\n  margin: 0;\n  background: #013B51;\n  color: ", ";\n  font-size: 32px;\n  @media\n  only screen and (-webkit-min-device-pixel-ratio: 2),\n  only screen and (   min--moz-device-pixel-ratio: 2),\n  only screen and (     -o-min-device-pixel-ratio: 2/1),\n  only screen and (        min-device-pixel-ratio: 2),\n  only screen and (                min-resolution: 192dpi),\n  only screen and (                min-resolution: 2dppx) {\n    font-size: 64px;\n  }\n}\n\na{\n  color: ", ";\n  &:hover\n    color: ", ";\n}\n.logo{\n  object-fit: contain;\n  width: calc(100vw - 80px);\n  max-width: 500px;\n}\n.logoBottom{\n  object-fit: contain;\n  width: calc(100vw - 80px);\n  max-width: 200px;\n  margin: 0 auto;\n}\n.item{\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  flex-direction: column;\n  width: 100vw;\n  height: 100vh;\n}\n.itemScroll{\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  flex-direction: column;\n  width: 100vw;\n  height: 100vh;\n  overflow-y: auto;\n}\n\n.button{\n  border: 2px solid ", ";\n  font-weight: 500;\n  border-radius: 1.5em;\n  text-decoration: none;\n  padding: .5em 1em;\n  box-sizing: border-box;\n  &:hover{\n    text-decoration: none;\n  }\n}\n.medium{\n  font-weight: 500\n}\n.socialMedia{\n  width: 4rem;\n  object-fit: contain;\n}\n.socialLayout{\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  & > div:first-of-type{\n    padding-right: 4rem;\n  }\n}\n"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BcHAuanMiXSwibmFtZXMiOlsiZGV0ZXJtaW5lSG93VG9Mb2FkIiwicGFnZSIsImNvbG9yIiwiR2xvYmFsU3R5bGUiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIlVuaXZlcnNhbENvbXBvbmVudCIsInVuaXZlcnNhbCIsIm9uRXJyb3IiLCJlcnJvciIsIm1pbkRlbGF5IiwibG9hZGluZyIsIkxvYWRpbmciLCJOb3RGb3VuZCIsIkFwcCIsInN0YXRlIiwiaW5kZXgiLCJkb25lIiwiYmVmb3JlQ2hhbmdlIiwiYWZ0ZXJDaGFuZ2UiLCJoYW5kbGVFcnJvciIsInByb3BzIiwiaGlzdG9yeSIsImlkeCIsIm5leHRJbmRleCIsInBhZ2VzIiwicHVzaCIsImlzU3luYyIsInNldFN0YXRlIiwiaXNTZXJ2ZXIiLCJpc01vdW50IiwiUmVhY3QiLCJDb21wb25lbnQiLCJob3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7QUFFQTs7QUFDQSxJQUFNQSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCO0FBQUEsTUFBR0MsSUFBSCxRQUFHQSxJQUFIO0FBQUEsU0FBYyxPQUFPQSxJQUFQLEtBQWdCLFFBQWhCLEdBQTJCO0FBQUEsV0FBTUEsSUFBSSxFQUFWO0FBQUEsR0FBM0I7QUFBQTtBQUFBO0FBQUEsMEJBQTBDLDhFQUFZQSxJQUFaLEVBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxRkFBc0RBLElBQXREO0FBQUE7QUFBQTtBQUFBLHVIQUFzREEsSUFBdEQ7QUFBQTtBQUFBO0FBQUEsdUJBQXNEQSxJQUF0RDtBQUFBO0FBQUEsSUFBZDtBQUFBLENBQTNCOztBQUNBLElBQU1DLEtBQUssR0FBRyxTQUFkO0FBQ0EsSUFBTUMsV0FBVyxHQUFH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LFlBQUgsR0FBa0IsYUFBaEM7QUFDRDs7Ozs7Ozs7Ozs7RUE1RGVvQiw0Q0FBSyxDQUFDQyxTLEdBOER4QjtBQUNBOzs7ZUFDZUMsaUVBQUcsQ0FBQ25CLEdBQUQsQzs7QUFBSDs7Ozs7Ozs7OzswQkE3TFRiLGtCOzBCQUNBRSxLOzBCQUNBQyxXOzBCQWtIQUUsa0I7MEJBU0FRLEciLCJmaWxlIjoibWFpbi4zOTM1M2ZjMjI5ZmJiZmQ2OGI3Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBob3QgfSBmcm9tICdyZWFjdC1ob3QtbG9hZGVyL3Jvb3QnXG4vL2ltcG9ydCB7IGNvbm5lY3QsIFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgdW5pdmVyc2FsIGZyb20gJ3JlYWN0LXVuaXZlcnNhbC1jb21wb25lbnQnXG4vL2ltcG9ydCBzdHlsZXMgZnJvbSAnLi4vY3NzL0FwcCdcbmltcG9ydCB7IHBhZ2VzLCBuZXh0SW5kZXgsIGluZGV4RnJvbVBhdGggfSBmcm9tICcuLi91dGlscydcbmltcG9ydCBIb21lIGZyb20gJy4vUGFnZXMvSG9tZSdcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4vTG9hZGluZydcbmltcG9ydCBOb3RGb3VuZCBmcm9tICcuL05vdEZvdW5kJ1xuaW1wb3J0IHN0eWxlZCwgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG4vL2ltcG9ydCBjb25maWd1cmVTdG9yZSBmcm9tICcuLi9zdG9yZS9jb25maWd1cmUnXG5cbi8vY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSgpO1xuY29uc3QgZGV0ZXJtaW5lSG93VG9Mb2FkID0gKHsgcGFnZSB9KSA9PiB0eXBlb2YgcGFnZSAhPT0gJ3N0cmluZycgPyAoKSA9PiBwYWdlKCkgOiBpbXBvcnQoYC4vJHtwYWdlfWApXG5jb25zdCBjb2xvciA9ICcjRDBBRjk1JztcbmNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXG5AZm9udC1mYWNle1xuICBmb250LWZhbWlseTpcIkFwZXJjdVwiO1xuICBzcmM6IHVybCgnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL0dvb3Nld2FyZS9jYWRlYXVBc3NldHNAbWFzdGVyL2ZvbnRzL0FwZXJjdS50dGYnKSAgZm9ybWF0KCd0cnVldHlwZScpOyAvKiBTYWZhcmksIEFuZHJvaWQsIGlPUyAqL1xuICBmb250LXdlaWdodDo0MDA7XG59XG5AZm9udC1mYWNle31cbiAgZm9udC1mYW1pbHk6XCJBcGVyY3VcIjtcbiAgc3JjOiB1cmwoJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9Hb29zZXdhcmUvY2FkZWF1QXNzZXRzQG1hc3Rlci9mb250cy9BcGVyY3UlMjBJdGFsaWMudHRmJykgIGZvcm1hdCgndHJ1ZXR5cGUnKTsgLyogU2FmYXJpLCBBbmRyb2lkLCBpT1MgKi9cbiAgZm9udC13ZWlnaHQ6NDAwO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5AZm9udC1mYWNle1xuICBmb250LWZhbWlseTpcIkFwZXJjdVwiO1xuICBzcmM6IHVybCgnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL0dvb3Nld2FyZS9jYWRlYXVBc3NldHNAbWFzdGVyL2ZvbnRzL0FwZXJjdSUyME1lZGl1bS50dGYnKSAgZm9ybWF0KCd0cnVldHlwZScpOyAvKiBTYWZhcmksIEFuZHJvaWQsIGlPUyAqL1xuICBmb250LXdlaWdodDo1MDA7XG59XG5AZm9udC1mYWNle1xuICBmb250LWZhbWlseTpcIkFwZXJjdVwiO1xuICBzcmM6IHVybCgnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL0dvb3Nld2FyZS9jYWRlYXVBc3NldHNAbWFzdGVyL2ZvbnRzL0FwZXJjdSUyMEJvbGQudHRmJykgIGZvcm1hdCgndHJ1ZXR5cGUnKTsgLyogU2FmYXJpLCBBbmRyb2lkLCBpT1MgKi9cbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbkBmb250LWZhY2V7XG4gIGZvbnQtZmFtaWx5OlwiQXBlcmN1XCI7XG4gIHNyYzogdXJsKCdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvR29vc2V3YXJlL2NhZGVhdUFzc2V0c0BtYXN0ZXIvZm9udHMvQXBlcmN1JTIwQm9sZCUyMEl0YWxpYy50dGYnKSAgZm9ybWF0KCd0cnVldHlwZScpOyAvKiBTYWZhcmksIEFuZHJvaWQsIGlPUyAqL1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5AZm9udC1mYWNle1xuICBmb250LWZhbWlseTpcIkFwZXJjdVwiXG4gIHNyYzogdXJsKCdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvR29vc2V3YXJlL2NhZGVhdUFzc2V0c0BtYXN0ZXIvZm9udHMvQXBlcmN1JTIwTGlnaHQudHRmJykgIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbiAgZm9udC13ZWlnaHQ6MjAwO1xufVxuXG5ib2R5e1xuICBmb250LWZhbWlseTogXCJBcGVyY3VcIiwgVGltZXMsIHNlcmlmXG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYmFja2dyb3VuZDogIzAxM0I1MTtcbiAgY29sb3I6ICR7Y29sb3J9O1xuICBmb250LXNpemU6IDMycHg7XG4gIEBtZWRpYVxuICBvbmx5IHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksXG4gIG9ubHkgc2NyZWVuIGFuZCAoICAgbWluLS1tb3otZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSxcbiAgb25seSBzY3JlZW4gYW5kICggICAgIC1vLW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIvMSksXG4gIG9ubHkgc2NyZWVuIGFuZCAoICAgICAgICBtaW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSxcbiAgb25seSBzY3JlZW4gYW5kICggICAgICAgICAgICAgICAgbWluLXJlc29sdXRpb246IDE5MmRwaSksXG4gIG9ubHkgc2NyZWVuIGFuZCAoICAgICAgICAgICAgICAgIG1pbi1yZXNvbHV0aW9uOiAyZHBweCkge1xuICAgIGZvbnQtc2l6ZTogNjRweDtcbiAgfVxufVxuXG5he1xuICBjb2xvcjogJHtjb2xvcn07XG4gICY6aG92ZXJcbiAgICBjb2xvcjogJHtjb2xvcn07XG59XG4ubG9nb3tcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgd2lkdGg6IGNhbGMoMTAwdncgLSA4MHB4KTtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbn1cbi5sb2dvQm90dG9te1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICB3aWR0aDogY2FsYygxMDB2dyAtIDgwcHgpO1xuICBtYXgtd2lkdGg6IDIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5pdGVte1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG59XG4uaXRlbVNjcm9sbHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uYnV0dG9ue1xuICBib3JkZXI6IDJweCBzb2xpZCAke2NvbG9yfTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYm9yZGVyLXJhZGl1czogMS41ZW07XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcGFkZGluZzogLjVlbSAxZW07XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICY6aG92ZXJ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG59XG4ubWVkaXVte1xuICBmb250LXdlaWdodDogNTAwXG59XG4uc29jaWFsTWVkaWF7XG4gIHdpZHRoOiA0cmVtO1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuLnNvY2lhbExheW91dHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICYgPiBkaXY6Zmlyc3Qtb2YtdHlwZXtcbiAgICBwYWRkaW5nLXJpZ2h0OiA0cmVtO1xuICB9XG59XG5gXG5cbmNvbnN0IFVuaXZlcnNhbENvbXBvbmVudCA9IHVuaXZlcnNhbChkZXRlcm1pbmVIb3dUb0xvYWQsIHtcbiAgb25FcnJvcjogZXJyb3IgPT4ge1xuICAgIHRocm93IGVycm9yXG4gIH0sXG4gIG1pbkRlbGF5OiAxMjAwLFxuICBsb2FkaW5nOiBMb2FkaW5nLFxuICBlcnJvcjogTm90Rm91bmRcbn0pXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGluZGV4LCBkb25lLCBsb2FkaW5nIH0gPSB0aGlzLnN0YXRlXG4gICAgcmV0dXJuIChcbiAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgPEdsb2JhbFN0eWxlIC8+XG4gICAgICAgIDxVbml2ZXJzYWxDb21wb25lbnRcbiAgICAgICAgICBwYWdlPSdQYWdlcy9Ib21lJ1xuICAgICAgICAgIG9uQmVmb3JlPXt0aGlzLmJlZm9yZUNoYW5nZX1cbiAgICAgICAgICBvbkFmdGVyPXt0aGlzLmFmdGVyQ2hhbmdlfVxuICAgICAgICAgIG9uRXJyb3I9e3RoaXMuaGFuZGxlRXJyb3J9XG4gICAgICAgIC8+XG4gICAgICA8L0ZyYWdtZW50PlxuICAgIClcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgZG9uZTogZmFsc2UsXG4gICAgICBlcnJvcjogZmFsc2VcbiAgICB9XG4gIH1cblxuXG4gIGNoYW5nZVBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBsb2FkaW5nLCBpbmRleCB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IHsgaGlzdG9yeSB9ID0gdGhpcy5wcm9wc1xuICAgIGlmIChsb2FkaW5nKSByZXR1cm5cblxuICAgIGNvbnN0IGlkeCA9IG5leHRJbmRleChpbmRleClcbiAgICBjb25zdCBwYWdlID0gcGFnZXNbaWR4XVxuXG4gICAgaGlzdG9yeS5wdXNoKGAvJHtwYWdlfWApXG4gIH1cblxuICBiZWZvcmVDaGFuZ2UgPSAoeyBpc1N5bmMgfSkgPT4ge1xuICAgIGlmICghaXNTeW5jKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSwgZXJyb3I6IGZhbHNlIH0pXG4gICAgfVxuICB9XG5cbiAgYWZ0ZXJDaGFuZ2UgPSAoeyBpc1N5bmMsIGlzU2VydmVyLCBpc01vdW50IH0pID0+IHtcbiAgICBpZiAoIWlzU3luYykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlLCBlcnJvcjogZmFsc2UgfSlcbiAgICB9XG4gICAgZWxzZSBpZiAoIWlzU2VydmVyICYmICFpc01vdW50KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZG9uZTogdHJ1ZSwgZXJyb3I6IGZhbHNlIH0pXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlRXJyb3IgPSBlcnJvciA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yOiB0cnVlLCBsb2FkaW5nOiBmYWxzZSB9KVxuICB9XG5cbiAgYnV0dG9uVGV4dCgpIHtcbiAgICBjb25zdCB7IGxvYWRpbmcsIGVycm9yIH0gPSB0aGlzLnN0YXRlXG4gICAgaWYgKGVycm9yKSByZXR1cm4gJ0VSUk9SJ1xuICAgIHJldHVybiBsb2FkaW5nID8gJ0xPQURJTkcuLi4nIDogJ0NIQU5HRSBQQUdFJ1xuICB9XG59XG4vLyBjb25zdCBBcHBzID0gY29ubmVjdCgoc3RvcmUpID0+IHtyZXR1cm4geyBwYWdlOnN0b3JlLnJvdXRlcyB9fSApKEFwcClcbi8vIGNvbnN0IFByb3ZpZGVkID0gKCkgPT4gKDxQcm92aWRlciBzdG9yZT17c3RvcmV9PjxBcHBzIC8+PC9Qcm92aWRlcj4pXG5leHBvcnQgZGVmYXVsdCBob3QoQXBwKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==