webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/Header/HeadTop.js":
/*!**************************************!*\
  !*** ./components/Header/HeadTop.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Backdrop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Backdrop */ "./components/Backdrop.js");
/* harmony import */ var _container_Account__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../container/Account */ "./container/Account.js");
/* harmony import */ var _hooks_store_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/store/store */ "./hooks/store/store.js");
var _this = undefined,
    _jsxFileName = "D:\\Projects\\Github Projects\\aoi\\client\\components\\Header\\HeadTop.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var headTop = function headTop() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      showAccount = _useState[0],
      setShowAccount = _useState[1];

  var state = Object(_hooks_store_store__WEBPACK_IMPORTED_MODULE_4__["useStore"])()[0];
  var _state$auth = state.auth,
      isAuth = _state$auth.isAuth,
      data = _state$auth.data;
  var loginStatus = isAuth ? __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, " ", data.fullName.split(" ")[0], " ") : __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, "Sign in / Register");

  var showAccountHandler = function showAccountHandler() {
    setShowAccount(!showAccount);
  };

  return __jsx("div", {
    className: "jsx-4122750041" + " " + "header-top",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx("ul", {
    className: "jsx-4122750041" + " " + "links",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx("li", {
    onClick: showAccountHandler,
    className: "jsx-4122750041",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, "My Account"), __jsx("li", {
    className: "jsx-4122750041",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, "My Shopping Bag (0)")), __jsx(_Backdrop__WEBPACK_IMPORTED_MODULE_2__["default"], {
    show: showAccount,
    clicked: showAccountHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }), __jsx(_container_Account__WEBPACK_IMPORTED_MODULE_3__["default"], {
    show: showAccount,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4122750041",
    __self: _this
  }, ".header-top.jsx-4122750041{width:100%;height:40px;padding:0px 20px;background-color:#24272b;color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:14px;}.links.jsx-4122750041{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.links.jsx-4122750041 li.jsx-4122750041{padding:0px 0px 0px 20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0c1xcR2l0aHViIFByb2plY3RzXFxhb2lcXGNsaWVudFxcY29tcG9uZW50c1xcSGVhZGVyXFxIZWFkVG9wLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRCa0IsQUFHc0IsQUFZRSxBQUlZLFdBZmIsWUFDSyxFQWVuQixlQWQyQix5QkFDYixTQVNkLEdBUmUsMEVBQ1ksaUdBQ04sNkZBQ0osZUFDakIiLCJmaWxlIjoiRDpcXFByb2plY3RzXFxHaXRodWIgUHJvamVjdHNcXGFvaVxcY2xpZW50XFxjb21wb25lbnRzXFxIZWFkZXJcXEhlYWRUb3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJhY2tkcm9wIGZyb20gXCIuLi9CYWNrZHJvcFwiO1xyXG5pbXBvcnQgQWNjb3VudCBmcm9tIFwiLi4vLi4vY29udGFpbmVyL0FjY291bnRcIjtcclxuaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tIFwiLi4vLi4vaG9va3Mvc3RvcmUvc3RvcmVcIjtcclxuXHJcbmNvbnN0IGhlYWRUb3AgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Nob3dBY2NvdW50LCBzZXRTaG93QWNjb3VudF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgc3RhdGUgPSB1c2VTdG9yZSgpWzBdO1xyXG4gIGNvbnN0IHsgaXNBdXRoLCBkYXRhIH0gPSBzdGF0ZS5hdXRoO1xyXG5cclxuICBjb25zdCBsb2dpblN0YXR1cyA9IGlzQXV0aCA/IChcclxuICAgIDxzcGFuPiB7ZGF0YS5mdWxsTmFtZS5zcGxpdChcIiBcIilbMF19IDwvc3Bhbj5cclxuICApIDogKFxyXG4gICAgPHNwYW4+U2lnbiBpbiAvIFJlZ2lzdGVyPC9zcGFuPlxyXG4gICk7XHJcbiAgY29uc3Qgc2hvd0FjY291bnRIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgc2V0U2hvd0FjY291bnQoIXNob3dBY2NvdW50KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItdG9wXCI+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJsaW5rc1wiPlxyXG4gICAgICAgIDxsaSBvbkNsaWNrPXtzaG93QWNjb3VudEhhbmRsZXJ9Pk15IEFjY291bnQ8L2xpPlxyXG4gICAgICAgIDxsaT5NeSBTaG9wcGluZyBCYWcgKDApPC9saT5cclxuICAgICAgPC91bD5cclxuICAgICAgPEJhY2tkcm9wIHNob3c9e3Nob3dBY2NvdW50fSBjbGlja2VkPXtzaG93QWNjb3VudEhhbmRsZXJ9IC8+XHJcbiAgICAgIDxBY2NvdW50IHNob3c9e3Nob3dBY2NvdW50fSAvPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5oZWFkZXItdG9wIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMHB4IDIwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNzJiO1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxpbmtzIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubGlua3MgbGkge1xyXG4gICAgICAgICAgcGFkZGluZzogMHB4IDBweCAwcHggMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGhlYWRUb3A7XHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\Projects\\\\Github Projects\\\\aoi\\\\client\\\\components\\\\Header\\\\HeadTop.js */"));
};

_s(headTop, "1ejzkBZgRDcN4LYRmUHvgJr6oNA=", false, function () {
  return [_hooks_store_store__WEBPACK_IMPORTED_MODULE_4__["useStore"]];
});

/* harmony default export */ __webpack_exports__["default"] = (headTop);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci9IZWFkVG9wLmpzIl0sIm5hbWVzIjpbImhlYWRUb3AiLCJ1c2VTdGF0ZSIsInNob3dBY2NvdW50Iiwic2V0U2hvd0FjY291bnQiLCJzdGF0ZSIsInVzZVN0b3JlIiwiYXV0aCIsImlzQXV0aCIsImRhdGEiLCJsb2dpblN0YXR1cyIsImZ1bGxOYW1lIiwic3BsaXQiLCJzaG93QWNjb3VudEhhbmRsZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFBQSxrQkFDa0JDLHNEQUFRLENBQUMsS0FBRCxDQUQxQjtBQUFBLE1BQ2JDLFdBRGE7QUFBQSxNQUNBQyxjQURBOztBQUVwQixNQUFNQyxLQUFLLEdBQUdDLG1FQUFRLEdBQUcsQ0FBSCxDQUF0QjtBQUZvQixvQkFHS0QsS0FBSyxDQUFDRSxJQUhYO0FBQUEsTUFHWkMsTUFIWSxlQUdaQSxNQUhZO0FBQUEsTUFHSkMsSUFISSxlQUdKQSxJQUhJO0FBS3BCLE1BQU1DLFdBQVcsR0FBR0YsTUFBTSxHQUN4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVFDLElBQUksQ0FBQ0UsUUFBTCxDQUFjQyxLQUFkLENBQW9CLEdBQXBCLEVBQXlCLENBQXpCLENBQVIsTUFEd0IsR0FHeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFIRjs7QUFLQSxNQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLEdBQU07QUFDL0JULGtCQUFjLENBQUMsQ0FBQ0QsV0FBRixDQUFkO0FBQ0QsR0FGRDs7QUFJQSxTQUNFO0FBQUEsd0NBQWUsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQSx3Q0FBYyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLFdBQU8sRUFBRVUsa0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUZGLENBREYsRUFLRSxNQUFDLGlEQUFEO0FBQVUsUUFBSSxFQUFFVixXQUFoQjtBQUE2QixXQUFPLEVBQUVVLGtCQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsRUFNRSxNQUFDLDBEQUFEO0FBQVMsUUFBSSxFQUFFVixXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORjtBQUFBO0FBQUE7QUFBQSxna0dBREY7QUFnQ0QsQ0E5Q0Q7O0dBQU1GLE87VUFFVUssMkQ7OztBQTZDREwsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuYWYwMjNhYjI3MjU0NzA5NGY3ZTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQmFja2Ryb3AgZnJvbSBcIi4uL0JhY2tkcm9wXCI7XHJcbmltcG9ydCBBY2NvdW50IGZyb20gXCIuLi8uLi9jb250YWluZXIvQWNjb3VudFwiO1xyXG5pbXBvcnQgeyB1c2VTdG9yZSB9IGZyb20gXCIuLi8uLi9ob29rcy9zdG9yZS9zdG9yZVwiO1xyXG5cclxuY29uc3QgaGVhZFRvcCA9ICgpID0+IHtcclxuICBjb25zdCBbc2hvd0FjY291bnQsIHNldFNob3dBY2NvdW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBzdGF0ZSA9IHVzZVN0b3JlKClbMF07XHJcbiAgY29uc3QgeyBpc0F1dGgsIGRhdGEgfSA9IHN0YXRlLmF1dGg7XHJcblxyXG4gIGNvbnN0IGxvZ2luU3RhdHVzID0gaXNBdXRoID8gKFxyXG4gICAgPHNwYW4+IHtkYXRhLmZ1bGxOYW1lLnNwbGl0KFwiIFwiKVswXX0gPC9zcGFuPlxyXG4gICkgOiAoXHJcbiAgICA8c3Bhbj5TaWduIGluIC8gUmVnaXN0ZXI8L3NwYW4+XHJcbiAgKTtcclxuICBjb25zdCBzaG93QWNjb3VudEhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRTaG93QWNjb3VudCghc2hvd0FjY291bnQpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci10b3BcIj5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cImxpbmtzXCI+XHJcbiAgICAgICAgPGxpIG9uQ2xpY2s9e3Nob3dBY2NvdW50SGFuZGxlcn0+TXkgQWNjb3VudDwvbGk+XHJcbiAgICAgICAgPGxpPk15IFNob3BwaW5nIEJhZyAoMCk8L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8QmFja2Ryb3Agc2hvdz17c2hvd0FjY291bnR9IGNsaWNrZWQ9e3Nob3dBY2NvdW50SGFuZGxlcn0gLz5cclxuICAgICAgPEFjY291bnQgc2hvdz17c2hvd0FjY291bnR9IC8+XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmhlYWRlci10b3Age1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwcHggMjBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDI3MmI7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubGlua3Mge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5saW5rcyBsaSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgaGVhZFRvcDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==