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
        name: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Product Name"
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
        images: {
          elementType: "input",
          elementConfig: {
            type: "file",
            placeholder: "Product images"
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
            lineNumber: 105,
            columnNumber: 9
          }
        }, __jsx("form", {
          className: _productForm_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.search,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 11
          }
        }, __jsx("input", {
          type: "text",
          placeholder: "Enter Product Code",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 13
          }
        }), __jsx("input", {
          type: "submit",
          value: "Search",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108,
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
          lineNumber: 122,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: _productForm_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.Form,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 9
        }
      }, __jsx("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 11
        }
      }, this.props.title), search, __jsx("form", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
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
            lineNumber: 129,
            columnNumber: 15
          }
        });
      }), __jsx(_UI_Button_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
        clicked: this.addProductHandler,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rhc2hib2FyZC9Db250ZW50cy9Qcm9kdWN0Rm9ybS9Qcm9kdWN0Rm9ybS5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0Rm9ybSIsInByb2R1Y3RGb3JtIiwibmFtZSIsImVsZW1lbnRUeXBlIiwiZWxlbWVudENvbmZpZyIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwicHJpY2UiLCJzaXplIiwiY2F0ZWdvcnkiLCJvcHRpb25zIiwiZGlzcGxheVZhbHVlIiwiYnJhbmQiLCJpbWFnZXMiLCJkZXNjcmlwdGlvbiIsImV2ZW50IiwiaW5wdXRJZGVudGlmaWVyIiwidXBkYXRlZFByb2R1Y3RGb3JtIiwic3RhdGUiLCJ1cGRhdGVkRm9ybUVsZW1lbnQiLCJ0YXJnZXQiLCJzZXRTdGF0ZSIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJpbnB1dEVsZW1lbnRJZGVudGlmaWVyIiwicHJvZHVjdCIsInByb2R1Y3REYXRhIiwiY29uc29sZSIsImxvZyIsInNlYXJjaCIsInByb3BzIiwidXBkYXRlIiwiY2xhc3NlcyIsImZvcm1FbGVtZW50QXJyYXkiLCJrZXkiLCJwdXNoIiwiaWQiLCJjb25maWciLCJGb3Jtc1dyYXBwZXIiLCJGb3JtIiwidGl0bGUiLCJtYXAiLCJmb3JtRWxlbWVudCIsImluZGV4IiwiaW5wdXRDaGFuZ2VIYW5kbGVyIiwiYWRkUHJvZHVjdEhhbmRsZXIiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBOztJQUVNQSxXOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNJO0FBQ05DLGlCQUFXLEVBQUU7QUFDWEMsWUFBSSxFQUFFO0FBQ0pDLHFCQUFXLEVBQUUsT0FEVDtBQUVKQyx1QkFBYSxFQUFFO0FBQ2JDLGdCQUFJLEVBQUUsTUFETztBQUViQyx1QkFBVyxFQUFFO0FBRkEsV0FGWDtBQU1KQyxlQUFLLEVBQUU7QUFOSCxTQURLO0FBU1hDLGFBQUssRUFBRTtBQUNMTCxxQkFBVyxFQUFFLE9BRFI7QUFFTEMsdUJBQWEsRUFBRTtBQUNiQyxnQkFBSSxFQUFFLFFBRE87QUFFYkMsdUJBQVcsRUFBRTtBQUZBLFdBRlY7QUFNTEMsZUFBSyxFQUFFO0FBTkYsU0FUSTtBQWlCWEUsWUFBSSxFQUFFO0FBQ0pOLHFCQUFXLEVBQUUsT0FEVDtBQUVKQyx1QkFBYSxFQUFFO0FBQ2JDLGdCQUFJLEVBQUUsTUFETztBQUViQyx1QkFBVyxFQUFFO0FBRkEsV0FGWDtBQU1KQyxlQUFLLEVBQUU7QUFOSCxTQWpCSztBQTBCWEcsZ0JBQVEsRUFBRTtBQUNSUCxxQkFBVyxFQUFFLFFBREw7QUFFUkMsdUJBQWEsRUFBRTtBQUNiTyxtQkFBTyxFQUFFLENBQ1A7QUFBRUosbUJBQUssRUFBRSxNQUFUO0FBQWlCSywwQkFBWSxFQUFFO0FBQS9CLGFBRE8sRUFFUDtBQUFFTCxtQkFBSyxFQUFFLEtBQVQ7QUFBZ0JLLDBCQUFZLEVBQUU7QUFBOUIsYUFGTyxFQUdQO0FBQUVMLG1CQUFLLEVBQUUsT0FBVDtBQUFrQkssMEJBQVksRUFBRTtBQUFoQyxhQUhPLEVBSVA7QUFBRUwsbUJBQUssRUFBRSxNQUFUO0FBQWlCSywwQkFBWSxFQUFFO0FBQS9CLGFBSk87QUFESSxXQUZQO0FBVVJMLGVBQUssRUFBRTtBQVZDLFNBMUJDO0FBdUNYTSxhQUFLLEVBQUU7QUFDTFYscUJBQVcsRUFBRSxRQURSO0FBRUxDLHVCQUFhLEVBQUU7QUFDYk8sbUJBQU8sRUFBRSxDQUNQO0FBQUVKLG1CQUFLLEVBQUUsTUFBVDtBQUFpQkssMEJBQVksRUFBRTtBQUEvQixhQURPLEVBRVA7QUFBRUwsbUJBQUssRUFBRSxNQUFUO0FBQWlCSywwQkFBWSxFQUFFO0FBQS9CLGFBRk8sRUFHUDtBQUFFTCxtQkFBSyxFQUFFLFFBQVQ7QUFBbUJLLDBCQUFZLEVBQUU7QUFBakMsYUFITyxFQUlQO0FBQUVMLG1CQUFLLEVBQUUsT0FBVDtBQUFrQkssMEJBQVksRUFBRTtBQUFoQyxhQUpPO0FBREksV0FGVjtBQVVMTCxlQUFLLEVBQUU7QUFWRixTQXZDSTtBQW1EWE8sY0FBTSxFQUFFO0FBQ05YLHFCQUFXLEVBQUUsT0FEUDtBQUVOQyx1QkFBYSxFQUFFO0FBQ2JDLGdCQUFJLEVBQUUsTUFETztBQUViQyx1QkFBVyxFQUFFO0FBRkEsV0FGVDtBQU1OQyxlQUFLLEVBQUU7QUFORCxTQW5ERztBQTJEWFEsbUJBQVcsRUFBRTtBQUNYWixxQkFBVyxFQUFFLFVBREY7QUFFWEMsdUJBQWEsRUFBRTtBQUNiRSx1QkFBVyxFQUFFO0FBREEsV0FGSjtBQUtYQyxlQUFLLEVBQUU7QUFMSTtBQTNERjtBQURQLEs7OzZOQXNFYSxVQUFDUyxLQUFELEVBQVFDLGVBQVIsRUFBNEI7QUFDL0MsVUFBTUMsa0JBQWtCLHFCQUFRLE1BQUtDLEtBQUwsQ0FBV2xCLFdBQW5CLENBQXhCOztBQUNBLFVBQU1tQixrQkFBa0IscUJBQVFGLGtCQUFrQixDQUFDRCxlQUFELENBQTFCLENBQXhCOztBQUNBRyx3QkFBa0IsQ0FBQ2IsS0FBbkIsR0FBMkJTLEtBQUssQ0FBQ0ssTUFBTixDQUFhZCxLQUF4QztBQUNBVyx3QkFBa0IsQ0FBQ0QsZUFBRCxDQUFsQixHQUFzQ0csa0JBQXRDOztBQUNBLFlBQUtFLFFBQUwsQ0FBYztBQUFFckIsbUJBQVcsRUFBRWlCO0FBQWYsT0FBZDtBQUNELEs7OzROQUdtQixVQUFDRixLQUFELEVBQVc7QUFDN0JBLFdBQUssQ0FBQ08sY0FBTjtBQUNBLFVBQU1DLFFBQVEsR0FBRyxFQUFqQjs7QUFDQSxXQUFLLElBQUlDLHNCQUFULElBQW1DLE1BQUtOLEtBQUwsQ0FBV2xCLFdBQTlDLEVBQTJEO0FBQ3pEdUIsZ0JBQVEsQ0FBQ0Msc0JBQUQsQ0FBUixHQUFtQyxNQUFLTixLQUFMLENBQVdsQixXQUFYLENBQ2pDd0Isc0JBRGlDLEVBRWpDbEIsS0FGRjtBQUdEOztBQUVELFVBQU1tQixPQUFPLEdBQUc7QUFDZEMsbUJBQVcsRUFBRUg7QUFEQyxPQUFoQjtBQUdBSSxhQUFPLENBQUNDLEdBQVIsQ0FBWUgsT0FBTyxDQUFDQyxXQUFwQjtBQUNELEs7Ozs7Ozs7NkJBQ1E7QUFBQTs7QUFDUCxVQUFJRyxNQUFNLEdBQUcsSUFBYjs7QUFDQSxVQUFJLEtBQUtDLEtBQUwsQ0FBV0MsTUFBZixFQUF1QjtBQUNyQkYsY0FBTSxHQUNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRTtBQUFNLG1CQUFTLEVBQUVHLDhEQUFPLENBQUNILE1BQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRTtBQUFPLGNBQUksRUFBQyxNQUFaO0FBQW1CLHFCQUFXLEVBQUMsb0JBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERixFQUVFO0FBQU8sY0FBSSxFQUFDLFFBQVo7QUFBcUIsZUFBSyxFQUFDLFFBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGRixDQURGLENBREY7QUFRRDs7QUFFRCxVQUFNSSxnQkFBZ0IsR0FBRyxFQUF6Qjs7QUFDQSxXQUFLLElBQUlDLEdBQVQsSUFBZ0IsS0FBS2hCLEtBQUwsQ0FBV2xCLFdBQTNCLEVBQXdDO0FBQ3RDaUMsd0JBQWdCLENBQUNFLElBQWpCLENBQXNCO0FBQ3BCQyxZQUFFLEVBQUVGLEdBRGdCO0FBRXBCRyxnQkFBTSxFQUFFLEtBQUtuQixLQUFMLENBQVdsQixXQUFYLENBQXVCa0MsR0FBdkI7QUFGWSxTQUF0QjtBQUlEOztBQUNELGFBQ0U7QUFBSyxpQkFBUyxFQUFFRiw4REFBTyxDQUFDTSxZQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSyxpQkFBUyxFQUFFTiw4REFBTyxDQUFDTyxJQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFLLEtBQUtULEtBQUwsQ0FBV1UsS0FBaEIsQ0FERixFQUVHWCxNQUZILEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUVHSSxnQkFBZ0IsQ0FBQ1EsR0FBakIsQ0FBcUIsVUFBQ0MsV0FBRCxFQUFjQyxLQUFkO0FBQUEsZUFDcEIsTUFBQyx1REFBRDtBQUNFLGFBQUcsRUFBRUQsV0FBVyxDQUFDTixFQURuQjtBQUVFLHFCQUFXLEVBQUVNLFdBQVcsQ0FBQ0wsTUFBWixDQUFtQm5DLFdBRmxDO0FBR0UsdUJBQWEsRUFBRXdDLFdBQVcsQ0FBQ0wsTUFBWixDQUFtQmxDLGFBSHBDO0FBSUUsZUFBSyxFQUFFdUMsV0FBVyxDQUFDTCxNQUFaLENBQW1CL0IsS0FKNUI7QUFLRSxpQkFBTyxFQUFFLGlCQUFDUyxLQUFEO0FBQUEsbUJBQ1AsTUFBSSxDQUFDNkIsa0JBQUwsQ0FBd0I3QixLQUF4QixFQUErQjJCLFdBQVcsQ0FBQ04sRUFBM0MsQ0FETztBQUFBLFdBTFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURvQjtBQUFBLE9BQXJCLENBRkgsRUFjRSxNQUFDLDBEQUFEO0FBQVEsZUFBTyxFQUFFLEtBQUtTLGlCQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQWRGLENBSEYsQ0FERixDQURGO0FBd0JEOzs7O0VBMUl1QkMsK0M7O0FBNklYL0MsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmU1MWFjZWU0ZDE5NjM0Yjc2NmM2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9wcm9kdWN0Rm9ybS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vLi4vLi4vVUkvSW5wdXQvSW5wdXRcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vLi4vVUkvQnV0dG9uL0J1dHRvblwiO1xyXG5cclxuY2xhc3MgUHJvZHVjdEZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgcHJvZHVjdEZvcm06IHtcclxuICAgICAgbmFtZToge1xyXG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImlucHV0XCIsXHJcbiAgICAgICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcjogXCJQcm9kdWN0IE5hbWVcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICB9LFxyXG4gICAgICBwcmljZToge1xyXG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImlucHV0XCIsXHJcbiAgICAgICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcclxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlByb2R1Y3QgUHJpY2VcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICB9LFxyXG4gICAgICBzaXplOiB7XHJcbiAgICAgICAgZWxlbWVudFR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlNpemVcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgY2F0ZWdvcnk6IHtcclxuICAgICAgICBlbGVtZW50VHlwZTogXCJzZWxlY3RcIixcclxuICAgICAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgICAgICBvcHRpb25zOiBbXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwibnVsbFwiLCBkaXNwbGF5VmFsdWU6IFwiLS0tU2VsZWN0IENhdGVnb3J5LS0tXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJtZW5cIiwgZGlzcGxheVZhbHVlOiBcIk1lblwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwid29tZW5cIiwgZGlzcGxheVZhbHVlOiBcIldvbWVuXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJraWRzXCIsIGRpc3BsYXlWYWx1ZTogXCJLaWRzXCIgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgfSxcclxuXHJcbiAgICAgIGJyYW5kOiB7XHJcbiAgICAgICAgZWxlbWVudFR5cGU6IFwic2VsZWN0XCIsXHJcbiAgICAgICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICAgICAgb3B0aW9uczogW1xyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIm51bGxcIiwgZGlzcGxheVZhbHVlOiBcIi0tLVNlbGVjdCBCcmFuZC0tLVwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwibmlrZVwiLCBkaXNwbGF5VmFsdWU6IFwiTmlrZVwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiY2xhcmtzXCIsIGRpc3BsYXlWYWx1ZTogXCJDbGFya3NcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIkd1Y2NpXCIsIGRpc3BsYXlWYWx1ZTogXCJHdWNjaVwiIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGltYWdlczoge1xyXG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImlucHV0XCIsXHJcbiAgICAgICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICAgICAgdHlwZTogXCJmaWxlXCIsXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcjogXCJQcm9kdWN0IGltYWdlc1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGRlc2NyaXB0aW9uOiB7XHJcbiAgICAgICAgZWxlbWVudFR5cGU6IFwidGV4dGFyZWFcIixcclxuICAgICAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcjogXCJQcm9kdWN0IGRlc2NyaXB0aW9uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfTtcclxuICAvL0lucHV0IENoYW5nZSBIYW5kbGVyXHJcbiAgaW5wdXRDaGFuZ2VIYW5kbGVyID0gKGV2ZW50LCBpbnB1dElkZW50aWZpZXIpID0+IHtcclxuICAgIGNvbnN0IHVwZGF0ZWRQcm9kdWN0Rm9ybSA9IHsgLi4udGhpcy5zdGF0ZS5wcm9kdWN0Rm9ybSB9O1xyXG4gICAgY29uc3QgdXBkYXRlZEZvcm1FbGVtZW50ID0geyAuLi51cGRhdGVkUHJvZHVjdEZvcm1baW5wdXRJZGVudGlmaWVyXSB9O1xyXG4gICAgdXBkYXRlZEZvcm1FbGVtZW50LnZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgdXBkYXRlZFByb2R1Y3RGb3JtW2lucHV0SWRlbnRpZmllcl0gPSB1cGRhdGVkRm9ybUVsZW1lbnQ7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgcHJvZHVjdEZvcm06IHVwZGF0ZWRQcm9kdWN0Rm9ybSB9KTtcclxuICB9O1xyXG5cclxuICAvL0FkZGluZyBQcm9kdWN0IEhhbmRsZXJcclxuICBhZGRQcm9kdWN0SGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGZvcm1EYXRhID0ge307XHJcbiAgICBmb3IgKGxldCBpbnB1dEVsZW1lbnRJZGVudGlmaWVyIGluIHRoaXMuc3RhdGUucHJvZHVjdEZvcm0pIHtcclxuICAgICAgZm9ybURhdGFbaW5wdXRFbGVtZW50SWRlbnRpZmllcl0gPSB0aGlzLnN0YXRlLnByb2R1Y3RGb3JtW1xyXG4gICAgICAgIGlucHV0RWxlbWVudElkZW50aWZpZXJcclxuICAgICAgXS52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwcm9kdWN0ID0ge1xyXG4gICAgICBwcm9kdWN0RGF0YTogZm9ybURhdGEsXHJcbiAgICB9O1xyXG4gICAgY29uc29sZS5sb2cocHJvZHVjdC5wcm9kdWN0RGF0YSk7XHJcbiAgfTtcclxuICByZW5kZXIoKSB7XHJcbiAgICBsZXQgc2VhcmNoID0gbnVsbDtcclxuICAgIGlmICh0aGlzLnByb3BzLnVwZGF0ZSkge1xyXG4gICAgICBzZWFyY2ggPSAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2h9PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIFByb2R1Y3QgQ29kZVwiIC8+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTZWFyY2hcIiAvPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZvcm1FbGVtZW50QXJyYXkgPSBbXTtcclxuICAgIGZvciAobGV0IGtleSBpbiB0aGlzLnN0YXRlLnByb2R1Y3RGb3JtKSB7XHJcbiAgICAgIGZvcm1FbGVtZW50QXJyYXkucHVzaCh7XHJcbiAgICAgICAgaWQ6IGtleSxcclxuICAgICAgICBjb25maWc6IHRoaXMuc3RhdGUucHJvZHVjdEZvcm1ba2V5XSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5Gb3Jtc1dyYXBwZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLkZvcm19PlxyXG4gICAgICAgICAgPGgyPnt0aGlzLnByb3BzLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICB7c2VhcmNofVxyXG4gICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgIHsvKiB7dGhpcy5wcm9wcy50eXBlID09IFwiVXBkYXRlIFByb2R1Y3RcIiA/IDx9ICovfVxyXG4gICAgICAgICAgICB7Zm9ybUVsZW1lbnRBcnJheS5tYXAoKGZvcm1FbGVtZW50LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAga2V5PXtmb3JtRWxlbWVudC5pZH1cclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlPXtmb3JtRWxlbWVudC5jb25maWcuZWxlbWVudFR5cGV9XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50Q29uZmlnPXtmb3JtRWxlbWVudC5jb25maWcuZWxlbWVudENvbmZpZ31cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRWxlbWVudC5jb25maWcudmFsdWV9XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VkPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRDaGFuZ2VIYW5kbGVyKGV2ZW50LCBmb3JtRWxlbWVudC5pZClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApKX1cclxuXHJcbiAgICAgICAgICAgIDxCdXR0b24gY2xpY2tlZD17dGhpcy5hZGRQcm9kdWN0SGFuZGxlcn0+QWRkIFByb2R1Y3Q8L0J1dHRvbj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdEZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=