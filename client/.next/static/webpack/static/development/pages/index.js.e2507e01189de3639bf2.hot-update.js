webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_HeroBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/HeroBox */ "./components/HeroBox.js");
/* harmony import */ var _components_productsCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/productsCard */ "./components/productsCard.js");
var _this = undefined,
    _jsxFileName = "D:\\Projects\\Github Projects\\aoi\\client\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var indexPage = function indexPage() {
  var popularProducts = {
    title: "Shoes Reviews",
    products: [{
      image: "/images/1.jpg"
    }, {
      image: "/images/2.jpg"
    }, {
      image: "/images/3.jpg"
    }, {
      image: "/images/4.jpg"
    }, {
      image: "/images/5.jpg"
    }]
  };
  var favoriteProducts = {
    title: "Featured Daily Deals",
    products: [{
      title: "Our Comfeist Footwear",
      image: "/images/fdd1.jpg",
      price: "98",
      offPrice: "159"
    }, {
      title: "Slide Sandals",
      image: "/images/fdd2.jpg",
      price: "89",
      offPrice: "159"
    }, {
      title: "Sandals for Kids",
      image: "/images/fdd3.jpg",
      price: "97",
      offPrice: "160"
    }, {
      title: "Our Comfeist Footwear",
      image: "/images/fdd4.jpg",
      price: "98",
      offPrice: "159"
    }, {
      title: "Slide Sandals",
      image: "/images/fdd5.jpg",
      price: "89",
      offPrice: "159"
    }, {
      title: "Sandals for Kids",
      image: "/images/fdd6.jpg",
      price: "97",
      offPrice: "160"
    }, {
      title: "Our Comfeist Footwear",
      image: "/images/fdd7.jpg",
      price: "98",
      offPrice: "159"
    }, {
      title: "Slide Sandals",
      image: "/images/fdd8.jpg",
      price: "89",
      offPrice: "159"
    }, {
      title: "Sandals for Kids",
      image: "/images/fdd9.jpg",
      price: "97",
      offPrice: "160"
    }]
  };
  var brandHeaders = {
    title: "Trending Brands",
    products: [{
      title: "Clarks",
      image: "/images/headers/clarks.jpg"
    }, {
      title: "Nike",
      image: "/images/headers/nike.jpg"
    }, {
      title: "Nike Kids",
      image: "/images/headers/nikekids.jpg"
    }, {
      title: "Converse",
      image: "/images/headers/converse.jpg"
    }, {
      title: "UGG",
      image: "/images/headers/ugg.jpg"
    }, {
      title: "Brooks",
      image: "/images/headers/brooks.jpg"
    }]
  };
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 5
    }
  }, __jsx(_components_HeroBox__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }
  }), __jsx(_components_productsCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    productsList: popularProducts,
    flexBasis: "20%",
    shadow: true,
    type: "small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }
  }), __jsx(_components_productsCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    productsList: favoriteProducts,
    flexBasis: "33%",
    shadow: false,
    type: "large",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }
  }), __jsx(_components_productsCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    productsList: brandHeaders,
    flexBasis: "16%",
    shadow: true,
    type: "small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (indexPage);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJpbmRleFBhZ2UiLCJwb3B1bGFyUHJvZHVjdHMiLCJ0aXRsZSIsInByb2R1Y3RzIiwiaW1hZ2UiLCJmYXZvcml0ZVByb2R1Y3RzIiwicHJpY2UiLCJvZmZQcmljZSIsImJyYW5kSGVhZGVycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3RCLE1BQU1DLGVBQWUsR0FBRztBQUN0QkMsU0FBSyxFQUFFLGVBRGU7QUFFdEJDLFlBQVEsRUFBRSxDQUNSO0FBQ0VDLFdBQUssRUFBRTtBQURULEtBRFEsRUFJUjtBQUNFQSxXQUFLLEVBQUU7QUFEVCxLQUpRLEVBT1I7QUFDRUEsV0FBSyxFQUFFO0FBRFQsS0FQUSxFQVVSO0FBQ0VBLFdBQUssRUFBRTtBQURULEtBVlEsRUFhUjtBQUNFQSxXQUFLLEVBQUU7QUFEVCxLQWJRO0FBRlksR0FBeEI7QUFxQkEsTUFBTUMsZ0JBQWdCLEdBQUc7QUFDdkJILFNBQUssRUFBRSxzQkFEZ0I7QUFFdkJDLFlBQVEsRUFBRSxDQUNSO0FBQ0VELFdBQUssRUFBRSx1QkFEVDtBQUVFRSxXQUFLLEVBQUUsa0JBRlQ7QUFHRUUsV0FBSyxFQUFFLElBSFQ7QUFJRUMsY0FBUSxFQUFFO0FBSlosS0FEUSxFQU9SO0FBQ0VMLFdBQUssRUFBRSxlQURUO0FBRUVFLFdBQUssRUFBRSxrQkFGVDtBQUdFRSxXQUFLLEVBQUUsSUFIVDtBQUlFQyxjQUFRLEVBQUU7QUFKWixLQVBRLEVBY1I7QUFDRUwsV0FBSyxFQUFFLGtCQURUO0FBRUVFLFdBQUssRUFBRSxrQkFGVDtBQUdFRSxXQUFLLEVBQUUsSUFIVDtBQUlFQyxjQUFRLEVBQUU7QUFKWixLQWRRLEVBb0JSO0FBQ0VMLFdBQUssRUFBRSx1QkFEVDtBQUVFRSxXQUFLLEVBQUUsa0JBRlQ7QUFHRUUsV0FBSyxFQUFFLElBSFQ7QUFJRUMsY0FBUSxFQUFFO0FBSlosS0FwQlEsRUEwQlI7QUFDRUwsV0FBSyxFQUFFLGVBRFQ7QUFFRUUsV0FBSyxFQUFFLGtCQUZUO0FBR0VFLFdBQUssRUFBRSxJQUhUO0FBSUVDLGNBQVEsRUFBRTtBQUpaLEtBMUJRLEVBaUNSO0FBQ0VMLFdBQUssRUFBRSxrQkFEVDtBQUVFRSxXQUFLLEVBQUUsa0JBRlQ7QUFHRUUsV0FBSyxFQUFFLElBSFQ7QUFJRUMsY0FBUSxFQUFFO0FBSlosS0FqQ1EsRUF1Q1I7QUFDRUwsV0FBSyxFQUFFLHVCQURUO0FBRUVFLFdBQUssRUFBRSxrQkFGVDtBQUdFRSxXQUFLLEVBQUUsSUFIVDtBQUlFQyxjQUFRLEVBQUU7QUFKWixLQXZDUSxFQTZDUjtBQUNFTCxXQUFLLEVBQUUsZUFEVDtBQUVFRSxXQUFLLEVBQUUsa0JBRlQ7QUFHRUUsV0FBSyxFQUFFLElBSFQ7QUFJRUMsY0FBUSxFQUFFO0FBSlosS0E3Q1EsRUFvRFI7QUFDRUwsV0FBSyxFQUFFLGtCQURUO0FBRUVFLFdBQUssRUFBRSxrQkFGVDtBQUdFRSxXQUFLLEVBQUUsSUFIVDtBQUlFQyxjQUFRLEVBQUU7QUFKWixLQXBEUTtBQUZhLEdBQXpCO0FBOERBLE1BQU1DLFlBQVksR0FBRztBQUNuQk4sU0FBSyxFQUFFLGlCQURZO0FBRW5CQyxZQUFRLEVBQUUsQ0FDUjtBQUNFRCxXQUFLLEVBQUUsUUFEVDtBQUVFRSxXQUFLLEVBQUU7QUFGVCxLQURRLEVBS1I7QUFDRUYsV0FBSyxFQUFFLE1BRFQ7QUFFRUUsV0FBSyxFQUFFO0FBRlQsS0FMUSxFQVNSO0FBQ0VGLFdBQUssRUFBRSxXQURUO0FBRUVFLFdBQUssRUFBRTtBQUZULEtBVFEsRUFhUjtBQUNFRixXQUFLLEVBQUUsVUFEVDtBQUVFRSxXQUFLLEVBQUU7QUFGVCxLQWJRLEVBaUJSO0FBQ0VGLFdBQUssRUFBRSxLQURUO0FBRUVFLFdBQUssRUFBRTtBQUZULEtBakJRLEVBcUJSO0FBQ0VGLFdBQUssRUFBRSxRQURUO0FBRUVFLFdBQUssRUFBRTtBQUZULEtBckJRO0FBRlMsR0FBckI7QUE4QkEsU0FDRSxNQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLGdFQUFEO0FBQ0UsZ0JBQVksRUFBRUgsZUFEaEI7QUFFRSxhQUFTLEVBQUMsS0FGWjtBQUdFLFVBQU0sRUFBRSxJQUhWO0FBSUUsUUFBSSxFQUFDLE9BSlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBUUUsTUFBQyxnRUFBRDtBQUNFLGdCQUFZLEVBQUVJLGdCQURoQjtBQUVFLGFBQVMsRUFBQyxLQUZaO0FBR0UsVUFBTSxFQUFFLEtBSFY7QUFJRSxRQUFJLEVBQUMsT0FKUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkYsRUFjRSxNQUFDLGdFQUFEO0FBQ0UsZ0JBQVksRUFBRUcsWUFEaEI7QUFFRSxhQUFTLEVBQUMsS0FGWjtBQUdFLFVBQU0sRUFBRSxJQUhWO0FBSUUsUUFBSSxFQUFDLE9BSlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWRGLENBREY7QUF1QkQsQ0F6SUQ7O0FBMkllUix3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuZTI1MDdlMDExODlkZTM2MzliZjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlcm9Cb3ggZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVyb0JveFwiO1xyXG5pbXBvcnQgUHJvZHVjdHNDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL3Byb2R1Y3RzQ2FyZFwiO1xyXG5cclxuY29uc3QgaW5kZXhQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHBvcHVsYXJQcm9kdWN0cyA9IHtcclxuICAgIHRpdGxlOiBcIlNob2VzIFJldmlld3NcIixcclxuICAgIHByb2R1Y3RzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBpbWFnZTogXCIvaW1hZ2VzLzEuanBnXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpbWFnZTogXCIvaW1hZ2VzLzIuanBnXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpbWFnZTogXCIvaW1hZ2VzLzMuanBnXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpbWFnZTogXCIvaW1hZ2VzLzQuanBnXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpbWFnZTogXCIvaW1hZ2VzLzUuanBnXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZhdm9yaXRlUHJvZHVjdHMgPSB7XHJcbiAgICB0aXRsZTogXCJGZWF0dXJlZCBEYWlseSBEZWFsc1wiLFxyXG4gICAgcHJvZHVjdHM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiBcIk91ciBDb21mZWlzdCBGb290d2VhclwiLFxyXG4gICAgICAgIGltYWdlOiBcIi9pbWFnZXMvZmRkMS5qcGdcIixcclxuICAgICAgICBwcmljZTogXCI5OFwiLFxyXG4gICAgICAgIG9mZlByaWNlOiBcIjE1OVwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiU2xpZGUgU2FuZGFsc1wiLFxyXG4gICAgICAgIGltYWdlOiBcIi9pbWFnZXMvZmRkMi5qcGdcIixcclxuICAgICAgICBwcmljZTogXCI4OVwiLFxyXG4gICAgICAgIG9mZlByaWNlOiBcIjE1OVwiLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiBcIlNhbmRhbHMgZm9yIEtpZHNcIixcclxuICAgICAgICBpbWFnZTogXCIvaW1hZ2VzL2ZkZDMuanBnXCIsXHJcbiAgICAgICAgcHJpY2U6IFwiOTdcIixcclxuICAgICAgICBvZmZQcmljZTogXCIxNjBcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiBcIk91ciBDb21mZWlzdCBGb290d2VhclwiLFxyXG4gICAgICAgIGltYWdlOiBcIi9pbWFnZXMvZmRkNC5qcGdcIixcclxuICAgICAgICBwcmljZTogXCI5OFwiLFxyXG4gICAgICAgIG9mZlByaWNlOiBcIjE1OVwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiU2xpZGUgU2FuZGFsc1wiLFxyXG4gICAgICAgIGltYWdlOiBcIi9pbWFnZXMvZmRkNS5qcGdcIixcclxuICAgICAgICBwcmljZTogXCI4OVwiLFxyXG4gICAgICAgIG9mZlByaWNlOiBcIjE1OVwiLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiBcIlNhbmRhbHMgZm9yIEtpZHNcIixcclxuICAgICAgICBpbWFnZTogXCIvaW1hZ2VzL2ZkZDYuanBnXCIsXHJcbiAgICAgICAgcHJpY2U6IFwiOTdcIixcclxuICAgICAgICBvZmZQcmljZTogXCIxNjBcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiBcIk91ciBDb21mZWlzdCBGb290d2VhclwiLFxyXG4gICAgICAgIGltYWdlOiBcIi9pbWFnZXMvZmRkNy5qcGdcIixcclxuICAgICAgICBwcmljZTogXCI5OFwiLFxyXG4gICAgICAgIG9mZlByaWNlOiBcIjE1OVwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiU2xpZGUgU2FuZGFsc1wiLFxyXG4gICAgICAgIGltYWdlOiBcIi9pbWFnZXMvZmRkOC5qcGdcIixcclxuICAgICAgICBwcmljZTogXCI4OVwiLFxyXG4gICAgICAgIG9mZlByaWNlOiBcIjE1OVwiLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiBcIlNhbmRhbHMgZm9yIEtpZHNcIixcclxuICAgICAgICBpbWFnZTogXCIvaW1hZ2VzL2ZkZDkuanBnXCIsXHJcbiAgICAgICAgcHJpY2U6IFwiOTdcIixcclxuICAgICAgICBvZmZQcmljZTogXCIxNjBcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfTtcclxuICBjb25zdCBicmFuZEhlYWRlcnMgPSB7XHJcbiAgICB0aXRsZTogXCJUcmVuZGluZyBCcmFuZHNcIixcclxuICAgIHByb2R1Y3RzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogXCJDbGFya3NcIixcclxuICAgICAgICBpbWFnZTogXCIvaW1hZ2VzL2hlYWRlcnMvY2xhcmtzLmpwZ1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiTmlrZVwiLFxyXG4gICAgICAgIGltYWdlOiBcIi9pbWFnZXMvaGVhZGVycy9uaWtlLmpwZ1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiTmlrZSBLaWRzXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9oZWFkZXJzL25pa2VraWRzLmpwZ1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiQ29udmVyc2VcIixcclxuICAgICAgICBpbWFnZTogXCIvaW1hZ2VzL2hlYWRlcnMvY29udmVyc2UuanBnXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogXCJVR0dcIixcclxuICAgICAgICBpbWFnZTogXCIvaW1hZ2VzL2hlYWRlcnMvdWdnLmpwZ1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiQnJvb2tzXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9oZWFkZXJzL2Jyb29rcy5qcGdcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPEhlcm9Cb3ggLz5cclxuICAgICAgPFByb2R1Y3RzQ2FyZFxyXG4gICAgICAgIHByb2R1Y3RzTGlzdD17cG9wdWxhclByb2R1Y3RzfVxyXG4gICAgICAgIGZsZXhCYXNpcz1cIjIwJVwiXHJcbiAgICAgICAgc2hhZG93PXt0cnVlfVxyXG4gICAgICAgIHR5cGU9XCJzbWFsbFwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxQcm9kdWN0c0NhcmRcclxuICAgICAgICBwcm9kdWN0c0xpc3Q9e2Zhdm9yaXRlUHJvZHVjdHN9XHJcbiAgICAgICAgZmxleEJhc2lzPVwiMzMlXCJcclxuICAgICAgICBzaGFkb3c9e2ZhbHNlfVxyXG4gICAgICAgIHR5cGU9XCJsYXJnZVwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxQcm9kdWN0c0NhcmRcclxuICAgICAgICBwcm9kdWN0c0xpc3Q9e2JyYW5kSGVhZGVyc31cclxuICAgICAgICBmbGV4QmFzaXM9XCIxNiVcIlxyXG4gICAgICAgIHNoYWRvdz17dHJ1ZX1cclxuICAgICAgICB0eXBlPVwic21hbGxcIlxyXG4gICAgICAvPlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXhQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9