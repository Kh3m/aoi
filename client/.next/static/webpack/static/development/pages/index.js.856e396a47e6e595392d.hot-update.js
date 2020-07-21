webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/productsCard.js":
/*!************************************!*\
  !*** ./components/productsCard.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _productArticle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./productArticle */ "./components/productArticle.js");
var _this = undefined,
    _jsxFileName = "D:\\Projects\\Github Projects\\aoi\\client\\components\\productsCard.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var productsCard = function productsCard(props) {
  var _props$productsList = props.productsList,
      title = _props$productsList.title,
      products = _props$productsList.products;
  return __jsx("div", {
    className: "jsx-1796885153" + " " + "view-card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: "jsx-1796885153" + " " + ((props.type === "large" ? "centerTitle" : null) || ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, title), __jsx("div", {
    className: "jsx-1796885153" + " " + "products-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, products.map(function (product, index) {
    return __jsx(_productArticle__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: index,
      product: product,
      flexBasis: props.flexBasis,
      shadow: props.shadow,
      type: props.type,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 11
      }
    });
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1796885153",
    __self: _this
  }, "h2.jsx-1796885153{margin-bottom:20px;font-weight:bolder;font-size:30px;}.view-card.jsx-1796885153{width:100%;padding:0 3%;margin:50px auto 0px auto;}.products-wrapper.jsx-1796885153{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.centerTitle.jsx-1796885153{text-align:center;margin-bottom:0px;font-weight:500;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0c1xcR2l0aHViIFByb2plY3RzXFxhb2lcXGNsaWVudFxcY29tcG9uZW50c1xccHJvZHVjdHNDYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Ca0IsQUFHOEIsQUFLUixBQU1FLEFBS0ssV0FWTCxPQVdLLENBaEJDLEtBTU8sWUFXVixFQWhCRCxZQU1qQixFQVdBLENBaEJBLHFCQVNnQyxtSEFDZix5REFDakIiLCJmaWxlIjoiRDpcXFByb2plY3RzXFxHaXRodWIgUHJvamVjdHNcXGFvaVxcY2xpZW50XFxjb21wb25lbnRzXFxwcm9kdWN0c0NhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9kdWN0QXJ0aWNsZSBmcm9tIFwiLi9wcm9kdWN0QXJ0aWNsZVwiO1xyXG5cclxuY29uc3QgcHJvZHVjdHNDYXJkID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyB0aXRsZSwgcHJvZHVjdHMgfSA9IHByb3BzLnByb2R1Y3RzTGlzdDtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ2aWV3LWNhcmRcIj5cclxuICAgICAgPGgyIGNsYXNzTmFtZT17cHJvcHMudHlwZSA9PT0gXCJsYXJnZVwiID8gXCJjZW50ZXJUaXRsZVwiIDogbnVsbH0+e3RpdGxlfTwvaDI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHMtd3JhcHBlclwiPlxyXG4gICAgICAgIHtwcm9kdWN0cy5tYXAoKHByb2R1Y3QsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8UHJvZHVjdEFydGljbGVcclxuICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgcHJvZHVjdD17cHJvZHVjdH1cclxuICAgICAgICAgICAgZmxleEJhc2lzPXtwcm9wcy5mbGV4QmFzaXN9XHJcbiAgICAgICAgICAgIHNoYWRvdz17cHJvcHMuc2hhZG93fVxyXG4gICAgICAgICAgICB0eXBlPXtwcm9wcy50eXBlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC52aWV3LWNhcmQge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwIDMlO1xyXG4gICAgICAgICAgbWFyZ2luOiA1MHB4IGF1dG8gMHB4IGF1dG87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucHJvZHVjdHMtd3JhcHBlciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2VudGVyVGl0bGUge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0c0NhcmQ7XHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\Projects\\\\Github Projects\\\\aoi\\\\client\\\\components\\\\productsCard.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (productsCard);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb2R1Y3RzQ2FyZC5qcyJdLCJuYW1lcyI6WyJwcm9kdWN0c0NhcmQiLCJwcm9wcyIsInByb2R1Y3RzTGlzdCIsInRpdGxlIiwicHJvZHVjdHMiLCJ0eXBlIiwibWFwIiwicHJvZHVjdCIsImluZGV4IiwiZmxleEJhc2lzIiwic2hhZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVztBQUFBLDRCQUNGQSxLQUFLLENBQUNDLFlBREo7QUFBQSxNQUN0QkMsS0FEc0IsdUJBQ3RCQSxLQURzQjtBQUFBLE1BQ2ZDLFFBRGUsdUJBQ2ZBLFFBRGU7QUFFOUIsU0FDRTtBQUFBLHdDQUFlLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUEsMENBQWVILEtBQUssQ0FBQ0ksSUFBTixLQUFlLE9BQWYsR0FBeUIsYUFBekIsR0FBeUMsSUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUErREYsS0FBL0QsQ0FERixFQUVFO0FBQUEsd0NBQWUsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQyxRQUFRLENBQUNFLEdBQVQsQ0FBYSxVQUFDQyxPQUFELEVBQVVDLEtBQVY7QUFBQSxXQUNaLE1BQUMsdURBQUQ7QUFDRSxTQUFHLEVBQUVBLEtBRFA7QUFFRSxhQUFPLEVBQUVELE9BRlg7QUFHRSxlQUFTLEVBQUVOLEtBQUssQ0FBQ1EsU0FIbkI7QUFJRSxZQUFNLEVBQUVSLEtBQUssQ0FBQ1MsTUFKaEI7QUFLRSxVQUFJLEVBQUVULEtBQUssQ0FBQ0ksSUFMZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRFk7QUFBQSxHQUFiLENBREgsQ0FGRjtBQUFBO0FBQUE7QUFBQSw4ekZBREY7QUF3Q0QsQ0ExQ0Q7O0FBNENlTCwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuODU2ZTM5NmE0N2U2ZTU5NTM5MmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb2R1Y3RBcnRpY2xlIGZyb20gXCIuL3Byb2R1Y3RBcnRpY2xlXCI7XHJcblxyXG5jb25zdCBwcm9kdWN0c0NhcmQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHRpdGxlLCBwcm9kdWN0cyB9ID0gcHJvcHMucHJvZHVjdHNMaXN0O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZXctY2FyZFwiPlxyXG4gICAgICA8aDIgY2xhc3NOYW1lPXtwcm9wcy50eXBlID09PSBcImxhcmdlXCIgPyBcImNlbnRlclRpdGxlXCIgOiBudWxsfT57dGl0bGV9PC9oMj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0cy13cmFwcGVyXCI+XHJcbiAgICAgICAge3Byb2R1Y3RzLm1hcCgocHJvZHVjdCwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxQcm9kdWN0QXJ0aWNsZVxyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICBwcm9kdWN0PXtwcm9kdWN0fVxyXG4gICAgICAgICAgICBmbGV4QmFzaXM9e3Byb3BzLmZsZXhCYXNpc31cclxuICAgICAgICAgICAgc2hhZG93PXtwcm9wcy5zaGFkb3d9XHJcbiAgICAgICAgICAgIHR5cGU9e3Byb3BzLnR5cGV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnZpZXctY2FyZCB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIHBhZGRpbmc6IDAgMyU7XHJcbiAgICAgICAgICBtYXJnaW46IDUwcHggYXV0byAwcHggYXV0bztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wcm9kdWN0cy13cmFwcGVyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jZW50ZXJUaXRsZSB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByb2R1Y3RzQ2FyZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==