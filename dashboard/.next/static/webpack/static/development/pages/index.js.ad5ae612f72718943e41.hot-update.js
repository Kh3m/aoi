webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/UI/Input/Input.js":
/*!**************************************!*\
  !*** ./components/UI/Input/Input.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Input_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Input.module.css */ "./components/UI/Input/Input.module.css");
/* harmony import */ var _Input_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Input_module_css__WEBPACK_IMPORTED_MODULE_2__);


var _this = undefined,
    _jsxFileName = "D:\\Projects\\Github Projects\\aoi\\dashboard\\components\\UI\\Input\\Input.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var input = function input(props) {
  var inputElement = null;

  switch (props.elementType) {
    case "input":
      inputElement = __jsx("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        className: _Input_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.InputElement
      }, props.elementConfig, {
        value: props.value,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 9
        }
      }));
      break;

    case "textarea":
      inputElement = __jsx("textarea", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        className: _Input_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.InputElement
      }, props.elementConfig, {
        value: props.value,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 9
        }
      }));
      break;

    case "select":
      inputElement = __jsx("select", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        className: _Input_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.InputElement
      }, props.elementConfig, {
        value: props.value,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 9
        }
      }), props.elementConfig.options.map(function (option, index) {
        return __jsx("option", {
          value: option.value,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }
        }, option.displayValue);
      }));
      break;

    default:
      inputElement = __jsx("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        className: _Input_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.InputElement
      }, props.elementConfig, {
        value: props.value,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 9
        }
      }));
  }

  return __jsx("div", {
    className: _Input_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.Input,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, __jsx("label", {
    className: _Input_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.Label,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, props.label), inputElement);
};

/* harmony default export */ __webpack_exports__["default"] = (input);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL0lucHV0L0lucHV0LmpzIl0sIm5hbWVzIjpbImlucHV0IiwicHJvcHMiLCJpbnB1dEVsZW1lbnQiLCJlbGVtZW50VHlwZSIsImNsYXNzZXMiLCJJbnB1dEVsZW1lbnQiLCJlbGVtZW50Q29uZmlnIiwidmFsdWUiLCJvcHRpb25zIiwibWFwIiwib3B0aW9uIiwiaW5kZXgiLCJkaXNwbGF5VmFsdWUiLCJJbnB1dCIsIkxhYmVsIiwibGFiZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEtBQUQsRUFBVztBQUN2QixNQUFJQyxZQUFZLEdBQUcsSUFBbkI7O0FBRUEsVUFBUUQsS0FBSyxDQUFDRSxXQUFkO0FBQ0UsU0FBSyxPQUFMO0FBQ0VELGtCQUFZLEdBQ1Y7QUFDRSxpQkFBUyxFQUFFRSx3REFBTyxDQUFDQztBQURyQixTQUVNSixLQUFLLENBQUNLLGFBRlo7QUFHRSxhQUFLLEVBQUVMLEtBQUssQ0FBQ00sS0FIZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFPQTs7QUFDRixTQUFLLFVBQUw7QUFDRUwsa0JBQVksR0FDVjtBQUNFLGlCQUFTLEVBQUVFLHdEQUFPLENBQUNDO0FBRHJCLFNBRU1KLEtBQUssQ0FBQ0ssYUFGWjtBQUdFLGFBQUssRUFBRUwsS0FBSyxDQUFDTSxLQUhmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQU9BOztBQUNGLFNBQUssUUFBTDtBQUNFTCxrQkFBWSxHQUNWO0FBQ0UsaUJBQVMsRUFBRUUsd0RBQU8sQ0FBQ0M7QUFEckIsU0FFTUosS0FBSyxDQUFDSyxhQUZaO0FBR0UsYUFBSyxFQUFFTCxLQUFLLENBQUNNLEtBSGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUtHTixLQUFLLENBQUNLLGFBQU4sQ0FBb0JFLE9BQXBCLENBQTRCQyxHQUE1QixDQUFnQyxVQUFDQyxNQUFELEVBQVNDLEtBQVQ7QUFBQSxlQUMvQjtBQUFRLGVBQUssRUFBRUQsTUFBTSxDQUFDSCxLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQThCRyxNQUFNLENBQUNFLFlBQXJDLENBRCtCO0FBQUEsT0FBaEMsQ0FMSCxDQURGO0FBV0E7O0FBRUY7QUFDRVYsa0JBQVksR0FDVjtBQUNFLGlCQUFTLEVBQUVFLHdEQUFPLENBQUNDO0FBRHJCLFNBRU1KLEtBQUssQ0FBQ0ssYUFGWjtBQUdFLGFBQUssRUFBRUwsS0FBSyxDQUFDTSxLQUhmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQWxDSjs7QUEwQ0EsU0FDRTtBQUFLLGFBQVMsRUFBRUgsd0RBQU8sQ0FBQ1MsS0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU8sYUFBUyxFQUFFVCx3REFBTyxDQUFDVSxLQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWtDYixLQUFLLENBQUNjLEtBQXhDLENBREYsRUFFR2IsWUFGSCxDQURGO0FBTUQsQ0FuREQ7O0FBcURlRixvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuYWQ1YWU2MTJmNzI3MTg5NDNlNDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL0lucHV0Lm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IGlucHV0ID0gKHByb3BzKSA9PiB7XHJcbiAgbGV0IGlucHV0RWxlbWVudCA9IG51bGw7XHJcblxyXG4gIHN3aXRjaCAocHJvcHMuZWxlbWVudFR5cGUpIHtcclxuICAgIGNhc2UgXCJpbnB1dFwiOlxyXG4gICAgICBpbnB1dEVsZW1lbnQgPSAoXHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuSW5wdXRFbGVtZW50fVxyXG4gICAgICAgICAgey4uLnByb3BzLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICB2YWx1ZT17cHJvcHMudmFsdWV9XHJcbiAgICAgICAgLz5cclxuICAgICAgKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwidGV4dGFyZWFcIjpcclxuICAgICAgaW5wdXRFbGVtZW50ID0gKFxyXG4gICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLklucHV0RWxlbWVudH1cclxuICAgICAgICAgIHsuLi5wcm9wcy5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgdmFsdWU9e3Byb3BzLnZhbHVlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcInNlbGVjdFwiOlxyXG4gICAgICBpbnB1dEVsZW1lbnQgPSAoXHJcbiAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLklucHV0RWxlbWVudH1cclxuICAgICAgICAgIHsuLi5wcm9wcy5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgdmFsdWU9e3Byb3BzLnZhbHVlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtwcm9wcy5lbGVtZW50Q29uZmlnLm9wdGlvbnMubWFwKChvcHRpb24sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e29wdGlvbi52YWx1ZX0+e29wdGlvbi5kaXNwbGF5VmFsdWV9PC9vcHRpb24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgKTtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgaW5wdXRFbGVtZW50ID0gKFxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLklucHV0RWxlbWVudH1cclxuICAgICAgICAgIHsuLi5wcm9wcy5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgdmFsdWU9e3Byb3BzLnZhbHVlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5JbnB1dH0+XHJcbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2NsYXNzZXMuTGFiZWx9Pntwcm9wcy5sYWJlbH08L2xhYmVsPlxyXG4gICAgICB7aW5wdXRFbGVtZW50fVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGlucHV0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9