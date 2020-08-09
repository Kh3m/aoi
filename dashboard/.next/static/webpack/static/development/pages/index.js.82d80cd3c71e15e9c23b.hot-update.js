webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Dashboard/SideBar/SideBar.js":
/*!*************************************************!*\
  !*** ./components/Dashboard/SideBar/SideBar.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SideBar_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SideBar.module.css */ "./components/Dashboard/SideBar/SideBar.module.css");
/* harmony import */ var _SideBar_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_SideBar_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Logo */ "./components/Logo.js");
var _this = undefined,
    _jsxFileName = "D:\\Projects\\Github Projects\\aoi\\dashboard\\components\\Dashboard\\SideBar\\SideBar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var links = [{
  title: "Dashboard",
  icon: "/images/home.png",
  type: "dashboard"
}, {
  title: "Product",
  icon: "/images/plus.png",
  type: "addProduct"
}, {
  title: "Update Product",
  icon: "/images/list.png",
  type: "updateProduct"
}, {
  title: "Carousel",
  icon: "/images/edit.png",
  type: "carousel"
}, {
  title: "Popular Categories",
  icon: "/images/edit.png",
  type: "popularCategories"
}, {
  title: "Footwear Favorites",
  icon: "/images/edit.png",
  type: "favorites"
}, {
  title: "Trending Brands",
  icon: "/images/edit.png",
  type: "trendingBrands"
}];

var sideBar = function sideBar(props) {
  return __jsx("div", {
    className: _SideBar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.sideBar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, __jsx("nav", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, __jsx("ul", {
    className: _SideBar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.sideNav,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, links.map(function (nav, index) {
    return __jsx("li", {
      key: index,
      onClick: function onClick() {
        return props.clicked(nav.type);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: nav.icon,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 15
      }
    }), __jsx("a", {
      href: "#",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 15
      }
    }, nav.title));
  }), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/images/power.png",
    alt: "icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }), __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, "Logout")))));
};

/* harmony default export */ __webpack_exports__["default"] = (sideBar);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rhc2hib2FyZC9TaWRlQmFyL1NpZGVCYXIuanMiXSwibmFtZXMiOlsibGlua3MiLCJ0aXRsZSIsImljb24iLCJ0eXBlIiwic2lkZUJhciIsInByb3BzIiwiY2xhc3NlcyIsInNpZGVOYXYiLCJtYXAiLCJuYXYiLCJpbmRleCIsImNsaWNrZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsS0FBSyxHQUFHLENBQ1o7QUFDRUMsT0FBSyxFQUFFLFdBRFQ7QUFFRUMsTUFBSSxFQUFFLGtCQUZSO0FBR0VDLE1BQUksRUFBRTtBQUhSLENBRFksRUFPWjtBQUNFRixPQUFLLEVBQUUsU0FEVDtBQUVFQyxNQUFJLEVBQUUsa0JBRlI7QUFHRUMsTUFBSSxFQUFFO0FBSFIsQ0FQWSxFQWFaO0FBQ0VGLE9BQUssRUFBRSxnQkFEVDtBQUVFQyxNQUFJLEVBQUUsa0JBRlI7QUFHRUMsTUFBSSxFQUFFO0FBSFIsQ0FiWSxFQW1CWjtBQUNFRixPQUFLLEVBQUUsVUFEVDtBQUVFQyxNQUFJLEVBQUUsa0JBRlI7QUFHRUMsTUFBSSxFQUFFO0FBSFIsQ0FuQlksRUF5Qlo7QUFDRUYsT0FBSyxFQUFFLG9CQURUO0FBRUVDLE1BQUksRUFBRSxrQkFGUjtBQUdFQyxNQUFJLEVBQUU7QUFIUixDQXpCWSxFQThCWjtBQUNFRixPQUFLLEVBQUUsb0JBRFQ7QUFFRUMsTUFBSSxFQUFFLGtCQUZSO0FBR0VDLE1BQUksRUFBRTtBQUhSLENBOUJZLEVBbUNaO0FBQ0VGLE9BQUssRUFBRSxpQkFEVDtBQUVFQyxNQUFJLEVBQUUsa0JBRlI7QUFHRUMsTUFBSSxFQUFFO0FBSFIsQ0FuQ1ksQ0FBZDs7QUF5Q0EsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3pCLFNBQ0U7QUFBSyxhQUFTLEVBQUVDLDBEQUFPLENBQUNGLE9BQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUVFLDBEQUFPLENBQUNDLE9BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1AsS0FBSyxDQUFDUSxHQUFOLENBQVUsVUFBQ0MsR0FBRCxFQUFNQyxLQUFOO0FBQUEsV0FDVDtBQUFJLFNBQUcsRUFBRUEsS0FBVDtBQUFnQixhQUFPLEVBQUU7QUFBQSxlQUFNTCxLQUFLLENBQUNNLE9BQU4sQ0FBY0YsR0FBRyxDQUFDTixJQUFsQixDQUFOO0FBQUEsT0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssU0FBRyxFQUFFTSxHQUFHLENBQUNQLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBRUU7QUFBRyxVQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWFPLEdBQUcsQ0FBQ1IsS0FBakIsQ0FGRixDQURTO0FBQUEsR0FBVixDQURILEVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFDLG1CQUFUO0FBQTZCLE9BQUcsRUFBQyxNQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFHLFFBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixDQVBGLENBREYsQ0FERixDQURGO0FBa0JELENBbkJEOztBQXFCZUcsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjgyZDgwY2QzYzcxZTE1ZTljMjNiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL1NpZGVCYXIubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgTG9nbyBmcm9tIFwiLi4vLi4vTG9nb1wiO1xyXG5jb25zdCBsaW5rcyA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogXCJEYXNoYm9hcmRcIixcclxuICAgIGljb246IFwiL2ltYWdlcy9ob21lLnBuZ1wiLFxyXG4gICAgdHlwZTogXCJkYXNoYm9hcmRcIixcclxuICB9LFxyXG5cclxuICB7XHJcbiAgICB0aXRsZTogXCJQcm9kdWN0XCIsXHJcbiAgICBpY29uOiBcIi9pbWFnZXMvcGx1cy5wbmdcIixcclxuICAgIHR5cGU6IFwiYWRkUHJvZHVjdFwiLFxyXG4gIH0sXHJcblxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlVwZGF0ZSBQcm9kdWN0XCIsXHJcbiAgICBpY29uOiBcIi9pbWFnZXMvbGlzdC5wbmdcIixcclxuICAgIHR5cGU6IFwidXBkYXRlUHJvZHVjdFwiLFxyXG4gIH0sXHJcblxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkNhcm91c2VsXCIsXHJcbiAgICBpY29uOiBcIi9pbWFnZXMvZWRpdC5wbmdcIixcclxuICAgIHR5cGU6IFwiY2Fyb3VzZWxcIixcclxuICB9LFxyXG5cclxuICB7XHJcbiAgICB0aXRsZTogXCJQb3B1bGFyIENhdGVnb3JpZXNcIixcclxuICAgIGljb246IFwiL2ltYWdlcy9lZGl0LnBuZ1wiLFxyXG4gICAgdHlwZTogXCJwb3B1bGFyQ2F0ZWdvcmllc1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiRm9vdHdlYXIgRmF2b3JpdGVzXCIsXHJcbiAgICBpY29uOiBcIi9pbWFnZXMvZWRpdC5wbmdcIixcclxuICAgIHR5cGU6IFwiZmF2b3JpdGVzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJUcmVuZGluZyBCcmFuZHNcIixcclxuICAgIGljb246IFwiL2ltYWdlcy9lZGl0LnBuZ1wiLFxyXG4gICAgdHlwZTogXCJ0cmVuZGluZ0JyYW5kc1wiLFxyXG4gIH0sXHJcbl07XHJcbmNvbnN0IHNpZGVCYXIgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2lkZUJhcn0+XHJcbiAgICAgIDxuYXY+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT17Y2xhc3Nlcy5zaWRlTmF2fT5cclxuICAgICAgICAgIHtsaW5rcy5tYXAoKG5hdiwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9IG9uQ2xpY2s9eygpID0+IHByb3BzLmNsaWNrZWQobmF2LnR5cGUpfT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17bmF2Lmljb259IC8+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj57bmF2LnRpdGxlfTwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvcG93ZXIucG5nXCIgYWx0PVwiaWNvblwiIC8+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+TG9nb3V0PC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L25hdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzaWRlQmFyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9