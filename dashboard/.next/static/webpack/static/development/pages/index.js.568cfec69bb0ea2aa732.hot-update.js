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
      var productData = {};

      for (var inputElementIdentifier in _this.state.productForm) {
        productData[inputElementIdentifier] = _this.state.p;
      }

      var product = {};
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
            lineNumber: 129,
            columnNumber: 9
          }
        }, __jsx("form", {
          className: _productForm_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.search,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 11
          }
        }, __jsx("input", {
          type: "text",
          placeholder: "Enter Product Code",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 13
          }
        }), __jsx("input", {
          type: "submit",
          value: "Search",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132,
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
          lineNumber: 146,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: _productForm_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.Form,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 9
        }
      }, __jsx("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 11
        }
      }, this.props.title), search, __jsx("form", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150,
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
            lineNumber: 153,
            columnNumber: 15
          }
        });
      }), __jsx(_UI_Button_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
        clicked: this.addProductHandler,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rhc2hib2FyZC9Db250ZW50cy9Qcm9kdWN0Rm9ybS9Qcm9kdWN0Rm9ybS5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0Rm9ybSIsInByb2R1Y3RGb3JtIiwidGl0bGUiLCJlbGVtZW50VHlwZSIsImVsZW1lbnRDb25maWciLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsInByaWNlIiwic2l6ZSIsImNvbG9yIiwibWF0ZXJpYWwiLCJmZWF0dXJlIiwiY2F0ZWdvcnkiLCJvcHRpb25zIiwiZGlzcGxheVZhbHVlIiwic3ViQ2F0ZWdvcnkiLCJicmFuZCIsImRlc2NyaXB0aW9uIiwiZXZlbnQiLCJpbnB1dElkZW50aWZpZXIiLCJ1cGRhdGVkUHJvZHVjdEZvcm0iLCJzdGF0ZSIsInVwZGF0ZWRGb3JtRWxlbWVudCIsInRhcmdldCIsInNldFN0YXRlIiwicHJldmVudERlZmF1bHQiLCJwcm9kdWN0RGF0YSIsImlucHV0RWxlbWVudElkZW50aWZpZXIiLCJwIiwicHJvZHVjdCIsInNlYXJjaCIsInByb3BzIiwidXBkYXRlIiwiY2xhc3NlcyIsImZvcm1FbGVtZW50QXJyYXkiLCJrZXkiLCJwdXNoIiwiaWQiLCJjb25maWciLCJGb3Jtc1dyYXBwZXIiLCJGb3JtIiwibWFwIiwiZm9ybUVsZW1lbnQiLCJpbmRleCIsImlucHV0Q2hhbmdlSGFuZGxlciIsImFkZFByb2R1Y3RIYW5kbGVyIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7SUFFTUEsVzs7Ozs7Ozs7Ozs7Ozs7OztnTkFDSTtBQUNOQyxpQkFBVyxFQUFFO0FBQ1hDLGFBQUssRUFBRTtBQUNMQyxxQkFBVyxFQUFFLE9BRFI7QUFFTEMsdUJBQWEsRUFBRTtBQUNiQyxnQkFBSSxFQUFFLE1BRE87QUFFYkMsdUJBQVcsRUFBRTtBQUZBLFdBRlY7QUFNTEMs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QUFBLFdBTFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURvQjtBQUFBLE9BQXJCLENBRkgsRUFjRSxNQUFDLDBEQUFEO0FBQVEsZUFBTyxFQUFFLEtBQUtRLGlCQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQWRGLENBSEYsQ0FERixDQURGO0FBd0JEOzs7O0VBbEt1QkMsK0M7O0FBcUtYL0MsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjU2OGNmZWM2OWJiMGVhMmFhNzMyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9wcm9kdWN0Rm9ybS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vLi4vLi4vVUkvSW5wdXQvSW5wdXRcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vLi4vVUkvQnV0dG9uL0J1dHRvblwiO1xyXG5cclxuY2xhc3MgUHJvZHVjdEZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgcHJvZHVjdEZvcm06IHtcclxuICAgICAgdGl0bGU6IHtcclxuICAgICAgICBlbGVtZW50VHlwZTogXCJpbnB1dFwiLFxyXG4gICAgICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IFwiUHJvZHVjdCBUaXRsZVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHByaWNlOiB7XHJcbiAgICAgICAgZWxlbWVudFR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IFwiUHJvZHVjdCBQcmljZVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHNpemU6IHtcclxuICAgICAgICBlbGVtZW50VHlwZTogXCJpbnB1dFwiLFxyXG4gICAgICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IFwiU2l6ZVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBjb2xvcjoge1xyXG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImlucHV0XCIsXHJcbiAgICAgICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcjogXCJDb2xvclwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBtYXRlcmlhbDoge1xyXG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImlucHV0XCIsXHJcbiAgICAgICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcjogXCJQcm9kdWN0IE1hdGVyaWFsXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgfSxcclxuICAgICAgZmVhdHVyZToge1xyXG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImlucHV0XCIsXHJcbiAgICAgICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcjogXCJQcm9kdWN0IEZlYXR1cmVcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICB9LFxyXG4gICAgICBjYXRlZ29yeToge1xyXG4gICAgICAgIGVsZW1lbnRUeXBlOiBcInNlbGVjdFwiLFxyXG4gICAgICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgICAgIG9wdGlvbnM6IFtcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJudWxsXCIsIGRpc3BsYXlWYWx1ZTogXCItLS1TZWxlY3QgQ2F0ZWdvcnktLS1cIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIm1lblwiLCBkaXNwbGF5VmFsdWU6IFwiTWVuXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJ3b21lblwiLCBkaXNwbGF5VmFsdWU6IFwiV29tZW5cIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcImtpZHNcIiwgZGlzcGxheVZhbHVlOiBcIktpZHNcIiB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgc3ViQ2F0ZWdvcnk6IHtcclxuICAgICAgICBlbGVtZW50VHlwZTogXCJzZWxlY3RcIixcclxuICAgICAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgICAgICBvcHRpb25zOiBbXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwibnVsbFwiLCBkaXNwbGF5VmFsdWU6IFwiLS0tU2VsZWN0IFN1Yi1DYXRlZ29yeS0tLVwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwic2hvZXNcIiwgZGlzcGxheVZhbHVlOiBcIlNob2VzXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJ3b21lblwiLCBkaXNwbGF5VmFsdWU6IFwiV29tZW5cIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIktpZHNcIiwgZGlzcGxheVZhbHVlOiBcIktpZHNcIiB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgYnJhbmQ6IHtcclxuICAgICAgICBlbGVtZW50VHlwZTogXCJzZWxlY3RcIixcclxuICAgICAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgICAgICBvcHRpb25zOiBbXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwibnVsbFwiLCBkaXNwbGF5VmFsdWU6IFwiLS0tU2VsZWN0IEJyYW5kLS0tXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJuaWtlXCIsIGRpc3BsYXlWYWx1ZTogXCJOaWtlXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJjbGFya3NcIiwgZGlzcGxheVZhbHVlOiBcIkNsYXJrc1wiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiR3VjY2lcIiwgZGlzcGxheVZhbHVlOiBcIkd1Y2NpXCIgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgfSxcclxuICAgICAgZGVzY3JpcHRpb246IHtcclxuICAgICAgICBlbGVtZW50VHlwZTogXCJ0ZXh0YXJlYVwiLFxyXG4gICAgICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlByb2R1Y3QgZGVzY3JpcHRpb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9O1xyXG4gIC8vSW5wdXQgQ2hhbmdlIEhhbmRsZXJcclxuICBpbnB1dENoYW5nZUhhbmRsZXIgPSAoZXZlbnQsIGlucHV0SWRlbnRpZmllcikgPT4ge1xyXG4gICAgY29uc3QgdXBkYXRlZFByb2R1Y3RGb3JtID0geyAuLi50aGlzLnN0YXRlLnByb2R1Y3RGb3JtIH07XHJcbiAgICBjb25zdCB1cGRhdGVkRm9ybUVsZW1lbnQgPSB7IC4uLnVwZGF0ZWRQcm9kdWN0Rm9ybVtpbnB1dElkZW50aWZpZXJdIH07XHJcbiAgICB1cGRhdGVkRm9ybUVsZW1lbnQudmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICB1cGRhdGVkUHJvZHVjdEZvcm1baW5wdXRJZGVudGlmaWVyXSA9IHVwZGF0ZWRGb3JtRWxlbWVudDtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9kdWN0Rm9ybTogdXBkYXRlZFByb2R1Y3RGb3JtIH0pO1xyXG4gIH07XHJcblxyXG4gIC8vQWRkaW5nIFByb2R1Y3QgSGFuZGxlclxyXG4gIGFkZFByb2R1Y3RIYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgcHJvZHVjdERhdGEgPSB7fTtcclxuICAgIGZvciAobGV0IGlucHV0RWxlbWVudElkZW50aWZpZXIgaW4gdGhpcy5zdGF0ZS5wcm9kdWN0Rm9ybSkge1xyXG4gICAgICBwcm9kdWN0RGF0YVtpbnB1dEVsZW1lbnRJZGVudGlmaWVyXSA9IHRoaXMuc3RhdGUucDtcclxuICAgIH1cclxuICAgIGNvbnN0IHByb2R1Y3QgPSB7fTtcclxuICB9O1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGxldCBzZWFyY2ggPSBudWxsO1xyXG4gICAgaWYgKHRoaXMucHJvcHMudXBkYXRlKSB7XHJcbiAgICAgIHNlYXJjaCA9IChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaH0+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgUHJvZHVjdCBDb2RlXCIgLz5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlNlYXJjaFwiIC8+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZm9ybUVsZW1lbnRBcnJheSA9IFtdO1xyXG4gICAgZm9yIChsZXQga2V5IGluIHRoaXMuc3RhdGUucHJvZHVjdEZvcm0pIHtcclxuICAgICAgZm9ybUVsZW1lbnRBcnJheS5wdXNoKHtcclxuICAgICAgICBpZDoga2V5LFxyXG4gICAgICAgIGNvbmZpZzogdGhpcy5zdGF0ZS5wcm9kdWN0Rm9ybVtrZXldLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLkZvcm1zV3JhcHBlcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuRm9ybX0+XHJcbiAgICAgICAgICA8aDI+e3RoaXMucHJvcHMudGl0bGV9PC9oMj5cclxuICAgICAgICAgIHtzZWFyY2h9XHJcbiAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgey8qIHt0aGlzLnByb3BzLnR5cGUgPT0gXCJVcGRhdGUgUHJvZHVjdFwiID8gPH0gKi99XHJcbiAgICAgICAgICAgIHtmb3JtRWxlbWVudEFycmF5Lm1hcCgoZm9ybUVsZW1lbnQsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBrZXk9e2Zvcm1FbGVtZW50LmlkfVxyXG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU9e2Zvcm1FbGVtZW50LmNvbmZpZy5lbGVtZW50VHlwZX1cclxuICAgICAgICAgICAgICAgIGVsZW1lbnRDb25maWc9e2Zvcm1FbGVtZW50LmNvbmZpZy5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1FbGVtZW50LmNvbmZpZy52YWx1ZX1cclxuICAgICAgICAgICAgICAgIGNoYW5nZWQ9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5pbnB1dENoYW5nZUhhbmRsZXIoZXZlbnQsIGZvcm1FbGVtZW50LmlkKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgPEJ1dHRvbiBjbGlja2VkPXt0aGlzLmFkZFByb2R1Y3RIYW5kbGVyfT5BZGQgUHJvZHVjdDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0Rm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==