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
            lineNumber: 134,
            columnNumber: 9
          }
        }, __jsx("form", {
          className: _productForm_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.search,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 11
          }
        }, __jsx("input", {
          type: "text",
          placeholder: "Enter Product Code",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 13
          }
        }), __jsx("input", {
          type: "submit",
          value: "Search",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 137,
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
          lineNumber: 151,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: _productForm_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.Form,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 9
        }
      }, __jsx("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 11
        }
      }, this.props.title), search, __jsx("form", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
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
            lineNumber: 158,
            columnNumber: 15
          }
        });
      }), __jsx(_UI_Button_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
        clicked: this.addProductHandler,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rhc2hib2FyZC9Db250ZW50cy9Qcm9kdWN0Rm9ybS9Qcm9kdWN0Rm9ybS5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0Rm9ybSIsInByb2R1Y3RGb3JtIiwidGl0bGUiLCJlbGVtZW50VHlwZSIsImVsZW1lbnRDb25maWciLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsInByaWNlIiwic2l6ZSIsImNvbG9yIiwibWF0ZXJpYWwiLCJmZWF0dXJlIiwiY2F0ZWdvcnkiLCJvcHRpb25zIiwiZGlzcGxheVZhbHVlIiwic3ViQ2F0ZWdvcnkiLCJicmFuZCIsImRlc2NyaXB0aW9uIiwiZXZlbnQiLCJpbnB1dElkZW50aWZpZXIiLCJ1cGRhdGVkUHJvZHVjdEZvcm0iLCJzdGF0ZSIsInVwZGF0ZWRGb3JtRWxlbWVudCIsInRhcmdldCIsInNldFN0YXRlIiwicHJldmVudERlZmF1bHQiLCJmb3JtRGF0YSIsImlucHV0RWxlbWVudElkZW50aWZpZXIiLCJwcm9kdWN0IiwicHJvZHVjdERhdGEiLCJzZWFyY2giLCJwcm9wcyIsInVwZGF0ZSIsImNsYXNzZXMiLCJmb3JtRWxlbWVudEFycmF5Iiwia2V5IiwicHVzaCIsImlkIiwiY29uZmlnIiwiRm9ybXNXcmFwcGVyIiwiRm9ybSIsIm1hcCIsImZvcm1FbGVtZW50IiwiaW5kZXgiLCJpbnB1dENoYW5nZUhhbmRsZXIiLCJhZGRQcm9kdWN0SGFuZGxlciIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7O0lBRU1BLFc7Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ0k7QUFDTkMsaUJBQVcsRUFBRTtBQUNYQyxhQUFLLEVBQUU7QUFDTEMscUJBQVcsRUFBRSxPQURSO0FBRUxDLHVCQUFhLEVBQUU7QUFDYkMsZ0JBQUksRUFBRSxNQURPO0FBRWJDLHVCQUFXLEVBQUU7QUFGQSxXQUZWO0FBTUxDLGVBQUssRUFBRTtBQU5GLFNBREk7QUFTWEMsYUFBSyxFQUFFO0FBQ0xMLHFCQUFXLEVBQUUsT0FEUjtBQUVMQyx1QkFBYSxFQUFFO0FBQ2JDLGdCQUFJLEVBQUUsUUFETztBQUViQyx1QkFBVyxFQUFFO0FBRkEsV0FGVjtBQU1MQyxlQUFLLEVBQUU7QUFORixTQVRJO0FBaUJYRSxZQUFJLEVBQUU7QUFDSk4scUJBQVcsRUFBRSxPQURUO0FBRUpDLHVCQUFhLEVBQUU7QUFDYkMsZ0JBQUksRUFBRSxNQURPO0FBRWJDLHVCQUFXLEVBQUU7QUFGQSxXQUZYO0FBTUpDLGVBQUssRUFBRTtBQU5ILFNBakJLO0FBMEJYRyxhQUFLLEVBQUU7QUFDTFAscUJBQVcsRUFBRSxPQURSO0FBRUxDLHVCQUFhLEVBQUU7QUFDYkMsZ0JBQUksRUFBRSxNQURPO0FBRWJDLHVCQUFXLEVBQUU7QUFGQSxXQUZWO0FBTUxDLGVBQUssRUFBRTtBQU5GLFNBMUJJO0FBbUNYSSxnQkFBUSxFQUFFO0FBQ1JSLHFCQUFXLEVBQUUsT0FETDtBQUVSQyx1QkFBYSxFQUFFO0FBQ2JDLGdCQUFJLEVBQUUsTUFETztBQUViQyx1QkFBVyxFQUFFO0FBRkEsV0FGUDtBQU1SQyxlQUFLLEVBQUU7QUFOQyxTQW5DQztBQTJDWEssZUFBTyxFQUFFO0FBQ1BULHFCQUFXLEVBQUUsT0FETjtBQUVQQyx1QkFBYSxFQUFFO0FBQ2JDLGdCQUFJLEVBQUUsTUFETztBQUViQyx1QkFBVyxFQUFFO0FBRkEsV0FGUjtBQU1QQyxlQUFLLEVBQUU7QUFOQSxTQTNDRTtBQW1EWE0sZ0JBQVEsRUFBRTtBQUNSVixxQkFBVyxFQUFFLFFBREw7QUFFUkMsdUJBQWEsRUFBRTtBQUNiVSxtQkFBTyxFQUFFLENBQ1A7QUFBRVAsbUJBQUssRUFBRSxNQUFUO0FBQWlCUSwwQkFBWSxFQUFFO0FBQS9CLGFBRE8sRUFFUDtBQUFFUixtQkFBSyxFQUFFLEtBQVQ7QUFBZ0JRLDBCQUFZLEVBQUU7QUFBOUIsYUFGTyxFQUdQO0FBQUVSLG1CQUFLLEVBQUUsT0FBVDtBQUFrQlEsMEJBQVksRUFBRTtBQUFoQyxhQUhPLEVBSVA7QUFBRVIsbUJBQUssRUFBRSxNQUFUO0FBQWlCUSwwQkFBWSxFQUFFO0FBQS9CLGFBSk87QUFESSxXQUZQO0FBVVJSLGVBQUssRUFBRTtBQVZDLFNBbkRDO0FBZ0VYUyxtQkFBVyxFQUFFO0FBQ1hiLHFCQUFXLEVBQUUsUUFERjtBQUVYQyx1QkFBYSxFQUFFO0FBQ2JVLG1CQUFPLEVBQUUsQ0FDUDtBQUFFUCxtQkFBSyxFQUFFLE1BQVQ7QUFBaUJRLDBCQUFZLEVBQUU7QUFBL0IsYUFETyxFQUVQO0FBQUVSLG1CQUFLLEVBQUUsT0FBVDtBQUFrQlEsMEJBQVksRUFBRTtBQUFoQyxhQUZPLEVBR1A7QUFBRVIsbUJBQUssRUFBRSxPQUFUO0FBQWtCUSwwQkFBWSxFQUFFO0FBQWhDLGFBSE8sRUFJUDtBQUFFUixtQkFBSyxFQUFFLE1BQVQ7QUFBaUJRLDBCQUFZLEVBQUU7QUFBL0IsYUFKTztBQURJLFdBRko7QUFVWFIsZUFBSyxFQUFFO0FBVkksU0FoRUY7QUE2RVhVLGFBQUssRUFBRTtBQUNMZCxxQkFBVyxFQUFFLFFBRFI7QUFFTEMsdUJBQWEsRUFBRTtBQUNiVSxtQkFBTyxFQUFFLENBQ1A7QUFBRVAsbUJBQUssRUFBRSxNQUFUO0FBQWlCUSwwQkFBWSxFQUFFO0FBQS9CLGFBRE8sRUFFUDtBQUFFUixtQkFBSyxFQUFFLE1BQVQ7QUFBaUJRLDBCQUFZLEVBQUU7QUFBL0IsYUFGTyxFQUdQO0FBQUVSLG1CQUFLLEVBQUUsUUFBVDtBQUFtQlEsMEJBQVksRUFBRTtBQUFqQyxhQUhPLEVBSVA7QUFBRVIsbUJBQUssRUFBRSxPQUFUO0FBQWtCUSwwQkFBWSxFQUFFO0FBQWhDLGFBSk87QUFESSxXQUZWO0FBVUxSLGVBQUssRUFBRTtBQVZGLFNBN0VJO0FBeUZYVyxtQkFBVyxFQUFFO0FBQ1hmLHFCQUFXLEVBQUUsVUFERjtBQUVYQyx1QkFBYSxFQUFFO0FBQ2JFLHVCQUFXLEVBQUU7QUFEQSxXQUZKO0FBS1hDLGVBQUssRUFBRTtBQUxJO0FBekZGO0FBRFAsSzs7Nk5Bb0dhLFVBQUNZLEtBQUQsRUFBUUMsZUFBUixFQUE0QjtBQUMvQyxVQUFNQyxrQkFBa0IscUJBQVEsTUFBS0MsS0FBTCxDQUFXckIsV0FBbkIsQ0FBeEI7O0FBQ0EsVUFBTXNCLGtCQUFrQixxQkFBUUYsa0JBQWtCLENBQUNELGVBQUQsQ0FBMUIsQ0FBeEI7O0FBQ0FHLHdCQUFrQixDQUFDaEIsS0FBbkIsR0FBMkJZLEtBQUssQ0FBQ0ssTUFBTixDQUFhakIsS0FBeEM7QUFDQWMsd0JBQWtCLENBQUNELGVBQUQsQ0FBbEIsR0FBc0NHLGtCQUF0Qzs7QUFDQSxZQUFLRSxRQUFMLENBQWM7QUFBRXhCLG1CQUFXLEVBQUVvQjtBQUFmLE9BQWQ7QUFDRCxLOzs0TkFHbUIsVUFBQ0YsS0FBRCxFQUFXO0FBQzdCQSxXQUFLLENBQUNPLGNBQU47QUFDQSxVQUFNQyxRQUFRLEdBQUcsRUFBakI7O0FBQ0EsV0FBSyxJQUFJQyxzQkFBVCxJQUFtQyxNQUFLTixLQUFMLENBQVdyQixXQUE5QyxFQUEyRDtBQUN6RDBCLGdCQUFRLENBQUNDLHNCQUFELENBQVIsR0FBbUMsTUFBS04sS0FBTCxDQUFXckIsV0FBWCxDQUNqQzJCLHNCQURpQyxFQUVqQ3JCLEtBRkY7QUFHRDs7QUFFRCxVQUFNc0IsT0FBTyxHQUFHO0FBQ2RDLG1CQUFXLEVBQUVIO0FBREMsT0FBaEI7QUFHRCxLOzs7Ozs7OzZCQUNRO0FBQUE7O0FBQ1AsVUFBSUksTUFBTSxHQUFHLElBQWI7O0FBQ0EsVUFBSSxLQUFLQyxLQUFMLENBQVdDLE1BQWYsRUFBdUI7QUFDckJGLGNBQU0sR0FDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0U7QUFBTSxtQkFBUyxFQUFFRyw4REFBTyxDQUFDSCxNQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0U7QUFBTyxjQUFJLEVBQUMsTUFBWjtBQUFtQixxQkFBVyxFQUFDLG9CQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREYsRUFFRTtBQUFPLGNBQUksRUFBQyxRQUFaO0FBQXFCLGVBQUssRUFBQyxRQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRkYsQ0FERixDQURGO0FBUUQ7O0FBRUQsVUFBTUksZ0JBQWdCLEdBQUcsRUFBekI7O0FBQ0EsV0FBSyxJQUFJQyxHQUFULElBQWdCLEtBQUtkLEtBQUwsQ0FBV3JCLFdBQTNCLEVBQXdDO0FBQ3RDa0Msd0JBQWdCLENBQUNFLElBQWpCLENBQXNCO0FBQ3BCQyxZQUFFLEVBQUVGLEdBRGdCO0FBRXBCRyxnQkFBTSxFQUFFLEtBQUtqQixLQUFMLENBQVdyQixXQUFYLENBQXVCbUMsR0FBdkI7QUFGWSxTQUF0QjtBQUlEOztBQUNELGFBQ0U7QUFBSyxpQkFBUyxFQUFFRiw4REFBTyxDQUFDTSxZQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSyxpQkFBUyxFQUFFTiw4REFBTyxDQUFDTyxJQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFLLEtBQUtULEtBQUwsQ0FBVzlCLEtBQWhCLENBREYsRUFFRzZCLE1BRkgsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRUdJLGdCQUFnQixDQUFDTyxHQUFqQixDQUFxQixVQUFDQyxXQUFELEVBQWNDLEtBQWQ7QUFBQSxlQUNwQixNQUFDLHVEQUFEO0FBQ0UsYUFBRyxFQUFFRCxXQUFXLENBQUNMLEVBRG5CO0FBRUUscUJBQVcsRUFBRUssV0FBVyxDQUFDSixNQUFaLENBQW1CcEMsV0FGbEM7QUFHRSx1QkFBYSxFQUFFd0MsV0FBVyxDQUFDSixNQUFaLENBQW1CbkMsYUFIcEM7QUFJRSxlQUFLLEVBQUV1QyxXQUFXLENBQUNKLE1BQVosQ0FBbUJoQyxLQUo1QjtBQUtFLGlCQUFPLEVBQUUsaUJBQUNZLEtBQUQ7QUFBQSxtQkFDUCxNQUFJLENBQUMwQixrQkFBTCxDQUF3QjFCLEtBQXhCLEVBQStCd0IsV0FBVyxDQUFDTCxFQUEzQyxDQURPO0FBQUEsV0FMWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRG9CO0FBQUEsT0FBckIsQ0FGSCxFQWNFLE1BQUMsMERBQUQ7QUFBUSxlQUFPLEVBQUUsS0FBS1EsaUJBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBZEYsQ0FIRixDQURGLENBREY7QUF3QkQ7Ozs7RUF2S3VCQywrQzs7QUEwS1gvQywwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuMGQ4MWVjYWFjZDNjY2RmMjhmM2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL3Byb2R1Y3RGb3JtLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IElucHV0IGZyb20gXCIuLi8uLi8uLi9VSS9JbnB1dC9JbnB1dFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi8uLi9VSS9CdXR0b24vQnV0dG9uXCI7XHJcblxyXG5jbGFzcyBQcm9kdWN0Rm9ybSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBwcm9kdWN0Rm9ybToge1xyXG4gICAgICB0aXRsZToge1xyXG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImlucHV0XCIsXHJcbiAgICAgICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcjogXCJQcm9kdWN0IFRpdGxlXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgfSxcclxuICAgICAgcHJpY2U6IHtcclxuICAgICAgICBlbGVtZW50VHlwZTogXCJpbnB1dFwiLFxyXG4gICAgICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcjogXCJQcm9kdWN0IFByaWNlXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgfSxcclxuICAgICAgc2l6ZToge1xyXG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImlucHV0XCIsXHJcbiAgICAgICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcjogXCJTaXplXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgfSxcclxuXHJcbiAgICAgIGNvbG9yOiB7XHJcbiAgICAgICAgZWxlbWVudFR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkNvbG9yXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgfSxcclxuXHJcbiAgICAgIG1hdGVyaWFsOiB7XHJcbiAgICAgICAgZWxlbWVudFR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlByb2R1Y3QgTWF0ZXJpYWxcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICB9LFxyXG4gICAgICBmZWF0dXJlOiB7XHJcbiAgICAgICAgZWxlbWVudFR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlByb2R1Y3QgRmVhdHVyZVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGNhdGVnb3J5OiB7XHJcbiAgICAgICAgZWxlbWVudFR5cGU6IFwic2VsZWN0XCIsXHJcbiAgICAgICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICAgICAgb3B0aW9uczogW1xyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIm51bGxcIiwgZGlzcGxheVZhbHVlOiBcIi0tLVNlbGVjdCBDYXRlZ29yeS0tLVwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwibWVuXCIsIGRpc3BsYXlWYWx1ZTogXCJNZW5cIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIndvbWVuXCIsIGRpc3BsYXlWYWx1ZTogXCJXb21lblwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwia2lkc1wiLCBkaXNwbGF5VmFsdWU6IFwiS2lkc1wiIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBzdWJDYXRlZ29yeToge1xyXG4gICAgICAgIGVsZW1lbnRUeXBlOiBcInNlbGVjdFwiLFxyXG4gICAgICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgICAgIG9wdGlvbnM6IFtcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJudWxsXCIsIGRpc3BsYXlWYWx1ZTogXCItLS1TZWxlY3QgU3ViLUNhdGVnb3J5LS0tXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJzaG9lc1wiLCBkaXNwbGF5VmFsdWU6IFwiU2hvZXNcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIndvbWVuXCIsIGRpc3BsYXlWYWx1ZTogXCJXb21lblwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiS2lkc1wiLCBkaXNwbGF5VmFsdWU6IFwiS2lkc1wiIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBicmFuZDoge1xyXG4gICAgICAgIGVsZW1lbnRUeXBlOiBcInNlbGVjdFwiLFxyXG4gICAgICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgICAgIG9wdGlvbnM6IFtcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJudWxsXCIsIGRpc3BsYXlWYWx1ZTogXCItLS1TZWxlY3QgQnJhbmQtLS1cIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIm5pa2VcIiwgZGlzcGxheVZhbHVlOiBcIk5pa2VcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcImNsYXJrc1wiLCBkaXNwbGF5VmFsdWU6IFwiQ2xhcmtzXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJHdWNjaVwiLCBkaXNwbGF5VmFsdWU6IFwiR3VjY2lcIiB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICB9LFxyXG4gICAgICBkZXNjcmlwdGlvbjoge1xyXG4gICAgICAgIGVsZW1lbnRUeXBlOiBcInRleHRhcmVhXCIsXHJcbiAgICAgICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IFwiUHJvZHVjdCBkZXNjcmlwdGlvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgLy9JbnB1dCBDaGFuZ2UgSGFuZGxlclxyXG4gIGlucHV0Q2hhbmdlSGFuZGxlciA9IChldmVudCwgaW5wdXRJZGVudGlmaWVyKSA9PiB7XHJcbiAgICBjb25zdCB1cGRhdGVkUHJvZHVjdEZvcm0gPSB7IC4uLnRoaXMuc3RhdGUucHJvZHVjdEZvcm0gfTtcclxuICAgIGNvbnN0IHVwZGF0ZWRGb3JtRWxlbWVudCA9IHsgLi4udXBkYXRlZFByb2R1Y3RGb3JtW2lucHV0SWRlbnRpZmllcl0gfTtcclxuICAgIHVwZGF0ZWRGb3JtRWxlbWVudC52YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgIHVwZGF0ZWRQcm9kdWN0Rm9ybVtpbnB1dElkZW50aWZpZXJdID0gdXBkYXRlZEZvcm1FbGVtZW50O1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHByb2R1Y3RGb3JtOiB1cGRhdGVkUHJvZHVjdEZvcm0gfSk7XHJcbiAgfTtcclxuXHJcbiAgLy9BZGRpbmcgUHJvZHVjdCBIYW5kbGVyXHJcbiAgYWRkUHJvZHVjdEhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IHt9O1xyXG4gICAgZm9yIChsZXQgaW5wdXRFbGVtZW50SWRlbnRpZmllciBpbiB0aGlzLnN0YXRlLnByb2R1Y3RGb3JtKSB7XHJcbiAgICAgIGZvcm1EYXRhW2lucHV0RWxlbWVudElkZW50aWZpZXJdID0gdGhpcy5zdGF0ZS5wcm9kdWN0Rm9ybVtcclxuICAgICAgICBpbnB1dEVsZW1lbnRJZGVudGlmaWVyXHJcbiAgICAgIF0udmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHJvZHVjdCA9IHtcclxuICAgICAgcHJvZHVjdERhdGE6IGZvcm1EYXRhLFxyXG4gICAgfTtcclxuICB9O1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGxldCBzZWFyY2ggPSBudWxsO1xyXG4gICAgaWYgKHRoaXMucHJvcHMudXBkYXRlKSB7XHJcbiAgICAgIHNlYXJjaCA9IChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaH0+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgUHJvZHVjdCBDb2RlXCIgLz5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlNlYXJjaFwiIC8+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZm9ybUVsZW1lbnRBcnJheSA9IFtdO1xyXG4gICAgZm9yIChsZXQga2V5IGluIHRoaXMuc3RhdGUucHJvZHVjdEZvcm0pIHtcclxuICAgICAgZm9ybUVsZW1lbnRBcnJheS5wdXNoKHtcclxuICAgICAgICBpZDoga2V5LFxyXG4gICAgICAgIGNvbmZpZzogdGhpcy5zdGF0ZS5wcm9kdWN0Rm9ybVtrZXldLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLkZvcm1zV3JhcHBlcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuRm9ybX0+XHJcbiAgICAgICAgICA8aDI+e3RoaXMucHJvcHMudGl0bGV9PC9oMj5cclxuICAgICAgICAgIHtzZWFyY2h9XHJcbiAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgey8qIHt0aGlzLnByb3BzLnR5cGUgPT0gXCJVcGRhdGUgUHJvZHVjdFwiID8gPH0gKi99XHJcbiAgICAgICAgICAgIHtmb3JtRWxlbWVudEFycmF5Lm1hcCgoZm9ybUVsZW1lbnQsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBrZXk9e2Zvcm1FbGVtZW50LmlkfVxyXG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU9e2Zvcm1FbGVtZW50LmNvbmZpZy5lbGVtZW50VHlwZX1cclxuICAgICAgICAgICAgICAgIGVsZW1lbnRDb25maWc9e2Zvcm1FbGVtZW50LmNvbmZpZy5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1FbGVtZW50LmNvbmZpZy52YWx1ZX1cclxuICAgICAgICAgICAgICAgIGNoYW5nZWQ9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5pbnB1dENoYW5nZUhhbmRsZXIoZXZlbnQsIGZvcm1FbGVtZW50LmlkKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgPEJ1dHRvbiBjbGlja2VkPXt0aGlzLmFkZFByb2R1Y3RIYW5kbGVyfT5BZGQgUHJvZHVjdDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0Rm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==