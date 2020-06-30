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
  }, "Name:"), inputElement);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL0lucHV0L0lucHV0LmpzIl0sIm5hbWVzIjpbImlucHV0IiwicHJvcHMiLCJpbnB1dEVsZW1lbnQiLCJpbnB1dHR5cGUiLCJjbGFzc2VzIiwiSW5wdXRFbGVtZW50IiwiZWxlbWVudENvbmZpZyIsInZhbHVlIiwiSW5wdXQiLCJMYWJlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3ZCLE1BQUlDLFlBQVksR0FBRyxJQUFuQjs7QUFFQSxVQUFRRCxLQUFLLENBQUNFLFNBQWQ7QUFDRSxTQUFLLE9BQUw7QUFDRUQsa0JBQVksR0FDVjtBQUNFLGlCQUFTLEVBQUVFLHdEQUFPLENBQUNDO0FBRHJCLFNBRU1KLEtBQUssQ0FBQ0ssYUFGWjtBQUdFLGFBQUssRUFBRUwsS0FBSyxDQUFDTSxLQUhmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQU9BOztBQUNGLFNBQUssVUFBTDtBQUNFTCxrQkFBWSxHQUNWO0FBQ0UsaUJBQVMsRUFBRUUsd0RBQU8sQ0FBQ0M7QUFEckIsU0FFTUosS0FBSyxDQUFDSyxhQUZaO0FBR0UsYUFBSyxFQUFFTCxLQUFLLENBQUNNLEtBSGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGO0FBT0E7O0FBQ0YsU0FBSyxRQUFMO0FBQ0VMLGtCQUFZLEdBQ1Y7QUFDRSxpQkFBUyxFQUFFRSx3REFBTyxDQUFDQztBQURyQixTQUVNSixLQUFLLENBQUNLLGFBRlo7QUFHRSxhQUFLLEVBQUVMLEtBQUssQ0FBQ00sS0FIZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFPQTs7QUFFRjtBQUNFTCxrQkFBWSxHQUNWO0FBQ0UsaUJBQVMsRUFBRUUsd0RBQU8sQ0FBQ0M7QUFEckIsU0FFTUosS0FBSyxDQUFDSyxhQUZaO0FBR0UsYUFBSyxFQUFFTCxLQUFLLENBQUNNLEtBSGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGO0FBOUJKOztBQXNDQSxTQUNFO0FBQUssYUFBUyxFQUFFSCx3REFBTyxDQUFDSSxLQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTyxhQUFTLEVBQUVKLHdEQUFPLENBQUNLLEtBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUVHUCxZQUZILENBREY7QUFNRCxDQS9DRDs7QUFpRGVGLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5kYzNiOTBlODIxOWQ0YjliNmY0Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vSW5wdXQubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgaW5wdXQgPSAocHJvcHMpID0+IHtcclxuICBsZXQgaW5wdXRFbGVtZW50ID0gbnVsbDtcclxuXHJcbiAgc3dpdGNoIChwcm9wcy5pbnB1dHR5cGUpIHtcclxuICAgIGNhc2UgXCJpbnB1dFwiOlxyXG4gICAgICBpbnB1dEVsZW1lbnQgPSAoXHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuSW5wdXRFbGVtZW50fVxyXG4gICAgICAgICAgey4uLnByb3BzLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICB2YWx1ZT17cHJvcHMudmFsdWV9XHJcbiAgICAgICAgLz5cclxuICAgICAgKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwidGV4dGFyZWFcIjpcclxuICAgICAgaW5wdXRFbGVtZW50ID0gKFxyXG4gICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLklucHV0RWxlbWVudH1cclxuICAgICAgICAgIHsuLi5wcm9wcy5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgdmFsdWU9e3Byb3BzLnZhbHVlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcInNlbGVjdFwiOlxyXG4gICAgICBpbnB1dEVsZW1lbnQgPSAoXHJcbiAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLklucHV0RWxlbWVudH1cclxuICAgICAgICAgIHsuLi5wcm9wcy5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgdmFsdWU9e3Byb3BzLnZhbHVlfVxyXG4gICAgICAgID48L3NlbGVjdD5cclxuICAgICAgKTtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgaW5wdXRFbGVtZW50ID0gKFxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLklucHV0RWxlbWVudH1cclxuICAgICAgICAgIHsuLi5wcm9wcy5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgdmFsdWU9e3Byb3BzLnZhbHVlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5JbnB1dH0+XHJcbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2NsYXNzZXMuTGFiZWx9Pk5hbWU6PC9sYWJlbD5cclxuICAgICAge2lucHV0RWxlbWVudH1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbnB1dDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==