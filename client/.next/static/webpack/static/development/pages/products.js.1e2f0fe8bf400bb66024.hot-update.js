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
    brand: "Nike",
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
    className: "jsx-1655096813" + " " + "products",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-1655096813" + " " + "products-main",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-1655096813" + " " + "products-filter-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  }, __jsx("h3", {
    className: "jsx-1655096813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }
  }, "Filters"), __jsx("div", {
    className: "jsx-1655096813" + " " + "products-filter",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 11
    }
  }, __jsx("ul", {
    className: "jsx-1655096813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }, filter.map(function (filterItem, index) {
    return __jsx("li", {
      key: index,
      className: "jsx-1655096813",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 17
      }
    }, filterItem);
  })))), __jsx("div", {
    className: "jsx-1655096813" + " " + "product-selections-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }
  }, __jsx("h3", {
    className: "jsx-1655096813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 11
    }
  }, "Your Selections"), __jsx("div", {
    className: "jsx-1655096813" + " " + "product-selections",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 11
    }
  }, productsInfos.map(function (productInfo, index) {
    return __jsx(_components_productInfo__WEBPACK_IMPORTED_MODULE_4__["default"], {
      product: productInfo,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 15
      }
    });
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1655096813",
    __self: _this
  }, ".products.jsx-1655096813{width:100%;max-width:1400px;margin:30px auto 0px auto;}.product-header.jsx-1655096813{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.product-title.jsx-1655096813 h1.jsx-1655096813{font-weight:400;}.product-header.jsx-1655096813 h3.jsx-1655096813{font-weight:400;}.products.jsx-1655096813 select.jsx-1655096813{margin-top:5px;font-size:16px;border-radius:5px;}.products-main.jsx-1655096813{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:100%;margin-top:30px;}.page-caption.jsx-1655096813{width:100%;min-height:50px;background-color:#eee;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0px 8px;color:#0654b3;}.products-filter-wrapper.jsx-1655096813{width:264px;border:1px solid #ddd;}.products-filter.jsx-1655096813{margin-top:20px;width:100%;}.product-selections-wrapper.jsx-1655096813{-webkit-flex-basis:80%;-ms-flex-preferred-size:80%;flex-basis:80%;}.product-selections.jsx-1655096813{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-top:20px;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0c1xcR2l0aHViIFByb2plY3RzXFxhb2lcXGNsaWVudFxccGFnZXNcXHByb2R1Y3RzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlJa0IsQUFHc0IsQUFNRSxBQUlHLEFBR0EsQUFHRCxBQU1GLEFBTUYsQUFTQyxBQUlJLEFBSUQsQUFHSixXQS9DTSxBQTRCRCxBQW9CSCxDQVhTLEdBckJQLENBTmpCLEFBR0EsQUE0QmEsV0FaVyxBQWF4QixDQXpDNEIsRUFnQlIsSUFxQnBCLGNBcEJBLENBWWUsS0E1QmYsWUEyQ0EsUUF2Q3FCLEFBZ0JXLFdBMkJkLGdCQUNELHNCQW5CSSxtQ0FvQlEsU0E1QzdCLHNCQWdCYSxXQUNLLGdCQUNsQixBQU9rQixnQkFDRixjQUNoQixpQkFrQkEiLCJmaWxlIjoiRDpcXFByb2plY3RzXFxHaXRodWIgUHJvamVjdHNcXGFvaVxcY2xpZW50XFxwYWdlc1xccHJvZHVjdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTcGFjZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvU3BhY2VyXCI7XHJcbmltcG9ydCBQcm9kdWN0QXR0cmlidXRlIGZyb20gXCIuLi9jb21wb25lbnRzL1Byb2R1Y3RGZWF0dXJlXCI7XHJcbmltcG9ydCBQcm9kdWN0c0luZm8gZnJvbSBcIi4uL2NvbXBvbmVudHMvcHJvZHVjdEluZm9cIjtcclxuY29uc3QgcHJvZHVjdHMgPSAoKSA9PiB7XHJcbiAgLy8gR2VuZXJhdGUgUHJvZHVjdCBTaXplc1xyXG4gIGNvbnN0IGZpbHRlciA9IFtcclxuICAgIFwiU2FuZGFsc1wiLFxyXG4gICAgXCJTbmVha2Vyc1wiLFxyXG4gICAgXCJMb2FmZXJzXCIsXHJcbiAgICBcIkJvYXQgU2hvZXNcIixcclxuICAgIFwiT3hmb3Jkc1wiLFxyXG4gICAgXCJCb290cyAmIENodWtrYXNcIixcclxuICAgIFwiU2xpcC1PbnNcIixcclxuICAgIFwiU2xpcHBlcnNcIixcclxuICAgIFwiUnVuIFNob3BcIixcclxuICAgIFwiU3ByaW5nIFRyZW5kXCIsXHJcbiAgICBcIk91dGRvb3JcIixcclxuICAgIFwiV2Fsa2luZ1wiLFxyXG4gICAgXCJBdGhsZXRpY1wiLFxyXG4gICAgXCJGb29kIEhlYWx0aCAmIFdlbGxuZXNzXCIsXHJcbiAgICBcIkNhc3VhbFwiLFxyXG4gICAgXCJEcmVzcy9FdmVuaW5nXCIsXHJcbiAgXTtcclxuICBjb25zdCBwcm9kdWN0c0luZm9zID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkFpciBab29tIFBlZ2FzdXMgMzdcIixcclxuICAgICAgYnJhbmQ6IFwiTmlrZVwiLFxyXG4gICAgICBwcmljZTogXCIxMjAuMDBcIixcclxuICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9haXJ6b29tLmpwZ1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJMaWJyb24gV2hpdG5lc3NcIixcclxuICAgICAgYnJhbmQ6IFwiTmlrZVwiLFxyXG4gICAgICBwcmljZTogXCI1Ny4zM1wiLFxyXG4gICAgICBpbWFnZTogXCIvaW1hZ2VzL3J1bm5pbmcuanBnXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkZsZXggRXhwZXJpZW5jZSBSdW4gOVwiLFxyXG4gICAgICBicmFuZDogXCJOaWtlXCIsXHJcbiAgICAgIHByaWNlOiBcIjY1LjAwXCIsXHJcbiAgICAgIGltYWdlOiBcIi9pbWFnZXMvZmxleC5qcGdcIixcclxuICAgIH0sXHJcblxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlJldm9sdXRpb24gNVwiLFxyXG4gICAgICBicmFuZDogXCJOaWtlXCIsXHJcbiAgICAgIHByaWNlOiBcIjY1LjAwXCIsXHJcbiAgICAgIGltYWdlOiBcIi9pbWFnZXMvcmV2b2x1dGlvbi5qcGdcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiQ2xvdWRmZWVsIEtuaXQgU2xpcC1PbiBTbmVha2VyXCIsXHJcbiAgICAgIGJyYW5kOiBcIkNvbGUgSGFhblwiLFxyXG4gICAgICBwcmljZTogXCIxMDAuMDBcIixcclxuICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9jbG91ZGZlZWwuanBnXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlBpbmNoIFBlbm55XCIsXHJcbiAgICAgIGJyYW5kOiBcIkNvbGUgSGFhblwiLFxyXG4gICAgICBwcmljZTogXCIxMjYuNDBcIixcclxuICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9waW5jaC5qcGdcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiSG93bGFuZCBQZW5ueVwiLFxyXG4gICAgICBicmFuZDogXCJDb2xlIEhhYW5cIixcclxuICAgICAgcHJpY2U6IFwiNzkuOTVcIixcclxuICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9ob3dsYW5kLmpwZ1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJIYXllcyBQZW5ueSBMb2FmZXJcIixcclxuICAgICAgYnJhbmQ6IFwiQ29sZSBIYWFuXCIsXHJcbiAgICAgIHByaWNlOiBcIjg5Ljk1XCIsXHJcbiAgICAgIGltYWdlOiBcIi9pbWFnZXMvaGF5ZXMuanBnXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkNsb3VkZmVlbCBLbml0IFNsaXAtT24gU25lYWtlclwiLFxyXG4gICAgICBicmFuZDogXCJDb2xlIEhhYW5cIixcclxuICAgICAgcHJpY2U6IFwiMTAwLjAwXCIsXHJcbiAgICAgIGltYWdlOiBcIi9pbWFnZXMvY2xvdWRmZWVsLmpwZ1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJQaW5jaCBQZW5ueVwiLFxyXG4gICAgICBicmFuZDogXCJDb2xlIEhhYW5cIixcclxuICAgICAgcHJpY2U6IFwiMTI2LjQwXCIsXHJcbiAgICAgIGltYWdlOiBcIi9pbWFnZXMvcGluY2guanBnXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkhvd2xhbmQgUGVubnlcIixcclxuICAgICAgYnJhbmQ6IFwiQ29sZSBIYWFuXCIsXHJcbiAgICAgIHByaWNlOiBcIjc5Ljk1XCIsXHJcbiAgICAgIGltYWdlOiBcIi9pbWFnZXMvaG93bGFuZC5qcGdcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiSGF5ZXMgUGVubnkgTG9hZmVyXCIsXHJcbiAgICAgIGJyYW5kOiBcIkNvbGUgSGFhblwiLFxyXG4gICAgICBwcmljZTogXCI4OS45NVwiLFxyXG4gICAgICBpbWFnZTogXCIvaW1hZ2VzL2hheWVzLmpwZ1wiLFxyXG4gICAgfSxcclxuICBdO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RzXCI+XHJcbiAgICAgIHsvKiBCZWdpbmluZyBvZiBQcm9kdWN0IE1haW4gQm9keSAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0cy1tYWluXCI+XHJcbiAgICAgICAgey8qIEJlZ2luaW5nIG9mIEZpbHRlciBTZWN0aW9uICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHMtZmlsdGVyLXdyYXBwZXJcIj5cclxuICAgICAgICAgIDxoMz5GaWx0ZXJzPC9oMz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHMtZmlsdGVyXCI+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICB7ZmlsdGVyLm1hcCgoZmlsdGVySXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT57ZmlsdGVySXRlbX08L2xpPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIEVuZCBvZiBGaWx0ZXIgU2VjdGlvbiAqL31cclxuXHJcbiAgICAgICAgey8qIEJlZ2luaW5nIG9mIFByb2R1Y3QgU2VsZWN0aW9ucyAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3Qtc2VsZWN0aW9ucy13cmFwcGVyXCI+XHJcbiAgICAgICAgICA8aDM+WW91ciBTZWxlY3Rpb25zPC9oMz5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3Qtc2VsZWN0aW9uc1wiPlxyXG4gICAgICAgICAgICB7cHJvZHVjdHNJbmZvcy5tYXAoKHByb2R1Y3RJbmZvLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxQcm9kdWN0c0luZm8gcHJvZHVjdD17cHJvZHVjdEluZm99IC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIEVuZCBvZiBQcm9kdWN0IFNlbGVjdGlvbnMgKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7LyogRW5kIG9mIFByb2R1Y3QgTWFpbiBCb2R5ICovfVxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLnByb2R1Y3RzIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAxNDAwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDMwcHggYXV0byAwcHggYXV0bztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wcm9kdWN0LWhlYWRlciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnByb2R1Y3QtdGl0bGUgaDEge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnByb2R1Y3QtaGVhZGVyIGgzIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcm9kdWN0cyBzZWxlY3Qge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnByb2R1Y3RzLW1haW4ge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBhZ2UtY2FwdGlvbiB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwcHggOHB4O1xyXG4gICAgICAgICAgY29sb3I6ICMwNjU0YjM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcm9kdWN0cy1maWx0ZXItd3JhcHBlciB7XHJcbiAgICAgICAgICB3aWR0aDogMjY0cHg7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucHJvZHVjdHMtZmlsdGVyIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnByb2R1Y3Qtc2VsZWN0aW9ucy13cmFwcGVyIHtcclxuICAgICAgICAgIGZsZXgtYmFzaXM6IDgwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnByb2R1Y3Qtc2VsZWN0aW9ucyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByb2R1Y3RzO1xyXG4iXX0= */\n/*@ sourceURL=D:\\\\Projects\\\\Github Projects\\\\aoi\\\\client\\\\pages\\\\products.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9kdWN0cy5qcyJdLCJuYW1lcyI6WyJwcm9kdWN0cyIsImZpbHRlciIsInByb2R1Y3RzSW5mb3MiLCJuYW1lIiwiYnJhbmQiLCJwcmljZSIsImltYWdlIiwibWFwIiwiZmlsdGVySXRlbSIsImluZGV4IiwicHJvZHVjdEluZm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQjtBQUNBLE1BQU1DLE1BQU0sR0FBRyxDQUNiLFNBRGEsRUFFYixVQUZhLEVBR2IsU0FIYSxFQUliLFlBSmEsRUFLYixTQUxhLEVBTWIsaUJBTmEsRUFPYixVQVBhLEVBUWIsVUFSYSxFQVNiLFVBVGEsRUFVYixjQVZhLEVBV2IsU0FYYSxFQVliLFNBWmEsRUFhYixVQWJhLEVBY2Isd0JBZGEsRUFlYixRQWZhLEVBZ0JiLGVBaEJhLENBQWY7QUFrQkEsTUFBTUMsYUFBYSxHQUFHLENBQ3BCO0FBQ0VDLFFBQUksRUFBRSxxQkFEUjtBQUVFQyxTQUFLLEVBQUUsTUFGVDtBQUdFQyxTQUFLLEVBQUUsUUFIVDtBQUlFQyxTQUFLLEVBQUU7QUFKVCxHQURvQixFQU9wQjtBQUNFSCxRQUFJLEVBQUUsaUJBRFI7QUFFRUMsU0FBSyxFQUFFLE1BRlQ7QUFHRUMsU0FBSyxFQUFFLE9BSFQ7QUFJRUMsU0FBSyxFQUFFO0FBSlQsR0FQb0IsRUFhcEI7QUFDRUgsUUFBSSxFQUFFLHVCQURSO0FBRUVDLFNBQUssRUFBRSxNQUZUO0FBR0VDLFNBQUssRUFBRSxPQUhUO0FBSUVDLFNBQUssRUFBRTtBQUpULEdBYm9CLEVBb0JwQjtBQUNFSCxRQUFJLEVBQUUsY0FEUjtBQUVFQyxTQUFLLEVBQUUsTUFGVDtBQUdFQyxTQUFLLEVBQUUsT0FIVDtBQUlFQyxTQUFLLEVBQUU7QUFKVCxHQXBCb0IsRUEwQnBCO0FBQ0VILFFBQUksRUFBRSxnQ0FEUjtBQUVFQyxTQUFLLEVBQUUsV0FGVDtBQUdFQyxTQUFLLEVBQUUsUUFIVDtBQUlFQyxTQUFLLEVBQUU7QUFKVCxHQTFCb0IsRUFnQ3BCO0FBQ0VILFFBQUksRUFBRSxhQURSO0FBRUVDLFNBQUssRUFBRSxXQUZUO0FBR0VDLFNBQUssRUFBRSxRQUhUO0FBSUVDLFNBQUssRUFBRTtBQUpULEdBaENvQixFQXNDcEI7QUFDRUgsUUFBSSxFQUFFLGVBRFI7QUFFRUMsU0FBSyxFQUFFLFdBRlQ7QUFHRUMsU0FBSyxFQUFFLE9BSFQ7QUFJRUMsU0FBSyxFQUFFO0FBSlQsR0F0Q29CLEVBNENwQjtBQUNFSCxRQUFJLEVBQUUsb0JBRFI7QUFFRUMsU0FBSyxFQUFFLFdBRlQ7QUFHRUMsU0FBSyxFQUFFLE9BSFQ7QUFJRUMsU0FBSyxFQUFFO0FBSlQsR0E1Q29CLEVBa0RwQjtBQUNFSCxRQUFJLEVBQUUsZ0NBRFI7QUFFRUMsU0FBSyxFQUFFLFdBRlQ7QUFHRUMsU0FBSyxFQUFFLFFBSFQ7QUFJRUMsU0FBSyxFQUFFO0FBSlQsR0FsRG9CLEVBd0RwQjtBQUNFSCxRQUFJLEVBQUUsYUFEUjtBQUVFQyxTQUFLLEVBQUUsV0FGVDtBQUdFQyxTQUFLLEVBQUUsUUFIVDtBQUlFQyxTQUFLLEVBQUU7QUFKVCxHQXhEb0IsRUE4RHBCO0FBQ0VILFFBQUksRUFBRSxlQURSO0FBRUVDLFNBQUssRUFBRSxXQUZUO0FBR0VDLFNBQUssRUFBRSxPQUhUO0FBSUVDLFNBQUssRUFBRTtBQUpULEdBOURvQixFQW9FcEI7QUFDRUgsUUFBSSxFQUFFLG9CQURSO0FBRUVDLFNBQUssRUFBRSxXQUZUO0FBR0VDLFNBQUssRUFBRSxPQUhUO0FBSUVDLFNBQUssRUFBRTtBQUpULEdBcEVvQixDQUF0QjtBQTJFQSxTQUNFO0FBQUEsd0NBQWUsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUU7QUFBQSx3Q0FBZSxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRTtBQUFBLHdDQUFlLHlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQUVFO0FBQUEsd0NBQWUsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHTCxNQUFNLENBQUNNLEdBQVAsQ0FBVyxVQUFDQyxVQUFELEVBQWFDLEtBQWI7QUFBQSxXQUNWO0FBQUksU0FBRyxFQUFFQSxLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFpQkQsVUFBakIsQ0FEVTtBQUFBLEdBQVgsQ0FESCxDQURGLENBRkYsQ0FGRixFQWVFO0FBQUEsd0NBQWUsNEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixFQUdFO0FBQUEsd0NBQWUsb0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHTixhQUFhLENBQUNLLEdBQWQsQ0FBa0IsVUFBQ0csV0FBRCxFQUFjRCxLQUFkO0FBQUEsV0FDakIsTUFBQywrREFBRDtBQUFjLGFBQU8sRUFBRUMsV0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURpQjtBQUFBLEdBQWxCLENBREgsQ0FIRixDQWZGLENBRkY7QUFBQTtBQUFBO0FBQUEsd2lTQURGO0FBeUZELENBeExEOztBQTBMZVYsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHByb2R1Y3RzLmpzLjFlMmYwZmU4YmY0MDBiYjY2MDI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTcGFjZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvU3BhY2VyXCI7XHJcbmltcG9ydCBQcm9kdWN0QXR0cmlidXRlIGZyb20gXCIuLi9jb21wb25lbnRzL1Byb2R1Y3RGZWF0dXJlXCI7XHJcbmltcG9ydCBQcm9kdWN0c0luZm8gZnJvbSBcIi4uL2NvbXBvbmVudHMvcHJvZHVjdEluZm9cIjtcclxuY29uc3QgcHJvZHVjdHMgPSAoKSA9PiB7XHJcbiAgLy8gR2VuZXJhdGUgUHJvZHVjdCBTaXplc1xyXG4gIGNvbnN0IGZpbHRlciA9IFtcclxuICAgIFwiU2FuZGFsc1wiLFxyXG4gICAgXCJTbmVha2Vyc1wiLFxyXG4gICAgXCJMb2FmZXJzXCIsXHJcbiAgICBcIkJvYXQgU2hvZXNcIixcclxuICAgIFwiT3hmb3Jkc1wiLFxyXG4gICAgXCJCb290cyAmIENodWtrYXNcIixcclxuICAgIFwiU2xpcC1PbnNcIixcclxuICAgIFwiU2xpcHBlcnNcIixcclxuICAgIFwiUnVuIFNob3BcIixcclxuICAgIFwiU3ByaW5nIFRyZW5kXCIsXHJcbiAgICBcIk91dGRvb3JcIixcclxuICAgIFwiV2Fsa2luZ1wiLFxyXG4gICAgXCJBdGhsZXRpY1wiLFxyXG4gICAgXCJGb29kIEhlYWx0aCAmIFdlbGxuZXNzXCIsXHJcbiAgICBcIkNhc3VhbFwiLFxyXG4gICAgXCJEcmVzcy9FdmVuaW5nXCIsXHJcbiAgXTtcclxuICBjb25zdCBwcm9kdWN0c0luZm9zID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkFpciBab29tIFBlZ2FzdXMgMzdcIixcclxuICAgICAgYnJhbmQ6IFwiTmlrZVwiLFxyXG4gICAgICBwcmljZTogXCIxMjAuMDBcIixcclxuICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9haXJ6b29tLmpwZ1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJMaWJyb24gV2hpdG5lc3NcIixcclxuICAgICAgYnJhbmQ6IFwiTmlrZVwiLFxyXG4gICAgICBwcmljZTogXCI1Ny4zM1wiLFxyXG4gICAgICBpbWFnZTogXCIvaW1hZ2VzL3J1bm5pbmcuanBnXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkZsZXggRXhwZXJpZW5jZSBSdW4gOVwiLFxyXG4gICAgICBicmFuZDogXCJOaWtlXCIsXHJcbiAgICAgIHByaWNlOiBcIjY1LjAwXCIsXHJcbiAgICAgIGltYWdlOiBcIi9pbWFnZXMvZmxleC5qcGdcIixcclxuICAgIH0sXHJcblxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlJldm9sdXRpb24gNVwiLFxyXG4gICAgICBicmFuZDogXCJOaWtlXCIsXHJcbiAgICAgIHByaWNlOiBcIjY1LjAwXCIsXHJcbiAgICAgIGltYWdlOiBcIi9pbWFnZXMvcmV2b2x1dGlvbi5qcGdcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiQ2xvdWRmZWVsIEtuaXQgU2xpcC1PbiBTbmVha2VyXCIsXHJcbiAgICAgIGJyYW5kOiBcIkNvbGUgSGFhblwiLFxyXG4gICAgICBwcmljZTogXCIxMDAuMDBcIixcclxuICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9jbG91ZGZlZWwuanBnXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlBpbmNoIFBlbm55XCIsXHJcbiAgICAgIGJyYW5kOiBcIkNvbGUgSGFhblwiLFxyXG4gICAgICBwcmljZTogXCIxMjYuNDBcIixcclxuICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9waW5jaC5qcGdcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiSG93bGFuZCBQZW5ueVwiLFxyXG4gICAgICBicmFuZDogXCJDb2xlIEhhYW5cIixcclxuICAgICAgcHJpY2U6IFwiNzkuOTVcIixcclxuICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9ob3dsYW5kLmpwZ1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJIYXllcyBQZW5ueSBMb2FmZXJcIixcclxuICAgICAgYnJhbmQ6IFwiQ29sZSBIYWFuXCIsXHJcbiAgICAgIHByaWNlOiBcIjg5Ljk1XCIsXHJcbiAgICAgIGltYWdlOiBcIi9pbWFnZXMvaGF5ZXMuanBnXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkNsb3VkZmVlbCBLbml0IFNsaXAtT24gU25lYWtlclwiLFxyXG4gICAgICBicmFuZDogXCJDb2xlIEhhYW5cIixcclxuICAgICAgcHJpY2U6IFwiMTAwLjAwXCIsXHJcbiAgICAgIGltYWdlOiBcIi9pbWFnZXMvY2xvdWRmZWVsLmpwZ1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJQaW5jaCBQZW5ueVwiLFxyXG4gICAgICBicmFuZDogXCJDb2xlIEhhYW5cIixcclxuICAgICAgcHJpY2U6IFwiMTI2LjQwXCIsXHJcbiAgICAgIGltYWdlOiBcIi9pbWFnZXMvcGluY2guanBnXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkhvd2xhbmQgUGVubnlcIixcclxuICAgICAgYnJhbmQ6IFwiQ29sZSBIYWFuXCIsXHJcbiAgICAgIHByaWNlOiBcIjc5Ljk1XCIsXHJcbiAgICAgIGltYWdlOiBcIi9pbWFnZXMvaG93bGFuZC5qcGdcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiSGF5ZXMgUGVubnkgTG9hZmVyXCIsXHJcbiAgICAgIGJyYW5kOiBcIkNvbGUgSGFhblwiLFxyXG4gICAgICBwcmljZTogXCI4OS45NVwiLFxyXG4gICAgICBpbWFnZTogXCIvaW1hZ2VzL2hheWVzLmpwZ1wiLFxyXG4gICAgfSxcclxuICBdO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RzXCI+XHJcbiAgICAgIHsvKiBCZWdpbmluZyBvZiBQcm9kdWN0IE1haW4gQm9keSAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0cy1tYWluXCI+XHJcbiAgICAgICAgey8qIEJlZ2luaW5nIG9mIEZpbHRlciBTZWN0aW9uICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHMtZmlsdGVyLXdyYXBwZXJcIj5cclxuICAgICAgICAgIDxoMz5GaWx0ZXJzPC9oMz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHMtZmlsdGVyXCI+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICB7ZmlsdGVyLm1hcCgoZmlsdGVySXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT57ZmlsdGVySXRlbX08L2xpPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIEVuZCBvZiBGaWx0ZXIgU2VjdGlvbiAqL31cclxuXHJcbiAgICAgICAgey8qIEJlZ2luaW5nIG9mIFByb2R1Y3QgU2VsZWN0aW9ucyAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3Qtc2VsZWN0aW9ucy13cmFwcGVyXCI+XHJcbiAgICAgICAgICA8aDM+WW91ciBTZWxlY3Rpb25zPC9oMz5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3Qtc2VsZWN0aW9uc1wiPlxyXG4gICAgICAgICAgICB7cHJvZHVjdHNJbmZvcy5tYXAoKHByb2R1Y3RJbmZvLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxQcm9kdWN0c0luZm8gcHJvZHVjdD17cHJvZHVjdEluZm99IC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIEVuZCBvZiBQcm9kdWN0IFNlbGVjdGlvbnMgKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7LyogRW5kIG9mIFByb2R1Y3QgTWFpbiBCb2R5ICovfVxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLnByb2R1Y3RzIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAxNDAwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDMwcHggYXV0byAwcHggYXV0bztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wcm9kdWN0LWhlYWRlciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnByb2R1Y3QtdGl0bGUgaDEge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnByb2R1Y3QtaGVhZGVyIGgzIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcm9kdWN0cyBzZWxlY3Qge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnByb2R1Y3RzLW1haW4ge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBhZ2UtY2FwdGlvbiB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwcHggOHB4O1xyXG4gICAgICAgICAgY29sb3I6ICMwNjU0YjM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcm9kdWN0cy1maWx0ZXItd3JhcHBlciB7XHJcbiAgICAgICAgICB3aWR0aDogMjY0cHg7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucHJvZHVjdHMtZmlsdGVyIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnByb2R1Y3Qtc2VsZWN0aW9ucy13cmFwcGVyIHtcclxuICAgICAgICAgIGZsZXgtYmFzaXM6IDgwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnByb2R1Y3Qtc2VsZWN0aW9ucyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByb2R1Y3RzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9