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
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _CarouselForm_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CarouselForm.module.css */ "./components/Dashboard/Contents/CarouselForm/CarouselForm.module.css");
/* harmony import */ var _CarouselForm_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_CarouselForm_module_css__WEBPACK_IMPORTED_MODULE_8__);







var _jsxFileName = "D:\\Projects\\Github Projects\\aoi\\dashboard\\components\\Dashboard\\Contents\\CarouselForm\\CarouselForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


var carousels = [{
  image: "/images/heros/hero.jpg",
  title: "Just In: Clarks most trending shoes"
}, {
  image: "/images/heros/hero1.jpg",
  title: "Just In: Clarks most trending shoes"
}, {
  image: "/images/heros/hero2.jpg",
  title: "Just In: Clarks most trending shoes"
}, {
  image: "/images/heros/hero3.jpg",
  title: "Just In: Clarks most trending shoes"
}];


var CarouselForm = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(CarouselForm, _Component);

  var _super = _createSuper(CarouselForm);

  function CarouselForm() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CarouselForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      carousels: [{
        title: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Carousel Title"
          },
          value: carousels[0].title
        },
        image: {
          elementType: "input",
          elementConfig: {
            type: "file"
          },
          value: ""
        }
      }]
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CarouselForm, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: _CarouselForm_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.FormsWrapper,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 12
        }
      });
    }
  }]);

  return CarouselForm;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rhc2hib2FyZC9Db250ZW50cy9DYXJvdXNlbEZvcm0vQ2Fyb3VzZWxGb3JtLmpzIl0sIm5hbWVzIjpbImNhcm91c2VscyIsImltYWdlIiwidGl0bGUiLCJDYXJvdXNlbEZvcm0iLCJlbGVtZW50VHlwZSIsImVsZW1lbnRDb25maWciLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsImNsYXNzZXMiLCJGb3Jtc1dyYXBwZXIiLCJDb21wb25lbnQiLCJjYXJvdXNlbEZvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EsSUFBTUEsU0FBUyxHQUFHLENBQ2hCO0FBQ0VDLE9BQUssRUFBRSx3QkFEVDtBQUVFQyxPQUFLLEVBQUU7QUFGVCxDQURnQixFQUtoQjtBQUNFRCxPQUFLLEVBQUUseUJBRFQ7QUFFRUMsT0FBSyxFQUFFO0FBRlQsQ0FMZ0IsRUFTaEI7QUFDRUQsT0FBSyxFQUFFLHlCQURUO0FBRUVDLE9BQUssRUFBRTtBQUZULENBVGdCLEVBYWhCO0FBQ0VELE9BQUssRUFBRSx5QkFEVDtBQUVFQyxPQUFLLEVBQUU7QUFGVCxDQWJnQixDQUFsQjtBQW1CQTs7SUFDTUMsWTs7Ozs7Ozs7Ozs7Ozs7OztnTkFDSTtBQUNOSCxlQUFTLEVBQUUsQ0FDVDtBQUNFRSxhQUFLLEVBQUU7QUFDTEUscUJBQVcsRUFBRSxPQURSO0FBRUxDLHVCQUFhLEVBQUU7QUFDYkMsZ0JBQUksRUFBRSxNQURPO0FBRWJDLHVCQUFXLEVBQUU7QUFGQSxXQUZWO0FBTUxDLGVBQUssRUFBRVIsU0FBUyxDQUFDLENBQUQsQ0FBVCxDQUFhRTtBQU5mLFNBRFQ7QUFTRUQsYUFBSyxFQUFFO0FBQ0xHLHFCQUFXLEVBQUUsT0FEUjtBQUVMQyx1QkFBYSxFQUFFO0FBQ2JDLGdCQUFJLEVBQUU7QUFETyxXQUZWO0FBS0xFLGVBQUssRUFBRTtBQUxGO0FBVFQsT0FEUztBQURMLEs7Ozs7Ozs7NkJBcUJDO0FBQ1AsYUFBTztBQUFLLGlCQUFTLEVBQUVDLCtEQUFPLENBQUNDLFlBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBUDtBQUNEOzs7O0VBeEJ3QkMsK0M7O0FBMkJaQywyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuM2UwZWZiYmYwOGMwZjQzNWY2ZTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmNvbnN0IGNhcm91c2VscyA9IFtcclxuICB7XHJcbiAgICBpbWFnZTogXCIvaW1hZ2VzL2hlcm9zL2hlcm8uanBnXCIsXHJcbiAgICB0aXRsZTogXCJKdXN0IEluOiBDbGFya3MgbW9zdCB0cmVuZGluZyBzaG9lc1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9oZXJvcy9oZXJvMS5qcGdcIixcclxuICAgIHRpdGxlOiBcIkp1c3QgSW46IENsYXJrcyBtb3N0IHRyZW5kaW5nIHNob2VzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogXCIvaW1hZ2VzL2hlcm9zL2hlcm8yLmpwZ1wiLFxyXG4gICAgdGl0bGU6IFwiSnVzdCBJbjogQ2xhcmtzIG1vc3QgdHJlbmRpbmcgc2hvZXNcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiBcIi9pbWFnZXMvaGVyb3MvaGVybzMuanBnXCIsXHJcbiAgICB0aXRsZTogXCJKdXN0IEluOiBDbGFya3MgbW9zdCB0cmVuZGluZyBzaG9lc1wiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9DYXJvdXNlbEZvcm0ubW9kdWxlLmNzc1wiO1xyXG5jbGFzcyBDYXJvdXNlbEZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgY2Fyb3VzZWxzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgZWxlbWVudFR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkNhcm91c2VsIFRpdGxlXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdmFsdWU6IGNhcm91c2Vsc1swXS50aXRsZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGltYWdlOiB7XHJcbiAgICAgICAgICBlbGVtZW50VHlwZTogXCJpbnB1dFwiLFxyXG4gICAgICAgICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICAgICAgICB0eXBlOiBcImZpbGVcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9O1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5Gb3Jtc1dyYXBwZXJ9PjwvZGl2PjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNhcm91c2VsRm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==