webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/Navigations/Navigations.js":
/*!***********************************************!*\
  !*** ./components/Navigations/Navigations.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Spacer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Spacer */ "./components/Spacer.js");
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Navigation */ "./components/Navigations/Navigation.js");
/* harmony import */ var _Backdrop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Backdrop */ "./components/Backdrop.js");
/* harmony import */ var _container_Account__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../container/Account */ "./container/Account.js");
/* harmony import */ var _hooks_store_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/store/store */ "./hooks/store/store.js");


var _this = undefined,
    _jsxFileName = "D:\\Projects\\Github Projects\\aoi\\client\\components\\Navigations\\Navigations.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








var navigations = function navigations() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      showAccount = _useState[0],
      setShowAccount = _useState[1];

  var state = Object(_hooks_store_store__WEBPACK_IMPORTED_MODULE_8__["useStore"])()[0];
  var _state$auth = state.auth,
      isAuth = _state$auth.isAuth,
      data = _state$auth.data;
  var loginStatus = isAuth ? __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, " ", data.fullName.split(" ")[0], " ") : __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, "Sign in / Register");
  var navs = [//Men Navigation list
  {
    title: "Men",
    list: ["Sandals", "Sneakers", "Loafers", "Boat Shoes", "Oxfords", "Boots & Chukkas", "Slip-Ons", "Slippers", "Run Shop", "Spring Trend", "Outdoor", "Walking", "Athletic", "Food Health & Wellness", "Casual", "Dress/Evening"]
  }, //Women Navigation list
  {
    title: "Women",
    list: ["Sandals", "Sneakers", "Flats", "Mules", "Heals & Pumps", "Boots & Booties", "Clogs", "Slippers", "Comfort Shop", "Run Shop", "Spring Trend", "Outdoor", "Walking", "Athletic", "Food Health & Wellness", "Casual"]
  }, //Kids Navigation list
  {
    title: "Kids",
    list: ["Sandals", "Swimwear", "Sneaker & Athletic Shoes", "Dresses", "Flats", "Jumpsuits & Rompers", "Shirts & Tops", "Shorts", "Sleepwear", "Slippers", "Sneaker & Athletic Shoes", "Swimwear", "Sandals", "Shirts & Tops", "Boat Shoes"]
  }, //Men Navigation list
  {
    title: "Brands",
    list: Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Array(26)).map(function (_, i) {
      return String.fromCharCode(i + 65);
    })
  }];

  var showAccountHandler = function showAccountHandler() {
    setShowAccount(!showAccount);
  };

  return __jsx("div", {
    className: "jsx-3745705024" + " " + "nav-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 5
    }
  }, __jsx("ul", {
    className: "jsx-3745705024",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }
  }, navs.map(function (nav, index) {
    return __jsx(_Navigation__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: index,
      target: nav,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 11
      }
    });
  })), __jsx(_Backdrop__WEBPACK_IMPORTED_MODULE_6__["default"], {
    show: showAccount,
    clicked: showAccountHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }
  }), __jsx(_container_Account__WEBPACK_IMPORTED_MODULE_7__["default"], {
    show: showAccount,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2382104066",
    __self: _this
  }, ".nav-wrapper.jsx-3745705024{height:55px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.nav-wrapper.jsx-3745705024 ul.jsx-3745705024{width:100%;max-width:1200px;margin:0px auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.nav-wrapper.jsx-3745705024 ul.jsx-3745705024 li.jsx-3745705024:last-child{padding-right:0px;}li.jsx-3745705024{padding:30px 30px;cursor:pointer;}a.jsx-3745705024{-webkit-text-decoration:none;text-decoration:none;color:#035d59;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0c1xcR2l0aHViIFByb2plY3RzXFxhb2lcXGNsaWVudFxcY29tcG9uZW50c1xcTmF2aWdhdGlvbnNcXE5hdmlnYXRpb25zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStHa0IsQUFLdUIsQUFPRCxBQU9PLEFBSUEsQUFLRyxXQWZKLENBUEosTUFjZixBQUlpQixVQVZDLEtBV2xCLFdBVmUsTUFjQyxjQUNoQixzQkF2QnFCLGdDQVNyQiw2REFQQSIsImZpbGUiOiJEOlxcUHJvamVjdHNcXEdpdGh1YiBQcm9qZWN0c1xcYW9pXFxjbGllbnRcXGNvbXBvbmVudHNcXE5hdmlnYXRpb25zXFxOYXZpZ2F0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBTcGFjZXIgZnJvbSBcIi4uL1NwYWNlclwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tIFwiLi9OYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCBCYWNrZHJvcCBmcm9tIFwiLi4vQmFja2Ryb3BcIjtcclxuaW1wb3J0IEFjY291bnQgZnJvbSBcIi4uLy4uL2NvbnRhaW5lci9BY2NvdW50XCI7XHJcbmltcG9ydCB7IHVzZVN0b3JlIH0gZnJvbSBcIi4uLy4uL2hvb2tzL3N0b3JlL3N0b3JlXCI7XHJcblxyXG5jb25zdCBuYXZpZ2F0aW9ucyA9ICgpID0+IHtcclxuICBjb25zdCBbc2hvd0FjY291bnQsIHNldFNob3dBY2NvdW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgc3RhdGUgPSB1c2VTdG9yZSgpWzBdO1xyXG4gIGNvbnN0IHsgaXNBdXRoLCBkYXRhIH0gPSBzdGF0ZS5hdXRoO1xyXG5cclxuICBjb25zdCBsb2dpblN0YXR1cyA9IGlzQXV0aCA/IChcclxuICAgIDxzcGFuPiB7ZGF0YS5mdWxsTmFtZS5zcGxpdChcIiBcIilbMF19IDwvc3Bhbj5cclxuICApIDogKFxyXG4gICAgPHNwYW4+U2lnbiBpbiAvIFJlZ2lzdGVyPC9zcGFuPlxyXG4gICk7XHJcblxyXG4gIGNvbnN0IG5hdnMgPSBbXHJcbiAgICAvL01lbiBOYXZpZ2F0aW9uIGxpc3RcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiTWVuXCIsXHJcbiAgICAgIGxpc3Q6IFtcclxuICAgICAgICBcIlNhbmRhbHNcIixcclxuICAgICAgICBcIlNuZWFrZXJzXCIsXHJcbiAgICAgICAgXCJMb2FmZXJzXCIsXHJcbiAgICAgICAgXCJCb2F0IFNob2VzXCIsXHJcbiAgICAgICAgXCJPeGZvcmRzXCIsXHJcbiAgICAgICAgXCJCb290cyAmIENodWtrYXNcIixcclxuICAgICAgICBcIlNsaXAtT25zXCIsXHJcbiAgICAgICAgXCJTbGlwcGVyc1wiLFxyXG4gICAgICAgIFwiUnVuIFNob3BcIixcclxuICAgICAgICBcIlNwcmluZyBUcmVuZFwiLFxyXG4gICAgICAgIFwiT3V0ZG9vclwiLFxyXG4gICAgICAgIFwiV2Fsa2luZ1wiLFxyXG4gICAgICAgIFwiQXRobGV0aWNcIixcclxuICAgICAgICBcIkZvb2QgSGVhbHRoICYgV2VsbG5lc3NcIixcclxuICAgICAgICBcIkNhc3VhbFwiLFxyXG4gICAgICAgIFwiRHJlc3MvRXZlbmluZ1wiLFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIC8vV29tZW4gTmF2aWdhdGlvbiBsaXN0XHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIldvbWVuXCIsXHJcbiAgICAgIGxpc3Q6IFtcclxuICAgICAgICBcIlNhbmRhbHNcIixcclxuICAgICAgICBcIlNuZWFrZXJzXCIsXHJcbiAgICAgICAgXCJGbGF0c1wiLFxyXG4gICAgICAgIFwiTXVsZXNcIixcclxuICAgICAgICBcIkhlYWxzICYgUHVtcHNcIixcclxuICAgICAgICBcIkJvb3RzICYgQm9vdGllc1wiLFxyXG4gICAgICAgIFwiQ2xvZ3NcIixcclxuICAgICAgICBcIlNsaXBwZXJzXCIsXHJcbiAgICAgICAgXCJDb21mb3J0IFNob3BcIixcclxuICAgICAgICBcIlJ1biBTaG9wXCIsXHJcbiAgICAgICAgXCJTcHJpbmcgVHJlbmRcIixcclxuICAgICAgICBcIk91dGRvb3JcIixcclxuICAgICAgICBcIldhbGtpbmdcIixcclxuICAgICAgICBcIkF0aGxldGljXCIsXHJcbiAgICAgICAgXCJGb29kIEhlYWx0aCAmIFdlbGxuZXNzXCIsXHJcbiAgICAgICAgXCJDYXN1YWxcIixcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICAvL0tpZHMgTmF2aWdhdGlvbiBsaXN0XHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIktpZHNcIixcclxuICAgICAgbGlzdDogW1xyXG4gICAgICAgIFwiU2FuZGFsc1wiLFxyXG4gICAgICAgIFwiU3dpbXdlYXJcIixcclxuICAgICAgICBcIlNuZWFrZXIgJiBBdGhsZXRpYyBTaG9lc1wiLFxyXG4gICAgICAgIFwiRHJlc3Nlc1wiLFxyXG4gICAgICAgIFwiRmxhdHNcIixcclxuICAgICAgICBcIkp1bXBzdWl0cyAmIFJvbXBlcnNcIixcclxuICAgICAgICBcIlNoaXJ0cyAmIFRvcHNcIixcclxuICAgICAgICBcIlNob3J0c1wiLFxyXG4gICAgICAgIFwiU2xlZXB3ZWFyXCIsXHJcbiAgICAgICAgXCJTbGlwcGVyc1wiLFxyXG4gICAgICAgIFwiU25lYWtlciAmIEF0aGxldGljIFNob2VzXCIsXHJcbiAgICAgICAgXCJTd2ltd2VhclwiLFxyXG4gICAgICAgIFwiU2FuZGFsc1wiLFxyXG4gICAgICAgIFwiU2hpcnRzICYgVG9wc1wiLFxyXG4gICAgICAgIFwiQm9hdCBTaG9lc1wiLFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuXHJcbiAgICAvL01lbiBOYXZpZ2F0aW9uIGxpc3RcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiQnJhbmRzXCIsXHJcbiAgICAgIGxpc3Q6IFsuLi5BcnJheSgyNildLm1hcCgoXywgaSkgPT4gU3RyaW5nLmZyb21DaGFyQ29kZShpICsgNjUpKSxcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3Qgc2hvd0FjY291bnRIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgc2V0U2hvd0FjY291bnQoIXNob3dBY2NvdW50KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtd3JhcHBlclwiPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAge25hdnMubWFwKChuYXYsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8TmF2aWdhdGlvbiBrZXk9e2luZGV4fSB0YXJnZXQ9e25hdn0gLz5cclxuICAgICAgICApKX1cclxuICAgICAgICB7LyogPFNwYWNlciAvPlxyXG4gICAgICAgIDxsaSBvbkNsaWNrPXtzaG93QWNjb3VudEhhbmRsZXJ9IGlkPVwiYWNjb3VudEJ0blwiPlxyXG4gICAgICAgICAge2xvZ2luU3RhdHVzfVxyXG4gICAgICAgIDwvbGk+ICovfVxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8QmFja2Ryb3Agc2hvdz17c2hvd0FjY291bnR9IGNsaWNrZWQ9e3Nob3dBY2NvdW50SGFuZGxlcn0gLz5cclxuICAgICAgPEFjY291bnQgc2hvdz17c2hvd0FjY291bnR9IC8+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAubmF2LXdyYXBwZXIge1xyXG4gICAgICAgICAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgICAgICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm5hdi13cmFwcGVyIHVsIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgICAubmF2LXdyYXBwZXIgdWwgbGk6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAzMHB4IDMwcHg7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIGNvbG9yOiAjMDM1ZDU5O1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgLm5hdi13cmFwcGVyIHVsIGxpOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmhpZGRlbiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnZpc3VhbGx5aGlkZGVuIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmF2aWdhdGlvbnM7XHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\Projects\\\\Github Projects\\\\aoi\\\\client\\\\components\\\\Navigations\\\\Navigations.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3153797259",
    __self: _this
  }, ".nav-wrapper ul li:first-child{padding-left:0px;}.hidden{display:none;}.visuallyhidden{opacity:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0c1xcR2l0aHViIFByb2plY3RzXFxhb2lcXGNsaWVudFxcY29tcG9uZW50c1xcTmF2aWdhdGlvbnNcXE5hdmlnYXRpb25zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStJeUIsQUFHNEIsQUFJSixBQUlILFVBQ1osR0FKQSxJQUpBIiwiZmlsZSI6IkQ6XFxQcm9qZWN0c1xcR2l0aHViIFByb2plY3RzXFxhb2lcXGNsaWVudFxcY29tcG9uZW50c1xcTmF2aWdhdGlvbnNcXE5hdmlnYXRpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFNwYWNlciBmcm9tIFwiLi4vU3BhY2VyXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuL05hdmlnYXRpb25cIjtcclxuaW1wb3J0IEJhY2tkcm9wIGZyb20gXCIuLi9CYWNrZHJvcFwiO1xyXG5pbXBvcnQgQWNjb3VudCBmcm9tIFwiLi4vLi4vY29udGFpbmVyL0FjY291bnRcIjtcclxuaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tIFwiLi4vLi4vaG9va3Mvc3RvcmUvc3RvcmVcIjtcclxuXHJcbmNvbnN0IG5hdmlnYXRpb25zID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzaG93QWNjb3VudCwgc2V0U2hvd0FjY291bnRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBzdGF0ZSA9IHVzZVN0b3JlKClbMF07XHJcbiAgY29uc3QgeyBpc0F1dGgsIGRhdGEgfSA9IHN0YXRlLmF1dGg7XHJcblxyXG4gIGNvbnN0IGxvZ2luU3RhdHVzID0gaXNBdXRoID8gKFxyXG4gICAgPHNwYW4+IHtkYXRhLmZ1bGxOYW1lLnNwbGl0KFwiIFwiKVswXX0gPC9zcGFuPlxyXG4gICkgOiAoXHJcbiAgICA8c3Bhbj5TaWduIGluIC8gUmVnaXN0ZXI8L3NwYW4+XHJcbiAgKTtcclxuXHJcbiAgY29uc3QgbmF2cyA9IFtcclxuICAgIC8vTWVuIE5hdmlnYXRpb24gbGlzdFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJNZW5cIixcclxuICAgICAgbGlzdDogW1xyXG4gICAgICAgIFwiU2FuZGFsc1wiLFxyXG4gICAgICAgIFwiU25lYWtlcnNcIixcclxuICAgICAgICBcIkxvYWZlcnNcIixcclxuICAgICAgICBcIkJvYXQgU2hvZXNcIixcclxuICAgICAgICBcIk94Zm9yZHNcIixcclxuICAgICAgICBcIkJvb3RzICYgQ2h1a2thc1wiLFxyXG4gICAgICAgIFwiU2xpcC1PbnNcIixcclxuICAgICAgICBcIlNsaXBwZXJzXCIsXHJcbiAgICAgICAgXCJSdW4gU2hvcFwiLFxyXG4gICAgICAgIFwiU3ByaW5nIFRyZW5kXCIsXHJcbiAgICAgICAgXCJPdXRkb29yXCIsXHJcbiAgICAgICAgXCJXYWxraW5nXCIsXHJcbiAgICAgICAgXCJBdGhsZXRpY1wiLFxyXG4gICAgICAgIFwiRm9vZCBIZWFsdGggJiBXZWxsbmVzc1wiLFxyXG4gICAgICAgIFwiQ2FzdWFsXCIsXHJcbiAgICAgICAgXCJEcmVzcy9FdmVuaW5nXCIsXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAgLy9Xb21lbiBOYXZpZ2F0aW9uIGxpc3RcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiV29tZW5cIixcclxuICAgICAgbGlzdDogW1xyXG4gICAgICAgIFwiU2FuZGFsc1wiLFxyXG4gICAgICAgIFwiU25lYWtlcnNcIixcclxuICAgICAgICBcIkZsYXRzXCIsXHJcbiAgICAgICAgXCJNdWxlc1wiLFxyXG4gICAgICAgIFwiSGVhbHMgJiBQdW1wc1wiLFxyXG4gICAgICAgIFwiQm9vdHMgJiBCb290aWVzXCIsXHJcbiAgICAgICAgXCJDbG9nc1wiLFxyXG4gICAgICAgIFwiU2xpcHBlcnNcIixcclxuICAgICAgICBcIkNvbWZvcnQgU2hvcFwiLFxyXG4gICAgICAgIFwiUnVuIFNob3BcIixcclxuICAgICAgICBcIlNwcmluZyBUcmVuZFwiLFxyXG4gICAgICAgIFwiT3V0ZG9vclwiLFxyXG4gICAgICAgIFwiV2Fsa2luZ1wiLFxyXG4gICAgICAgIFwiQXRobGV0aWNcIixcclxuICAgICAgICBcIkZvb2QgSGVhbHRoICYgV2VsbG5lc3NcIixcclxuICAgICAgICBcIkNhc3VhbFwiLFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIC8vS2lkcyBOYXZpZ2F0aW9uIGxpc3RcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiS2lkc1wiLFxyXG4gICAgICBsaXN0OiBbXHJcbiAgICAgICAgXCJTYW5kYWxzXCIsXHJcbiAgICAgICAgXCJTd2ltd2VhclwiLFxyXG4gICAgICAgIFwiU25lYWtlciAmIEF0aGxldGljIFNob2VzXCIsXHJcbiAgICAgICAgXCJEcmVzc2VzXCIsXHJcbiAgICAgICAgXCJGbGF0c1wiLFxyXG4gICAgICAgIFwiSnVtcHN1aXRzICYgUm9tcGVyc1wiLFxyXG4gICAgICAgIFwiU2hpcnRzICYgVG9wc1wiLFxyXG4gICAgICAgIFwiU2hvcnRzXCIsXHJcbiAgICAgICAgXCJTbGVlcHdlYXJcIixcclxuICAgICAgICBcIlNsaXBwZXJzXCIsXHJcbiAgICAgICAgXCJTbmVha2VyICYgQXRobGV0aWMgU2hvZXNcIixcclxuICAgICAgICBcIlN3aW13ZWFyXCIsXHJcbiAgICAgICAgXCJTYW5kYWxzXCIsXHJcbiAgICAgICAgXCJTaGlydHMgJiBUb3BzXCIsXHJcbiAgICAgICAgXCJCb2F0IFNob2VzXCIsXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG5cclxuICAgIC8vTWVuIE5hdmlnYXRpb24gbGlzdFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJCcmFuZHNcIixcclxuICAgICAgbGlzdDogWy4uLkFycmF5KDI2KV0ubWFwKChfLCBpKSA9PiBTdHJpbmcuZnJvbUNoYXJDb2RlKGkgKyA2NSkpLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICBjb25zdCBzaG93QWNjb3VudEhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRTaG93QWNjb3VudCghc2hvd0FjY291bnQpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi13cmFwcGVyXCI+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7bmF2cy5tYXAoKG5hdiwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxOYXZpZ2F0aW9uIGtleT17aW5kZXh9IHRhcmdldD17bmF2fSAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIHsvKiA8U3BhY2VyIC8+XHJcbiAgICAgICAgPGxpIG9uQ2xpY2s9e3Nob3dBY2NvdW50SGFuZGxlcn0gaWQ9XCJhY2NvdW50QnRuXCI+XHJcbiAgICAgICAgICB7bG9naW5TdGF0dXN9XHJcbiAgICAgICAgPC9saT4gKi99XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDxCYWNrZHJvcCBzaG93PXtzaG93QWNjb3VudH0gY2xpY2tlZD17c2hvd0FjY291bnRIYW5kbGVyfSAvPlxyXG4gICAgICA8QWNjb3VudCBzaG93PXtzaG93QWNjb3VudH0gLz5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5uYXYtd3JhcHBlciB7XHJcbiAgICAgICAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubmF2LXdyYXBwZXIgdWwge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgIC5uYXYtd3JhcHBlciB1bCBsaTpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDMwcHggMzBweDtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgY29sb3I6ICMwMzVkNTk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAubmF2LXdyYXBwZXIgdWwgbGk6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaGlkZGVuIHtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudmlzdWFsbHloaWRkZW4ge1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuYXZpZ2F0aW9ucztcclxuIl19 */\n/*@ sourceURL=D:\\\\Projects\\\\Github Projects\\\\aoi\\\\client\\\\components\\\\Navigations\\\\Navigations.js */"));
};

_s(navigations, "1ejzkBZgRDcN4LYRmUHvgJr6oNA=", false, function () {
  return [_hooks_store_store__WEBPACK_IMPORTED_MODULE_8__["useStore"]];
});

/* harmony default export */ __webpack_exports__["default"] = (navigations);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdmlnYXRpb25zL05hdmlnYXRpb25zLmpzIl0sIm5hbWVzIjpbIm5hdmlnYXRpb25zIiwidXNlU3RhdGUiLCJzaG93QWNjb3VudCIsInNldFNob3dBY2NvdW50Iiwic3RhdGUiLCJ1c2VTdG9yZSIsImF1dGgiLCJpc0F1dGgiLCJkYXRhIiwibG9naW5TdGF0dXMiLCJmdWxsTmFtZSIsInNwbGl0IiwibmF2cyIsInRpdGxlIiwibGlzdCIsIkFycmF5IiwibWFwIiwiXyIsImkiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJzaG93QWNjb3VudEhhbmRsZXIiLCJuYXYiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFBQSxrQkFDY0Msc0RBQVEsQ0FBQyxLQUFELENBRHRCO0FBQUEsTUFDakJDLFdBRGlCO0FBQUEsTUFDSkMsY0FESTs7QUFHeEIsTUFBTUMsS0FBSyxHQUFHQyxtRUFBUSxHQUFHLENBQUgsQ0FBdEI7QUFId0Isb0JBSUNELEtBQUssQ0FBQ0UsSUFKUDtBQUFBLE1BSWhCQyxNQUpnQixlQUloQkEsTUFKZ0I7QUFBQSxNQUlSQyxJQUpRLGVBSVJBLElBSlE7QUFNeEIsTUFBTUMsV0FBVyxHQUFHRixNQUFNLEdBQ3hCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUUMsSUFBSSxDQUFDRSxRQUFMLENBQWNDLEtBQWQsQ0FBb0IsR0FBcEIsRUFBeUIsQ0FBekIsQ0FBUixNQUR3QixHQUd4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUhGO0FBTUEsTUFBTUMsSUFBSSxHQUFHLENBQ1g7QUFDQTtBQUNFQyxTQUFLLEVBQUUsS0FEVDtBQUVFQyxRQUFJLEVBQUUsQ0FDSixTQURJLEVBRUosVUFGSSxFQUdKLFNBSEksRUFJSixZQUpJLEVBS0osU0FMSSxFQU1KLGlCQU5JLEVBT0osVUFQSSxFQVFKLFVBUkksRUFTSixVQVRJLEVBVUosY0FWSSxFQVdKLFNBWEksRUFZSixTQVpJLEVBYUosVUFiSSxFQWNKLHdCQWRJLEVBZUosUUFmSSxFQWdCSixlQWhCSTtBQUZSLEdBRlcsRUF1Qlg7QUFDQTtBQUNFRCxTQUFLLEVBQUUsT0FEVDtBQUVFQyxRQUFJLEVBQUUsQ0FDSixTQURJLEVBRUosVUFGSSxFQUdKLE9BSEksRUFJSixPQUpJLEVBS0osZUFMSSxFQU1KLGlCQU5JLEVBT0osT0FQSSxFQVFKLFVBUkksRUFTSixjQVRJLEVBVUosVUFWSSxFQVdKLGNBWEksRUFZSixTQVpJLEVBYUosU0FiSSxFQWNKLFVBZEksRUFlSix3QkFmSSxFQWdCSixRQWhCSTtBQUZSLEdBeEJXLEVBNkNYO0FBQ0E7QUFDRUQsU0FBSyxFQUFFLE1BRFQ7QUFFRUMsUUFBSSxFQUFFLENBQ0osU0FESSxFQUVKLFVBRkksRUFHSiwwQkFISSxFQUlKLFNBSkksRUFLSixPQUxJLEVBTUoscUJBTkksRUFPSixlQVBJLEVBUUosUUFSSSxFQVNKLFdBVEksRUFVSixVQVZJLEVBV0osMEJBWEksRUFZSixVQVpJLEVBYUosU0FiSSxFQWNKLGVBZEksRUFlSixZQWZJO0FBRlIsR0E5Q1csRUFtRVg7QUFDQTtBQUNFRCxTQUFLLEVBQUUsUUFEVDtBQUVFQyxRQUFJLEVBQUUsNkZBQUlDLEtBQUssQ0FBQyxFQUFELENBQVQsRUFBZUMsR0FBZixDQUFtQixVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxhQUFVQyxNQUFNLENBQUNDLFlBQVAsQ0FBb0JGLENBQUMsR0FBRyxFQUF4QixDQUFWO0FBQUEsS0FBbkI7QUFGUixHQXBFVyxDQUFiOztBQTBFQSxNQUFNRyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLEdBQU07QUFDL0JsQixrQkFBYyxDQUFDLENBQUNELFdBQUYsQ0FBZDtBQUNELEdBRkQ7O0FBSUEsU0FDRTtBQUFBLHdDQUFlLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHVSxJQUFJLENBQUNJLEdBQUwsQ0FBUyxVQUFDTSxHQUFELEVBQU1DLEtBQU47QUFBQSxXQUNSLE1BQUMsbURBQUQ7QUFBWSxTQUFHLEVBQUVBLEtBQWpCO0FBQXdCLFlBQU0sRUFBRUQsR0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURRO0FBQUEsR0FBVCxDQURILENBREYsRUFVRSxNQUFDLGlEQUFEO0FBQVUsUUFBSSxFQUFFcEIsV0FBaEI7QUFBNkIsV0FBTyxFQUFFbUIsa0JBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWRixFQVdFLE1BQUMsMERBQUQ7QUFBUyxRQUFJLEVBQUVuQixXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3MkxBREY7QUE0REQsQ0F0SkQ7O0dBQU1GLFc7VUFHVUssMkQ7OztBQXFKREwsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuYmFhYzMyZWY2N2U4M2Y5N2NkZmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBTcGFjZXIgZnJvbSBcIi4uL1NwYWNlclwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tIFwiLi9OYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCBCYWNrZHJvcCBmcm9tIFwiLi4vQmFja2Ryb3BcIjtcclxuaW1wb3J0IEFjY291bnQgZnJvbSBcIi4uLy4uL2NvbnRhaW5lci9BY2NvdW50XCI7XHJcbmltcG9ydCB7IHVzZVN0b3JlIH0gZnJvbSBcIi4uLy4uL2hvb2tzL3N0b3JlL3N0b3JlXCI7XHJcblxyXG5jb25zdCBuYXZpZ2F0aW9ucyA9ICgpID0+IHtcclxuICBjb25zdCBbc2hvd0FjY291bnQsIHNldFNob3dBY2NvdW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgc3RhdGUgPSB1c2VTdG9yZSgpWzBdO1xyXG4gIGNvbnN0IHsgaXNBdXRoLCBkYXRhIH0gPSBzdGF0ZS5hdXRoO1xyXG5cclxuICBjb25zdCBsb2dpblN0YXR1cyA9IGlzQXV0aCA/IChcclxuICAgIDxzcGFuPiB7ZGF0YS5mdWxsTmFtZS5zcGxpdChcIiBcIilbMF19IDwvc3Bhbj5cclxuICApIDogKFxyXG4gICAgPHNwYW4+U2lnbiBpbiAvIFJlZ2lzdGVyPC9zcGFuPlxyXG4gICk7XHJcblxyXG4gIGNvbnN0IG5hdnMgPSBbXHJcbiAgICAvL01lbiBOYXZpZ2F0aW9uIGxpc3RcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiTWVuXCIsXHJcbiAgICAgIGxpc3Q6IFtcclxuICAgICAgICBcIlNhbmRhbHNcIixcclxuICAgICAgICBcIlNuZWFrZXJzXCIsXHJcbiAgICAgICAgXCJMb2FmZXJzXCIsXHJcbiAgICAgICAgXCJCb2F0IFNob2VzXCIsXHJcbiAgICAgICAgXCJPeGZvcmRzXCIsXHJcbiAgICAgICAgXCJCb290cyAmIENodWtrYXNcIixcclxuICAgICAgICBcIlNsaXAtT25zXCIsXHJcbiAgICAgICAgXCJTbGlwcGVyc1wiLFxyXG4gICAgICAgIFwiUnVuIFNob3BcIixcclxuICAgICAgICBcIlNwcmluZyBUcmVuZFwiLFxyXG4gICAgICAgIFwiT3V0ZG9vclwiLFxyXG4gICAgICAgIFwiV2Fsa2luZ1wiLFxyXG4gICAgICAgIFwiQXRobGV0aWNcIixcclxuICAgICAgICBcIkZvb2QgSGVhbHRoICYgV2VsbG5lc3NcIixcclxuICAgICAgICBcIkNhc3VhbFwiLFxyXG4gICAgICAgIFwiRHJlc3MvRXZlbmluZ1wiLFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIC8vV29tZW4gTmF2aWdhdGlvbiBsaXN0XHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIldvbWVuXCIsXHJcbiAgICAgIGxpc3Q6IFtcclxuICAgICAgICBcIlNhbmRhbHNcIixcclxuICAgICAgICBcIlNuZWFrZXJzXCIsXHJcbiAgICAgICAgXCJGbGF0c1wiLFxyXG4gICAgICAgIFwiTXVsZXNcIixcclxuICAgICAgICBcIkhlYWxzICYgUHVtcHNcIixcclxuICAgICAgICBcIkJvb3RzICYgQm9vdGllc1wiLFxyXG4gICAgICAgIFwiQ2xvZ3NcIixcclxuICAgICAgICBcIlNsaXBwZXJzXCIsXHJcbiAgICAgICAgXCJDb21mb3J0IFNob3BcIixcclxuICAgICAgICBcIlJ1biBTaG9wXCIsXHJcbiAgICAgICAgXCJTcHJpbmcgVHJlbmRcIixcclxuICAgICAgICBcIk91dGRvb3JcIixcclxuICAgICAgICBcIldhbGtpbmdcIixcclxuICAgICAgICBcIkF0aGxldGljXCIsXHJcbiAgICAgICAgXCJGb29kIEhlYWx0aCAmIFdlbGxuZXNzXCIsXHJcbiAgICAgICAgXCJDYXN1YWxcIixcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICAvL0tpZHMgTmF2aWdhdGlvbiBsaXN0XHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIktpZHNcIixcclxuICAgICAgbGlzdDogW1xyXG4gICAgICAgIFwiU2FuZGFsc1wiLFxyXG4gICAgICAgIFwiU3dpbXdlYXJcIixcclxuICAgICAgICBcIlNuZWFrZXIgJiBBdGhsZXRpYyBTaG9lc1wiLFxyXG4gICAgICAgIFwiRHJlc3Nlc1wiLFxyXG4gICAgICAgIFwiRmxhdHNcIixcclxuICAgICAgICBcIkp1bXBzdWl0cyAmIFJvbXBlcnNcIixcclxuICAgICAgICBcIlNoaXJ0cyAmIFRvcHNcIixcclxuICAgICAgICBcIlNob3J0c1wiLFxyXG4gICAgICAgIFwiU2xlZXB3ZWFyXCIsXHJcbiAgICAgICAgXCJTbGlwcGVyc1wiLFxyXG4gICAgICAgIFwiU25lYWtlciAmIEF0aGxldGljIFNob2VzXCIsXHJcbiAgICAgICAgXCJTd2ltd2VhclwiLFxyXG4gICAgICAgIFwiU2FuZGFsc1wiLFxyXG4gICAgICAgIFwiU2hpcnRzICYgVG9wc1wiLFxyXG4gICAgICAgIFwiQm9hdCBTaG9lc1wiLFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuXHJcbiAgICAvL01lbiBOYXZpZ2F0aW9uIGxpc3RcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiQnJhbmRzXCIsXHJcbiAgICAgIGxpc3Q6IFsuLi5BcnJheSgyNildLm1hcCgoXywgaSkgPT4gU3RyaW5nLmZyb21DaGFyQ29kZShpICsgNjUpKSxcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3Qgc2hvd0FjY291bnRIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgc2V0U2hvd0FjY291bnQoIXNob3dBY2NvdW50KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtd3JhcHBlclwiPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAge25hdnMubWFwKChuYXYsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8TmF2aWdhdGlvbiBrZXk9e2luZGV4fSB0YXJnZXQ9e25hdn0gLz5cclxuICAgICAgICApKX1cclxuICAgICAgICB7LyogPFNwYWNlciAvPlxyXG4gICAgICAgIDxsaSBvbkNsaWNrPXtzaG93QWNjb3VudEhhbmRsZXJ9IGlkPVwiYWNjb3VudEJ0blwiPlxyXG4gICAgICAgICAge2xvZ2luU3RhdHVzfVxyXG4gICAgICAgIDwvbGk+ICovfVxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8QmFja2Ryb3Agc2hvdz17c2hvd0FjY291bnR9IGNsaWNrZWQ9e3Nob3dBY2NvdW50SGFuZGxlcn0gLz5cclxuICAgICAgPEFjY291bnQgc2hvdz17c2hvd0FjY291bnR9IC8+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAubmF2LXdyYXBwZXIge1xyXG4gICAgICAgICAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgICAgICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm5hdi13cmFwcGVyIHVsIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgICAubmF2LXdyYXBwZXIgdWwgbGk6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAzMHB4IDMwcHg7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIGNvbG9yOiAjMDM1ZDU5O1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgLm5hdi13cmFwcGVyIHVsIGxpOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmhpZGRlbiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnZpc3VhbGx5aGlkZGVuIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmF2aWdhdGlvbnM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=