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
console.log(_css_App__WEBPACK_IMPORTED_MODULE_5___default.a);

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
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("style", null, _css_App__WEBPACK_IMPORTED_MODULE_5___default.a.toString()), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(UniversalComponent, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BcHAuanMiXSwibmFtZXMiOlsiZGV0ZXJtaW5lSG93VG9Mb2FkIiwicGFnZSIsIlVuaXZlcnNhbENvbXBvbmVudCIsInVuaXZlcnNhbCIsIm9uRXJyb3IiLCJlcnJvciIsIm1pbkRlbGF5IiwibG9hZGluZyIsIkxvYWRpbmciLCJOb3RGb3VuZCIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZXMiLCJBcHAiLCJzdGF0ZSIsImluZGV4IiwiZG9uZSIsInRvU3RyaW5nIiwiYmVmb3JlQ2hhbmdlIiwiYWZ0ZXJDaGFuZ2UiLCJoYW5kbGVFcnJvciIsInByb3BzIiwiaGlzdG9yeSIsImlkeCIsIm5leHRJbmRleCIsInBhZ2VzIiwicHVzaCIsImlzU3luYyIsInNldFN0YXRlIiwiaXNTZXJ2ZXIiLCJpc01vdW50IiwiUmVhY3QiLCJDb21wb25lbnQiLCJob3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7QUFFQTs7QUFDQSxJQUFNQSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCO0FBQUEsTUFBR0MsSUFBSCxRQUFHQSxJQUFIO0FBQUEsU0FBYyxPQUFPQSxJQUFQLEtBQWdCLFFBQWhCLEdBQTJCO0FBQUEsV0FBTUEsSUFBSSxFQUFWO0FBQUEsR0FBM0I7QUFBQTtBQUFBO0FBQUEsMEJBQTBDLDhFQUFZQSxJQUFaLEVBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxRkFBc0RBLElBQXREO0FBQUE7QUFBQTtBQUFBLHVIQUFzREEsSUFBdEQ7QUFBQTtBQUFBO0FBQUEsdUJBQXNEQSxJQUF0RDtBQUFBO0FBQUEsSUFBZDtBQUFBLENBQTNCOztBQUVBLElBQU1DLGtCQUFrQixHQUFHQyxnRUFBUyxDQUFDSCxrQkFBRCxFQUFxQjtBQUN2REksU0FBTyxFQUFF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RyxDQUFDcEIsR0FBRCxDOztBQUFIOzs7Ozs7Ozs7OzBCQTdFVGIsa0I7MEJBRUFFLGtCOzBCQVNBVyxHIiwiZmlsZSI6Im1haW4uYjYxOTNhY2NjZDU4YWQ4ZGY0ZGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgaG90IH0gZnJvbSAncmVhY3QtaG90LWxvYWRlci9yb290J1xuLy9pbXBvcnQgeyBjb25uZWN0LCBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHVuaXZlcnNhbCBmcm9tICdyZWFjdC11bml2ZXJzYWwtY29tcG9uZW50J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9jc3MvQXBwJ1xuaW1wb3J0IHsgcGFnZXMsIG5leHRJbmRleCwgaW5kZXhGcm9tUGF0aCB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9QYWdlcy9Ib21lJ1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi9Mb2FkaW5nJ1xuaW1wb3J0IE5vdEZvdW5kIGZyb20gJy4vTm90Rm91bmQnXG4vL2ltcG9ydCBjb25maWd1cmVTdG9yZSBmcm9tICcuLi9zdG9yZS9jb25maWd1cmUnXG5cbi8vY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSgpO1xuY29uc3QgZGV0ZXJtaW5lSG93VG9Mb2FkID0gKHsgcGFnZSB9KSA9PiB0eXBlb2YgcGFnZSAhPT0gJ3N0cmluZycgPyAoKSA9PiBwYWdlKCkgOiBpbXBvcnQoYC4vJHtwYWdlfWApXG5cbmNvbnN0IFVuaXZlcnNhbENvbXBvbmVudCA9IHVuaXZlcnNhbChkZXRlcm1pbmVIb3dUb0xvYWQsIHtcbiAgb25FcnJvcjogZXJyb3IgPT4ge1xuICAgIHRocm93IGVycm9yXG4gIH0sXG4gIG1pbkRlbGF5OiAxMjAwLFxuICBsb2FkaW5nOiBMb2FkaW5nLFxuICBlcnJvcjogTm90Rm91bmRcbn0pXG5jb25zb2xlLmxvZyhzdHlsZXMpXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpbmRleCwgZG9uZSwgbG9hZGluZyB9ID0gdGhpcy5zdGF0ZVxuICAgIHJldHVybiAoXG4gICAgICA8RnJhZ21lbnQ+XG4gICAgICAgIDxzdHlsZT5cbiAgICAgICAgICB7c3R5bGVzLnRvU3RyaW5nKCl9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDxVbml2ZXJzYWxDb21wb25lbnRcbiAgICAgICAgICBwYWdlPSdQYWdlcy9Ib21lJ1xuICAgICAgICAgIG9uQmVmb3JlPXt0aGlzLmJlZm9yZUNoYW5nZX1cbiAgICAgICAgICBvbkFmdGVyPXt0aGlzLmFmdGVyQ2hhbmdlfVxuICAgICAgICAgIG9uRXJyb3I9e3RoaXMuaGFuZGxlRXJyb3J9XG4gICAgICAgIC8+XG4gICAgICA8L0ZyYWdtZW50PlxuICAgIClcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgZG9uZTogZmFsc2UsXG4gICAgICBlcnJvcjogZmFsc2VcbiAgICB9XG4gIH1cblxuXG4gIGNoYW5nZVBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBsb2FkaW5nLCBpbmRleCB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IHsgaGlzdG9yeSB9ID0gdGhpcy5wcm9wc1xuICAgIGlmIChsb2FkaW5nKSByZXR1cm5cblxuICAgIGNvbnN0IGlkeCA9IG5leHRJbmRleChpbmRleClcbiAgICBjb25zdCBwYWdlID0gcGFnZXNbaWR4XVxuXG4gICAgaGlzdG9yeS5wdXNoKGAvJHtwYWdlfWApXG4gIH1cblxuICBiZWZvcmVDaGFuZ2UgPSAoeyBpc1N5bmMgfSkgPT4ge1xuICAgIGlmICghaXNTeW5jKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSwgZXJyb3I6IGZhbHNlIH0pXG4gICAgfVxuICB9XG5cbiAgYWZ0ZXJDaGFuZ2UgPSAoeyBpc1N5bmMsIGlzU2VydmVyLCBpc01vdW50IH0pID0+IHtcbiAgICBpZiAoIWlzU3luYykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlLCBlcnJvcjogZmFsc2UgfSlcbiAgICB9XG4gICAgZWxzZSBpZiAoIWlzU2VydmVyICYmICFpc01vdW50KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZG9uZTogdHJ1ZSwgZXJyb3I6IGZhbHNlIH0pXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlRXJyb3IgPSBlcnJvciA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yOiB0cnVlLCBsb2FkaW5nOiBmYWxzZSB9KVxuICB9XG5cbiAgYnV0dG9uVGV4dCgpIHtcbiAgICBjb25zdCB7IGxvYWRpbmcsIGVycm9yIH0gPSB0aGlzLnN0YXRlXG4gICAgaWYgKGVycm9yKSByZXR1cm4gJ0VSUk9SJ1xuICAgIHJldHVybiBsb2FkaW5nID8gJ0xPQURJTkcuLi4nIDogJ0NIQU5HRSBQQUdFJ1xuICB9XG59XG4vLyBjb25zdCBBcHBzID0gY29ubmVjdCgoc3RvcmUpID0+IHtyZXR1cm4geyBwYWdlOnN0b3JlLnJvdXRlcyB9fSApKEFwcClcbi8vIGNvbnN0IFByb3ZpZGVkID0gKCkgPT4gKDxQcm92aWRlciBzdG9yZT17c3RvcmV9PjxBcHBzIC8+PC9Qcm92aWRlcj4pXG5leHBvcnQgZGVmYXVsdCBob3QoQXBwKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==