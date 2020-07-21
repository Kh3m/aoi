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

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/Backdrop.js":
/*!********************************!*\
  !*** ./components/Backdrop.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Projects\\Github Projects\\aoi\\client\\components\\Backdrop.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const backdrop = props => {
  return __jsx("div", {
    onClick: props.clicked,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4021926315", [props.show ? "block" : "none"]]]) + " " + "Backdrop",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4021926315",
    dynamic: [props.show ? "block" : "none"],
    __self: undefined
  }, `.Backdrop.__jsx-style-dynamic-selector{position:fixed;width:100%;height:100%;background-color:rgba(0,0,0,0.13);z-index:90;top:0px;right:0px;display:${props.show ? "block" : "none"};}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0c1xcR2l0aHViIFByb2plY3RzXFxhb2lcXGNsaWVudFxcY29tcG9uZW50c1xcQmFja2Ryb3AuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS2tCLEFBRzBCLGVBQ0osV0FDQyxZQUN5QixrQ0FDMUIsV0FDSCxRQUNFLFVBQzJCLHFDQUN2QyIsImZpbGUiOiJEOlxcUHJvamVjdHNcXEdpdGh1YiBQcm9qZWN0c1xcYW9pXFxjbGllbnRcXGNvbXBvbmVudHNcXEJhY2tkcm9wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgYmFja2Ryb3AgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJCYWNrZHJvcFwiIG9uQ2xpY2s9e3Byb3BzLmNsaWNrZWR9PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLkJhY2tkcm9wIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEzKTtcclxuICAgICAgICAgIHotaW5kZXg6IDkwO1xyXG4gICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogJHtwcm9wcy5zaG93ID8gXCJibG9ja1wiIDogXCJub25lXCJ9O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJhY2tkcm9wO1xyXG4iXX0= */
/*@ sourceURL=D:\\Projects\\Github Projects\\aoi\\client\\components\\Backdrop.js */`));
};

/* harmony default export */ __webpack_exports__["default"] = (backdrop);

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Navigations_Category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navigations/Category */ "./components/Navigations/Category.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\Projects\\Github Projects\\aoi\\client\\components\\Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const footer = () => {
  const categories = [{
    title: "Explore Austin",
    list: ["Shoes", "Brands", "Clothing", "Running", "Heals & Pumps", "Boots & Booties", "Clogs", "Slippers", "New Arrivals", "View all"]
  }, {
    title: "Customer Service",
    list: ["FAQ", "Help center", "Billing Information", "My Account", "Shipping & Returns"]
  }, {
    title: "About Austin",
    list: ["Contact us", "Customers Reviews", "Autin Benefits", "About us"]
  }];
  return __jsx("div", {
    className: "jsx-1222523730" + " " + "footer-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-1222523730" + " " + "footer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, categories.map((category, index) => __jsx(_components_Navigations_Category__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: index,
    category: category,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-1222523730",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx("h3", {
    className: "jsx-1222523730",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, "Connect With Us"), __jsx("div", {
    className: "jsx-1222523730" + " " + "socials",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "jsx-1222523730",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/images/facebook.svg",
    alt: "facebook",
    className: "jsx-1222523730",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "jsx-1222523730",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/images/instagram.svg",
    alt: "instagram",
    className: "jsx-1222523730",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "jsx-1222523730",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/images/twitter.svg",
    alt: "twitter",
    className: "jsx-1222523730",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "jsx-1222523730",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/images/pinterest.svg",
    alt: "pinterest",
    className: "jsx-1222523730",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "jsx-1222523730",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/images/youtube.svg",
    alt: "youtube",
    className: "jsx-1222523730",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  })))))), "Copyright \xA9 austinExpress.com 2020", __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1490524150",
    __self: undefined
  }, ".footer-wrapper.jsx-1222523730{width:100%;background-color:#1b222b;color:#8f9397;padding:0px 10px 10px 10px;}.footer.jsx-1222523730{width:100%;min-height:500px;margin:50px auto 0 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:50px 3% 50px 3%;color:#cbcdcf;}.socials.jsx-1222523730{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-top:20px;}.socials.jsx-1222523730 img.jsx-1222523730{width:60%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0c1xcR2l0aHViIFByb2plY3RzXFxhb2lcXGNsaWVudFxcY29tcG9uZW50c1xcRm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRFa0IsQUFHc0IsQUFNQSxBQVNBLEFBUUQsVUFDWixDQXZCMkIsQUFNUixBQVNKLGlCQVJXLFFBTlYsY0FDYSxFQU1kLHlCQUxmLFFBYWdDLHlDQVBBLDBFQVFkLGdCQUVsQix5QkFUMEIsd0JBQ1YsY0FDaEIiLCJmaWxlIjoiRDpcXFByb2plY3RzXFxHaXRodWIgUHJvamVjdHNcXGFvaVxcY2xpZW50XFxjb21wb25lbnRzXFxGb290ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDYXRlZ29yeSBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9ucy9DYXRlZ29yeVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5jb25zdCBmb290ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgY2F0ZWdvcmllcyA9IFtcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiRXhwbG9yZSBBdXN0aW5cIixcclxuICAgICAgbGlzdDogW1xyXG4gICAgICAgIFwiU2hvZXNcIixcclxuICAgICAgICBcIkJyYW5kc1wiLFxyXG4gICAgICAgIFwiQ2xvdGhpbmdcIixcclxuICAgICAgICBcIlJ1bm5pbmdcIixcclxuICAgICAgICBcIkhlYWxzICYgUHVtcHNcIixcclxuICAgICAgICBcIkJvb3RzICYgQm9vdGllc1wiLFxyXG4gICAgICAgIFwiQ2xvZ3NcIixcclxuICAgICAgICBcIlNsaXBwZXJzXCIsXHJcbiAgICAgICAgXCJOZXcgQXJyaXZhbHNcIixcclxuICAgICAgICBcIlZpZXcgYWxsXCIsXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG5cclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiQ3VzdG9tZXIgU2VydmljZVwiLFxyXG4gICAgICBsaXN0OiBbXHJcbiAgICAgICAgXCJGQVFcIixcclxuICAgICAgICBcIkhlbHAgY2VudGVyXCIsXHJcbiAgICAgICAgXCJCaWxsaW5nIEluZm9ybWF0aW9uXCIsXHJcbiAgICAgICAgXCJNeSBBY2NvdW50XCIsXHJcbiAgICAgICAgXCJTaGlwcGluZyAmIFJldHVybnNcIixcclxuICAgICAgXSxcclxuICAgIH0sXHJcblxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJBYm91dCBBdXN0aW5cIixcclxuICAgICAgbGlzdDogW1wiQ29udGFjdCB1c1wiLCBcIkN1c3RvbWVycyBSZXZpZXdzXCIsIFwiQXV0aW4gQmVuZWZpdHNcIiwgXCJBYm91dCB1c1wiXSxcclxuICAgIH0sXHJcbiAgXTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItd3JhcHBlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPlxyXG4gICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnksIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8Q2F0ZWdvcnkga2V5PXtpbmRleH0gY2F0ZWdvcnk9e2NhdGVnb3J5fSAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aDM+Q29ubmVjdCBXaXRoIFVzPC9oMz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsc1wiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ZhY2Vib29rLnN2Z1wiIGFsdD1cImZhY2Vib29rXCIgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pbnN0YWdyYW0uc3ZnXCIgYWx0PVwiaW5zdGFncmFtXCIgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy90d2l0dGVyLnN2Z1wiIGFsdD1cInR3aXR0ZXJcIiAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3BpbnRlcmVzdC5zdmdcIiBhbHQ9XCJwaW50ZXJlc3RcIiAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3lvdXR1YmUuc3ZnXCIgYWx0PVwieW91dHViZVwiIC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIENvcHlyaWdodCAmY29weTsgYXVzdGluRXhwcmVzcy5jb20gMjAyMFxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmZvb3Rlci13cmFwcGVyIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFiMjIyYjtcclxuICAgICAgICAgIGNvbG9yOiAjOGY5Mzk3O1xyXG4gICAgICAgICAgcGFkZGluZzogMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9vdGVyIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWluLWhlaWdodDogNTAwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDUwcHggYXV0byAwIGF1dG87XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgcGFkZGluZzogNTBweCAzJSA1MHB4IDMlO1xyXG4gICAgICAgICAgY29sb3I6ICNjYmNkY2Y7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zb2NpYWxzIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAvLyAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNvY2lhbHMgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgLmZvb3RlciA+IGRpdiB7XHJcbiAgICAgICAgICBmbGV4LWJhc2lzOiAyMyU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb290ZXItd3JhcHBlciBhIHtcclxuICAgICAgICAgIGNvbG9yOiAjY2JjZGNmO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9vdGVyIGxpIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzFiMjIyYjtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmb290ZXI7XHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\Projects\\\\Github Projects\\\\aoi\\\\client\\\\components\\\\Footer.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1409775597",
    __self: undefined
  }, ".footer>div{-webkit-flex-basis:23%;-ms-flex-preferred-size:23%;flex-basis:23%;}.footer-wrapper a{color:#cbcdcf;}.footer li{margin-bottom:10px;border-bottom:1px solid #1b222b;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0c1xcR2l0aHViIFByb2plY3RzXFxhb2lcXGNsaWVudFxcY29tcG9uZW50c1xcRm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdHeUIsQUFHMEIsQUFHRCxBQUdLLGNBRnJCLEtBR2tDLGdDQUNsQyxlQVBBIiwiZmlsZSI6IkQ6XFxQcm9qZWN0c1xcR2l0aHViIFByb2plY3RzXFxhb2lcXGNsaWVudFxcY29tcG9uZW50c1xcRm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2F0ZWdvcnkgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2aWdhdGlvbnMvQ2F0ZWdvcnlcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuY29uc3QgZm9vdGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNhdGVnb3JpZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkV4cGxvcmUgQXVzdGluXCIsXHJcbiAgICAgIGxpc3Q6IFtcclxuICAgICAgICBcIlNob2VzXCIsXHJcbiAgICAgICAgXCJCcmFuZHNcIixcclxuICAgICAgICBcIkNsb3RoaW5nXCIsXHJcbiAgICAgICAgXCJSdW5uaW5nXCIsXHJcbiAgICAgICAgXCJIZWFscyAmIFB1bXBzXCIsXHJcbiAgICAgICAgXCJCb290cyAmIEJvb3RpZXNcIixcclxuICAgICAgICBcIkNsb2dzXCIsXHJcbiAgICAgICAgXCJTbGlwcGVyc1wiLFxyXG4gICAgICAgIFwiTmV3IEFycml2YWxzXCIsXHJcbiAgICAgICAgXCJWaWV3IGFsbFwiLFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkN1c3RvbWVyIFNlcnZpY2VcIixcclxuICAgICAgbGlzdDogW1xyXG4gICAgICAgIFwiRkFRXCIsXHJcbiAgICAgICAgXCJIZWxwIGNlbnRlclwiLFxyXG4gICAgICAgIFwiQmlsbGluZyBJbmZvcm1hdGlvblwiLFxyXG4gICAgICAgIFwiTXkgQWNjb3VudFwiLFxyXG4gICAgICAgIFwiU2hpcHBpbmcgJiBSZXR1cm5zXCIsXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG5cclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiQWJvdXQgQXVzdGluXCIsXHJcbiAgICAgIGxpc3Q6IFtcIkNvbnRhY3QgdXNcIiwgXCJDdXN0b21lcnMgUmV2aWV3c1wiLCBcIkF1dGluIEJlbmVmaXRzXCIsIFwiQWJvdXQgdXNcIl0sXHJcbiAgICB9LFxyXG4gIF07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLXdyYXBwZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cclxuICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPENhdGVnb3J5IGtleT17aW5kZXh9IGNhdGVnb3J5PXtjYXRlZ29yeX0gLz5cclxuICAgICAgICApKX1cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGgzPkNvbm5lY3QgV2l0aCBVczwvaDM+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbHNcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9mYWNlYm9vay5zdmdcIiBhbHQ9XCJmYWNlYm9va1wiIC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaW5zdGFncmFtLnN2Z1wiIGFsdD1cImluc3RhZ3JhbVwiIC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvdHdpdHRlci5zdmdcIiBhbHQ9XCJ0d2l0dGVyXCIgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9waW50ZXJlc3Quc3ZnXCIgYWx0PVwicGludGVyZXN0XCIgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy95b3V0dWJlLnN2Z1wiIGFsdD1cInlvdXR1YmVcIiAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBDb3B5cmlnaHQgJmNvcHk7IGF1c3RpbkV4cHJlc3MuY29tIDIwMjBcclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5mb290ZXItd3JhcHBlciB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxYjIyMmI7XHJcbiAgICAgICAgICBjb2xvcjogIzhmOTM5NztcclxuICAgICAgICAgIHBhZGRpbmc6IDBweCAxMHB4IDEwcHggMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvb3RlciB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiA1MHB4IGF1dG8gMCBhdXRvO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgIHBhZGRpbmc6IDUwcHggMyUgNTBweCAzJTtcclxuICAgICAgICAgIGNvbG9yOiAjY2JjZGNmO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc29jaWFscyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zb2NpYWxzIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgIC5mb290ZXIgPiBkaXYge1xyXG4gICAgICAgICAgZmxleC1iYXNpczogMjMlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9vdGVyLXdyYXBwZXIgYSB7XHJcbiAgICAgICAgICBjb2xvcjogI2NiY2RjZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvb3RlciBsaSB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMxYjIyMmI7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZm9vdGVyO1xyXG4iXX0= */\n/*@ sourceURL=D:\\\\Projects\\\\Github Projects\\\\aoi\\\\client\\\\components\\\\Footer.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (footer);

/***/ }),

/***/ "./components/Header/HeadBottom.js":
/*!*****************************************!*\
  !*** ./components/Header/HeadBottom.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Logo */ "./components/Logo.js");
/* harmony import */ var _SearchBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SearchBox */ "./components/SearchBox.js");
/* harmony import */ var _Navigations_Navigations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Navigations/Navigations */ "./components/Navigations/Navigations.js");
var _jsxFileName = "D:\\Projects\\Github Projects\\aoi\\client\\components\\Header\\HeadBottom.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const headBottom = () => {
  return __jsx("div", {
    className: "jsx-1386641026" + " " + "header-bottom",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx(_Logo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }), __jsx(_Navigations_Navigations__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }), __jsx(_SearchBox__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1386641026",
    __self: undefined
  }, ".header-bottom.jsx-1386641026{width:100%;margin:0px auto;padding:0 3%;height:100px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0c1xcR2l0aHViIFByb2plY3RzXFxhb2lcXGNsaWVudFxcY29tcG9uZW50c1xcSGVhZGVyXFxIZWFkQm90dG9tLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNrQixBQUdzQixXQUNLLGdCQUNILGFBQ0EsYUFDQSwwRUFDTSw2RkFDVyxtSEFDaEMiLCJmaWxlIjoiRDpcXFByb2plY3RzXFxHaXRodWIgUHJvamVjdHNcXGFvaVxcY2xpZW50XFxjb21wb25lbnRzXFxIZWFkZXJcXEhlYWRCb3R0b20uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMb2dvIGZyb20gXCIuLi9Mb2dvXCI7XHJcbmltcG9ydCBTZWFyY2hCb3ggZnJvbSBcIi4uL1NlYXJjaEJveFwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvbnMgZnJvbSBcIi4uL05hdmlnYXRpb25zL05hdmlnYXRpb25zXCI7XHJcblxyXG5jb25zdCBoZWFkQm90dG9tID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1ib3R0b21cIj5cclxuICAgICAgPExvZ28gLz5cclxuICAgICAgPE5hdmlnYXRpb25zIC8+XHJcbiAgICAgIDxTZWFyY2hCb3ggLz5cclxuICAgICAgey8qIFxyXG4gICAgICA8Q2FydCAvPiAqL31cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuaGVhZGVyLWJvdHRvbSB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICAgICAgICBwYWRkaW5nOiAwIDMlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhlYWRCb3R0b207XHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\Projects\\\\Github Projects\\\\aoi\\\\client\\\\components\\\\Header\\\\HeadBottom.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (headBottom);

/***/ }),

/***/ "./components/Header/HeadTop.js":
/*!**************************************!*\
  !*** ./components/Header/HeadTop.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Backdrop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Backdrop */ "./components/Backdrop.js");
/* harmony import */ var _container_Account__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../container/Account */ "./container/Account.js");
/* harmony import */ var _hooks_store_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/store/store */ "./hooks/store/store.js");
var _jsxFileName = "D:\\Projects\\Github Projects\\aoi\\client\\components\\Header\\HeadTop.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const headTop = () => {
  const {
    0: showAccount,
    1: setShowAccount
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const state = Object(_hooks_store_store__WEBPACK_IMPORTED_MODULE_5__["useStore"])()[0];
  const {
    isAuth,
    data
  } = state.auth;
  const loginStatus = isAuth ? __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, " ", data.fullName.split(" ")[0], " ") : __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, "Sign in / Register");

  const showAccountHandler = () => {
    setShowAccount(!showAccount);
  };

  return __jsx("div", {
    className: "jsx-241806404" + " " + "header-top",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx("ul", {
    className: "jsx-241806404" + " " + "links",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx("li", {
    onClick: showAccountHandler,
    className: "jsx-241806404",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, "My Account ", __jsx("img", {
    src: "/images/user.svg",
    className: "jsx-241806404",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 22
    }
  })), __jsx("li", {
    className: "jsx-241806404",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/checkout",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "jsx-241806404",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, "My Shopping Bag (0) ", __jsx("img", {
    src: "/images/cart.svg",
    className: "jsx-241806404",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 35
    }
  }))))), __jsx(_Backdrop__WEBPACK_IMPORTED_MODULE_3__["default"], {
    show: showAccount,
    clicked: showAccountHandler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }), __jsx(_container_Account__WEBPACK_IMPORTED_MODULE_4__["default"], {
    show: showAccount,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "241806404",
    __self: undefined
  }, ".header-top.jsx-241806404{width:100%;height:40px;padding:0px 3%;background-color:#24272b;color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:14px;}.links.jsx-241806404{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.links.jsx-241806404 li.jsx-241806404{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;padding:0px 5px;}.links.jsx-241806404 li.jsx-241806404 a.jsx-241806404{color:white;display:block;}.links.jsx-241806404 li.jsx-241806404 img.jsx-241806404{width:14px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0c1xcR2l0aHViIFByb2plY3RzXFxhb2lcXGNsaWVudFxcY29tcG9uZW50c1xcSGVhZGVyXFxIZWFkVG9wLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFDa0IsQUFHc0IsQUFZRSxBQUlBLEFBTUQsQUFJRCxXQXpCQyxBQTBCZCxDQUpnQixXQXJCQyxHQXNCakIsWUFyQjJCLHlCQUNiLFdBU2QsQUFJcUIsQ0FaTiwwRUFDWSxrQkFZVixlQUNDLGdCQUNsQixnREFicUIsNkZBQ0osZUFDakIiLCJmaWxlIjoiRDpcXFByb2plY3RzXFxHaXRodWIgUHJvamVjdHNcXGFvaVxcY2xpZW50XFxjb21wb25lbnRzXFxIZWFkZXJcXEhlYWRUb3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgQmFja2Ryb3AgZnJvbSBcIi4uL0JhY2tkcm9wXCI7XHJcbmltcG9ydCBBY2NvdW50IGZyb20gXCIuLi8uLi9jb250YWluZXIvQWNjb3VudFwiO1xyXG5pbXBvcnQgeyB1c2VTdG9yZSB9IGZyb20gXCIuLi8uLi9ob29rcy9zdG9yZS9zdG9yZVwiO1xyXG5cclxuY29uc3QgaGVhZFRvcCA9ICgpID0+IHtcclxuICBjb25zdCBbc2hvd0FjY291bnQsIHNldFNob3dBY2NvdW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBzdGF0ZSA9IHVzZVN0b3JlKClbMF07XHJcbiAgY29uc3QgeyBpc0F1dGgsIGRhdGEgfSA9IHN0YXRlLmF1dGg7XHJcblxyXG4gIGNvbnN0IGxvZ2luU3RhdHVzID0gaXNBdXRoID8gKFxyXG4gICAgPHNwYW4+IHtkYXRhLmZ1bGxOYW1lLnNwbGl0KFwiIFwiKVswXX0gPC9zcGFuPlxyXG4gICkgOiAoXHJcbiAgICA8c3Bhbj5TaWduIGluIC8gUmVnaXN0ZXI8L3NwYW4+XHJcbiAgKTtcclxuICBjb25zdCBzaG93QWNjb3VudEhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRTaG93QWNjb3VudCghc2hvd0FjY291bnQpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci10b3BcIj5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cImxpbmtzXCI+XHJcbiAgICAgICAgPGxpIG9uQ2xpY2s9e3Nob3dBY2NvdW50SGFuZGxlcn0+XHJcbiAgICAgICAgICBNeSBBY2NvdW50IDxpbWcgc3JjPVwiL2ltYWdlcy91c2VyLnN2Z1wiIC8+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2NoZWNrb3V0XCI+XHJcbiAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgIE15IFNob3BwaW5nIEJhZyAoMCkgPGltZyBzcmM9XCIvaW1hZ2VzL2NhcnQuc3ZnXCIgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDxCYWNrZHJvcCBzaG93PXtzaG93QWNjb3VudH0gY2xpY2tlZD17c2hvd0FjY291bnRIYW5kbGVyfSAvPlxyXG4gICAgICA8QWNjb3VudCBzaG93PXtzaG93QWNjb3VudH0gLz5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuaGVhZGVyLXRvcCB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDBweCAzJTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDI3MmI7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubGlua3Mge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5saW5rcyBsaSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIHBhZGRpbmc6IDBweCA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5saW5rcyBsaSBhIHtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGlua3MgbGkgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAxNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgaGVhZFRvcDtcclxuIl19 */\n/*@ sourceURL=D:\\\\Projects\\\\Github Projects\\\\aoi\\\\client\\\\components\\\\Header\\\\HeadTop.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (headTop);

/***/ }),

/***/ "./components/Header/Header.js":
/*!*************************************!*\
  !*** ./components/Header/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Layout */ "./components/Layout.js");
/* harmony import */ var _HeadTop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeadTop */ "./components/Header/HeadTop.js");
/* harmony import */ var _HeadBottom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeadBottom */ "./components/Header/HeadBottom.js");
/* harmony import */ var _Navigations_Navigations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Navigations/Navigations */ "./components/Navigations/Navigations.js");
var _jsxFileName = "D:\\Projects\\Github Projects\\aoi\\client\\components\\Header\\Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const header = () => {
  return __jsx("div", {
    className: "jsx-2925684966" + " " + "header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(_HeadTop__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }), __jsx(_HeadBottom__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2925684966",
    __self: undefined
  }, ".header.jsx-2925684966{width:100%;background-color:#fff;position:fixed;z-index:90;left:0;top:0;border-bottom:1px solid #eeeeef;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0c1xcR2l0aHViIFByb2plY3RzXFxhb2lcXGNsaWVudFxcY29tcG9uZW50c1xcSGVhZGVyXFxIZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV2tCLEFBR3NCLFdBQ1csc0JBQ1AsZUFDSixXQUNKLE9BQ0QsTUFDMEIsZ0NBQ2xDIiwiZmlsZSI6IkQ6XFxQcm9qZWN0c1xcR2l0aHViIFByb2plY3RzXFxhb2lcXGNsaWVudFxcY29tcG9uZW50c1xcSGVhZGVyXFxIZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL0xheW91dFwiO1xyXG5pbXBvcnQgSGVhZFRvcCBmcm9tIFwiLi9IZWFkVG9wXCI7XHJcbmltcG9ydCBIZWFkQm90dG9tIGZyb20gXCIuL0hlYWRCb3R0b21cIjtcclxuaW1wb3J0IE5hdmlnYXRpb25zIGZyb20gXCIuLi9OYXZpZ2F0aW9ucy9OYXZpZ2F0aW9uc1wiO1xyXG5cclxuY29uc3QgaGVhZGVyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gICAgICA8SGVhZFRvcCAvPlxyXG4gICAgICA8SGVhZEJvdHRvbSAvPlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICB6LWluZGV4OiA5MDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZWVlZjtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoZWFkZXI7XHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\Projects\\\\Github Projects\\\\aoi\\\\client\\\\components\\\\Header\\\\Header.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (header);

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
var _jsxFileName = "D:\\Projects\\Github Projects\\aoi\\client\\components\\Layout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const layout = props => {
  return __jsx("div", {
    className: "jsx-3813711842" + " " + "page-layout",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }
  }, props.children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3813711842",
    __self: undefined
  }, "*{box-sizing:border-box;}.page-layout{width:100%;height:100%;}body{margin:0;padding:0;font-family:\"Open Sans\",san-serif;font-size:16px;color:#18192b;width:100%;}h1,h2,h3,h4,h5,h6{margin:0px;}ul{padding:0;margin:0;list-style:none;}input{font-family:\"Open Sans\",san-serif;}a{-webkit-text-decoration:none;text-decoration:none;color:#1b222b;}select{background-position:right 12px center;background-repeat:no-repeat;backgroung-color:white;padding:8px 30px 8px 0px;font-family:\"Open Sans\",san-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0c1xcR2l0aHViIFByb2plY3RzXFxhb2lcXGNsaWVudFxcY29tcG9uZW50c1xcTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUl5QixBQUdpQyxBQUdYLEFBSUYsQUFjRSxBQUlELEFBTXlCLEFBR2QsQUFLaUIsU0EvQjVCLENBa0JELENBdEJHLEFBa0JkLFFBYnFDLEFBa0JuQixHQTFCbEIsQ0FJQSxXQTJCQSxDQUpBLEdBWThCLFlBTGQsR0F6QkMsV0EwQmpCLEVBTXlCLEVBL0JULGNBQ0gsT0ErQmMsSUE5QjNCLHFCQStCcUMsa0NBQ3JDIiwiZmlsZSI6IkQ6XFxQcm9qZWN0c1xcR2l0aHViIFByb2plY3RzXFxhb2lcXGNsaWVudFxcY29tcG9uZW50c1xcTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbGF5b3V0ID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1sYXlvdXRcIj5cclxuICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICoge1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBhZ2UtbGF5b3V0IHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBib2R5IHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2FuLXNlcmlmO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgY29sb3I6ICMxODE5MmI7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgxLFxyXG4gICAgICAgIGgyLFxyXG4gICAgICAgIGgzLFxyXG4gICAgICAgIGg0LFxyXG4gICAgICAgIGg1LFxyXG4gICAgICAgIGg2IHtcclxuICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdWwge1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2FuLXNlcmlmO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIGNvbG9yOiAjMWIyMjJiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZWxlY3Qge1xyXG4gICAgICAgICAgLy8gLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgMTJweCBjZW50ZXI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2ltYWdlcy9kb3dubG9hZC5zdmdcIik7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5nLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIHBhZGRpbmc6IDhweCAzMHB4IDhweCAwcHg7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2FuLXNlcmlmO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxheW91dDtcclxuIl19 */\n/*@ sourceURL=D:\\\\Projects\\\\Github Projects\\\\aoi\\\\client\\\\components\\\\Layout.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (layout);

/***/ }),

/***/ "./components/Logo.js":
/*!****************************!*\
  !*** ./components/Logo.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\Projects\\Github Projects\\aoi\\client\\components\\Logo.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const logo = () => {
  return __jsx("div", {
    className: "jsx-3222281280" + " " + "logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: "jsx-3222281280",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "jsx-3222281280" + " " + "logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }, "austin", __jsx("span", {
    className: "jsx-3222281280" + " " + "red",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 19
    }
  }, "Exp"), "ress.com"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3222281280",
    __self: undefined
  }, ".logo.jsx-3222281280 h2.jsx-3222281280{color:#1b222b;font-family:\"Open sans\",san-serif;font-weight:700;}.red.jsx-3222281280{color:#0654b3;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0c1xcR2l0aHViIFByb2plY3RzXFxhb2lcXGNsaWVudFxcY29tcG9uZW50c1xcTG9nby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFja0IsQUFHeUIsQUFLQSxjQUpxQixBQUtyQyxrQ0FKa0IsZ0JBQ2xCIiwiZmlsZSI6IkQ6XFxQcm9qZWN0c1xcR2l0aHViIFByb2plY3RzXFxhb2lcXGNsaWVudFxcY29tcG9uZW50c1xcTG9nby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuY29uc3QgbG9nbyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgPGE+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibG9nb1wiPlxyXG4gICAgICAgICAgICBhdXN0aW48c3BhbiBjbGFzc05hbWU9XCJyZWRcIj5FeHA8L3NwYW4+cmVzcy5jb21cclxuICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0xpbms+XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmxvZ28gaDIge1xyXG4gICAgICAgICAgY29sb3I6ICMxYjIyMmI7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIHNhbnNcIiwgc2FuLXNlcmlmO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJlZCB7XHJcbiAgICAgICAgICBjb2xvcjogIzA2NTRiMztcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2dvO1xyXG4iXX0= */\n/*@ sourceURL=D:\\\\Projects\\\\Github Projects\\\\aoi\\\\client\\\\components\\\\Logo.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (logo);

/***/ }),

/***/ "./components/Navigations/Category.js":
/*!********************************************!*\
  !*** ./components/Navigations/Category.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\Projects\\Github Projects\\aoi\\client\\components\\Navigations\\Category.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const category = props => {
  const {
    title,
    list
  } = props.category;
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2380410787", [props.columnCategory ? "inline-block" : "block", props.columnCategory ? "8px" : "0px"]]]) + " " + "category",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2380410787", [props.columnCategory ? "inline-block" : "block", props.columnCategory ? "8px" : "0px"]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, title), __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2380410787", [props.columnCategory ? "inline-block" : "block", props.columnCategory ? "8px" : "0px"]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, list.map((product, index) => __jsx("li", {
    key: index,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2380410787", [props.columnCategory ? "inline-block" : "block", props.columnCategory ? "8px" : "0px"]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/" + product,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2380410787", [props.columnCategory ? "inline-block" : "block", props.columnCategory ? "8px" : "0px"]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 15
    }
  }, product))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2380410787",
    dynamic: [props.columnCategory ? "inline-block" : "block", props.columnCategory ? "8px" : "0px"],
    __self: undefined
  }, `li.__jsx-style-dynamic-selector{display:${props.columnCategory ? "inline-block" : "block"};padding:${props.columnCategory ? "8px" : "0px"};}li.__jsx-style-dynamic-selector:hover{border-bottom:1px solid;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0c1xcR2l0aHViIFByb2plY3RzXFxhb2lcXGNsaWVudFxcY29tcG9uZW50c1xcTmF2aWdhdGlvbnNcXENhdGVnb3J5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCa0IsQUFHZ0QsQUFJYix3QkFDMUIsYUFKdUMscUNBQ3ZDIiwiZmlsZSI6IkQ6XFxQcm9qZWN0c1xcR2l0aHViIFByb2plY3RzXFxhb2lcXGNsaWVudFxcY29tcG9uZW50c1xcTmF2aWdhdGlvbnNcXENhdGVnb3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5jb25zdCBjYXRlZ29yeSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgdGl0bGUsIGxpc3QgfSA9IHByb3BzLmNhdGVnb3J5O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3J5XCI+XHJcbiAgICAgIDxoMz57dGl0bGV9PC9oMz5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIHtsaXN0Lm1hcCgocHJvZHVjdCwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17XCIvXCIgKyBwcm9kdWN0fT5cclxuICAgICAgICAgICAgICA8YT57cHJvZHVjdH08L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgZGlzcGxheTogJHtwcm9wcy5jb2x1bW5DYXRlZ29yeSA/IFwiaW5saW5lLWJsb2NrXCIgOiBcImJsb2NrXCJ9O1xyXG4gICAgICAgICAgcGFkZGluZzogJHtwcm9wcy5jb2x1bW5DYXRlZ29yeSA/IFwiOHB4XCIgOiBcIjBweFwifTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGk6aG92ZXIge1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNhdGVnb3J5O1xyXG4iXX0= */
/*@ sourceURL=D:\\Projects\\Github Projects\\aoi\\client\\components\\Navigations\\Category.js */`));
};

/* harmony default export */ __webpack_exports__["default"] = (category);

/***/ }),

/***/ "./components/Navigations/DropBox.js":
/*!*******************************************!*\
  !*** ./components/Navigations/DropBox.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\Projects\\Github Projects\\aoi\\client\\components\\Navigations\\DropBox.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const dropBox = props => {
  const lists = [...props.list]; // Checking to see if the list has morethan 1 colums

  let columnCategory = false;
  if (lists.length === 1) columnCategory = true;
  let classList = ["drop-box"];

  if (props.show) {
    classList.push("show");
  } else {
    classList.push("hidden");
  }

  return __jsx("div", {
    className: "jsx-1217133961" + " " + (classList.join(" ") || ""),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx("ul", {
    className: "jsx-1217133961" + " " + "nav-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, lists.map((list, index) => __jsx("li", {
    key: index,
    className: "jsx-1217133961",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/products",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "jsx-1217133961",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 15
    }
  }, list))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1217133961",
    __self: undefined
  }, ".drop-box.jsx-1217133961{width:100%;padding:30px;background-color:#eee;position:absolute;top:115px;left:0px;z-index:5;background-color:#fff;}.show.jsx-1217133961{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:300px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.hidden.jsx-1217133961{display:none;}.nav-wrapper.jsx-1217133961{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-width:50%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;height:100%;padding:2px;}.nav-wrapper.jsx-1217133961 li.jsx-1217133961{padding:5px 20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0c1xcR2l0aHViIFByb2plY3RzXFxhb2lcXGNsaWVudFxcY29tcG9uZW50c1xcTmF2aWdhdGlvbnNcXERyb3BCb3guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEJrQixBQUdzQixBQVdFLEFBTUEsQUFJQSxBQVFJLFdBNUJKLEVBaUJmLElBWUEsT0E1QndCLHNCQUNKLGtCQUNSLFVBQ0QsQUFPSSxBQVVDLFNBaEJKLElBT2EsQ0FVRCxLQWhCQSxzQkFFeEIsbURBZWlCLG9CQVZqQixxQ0FXYyxZQUNBLFlBQ2QiLCJmaWxlIjoiRDpcXFByb2plY3RzXFxHaXRodWIgUHJvamVjdHNcXGFvaVxcY2xpZW50XFxjb21wb25lbnRzXFxOYXZpZ2F0aW9uc1xcRHJvcEJveC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuY29uc3QgZHJvcEJveCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IGxpc3RzID0gWy4uLnByb3BzLmxpc3RdO1xyXG4gIC8vIENoZWNraW5nIHRvIHNlZSBpZiB0aGUgbGlzdCBoYXMgbW9yZXRoYW4gMSBjb2x1bXNcclxuICBsZXQgY29sdW1uQ2F0ZWdvcnkgPSBmYWxzZTtcclxuICBpZiAobGlzdHMubGVuZ3RoID09PSAxKSBjb2x1bW5DYXRlZ29yeSA9IHRydWU7XHJcblxyXG4gIGxldCBjbGFzc0xpc3QgPSBbXCJkcm9wLWJveFwiXTtcclxuXHJcbiAgaWYgKHByb3BzLnNob3cpIHtcclxuICAgIGNsYXNzTGlzdC5wdXNoKFwic2hvd1wiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY2xhc3NMaXN0LnB1c2goXCJoaWRkZW5cIik7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NMaXN0LmpvaW4oXCIgXCIpfT5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdi13cmFwcGVyXCI+XHJcbiAgICAgICAge2xpc3RzLm1hcCgobGlzdCwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17XCIvcHJvZHVjdHNcIn0+XHJcbiAgICAgICAgICAgICAgPGE+e2xpc3R9PC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5kcm9wLWJveCB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAxMTVweDtcclxuICAgICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICAgIHotaW5kZXg6IDU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgLy8gYm94LXNoYWRvdzogMHB4IDBweCA1cHggIzU3NTc1NztcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNob3cge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5oaWRkZW4ge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5uYXYtd3JhcHBlciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgbWluLXdpZHRoOiA1MCU7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgcGFkZGluZzogMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubmF2LXdyYXBwZXIgbGkge1xyXG4gICAgICAgICAgcGFkZGluZzogNXB4IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZHJvcEJveDtcclxuIl19 */\n/*@ sourceURL=D:\\\\Projects\\\\Github Projects\\\\aoi\\\\client\\\\components\\\\Navigations\\\\DropBox.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (dropBox);

/***/ }),

/***/ "./components/Navigations/Navigation.js":
/*!**********************************************!*\
  !*** ./components/Navigations/Navigation.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _DropBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DropBox */ "./components/Navigations/DropBox.js");
var _jsxFileName = "D:\\Projects\\Github Projects\\aoi\\client\\components\\Navigations\\Navigation.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const navigation = props => {
  const {
    title,
    list
  } = props.target;
  const {
    0: dropBoxState,
    1: setDropBoxState
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const toggleDropBox = () => {
    setDropBoxState(!dropBoxState);
  };

  return __jsx("li", {
    onMouseEnter: toggleDropBox,
    onMouseLeave: toggleDropBox,
    className: "jsx-3886849101",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/products",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: "jsx-3886849101",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, title)), __jsx(_DropBox__WEBPACK_IMPORTED_MODULE_3__["default"], {
    list: list,
    show: dropBoxState,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3886849101",
    __self: undefined
  }, "li.jsx-3886849101{padding:10px 30px 20px 30px;background-position:right 10px center;background-repeat:no-repeat;background-size:10px;}li.jsx-3886849101:hover a.jsx-3886849101{border-bottom:2px solid black;}a.jsx-3886849101{-webkit-text-decoration:none;text-decoration:none;color:#18192b;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0c1xcR2l0aHViIFByb2plY3RzXFxhb2lcXGNsaWVudFxcY29tcG9uZW50c1xcTmF2aWdhdGlvbnNcXE5hdmlnYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJrQixBQUd1QyxBQVFFLEFBR1QsNEJBUmlCLEVBTXhDLG9CQUdnQixjQUNHLEVBVFcsZUFVOUIsYUFUdUIscUJBQ3ZCIiwiZmlsZSI6IkQ6XFxQcm9qZWN0c1xcR2l0aHViIFByb2plY3RzXFxhb2lcXGNsaWVudFxcY29tcG9uZW50c1xcTmF2aWdhdGlvbnNcXE5hdmlnYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgRHJvcEJveCBmcm9tIFwiLi9Ecm9wQm94XCI7XHJcblxyXG5jb25zdCBuYXZpZ2F0aW9uID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyB0aXRsZSwgbGlzdCB9ID0gcHJvcHMudGFyZ2V0O1xyXG5cclxuICBjb25zdCBbZHJvcEJveFN0YXRlLCBzZXREcm9wQm94U3RhdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCB0b2dnbGVEcm9wQm94ID0gKCkgPT4ge1xyXG4gICAgc2V0RHJvcEJveFN0YXRlKCFkcm9wQm94U3RhdGUpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxsaSBvbk1vdXNlRW50ZXI9e3RvZ2dsZURyb3BCb3h9IG9uTW91c2VMZWF2ZT17dG9nZ2xlRHJvcEJveH0+XHJcbiAgICAgIDxMaW5rIGhyZWY9e1wiL3Byb2R1Y3RzXCJ9PlxyXG4gICAgICAgIDxhPnt0aXRsZX08L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPERyb3BCb3ggbGlzdD17bGlzdH0gc2hvdz17ZHJvcEJveFN0YXRlfSAvPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMzBweCAyMHB4IDMwcHg7XHJcbiAgICAgICAgICAvLyBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvaW1hZ2VzL2Rvd25sb2FkLnN2Z1wiKTtcclxuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDEwcHggY2VudGVyO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGk6aG92ZXIgYSB7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgY29sb3I6ICMxODE5MmI7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvbGk+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5hdmlnYXRpb247XHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\Projects\\\\Github Projects\\\\aoi\\\\client\\\\components\\\\Navigations\\\\Navigation.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (navigation);

/***/ }),

/***/ "./components/Navigations/Navigations.js":
/*!***********************************************!*\
  !*** ./components/Navigations/Navigations.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Spacer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Spacer */ "./components/Spacer.js");
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Navigation */ "./components/Navigations/Navigation.js");
/* harmony import */ var _Backdrop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Backdrop */ "./components/Backdrop.js");
/* harmony import */ var _container_Account__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../container/Account */ "./container/Account.js");
/* harmony import */ var _hooks_store_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/store/store */ "./hooks/store/store.js");
var _jsxFileName = "D:\\Projects\\Github Projects\\aoi\\client\\components\\Navigations\\Navigations.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








const navigations = () => {
  const {
    0: showAccount,
    1: setShowAccount
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const state = Object(_hooks_store_store__WEBPACK_IMPORTED_MODULE_7__["useStore"])()[0];
  const {
    isAuth,
    data
  } = state.auth;
  const loginStatus = isAuth ? __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, " ", data.fullName.split(" ")[0], " ") : __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, "Sign in / Register");
  const navs = [//Men Navigation list
  {
    title: "Men",
    list: ["Sandals", "Sneakers", "Loafers", "Boat Shoes", "Oxfords", "Boots & Chukkas", "Slip-Ons", "Slippers", "Run Shop", "Spring Trend", "Outdoor", "Walking", "Athletic", "Food Health & Wellness", "Casual", "Dress/Evening"]
  }, //Women Navigation list
  {
    title: "Women",
    list: ["Sandals", "Sneakers", "Flats", "Mules", "Heals & Pumps", "Boots & Booties", "Clogs", "Slippers", "Comfort Shop", "Run Shop", "Spring Trend", "Outdoor", "Walking", "Athletic", "Food Health & Wellness", "Casual"]
  }, //Kids Navigation list
  {
    title: "Kids",
    list: ["Sandals", "Swimwear", "Sneaker & Athletic Shoes", "Dresses", "Flats", "Jumpsuits & Rompers", "Shirts & Tops", "Shorts", "Sleepwear", "Slippers", "Sneaker & Athletic Shoes", "Swimwear", "Sandals", "Shirts & Tops", "Boat Shoes"]
  }, //Men Navigation list
  {
    title: "Brands",
    list: [...Array(26)].map((_, i) => String.fromCharCode(i + 65))
  }];

  const showAccountHandler = () => {
    setShowAccount(!showAccount);
  };

  return __jsx("div", {
    className: "jsx-3745705024" + " " + "nav-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 5
    }
  }, __jsx("ul", {
    className: "jsx-3745705024",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }
  }, navs.map((nav, index) => __jsx(_Navigation__WEBPACK_IMPORTED_MODULE_4__["default"], {
    key: index,
    target: nav,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  }))), __jsx(_Backdrop__WEBPACK_IMPORTED_MODULE_5__["default"], {
    show: showAccount,
    clicked: showAccountHandler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }
  }), __jsx(_container_Account__WEBPACK_IMPORTED_MODULE_6__["default"], {
    show: showAccount,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2382104066",
    __self: undefined
  }, ".nav-wrapper.jsx-3745705024{height:55px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.nav-wrapper.jsx-3745705024 ul.jsx-3745705024{width:100%;max-width:1200px;margin:0px auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.nav-wrapper.jsx-3745705024 ul.jsx-3745705024 li.jsx-3745705024:last-child{padding-right:0px;}li.jsx-3745705024{padding:30px 30px;cursor:pointer;}a.jsx-3745705024{-webkit-text-decoration:none;text-decoration:none;color:#035d59;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0c1xcR2l0aHViIFByb2plY3RzXFxhb2lcXGNsaWVudFxcY29tcG9uZW50c1xcTmF2aWdhdGlvbnNcXE5hdmlnYXRpb25zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStHa0IsQUFLdUIsQUFPRCxBQU9PLEFBSUEsQUFLRyxXQWZKLENBUEosTUFjZixBQUlpQixVQVZDLEtBV2xCLFdBVmUsTUFjQyxjQUNoQixzQkF2QnFCLGdDQVNyQiw2REFQQSIsImZpbGUiOiJEOlxcUHJvamVjdHNcXEdpdGh1YiBQcm9qZWN0c1xcYW9pXFxjbGllbnRcXGNvbXBvbmVudHNcXE5hdmlnYXRpb25zXFxOYXZpZ2F0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBTcGFjZXIgZnJvbSBcIi4uL1NwYWNlclwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tIFwiLi9OYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCBCYWNrZHJvcCBmcm9tIFwiLi4vQmFja2Ryb3BcIjtcclxuaW1wb3J0IEFjY291bnQgZnJvbSBcIi4uLy4uL2NvbnRhaW5lci9BY2NvdW50XCI7XHJcbmltcG9ydCB7IHVzZVN0b3JlIH0gZnJvbSBcIi4uLy4uL2hvb2tzL3N0b3JlL3N0b3JlXCI7XHJcblxyXG5jb25zdCBuYXZpZ2F0aW9ucyA9ICgpID0+IHtcclxuICBjb25zdCBbc2hvd0FjY291bnQsIHNldFNob3dBY2NvdW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgc3RhdGUgPSB1c2VTdG9yZSgpWzBdO1xyXG4gIGNvbnN0IHsgaXNBdXRoLCBkYXRhIH0gPSBzdGF0ZS5hdXRoO1xyXG5cclxuICBjb25zdCBsb2dpblN0YXR1cyA9IGlzQXV0aCA/IChcclxuICAgIDxzcGFuPiB7ZGF0YS5mdWxsTmFtZS5zcGxpdChcIiBcIilbMF19IDwvc3Bhbj5cclxuICApIDogKFxyXG4gICAgPHNwYW4+U2lnbiBpbiAvIFJlZ2lzdGVyPC9zcGFuPlxyXG4gICk7XHJcblxyXG4gIGNvbnN0IG5hdnMgPSBbXHJcbiAgICAvL01lbiBOYXZpZ2F0aW9uIGxpc3RcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiTWVuXCIsXHJcbiAgICAgIGxpc3Q6IFtcclxuICAgICAgICBcIlNhbmRhbHNcIixcclxuICAgICAgICBcIlNuZWFrZXJzXCIsXHJcbiAgICAgICAgXCJMb2FmZXJzXCIsXHJcbiAgICAgICAgXCJCb2F0IFNob2VzXCIsXHJcbiAgICAgICAgXCJPeGZvcmRzXCIsXHJcbiAgICAgICAgXCJCb290cyAmIENodWtrYXNcIixcclxuICAgICAgICBcIlNsaXAtT25zXCIsXHJcbiAgICAgICAgXCJTbGlwcGVyc1wiLFxyXG4gICAgICAgIFwiUnVuIFNob3BcIixcclxuICAgICAgICBcIlNwcmluZyBUcmVuZFwiLFxyXG4gICAgICAgIFwiT3V0ZG9vclwiLFxyXG4gICAgICAgIFwiV2Fsa2luZ1wiLFxyXG4gICAgICAgIFwiQXRobGV0aWNcIixcclxuICAgICAgICBcIkZvb2QgSGVhbHRoICYgV2VsbG5lc3NcIixcclxuICAgICAgICBcIkNhc3VhbFwiLFxyXG4gICAgICAgIFwiRHJlc3MvRXZlbmluZ1wiLFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIC8vV29tZW4gTmF2aWdhdGlvbiBsaXN0XHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIldvbWVuXCIsXHJcbiAgICAgIGxpc3Q6IFtcclxuICAgICAgICBcIlNhbmRhbHNcIixcclxuICAgICAgICBcIlNuZWFrZXJzXCIsXHJcbiAgICAgICAgXCJGbGF0c1wiLFxyXG4gICAgICAgIFwiTXVsZXNcIixcclxuICAgICAgICBcIkhlYWxzICYgUHVtcHNcIixcclxuICAgICAgICBcIkJvb3RzICYgQm9vdGllc1wiLFxyXG4gICAgICAgIFwiQ2xvZ3NcIixcclxuICAgICAgICBcIlNsaXBwZXJzXCIsXHJcbiAgICAgICAgXCJDb21mb3J0IFNob3BcIixcclxuICAgICAgICBcIlJ1biBTaG9wXCIsXHJcbiAgICAgICAgXCJTcHJpbmcgVHJlbmRcIixcclxuICAgICAgICBcIk91dGRvb3JcIixcclxuICAgICAgICBcIldhbGtpbmdcIixcclxuICAgICAgICBcIkF0aGxldGljXCIsXHJcbiAgICAgICAgXCJGb29kIEhlYWx0aCAmIFdlbGxuZXNzXCIsXHJcbiAgICAgICAgXCJDYXN1YWxcIixcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICAvL0tpZHMgTmF2aWdhdGlvbiBsaXN0XHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIktpZHNcIixcclxuICAgICAgbGlzdDogW1xyXG4gICAgICAgIFwiU2FuZGFsc1wiLFxyXG4gICAgICAgIFwiU3dpbXdlYXJcIixcclxuICAgICAgICBcIlNuZWFrZXIgJiBBdGhsZXRpYyBTaG9lc1wiLFxyXG4gICAgICAgIFwiRHJlc3Nlc1wiLFxyXG4gICAgICAgIFwiRmxhdHNcIixcclxuICAgICAgICBcIkp1bXBzdWl0cyAmIFJvbXBlcnNcIixcclxuICAgICAgICBcIlNoaXJ0cyAmIFRvcHNcIixcclxuICAgICAgICBcIlNob3J0c1wiLFxyXG4gICAgICAgIFwiU2xlZXB3ZWFyXCIsXHJcbiAgICAgICAgXCJTbGlwcGVyc1wiLFxyXG4gICAgICAgIFwiU25lYWtlciAmIEF0aGxldGljIFNob2VzXCIsXHJcbiAgICAgICAgXCJTd2ltd2VhclwiLFxyXG4gICAgICAgIFwiU2FuZGFsc1wiLFxyXG4gICAgICAgIFwiU2hpcnRzICYgVG9wc1wiLFxyXG4gICAgICAgIFwiQm9hdCBTaG9lc1wiLFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuXHJcbiAgICAvL01lbiBOYXZpZ2F0aW9uIGxpc3RcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiQnJhbmRzXCIsXHJcbiAgICAgIGxpc3Q6IFsuLi5BcnJheSgyNildLm1hcCgoXywgaSkgPT4gU3RyaW5nLmZyb21DaGFyQ29kZShpICsgNjUpKSxcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3Qgc2hvd0FjY291bnRIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgc2V0U2hvd0FjY291bnQoIXNob3dBY2NvdW50KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtd3JhcHBlclwiPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAge25hdnMubWFwKChuYXYsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8TmF2aWdhdGlvbiBrZXk9e2luZGV4fSB0YXJnZXQ9e25hdn0gLz5cclxuICAgICAgICApKX1cclxuICAgICAgICB7LyogPFNwYWNlciAvPlxyXG4gICAgICAgIDxsaSBvbkNsaWNrPXtzaG93QWNjb3VudEhhbmRsZXJ9IGlkPVwiYWNjb3VudEJ0blwiPlxyXG4gICAgICAgICAge2xvZ2luU3RhdHVzfVxyXG4gICAgICAgIDwvbGk+ICovfVxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8QmFja2Ryb3Agc2hvdz17c2hvd0FjY291bnR9IGNsaWNrZWQ9e3Nob3dBY2NvdW50SGFuZGxlcn0gLz5cclxuICAgICAgPEFjY291bnQgc2hvdz17c2hvd0FjY291bnR9IC8+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAubmF2LXdyYXBwZXIge1xyXG4gICAgICAgICAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgICAgICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm5hdi13cmFwcGVyIHVsIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgICAubmF2LXdyYXBwZXIgdWwgbGk6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAzMHB4IDMwcHg7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIGNvbG9yOiAjMDM1ZDU5O1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgLm5hdi13cmFwcGVyIHVsIGxpOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmhpZGRlbiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnZpc3VhbGx5aGlkZGVuIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmF2aWdhdGlvbnM7XHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\Projects\\\\Github Projects\\\\aoi\\\\client\\\\components\\\\Navigations\\\\Navigations.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3153797259",
    __self: undefined
  }, ".nav-wrapper ul li:first-child{padding-left:0px;}.hidden{display:none;}.visuallyhidden{opacity:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0c1xcR2l0aHViIFByb2plY3RzXFxhb2lcXGNsaWVudFxcY29tcG9uZW50c1xcTmF2aWdhdGlvbnNcXE5hdmlnYXRpb25zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStJeUIsQUFHNEIsQUFJSixBQUlILFVBQ1osR0FKQSxJQUpBIiwiZmlsZSI6IkQ6XFxQcm9qZWN0c1xcR2l0aHViIFByb2plY3RzXFxhb2lcXGNsaWVudFxcY29tcG9uZW50c1xcTmF2aWdhdGlvbnNcXE5hdmlnYXRpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFNwYWNlciBmcm9tIFwiLi4vU3BhY2VyXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuL05hdmlnYXRpb25cIjtcclxuaW1wb3J0IEJhY2tkcm9wIGZyb20gXCIuLi9CYWNrZHJvcFwiO1xyXG5pbXBvcnQgQWNjb3VudCBmcm9tIFwiLi4vLi4vY29udGFpbmVyL0FjY291bnRcIjtcclxuaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tIFwiLi4vLi4vaG9va3Mvc3RvcmUvc3RvcmVcIjtcclxuXHJcbmNvbnN0IG5hdmlnYXRpb25zID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzaG93QWNjb3VudCwgc2V0U2hvd0FjY291bnRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBzdGF0ZSA9IHVzZVN0b3JlKClbMF07XHJcbiAgY29uc3QgeyBpc0F1dGgsIGRhdGEgfSA9IHN0YXRlLmF1dGg7XHJcblxyXG4gIGNvbnN0IGxvZ2luU3RhdHVzID0gaXNBdXRoID8gKFxyXG4gICAgPHNwYW4+IHtkYXRhLmZ1bGxOYW1lLnNwbGl0KFwiIFwiKVswXX0gPC9zcGFuPlxyXG4gICkgOiAoXHJcbiAgICA8c3Bhbj5TaWduIGluIC8gUmVnaXN0ZXI8L3NwYW4+XHJcbiAgKTtcclxuXHJcbiAgY29uc3QgbmF2cyA9IFtcclxuICAgIC8vTWVuIE5hdmlnYXRpb24gbGlzdFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJNZW5cIixcclxuICAgICAgbGlzdDogW1xyXG4gICAgICAgIFwiU2FuZGFsc1wiLFxyXG4gICAgICAgIFwiU25lYWtlcnNcIixcclxuICAgICAgICBcIkxvYWZlcnNcIixcclxuICAgICAgICBcIkJvYXQgU2hvZXNcIixcclxuICAgICAgICBcIk94Zm9yZHNcIixcclxuICAgICAgICBcIkJvb3RzICYgQ2h1a2thc1wiLFxyXG4gICAgICAgIFwiU2xpcC1PbnNcIixcclxuICAgICAgICBcIlNsaXBwZXJzXCIsXHJcbiAgICAgICAgXCJSdW4gU2hvcFwiLFxyXG4gICAgICAgIFwiU3ByaW5nIFRyZW5kXCIsXHJcbiAgICAgICAgXCJPdXRkb29yXCIsXHJcbiAgICAgICAgXCJXYWxraW5nXCIsXHJcbiAgICAgICAgXCJBdGhsZXRpY1wiLFxyXG4gICAgICAgIFwiRm9vZCBIZWFsdGggJiBXZWxsbmVzc1wiLFxyXG4gICAgICAgIFwiQ2FzdWFsXCIsXHJcbiAgICAgICAgXCJEcmVzcy9FdmVuaW5nXCIsXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAgLy9Xb21lbiBOYXZpZ2F0aW9uIGxpc3RcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiV29tZW5cIixcclxuICAgICAgbGlzdDogW1xyXG4gICAgICAgIFwiU2FuZGFsc1wiLFxyXG4gICAgICAgIFwiU25lYWtlcnNcIixcclxuICAgICAgICBcIkZsYXRzXCIsXHJcbiAgICAgICAgXCJNdWxlc1wiLFxyXG4gICAgICAgIFwiSGVhbHMgJiBQdW1wc1wiLFxyXG4gICAgICAgIFwiQm9vdHMgJiBCb290aWVzXCIsXHJcbiAgICAgICAgXCJDbG9nc1wiLFxyXG4gICAgICAgIFwiU2xpcHBlcnNcIixcclxuICAgICAgICBcIkNvbWZvcnQgU2hvcFwiLFxyXG4gICAgICAgIFwiUnVuIFNob3BcIixcclxuICAgICAgICBcIlNwcmluZyBUcmVuZFwiLFxyXG4gICAgICAgIFwiT3V0ZG9vclwiLFxyXG4gICAgICAgIFwiV2Fsa2luZ1wiLFxyXG4gICAgICAgIFwiQXRobGV0aWNcIixcclxuICAgICAgICBcIkZvb2QgSGVhbHRoICYgV2VsbG5lc3NcIixcclxuICAgICAgICBcIkNhc3VhbFwiLFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIC8vS2lkcyBOYXZpZ2F0aW9uIGxpc3RcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiS2lkc1wiLFxyXG4gICAgICBsaXN0OiBbXHJcbiAgICAgICAgXCJTYW5kYWxzXCIsXHJcbiAgICAgICAgXCJTd2ltd2VhclwiLFxyXG4gICAgICAgIFwiU25lYWtlciAmIEF0aGxldGljIFNob2VzXCIsXHJcbiAgICAgICAgXCJEcmVzc2VzXCIsXHJcbiAgICAgICAgXCJGbGF0c1wiLFxyXG4gICAgICAgIFwiSnVtcHN1aXRzICYgUm9tcGVyc1wiLFxyXG4gICAgICAgIFwiU2hpcnRzICYgVG9wc1wiLFxyXG4gICAgICAgIFwiU2hvcnRzXCIsXHJcbiAgICAgICAgXCJTbGVlcHdlYXJcIixcclxuICAgICAgICBcIlNsaXBwZXJzXCIsXHJcbiAgICAgICAgXCJTbmVha2VyICYgQXRobGV0aWMgU2hvZXNcIixcclxuICAgICAgICBcIlN3aW13ZWFyXCIsXHJcbiAgICAgICAgXCJTYW5kYWxzXCIsXHJcbiAgICAgICAgXCJTaGlydHMgJiBUb3BzXCIsXHJcbiAgICAgICAgXCJCb2F0IFNob2VzXCIsXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG5cclxuICAgIC8vTWVuIE5hdmlnYXRpb24gbGlzdFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJCcmFuZHNcIixcclxuICAgICAgbGlzdDogWy4uLkFycmF5KDI2KV0ubWFwKChfLCBpKSA9PiBTdHJpbmcuZnJvbUNoYXJDb2RlKGkgKyA2NSkpLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICBjb25zdCBzaG93QWNjb3VudEhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRTaG93QWNjb3VudCghc2hvd0FjY291bnQpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi13cmFwcGVyXCI+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7bmF2cy5tYXAoKG5hdiwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxOYXZpZ2F0aW9uIGtleT17aW5kZXh9IHRhcmdldD17bmF2fSAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIHsvKiA8U3BhY2VyIC8+XHJcbiAgICAgICAgPGxpIG9uQ2xpY2s9e3Nob3dBY2NvdW50SGFuZGxlcn0gaWQ9XCJhY2NvdW50QnRuXCI+XHJcbiAgICAgICAgICB7bG9naW5TdGF0dXN9XHJcbiAgICAgICAgPC9saT4gKi99XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDxCYWNrZHJvcCBzaG93PXtzaG93QWNjb3VudH0gY2xpY2tlZD17c2hvd0FjY291bnRIYW5kbGVyfSAvPlxyXG4gICAgICA8QWNjb3VudCBzaG93PXtzaG93QWNjb3VudH0gLz5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5uYXYtd3JhcHBlciB7XHJcbiAgICAgICAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubmF2LXdyYXBwZXIgdWwge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgIC5uYXYtd3JhcHBlciB1bCBsaTpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDMwcHggMzBweDtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgY29sb3I6ICMwMzVkNTk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAubmF2LXdyYXBwZXIgdWwgbGk6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaGlkZGVuIHtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudmlzdWFsbHloaWRkZW4ge1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuYXZpZ2F0aW9ucztcclxuIl19 */\n/*@ sourceURL=D:\\\\Projects\\\\Github Projects\\\\aoi\\\\client\\\\components\\\\Navigations\\\\Navigations.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (navigations);

/***/ }),

/***/ "./components/SearchBox.js":
/*!*********************************!*\
  !*** ./components/SearchBox.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Projects\\Github Projects\\aoi\\client\\components\\SearchBox.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const searchBox = () => {
  return __jsx("div", {
    className: "jsx-2732274254" + " " + "search-box",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("form", {
    className: "jsx-2732274254" + " " + "search-form",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("input", {
    type: "text",
    placeholder: "Search for shoes name, item key, etc.",
    className: "jsx-2732274254",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }), __jsx("input", {
    type: "submit",
    value: "Search",
    className: "jsx-2732274254",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2732274254",
    __self: undefined
  }, ".search-box.jsx-2732274254{-webkit-flex-basis:30%;-ms-flex-preferred-size:30%;flex-basis:30%;}.search-form.jsx-2732274254{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.search-form.jsx-2732274254 input.jsx-2732274254{height:44px;border:1px solid black;font-size:16px;outline:none;}.search-form.jsx-2732274254 input[type=\"text\"].jsx-2732274254{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;padding:0px 20px;border-top-left-radius:5px;border-bottom-left-radius:5px;border-right:none;color:#575757;}.search-form.jsx-2732274254 input[type=\"submit\"].jsx-2732274254{width:100px;border-top-right-radius:5px;border-bottom-right-radius:5px;background-color:#0654b3;border-color:#0654b3;color:white;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0c1xcR2l0aHViIFByb2plY3RzXFxhb2lcXGNsaWVudFxcY29tcG9uZW50c1xcU2VhcmNoQm94LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFrQixBQUcwQixBQUdKLEFBSUMsQUFNQSxBQVNBLFdBbEJDLENBSVUsQUFlSyx1QkFkYixLQWVnQixVQWRsQixhQUNmLEdBVkEsS0FhbUIsQUFXUSxjQXBCM0IsR0FVNkIsUUFXTixtQkFWUyxFQVdsQixZQUNHLGVBQ2pCLENBWm9CLGtCQUNKLGNBQ2hCIiwiZmlsZSI6IkQ6XFxQcm9qZWN0c1xcR2l0aHViIFByb2plY3RzXFxhb2lcXGNsaWVudFxcY29tcG9uZW50c1xcU2VhcmNoQm94LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3Qgc2VhcmNoQm94ID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1ib3hcIj5cclxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwic2VhcmNoLWZvcm1cIj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciBzaG9lcyBuYW1lLCBpdGVtIGtleSwgZXRjLlwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU2VhcmNoXCIgLz5cclxuICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5zZWFyY2gtYm94IHtcclxuICAgICAgICAgIGZsZXgtYmFzaXM6IDMwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNlYXJjaC1mb3JtIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNlYXJjaC1mb3JtIGlucHV0IHtcclxuICAgICAgICAgIGhlaWdodDogNDRweDtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNlYXJjaC1mb3JtIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICAgIHBhZGRpbmc6IDBweCAyMHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgICAgICAgY29sb3I6ICM1NzU3NTc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2VhcmNoLWZvcm0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjU0YjM7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICMwNjU0YjM7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2VhcmNoQm94O1xyXG4iXX0= */\n/*@ sourceURL=D:\\\\Projects\\\\Github Projects\\\\aoi\\\\client\\\\components\\\\SearchBox.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (searchBox);

/***/ }),

/***/ "./components/Spacer.js":
/*!******************************!*\
  !*** ./components/Spacer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Projects\\Github Projects\\aoi\\client\\components\\Spacer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const spacer = () => {
  return __jsx("div", {
    className: "jsx-4026738121" + " " + "spacer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4026738121",
    __self: undefined
  }, ".spacer.jsx-4026738121{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0c1xcR2l0aHViIFByb2plY3RzXFxhb2lcXGNsaWVudFxcY29tcG9uZW50c1xcU3BhY2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtrQixBQUd1Qix1RUFDZCIsImZpbGUiOiJEOlxcUHJvamVjdHNcXEdpdGh1YiBQcm9qZWN0c1xcYW9pXFxjbGllbnRcXGNvbXBvbmVudHNcXFNwYWNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IHNwYWNlciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZXJcIj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5zcGFjZXIge1xyXG4gICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNwYWNlcjtcclxuIl19 */\n/*@ sourceURL=D:\\\\Projects\\\\Github Projects\\\\aoi\\\\client\\\\components\\\\Spacer.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (spacer);

/***/ }),

/***/ "./components/UI/EntryButton.js":
/*!**************************************!*\
  !*** ./components/UI/EntryButton.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Projects\\Github Projects\\aoi\\client\\components\\UI\\EntryButton.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const entryButton = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 5
    }
  }, __jsx("button", {
    onClick: props.sign,
    className: "jsx-1900668396" + " " + "Button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }
  }, props.children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1900668396",
    __self: undefined
  }, ".Button.jsx-1900668396{width:100%;margin-bottom:5px;padding:10px;border:1px solid #ccc;border-radius:10px;font-size:1.1rem;}.Button.jsx-1900668396:hover{background-color:#525252;color:white;cursor:pointer;}@media screen and (max-width:768px){.Button.jsx-1900668396{border-radius:0px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0c1xcR2l0aHViIFByb2plY3RzXFxhb2lcXGNsaWVudFxcY29tcG9uZW50c1xcVUlcXEVudHJ5QnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFrQixBQUdzQixBQVNjLEFBT0wsV0FmRixPQWdCbEIsT0FQWSxJQVJDLFFBU0UsS0FSTyxVQVN4QixZQVJxQixtQkFDRixpQkFDbkIiLCJmaWxlIjoiRDpcXFByb2plY3RzXFxHaXRodWIgUHJvamVjdHNcXGFvaVxcY2xpZW50XFxjb21wb25lbnRzXFxVSVxcRW50cnlCdXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmNvbnN0IGVudHJ5QnV0dG9uID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5zaWdufSBjbGFzc05hbWU9XCJCdXR0b25cIj5cclxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5CdXR0b24ge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5CdXR0b246aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzUyNTI1MjtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAuQnV0dG9uIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZW50cnlCdXR0b247XHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\Projects\\\\Github Projects\\\\aoi\\\\client\\\\components\\\\UI\\\\EntryButton.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (entryButton);

/***/ }),

/***/ "./components/UI/Input.js":
/*!********************************!*\
  !*** ./components/UI/Input.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Projects\\Github Projects\\aoi\\client\\components\\UI\\Input.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const input = props => {
  const inputClasses = ["Input"];

  if (props.inValid) {
    inputClasses.push("Invalid");
  }

  let inputElement = __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx("input", {
    className: inputClasses.join(" "),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }), " ");

  switch (props.eleType) {
    case "input":
      {
        inputElement = __jsx("input", _extends({
          value: props.value,
          onChange: props.change,
          className: inputClasses.join(" ")
        }, props.eleConfig, {
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 9
          }
        }));
        break;
      }

    case "textarea":
      {
        inputElement = __jsx("textarea", _extends({
          value: props.value,
          onChange: props.change,
          className: inputClasses.join(" ")
        }, props.eleConfig, {
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 9
          }
        }));
        break;
      }

    default:
      inputElement = __jsx("input", {
        value: props.value,
        className: inputClasses.join(" "),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 9
        }
      });
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, inputElement, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3703292877",
    __self: undefined
  }, ".Input{width:100%;margin-bottom:5px;padding:10px;border:1px solid #ccc;border-radius:10px;}.Input::after{display:block;content:\"Love\";background-color:#525252;color:white;cursor:pointer;width:200px;z-index:100;}.InValid{border:1px solid salmon;}@media screen and (max-width:768px){.Input{border-radius:0px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0c1xcR2l0aHViIFByb2plY3RzXFxhb2lcXGNsaWVudFxcY29tcG9uZW50c1xcVUlcXElucHV0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStDeUIsQUFHc0IsQUFRRyxBQVVVLEFBTUosV0F2QkYsR0FRSCxJQWdCZixNQUxGLEtBbEJlLEFBUVksYUFQSCxZQVFWLFVBUE8sRUFRSixlQUNILEVBUmQsVUFTYyxZQUNkIiwiZmlsZSI6IkQ6XFxQcm9qZWN0c1xcR2l0aHViIFByb2plY3RzXFxhb2lcXGNsaWVudFxcY29tcG9uZW50c1xcVUlcXElucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgaW5wdXQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBpbnB1dENsYXNzZXMgPSBbXCJJbnB1dFwiXTtcclxuICBpZiAocHJvcHMuaW5WYWxpZCkge1xyXG4gICAgaW5wdXRDbGFzc2VzLnB1c2goXCJJbnZhbGlkXCIpO1xyXG4gIH1cclxuXHJcbiAgbGV0IGlucHV0RWxlbWVudCA9IChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxpbnB1dCBjbGFzc05hbWU9e2lucHV0Q2xhc3Nlcy5qb2luKFwiIFwiKX0gLz57XCIgXCJ9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG4gIHN3aXRjaCAocHJvcHMuZWxlVHlwZSkge1xyXG4gICAgY2FzZSBcImlucHV0XCI6IHtcclxuICAgICAgaW5wdXRFbGVtZW50ID0gKFxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdmFsdWU9e3Byb3BzLnZhbHVlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmNoYW5nZX1cclxuICAgICAgICAgIGNsYXNzTmFtZT17aW5wdXRDbGFzc2VzLmpvaW4oXCIgXCIpfVxyXG4gICAgICAgICAgey4uLnByb3BzLmVsZUNvbmZpZ31cclxuICAgICAgICAvPlxyXG4gICAgICApO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBjYXNlIFwidGV4dGFyZWFcIjoge1xyXG4gICAgICBpbnB1dEVsZW1lbnQgPSAoXHJcbiAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICB2YWx1ZT17cHJvcHMudmFsdWV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17cHJvcHMuY2hhbmdlfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtpbnB1dENsYXNzZXMuam9pbihcIiBcIil9XHJcbiAgICAgICAgICB7Li4ucHJvcHMuZWxlQ29uZmlnfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGlucHV0RWxlbWVudCA9IChcclxuICAgICAgICA8aW5wdXQgdmFsdWU9e3Byb3BzLnZhbHVlfSBjbGFzc05hbWU9e2lucHV0Q2xhc3Nlcy5qb2luKFwiIFwiKX0gLz5cclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIHtpbnB1dEVsZW1lbnR9XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgLklucHV0IHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLklucHV0OjphZnRlciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIGNvbnRlbnQ6IFwiTG92ZVwiO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzUyNTI1MjtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgIHotaW5kZXg6IDEwMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5JblZhbGlkIHtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHNhbG1vbjtcclxuICAgICAgICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHNhbG1vbjsgKi9cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAuSW5wdXQge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbnB1dDtcclxuIl19 */\n/*@ sourceURL=D:\\\\Projects\\\\Github Projects\\\\aoi\\\\client\\\\components\\\\UI\\\\Input.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (input);

/***/ }),

/***/ "./container/Account.js":
/*!******************************!*\
  !*** ./container/Account.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Logo */ "./components/Logo.js");
/* harmony import */ var _SignIn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SignIn */ "./container/SignIn.js");
/* harmony import */ var _SignUp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SignUp */ "./container/SignUp.js");
var _jsxFileName = "D:\\Projects\\Github Projects\\aoi\\client\\container\\Account.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const account = props => {
  const {
    0: statusState,
    1: setStatusState
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);

  const OnToggleAccountHandler = () => {
    setStatusState(!statusState);
  };

  const signin = __jsx(_SignIn__WEBPACK_IMPORTED_MODULE_3__["default"], {
    guest: false,
    toggleAccount: OnToggleAccountHandler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  });

  const signup = __jsx(_SignUp__WEBPACK_IMPORTED_MODULE_4__["default"], {
    guest: true,
    toggleAccount: OnToggleAccountHandler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 18
    }
  });

  return __jsx("div", {
    className: "jsx-1452055407 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2261789380", [props.show ? "flex" : "none"]]]) + " " + "Account",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx(_components_Logo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "jsx-1452055407 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2261789380", [props.show ? "flex" : "none"]]]) + " " + "form",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, statusState ? signin : signup), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2261789380",
    dynamic: [props.show ? "flex" : "none"],
    __self: undefined
  }, `.Account.__jsx-style-dynamic-selector{position:absolute;top:calc(50% - 10px);left:calc(50% - 220px);width:440px;height:500px;display:${props.show ? "flex" : "none"};-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:white;z-index:100;border-radius:10px;padding:30px 30px 0px 30px;-webkit-transition:all 5s linear;transition:all 5s linear;}@media screen and (max-width:1260px){.Main.__jsx-style-dynamic-selector{padding:0px 5%;}}@media screen and (max-width:992px){.logo.__jsx-style-dynamic-selector{width:130px;}}@media screen and (max-width:768px){.Main.__jsx-style-dynamic-selector{padding:10px 3%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:600px;}.logo.__jsx-style-dynamic-selector{width:100px;}.Main.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{width:100%;}.Account.__jsx-style-dynamic-selector{padding:10px 0px;box-shadow:none;height:500px;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0c1xcR2l0aHViIFByb2plY3RzXFxhb2lcXGNsaWVudFxcY29udGFpbmVyXFxBY2NvdW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCa0IsQUFHNkIsQUFpQkQsQUFNSCxBQU1JLEFBS0osQUFHRCxBQUdNLFdBRm5CLENBZEEsQUFXQSxHQWpCQSxDQVl3QixDQVdOLENBeENHLGVBeUNOLE1BeENRLE9BeUN2QixnQkF4Q1ksWUFDQyxhQUN3QixPQTBCdEIsYUFDZixpQkExQnNCLDhFQUNILDZGQUNJLHVCQUNYLFlBQ08sbUJBQ1EsMkJBQ0YsMERBQzNCIiwiZmlsZSI6IkQ6XFxQcm9qZWN0c1xcR2l0aHViIFByb2plY3RzXFxhb2lcXGNsaWVudFxcY29udGFpbmVyXFxBY2NvdW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMb2dvIGZyb20gXCIuLi9jb21wb25lbnRzL0xvZ29cIjtcclxuaW1wb3J0IFNpZ25JbiBmcm9tIFwiLi9TaWduSW5cIjtcclxuaW1wb3J0IFNpZ25VcCBmcm9tIFwiLi9TaWduVXBcIjtcclxuXHJcbmNvbnN0IGFjY291bnQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbc3RhdHVzU3RhdGUsIHNldFN0YXR1c1N0YXRlXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBjb25zdCBPblRvZ2dsZUFjY291bnRIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgc2V0U3RhdHVzU3RhdGUoIXN0YXR1c1N0YXRlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzaWduaW4gPSAoXHJcbiAgICA8U2lnbkluIGd1ZXN0PXtmYWxzZX0gdG9nZ2xlQWNjb3VudD17T25Ub2dnbGVBY2NvdW50SGFuZGxlcn0gLz5cclxuICApO1xyXG5cclxuICBjb25zdCBzaWdudXAgPSA8U2lnblVwIGd1ZXN0PXt0cnVlfSB0b2dnbGVBY2NvdW50PXtPblRvZ2dsZUFjY291bnRIYW5kbGVyfSAvPjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQWNjb3VudFwiPlxyXG4gICAgICA8TG9nbyAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1cIj57c3RhdHVzU3RhdGUgPyBzaWduaW4gOiBzaWdudXB9PC9kaXY+XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLkFjY291bnQge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDEwcHgpO1xyXG4gICAgICAgICAgbGVmdDogY2FsYyg1MCUgLSAyMjBweCk7XHJcbiAgICAgICAgICB3aWR0aDogNDQwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogJHtwcm9wcy5zaG93ID8gXCJmbGV4XCIgOiBcIm5vbmVcIn07XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDMwcHggMzBweCAwcHggMzBweDtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCA1cyBsaW5lYXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjYwcHgpIHtcclxuICAgICAgICAgIC5NYWluIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4IDUlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgICAgICAgIC5sb2dvIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgIC5NYWluIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAzJTtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgaGVpZ2h0OiA2MDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5sb2dvIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLk1haW4gPiBkaXYge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5BY2NvdW50IHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAwcHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgLnBhZ2UtdGl0bGUge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhY2NvdW50O1xyXG4iXX0= */
/*@ sourceURL=D:\\Projects\\Github Projects\\aoi\\client\\container\\Account.js */`), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1452055407",
    __self: undefined
  }, ".page-title{margin-top:30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0c1xcR2l0aHViIFByb2plY3RzXFxhb2lcXGNsaWVudFxcY29udGFpbmVyXFxBY2NvdW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVFeUIsQUFHMkIsZ0JBQ2xCIiwiZmlsZSI6IkQ6XFxQcm9qZWN0c1xcR2l0aHViIFByb2plY3RzXFxhb2lcXGNsaWVudFxcY29udGFpbmVyXFxBY2NvdW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMb2dvIGZyb20gXCIuLi9jb21wb25lbnRzL0xvZ29cIjtcclxuaW1wb3J0IFNpZ25JbiBmcm9tIFwiLi9TaWduSW5cIjtcclxuaW1wb3J0IFNpZ25VcCBmcm9tIFwiLi9TaWduVXBcIjtcclxuXHJcbmNvbnN0IGFjY291bnQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbc3RhdHVzU3RhdGUsIHNldFN0YXR1c1N0YXRlXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBjb25zdCBPblRvZ2dsZUFjY291bnRIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgc2V0U3RhdHVzU3RhdGUoIXN0YXR1c1N0YXRlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzaWduaW4gPSAoXHJcbiAgICA8U2lnbkluIGd1ZXN0PXtmYWxzZX0gdG9nZ2xlQWNjb3VudD17T25Ub2dnbGVBY2NvdW50SGFuZGxlcn0gLz5cclxuICApO1xyXG5cclxuICBjb25zdCBzaWdudXAgPSA8U2lnblVwIGd1ZXN0PXt0cnVlfSB0b2dnbGVBY2NvdW50PXtPblRvZ2dsZUFjY291bnRIYW5kbGVyfSAvPjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQWNjb3VudFwiPlxyXG4gICAgICA8TG9nbyAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1cIj57c3RhdHVzU3RhdGUgPyBzaWduaW4gOiBzaWdudXB9PC9kaXY+XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLkFjY291bnQge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDEwcHgpO1xyXG4gICAgICAgICAgbGVmdDogY2FsYyg1MCUgLSAyMjBweCk7XHJcbiAgICAgICAgICB3aWR0aDogNDQwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogJHtwcm9wcy5zaG93ID8gXCJmbGV4XCIgOiBcIm5vbmVcIn07XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDMwcHggMzBweCAwcHggMzBweDtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCA1cyBsaW5lYXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjYwcHgpIHtcclxuICAgICAgICAgIC5NYWluIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4IDUlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgICAgICAgIC5sb2dvIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgIC5NYWluIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAzJTtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgaGVpZ2h0OiA2MDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5sb2dvIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLk1haW4gPiBkaXYge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5BY2NvdW50IHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAwcHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgLnBhZ2UtdGl0bGUge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhY2NvdW50O1xyXG4iXX0= */\n/*@ sourceURL=D:\\\\Projects\\\\Github Projects\\\\aoi\\\\client\\\\container\\\\Account.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (account);

/***/ }),

/***/ "./container/Persists/Persists.js":
/*!****************************************!*\
  !*** ./container/Persists/Persists.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_store_actions_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/store/actions/auth */ "./hooks/store/actions/auth.js");
var _jsxFileName = "D:\\Projects\\Github Projects\\aoi\\client\\container\\Persists\\Persists.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const persists = ({
  children
}) => {
  const {
    authLoginAuto
  } = Object(_hooks_store_actions_auth__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    authLoginAuto();
  }, []);
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 12
    }
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (persists);

/***/ }),

/***/ "./container/SignIn.js":
/*!*****************************!*\
  !*** ./container/SignIn.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SwitchEntry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SwitchEntry */ "./container/SwitchEntry.js");
/* harmony import */ var _components_UI_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/UI/Input */ "./components/UI/Input.js");
/* harmony import */ var _components_UI_EntryButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/UI/EntryButton */ "./components/UI/EntryButton.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actionTypes */ "./container/actionTypes.js");
/* harmony import */ var _hooks_store_actions_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/store/actions/auth */ "./hooks/store/actions/auth.js");
var _jsxFileName = "D:\\Projects\\Github Projects\\aoi\\client\\container\\SignIn.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const controls = {
  email: {
    eleType: "input",
    eleConfig: {
      type: "email",
      placeholder: "Email",
      required: true
    },
    validation: {
      required: true,
      match: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    },
    valid: true,
    value: ""
  },
  password: {
    eleType: "input",
    eleConfig: {
      type: "password",
      placeholder: "Password",
      required: true
    },
    validation: {
      required: true,
      length: {
        min: 5
      }
    },
    valid: true,
    value: ""
  }
};

const signInFormReducer = (state, action) => {
  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_4__["START_TYPING"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        [action.field]: _objectSpread(_objectSpread({}, state[action.field]), {}, {
          value: action.value
        })
      });

    default:
      throw new Error("No command found");
  }
};

const SignIn = props => {
  const {
    authResponse
  } = Object(_hooks_store_actions_auth__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const {
    0: signInFormState,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(signInFormReducer, controls); // signin click handler

  const onSignInHandler = event => {
    event.preventDefault();
    const signInFormData = {
      email: signInFormState.email.value,
      password: signInFormState.password.value
    };
    authResponse(signInFormData, true);
  }; // two way binding...


  const onInputChangeHandler = (event, field) => {
    dispatch({
      type: _actionTypes__WEBPACK_IMPORTED_MODULE_4__["START_TYPING"],
      field,
      value: event.target.value
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: "page-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }, "Sign in"), __jsx(_SwitchEntry__WEBPACK_IMPORTED_MODULE_1__["default"], {
    guest: props.guest,
    toggleAccount: props.toggleAccount,
    entry: " Create account",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }), __jsx("form", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, Object.keys(signInFormState).map(field => {
    return __jsx(_components_UI_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
      change: event => onInputChangeHandler(event, field),
      value: signInFormState[field].value,
      inValid: !signInFormState[field].valid,
      key: field,
      eleConfig: signInFormState[field].eleConfig,
      eleType: signInFormState[field].eleType,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 13
      }
    });
  }), __jsx(_components_UI_EntryButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sign: event => onSignInHandler(event),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }, " ", "Sign In", " ")));
};

/* harmony default export */ __webpack_exports__["default"] = (SignIn);

/***/ }),

/***/ "./container/SignUp.js":
/*!*****************************!*\
  !*** ./container/SignUp.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SwitchEntry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SwitchEntry */ "./container/SwitchEntry.js");
/* harmony import */ var _components_UI_EntryButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/UI/EntryButton */ "./components/UI/EntryButton.js");
/* harmony import */ var _components_UI_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/UI/Input */ "./components/UI/Input.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actionTypes */ "./container/actionTypes.js");
/* harmony import */ var _hooks_store_actions_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/store/actions/auth */ "./hooks/store/actions/auth.js");
var _jsxFileName = "D:\\Projects\\Github Projects\\aoi\\client\\container\\SignUp.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const controls = {
  fullname: {
    eleType: "input",
    eleConfig: {
      type: "text",
      placeholder: "Full Name",
      required: true
    },
    validation: {
      required: true,
      length: {
        min: 5
      },
      match: /(?:^[ a-zA-Z]{5,}$)/
    },
    valid: true,
    value: ""
  },
  email: {
    eleType: "input",
    eleConfig: {
      type: "email",
      placeholder: "Email",
      required: true
    },
    validation: {
      required: true,
      match: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    },
    valid: true,
    value: ""
  },
  password: {
    eleType: "input",
    eleConfig: {
      type: "password",
      placeholder: "Password",
      required: true
    },
    validation: {
      required: true,
      length: {
        min: 5
      }
    },
    valid: true,
    value: ""
  }
};

const signUpFormReducer = (state, action) => {
  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_4__["START_TYPING"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        [action.field]: _objectSpread(_objectSpread({}, state[action.field]), {}, {
          value: action.value
        })
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_4__["CHECK_VALIDITY"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        [action.field]: _objectSpread(_objectSpread({}, state[action.field]), {}, {
          valid: action.valid
        })
      });

    default:
      throw new Error("No command found");
  }
};

const SignUp = props => {
  const {
    0: signUpFormState,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(signUpFormReducer, controls);
  const {
    authResponse
  } = Object(_hooks_store_actions_auth__WEBPACK_IMPORTED_MODULE_5__["default"])(); // check validity

  const chectValidity = (rules, value) => {
    let isValid = true;

    if (rules.required) {
      isValid = value !== "" && isValid;
    }

    if (rules.length) {
      if (rules.length.min) {
        isValid = value.length >= rules.length.min && isValid;
      }
    }

    if (rules.match) {
      isValid = rules.match.test(value) && isValid;
    }

    return isValid;
  }; // signup click handler


  const onSignUpHandler = event => {
    event.preventDefault();
    const signUpFormData = {
      fullName: signUpFormState.fullname.value,
      email: signUpFormState.email.value,
      password: signUpFormState.password.value
    };
    authResponse(signUpFormData, false);
  }; // two way binding...


  const onInputChangeHandler = (event, field) => {
    dispatch({
      type: _actionTypes__WEBPACK_IMPORTED_MODULE_4__["START_TYPING"],
      field,
      value: event.target.value
    });
    dispatch({
      type: _actionTypes__WEBPACK_IMPORTED_MODULE_4__["CHECK_VALIDITY"],
      field,
      valid: chectValidity(signUpFormState[field].validation, event.target.value)
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: "page-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 7
    }
  }, "Sign up"), __jsx(_SwitchEntry__WEBPACK_IMPORTED_MODULE_1__["default"], {
    guest: props.guest,
    toggleAccount: props.toggleAccount,
    entry: " Sign In",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }
  }), __jsx("form", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }
  }, Object.keys(signUpFormState).map(field => {
    return __jsx(_components_UI_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
      change: event => onInputChangeHandler(event, field),
      value: signUpFormState[field].value,
      inValid: !signUpFormState[field].valid,
      key: field,
      eleConfig: signUpFormState[field].eleConfig,
      eleType: signUpFormState[field].eleType,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 13
      }
    });
  }), __jsx(_components_UI_EntryButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sign: event => onSignUpHandler(event),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 9
    }
  }, " ", "Sign Up", " ")));
};

/* harmony default export */ __webpack_exports__["default"] = (SignUp);

/***/ }),

/***/ "./container/SwitchEntry.js":
/*!**********************************!*\
  !*** ./container/SwitchEntry.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Projects\\Github Projects\\aoi\\client\\container\\SwitchEntry.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const switchEntry = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("h4", {
    className: "jsx-3107264623" + " " + "link-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, !props.guest ? "New User" : "Already have an account", "?", __jsx("span", {
    onClick: props.toggleAccount,
    className: "jsx-3107264623" + " " + "link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, props.entry)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3107264623",
    __self: undefined
  }, ".link-wrapper.jsx-3107264623{margin:5px 0px;}.link.jsx-3107264623{color:#0769e0;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0c1xcR2l0aHViIFByb2plY3RzXFxhb2lcXGNsaWVudFxcY29udGFpbmVyXFxTd2l0Y2hFbnRyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZa0IsQUFHMEIsQUFHRCxjQUNDLENBSGpCLGNBSUEiLCJmaWxlIjoiRDpcXFByb2plY3RzXFxHaXRodWIgUHJvamVjdHNcXGFvaVxcY2xpZW50XFxjb250YWluZXJcXFN3aXRjaEVudHJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3Qgc3dpdGNoRW50cnkgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8aDQgY2xhc3NOYW1lPVwibGluay13cmFwcGVyXCI+XHJcbiAgICAgICAgeyFwcm9wcy5ndWVzdCA/IFwiTmV3IFVzZXJcIiA6IFwiQWxyZWFkeSBoYXZlIGFuIGFjY291bnRcIn0/XHJcbiAgICAgICAgPHNwYW4gb25DbGljaz17cHJvcHMudG9nZ2xlQWNjb3VudH0gY2xhc3NOYW1lPVwibGlua1wiPlxyXG4gICAgICAgICAge3Byb3BzLmVudHJ5fVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9oND5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAubGluay13cmFwcGVyIHtcclxuICAgICAgICAgIG1hcmdpbjogNXB4IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxpbmsge1xyXG4gICAgICAgICAgY29sb3I6ICMwNzY5ZTA7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzd2l0Y2hFbnRyeTtcclxuIl19 */\n/*@ sourceURL=D:\\\\Projects\\\\Github Projects\\\\aoi\\\\client\\\\container\\\\SwitchEntry.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (switchEntry);

/***/ }),

/***/ "./container/actionTypes.js":
/*!**********************************!*\
  !*** ./container/actionTypes.js ***!
  \**********************************/
/*! exports provided: START_TYPING, CHECK_VALIDITY, CLEAR_FIELDS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "START_TYPING", function() { return START_TYPING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_VALIDITY", function() { return CHECK_VALIDITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_FIELDS", function() { return CLEAR_FIELDS; });
const START_TYPING = "START_TYPING";
const CHECK_VALIDITY = "CHECK_VALIDITY";
const CLEAR_FIELDS = "CLEAR_FIELDS";

/***/ }),

/***/ "./hooks/store/actions/actionTypes.js":
/*!********************************************!*\
  !*** ./hooks/store/actions/actionTypes.js ***!
  \********************************************/
/*! exports provided: AUTH_START, AUTH_RESPONSE, AUTH_ERROR, AUTH_LOGOUT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_START", function() { return AUTH_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_RESPONSE", function() { return AUTH_RESPONSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_ERROR", function() { return AUTH_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_LOGOUT", function() { return AUTH_LOGOUT; });
// Auth related actions
const AUTH_START = "AUTH_START";
const AUTH_RESPONSE = "AUTH_RESPONSE";
const AUTH_ERROR = "AUTH_ERROR";
const AUTH_LOGOUT = "AUTH_LOGOUT";

/***/ }),

/***/ "./hooks/store/actions/auth.js":
/*!*************************************!*\
  !*** ./hooks/store/actions/auth.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ "./hooks/store/actions/actionTypes.js");
/* harmony import */ var _lib_http_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/http/request */ "./lib/http/request.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store */ "./hooks/store/store.js");





const expirationTimeInSecs = () => {
  const expirationDate = new Date(localStorage.getItem("expirationDate"));
  return (expirationDate.getTime() - new Date().getTime()) / 1000;
  ;
};

const useAuthActions = () => {
  const dispatch = Object(_store__WEBPACK_IMPORTED_MODULE_3__["useStore"])()[1]; // auth start activate spinner

  const authStart = () => {
    dispatch(_actionTypes__WEBPACK_IMPORTED_MODULE_0__["AUTH_START"]);
  }; // auth logout clear authentication datas


  const authLogout = () => {
    localStorage.removeItem("localId");
    localStorage.removeItem("tokenId");
    localStorage.removeItem("expirationDate");
    dispatch(_actionTypes__WEBPACK_IMPORTED_MODULE_0__["AUTH_LOGOUT"]);
  }; // auth error - triggers when there is error with login


  const authError = errors => {
    dispatch(_actionTypes__WEBPACK_IMPORTED_MODULE_0__["AUTH_ERROR"], errors);
  }; // auth response helper


  const authResponseSync = data => {
    dispatch(_actionTypes__WEBPACK_IMPORTED_MODULE_0__["AUTH_RESPONSE"], data);
  }; // helper function fr auth response


  const authRes = user => {
    const expirationDate = new Date(new Date().getTime() + user.expiresIn * 1000); // store user's Id and token for authomatic login upon referesh

    localStorage.setItem("localId", user.localId);
    localStorage.setItem("tokenId", user.tokenId);
    localStorage.setItem("expirationDate", expirationDate);
    authResponseSync(user);
  }; // auth logout after expiration time


  const authLogoutAfterExpirationTime = expirationTime => {
    // convert to milliseconds
    const expirationTimeMili = expirationTime * 1000;
    setTimeout(() => {
      dispatch(authLogout());
    }, expirationTimeMili);
  };

  const authLoginAuto = async () => {
    authStart();
    const token = localStorage.getItem("tokenId");

    if (!token) {
      authLogout();
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.replace("/");
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));

      if (expirationDate <= new Date()) {
        authLogout();
        next_router__WEBPACK_IMPORTED_MODULE_2___default.a.replace("/");
      } else {
        authLogoutAfterExpirationTime(expirationTimeInSecs());
        let graphqlQuery = {
          query: `
                        query getUser($localId: ID!){
                            getUser(localId:$localId)
                            {
                                localId
                                email
                                fullName
                            }
                        },
                    `,
          variables: {
            localId: localStorage.getItem("localId")
          }
        };

        try {
          const res = await Object(_lib_http_request__WEBPACK_IMPORTED_MODULE_1__["request"])(graphqlQuery);

          if (res.errors) {
            authError(res.errors.map(e => e.message));
          }

          if (res.data) {
            authResponseSync(res.data.getUser);
          }
        } catch (err) {
          authError(err);
        }
      }
    }
  }; // auth response - get the user's data


  const authResponse = async (authData, isLogin) => {
    // start loading
    authStart();
    let graphqlQuery = {
      query: `
                mutation LoginUser($email: String!, $password: String!){
                    loginUser(email:$email, password:$password)
                    {
                        localId
                        email
                        tokenId
                        expiresIn
                        fullName
                    }
                },
            `,
      variables: {
        email: authData.email,
        password: authData.password
      }
    };

    if (!isLogin) {
      graphqlQuery = {
        query: `
                    mutation CreateUser(
                        $email: String!, 
                        $fullName: String!, 
                        $password: String!) {
                        createUser(userInput: {email:$email, fullName:$fullName, password:$password })
                        {
                            localId
                            email
                            tokenId
                            expiresIn
                            fullName
                        }
                    }
                `,
        variables: {
          email: authData.email,
          fullName: authData.fullName,
          password: authData.password
        }
      };
    }

    try {
      const res = await Object(_lib_http_request__WEBPACK_IMPORTED_MODULE_1__["request"])(graphqlQuery);

      if (res.errors) {
        authError(res.errors.map(e => e.message));
      }

      if (res.data) {
        if (isLogin) {
          authRes(res.data.loginUser);
        } else {
          authRes(res.data.createUser);
        }

        next_router__WEBPACK_IMPORTED_MODULE_2___default.a.replace("/");
      }
    } catch (err) {
      authError(err);
    }
  };

  return {
    authStart,
    authLogout,
    authResponse,
    authLoginAuto
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useAuthActions);

/***/ }),

/***/ "./hooks/store/reducers/auth.js":
/*!**************************************!*\
  !*** ./hooks/store/reducers/auth.js ***!
  \**************************************/
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
  auth: {
    isAuth: false,
    data: {},
    errors: null,
    loading: false
  }
};

const configureAuth = () => {
  const userActions = {
    [_actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["AUTH_START"]]: state => {
      return _objectSpread(_objectSpread({}, state), {}, {
        auth: _objectSpread(_objectSpread({}, state.auth), {}, {
          loading: true
        })
      });
    },
    [_actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["AUTH_RESPONSE"]]: (state, data) => {
      console.log("AUTH_RESPONSE", data);
      return _objectSpread(_objectSpread({}, state), {}, {
        auth: _objectSpread(_objectSpread({}, state.auth), {}, {
          data: _objectSpread(_objectSpread({}, state.auth.data), data),
          isAuth: true,
          loading: false
        })
      });
    },
    [_actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["AUTH_ERROR"]]: (state, errors) => {
      console.log(errors);
      return _objectSpread(_objectSpread({}, state), {}, {
        auth: _objectSpread(_objectSpread({}, state.auth), {}, {
          errors: errors,
          isAuth: false,
          loading: false
        })
      });
    },
    [_actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["AUTH_LOGOUT"]]: state => {
      return _objectSpread(_objectSpread({}, state), {}, {
        auth: _objectSpread(_objectSpread({}, state.auth), {}, {
          data: {
            profile: {
              imageUrl: "",
              displayName: ""
            }
          },
          errors: null,
          isAuth: false,
          loading: false
        })
      });
    }
  };
  Object(_store__WEBPACK_IMPORTED_MODULE_0__["initStore"])(initialState, userActions);
};

/* harmony default export */ __webpack_exports__["default"] = (configureAuth);

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
    const newState = actions[actionIdentifier](globalState, payload);
    globalState = _objectSpread(_objectSpread({}, globalState), newState);

    for (const listener of listeners) {
      listener(globalState);
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

/***/ "./lib/http/request.js":
/*!*****************************!*\
  !*** ./lib/http/request.js ***!
  \*****************************/
/*! exports provided: GRAPHQLURL, request, fetcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GRAPHQLURL", function() { return GRAPHQLURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "request", function() { return request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetcher", function() { return fetcher; });
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-fetch */ "node-fetch");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_0__);

const BASE_URL = "http://localhost:2020";
const GRAPHQLURL = `${BASE_URL}/graphql`;
const request = async graphqlQuery => {
  const response = await node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(GRAPHQLURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(graphqlQuery)
  });
  return response.json();
};
const fetcher = async (key, query) => {
  const res = await node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(key, {
    method: "POST",
    body: JSON.stringify(query),
    headers: {
      "Content-Type": "application/json"
    }
  });
  return res.json();
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

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    const {
      pathname
    } = window.location;
    const {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    const resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      const isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn(`Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>`);
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.default = void 0;

var _url2 = __webpack_require__(/*! url */ "url");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch((0, _utils.formatWithValidation)({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as2, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname,
          query
        }), (0, _utils.getURL)());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && (0, _url2.parse)(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/vercel/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute((0, _url2.parse)(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = (0, _url2.parse)(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as2;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (_utils.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? (0, _utils.formatWithValidation)(_url) : _url;
      let as = typeof _as === 'object' ? (0, _utils.formatWithValidation)(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = (0, _url2.parse)(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if ((0, _isDynamic.isDynamicRoute)(route)) {
        const {
          pathname: asPathname
        } = (0, _url2.parse)(as);
        const routeRegex = (0, _routeRegex.getRouteRegex)(route);
        const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo).then(() => {
          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        });
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = (0, _url2.parse)(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isOptional = /^\\\[.*\\\]$/.test($1);

    if (isOptional) {
      $1 = $1.slice(2, -2);
    }

    const isCatchAll = /^(\\\.){3}/.test($1);

    if (isCatchAll) {
      $1 = $1.slice(6);
    }

    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? isOptional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups,
    namedRegex: namedParameterizedRoute ? `^${namedParameterizedRoute}(?:/)?$` : undefined
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _url = __webpack_require__(/*! url */ "url");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _url.format)(url, options);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

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

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


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
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header/Header */ "./components/Header/Header.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _hooks_store_reducers_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/store/reducers/auth */ "./hooks/store/reducers/auth.js");
/* harmony import */ var _container_Persists_Persists__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../container/Persists/Persists */ "./container/Persists/Persists.js");
var _jsxFileName = "D:\\Projects\\Github Projects\\aoi\\client\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_1___default.a {
  render() {
    const {
      Component,
      pageProps
    } = this.props;
    Object(_hooks_store_reducers_auth__WEBPACK_IMPORTED_MODULE_5__["default"])();
    return __jsx(_container_Persists_Persists__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 7
      }
    }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }
    }, __jsx(_components_Header_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 11
      }
    }), __jsx("main", {
      style: {
        marginTop: "160px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 11
      }
    }, __jsx(Component, _extends({}, pageProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }
    }))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0JhY2tkcm9wLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9vdGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRCb3R0b20uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIvSGVhZFRvcC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dvLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmF2aWdhdGlvbnMvQ2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OYXZpZ2F0aW9ucy9Ecm9wQm94LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmF2aWdhdGlvbnMvTmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdmlnYXRpb25zL05hdmlnYXRpb25zLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoQm94LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU3BhY2VyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvRW50cnlCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9JbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXIvQWNjb3VudC5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXIvUGVyc2lzdHMvUGVyc2lzdHMuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVyL1NpZ25Jbi5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXIvU2lnblVwLmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lci9Td2l0Y2hFbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXIvYWN0aW9uVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vaG9va3Mvc3RvcmUvYWN0aW9ucy9hY3Rpb25UeXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9ob29rcy9zdG9yZS9hY3Rpb25zL2F1dGguanMiLCJ3ZWJwYWNrOi8vLy4vaG9va3Mvc3RvcmUvcmVkdWNlcnMvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9ob29rcy9zdG9yZS9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaHR0cC9yZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uLi8uLi9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJub2RlLWZldGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXMtZXhhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zdHlsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVybFwiIl0sIm5hbWVzIjpbImJhY2tkcm9wIiwicHJvcHMiLCJjbGlja2VkIiwic2hvdyIsImZvb3RlciIsImNhdGVnb3JpZXMiLCJ0aXRsZSIsImxpc3QiLCJtYXAiLCJjYXRlZ29yeSIsImluZGV4IiwiaGVhZEJvdHRvbSIsImhlYWRUb3AiLCJzaG93QWNjb3VudCIsInNldFNob3dBY2NvdW50IiwidXNlU3RhdGUiLCJzdGF0ZSIsInVzZVN0b3JlIiwiaXNBdXRoIiwiZGF0YSIsImF1dGgiLCJsb2dpblN0YXR1cyIsImZ1bGxOYW1lIiwic3BsaXQiLCJzaG93QWNjb3VudEhhbmRsZXIiLCJoZWFkZXIiLCJsYXlvdXQiLCJjaGlsZHJlbiIsImxvZ28iLCJjb2x1bW5DYXRlZ29yeSIsInByb2R1Y3QiLCJkcm9wQm94IiwibGlzdHMiLCJsZW5ndGgiLCJjbGFzc0xpc3QiLCJwdXNoIiwiam9pbiIsIm5hdmlnYXRpb24iLCJ0YXJnZXQiLCJkcm9wQm94U3RhdGUiLCJzZXREcm9wQm94U3RhdGUiLCJ0b2dnbGVEcm9wQm94IiwibmF2aWdhdGlvbnMiLCJuYXZzIiwiQXJyYXkiLCJfIiwiaSIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsIm5hdiIsInNlYXJjaEJveCIsInNwYWNlciIsImVudHJ5QnV0dG9uIiwic2lnbiIsImlucHV0IiwiaW5wdXRDbGFzc2VzIiwiaW5WYWxpZCIsImlucHV0RWxlbWVudCIsImVsZVR5cGUiLCJ2YWx1ZSIsImNoYW5nZSIsImVsZUNvbmZpZyIsImFjY291bnQiLCJzdGF0dXNTdGF0ZSIsInNldFN0YXR1c1N0YXRlIiwiT25Ub2dnbGVBY2NvdW50SGFuZGxlciIsInNpZ25pbiIsInNpZ251cCIsInBlcnNpc3RzIiwiYXV0aExvZ2luQXV0byIsInVzZUF1dGhBY3Rpb25zIiwidXNlRWZmZWN0IiwiY29udHJvbHMiLCJlbWFpbCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwidmFsaWRhdGlvbiIsIm1hdGNoIiwidmFsaWQiLCJwYXNzd29yZCIsIm1pbiIsInNpZ25JbkZvcm1SZWR1Y2VyIiwiYWN0aW9uIiwiYWN0aW9uVHlwZXMiLCJmaWVsZCIsIkVycm9yIiwiU2lnbkluIiwiYXV0aFJlc3BvbnNlIiwic2lnbkluRm9ybVN0YXRlIiwiZGlzcGF0Y2giLCJ1c2VSZWR1Y2VyIiwib25TaWduSW5IYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNpZ25JbkZvcm1EYXRhIiwib25JbnB1dENoYW5nZUhhbmRsZXIiLCJndWVzdCIsInRvZ2dsZUFjY291bnQiLCJPYmplY3QiLCJrZXlzIiwiZnVsbG5hbWUiLCJzaWduVXBGb3JtUmVkdWNlciIsIlNpZ25VcCIsInNpZ25VcEZvcm1TdGF0ZSIsImNoZWN0VmFsaWRpdHkiLCJydWxlcyIsImlzVmFsaWQiLCJ0ZXN0Iiwib25TaWduVXBIYW5kbGVyIiwic2lnblVwRm9ybURhdGEiLCJzd2l0Y2hFbnRyeSIsImVudHJ5IiwiU1RBUlRfVFlQSU5HIiwiQ0hFQ0tfVkFMSURJVFkiLCJDTEVBUl9GSUVMRFMiLCJBVVRIX1NUQVJUIiwiQVVUSF9SRVNQT05TRSIsIkFVVEhfRVJST1IiLCJBVVRIX0xPR09VVCIsImV4cGlyYXRpb25UaW1lSW5TZWNzIiwiZXhwaXJhdGlvbkRhdGUiLCJEYXRlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImdldFRpbWUiLCJhdXRoU3RhcnQiLCJhdXRoTG9nb3V0IiwicmVtb3ZlSXRlbSIsImF1dGhFcnJvciIsImVycm9ycyIsImF1dGhSZXNwb25zZVN5bmMiLCJhdXRoUmVzIiwidXNlciIsImV4cGlyZXNJbiIsInNldEl0ZW0iLCJsb2NhbElkIiwidG9rZW5JZCIsImF1dGhMb2dvdXRBZnRlckV4cGlyYXRpb25UaW1lIiwiZXhwaXJhdGlvblRpbWUiLCJleHBpcmF0aW9uVGltZU1pbGkiLCJzZXRUaW1lb3V0IiwidG9rZW4iLCJSb3V0ZXIiLCJyZXBsYWNlIiwiZ3JhcGhxbFF1ZXJ5IiwicXVlcnkiLCJ2YXJpYWJsZXMiLCJyZXMiLCJyZXF1ZXN0IiwiZSIsIm1lc3NhZ2UiLCJnZXRVc2VyIiwiZXJyIiwiYXV0aERhdGEiLCJpc0xvZ2luIiwibG9naW5Vc2VyIiwiY3JlYXRlVXNlciIsImluaXRpYWxTdGF0ZSIsImxvYWRpbmciLCJjb25maWd1cmVBdXRoIiwidXNlckFjdGlvbnMiLCJjb25zb2xlIiwibG9nIiwicHJvZmlsZSIsImltYWdlVXJsIiwiZGlzcGxheU5hbWUiLCJpbml0U3RvcmUiLCJnbG9iYWxTdGF0ZSIsImxpc3RlbmVycyIsImFjdGlvbnMiLCJzaG91bGRMaXN0ZW4iLCJzZXRTdGF0ZSIsImFjdGlvbklkZW50aWZpZXIiLCJwYXlsb2FkIiwibmV3U3RhdGUiLCJsaXN0ZW5lciIsImZpbHRlciIsImxpIiwiQkFTRV9VUkwiLCJHUkFQSFFMVVJMIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImpzb24iLCJmZXRjaGVyIiwia2V5IiwidXJsIiwib3JpZ2luIiwibGFzdEhyZWYiLCJsYXN0QXMiLCJsYXN0UmVzdWx0IiwiaHJlZiIsImFzIiwicmVzdWx0IiwiZm9ybWF0RnVuYyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwid2luZG93IiwicHJlZmV0Y2hlZCIsIm9ic2VydmVyIiwiZW50cmllcyIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsImdldE9ic2VydmVyIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwIiwibWVtb2l6ZWRGb3JtYXRVcmwiLCJmb3JtYXRVcmwiLCJhc0hyZWYiLCJub2RlTmFtZSIsImlzTG9jYWwiLCJzY3JvbGwiLCJzaGFsbG93Iiwic3VjY2VzcyIsImRvY3VtZW50IiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJnZXRQYXRocyIsInJlc29sdmVkSHJlZiIsInBhcnNlZEFzIiwiaGFuZGxlUmVmIiwicmVmIiwiaXNQcmVmZXRjaGVkIiwicHJlZmV0Y2giLCJwYXRocyIsInJlbmRlciIsImNoaWxkIiwiQ2hpbGRyZW4iLCJlbCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5Iiwib25DbGljayIsInByb2Nlc3MiLCJSZWFjdCIsIndhcm4iLCJQcm9wVHlwZXMiLCJyZXF1aXJlIiwiZXhhY3QiLCJMaW5rIiwicGFzc0hyZWYiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZ2V0IiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwibmFtZSIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsInBhdGgiLCJwcmVwYXJlUm91dGUiLCJ0b1JvdXRlIiwiYXR0ZW1wdHMiLCJpc1NlcnZlclJlbmRlciIsInBhdGhuYW1lIiwiYWRkQmFzZVBhdGgiLCJfX05FWFRfREFUQV9fIiwiYnVpbGRJZCIsImRlbEJhc2VQYXRoIiwiY3JlZGVudGlhbHMiLCJnZXRSZXNwb25zZSIsInJvdXRlIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJQcm9taXNlIiwiZmV0Y2hOZXh0RGF0YSIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwidXBkYXRlIiwibW9kIiwibmV3RGF0YSIsInJlbG9hZCIsImJhY2siLCJvcHRpb25zIiwiU1QiLCJwZXJmb3JtYW5jZSIsInJlc29sdmUiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsIm1pc3NpbmdQYXJhbXMiLCJwYXJhbSIsInJlamVjdCIsImFzUGF0aG5hbWUiLCJyb3V0ZUluZm8iLCJlcnJvciIsImFwcENvbXAiLCJjaGFuZ2VTdGF0ZSIsImdldFJvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsImhhbmRsZUVycm9yIiwicGFnZSIsImdpcEVyciIsImlzVmFsaWRFbGVtZW50VHlwZSIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJoYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiY2FuY2VsbGVkIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJmbiIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJURVNUX1JPVVRFIiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJwYXJhbXMiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwiZXNjYXBlZFJvdXRlIiwiZXNjYXBlUmVnZXgiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwiaXNPcHRpb25hbCIsIiQxIiwiaXNDYXRjaEFsbCIsInBvcyIsInJlcGVhdCIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwibmFtZWRSZWdleCIsInVzZWQiLCJwcm90b2NvbCIsImhvc3RuYW1lIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiY29tcG9uZW50RGlkQ2F0Y2giLCJjcmVhdGVVcmwiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiYXBwR2V0SW5pdGlhbFByb3BzIiwid2FybkNvbnRhaW5lciIsIndhcm5VcmwiLCJwdXNoVG8iLCJwdXNoUm91dGUiLCJwdXNoVXJsIiwicmVwbGFjZVRvIiwicmVwbGFjZVJvdXRlIiwicmVwbGFjZVVybCIsIk15QXBwIiwibWFyZ2luVG9wIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RB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O0FDQTdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1pSixLQUFOLFNBQW9CbkIsK0NBQXBCLENBQXdCO0FBQ3RCOUksUUFBTSxHQUFHO0FBQ1AsVUFBTTtBQUFFckIsZUFBRjtBQUFhcUs7QUFBYixRQUEyQixLQUFLclgsS0FBdEM7QUFDQStKLDhFQUFhO0FBRWIsV0FDRSxNQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUVFO0FBQU0sV0FBSyxFQUFFO0FBQUV3TyxpQkFBUyxFQUFFO0FBQWIsT0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxTQUFELGVBQWVsQixTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FERixDQUZGLEVBS0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTEYsQ0FERixDQURGO0FBV0Q7O0FBaEJxQjs7QUFtQlRpQixvRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxnQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBiYWNrZHJvcCA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkJhY2tkcm9wXCIgb25DbGljaz17cHJvcHMuY2xpY2tlZH0+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuQmFja2Ryb3Age1xyXG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTMpO1xyXG4gICAgICAgICAgei1pbmRleDogOTA7XHJcbiAgICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiAke3Byb3BzLnNob3cgPyBcImJsb2NrXCIgOiBcIm5vbmVcIn07XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYmFja2Ryb3A7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENhdGVnb3J5IGZyb20gXCIuLi9jb21wb25lbnRzL05hdmlnYXRpb25zL0NhdGVnb3J5XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmNvbnN0IGZvb3RlciA9ICgpID0+IHtcclxuICBjb25zdCBjYXRlZ29yaWVzID0gW1xyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJFeHBsb3JlIEF1c3RpblwiLFxyXG4gICAgICBsaXN0OiBbXHJcbiAgICAgICAgXCJTaG9lc1wiLFxyXG4gICAgICAgIFwiQnJhbmRzXCIsXHJcbiAgICAgICAgXCJDbG90aGluZ1wiLFxyXG4gICAgICAgIFwiUnVubmluZ1wiLFxyXG4gICAgICAgIFwiSGVhbHMgJiBQdW1wc1wiLFxyXG4gICAgICAgIFwiQm9vdHMgJiBCb290aWVzXCIsXHJcbiAgICAgICAgXCJDbG9nc1wiLFxyXG4gICAgICAgIFwiU2xpcHBlcnNcIixcclxuICAgICAgICBcIk5ldyBBcnJpdmFsc1wiLFxyXG4gICAgICAgIFwiVmlldyBhbGxcIixcclxuICAgICAgXSxcclxuICAgIH0sXHJcblxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJDdXN0b21lciBTZXJ2aWNlXCIsXHJcbiAgICAgIGxpc3Q6IFtcclxuICAgICAgICBcIkZBUVwiLFxyXG4gICAgICAgIFwiSGVscCBjZW50ZXJcIixcclxuICAgICAgICBcIkJpbGxpbmcgSW5mb3JtYXRpb25cIixcclxuICAgICAgICBcIk15IEFjY291bnRcIixcclxuICAgICAgICBcIlNoaXBwaW5nICYgUmV0dXJuc1wiLFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkFib3V0IEF1c3RpblwiLFxyXG4gICAgICBsaXN0OiBbXCJDb250YWN0IHVzXCIsIFwiQ3VzdG9tZXJzIFJldmlld3NcIiwgXCJBdXRpbiBCZW5lZml0c1wiLCBcIkFib3V0IHVzXCJdLFxyXG4gICAgfSxcclxuICBdO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci13cmFwcGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XHJcbiAgICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxDYXRlZ29yeSBrZXk9e2luZGV4fSBjYXRlZ29yeT17Y2F0ZWdvcnl9IC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoMz5Db25uZWN0IFdpdGggVXM8L2gzPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWxzXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvZmFjZWJvb2suc3ZnXCIgYWx0PVwiZmFjZWJvb2tcIiAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2luc3RhZ3JhbS5zdmdcIiBhbHQ9XCJpbnN0YWdyYW1cIiAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3R3aXR0ZXIuc3ZnXCIgYWx0PVwidHdpdHRlclwiIC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvcGludGVyZXN0LnN2Z1wiIGFsdD1cInBpbnRlcmVzdFwiIC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMveW91dHViZS5zdmdcIiBhbHQ9XCJ5b3V0dWJlXCIgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgQ29weXJpZ2h0ICZjb3B5OyBhdXN0aW5FeHByZXNzLmNvbSAyMDIwXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuZm9vdGVyLXdyYXBwZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIyMjJiO1xyXG4gICAgICAgICAgY29sb3I6ICM4ZjkzOTc7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb290ZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtaW4taGVpZ2h0OiA1MDBweDtcclxuICAgICAgICAgIG1hcmdpbjogNTBweCBhdXRvIDAgYXV0bztcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICBwYWRkaW5nOiA1MHB4IDMlIDUwcHggMyU7XHJcbiAgICAgICAgICBjb2xvcjogI2NiY2RjZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNvY2lhbHMge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgIC8vICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc29jaWFscyBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAuZm9vdGVyID4gZGl2IHtcclxuICAgICAgICAgIGZsZXgtYmFzaXM6IDIzJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvb3Rlci13cmFwcGVyIGEge1xyXG4gICAgICAgICAgY29sb3I6ICNjYmNkY2Y7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb290ZXIgbGkge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMWIyMjJiO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZvb3RlcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTG9nbyBmcm9tIFwiLi4vTG9nb1wiO1xyXG5pbXBvcnQgU2VhcmNoQm94IGZyb20gXCIuLi9TZWFyY2hCb3hcIjtcclxuaW1wb3J0IE5hdmlnYXRpb25zIGZyb20gXCIuLi9OYXZpZ2F0aW9ucy9OYXZpZ2F0aW9uc1wiO1xyXG5cclxuY29uc3QgaGVhZEJvdHRvbSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItYm90dG9tXCI+XHJcbiAgICAgIDxMb2dvIC8+XHJcbiAgICAgIDxOYXZpZ2F0aW9ucyAvPlxyXG4gICAgICA8U2VhcmNoQm94IC8+XHJcbiAgICAgIHsvKiBcclxuICAgICAgPENhcnQgLz4gKi99XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmhlYWRlci1ib3R0b20ge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgICAgICAgcGFkZGluZzogMCAzJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoZWFkQm90dG9tO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgQmFja2Ryb3AgZnJvbSBcIi4uL0JhY2tkcm9wXCI7XHJcbmltcG9ydCBBY2NvdW50IGZyb20gXCIuLi8uLi9jb250YWluZXIvQWNjb3VudFwiO1xyXG5pbXBvcnQgeyB1c2VTdG9yZSB9IGZyb20gXCIuLi8uLi9ob29rcy9zdG9yZS9zdG9yZVwiO1xyXG5cclxuY29uc3QgaGVhZFRvcCA9ICgpID0+IHtcclxuICBjb25zdCBbc2hvd0FjY291bnQsIHNldFNob3dBY2NvdW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBzdGF0ZSA9IHVzZVN0b3JlKClbMF07XHJcbiAgY29uc3QgeyBpc0F1dGgsIGRhdGEgfSA9IHN0YXRlLmF1dGg7XHJcblxyXG4gIGNvbnN0IGxvZ2luU3RhdHVzID0gaXNBdXRoID8gKFxyXG4gICAgPHNwYW4+IHtkYXRhLmZ1bGxOYW1lLnNwbGl0KFwiIFwiKVswXX0gPC9zcGFuPlxyXG4gICkgOiAoXHJcbiAgICA8c3Bhbj5TaWduIGluIC8gUmVnaXN0ZXI8L3NwYW4+XHJcbiAgKTtcclxuICBjb25zdCBzaG93QWNjb3VudEhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRTaG93QWNjb3VudCghc2hvd0FjY291bnQpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci10b3BcIj5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cImxpbmtzXCI+XHJcbiAgICAgICAgPGxpIG9uQ2xpY2s9e3Nob3dBY2NvdW50SGFuZGxlcn0+XHJcbiAgICAgICAgICBNeSBBY2NvdW50IDxpbWcgc3JjPVwiL2ltYWdlcy91c2VyLnN2Z1wiIC8+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2NoZWNrb3V0XCI+XHJcbiAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgIE15IFNob3BwaW5nIEJhZyAoMCkgPGltZyBzcmM9XCIvaW1hZ2VzL2NhcnQuc3ZnXCIgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDxCYWNrZHJvcCBzaG93PXtzaG93QWNjb3VudH0gY2xpY2tlZD17c2hvd0FjY291bnRIYW5kbGVyfSAvPlxyXG4gICAgICA8QWNjb3VudCBzaG93PXtzaG93QWNjb3VudH0gLz5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuaGVhZGVyLXRvcCB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDBweCAzJTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDI3MmI7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubGlua3Mge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5saW5rcyBsaSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIHBhZGRpbmc6IDBweCA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5saW5rcyBsaSBhIHtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGlua3MgbGkgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAxNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgaGVhZFRvcDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9MYXlvdXRcIjtcclxuaW1wb3J0IEhlYWRUb3AgZnJvbSBcIi4vSGVhZFRvcFwiO1xyXG5pbXBvcnQgSGVhZEJvdHRvbSBmcm9tIFwiLi9IZWFkQm90dG9tXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9ucyBmcm9tIFwiLi4vTmF2aWdhdGlvbnMvTmF2aWdhdGlvbnNcIjtcclxuXHJcbmNvbnN0IGhlYWRlciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgPEhlYWRUb3AgLz5cclxuICAgICAgPEhlYWRCb3R0b20gLz5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgei1pbmRleDogOTA7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWVlZWY7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyO1xyXG4iLCJjb25zdCBsYXlvdXQgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWxheW91dFwiPlxyXG4gICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgKiB7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucGFnZS1sYXlvdXQge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW4tc2VyaWY7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBjb2xvcjogIzE4MTkyYjtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDEsXHJcbiAgICAgICAgaDIsXHJcbiAgICAgICAgaDMsXHJcbiAgICAgICAgaDQsXHJcbiAgICAgICAgaDUsXHJcbiAgICAgICAgaDYge1xyXG4gICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1bCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW4tc2VyaWY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgY29sb3I6ICMxYjIyMmI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlbGVjdCB7XHJcbiAgICAgICAgICAvLyAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCAxMnB4IGNlbnRlcjtcclxuICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvaW1hZ2VzL2Rvd25sb2FkLnN2Z1wiKTtcclxuICAgICAgICAgIGJhY2tncm91bmctY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgcGFkZGluZzogOHB4IDMwcHggOHB4IDBweDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW4tc2VyaWY7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbGF5b3V0O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmNvbnN0IGxvZ28gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxyXG4gICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgIDxhPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImxvZ29cIj5cclxuICAgICAgICAgICAgYXVzdGluPHNwYW4gY2xhc3NOYW1lPVwicmVkXCI+RXhwPC9zcGFuPnJlc3MuY29tXHJcbiAgICAgICAgICA8L2gyPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5sb2dvIGgyIHtcclxuICAgICAgICAgIGNvbG9yOiAjMWIyMjJiO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiT3BlbiBzYW5zXCIsIHNhbi1zZXJpZjtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yZWQge1xyXG4gICAgICAgICAgY29sb3I6ICMwNjU0YjM7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9nbztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5jb25zdCBjYXRlZ29yeSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgdGl0bGUsIGxpc3QgfSA9IHByb3BzLmNhdGVnb3J5O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3J5XCI+XHJcbiAgICAgIDxoMz57dGl0bGV9PC9oMz5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIHtsaXN0Lm1hcCgocHJvZHVjdCwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17XCIvXCIgKyBwcm9kdWN0fT5cclxuICAgICAgICAgICAgICA8YT57cHJvZHVjdH08L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgZGlzcGxheTogJHtwcm9wcy5jb2x1bW5DYXRlZ29yeSA/IFwiaW5saW5lLWJsb2NrXCIgOiBcImJsb2NrXCJ9O1xyXG4gICAgICAgICAgcGFkZGluZzogJHtwcm9wcy5jb2x1bW5DYXRlZ29yeSA/IFwiOHB4XCIgOiBcIjBweFwifTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGk6aG92ZXIge1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNhdGVnb3J5O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmNvbnN0IGRyb3BCb3ggPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBsaXN0cyA9IFsuLi5wcm9wcy5saXN0XTtcclxuICAvLyBDaGVja2luZyB0byBzZWUgaWYgdGhlIGxpc3QgaGFzIG1vcmV0aGFuIDEgY29sdW1zXHJcbiAgbGV0IGNvbHVtbkNhdGVnb3J5ID0gZmFsc2U7XHJcbiAgaWYgKGxpc3RzLmxlbmd0aCA9PT0gMSkgY29sdW1uQ2F0ZWdvcnkgPSB0cnVlO1xyXG5cclxuICBsZXQgY2xhc3NMaXN0ID0gW1wiZHJvcC1ib3hcIl07XHJcblxyXG4gIGlmIChwcm9wcy5zaG93KSB7XHJcbiAgICBjbGFzc0xpc3QucHVzaChcInNob3dcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNsYXNzTGlzdC5wdXNoKFwiaGlkZGVuXCIpO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTGlzdC5qb2luKFwiIFwiKX0+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYtd3JhcHBlclwiPlxyXG4gICAgICAgIHtsaXN0cy5tYXAoKGxpc3QsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL3Byb2R1Y3RzXCJ9PlxyXG4gICAgICAgICAgICAgIDxhPntsaXN0fTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuZHJvcC1ib3gge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMTE1cHg7XHJcbiAgICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgICB6LWluZGV4OiA1O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgIC8vIGJveC1zaGFkb3c6IDBweCAwcHggNXB4ICM1NzU3NTc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zaG93IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaGlkZGVuIHtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubmF2LXdyYXBwZXIge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIG1pbi13aWR0aDogNTAlO1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5hdi13cmFwcGVyIGxpIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDVweCAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRyb3BCb3g7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBEcm9wQm94IGZyb20gXCIuL0Ryb3BCb3hcIjtcclxuXHJcbmNvbnN0IG5hdmlnYXRpb24gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHRpdGxlLCBsaXN0IH0gPSBwcm9wcy50YXJnZXQ7XHJcblxyXG4gIGNvbnN0IFtkcm9wQm94U3RhdGUsIHNldERyb3BCb3hTdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZURyb3BCb3ggPSAoKSA9PiB7XHJcbiAgICBzZXREcm9wQm94U3RhdGUoIWRyb3BCb3hTdGF0ZSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGxpIG9uTW91c2VFbnRlcj17dG9nZ2xlRHJvcEJveH0gb25Nb3VzZUxlYXZlPXt0b2dnbGVEcm9wQm94fT5cclxuICAgICAgPExpbmsgaHJlZj17XCIvcHJvZHVjdHNcIn0+XHJcbiAgICAgICAgPGE+e3RpdGxlfTwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8RHJvcEJveCBsaXN0PXtsaXN0fSBzaG93PXtkcm9wQm94U3RhdGV9IC8+XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweCAzMHB4IDIwcHggMzBweDtcclxuICAgICAgICAgIC8vIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9pbWFnZXMvZG93bmxvYWQuc3ZnXCIpO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgMTBweCBjZW50ZXI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBsaTpob3ZlciBhIHtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcclxuICAgICAgICB9XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICBjb2xvcjogIzE4MTkyYjtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9saT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmF2aWdhdGlvbjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFNwYWNlciBmcm9tIFwiLi4vU3BhY2VyXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuL05hdmlnYXRpb25cIjtcclxuaW1wb3J0IEJhY2tkcm9wIGZyb20gXCIuLi9CYWNrZHJvcFwiO1xyXG5pbXBvcnQgQWNjb3VudCBmcm9tIFwiLi4vLi4vY29udGFpbmVyL0FjY291bnRcIjtcclxuaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tIFwiLi4vLi4vaG9va3Mvc3RvcmUvc3RvcmVcIjtcclxuXHJcbmNvbnN0IG5hdmlnYXRpb25zID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzaG93QWNjb3VudCwgc2V0U2hvd0FjY291bnRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBzdGF0ZSA9IHVzZVN0b3JlKClbMF07XHJcbiAgY29uc3QgeyBpc0F1dGgsIGRhdGEgfSA9IHN0YXRlLmF1dGg7XHJcblxyXG4gIGNvbnN0IGxvZ2luU3RhdHVzID0gaXNBdXRoID8gKFxyXG4gICAgPHNwYW4+IHtkYXRhLmZ1bGxOYW1lLnNwbGl0KFwiIFwiKVswXX0gPC9zcGFuPlxyXG4gICkgOiAoXHJcbiAgICA8c3Bhbj5TaWduIGluIC8gUmVnaXN0ZXI8L3NwYW4+XHJcbiAgKTtcclxuXHJcbiAgY29uc3QgbmF2cyA9IFtcclxuICAgIC8vTWVuIE5hdmlnYXRpb24gbGlzdFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJNZW5cIixcclxuICAgICAgbGlzdDogW1xyXG4gICAgICAgIFwiU2FuZGFsc1wiLFxyXG4gICAgICAgIFwiU25lYWtlcnNcIixcclxuICAgICAgICBcIkxvYWZlcnNcIixcclxuICAgICAgICBcIkJvYXQgU2hvZXNcIixcclxuICAgICAgICBcIk94Zm9yZHNcIixcclxuICAgICAgICBcIkJvb3RzICYgQ2h1a2thc1wiLFxyXG4gICAgICAgIFwiU2xpcC1PbnNcIixcclxuICAgICAgICBcIlNsaXBwZXJzXCIsXHJcbiAgICAgICAgXCJSdW4gU2hvcFwiLFxyXG4gICAgICAgIFwiU3ByaW5nIFRyZW5kXCIsXHJcbiAgICAgICAgXCJPdXRkb29yXCIsXHJcbiAgICAgICAgXCJXYWxraW5nXCIsXHJcbiAgICAgICAgXCJBdGhsZXRpY1wiLFxyXG4gICAgICAgIFwiRm9vZCBIZWFsdGggJiBXZWxsbmVzc1wiLFxyXG4gICAgICAgIFwiQ2FzdWFsXCIsXHJcbiAgICAgICAgXCJEcmVzcy9FdmVuaW5nXCIsXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAgLy9Xb21lbiBOYXZpZ2F0aW9uIGxpc3RcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiV29tZW5cIixcclxuICAgICAgbGlzdDogW1xyXG4gICAgICAgIFwiU2FuZGFsc1wiLFxyXG4gICAgICAgIFwiU25lYWtlcnNcIixcclxuICAgICAgICBcIkZsYXRzXCIsXHJcbiAgICAgICAgXCJNdWxlc1wiLFxyXG4gICAgICAgIFwiSGVhbHMgJiBQdW1wc1wiLFxyXG4gICAgICAgIFwiQm9vdHMgJiBCb290aWVzXCIsXHJcbiAgICAgICAgXCJDbG9nc1wiLFxyXG4gICAgICAgIFwiU2xpcHBlcnNcIixcclxuICAgICAgICBcIkNvbWZvcnQgU2hvcFwiLFxyXG4gICAgICAgIFwiUnVuIFNob3BcIixcclxuICAgICAgICBcIlNwcmluZyBUcmVuZFwiLFxyXG4gICAgICAgIFwiT3V0ZG9vclwiLFxyXG4gICAgICAgIFwiV2Fsa2luZ1wiLFxyXG4gICAgICAgIFwiQXRobGV0aWNcIixcclxuICAgICAgICBcIkZvb2QgSGVhbHRoICYgV2VsbG5lc3NcIixcclxuICAgICAgICBcIkNhc3VhbFwiLFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIC8vS2lkcyBOYXZpZ2F0aW9uIGxpc3RcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiS2lkc1wiLFxyXG4gICAgICBsaXN0OiBbXHJcbiAgICAgICAgXCJTYW5kYWxzXCIsXHJcbiAgICAgICAgXCJTd2ltd2VhclwiLFxyXG4gICAgICAgIFwiU25lYWtlciAmIEF0aGxldGljIFNob2VzXCIsXHJcbiAgICAgICAgXCJEcmVzc2VzXCIsXHJcbiAgICAgICAgXCJGbGF0c1wiLFxyXG4gICAgICAgIFwiSnVtcHN1aXRzICYgUm9tcGVyc1wiLFxyXG4gICAgICAgIFwiU2hpcnRzICYgVG9wc1wiLFxyXG4gICAgICAgIFwiU2hvcnRzXCIsXHJcbiAgICAgICAgXCJTbGVlcHdlYXJcIixcclxuICAgICAgICBcIlNsaXBwZXJzXCIsXHJcbiAgICAgICAgXCJTbmVha2VyICYgQXRobGV0aWMgU2hvZXNcIixcclxuICAgICAgICBcIlN3aW13ZWFyXCIsXHJcbiAgICAgICAgXCJTYW5kYWxzXCIsXHJcbiAgICAgICAgXCJTaGlydHMgJiBUb3BzXCIsXHJcbiAgICAgICAgXCJCb2F0IFNob2VzXCIsXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG5cclxuICAgIC8vTWVuIE5hdmlnYXRpb24gbGlzdFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJCcmFuZHNcIixcclxuICAgICAgbGlzdDogWy4uLkFycmF5KDI2KV0ubWFwKChfLCBpKSA9PiBTdHJpbmcuZnJvbUNoYXJDb2RlKGkgKyA2NSkpLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICBjb25zdCBzaG93QWNjb3VudEhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRTaG93QWNjb3VudCghc2hvd0FjY291bnQpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi13cmFwcGVyXCI+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7bmF2cy5tYXAoKG5hdiwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxOYXZpZ2F0aW9uIGtleT17aW5kZXh9IHRhcmdldD17bmF2fSAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIHsvKiA8U3BhY2VyIC8+XHJcbiAgICAgICAgPGxpIG9uQ2xpY2s9e3Nob3dBY2NvdW50SGFuZGxlcn0gaWQ9XCJhY2NvdW50QnRuXCI+XHJcbiAgICAgICAgICB7bG9naW5TdGF0dXN9XHJcbiAgICAgICAgPC9saT4gKi99XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDxCYWNrZHJvcCBzaG93PXtzaG93QWNjb3VudH0gY2xpY2tlZD17c2hvd0FjY291bnRIYW5kbGVyfSAvPlxyXG4gICAgICA8QWNjb3VudCBzaG93PXtzaG93QWNjb3VudH0gLz5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5uYXYtd3JhcHBlciB7XHJcbiAgICAgICAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubmF2LXdyYXBwZXIgdWwge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgIC5uYXYtd3JhcHBlciB1bCBsaTpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDMwcHggMzBweDtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgY29sb3I6ICMwMzVkNTk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAubmF2LXdyYXBwZXIgdWwgbGk6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaGlkZGVuIHtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudmlzdWFsbHloaWRkZW4ge1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuYXZpZ2F0aW9ucztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3Qgc2VhcmNoQm94ID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1ib3hcIj5cclxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwic2VhcmNoLWZvcm1cIj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciBzaG9lcyBuYW1lLCBpdGVtIGtleSwgZXRjLlwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU2VhcmNoXCIgLz5cclxuICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5zZWFyY2gtYm94IHtcclxuICAgICAgICAgIGZsZXgtYmFzaXM6IDMwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNlYXJjaC1mb3JtIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNlYXJjaC1mb3JtIGlucHV0IHtcclxuICAgICAgICAgIGhlaWdodDogNDRweDtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNlYXJjaC1mb3JtIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICAgIHBhZGRpbmc6IDBweCAyMHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgICAgICAgY29sb3I6ICM1NzU3NTc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2VhcmNoLWZvcm0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjU0YjM7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICMwNjU0YjM7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2VhcmNoQm94O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBzcGFjZXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2VyXCI+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuc3BhY2VyIHtcclxuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzcGFjZXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuY29uc3QgZW50cnlCdXR0b24gPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Byb3BzLnNpZ259IGNsYXNzTmFtZT1cIkJ1dHRvblwiPlxyXG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLkJ1dHRvbiB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLkJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTI1MjUyO1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgIC5CdXR0b24ge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBlbnRyeUJ1dHRvbjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgaW5wdXQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBpbnB1dENsYXNzZXMgPSBbXCJJbnB1dFwiXTtcclxuICBpZiAocHJvcHMuaW5WYWxpZCkge1xyXG4gICAgaW5wdXRDbGFzc2VzLnB1c2goXCJJbnZhbGlkXCIpO1xyXG4gIH1cclxuXHJcbiAgbGV0IGlucHV0RWxlbWVudCA9IChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxpbnB1dCBjbGFzc05hbWU9e2lucHV0Q2xhc3Nlcy5qb2luKFwiIFwiKX0gLz57XCIgXCJ9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG4gIHN3aXRjaCAocHJvcHMuZWxlVHlwZSkge1xyXG4gICAgY2FzZSBcImlucHV0XCI6IHtcclxuICAgICAgaW5wdXRFbGVtZW50ID0gKFxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdmFsdWU9e3Byb3BzLnZhbHVlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmNoYW5nZX1cclxuICAgICAgICAgIGNsYXNzTmFtZT17aW5wdXRDbGFzc2VzLmpvaW4oXCIgXCIpfVxyXG4gICAgICAgICAgey4uLnByb3BzLmVsZUNvbmZpZ31cclxuICAgICAgICAvPlxyXG4gICAgICApO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBjYXNlIFwidGV4dGFyZWFcIjoge1xyXG4gICAgICBpbnB1dEVsZW1lbnQgPSAoXHJcbiAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICB2YWx1ZT17cHJvcHMudmFsdWV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17cHJvcHMuY2hhbmdlfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtpbnB1dENsYXNzZXMuam9pbihcIiBcIil9XHJcbiAgICAgICAgICB7Li4ucHJvcHMuZWxlQ29uZmlnfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGlucHV0RWxlbWVudCA9IChcclxuICAgICAgICA8aW5wdXQgdmFsdWU9e3Byb3BzLnZhbHVlfSBjbGFzc05hbWU9e2lucHV0Q2xhc3Nlcy5qb2luKFwiIFwiKX0gLz5cclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIHtpbnB1dEVsZW1lbnR9XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgLklucHV0IHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLklucHV0OjphZnRlciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIGNvbnRlbnQ6IFwiTG92ZVwiO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzUyNTI1MjtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgIHotaW5kZXg6IDEwMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5JblZhbGlkIHtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHNhbG1vbjtcclxuICAgICAgICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHNhbG1vbjsgKi9cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAuSW5wdXQge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbnB1dDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMb2dvIGZyb20gXCIuLi9jb21wb25lbnRzL0xvZ29cIjtcclxuaW1wb3J0IFNpZ25JbiBmcm9tIFwiLi9TaWduSW5cIjtcclxuaW1wb3J0IFNpZ25VcCBmcm9tIFwiLi9TaWduVXBcIjtcclxuXHJcbmNvbnN0IGFjY291bnQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbc3RhdHVzU3RhdGUsIHNldFN0YXR1c1N0YXRlXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBjb25zdCBPblRvZ2dsZUFjY291bnRIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgc2V0U3RhdHVzU3RhdGUoIXN0YXR1c1N0YXRlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzaWduaW4gPSAoXHJcbiAgICA8U2lnbkluIGd1ZXN0PXtmYWxzZX0gdG9nZ2xlQWNjb3VudD17T25Ub2dnbGVBY2NvdW50SGFuZGxlcn0gLz5cclxuICApO1xyXG5cclxuICBjb25zdCBzaWdudXAgPSA8U2lnblVwIGd1ZXN0PXt0cnVlfSB0b2dnbGVBY2NvdW50PXtPblRvZ2dsZUFjY291bnRIYW5kbGVyfSAvPjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQWNjb3VudFwiPlxyXG4gICAgICA8TG9nbyAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1cIj57c3RhdHVzU3RhdGUgPyBzaWduaW4gOiBzaWdudXB9PC9kaXY+XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLkFjY291bnQge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDEwcHgpO1xyXG4gICAgICAgICAgbGVmdDogY2FsYyg1MCUgLSAyMjBweCk7XHJcbiAgICAgICAgICB3aWR0aDogNDQwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogJHtwcm9wcy5zaG93ID8gXCJmbGV4XCIgOiBcIm5vbmVcIn07XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDMwcHggMzBweCAwcHggMzBweDtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCA1cyBsaW5lYXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjYwcHgpIHtcclxuICAgICAgICAgIC5NYWluIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4IDUlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgICAgICAgIC5sb2dvIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgIC5NYWluIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAzJTtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgaGVpZ2h0OiA2MDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5sb2dvIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLk1haW4gPiBkaXYge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5BY2NvdW50IHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAwcHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgLnBhZ2UtdGl0bGUge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhY2NvdW50O1xyXG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHVzZUF1dGhBY3Rpb25zIGZyb20gXCIuLi8uLi9ob29rcy9zdG9yZS9hY3Rpb25zL2F1dGhcIjtcclxuXHJcbmNvbnN0IHBlcnNpc3RzID0gKCB7IGNoaWxkcmVuIH0gKSA9PiB7XHJcbiAgICBjb25zdCB7IGF1dGhMb2dpbkF1dG8gfSA9IHVzZUF1dGhBY3Rpb25zKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBhdXRoTG9naW5BdXRvKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIDxkaXY+e2NoaWxkcmVufTwvZGl2PjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGVyc2lzdHM7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZHVjZXIgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFN3aXRjaEVudHJ5IGZyb20gXCIuL1N3aXRjaEVudHJ5XCI7XHJcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vY29tcG9uZW50cy9VSS9JbnB1dFwiO1xyXG5pbXBvcnQgRW50cnlCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvVUkvRW50cnlCdXR0b25cIjtcclxuaW1wb3J0ICogYXMgYWN0aW9uVHlwZXMgZnJvbSBcIi4vYWN0aW9uVHlwZXNcIjtcclxuaW1wb3J0IHVzZUF1dGhBY3Rpb25zIGZyb20gXCIuLi9ob29rcy9zdG9yZS9hY3Rpb25zL2F1dGhcIjtcclxuXHJcbmNvbnN0IGNvbnRyb2xzID0ge1xyXG4gIGVtYWlsOiB7XHJcbiAgICBlbGVUeXBlOiBcImlucHV0XCIsXHJcbiAgICBlbGVDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJlbWFpbFwiLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCJFbWFpbFwiLFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uOiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICBtYXRjaDogLyg/OlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSsoPzpcXC5bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKSp8XCIoPzpbXFx4MDEtXFx4MDhcXHgwYlxceDBjXFx4MGUtXFx4MWZcXHgyMVxceDIzLVxceDViXFx4NWQtXFx4N2ZdfFxcXFxbXFx4MDEtXFx4MDlcXHgwYlxceDBjXFx4MGUtXFx4N2ZdKSpcIilAKD86KD86W2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP1xcLikrW2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP3xcXFsoPzooPzooMig1WzAtNV18WzAtNF1bMC05XSl8MVswLTldWzAtOV18WzEtOV0/WzAtOV0pKVxcLil7M30oPzooMig1WzAtNV18WzAtNF1bMC05XSl8MVswLTldWzAtOV18WzEtOV0/WzAtOV0pfFthLXowLTktXSpbYS16MC05XTooPzpbXFx4MDEtXFx4MDhcXHgwYlxceDBjXFx4MGUtXFx4MWZcXHgyMS1cXHg1YVxceDUzLVxceDdmXXxcXFxcW1xceDAxLVxceDA5XFx4MGJcXHgwY1xceDBlLVxceDdmXSkrKVxcXSkvLFxyXG4gICAgfSxcclxuICAgIHZhbGlkOiB0cnVlLFxyXG4gICAgdmFsdWU6IFwiXCIsXHJcbiAgfSxcclxuICBwYXNzd29yZDoge1xyXG4gICAgZWxlVHlwZTogXCJpbnB1dFwiLFxyXG4gICAgZWxlQ29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwicGFzc3dvcmRcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiUGFzc3dvcmRcIixcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgbGVuZ3RoOiB7IG1pbjogNSB9LFxyXG4gICAgfSxcclxuICAgIHZhbGlkOiB0cnVlLFxyXG4gICAgdmFsdWU6IFwiXCIsXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IHNpZ25JbkZvcm1SZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU1RBUlRfVFlQSU5HOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIFthY3Rpb24uZmllbGRdOiB7IC4uLnN0YXRlW2FjdGlvbi5maWVsZF0sIHZhbHVlOiBhY3Rpb24udmFsdWUgfSxcclxuICAgICAgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGNvbW1hbmQgZm91bmRcIik7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgU2lnbkluID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBhdXRoUmVzcG9uc2UgfSA9IHVzZUF1dGhBY3Rpb25zKCk7XHJcbiAgY29uc3QgW3NpZ25JbkZvcm1TdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihzaWduSW5Gb3JtUmVkdWNlciwgY29udHJvbHMpO1xyXG4gIC8vIHNpZ25pbiBjbGljayBoYW5kbGVyXHJcbiAgY29uc3Qgb25TaWduSW5IYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3Qgc2lnbkluRm9ybURhdGEgPSB7XHJcbiAgICAgIGVtYWlsOiBzaWduSW5Gb3JtU3RhdGUuZW1haWwudmFsdWUsXHJcbiAgICAgIHBhc3N3b3JkOiBzaWduSW5Gb3JtU3RhdGUucGFzc3dvcmQudmFsdWUsXHJcbiAgICB9O1xyXG5cclxuICAgIGF1dGhSZXNwb25zZShzaWduSW5Gb3JtRGF0YSwgdHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gdHdvIHdheSBiaW5kaW5nLi4uXHJcbiAgY29uc3Qgb25JbnB1dENoYW5nZUhhbmRsZXIgPSAoZXZlbnQsIGZpZWxkKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IGFjdGlvblR5cGVzLlNUQVJUX1RZUElORyxcclxuICAgICAgZmllbGQsXHJcbiAgICAgIHZhbHVlOiBldmVudC50YXJnZXQudmFsdWUsXHJcbiAgICB9KTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9XCJwYWdlLXRpdGxlXCI+U2lnbiBpbjwvaDI+XHJcbiAgICAgIDxTd2l0Y2hFbnRyeVxyXG4gICAgICAgIGd1ZXN0PXtwcm9wcy5ndWVzdH1cclxuICAgICAgICB0b2dnbGVBY2NvdW50PXtwcm9wcy50b2dnbGVBY2NvdW50fVxyXG4gICAgICAgIGVudHJ5PVwiIENyZWF0ZSBhY2NvdW50XCJcclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxmb3JtPlxyXG4gICAgICAgIHtPYmplY3Qua2V5cyhzaWduSW5Gb3JtU3RhdGUpLm1hcCgoZmllbGQpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIGNoYW5nZT17KGV2ZW50KSA9PiBvbklucHV0Q2hhbmdlSGFuZGxlcihldmVudCwgZmllbGQpfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzaWduSW5Gb3JtU3RhdGVbZmllbGRdLnZhbHVlfVxyXG4gICAgICAgICAgICAgIGluVmFsaWQ9eyFzaWduSW5Gb3JtU3RhdGVbZmllbGRdLnZhbGlkfVxyXG4gICAgICAgICAgICAgIGtleT17ZmllbGR9XHJcbiAgICAgICAgICAgICAgZWxlQ29uZmlnPXtzaWduSW5Gb3JtU3RhdGVbZmllbGRdLmVsZUNvbmZpZ31cclxuICAgICAgICAgICAgICBlbGVUeXBlPXtzaWduSW5Gb3JtU3RhdGVbZmllbGRdLmVsZVR5cGV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICAgIDxFbnRyeUJ1dHRvbiBzaWduPXsoZXZlbnQpID0+IG9uU2lnbkluSGFuZGxlcihldmVudCl9PlxyXG4gICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgU2lnbiBJbntcIiBcIn1cclxuICAgICAgICA8L0VudHJ5QnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWduSW47XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTd2l0Y2hFbnRyeSBmcm9tIFwiLi9Td2l0Y2hFbnRyeVwiO1xyXG5pbXBvcnQgRW50cnlCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvVUkvRW50cnlCdXR0b25cIjtcclxuaW1wb3J0IElucHV0IGZyb20gXCIuLi9jb21wb25lbnRzL1VJL0lucHV0XCI7XHJcbmltcG9ydCAqIGFzIGFjdGlvblR5cGVzIGZyb20gXCIuL2FjdGlvblR5cGVzXCI7XHJcbmltcG9ydCB1c2VBdXRoQWN0aW9ucyBmcm9tIFwiLi4vaG9va3Mvc3RvcmUvYWN0aW9ucy9hdXRoXCI7XHJcblxyXG5jb25zdCBjb250cm9scyA9IHtcclxuICBmdWxsbmFtZToge1xyXG4gICAgZWxlVHlwZTogXCJpbnB1dFwiLFxyXG4gICAgZWxlQ29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCJGdWxsIE5hbWVcIixcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgbGVuZ3RoOiB7IG1pbjogNSB9LFxyXG4gICAgICBtYXRjaDogLyg/Ol5bIGEtekEtWl17NSx9JCkvLFxyXG4gICAgfSxcclxuICAgIHZhbGlkOiB0cnVlLFxyXG4gICAgdmFsdWU6IFwiXCIsXHJcbiAgfSxcclxuICBlbWFpbDoge1xyXG4gICAgZWxlVHlwZTogXCJpbnB1dFwiLFxyXG4gICAgZWxlQ29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwiZW1haWxcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiRW1haWxcIixcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgbWF0Y2g6IC8oPzpbYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKD86XFwuW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKykqfFwiKD86W1xceDAxLVxceDA4XFx4MGJcXHgwY1xceDBlLVxceDFmXFx4MjFcXHgyMy1cXHg1YlxceDVkLVxceDdmXXxcXFxcW1xceDAxLVxceDA5XFx4MGJcXHgwY1xceDBlLVxceDdmXSkqXCIpQCg/Oig/OlthLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cXC4pK1thLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT98XFxbKD86KD86KDIoNVswLTVdfFswLTRdWzAtOV0pfDFbMC05XVswLTldfFsxLTldP1swLTldKSlcXC4pezN9KD86KDIoNVswLTVdfFswLTRdWzAtOV0pfDFbMC05XVswLTldfFsxLTldP1swLTldKXxbYS16MC05LV0qW2EtejAtOV06KD86W1xceDAxLVxceDA4XFx4MGJcXHgwY1xceDBlLVxceDFmXFx4MjEtXFx4NWFcXHg1My1cXHg3Zl18XFxcXFtcXHgwMS1cXHgwOVxceDBiXFx4MGNcXHgwZS1cXHg3Zl0pKylcXF0pLyxcclxuICAgIH0sXHJcbiAgICB2YWxpZDogdHJ1ZSxcclxuICAgIHZhbHVlOiBcIlwiLFxyXG4gIH0sXHJcbiAgcGFzc3dvcmQ6IHtcclxuICAgIGVsZVR5cGU6IFwiaW5wdXRcIixcclxuICAgIGVsZUNvbmZpZzoge1xyXG4gICAgICB0eXBlOiBcInBhc3N3b3JkXCIsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIlBhc3N3b3JkXCIsXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgIGxlbmd0aDogeyBtaW46IDUgfSxcclxuICAgIH0sXHJcbiAgICB2YWxpZDogdHJ1ZSxcclxuICAgIHZhbHVlOiBcIlwiLFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBzaWduVXBGb3JtUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TVEFSVF9UWVBJTkc6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgW2FjdGlvbi5maWVsZF06IHsgLi4uc3RhdGVbYWN0aW9uLmZpZWxkXSwgdmFsdWU6IGFjdGlvbi52YWx1ZSB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5DSEVDS19WQUxJRElUWTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBbYWN0aW9uLmZpZWxkXTogeyAuLi5zdGF0ZVthY3Rpb24uZmllbGRdLCB2YWxpZDogYWN0aW9uLnZhbGlkIH0sXHJcbiAgICAgIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBjb21tYW5kIGZvdW5kXCIpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IFNpZ25VcCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtzaWduVXBGb3JtU3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoc2lnblVwRm9ybVJlZHVjZXIsIGNvbnRyb2xzKTtcclxuXHJcbiAgY29uc3QgeyBhdXRoUmVzcG9uc2UgfSA9IHVzZUF1dGhBY3Rpb25zKCk7XHJcblxyXG4gIC8vIGNoZWNrIHZhbGlkaXR5XHJcbiAgY29uc3QgY2hlY3RWYWxpZGl0eSA9IChydWxlcywgdmFsdWUpID0+IHtcclxuICAgIGxldCBpc1ZhbGlkID0gdHJ1ZTtcclxuICAgIGlmIChydWxlcy5yZXF1aXJlZCkge1xyXG4gICAgICBpc1ZhbGlkID0gdmFsdWUgIT09IFwiXCIgJiYgaXNWYWxpZDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocnVsZXMubGVuZ3RoKSB7XHJcbiAgICAgIGlmIChydWxlcy5sZW5ndGgubWluKSB7XHJcbiAgICAgICAgaXNWYWxpZCA9IHZhbHVlLmxlbmd0aCA+PSBydWxlcy5sZW5ndGgubWluICYmIGlzVmFsaWQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAocnVsZXMubWF0Y2gpIHtcclxuICAgICAgaXNWYWxpZCA9IHJ1bGVzLm1hdGNoLnRlc3QodmFsdWUpICYmIGlzVmFsaWQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXNWYWxpZDtcclxuICB9O1xyXG5cclxuICAvLyBzaWdudXAgY2xpY2sgaGFuZGxlclxyXG4gIGNvbnN0IG9uU2lnblVwSGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHNpZ25VcEZvcm1EYXRhID0ge1xyXG4gICAgICBmdWxsTmFtZTogc2lnblVwRm9ybVN0YXRlLmZ1bGxuYW1lLnZhbHVlLFxyXG4gICAgICBlbWFpbDogc2lnblVwRm9ybVN0YXRlLmVtYWlsLnZhbHVlLFxyXG4gICAgICBwYXNzd29yZDogc2lnblVwRm9ybVN0YXRlLnBhc3N3b3JkLnZhbHVlLFxyXG4gICAgfTtcclxuXHJcbiAgICBhdXRoUmVzcG9uc2Uoc2lnblVwRm9ybURhdGEsIGZhbHNlKVxyXG4gIH07XHJcblxyXG4gIC8vIHR3byB3YXkgYmluZGluZy4uLlxyXG4gIGNvbnN0IG9uSW5wdXRDaGFuZ2VIYW5kbGVyID0gKGV2ZW50LCBmaWVsZCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBhY3Rpb25UeXBlcy5TVEFSVF9UWVBJTkcsXHJcbiAgICAgIGZpZWxkLFxyXG4gICAgICB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlLFxyXG4gICAgfSk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IGFjdGlvblR5cGVzLkNIRUNLX1ZBTElESVRZLFxyXG4gICAgICBmaWVsZCxcclxuICAgICAgdmFsaWQ6IGNoZWN0VmFsaWRpdHkoXHJcbiAgICAgICAgc2lnblVwRm9ybVN0YXRlW2ZpZWxkXS52YWxpZGF0aW9uLFxyXG4gICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZVxyXG4gICAgICApLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8aDIgY2xhc3NOYW1lPVwicGFnZS10aXRsZVwiPlNpZ24gdXA8L2gyPlxyXG4gICAgICA8U3dpdGNoRW50cnlcclxuICAgICAgICBndWVzdD17cHJvcHMuZ3Vlc3R9XHJcbiAgICAgICAgdG9nZ2xlQWNjb3VudD17cHJvcHMudG9nZ2xlQWNjb3VudH1cclxuICAgICAgICBlbnRyeT1cIiBTaWduIEluXCJcclxuICAgICAgLz5cclxuICAgICAgPGZvcm0+XHJcbiAgICAgICAge09iamVjdC5rZXlzKHNpZ25VcEZvcm1TdGF0ZSkubWFwKChmaWVsZCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgY2hhbmdlPXsoZXZlbnQpID0+IG9uSW5wdXRDaGFuZ2VIYW5kbGVyKGV2ZW50LCBmaWVsZCl9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3NpZ25VcEZvcm1TdGF0ZVtmaWVsZF0udmFsdWV9XHJcbiAgICAgICAgICAgICAgaW5WYWxpZD17IXNpZ25VcEZvcm1TdGF0ZVtmaWVsZF0udmFsaWR9XHJcbiAgICAgICAgICAgICAga2V5PXtmaWVsZH1cclxuICAgICAgICAgICAgICBlbGVDb25maWc9e3NpZ25VcEZvcm1TdGF0ZVtmaWVsZF0uZWxlQ29uZmlnfVxyXG4gICAgICAgICAgICAgIGVsZVR5cGU9e3NpZ25VcEZvcm1TdGF0ZVtmaWVsZF0uZWxlVHlwZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgICAgPEVudHJ5QnV0dG9uIHNpZ249eyhldmVudCkgPT4gb25TaWduVXBIYW5kbGVyKGV2ZW50KX0+XHJcbiAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICBTaWduIFVwe1wiIFwifVxyXG4gICAgICAgIDwvRW50cnlCdXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25VcDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3Qgc3dpdGNoRW50cnkgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8aDQgY2xhc3NOYW1lPVwibGluay13cmFwcGVyXCI+XHJcbiAgICAgICAgeyFwcm9wcy5ndWVzdCA/IFwiTmV3IFVzZXJcIiA6IFwiQWxyZWFkeSBoYXZlIGFuIGFjY291bnRcIn0/XHJcbiAgICAgICAgPHNwYW4gb25DbGljaz17cHJvcHMudG9nZ2xlQWNjb3VudH0gY2xhc3NOYW1lPVwibGlua1wiPlxyXG4gICAgICAgICAge3Byb3BzLmVudHJ5fVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9oND5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAubGluay13cmFwcGVyIHtcclxuICAgICAgICAgIG1hcmdpbjogNXB4IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxpbmsge1xyXG4gICAgICAgICAgY29sb3I6ICMwNzY5ZTA7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzd2l0Y2hFbnRyeTtcclxuIiwiXHJcbmV4cG9ydCBjb25zdCBTVEFSVF9UWVBJTkcgPSBcIlNUQVJUX1RZUElOR1wiO1xyXG5leHBvcnQgY29uc3QgQ0hFQ0tfVkFMSURJVFkgPSBcIkNIRUNLX1ZBTElESVRZXCI7XHJcbmV4cG9ydCBjb25zdCBDTEVBUl9GSUVMRFMgPSBcIkNMRUFSX0ZJRUxEU1wiOyIsIlxyXG4vLyBBdXRoIHJlbGF0ZWQgYWN0aW9uc1xyXG5leHBvcnQgY29uc3QgQVVUSF9TVEFSVCA9IFwiQVVUSF9TVEFSVFwiO1xyXG5leHBvcnQgY29uc3QgQVVUSF9SRVNQT05TRSA9IFwiQVVUSF9SRVNQT05TRVwiO1xyXG5leHBvcnQgY29uc3QgQVVUSF9FUlJPUiA9IFwiQVVUSF9FUlJPUlwiO1xyXG5leHBvcnQgY29uc3QgQVVUSF9MT0dPVVQgPSBcIkFVVEhfTE9HT1VUXCI7XHJcbiIsIlxyXG5pbXBvcnQgKiBhcyBhY3Rpb25UeXBlcyBmcm9tIFwiLi9hY3Rpb25UeXBlc1wiO1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9odHRwL3JlcXVlc3RcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tIFwiLi4vc3RvcmVcIjtcclxuXHJcbmNvbnN0IGV4cGlyYXRpb25UaW1lSW5TZWNzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZXhwaXJhdGlvbkRhdGUgPSBuZXcgRGF0ZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImV4cGlyYXRpb25EYXRlXCIpKVxyXG4gICAgcmV0dXJuIChleHBpcmF0aW9uRGF0ZS5nZXRUaW1lKCkgLSBuZXcgRGF0ZSgpLmdldFRpbWUoKSkgLyAxMDAwOzsgIFxyXG59XHJcblxyXG5jb25zdCB1c2VBdXRoQWN0aW9ucyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlU3RvcmUoKVsxXTtcclxuXHJcbiAgICAvLyBhdXRoIHN0YXJ0IGFjdGl2YXRlIHNwaW5uZXJcclxuICAgIGNvbnN0IGF1dGhTdGFydCA9ICgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChhY3Rpb25UeXBlcy5BVVRIX1NUQVJUKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBhdXRoIGxvZ291dCBjbGVhciBhdXRoZW50aWNhdGlvbiBkYXRhc1xyXG4gICAgY29uc3QgYXV0aExvZ291dCA9ICgpID0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImxvY2FsSWRcIilcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInRva2VuSWRcIikgICAgICAgIFxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiZXhwaXJhdGlvbkRhdGVcIik7IFxyXG4gICAgICAgIGRpc3BhdGNoKGFjdGlvblR5cGVzLkFVVEhfTE9HT1VUKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBhdXRoIGVycm9yIC0gdHJpZ2dlcnMgd2hlbiB0aGVyZSBpcyBlcnJvciB3aXRoIGxvZ2luXHJcbiAgICBjb25zdCBhdXRoRXJyb3IgPSAoZXJyb3JzKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goYWN0aW9uVHlwZXMuQVVUSF9FUlJPUiwgZXJyb3JzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBhdXRoIHJlc3BvbnNlIGhlbHBlclxyXG4gICAgY29uc3QgYXV0aFJlc3BvbnNlU3luYyA9IChkYXRhKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goYWN0aW9uVHlwZXMuQVVUSF9SRVNQT05TRSwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaGVscGVyIGZ1bmN0aW9uIGZyIGF1dGggcmVzcG9uc2VcclxuICAgIGNvbnN0IGF1dGhSZXMgPSAoIHVzZXIgKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZXhwaXJhdGlvbkRhdGUgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSArIHVzZXIuZXhwaXJlc0luICogMTAwMCk7XHJcbiAgICAgICAgLy8gc3RvcmUgdXNlcidzIElkIGFuZCB0b2tlbiBmb3IgYXV0aG9tYXRpYyBsb2dpbiB1cG9uIHJlZmVyZXNoXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhbElkXCIsIHVzZXIubG9jYWxJZClcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRva2VuSWRcIiwgdXNlci50b2tlbklkKSAgICAgICAgXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJleHBpcmF0aW9uRGF0ZVwiLCBleHBpcmF0aW9uRGF0ZSk7IFxyXG4gICAgICAgIGF1dGhSZXNwb25zZVN5bmModXNlcik7ICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8vIGF1dGggbG9nb3V0IGFmdGVyIGV4cGlyYXRpb24gdGltZVxyXG4gICAgY29uc3QgYXV0aExvZ291dEFmdGVyRXhwaXJhdGlvblRpbWUgPSAoZXhwaXJhdGlvblRpbWUpID0+IHtcclxuICAgICAgICAvLyBjb252ZXJ0IHRvIG1pbGxpc2Vjb25kc1xyXG4gICAgICAgIGNvbnN0IGV4cGlyYXRpb25UaW1lTWlsaSA9IGV4cGlyYXRpb25UaW1lICogMTAwMFxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChhdXRoTG9nb3V0KCkpXHJcbiAgICAgICAgfSwgZXhwaXJhdGlvblRpbWVNaWxpKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhdXRoTG9naW5BdXRvID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGF1dGhTdGFydCgpO1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlbklkXCIpO1xyXG4gICAgICAgIGlmKCF0b2tlbikge1xyXG4gICAgICAgICAgICBhdXRoTG9nb3V0KCk7XHJcbiAgICAgICAgICAgIFJvdXRlci5yZXBsYWNlKFwiL1wiKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4cGlyYXRpb25EYXRlID0gbmV3IERhdGUobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJleHBpcmF0aW9uRGF0ZVwiKSk7XHJcbiAgICAgICAgICAgIGlmKGV4cGlyYXRpb25EYXRlIDw9IG5ldyBEYXRlKCkpIHtcclxuICAgICAgICAgICAgICAgIGF1dGhMb2dvdXQoKTtcclxuICAgICAgICAgICAgICAgIFJvdXRlci5yZXBsYWNlKFwiL1wiKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYXV0aExvZ291dEFmdGVyRXhwaXJhdGlvblRpbWUoZXhwaXJhdGlvblRpbWVJblNlY3MoKSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZ3JhcGhxbFF1ZXJ5ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5IGdldFVzZXIoJGxvY2FsSWQ6IElEISl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRVc2VyKGxvY2FsSWQ6JGxvY2FsSWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbE5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBgLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczogeyBsb2NhbElkOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsSWRcIikgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgcmVxdWVzdChncmFwaHFsUXVlcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlcy5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0aEVycm9yKHJlcy5lcnJvcnMubWFwKGUgPT4gZS5tZXNzYWdlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlcy5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhSZXNwb25zZVN5bmMoIHJlcy5kYXRhLmdldFVzZXIgKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBhdXRoRXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBhdXRoIHJlc3BvbnNlIC0gZ2V0IHRoZSB1c2VyJ3MgZGF0YVxyXG4gICAgY29uc3QgYXV0aFJlc3BvbnNlID0gYXN5bmMgKGF1dGhEYXRhLCBpc0xvZ2luKSA9PiB7XHJcbiAgICAgICAgLy8gc3RhcnQgbG9hZGluZ1xyXG4gICAgICAgIGF1dGhTdGFydCgpO1xyXG4gICAgICAgIGxldCBncmFwaHFsUXVlcnkgPSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5OiBgXHJcbiAgICAgICAgICAgICAgICBtdXRhdGlvbiBMb2dpblVzZXIoJGVtYWlsOiBTdHJpbmchLCAkcGFzc3dvcmQ6IFN0cmluZyEpe1xyXG4gICAgICAgICAgICAgICAgICAgIGxvZ2luVXNlcihlbWFpbDokZW1haWwsIHBhc3N3b3JkOiRwYXNzd29yZClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsSWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW5JZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBpcmVzSW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbE5hbWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBgLFxyXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHsgZW1haWw6IGF1dGhEYXRhLmVtYWlsLCBwYXNzd29yZDogYXV0aERhdGEucGFzc3dvcmQgfVxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgaWYoIWlzTG9naW4pIHtcclxuICAgICAgICAgICAgZ3JhcGhxbFF1ZXJ5ID0ge1xyXG4gICAgICAgICAgICAgICAgcXVlcnk6IGBcclxuICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbiBDcmVhdGVVc2VyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkZW1haWw6IFN0cmluZyEsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkZnVsbE5hbWU6IFN0cmluZyEsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkcGFzc3dvcmQ6IFN0cmluZyEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlVXNlcih1c2VySW5wdXQ6IHtlbWFpbDokZW1haWwsIGZ1bGxOYW1lOiRmdWxsTmFtZSwgcGFzc3dvcmQ6JHBhc3N3b3JkIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsSWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbklkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBpcmVzSW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgLFxyXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7IFxyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiBhdXRoRGF0YS5lbWFpbCwgXHJcbiAgICAgICAgICAgICAgICAgICAgZnVsbE5hbWU6IGF1dGhEYXRhLmZ1bGxOYW1lLCBcclxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogYXV0aERhdGEucGFzc3dvcmRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSAgICBcclxuICAgICAgICB9ICBcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCByZXF1ZXN0KGdyYXBocWxRdWVyeSk7XHJcbiAgICAgICAgICAgIGlmKHJlcy5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgIGF1dGhFcnJvcihyZXMuZXJyb3JzLm1hcChlID0+IGUubWVzc2FnZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHJlcy5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBpZihpc0xvZ2luKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aFJlcyggcmVzLmRhdGEubG9naW5Vc2VyICk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhSZXMoIHJlcy5kYXRhLmNyZWF0ZVVzZXIgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFJvdXRlci5yZXBsYWNlKFwiL1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2goZXJyKSB7XHJcbiAgICAgICAgICAgIGF1dGhFcnJvcihlcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGF1dGhTdGFydCxcclxuICAgICAgICBhdXRoTG9nb3V0LFxyXG4gICAgICAgIGF1dGhSZXNwb25zZSxcclxuICAgICAgICBhdXRoTG9naW5BdXRvXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgdXNlQXV0aEFjdGlvbnM7IiwiXHJcbmltcG9ydCB7IGluaXRTdG9yZSB9IGZyb20gXCIuLi9zdG9yZVwiO1xyXG5pbXBvcnQgKiBhcyBhY3Rpb25UeXBlcyBmcm9tIFwiLi4vYWN0aW9ucy9hY3Rpb25UeXBlc1wiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgYXV0aDoge1xyXG4gICAgICAgIGlzQXV0aDogZmFsc2UsXHJcbiAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgZXJyb3JzOiBudWxsLFxyXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGNvbmZpZ3VyZUF1dGggPSAoKSA9PiB7XHJcbiAgICBjb25zdCB1c2VyQWN0aW9ucyA9IHtcclxuICAgICAgICBbYWN0aW9uVHlwZXMuQVVUSF9TVEFSVF06IChzdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgYXV0aDogey4uLnN0YXRlLmF1dGgsIGxvYWRpbmc6IHRydWUgfX07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBbYWN0aW9uVHlwZXMuQVVUSF9SRVNQT05TRV06IChzdGF0ZSwgZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFVVEhfUkVTUE9OU0VcIiwgZGF0YSk7XHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBhdXRoOiB7IC4uLnN0YXRlLmF1dGgsIGRhdGE6IHsgLi4uc3RhdGUuYXV0aC5kYXRhLCAuLi5kYXRhIH0sIGlzQXV0aDogdHJ1ZSwgbG9hZGluZzogZmFsc2UgfX1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFthY3Rpb25UeXBlcy5BVVRIX0VSUk9SXTogKHN0YXRlLCBlcnJvcnMpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3JzKVxyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgYXV0aDogeyAuLi5zdGF0ZS5hdXRoLCBlcnJvcnM6IGVycm9ycywgaXNBdXRoOiBmYWxzZSwgbG9hZGluZzogZmFsc2V9fVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW2FjdGlvblR5cGVzLkFVVEhfTE9HT1VUXTogKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBhdXRoOiB7IC4uLnN0YXRlLmF1dGgsIGRhdGE6e3Byb2ZpbGU6IHtpbWFnZVVybDogXCJcIiwgZGlzcGxheU5hbWU6IFwiXCJ9fSwgZXJyb3JzOiBudWxsLCBpc0F1dGg6IGZhbHNlLCBsb2FkaW5nOiBmYWxzZX0gfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbml0U3RvcmUoaW5pdGlhbFN0YXRlLCB1c2VyQWN0aW9ucyk7ICAgIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25maWd1cmVBdXRoOyIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmxldCBnbG9iYWxTdGF0ZSA9IHt9O1xyXG5sZXQgbGlzdGVuZXJzID0gW107XHJcbmxldCBhY3Rpb25zID0ge307XHJcblxyXG5leHBvcnQgY29uc3QgdXNlU3RvcmUgPSAoIHNob3VsZExpc3RlbiA9IHRydWUgKSA9PiB7XHJcbiAgICBjb25zdCBzZXRTdGF0ZSA9IHVzZVN0YXRlKGdsb2JhbFN0YXRlKVsxXTtcclxuICAgIFxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSAoYWN0aW9uSWRlbnRpZmllciwgcGF5bG9hZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld1N0YXRlID0gYWN0aW9uc1thY3Rpb25JZGVudGlmaWVyXShnbG9iYWxTdGF0ZSwgcGF5bG9hZCk7XHJcbiAgICAgICAgZ2xvYmFsU3RhdGUgPSB7IC4uLmdsb2JhbFN0YXRlLCAuLi5uZXdTdGF0ZSB9O1xyXG5cclxuICAgICAgICBmb3IoY29uc3QgbGlzdGVuZXIgb2YgbGlzdGVuZXJzKSB7XHJcbiAgICAgICAgICAgIGxpc3RlbmVyKGdsb2JhbFN0YXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKHNob3VsZExpc3Rlbikge1xyXG4gICAgICAgICAgICBsaXN0ZW5lcnMucHVzaChzZXRTdGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHNob3VsZExpc3Rlbikge1xyXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLmZpbHRlcihsaSA9PiBsaSAhPT0gc2V0U3RhdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3NldFN0YXRlLCBzaG91bGRMaXN0ZW5dKTtcclxuXHJcbiAgICByZXR1cm4gW2dsb2JhbFN0YXRlLCBkaXNwYXRjaF07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpbml0U3RvcmUgPSAoaW5pdGlhbFN0YXRlLCB1c2VyQWN0aW9ucykgPT4ge1xyXG4gICAgaWYoaW5pdGlhbFN0YXRlKSB7XHJcbiAgICAgICAgZ2xvYmFsU3RhdGUgPSB7IC4uLmdsb2JhbFN0YXRlLCAuLi5pbml0aWFsU3RhdGUgfTtcclxuICAgIH1cclxuICAgIGFjdGlvbnMgPSB7IC4uLmFjdGlvbnMsIC4uLnVzZXJBY3Rpb25zIH07XHJcbn0iLCJpbXBvcnQgZmV0Y2ggZnJvbSBcIm5vZGUtZmV0Y2hcIjtcclxuXHJcbmNvbnN0IEJBU0VfVVJMPVwiaHR0cDovL2xvY2FsaG9zdDoyMDIwXCI7XHJcbmV4cG9ydCBjb25zdCBHUkFQSFFMVVJMID0gYCR7QkFTRV9VUkx9L2dyYXBocWxgO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlcXVlc3QgPSBhc3luYyAoZ3JhcGhxbFF1ZXJ5KSA9PiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKEdSQVBIUUxVUkwsIFxyXG4gICAge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoIGdyYXBocWxRdWVyeSApXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaGVyID0gYXN5bmMgKGtleSwgcXVlcnkpID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGtleSwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocXVlcnkpLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcmVzLmpzb24oKTtcclxufSIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3BhZ2VzL19hcHAnKVxuIiwiZGVjbGFyZSBjb25zdCBfX05FWFRfREFUQV9fOiBhbnlcblxuaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHBhcnNlLCByZXNvbHZlLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQcmVmZXRjaE9wdGlvbnMgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7XG4gIGV4ZWNPbmNlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCBSb3V0ZXIgZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyBhZGRCYXNlUGF0aCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuXG5mdW5jdGlvbiBpc0xvY2FsKGhyZWY6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBjb25zdCB1cmwgPSBwYXJzZShocmVmLCBmYWxzZSwgdHJ1ZSlcbiAgY29uc3Qgb3JpZ2luID0gcGFyc2UoZ2V0TG9jYXRpb25PcmlnaW4oKSwgZmFsc2UsIHRydWUpXG5cbiAgcmV0dXJuIChcbiAgICAhdXJsLmhvc3QgfHwgKHVybC5wcm90b2NvbCA9PT0gb3JpZ2luLnByb3RvY29sICYmIHVybC5ob3N0ID09PSBvcmlnaW4uaG9zdClcbiAgKVxufVxuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBGb3JtYXRSZXN1bHQgPSB7IGhyZWY6IHN0cmluZzsgYXM/OiBzdHJpbmcgfVxuXG5mdW5jdGlvbiBtZW1vaXplZEZvcm1hdFVybChmb3JtYXRGdW5jOiAoaHJlZjogVXJsLCBhcz86IFVybCkgPT4gRm9ybWF0UmVzdWx0KSB7XG4gIGxldCBsYXN0SHJlZjogbnVsbCB8IFVybCA9IG51bGxcbiAgbGV0IGxhc3RBczogdW5kZWZpbmVkIHwgbnVsbCB8IFVybCA9IG51bGxcbiAgbGV0IGxhc3RSZXN1bHQ6IG51bGwgfCBGb3JtYXRSZXN1bHQgPSBudWxsXG4gIHJldHVybiAoaHJlZjogVXJsLCBhcz86IFVybCkgPT4ge1xuICAgIGlmIChsYXN0UmVzdWx0ICYmIGhyZWYgPT09IGxhc3RIcmVmICYmIGFzID09PSBsYXN0QXMpIHtcbiAgICAgIHJldHVybiBsYXN0UmVzdWx0XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gZm9ybWF0RnVuYyhocmVmLCBhcylcbiAgICBsYXN0SHJlZiA9IGhyZWZcbiAgICBsYXN0QXMgPSBhc1xuICAgIGxhc3RSZXN1bHQgPSByZXN1bHRcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZnVuY3Rpb24gZm9ybWF0VXJsKHVybDogVXJsKTogc3RyaW5nIHtcbiAgcmV0dXJuIHVybCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0JyA/IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybCkgOiB1cmxcbn1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG5cbmxldCBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChvYnNlcnZlcikge1xuICAgIHJldHVybiBvYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmNsYXNzIExpbmsgZXh0ZW5kcyBDb21wb25lbnQ8TGlua1Byb3BzPiB7XG4gIHA6IGJvb2xlYW5cblxuICBjb25zdHJ1Y3Rvcihwcm9wczogTGlua1Byb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChwcm9wcy5wcmVmZXRjaCkge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuICB9XG5cbiAgY2xlYW5VcExpc3RlbmVycyA9ICgpID0+IHt9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhblVwTGlzdGVuZXJzKClcbiAgfVxuXG4gIGdldFBhdGhzKCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgICBjb25zdCB7IGhyZWY6IHBhcnNlZEhyZWYsIGFzOiBwYXJzZWRBcyB9ID0gdGhpcy5mb3JtYXRVcmxzKFxuICAgICAgdGhpcy5wcm9wcy5ocmVmLFxuICAgICAgdGhpcy5wcm9wcy5hc1xuICAgIClcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlKHBhdGhuYW1lLCBwYXJzZWRIcmVmKVxuICAgIHJldHVybiBbcmVzb2x2ZWRIcmVmLCBwYXJzZWRBcyA/IHJlc29sdmUocGF0aG5hbWUsIHBhcnNlZEFzKSA6IHJlc29sdmVkSHJlZl1cbiAgfVxuXG4gIGhhbmRsZVJlZihyZWY6IEVsZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wICYmIEludGVyc2VjdGlvbk9ic2VydmVyICYmIHJlZiAmJiByZWYudGFnTmFtZSkge1xuICAgICAgdGhpcy5jbGVhblVwTGlzdGVuZXJzKClcblxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID1cbiAgICAgICAgcHJlZmV0Y2hlZFtcbiAgICAgICAgICB0aGlzLmdldFBhdGhzKCkuam9pbihcbiAgICAgICAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICAgICAgICAnJSdcbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHRoaXMuY2xlYW5VcExpc3RlbmVycyA9IGxpc3RlblRvSW50ZXJzZWN0aW9ucyhyZWYsICgpID0+IHtcbiAgICAgICAgICB0aGlzLnByZWZldGNoKClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBUaGUgZnVuY3Rpb24gaXMgbWVtb2l6ZWQgc28gdGhhdCBubyBleHRyYSBsaWZlY3ljbGVzIGFyZSBuZWVkZWRcbiAgLy8gYXMgcGVyIGh0dHBzOi8vcmVhY3Rqcy5vcmcvYmxvZy8yMDE4LzA2LzA3L3lvdS1wcm9iYWJseS1kb250LW5lZWQtZGVyaXZlZC1zdGF0ZS5odG1sXG4gIGZvcm1hdFVybHMgPSBtZW1vaXplZEZvcm1hdFVybCgoaHJlZiwgYXNIcmVmKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IGFkZEJhc2VQYXRoKGZvcm1hdFVybChocmVmKSksXG4gICAgICBhczogYXNIcmVmID8gYWRkQmFzZVBhdGgoZm9ybWF0VXJsKGFzSHJlZikpIDogYXNIcmVmLFxuICAgIH1cbiAgfSlcblxuICBsaW5rQ2xpY2tlZCA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3QgeyBub2RlTmFtZSwgdGFyZ2V0IH0gPSBlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgICBpZiAoXG4gICAgICBub2RlTmFtZSA9PT0gJ0EnICYmXG4gICAgICAoKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgICAgIGUubWV0YUtleSB8fFxuICAgICAgICBlLmN0cmxLZXkgfHxcbiAgICAgICAgZS5zaGlmdEtleSB8fFxuICAgICAgICAoZS5uYXRpdmVFdmVudCAmJiBlLm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKSlcbiAgICApIHtcbiAgICAgIC8vIGlnbm9yZSBjbGljayBmb3IgbmV3IHRhYiAvIG5ldyB3aW5kb3cgYmVoYXZpb3JcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCB7IGhyZWYsIGFzIH0gPSB0aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLCB0aGlzLnByb3BzLmFzKVxuXG4gICAgaWYgKCFpc0xvY2FsKGhyZWYpKSB7XG4gICAgICAvLyBpZ25vcmUgY2xpY2sgaWYgaXQncyBvdXRzaWRlIG91ciBzY29wZSAoZS5nLiBodHRwczovL2dvb2dsZS5jb20pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgICBocmVmID0gcmVzb2x2ZShwYXRobmFtZSwgaHJlZilcbiAgICBhcyA9IGFzID8gcmVzb2x2ZShwYXRobmFtZSwgYXMpIDogaHJlZlxuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgICBsZXQgeyBzY3JvbGwgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgICB9XG5cbiAgICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgICBSb3V0ZXJbdGhpcy5wcm9wcy5yZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgICAgc2hhbGxvdzogdGhpcy5wcm9wcy5zaGFsbG93LFxuICAgIH0pLnRoZW4oKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcHJlZmV0Y2gob3B0aW9ucz86IFByZWZldGNoT3B0aW9ucyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wIHx8IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gICAgY29uc3QgcGF0aHMgPSB0aGlzLmdldFBhdGhzKClcbiAgICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gICAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gICAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gICAgUm91dGVyLnByZWZldGNoKHBhdGhzWy8qIGhyZWYgKi8gMF0sIHBhdGhzWy8qIGFzUGF0aCAqLyAxXSwgb3B0aW9ucykuY2F0Y2goXG4gICAgICAoZXJyKSA9PiB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgICAgIHRocm93IGVyclxuICAgICAgICB9XG4gICAgICB9XG4gICAgKVxuICAgIHByZWZldGNoZWRbXG4gICAgICBwYXRocy5qb2luKFxuICAgICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgICAnJSdcbiAgICAgIClcbiAgICBdID0gdHJ1ZVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBocmVmLCBhcyB9ID0gdGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZiwgdGhpcy5wcm9wcy5hcylcbiAgICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICAgIH1cblxuICAgIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICAgIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICAgIGNvbnN0IHByb3BzOiB7XG4gICAgICBvbk1vdXNlRW50ZXI6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgICAgaHJlZj86IHN0cmluZ1xuICAgICAgcmVmPzogYW55XG4gICAgfSA9IHtcbiAgICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5oYW5kbGVSZWYoZWwpXG5cbiAgICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uTW91c2VFbnRlcjogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByZWZldGNoKHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICAgIH0sXG4gICAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICB0aGlzLmxpbmtDbGlja2VkKGUpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfVxuXG4gICAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gICAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gICAgaWYgKFxuICAgICAgdGhpcy5wcm9wcy5wYXNzSHJlZiB8fFxuICAgICAgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpXG4gICAgKSB7XG4gICAgICBwcm9wcy5ocmVmID0gYXMgfHwgaHJlZlxuICAgIH1cblxuICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICBpZiAoXG4gICAgICAgIHByb3BzLmhyZWYgJiZcbiAgICAgICAgdHlwZW9mIF9fTkVYVF9EQVRBX18gIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydFxuICAgICAgKSB7XG4gICAgICAgIHByb3BzLmhyZWYgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChwcm9wcy5ocmVmKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHByb3BzKVxuICB9XG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICBjb25zdCB3YXJuID0gZXhlY09uY2UoY29uc29sZS5lcnJvcilcblxuICAvLyBUaGlzIG1vZHVsZSBnZXRzIHJlbW92ZWQgYnkgd2VicGFjay5JZ25vcmVQbHVnaW5cbiAgY29uc3QgUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpXG4gIGNvbnN0IGV4YWN0ID0gcmVxdWlyZSgncHJvcC10eXBlcy1leGFjdCcpXG4gIC8vIEB0cy1pZ25vcmUgdGhlIHByb3BlcnR5IGlzIHN1cHBvcnRlZCwgd2hlbiBkZWNsYXJpbmcgaXQgb24gdGhlIGNsYXNzIGl0IG91dHB1dHMgYW4gZXh0cmEgYml0IG9mIGNvZGUgd2hpY2ggaXMgbm90IG5lZWRlZC5cbiAgTGluay5wcm9wVHlwZXMgPSBleGFjdCh7XG4gICAgaHJlZjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLmlzUmVxdWlyZWQsXG4gICAgYXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgICBwcmVmZXRjaDogUHJvcFR5cGVzLmJvb2wsXG4gICAgcmVwbGFjZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2hhbGxvdzogUHJvcFR5cGVzLmJvb2wsXG4gICAgcGFzc0hyZWY6IFByb3BUeXBlcy5ib29sLFxuICAgIHNjcm9sbDogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICAocHJvcHM6IGFueSwgcHJvcE5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHByb3BzW3Byb3BOYW1lXVxuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgd2FybihcbiAgICAgICAgICAgIGBXYXJuaW5nOiBZb3UncmUgdXNpbmcgYSBzdHJpbmcgZGlyZWN0bHkgaW5zaWRlIDxMaW5rPi4gVGhpcyB1c2FnZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBQbGVhc2UgYWRkIGFuIDxhPiB0YWcgYXMgY2hpbGQgb2YgPExpbms+YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9LFxuICAgIF0pLmlzUmVxdWlyZWQsXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKHt9LCBfcm91dGVyW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHBhcnNlLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpICE9PSAwID8gYmFzZVBhdGggKyBwYXRoIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgPT09IDBcbiAgICA/IHBhdGguc3Vic3RyKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG4gICAgOiBwYXRoXG59XG5cbmZ1bmN0aW9uIHRvUm91dGUocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGgucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLydcbn1cblxuY29uc3QgcHJlcGFyZVJvdXRlID0gKHBhdGg6IHN0cmluZykgPT5cbiAgdG9Sb3V0ZSghcGF0aCB8fCBwYXRoID09PSAnLycgPyAnL2luZGV4JyA6IHBhdGgpXG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbnR5cGUgQ29tcG9uZW50UmVzID0geyBwYWdlOiBDb21wb25lbnRUeXBlOyBtb2Q6IGFueSB9XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG50eXBlIFJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogYW55XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFJvdXRlSW5mbywgQXBwPzogQ29tcG9uZW50VHlwZSkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IGFueSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5IHwgbnVsbCxcbiAgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4sXG4gIGNiPzogKC4uLmFyZ3M6IGFueSkgPT4gYW55XG4pIHtcbiAgbGV0IGF0dGVtcHRzID0gaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMVxuICBmdW5jdGlvbiBnZXRSZXNwb25zZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBmZXRjaChcbiAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKFxuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgX19ORVhUX0RBVEFfX1xuICAgICAgICAgIGAvX25leHQvZGF0YS8ke19fTkVYVF9EQVRBX18uYnVpbGRJZH0ke2RlbEJhc2VQYXRoKHBhdGhuYW1lKX0uanNvbmBcbiAgICAgICAgKSxcbiAgICAgICAgcXVlcnksXG4gICAgICB9KSxcbiAgICAgIHtcbiAgICAgICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgICAgICAvL1xuICAgICAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgICAgIC8vID4gb3B0aW9uLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAgICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICB9XG4gICAgKS50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgIGlmICgtLWF0dGVtcHRzID4gMCAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgIHJldHVybiBnZXRSZXNwb25zZSgpXG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGdldFJlc3BvbnNlKClcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuIGNiID8gY2IoZGF0YSkgOiBkYXRhXG4gICAgfSlcbiAgICAuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAgIC8vIGxvb3AuXG4gICAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICAgIDsoZXJyIGFzIGFueSkuY29kZSA9ICdQQUdFX0xPQURfRVJST1InXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQ29tcG9uZW50VHlwZVxuICAgICAgd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0geyBDb21wb25lbnQ6IEFwcCB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBhc1xuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcbiAgICB9XG4gIH1cblxuICAvLyBAZGVwcmVjYXRlZCBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBldmVuIHRob3VnaCBpdCdzIGEgcHJpdmF0ZSBtZXRob2QuXG4gIHN0YXRpYyBfcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgcmV0dXJuIHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHVybFxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGlmICghZS5zdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAoXG4gICAgICBlLnN0YXRlICYmXG4gICAgICB0aGlzLmlzU3NyICYmXG4gICAgICBlLnN0YXRlLmFzID09PSB0aGlzLmFzUGF0aCAmJlxuICAgICAgcGFyc2UoZS5zdGF0ZS51cmwpLnBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lXG4gICAgKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoZS5zdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gZS5zdGF0ZVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGFzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ2Bwb3BzdGF0ZWAgZXZlbnQgdHJpZ2dlcmVkIGJ1dCBgZXZlbnQuc3RhdGVgIGRpZCBub3QgaGF2ZSBgdXJsYCBvciBgYXNgIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3BvcHN0YXRlLXN0YXRlLWVtcHR5J1xuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgdXBkYXRlKHJvdXRlOiBzdHJpbmcsIG1vZDogYW55KSB7XG4gICAgY29uc3QgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlID0gbW9kLmRlZmF1bHQgfHwgbW9kXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHVwZGF0ZSB1bmF2YWlsYWJsZSByb3V0ZTogJHtyb3V0ZX1gKVxuICAgIH1cblxuICAgIGNvbnN0IG5ld0RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBDb21wb25lbnQsXG4gICAgICBfX05fU1NHOiBtb2QuX19OX1NTRyxcbiAgICAgIF9fTl9TU1A6IG1vZC5fX05fU1NQLFxuICAgIH0pXG4gICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IG5ld0RhdGFcblxuICAgIC8vIHBhZ2VzL19hcHAuanMgdXBkYXRlZFxuICAgIGlmIChyb3V0ZSA9PT0gJy9fYXBwJykge1xuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHJvdXRlID09PSB0aGlzLnJvdXRlKSB7XG4gICAgICB0aGlzLm5vdGlmeShuZXdEYXRhKVxuICAgIH1cbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICBfdXJsOiBVcmwsXG4gICAgX2FzOiBVcmwsXG4gICAgb3B0aW9uczogYW55XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgICB9XG4gICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgICBpZiAoU1QpIHtcbiAgICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgICAgfVxuXG4gICAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gICAgICBsZXQgdXJsID0gdHlwZW9mIF91cmwgPT09ICdvYmplY3QnID8gZm9ybWF0V2l0aFZhbGlkYXRpb24oX3VybCkgOiBfdXJsXG4gICAgICBsZXQgYXMgPSB0eXBlb2YgX2FzID09PSAnb2JqZWN0JyA/IGZvcm1hdFdpdGhWYWxpZGF0aW9uKF9hcykgOiBfYXNcblxuICAgICAgdXJsID0gYWRkQmFzZVBhdGgodXJsKVxuICAgICAgYXMgPSBhZGRCYXNlUGF0aChhcylcblxuICAgICAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAgICAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5IGZvciB0aGUgU1NSIHBhZ2UuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgICAgaWYgKF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCkge1xuICAgICAgICAgIGFzID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQoYXMpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQoYXMpXG5cbiAgICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGFzKSkge1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgICB0aGlzLnNjcm9sbFRvSGFzaChhcylcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnksIHByb3RvY29sIH0gPSBwYXJzZSh1cmwsIHRydWUpXG5cbiAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSlcbiAgICAgIH1cblxuICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICAgIGlmICghdGhpcy51cmxJc05ldyhhcykpIHtcbiAgICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKVxuICAgICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSBwYXJzZShhcylcbiAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgICApXG5cbiAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZWplY3QoXG4gICAgICAgICAgICAgIG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgICtcbiAgICAgICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgICAgLy8gSWYgc2hhbGxvdyBpcyB0cnVlIGFuZCB0aGUgcm91dGUgZXhpc3RzIGluIHRoZSByb3V0ZXIgY2FjaGUgd2UgcmV1c2UgdGhlIHByZXZpb3VzIHJlc3VsdFxuICAgICAgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cpLnRoZW4oXG4gICAgICAgIChyb3V0ZUluZm8pID0+IHtcbiAgICAgICAgICBjb25zdCB7IGVycm9yIH0gPSByb3V0ZUluZm9cblxuICAgICAgICAgIGlmIChlcnJvciAmJiBlcnJvci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVJbmZvKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgYXMpXG4gICAgICAgICAgICAgIHRocm93IGVycm9yXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSlcbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICByZWplY3RcbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxSb3V0ZUluZm8+IHtcbiAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAvLyBJZiB0aGVyZSBpcyBhIHNoYWxsb3cgcm91dGUgdHJhbnNpdGlvbiBwb3NzaWJsZVxuICAgIC8vIElmIHRoZSByb3V0ZSBpcyBhbHJlYWR5IHJlbmRlcmVkIG9uIHRoZSBzY3JlZW4uXG4gICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNhY2hlZFJvdXRlSW5mbylcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVFcnJvciA9IChcbiAgICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICAgICkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGlmIChlcnIuY29kZSA9PT0gJ1BBR0VfTE9BRF9FUlJPUicgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAgICAgLy8gU28sIHdlIG5lZWQgdG8gbWFyayBpdCBhcyBhIGNhbmNlbGxlZCBlcnJvciBhbmQgc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc29sdmUoXG4gICAgICAgICAgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50IH0gPSByZXNcbiAgICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvOiBSb3V0ZUluZm8gPSB7IENvbXBvbmVudCwgZXJyIH1cbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIH0gYXMgYW55KS50aGVuKFxuICAgICAgICAgICAgICAgICAgKHByb3BzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVyclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbylcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAoZ2lwRXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsXG4gICAgICAgICAgICAgICAgICAgICAgZ2lwRXJyXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSkgYXMgUHJvbWlzZTxSb3V0ZUluZm8+XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IGhhbmRsZUVycm9yKGVyciwgdHJ1ZSkpXG4gICAgICAgIClcbiAgICAgIH0pIGFzIFByb21pc2U8Um91dGVJbmZvPlxuICAgIH1cblxuICAgIHJldHVybiAobmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKGNhY2hlZFJvdXRlSW5mbykge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pXG4gICAgICB9XG5cbiAgICAgIHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oXG4gICAgICAgIChyZXMpID0+XG4gICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pLFxuICAgICAgICByZWplY3RcbiAgICAgIClcbiAgICB9KSBhcyBQcm9taXNlPFJvdXRlSW5mbz4pXG4gICAgICAudGhlbigocm91dGVJbmZvOiBSb3V0ZUluZm8pID0+IHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0RGF0YTxSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgICAgX19OX1NTR1xuICAgICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGFzKVxuICAgICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoYXMpXG4gICAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICAgIClcbiAgICAgICAgKS50aGVuKChwcm9wcykgPT4ge1xuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goaGFuZGxlRXJyb3IpXG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcHJvdG9jb2wgfSA9IHBhcnNlKHVybClcblxuICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGNvbnN0IHJvdXRlID0gZGVsQmFzZVBhdGgodG9Sb3V0ZShwYXRobmFtZSkpXG4gICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEodXJsLCBkZWxCYXNlUGF0aChhc1BhdGgpKSxcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgICAgXSkudGhlbigoKSA9PiByZXNvbHZlKCksIHJlamVjdClcbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8Q29tcG9uZW50UmVzPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG4gICAgcm91dGUgPSBkZWxCYXNlUGF0aChyb3V0ZSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YSA9IChhc1BhdGg6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiA9PiB7XG4gICAgY29uc3QgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGFyc2UoYXNQYXRoKS5wYXRobmFtZSEpXG5cbiAgICByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1twYXRobmFtZV1cbiAgICAgID8gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW3BhdGhuYW1lXSlcbiAgICAgIDogZmV0Y2hOZXh0RGF0YShcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIHRoaXMuaXNTc3IsXG4gICAgICAgICAgKGRhdGEpID0+ICh0aGlzLnNkY1twYXRobmFtZV0gPSBkYXRhKVxuICAgICAgICApXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YSA9IChhc1BhdGg6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiA9PiB7XG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZShhc1BhdGgsIHRydWUpXG4gICAgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGF0aG5hbWUhKVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHApXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgY29uc3QgZSA9IG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJylcbiAgICAgIDsoZSBhcyBhbnkpLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGUsIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogeyBwb3M6IG51bWJlcjsgcmVwZWF0OiBib29sZWFuIH0gfVxufSB7XG4gIC8vIEVzY2FwZSBhbGwgY2hhcmFjdGVycyB0aGF0IGNvdWxkIGJlIGNvbnNpZGVyZWQgUmVnRXhcbiAgY29uc3QgZXNjYXBlZFJvdXRlID0gZXNjYXBlUmVnZXgobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiB7IHBvczogbnVtYmVyOyByZXBlYXQ6IGJvb2xlYW4gfSB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG5cbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoXG4gICAgL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZyxcbiAgICAoXywgJDEpID0+IHtcbiAgICAgIGNvbnN0IGlzT3B0aW9uYWwgPSAvXlxcXFxcXFsuKlxcXFxcXF0kLy50ZXN0KCQxKVxuICAgICAgaWYgKGlzT3B0aW9uYWwpIHtcbiAgICAgICAgJDEgPSAkMS5zbGljZSgyLCAtMilcbiAgICAgIH1cbiAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSlcbiAgICAgIGlmIChpc0NhdGNoQWxsKSB7XG4gICAgICAgICQxID0gJDEuc2xpY2UoNilcbiAgICAgIH1cbiAgICAgIGdyb3Vwc1tcbiAgICAgICAgJDFcbiAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgXSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdDogaXNDYXRjaEFsbCB9XG4gICAgICByZXR1cm4gaXNDYXRjaEFsbCA/IChpc09wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgfVxuICApXG5cbiAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZShcbiAgICAgIC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csXG4gICAgICAoXywgJDEpID0+IHtcbiAgICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKVxuICAgICAgICBjb25zdCBrZXkgPSAkMVxuICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpXG5cbiAgICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGxcbiAgICAgICAgICA/IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT4uKz8pYFxuICAgICAgICAgIDogYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9PlteL10rPylgXG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cCgnXicgKyBwYXJhbWV0ZXJpemVkUm91dGUgKyAnKD86Lyk/JCcsICdpJyksXG4gICAgZ3JvdXBzLFxuICAgIG5hbWVkUmVnZXg6IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlXG4gICAgICA/IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYFxuICAgICAgOiB1bmRlZmluZWQsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGZvcm1hdCwgVVJMRm9ybWF0T3B0aW9ucywgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICcuLi8uLi9saWIvbG9hZC1lbnYtY29uZmlnJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBhbnlcbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBpbnRlcmZhY2UtbmFtZVxuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBzdGF0aWNNYXJrdXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkZXZGaWxlczogc3RyaW5nW11cbiAgZmlsZXM6IHN0cmluZ1tdXG4gIGxvd1ByaW9yaXR5RmlsZXM6IHN0cmluZ1tdXG4gIHBvbHlmaWxsRmlsZXM6IHN0cmluZ1tdXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaHRtbFByb3BzOiBhbnlcbiAgYm9keVRhZ3M6IGFueVtdXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICB1cmw6IFVybE9iamVjdCxcbiAgb3B0aW9ucz86IFVSTEZvcm1hdE9wdGlvbnNcbik6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXQodXJsIGFzIFVSTCwgb3B0aW9ucylcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsImltcG9ydCBSZWFjdCwgeyBFcnJvckluZm8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIGV4ZWNPbmNlLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGUsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJy4uL2NsaWVudC9yb3V0ZXInXG5cbmV4cG9ydCB7IEFwcEluaXRpYWxQcm9wcyB9XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHQgPSBBcHBDb250ZXh0VHlwZTxSb3V0ZXI+XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzPFAgPSB7fT4gPSBBcHBQcm9wc1R5cGU8Um91dGVyLCBQPlxuXG4vKipcbiAqIGBBcHBgIGNvbXBvbmVudCBpcyB1c2VkIGZvciBpbml0aWFsaXplIG9mIHBhZ2VzLiBJdCBhbGxvd3MgZm9yIG92ZXJ3cml0aW5nIGFuZCBmdWxsIGNvbnRyb2wgb2YgdGhlIGBwYWdlYCBpbml0aWFsaXphdGlvbi5cbiAqIFRoaXMgYWxsb3dzIGZvciBrZWVwaW5nIHN0YXRlIGJldHdlZW4gbmF2aWdhdGlvbiwgY3VzdG9tIGVycm9yIGhhbmRsaW5nLCBpbmplY3RpbmcgYWRkaXRpb25hbCBkYXRhLlxuICovXG5hc3luYyBmdW5jdGlvbiBhcHBHZXRJbml0aWFsUHJvcHMoe1xuICBDb21wb25lbnQsXG4gIGN0eCxcbn06IEFwcENvbnRleHQpOiBQcm9taXNlPEFwcEluaXRpYWxQcm9wcz4ge1xuICBjb25zdCBwYWdlUHJvcHMgPSBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KVxuICByZXR1cm4geyBwYWdlUHJvcHMgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHA8UCA9IHt9LCBDUCA9IHt9LCBTID0ge30+IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFxuICBQICYgQXBwUHJvcHM8Q1A+LFxuICBTXG4+IHtcbiAgc3RhdGljIG9yaWdHZXRJbml0aWFsUHJvcHMgPSBhcHBHZXRJbml0aWFsUHJvcHNcbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wc1xuXG4gIC8vIEtlcHQgaGVyZSBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG4gIC8vIFdoZW4gc29tZW9uZSBlbmRlZCBBcHAgdGhleSBjb3VsZCBjYWxsIGBzdXBlci5jb21wb25lbnREaWRDYXRjaGAuXG4gIC8vIEBkZXByZWNhdGVkIFRoaXMgbWV0aG9kIGlzIG5vIGxvbmdlciBuZWVkZWQuIEVycm9ycyBhcmUgY2F1Z2h0IGF0IHRoZSB0b3AgbGV2ZWxcbiAgY29tcG9uZW50RGlkQ2F0Y2goZXJyb3I6IEVycm9yLCBfZXJyb3JJbmZvOiBFcnJvckluZm8pOiB2b2lkIHtcbiAgICB0aHJvdyBlcnJvclxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcm91dGVyLCBDb21wb25lbnQsIHBhZ2VQcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gdGhpc1xuICAgICAgLnByb3BzIGFzIEFwcFByb3BzPENQPlxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wb25lbnRcbiAgICAgICAgey4uLnBhZ2VQcm9wc31cbiAgICAgICAge1xuICAgICAgICAgIC8vIHdlIGRvbid0IGFkZCB0aGUgbGVnYWN5IFVSTCBwcm9wIGlmIGl0J3MgdXNpbmcgbm9uLWxlZ2FjeVxuICAgICAgICAgIC8vIG1ldGhvZHMgbGlrZSBnZXRTdGF0aWNQcm9wcyBhbmQgZ2V0U2VydmVyU2lkZVByb3BzXG4gICAgICAgICAgLi4uKCEoX19OX1NTRyB8fCBfX05fU1NQKSA/IHsgdXJsOiBjcmVhdGVVcmwocm91dGVyKSB9IDoge30pXG4gICAgICAgIH1cbiAgICAgIC8+XG4gICAgKVxuICB9XG59XG5cbmxldCB3YXJuQ29udGFpbmVyOiAoKSA9PiB2b2lkXG5sZXQgd2FyblVybDogKCkgPT4gdm9pZFxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB3YXJuQ29udGFpbmVyID0gZXhlY09uY2UoKCkgPT4ge1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgIGBXYXJuaW5nOiB0aGUgXFxgQ29udGFpbmVyXFxgIGluIFxcYF9hcHBcXGAgaGFzIGJlZW4gZGVwcmVjYXRlZCBhbmQgc2hvdWxkIGJlIHJlbW92ZWQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2FwcC1jb250YWluZXItZGVwcmVjYXRlZGBcbiAgICApXG4gIH0pXG5cbiAgd2FyblVybCA9IGV4ZWNPbmNlKCgpID0+IHtcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgYFdhcm5pbmc6IHRoZSAndXJsJyBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy91cmwtZGVwcmVjYXRlZGBcbiAgICApXG4gIH0pXG59XG5cbi8vIEBkZXByZWNhdGVkIG5vb3AgZm9yIG5vdyB1bnRpbCByZW1vdmFsXG5leHBvcnQgZnVuY3Rpb24gQ29udGFpbmVyKHA6IGFueSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FybkNvbnRhaW5lcigpXG4gIHJldHVybiBwLmNoaWxkcmVuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVVcmwocm91dGVyOiBSb3V0ZXIpIHtcbiAgLy8gVGhpcyBpcyB0byBtYWtlIHN1cmUgd2UgZG9uJ3QgcmVmZXJlbmNlcyB0aGUgcm91dGVyIG9iamVjdCBhdCBjYWxsIHRpbWVcbiAgY29uc3QgeyBwYXRobmFtZSwgYXNQYXRoLCBxdWVyeSB9ID0gcm91dGVyXG4gIHJldHVybiB7XG4gICAgZ2V0IHF1ZXJ5KCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHF1ZXJ5XG4gICAgfSxcbiAgICBnZXQgcGF0aG5hbWUoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcGF0aG5hbWVcbiAgICB9LFxuICAgIGdldCBhc1BhdGgoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gYXNQYXRoXG4gICAgfSxcbiAgICBiYWNrOiAoKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByb3V0ZXIuYmFjaygpXG4gICAgfSxcbiAgICBwdXNoOiAodXJsOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcm91dGVyLnB1c2godXJsLCBhcylcbiAgICB9LFxuICAgIHB1c2hUbzogKGhyZWY6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIGNvbnN0IHB1c2hSb3V0ZSA9IGFzID8gaHJlZiA6ICcnXG4gICAgICBjb25zdCBwdXNoVXJsID0gYXMgfHwgaHJlZlxuXG4gICAgICByZXR1cm4gcm91dGVyLnB1c2gocHVzaFJvdXRlLCBwdXNoVXJsKVxuICAgIH0sXG4gICAgcmVwbGFjZTogKHVybDogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHJvdXRlci5yZXBsYWNlKHVybCwgYXMpXG4gICAgfSxcbiAgICByZXBsYWNlVG86IChocmVmOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICBjb25zdCByZXBsYWNlUm91dGUgPSBhcyA/IGhyZWYgOiAnJ1xuICAgICAgY29uc3QgcmVwbGFjZVVybCA9IGFzIHx8IGhyZWZcblxuICAgICAgcmV0dXJuIHJvdXRlci5yZXBsYWNlKHJlcGxhY2VSb3V0ZSwgcmVwbGFjZVVybClcbiAgICB9LFxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBcHAsIHsgQ29udGFpbmVyIH0gZnJvbSBcIm5leHQvYXBwXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlclwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3RlclwiO1xyXG5pbXBvcnQgY29uZmlndXJlQXV0aCBmcm9tIFwiLi4vaG9va3Mvc3RvcmUvcmVkdWNlcnMvYXV0aFwiO1xyXG5pbXBvcnQgUGVyc2lzdHMgZnJvbSBcIi4uL2NvbnRhaW5lci9QZXJzaXN0cy9QZXJzaXN0c1wiO1xyXG5cclxuY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25maWd1cmVBdXRoKCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFBlcnNpc3RzPlxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICA8bWFpbiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTYwcHhcIiB9fT5cclxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICA8L1BlcnNpc3RzPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub2RlLWZldGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlcy1leGFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVybFwiKTsiXSwic291cmNlUm9vdCI6IiJ9