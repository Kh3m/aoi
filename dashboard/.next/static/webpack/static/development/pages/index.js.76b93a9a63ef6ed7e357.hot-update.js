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
      var search = null;

      if (this.props.update) {
        search = __jsx("div", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 9
          }
        }, __jsx("form", {
          className: _productForm_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.search,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 11
          }
        }, __jsx("input", {
          type: "text",
          placeholder: "Enter Product Code",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 13
          }
        }), __jsx("input", {
          type: "submit",
          value: "Search",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110,
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
          lineNumber: 124,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: _productForm_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.Form,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 9
        }
      }, __jsx("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 11
        }
      }, this.props.title), search, __jsx("form", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 11
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 13
        }
      }, __jsx("input", {
        type: "text",
        name: "title",
        placeholder: "Product Title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 15
        }
      }), __jsx("input", {
        type: "number",
        name: "price",
        placeholder: "Product Price",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 15
        }
      })), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 13
        }
      }, __jsx("select", {
        name: "category",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 15
        }
      }, __jsx("option", {
        value: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 17
        }
      }, "---Select Category"), __jsx("option", {
        value: "male",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 17
        }
      }, "Male"), __jsx("option", {
        value: "female",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 17
        }
      }, "Female"), __jsx("option", {
        value: "kids",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 17
        }
      }, "Kids")), __jsx("select", {
        name: "subCategory",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 15
        }
      }, __jsx("option", {
        value: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 17
        }
      }, "---Select Product Sub-Category"), __jsx("option", {
        value: "shoes",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 17
        }
      }, "Shoes"), __jsx("option", {
        value: "activities",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 17
        }
      }, "Activities"), __jsx("option", {
        value: "clothes",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 17
        }
      }, "CLothes & More"))), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 13
        }
      }, __jsx("select", {
        name: "brand",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 15
        }
      }, __jsx("option", {
        value: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 17
        }
      }, "---Select Product Brand"), __jsx("option", {
        value: "nike",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 17
        }
      }, "Nike"), __jsx("option", {
        value: "addidas",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 17
        }
      }, "Addidas"), __jsx("option", {
        value: "clarks",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 17
        }
      }, "Clarks"), __jsx("option", {
        value: "etc",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 17
        }
      }, "etc...")), __jsx("input", {
        type: "number",
        name: "quantity",
        placeholder: "Quantity",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 15
        }
      })), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 13
        }
      }, __jsx("input", {
        type: "number",
        name: "sizes",
        placeholder: "Sizes",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 15
        }
      }), __jsx("input", {
        type: "text",
        name: "colors",
        placeholder: "Colors",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 15
        }
      })), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 13
        }
      }, __jsx("input", {
        type: "text",
        name: "material",
        placeholder: "Material",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 15
        }
      }), __jsx("input", {
        type: "text",
        name: "feature",
        placeholder: "Feature",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 15
        }
      })), __jsx("textarea", {
        name: "description",
        placeholder: "Product description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 13
        }
      }), __jsx("input", {
        type: "submit",
        value: this.props.title,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rhc2hib2FyZC9Db250ZW50cy9Qcm9kdWN0Rm9ybS9Qcm9kdWN0Rm9ybS5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0Rm9ybSIsInRpdGxlIiwiZWxlbWVudFR5cGUiLCJlbGVtZW50Q29uZmlnIiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJwcmljZSIsInNpemUiLCJjb2xvciIsIm1hdGVyaWFsIiwiZmVhdHVyZSIsImNhdGVnb3J5Iiwib3B0aW9ucyIsImRpc3BsYXlWYWx1ZSIsInN1YkNhdGVnb3J5IiwiYnJhbmQiLCJkZXNjcmlwdGlvbiIsInNlYXJjaCIsInByb3BzIiwidXBkYXRlIiwiY2xhc3NlcyIsImZvcm1FbGVtZW50QXJyYXkiLCJrZXkiLCJzdGF0ZSIsInB1c2giLCJpZCIsImNvbmZpZyIsIkZvcm1zV3JhcHBlciIsIkZvcm0iLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7O0lBRU1BLFc7Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ0k7QUFDTkEsaUJBQVcsRUFBRTtBQUNYQyxhQUFLLEVBQUU7QUFDTEMscUJBQVcsRUFBRSxPQURSO0FBRUxDLHVCQUFhLEVBQUU7QUFDYkMsZ0JBQUksRUFBRSxNQURPO0FBRWJDLHVCQUFXLEVBQUU7QUFGQSxXQUZWO0FBTUxDLGVBQUssRUFBRTtBQU5GLFNBREk7QUFTWEMsYUFBSyxFQUFFO0FBQ0xMLHFCQUFXLEVBQUUsT0FEUjtBQUVMQyx1QkFBYSxFQUFFO0FBQ2JDLGdCQUFJLEVBQUUsUUFETztBQUViQyx1QkFBVyxFQUFFO0FBRkEsV0FGVjtBQU1MQyxlQUFLLEVBQUU7QUFORixTQVRJO0FBaUJYRSxZQUFJLEVBQUU7QUFDSk4scUJBQVcsRUFBRSxPQURUO0FBRUpDLHVCQUFhLEVBQUU7QUFDYkMsZ0JBQUksRUFBRSxNQURPO0FBRWJDLHVCQUFXLEVBQUU7QUFGQSxXQUZYO0FB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LEVBRUU7QUFBUSxhQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLEVBR0U7QUFBUSxhQUFLLEVBQUMsUUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhGLEVBSUU7QUFBUSxhQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGLENBREYsRUFRRTtBQUFRLFlBQUksRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFRLGFBQUssRUFBQyxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMENBREYsRUFFRTtBQUFRLGFBQUssRUFBQyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsRUFHRTtBQUFRLGFBQUssRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSEYsRUFJRTtBQUFRLGFBQUssRUFBQyxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBSkYsQ0FSRixDQU5GLEVBcUJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFRLFlBQUksRUFBQyxPQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFRLGFBQUssRUFBQyxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBREYsRUFFRTtBQUFRLGFBQUssRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsRUFHRTtBQUFRLGFBQUssRUFBQyxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEYsRUFJRTtBQUFRLGFBQUssRUFBQyxRQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkYsRUFLRTtBQUFRLGFBQUssRUFBQyxLQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEYsQ0FERixFQVNFO0FBQU8sWUFBSSxFQUFDLFFBQVo7QUFBcUIsWUFBSSxFQUFDLFVBQTFCO0FBQXFDLG1CQUFXLEVBQUMsVUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVRGLENBckJGLEVBZ0NFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFPLFlBQUksRUFBQyxRQUFaO0FBQXFCLFlBQUksRUFBQyxPQUExQjtBQUFrQyxtQkFBVyxFQUFDLE9BQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixFQUVFO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsWUFBSSxFQUFDLFFBQXhCO0FBQWlDLG1CQUFXLEVBQUMsUUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZGLENBaENGLEVBcUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLFlBQUksRUFBQyxVQUF4QjtBQUFtQyxtQkFBVyxFQUFDLFVBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixFQUVFO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsWUFBSSxFQUFDLFNBQXhCO0FBQWtDLG1CQUFXLEVBQUMsU0FBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZGLENBckNGLEVBMENFO0FBQ0UsWUFBSSxFQUFDLGFBRFA7QUFFRSxtQkFBVyxFQUFDLHFCQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUExQ0YsRUErQ0U7QUFBTyxZQUFJLEVBQUMsUUFBWjtBQUFxQixhQUFLLEVBQUUsS0FBS0MsS0FBTCxDQUFXbEIsS0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQS9DRixDQUhGLENBREYsQ0FERjtBQXlERDs7OztFQS9LdUI2QiwrQzs7QUFrTFg5QiwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuNzZiOTNhOWE2M2VmNmVkN2UzNTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL3Byb2R1Y3RGb3JtLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNsYXNzIFByb2R1Y3RGb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIFByb2R1Y3RGb3JtOiB7XHJcbiAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgZWxlbWVudFR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlByb2R1Y3QgVGl0bGVcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICB9LFxyXG4gICAgICBwcmljZToge1xyXG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImlucHV0XCIsXHJcbiAgICAgICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcclxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlByb2R1Y3QgUHJpY2VcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICB9LFxyXG4gICAgICBzaXplOiB7XHJcbiAgICAgICAgZWxlbWVudFR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlNpemVcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgY29sb3I6IHtcclxuICAgICAgICBlbGVtZW50VHlwZTogXCJpbnB1dFwiLFxyXG4gICAgICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IFwiQ29sb3JcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgbWF0ZXJpYWw6IHtcclxuICAgICAgICBlbGVtZW50VHlwZTogXCJpbnB1dFwiLFxyXG4gICAgICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IFwiUHJvZHVjdCBNYXRlcmlhbFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGZlYXR1cmU6IHtcclxuICAgICAgICBlbGVtZW50VHlwZTogXCJpbnB1dFwiLFxyXG4gICAgICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IFwiUHJvZHVjdCBGZWF0dXJlXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgfSxcclxuICAgICAgY2F0ZWdvcnk6IHtcclxuICAgICAgICBlbGVtZW50VHlwZTogXCJzZWxlY3RcIixcclxuICAgICAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgICAgICBvcHRpb25zOiBbXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwibWVuXCIsIGRpc3BsYXlWYWx1ZTogXCJNZW5cIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIndvbWVuXCIsIGRpc3BsYXlWYWx1ZTogXCJXb21lblwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwia2lkc1wiLCBkaXNwbGF5VmFsdWU6IFwiS2lkc1wiIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBzdWJDYXRlZ29yeToge1xyXG4gICAgICAgIGVsZW1lbnRUeXBlOiBcInNlbGVjdFwiLFxyXG4gICAgICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgICAgIG9wdGlvbnM6IFtcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJzaG9lc1wiLCBkaXNwbGF5VmFsdWU6IFwiU2hvZXNcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcImJhZ3NcIiwgZGlzcGxheVZhbHVlOiBcIldvbWVuXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJLaWRzXCIsIGRpc3BsYXlWYWx1ZTogXCJLaWRzXCIgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgfSxcclxuXHJcbiAgICAgIGJyYW5kOiB7XHJcbiAgICAgICAgZWxlbWVudFR5cGU6IFwic2VsZWN0XCIsXHJcbiAgICAgICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICAgICAgb3B0aW9uczogW1xyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIm5pa2VcIiwgZGlzcGxheVZhbHVlOiBcIk5pa2VcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcImNsYXJrc1wiLCBkaXNwbGF5VmFsdWU6IFwiQ2xhcmtzXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJHdWNjaVwiLCBkaXNwbGF5VmFsdWU6IFwiR3VjY2lcIiB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICB9LFxyXG4gICAgICBkZXNjcmlwdGlvbjoge1xyXG4gICAgICAgIGVsZW1lbnRUeXBlOiBcInRleHRhcmVhXCIsXHJcbiAgICAgICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IFwiUHJvZHVjdCBQcmljZVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGxldCBzZWFyY2ggPSBudWxsO1xyXG4gICAgaWYgKHRoaXMucHJvcHMudXBkYXRlKSB7XHJcbiAgICAgIHNlYXJjaCA9IChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaH0+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgUHJvZHVjdCBDb2RlXCIgLz5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlNlYXJjaFwiIC8+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGZvcm1FbGVtZW50QXJyYXkgPSBbXTtcclxuICAgIGZvciAobGV0IGtleSBpbiB0aGlzLnN0YXRlLlByb2R1Y3RGb3JtKSB7XHJcbiAgICAgIGZvcm1FbGVtZW50QXJyYXkucHVzaCh7XHJcbiAgICAgICAgaWQ6IGtleSxcclxuICAgICAgICBjb25maWc6IHRoaXMuc3RhdGUuUHJvZHVjdEZvcm1ba2V5XSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5Gb3Jtc1dyYXBwZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLkZvcm19PlxyXG4gICAgICAgICAgPGgyPnt0aGlzLnByb3BzLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICB7c2VhcmNofVxyXG4gICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgIHsvKiB7dGhpcy5wcm9wcy50eXBlID09IFwiVXBkYXRlIFByb2R1Y3RcIiA/IDx9ICovfVxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0aXRsZVwiIHBsYWNlaG9sZGVyPVwiUHJvZHVjdCBUaXRsZVwiIC8+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwicHJpY2VcIiBwbGFjZWhvbGRlcj1cIlByb2R1Y3QgUHJpY2VcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJjYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPi0tLVNlbGVjdCBDYXRlZ29yeTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1hbGVcIj5NYWxlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZmVtYWxlXCI+RmVtYWxlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwia2lkc1wiPktpZHM8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuXHJcbiAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwic3ViQ2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj4tLS1TZWxlY3QgUHJvZHVjdCBTdWItQ2F0ZWdvcnk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJzaG9lc1wiPlNob2VzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYWN0aXZpdGllc1wiPkFjdGl2aXRpZXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjbG90aGVzXCI+Q0xvdGhlcyAmIE1vcmU8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiYnJhbmRcIj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj4tLS1TZWxlY3QgUHJvZHVjdCBCcmFuZDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm5pa2VcIj5OaWtlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYWRkaWRhc1wiPkFkZGlkYXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjbGFya3NcIj5DbGFya3M8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJldGNcIj5ldGMuLi48L29wdGlvbj5cclxuICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuXHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwicXVhbnRpdHlcIiBwbGFjZWhvbGRlcj1cIlF1YW50aXR5XCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwic2l6ZXNcIiBwbGFjZWhvbGRlcj1cIlNpemVzXCIgLz5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY29sb3JzXCIgcGxhY2Vob2xkZXI9XCJDb2xvcnNcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm1hdGVyaWFsXCIgcGxhY2Vob2xkZXI9XCJNYXRlcmlhbFwiIC8+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImZlYXR1cmVcIiBwbGFjZWhvbGRlcj1cIkZlYXR1cmVcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQcm9kdWN0IGRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgPjwvdGV4dGFyZWE+XHJcblxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPXt0aGlzLnByb3BzLnRpdGxlfSAvPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0Rm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==