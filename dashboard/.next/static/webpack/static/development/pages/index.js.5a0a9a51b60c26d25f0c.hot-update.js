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

  switch (props.inputtype) {
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
          lineNumber: 39,
          columnNumber: 9
        }
      }));
  }

  return __jsx("div", {
    className: _Input_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.Input,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, __jsx("label", {
    className: _Input_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.Label,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL0lucHV0L0lucHV0LmpzIl0sIm5hbWVzIjpbImlucHV0IiwicHJvcHMiLCJpbnB1dEVsZW1lbnQiLCJpbnB1dHR5cGUiLCJjbGFzc2VzIiwiSW5wdXRFbGVtZW50IiwiZWxlbWVudENvbmZpZyIsInZhbHVlIiwiSW5wdXQiLCJMYWJlbCIsImxhYmVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxLQUFELEVBQVc7QUFDdkIsTUFBSUMsWUFBWSxHQUFHLElBQW5COztBQUVBLFVBQVFELEtBQUssQ0FBQ0UsU0FBZDtBQUNFLFNBQUssT0FBTDtBQUNFRCxrQkFBWSxHQUNWO0FBQ0UsaUJBQVMsRUFBRUUsd0RBQU8sQ0FBQ0M7QUFEckIsU0FFTUosS0FBSyxDQUFDSyxhQUZaO0FBR0UsYUFBSyxFQUFFTCxLQUFLLENBQUNNLEtBSGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGO0FBT0E7O0FBQ0YsU0FBSyxVQUFMO0FBQ0VMLGtCQUFZLEdBQ1Y7QUFDRSxpQkFBUyxFQUFFRSx3REFBTyxDQUFDQztBQURyQixTQUVNSixLQUFLLENBQUNLLGFBRlo7QUFHRSxhQUFLLEVBQUVMLEtBQUssQ0FBQ00sS0FIZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFPQTs7QUFDRixTQUFLLFFBQUw7QUFDRUwsa0JBQVksR0FDVjtBQUNFLGlCQUFTLEVBQUVFLHdEQUFPLENBQUNDO0FBRHJCLFNBRU1KLEtBQUssQ0FBQ0ssYUFGWjtBQUdFLGFBQUssRUFBRUwsS0FBSyxDQUFDTSxLQUhmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQU9BOztBQUVGO0FBQ0VMLGtCQUFZLEdBQ1Y7QUFDRSxpQkFBUyxFQUFFRSx3REFBTyxDQUFDQztBQURyQixTQUVNSixLQUFLLENBQUNLLGFBRlo7QUFHRSxhQUFLLEVBQUVMLEtBQUssQ0FBQ00sS0FIZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUE5Qko7O0FBc0NBLFNBQ0U7QUFBSyxhQUFTLEVBQUVILHdEQUFPLENBQUNJLEtBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFPLGFBQVMsRUFBRUosd0RBQU8sQ0FBQ0ssS0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFrQ1IsS0FBSyxDQUFDUyxLQUF4QyxDQURGLEVBRUdSLFlBRkgsQ0FERjtBQU1ELENBL0NEOztBQWlEZUYsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjVhMGE5YTUxYjYwYzI2ZDI1ZjBjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9JbnB1dC5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBpbnB1dCA9IChwcm9wcykgPT4ge1xyXG4gIGxldCBpbnB1dEVsZW1lbnQgPSBudWxsO1xyXG5cclxuICBzd2l0Y2ggKHByb3BzLmlucHV0dHlwZSkge1xyXG4gICAgY2FzZSBcImlucHV0XCI6XHJcbiAgICAgIGlucHV0RWxlbWVudCA9IChcclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5JbnB1dEVsZW1lbnR9XHJcbiAgICAgICAgICB7Li4ucHJvcHMuZWxlbWVudENvbmZpZ31cclxuICAgICAgICAgIHZhbHVlPXtwcm9wcy52YWx1ZX1cclxuICAgICAgICAvPlxyXG4gICAgICApO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJ0ZXh0YXJlYVwiOlxyXG4gICAgICBpbnB1dEVsZW1lbnQgPSAoXHJcbiAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuSW5wdXRFbGVtZW50fVxyXG4gICAgICAgICAgey4uLnByb3BzLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICB2YWx1ZT17cHJvcHMudmFsdWV9XHJcbiAgICAgICAgLz5cclxuICAgICAgKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwic2VsZWN0XCI6XHJcbiAgICAgIGlucHV0RWxlbWVudCA9IChcclxuICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuSW5wdXRFbGVtZW50fVxyXG4gICAgICAgICAgey4uLnByb3BzLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICB2YWx1ZT17cHJvcHMudmFsdWV9XHJcbiAgICAgICAgPjwvc2VsZWN0PlxyXG4gICAgICApO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICBpbnB1dEVsZW1lbnQgPSAoXHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuSW5wdXRFbGVtZW50fVxyXG4gICAgICAgICAgey4uLnByb3BzLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICB2YWx1ZT17cHJvcHMudmFsdWV9XHJcbiAgICAgICAgLz5cclxuICAgICAgKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLklucHV0fT5cclxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT17Y2xhc3Nlcy5MYWJlbH0+e3Byb3BzLmxhYmVsfTwvbGFiZWw+XHJcbiAgICAgIHtpbnB1dEVsZW1lbnR9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5wdXQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=