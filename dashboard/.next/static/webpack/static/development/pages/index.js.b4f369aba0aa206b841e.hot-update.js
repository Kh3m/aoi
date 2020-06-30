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
      productForm: {
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
              value: "null",
              displayValue: "---Select Category---"
            }, {
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
              value: "null",
              displayValue: "---Select Sub-Category---"
            }, {
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
              value: "null",
              displayValue: "---Select Brand---"
            }, {
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
      var updatedProductForm = _objectSpread({}, _this.state.productForm);

      var updatedFormElement = _objectSpread({}, updatedProductForm[inputIdentifier]);

      updatedFormElement.value = event.target.value;
      updatedProductForm[inputIdentifier] = updatedFormElement;

      _this.setState({
        productForm: updatedProductForm
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "addProductHandler", function (event) {
      event.preventDefault();
      var formData = {};

      for (var inputElementIdentifier in _this.state.productForm) {
        formData[inputElementIdentifier] = _this.state.productForm[inputElementIdentifier].value;
      }

      var product = {
        productData: formData
      };
      console.log(product.productData);
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
            lineNumber: 135,
            columnNumber: 9
          }
        }, __jsx("form", {
          className: _productForm_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.search,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 11
          }
        }, __jsx("input", {
          type: "text",
          placeholder: "Enter Product Code",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 13
          }
        }), __jsx("input", {
          type: "submit",
          value: "Search",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 13
          }
        })));
      }

      var formElementArray = [];

      for (var key in this.state.productForm) {
        formElementArray.push({
          id: key,
          config: this.state.productForm[key]
        });
      }

      return __jsx("div", {
        className: _productForm_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.FormsWrapper,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: _productForm_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.Form,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 9
        }
      }, __jsx("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 11
        }
      }, this.props.title), search, __jsx("form", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156,
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
            lineNumber: 159,
            columnNumber: 15
          }
        });
      }), __jsx(_UI_Button_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
        clicked: this.addProductHandler,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rhc2hib2FyZC9Db250ZW50cy9Qcm9kdWN0Rm9ybS9Qcm9kdWN0Rm9ybS5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0Rm9ybSIsInByb2R1Y3RGb3JtIiwidGl0bGUiLCJlbGVtZW50VHlwZSIsImVsZW1lbnRDb25maWciLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsInByaWNlIiwic2l6ZSIsImNvbG9yIiwibWF0ZXJpYWwiLCJmZWF0dXJlIiwiY2F0ZWdvcnkiLCJvcHRpb25zIiwiZGlzcGxheVZhbHVlIiwic3ViQ2F0ZWdvcnkiLCJicmFuZCIsImRlc2NyaXB0aW9uIiwiZXZlbnQiLCJpbnB1dElkZW50aWZpZXIiLCJ1cGRhdGVkUHJvZHVjdEZvcm0iLCJzdGF0ZSIsInVwZGF0ZWRGb3JtRWxlbWVudCIsInRhcmdldCIsInNldFN0YXRlIiwicHJldmVudERlZmF1bHQiLCJmb3JtRGF0YSIsImlucHV0RWxlbWVudElkZW50aWZpZXIiLCJwcm9kdWN0IiwicHJvZHVjdERhdGEiLCJjb25zb2xlIiwibG9nIiwic2VhcmNoIiwicHJvcHMiLCJ1cGRhdGUiLCJjbGFzc2VzIiwiZm9ybUVsZW1lbnRBcnJheSIsImtleSIsInB1c2giLCJpZCIsImNvbmZpZyIsIkZvcm1zV3JhcHBlciIsIkZvcm0iLCJtYXAiLCJmb3JtRWxlbWVudCIsImluZGV4IiwiaW5wdXRDaGFuZ2VIYW5kbGVyIiwiYWRkUHJvZHVjdEhhbmRsZXIiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBOztJQUVNQSxXOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNJO0FBQ05DLGlCQUFXLEVBQUU7QUFDWEMsYUFBSyxFQUFFO0FBQ0xDLHFCQUFXLEVBQUUsT0FEUjtBQUVMQyx1QkFBYSxFQUFFO0FBQ2JDLGdCQUFJLEVBQUUsTUFETztBQUViQyx1QkFB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TUFBWixDQUFtQmxDLEtBSjVCO0FBS0UsaUJBQU8sRUFBRSxpQkFBQ1ksS0FBRDtBQUFBLG1CQUNQLE1BQUksQ0FBQzRCLGtCQUFMLENBQXdCNUIsS0FBeEIsRUFBK0IwQixXQUFXLENBQUNMLEVBQTNDLENBRE87QUFBQSxXQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFEb0I7QUFBQSxPQUFyQixDQUZILEVBY0UsTUFBQywwREFBRDtBQUFRLGVBQU8sRUFBRSxLQUFLUSxpQkFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFkRixDQUhGLENBREYsQ0FERjtBQXdCRDs7OztFQXhLdUJDLCtDOztBQTJLWGpELDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5iNGYzNjlhYmEwYWEyMDZiODQxZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vcHJvZHVjdEZvcm0ubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4uLy4uLy4uL1VJL0lucHV0L0lucHV0XCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uLy4uL1VJL0J1dHRvbi9CdXR0b25cIjtcclxuXHJcbmNsYXNzIFByb2R1Y3RGb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIHByb2R1Y3RGb3JtOiB7XHJcbiAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgZWxlbWVudFR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlByb2R1Y3QgVGl0bGVcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICB9LFxyXG4gICAgICBwcmljZToge1xyXG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImlucHV0XCIsXHJcbiAgICAgICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcclxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlByb2R1Y3QgUHJpY2VcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICB9LFxyXG4gICAgICBzaXplOiB7XHJcbiAgICAgICAgZWxlbWVudFR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlNpemVcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgY29sb3I6IHtcclxuICAgICAgICBlbGVtZW50VHlwZTogXCJpbnB1dFwiLFxyXG4gICAgICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IFwiQ29sb3JcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgbWF0ZXJpYWw6IHtcclxuICAgICAgICBlbGVtZW50VHlwZTogXCJpbnB1dFwiLFxyXG4gICAgICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IFwiUHJvZHVjdCBNYXRlcmlhbFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGZlYXR1cmU6IHtcclxuICAgICAgICBlbGVtZW50VHlwZTogXCJpbnB1dFwiLFxyXG4gICAgICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IFwiUHJvZHVjdCBGZWF0dXJlXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgfSxcclxuICAgICAgY2F0ZWdvcnk6IHtcclxuICAgICAgICBlbGVtZW50VHlwZTogXCJzZWxlY3RcIixcclxuICAgICAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgICAgICBvcHRpb25zOiBbXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwibnVsbFwiLCBkaXNwbGF5VmFsdWU6IFwiLS0tU2VsZWN0IENhdGVnb3J5LS0tXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJtZW5cIiwgZGlzcGxheVZhbHVlOiBcIk1lblwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwid29tZW5cIiwgZGlzcGxheVZhbHVlOiBcIldvbWVuXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJraWRzXCIsIGRpc3BsYXlWYWx1ZTogXCJLaWRzXCIgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgfSxcclxuXHJcbiAgICAgIHN1YkNhdGVnb3J5OiB7XHJcbiAgICAgICAgZWxlbWVudFR5cGU6IFwic2VsZWN0XCIsXHJcbiAgICAgICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICAgICAgb3B0aW9uczogW1xyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIm51bGxcIiwgZGlzcGxheVZhbHVlOiBcIi0tLVNlbGVjdCBTdWItQ2F0ZWdvcnktLS1cIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcInNob2VzXCIsIGRpc3BsYXlWYWx1ZTogXCJTaG9lc1wiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwid29tZW5cIiwgZGlzcGxheVZhbHVlOiBcIldvbWVuXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJLaWRzXCIsIGRpc3BsYXlWYWx1ZTogXCJLaWRzXCIgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgfSxcclxuXHJcbiAgICAgIGJyYW5kOiB7XHJcbiAgICAgICAgZWxlbWVudFR5cGU6IFwic2VsZWN0XCIsXHJcbiAgICAgICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICAgICAgb3B0aW9uczogW1xyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIm51bGxcIiwgZGlzcGxheVZhbHVlOiBcIi0tLVNlbGVjdCBCcmFuZC0tLVwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwibmlrZVwiLCBkaXNwbGF5VmFsdWU6IFwiTmlrZVwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiY2xhcmtzXCIsIGRpc3BsYXlWYWx1ZTogXCJDbGFya3NcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIkd1Y2NpXCIsIGRpc3BsYXlWYWx1ZTogXCJHdWNjaVwiIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGRlc2NyaXB0aW9uOiB7XHJcbiAgICAgICAgZWxlbWVudFR5cGU6IFwidGV4dGFyZWFcIixcclxuICAgICAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcjogXCJQcm9kdWN0IGRlc2NyaXB0aW9uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfTtcclxuICAvL0lucHV0IENoYW5nZSBIYW5kbGVyXHJcbiAgaW5wdXRDaGFuZ2VIYW5kbGVyID0gKGV2ZW50LCBpbnB1dElkZW50aWZpZXIpID0+IHtcclxuICAgIGNvbnN0IHVwZGF0ZWRQcm9kdWN0Rm9ybSA9IHsgLi4udGhpcy5zdGF0ZS5wcm9kdWN0Rm9ybSB9O1xyXG4gICAgY29uc3QgdXBkYXRlZEZvcm1FbGVtZW50ID0geyAuLi51cGRhdGVkUHJvZHVjdEZvcm1baW5wdXRJZGVudGlmaWVyXSB9O1xyXG4gICAgdXBkYXRlZEZvcm1FbGVtZW50LnZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgdXBkYXRlZFByb2R1Y3RGb3JtW2lucHV0SWRlbnRpZmllcl0gPSB1cGRhdGVkRm9ybUVsZW1lbnQ7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgcHJvZHVjdEZvcm06IHVwZGF0ZWRQcm9kdWN0Rm9ybSB9KTtcclxuICB9O1xyXG5cclxuICAvL0FkZGluZyBQcm9kdWN0IEhhbmRsZXJcclxuICBhZGRQcm9kdWN0SGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGZvcm1EYXRhID0ge307XHJcbiAgICBmb3IgKGxldCBpbnB1dEVsZW1lbnRJZGVudGlmaWVyIGluIHRoaXMuc3RhdGUucHJvZHVjdEZvcm0pIHtcclxuICAgICAgZm9ybURhdGFbaW5wdXRFbGVtZW50SWRlbnRpZmllcl0gPSB0aGlzLnN0YXRlLnByb2R1Y3RGb3JtW1xyXG4gICAgICAgIGlucHV0RWxlbWVudElkZW50aWZpZXJcclxuICAgICAgXS52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwcm9kdWN0ID0ge1xyXG4gICAgICBwcm9kdWN0RGF0YTogZm9ybURhdGEsXHJcbiAgICB9O1xyXG4gICAgY29uc29sZS5sb2cocHJvZHVjdC5wcm9kdWN0RGF0YSk7XHJcbiAgfTtcclxuICByZW5kZXIoKSB7XHJcbiAgICBsZXQgc2VhcmNoID0gbnVsbDtcclxuICAgIGlmICh0aGlzLnByb3BzLnVwZGF0ZSkge1xyXG4gICAgICBzZWFyY2ggPSAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2h9PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIFByb2R1Y3QgQ29kZVwiIC8+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTZWFyY2hcIiAvPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZvcm1FbGVtZW50QXJyYXkgPSBbXTtcclxuICAgIGZvciAobGV0IGtleSBpbiB0aGlzLnN0YXRlLnByb2R1Y3RGb3JtKSB7XHJcbiAgICAgIGZvcm1FbGVtZW50QXJyYXkucHVzaCh7XHJcbiAgICAgICAgaWQ6IGtleSxcclxuICAgICAgICBjb25maWc6IHRoaXMuc3RhdGUucHJvZHVjdEZvcm1ba2V5XSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5Gb3Jtc1dyYXBwZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLkZvcm19PlxyXG4gICAgICAgICAgPGgyPnt0aGlzLnByb3BzLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICB7c2VhcmNofVxyXG4gICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgIHsvKiB7dGhpcy5wcm9wcy50eXBlID09IFwiVXBkYXRlIFByb2R1Y3RcIiA/IDx9ICovfVxyXG4gICAgICAgICAgICB7Zm9ybUVsZW1lbnRBcnJheS5tYXAoKGZvcm1FbGVtZW50LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAga2V5PXtmb3JtRWxlbWVudC5pZH1cclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlPXtmb3JtRWxlbWVudC5jb25maWcuZWxlbWVudFR5cGV9XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50Q29uZmlnPXtmb3JtRWxlbWVudC5jb25maWcuZWxlbWVudENvbmZpZ31cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRWxlbWVudC5jb25maWcudmFsdWV9XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VkPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRDaGFuZ2VIYW5kbGVyKGV2ZW50LCBmb3JtRWxlbWVudC5pZClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApKX1cclxuXHJcbiAgICAgICAgICAgIDxCdXR0b24gY2xpY2tlZD17dGhpcy5hZGRQcm9kdWN0SGFuZGxlcn0+QWRkIFByb2R1Y3Q8L0J1dHRvbj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdEZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=