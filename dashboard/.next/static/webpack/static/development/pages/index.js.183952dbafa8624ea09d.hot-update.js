webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Dashboard/Contents/CarouselForm/CarouselForm.js":
/*!********************************************************************!*\
  !*** ./components/Dashboard/Contents/CarouselForm/CarouselForm.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _CarouselForm_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CarouselForm.module.css */ "./components/Dashboard/Contents/CarouselForm/CarouselForm.module.css");
/* harmony import */ var _CarouselForm_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_CarouselForm_module_css__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "D:\\Projects\\Github Projects\\aoi\\dashboard\\components\\Dashboard\\Contents\\CarouselForm\\CarouselForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var CarouselForm = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(CarouselForm, _Component);

  var _super = _createSuper(CarouselForm);

  function CarouselForm() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CarouselForm);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CarouselForm, [{
    key: "render",
    value: function render() {
      var _this = this;

      var carousels = [{
        image: "/images/heros/hero.jpg",
        title: "Just In: Clarks most trending shoes",
        body: "Get yours with just a few clicks"
      }, {
        image: "/images/heros/hero1.jpg",
        title: "Just In: Clarks most trending shoes",
        body: "Get yours with just a few clicks"
      }, {
        image: "/images/heros/hero2.jpg",
        title: "Just In: Clarks most trending shoes",
        body: "Get yours with just a few clicks"
      }, {
        image: "/images/heros/hero3.jpg",
        title: "Just In: Clarks most trending shoes",
        body: "Get yours with just a few clicks"
      }];

      var carouselSelectHandler = function carouselSelectHandler(index) {};

      return __jsx("div", {
        className: _CarouselForm_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.FormsWrapper,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: _CarouselForm_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.Form,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 9
        }
      }, __jsx("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }
      }, "Carousels List"), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }
      }, carousels.map(function (carousel, index) {
        return __jsx("div", {
          className: _CarouselForm_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.display,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 15
          }
        }, __jsx("div", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 17
          }
        }, __jsx("img", {
          src: carousel.image,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 19
          }
        })), __jsx("div", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 17
          }
        }, carousel.title), __jsx("div", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 17
          }
        }, carousel.body), __jsx("button", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 17
          }
        }, "Update"));
      })), __jsx("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }
      }, "Update Carousel"), __jsx("form", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 13
        }
      }, __jsx("input", {
        type: "text",
        placeholder: "Carousel Title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 15
        }
      }), __jsx("input", {
        type: "text",
        placeholder: "Carousel Caption",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 15
        }
      })), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 13
        }
      }, __jsx("input", {
        type: "file",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 15
        }
      })), __jsx("input", {
        type: "submit",
        value: "Update Carousel",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 13
        }
      }))));
    }
  }]);

  return CarouselForm;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (carouselForm);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rhc2hib2FyZC9Db250ZW50cy9DYXJvdXNlbEZvcm0vQ2Fyb3VzZWxGb3JtLmpzIl0sIm5hbWVzIjpbIkNhcm91c2VsRm9ybSIsImNhcm91c2VscyIsImltYWdlIiwidGl0bGUiLCJib2R5IiwiY2Fyb3VzZWxTZWxlY3RIYW5kbGVyIiwiaW5kZXgiLCJjbGFzc2VzIiwiRm9ybXNXcmFwcGVyIiwiRm9ybSIsIm1hcCIsImNhcm91c2VsIiwiZGlzcGxheSIsIkNvbXBvbmVudCIsImNhcm91c2VsRm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBOztJQUNNQSxZOzs7Ozs7Ozs7Ozs7OzZCQUNLO0FBQUE7O0FBQ1AsVUFBTUMsU0FBUyxHQUFHLENBQ2hCO0FBQ0VDLGFBQUssRUFBRSx3QkFEVDtBQUVFQyxhQUFLLEVBQUUscUNBRlQ7QUFHRUMsWUFBSSxFQUFFO0FBSFIsT0FEZ0IsRUFNaEI7QUFDRUYsYUFBSyxFQUFFLHlCQURUO0FBRUVDLGFBQUssRUFBRSxxQ0FGVDtBQUdFQyxZQUFJLEVBQUU7QUFIUixPQU5nQixFQVdoQjtBQUNFRixhQUFLLEVBQUUseUJBRFQ7QUFFRUMsYUFBSyxFQUFFLHFDQUZUO0FBR0VDLFlBQUksRUFBRTtBQUhSLE9BWGdCLEVBZ0JoQjtBQUNFRixhQUFLLEVBQUUseUJBRFQ7QUFFRUMsYUFBSyxFQUFFLHFDQUZUO0FBR0VDLFlBQUksRUFBRTtBQUhSLE9BaEJnQixDQUFsQjs7QUF1QkEsVUFBTUMscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixDQUFDQyxLQUFELEVBQVcsQ0FBRSxDQUEzQzs7QUFFQSxhQUNFO0FBQUssaUJBQVMsRUFBRUMsK0RBQU8sQ0FBQ0MsWUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUssaUJBQVMsRUFBRUQsK0RBQU8sQ0FBQ0UsSUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0dSLFNBQVMsQ0FBQ1MsR0FBVixDQUFjLFVBQUNDLFFBQUQsRUFBV0wsS0FBWDtBQUFBLGVBQ2I7QUFBSyxtQkFBUyxFQUFFQywrREFBTyxDQUFDSyxPQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNFO0FBQUssYUFBRyxFQUFFRCxRQUFRLENBQUNULEtBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERixDQURGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFNUyxRQUFRLENBQUNSLEtBQWYsQ0FKRixFQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBTVEsUUFBUSxDQUFDUCxJQUFmLENBTEYsRUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQU5GLENBRGE7QUFBQSxPQUFkLENBREgsQ0FGRixFQWNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBZEYsRUFlRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsbUJBQVcsRUFBQyxnQkFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLEVBRUU7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixtQkFBVyxFQUFDLGtCQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkYsQ0FGRixFQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixDQVBGLEVBVUU7QUFBTyxZQUFJLEVBQUMsUUFBWjtBQUFxQixhQUFLLEVBQUMsaUJBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFWRixDQWZGLENBREYsQ0FERjtBQWdDRDs7OztFQTNEd0JTLCtDOztBQThEWkMsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjE4Mzk1MmRiYWZhODYyNGVhMDlkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vQ2Fyb3VzZWxGb3JtLm1vZHVsZS5jc3NcIjtcclxuY2xhc3MgQ2Fyb3VzZWxGb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBjYXJvdXNlbHMgPSBbXHJcbiAgICAgIHtcclxuICAgICAgICBpbWFnZTogXCIvaW1hZ2VzL2hlcm9zL2hlcm8uanBnXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiSnVzdCBJbjogQ2xhcmtzIG1vc3QgdHJlbmRpbmcgc2hvZXNcIixcclxuICAgICAgICBib2R5OiBcIkdldCB5b3VycyB3aXRoIGp1c3QgYSBmZXcgY2xpY2tzXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpbWFnZTogXCIvaW1hZ2VzL2hlcm9zL2hlcm8xLmpwZ1wiLFxyXG4gICAgICAgIHRpdGxlOiBcIkp1c3QgSW46IENsYXJrcyBtb3N0IHRyZW5kaW5nIHNob2VzXCIsXHJcbiAgICAgICAgYm9keTogXCJHZXQgeW91cnMgd2l0aCBqdXN0IGEgZmV3IGNsaWNrc1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9oZXJvcy9oZXJvMi5qcGdcIixcclxuICAgICAgICB0aXRsZTogXCJKdXN0IEluOiBDbGFya3MgbW9zdCB0cmVuZGluZyBzaG9lc1wiLFxyXG4gICAgICAgIGJvZHk6IFwiR2V0IHlvdXJzIHdpdGgganVzdCBhIGZldyBjbGlja3NcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGltYWdlOiBcIi9pbWFnZXMvaGVyb3MvaGVybzMuanBnXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiSnVzdCBJbjogQ2xhcmtzIG1vc3QgdHJlbmRpbmcgc2hvZXNcIixcclxuICAgICAgICBib2R5OiBcIkdldCB5b3VycyB3aXRoIGp1c3QgYSBmZXcgY2xpY2tzXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0IGNhcm91c2VsU2VsZWN0SGFuZGxlciA9IChpbmRleCkgPT4ge307XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuRm9ybXNXcmFwcGVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5Gb3JtfT5cclxuICAgICAgICAgIDxoMj5DYXJvdXNlbHMgTGlzdDwvaDI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7Y2Fyb3VzZWxzLm1hcCgoY2Fyb3VzZWwsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGlzcGxheX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Y2Fyb3VzZWwuaW1hZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+e2Nhcm91c2VsLnRpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj57Y2Fyb3VzZWwuYm9keX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24+VXBkYXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aDI+VXBkYXRlIENhcm91c2VsPC9oMj5cclxuICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICB7Lyoge3Byb3BzLnR5cGUgPT0gXCJVcGRhdGUgUHJvZHVjdFwiID8gPH0gKi99XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJDYXJvdXNlbCBUaXRsZVwiIC8+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJDYXJvdXNlbCBDYXB0aW9uXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiVXBkYXRlIENhcm91c2VsXCIgLz5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2Fyb3VzZWxGb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9