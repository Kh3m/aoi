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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Backdrop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Backdrop */ "./components/Backdrop.js");
/* harmony import */ var _container_Account__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../container/Account */ "./container/Account.js");
/* harmony import */ var _hooks_store_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/store/store */ "./hooks/store/store.js");
var _this = undefined,
    _jsxFileName = "D:\\Projects\\Github Projects\\aoi\\client\\components\\Header\\HeadTop.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var headTop = function headTop() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      showAccount = _useState[0],
      setShowAccount = _useState[1];

  var state = Object(_hooks_store_store__WEBPACK_IMPORTED_MODULE_5__["useStore"])()[0];
  var _state$auth = state.auth,
      isAuth = _state$auth.isAuth,
      data = _state$auth.data;
  var loginStatus = isAuth ? __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, " ", data.fullName.split(" ")[0], " ") : __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, "Sign in / Register");

  var showAccountHandler = function showAccountHandler() {
    setShowAccount(!showAccount);
  };

  return __jsx("div", {
    className: "jsx-1117623852" + " " + "header-top",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx("ul", {
    className: "jsx-1117623852" + " " + "links",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx("li", {
    onClick: showAccountHandler,
    className: "jsx-1117623852",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, "My Account ", __jsx("img", {
    src: "/images/user.svg",
    className: "jsx-1117623852",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 22
    }
  })), __jsx("li", {
    className: "jsx-1117623852",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/cart",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "jsx-1117623852",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/images/cart.svg",
    className: "jsx-1117623852",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 15
    }
  }), " My Shopping Bag (0)")))), __jsx(_Backdrop__WEBPACK_IMPORTED_MODULE_3__["default"], {
    show: showAccount,
    clicked: showAccountHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }), __jsx(_container_Account__WEBPACK_IMPORTED_MODULE_4__["default"], {
    show: showAccount,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1117623852",
    __self: _this
  }, ".header-top.jsx-1117623852{width:100%;height:40px;padding:0px 20px;background-color:#24272b;color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:14px;}.links.jsx-1117623852{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.links.jsx-1117623852 li.jsx-1117623852{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;padding:0px 5px;}.links.jsx-1117623852 li.jsx-1117623852 a.jsx-1117623852{color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;min-width:250px;}.links.jsx-1117623852 li.jsx-1117623852 img.jsx-1117623852{width:14px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0c1xcR2l0aHViIFByb2plY3RzXFxhb2lcXGNsaWVudFxcY29tcG9uZW50c1xcSGVhZGVyXFxIZWFkVG9wLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFDa0IsQUFHc0IsQUFZRSxBQUlBLEFBTUQsQUFNRCxXQTNCQyxBQTRCZCxDQU5lLFdBckJJLGlCQUNRLHlCQUNiLFNBU2QsQUFJcUIsR0FaTixTQW1CYyxpRUFsQkYsZ0JBWVYsZUFDQyxTQU1BLE9BTGxCLFNBTUEseUNBbkJxQiw2RkFDSixlQUNqQiIsImZpbGUiOiJEOlxcUHJvamVjdHNcXEdpdGh1YiBQcm9qZWN0c1xcYW9pXFxjbGllbnRcXGNvbXBvbmVudHNcXEhlYWRlclxcSGVhZFRvcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBCYWNrZHJvcCBmcm9tIFwiLi4vQmFja2Ryb3BcIjtcclxuaW1wb3J0IEFjY291bnQgZnJvbSBcIi4uLy4uL2NvbnRhaW5lci9BY2NvdW50XCI7XHJcbmltcG9ydCB7IHVzZVN0b3JlIH0gZnJvbSBcIi4uLy4uL2hvb2tzL3N0b3JlL3N0b3JlXCI7XHJcblxyXG5jb25zdCBoZWFkVG9wID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzaG93QWNjb3VudCwgc2V0U2hvd0FjY291bnRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHN0YXRlID0gdXNlU3RvcmUoKVswXTtcclxuICBjb25zdCB7IGlzQXV0aCwgZGF0YSB9ID0gc3RhdGUuYXV0aDtcclxuXHJcbiAgY29uc3QgbG9naW5TdGF0dXMgPSBpc0F1dGggPyAoXHJcbiAgICA8c3Bhbj4ge2RhdGEuZnVsbE5hbWUuc3BsaXQoXCIgXCIpWzBdfSA8L3NwYW4+XHJcbiAgKSA6IChcclxuICAgIDxzcGFuPlNpZ24gaW4gLyBSZWdpc3Rlcjwvc3Bhbj5cclxuICApO1xyXG4gIGNvbnN0IHNob3dBY2NvdW50SGFuZGxlciA9ICgpID0+IHtcclxuICAgIHNldFNob3dBY2NvdW50KCFzaG93QWNjb3VudCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXRvcFwiPlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwibGlua3NcIj5cclxuICAgICAgICA8bGkgb25DbGljaz17c2hvd0FjY291bnRIYW5kbGVyfT5cclxuICAgICAgICAgIE15IEFjY291bnQgPGltZyBzcmM9XCIvaW1hZ2VzL3VzZXIuc3ZnXCIgLz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2FydFwiPlxyXG4gICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvY2FydC5zdmdcIiAvPiBNeSBTaG9wcGluZyBCYWcgKDApXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8QmFja2Ryb3Agc2hvdz17c2hvd0FjY291bnR9IGNsaWNrZWQ9e3Nob3dBY2NvdW50SGFuZGxlcn0gLz5cclxuICAgICAgPEFjY291bnQgc2hvdz17c2hvd0FjY291bnR9IC8+XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmhlYWRlci10b3Age1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwcHggMjBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDI3MmI7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubGlua3Mge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5saW5rcyBsaSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIHBhZGRpbmc6IDBweCA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5saW5rcyBsaSBhIHtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICBtaW4td2lkdGg6IDI1MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGlua3MgbGkgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAxNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgaGVhZFRvcDtcclxuIl19 */\n/*@ sourceURL=D:\\\\Projects\\\\Github Projects\\\\aoi\\\\client\\\\components\\\\Header\\\\HeadTop.js */"));
};

_s(headTop, "1ejzkBZgRDcN4LYRmUHvgJr6oNA=", false, function () {
  return [_hooks_store_store__WEBPACK_IMPORTED_MODULE_5__["useStore"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci9IZWFkVG9wLmpzIl0sIm5hbWVzIjpbImhlYWRUb3AiLCJ1c2VTdGF0ZSIsInNob3dBY2NvdW50Iiwic2V0U2hvd0FjY291bnQiLCJzdGF0ZSIsInVzZVN0b3JlIiwiYXV0aCIsImlzQXV0aCIsImRhdGEiLCJsb2dpblN0YXR1cyIsImZ1bGxOYW1lIiwic3BsaXQiLCJzaG93QWNjb3VudEhhbmRsZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQUEsa0JBQ2tCQyxzREFBUSxDQUFDLEtBQUQsQ0FEMUI7QUFBQSxNQUNiQyxXQURhO0FBQUEsTUFDQUMsY0FEQTs7QUFFcEIsTUFBTUMsS0FBSyxHQUFHQyxtRUFBUSxHQUFHLENBQUgsQ0FBdEI7QUFGb0Isb0JBR0tELEtBQUssQ0FBQ0UsSUFIWDtBQUFBLE1BR1pDLE1BSFksZUFHWkEsTUFIWTtBQUFBLE1BR0pDLElBSEksZUFHSkEsSUFISTtBQUtwQixNQUFNQyxXQUFXLEdBQUdGLE1BQU0sR0FDeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFRQyxJQUFJLENBQUNFLFFBQUwsQ0FBY0MsS0FBZCxDQUFvQixHQUFwQixFQUF5QixDQUF6QixDQUFSLE1BRHdCLEdBR3hCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBSEY7O0FBS0EsTUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixHQUFNO0FBQy9CVCxrQkFBYyxDQUFDLENBQUNELFdBQUYsQ0FBZDtBQUNELEdBRkQ7O0FBSUEsU0FDRTtBQUFBLHdDQUFlLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUEsd0NBQWMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxXQUFPLEVBQUVVLGtCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFDYTtBQUFLLE9BQUcsRUFBQyxrQkFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEYixDQURGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxPQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBQyxrQkFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERix5QkFERixDQURGLENBSkYsQ0FERixFQWFFLE1BQUMsaURBQUQ7QUFBVSxRQUFJLEVBQUVWLFdBQWhCO0FBQTZCLFdBQU8sRUFBRVUsa0JBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFiRixFQWNFLE1BQUMsMERBQUQ7QUFBUyxRQUFJLEVBQUVWLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWRGO0FBQUE7QUFBQTtBQUFBLDYzSUFERjtBQW9ERCxDQWxFRDs7R0FBTUYsTztVQUVVSywyRDs7O0FBaUVETCxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy43OGUyNzdkYzEzZWFkZjAwNjVlMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEJhY2tkcm9wIGZyb20gXCIuLi9CYWNrZHJvcFwiO1xyXG5pbXBvcnQgQWNjb3VudCBmcm9tIFwiLi4vLi4vY29udGFpbmVyL0FjY291bnRcIjtcclxuaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tIFwiLi4vLi4vaG9va3Mvc3RvcmUvc3RvcmVcIjtcclxuXHJcbmNvbnN0IGhlYWRUb3AgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Nob3dBY2NvdW50LCBzZXRTaG93QWNjb3VudF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgc3RhdGUgPSB1c2VTdG9yZSgpWzBdO1xyXG4gIGNvbnN0IHsgaXNBdXRoLCBkYXRhIH0gPSBzdGF0ZS5hdXRoO1xyXG5cclxuICBjb25zdCBsb2dpblN0YXR1cyA9IGlzQXV0aCA/IChcclxuICAgIDxzcGFuPiB7ZGF0YS5mdWxsTmFtZS5zcGxpdChcIiBcIilbMF19IDwvc3Bhbj5cclxuICApIDogKFxyXG4gICAgPHNwYW4+U2lnbiBpbiAvIFJlZ2lzdGVyPC9zcGFuPlxyXG4gICk7XHJcbiAgY29uc3Qgc2hvd0FjY291bnRIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgc2V0U2hvd0FjY291bnQoIXNob3dBY2NvdW50KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItdG9wXCI+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJsaW5rc1wiPlxyXG4gICAgICAgIDxsaSBvbkNsaWNrPXtzaG93QWNjb3VudEhhbmRsZXJ9PlxyXG4gICAgICAgICAgTXkgQWNjb3VudCA8aW1nIHNyYz1cIi9pbWFnZXMvdXNlci5zdmdcIiAvPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9jYXJ0XCI+XHJcbiAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9jYXJ0LnN2Z1wiIC8+IE15IFNob3BwaW5nIEJhZyAoMClcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDxCYWNrZHJvcCBzaG93PXtzaG93QWNjb3VudH0gY2xpY2tlZD17c2hvd0FjY291bnRIYW5kbGVyfSAvPlxyXG4gICAgICA8QWNjb3VudCBzaG93PXtzaG93QWNjb3VudH0gLz5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuaGVhZGVyLXRvcCB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDBweCAyMHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjcyYjtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5saW5rcyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxpbmtzIGxpIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgcGFkZGluZzogMHB4IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxpbmtzIGxpIGEge1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5saW5rcyBsaSBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDE0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBoZWFkVG9wO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9