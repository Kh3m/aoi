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

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "inputChangeHandler", function (event) {
      console.log(event.target.value);
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
            lineNumber: 111,
            columnNumber: 9
          }
        }, __jsx("form", {
          className: _productForm_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.search,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 11
          }
        }, __jsx("input", {
          type: "text",
          placeholder: "Enter Product Code",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 13
          }
        }), __jsx("input", {
          type: "submit",
          value: "Search",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114,
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
          lineNumber: 128,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: _productForm_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.Form,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 9
        }
      }, __jsx("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 11
        }
      }, this.props.title), search, __jsx("form", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
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
            lineNumber: 135,
            columnNumber: 15
          }
        });
      }), __jsx(_UI_Button_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rhc2hib2FyZC9Db250ZW50cy9Qcm9kdWN0Rm9ybS9Qcm9kdWN0Rm9ybS5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0Rm9ybSIsInRpdGxlIiwiZWxlbWVudFR5cGUiLCJlbGVtZW50Q29uZmlnIiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJwcmljZSIsInNpemUiLCJjb2xvciIsIm1hdGVyaWFsIiwiZmVhdHVyZSIsImNhdGVnb3J5Iiwib3B0aW9ucyIsImRpc3BsYXlWYWx1ZSIsInN1YkNhdGVnb3J5IiwiYnJhbmQiLCJkZXNjcmlwdGlvbiIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInNlYXJjaCIsInByb3BzIiwidXBkYXRlIiwiY2xhc3NlcyIsImZvcm1FbGVtZW50QXJyYXkiLCJrZXkiLCJzdGF0ZSIsInB1c2giLCJpZCIsImNvbmZpZyIsIkZvcm1zV3JhcHBlciIsIkZvcm0iLCJtYXAiLCJmb3JtRWxlbWVudCIsImluZGV4IiwiaW5wdXRDaGFuZ2VIYW5kbGVyIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBOztJQUVNQSxXOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNJO0FBQ05BLGlCQUFXLEVBQUU7QUFDWEMsYUFBSyxFQUFFO0FBQ0xDLHFCQUFXLEVBQUUsT0FEUjtBQUVMQyx1QkFBYSxFQUFFO0FBQ2JDLGdCQUFJLEVBQUUsTUFETztBQUViQyx1QkFBVyxFQUFFO0FBRkEsV0FGVjtBQU1MQyxlQUFLLEVBQUU7QUFORixTQURJO0FBU1hDLGFBQUssRUFBRTtBQUNMTCxxQkFBVyxFQUFFLE9BRFI7QUFFTEMsdUJBQWEsRUFBRTtBQUNiQyxnQkFBSSxFQUFFLFFBRE87QUFFYkMsdUJBQVcsRUFBRTtBQUZBLFdBRlY7QUFNTEMsZUFBSyxFQUFFO0FBTkYsU0FUSTtBQWlCWEUsWUFBSSxF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QixLQUo1QjtBQUtFLGlCQUFPLEVBQUUsTUFBSSxDQUFDK0Isa0JBTGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFEb0I7QUFBQSxPQUFyQixDQUZILEVBWUUsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVpGLENBSEYsQ0FERixDQURGO0FBc0JEOzs7O0VBOUl1QkMsK0M7O0FBaUpYdEMsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmUyNDA4ZTI5OWUxZGIwMGRlNzM2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9wcm9kdWN0Rm9ybS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vLi4vLi4vVUkvSW5wdXQvSW5wdXRcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vLi4vVUkvQnV0dG9uL0J1dHRvblwiO1xyXG5cclxuY2xhc3MgUHJvZHVjdEZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgUHJvZHVjdEZvcm06IHtcclxuICAgICAgdGl0bGU6IHtcclxuICAgICAgICBlbGVtZW50VHlwZTogXCJpbnB1dFwiLFxyXG4gICAgICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IFwiUHJvZHVjdCBUaXRsZVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHByaWNlOiB7XHJcbiAgICAgICAgZWxlbWVudFR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IFwiUHJvZHVjdCBQcmljZVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHNpemU6IHtcclxuICAgICAgICBlbGVtZW50VHlwZTogXCJpbnB1dFwiLFxyXG4gICAgICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IFwiU2l6ZVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBjb2xvcjoge1xyXG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImlucHV0XCIsXHJcbiAgICAgICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcjogXCJDb2xvclwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBtYXRlcmlhbDoge1xyXG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImlucHV0XCIsXHJcbiAgICAgICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcjogXCJQcm9kdWN0IE1hdGVyaWFsXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgfSxcclxuICAgICAgZmVhdHVyZToge1xyXG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImlucHV0XCIsXHJcbiAgICAgICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcjogXCJQcm9kdWN0IEZlYXR1cmVcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICB9LFxyXG4gICAgICBjYXRlZ29yeToge1xyXG4gICAgICAgIGVsZW1lbnRUeXBlOiBcInNlbGVjdFwiLFxyXG4gICAgICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgICAgIG9wdGlvbnM6IFtcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJtZW5cIiwgZGlzcGxheVZhbHVlOiBcIk1lblwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwid29tZW5cIiwgZGlzcGxheVZhbHVlOiBcIldvbWVuXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJraWRzXCIsIGRpc3BsYXlWYWx1ZTogXCJLaWRzXCIgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgfSxcclxuXHJcbiAgICAgIHN1YkNhdGVnb3J5OiB7XHJcbiAgICAgICAgZWxlbWVudFR5cGU6IFwic2VsZWN0XCIsXHJcbiAgICAgICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICAgICAgb3B0aW9uczogW1xyXG4gICAgICAgICAgICB7IHZhbHVlOiBcInNob2VzXCIsIGRpc3BsYXlWYWx1ZTogXCJTaG9lc1wiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiYmFnc1wiLCBkaXNwbGF5VmFsdWU6IFwiV29tZW5cIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIktpZHNcIiwgZGlzcGxheVZhbHVlOiBcIktpZHNcIiB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgYnJhbmQ6IHtcclxuICAgICAgICBlbGVtZW50VHlwZTogXCJzZWxlY3RcIixcclxuICAgICAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgICAgICBvcHRpb25zOiBbXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwibmlrZVwiLCBkaXNwbGF5VmFsdWU6IFwiTmlrZVwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiY2xhcmtzXCIsIGRpc3BsYXlWYWx1ZTogXCJDbGFya3NcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIkd1Y2NpXCIsIGRpc3BsYXlWYWx1ZTogXCJHdWNjaVwiIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGRlc2NyaXB0aW9uOiB7XHJcbiAgICAgICAgZWxlbWVudFR5cGU6IFwidGV4dGFyZWFcIixcclxuICAgICAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcjogXCJQcm9kdWN0IGRlc2NyaXB0aW9uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBpbnB1dENoYW5nZUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuICByZW5kZXIoKSB7XHJcbiAgICBsZXQgc2VhcmNoID0gbnVsbDtcclxuICAgIGlmICh0aGlzLnByb3BzLnVwZGF0ZSkge1xyXG4gICAgICBzZWFyY2ggPSAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2h9PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIFByb2R1Y3QgQ29kZVwiIC8+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTZWFyY2hcIiAvPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZvcm1FbGVtZW50QXJyYXkgPSBbXTtcclxuICAgIGZvciAobGV0IGtleSBpbiB0aGlzLnN0YXRlLlByb2R1Y3RGb3JtKSB7XHJcbiAgICAgIGZvcm1FbGVtZW50QXJyYXkucHVzaCh7XHJcbiAgICAgICAgaWQ6IGtleSxcclxuICAgICAgICBjb25maWc6IHRoaXMuc3RhdGUuUHJvZHVjdEZvcm1ba2V5XSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5Gb3Jtc1dyYXBwZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLkZvcm19PlxyXG4gICAgICAgICAgPGgyPnt0aGlzLnByb3BzLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICB7c2VhcmNofVxyXG4gICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgIHsvKiB7dGhpcy5wcm9wcy50eXBlID09IFwiVXBkYXRlIFByb2R1Y3RcIiA/IDx9ICovfVxyXG4gICAgICAgICAgICB7Zm9ybUVsZW1lbnRBcnJheS5tYXAoKGZvcm1FbGVtZW50LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAga2V5PXtmb3JtRWxlbWVudC5pZH1cclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlPXtmb3JtRWxlbWVudC5jb25maWcuZWxlbWVudFR5cGV9XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50Q29uZmlnPXtmb3JtRWxlbWVudC5jb25maWcuZWxlbWVudENvbmZpZ31cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRWxlbWVudC5jb25maWcudmFsdWV9XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VkPXt0aGlzLmlucHV0Q2hhbmdlSGFuZGxlcn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApKX1cclxuXHJcbiAgICAgICAgICAgIDxCdXR0b24+QWRkIFByb2R1Y3Q8L0J1dHRvbj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdEZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=