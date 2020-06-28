webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Dashboard/Contents/CarouselForm/CarouselForm.js":
/*!********************************************************************!*\
  !*** ./components/Dashboard/Contents/CarouselForm/CarouselForm.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CarouselForm_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CarouselForm.module.css */ "./components/Dashboard/Contents/CarouselForm/CarouselForm.module.css");
/* harmony import */ var _CarouselForm_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_CarouselForm_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "D:\\Projects\\Github Projects\\aoi\\dashboard\\components\\Dashboard\\Contents\\CarouselForm\\CarouselForm.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var carouselForm = function carouselForm() {
  var carousels = [{
    image: "/images/heros/hero.jpg",
    title: "Just In: Clarks most trending shoes",
    body: "Get yours with just a few clicks"
  }, {
    image: "/images/heros/hero1.jpg",
    title: "Just In: Clarks most trending shoes",
    body: "Get yours with just a few clicks"
  }, {
    image: "/images/heros/hero2.jpg",
    title: "Just In: Clarks most trending shoes",
    body: "Get yours with just a few clicks"
  }, {
    image: "/images/heros/hero3.jpg",
    title: "Just In: Clarks most trending shoes",
    body: "Get yours with just a few clicks"
  }];
  return __jsx("div", {
    className: _CarouselForm_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.FormsWrapper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _CarouselForm_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Form,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, "Carousel Form"), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, carousels.map(function (carousel, index) {
    return __jsx("div", {
      className: _CarouselForm_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.display,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: carousel.image,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 15
      }
    }), " ", __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 44
      }
    }, carousel.title), " ", __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 15
      }
    }, carousel.body));
  })), __jsx("form", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, __jsx("input", {
    type: "text",
    placeholder: "Carousel Title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }), __jsx("input", {
    type: "text",
    placeholder: "Carousel Caption",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, __jsx("input", {
    type: "file",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  })), __jsx("input", {
    type: "submit",
    value: "Update Carousel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (carouselForm);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rhc2hib2FyZC9Db250ZW50cy9DYXJvdXNlbEZvcm0vQ2Fyb3VzZWxGb3JtLmpzIl0sIm5hbWVzIjpbImNhcm91c2VsRm9ybSIsImNhcm91c2VscyIsImltYWdlIiwidGl0bGUiLCJib2R5IiwiY2xhc3NlcyIsIkZvcm1zV3JhcHBlciIsIkZvcm0iLCJtYXAiLCJjYXJvdXNlbCIsImluZGV4IiwiZGlzcGxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7O0FBQ0EsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QixNQUFNQyxTQUFTLEdBQUcsQ0FDaEI7QUFDRUMsU0FBSyxFQUFFLHdCQURUO0FBRUVDLFNBQUssRUFBRSxxQ0FGVDtBQUdFQyxRQUFJLEVBQUU7QUFIUixHQURnQixFQU1oQjtBQUNFRixTQUFLLEVBQUUseUJBRFQ7QUFFRUMsU0FBSyxFQUFFLHFDQUZUO0FBR0VDLFFBQUksRUFBRTtBQUhSLEdBTmdCLEVBV2hCO0FBQ0VGLFNBQUssRUFBRSx5QkFEVDtBQUVFQyxTQUFLLEVBQUUscUNBRlQ7QUFHRUMsUUFBSSxFQUFFO0FBSFIsR0FYZ0IsRUFnQmhCO0FBQ0VGLFNBQUssRUFBRSx5QkFEVDtBQUVFQyxTQUFLLEVBQUUscUNBRlQ7QUFHRUMsUUFBSSxFQUFFO0FBSFIsR0FoQmdCLENBQWxCO0FBdUJBLFNBQ0U7QUFBSyxhQUFTLEVBQUVDLCtEQUFPLENBQUNDLFlBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUQsK0RBQU8sQ0FBQ0UsSUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dOLFNBQVMsQ0FBQ08sR0FBVixDQUFjLFVBQUNDLFFBQUQsRUFBV0MsS0FBWDtBQUFBLFdBQ2I7QUFBSyxlQUFTLEVBQUVMLCtEQUFPLENBQUNNLE9BQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLFNBQUcsRUFBRUYsUUFBUSxDQUFDUCxLQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsT0FDK0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJTyxRQUFRLENBQUNOLEtBQWIsQ0FEL0IsRUFDdUQsR0FEdkQsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUlNLFFBQVEsQ0FBQ0wsSUFBYixDQUZGLENBRGE7QUFBQSxHQUFkLENBREgsQ0FIRixFQVdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixlQUFXLEVBQUMsZ0JBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsZUFBVyxFQUFDLGtCQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FGRixFQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFPLFFBQUksRUFBQyxNQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVBGLEVBVUU7QUFBTyxRQUFJLEVBQUMsUUFBWjtBQUFxQixTQUFLLEVBQUMsaUJBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWRixDQVhGLENBREYsQ0FERjtBQTRCRCxDQXBERDs7QUFzRGVKLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4xMDdmZTkzNjZkZTY1MGVmMmM3YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vQ2Fyb3VzZWxGb3JtLm1vZHVsZS5jc3NcIjtcclxuY29uc3QgY2Fyb3VzZWxGb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNhcm91c2VscyA9IFtcclxuICAgIHtcclxuICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9oZXJvcy9oZXJvLmpwZ1wiLFxyXG4gICAgICB0aXRsZTogXCJKdXN0IEluOiBDbGFya3MgbW9zdCB0cmVuZGluZyBzaG9lc1wiLFxyXG4gICAgICBib2R5OiBcIkdldCB5b3VycyB3aXRoIGp1c3QgYSBmZXcgY2xpY2tzXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpbWFnZTogXCIvaW1hZ2VzL2hlcm9zL2hlcm8xLmpwZ1wiLFxyXG4gICAgICB0aXRsZTogXCJKdXN0IEluOiBDbGFya3MgbW9zdCB0cmVuZGluZyBzaG9lc1wiLFxyXG4gICAgICBib2R5OiBcIkdldCB5b3VycyB3aXRoIGp1c3QgYSBmZXcgY2xpY2tzXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpbWFnZTogXCIvaW1hZ2VzL2hlcm9zL2hlcm8yLmpwZ1wiLFxyXG4gICAgICB0aXRsZTogXCJKdXN0IEluOiBDbGFya3MgbW9zdCB0cmVuZGluZyBzaG9lc1wiLFxyXG4gICAgICBib2R5OiBcIkdldCB5b3VycyB3aXRoIGp1c3QgYSBmZXcgY2xpY2tzXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpbWFnZTogXCIvaW1hZ2VzL2hlcm9zL2hlcm8zLmpwZ1wiLFxyXG4gICAgICB0aXRsZTogXCJKdXN0IEluOiBDbGFya3MgbW9zdCB0cmVuZGluZyBzaG9lc1wiLFxyXG4gICAgICBib2R5OiBcIkdldCB5b3VycyB3aXRoIGp1c3QgYSBmZXcgY2xpY2tzXCIsXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5Gb3Jtc1dyYXBwZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5Gb3JtfT5cclxuICAgICAgICA8aDI+Q2Fyb3VzZWwgRm9ybTwvaDI+XHJcblxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICB7Y2Fyb3VzZWxzLm1hcCgoY2Fyb3VzZWwsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRpc3BsYXl9PlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtjYXJvdXNlbC5pbWFnZX0gLz4gPHA+e2Nhcm91c2VsLnRpdGxlfTwvcD57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPHA+e2Nhcm91c2VsLmJvZHl9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgey8qIHtwcm9wcy50eXBlID09IFwiVXBkYXRlIFByb2R1Y3RcIiA/IDx9ICovfVxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJDYXJvdXNlbCBUaXRsZVwiIC8+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQ2Fyb3VzZWwgQ2FwdGlvblwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiVXBkYXRlIENhcm91c2VsXCIgLz5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNhcm91c2VsRm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==