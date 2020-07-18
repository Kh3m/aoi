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
    className: "jsx-1191666436" + " " + "header-top",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx("ul", {
    className: "jsx-1191666436" + " " + "links",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx("li", {
    onClick: showAccountHandler,
    className: "jsx-1191666436",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, "My Account ", __jsx("img", {
    src: "/images/user.svg",
    className: "jsx-1191666436",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 22
    }
  })), __jsx("li", {
    className: "jsx-1191666436",
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
    className: "jsx-1191666436",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, "My Shopping Bag (0) ", __jsx("img", {
    src: "/images/cart.svg",
    className: "jsx-1191666436",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 35
    }
  }))))), __jsx(_Backdrop__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
    id: "1191666436",
    __self: _this
  }, ".header-top.jsx-1191666436{width:100%;height:40px;padding:0px 20px;background-color:#24272b;color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:14px;}.links.jsx-1191666436{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.links.jsx-1191666436 li.jsx-1191666436{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;padding:0px 5px;}.links.jsx-1191666436 li.jsx-1191666436 a.jsx-1191666436{color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-width:250px;}.links.jsx-1191666436 li.jsx-1191666436 img.jsx-1191666436{width:14px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0c1xcR2l0aHViIFByb2plY3RzXFxhb2lcXGNsaWVudFxcY29tcG9uZW50c1xcSGVhZGVyXFxIZWFkVG9wLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFDa0IsQUFHc0IsQUFZRSxBQUlBLEFBTUQsQUFLRCxXQTFCQyxBQTJCZCxDQUxlLFdBckJJLGlCQUNRLHlCQUNiLFNBU2QsQUFJcUIsR0FaTixTQW1CRyxnQkFDbEIsaURBbkIyQixnQkFZVixlQUNDLGdCQUNsQixrREFicUIsNkZBQ0osZUFDakIiLCJmaWxlIjoiRDpcXFByb2plY3RzXFxHaXRodWIgUHJvamVjdHNcXGFvaVxcY2xpZW50XFxjb21wb25lbnRzXFxIZWFkZXJcXEhlYWRUb3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgQmFja2Ryb3AgZnJvbSBcIi4uL0JhY2tkcm9wXCI7XHJcbmltcG9ydCBBY2NvdW50IGZyb20gXCIuLi8uLi9jb250YWluZXIvQWNjb3VudFwiO1xyXG5pbXBvcnQgeyB1c2VTdG9yZSB9IGZyb20gXCIuLi8uLi9ob29rcy9zdG9yZS9zdG9yZVwiO1xyXG5cclxuY29uc3QgaGVhZFRvcCA9ICgpID0+IHtcclxuICBjb25zdCBbc2hvd0FjY291bnQsIHNldFNob3dBY2NvdW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBzdGF0ZSA9IHVzZVN0b3JlKClbMF07XHJcbiAgY29uc3QgeyBpc0F1dGgsIGRhdGEgfSA9IHN0YXRlLmF1dGg7XHJcblxyXG4gIGNvbnN0IGxvZ2luU3RhdHVzID0gaXNBdXRoID8gKFxyXG4gICAgPHNwYW4+IHtkYXRhLmZ1bGxOYW1lLnNwbGl0KFwiIFwiKVswXX0gPC9zcGFuPlxyXG4gICkgOiAoXHJcbiAgICA8c3Bhbj5TaWduIGluIC8gUmVnaXN0ZXI8L3NwYW4+XHJcbiAgKTtcclxuICBjb25zdCBzaG93QWNjb3VudEhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRTaG93QWNjb3VudCghc2hvd0FjY291bnQpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci10b3BcIj5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cImxpbmtzXCI+XHJcbiAgICAgICAgPGxpIG9uQ2xpY2s9e3Nob3dBY2NvdW50SGFuZGxlcn0+XHJcbiAgICAgICAgICBNeSBBY2NvdW50IDxpbWcgc3JjPVwiL2ltYWdlcy91c2VyLnN2Z1wiIC8+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2NhcnRcIj5cclxuICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgTXkgU2hvcHBpbmcgQmFnICgwKSA8aW1nIHNyYz1cIi9pbWFnZXMvY2FydC5zdmdcIiAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgPC91bD5cclxuICAgICAgPEJhY2tkcm9wIHNob3c9e3Nob3dBY2NvdW50fSBjbGlja2VkPXtzaG93QWNjb3VudEhhbmRsZXJ9IC8+XHJcbiAgICAgIDxBY2NvdW50IHNob3c9e3Nob3dBY2NvdW50fSAvPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5oZWFkZXItdG9wIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMHB4IDIwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNzJiO1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxpbmtzIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubGlua3MgbGkge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwcHggNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGlua3MgbGkgYSB7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgbWluLXdpZHRoOiAyNTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxpbmtzIGxpIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMTRweDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGhlYWRUb3A7XHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\Projects\\\\Github Projects\\\\aoi\\\\client\\\\components\\\\Header\\\\HeadTop.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci9IZWFkVG9wLmpzIl0sIm5hbWVzIjpbImhlYWRUb3AiLCJ1c2VTdGF0ZSIsInNob3dBY2NvdW50Iiwic2V0U2hvd0FjY291bnQiLCJzdGF0ZSIsInVzZVN0b3JlIiwiYXV0aCIsImlzQXV0aCIsImRhdGEiLCJsb2dpblN0YXR1cyIsImZ1bGxOYW1lIiwic3BsaXQiLCJzaG93QWNjb3VudEhhbmRsZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQUEsa0JBQ2tCQyxzREFBUSxDQUFDLEtBQUQsQ0FEMUI7QUFBQSxNQUNiQyxXQURhO0FBQUEsTUFDQUMsY0FEQTs7QUFFcEIsTUFBTUMsS0FBSyxHQUFHQyxtRUFBUSxHQUFHLENBQUgsQ0FBdEI7QUFGb0Isb0JBR0tELEtBQUssQ0FBQ0UsSUFIWDtBQUFBLE1BR1pDLE1BSFksZUFHWkEsTUFIWTtBQUFBLE1BR0pDLElBSEksZUFHSkEsSUFISTtBQUtwQixNQUFNQyxXQUFXLEdBQUdGLE1BQU0sR0FDeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFRQyxJQUFJLENBQUNFLFFBQUwsQ0FBY0MsS0FBZCxDQUFvQixHQUFwQixFQUF5QixDQUF6QixDQUFSLE1BRHdCLEdBR3hCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBSEY7O0FBS0EsTUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixHQUFNO0FBQy9CVCxrQkFBYyxDQUFDLENBQUNELFdBQUYsQ0FBZDtBQUNELEdBRkQ7O0FBSUEsU0FDRTtBQUFBLHdDQUFlLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUEsd0NBQWMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxXQUFPLEVBQUVVLGtCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFDYTtBQUFLLE9BQUcsRUFBQyxrQkFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEYixDQURGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxPQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBQ3NCO0FBQUssT0FBRyxFQUFDLGtCQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUR0QixDQURGLENBREYsQ0FKRixDQURGLEVBYUUsTUFBQyxpREFBRDtBQUFVLFFBQUksRUFBRVYsV0FBaEI7QUFBNkIsV0FBTyxFQUFFVSxrQkFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWJGLEVBY0UsTUFBQywwREFBRDtBQUFTLFFBQUksRUFBRVYsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZEY7QUFBQTtBQUFBO0FBQUEsNHRJQURGO0FBbURELENBakVEOztHQUFNRixPO1VBRVVLLDJEOzs7QUFnRURMLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLmI2Nzg5NjEyN2FhYTcyMjJjOTRmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgQmFja2Ryb3AgZnJvbSBcIi4uL0JhY2tkcm9wXCI7XHJcbmltcG9ydCBBY2NvdW50IGZyb20gXCIuLi8uLi9jb250YWluZXIvQWNjb3VudFwiO1xyXG5pbXBvcnQgeyB1c2VTdG9yZSB9IGZyb20gXCIuLi8uLi9ob29rcy9zdG9yZS9zdG9yZVwiO1xyXG5cclxuY29uc3QgaGVhZFRvcCA9ICgpID0+IHtcclxuICBjb25zdCBbc2hvd0FjY291bnQsIHNldFNob3dBY2NvdW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBzdGF0ZSA9IHVzZVN0b3JlKClbMF07XHJcbiAgY29uc3QgeyBpc0F1dGgsIGRhdGEgfSA9IHN0YXRlLmF1dGg7XHJcblxyXG4gIGNvbnN0IGxvZ2luU3RhdHVzID0gaXNBdXRoID8gKFxyXG4gICAgPHNwYW4+IHtkYXRhLmZ1bGxOYW1lLnNwbGl0KFwiIFwiKVswXX0gPC9zcGFuPlxyXG4gICkgOiAoXHJcbiAgICA8c3Bhbj5TaWduIGluIC8gUmVnaXN0ZXI8L3NwYW4+XHJcbiAgKTtcclxuICBjb25zdCBzaG93QWNjb3VudEhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRTaG93QWNjb3VudCghc2hvd0FjY291bnQpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci10b3BcIj5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cImxpbmtzXCI+XHJcbiAgICAgICAgPGxpIG9uQ2xpY2s9e3Nob3dBY2NvdW50SGFuZGxlcn0+XHJcbiAgICAgICAgICBNeSBBY2NvdW50IDxpbWcgc3JjPVwiL2ltYWdlcy91c2VyLnN2Z1wiIC8+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2NhcnRcIj5cclxuICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgTXkgU2hvcHBpbmcgQmFnICgwKSA8aW1nIHNyYz1cIi9pbWFnZXMvY2FydC5zdmdcIiAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgPC91bD5cclxuICAgICAgPEJhY2tkcm9wIHNob3c9e3Nob3dBY2NvdW50fSBjbGlja2VkPXtzaG93QWNjb3VudEhhbmRsZXJ9IC8+XHJcbiAgICAgIDxBY2NvdW50IHNob3c9e3Nob3dBY2NvdW50fSAvPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5oZWFkZXItdG9wIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMHB4IDIwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNzJiO1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxpbmtzIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubGlua3MgbGkge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwcHggNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGlua3MgbGkgYSB7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgbWluLXdpZHRoOiAyNTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxpbmtzIGxpIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMTRweDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGhlYWRUb3A7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=