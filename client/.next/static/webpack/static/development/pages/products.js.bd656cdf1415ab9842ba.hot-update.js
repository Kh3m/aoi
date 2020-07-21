webpackHotUpdate("static\\development\\pages\\products.js",{

/***/ "./pages/products.js":
/*!***************************!*\
  !*** ./pages/products.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Spacer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Spacer */ "./components/Spacer.js");
/* harmony import */ var _components_ProductFeature__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ProductFeature */ "./components/ProductFeature.js");
/* harmony import */ var _components_productInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/productInfo */ "./components/productInfo.js");
var _this = undefined,
    _jsxFileName = "D:\\Projects\\Github Projects\\aoi\\client\\pages\\products.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var products = function products() {
  // Generate Product Sizes
  var filter = ["Sandals", "Sneakers", "Loafers", "Boat Shoes", "Oxfords", "Boots & Chukkas", "Slip-Ons", "Slippers", "Run Shop", "Spring Trend", "Outdoor", "Walking", "Athletic", "Food Health & Wellness", "Casual", "Dress/Evening"];
  var productsInfos = [{
    name: "Air Zoom Pegasus 37",
    price: "120.00",
    image: "/images/airzoom.jpg"
  }, {
    name: "Libron Whitness",
    brand: "Nike",
    price: "57.33",
    image: "/images/running.jpg"
  }, {
    name: "Flex Experience Run 9",
    brand: "Nike",
    price: "65.00",
    image: "/images/flex.jpg"
  }, {
    name: "Revolution 5",
    brand: "Nike",
    price: "65.00",
    image: "/images/revolution.jpg"
  }, {
    name: "Cloudfeel Knit Slip-On Sneaker",
    brand: "Cole Haan",
    price: "100.00",
    image: "/images/cloudfeel.jpg"
  }, {
    name: "Pinch Penny",
    brand: "Cole Haan",
    price: "126.40",
    image: "/images/pinch.jpg"
  }, {
    name: "Howland Penny",
    brand: "Cole Haan",
    price: "79.95",
    image: "/images/howland.jpg"
  }, {
    name: "Hayes Penny Loafer",
    brand: "Cole Haan",
    price: "89.95",
    image: "/images/hayes.jpg"
  }, {
    name: "Cloudfeel Knit Slip-On Sneaker",
    brand: "Cole Haan",
    price: "100.00",
    image: "/images/cloudfeel.jpg"
  }, {
    name: "Pinch Penny",
    brand: "Cole Haan",
    price: "126.40",
    image: "/images/pinch.jpg"
  }, {
    name: "Howland Penny",
    brand: "Cole Haan",
    price: "79.95",
    image: "/images/howland.jpg"
  }, {
    name: "Hayes Penny Loafer",
    brand: "Cole Haan",
    price: "89.95",
    image: "/images/hayes.jpg"
  }];
  return __jsx("div", {
    className: "jsx-3003387765" + " " + "products",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-3003387765" + " " + "products-main",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-3003387765" + " " + "products-filter-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }, __jsx("h3", {
    className: "jsx-3003387765",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 11
    }
  }, "Filters"), __jsx("div", {
    className: "jsx-3003387765" + " " + "products-filter",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }
  }, __jsx("ul", {
    className: "jsx-3003387765",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }, filter.map(function (filterItem, index) {
    return __jsx("li", {
      key: index,
      className: "jsx-3003387765",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 17
      }
    }, filterItem);
  })))), __jsx("div", {
    className: "jsx-3003387765" + " " + "product-selections-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 9
    }
  }, __jsx("h3", {
    className: "jsx-3003387765",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 11
    }
  }, "Your Selections"), __jsx("div", {
    className: "jsx-3003387765" + " " + "product-selections",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 11
    }
  }, productsInfos.map(function (productInfo, index) {
    return __jsx(_components_productInfo__WEBPACK_IMPORTED_MODULE_4__["default"], {
      product: productInfo,
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 15
      }
    });
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3003387765",
    __self: _this
  }, ".products.jsx-3003387765{width:100%;padding:0 3% margin:30px auto 0px auto;}.product-header.jsx-3003387765{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.product-title.jsx-3003387765 h1.jsx-3003387765{font-weight:400;}.product-header.jsx-3003387765 h3.jsx-3003387765{font-weight:400;}.products.jsx-3003387765 select.jsx-3003387765{margin-top:5px;font-size:16px;border-radius:5px;}.products-main.jsx-3003387765{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:100%;margin-top:30px;}.page-caption.jsx-3003387765{width:100%;min-height:50px;background-color:#eee;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0px 8px;color:#0654b3;}.products-filter-wrapper.jsx-3003387765{width:264px;}.products-filter.jsx-3003387765{margin-top:20px;width:100%;}.product-selections-wrapper.jsx-3003387765{-webkit-flex-basis:80%;-ms-flex-preferred-size:80%;flex-basis:80%;}.product-selections.jsx-3003387765{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-top:20px;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0c1xcR2l0aHViIFByb2plY3RzXFxhb2lcXGNsaWVudFxccGFnZXNcXHByb2R1Y3RzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdJa0IsQUFHc0IsQUFNRSxBQUlHLEFBR0EsQUFHRCxBQU1GLEFBTUYsQUFTQyxBQUlJLEFBSUQsQUFHSixXQTlDZSxBQTJCVixBQW9CSCxDQVZmLEdBdEJpQixDQU5qQixBQUdBLEFBNEJhLFdBWlcsQUFheEIsR0F6Qm9CLGtCQUNwQixDQVllLENBNUJmLGdCQTJDQSxRQXZDcUIsQUFnQlcsV0EyQmQsZ0JBQ0Qsc0JBbkJJLG1DQW9CUSxTQTVDN0Isc0JBZ0JhLFdBQ0ssZ0JBQ2xCLEFBT2tCLGdCQUNGLGNBQ2hCLGlCQWtCQSIsImZpbGUiOiJEOlxcUHJvamVjdHNcXEdpdGh1YiBQcm9qZWN0c1xcYW9pXFxjbGllbnRcXHBhZ2VzXFxwcm9kdWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNwYWNlciBmcm9tIFwiLi4vY29tcG9uZW50cy9TcGFjZXJcIjtcclxuaW1wb3J0IFByb2R1Y3RBdHRyaWJ1dGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvZHVjdEZlYXR1cmVcIjtcclxuaW1wb3J0IFByb2R1Y3RzSW5mbyBmcm9tIFwiLi4vY29tcG9uZW50cy9wcm9kdWN0SW5mb1wiO1xyXG5jb25zdCBwcm9kdWN0cyA9ICgpID0+IHtcclxuICAvLyBHZW5lcmF0ZSBQcm9kdWN0IFNpemVzXHJcbiAgY29uc3QgZmlsdGVyID0gW1xyXG4gICAgXCJTYW5kYWxzXCIsXHJcbiAgICBcIlNuZWFrZXJzXCIsXHJcbiAgICBcIkxvYWZlcnNcIixcclxuICAgIFwiQm9hdCBTaG9lc1wiLFxyXG4gICAgXCJPeGZvcmRzXCIsXHJcbiAgICBcIkJvb3RzICYgQ2h1a2thc1wiLFxyXG4gICAgXCJTbGlwLU9uc1wiLFxyXG4gICAgXCJTbGlwcGVyc1wiLFxyXG4gICAgXCJSdW4gU2hvcFwiLFxyXG4gICAgXCJTcHJpbmcgVHJlbmRcIixcclxuICAgIFwiT3V0ZG9vclwiLFxyXG4gICAgXCJXYWxraW5nXCIsXHJcbiAgICBcIkF0aGxldGljXCIsXHJcbiAgICBcIkZvb2QgSGVhbHRoICYgV2VsbG5lc3NcIixcclxuICAgIFwiQ2FzdWFsXCIsXHJcbiAgICBcIkRyZXNzL0V2ZW5pbmdcIixcclxuICBdO1xyXG4gIGNvbnN0IHByb2R1Y3RzSW5mb3MgPSBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiQWlyIFpvb20gUGVnYXN1cyAzN1wiLFxyXG4gICAgICBwcmljZTogXCIxMjAuMDBcIixcclxuICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9haXJ6b29tLmpwZ1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJMaWJyb24gV2hpdG5lc3NcIixcclxuICAgICAgYnJhbmQ6IFwiTmlrZVwiLFxyXG4gICAgICBwcmljZTogXCI1Ny4zM1wiLFxyXG4gICAgICBpbWFnZTogXCIvaW1hZ2VzL3J1bm5pbmcuanBnXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkZsZXggRXhwZXJpZW5jZSBSdW4gOVwiLFxyXG4gICAgICBicmFuZDogXCJOaWtlXCIsXHJcbiAgICAgIHByaWNlOiBcIjY1LjAwXCIsXHJcbiAgICAgIGltYWdlOiBcIi9pbWFnZXMvZmxleC5qcGdcIixcclxuICAgIH0sXHJcblxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlJldm9sdXRpb24gNVwiLFxyXG4gICAgICBicmFuZDogXCJOaWtlXCIsXHJcbiAgICAgIHByaWNlOiBcIjY1LjAwXCIsXHJcbiAgICAgIGltYWdlOiBcIi9pbWFnZXMvcmV2b2x1dGlvbi5qcGdcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiQ2xvdWRmZWVsIEtuaXQgU2xpcC1PbiBTbmVha2VyXCIsXHJcbiAgICAgIGJyYW5kOiBcIkNvbGUgSGFhblwiLFxyXG4gICAgICBwcmljZTogXCIxMDAuMDBcIixcclxuICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9jbG91ZGZlZWwuanBnXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlBpbmNoIFBlbm55XCIsXHJcbiAgICAgIGJyYW5kOiBcIkNvbGUgSGFhblwiLFxyXG4gICAgICBwcmljZTogXCIxMjYuNDBcIixcclxuICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9waW5jaC5qcGdcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiSG93bGFuZCBQZW5ueVwiLFxyXG4gICAgICBicmFuZDogXCJDb2xlIEhhYW5cIixcclxuICAgICAgcHJpY2U6IFwiNzkuOTVcIixcclxuICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9ob3dsYW5kLmpwZ1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJIYXllcyBQZW5ueSBMb2FmZXJcIixcclxuICAgICAgYnJhbmQ6IFwiQ29sZSBIYWFuXCIsXHJcbiAgICAgIHByaWNlOiBcIjg5Ljk1XCIsXHJcbiAgICAgIGltYWdlOiBcIi9pbWFnZXMvaGF5ZXMuanBnXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkNsb3VkZmVlbCBLbml0IFNsaXAtT24gU25lYWtlclwiLFxyXG4gICAgICBicmFuZDogXCJDb2xlIEhhYW5cIixcclxuICAgICAgcHJpY2U6IFwiMTAwLjAwXCIsXHJcbiAgICAgIGltYWdlOiBcIi9pbWFnZXMvY2xvdWRmZWVsLmpwZ1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJQaW5jaCBQZW5ueVwiLFxyXG4gICAgICBicmFuZDogXCJDb2xlIEhhYW5cIixcclxuICAgICAgcHJpY2U6IFwiMTI2LjQwXCIsXHJcbiAgICAgIGltYWdlOiBcIi9pbWFnZXMvcGluY2guanBnXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkhvd2xhbmQgUGVubnlcIixcclxuICAgICAgYnJhbmQ6IFwiQ29sZSBIYWFuXCIsXHJcbiAgICAgIHByaWNlOiBcIjc5Ljk1XCIsXHJcbiAgICAgIGltYWdlOiBcIi9pbWFnZXMvaG93bGFuZC5qcGdcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiSGF5ZXMgUGVubnkgTG9hZmVyXCIsXHJcbiAgICAgIGJyYW5kOiBcIkNvbGUgSGFhblwiLFxyXG4gICAgICBwcmljZTogXCI4OS45NVwiLFxyXG4gICAgICBpbWFnZTogXCIvaW1hZ2VzL2hheWVzLmpwZ1wiLFxyXG4gICAgfSxcclxuICBdO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RzXCI+XHJcbiAgICAgIHsvKiBCZWdpbmluZyBvZiBQcm9kdWN0IE1haW4gQm9keSAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0cy1tYWluXCI+XHJcbiAgICAgICAgey8qIEJlZ2luaW5nIG9mIEZpbHRlciBTZWN0aW9uICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHMtZmlsdGVyLXdyYXBwZXJcIj5cclxuICAgICAgICAgIDxoMz5GaWx0ZXJzPC9oMz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHMtZmlsdGVyXCI+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICB7ZmlsdGVyLm1hcCgoZmlsdGVySXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT57ZmlsdGVySXRlbX08L2xpPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIEVuZCBvZiBGaWx0ZXIgU2VjdGlvbiAqL31cclxuXHJcbiAgICAgICAgey8qIEJlZ2luaW5nIG9mIFByb2R1Y3QgU2VsZWN0aW9ucyAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3Qtc2VsZWN0aW9ucy13cmFwcGVyXCI+XHJcbiAgICAgICAgICA8aDM+WW91ciBTZWxlY3Rpb25zPC9oMz5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3Qtc2VsZWN0aW9uc1wiPlxyXG4gICAgICAgICAgICB7cHJvZHVjdHNJbmZvcy5tYXAoKHByb2R1Y3RJbmZvLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxQcm9kdWN0c0luZm8gcHJvZHVjdD17cHJvZHVjdEluZm99IGtleT17aW5kZXh9IC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIEVuZCBvZiBQcm9kdWN0IFNlbGVjdGlvbnMgKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7LyogRW5kIG9mIFByb2R1Y3QgTWFpbiBCb2R5ICovfVxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLnByb2R1Y3RzIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgcGFkZGluZzogMCAzJVxyXG4gICAgICAgICAgbWFyZ2luOiAzMHB4IGF1dG8gMHB4IGF1dG87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucHJvZHVjdC1oZWFkZXIge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcm9kdWN0LXRpdGxlIGgxIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcm9kdWN0LWhlYWRlciBoMyB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucHJvZHVjdHMgc2VsZWN0IHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wcm9kdWN0cy1tYWluIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wYWdlLWNhcHRpb24ge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgcGFkZGluZzogMHB4IDhweDtcclxuICAgICAgICAgIGNvbG9yOiAjMDY1NGIzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucHJvZHVjdHMtZmlsdGVyLXdyYXBwZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDI2NHB4O1xyXG4gICAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnByb2R1Y3RzLWZpbHRlciB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcm9kdWN0LXNlbGVjdGlvbnMtd3JhcHBlciB7XHJcbiAgICAgICAgICBmbGV4LWJhc2lzOiA4MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcm9kdWN0LXNlbGVjdGlvbnMge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0cztcclxuIl19 */\n/*@ sourceURL=D:\\\\Projects\\\\Github Projects\\\\aoi\\\\client\\\\pages\\\\products.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (products);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9kdWN0cy5qcyJdLCJuYW1lcyI6WyJwcm9kdWN0cyIsImZpbHRlciIsInByb2R1Y3RzSW5mb3MiLCJuYW1lIiwicHJpY2UiLCJpbWFnZSIsImJyYW5kIiwibWFwIiwiZmlsdGVySXRlbSIsImluZGV4IiwicHJvZHVjdEluZm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQjtBQUNBLE1BQU1DLE1BQU0sR0FBRyxDQUNiLFNBRGEsRUFFYixVQUZhLEVBR2IsU0FIYSxFQUliLFlBSmEsRUFLYixTQUxhLEVBTWIsaUJBTmEsRUFPYixVQVBhLEVBUWIsVUFSYSxFQVNiLFVBVGEsRUFVYixjQVZhLEVBV2IsU0FYYSxFQVliLFNBWmEsRUFhYixVQWJhLEVBY2Isd0JBZGEsRUFlYixRQWZhLEVBZ0JiLGVBaEJhLENBQWY7QUFrQkEsTUFBTUMsYUFBYSxHQUFHLENBQ3BCO0FBQ0VDLFFBQUksRUFBRSxxQkFEUjtBQUVFQyxTQUFLLEVBQUUsUUFGVDtBQUdFQyxTQUFLLEVBQUU7QUFIVCxHQURvQixFQU1wQjtBQUNFRixRQUFJLEVBQUUsaUJBRFI7QUFFRUcsU0FBSyxFQUFFLE1BRlQ7QUFHRUYsU0FBSyxFQUFFLE9BSFQ7QUFJRUMsU0FBSyxFQUFFO0FBSlQsR0FOb0IsRUFZcEI7QUFDRUYsUUFBSSxFQUFFLHVCQURSO0FBRUVHLFNBQUssRUFBRSxNQUZUO0FBR0VGLFNBQUssRUFBRSxPQUhUO0FBSUVDLFNBQUssRUFBRTtBQUpULEdBWm9CLEVBbUJwQjtBQUNFRixRQUFJLEVBQUUsY0FEUjtBQUVFRyxTQUFLLEVBQUUsTUFGVDtBQUdFRixTQUFLLEVBQUUsT0FIVDtBQUlFQyxTQUFLLEVBQUU7QUFKVCxHQW5Cb0IsRUF5QnBCO0FBQ0VGLFFBQUksRUFBRSxnQ0FEUjtBQUVFRyxTQUFLLEVBQUUsV0FGVDtBQUdFRixTQUFLLEVBQUUsUUFIVDtBQUlFQyxTQUFLLEVBQUU7QUFKVCxHQXpCb0IsRUErQnBCO0FBQ0VGLFFBQUksRUFBRSxhQURSO0FBRUVHLFNBQUssRUFBRSxXQUZUO0FBR0VGLFNBQUssRUFBRSxRQUhUO0FBSUVDLFNBQUssRUFBRTtBQUpULEdBL0JvQixFQXFDcEI7QUFDRUYsUUFBSSxFQUFFLGVBRFI7QUFFRUcsU0FBSyxFQUFFLFdBRlQ7QUFHRUYsU0FBSyxFQUFFLE9BSFQ7QUFJRUMsU0FBSyxFQUFFO0FBSlQsR0FyQ29CLEVBMkNwQjtBQUNFRixRQUFJLEVBQUUsb0JBRFI7QUFFRUcsU0FBSyxFQUFFLFdBRlQ7QUFHRUYsU0FBSyxFQUFFLE9BSFQ7QUFJRUMsU0FBSyxFQUFFO0FBSlQsR0EzQ29CLEVBaURwQjtBQUNFRixRQUFJLEVBQUUsZ0NBRFI7QUFFRUcsU0FBSyxFQUFFLFdBRlQ7QUFHRUYsU0FBSyxFQUFFLFFBSFQ7QUFJRUMsU0FBSyxFQUFFO0FBSlQsR0FqRG9CLEVBdURwQjtBQUNFRixRQUFJLEVBQUUsYUFEUjtBQUVFRyxTQUFLLEVBQUUsV0FGVDtBQUdFRixTQUFLLEVBQUUsUUFIVDtBQUlFQyxTQUFLLEVBQUU7QUFKVCxHQXZEb0IsRUE2RHBCO0FBQ0VGLFFBQUksRUFBRSxlQURSO0FBRUVHLFNBQUssRUFBRSxXQUZUO0FBR0VGLFNBQUssRUFBRSxPQUhUO0FBSUVDLFNBQUssRUFBRTtBQUpULEdBN0RvQixFQW1FcEI7QUFDRUYsUUFBSSxFQUFFLG9CQURSO0FBRUVHLFNBQUssRUFBRSxXQUZUO0FBR0VGLFNBQUssRUFBRSxPQUhUO0FBSUVDLFNBQUssRUFBRTtBQUpULEdBbkVvQixDQUF0QjtBQTBFQSxTQUNFO0FBQUEsd0NBQWUsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUU7QUFBQSx3Q0FBZSxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRTtBQUFBLHdDQUFlLHlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQUVFO0FBQUEsd0NBQWUsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSixNQUFNLENBQUNNLEdBQVAsQ0FBVyxVQUFDQyxVQUFELEVBQWFDLEtBQWI7QUFBQSxXQUNWO0FBQUksU0FBRyxFQUFFQSxLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFpQkQsVUFBakIsQ0FEVTtBQUFBLEdBQVgsQ0FESCxDQURGLENBRkYsQ0FGRixFQWVFO0FBQUEsd0NBQWUsNEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixFQUdFO0FBQUEsd0NBQWUsb0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHTixhQUFhLENBQUNLLEdBQWQsQ0FBa0IsVUFBQ0csV0FBRCxFQUFjRCxLQUFkO0FBQUEsV0FDakIsTUFBQywrREFBRDtBQUFjLGFBQU8sRUFBRUMsV0FBdkI7QUFBb0MsU0FBRyxFQUFFRCxLQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRGlCO0FBQUEsR0FBbEIsQ0FESCxDQUhGLENBZkYsQ0FGRjtBQUFBO0FBQUE7QUFBQSwwK1JBREY7QUF5RkQsQ0F2TEQ7O0FBeUxlVCx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccHJvZHVjdHMuanMuYmQ2NTZjZGYxNDE1YWI5ODQyYmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNwYWNlciBmcm9tIFwiLi4vY29tcG9uZW50cy9TcGFjZXJcIjtcclxuaW1wb3J0IFByb2R1Y3RBdHRyaWJ1dGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvZHVjdEZlYXR1cmVcIjtcclxuaW1wb3J0IFByb2R1Y3RzSW5mbyBmcm9tIFwiLi4vY29tcG9uZW50cy9wcm9kdWN0SW5mb1wiO1xyXG5jb25zdCBwcm9kdWN0cyA9ICgpID0+IHtcclxuICAvLyBHZW5lcmF0ZSBQcm9kdWN0IFNpemVzXHJcbiAgY29uc3QgZmlsdGVyID0gW1xyXG4gICAgXCJTYW5kYWxzXCIsXHJcbiAgICBcIlNuZWFrZXJzXCIsXHJcbiAgICBcIkxvYWZlcnNcIixcclxuICAgIFwiQm9hdCBTaG9lc1wiLFxyXG4gICAgXCJPeGZvcmRzXCIsXHJcbiAgICBcIkJvb3RzICYgQ2h1a2thc1wiLFxyXG4gICAgXCJTbGlwLU9uc1wiLFxyXG4gICAgXCJTbGlwcGVyc1wiLFxyXG4gICAgXCJSdW4gU2hvcFwiLFxyXG4gICAgXCJTcHJpbmcgVHJlbmRcIixcclxuICAgIFwiT3V0ZG9vclwiLFxyXG4gICAgXCJXYWxraW5nXCIsXHJcbiAgICBcIkF0aGxldGljXCIsXHJcbiAgICBcIkZvb2QgSGVhbHRoICYgV2VsbG5lc3NcIixcclxuICAgIFwiQ2FzdWFsXCIsXHJcbiAgICBcIkRyZXNzL0V2ZW5pbmdcIixcclxuICBdO1xyXG4gIGNvbnN0IHByb2R1Y3RzSW5mb3MgPSBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiQWlyIFpvb20gUGVnYXN1cyAzN1wiLFxyXG4gICAgICBwcmljZTogXCIxMjAuMDBcIixcclxuICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9haXJ6b29tLmpwZ1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJMaWJyb24gV2hpdG5lc3NcIixcclxuICAgICAgYnJhbmQ6IFwiTmlrZVwiLFxyXG4gICAgICBwcmljZTogXCI1Ny4zM1wiLFxyXG4gICAgICBpbWFnZTogXCIvaW1hZ2VzL3J1bm5pbmcuanBnXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkZsZXggRXhwZXJpZW5jZSBSdW4gOVwiLFxyXG4gICAgICBicmFuZDogXCJOaWtlXCIsXHJcbiAgICAgIHByaWNlOiBcIjY1LjAwXCIsXHJcbiAgICAgIGltYWdlOiBcIi9pbWFnZXMvZmxleC5qcGdcIixcclxuICAgIH0sXHJcblxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlJldm9sdXRpb24gNVwiLFxyXG4gICAgICBicmFuZDogXCJOaWtlXCIsXHJcbiAgICAgIHByaWNlOiBcIjY1LjAwXCIsXHJcbiAgICAgIGltYWdlOiBcIi9pbWFnZXMvcmV2b2x1dGlvbi5qcGdcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiQ2xvdWRmZWVsIEtuaXQgU2xpcC1PbiBTbmVha2VyXCIsXHJcbiAgICAgIGJyYW5kOiBcIkNvbGUgSGFhblwiLFxyXG4gICAgICBwcmljZTogXCIxMDAuMDBcIixcclxuICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9jbG91ZGZlZWwuanBnXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlBpbmNoIFBlbm55XCIsXHJcbiAgICAgIGJyYW5kOiBcIkNvbGUgSGFhblwiLFxyXG4gICAgICBwcmljZTogXCIxMjYuNDBcIixcclxuICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9waW5jaC5qcGdcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiSG93bGFuZCBQZW5ueVwiLFxyXG4gICAgICBicmFuZDogXCJDb2xlIEhhYW5cIixcclxuICAgICAgcHJpY2U6IFwiNzkuOTVcIixcclxuICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9ob3dsYW5kLmpwZ1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJIYXllcyBQZW5ueSBMb2FmZXJcIixcclxuICAgICAgYnJhbmQ6IFwiQ29sZSBIYWFuXCIsXHJcbiAgICAgIHByaWNlOiBcIjg5Ljk1XCIsXHJcbiAgICAgIGltYWdlOiBcIi9pbWFnZXMvaGF5ZXMuanBnXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkNsb3VkZmVlbCBLbml0IFNsaXAtT24gU25lYWtlclwiLFxyXG4gICAgICBicmFuZDogXCJDb2xlIEhhYW5cIixcclxuICAgICAgcHJpY2U6IFwiMTAwLjAwXCIsXHJcbiAgICAgIGltYWdlOiBcIi9pbWFnZXMvY2xvdWRmZWVsLmpwZ1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJQaW5jaCBQZW5ueVwiLFxyXG4gICAgICBicmFuZDogXCJDb2xlIEhhYW5cIixcclxuICAgICAgcHJpY2U6IFwiMTI2LjQwXCIsXHJcbiAgICAgIGltYWdlOiBcIi9pbWFnZXMvcGluY2guanBnXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkhvd2xhbmQgUGVubnlcIixcclxuICAgICAgYnJhbmQ6IFwiQ29sZSBIYWFuXCIsXHJcbiAgICAgIHByaWNlOiBcIjc5Ljk1XCIsXHJcbiAgICAgIGltYWdlOiBcIi9pbWFnZXMvaG93bGFuZC5qcGdcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiSGF5ZXMgUGVubnkgTG9hZmVyXCIsXHJcbiAgICAgIGJyYW5kOiBcIkNvbGUgSGFhblwiLFxyXG4gICAgICBwcmljZTogXCI4OS45NVwiLFxyXG4gICAgICBpbWFnZTogXCIvaW1hZ2VzL2hheWVzLmpwZ1wiLFxyXG4gICAgfSxcclxuICBdO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RzXCI+XHJcbiAgICAgIHsvKiBCZWdpbmluZyBvZiBQcm9kdWN0IE1haW4gQm9keSAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0cy1tYWluXCI+XHJcbiAgICAgICAgey8qIEJlZ2luaW5nIG9mIEZpbHRlciBTZWN0aW9uICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHMtZmlsdGVyLXdyYXBwZXJcIj5cclxuICAgICAgICAgIDxoMz5GaWx0ZXJzPC9oMz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHMtZmlsdGVyXCI+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICB7ZmlsdGVyLm1hcCgoZmlsdGVySXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT57ZmlsdGVySXRlbX08L2xpPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIEVuZCBvZiBGaWx0ZXIgU2VjdGlvbiAqL31cclxuXHJcbiAgICAgICAgey8qIEJlZ2luaW5nIG9mIFByb2R1Y3QgU2VsZWN0aW9ucyAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3Qtc2VsZWN0aW9ucy13cmFwcGVyXCI+XHJcbiAgICAgICAgICA8aDM+WW91ciBTZWxlY3Rpb25zPC9oMz5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3Qtc2VsZWN0aW9uc1wiPlxyXG4gICAgICAgICAgICB7cHJvZHVjdHNJbmZvcy5tYXAoKHByb2R1Y3RJbmZvLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxQcm9kdWN0c0luZm8gcHJvZHVjdD17cHJvZHVjdEluZm99IGtleT17aW5kZXh9IC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIEVuZCBvZiBQcm9kdWN0IFNlbGVjdGlvbnMgKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7LyogRW5kIG9mIFByb2R1Y3QgTWFpbiBCb2R5ICovfVxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLnByb2R1Y3RzIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgcGFkZGluZzogMCAzJVxyXG4gICAgICAgICAgbWFyZ2luOiAzMHB4IGF1dG8gMHB4IGF1dG87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucHJvZHVjdC1oZWFkZXIge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcm9kdWN0LXRpdGxlIGgxIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcm9kdWN0LWhlYWRlciBoMyB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucHJvZHVjdHMgc2VsZWN0IHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wcm9kdWN0cy1tYWluIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wYWdlLWNhcHRpb24ge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgcGFkZGluZzogMHB4IDhweDtcclxuICAgICAgICAgIGNvbG9yOiAjMDY1NGIzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucHJvZHVjdHMtZmlsdGVyLXdyYXBwZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDI2NHB4O1xyXG4gICAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnByb2R1Y3RzLWZpbHRlciB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcm9kdWN0LXNlbGVjdGlvbnMtd3JhcHBlciB7XHJcbiAgICAgICAgICBmbGV4LWJhc2lzOiA4MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcm9kdWN0LXNlbGVjdGlvbnMge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0cztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==