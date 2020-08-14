module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Kh3m\\Documents\\projects\\austinExpress\\dashboard\\components\\Layout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const layout = props => {
  return __jsx("div", {
    className: "jsx-2321627817" + " " + "page-layout",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }
  }, props.children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2321627817",
    __self: undefined
  }, "*{box-sizing:border-box;}.page-layout{width:100%;height:100%;}body{margin:0;padding:0;font-family:\"Open Sans\",san-serif;font-size:16px;color:#0e2a47;background-color:#fefefe;}h1,h2,h3,h4,h5,h6{margin:0px;}ul{padding:0;margin:0;list-style:none;}input{font-family:\"Open Sans\",san-serif;}a{-webkit-text-decoration:none;text-decoration:none;color:#1b222b;}select{background-position:right 12px center;background-repeat:no-repeat;backgroung-color:white;padding:8px 30px 8px 0px;font-family:\"Open Sans\",san-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcS2gzbVxcRG9jdW1lbnRzXFxwcm9qZWN0c1xcYXVzdGluRXhwcmVzc1xcZGFzaGJvYXJkXFxjb21wb25lbnRzXFxMYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSXlCLEFBR2lDLEFBR1gsQUFJRixBQWNFLEFBSUQsQUFNeUIsQUFHZCxBQUtpQixTQS9CNUIsQ0FrQkQsQ0F0QkcsQUFrQmQsUUFicUMsQUFrQm5CLEdBMUJsQixDQUlBLFdBMkJBLENBSkEsR0FZOEIsWUFMZCxHQXpCQyxXQTBCakIsRUFNeUIsRUEvQlQsY0FDVyxPQStCQSxrQkE5QjNCLE9BK0JxQyxrQ0FDckMiLCJmaWxlIjoiQzpcXFVzZXJzXFxLaDNtXFxEb2N1bWVudHNcXHByb2plY3RzXFxhdXN0aW5FeHByZXNzXFxkYXNoYm9hcmRcXGNvbXBvbmVudHNcXExheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGxheW91dCA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtbGF5b3V0XCI+XHJcbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAqIHtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wYWdlLWxheW91dCB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbi1zZXJpZjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIGNvbG9yOiAjMGUyYTQ3O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgxLFxyXG4gICAgICAgIGgyLFxyXG4gICAgICAgIGgzLFxyXG4gICAgICAgIGg0LFxyXG4gICAgICAgIGg1LFxyXG4gICAgICAgIGg2IHtcclxuICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdWwge1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2FuLXNlcmlmO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIGNvbG9yOiAjMWIyMjJiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZWxlY3Qge1xyXG4gICAgICAgICAgLy8gLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgMTJweCBjZW50ZXI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2ltYWdlcy9kb3dubG9hZC5zdmdcIik7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5nLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIHBhZGRpbmc6IDhweCAzMHB4IDhweCAwcHg7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2FuLXNlcmlmO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxheW91dDtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\Kh3m\\\\Documents\\\\projects\\\\austinExpress\\\\dashboard\\\\components\\\\Layout.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (layout);

/***/ }),

/***/ "./hooks/store/actions/actionTypes.js":
/*!********************************************!*\
  !*** ./hooks/store/actions/actionTypes.js ***!
  \********************************************/
/*! exports provided: PRODUCT_START, PRODUCT_RESPONSE, PRODUCT_ERROR, PRODUCT_DELETE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCT_START", function() { return PRODUCT_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCT_RESPONSE", function() { return PRODUCT_RESPONSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCT_ERROR", function() { return PRODUCT_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCT_DELETE", function() { return PRODUCT_DELETE; });
// Product related actions
const PRODUCT_START = "PRODUCT_START";
const PRODUCT_RESPONSE = "PRODUCT_RESPONSE";
const PRODUCT_ERROR = "PRODUCT_ERROR";
const PRODUCT_DELETE = "PRODUCT_DELETE";

/***/ }),

/***/ "./hooks/store/reducers/product.js":
/*!*****************************************!*\
  !*** ./hooks/store/reducers/product.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store */ "./hooks/store/store.js");
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/actionTypes */ "./hooks/store/actions/actionTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initialState = {
  product: {
    data: [],
    errors: null,
    loading: false
  }
};

const configureProduct = () => {
  const productActions = {
    [_actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["PRODUCT_START"]]:
    /*global state passed*/
    state => {
      return _objectSpread(_objectSpread({}, state), {}, {
        product: _objectSpread(_objectSpread({}, state.product), {}, {
          loading: true
        })
      });
    },
    [_actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["PRODUCT_RESPONSE"]]: (state, data) => {
      if (state.product.data.length === data.length) {
        console.log("UP TO DATE..");
        return;
      }

      const updatedData = state.product.data.concat(data);
      return _objectSpread(_objectSpread({}, state), {}, {
        product: _objectSpread(_objectSpread({}, state.product), {}, {
          data: updatedData,
          loading: false,
          error: false
        })
      });
    },
    [_actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["PRODUCT_DELETE"]]: (state, productId) => {
      return _objectSpread(_objectSpread({}, state), {}, {
        product: _objectSpread(_objectSpread({}, state.product), {}, {
          data: state.product.data.filter(d => d._id !== productId),
          loading: false,
          error: false
        })
      });
    },
    [_actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["PRODUCT_ERROR"]]: (state, errors) => {
      console.log(errors);
      return _objectSpread(_objectSpread({}, state), {}, {
        product: _objectSpread(_objectSpread({}, state.product), {}, {
          errors: errors,
          loading: false
        })
      });
    }
  };
  Object(_store__WEBPACK_IMPORTED_MODULE_0__["initStore"])(initialState, productActions);
};

/* harmony default export */ __webpack_exports__["default"] = (configureProduct);

/***/ }),

/***/ "./hooks/store/store.js":
/*!******************************!*\
  !*** ./hooks/store/store.js ***!
  \******************************/
/*! exports provided: useStore, initStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStore", function() { return useStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initStore", function() { return initStore; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


let globalState = {};
let listeners = [];
let actions = {};
const useStore = (shouldListen = true) => {
  const setState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(globalState)[1];

  const dispatch = (actionIdentifier, payload) => {
    // Check if action[actionIdentifier] is not undefined
    if (actions[actionIdentifier]) {
      const newState = actions[actionIdentifier](globalState, payload);
      globalState = _objectSpread(_objectSpread({}, globalState), newState);

      for (const listener of listeners) {
        listener(globalState);
      }
    } else {
      console.log("AGAIN");
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (shouldListen) {
      listeners.push(setState);
    }

    return () => {
      if (shouldListen) {
        listeners = listeners.filter(li => li !== setState);
      }
    };
  }, [setState, shouldListen]);
  return [globalState, dispatch];
};
const initStore = (initialState, userActions) => {
  if (initialState) {
    globalState = _objectSpread(_objectSpread({}, globalState), initialState);
  }

  actions = _objectSpread(_objectSpread({}, actions), userActions);
};

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn(`Warning: the \`Container\` in \`_app\` has been deprecated and should be removed. https://err.sh/vercel/next.js/app-container-deprecated`);
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error(`Warning: the 'url' property is deprecated. https://err.sh/vercel/next.js/url-deprecated`);
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _hooks_store_reducers_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/store/reducers/product */ "./hooks/store/reducers/product.js");
var _jsxFileName = "C:\\Users\\Kh3m\\Documents\\projects\\austinExpress\\dashboard\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_1___default.a {
  render() {
    // configure store
    Object(_hooks_store_reducers_product__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const {
      Component,
      pageProps
    } = this.props;
    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 7
      }
    }, __jsx(Component, _extends({}, pageProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2hvb2tzL3N0b3JlL2FjdGlvbnMvYWN0aW9uVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vaG9va3Mvc3RvcmUvcmVkdWNlcnMvcHJvZHVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ob29rcy9zdG9yZS9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvYXBwLmpzIiwid2VicGFjazovLy8uLi8uLi9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zdHlsZVwiIl0sIm5hbWVzIjpbImxheW91dCIsInByb3BzIiwiY2hpbGRyZW4iLCJQUk9EVUNUX1NUQVJUIiwiUFJPRFVDVF9SRVNQT05TRSIsIlBST0RVQ1RfRVJST1IiLCJQUk9EVUNUX0RFTEVURSIsImluaXRpYWxTdGF0ZSIsInByb2R1Y3QiLCJkYXRhIiwiZXJyb3JzIiwibG9hZGluZyIsImNvbmZpZ3VyZVByb2R1Y3QiLCJwcm9kdWN0QWN0aW9ucyIsImFjdGlvblR5cGVzIiwic3RhdGUiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwidXBkYXRlZERhdGEiLCJjb25jYXQiLCJlcnJvciIsInByb2R1Y3RJZCIsImZpbHRlciIsImQiLCJfaWQiLCJpbml0U3RvcmUiLCJnbG9iYWxTdGF0ZSIsImxpc3RlbmVycyIsImFjdGlvbnMiLCJ1c2VTdG9yZSIsInNob3VsZExpc3RlbiIsInNldFN0YXRlIiwidXNlU3RhdGUiLCJkaXNwYXRjaCIsImFjdGlvbklkZW50aWZpZXIiLCJwYXlsb2FkIiwibmV3U3RhdGUiLCJsaXN0ZW5lciIsInVzZUVmZmVjdCIsInB1c2giLCJsaSIsInVzZXJBY3Rpb25zIiwicGFnZVByb3BzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb21wb25lbnREaWRDYXRjaCIsInJlbmRlciIsIl9fTl9TU0ciLCJ1cmwiLCJjcmVhdGVVcmwiLCJBcHAiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiYXBwR2V0SW5pdGlhbFByb3BzIiwiZ2V0SW5pdGlhbFByb3BzIiwid2FybkNvbnRhaW5lciIsIndhcm5VcmwiLCJwIiwiYmFjayIsInJvdXRlciIsInB1c2hUbyIsInB1c2hSb3V0ZSIsImFzIiwicHVzaFVybCIsInJlcGxhY2UiLCJyZXBsYWNlVG8iLCJyZXBsYWNlUm91dGUiLCJyZXBsYWNlVXJsIiwiTXlBcHAiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hE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TUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxTQUFELGVBQWUwQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FERixDQURGO0FBS0Q7O0FBWnFCOztBQWVUeUIsb0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNkMiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsImNvbnN0IGxheW91dCA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtbGF5b3V0XCI+XHJcbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAqIHtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wYWdlLWxheW91dCB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbi1zZXJpZjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIGNvbG9yOiAjMGUyYTQ3O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgxLFxyXG4gICAgICAgIGgyLFxyXG4gICAgICAgIGgzLFxyXG4gICAgICAgIGg0LFxyXG4gICAgICAgIGg1LFxyXG4gICAgICAgIGg2IHtcclxuICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdWwge1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2FuLXNlcmlmO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIGNvbG9yOiAjMWIyMjJiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZWxlY3Qge1xyXG4gICAgICAgICAgLy8gLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgMTJweCBjZW50ZXI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2ltYWdlcy9kb3dubG9hZC5zdmdcIik7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5nLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIHBhZGRpbmc6IDhweCAzMHB4IDhweCAwcHg7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2FuLXNlcmlmO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxheW91dDtcclxuIiwiXHJcbi8vIFByb2R1Y3QgcmVsYXRlZCBhY3Rpb25zXHJcbmV4cG9ydCBjb25zdCBQUk9EVUNUX1NUQVJUID0gXCJQUk9EVUNUX1NUQVJUXCI7XHJcbmV4cG9ydCBjb25zdCBQUk9EVUNUX1JFU1BPTlNFID0gXCJQUk9EVUNUX1JFU1BPTlNFXCI7XHJcbmV4cG9ydCBjb25zdCBQUk9EVUNUX0VSUk9SID0gXCJQUk9EVUNUX0VSUk9SXCI7XHJcbmV4cG9ydCBjb25zdCBQUk9EVUNUX0RFTEVURSA9IFwiUFJPRFVDVF9ERUxFVEVcIjtcclxuIiwiXHJcbmltcG9ydCB7IGluaXRTdG9yZSB9IGZyb20gXCIuLi9zdG9yZVwiO1xyXG5pbXBvcnQgKiBhcyBhY3Rpb25UeXBlcyBmcm9tIFwiLi4vYWN0aW9ucy9hY3Rpb25UeXBlc1wiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgcHJvZHVjdDoge1xyXG4gICAgICAgIGRhdGE6IFtdLFxyXG4gICAgICAgIGVycm9yczogbnVsbCxcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBjb25maWd1cmVQcm9kdWN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcHJvZHVjdEFjdGlvbnMgPSB7XHJcbiAgICAgICAgW2FjdGlvblR5cGVzLlBST0RVQ1RfU1RBUlRdOiAoLypnbG9iYWwgc3RhdGUgcGFzc2VkKi8gc3RhdGUpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHByb2R1Y3Q6IHsuLi5zdGF0ZS5wcm9kdWN0LCBsb2FkaW5nOiB0cnVlIH19O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW2FjdGlvblR5cGVzLlBST0RVQ1RfUkVTUE9OU0VdOiAoc3RhdGUsIGRhdGEpID0+IHtcclxuICAgICAgICAgICAgaWYoc3RhdGUucHJvZHVjdC5kYXRhLmxlbmd0aCA9PT0gZGF0YS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVVAgVE8gREFURS4uXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWREYXRhID0gc3RhdGUucHJvZHVjdC5kYXRhLmNvbmNhdChkYXRhKTtcclxuICAgICAgICAgICAgcmV0dXJuIHsgXHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSwgXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0OiB7IFxyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLnByb2R1Y3QsIFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHVwZGF0ZWREYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBbYWN0aW9uVHlwZXMuUFJPRFVDVF9ERUxFVEVdOiAoc3RhdGUsIHByb2R1Y3RJZCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUucHJvZHVjdCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBzdGF0ZS5wcm9kdWN0LmRhdGEuZmlsdGVyKGQgPT4gZC5faWQgIT09IHByb2R1Y3RJZCksXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLFxyXG4gICAgICAgIFthY3Rpb25UeXBlcy5QUk9EVUNUX0VSUk9SXTogKHN0YXRlLCBlcnJvcnMpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3JzKVxyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcHJvZHVjdDogeyAuLi5zdGF0ZS5wcm9kdWN0LCBlcnJvcnM6IGVycm9ycywgbG9hZGluZzogZmFsc2V9fVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbml0U3RvcmUoaW5pdGlhbFN0YXRlLCBwcm9kdWN0QWN0aW9ucyk7ICAgIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25maWd1cmVQcm9kdWN0OyIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmxldCBnbG9iYWxTdGF0ZSA9IHt9O1xyXG5sZXQgbGlzdGVuZXJzID0gW107XHJcbmxldCBhY3Rpb25zID0ge307XHJcblxyXG5leHBvcnQgY29uc3QgdXNlU3RvcmUgPSAoIHNob3VsZExpc3RlbiA9IHRydWUgKSA9PiB7XHJcbiAgICBjb25zdCBzZXRTdGF0ZSA9IHVzZVN0YXRlKGdsb2JhbFN0YXRlKVsxXTtcclxuICAgIFxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSAoYWN0aW9uSWRlbnRpZmllciwgcGF5bG9hZCkgPT4ge1xyXG4gICAgICAgIC8vIENoZWNrIGlmIGFjdGlvblthY3Rpb25JZGVudGlmaWVyXSBpcyBub3QgdW5kZWZpbmVkXHJcbiAgICAgICAgaWYoYWN0aW9uc1thY3Rpb25JZGVudGlmaWVyXSkge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IGFjdGlvbnNbYWN0aW9uSWRlbnRpZmllcl0oZ2xvYmFsU3RhdGUsIHBheWxvYWQpO1xyXG4gICAgICAgICAgICBnbG9iYWxTdGF0ZSA9IHsgLi4uZ2xvYmFsU3RhdGUsIC4uLm5ld1N0YXRlIH07XHJcbiAgICBcclxuICAgICAgICAgICAgZm9yKGNvbnN0IGxpc3RlbmVyIG9mIGxpc3RlbmVycykge1xyXG4gICAgICAgICAgICAgICAgbGlzdGVuZXIoZ2xvYmFsU3RhdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJBR0FJTlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihzaG91bGRMaXN0ZW4pIHtcclxuICAgICAgICAgICAgbGlzdGVuZXJzLnB1c2goc2V0U3RhdGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZihzaG91bGRMaXN0ZW4pIHtcclxuICAgICAgICAgICAgICAgIGxpc3RlbmVycyA9IGxpc3RlbmVycy5maWx0ZXIobGkgPT4gbGkgIT09IHNldFN0YXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtzZXRTdGF0ZSwgc2hvdWxkTGlzdGVuXSk7XHJcblxyXG4gICAgcmV0dXJuIFtnbG9iYWxTdGF0ZSwgZGlzcGF0Y2hdO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdFN0b3JlID0gKGluaXRpYWxTdGF0ZSwgdXNlckFjdGlvbnMpID0+IHtcclxuICAgIGlmKGluaXRpYWxTdGF0ZSkge1xyXG4gICAgICAgIGdsb2JhbFN0YXRlID0geyAuLi5nbG9iYWxTdGF0ZSwgLi4uaW5pdGlhbFN0YXRlIH07XHJcbiAgICB9XHJcbiAgICBhY3Rpb25zID0geyAuLi5hY3Rpb25zLCAuLi51c2VyQWN0aW9ucyB9O1xyXG59IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiIsImltcG9ydCBSZWFjdCwgeyBFcnJvckluZm8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIGV4ZWNPbmNlLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGUsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJy4uL2NsaWVudC9yb3V0ZXInXG5cbmV4cG9ydCB7IEFwcEluaXRpYWxQcm9wcyB9XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHQgPSBBcHBDb250ZXh0VHlwZTxSb3V0ZXI+XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzPFAgPSB7fT4gPSBBcHBQcm9wc1R5cGU8Um91dGVyLCBQPlxuXG4vKipcbiAqIGBBcHBgIGNvbXBvbmVudCBpcyB1c2VkIGZvciBpbml0aWFsaXplIG9mIHBhZ2VzLiBJdCBhbGxvd3MgZm9yIG92ZXJ3cml0aW5nIGFuZCBmdWxsIGNvbnRyb2wgb2YgdGhlIGBwYWdlYCBpbml0aWFsaXphdGlvbi5cbiAqIFRoaXMgYWxsb3dzIGZvciBrZWVwaW5nIHN0YXRlIGJldHdlZW4gbmF2aWdhdGlvbiwgY3VzdG9tIGVycm9yIGhhbmRsaW5nLCBpbmplY3RpbmcgYWRkaXRpb25hbCBkYXRhLlxuICovXG5hc3luYyBmdW5jdGlvbiBhcHBHZXRJbml0aWFsUHJvcHMoe1xuICBDb21wb25lbnQsXG4gIGN0eCxcbn06IEFwcENvbnRleHQpOiBQcm9taXNlPEFwcEluaXRpYWxQcm9wcz4ge1xuICBjb25zdCBwYWdlUHJvcHMgPSBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KVxuICByZXR1cm4geyBwYWdlUHJvcHMgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHA8UCA9IHt9LCBDUCA9IHt9LCBTID0ge30+IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFxuICBQICYgQXBwUHJvcHM8Q1A+LFxuICBTXG4+IHtcbiAgc3RhdGljIG9yaWdHZXRJbml0aWFsUHJvcHMgPSBhcHBHZXRJbml0aWFsUHJvcHNcbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wc1xuXG4gIC8vIEtlcHQgaGVyZSBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG4gIC8vIFdoZW4gc29tZW9uZSBlbmRlZCBBcHAgdGhleSBjb3VsZCBjYWxsIGBzdXBlci5jb21wb25lbnREaWRDYXRjaGAuXG4gIC8vIEBkZXByZWNhdGVkIFRoaXMgbWV0aG9kIGlzIG5vIGxvbmdlciBuZWVkZWQuIEVycm9ycyBhcmUgY2F1Z2h0IGF0IHRoZSB0b3AgbGV2ZWxcbiAgY29tcG9uZW50RGlkQ2F0Y2goZXJyb3I6IEVycm9yLCBfZXJyb3JJbmZvOiBFcnJvckluZm8pOiB2b2lkIHtcbiAgICB0aHJvdyBlcnJvclxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcm91dGVyLCBDb21wb25lbnQsIHBhZ2VQcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gdGhpc1xuICAgICAgLnByb3BzIGFzIEFwcFByb3BzPENQPlxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wb25lbnRcbiAgICAgICAgey4uLnBhZ2VQcm9wc31cbiAgICAgICAge1xuICAgICAgICAgIC8vIHdlIGRvbid0IGFkZCB0aGUgbGVnYWN5IFVSTCBwcm9wIGlmIGl0J3MgdXNpbmcgbm9uLWxlZ2FjeVxuICAgICAgICAgIC8vIG1ldGhvZHMgbGlrZSBnZXRTdGF0aWNQcm9wcyBhbmQgZ2V0U2VydmVyU2lkZVByb3BzXG4gICAgICAgICAgLi4uKCEoX19OX1NTRyB8fCBfX05fU1NQKSA/IHsgdXJsOiBjcmVhdGVVcmwocm91dGVyKSB9IDoge30pXG4gICAgICAgIH1cbiAgICAgIC8+XG4gICAgKVxuICB9XG59XG5cbmxldCB3YXJuQ29udGFpbmVyOiAoKSA9PiB2b2lkXG5sZXQgd2FyblVybDogKCkgPT4gdm9pZFxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB3YXJuQ29udGFpbmVyID0gZXhlY09uY2UoKCkgPT4ge1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgIGBXYXJuaW5nOiB0aGUgXFxgQ29udGFpbmVyXFxgIGluIFxcYF9hcHBcXGAgaGFzIGJlZW4gZGVwcmVjYXRlZCBhbmQgc2hvdWxkIGJlIHJlbW92ZWQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2FwcC1jb250YWluZXItZGVwcmVjYXRlZGBcbiAgICApXG4gIH0pXG5cbiAgd2FyblVybCA9IGV4ZWNPbmNlKCgpID0+IHtcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgYFdhcm5pbmc6IHRoZSAndXJsJyBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy91cmwtZGVwcmVjYXRlZGBcbiAgICApXG4gIH0pXG59XG5cbi8vIEBkZXByZWNhdGVkIG5vb3AgZm9yIG5vdyB1bnRpbCByZW1vdmFsXG5leHBvcnQgZnVuY3Rpb24gQ29udGFpbmVyKHA6IGFueSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FybkNvbnRhaW5lcigpXG4gIHJldHVybiBwLmNoaWxkcmVuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVVcmwocm91dGVyOiBSb3V0ZXIpIHtcbiAgLy8gVGhpcyBpcyB0byBtYWtlIHN1cmUgd2UgZG9uJ3QgcmVmZXJlbmNlcyB0aGUgcm91dGVyIG9iamVjdCBhdCBjYWxsIHRpbWVcbiAgY29uc3QgeyBwYXRobmFtZSwgYXNQYXRoLCBxdWVyeSB9ID0gcm91dGVyXG4gIHJldHVybiB7XG4gICAgZ2V0IHF1ZXJ5KCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHF1ZXJ5XG4gICAgfSxcbiAgICBnZXQgcGF0aG5hbWUoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcGF0aG5hbWVcbiAgICB9LFxuICAgIGdldCBhc1BhdGgoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gYXNQYXRoXG4gICAgfSxcbiAgICBiYWNrOiAoKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByb3V0ZXIuYmFjaygpXG4gICAgfSxcbiAgICBwdXNoOiAodXJsOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcm91dGVyLnB1c2godXJsLCBhcylcbiAgICB9LFxuICAgIHB1c2hUbzogKGhyZWY6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIGNvbnN0IHB1c2hSb3V0ZSA9IGFzID8gaHJlZiA6ICcnXG4gICAgICBjb25zdCBwdXNoVXJsID0gYXMgfHwgaHJlZlxuXG4gICAgICByZXR1cm4gcm91dGVyLnB1c2gocHVzaFJvdXRlLCBwdXNoVXJsKVxuICAgIH0sXG4gICAgcmVwbGFjZTogKHVybDogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHJvdXRlci5yZXBsYWNlKHVybCwgYXMpXG4gICAgfSxcbiAgICByZXBsYWNlVG86IChocmVmOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICBjb25zdCByZXBsYWNlUm91dGUgPSBhcyA/IGhyZWYgOiAnJ1xuICAgICAgY29uc3QgcmVwbGFjZVVybCA9IGFzIHx8IGhyZWZcblxuICAgICAgcmV0dXJuIHJvdXRlci5yZXBsYWNlKHJlcGxhY2VSb3V0ZSwgcmVwbGFjZVVybClcbiAgICB9LFxuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBcHAsIHsgQ29udGFpbmVyIH0gZnJvbSBcIm5leHQvYXBwXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCBjb25maWd1cmVQcm9kdWN0IGZyb20gXCIuLi9ob29rcy9zdG9yZS9yZWR1Y2Vycy9wcm9kdWN0XCI7XHJcblxyXG5jbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgLy8gY29uZmlndXJlIHN0b3JlXHJcbiAgICBjb25maWd1cmVQcm9kdWN0KCk7XHJcblxyXG4gICAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc3R5bGVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==