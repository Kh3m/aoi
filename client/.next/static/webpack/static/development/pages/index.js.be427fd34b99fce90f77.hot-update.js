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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_productsCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/productsCard */ "./components/productsCard.js");
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
      lineNumber: 121,
      columnNumber: 5
    }
  }, __jsx(_components_HeroBox__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }
  }), __jsx(_components_productsCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    productsList: popularProducts,
    flexBasis: "20%",
    shadow: true,
    type: "small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 7
    }
  }), __jsx(_components_productsCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    productsList: favoriteProducts,
    flexBasis: "33%",
    shadow: false,
    type: "large",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }
  }), __jsx(_components_productsCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    productsList: brandHeaders,
    flexBasis: "16%",
    shadow: true,
    type: "small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJpbmRleFBhZ2UiLCJwb3B1bGFyUHJvZHVjdHMiLCJ0aXRsZSIsInByb2R1Y3RzIiwiaW1hZ2UiLCJmYXZvcml0ZVByb2R1Y3RzIiwicHJpY2UiLCJvZmZQcmljZSIsImJyYW5kSGVhZGVycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUN0QixNQUFNQyxlQUFlLEdBQUc7QUFDdEJDLFNBQUssRUFBRSxlQURlO0FBRXRCQyxZQUFRLEVBQUUsQ0FDUjtBQUNFQyxXQUFLLEVBQUU7QUFEVCxLQURRLEVBSVI7QUFDRUEsV0FBSyxFQUFFO0FBRFQsS0FKUSxFQU9SO0FBQ0VBLFdBQUssRUFBRTtBQURULEtBUFEsRUFVUjtBQUNFQSxXQUFLLEVBQUU7QUFEVCxLQVZRLEVBYVI7QUFDRUEsV0FBSyxFQUFFO0FBRFQsS0FiUTtBQUZZLEdBQXhCO0FBcUJBLE1BQU1DLGdCQUFnQixHQUFHO0FBQ3ZCSCxTQUFLLEVBQUUsc0JBRGdCO0FBRXZCQyxZQUFRLEVBQUUsQ0FDUjtBQUNFRCxXQUFLLEVBQUUsdUJBRFQ7QUFFRUUsV0FBSyxFQUFFLGtCQUZUO0FBR0VFLFdBQUssRUFBRSxJQUhUO0FBSUVDLGNBQVEsRUFBRTtBQUpaLEtBRFEsRUFPUjtBQUNFTCxXQUFLLEVBQUUsZUFEVDtBQUVFRSxXQUFLLEVBQUUsa0JBRlQ7QUFHRUUsV0FBSyxFQUFFLElBSFQ7QUFJRUMsY0FBUSxFQUFFO0FBSlosS0FQUSxFQWNSO0FBQ0VMLFdBQUssRUFBRSxrQkFEVDtBQUVFRSxXQUFLLEVBQUUsa0JBRlQ7QUFHRUUsV0FBSyxFQUFFLElBSFQ7QUFJRUMsY0FBUSxFQUFFO0FBSlosS0FkUSxFQW9CUjtBQUNFTCxXQUFLLEVBQUUsdUJBRFQ7QUFFRUUsV0FBSyxFQUFFLGtCQUZUO0FBR0VFLFdBQUssRUFBRSxJQUhUO0FBSUVDLGNBQVEsRUFBRTtBQUpaLEtBcEJRLEVBMEJSO0FBQ0VMLFdBQUssRUFBRSxlQURUO0FBRUVFLFdBQUssRUFBRSxrQkFGVDtBQUdFRSxXQUFLLEVBQUUsSUFIVDtBQUlFQyxjQUFRLEVBQUU7QUFKWixLQTFCUSxFQWlDUjtBQUNFTCxXQUFLLEVBQUUsa0JBRFQ7QUFFRUUsV0FBSyxFQUFFLGtCQUZUO0FBR0VFLFdBQUssRUFBRSxJQUhUO0FBSUVDLGNBQVEsRUFBRTtBQUpaLEtBakNRLEVBdUNSO0FBQ0VMLFdBQUssRUFBRSx1QkFEVDtBQUVFRSxXQUFLLEVBQUUsa0JBRlQ7QUFHRUUsV0FBSyxFQUFFLElBSFQ7QUFJRUMsY0FBUSxFQUFFO0FBSlosS0F2Q1EsRUE2Q1I7QUFDRUwsV0FBSyxFQUFFLGVBRFQ7QUFFRUUsV0FBSyxFQUFFLGtCQUZUO0FBR0VFLFdBQUssRUFBRSxJQUhUO0FBSUVDLGNBQVEsRUFBRTtBQUpaLEtBN0NRLEVBb0RSO0FBQ0VMLFdBQUssRUFBRSxrQkFEVDtBQUVFRSxXQUFLLEVBQUUsa0JBRlQ7QUFHRUUsV0FBSyxFQUFFLElBSFQ7QUFJRUMsY0FBUSxFQUFFO0FBSlosS0FwRFE7QUFGYSxHQUF6QjtBQThEQSxNQUFNQyxZQUFZLEdBQUc7QUFDbkJOLFNBQUssRUFBRSxpQkFEWTtBQUVuQkMsWUFBUSxFQUFFLENBQ1I7QUFDRUQsV0FBSyxFQUFFLFFBRFQ7QUFFRUUsV0FBSyxFQUFFO0FBRlQsS0FEUSxFQUtSO0FBQ0VGLFdBQUssRUFBRSxNQURUO0FBRUVFLFdBQUssRUFBRTtBQUZULEtBTFEsRUFTUjtBQUNFRixXQUFLLEVBQUUsV0FEVDtBQUVFRSxXQUFLLEVBQUU7QUFGVCxLQVRRLEVBYVI7QUFDRUYsV0FBSyxFQUFFLFVBRFQ7QUFFRUUsV0FBSyxFQUFFO0FBRlQsS0FiUSxFQWlCUjtBQUNFRixXQUFLLEVBQUUsS0FEVDtBQUVFRSxXQUFLLEVBQUU7QUFGVCxLQWpCUSxFQXFCUjtBQUNFRixXQUFLLEVBQUUsUUFEVDtBQUVFRSxXQUFLLEVBQUU7QUFGVCxLQXJCUTtBQUZTLEdBQXJCO0FBOEJBLFNBQ0UsTUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyxnRUFBRDtBQUNFLGdCQUFZLEVBQUVILGVBRGhCO0FBRUUsYUFBUyxFQUFDLEtBRlo7QUFHRSxVQUFNLEVBQUUsSUFIVjtBQUlFLFFBQUksRUFBQyxPQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQVFFLE1BQUMsZ0VBQUQ7QUFDRSxnQkFBWSxFQUFFSSxnQkFEaEI7QUFFRSxhQUFTLEVBQUMsS0FGWjtBQUdFLFVBQU0sRUFBRSxLQUhWO0FBSUUsUUFBSSxFQUFDLE9BSlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLEVBY0UsTUFBQyxnRUFBRDtBQUNFLGdCQUFZLEVBQUVHLFlBRGhCO0FBRUUsYUFBUyxFQUFDLEtBRlo7QUFHRSxVQUFNLEVBQUUsSUFIVjtBQUlFLFFBQUksRUFBQyxPQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFkRixDQURGO0FBdUJELENBeklEOztBQTJJZVIsd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmJlNDI3ZmQzNGI5OWZjZTkwZjc3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZXJvQm94IGZyb20gXCIuLi9jb21wb25lbnRzL0hlcm9Cb3hcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUHJvZHVjdHNDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL3Byb2R1Y3RzQ2FyZFwiO1xyXG5cclxuY29uc3QgaW5kZXhQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHBvcHVsYXJQcm9kdWN0cyA9IHtcclxuICAgIHRpdGxlOiBcIlNob2VzIFJldmlld3NcIixcclxuICAgIHByb2R1Y3RzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBpbWFnZTogXCIvaW1hZ2VzLzEuanBnXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpbWFnZTogXCIvaW1hZ2VzLzIuanBnXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpbWFnZTogXCIvaW1hZ2VzLzMuanBnXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpbWFnZTogXCIvaW1hZ2VzLzQuanBnXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpbWFnZTogXCIvaW1hZ2VzLzUuanBnXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZhdm9yaXRlUHJvZHVjdHMgPSB7XHJcbiAgICB0aXRsZTogXCJGZWF0dXJlZCBEYWlseSBEZWFsc1wiLFxyXG4gICAgcHJvZHVjdHM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiBcIk91ciBDb21mZWlzdCBGb290d2VhclwiLFxyXG4gICAgICAgIGltYWdlOiBcIi9pbWFnZXMvZmRkMS5qcGdcIixcclxuICAgICAgICBwcmljZTogXCI5OFwiLFxyXG4gICAgICAgIG9mZlByaWNlOiBcIjE1OVwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiU2xpZGUgU2FuZGFsc1wiLFxyXG4gICAgICAgIGltYWdlOiBcIi9pbWFnZXMvZmRkMi5qcGdcIixcclxuICAgICAgICBwcmljZTogXCI4OVwiLFxyXG4gICAgICAgIG9mZlByaWNlOiBcIjE1OVwiLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiBcIlNhbmRhbHMgZm9yIEtpZHNcIixcclxuICAgICAgICBpbWFnZTogXCIvaW1hZ2VzL2ZkZDMuanBnXCIsXHJcbiAgICAgICAgcHJpY2U6IFwiOTdcIixcclxuICAgICAgICBvZmZQcmljZTogXCIxNjBcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiBcIk91ciBDb21mZWlzdCBGb290d2VhclwiLFxyXG4gICAgICAgIGltYWdlOiBcIi9pbWFnZXMvZmRkNC5qcGdcIixcclxuICAgICAgICBwcmljZTogXCI5OFwiLFxyXG4gICAgICAgIG9mZlByaWNlOiBcIjE1OVwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiU2xpZGUgU2FuZGFsc1wiLFxyXG4gICAgICAgIGltYWdlOiBcIi9pbWFnZXMvZmRkNS5qcGdcIixcclxuICAgICAgICBwcmljZTogXCI4OVwiLFxyXG4gICAgICAgIG9mZlByaWNlOiBcIjE1OVwiLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiBcIlNhbmRhbHMgZm9yIEtpZHNcIixcclxuICAgICAgICBpbWFnZTogXCIvaW1hZ2VzL2ZkZDYuanBnXCIsXHJcbiAgICAgICAgcHJpY2U6IFwiOTdcIixcclxuICAgICAgICBvZmZQcmljZTogXCIxNjBcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiBcIk91ciBDb21mZWlzdCBGb290d2VhclwiLFxyXG4gICAgICAgIGltYWdlOiBcIi9pbWFnZXMvZmRkNy5qcGdcIixcclxuICAgICAgICBwcmljZTogXCI5OFwiLFxyXG4gICAgICAgIG9mZlByaWNlOiBcIjE1OVwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiU2xpZGUgU2FuZGFsc1wiLFxyXG4gICAgICAgIGltYWdlOiBcIi9pbWFnZXMvZmRkOC5qcGdcIixcclxuICAgICAgICBwcmljZTogXCI4OVwiLFxyXG4gICAgICAgIG9mZlByaWNlOiBcIjE1OVwiLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiBcIlNhbmRhbHMgZm9yIEtpZHNcIixcclxuICAgICAgICBpbWFnZTogXCIvaW1hZ2VzL2ZkZDkuanBnXCIsXHJcbiAgICAgICAgcHJpY2U6IFwiOTdcIixcclxuICAgICAgICBvZmZQcmljZTogXCIxNjBcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfTtcclxuICBjb25zdCBicmFuZEhlYWRlcnMgPSB7XHJcbiAgICB0aXRsZTogXCJUcmVuZGluZyBCcmFuZHNcIixcclxuICAgIHByb2R1Y3RzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogXCJDbGFya3NcIixcclxuICAgICAgICBpbWFnZTogXCIvaW1hZ2VzL2hlYWRlcnMvY2xhcmtzLmpwZ1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiTmlrZVwiLFxyXG4gICAgICAgIGltYWdlOiBcIi9pbWFnZXMvaGVhZGVycy9uaWtlLmpwZ1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiTmlrZSBLaWRzXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9oZWFkZXJzL25pa2VraWRzLmpwZ1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiQ29udmVyc2VcIixcclxuICAgICAgICBpbWFnZTogXCIvaW1hZ2VzL2hlYWRlcnMvY29udmVyc2UuanBnXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogXCJVR0dcIixcclxuICAgICAgICBpbWFnZTogXCIvaW1hZ2VzL2hlYWRlcnMvdWdnLmpwZ1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiQnJvb2tzXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9oZWFkZXJzL2Jyb29rcy5qcGdcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPEhlcm9Cb3ggLz5cclxuICAgICAgPFByb2R1Y3RzQ2FyZFxyXG4gICAgICAgIHByb2R1Y3RzTGlzdD17cG9wdWxhclByb2R1Y3RzfVxyXG4gICAgICAgIGZsZXhCYXNpcz1cIjIwJVwiXHJcbiAgICAgICAgc2hhZG93PXt0cnVlfVxyXG4gICAgICAgIHR5cGU9XCJzbWFsbFwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxQcm9kdWN0c0NhcmRcclxuICAgICAgICBwcm9kdWN0c0xpc3Q9e2Zhdm9yaXRlUHJvZHVjdHN9XHJcbiAgICAgICAgZmxleEJhc2lzPVwiMzMlXCJcclxuICAgICAgICBzaGFkb3c9e2ZhbHNlfVxyXG4gICAgICAgIHR5cGU9XCJsYXJnZVwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxQcm9kdWN0c0NhcmRcclxuICAgICAgICBwcm9kdWN0c0xpc3Q9e2JyYW5kSGVhZGVyc31cclxuICAgICAgICBmbGV4QmFzaXM9XCIxNiVcIlxyXG4gICAgICAgIHNoYWRvdz17dHJ1ZX1cclxuICAgICAgICB0eXBlPVwic21hbGxcIlxyXG4gICAgICAvPlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXhQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9