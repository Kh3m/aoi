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
              value: "bags",
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

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "inputChangeHandler", function (event) {});

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
            lineNumber: 109,
            columnNumber: 9
          }
        }, __jsx("form", {
          className: _productForm_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.search,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 11
          }
        }, __jsx("input", {
          type: "text",
          placeholder: "Enter Product Code",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }
        }), __jsx("input", {
          type: "submit",
          value: "Search",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112,
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
          lineNumber: 126,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: _productForm_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.Form,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 9
        }
      }, __jsx("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 11
        }
      }, this.props.title), search, __jsx("form", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 11
        }
      }, formElementArray.map(function (formElement, index) {
        return __jsx(_UI_Input_Input__WEBPACK_IMPORTED_MODULE_9__["default"], {
          key: formElement.id,
          elementType: formElement.config.elementType,
          elementConfig: formElement.config.elementConfig,
          value: formElement.config.value,
          changed: _this2.inputChangeHandler,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 15
          }
        });
      }), __jsx(_UI_Button_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rhc2hib2FyZC9Db250ZW50cy9Qcm9kdWN0Rm9ybS9Qcm9kdWN0Rm9ybS5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0Rm9ybSIsInRpdGxlIiwiZWxlbWVudFR5cGUiLCJlbGVtZW50Q29uZmlnIiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJwcmljZSIsInNpemUiLCJjb2xvciIsIm1hdGVyaWFsIiwiZmVhdHVyZSIsImNhdGVnb3J5Iiwib3B0aW9ucyIsImRpc3BsYXlWYWx1ZSIsInN1YkNhdGVnb3J5IiwiYnJhbmQiLCJkZXNjcmlwdGlvbiIsImV2ZW50Iiwic2VhcmNoIiwicHJvcHMiLCJ1cGRhdGUiLCJjbGFzc2VzIiwiZm9ybUVsZW1lbnRBcnJheSIsImtleSIsInN0YXRlIiwicHVzaCIsImlkIiwiY29uZmlnIiwiRm9ybXNXcmFwcGVyIiwiRm9ybSIsIm1hcCIsImZvcm1FbGVtZW50IiwiaW5kZXgiLCJpbnB1dENoYW5nZUhhbmRsZXIiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7O0lBRU1BLFc7Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ0k7QUFDTkEsaUJBQVcsRUFBRTtBQUNYQyxhQUFLLEVBQUU7QUFDTEMscUJBQVcsRUFBRSxPQURSO0FBRUxDLHVCQUFhLEVBQUU7QUFDYkMsZ0JBQUksRUFBRSxNQURPO0FBRWJDLHVCQUFXLEVBQUU7QUFGQSxXQUZWO0FBTUxDLGVBQUssRUFBRTtBQU5GLFNBREk7QUFTWEMsYUFBSyxFQUFFO0FBQ0xMLHFCQUFXLEVBQUUsT0FEUjtBQUVMQyx1QkFBYSxFQUFFO0FBQ2JDLGdCQUFJLEVBQUUsUUFETztBQUViQyx1QkFBVyxFQUFFO0FBRkEsV0FGVjtBQU1MQyxlQUFLLEVBQUU7QUFORixTQVRJO0FBaUJYRSxZQUFJLEVBQUU7QUFDSk4scUJBQVcsRUFBRSxPQURU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QjtBQUFBLE9BQXJCLENBRkgsRUFZRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBWkYsQ0FIRixDQURGLENBREY7QUFzQkQ7Ozs7RUE1SXVCQywrQzs7QUErSVhuQywwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuNzFhNjYzNzYwMjBhYWMxZTNiNzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL3Byb2R1Y3RGb3JtLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IElucHV0IGZyb20gXCIuLi8uLi8uLi9VSS9JbnB1dC9JbnB1dFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi8uLi9VSS9CdXR0b24vQnV0dG9uXCI7XHJcblxyXG5jbGFzcyBQcm9kdWN0Rm9ybSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBQcm9kdWN0Rm9ybToge1xyXG4gICAgICB0aXRsZToge1xyXG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImlucHV0XCIsXHJcbiAgICAgICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcjogXCJQcm9kdWN0IFRpdGxlXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgfSxcclxuICAgICAgcHJpY2U6IHtcclxuICAgICAgICBlbGVtZW50VHlwZTogXCJpbnB1dFwiLFxyXG4gICAgICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcjogXCJQcm9kdWN0IFByaWNlXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgfSxcclxuICAgICAgc2l6ZToge1xyXG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImlucHV0XCIsXHJcbiAgICAgICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcjogXCJTaXplXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgfSxcclxuXHJcbiAgICAgIGNvbG9yOiB7XHJcbiAgICAgICAgZWxlbWVudFR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkNvbG9yXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgfSxcclxuXHJcbiAgICAgIG1hdGVyaWFsOiB7XHJcbiAgICAgICAgZWxlbWVudFR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlByb2R1Y3QgTWF0ZXJpYWxcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICB9LFxyXG4gICAgICBmZWF0dXJlOiB7XHJcbiAgICAgICAgZWxlbWVudFR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlByb2R1Y3QgRmVhdHVyZVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGNhdGVnb3J5OiB7XHJcbiAgICAgICAgZWxlbWVudFR5cGU6IFwic2VsZWN0XCIsXHJcbiAgICAgICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICAgICAgb3B0aW9uczogW1xyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIm1lblwiLCBkaXNwbGF5VmFsdWU6IFwiTWVuXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJ3b21lblwiLCBkaXNwbGF5VmFsdWU6IFwiV29tZW5cIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcImtpZHNcIiwgZGlzcGxheVZhbHVlOiBcIktpZHNcIiB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgc3ViQ2F0ZWdvcnk6IHtcclxuICAgICAgICBlbGVtZW50VHlwZTogXCJzZWxlY3RcIixcclxuICAgICAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgICAgICBvcHRpb25zOiBbXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwic2hvZXNcIiwgZGlzcGxheVZhbHVlOiBcIlNob2VzXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJiYWdzXCIsIGRpc3BsYXlWYWx1ZTogXCJXb21lblwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiS2lkc1wiLCBkaXNwbGF5VmFsdWU6IFwiS2lkc1wiIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBicmFuZDoge1xyXG4gICAgICAgIGVsZW1lbnRUeXBlOiBcInNlbGVjdFwiLFxyXG4gICAgICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgICAgIG9wdGlvbnM6IFtcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJuaWtlXCIsIGRpc3BsYXlWYWx1ZTogXCJOaWtlXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJjbGFya3NcIiwgZGlzcGxheVZhbHVlOiBcIkNsYXJrc1wiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiR3VjY2lcIiwgZGlzcGxheVZhbHVlOiBcIkd1Y2NpXCIgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgfSxcclxuICAgICAgZGVzY3JpcHRpb246IHtcclxuICAgICAgICBlbGVtZW50VHlwZTogXCJ0ZXh0YXJlYVwiLFxyXG4gICAgICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlByb2R1Y3QgZGVzY3JpcHRpb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGlucHV0Q2hhbmdlSGFuZGxlciA9IChldmVudCkgPT4ge307XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgbGV0IHNlYXJjaCA9IG51bGw7XHJcbiAgICBpZiAodGhpcy5wcm9wcy51cGRhdGUpIHtcclxuICAgICAgc2VhcmNoID0gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNofT5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFbnRlciBQcm9kdWN0IENvZGVcIiAvPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU2VhcmNoXCIgLz5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmb3JtRWxlbWVudEFycmF5ID0gW107XHJcbiAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5zdGF0ZS5Qcm9kdWN0Rm9ybSkge1xyXG4gICAgICBmb3JtRWxlbWVudEFycmF5LnB1c2goe1xyXG4gICAgICAgIGlkOiBrZXksXHJcbiAgICAgICAgY29uZmlnOiB0aGlzLnN0YXRlLlByb2R1Y3RGb3JtW2tleV0sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuRm9ybXNXcmFwcGVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5Gb3JtfT5cclxuICAgICAgICAgIDxoMj57dGhpcy5wcm9wcy50aXRsZX08L2gyPlxyXG4gICAgICAgICAge3NlYXJjaH1cclxuICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICB7Lyoge3RoaXMucHJvcHMudHlwZSA9PSBcIlVwZGF0ZSBQcm9kdWN0XCIgPyA8fSAqL31cclxuICAgICAgICAgICAge2Zvcm1FbGVtZW50QXJyYXkubWFwKChmb3JtRWxlbWVudCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIGtleT17Zm9ybUVsZW1lbnQuaWR9XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZT17Zm9ybUVsZW1lbnQuY29uZmlnLmVsZW1lbnRUeXBlfVxyXG4gICAgICAgICAgICAgICAgZWxlbWVudENvbmZpZz17Zm9ybUVsZW1lbnQuY29uZmlnLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybUVsZW1lbnQuY29uZmlnLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgY2hhbmdlZD17dGhpcy5pbnB1dENoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSl9XHJcblxyXG4gICAgICAgICAgICA8QnV0dG9uPkFkZCBQcm9kdWN0PC9CdXR0b24+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RGb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9