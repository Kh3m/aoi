webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/Navigations/DropBox.js":
/*!*******************************************!*\
  !*** ./components/Navigations/DropBox.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Category */ "./components/Navigations/Category.js");


var _this = undefined,
    _jsxFileName = "D:\\Projects\\Github Projects\\aoi\\client\\components\\Navigations\\DropBox.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var dropBox = function dropBox(props) {
  var lists = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(props.list); // Checking to see if the list has morethan 1 colums


  var columnCategory = false;
  if (lists.length === 1) columnCategory = true;
  var classList = ["drop-box"];

  if (props.show) {
    classList.push("show");
  } else {
    classList.push("hidden");
  }

  return __jsx("div", {
    className: "jsx-1365826475" + " " + (classList.join(" ") || ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx("ul", {
    className: "jsx-1365826475" + " " + "nav-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, lists.map(function (list, index) {
    return __jsx("li", {
      className: "jsx-1365826475",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }
    }, __jsx("a", {
      href: "#",
      className: "jsx-1365826475",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }
    }, list));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1365826475",
    __self: _this
  }, ".drop-box.jsx-1365826475{width:100%;padding:50px;background-color:#eee;position:absolute;top:115px;left:0px;z-index:5;background-color:#fff;}.show.jsx-1365826475{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:300px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.hidden.jsx-1365826475{display:none;}.nav-wrapper.jsx-1365826475{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-width:50%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;height:100%;padding:2px;}.nav-wrapper.jsx-1365826475 li.jsx-1365826475{padding:5px 20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0c1xcR2l0aHViIFByb2plY3RzXFxhb2lcXGNsaWVudFxcY29tcG9uZW50c1xcTmF2aWdhdGlvbnNcXERyb3BCb3guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEJrQixBQUdzQixBQVdFLEFBTUEsQUFJQSxBQVFJLFdBNUJKLEVBaUJmLElBWUEsT0E1QndCLHNCQUNKLGtCQUNSLFVBQ0QsQUFPSSxBQVVDLFNBaEJKLElBT2EsQ0FVRCxLQWhCQSxzQkFFeEIsbURBZWlCLG9CQVZqQixxQ0FXYyxZQUNBLFlBQ2QiLCJmaWxlIjoiRDpcXFByb2plY3RzXFxHaXRodWIgUHJvamVjdHNcXGFvaVxcY2xpZW50XFxjb21wb25lbnRzXFxOYXZpZ2F0aW9uc1xcRHJvcEJveC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENhdGVnb3J5IGZyb20gXCIuL0NhdGVnb3J5XCI7XHJcblxyXG5jb25zdCBkcm9wQm94ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgbGlzdHMgPSBbLi4ucHJvcHMubGlzdF07XHJcbiAgLy8gQ2hlY2tpbmcgdG8gc2VlIGlmIHRoZSBsaXN0IGhhcyBtb3JldGhhbiAxIGNvbHVtc1xyXG4gIGxldCBjb2x1bW5DYXRlZ29yeSA9IGZhbHNlO1xyXG4gIGlmIChsaXN0cy5sZW5ndGggPT09IDEpIGNvbHVtbkNhdGVnb3J5ID0gdHJ1ZTtcclxuXHJcbiAgbGV0IGNsYXNzTGlzdCA9IFtcImRyb3AtYm94XCJdO1xyXG5cclxuICBpZiAocHJvcHMuc2hvdykge1xyXG4gICAgY2xhc3NMaXN0LnB1c2goXCJzaG93XCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjbGFzc0xpc3QucHVzaChcImhpZGRlblwiKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc0xpc3Quam9pbihcIiBcIil9PlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwibmF2LXdyYXBwZXJcIj5cclxuICAgICAgICB7bGlzdHMubWFwKChsaXN0LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPntsaXN0fTwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmRyb3AtYm94IHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgcGFkZGluZzogNTBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDExNXB4O1xyXG4gICAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgICAgei1pbmRleDogNTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAvLyBib3gtc2hhZG93OiAwcHggMHB4IDVweCAjNTc1NzU3O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2hvdyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmhpZGRlbiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm5hdi13cmFwcGVyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBtaW4td2lkdGg6IDUwJTtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5uYXYtd3JhcHBlciBsaSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiA1cHggMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkcm9wQm94O1xyXG4iXX0= */\n/*@ sourceURL=D:\\\\Projects\\\\Github Projects\\\\aoi\\\\client\\\\components\\\\Navigations\\\\DropBox.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (dropBox);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdmlnYXRpb25zL0Ryb3BCb3guanMiXSwibmFtZXMiOlsiZHJvcEJveCIsInByb3BzIiwibGlzdHMiLCJsaXN0IiwiY29sdW1uQ2F0ZWdvcnkiLCJsZW5ndGgiLCJjbGFzc0xpc3QiLCJzaG93IiwicHVzaCIsImpvaW4iLCJtYXAiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQVc7QUFDekIsTUFBTUMsS0FBSyxHQUFHLDZGQUFJRCxLQUFLLENBQUNFLElBQWIsQ0FBWCxDQUR5QixDQUV6Qjs7O0FBQ0EsTUFBSUMsY0FBYyxHQUFHLEtBQXJCO0FBQ0EsTUFBSUYsS0FBSyxDQUFDRyxNQUFOLEtBQWlCLENBQXJCLEVBQXdCRCxjQUFjLEdBQUcsSUFBakI7QUFFeEIsTUFBSUUsU0FBUyxHQUFHLENBQUMsVUFBRCxDQUFoQjs7QUFFQSxNQUFJTCxLQUFLLENBQUNNLElBQVYsRUFBZ0I7QUFDZEQsYUFBUyxDQUFDRSxJQUFWLENBQWUsTUFBZjtBQUNELEdBRkQsTUFFTztBQUNMRixhQUFTLENBQUNFLElBQVYsQ0FBZSxRQUFmO0FBQ0Q7O0FBQ0QsU0FDRTtBQUFBLHlDQUFnQkYsU0FBUyxDQUFDRyxJQUFWLENBQWUsR0FBZixDQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQSx3Q0FBYyxhQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1AsS0FBSyxDQUFDUSxHQUFOLENBQVUsVUFBQ1AsSUFBRCxFQUFPUSxLQUFQO0FBQUEsV0FDVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFHLFVBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFhUixJQUFiLENBREYsQ0FEUztBQUFBLEdBQVYsQ0FESCxDQURGO0FBQUE7QUFBQTtBQUFBLG8vR0FERjtBQThDRCxDQTNERDs7QUE2RGVILHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLjc1MTY4YTEyYTliOTU0ZWI0YzU4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDYXRlZ29yeSBmcm9tIFwiLi9DYXRlZ29yeVwiO1xyXG5cclxuY29uc3QgZHJvcEJveCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IGxpc3RzID0gWy4uLnByb3BzLmxpc3RdO1xyXG4gIC8vIENoZWNraW5nIHRvIHNlZSBpZiB0aGUgbGlzdCBoYXMgbW9yZXRoYW4gMSBjb2x1bXNcclxuICBsZXQgY29sdW1uQ2F0ZWdvcnkgPSBmYWxzZTtcclxuICBpZiAobGlzdHMubGVuZ3RoID09PSAxKSBjb2x1bW5DYXRlZ29yeSA9IHRydWU7XHJcblxyXG4gIGxldCBjbGFzc0xpc3QgPSBbXCJkcm9wLWJveFwiXTtcclxuXHJcbiAgaWYgKHByb3BzLnNob3cpIHtcclxuICAgIGNsYXNzTGlzdC5wdXNoKFwic2hvd1wiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY2xhc3NMaXN0LnB1c2goXCJoaWRkZW5cIik7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NMaXN0LmpvaW4oXCIgXCIpfT5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdi13cmFwcGVyXCI+XHJcbiAgICAgICAge2xpc3RzLm1hcCgobGlzdCwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj57bGlzdH08L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5kcm9wLWJveCB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIHBhZGRpbmc6IDUwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAxMTVweDtcclxuICAgICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICAgIHotaW5kZXg6IDU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgLy8gYm94LXNoYWRvdzogMHB4IDBweCA1cHggIzU3NTc1NztcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNob3cge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5oaWRkZW4ge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5uYXYtd3JhcHBlciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgbWluLXdpZHRoOiA1MCU7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgcGFkZGluZzogMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubmF2LXdyYXBwZXIgbGkge1xyXG4gICAgICAgICAgcGFkZGluZzogNXB4IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZHJvcEJveDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==