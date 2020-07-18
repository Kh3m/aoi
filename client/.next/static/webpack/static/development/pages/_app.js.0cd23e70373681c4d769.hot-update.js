webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./container/Account.js":
/*!******************************!*\
  !*** ./container/Account.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Logo */ "./components/Logo.js");
/* harmony import */ var _SignIn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SignIn */ "./container/SignIn.js");
/* harmony import */ var _SignUp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SignUp */ "./container/SignUp.js");
var _this = undefined,
    _jsxFileName = "D:\\Projects\\Github Projects\\aoi\\client\\container\\Account.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var account = function account(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      statusState = _useState[0],
      setStatusState = _useState[1];

  var OnToggleAccountHandler = function OnToggleAccountHandler() {
    setStatusState(!statusState);
  };

  var signin = __jsx(_SignIn__WEBPACK_IMPORTED_MODULE_3__["default"], {
    guest: false,
    toggleAccount: OnToggleAccountHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  });

  var signup = __jsx(_SignUp__WEBPACK_IMPORTED_MODULE_4__["default"], {
    guest: true,
    toggleAccount: OnToggleAccountHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 18
    }
  });

  return __jsx("div", {
    className: "jsx-1452055407 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1680852836", [props.show ? "flex" : "none"]]]) + " " + "Account",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx(_components_Logo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "jsx-1452055407 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1680852836", [props.show ? "flex" : "none"]]]) + " " + "form",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, statusState ? signin : signup), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1680852836",
    dynamic: [props.show ? "flex" : "none"],
    __self: _this
  }, ".Account.__jsx-style-dynamic-selector{position:absolute;top:calc(50% - 50px);left:calc(50% - 220px);width:440px;height:500px;display:".concat(props.show ? "flex" : "none", ";-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:white;z-index:100;border-radius:10px;padding:30px 30px 0px 30px;-webkit-transition:all 5s linear;transition:all 5s linear;}@media screen and (max-width:1260px){.Main.__jsx-style-dynamic-selector{padding:0px 5%;}}@media screen and (max-width:992px){.logo.__jsx-style-dynamic-selector{width:130px;}}@media screen and (max-width:768px){.Main.__jsx-style-dynamic-selector{padding:10px 3%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:600px;}.logo.__jsx-style-dynamic-selector{width:100px;}.Main.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{width:100%;}.Account.__jsx-style-dynamic-selector{padding:10px 0px;box-shadow:none;height:500px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0c1xcR2l0aHViIFByb2plY3RzXFxhb2lcXGNsaWVudFxcY29udGFpbmVyXFxBY2NvdW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCa0IsQUFHNkIsQUFpQkQsQUFNSCxBQU1JLEFBS0osQUFHRCxBQUdNLFdBRm5CLENBZEEsQUFXQSxHQWpCQSxDQVl3QixDQVdOLENBeENHLGVBeUNOLE1BeENRLE9BeUN2QixnQkF4Q1ksWUFDQyxhQUN3QixPQTBCdEIsYUFDZixpQkExQnNCLDhFQUNILDZGQUNJLHVCQUNYLFlBQ08sbUJBQ1EsMkJBQ0YsMERBQzNCIiwiZmlsZSI6IkQ6XFxQcm9qZWN0c1xcR2l0aHViIFByb2plY3RzXFxhb2lcXGNsaWVudFxcY29udGFpbmVyXFxBY2NvdW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMb2dvIGZyb20gXCIuLi9jb21wb25lbnRzL0xvZ29cIjtcclxuaW1wb3J0IFNpZ25JbiBmcm9tIFwiLi9TaWduSW5cIjtcclxuaW1wb3J0IFNpZ25VcCBmcm9tIFwiLi9TaWduVXBcIjtcclxuXHJcbmNvbnN0IGFjY291bnQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbc3RhdHVzU3RhdGUsIHNldFN0YXR1c1N0YXRlXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBjb25zdCBPblRvZ2dsZUFjY291bnRIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgc2V0U3RhdHVzU3RhdGUoIXN0YXR1c1N0YXRlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzaWduaW4gPSAoXHJcbiAgICA8U2lnbkluIGd1ZXN0PXtmYWxzZX0gdG9nZ2xlQWNjb3VudD17T25Ub2dnbGVBY2NvdW50SGFuZGxlcn0gLz5cclxuICApO1xyXG5cclxuICBjb25zdCBzaWdudXAgPSA8U2lnblVwIGd1ZXN0PXt0cnVlfSB0b2dnbGVBY2NvdW50PXtPblRvZ2dsZUFjY291bnRIYW5kbGVyfSAvPjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQWNjb3VudFwiPlxyXG4gICAgICA8TG9nbyAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1cIj57c3RhdHVzU3RhdGUgPyBzaWduaW4gOiBzaWdudXB9PC9kaXY+XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLkFjY291bnQge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDUwcHgpO1xyXG4gICAgICAgICAgbGVmdDogY2FsYyg1MCUgLSAyMjBweCk7XHJcbiAgICAgICAgICB3aWR0aDogNDQwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogJHtwcm9wcy5zaG93ID8gXCJmbGV4XCIgOiBcIm5vbmVcIn07XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDMwcHggMzBweCAwcHggMzBweDtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCA1cyBsaW5lYXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjYwcHgpIHtcclxuICAgICAgICAgIC5NYWluIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4IDUlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgICAgICAgIC5sb2dvIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgIC5NYWluIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAzJTtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgaGVpZ2h0OiA2MDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5sb2dvIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLk1haW4gPiBkaXYge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5BY2NvdW50IHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAwcHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgLnBhZ2UtdGl0bGUge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhY2NvdW50O1xyXG4iXX0= */\n/*@ sourceURL=D:\\\\Projects\\\\Github Projects\\\\aoi\\\\client\\\\container\\\\Account.js */")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1452055407",
    __self: _this
  }, ".page-title{margin-top:30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0c1xcR2l0aHViIFByb2plY3RzXFxhb2lcXGNsaWVudFxcY29udGFpbmVyXFxBY2NvdW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVFeUIsQUFHMkIsZ0JBQ2xCIiwiZmlsZSI6IkQ6XFxQcm9qZWN0c1xcR2l0aHViIFByb2plY3RzXFxhb2lcXGNsaWVudFxcY29udGFpbmVyXFxBY2NvdW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMb2dvIGZyb20gXCIuLi9jb21wb25lbnRzL0xvZ29cIjtcclxuaW1wb3J0IFNpZ25JbiBmcm9tIFwiLi9TaWduSW5cIjtcclxuaW1wb3J0IFNpZ25VcCBmcm9tIFwiLi9TaWduVXBcIjtcclxuXHJcbmNvbnN0IGFjY291bnQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbc3RhdHVzU3RhdGUsIHNldFN0YXR1c1N0YXRlXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBjb25zdCBPblRvZ2dsZUFjY291bnRIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgc2V0U3RhdHVzU3RhdGUoIXN0YXR1c1N0YXRlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzaWduaW4gPSAoXHJcbiAgICA8U2lnbkluIGd1ZXN0PXtmYWxzZX0gdG9nZ2xlQWNjb3VudD17T25Ub2dnbGVBY2NvdW50SGFuZGxlcn0gLz5cclxuICApO1xyXG5cclxuICBjb25zdCBzaWdudXAgPSA8U2lnblVwIGd1ZXN0PXt0cnVlfSB0b2dnbGVBY2NvdW50PXtPblRvZ2dsZUFjY291bnRIYW5kbGVyfSAvPjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQWNjb3VudFwiPlxyXG4gICAgICA8TG9nbyAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1cIj57c3RhdHVzU3RhdGUgPyBzaWduaW4gOiBzaWdudXB9PC9kaXY+XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLkFjY291bnQge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDUwcHgpO1xyXG4gICAgICAgICAgbGVmdDogY2FsYyg1MCUgLSAyMjBweCk7XHJcbiAgICAgICAgICB3aWR0aDogNDQwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogJHtwcm9wcy5zaG93ID8gXCJmbGV4XCIgOiBcIm5vbmVcIn07XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDMwcHggMzBweCAwcHggMzBweDtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCA1cyBsaW5lYXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjYwcHgpIHtcclxuICAgICAgICAgIC5NYWluIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4IDUlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgICAgICAgIC5sb2dvIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgIC5NYWluIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAzJTtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgaGVpZ2h0OiA2MDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5sb2dvIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLk1haW4gPiBkaXYge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5BY2NvdW50IHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAwcHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgLnBhZ2UtdGl0bGUge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhY2NvdW50O1xyXG4iXX0= */\n/*@ sourceURL=D:\\\\Projects\\\\Github Projects\\\\aoi\\\\client\\\\container\\\\Account.js */"));
};

_s(account, "lMGebflD+gTFBgGwQ5n1tGL0P70=");

/* harmony default export */ __webpack_exports__["default"] = (account);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250YWluZXIvQWNjb3VudC5qcyJdLCJuYW1lcyI6WyJhY2NvdW50IiwicHJvcHMiLCJ1c2VTdGF0ZSIsInN0YXR1c1N0YXRlIiwic2V0U3RhdHVzU3RhdGUiLCJPblRvZ2dsZUFjY291bnRIYW5kbGVyIiwic2lnbmluIiwic2lnbnVwIiwic2hvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ2FDLHNEQUFRLENBQUMsSUFBRCxDQURyQjtBQUFBLE1BQ2xCQyxXQURrQjtBQUFBLE1BQ0xDLGNBREs7O0FBR3pCLE1BQU1DLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsR0FBTTtBQUNuQ0Qsa0JBQWMsQ0FBQyxDQUFDRCxXQUFGLENBQWQ7QUFDRCxHQUZEOztBQUlBLE1BQU1HLE1BQU0sR0FDVixNQUFDLCtDQUFEO0FBQVEsU0FBSyxFQUFFLEtBQWY7QUFBc0IsaUJBQWEsRUFBRUQsc0JBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERjs7QUFJQSxNQUFNRSxNQUFNLEdBQUcsTUFBQywrQ0FBRDtBQUFRLFNBQUssRUFBRSxJQUFmO0FBQXFCLGlCQUFhLEVBQUVGLHNCQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQWY7O0FBRUEsU0FDRTtBQUFBLG9IQVdpQkosS0FBSyxDQUFDTyxJQUFOLEdBQWEsTUFBYixHQUFzQixNQVh2QyxhQUFlLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBQSxvSEFTZVAsS0FBSyxDQUFDTyxJQUFOLEdBQWEsTUFBYixHQUFzQixNQVRyQyxhQUFlLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF1QkwsV0FBVyxHQUFHRyxNQUFILEdBQVlDLE1BQTlDLENBRkY7QUFBQTtBQUFBLGNBV2lCTixLQUFLLENBQUNPLElBQU4sR0FBYSxNQUFiLEdBQXNCLE1BWHZDO0FBQUE7QUFBQSxvSkFXaUJQLEtBQUssQ0FBQ08sSUFBTixHQUFhLE1BQWIsR0FBc0IsTUFYdkM7QUFBQTtBQUFBO0FBQUEsdTBHQURGO0FBNERELENBekVEOztHQUFNUixPOztBQTJFU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuMGNkMjNlNzAzNzM2ODFjNGQ3NjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTG9nbyBmcm9tIFwiLi4vY29tcG9uZW50cy9Mb2dvXCI7XHJcbmltcG9ydCBTaWduSW4gZnJvbSBcIi4vU2lnbkluXCI7XHJcbmltcG9ydCBTaWduVXAgZnJvbSBcIi4vU2lnblVwXCI7XHJcblxyXG5jb25zdCBhY2NvdW50ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW3N0YXR1c1N0YXRlLCBzZXRTdGF0dXNTdGF0ZV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgY29uc3QgT25Ub2dnbGVBY2NvdW50SGFuZGxlciA9ICgpID0+IHtcclxuICAgIHNldFN0YXR1c1N0YXRlKCFzdGF0dXNTdGF0ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2lnbmluID0gKFxyXG4gICAgPFNpZ25JbiBndWVzdD17ZmFsc2V9IHRvZ2dsZUFjY291bnQ9e09uVG9nZ2xlQWNjb3VudEhhbmRsZXJ9IC8+XHJcbiAgKTtcclxuXHJcbiAgY29uc3Qgc2lnbnVwID0gPFNpZ25VcCBndWVzdD17dHJ1ZX0gdG9nZ2xlQWNjb3VudD17T25Ub2dnbGVBY2NvdW50SGFuZGxlcn0gLz47XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkFjY291bnRcIj5cclxuICAgICAgPExvZ28gLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtXCI+e3N0YXR1c1N0YXRlID8gc2lnbmluIDogc2lnbnVwfTwvZGl2PlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5BY2NvdW50IHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogY2FsYyg1MCUgLSA1MHB4KTtcclxuICAgICAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gMjIwcHgpO1xyXG4gICAgICAgICAgd2lkdGg6IDQ0MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA1MDBweDtcclxuICAgICAgICAgIGRpc3BsYXk6ICR7cHJvcHMuc2hvdyA/IFwiZmxleFwiIDogXCJub25lXCJ9O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIHotaW5kZXg6IDEwMDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAzMHB4IDMwcHggMHB4IDMwcHg7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgNXMgbGluZWFyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI2MHB4KSB7XHJcbiAgICAgICAgICAuTWFpbiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCA1JTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgICAgICAubG9nbyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMzBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAuTWFpbiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMyU7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubG9nbyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5NYWluID4gZGl2IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuQWNjb3VudCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMHB4O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgIC5wYWdlLXRpdGxlIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWNjb3VudDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==