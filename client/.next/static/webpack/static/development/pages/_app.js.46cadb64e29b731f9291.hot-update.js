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
    }, __jsx(Link, {
      href: "/products",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }
    }, __jsx("a", {
      className: "jsx-1365826475",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 15
      }
    }, list)));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1365826475",
    __self: _this
  }, ".drop-box.jsx-1365826475{width:100%;padding:50px;background-color:#eee;position:absolute;top:115px;left:0px;z-index:5;background-color:#fff;}.show.jsx-1365826475{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:300px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.hidden.jsx-1365826475{display:none;}.nav-wrapper.jsx-1365826475{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-width:50%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;height:100%;padding:2px;}.nav-wrapper.jsx-1365826475 li.jsx-1365826475{padding:5px 20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0c1xcR2l0aHViIFByb2plY3RzXFxhb2lcXGNsaWVudFxcY29tcG9uZW50c1xcTmF2aWdhdGlvbnNcXERyb3BCb3guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEJrQixBQUdzQixBQVdFLEFBTUEsQUFJQSxBQVFJLFdBNUJKLEVBaUJmLElBWUEsT0E1QndCLHNCQUNKLGtCQUNSLFVBQ0QsQUFPSSxBQVVDLFNBaEJKLElBT2EsQ0FVRCxLQWhCQSxzQkFFeEIsbURBZWlCLG9CQVZqQixxQ0FXYyxZQUNBLFlBQ2QiLCJmaWxlIjoiRDpcXFByb2plY3RzXFxHaXRodWIgUHJvamVjdHNcXGFvaVxcY2xpZW50XFxjb21wb25lbnRzXFxOYXZpZ2F0aW9uc1xcRHJvcEJveC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENhdGVnb3J5IGZyb20gXCIuL0NhdGVnb3J5XCI7XHJcblxyXG5jb25zdCBkcm9wQm94ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgbGlzdHMgPSBbLi4ucHJvcHMubGlzdF07XHJcbiAgLy8gQ2hlY2tpbmcgdG8gc2VlIGlmIHRoZSBsaXN0IGhhcyBtb3JldGhhbiAxIGNvbHVtc1xyXG4gIGxldCBjb2x1bW5DYXRlZ29yeSA9IGZhbHNlO1xyXG4gIGlmIChsaXN0cy5sZW5ndGggPT09IDEpIGNvbHVtbkNhdGVnb3J5ID0gdHJ1ZTtcclxuXHJcbiAgbGV0IGNsYXNzTGlzdCA9IFtcImRyb3AtYm94XCJdO1xyXG5cclxuICBpZiAocHJvcHMuc2hvdykge1xyXG4gICAgY2xhc3NMaXN0LnB1c2goXCJzaG93XCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjbGFzc0xpc3QucHVzaChcImhpZGRlblwiKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc0xpc3Quam9pbihcIiBcIil9PlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwibmF2LXdyYXBwZXJcIj5cclxuICAgICAgICB7bGlzdHMubWFwKChsaXN0LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtcIi9wcm9kdWN0c1wifT5cclxuICAgICAgICAgICAgICA8YT57bGlzdH08L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmRyb3AtYm94IHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgcGFkZGluZzogNTBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDExNXB4O1xyXG4gICAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgICAgei1pbmRleDogNTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAvLyBib3gtc2hhZG93OiAwcHggMHB4IDVweCAjNTc1NzU3O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2hvdyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmhpZGRlbiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm5hdi13cmFwcGVyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBtaW4td2lkdGg6IDUwJTtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5uYXYtd3JhcHBlciBsaSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiA1cHggMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkcm9wQm94O1xyXG4iXX0= */\n/*@ sourceURL=D:\\\\Projects\\\\Github Projects\\\\aoi\\\\client\\\\components\\\\Navigations\\\\DropBox.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdmlnYXRpb25zL0Ryb3BCb3guanMiXSwibmFtZXMiOlsiZHJvcEJveCIsInByb3BzIiwibGlzdHMiLCJsaXN0IiwiY29sdW1uQ2F0ZWdvcnkiLCJsZW5ndGgiLCJjbGFzc0xpc3QiLCJzaG93IiwicHVzaCIsImpvaW4iLCJtYXAiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQVc7QUFDekIsTUFBTUMsS0FBSyxHQUFHLDZGQUFJRCxLQUFLLENBQUNFLElBQWIsQ0FBWCxDQUR5QixDQUV6Qjs7O0FBQ0EsTUFBSUMsY0FBYyxHQUFHLEtBQXJCO0FBQ0EsTUFBSUYsS0FBSyxDQUFDRyxNQUFOLEtBQWlCLENBQXJCLEVBQXdCRCxjQUFjLEdBQUcsSUFBakI7QUFFeEIsTUFBSUUsU0FBUyxHQUFHLENBQUMsVUFBRCxDQUFoQjs7QUFFQSxNQUFJTCxLQUFLLENBQUNNLElBQVYsRUFBZ0I7QUFDZEQsYUFBUyxDQUFDRSxJQUFWLENBQWUsTUFBZjtBQUNELEdBRkQsTUFFTztBQUNMRixhQUFTLENBQUNFLElBQVYsQ0FBZSxRQUFmO0FBQ0Q7O0FBQ0QsU0FDRTtBQUFBLHlDQUFnQkYsU0FBUyxDQUFDRyxJQUFWLENBQWUsR0FBZixDQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQSx3Q0FBYyxhQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1AsS0FBSyxDQUFDUSxHQUFOLENBQVUsVUFBQ1AsSUFBRCxFQUFPUSxLQUFQO0FBQUEsV0FDVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLElBQUQ7QUFBTSxVQUFJLEVBQUUsV0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUlSLElBQUosQ0FERixDQURGLENBRFM7QUFBQSxHQUFWLENBREgsQ0FERjtBQUFBO0FBQUE7QUFBQSxna0hBREY7QUFnREQsQ0E3REQ7O0FBK0RlSCxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy40NmNhZGI2NGUyOWI3MzFmOTI5MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2F0ZWdvcnkgZnJvbSBcIi4vQ2F0ZWdvcnlcIjtcclxuXHJcbmNvbnN0IGRyb3BCb3ggPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBsaXN0cyA9IFsuLi5wcm9wcy5saXN0XTtcclxuICAvLyBDaGVja2luZyB0byBzZWUgaWYgdGhlIGxpc3QgaGFzIG1vcmV0aGFuIDEgY29sdW1zXHJcbiAgbGV0IGNvbHVtbkNhdGVnb3J5ID0gZmFsc2U7XHJcbiAgaWYgKGxpc3RzLmxlbmd0aCA9PT0gMSkgY29sdW1uQ2F0ZWdvcnkgPSB0cnVlO1xyXG5cclxuICBsZXQgY2xhc3NMaXN0ID0gW1wiZHJvcC1ib3hcIl07XHJcblxyXG4gIGlmIChwcm9wcy5zaG93KSB7XHJcbiAgICBjbGFzc0xpc3QucHVzaChcInNob3dcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNsYXNzTGlzdC5wdXNoKFwiaGlkZGVuXCIpO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTGlzdC5qb2luKFwiIFwiKX0+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYtd3JhcHBlclwiPlxyXG4gICAgICAgIHtsaXN0cy5tYXAoKGxpc3QsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL3Byb2R1Y3RzXCJ9PlxyXG4gICAgICAgICAgICAgIDxhPntsaXN0fTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuZHJvcC1ib3gge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBwYWRkaW5nOiA1MHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMTE1cHg7XHJcbiAgICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgICB6LWluZGV4OiA1O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgIC8vIGJveC1zaGFkb3c6IDBweCAwcHggNXB4ICM1NzU3NTc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zaG93IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaGlkZGVuIHtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubmF2LXdyYXBwZXIge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIG1pbi13aWR0aDogNTAlO1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5hdi13cmFwcGVyIGxpIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDVweCAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRyb3BCb3g7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=