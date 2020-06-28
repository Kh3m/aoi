webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Dashboard/Contents/Contents.js":
/*!***************************************************!*\
  !*** ./components/Dashboard/Contents/Contents.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Contents_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Contents.module.css */ "./components/Dashboard/Contents/Contents.module.css");
/* harmony import */ var _Contents_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Contents_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DashCards_Overviews_Overviews__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DashCards/Overviews/Overviews */ "./components/Dashboard/DashCards/Overviews/Overviews.js");
/* harmony import */ var _ProductForm_ProductForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProductForm/ProductForm */ "./components/Dashboard/Contents/ProductForm/ProductForm.js");
/* harmony import */ var _CarouselForm_CarouselForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CarouselForm/CarouselForm */ "./components/Dashboard/Contents/CarouselForm/CarouselForm.js");
var _this = undefined,
    _jsxFileName = "D:\\Projects\\Github Projects\\aoi\\dashboard\\components\\Dashboard\\Contents\\Contents.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var contents = function contents(props) {
  var content = null;

  switch (props.type) {
    case "addProduct":
      content = __jsx(_ProductForm_ProductForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "Add Product",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 17
        }
      });
      break;

    case "updateProduct":
      content = __jsx(_ProductForm_ProductForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "Update Product",
        update: true,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 17
        }
      });
      break;

    case "carousel":
      content = __jsx(_CarouselForm_CarouselForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 17
        }
      });
      break;

    default:
      content = null;
  }

  return __jsx("div", {
    className: _Contents_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Contents,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _Contents_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.SideBarReplace,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, "Copyright \xA9 austinExpress.com")), __jsx("div", {
    className: _Contents_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.MainContents,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, content));
};

/* harmony default export */ __webpack_exports__["default"] = (contents);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rhc2hib2FyZC9Db250ZW50cy9Db250ZW50cy5qcyJdLCJuYW1lcyI6WyJjb250ZW50cyIsInByb3BzIiwiY29udGVudCIsInR5cGUiLCJjbGFzc2VzIiwiQ29udGVudHMiLCJTaWRlQmFyUmVwbGFjZSIsIk1haW5Db250ZW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFXO0FBQzFCLE1BQUlDLE9BQU8sR0FBRyxJQUFkOztBQUNBLFVBQVFELEtBQUssQ0FBQ0UsSUFBZDtBQUNFLFNBQUssWUFBTDtBQUNFRCxhQUFPLEdBQUcsTUFBQyxnRUFBRDtBQUFhLGFBQUssRUFBQyxhQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQVY7QUFDQTs7QUFFRixTQUFLLGVBQUw7QUFDRUEsYUFBTyxHQUFHLE1BQUMsZ0VBQUQ7QUFBYSxhQUFLLEVBQUMsZ0JBQW5CO0FBQW9DLGNBQU0sTUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFWO0FBQ0E7O0FBRUYsU0FBSyxVQUFMO0FBQ0VBLGFBQU8sR0FBRyxNQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBVjtBQUNBOztBQUVGO0FBQ0VBLGFBQU8sR0FBRyxJQUFWO0FBZEo7O0FBZ0JBLFNBQ0U7QUFBSyxhQUFTLEVBQUVFLDJEQUFPLENBQUNDLFFBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUQsMkRBQU8sQ0FBQ0UsY0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0NBREYsQ0FERixFQUlFO0FBQUssYUFBUyxFQUFFRiwyREFBTyxDQUFDRyxZQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0dMLE9BSEgsQ0FKRixDQURGO0FBWUQsQ0E5QkQ7O0FBZ0NlRix1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuZTIzMjYwODUxMTE0ODk1NzhmYjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL0NvbnRlbnRzLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IE92ZXJ2aWV3cyBmcm9tIFwiLi4vRGFzaENhcmRzL092ZXJ2aWV3cy9PdmVydmlld3NcIjtcclxuaW1wb3J0IFByb2R1Y3RGb3JtIGZyb20gXCIuL1Byb2R1Y3RGb3JtL1Byb2R1Y3RGb3JtXCI7XHJcbmltcG9ydCBDYXJvdXNlbEZvcm0gZnJvbSBcIi4vQ2Fyb3VzZWxGb3JtL0Nhcm91c2VsRm9ybVwiO1xyXG5cclxuY29uc3QgY29udGVudHMgPSAocHJvcHMpID0+IHtcclxuICBsZXQgY29udGVudCA9IG51bGw7XHJcbiAgc3dpdGNoIChwcm9wcy50eXBlKSB7XHJcbiAgICBjYXNlIFwiYWRkUHJvZHVjdFwiOlxyXG4gICAgICBjb250ZW50ID0gPFByb2R1Y3RGb3JtIHRpdGxlPVwiQWRkIFByb2R1Y3RcIiAvPjtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSBcInVwZGF0ZVByb2R1Y3RcIjpcclxuICAgICAgY29udGVudCA9IDxQcm9kdWN0Rm9ybSB0aXRsZT1cIlVwZGF0ZSBQcm9kdWN0XCIgdXBkYXRlIC8+O1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlIFwiY2Fyb3VzZWxcIjpcclxuICAgICAgY29udGVudCA9IDxDYXJvdXNlbEZvcm0gLz47XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGNvbnRlbnQgPSBudWxsO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuQ29udGVudHN9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5TaWRlQmFyUmVwbGFjZX0+XHJcbiAgICAgICAgPGZvb3Rlcj5Db3B5cmlnaHQgJmNvcHk7IGF1c3RpbkV4cHJlc3MuY29tPC9mb290ZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5NYWluQ29udGVudHN9PlxyXG4gICAgICAgIHsvKiA8T3ZlcnZpZXdzIC8+ICovfVxyXG5cclxuICAgICAgICB7Y29udGVudH1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29udGVudHM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=