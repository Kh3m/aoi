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
            placeholder: "Product Price"
          },
          value: ""
        }
      }
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
            lineNumber: 108,
            columnNumber: 9
          }
        }, __jsx("form", {
          className: _productForm_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.search,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 11
          }
        }, __jsx("input", {
          type: "text",
          placeholder: "Enter Product Code",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 13
          }
        }), __jsx("input", {
          type: "submit",
          value: "Search",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111,
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
          lineNumber: 125,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: _productForm_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.Form,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 9
        }
      }, __jsx("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 11
        }
      }, this.props.title), search, __jsx("form", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 11
        }
      }, formElementArray.map(function (formElement, index) {
        return __jsx(_UI_Input_Input__WEBPACK_IMPORTED_MODULE_9__["default"], {
          key: formElement.id,
          elementType: formElement.config.elementType,
          elementConfig: formElement.config.elementConfig,
          value: formElement.config.value,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 15
          }
        });
      }), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 13
        }
      }, __jsx("input", {
        type: "text",
        name: "title",
        placeholder: "Product Title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 15
        }
      }), __jsx("input", {
        type: "number",
        name: "price",
        placeholder: "Product Price",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 15
        }
      })), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 13
        }
      }, __jsx("select", {
        name: "category",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 15
        }
      }, __jsx("option", {
        value: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 17
        }
      }, "---Select Category"), __jsx("option", {
        value: "male",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 17
        }
      }, "Male"), __jsx("option", {
        value: "female",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 17
        }
      }, "Female"), __jsx("option", {
        value: "kids",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 17
        }
      }, "Kids")), __jsx("select", {
        name: "subCategory",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 15
        }
      }, __jsx("option", {
        value: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 17
        }
      }, "---Select Product Sub-Category"), __jsx("option", {
        value: "shoes",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 17
        }
      }, "Shoes"), __jsx("option", {
        value: "activities",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 17
        }
      }, "Activities"), __jsx("option", {
        value: "clothes",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 17
        }
      }, "CLothes & More"))), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 13
        }
      }, __jsx("select", {
        name: "brand",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 15
        }
      }, __jsx("option", {
        value: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 17
        }
      }, "---Select Product Brand"), __jsx("option", {
        value: "nike",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 17
        }
      }, "Nike"), __jsx("option", {
        value: "addidas",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 17
        }
      }, "Addidas"), __jsx("option", {
        value: "clarks",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 17
        }
      }, "Clarks"), __jsx("option", {
        value: "etc",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 17
        }
      }, "etc...")), __jsx("input", {
        type: "number",
        name: "quantity",
        placeholder: "Quantity",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 15
        }
      })), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 13
        }
      }, __jsx("input", {
        type: "number",
        name: "sizes",
        placeholder: "Sizes",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 15
        }
      }), __jsx("input", {
        type: "text",
        name: "colors",
        placeholder: "Colors",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 15
        }
      })), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 13
        }
      }, __jsx("input", {
        type: "text",
        name: "material",
        placeholder: "Material",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 15
        }
      }), __jsx("input", {
        type: "text",
        name: "feature",
        placeholder: "Feature",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 15
        }
      })), __jsx("textarea", {
        name: "description",
        placeholder: "Product description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 13
        }
      }), __jsx("input", {
        type: "submit",
        value: this.props.title,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 13
        }
      }))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rhc2hib2FyZC9Db250ZW50cy9Qcm9kdWN0Rm9ybS9Qcm9kdWN0Rm9ybS5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0Rm9ybSIsInRpdGxlIiwiZWxlbWVudFR5cGUiLCJlbGVtZW50Q29uZmlnIiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJwcmljZSIsInNpemUiLCJjb2xvciIsIm1hdGVyaWFsIiwiZmVhdHVyZSIsImNhdGVnb3J5Iiwib3B0aW9ucyIsImRpc3BsYXlWYWx1ZSIsInN1YkNhdGVnb3J5IiwiYnJhbmQiLCJkZXNjcmlwdGlvbiIsInNlYXJjaCIsInByb3BzIiwidXBkYXRlIiwiY2xhc3NlcyIsImZvcm1FbGVtZW50QXJyYXkiLCJrZXkiLCJzdGF0ZSIsInB1c2giLCJpZCIsImNvbmZpZyIsIkZvcm1zV3JhcHBlciIsIkZvcm0iLCJtYXAiLCJmb3JtRWxlbWVudCIsImluZGV4IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBOztJQUVNQSxXOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNJO0FBQ05BLGlCQUFXLEVBQUU7QUFDWEMsYUFBSyxFQUFFO0FBQ0xDLHFCQUFXLEVBQUUsT0FEUjtBQUVMQyx1QkFBYSxFQUFFO0FBQ2JDLGdCQUFJLEVBQUUsTUFETztBQUViQyx1QkFBVyxFQUFFO0FBRkEsV0FGVjtBQU1MQyxlQUFLLEVBQUU7QUFORixTQURJO0FBU1hDLGFBQUssRUFBRTtBQUNMTCxxQkFBVyxFQUFFLE9BRFI7QUFFTEMsdUJBQWEsRUFBRTtBQUNiQyxnQkFBSSxFQUFFLFFBRE87QUFFYkMsdUJBQVcsRUFBRTtBQUZBLFdBRlY7QUFNTEMsZUFBSyxFQUFFO0FBTkYsU0FUSTtBQWlCWEUsWUFBSSxFQUFFO0FBQ0pOLHFCQUFXLEVBQUUsT0FEVDtBQUVKQyx1QkFBYSxFQUFFO0FBQ2JDLGdCQUFJLEVBQUUs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QUFXLEVBQUMsVUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLEVBRUU7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixZQUFJLEVBQUMsU0FBeEI7QUFBa0MsbUJBQVcsRUFBQyxTQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkYsQ0E3Q0YsRUFrREU7QUFDRSxZQUFJLEVBQUMsYUFEUDtBQUVFLG1CQUFXLEVBQUMscUJBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQWxERixFQXVERTtBQUFPLFlBQUksRUFBQyxRQUFaO0FBQXFCLGFBQUssRUFBRSxLQUFLYSxLQUFMLENBQVdsQixLQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBdkRGLENBSEYsQ0FERixDQURGO0FBaUVEOzs7O0VBdkx1QmdDLCtDOztBQTBMWGpDLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4yZDBkNTIwYTFmNTdhMjRkYTQ4Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vcHJvZHVjdEZvcm0ubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4uLy4uLy4uL1VJL0lucHV0L0lucHV0XCI7XHJcblxyXG5jbGFzcyBQcm9kdWN0Rm9ybSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBQcm9kdWN0Rm9ybToge1xyXG4gICAgICB0aXRsZToge1xyXG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImlucHV0XCIsXHJcbiAgICAgICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcjogXCJQcm9kdWN0IFRpdGxlXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgfSxcclxuICAgICAgcHJpY2U6IHtcclxuICAgICAgICBlbGVtZW50VHlwZTogXCJpbnB1dFwiLFxyXG4gICAgICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcjogXCJQcm9kdWN0IFByaWNlXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgfSxcclxuICAgICAgc2l6ZToge1xyXG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImlucHV0XCIsXHJcbiAgICAgICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcjogXCJTaXplXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgfSxcclxuXHJcbiAgICAgIGNvbG9yOiB7XHJcbiAgICAgICAgZWxlbWVudFR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkNvbG9yXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgfSxcclxuXHJcbiAgICAgIG1hdGVyaWFsOiB7XHJcbiAgICAgICAgZWxlbWVudFR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlByb2R1Y3QgTWF0ZXJpYWxcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICB9LFxyXG4gICAgICBmZWF0dXJlOiB7XHJcbiAgICAgICAgZWxlbWVudFR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlByb2R1Y3QgRmVhdHVyZVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGNhdGVnb3J5OiB7XHJcbiAgICAgICAgZWxlbWVudFR5cGU6IFwic2VsZWN0XCIsXHJcbiAgICAgICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICAgICAgb3B0aW9uczogW1xyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIm1lblwiLCBkaXNwbGF5VmFsdWU6IFwiTWVuXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJ3b21lblwiLCBkaXNwbGF5VmFsdWU6IFwiV29tZW5cIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcImtpZHNcIiwgZGlzcGxheVZhbHVlOiBcIktpZHNcIiB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgc3ViQ2F0ZWdvcnk6IHtcclxuICAgICAgICBlbGVtZW50VHlwZTogXCJzZWxlY3RcIixcclxuICAgICAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgICAgICBvcHRpb25zOiBbXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwic2hvZXNcIiwgZGlzcGxheVZhbHVlOiBcIlNob2VzXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJiYWdzXCIsIGRpc3BsYXlWYWx1ZTogXCJXb21lblwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiS2lkc1wiLCBkaXNwbGF5VmFsdWU6IFwiS2lkc1wiIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBicmFuZDoge1xyXG4gICAgICAgIGVsZW1lbnRUeXBlOiBcInNlbGVjdFwiLFxyXG4gICAgICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgICAgIG9wdGlvbnM6IFtcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJuaWtlXCIsIGRpc3BsYXlWYWx1ZTogXCJOaWtlXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJjbGFya3NcIiwgZGlzcGxheVZhbHVlOiBcIkNsYXJrc1wiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiR3VjY2lcIiwgZGlzcGxheVZhbHVlOiBcIkd1Y2NpXCIgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgfSxcclxuICAgICAgZGVzY3JpcHRpb246IHtcclxuICAgICAgICBlbGVtZW50VHlwZTogXCJ0ZXh0YXJlYVwiLFxyXG4gICAgICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlByb2R1Y3QgUHJpY2VcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBsZXQgc2VhcmNoID0gbnVsbDtcclxuICAgIGlmICh0aGlzLnByb3BzLnVwZGF0ZSkge1xyXG4gICAgICBzZWFyY2ggPSAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2h9PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIFByb2R1Y3QgQ29kZVwiIC8+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTZWFyY2hcIiAvPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBmb3JtRWxlbWVudEFycmF5ID0gW107XHJcbiAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5zdGF0ZS5Qcm9kdWN0Rm9ybSkge1xyXG4gICAgICBmb3JtRWxlbWVudEFycmF5LnB1c2goe1xyXG4gICAgICAgIGlkOiBrZXksXHJcbiAgICAgICAgY29uZmlnOiB0aGlzLnN0YXRlLlByb2R1Y3RGb3JtW2tleV0sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuRm9ybXNXcmFwcGVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5Gb3JtfT5cclxuICAgICAgICAgIDxoMj57dGhpcy5wcm9wcy50aXRsZX08L2gyPlxyXG4gICAgICAgICAge3NlYXJjaH1cclxuICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICB7Lyoge3RoaXMucHJvcHMudHlwZSA9PSBcIlVwZGF0ZSBQcm9kdWN0XCIgPyA8fSAqL31cclxuICAgICAgICAgICAge2Zvcm1FbGVtZW50QXJyYXkubWFwKChmb3JtRWxlbWVudCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIGtleT17Zm9ybUVsZW1lbnQuaWR9XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZT17Zm9ybUVsZW1lbnQuY29uZmlnLmVsZW1lbnRUeXBlfVxyXG4gICAgICAgICAgICAgICAgZWxlbWVudENvbmZpZz17Zm9ybUVsZW1lbnQuY29uZmlnLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybUVsZW1lbnQuY29uZmlnLnZhbHVlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0aXRsZVwiIHBsYWNlaG9sZGVyPVwiUHJvZHVjdCBUaXRsZVwiIC8+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwicHJpY2VcIiBwbGFjZWhvbGRlcj1cIlByb2R1Y3QgUHJpY2VcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJjYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPi0tLVNlbGVjdCBDYXRlZ29yeTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1hbGVcIj5NYWxlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZmVtYWxlXCI+RmVtYWxlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwia2lkc1wiPktpZHM8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuXHJcbiAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwic3ViQ2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj4tLS1TZWxlY3QgUHJvZHVjdCBTdWItQ2F0ZWdvcnk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJzaG9lc1wiPlNob2VzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYWN0aXZpdGllc1wiPkFjdGl2aXRpZXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjbG90aGVzXCI+Q0xvdGhlcyAmIE1vcmU8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiYnJhbmRcIj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj4tLS1TZWxlY3QgUHJvZHVjdCBCcmFuZDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm5pa2VcIj5OaWtlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYWRkaWRhc1wiPkFkZGlkYXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjbGFya3NcIj5DbGFya3M8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJldGNcIj5ldGMuLi48L29wdGlvbj5cclxuICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuXHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwicXVhbnRpdHlcIiBwbGFjZWhvbGRlcj1cIlF1YW50aXR5XCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwic2l6ZXNcIiBwbGFjZWhvbGRlcj1cIlNpemVzXCIgLz5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY29sb3JzXCIgcGxhY2Vob2xkZXI9XCJDb2xvcnNcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm1hdGVyaWFsXCIgcGxhY2Vob2xkZXI9XCJNYXRlcmlhbFwiIC8+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImZlYXR1cmVcIiBwbGFjZWhvbGRlcj1cIkZlYXR1cmVcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQcm9kdWN0IGRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgPjwvdGV4dGFyZWE+XHJcblxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPXt0aGlzLnByb3BzLnRpdGxlfSAvPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0Rm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==