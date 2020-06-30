webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Dashboard/Contents/ProductForm/ProductForm.js":
/*!******************************************************************!*\
  !*** ./components/Dashboard/Contents/ProductForm/ProductForm.js ***!
  \******************************************************************/
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
/* harmony import */ var _productForm_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./productForm.module.css */ "./components/Dashboard/Contents/ProductForm/productForm.module.css");
/* harmony import */ var _productForm_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_productForm_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _UI_Input_Input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../UI/Input/Input */ "./components/UI/Input/Input.js");
/* harmony import */ var _UI_Button_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../UI/Button/Button */ "./components/UI/Button/Button.js");







var _jsxFileName = "D:\\Projects\\Github Projects\\aoi\\dashboard\\components\\Dashboard\\Contents\\ProductForm\\ProductForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var ProductForm = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(ProductForm, _Component);

  var _super = _createSuper(ProductForm);

  function ProductForm() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ProductForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      ProductForm: {
        title: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Product Title"
          },
          value: ""
        },
        price: {
          elementType: "input",
          elementConfig: {
            type: "number",
            placeholder: "Product Price"
          },
          value: ""
        },
        size: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Size"
          },
          value: ""
        },
        color: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Color"
          },
          value: ""
        },
        material: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Product Material"
          },
          value: ""
        },
        feature: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Product Feature"
          },
          value: ""
        },
        category: {
          elementType: "select",
          elementConfig: {
            options: [{
              value: "men",
              displayValue: "Men"
            }, {
              value: "women",
              displayValue: "Women"
            }, {
              value: "kids",
              displayValue: "Kids"
            }]
          },
          value: ""
        },
        subCategory: {
          elementType: "select",
          elementConfig: {
            options: [{
              value: "shoes",
              displayValue: "Shoes"
            }, {
              value: "women",
              displayValue: "Women"
            }, {
              value: "Kids",
              displayValue: "Kids"
            }]
          },
          value: ""
        },
        brand: {
          elementType: "select",
          elementConfig: {
            options: [{
              value: "nike",
              displayValue: "Nike"
            }, {
              value: "clarks",
              displayValue: "Clarks"
            }, {
              value: "Gucci",
              displayValue: "Gucci"
            }]
          },
          value: ""
        },
        description: {
          elementType: "textarea",
          elementConfig: {
            placeholder: "Product description"
          },
          value: ""
        }
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "inputChangeHandler", function (event, inputIdentifier) {
      var updatedProductForm = _objectSpread({}, _this.state.ProductForm);

      var updatedFormElement = _objectSpread({}, updatedProductForm[inputIdentifier]);
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ProductForm, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var search = null;

      if (this.props.update) {
        search = __jsx("div", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 9
          }
        }, __jsx("form", {
          className: _productForm_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.search,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 11
          }
        }, __jsx("input", {
          type: "text",
          placeholder: "Enter Product Code",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 13
          }
        }), __jsx("input", {
          type: "submit",
          value: "Search",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 13
          }
        })));
      }

      var formElementArray = [];

      for (var key in this.state.ProductForm) {
        formElementArray.push({
          id: key,
          config: this.state.ProductForm[key]
        });
      }

      return __jsx("div", {
        className: _productForm_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.FormsWrapper,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: _productForm_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.Form,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 9
        }
      }, __jsx("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 11
        }
      }, this.props.title), search, __jsx("form", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 11
        }
      }, formElementArray.map(function (formElement, index) {
        return __jsx(_UI_Input_Input__WEBPACK_IMPORTED_MODULE_9__["default"], {
          key: formElement.id,
          elementType: formElement.config.elementType,
          elementConfig: formElement.config.elementConfig,
          value: formElement.config.value,
          changed: function changed(event) {
            return _this2.inputChangeHandler(event, formElement.id);
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 15
          }
        });
      }), __jsx(_UI_Button_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 13
        }
      }, "Add Product"))));
    }
  }]);

  return ProductForm;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ProductForm);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rhc2hib2FyZC9Db250ZW50cy9Qcm9kdWN0Rm9ybS9Qcm9kdWN0Rm9ybS5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0Rm9ybSIsInRpdGxlIiwiZWxlbWVudFR5cGUiLCJlbGVtZW50Q29uZmlnIiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJwcmljZSIsInNpemUiLCJjb2xvciIsIm1hdGVyaWFsIiwiZmVhdHVyZSIsImNhdGVnb3J5Iiwib3B0aW9ucyIsImRpc3BsYXlWYWx1ZSIsInN1YkNhdGVnb3J5IiwiYnJhbmQiLCJkZXNjcmlwdGlvbiIsImV2ZW50IiwiaW5wdXRJZGVudGlmaWVyIiwidXBkYXRlZFByb2R1Y3RGb3JtIiwic3RhdGUiLCJ1cGRhdGVkRm9ybUVsZW1lbnQiLCJzZWFyY2giLCJwcm9wcyIsInVwZGF0ZSIsImNsYXNzZXMiLCJmb3JtRWxlbWVudEFycmF5Iiwia2V5IiwicHVzaCIsImlkIiwiY29uZmlnIiwiRm9ybXNXcmFwcGVyIiwiRm9ybSIsIm1hcCIsImZvcm1FbGVtZW50IiwiaW5kZXgiLCJpbnB1dENoYW5nZUhhbmRsZXIiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBOztJQUVNQSxXOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNJO0FBQ05BLGlCQUFXLEVBQUU7QUFDWEMsYUFBSyxFQUFFO0FBQ0xDLHFCQUFXLEVBQUUsT0FEUjtBQUVMQyx1QkFBYSxFQUFFO0FBQ2JDLGdCQUFJLEVBQUUsTUFETztBQUViQyx1QkFBVyxFQUFFO0FBRkEsV0FGVjtBQU1MQyxlQUFLLEVBQUU7QUFORixTQURJO0FBU1hDLGFBQUssRUFBRTtBQUNMTCxxQkFBVyxFQUFFLE9BRFI7QUFFTEMsdUJBQWEsRUFBRTtBQUNiQyxnQkFBSSxFQUFFLFFBRE87QUFFYkMsdUJBQVcsRUFBRTtBQUZBLFdBRlY7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QUFaLENBQW1CN0IsV0FGbEM7QUFHRSx1QkFBYSxFQUFFaUMsV0FBVyxDQUFDSixNQUFaLENBQW1CNUIsYUFIcEM7QUFJRSxlQUFLLEVBQUVnQyxXQUFXLENBQUNKLE1BQVosQ0FBbUJ6QixLQUo1QjtBQUtFLGlCQUFPLEVBQUUsaUJBQUNZLEtBQUQ7QUFBQSxtQkFDUCxNQUFJLENBQUNtQixrQkFBTCxDQUF3Qm5CLEtBQXhCLEVBQStCaUIsV0FBVyxDQUFDTCxFQUEzQyxDQURPO0FBQUEsV0FMWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRG9CO0FBQUEsT0FBckIsQ0FGSCxFQWNFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFkRixDQUhGLENBREYsQ0FERjtBQXdCRDs7OztFQWpKdUJRLCtDOztBQW9KWHRDLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5kNTI0ZjM4MzgyMzQyZmJiNDUzOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vcHJvZHVjdEZvcm0ubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4uLy4uLy4uL1VJL0lucHV0L0lucHV0XCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uLy4uL1VJL0J1dHRvbi9CdXR0b25cIjtcclxuXHJcbmNsYXNzIFByb2R1Y3RGb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIFByb2R1Y3RGb3JtOiB7XHJcbiAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgZWxlbWVudFR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlByb2R1Y3QgVGl0bGVcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICB9LFxyXG4gICAgICBwcmljZToge1xyXG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImlucHV0XCIsXHJcbiAgICAgICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcclxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlByb2R1Y3QgUHJpY2VcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICB9LFxyXG4gICAgICBzaXplOiB7XHJcbiAgICAgICAgZWxlbWVudFR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlNpemVcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgY29sb3I6IHtcclxuICAgICAgICBlbGVtZW50VHlwZTogXCJpbnB1dFwiLFxyXG4gICAgICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IFwiQ29sb3JcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgbWF0ZXJpYWw6IHtcclxuICAgICAgICBlbGVtZW50VHlwZTogXCJpbnB1dFwiLFxyXG4gICAgICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IFwiUHJvZHVjdCBNYXRlcmlhbFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGZlYXR1cmU6IHtcclxuICAgICAgICBlbGVtZW50VHlwZTogXCJpbnB1dFwiLFxyXG4gICAgICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IFwiUHJvZHVjdCBGZWF0dXJlXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgfSxcclxuICAgICAgY2F0ZWdvcnk6IHtcclxuICAgICAgICBlbGVtZW50VHlwZTogXCJzZWxlY3RcIixcclxuICAgICAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgICAgICBvcHRpb25zOiBbXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwibWVuXCIsIGRpc3BsYXlWYWx1ZTogXCJNZW5cIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIndvbWVuXCIsIGRpc3BsYXlWYWx1ZTogXCJXb21lblwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwia2lkc1wiLCBkaXNwbGF5VmFsdWU6IFwiS2lkc1wiIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBzdWJDYXRlZ29yeToge1xyXG4gICAgICAgIGVsZW1lbnRUeXBlOiBcInNlbGVjdFwiLFxyXG4gICAgICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgICAgIG9wdGlvbnM6IFtcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJzaG9lc1wiLCBkaXNwbGF5VmFsdWU6IFwiU2hvZXNcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIndvbWVuXCIsIGRpc3BsYXlWYWx1ZTogXCJXb21lblwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiS2lkc1wiLCBkaXNwbGF5VmFsdWU6IFwiS2lkc1wiIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBicmFuZDoge1xyXG4gICAgICAgIGVsZW1lbnRUeXBlOiBcInNlbGVjdFwiLFxyXG4gICAgICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgICAgIG9wdGlvbnM6IFtcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJuaWtlXCIsIGRpc3BsYXlWYWx1ZTogXCJOaWtlXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJjbGFya3NcIiwgZGlzcGxheVZhbHVlOiBcIkNsYXJrc1wiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiR3VjY2lcIiwgZGlzcGxheVZhbHVlOiBcIkd1Y2NpXCIgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgfSxcclxuICAgICAgZGVzY3JpcHRpb246IHtcclxuICAgICAgICBlbGVtZW50VHlwZTogXCJ0ZXh0YXJlYVwiLFxyXG4gICAgICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlByb2R1Y3QgZGVzY3JpcHRpb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGlucHV0Q2hhbmdlSGFuZGxlciA9IChldmVudCwgaW5wdXRJZGVudGlmaWVyKSA9PiB7XHJcbiAgICBjb25zdCB1cGRhdGVkUHJvZHVjdEZvcm0gPSB7IC4uLnRoaXMuc3RhdGUuUHJvZHVjdEZvcm0gfTtcclxuICAgIGNvbnN0IHVwZGF0ZWRGb3JtRWxlbWVudCA9IHsgLi4udXBkYXRlZFByb2R1Y3RGb3JtW2lucHV0SWRlbnRpZmllcl0gfTtcclxuICB9O1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGxldCBzZWFyY2ggPSBudWxsO1xyXG4gICAgaWYgKHRoaXMucHJvcHMudXBkYXRlKSB7XHJcbiAgICAgIHNlYXJjaCA9IChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaH0+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgUHJvZHVjdCBDb2RlXCIgLz5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlNlYXJjaFwiIC8+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZm9ybUVsZW1lbnRBcnJheSA9IFtdO1xyXG4gICAgZm9yIChsZXQga2V5IGluIHRoaXMuc3RhdGUuUHJvZHVjdEZvcm0pIHtcclxuICAgICAgZm9ybUVsZW1lbnRBcnJheS5wdXNoKHtcclxuICAgICAgICBpZDoga2V5LFxyXG4gICAgICAgIGNvbmZpZzogdGhpcy5zdGF0ZS5Qcm9kdWN0Rm9ybVtrZXldLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLkZvcm1zV3JhcHBlcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuRm9ybX0+XHJcbiAgICAgICAgICA8aDI+e3RoaXMucHJvcHMudGl0bGV9PC9oMj5cclxuICAgICAgICAgIHtzZWFyY2h9XHJcbiAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgey8qIHt0aGlzLnByb3BzLnR5cGUgPT0gXCJVcGRhdGUgUHJvZHVjdFwiID8gPH0gKi99XHJcbiAgICAgICAgICAgIHtmb3JtRWxlbWVudEFycmF5Lm1hcCgoZm9ybUVsZW1lbnQsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBrZXk9e2Zvcm1FbGVtZW50LmlkfVxyXG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU9e2Zvcm1FbGVtZW50LmNvbmZpZy5lbGVtZW50VHlwZX1cclxuICAgICAgICAgICAgICAgIGVsZW1lbnRDb25maWc9e2Zvcm1FbGVtZW50LmNvbmZpZy5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1FbGVtZW50LmNvbmZpZy52YWx1ZX1cclxuICAgICAgICAgICAgICAgIGNoYW5nZWQ9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5pbnB1dENoYW5nZUhhbmRsZXIoZXZlbnQsIGZvcm1FbGVtZW50LmlkKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgPEJ1dHRvbj5BZGQgUHJvZHVjdDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0Rm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==