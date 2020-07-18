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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _productArticle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./productArticle */ "./components/productArticle.js");
var _this = undefined,
    _jsxFileName = "D:\\Projects\\Github Projects\\aoi\\client\\components\\productsCard.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var productsCard = function productsCard(props) {
  var _props$productsList = props.productsList,
      title = _props$productsList.title,
      products = _props$productsList.products;
  return __jsx("div", {
    className: "jsx-973148705" + " " + "view-card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: "jsx-973148705" + " " + ((props.type === "large" ? "centerTitle" : null) || ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, title), __jsx("div", {
    className: "jsx-973148705" + " " + "products-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, products.map(function (product, index) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 11
      }
    }, __jsx("a", {
      className: "jsx-973148705",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 13
      }
    }, __jsx(_productArticle__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: index,
      product: product,
      flexBasis: props.flexBasis,
      shadow: props.shadow,
      type: props.type,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 15
      }
    })));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "973148705",
    __self: _this
  }, "h2.jsx-973148705{margin-bottom:20px;font-weight:bolder;font-size:30px;}.view-card.jsx-973148705{width:100%;max-width:1200px;margin:50px auto 0px auto;}.products-wrapper.jsx-973148705{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.centerTitle.jsx-973148705{text-align:center;margin-bottom:0px;font-weight:500;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0c1xcR2l0aHViIFByb2plY3RzXFxhb2lcXGNsaWVudFxcY29tcG9uZW50c1xccHJvZHVjdHNDYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCa0IsQUFHOEIsQUFLUixBQU1FLEFBS0ssV0FWRCxPQVdDLENBaEJDLFNBTU8sUUFXVixFQWhCRCxjQWlCakIsQ0FoQkEsQ0FLQSxvQkFJZ0MsbUhBQ2YseURBQ2pCIiwiZmlsZSI6IkQ6XFxQcm9qZWN0c1xcR2l0aHViIFByb2plY3RzXFxhb2lcXGNsaWVudFxcY29tcG9uZW50c1xccHJvZHVjdHNDYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBQcm9kdWN0QXJ0aWNsZSBmcm9tIFwiLi9wcm9kdWN0QXJ0aWNsZVwiO1xyXG5cclxuY29uc3QgcHJvZHVjdHNDYXJkID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyB0aXRsZSwgcHJvZHVjdHMgfSA9IHByb3BzLnByb2R1Y3RzTGlzdDtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ2aWV3LWNhcmRcIj5cclxuICAgICAgPGgyIGNsYXNzTmFtZT17cHJvcHMudHlwZSA9PT0gXCJsYXJnZVwiID8gXCJjZW50ZXJUaXRsZVwiIDogbnVsbH0+e3RpdGxlfTwvaDI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHMtd3JhcHBlclwiPlxyXG4gICAgICAgIHtwcm9kdWN0cy5tYXAoKHByb2R1Y3QsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICA8UHJvZHVjdEFydGljbGVcclxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0PXtwcm9kdWN0fVxyXG4gICAgICAgICAgICAgICAgZmxleEJhc2lzPXtwcm9wcy5mbGV4QmFzaXN9XHJcbiAgICAgICAgICAgICAgICBzaGFkb3c9e3Byb3BzLnNoYWRvd31cclxuICAgICAgICAgICAgICAgIHR5cGU9e3Byb3BzLnR5cGV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnZpZXctY2FyZCB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiA1MHB4IGF1dG8gMHB4IGF1dG87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucHJvZHVjdHMtd3JhcHBlciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2VudGVyVGl0bGUge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0c0NhcmQ7XHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\Projects\\\\Github Projects\\\\aoi\\\\client\\\\components\\\\productsCard.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb2R1Y3RzQ2FyZC5qcyJdLCJuYW1lcyI6WyJwcm9kdWN0c0NhcmQiLCJwcm9wcyIsInByb2R1Y3RzTGlzdCIsInRpdGxlIiwicHJvZHVjdHMiLCJ0eXBlIiwibWFwIiwicHJvZHVjdCIsImluZGV4IiwiZmxleEJhc2lzIiwic2hhZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVc7QUFBQSw0QkFDRkEsS0FBSyxDQUFDQyxZQURKO0FBQUEsTUFDdEJDLEtBRHNCLHVCQUN0QkEsS0FEc0I7QUFBQSxNQUNmQyxRQURlLHVCQUNmQSxRQURlO0FBRTlCLFNBQ0U7QUFBQSx1Q0FBZSxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBLHlDQUFlSCxLQUFLLENBQUNJLElBQU4sS0FBZSxPQUFmLEdBQXlCLGFBQXpCLEdBQXlDLElBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBK0RGLEtBQS9ELENBREYsRUFFRTtBQUFBLHVDQUFlLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0MsUUFBUSxDQUFDRSxHQUFULENBQWEsVUFBQ0MsT0FBRCxFQUFVQyxLQUFWO0FBQUEsV0FDWixNQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsdURBQUQ7QUFDRSxTQUFHLEVBQUVBLEtBRFA7QUFFRSxhQUFPLEVBQUVELE9BRlg7QUFHRSxlQUFTLEVBQUVOLEtBQUssQ0FBQ1EsU0FIbkI7QUFJRSxZQUFNLEVBQUVSLEtBQUssQ0FBQ1MsTUFKaEI7QUFLRSxVQUFJLEVBQUVULEtBQUssQ0FBQ0ksSUFMZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FERixDQURZO0FBQUEsR0FBYixDQURILENBRkY7QUFBQTtBQUFBO0FBQUEsa2hHQURGO0FBNENELENBOUNEOztBQWdEZUwsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmNmY2EwOTdmNmZiNzgyNDRkMDkwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFByb2R1Y3RBcnRpY2xlIGZyb20gXCIuL3Byb2R1Y3RBcnRpY2xlXCI7XHJcblxyXG5jb25zdCBwcm9kdWN0c0NhcmQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHRpdGxlLCBwcm9kdWN0cyB9ID0gcHJvcHMucHJvZHVjdHNMaXN0O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZXctY2FyZFwiPlxyXG4gICAgICA8aDIgY2xhc3NOYW1lPXtwcm9wcy50eXBlID09PSBcImxhcmdlXCIgPyBcImNlbnRlclRpdGxlXCIgOiBudWxsfT57dGl0bGV9PC9oMj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0cy13cmFwcGVyXCI+XHJcbiAgICAgICAge3Byb2R1Y3RzLm1hcCgocHJvZHVjdCwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgIDxQcm9kdWN0QXJ0aWNsZVxyXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgIHByb2R1Y3Q9e3Byb2R1Y3R9XHJcbiAgICAgICAgICAgICAgICBmbGV4QmFzaXM9e3Byb3BzLmZsZXhCYXNpc31cclxuICAgICAgICAgICAgICAgIHNoYWRvdz17cHJvcHMuc2hhZG93fVxyXG4gICAgICAgICAgICAgICAgdHlwZT17cHJvcHMudHlwZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudmlldy1jYXJkIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDUwcHggYXV0byAwcHggYXV0bztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wcm9kdWN0cy13cmFwcGVyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jZW50ZXJUaXRsZSB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByb2R1Y3RzQ2FyZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==