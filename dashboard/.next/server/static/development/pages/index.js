module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/Dashboard/Contents/CarouselForm/CarouselForm.js":
/*!********************************************************************!*\
  !*** ./components/Dashboard/Contents/CarouselForm/CarouselForm.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CarouselForm_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CarouselForm.module.css */ "./components/Dashboard/Contents/CarouselForm/CarouselForm.module.css");
/* harmony import */ var _CarouselForm_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_CarouselForm_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Kh3m\\Documents\\projects\\austinExpress\\dashboard\\components\\Dashboard\\Contents\\CarouselForm\\CarouselForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const carousels = [{
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


class CarouselForm extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
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
          value: carousels[0].image
        }
      }, {
        title: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Carousel Title"
          },
          value: carousels[1].title
        },
        image: {
          elementType: "input",
          elementConfig: {
            type: "file"
          },
          value: carousels[1].image
        }
      }, {
        title: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Carousel Title"
          },
          value: carousels[2].title
        },
        image: {
          elementType: "input",
          elementConfig: {
            type: "file"
          },
          value: carousels[2].image
        }
      }, {
        title: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Carousel Title"
          },
          value: carousels[3].title
        },
        image: {
          elementType: "input",
          elementConfig: {
            type: "file"
          },
          value: carousels[3].image
        }
      }]
    });
  }

  render() {
    return __jsx("div", {
      className: _CarouselForm_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.FormsWrapper,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 12
      }
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CarouselForm);

/***/ }),

/***/ "./components/Dashboard/Contents/CarouselForm/CarouselForm.module.css":
/*!****************************************************************************!*\
  !*** ./components/Dashboard/Contents/CarouselForm/CarouselForm.module.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"FormsWrapper": "CarouselForm_FormsWrapper__1gLpa",
	"Form": "CarouselForm_Form__8VZIB",
	"display": "CarouselForm_display__6hhGO"
};


/***/ }),

/***/ "./components/Dashboard/Contents/Contents.js":
/*!***************************************************!*\
  !*** ./components/Dashboard/Contents/Contents.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Contents_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Contents.module.css */ "./components/Dashboard/Contents/Contents.module.css");
/* harmony import */ var _Contents_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Contents_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DashCards_Overviews_Overviews__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DashCards/Overviews/Overviews */ "./components/Dashboard/DashCards/Overviews/Overviews.js");
/* harmony import */ var _Products_Products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Products/Products */ "./components/Dashboard/Contents/Products/Products.js");
/* harmony import */ var _CarouselForm_CarouselForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CarouselForm/CarouselForm */ "./components/Dashboard/Contents/CarouselForm/CarouselForm.js");
/* harmony import */ var _DashboardSummary_DashboardSummary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DashboardSummary/DashboardSummary */ "./components/Dashboard/Contents/DashboardSummary/DashboardSummary.js");
var _jsxFileName = "C:\\Users\\Kh3m\\Documents\\projects\\austinExpress\\dashboard\\components\\Dashboard\\Contents\\Contents.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const contents = props => {
  let content = null;

  switch (props.type) {
    case "product":
      content = __jsx(_Products_Products__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 17
        }
      });
      break;

    case "updateProduct":
      content = __jsx(ProductForm, {
        title: "Update Product",
        update: true,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 17
        }
      });
      break;

    case "carousel":
      content = __jsx(_CarouselForm_CarouselForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 17
        }
      });
      break;

    default:
      content = __jsx(_DashboardSummary_DashboardSummary__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 17
        }
      });
  }

  return __jsx("div", {
    className: _Contents_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Contents,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _Contents_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.SideBarReplace,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx("footer", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, "Copyright \xA9 austinExpress.com")), __jsx("div", {
    className: _Contents_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.MainContents,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, content));
};

/* harmony default export */ __webpack_exports__["default"] = (contents);

/***/ }),

/***/ "./components/Dashboard/Contents/Contents.module.css":
/*!***********************************************************!*\
  !*** ./components/Dashboard/Contents/Contents.module.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"Contents": "Contents_Contents__eYTE1",
	"SideBarReplace": "Contents_SideBarReplace__2mPJO",
	"MainContents": "Contents_MainContents__6rm0G"
};


/***/ }),

/***/ "./components/Dashboard/Contents/DashboardSummary/DashboardSummary.js":
/*!****************************************************************************!*\
  !*** ./components/Dashboard/Contents/DashboardSummary/DashboardSummary.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DashboardSummary_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashboardSummary.module.css */ "./components/Dashboard/Contents/DashboardSummary/DashboardSummary.module.css");
/* harmony import */ var _DashboardSummary_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_DashboardSummary_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UI_Input_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../UI/Input/Input */ "./components/UI/Input/Input.js");
var _jsxFileName = "C:\\Users\\Kh3m\\Documents\\projects\\austinExpress\\dashboard\\components\\Dashboard\\Contents\\DashboardSummary\\DashboardSummary.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const dashboardSummary = () => {
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx(_UI_Input_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    inputtype: "input",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (dashboardSummary);

/***/ }),

/***/ "./components/Dashboard/Contents/DashboardSummary/DashboardSummary.module.css":
/*!************************************************************************************!*\
  !*** ./components/Dashboard/Contents/DashboardSummary/DashboardSummary.module.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ "./components/Dashboard/Contents/ProductForm/ProductForm.js":
/*!******************************************************************!*\
  !*** ./components/Dashboard/Contents/ProductForm/ProductForm.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _productForm_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productForm.module.css */ "./components/Dashboard/Contents/ProductForm/productForm.module.css");
/* harmony import */ var _productForm_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_productForm_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UI_Input_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../UI/Input/Input */ "./components/UI/Input/Input.js");
/* harmony import */ var _UI_Input_InputImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../UI/Input/InputImage */ "./components/UI/Input/InputImage.js");
/* harmony import */ var _UI_Button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../UI/Button/Button */ "./components/UI/Button/Button.js");
/* harmony import */ var _UI_ImageCards_ImageCards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../UI/ImageCards/ImageCards */ "./components/UI/ImageCards/ImageCards.js");
/* harmony import */ var _lib_requests__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../lib/requests */ "./lib/requests.js");
/* harmony import */ var _hooks_store_actions_product__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../hooks/store/actions/product */ "./hooks/store/actions/product.js");
/* harmony import */ var _hooks_store_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../hooks/store/store */ "./hooks/store/store.js");
var _jsxFileName = "C:\\Users\\Kh3m\\Documents\\projects\\austinExpress\\dashboard\\components\\Dashboard\\Contents\\ProductForm\\ProductForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const productForm = props => {
  const {
    0: productForm,
    1: setProductForm
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
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
    quantity: {
      elementType: "input",
      elementConfig: {
        type: "number",
        placeholder: "Quantity"
      },
      value: ""
    },
    sizes: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Sizes"
      },
      value: ""
    },
    colors: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Colors"
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
    description: {
      elementType: "textarea",
      elementConfig: {
        placeholder: "Product description"
      },
      value: ""
    }
  });
  const {
    0: imageUrls,
    1: setImageUrls
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]); // product http effects lib

  const {
    sendSaveRequest,
    sendUpdateRequest
  } = Object(_hooks_store_actions_product__WEBPACK_IMPORTED_MODULE_7__["default"])();
  const {
    product
  } = Object(_hooks_store_store__WEBPACK_IMPORTED_MODULE_8__["useStore"])()[0];
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    console.log("productForm", props.selectProduct);
    const {
      selectProduct
    } = props;

    if (selectProduct) {
      const updatedProductForm = _objectSpread(_objectSpread({}, productForm), {}, {
        name: _objectSpread(_objectSpread({}, productForm.name), {}, {
          value: selectProduct.product_name
        }),
        price: _objectSpread(_objectSpread({}, productForm.price), {}, {
          value: selectProduct.price
        }),
        quantity: _objectSpread(_objectSpread({}, productForm.quantity), {}, {
          value: selectProduct.quantity
        }),
        sizes: _objectSpread(_objectSpread({}, productForm.sizes), {}, {
          value: selectProduct.sizes.join(";")
        }),
        colors: _objectSpread(_objectSpread({}, productForm.colors), {}, {
          value: selectProduct.colors.join(";")
        }),
        category: _objectSpread(_objectSpread({}, productForm.category), {}, {
          values: selectProduct.category
        }),
        brand: _objectSpread(_objectSpread({}, productForm.brand), {}, {
          value: selectProduct.brand
        }),
        description: _objectSpread(_objectSpread({}, productForm.description), {}, {
          value: selectProduct.description
        })
      });

      setProductForm(updatedProductForm);
    }
  }, []); //Input Change Handler

  const inputChangeHandler = (event, inputIdentifier) => {
    const updatedProductForm = _objectSpread({}, productForm);

    const updatedFormElement = _objectSpread({}, updatedProductForm[inputIdentifier]);

    updatedFormElement.value = event.target.value;
    updatedProductForm[inputIdentifier] = updatedFormElement;
    setProductForm(updatedProductForm);
  }; // File Change Handler


  const onFileChangeHandler = event => {
    console.log(event.target.files);
    const formData = new FormData();

    for (let file of event.target.files) {
      formData.append("products", file);
    }

    fetch(_lib_requests__WEBPACK_IMPORTED_MODULE_6__["BASE_URL"] + "/api/uploads/products", {
      method: "PUT",
      body: formData
    }).then(res => res.json()).then(res => {
      setImageUrls(res.data.imageUrls);
    }).catch(err => console.log("error", err));
  }; //Adding Product Handler


  const addProductHandler = event => {
    event.preventDefault();
    let formData = {};

    for (let inputElementIdentifier in productForm) {
      formData[inputElementIdentifier] = productForm[inputElementIdentifier].value;
    }

    const product = {
      productData: formData
    };
    product.productData.sizes = typeof product.productData.sizes === "string" ? product.productData.sizes.split(/[;,]/gim).map(v => Number.parseFloat(v)) : product.productData.sizes;
    product.productData.colors = typeof product.productData.colors === "string" ? product.productData.colors.split(/[;,]/gim) : product.productData.colors; // destructure product data

    const {
      productData
    } = product; // check the state of product form (add / update)

    if (props.title === "Update Product") {
      console.log("Update Product", productData);
      sendUpdateRequest(props.selectProduct._id, {
        product_name: productData.name,
        description: productData.description,
        price: Number.parseFloat(productData.price),
        image_urls: imageUrls,
        quantity: Number.parseInt(productData.quantity),
        category: productData.category,
        colors: productData.colors,
        sizes: productData.sizes,
        brand: productData.brand
      });
    } else {
      console.log("Add Product", productData); // Create and save new product

      sendSaveRequest(productData.name, productData.description, Number.parseFloat(productData.price), imageUrls, Number.parseInt(productData.quantity), productData.category, productData.colors, productData.sizes, productData.brand);
    }
  };

  let search = null;

  if (props.update) {
    search = __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 7
      }
    }, __jsx("form", {
      className: _productForm_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.search,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 9
      }
    }, __jsx("input", {
      type: "text",
      placeholder: "Enter Product Code",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 11
      }
    }), __jsx("input", {
      type: "submit",
      value: "Search",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 11
      }
    })));
  }

  const formElementArray = [];

  for (let key in productForm) {
    formElementArray.push({
      id: key,
      config: productForm[key]
    });
  }

  return __jsx("div", {
    className: _productForm_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.FormsWrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _productForm_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Form,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 7
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 9
    }
  }, props.title), search, __jsx("form", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 9
    }
  }, formElementArray.map((formElement, index) => __jsx(_UI_Input_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: formElement.id,
    elementType: formElement.config.elementType,
    elementConfig: formElement.config.elementConfig,
    value: formElement.config.value,
    changed: event => inputChangeHandler(event, formElement.id),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 13
    }
  })), __jsx(_UI_Input_InputImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    change: onFileChangeHandler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 11
    }
  }), __jsx(_UI_ImageCards_ImageCards__WEBPACK_IMPORTED_MODULE_5__["default"], {
    image_urls: imageUrls,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 11
    }
  }), __jsx(_UI_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    clicked: addProductHandler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 11
    }
  }, "Add Product"))));
};

/* harmony default export */ __webpack_exports__["default"] = (productForm);

/***/ }),

/***/ "./components/Dashboard/Contents/ProductForm/productForm.module.css":
/*!**************************************************************************!*\
  !*** ./components/Dashboard/Contents/ProductForm/productForm.module.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"FormsWrapper": "productForm_FormsWrapper__2uMDE",
	"Form": "productForm_Form__3iQOh",
	"search": "productForm_search__1RVD6"
};


/***/ }),

/***/ "./components/Dashboard/Contents/Products/Product/Product.js":
/*!*******************************************************************!*\
  !*** ./components/Dashboard/Contents/Products/Product/Product.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Product_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product.module.css */ "./components/Dashboard/Contents/Products/Product/Product.module.css");
/* harmony import */ var _Product_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Product_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UI_Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../UI/Button/Button */ "./components/UI/Button/Button.js");
/* harmony import */ var _lib_requests__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../lib/requests */ "./lib/requests.js");
/* harmony import */ var _hooks_store_actions_product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../hooks/store/actions/product */ "./hooks/store/actions/product.js");
var _jsxFileName = "C:\\Users\\Kh3m\\Documents\\projects\\austinExpress\\dashboard\\components\\Dashboard\\Contents\\Products\\Product\\Product.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const product = ({
  product,
  showUpdateModal
}) => {
  const {
    sendDeleteRequest
  } = Object(_hooks_store_actions_product__WEBPACK_IMPORTED_MODULE_4__["default"])();

  const onDeleteProductHandler = productId => {
    console.log(productId);
    sendDeleteRequest(productId);
  };

  return __jsx("tr", {
    className: _Product_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Product,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: _lib_requests__WEBPACK_IMPORTED_MODULE_3__["BASE_URL"] + product.image_urls[Math.floor(Math.random() * product.image_urls.length)],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  })), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, product.product_name), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, "$", product.price), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, product.colors.join(", ")), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, product.sizes.join(", ")), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, product.category), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, product.brand), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, product.quantity), __jsx("td", {
    className: _Product_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Action,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx(_UI_Button_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    clicked: showUpdateModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, "Update"), __jsx("button", {
    className: _Product_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Delete,
    onClick: () => onDeleteProductHandler(product._id),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, "delete")));
};

/* harmony default export */ __webpack_exports__["default"] = (product);

/***/ }),

/***/ "./components/Dashboard/Contents/Products/Product/Product.module.css":
/*!***************************************************************************!*\
  !*** ./components/Dashboard/Contents/Products/Product/Product.module.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"Product": "Product_Product__2RAzS",
	"Action": "Product_Action__1UO5c",
	"Delete": "Product_Delete__3BSns"
};


/***/ }),

/***/ "./components/Dashboard/Contents/Products/Products.js":
/*!************************************************************!*\
  !*** ./components/Dashboard/Contents/Products/Products.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Products_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Products.module.css */ "./components/Dashboard/Contents/Products/Products.module.css");
/* harmony import */ var _Products_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Products_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UI_Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../UI/Button/Button */ "./components/UI/Button/Button.js");
/* harmony import */ var _Product_Product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Product/Product */ "./components/Dashboard/Contents/Products/Product/Product.js");
/* harmony import */ var _UI_Modal_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../UI/Modal/Modal */ "./components/UI/Modal/Modal.js");
/* harmony import */ var _ProductForm_ProductForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ProductForm/ProductForm */ "./components/Dashboard/Contents/ProductForm/ProductForm.js");
/* harmony import */ var _hooks_store_actions_product__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../hooks/store/actions/product */ "./hooks/store/actions/product.js");
/* harmony import */ var _hooks_store_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../hooks/store/store */ "./hooks/store/store.js");
var _jsxFileName = "C:\\Users\\Kh3m\\Documents\\projects\\austinExpress\\dashboard\\components\\Dashboard\\Contents\\Products\\Products.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const products = () => {
  const {
    0: showModal,
    1: setShowModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: modalContent,
    1: setModalContent
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: selectProduct,
    1: setSelectProduct
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const {
    product
  } = Object(_hooks_store_store__WEBPACK_IMPORTED_MODULE_7__["useStore"])()[0];
  const {
    sendFindRequest
  } = Object(_hooks_store_actions_product__WEBPACK_IMPORTED_MODULE_6__["default"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    sendFindRequest({
      limit: 5,
      sortBy: "createdAt"
    });
  }, []);

  const modalCloseHanlder = () => {
    setShowModal(!showModal);
  };

  const showAddProductModal = () => {
    setModalContent("add");
    setShowModal(true);
  };

  const showUpdateProductModal = prod => {
    setSelectProduct(_objectSpread({}, prod));
    setModalContent("update");
    setShowModal(true);
  };

  let modal = null;

  switch (modalContent) {
    case "add":
      modal = __jsx(_UI_Modal_Modal__WEBPACK_IMPORTED_MODULE_4__["default"], {
        show: showModal,
        modalClosed: modalCloseHanlder,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 9
        }
      }, __jsx(_ProductForm_ProductForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
        title: "Add Product",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }
      }));
      break;

    case "update":
      modal = __jsx(_UI_Modal_Modal__WEBPACK_IMPORTED_MODULE_4__["default"], {
        show: showModal,
        modalClosed: modalCloseHanlder,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 9
        }
      }, __jsx(_ProductForm_ProductForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
        title: "Update Product",
        selectProduct: selectProduct,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }
      }));
      break;

    default:
      null;
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }, modal, __jsx("div", {
    className: _Products_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Products,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _Products_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Top,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }, "Manage Products"), __jsx(_UI_Button_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    clicked: showAddProductModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, "Add Product")), __jsx("table", {
    className: _Products_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Table,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, __jsx("thead", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, __jsx("tr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, __jsx("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 15
    }
  }, "Image"), __jsx("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 15
    }
  }, "Name"), __jsx("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 15
    }
  }, "Price"), __jsx("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 15
    }
  }, "Colors"), __jsx("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 15
    }
  }, "Sizes"), __jsx("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 15
    }
  }, "Category"), __jsx("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 15
    }
  }, "Brand"), __jsx("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  }, "Quantity"), __jsx("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 15
    }
  }, "Action"))), __jsx("tbody", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }, product.data.map((product, index) => __jsx(_Product_Product__WEBPACK_IMPORTED_MODULE_3__["default"], {
    product: product,
    key: index,
    showUpdateModal: () => showUpdateProductModal(product),
    productId: index,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 15
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (products);

/***/ }),

/***/ "./components/Dashboard/Contents/Products/Products.module.css":
/*!********************************************************************!*\
  !*** ./components/Dashboard/Contents/Products/Products.module.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"Products": "Products_Products__1hsb8",
	"Top": "Products_Top__2iuyx",
	"Table": "Products_Table__30t8R"
};


/***/ }),

/***/ "./components/Dashboard/DashCards/Overviews/Overview/Overview.js":
/*!***********************************************************************!*\
  !*** ./components/Dashboard/DashCards/Overviews/Overview/Overview.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Overview_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Overview.module.css */ "./components/Dashboard/DashCards/Overviews/Overview/Overview.module.css");
/* harmony import */ var _Overview_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Overview_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Kh3m\\Documents\\projects\\austinExpress\\dashboard\\components\\Dashboard\\DashCards\\Overviews\\Overview\\Overview.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const overview = props => {
  return __jsx("div", {
    className: _Overview_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Overview,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, props.properties.title), __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, props.properties.value), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, props.properties.caption));
};

/* harmony default export */ __webpack_exports__["default"] = (overview);

/***/ }),

/***/ "./components/Dashboard/DashCards/Overviews/Overview/Overview.module.css":
/*!*******************************************************************************!*\
  !*** ./components/Dashboard/DashCards/Overviews/Overview/Overview.module.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"Overview": "Overview_Overview__2Mh2M"
};


/***/ }),

/***/ "./components/Dashboard/DashCards/Overviews/Overviews.js":
/*!***************************************************************!*\
  !*** ./components/Dashboard/DashCards/Overviews/Overviews.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Overviews_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Overviews.module.css */ "./components/Dashboard/DashCards/Overviews/Overviews.module.css");
/* harmony import */ var _Overviews_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Overviews_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Overview_Overview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Overview/Overview */ "./components/Dashboard/DashCards/Overviews/Overview/Overview.js");
var _jsxFileName = "C:\\Users\\Kh3m\\Documents\\projects\\austinExpress\\dashboard\\components\\Dashboard\\DashCards\\Overviews\\Overviews.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const overviews = props => {
  const overviews = [{
    title: "SALES",
    value: "$26,224",
    caption: "Total sales for this month"
  }, {
    title: "USERS",
    value: "600 Users",
    caption: "Total registered users"
  }, {
    title: "PRODUCTS",
    value: "1200 Products",
    caption: "Total products available"
  }];
  return __jsx("div", {
    className: _Overviews_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Overviews,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, overviews.map((overview, index) => __jsx(_Overview_Overview__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: index,
    properties: overview,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (overviews);

/***/ }),

/***/ "./components/Dashboard/DashCards/Overviews/Overviews.module.css":
/*!***********************************************************************!*\
  !*** ./components/Dashboard/DashCards/Overviews/Overviews.module.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"Overviews": "Overviews_Overviews__2I9qs"
};


/***/ }),

/***/ "./components/Dashboard/Dashboard.js":
/*!*******************************************!*\
  !*** ./components/Dashboard/Dashboard.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Dashboard_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.module.css */ "./components/Dashboard/Dashboard.module.css");
/* harmony import */ var _Dashboard_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ToolBar_ToolBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToolBar/ToolBar */ "./components/Dashboard/ToolBar/ToolBar.js");
/* harmony import */ var _SideBar_SideBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SideBar/SideBar */ "./components/Dashboard/SideBar/SideBar.js");
/* harmony import */ var _Contents_Contents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Contents/Contents */ "./components/Dashboard/Contents/Contents.js");
var _jsxFileName = "C:\\Users\\Kh3m\\Documents\\projects\\austinExpress\\dashboard\\components\\Dashboard\\Dashboard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const dashoard = () => {
  const {
    0: contentState,
    1: setContentState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);

  const changeContentHanlder = type => {
    setContentState(type);
  };

  return __jsx("div", {
    className: _Dashboard_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.dashboard,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx(_ToolBar_ToolBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }), __jsx(_SideBar_SideBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    clicked: changeContentHanlder,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }), __jsx(_Contents_Contents__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: contentState,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (dashoard);

/***/ }),

/***/ "./components/Dashboard/Dashboard.module.css":
/*!***************************************************!*\
  !*** ./components/Dashboard/Dashboard.module.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"dashboard": "Dashboard_dashboard__O6b6_"
};


/***/ }),

/***/ "./components/Dashboard/SideBar/SideBar.js":
/*!*************************************************!*\
  !*** ./components/Dashboard/SideBar/SideBar.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SideBar_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SideBar.module.css */ "./components/Dashboard/SideBar/SideBar.module.css");
/* harmony import */ var _SideBar_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_SideBar_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Logo */ "./components/Logo.js");
var _jsxFileName = "C:\\Users\\Kh3m\\Documents\\projects\\austinExpress\\dashboard\\components\\Dashboard\\SideBar\\SideBar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const links = [{
  title: "Dashboard",
  icon: "/images/home.png",
  type: "dashboard"
}, {
  title: "Product",
  icon: "/images/plus.png",
  type: "product"
}, {
  title: "Carousel",
  // icon: "/images/edit.png",
  type: "carousel"
}, {
  title: "Popular Categories",
  icon: "/images/edit.png",
  type: "popularCategories"
}, {
  title: "Footwear Favorites",
  icon: "/images/edit.png",
  type: "favorites"
}, {
  title: "Trending Brands",
  icon: "/images/edit.png",
  type: "trendingBrands"
}];

const sideBar = props => {
  return __jsx("div", {
    className: _SideBar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.sideBar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, __jsx("nav", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx("ul", {
    className: _SideBar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.sideNav,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, links.map((nav, index) => __jsx("li", {
    key: index,
    onClick: () => props.clicked(nav.type),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  }, nav.title))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/images/power.png",
    alt: "icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }), __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, "Logout")))));
};

/* harmony default export */ __webpack_exports__["default"] = (sideBar);

/***/ }),

/***/ "./components/Dashboard/SideBar/SideBar.module.css":
/*!*********************************************************!*\
  !*** ./components/Dashboard/SideBar/SideBar.module.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"sideBar": "SideBar_sideBar__2AVVx",
	"sideNav": "SideBar_sideNav__3AlpP",
	"sideActive": "SideBar_sideActive__nK0bY"
};


/***/ }),

/***/ "./components/Dashboard/ToolBar/ToolBar.js":
/*!*************************************************!*\
  !*** ./components/Dashboard/ToolBar/ToolBar.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ToolBar_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToolBar.module.css */ "./components/Dashboard/ToolBar/ToolBar.module.css");
/* harmony import */ var _ToolBar_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ToolBar_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Logo */ "./components/Logo.js");
/* harmony import */ var _Spacer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Spacer */ "./components/Spacer.js");
var _jsxFileName = "C:\\Users\\Kh3m\\Documents\\projects\\austinExpress\\dashboard\\components\\Dashboard\\ToolBar\\ToolBar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const toolBar = () => {
  return __jsx("header", {
    className: _ToolBar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.toolBar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _ToolBar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.logoWrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx(_Logo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    color: "white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  })), __jsx(_Spacer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }), __jsx("nav", {
    className: _ToolBar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Nav,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, "Goto Public Page")))));
};

/* harmony default export */ __webpack_exports__["default"] = (toolBar);

/***/ }),

/***/ "./components/Dashboard/ToolBar/ToolBar.module.css":
/*!*********************************************************!*\
  !*** ./components/Dashboard/ToolBar/ToolBar.module.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"toolBar": "ToolBar_toolBar__2Jjcr",
	"logoWrapper": "ToolBar_logoWrapper__2GNAQ",
	"Nav": "ToolBar_Nav__unDUd"
};


/***/ }),

/***/ "./components/Logo.js":
/*!****************************!*\
  !*** ./components/Logo.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Kh3m\\Documents\\projects\\austinExpress\\dashboard\\components\\Logo.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const logo = () => {
  return __jsx("div", {
    className: "jsx-1117299589" + " " + "logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: "jsx-1117299589",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "jsx-1117299589" + " " + "logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }, "austin", __jsx("span", {
    className: "jsx-1117299589" + " " + "red",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 19
    }
  }, "Exp"), "ress.com"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1117299589",
    __self: undefined
  }, ".logo.jsx-1117299589 h2.jsx-1117299589{color:#1b222b;font-family:\"Open sans\",san-serif;font-weight:700;color:white;}.red.jsx-1117299589{color:#0654b3;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcS2gzbVxcRG9jdW1lbnRzXFxwcm9qZWN0c1xcYXVzdGluRXhwcmVzc1xcZGFzaGJvYXJkXFxjb21wb25lbnRzXFxMb2dvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNrQixBQUd5QixBQU1BLGNBTHFCLEFBTXJDLGtDQUxrQixnQkFDSixZQUNkIiwiZmlsZSI6IkM6XFxVc2Vyc1xcS2gzbVxcRG9jdW1lbnRzXFxwcm9qZWN0c1xcYXVzdGluRXhwcmVzc1xcZGFzaGJvYXJkXFxjb21wb25lbnRzXFxMb2dvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5jb25zdCBsb2dvID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cclxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICA8YT5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJsb2dvXCI+XHJcbiAgICAgICAgICAgIGF1c3RpbjxzcGFuIGNsYXNzTmFtZT1cInJlZFwiPkV4cDwvc3Bhbj5yZXNzLmNvbVxyXG4gICAgICAgICAgPC9oMj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAubG9nbyBoMiB7XHJcbiAgICAgICAgICBjb2xvcjogIzFiMjIyYjtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gc2Fuc1wiLCBzYW4tc2VyaWY7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmVkIHtcclxuICAgICAgICAgIGNvbG9yOiAjMDY1NGIzO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvZ287XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Kh3m\\\\Documents\\\\projects\\\\austinExpress\\\\dashboard\\\\components\\\\Logo.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (logo);

/***/ }),

/***/ "./components/Spacer.js":
/*!******************************!*\
  !*** ./components/Spacer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Kh3m\\Documents\\projects\\austinExpress\\dashboard\\components\\Spacer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const spacer = () => {
  return __jsx("div", {
    className: "jsx-4026738121" + " " + "spacer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4026738121",
    __self: undefined
  }, ".spacer.jsx-4026738121{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcS2gzbVxcRG9jdW1lbnRzXFxwcm9qZWN0c1xcYXVzdGluRXhwcmVzc1xcZGFzaGJvYXJkXFxjb21wb25lbnRzXFxTcGFjZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS2tCLEFBR3VCLHVFQUNkIiwiZmlsZSI6IkM6XFxVc2Vyc1xcS2gzbVxcRG9jdW1lbnRzXFxwcm9qZWN0c1xcYXVzdGluRXhwcmVzc1xcZGFzaGJvYXJkXFxjb21wb25lbnRzXFxTcGFjZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBzcGFjZXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2VyXCI+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuc3BhY2VyIHtcclxuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzcGFjZXI7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Kh3m\\\\Documents\\\\projects\\\\austinExpress\\\\dashboard\\\\components\\\\Spacer.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (spacer);

/***/ }),

/***/ "./components/UI/Backdrop.js":
/*!***********************************!*\
  !*** ./components/UI/Backdrop.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Kh3m\\Documents\\projects\\austinExpress\\dashboard\\components\\UI\\Backdrop.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const backdrop = props => {
  return __jsx("div", {
    onClick: props.clicked,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4021926315", [props.show ? "block" : "none"]]]) + " " + "Backdrop",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4021926315",
    dynamic: [props.show ? "block" : "none"],
    __self: undefined
  }, `.Backdrop.__jsx-style-dynamic-selector{position:fixed;width:100%;height:100%;background-color:rgba(0,0,0,0.13);z-index:90;top:0px;right:0px;display:${props.show ? "block" : "none"};}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcS2gzbVxcRG9jdW1lbnRzXFxwcm9qZWN0c1xcYXVzdGluRXhwcmVzc1xcZGFzaGJvYXJkXFxjb21wb25lbnRzXFxVSVxcQmFja2Ryb3AuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS2tCLEFBRzBCLGVBQ0osV0FDQyxZQUN5QixrQ0FDMUIsV0FDSCxRQUNFLFVBQzJCLHFDQUN2QyIsImZpbGUiOiJDOlxcVXNlcnNcXEtoM21cXERvY3VtZW50c1xccHJvamVjdHNcXGF1c3RpbkV4cHJlc3NcXGRhc2hib2FyZFxcY29tcG9uZW50c1xcVUlcXEJhY2tkcm9wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgYmFja2Ryb3AgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJCYWNrZHJvcFwiIG9uQ2xpY2s9e3Byb3BzLmNsaWNrZWR9PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLkJhY2tkcm9wIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEzKTtcclxuICAgICAgICAgIHotaW5kZXg6IDkwO1xyXG4gICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogJHtwcm9wcy5zaG93ID8gXCJibG9ja1wiIDogXCJub25lXCJ9O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJhY2tkcm9wO1xyXG4iXX0= */
/*@ sourceURL=C:\\Users\\Kh3m\\Documents\\projects\\austinExpress\\dashboard\\components\\UI\\Backdrop.js */`));
};

/* harmony default export */ __webpack_exports__["default"] = (backdrop);

/***/ }),

/***/ "./components/UI/Button/Button.js":
/*!****************************************!*\
  !*** ./components/UI/Button/Button.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.module.css */ "./components/UI/Button/Button.module.css");
/* harmony import */ var _Button_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Button_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Kh3m\\Documents\\projects\\austinExpress\\dashboard\\components\\UI\\Button\\Button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const button = props => {
  return __jsx("button", {
    onClick: props.clicked,
    className: _Button_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Button,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (button);

/***/ }),

/***/ "./components/UI/Button/Button.module.css":
/*!************************************************!*\
  !*** ./components/UI/Button/Button.module.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"Button": "Button_Button__t99YB"
};


/***/ }),

/***/ "./components/UI/ImageCards/ImageCards.js":
/*!************************************************!*\
  !*** ./components/UI/ImageCards/ImageCards.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ImageCards_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageCards.module.css */ "./components/UI/ImageCards/ImageCards.module.css");
/* harmony import */ var _ImageCards_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ImageCards_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_requests__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/requests */ "./lib/requests.js");
var _jsxFileName = "C:\\Users\\Kh3m\\Documents\\projects\\austinExpress\\dashboard\\components\\UI\\ImageCards\\ImageCards.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const imageCards = ({
  image_urls
}) => {
  return __jsx("section", {
    className: _ImageCards_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.ProductImageContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, image_urls.map(image_url => {
    return __jsx("div", {
      key: image_url,
      className: _ImageCards_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.ProductImage,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 28
      }
    }, __jsx("img", {
      src: _lib_requests__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + image_url,
      alt: "product",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 25
      }
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (imageCards);

/***/ }),

/***/ "./components/UI/ImageCards/ImageCards.module.css":
/*!********************************************************!*\
  !*** ./components/UI/ImageCards/ImageCards.module.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"ProductImage": "ImageCards_ProductImage__3MsI6",
	"ProductImageContainer": "ImageCards_ProductImageContainer__3rQAU"
};


/***/ }),

/***/ "./components/UI/Input/Input.js":
/*!**************************************!*\
  !*** ./components/UI/Input/Input.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Input_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Input.module.css */ "./components/UI/Input/Input.module.css");
/* harmony import */ var _Input_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Input_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Kh3m\\Documents\\projects\\austinExpress\\dashboard\\components\\UI\\Input\\Input.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const input = props => {
  let inputElement = null;

  switch (props.elementType) {
    case "input":
      inputElement = __jsx("input", _extends({
        className: _Input_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.InputElement
      }, props.elementConfig, {
        value: props.value,
        onChange: props.changed,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 9
        }
      }));
      break;

    case "textarea":
      inputElement = __jsx("textarea", _extends({
        className: _Input_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.InputElement
      }, props.elementConfig, {
        value: props.value,
        onChange: props.changed,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 9
        }
      }));
      break;

    case "select":
      inputElement = __jsx("select", _extends({
        className: _Input_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.InputElement
      }, props.elementConfig, {
        value: props.value,
        onChange: props.changed,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 9
        }
      }), props.elementConfig.options.map((option, index) => __jsx("option", {
        key: index,
        value: option.value,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 13
        }
      }, option.displayValue)));
      break;

    default:
      inputElement = __jsx("input", _extends({
        className: _Input_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.InputElement
      }, props.elementConfig, {
        value: props.value,
        onChange: props.changed,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 9
        }
      }));
  }

  return __jsx("div", {
    className: _Input_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Input,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  }, __jsx("label", {
    className: _Input_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, props.label), inputElement);
};

/* harmony default export */ __webpack_exports__["default"] = (input);

/***/ }),

/***/ "./components/UI/Input/Input.module.css":
/*!**********************************************!*\
  !*** ./components/UI/Input/Input.module.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"Input": "Input_Input__iZrgP",
	"Label": "Input_Label__2UeeU",
	"InputElement": "Input_InputElement__N9jiN"
};


/***/ }),

/***/ "./components/UI/Input/InputImage.js":
/*!*******************************************!*\
  !*** ./components/UI/Input/InputImage.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Input */ "./components/UI/Input/Input.js");
var _jsxFileName = "C:\\Users\\Kh3m\\Documents\\projects\\austinExpress\\dashboard\\components\\UI\\Input\\InputImage.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const inputImage = ({
  change
}) => __jsx("input", {
  type: "file",
  onChange: change,
  multiple: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 38
  }
});

/* harmony default export */ __webpack_exports__["default"] = (inputImage);

/***/ }),

/***/ "./components/UI/Modal/Modal.js":
/*!**************************************!*\
  !*** ./components/UI/Modal/Modal.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Modal_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal.module.css */ "./components/UI/Modal/Modal.module.css");
/* harmony import */ var _Modal_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Modal_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Backdrop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Backdrop */ "./components/UI/Backdrop.js");
var _jsxFileName = "C:\\Users\\Kh3m\\Documents\\projects\\austinExpress\\dashboard\\components\\UI\\Modal\\Modal.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const modal = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx(_Backdrop__WEBPACK_IMPORTED_MODULE_2__["default"], {
    show: props.show,
    clicked: props.modalClosed,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Modal,
    style: {
      transform: props.show ? "translateY(0)" : "translateY(-100vh)",
      opacity: props.show ? "1" : "0"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (modal);

/***/ }),

/***/ "./components/UI/Modal/Modal.module.css":
/*!**********************************************!*\
  !*** ./components/UI/Modal/Modal.module.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"Modal": "Modal_Modal__3PyMv"
};


/***/ }),

/***/ "./hooks/store/actions/actionTypes.js":
/*!********************************************!*\
  !*** ./hooks/store/actions/actionTypes.js ***!
  \********************************************/
/*! exports provided: PRODUCT_START, PRODUCT_RESPONSE, PRODUCT_ERROR, PRODUCT_DELETE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCT_START", function() { return PRODUCT_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCT_RESPONSE", function() { return PRODUCT_RESPONSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCT_ERROR", function() { return PRODUCT_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCT_DELETE", function() { return PRODUCT_DELETE; });
// Product related actions
const PRODUCT_START = "PRODUCT_START";
const PRODUCT_RESPONSE = "PRODUCT_RESPONSE";
const PRODUCT_ERROR = "PRODUCT_ERROR";
const PRODUCT_DELETE = "PRODUCT_DELETE";

/***/ }),

/***/ "./hooks/store/actions/product.js":
/*!****************************************!*\
  !*** ./hooks/store/actions/product.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ "./hooks/store/actions/actionTypes.js");
/* harmony import */ var _lib_requests__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/requests */ "./lib/requests.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ "./hooks/store/store.js");
/* harmony import */ var _lib_queries_products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/queries/products */ "./lib/queries/products.js");





const useProductActions = () => {
  const dispatch = Object(_store__WEBPACK_IMPORTED_MODULE_2__["useStore"])()[1]; // auth start activate spinner

  const productStart = () => {
    dispatch(_actionTypes__WEBPACK_IMPORTED_MODULE_0__["PRODUCT_START"]);
  }; // product error - triggers when there is error with product request


  const productError = errors => {
    dispatch(_actionTypes__WEBPACK_IMPORTED_MODULE_0__["PRODUCT_ERROR"], errors);
  }; // product response helper


  const productResponse = data => {
    dispatch(_actionTypes__WEBPACK_IMPORTED_MODULE_0__["PRODUCT_RESPONSE"], data);
  }; // delete a single product from state


  const deleteProduct = productId => {
    dispatch(_actionTypes__WEBPACK_IMPORTED_MODULE_0__["PRODUCT_DELETE"], productId);
  }; // auth response - get the user's data


  const sendSaveRequest = async (product_name, description, price, image_urls, quantity, category, colors, sizes, brand) => {
    // start loading
    productStart();

    try {
      const res = await Object(_lib_requests__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_lib_queries_products__WEBPACK_IMPORTED_MODULE_3__["addProductQuery"])(product_name, description, price, image_urls, quantity, category, colors, sizes, brand));

      if (res.errors) {
        console.log("errors", res);
      }

      if (res.data) {
        console.log("products", res);
        productResponse(res.data.createProduct);
      }
    } catch (err) {
      console.log("Something went wrong", err);
      productError(err);
    }
  }; // auth response - get the user's data


  const sendUpdateRequest = async (productId, {
    product_name,
    description,
    price,
    image_urls,
    quantity,
    category,
    colors,
    sizes,
    brand
  }) => {
    // start loading
    productStart();

    try {
      const res = await Object(_lib_requests__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_lib_queries_products__WEBPACK_IMPORTED_MODULE_3__["updateProductQuery"])(productId, {
        product_name,
        description,
        price,
        image_urls,
        quantity,
        category,
        colors,
        sizes,
        brand
      }));

      if (res.errors) {
        console.log("errors", res);
      }

      if (res.data) {
        console.log("updateProduct", res);
        productResponse(res.data.update);
      }
    } catch (err) {
      console.log("Something went wrong", err);
      productError(err);
    }
  };

  const sendFindRequest = async query => {
    // start loading
    productStart();

    try {
      const res = await Object(_lib_requests__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_lib_queries_products__WEBPACK_IMPORTED_MODULE_3__["findProductQuery"])(query));

      if (res.errors) {
        console.log("errors", res);
      }

      if (res.data) {
        console.log("products", res);
      }

      productResponse(res.data.products);
    } catch (err) {
      console.log("Something went wrong", err);
      productError(err);
    }
  };

  const sendDeleteRequest = async productId => {
    // start loading
    productStart();

    try {
      const res = await Object(_lib_requests__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_lib_queries_products__WEBPACK_IMPORTED_MODULE_3__["deleteProductQuery"])(productId));

      if (res.errors) {
        console.log("errors", res);
      }

      if (res.data) {
        console.log("products", res); // dispatch PRODUCT_DELETE action to reducer

        deleteProduct(res.data.delete._id);
      }
    } catch (err) {
      console.log("Something went wrong", err);
      productError(err);
    }
  };

  return {
    productStart,
    sendFindRequest,
    sendSaveRequest,
    sendUpdateRequest,
    sendDeleteRequest
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useProductActions);

/***/ }),

/***/ "./hooks/store/store.js":
/*!******************************!*\
  !*** ./hooks/store/store.js ***!
  \******************************/
/*! exports provided: useStore, initStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStore", function() { return useStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initStore", function() { return initStore; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


let globalState = {};
let listeners = [];
let actions = {};
const useStore = (shouldListen = true) => {
  const setState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(globalState)[1];

  const dispatch = (actionIdentifier, payload) => {
    // Check if action[actionIdentifier] is not undefined
    if (actions[actionIdentifier]) {
      const newState = actions[actionIdentifier](globalState, payload);
      globalState = _objectSpread(_objectSpread({}, globalState), newState);

      for (const listener of listeners) {
        listener(globalState);
      }
    } else {
      console.log("AGAIN");
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (shouldListen) {
      listeners.push(setState);
    }

    return () => {
      if (shouldListen) {
        listeners = listeners.filter(li => li !== setState);
      }
    };
  }, [setState, shouldListen]);
  return [globalState, dispatch];
};
const initStore = (initialState, userActions) => {
  if (initialState) {
    globalState = _objectSpread(_objectSpread({}, globalState), initialState);
  }

  actions = _objectSpread(_objectSpread({}, actions), userActions);
};

/***/ }),

/***/ "./lib/queries/products.js":
/*!*********************************!*\
  !*** ./lib/queries/products.js ***!
  \*********************************/
/*! exports provided: addProductQuery, updateProductQuery, findProductQuery, deleteProductQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProductQuery", function() { return addProductQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateProductQuery", function() { return updateProductQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findProductQuery", function() { return findProductQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteProductQuery", function() { return deleteProductQuery; });
const addProductQuery = (product_name, description, price, image_urls, quantity, category, colors, sizes, brand) => {
  return {
    query: `
            mutation CreateProduct(
                $product_name: String!,
                $description: String!,
                $price: Float!,
                $image_urls: [String!]!,
                $quantity: Int!,
                $category: String!,
                $colors: [String!],
                $sizes: [Float!],
                $brand: String
            ) {
                createProduct(data: {
                    product_name: $product_name,
                    description: $description,
                    price: $price,
                    image_urls: $image_urls,
                    quantity: $quantity,
                    category: $category,
                    colors: $colors,
                    sizes: $sizes,
                    brand: $brand
                }) {
                    _id
                    product_name
                    description
                    price
                    sizes
                    colors
                    image_urls
                    quantity
                    brand
                    category
                    in_stock
                }
            }
        `,
    variables: {
      product_name,
      description,
      price,
      image_urls,
      quantity,
      category,
      colors,
      sizes,
      brand
    }
  };
};
const updateProductQuery = (_id, {
  product_name,
  description,
  price,
  image_urls,
  quantity,
  category,
  colors,
  sizes,
  brand
}) => {
  return {
    query: `
            mutation Update(
                $_id: ID!,
                $product_name: String!,
                $description: String!,
                $price: Float!,
                $image_urls: [String!]!,
                $quantity: Int!,
                $category: String!,
                $colors: [String!],
                $sizes: [Float!],
                $brand: String
            ) {
                update(_id: $_id,
                    data: {
                        product_name: $product_name,
                        description: $description,
                        price: $price,
                        image_urls: $image_urls,
                        quantity: $quantity,
                        category: $category,
                        colors: $colors,
                        sizes: $sizes,
                        brand: $brand
                    }) {
                        _id
                        product_name
                        description
                        price
                        sizes
                        colors
                        image_urls
                        quantity
                        brand
                        category
                        in_stock
                }
            }
        `,
    variables: {
      _id,
      product_name,
      description,
      price,
      image_urls,
      quantity,
      category,
      colors,
      sizes,
      brand
    }
  };
};
const findProductQuery = ({
  limit,
  sortBy
}) => {
  return {
    query: `
            query Products($limit: Int, $sortBy: String) {
                products(query: {limit: $limit, sortBy: $sortBy}) {
                    _id
                    product_name
                    description
                    price
                    sizes
                    colors
                    image_urls
                    quantity
                    brand
                    category
                    in_stock              
                }
            }
        `,
    variables: {
      limit,
      sortBy
    }
  };
};
const deleteProductQuery = _id => {
  return {
    query: `
            mutation Delete($_id: ID!) {
                delete(_id: $_id) {
                    _id
                }
            }
        `,
    variables: {
      _id
    }
  };
};

/***/ }),

/***/ "./lib/requests.js":
/*!*************************!*\
  !*** ./lib/requests.js ***!
  \*************************/
/*! exports provided: BASE_URL, GRAPHQLURL, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_URL", function() { return BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GRAPHQLURL", function() { return GRAPHQLURL; });
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-fetch */ "node-fetch");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_0__);

const BASE_URL = "http://localhost:2020";
const GRAPHQLURL = `${BASE_URL}/graphql`;

const request = async graphqlQuery => {
  const response = await node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(GRAPHQLURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(graphqlQuery)
  });
  return response.json();
};

/* harmony default export */ __webpack_exports__["default"] = (request);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    const {
      pathname
    } = window.location;
    const {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    const resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      const isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn(`Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>`);
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.default = void 0;

var _url2 = __webpack_require__(/*! url */ "url");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch((0, _utils.formatWithValidation)({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as2, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname,
          query
        }), (0, _utils.getURL)());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && (0, _url2.parse)(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/vercel/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute((0, _url2.parse)(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = (0, _url2.parse)(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as2;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (_utils.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? (0, _utils.formatWithValidation)(_url) : _url;
      let as = typeof _as === 'object' ? (0, _utils.formatWithValidation)(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = (0, _url2.parse)(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if ((0, _isDynamic.isDynamicRoute)(route)) {
        const {
          pathname: asPathname
        } = (0, _url2.parse)(as);
        const routeRegex = (0, _routeRegex.getRouteRegex)(route);
        const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo).then(() => {
          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        });
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = (0, _url2.parse)(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isOptional = /^\\\[.*\\\]$/.test($1);

    if (isOptional) {
      $1 = $1.slice(2, -2);
    }

    const isCatchAll = /^(\\\.){3}/.test($1);

    if (isCatchAll) {
      $1 = $1.slice(6);
    }

    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? isOptional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups,
    namedRegex: namedParameterizedRoute ? `^${namedParameterizedRoute}(?:/)?$` : undefined
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _url = __webpack_require__(/*! url */ "url");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _url.format)(url, options);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Dashboard/Dashboard */ "./components/Dashboard/Dashboard.js");
var _jsxFileName = "C:\\Users\\Kh3m\\Documents\\projects\\austinExpress\\dashboard\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const indexPage = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(_components_Dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (indexPage);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Kh3m\Documents\projects\austinExpress\dashboard\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rhc2hib2FyZC9Db250ZW50cy9DYXJvdXNlbEZvcm0vQ2Fyb3VzZWxGb3JtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGFzaGJvYXJkL0NvbnRlbnRzL0Nhcm91c2VsRm9ybS9DYXJvdXNlbEZvcm0ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rhc2hib2FyZC9Db250ZW50cy9Db250ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rhc2hib2FyZC9Db250ZW50cy9Db250ZW50cy5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGFzaGJvYXJkL0NvbnRlbnRzL0Rhc2hib2FyZFN1bW1hcnkvRGFzaGJvYXJkU3VtbWFyeS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rhc2hib2FyZC9Db250ZW50cy9EYXNoYm9hcmRTdW1tYXJ5L0Rhc2hib2FyZFN1bW1hcnkubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rhc2hib2FyZC9Db250ZW50cy9Qcm9kdWN0Rm9ybS9Qcm9kdWN0Rm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rhc2hib2FyZC9Db250ZW50cy9Qcm9kdWN0Rm9ybS9wcm9kdWN0Rm9ybS5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGFzaGJvYXJkL0NvbnRlbnRzL1Byb2R1Y3RzL1Byb2R1Y3QvUHJvZHVjdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rhc2hib2FyZC9Db250ZW50cy9Qcm9kdWN0cy9Qcm9kdWN0L1Byb2R1Y3QubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rhc2hib2FyZC9Db250ZW50cy9Qcm9kdWN0cy9Qcm9kdWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rhc2hib2FyZC9Db250ZW50cy9Qcm9kdWN0cy9Qcm9kdWN0cy5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGFzaGJvYXJkL0Rhc2hDYXJkcy9PdmVydmlld3MvT3ZlcnZpZXcvT3ZlcnZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EYXNoYm9hcmQvRGFzaENhcmRzL092ZXJ2aWV3cy9PdmVydmlldy9PdmVydmlldy5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGFzaGJvYXJkL0Rhc2hDYXJkcy9PdmVydmlld3MvT3ZlcnZpZXdzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGFzaGJvYXJkL0Rhc2hDYXJkcy9PdmVydmlld3MvT3ZlcnZpZXdzLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EYXNoYm9hcmQvRGFzaGJvYXJkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGFzaGJvYXJkL0Rhc2hib2FyZC5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGFzaGJvYXJkL1NpZGVCYXIvU2lkZUJhci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rhc2hib2FyZC9TaWRlQmFyL1NpZGVCYXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rhc2hib2FyZC9Ub29sQmFyL1Rvb2xCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EYXNoYm9hcmQvVG9vbEJhci9Ub29sQmFyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dvLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU3BhY2VyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvQmFja2Ryb3AuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9CdXR0b24vQnV0dG9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvQnV0dG9uL0J1dHRvbi5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvSW1hZ2VDYXJkcy9JbWFnZUNhcmRzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvSW1hZ2VDYXJkcy9JbWFnZUNhcmRzLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9JbnB1dC9JbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL0lucHV0L0lucHV0Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9JbnB1dC9JbnB1dEltYWdlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvTW9kYWwvTW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9Nb2RhbC9Nb2RhbC5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2hvb2tzL3N0b3JlL2FjdGlvbnMvYWN0aW9uVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vaG9va3Mvc3RvcmUvYWN0aW9ucy9wcm9kdWN0LmpzIiwid2VicGFjazovLy8uL2hvb2tzL3N0b3JlL3N0b3JlLmpzIiwid2VicGFjazovLy8uL2xpYi9xdWVyaWVzL3Byb2R1Y3RzLmpzIiwid2VicGFjazovLy8uL2xpYi9yZXF1ZXN0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZS1mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzLWV4YWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1qc3gvc3R5bGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiJdLCJuYW1lcyI6WyJjYXJvdXNlbHMiLCJpbWFnZSIsInRpdGxlIiwiQ2Fyb3VzZWxGb3JtIiwiQ29tcG9uZW50IiwiZWxlbWVudFR5cGUiLCJlbGVtZW50Q29uZmlnIiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJyZW5kZXIiLCJjbGFzc2VzIiwiRm9ybXNXcmFwcGVyIiwiY29udGVudHMiLCJwcm9wcyIsImNvbnRlbnQiLCJDb250ZW50cyIsIlNpZGVCYXJSZXBsYWNlIiwiTWFpbkNvbnRlbnRzIiwiZGFzaGJvYXJkU3VtbWFyeSIsInByb2R1Y3RGb3JtIiwic2V0UHJvZHVjdEZvcm0iLCJ1c2VTdGF0ZSIsIm5hbWUiLCJwcmljZSIsInF1YW50aXR5Iiwic2l6ZXMiLCJjb2xvcnMiLCJjYXRlZ29yeSIsIm9wdGlvbnMiLCJkaXNwbGF5VmFsdWUiLCJicmFuZCIsImRlc2NyaXB0aW9uIiwiaW1hZ2VVcmxzIiwic2V0SW1hZ2VVcmxzIiwic2VuZFNhdmVSZXF1ZXN0Iiwic2VuZFVwZGF0ZVJlcXVlc3QiLCJ1c2VQcm9kdWN0QWN0aW9ucyIsInByb2R1Y3QiLCJ1c2VTdG9yZSIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJzZWxlY3RQcm9kdWN0IiwidXBkYXRlZFByb2R1Y3RGb3JtIiwicHJvZHVjdF9uYW1lIiwiam9pbiIsInZhbHVlcyIsImlucHV0Q2hhbmdlSGFuZGxlciIsImV2ZW50IiwiaW5wdXRJZGVudGlmaWVyIiwidXBkYXRlZEZvcm1FbGVtZW50IiwidGFyZ2V0Iiwib25GaWxlQ2hhbmdlSGFuZGxlciIsImZpbGVzIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImZpbGUiLCJhcHBlbmQiLCJmZXRjaCIsIkJBU0VfVVJMIiwibWV0aG9kIiwiYm9keSIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImNhdGNoIiwiZXJyIiwiYWRkUHJvZHVjdEhhbmRsZXIiLCJwcmV2ZW50RGVmYXVsdCIsImlucHV0RWxlbWVudElkZW50aWZpZXIiLCJwcm9kdWN0RGF0YSIsInNwbGl0IiwibWFwIiwidiIsIk51bWJlciIsInBhcnNlRmxvYXQiLCJfaWQiLCJpbWFnZV91cmxzIiwicGFyc2VJbnQiLCJzZWFyY2giLCJ1cGRhdGUiLCJmb3JtRWxlbWVudEFycmF5Iiwia2V5IiwicHVzaCIsImlkIiwiY29uZmlnIiwiRm9ybSIsImZvcm1FbGVtZW50IiwiaW5kZXgiLCJzaG93VXBkYXRlTW9kYWwiLCJzZW5kRGVsZXRlUmVxdWVzdCIsIm9uRGVsZXRlUHJvZHVjdEhhbmRsZXIiLCJwcm9kdWN0SWQiLCJQcm9kdWN0IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiQWN0aW9uIiwiRGVsZXRlIiwicHJvZHVjdHMiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJtb2RhbENvbnRlbnQiLCJzZXRNb2RhbENvbnRlbnQiLCJzZXRTZWxlY3RQcm9kdWN0Iiwic2VuZEZpbmRSZXF1ZXN0IiwibGltaXQiLCJzb3J0QnkiLCJtb2RhbENsb3NlSGFubGRlciIsInNob3dBZGRQcm9kdWN0TW9kYWwiLCJzaG93VXBkYXRlUHJvZHVjdE1vZGFsIiwicHJvZCIsIm1vZGFsIiwiUHJvZHVjdHMiLCJUb3AiLCJUYWJsZSIsIm92ZXJ2aWV3IiwiT3ZlcnZpZXciLCJwcm9wZXJ0aWVzIiwiY2FwdGlvbiIsIm92ZXJ2aWV3cyIsIk92ZXJ2aWV3cyIsImRhc2hvYXJkIiwiY29udGVudFN0YXRlIiwic2V0Q29udGVudFN0YXRlIiwiY2hhbmdlQ29udGVudEhhbmxkZXIiLCJkYXNoYm9hcmQiLCJsaW5rcyIsImljb24iLCJzaWRlQmFyIiwic2lkZU5hdiIsIm5hdiIsImNsaWNrZWQiLCJ0b29sQmFyIiwibG9nb1dyYXBwZXIiLCJOYXYiLCJsb2dvIiwic3BhY2VyIiwiYmFja2Ryb3AiLCJzaG93IiwiYnV0dG9uIiwiQnV0dG9uIiwiY2hpbGRyZW4iLCJpbWFnZUNhcmRzIiwiUHJvZHVjdEltYWdlQ29udGFpbmVyIiwiaW1hZ2VfdXJsIiwiUHJvZHVjdEltYWdlIiwiaW5wdXQiLCJpbnB1dEVsZW1lbnQiLCJJbnB1dEVsZW1lbnQiLCJjaGFuZ2VkIiwib3B0aW9uIiwiSW5wdXQiLCJMYWJlbCIsImxhYmVsIiwiaW5wdXRJbWFnZSIsImNoYW5nZSIsIm1vZGFsQ2xvc2VkIiwiTW9kYWwiLCJ0cmFuc2Zvcm0iLCJvcGFjaXR5IiwiUFJPRFVDVF9TVEFSVCIsIlBST0RVQ1RfUkVTUE9OU0UiLCJQUk9EVUNUX0VSUk9SIiwiUFJPRFVDVF9ERUxFVEUiLCJkaXNwYXRjaCIsInByb2R1Y3RTdGFydCIsImFjdGlvblR5cGVzIiwicHJvZHVjdEVycm9yIiwiZXJyb3JzIiwicHJvZHVjdFJlc3BvbnNlIiwiZGVsZXRlUHJvZHVjdCIsInJlcXVlc3QiLCJhZGRQcm9kdWN0UXVlcnkiLCJjcmVhdGVQcm9kdWN0IiwidXBkYXRlUHJvZHVjdFF1ZXJ5IiwicXVlcnkiLCJmaW5kUHJvZHVjdFF1ZXJ5IiwiZGVsZXRlUHJvZHVjdFF1ZXJ5IiwiZGVsZXRlIiwiZ2xvYmFsU3RhdGUiLCJsaXN0ZW5lcnMiLCJhY3Rpb25zIiwic2hvdWxkTGlzdGVuIiwic2V0U3RhdGUiLCJhY3Rpb25JZGVudGlmaWVyIiwicGF5bG9hZCIsIm5ld1N0YXRlIiwibGlzdGVuZXIiLCJmaWx0ZXIiLCJsaSIsImluaXRTdG9yZSIsImluaXRpYWxTdGF0ZSIsInVzZXJBY3Rpb25zIiwidmFyaWFibGVzIiwiR1JBUEhRTFVSTCIsImdyYXBocWxRdWVyeSIsInJlc3BvbnNlIiwiaGVhZGVycyIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1cmwiLCJvcmlnaW4iLCJsYXN0SHJlZiIsImxhc3RBcyIsImxhc3RSZXN1bHQiLCJocmVmIiwiYXMiLCJyZXN1bHQiLCJmb3JtYXRGdW5jIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJwcmVmZXRjaGVkIiwib2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJjYiIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJnZXRPYnNlcnZlciIsImNvbnN0cnVjdG9yIiwicCIsIm1lbW9pemVkRm9ybWF0VXJsIiwiZm9ybWF0VXJsIiwiYXNIcmVmIiwiZSIsIm5vZGVOYW1lIiwiaXNMb2NhbCIsInNjcm9sbCIsIlJvdXRlciIsInNoYWxsb3ciLCJzdWNjZXNzIiwiZG9jdW1lbnQiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImdldFBhdGhzIiwicmVzb2x2ZWRIcmVmIiwicGFyc2VkQXMiLCJoYW5kbGVSZWYiLCJyZWYiLCJpc1ByZWZldGNoZWQiLCJwcmVmZXRjaCIsInBhdGhzIiwiY2hpbGQiLCJDaGlsZHJlbiIsImVsIiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJvbkNsaWNrIiwicHJvY2VzcyIsIlJlYWN0Iiwid2FybiIsIlByb3BUeXBlcyIsInJlcXVpcmUiLCJleGFjdCIsIkxpbmsiLCJyZXBsYWNlIiwicGFzc0hyZWYiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiT2JqZWN0IiwiZ2V0IiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwicGF0aCIsInByZXBhcmVSb3V0ZSIsInRvUm91dGUiLCJhdHRlbXB0cyIsImlzU2VydmVyUmVuZGVyIiwicGF0aG5hbWUiLCJhZGRCYXNlUGF0aCIsIl9fTkVYVF9EQVRBX18iLCJidWlsZElkIiwiZGVsQmFzZVBhdGgiLCJjcmVkZW50aWFscyIsImdldFJlc3BvbnNlIiwicm91dGUiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIlByb21pc2UiLCJmZXRjaE5leHREYXRhIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJtb2QiLCJuZXdEYXRhIiwicmVsb2FkIiwiYmFjayIsIlNUIiwicGVyZm9ybWFuY2UiLCJyZXNvbHZlIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJtaXNzaW5nUGFyYW1zIiwicGFyYW0iLCJyZWplY3QiLCJhc1BhdGhuYW1lIiwicm91dGVJbmZvIiwiZXJyb3IiLCJhcHBDb21wIiwiY2hhbmdlU3RhdGUiLCJnZXRSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJoYW5kbGVFcnJvciIsInBhZ2UiLCJnaXBFcnIiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsImNhbmNlbGxlZCIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiZm4iLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5IiwiVEVTVF9ST1VURSIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicGFyYW1zIiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsImVzY2FwZWRSb3V0ZSIsImVzY2FwZVJlZ2V4Iiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsImlzT3B0aW9uYWwiLCIkMSIsImlzQ2F0Y2hBbGwiLCJwb3MiLCJyZXBlYXQiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicHJvdG9jb2wiLCJob3N0bmFtZSIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldElu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LFFBQWdCLGVBQXBCLFVBQTZDO0FBQzNDK0QsWUFBTSxDQUFOQSxrQkFBMEJ2TCxHQUFELElBQVM7QUFDaEMsWUFBSW9ULGFBQWEsQ0FBYkEsaUJBQStCLENBQW5DLEdBQXVDO0FBQ3JDL1YsaUJBQU8sQ0FBUEEsS0FDRyxxREFBb0QyQyxHQUR2RDNDO0FBSUg7QUFORGtPO0FBUUg7QUFFRDs7QUFBQSxTQUFPLHNCQUFQLE9BQU8sQ0FBUDtBQUdLOztBQUFBLE1BQU04SCxFQUFFLEdBQUcsdUJBQVg7O0FBQ0EsTUFBTXhFLEVBQUUsR0FDYndFLEVBQUUsSUFDRixPQUFPdkUsV0FBVyxDQUFsQixTQURBdUUsY0FFQSxPQUFPdkUsV0FBVyxDQUFsQixZQUhLOzs7Ozs7Ozs7Ozs7QUM5V1AsaUJBQWlCLG1CQUFPLENBQUMsbUVBQW9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTdDO0FBQ0E7O0FBRUEsTUFBTXdFLFNBQVMsR0FBRyxNQUFNO0FBQ3RCLFNBQ0UsTUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsdUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREY7QUFLRCxDQU5EOztBQVFlQSx3RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGdDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5jb25zdCBjYXJvdXNlbHMgPSBbXHJcbiAge1xyXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9oZXJvcy9oZXJvLmpwZ1wiLFxyXG4gICAgdGl0bGU6IFwiSnVzdCBJbjogQ2xhcmtzIG1vc3QgdHJlbmRpbmcgc2hvZXNcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiBcIi9pbWFnZXMvaGVyb3MvaGVybzEuanBnXCIsXHJcbiAgICB0aXRsZTogXCJKdXN0IEluOiBDbGFya3MgbW9zdCB0cmVuZGluZyBzaG9lc1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9oZXJvcy9oZXJvMi5qcGdcIixcclxuICAgIHRpdGxlOiBcIkp1c3QgSW46IENsYXJrcyBtb3N0IHRyZW5kaW5nIHNob2VzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogXCIvaW1hZ2VzL2hlcm9zL2hlcm8zLmpwZ1wiLFxyXG4gICAgdGl0bGU6IFwiSnVzdCBJbjogQ2xhcmtzIG1vc3QgdHJlbmRpbmcgc2hvZXNcIixcclxuICB9LFxyXG5dO1xyXG5cclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vQ2Fyb3VzZWxGb3JtLm1vZHVsZS5jc3NcIjtcclxuY2xhc3MgQ2Fyb3VzZWxGb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIGNhcm91c2VsczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImlucHV0XCIsXHJcbiAgICAgICAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJDYXJvdXNlbCBUaXRsZVwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHZhbHVlOiBjYXJvdXNlbHNbMF0udGl0bGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbWFnZToge1xyXG4gICAgICAgICAgZWxlbWVudFR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgICAgICAgdHlwZTogXCJmaWxlXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdmFsdWU6IGNhcm91c2Vsc1swXS5pbWFnZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImlucHV0XCIsXHJcbiAgICAgICAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJDYXJvdXNlbCBUaXRsZVwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHZhbHVlOiBjYXJvdXNlbHNbMV0udGl0bGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbWFnZToge1xyXG4gICAgICAgICAgZWxlbWVudFR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgICAgICAgdHlwZTogXCJmaWxlXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdmFsdWU6IGNhcm91c2Vsc1sxXS5pbWFnZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImlucHV0XCIsXHJcbiAgICAgICAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJDYXJvdXNlbCBUaXRsZVwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHZhbHVlOiBjYXJvdXNlbHNbMl0udGl0bGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbWFnZToge1xyXG4gICAgICAgICAgZWxlbWVudFR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgICAgICAgdHlwZTogXCJmaWxlXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdmFsdWU6IGNhcm91c2Vsc1syXS5pbWFnZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImlucHV0XCIsXHJcbiAgICAgICAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJDYXJvdXNlbCBUaXRsZVwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHZhbHVlOiBjYXJvdXNlbHNbM10udGl0bGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbWFnZToge1xyXG4gICAgICAgICAgZWxlbWVudFR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgICAgICAgdHlwZTogXCJmaWxlXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdmFsdWU6IGNhcm91c2Vsc1szXS5pbWFnZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9O1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5Gb3Jtc1dyYXBwZXJ9PjwvZGl2PjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsRm9ybTtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiRm9ybXNXcmFwcGVyXCI6IFwiQ2Fyb3VzZWxGb3JtX0Zvcm1zV3JhcHBlcl9fMWdMcGFcIixcblx0XCJGb3JtXCI6IFwiQ2Fyb3VzZWxGb3JtX0Zvcm1fXzhWWklCXCIsXG5cdFwiZGlzcGxheVwiOiBcIkNhcm91c2VsRm9ybV9kaXNwbGF5X182aGhHT1wiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vQ29udGVudHMubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgT3ZlcnZpZXdzIGZyb20gXCIuLi9EYXNoQ2FyZHMvT3ZlcnZpZXdzL092ZXJ2aWV3c1wiO1xyXG5pbXBvcnQgUHJvZHVjdHMgZnJvbSBcIi4vUHJvZHVjdHMvUHJvZHVjdHNcIjtcclxuaW1wb3J0IENhcm91c2VsRm9ybSBmcm9tIFwiLi9DYXJvdXNlbEZvcm0vQ2Fyb3VzZWxGb3JtXCI7XHJcbmltcG9ydCBEYXNoYm9hcmRTdW1tYXJ5IGZyb20gXCIuL0Rhc2hib2FyZFN1bW1hcnkvRGFzaGJvYXJkU3VtbWFyeVwiO1xyXG5cclxuY29uc3QgY29udGVudHMgPSAocHJvcHMpID0+IHtcclxuICBsZXQgY29udGVudCA9IG51bGw7XHJcbiAgc3dpdGNoIChwcm9wcy50eXBlKSB7XHJcbiAgICBjYXNlIFwicHJvZHVjdFwiOlxyXG4gICAgICBjb250ZW50ID0gPFByb2R1Y3RzIC8+O1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlIFwidXBkYXRlUHJvZHVjdFwiOlxyXG4gICAgICBjb250ZW50ID0gPFByb2R1Y3RGb3JtIHRpdGxlPVwiVXBkYXRlIFByb2R1Y3RcIiB1cGRhdGU9e3RydWV9IC8+O1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlIFwiY2Fyb3VzZWxcIjpcclxuICAgICAgY29udGVudCA9IDxDYXJvdXNlbEZvcm0gLz47XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGNvbnRlbnQgPSA8RGFzaGJvYXJkU3VtbWFyeSAvPjtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLkNvbnRlbnRzfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuU2lkZUJhclJlcGxhY2V9PlxyXG4gICAgICAgIDxmb290ZXI+Q29weXJpZ2h0ICZjb3B5OyBhdXN0aW5FeHByZXNzLmNvbTwvZm9vdGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuTWFpbkNvbnRlbnRzfT5cclxuICAgICAgICB7LyogPE92ZXJ2aWV3cyAvPiAqL31cclxuXHJcbiAgICAgICAge2NvbnRlbnR9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnRzO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJDb250ZW50c1wiOiBcIkNvbnRlbnRzX0NvbnRlbnRzX19lWVRFMVwiLFxuXHRcIlNpZGVCYXJSZXBsYWNlXCI6IFwiQ29udGVudHNfU2lkZUJhclJlcGxhY2VfXzJtUEpPXCIsXG5cdFwiTWFpbkNvbnRlbnRzXCI6IFwiQ29udGVudHNfTWFpbkNvbnRlbnRzX182cm0wR1wiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vRGFzaGJvYXJkU3VtbWFyeS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vLi4vLi4vVUkvSW5wdXQvSW5wdXRcIjtcclxuXHJcbmNvbnN0IGRhc2hib2FyZFN1bW1hcnkgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxJbnB1dCBpbnB1dHR5cGU9XCJpbnB1dFwiIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGFzaGJvYXJkU3VtbWFyeTtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9wcm9kdWN0Rm9ybS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vLi4vLi4vVUkvSW5wdXQvSW5wdXRcIjtcclxuaW1wb3J0IElucHV0SW1hZ2UgZnJvbSBcIi4uLy4uLy4uL1VJL0lucHV0L0lucHV0SW1hZ2VcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vLi4vVUkvQnV0dG9uL0J1dHRvblwiO1xyXG5pbXBvcnQgSW1hZ2VDYXJkcyBmcm9tIFwiLi4vLi4vLi4vVUkvSW1hZ2VDYXJkcy9JbWFnZUNhcmRzXCI7XHJcbmltcG9ydCB7IEJBU0VfVVJMIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2xpYi9yZXF1ZXN0c1wiO1xyXG5cclxuaW1wb3J0IHVzZVByb2R1Y3RBY3Rpb25zIGZyb20gXCIuLi8uLi8uLi8uLi9ob29rcy9zdG9yZS9hY3Rpb25zL3Byb2R1Y3RcIjtcclxuaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vaG9va3Mvc3RvcmUvc3RvcmVcIjtcclxuXHJcbmNvbnN0IHByb2R1Y3RGb3JtID0gKCBwcm9wcyApID0+IHtcclxuICBjb25zdCBbcHJvZHVjdEZvcm0sIHNldFByb2R1Y3RGb3JtXSA9IHVzZVN0YXRlKHtcclxuICAgIG5hbWU6IHtcclxuICAgICAgZWxlbWVudFR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBcIlByb2R1Y3QgTmFtZVwiLFxyXG4gICAgICB9LFxyXG4gICAgICB2YWx1ZTogXCJcIixcclxuICAgIH0sXHJcbiAgICBwcmljZToge1xyXG4gICAgICBlbGVtZW50VHlwZTogXCJpbnB1dFwiLFxyXG4gICAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgICAgdHlwZTogXCJudW1iZXJcIixcclxuICAgICAgICBwbGFjZWhvbGRlcjogXCJQcm9kdWN0IFByaWNlXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHF1YW50aXR5OiB7XHJcbiAgICAgIGVsZW1lbnRUeXBlOiBcImlucHV0XCIsXHJcbiAgICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBcIlF1YW50aXR5XCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHNpemVzOiB7XHJcbiAgICAgIGVsZW1lbnRUeXBlOiBcImlucHV0XCIsXHJcbiAgICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgICBwbGFjZWhvbGRlcjogXCJTaXplc1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB2YWx1ZTogXCJcIixcclxuICAgIH0sXHJcbiAgICBjb2xvcnM6IHtcclxuICAgICAgZWxlbWVudFR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBcIkNvbG9yc1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB2YWx1ZTogXCJcIixcclxuICAgIH0sXHJcbiAgICBjYXRlZ29yeToge1xyXG4gICAgICBlbGVtZW50VHlwZTogXCJzZWxlY3RcIixcclxuICAgICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICAgIG9wdGlvbnM6IFtcclxuICAgICAgICAgIHsgdmFsdWU6IFwibnVsbFwiLCBkaXNwbGF5VmFsdWU6IFwiLS0tU2VsZWN0IENhdGVnb3J5LS0tXCIgfSxcclxuICAgICAgICAgIHsgdmFsdWU6IFwibWVuXCIsIGRpc3BsYXlWYWx1ZTogXCJNZW5cIiB9LFxyXG4gICAgICAgICAgeyB2YWx1ZTogXCJ3b21lblwiLCBkaXNwbGF5VmFsdWU6IFwiV29tZW5cIiB9LFxyXG4gICAgICAgICAgeyB2YWx1ZTogXCJraWRzXCIsIGRpc3BsYXlWYWx1ZTogXCJLaWRzXCIgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICB2YWx1ZTogXCJcIixcclxuICAgIH0sXHJcbiAgICBicmFuZDoge1xyXG4gICAgICBlbGVtZW50VHlwZTogXCJzZWxlY3RcIixcclxuICAgICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICAgIG9wdGlvbnM6IFtcclxuICAgICAgICAgIHsgdmFsdWU6IFwibnVsbFwiLCBkaXNwbGF5VmFsdWU6IFwiLS0tU2VsZWN0IEJyYW5kLS0tXCIgfSxcclxuICAgICAgICAgIHsgdmFsdWU6IFwibmlrZVwiLCBkaXNwbGF5VmFsdWU6IFwiTmlrZVwiIH0sXHJcbiAgICAgICAgICB7IHZhbHVlOiBcImNsYXJrc1wiLCBkaXNwbGF5VmFsdWU6IFwiQ2xhcmtzXCIgfSxcclxuICAgICAgICAgIHsgdmFsdWU6IFwiR3VjY2lcIiwgZGlzcGxheVZhbHVlOiBcIkd1Y2NpXCIgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICB2YWx1ZTogXCJcIixcclxuICAgIH0sXHJcbiAgICBkZXNjcmlwdGlvbjoge1xyXG4gICAgICBlbGVtZW50VHlwZTogXCJ0ZXh0YXJlYVwiLFxyXG4gICAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IFwiUHJvZHVjdCBkZXNjcmlwdGlvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICB2YWx1ZTogXCJcIixcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IFtpbWFnZVVybHMsIHNldEltYWdlVXJsc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIC8vIHByb2R1Y3QgaHR0cCBlZmZlY3RzIGxpYlxyXG4gIGNvbnN0IHsgXHJcbiAgICBzZW5kU2F2ZVJlcXVlc3QsXHJcbiAgICBzZW5kVXBkYXRlUmVxdWVzdFxyXG4gIH0gPSB1c2VQcm9kdWN0QWN0aW9ucygpO1xyXG4gIGNvbnN0IHsgcHJvZHVjdCB9ID0gdXNlU3RvcmUoKVswXTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwicHJvZHVjdEZvcm1cIiwgcHJvcHMuc2VsZWN0UHJvZHVjdCk7XHJcbiAgICBjb25zdCB7c2VsZWN0UHJvZHVjdH0gPSBwcm9wcztcclxuICAgIGlmKHNlbGVjdFByb2R1Y3QpIHtcclxuICAgICAgY29uc3QgdXBkYXRlZFByb2R1Y3RGb3JtID0geyBcclxuICAgICAgICAuLi5wcm9kdWN0Rm9ybSxcclxuICAgICAgICBuYW1lOiB7Li4ucHJvZHVjdEZvcm0ubmFtZSwgdmFsdWU6IHNlbGVjdFByb2R1Y3QucHJvZHVjdF9uYW1lfSxcclxuICAgICAgICBwcmljZTogey4uLnByb2R1Y3RGb3JtLnByaWNlLCB2YWx1ZTogc2VsZWN0UHJvZHVjdC5wcmljZX0sXHJcbiAgICAgICAgcXVhbnRpdHk6IHsuLi5wcm9kdWN0Rm9ybS5xdWFudGl0eSwgdmFsdWU6IHNlbGVjdFByb2R1Y3QucXVhbnRpdHl9LFxyXG4gICAgICAgIHNpemVzOiB7Li4ucHJvZHVjdEZvcm0uc2l6ZXMsIHZhbHVlOiBzZWxlY3RQcm9kdWN0LnNpemVzLmpvaW4oXCI7XCIpfSxcclxuICAgICAgICBjb2xvcnM6IHsuLi5wcm9kdWN0Rm9ybS5jb2xvcnMsIHZhbHVlOiBzZWxlY3RQcm9kdWN0LmNvbG9ycy5qb2luKFwiO1wiKX0sXHJcbiAgICAgICAgY2F0ZWdvcnk6IHsuLi5wcm9kdWN0Rm9ybS5jYXRlZ29yeSwgdmFsdWVzOiBzZWxlY3RQcm9kdWN0LmNhdGVnb3J5fSxcclxuICAgICAgICBicmFuZDogey4uLnByb2R1Y3RGb3JtLmJyYW5kLCB2YWx1ZTogc2VsZWN0UHJvZHVjdC5icmFuZH0sXHJcbiAgICAgICAgZGVzY3JpcHRpb246IHsuLi5wcm9kdWN0Rm9ybS5kZXNjcmlwdGlvbiwgdmFsdWU6IHNlbGVjdFByb2R1Y3QuZGVzY3JpcHRpb259LFxyXG4gICAgICB9O1xyXG4gICAgICBcclxuICAgICAgc2V0UHJvZHVjdEZvcm0odXBkYXRlZFByb2R1Y3RGb3JtKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcbiAgLy9JbnB1dCBDaGFuZ2UgSGFuZGxlclxyXG4gIGNvbnN0IGlucHV0Q2hhbmdlSGFuZGxlciA9IChldmVudCwgaW5wdXRJZGVudGlmaWVyKSA9PiB7XHJcbiAgICBjb25zdCB1cGRhdGVkUHJvZHVjdEZvcm0gPSB7IC4uLnByb2R1Y3RGb3JtIH07XHJcbiAgICBjb25zdCB1cGRhdGVkRm9ybUVsZW1lbnQgPSB7IC4uLnVwZGF0ZWRQcm9kdWN0Rm9ybVtpbnB1dElkZW50aWZpZXJdIH07XHJcbiAgICB1cGRhdGVkRm9ybUVsZW1lbnQudmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICB1cGRhdGVkUHJvZHVjdEZvcm1baW5wdXRJZGVudGlmaWVyXSA9IHVwZGF0ZWRGb3JtRWxlbWVudDtcclxuICAgIHNldFByb2R1Y3RGb3JtKHVwZGF0ZWRQcm9kdWN0Rm9ybSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gRmlsZSBDaGFuZ2UgSGFuZGxlclxyXG4gIGNvbnN0IG9uRmlsZUNoYW5nZUhhbmRsZXIgPSAoIGV2ZW50ICkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LmZpbGVzKTtcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3IobGV0IGZpbGUgb2YgZXZlbnQudGFyZ2V0LmZpbGVzKSB7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcInByb2R1Y3RzXCIsIGZpbGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZldGNoKEJBU0VfVVJMICsgXCIvYXBpL3VwbG9hZHMvcHJvZHVjdHNcIiwge1xyXG4gICAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICAgIGJvZHk6IGZvcm1EYXRhLFxyXG4gICAgfSlcclxuICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBzZXRJbWFnZVVybHMocmVzLmRhdGEuaW1hZ2VVcmxzKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKFwiZXJyb3JcIiwgZXJyKSlcclxuICB9XHJcblxyXG4gIC8vQWRkaW5nIFByb2R1Y3QgSGFuZGxlclxyXG4gIGNvbnN0IGFkZFByb2R1Y3RIYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IGZvcm1EYXRhID0ge307XHJcbiAgICBmb3IgKGxldCBpbnB1dEVsZW1lbnRJZGVudGlmaWVyIGluIHByb2R1Y3RGb3JtKSB7XHJcbiAgICAgIGZvcm1EYXRhW2lucHV0RWxlbWVudElkZW50aWZpZXJdID0gcHJvZHVjdEZvcm1bIGlucHV0RWxlbWVudElkZW50aWZpZXIgXS52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwcm9kdWN0ID0ge1xyXG4gICAgICBwcm9kdWN0RGF0YTogZm9ybURhdGEsXHJcbiAgICB9O1xyXG5cclxuICAgIHByb2R1Y3QucHJvZHVjdERhdGEuc2l6ZXMgPSB0eXBlb2YgcHJvZHVjdC5wcm9kdWN0RGF0YS5zaXplcyA9PT0gXCJzdHJpbmdcIiA/XHJcbiAgICBwcm9kdWN0LnByb2R1Y3REYXRhLnNpemVzLnNwbGl0KC9bOyxdL2dpbSkubWFwKCh2KSA9PiBOdW1iZXIucGFyc2VGbG9hdCh2KSkgOiBwcm9kdWN0LnByb2R1Y3REYXRhLnNpemVzO1xyXG5cclxuICAgIHByb2R1Y3QucHJvZHVjdERhdGEuY29sb3JzID0gdHlwZW9mIHByb2R1Y3QucHJvZHVjdERhdGEuY29sb3JzID09PSBcInN0cmluZ1wiID9cclxuICAgIHByb2R1Y3QucHJvZHVjdERhdGEuY29sb3JzLnNwbGl0KC9bOyxdL2dpbSkgOiBwcm9kdWN0LnByb2R1Y3REYXRhLmNvbG9ycztcclxuICAgIFxyXG4gICAgLy8gZGVzdHJ1Y3R1cmUgcHJvZHVjdCBkYXRhXHJcbiAgICBjb25zdCB7IHByb2R1Y3REYXRhIH0gPSBwcm9kdWN0O1xyXG5cclxuICAgIC8vIGNoZWNrIHRoZSBzdGF0ZSBvZiBwcm9kdWN0IGZvcm0gKGFkZCAvIHVwZGF0ZSlcclxuICAgIGlmKHByb3BzLnRpdGxlID09PSBcIlVwZGF0ZSBQcm9kdWN0XCIpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJVcGRhdGUgUHJvZHVjdFwiLCBwcm9kdWN0RGF0YSk7XHJcbiAgICAgIHNlbmRVcGRhdGVSZXF1ZXN0KFxyXG4gICAgICAgIHByb3BzLnNlbGVjdFByb2R1Y3QuX2lkLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb2R1Y3RfbmFtZTogcHJvZHVjdERhdGEubmFtZSwgXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogcHJvZHVjdERhdGEuZGVzY3JpcHRpb24sIFxyXG4gICAgICAgICAgcHJpY2U6IE51bWJlci5wYXJzZUZsb2F0KHByb2R1Y3REYXRhLnByaWNlKSwgXHJcbiAgICAgICAgICBpbWFnZV91cmxzOiBpbWFnZVVybHMsIFxyXG4gICAgICAgICAgcXVhbnRpdHk6IE51bWJlci5wYXJzZUludChwcm9kdWN0RGF0YS5xdWFudGl0eSksIFxyXG4gICAgICAgICAgY2F0ZWdvcnk6IHByb2R1Y3REYXRhLmNhdGVnb3J5LFxyXG4gICAgICAgICAgY29sb3JzOiBwcm9kdWN0RGF0YS5jb2xvcnMsXHJcbiAgICAgICAgICBzaXplczogcHJvZHVjdERhdGEuc2l6ZXMsXHJcbiAgICAgICAgICBicmFuZDogcHJvZHVjdERhdGEuYnJhbmRcclxuICAgICAgICB9XHJcbiAgICAgIClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiQWRkIFByb2R1Y3RcIiwgcHJvZHVjdERhdGEpO1xyXG4gICAgICAvLyBDcmVhdGUgYW5kIHNhdmUgbmV3IHByb2R1Y3RcclxuICAgICAgc2VuZFNhdmVSZXF1ZXN0KCBcclxuICAgICAgICBwcm9kdWN0RGF0YS5uYW1lLCBcclxuICAgICAgICBwcm9kdWN0RGF0YS5kZXNjcmlwdGlvbiwgXHJcbiAgICAgICAgTnVtYmVyLnBhcnNlRmxvYXQocHJvZHVjdERhdGEucHJpY2UpLCBcclxuICAgICAgICBpbWFnZVVybHMsIFxyXG4gICAgICAgIE51bWJlci5wYXJzZUludChwcm9kdWN0RGF0YS5xdWFudGl0eSksIFxyXG4gICAgICAgIHByb2R1Y3REYXRhLmNhdGVnb3J5LFxyXG4gICAgICAgIHByb2R1Y3REYXRhLmNvbG9ycyxcclxuICAgICAgICBwcm9kdWN0RGF0YS5zaXplcyxcclxuICAgICAgICBwcm9kdWN0RGF0YS5icmFuZFxyXG4gICAgICApO1xyXG4gICAgfSAgXHJcbiAgfTtcclxuXHJcbiAgbGV0IHNlYXJjaCA9IG51bGw7XHJcbiAgaWYgKHByb3BzLnVwZGF0ZSkge1xyXG4gICAgc2VhcmNoID0gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2h9PlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFbnRlciBQcm9kdWN0IENvZGVcIiAvPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlNlYXJjaFwiIC8+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBmb3JtRWxlbWVudEFycmF5ID0gW107XHJcbiAgZm9yIChsZXQga2V5IGluIHByb2R1Y3RGb3JtKSB7XHJcbiAgICBmb3JtRWxlbWVudEFycmF5LnB1c2goe1xyXG4gICAgICBpZDoga2V5LFxyXG4gICAgICBjb25maWc6IHByb2R1Y3RGb3JtW2tleV0sXHJcbiAgICB9KTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLkZvcm1zV3JhcHBlcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLkZvcm19PlxyXG4gICAgICAgIDxoMj57cHJvcHMudGl0bGV9PC9oMj5cclxuICAgICAgICB7c2VhcmNofVxyXG4gICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAge2Zvcm1FbGVtZW50QXJyYXkubWFwKChmb3JtRWxlbWVudCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAga2V5PXtmb3JtRWxlbWVudC5pZH1cclxuICAgICAgICAgICAgICBlbGVtZW50VHlwZT17Zm9ybUVsZW1lbnQuY29uZmlnLmVsZW1lbnRUeXBlfVxyXG4gICAgICAgICAgICAgIGVsZW1lbnRDb25maWc9e2Zvcm1FbGVtZW50LmNvbmZpZy5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtmb3JtRWxlbWVudC5jb25maWcudmFsdWV9XHJcbiAgICAgICAgICAgICAgY2hhbmdlZD17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgaW5wdXRDaGFuZ2VIYW5kbGVyKGV2ZW50LCBmb3JtRWxlbWVudC5pZClcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICAgIDxJbnB1dEltYWdlIGNoYW5nZT17b25GaWxlQ2hhbmdlSGFuZGxlcn0vPlxyXG4gICAgICAgICAgey8qIDxJbWFnZUNhcmRzIGltYWdlX3VybHM9e2ltYWdlVXJscy5sZW5ndGggPyBpbWFnZVVybHMgOiBwcm9wcy5zZWxlY3RQcm9kdWN0LmltYWdlX3VybHN9IC8+ICovfVxyXG4gICAgICAgICAgPEltYWdlQ2FyZHMgaW1hZ2VfdXJscz17aW1hZ2VVcmxzfSAvPlxyXG4gICAgICAgICAgPEJ1dHRvbiBjbGlja2VkPXthZGRQcm9kdWN0SGFuZGxlcn0+QWRkIFByb2R1Y3Q8L0J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJvZHVjdEZvcm07XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIkZvcm1zV3JhcHBlclwiOiBcInByb2R1Y3RGb3JtX0Zvcm1zV3JhcHBlcl9fMnVNREVcIixcblx0XCJGb3JtXCI6IFwicHJvZHVjdEZvcm1fRm9ybV9fM2lRT2hcIixcblx0XCJzZWFyY2hcIjogXCJwcm9kdWN0Rm9ybV9zZWFyY2hfXzFSVkQ2XCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9Qcm9kdWN0Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vLi4vLi4vVUkvQnV0dG9uL0J1dHRvblwiO1xyXG5cclxuaW1wb3J0IHsgQkFTRV9VUkwgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbGliL3JlcXVlc3RzXCI7XHJcblxyXG5pbXBvcnQgdXNlUHJvZHVjdEFjdGlvbnMgZnJvbSBcIi4uLy4uLy4uLy4uLy4uL2hvb2tzL3N0b3JlL2FjdGlvbnMvcHJvZHVjdFwiO1xyXG5cclxuY29uc3QgcHJvZHVjdCA9ICh7IHByb2R1Y3QsIHNob3dVcGRhdGVNb2RhbCB9KSA9PiB7XHJcblxyXG4gIGNvbnN0IHsgc2VuZERlbGV0ZVJlcXVlc3QgfSA9IHVzZVByb2R1Y3RBY3Rpb25zKCk7XHJcblxyXG4gIGNvbnN0IG9uRGVsZXRlUHJvZHVjdEhhbmRsZXIgPSAocHJvZHVjdElkKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9kdWN0SWQpO1xyXG4gICAgc2VuZERlbGV0ZVJlcXVlc3QocHJvZHVjdElkKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8dHIgY2xhc3NOYW1lPXtjbGFzc2VzLlByb2R1Y3R9PlxyXG4gICAgICA8dGQ+XHJcbiAgICAgICAgPGltZyBzcmM9e0JBU0VfVVJMICsgcHJvZHVjdC5pbWFnZV91cmxzW01hdGguZmxvb3IoIE1hdGgucmFuZG9tKCkgKiBwcm9kdWN0LmltYWdlX3VybHMubGVuZ3RoKV19IC8+XHJcbiAgICAgIDwvdGQ+XHJcbiAgICAgIDx0ZD57cHJvZHVjdC5wcm9kdWN0X25hbWV9PC90ZD5cclxuICAgICAgPHRkPiR7cHJvZHVjdC5wcmljZX08L3RkPlxyXG4gICAgICA8dGQ+e3Byb2R1Y3QuY29sb3JzLmpvaW4oXCIsIFwiKX08L3RkPlxyXG4gICAgICA8dGQ+e3Byb2R1Y3Quc2l6ZXMuam9pbihcIiwgXCIpfTwvdGQ+XHJcbiAgICAgIDx0ZD57cHJvZHVjdC5jYXRlZ29yeX08L3RkPlxyXG4gICAgICA8dGQ+e3Byb2R1Y3QuYnJhbmR9PC90ZD5cclxuICAgICAgPHRkPntwcm9kdWN0LnF1YW50aXR5fTwvdGQ+XHJcbiAgICAgIDx0ZCBjbGFzc05hbWU9e2NsYXNzZXMuQWN0aW9ufT5cclxuICAgICAgICA8QnV0dG9uIGNsaWNrZWQ9e3Nob3dVcGRhdGVNb2RhbH0+VXBkYXRlPC9CdXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuRGVsZXRlfSBvbkNsaWNrPXsoKT0+b25EZWxldGVQcm9kdWN0SGFuZGxlcihwcm9kdWN0Ll9pZCl9PmRlbGV0ZTwvYnV0dG9uPlxyXG4gICAgICA8L3RkPlxyXG4gICAgPC90cj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJvZHVjdDtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiUHJvZHVjdFwiOiBcIlByb2R1Y3RfUHJvZHVjdF9fMlJBelNcIixcblx0XCJBY3Rpb25cIjogXCJQcm9kdWN0X0FjdGlvbl9fMVVPNWNcIixcblx0XCJEZWxldGVcIjogXCJQcm9kdWN0X0RlbGV0ZV9fM0JTbnNcIlxufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9Qcm9kdWN0cy5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uLy4uL1VJL0J1dHRvbi9CdXR0b25cIjtcclxuaW1wb3J0IFByb2R1Y3QgZnJvbSBcIi4vUHJvZHVjdC9Qcm9kdWN0XCI7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwiLi4vLi4vLi4vVUkvTW9kYWwvTW9kYWxcIjtcclxuaW1wb3J0IFByb2R1Y3RGb3JtIGZyb20gXCIuLi9Qcm9kdWN0Rm9ybS9Qcm9kdWN0Rm9ybVwiO1xyXG5pbXBvcnQgdXNlUHJvZHVjdEFjdGlvbnMgZnJvbSBcIi4uLy4uLy4uLy4uL2hvb2tzL3N0b3JlL2FjdGlvbnMvcHJvZHVjdFwiO1xyXG5cclxuaW1wb3J0IHt1c2VTdG9yZX0gZnJvbSBcIi4uLy4uLy4uLy4uL2hvb2tzL3N0b3JlL3N0b3JlXCI7XHJcblxyXG5jb25zdCBwcm9kdWN0cyA9ICgpID0+IHtcclxuICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFttb2RhbENvbnRlbnQsIHNldE1vZGFsQ29udGVudF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbIHNlbGVjdFByb2R1Y3QsIHNldFNlbGVjdFByb2R1Y3QgXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCB7IHByb2R1Y3QgfSA9IHVzZVN0b3JlKClbMF07XHJcbiAgY29uc3QgeyBzZW5kRmluZFJlcXVlc3QgfSA9IHVzZVByb2R1Y3RBY3Rpb25zKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZW5kRmluZFJlcXVlc3Qoe2xpbWl0OiA1LCBzb3J0Qnk6IFwiY3JlYXRlZEF0XCJ9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG1vZGFsQ2xvc2VIYW5sZGVyID0gKCkgPT4ge1xyXG4gICAgc2V0U2hvd01vZGFsKCFzaG93TW9kYWwpO1xyXG4gIH07XHJcbiAgY29uc3Qgc2hvd0FkZFByb2R1Y3RNb2RhbCA9ICgpID0+IHtcclxuICAgIHNldE1vZGFsQ29udGVudChcImFkZFwiKTtcclxuICAgIHNldFNob3dNb2RhbCh0cnVlKTtcclxuICB9O1xyXG4gIGNvbnN0IHNob3dVcGRhdGVQcm9kdWN0TW9kYWwgPSAoIHByb2QgKSA9PiB7XHJcbiAgICBzZXRTZWxlY3RQcm9kdWN0KHsuLi5wcm9kfSk7XHJcbiAgICBzZXRNb2RhbENvbnRlbnQoXCJ1cGRhdGVcIik7XHJcbiAgICBzZXRTaG93TW9kYWwodHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgbGV0IG1vZGFsID0gbnVsbDtcclxuICBzd2l0Y2ggKG1vZGFsQ29udGVudCkge1xyXG4gICAgY2FzZSBcImFkZFwiOlxyXG4gICAgICBtb2RhbCA9IChcclxuICAgICAgICA8TW9kYWwgc2hvdz17c2hvd01vZGFsfSBtb2RhbENsb3NlZD17bW9kYWxDbG9zZUhhbmxkZXJ9PlxyXG4gICAgICAgICAgPFByb2R1Y3RGb3JtIHRpdGxlPVwiQWRkIFByb2R1Y3RcIiAvPlxyXG4gICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcInVwZGF0ZVwiOlxyXG4gICAgICBtb2RhbCA9IChcclxuICAgICAgICA8TW9kYWwgc2hvdz17c2hvd01vZGFsfSBtb2RhbENsb3NlZD17bW9kYWxDbG9zZUhhbmxkZXJ9PlxyXG4gICAgICAgICAgPFByb2R1Y3RGb3JtIHRpdGxlPVwiVXBkYXRlIFByb2R1Y3RcIiBzZWxlY3RQcm9kdWN0PXtzZWxlY3RQcm9kdWN0fS8+XHJcbiAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICBudWxsO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICB7bW9kYWx9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLlByb2R1Y3RzfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5Ub3B9PlxyXG4gICAgICAgICAgPGgxPk1hbmFnZSBQcm9kdWN0czwvaDE+XHJcbiAgICAgICAgICA8QnV0dG9uIGNsaWNrZWQ9e3Nob3dBZGRQcm9kdWN0TW9kYWx9PkFkZCBQcm9kdWN0PC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9e2NsYXNzZXMuVGFibGV9PlxyXG4gICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRoPkltYWdlPC90aD5cclxuICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPlByaWNlPC90aD5cclxuICAgICAgICAgICAgICA8dGg+Q29sb3JzPC90aD5cclxuICAgICAgICAgICAgICA8dGg+U2l6ZXM8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5DYXRlZ29yeTwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPkJyYW5kPC90aD5cclxuICAgICAgICAgICAgICA8dGg+UXVhbnRpdHk8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5BY3Rpb248L3RoPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAge3Byb2R1Y3QuZGF0YS5tYXAoKHByb2R1Y3QsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPFByb2R1Y3RcclxuICAgICAgICAgICAgICAgIHByb2R1Y3Q9e3Byb2R1Y3R9XHJcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgc2hvd1VwZGF0ZU1vZGFsPXsoKSA9PiBzaG93VXBkYXRlUHJvZHVjdE1vZGFsKHByb2R1Y3QpfVxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdElkPXtpbmRleH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0cztcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiUHJvZHVjdHNcIjogXCJQcm9kdWN0c19Qcm9kdWN0c19fMWhzYjhcIixcblx0XCJUb3BcIjogXCJQcm9kdWN0c19Ub3BfXzJpdXl4XCIsXG5cdFwiVGFibGVcIjogXCJQcm9kdWN0c19UYWJsZV9fMzB0OFJcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL092ZXJ2aWV3Lm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IG92ZXJ2aWV3ID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLk92ZXJ2aWV3fT5cclxuICAgICAgPHA+e3Byb3BzLnByb3BlcnRpZXMudGl0bGV9PC9wPlxyXG4gICAgICA8aDM+e3Byb3BzLnByb3BlcnRpZXMudmFsdWV9PC9oMz5cclxuICAgICAgPHA+e3Byb3BzLnByb3BlcnRpZXMuY2FwdGlvbn08L3A+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgb3ZlcnZpZXc7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIk92ZXJ2aWV3XCI6IFwiT3ZlcnZpZXdfT3ZlcnZpZXdfXzJNaDJNXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9PdmVydmlld3MubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgT3ZlcnZpZXcgZnJvbSBcIi4vT3ZlcnZpZXcvT3ZlcnZpZXdcIjtcclxuaW1wb3J0IG92ZXJ2aWV3IGZyb20gXCIuL092ZXJ2aWV3L092ZXJ2aWV3XCI7XHJcblxyXG5jb25zdCBvdmVydmlld3MgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBvdmVydmlld3MgPSBbXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIlNBTEVTXCIsXHJcbiAgICAgIHZhbHVlOiBcIiQyNiwyMjRcIixcclxuICAgICAgY2FwdGlvbjogXCJUb3RhbCBzYWxlcyBmb3IgdGhpcyBtb250aFwiLFxyXG4gICAgfSxcclxuXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIlVTRVJTXCIsXHJcbiAgICAgIHZhbHVlOiBcIjYwMCBVc2Vyc1wiLFxyXG4gICAgICBjYXB0aW9uOiBcIlRvdGFsIHJlZ2lzdGVyZWQgdXNlcnNcIixcclxuICAgIH0sXHJcblxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJQUk9EVUNUU1wiLFxyXG4gICAgICB2YWx1ZTogXCIxMjAwIFByb2R1Y3RzXCIsXHJcbiAgICAgIGNhcHRpb246IFwiVG90YWwgcHJvZHVjdHMgYXZhaWxhYmxlXCIsXHJcbiAgICB9LFxyXG4gIF07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLk92ZXJ2aWV3c30+XHJcbiAgICAgIHtvdmVydmlld3MubWFwKChvdmVydmlldywgaW5kZXgpID0+IChcclxuICAgICAgICA8T3ZlcnZpZXcga2V5PXtpbmRleH0gcHJvcGVydGllcz17b3ZlcnZpZXd9IC8+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG92ZXJ2aWV3cztcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiT3ZlcnZpZXdzXCI6IFwiT3ZlcnZpZXdzX092ZXJ2aWV3c19fMkk5cXNcIlxufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9EYXNoYm9hcmQubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgVG9vbEJhciBmcm9tIFwiLi9Ub29sQmFyL1Rvb2xCYXJcIjtcclxuaW1wb3J0IFNpZGVCYXIgZnJvbSBcIi4vU2lkZUJhci9TaWRlQmFyXCI7XHJcbmltcG9ydCBDb250ZW50cyBmcm9tIFwiLi9Db250ZW50cy9Db250ZW50c1wiO1xyXG5cclxuY29uc3QgZGFzaG9hcmQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2NvbnRlbnRTdGF0ZSwgc2V0Q29udGVudFN0YXRlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBjaGFuZ2VDb250ZW50SGFubGRlciA9ICh0eXBlKSA9PiB7XHJcbiAgICBzZXRDb250ZW50U3RhdGUodHlwZSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGFzaGJvYXJkfT5cclxuICAgICAgPFRvb2xCYXIgLz5cclxuICAgICAgPFNpZGVCYXIgY2xpY2tlZD17Y2hhbmdlQ29udGVudEhhbmxkZXJ9IC8+XHJcbiAgICAgIDxDb250ZW50cyB0eXBlPXtjb250ZW50U3RhdGV9IC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGFzaG9hcmQ7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImRhc2hib2FyZFwiOiBcIkRhc2hib2FyZF9kYXNoYm9hcmRfX082YjZfXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL1NpZGVCYXIubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgTG9nbyBmcm9tIFwiLi4vLi4vTG9nb1wiO1xyXG5jb25zdCBsaW5rcyA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogXCJEYXNoYm9hcmRcIixcclxuICAgIGljb246IFwiL2ltYWdlcy9ob21lLnBuZ1wiLFxyXG4gICAgdHlwZTogXCJkYXNoYm9hcmRcIixcclxuICB9LFxyXG5cclxuICB7XHJcbiAgICB0aXRsZTogXCJQcm9kdWN0XCIsXHJcbiAgICBpY29uOiBcIi9pbWFnZXMvcGx1cy5wbmdcIixcclxuICAgIHR5cGU6IFwicHJvZHVjdFwiLFxyXG4gIH0sXHJcblxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkNhcm91c2VsXCIsXHJcbiAgICAvLyBpY29uOiBcIi9pbWFnZXMvZWRpdC5wbmdcIixcclxuICAgIHR5cGU6IFwiY2Fyb3VzZWxcIixcclxuICB9LFxyXG5cclxuICB7XHJcbiAgICB0aXRsZTogXCJQb3B1bGFyIENhdGVnb3JpZXNcIixcclxuICAgIGljb246IFwiL2ltYWdlcy9lZGl0LnBuZ1wiLFxyXG4gICAgdHlwZTogXCJwb3B1bGFyQ2F0ZWdvcmllc1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiRm9vdHdlYXIgRmF2b3JpdGVzXCIsXHJcbiAgICBpY29uOiBcIi9pbWFnZXMvZWRpdC5wbmdcIixcclxuICAgIHR5cGU6IFwiZmF2b3JpdGVzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJUcmVuZGluZyBCcmFuZHNcIixcclxuICAgIGljb246IFwiL2ltYWdlcy9lZGl0LnBuZ1wiLFxyXG4gICAgdHlwZTogXCJ0cmVuZGluZ0JyYW5kc1wiLFxyXG4gIH0sXHJcbl07XHJcbmNvbnN0IHNpZGVCYXIgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2lkZUJhcn0+XHJcbiAgICAgIDxuYXY+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT17Y2xhc3Nlcy5zaWRlTmF2fT5cclxuICAgICAgICAgIHtsaW5rcy5tYXAoKG5hdiwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9IG9uQ2xpY2s9eygpID0+IHByb3BzLmNsaWNrZWQobmF2LnR5cGUpfT5cclxuICAgICAgICAgICAgICB7LyogPGltZyBzcmM9e25hdi5pY29ufSAvPiAqL31cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPntuYXYudGl0bGV9PC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9wb3dlci5wbmdcIiBhbHQ9XCJpY29uXCIgLz5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5Mb2dvdXQ8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNpZGVCYXI7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInNpZGVCYXJcIjogXCJTaWRlQmFyX3NpZGVCYXJfXzJBVlZ4XCIsXG5cdFwic2lkZU5hdlwiOiBcIlNpZGVCYXJfc2lkZU5hdl9fM0FscFBcIixcblx0XCJzaWRlQWN0aXZlXCI6IFwiU2lkZUJhcl9zaWRlQWN0aXZlX19uSzBiWVwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9Ub29sQmFyLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IExvZ28gZnJvbSBcIi4uLy4uL0xvZ29cIjtcclxuaW1wb3J0IFNwYWNlciBmcm9tIFwiLi4vLi4vU3BhY2VyXCI7XHJcblxyXG5jb25zdCB0b29sQmFyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy50b29sQmFyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubG9nb1dyYXBwZXJ9PlxyXG4gICAgICAgIDxMb2dvIGNvbG9yPVwid2hpdGVcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPFNwYWNlciAvPlxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT17Y2xhc3Nlcy5OYXZ9PlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5Hb3RvIFB1YmxpYyBQYWdlPC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L25hdj5cclxuICAgIDwvaGVhZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0b29sQmFyO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ0b29sQmFyXCI6IFwiVG9vbEJhcl90b29sQmFyX18ySmpjclwiLFxuXHRcImxvZ29XcmFwcGVyXCI6IFwiVG9vbEJhcl9sb2dvV3JhcHBlcl9fMkdOQVFcIixcblx0XCJOYXZcIjogXCJUb29sQmFyX05hdl9fdW5EVWRcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuY29uc3QgbG9nbyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgPGE+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibG9nb1wiPlxyXG4gICAgICAgICAgICBhdXN0aW48c3BhbiBjbGFzc05hbWU9XCJyZWRcIj5FeHA8L3NwYW4+cmVzcy5jb21cclxuICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0xpbms+XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmxvZ28gaDIge1xyXG4gICAgICAgICAgY29sb3I6ICMxYjIyMmI7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIHNhbnNcIiwgc2FuLXNlcmlmO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJlZCB7XHJcbiAgICAgICAgICBjb2xvcjogIzA2NTRiMztcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2dvO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBzcGFjZXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2VyXCI+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuc3BhY2VyIHtcclxuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzcGFjZXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IGJhY2tkcm9wID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQmFja2Ryb3BcIiBvbkNsaWNrPXtwcm9wcy5jbGlja2VkfT5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5CYWNrZHJvcCB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMyk7XHJcbiAgICAgICAgICB6LWluZGV4OiA5MDtcclxuICAgICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgICAgIGRpc3BsYXk6ICR7cHJvcHMuc2hvdyA/IFwiYmxvY2tcIiA6IFwibm9uZVwifTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBiYWNrZHJvcDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vQnV0dG9uLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IGJ1dHRvbiA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uIG9uQ2xpY2s9e3Byb3BzLmNsaWNrZWR9IGNsYXNzTmFtZT17Y2xhc3Nlcy5CdXR0b259PlxyXG4gICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICA8L2J1dHRvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYnV0dG9uO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJCdXR0b25cIjogXCJCdXR0b25fQnV0dG9uX190OTlZQlwiXG59O1xuIiwiXHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL0ltYWdlQ2FyZHMubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBCQVNFX1VSTCB9IGZyb20gXCIuLi8uLi8uLi9saWIvcmVxdWVzdHNcIjtcclxuXHJcbmNvbnN0IGltYWdlQ2FyZHMgPSAoIHsgaW1hZ2VfdXJscyB9ICkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMuUHJvZHVjdEltYWdlQ29udGFpbmVyfT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaW1hZ2VfdXJscy5tYXAoaW1hZ2VfdXJsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW1hZ2VfdXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLlByb2R1Y3RJbWFnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtCQVNFX1VSTCArIGltYWdlX3VybH0gYWx0PVwicHJvZHVjdFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbWFnZUNhcmRzOyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIlByb2R1Y3RJbWFnZVwiOiBcIkltYWdlQ2FyZHNfUHJvZHVjdEltYWdlX18zTXNJNlwiLFxuXHRcIlByb2R1Y3RJbWFnZUNvbnRhaW5lclwiOiBcIkltYWdlQ2FyZHNfUHJvZHVjdEltYWdlQ29udGFpbmVyX18zclFBVVwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vSW5wdXQubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgaW5wdXQgPSAocHJvcHMpID0+IHtcclxuICBsZXQgaW5wdXRFbGVtZW50ID0gbnVsbDtcclxuXHJcbiAgc3dpdGNoIChwcm9wcy5lbGVtZW50VHlwZSkge1xyXG4gICAgY2FzZSBcImlucHV0XCI6XHJcbiAgICAgIGlucHV0RWxlbWVudCA9IChcclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5JbnB1dEVsZW1lbnR9XHJcbiAgICAgICAgICB7Li4ucHJvcHMuZWxlbWVudENvbmZpZ31cclxuICAgICAgICAgIHZhbHVlPXtwcm9wcy52YWx1ZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5jaGFuZ2VkfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcInRleHRhcmVhXCI6XHJcbiAgICAgIGlucHV0RWxlbWVudCA9IChcclxuICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5JbnB1dEVsZW1lbnR9XHJcbiAgICAgICAgICB7Li4ucHJvcHMuZWxlbWVudENvbmZpZ31cclxuICAgICAgICAgIHZhbHVlPXtwcm9wcy52YWx1ZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5jaGFuZ2VkfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcInNlbGVjdFwiOlxyXG4gICAgICBpbnB1dEVsZW1lbnQgPSAoXHJcbiAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLklucHV0RWxlbWVudH1cclxuICAgICAgICAgIHsuLi5wcm9wcy5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgdmFsdWU9e3Byb3BzLnZhbHVlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmNoYW5nZWR9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3Byb3BzLmVsZW1lbnRDb25maWcub3B0aW9ucy5tYXAoKG9wdGlvbiwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2luZGV4fSB2YWx1ZT17b3B0aW9uLnZhbHVlfT5cclxuICAgICAgICAgICAgICB7b3B0aW9uLmRpc3BsYXlWYWx1ZX1cclxuICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgKTtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgaW5wdXRFbGVtZW50ID0gKFxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLklucHV0RWxlbWVudH1cclxuICAgICAgICAgIHsuLi5wcm9wcy5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgdmFsdWU9e3Byb3BzLnZhbHVlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmNoYW5nZWR9XHJcbiAgICAgICAgLz5cclxuICAgICAgKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLklucHV0fT5cclxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT17Y2xhc3Nlcy5MYWJlbH0+e3Byb3BzLmxhYmVsfTwvbGFiZWw+XHJcbiAgICAgIHtpbnB1dEVsZW1lbnR9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5wdXQ7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIklucHV0XCI6IFwiSW5wdXRfSW5wdXRfX2lacmdQXCIsXG5cdFwiTGFiZWxcIjogXCJJbnB1dF9MYWJlbF9fMlVlZVVcIixcblx0XCJJbnB1dEVsZW1lbnRcIjogXCJJbnB1dF9JbnB1dEVsZW1lbnRfX045amlOXCJcbn07XG4iLCJpbXBvcnQgaW5wdXQgZnJvbSBcIi4vSW5wdXRcIlxyXG5cclxuY29uc3QgaW5wdXRJbWFnZSA9ICggeyBjaGFuZ2UgfSApID0+IDxpbnB1dCB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXtjaGFuZ2V9IG11bHRpcGxlLz47XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbnB1dEltYWdlOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL01vZGFsLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IEJhY2tkcm9wIGZyb20gXCIuLi9CYWNrZHJvcFwiO1xyXG5cclxuY29uc3QgbW9kYWwgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8QmFja2Ryb3Agc2hvdz17cHJvcHMuc2hvd30gY2xpY2tlZD17cHJvcHMubW9kYWxDbG9zZWR9IC8+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuTW9kYWx9XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIHRyYW5zZm9ybTogcHJvcHMuc2hvdyA/IFwidHJhbnNsYXRlWSgwKVwiIDogXCJ0cmFuc2xhdGVZKC0xMDB2aClcIixcclxuICAgICAgICAgIG9wYWNpdHk6IHByb3BzLnNob3cgPyBcIjFcIiA6IFwiMFwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbW9kYWw7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIk1vZGFsXCI6IFwiTW9kYWxfTW9kYWxfXzNQeU12XCJcbn07XG4iLCJcclxuLy8gUHJvZHVjdCByZWxhdGVkIGFjdGlvbnNcclxuZXhwb3J0IGNvbnN0IFBST0RVQ1RfU1RBUlQgPSBcIlBST0RVQ1RfU1RBUlRcIjtcclxuZXhwb3J0IGNvbnN0IFBST0RVQ1RfUkVTUE9OU0UgPSBcIlBST0RVQ1RfUkVTUE9OU0VcIjtcclxuZXhwb3J0IGNvbnN0IFBST0RVQ1RfRVJST1IgPSBcIlBST0RVQ1RfRVJST1JcIjtcclxuZXhwb3J0IGNvbnN0IFBST0RVQ1RfREVMRVRFID0gXCJQUk9EVUNUX0RFTEVURVwiO1xyXG4iLCJcclxuaW1wb3J0ICogYXMgYWN0aW9uVHlwZXMgZnJvbSBcIi4vYWN0aW9uVHlwZXNcIjtcclxuaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4uLy4uLy4uL2xpYi9yZXF1ZXN0c1wiO1xyXG5pbXBvcnQgeyB1c2VTdG9yZSB9IGZyb20gXCIuLi9zdG9yZVwiO1xyXG5pbXBvcnQgeyBcclxuICAgIGFkZFByb2R1Y3RRdWVyeSxcclxuICAgIHVwZGF0ZVByb2R1Y3RRdWVyeSxcclxuICAgIGZpbmRQcm9kdWN0UXVlcnksXHJcbiAgICBkZWxldGVQcm9kdWN0UXVlcnlcclxufSBmcm9tIFwiLi4vLi4vLi4vbGliL3F1ZXJpZXMvcHJvZHVjdHNcIjtcclxuXHJcbmNvbnN0IHVzZVByb2R1Y3RBY3Rpb25zID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VTdG9yZSgpWzFdO1xyXG5cclxuICAgIC8vIGF1dGggc3RhcnQgYWN0aXZhdGUgc3Bpbm5lclxyXG4gICAgY29uc3QgcHJvZHVjdFN0YXJ0ID0gKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKGFjdGlvblR5cGVzLlBST0RVQ1RfU1RBUlQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHByb2R1Y3QgZXJyb3IgLSB0cmlnZ2VycyB3aGVuIHRoZXJlIGlzIGVycm9yIHdpdGggcHJvZHVjdCByZXF1ZXN0XHJcbiAgICBjb25zdCBwcm9kdWN0RXJyb3IgPSAoZXJyb3JzKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goYWN0aW9uVHlwZXMuUFJPRFVDVF9FUlJPUiwgZXJyb3JzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBwcm9kdWN0IHJlc3BvbnNlIGhlbHBlclxyXG4gICAgY29uc3QgcHJvZHVjdFJlc3BvbnNlID0gKGRhdGEpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChhY3Rpb25UeXBlcy5QUk9EVUNUX1JFU1BPTlNFLCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBkZWxldGUgYSBzaW5nbGUgcHJvZHVjdCBmcm9tIHN0YXRlXHJcbiAgICBjb25zdCBkZWxldGVQcm9kdWN0ID0gKHByb2R1Y3RJZCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKGFjdGlvblR5cGVzLlBST0RVQ1RfREVMRVRFLCBwcm9kdWN0SWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGF1dGggcmVzcG9uc2UgLSBnZXQgdGhlIHVzZXIncyBkYXRhXHJcbiAgICBjb25zdCBzZW5kU2F2ZVJlcXVlc3QgPSBhc3luYyAoXHJcbiAgICAgICAgcHJvZHVjdF9uYW1lLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICAgIHByaWNlLFxyXG4gICAgICAgIGltYWdlX3VybHMsXHJcbiAgICAgICAgcXVhbnRpdHksXHJcbiAgICAgICAgY2F0ZWdvcnksXHJcbiAgICAgICAgY29sb3JzLFxyXG4gICAgICAgIHNpemVzLFxyXG4gICAgICAgIGJyYW5kXHJcbiAgICApID0+IHtcclxuICAgICAgICAvLyBzdGFydCBsb2FkaW5nXHJcbiAgICAgICAgcHJvZHVjdFN0YXJ0KCk7ICBcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCByZXF1ZXN0KGFkZFByb2R1Y3RRdWVyeShcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RfbmFtZSxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgcHJpY2UsXHJcbiAgICAgICAgICAgICAgICBpbWFnZV91cmxzLFxyXG4gICAgICAgICAgICAgICAgcXVhbnRpdHksXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeSxcclxuICAgICAgICAgICAgICAgIGNvbG9ycyxcclxuICAgICAgICAgICAgICAgIHNpemVzLFxyXG4gICAgICAgICAgICAgICAgYnJhbmRcclxuICAgICAgICAgICAgKSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihyZXMuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yc1wiLCByZXMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihyZXMuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJwcm9kdWN0c1wiLCByZXMpO1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdFJlc3BvbnNlKHJlcy5kYXRhLmNyZWF0ZVByb2R1Y3QpOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTb21ldGhpbmcgd2VudCB3cm9uZ1wiLCBlcnIpO1xyXG4gICAgICAgICAgICBwcm9kdWN0RXJyb3IoZXJyKTsgXHJcbiAgICAgICAgfSAgXHJcbiAgICB9XHJcblxyXG4gICAgLy8gYXV0aCByZXNwb25zZSAtIGdldCB0aGUgdXNlcidzIGRhdGFcclxuICAgIGNvbnN0IHNlbmRVcGRhdGVSZXF1ZXN0ID0gYXN5bmMgKFxyXG4gICAgICAgIHByb2R1Y3RJZCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHByb2R1Y3RfbmFtZSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIHByaWNlLFxyXG4gICAgICAgICAgICBpbWFnZV91cmxzLFxyXG4gICAgICAgICAgICBxdWFudGl0eSxcclxuICAgICAgICAgICAgY2F0ZWdvcnksXHJcbiAgICAgICAgICAgIGNvbG9ycyxcclxuICAgICAgICAgICAgc2l6ZXMsXHJcbiAgICAgICAgICAgIGJyYW5kICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICkgPT4ge1xyXG4gICAgICAgIC8vIHN0YXJ0IGxvYWRpbmdcclxuICAgICAgICBwcm9kdWN0U3RhcnQoKTsgIFxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJlcXVlc3QodXBkYXRlUHJvZHVjdFF1ZXJ5KFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdElkLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBwcmljZSxcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZV91cmxzLFxyXG4gICAgICAgICAgICAgICAgICAgIHF1YW50aXR5LFxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9ycyxcclxuICAgICAgICAgICAgICAgICAgICBzaXplcyxcclxuICAgICAgICAgICAgICAgICAgICBicmFuZCAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICApKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHJlcy5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JzXCIsIHJlcyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHJlcy5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInVwZGF0ZVByb2R1Y3RcIiwgcmVzKTtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RSZXNwb25zZShyZXMuZGF0YS51cGRhdGUpOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTb21ldGhpbmcgd2VudCB3cm9uZ1wiLCBlcnIpO1xyXG4gICAgICAgICAgICBwcm9kdWN0RXJyb3IoZXJyKTsgXHJcbiAgICAgICAgfSAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2VuZEZpbmRSZXF1ZXN0ID0gYXN5bmMgKHF1ZXJ5KSA9PiB7XHJcbiAgICAgICAgLy8gc3RhcnQgbG9hZGluZ1xyXG4gICAgICAgIHByb2R1Y3RTdGFydCgpOyAgXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgcmVxdWVzdChmaW5kUHJvZHVjdFF1ZXJ5KCBxdWVyeSApKTtcclxuICAgICAgICAgICAgaWYocmVzLmVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvcnNcIiwgcmVzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYocmVzLmRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicHJvZHVjdHNcIiwgcmVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcHJvZHVjdFJlc3BvbnNlKHJlcy5kYXRhLnByb2R1Y3RzKTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU29tZXRoaW5nIHdlbnQgd3JvbmdcIiwgZXJyKTtcclxuICAgICAgICAgICAgcHJvZHVjdEVycm9yKGVycik7IFxyXG4gICAgICAgIH0gIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBzZW5kRGVsZXRlUmVxdWVzdCA9IGFzeW5jICggcHJvZHVjdElkICkgPT4ge1xyXG4gICAgICAgIC8vIHN0YXJ0IGxvYWRpbmdcclxuICAgICAgICBwcm9kdWN0U3RhcnQoKTsgIFxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJlcXVlc3QoZGVsZXRlUHJvZHVjdFF1ZXJ5KCBwcm9kdWN0SWQgKSk7XHJcbiAgICAgICAgICAgIGlmKHJlcy5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JzXCIsIHJlcyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHJlcy5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInByb2R1Y3RzXCIsIHJlcyk7XHJcbiAgICAgICAgICAgICAgICAvLyBkaXNwYXRjaCBQUk9EVUNUX0RFTEVURSBhY3Rpb24gdG8gcmVkdWNlclxyXG4gICAgICAgICAgICAgICAgZGVsZXRlUHJvZHVjdChyZXMuZGF0YS5kZWxldGUuX2lkKTsgXHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICAgICBcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTb21ldGhpbmcgd2VudCB3cm9uZ1wiLCBlcnIpO1xyXG4gICAgICAgICAgICBwcm9kdWN0RXJyb3IoZXJyKTsgXHJcbiAgICAgICAgfSAgXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9kdWN0U3RhcnQsXHJcbiAgICAgICAgc2VuZEZpbmRSZXF1ZXN0LFxyXG4gICAgICAgIHNlbmRTYXZlUmVxdWVzdCxcclxuICAgICAgICBzZW5kVXBkYXRlUmVxdWVzdCxcclxuICAgICAgICBzZW5kRGVsZXRlUmVxdWVzdFxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHVzZVByb2R1Y3RBY3Rpb25zOyIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmxldCBnbG9iYWxTdGF0ZSA9IHt9O1xyXG5sZXQgbGlzdGVuZXJzID0gW107XHJcbmxldCBhY3Rpb25zID0ge307XHJcblxyXG5leHBvcnQgY29uc3QgdXNlU3RvcmUgPSAoIHNob3VsZExpc3RlbiA9IHRydWUgKSA9PiB7XHJcbiAgICBjb25zdCBzZXRTdGF0ZSA9IHVzZVN0YXRlKGdsb2JhbFN0YXRlKVsxXTtcclxuICAgIFxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSAoYWN0aW9uSWRlbnRpZmllciwgcGF5bG9hZCkgPT4ge1xyXG4gICAgICAgIC8vIENoZWNrIGlmIGFjdGlvblthY3Rpb25JZGVudGlmaWVyXSBpcyBub3QgdW5kZWZpbmVkXHJcbiAgICAgICAgaWYoYWN0aW9uc1thY3Rpb25JZGVudGlmaWVyXSkge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IGFjdGlvbnNbYWN0aW9uSWRlbnRpZmllcl0oZ2xvYmFsU3RhdGUsIHBheWxvYWQpO1xyXG4gICAgICAgICAgICBnbG9iYWxTdGF0ZSA9IHsgLi4uZ2xvYmFsU3RhdGUsIC4uLm5ld1N0YXRlIH07XHJcbiAgICBcclxuICAgICAgICAgICAgZm9yKGNvbnN0IGxpc3RlbmVyIG9mIGxpc3RlbmVycykge1xyXG4gICAgICAgICAgICAgICAgbGlzdGVuZXIoZ2xvYmFsU3RhdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJBR0FJTlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihzaG91bGRMaXN0ZW4pIHtcclxuICAgICAgICAgICAgbGlzdGVuZXJzLnB1c2goc2V0U3RhdGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZihzaG91bGRMaXN0ZW4pIHtcclxuICAgICAgICAgICAgICAgIGxpc3RlbmVycyA9IGxpc3RlbmVycy5maWx0ZXIobGkgPT4gbGkgIT09IHNldFN0YXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtzZXRTdGF0ZSwgc2hvdWxkTGlzdGVuXSk7XHJcblxyXG4gICAgcmV0dXJuIFtnbG9iYWxTdGF0ZSwgZGlzcGF0Y2hdO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdFN0b3JlID0gKGluaXRpYWxTdGF0ZSwgdXNlckFjdGlvbnMpID0+IHtcclxuICAgIGlmKGluaXRpYWxTdGF0ZSkge1xyXG4gICAgICAgIGdsb2JhbFN0YXRlID0geyAuLi5nbG9iYWxTdGF0ZSwgLi4uaW5pdGlhbFN0YXRlIH07XHJcbiAgICB9XHJcbiAgICBhY3Rpb25zID0geyAuLi5hY3Rpb25zLCAuLi51c2VyQWN0aW9ucyB9O1xyXG59IiwiXHJcbmV4cG9ydCBjb25zdCBhZGRQcm9kdWN0UXVlcnkgPSAoXHJcbiAgICBwcm9kdWN0X25hbWUsXHJcbiAgICBkZXNjcmlwdGlvbixcclxuICAgIHByaWNlLFxyXG4gICAgaW1hZ2VfdXJscyxcclxuICAgIHF1YW50aXR5LFxyXG4gICAgY2F0ZWdvcnksXHJcbiAgICBjb2xvcnMsXHJcbiAgICBzaXplcyxcclxuICAgIGJyYW5kXHJcbikgPT4ge1xyXG4gICAgcmV0dXJuIHsgXHJcbiAgICAgICAgcXVlcnk6IGBcclxuICAgICAgICAgICAgbXV0YXRpb24gQ3JlYXRlUHJvZHVjdChcclxuICAgICAgICAgICAgICAgICRwcm9kdWN0X25hbWU6IFN0cmluZyEsXHJcbiAgICAgICAgICAgICAgICAkZGVzY3JpcHRpb246IFN0cmluZyEsXHJcbiAgICAgICAgICAgICAgICAkcHJpY2U6IEZsb2F0ISxcclxuICAgICAgICAgICAgICAgICRpbWFnZV91cmxzOiBbU3RyaW5nIV0hLFxyXG4gICAgICAgICAgICAgICAgJHF1YW50aXR5OiBJbnQhLFxyXG4gICAgICAgICAgICAgICAgJGNhdGVnb3J5OiBTdHJpbmchLFxyXG4gICAgICAgICAgICAgICAgJGNvbG9yczogW1N0cmluZyFdLFxyXG4gICAgICAgICAgICAgICAgJHNpemVzOiBbRmxvYXQhXSxcclxuICAgICAgICAgICAgICAgICRicmFuZDogU3RyaW5nXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlUHJvZHVjdChkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9uYW1lOiAkcHJvZHVjdF9uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAkZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2U6ICRwcmljZSxcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZV91cmxzOiAkaW1hZ2VfdXJscyxcclxuICAgICAgICAgICAgICAgICAgICBxdWFudGl0eTogJHF1YW50aXR5LFxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAkY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JzOiAkY29sb3JzLFxyXG4gICAgICAgICAgICAgICAgICAgIHNpemVzOiAkc2l6ZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgYnJhbmQ6ICRicmFuZFxyXG4gICAgICAgICAgICAgICAgfSkge1xyXG4gICAgICAgICAgICAgICAgICAgIF9pZFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VcclxuICAgICAgICAgICAgICAgICAgICBzaXplc1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yc1xyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlX3VybHNcclxuICAgICAgICAgICAgICAgICAgICBxdWFudGl0eVxyXG4gICAgICAgICAgICAgICAgICAgIGJyYW5kXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgICAgICBpbl9zdG9ja1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgYCxcclxuICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgICAgcHJvZHVjdF9uYW1lLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgcHJpY2UsXHJcbiAgICAgICAgICAgIGltYWdlX3VybHMsXHJcbiAgICAgICAgICAgIHF1YW50aXR5LFxyXG4gICAgICAgICAgICBjYXRlZ29yeSxcclxuICAgICAgICAgICAgY29sb3JzLFxyXG4gICAgICAgICAgICBzaXplcyxcclxuICAgICAgICAgICAgYnJhbmRcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVQcm9kdWN0UXVlcnkgPSAoXHJcbiAgICBfaWQsXHJcbiAgICB7XHJcbiAgICAgICAgcHJvZHVjdF9uYW1lLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICAgIHByaWNlLFxyXG4gICAgICAgIGltYWdlX3VybHMsXHJcbiAgICAgICAgcXVhbnRpdHksXHJcbiAgICAgICAgY2F0ZWdvcnksXHJcbiAgICAgICAgY29sb3JzLFxyXG4gICAgICAgIHNpemVzLFxyXG4gICAgICAgIGJyYW5kXHJcbiAgICB9XHJcbikgPT4ge1xyXG4gICAgcmV0dXJuIHsgXHJcbiAgICAgICAgcXVlcnk6IGBcclxuICAgICAgICAgICAgbXV0YXRpb24gVXBkYXRlKFxyXG4gICAgICAgICAgICAgICAgJF9pZDogSUQhLFxyXG4gICAgICAgICAgICAgICAgJHByb2R1Y3RfbmFtZTogU3RyaW5nISxcclxuICAgICAgICAgICAgICAgICRkZXNjcmlwdGlvbjogU3RyaW5nISxcclxuICAgICAgICAgICAgICAgICRwcmljZTogRmxvYXQhLFxyXG4gICAgICAgICAgICAgICAgJGltYWdlX3VybHM6IFtTdHJpbmchXSEsXHJcbiAgICAgICAgICAgICAgICAkcXVhbnRpdHk6IEludCEsXHJcbiAgICAgICAgICAgICAgICAkY2F0ZWdvcnk6IFN0cmluZyEsXHJcbiAgICAgICAgICAgICAgICAkY29sb3JzOiBbU3RyaW5nIV0sXHJcbiAgICAgICAgICAgICAgICAkc2l6ZXM6IFtGbG9hdCFdLFxyXG4gICAgICAgICAgICAgICAgJGJyYW5kOiBTdHJpbmdcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGUoX2lkOiAkX2lkLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9uYW1lOiAkcHJvZHVjdF9uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJGRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogJHByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZV91cmxzOiAkaW1hZ2VfdXJscyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVhbnRpdHk6ICRxdWFudGl0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6ICRjYXRlZ29yeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzOiAkY29sb3JzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplczogJHNpemVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmFuZDogJGJyYW5kXHJcbiAgICAgICAgICAgICAgICAgICAgfSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9uYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZV91cmxzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1YW50aXR5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyYW5kXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluX3N0b2NrXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBgLFxyXG4gICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICBfaWQsXHJcbiAgICAgICAgICAgIHByb2R1Y3RfbmFtZSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIHByaWNlLFxyXG4gICAgICAgICAgICBpbWFnZV91cmxzLFxyXG4gICAgICAgICAgICBxdWFudGl0eSxcclxuICAgICAgICAgICAgY2F0ZWdvcnksXHJcbiAgICAgICAgICAgIGNvbG9ycyxcclxuICAgICAgICAgICAgc2l6ZXMsXHJcbiAgICAgICAgICAgIGJyYW5kXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZmluZFByb2R1Y3RRdWVyeSA9ICh7bGltaXQsIHNvcnRCeX0pID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcXVlcnk6IGBcclxuICAgICAgICAgICAgcXVlcnkgUHJvZHVjdHMoJGxpbWl0OiBJbnQsICRzb3J0Qnk6IFN0cmluZykge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdHMocXVlcnk6IHtsaW1pdDogJGxpbWl0LCBzb3J0Qnk6ICRzb3J0Qnl9KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX2lkXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9uYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgICAgICBwcmljZVxyXG4gICAgICAgICAgICAgICAgICAgIHNpemVzXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JzXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VfdXJsc1xyXG4gICAgICAgICAgICAgICAgICAgIHF1YW50aXR5XHJcbiAgICAgICAgICAgICAgICAgICAgYnJhbmRcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgICAgIGluX3N0b2NrICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGAsXHJcbiAgICAgICAgdmFyaWFibGVzOiB7bGltaXQsIHNvcnRCeX1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZVByb2R1Y3RRdWVyeSA9IChfaWQpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcXVlcnk6IGBcclxuICAgICAgICAgICAgbXV0YXRpb24gRGVsZXRlKCRfaWQ6IElEISkge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlKF9pZDogJF9pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIF9pZFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgYCxcclxuICAgICAgICB2YXJpYWJsZXM6IHtfaWR9XHJcbiAgICB9XHJcbn0iLCJcclxuaW1wb3J0IGZldGNoIGZyb20gXCJub2RlLWZldGNoXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQkFTRV9VUkw9XCJodHRwOi8vbG9jYWxob3N0OjIwMjBcIjtcclxuZXhwb3J0IGNvbnN0IEdSQVBIUUxVUkwgPSBgJHtCQVNFX1VSTH0vZ3JhcGhxbGA7XHJcblxyXG5jb25zdCByZXF1ZXN0ID0gYXN5bmMgKGdyYXBocWxRdWVyeSkgPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChHUkFQSFFMVVJMLCBcclxuICAgIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KCBncmFwaHFsUXVlcnkgKVxyXG4gICAgfSlcclxuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCByZXF1ZXN0OyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImRlY2xhcmUgY29uc3QgX19ORVhUX0RBVEFfXzogYW55XG5cbmltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiwgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBwYXJzZSwgcmVzb2x2ZSwgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUHJlZmV0Y2hPcHRpb25zIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQge1xuICBleGVjT25jZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgUm91dGVyIGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHsgYWRkQmFzZVBhdGggfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcblxuZnVuY3Rpb24gaXNMb2NhbChocmVmOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgY29uc3QgdXJsID0gcGFyc2UoaHJlZiwgZmFsc2UsIHRydWUpXG4gIGNvbnN0IG9yaWdpbiA9IHBhcnNlKGdldExvY2F0aW9uT3JpZ2luKCksIGZhbHNlLCB0cnVlKVxuXG4gIHJldHVybiAoXG4gICAgIXVybC5ob3N0IHx8ICh1cmwucHJvdG9jb2wgPT09IG9yaWdpbi5wcm90b2NvbCAmJiB1cmwuaG9zdCA9PT0gb3JpZ2luLmhvc3QpXG4gIClcbn1cblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgRm9ybWF0UmVzdWx0ID0geyBocmVmOiBzdHJpbmc7IGFzPzogc3RyaW5nIH1cblxuZnVuY3Rpb24gbWVtb2l6ZWRGb3JtYXRVcmwoZm9ybWF0RnVuYzogKGhyZWY6IFVybCwgYXM/OiBVcmwpID0+IEZvcm1hdFJlc3VsdCkge1xuICBsZXQgbGFzdEhyZWY6IG51bGwgfCBVcmwgPSBudWxsXG4gIGxldCBsYXN0QXM6IHVuZGVmaW5lZCB8IG51bGwgfCBVcmwgPSBudWxsXG4gIGxldCBsYXN0UmVzdWx0OiBudWxsIHwgRm9ybWF0UmVzdWx0ID0gbnVsbFxuICByZXR1cm4gKGhyZWY6IFVybCwgYXM/OiBVcmwpID0+IHtcbiAgICBpZiAobGFzdFJlc3VsdCAmJiBocmVmID09PSBsYXN0SHJlZiAmJiBhcyA9PT0gbGFzdEFzKSB7XG4gICAgICByZXR1cm4gbGFzdFJlc3VsdFxuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IGZvcm1hdEZ1bmMoaHJlZiwgYXMpXG4gICAgbGFzdEhyZWYgPSBocmVmXG4gICAgbGFzdEFzID0gYXNcbiAgICBsYXN0UmVzdWx0ID0gcmVzdWx0XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFVybCh1cmw6IFVybCk6IHN0cmluZyB7XG4gIHJldHVybiB1cmwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcgPyBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmwpIDogdXJsXG59XG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxuXG5sZXQgb2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAob2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gb2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5jbGFzcyBMaW5rIGV4dGVuZHMgQ29tcG9uZW50PExpbmtQcm9wcz4ge1xuICBwOiBib29sZWFuXG5cbiAgY29uc3RydWN0b3IocHJvcHM6IExpbmtQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAocHJvcHMucHJlZmV0Y2gpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcbiAgfVxuXG4gIGNsZWFuVXBMaXN0ZW5lcnMgPSAoKSA9PiB7fVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYW5VcExpc3RlbmVycygpXG4gIH1cblxuICBnZXRQYXRocygpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gd2luZG93LmxvY2F0aW9uXG4gICAgY29uc3QgeyBocmVmOiBwYXJzZWRIcmVmLCBhczogcGFyc2VkQXMgfSA9IHRoaXMuZm9ybWF0VXJscyhcbiAgICAgIHRoaXMucHJvcHMuaHJlZixcbiAgICAgIHRoaXMucHJvcHMuYXNcbiAgICApXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZShwYXRobmFtZSwgcGFyc2VkSHJlZilcbiAgICByZXR1cm4gW3Jlc29sdmVkSHJlZiwgcGFyc2VkQXMgPyByZXNvbHZlKHBhdGhuYW1lLCBwYXJzZWRBcykgOiByZXNvbHZlZEhyZWZdXG4gIH1cblxuICBoYW5kbGVSZWYocmVmOiBFbGVtZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMucCAmJiBJbnRlcnNlY3Rpb25PYnNlcnZlciAmJiByZWYgJiYgcmVmLnRhZ05hbWUpIHtcbiAgICAgIHRoaXMuY2xlYW5VcExpc3RlbmVycygpXG5cbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9XG4gICAgICAgIHByZWZldGNoZWRbXG4gICAgICAgICAgdGhpcy5nZXRQYXRocygpLmpvaW4oXG4gICAgICAgICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgICAgICAgJyUnXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICB0aGlzLmNsZWFuVXBMaXN0ZW5lcnMgPSBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMocmVmLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5wcmVmZXRjaCgpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gVGhlIGZ1bmN0aW9uIGlzIG1lbW9pemVkIHNvIHRoYXQgbm8gZXh0cmEgbGlmZWN5Y2xlcyBhcmUgbmVlZGVkXG4gIC8vIGFzIHBlciBodHRwczovL3JlYWN0anMub3JnL2Jsb2cvMjAxOC8wNi8wNy95b3UtcHJvYmFibHktZG9udC1uZWVkLWRlcml2ZWQtc3RhdGUuaHRtbFxuICBmb3JtYXRVcmxzID0gbWVtb2l6ZWRGb3JtYXRVcmwoKGhyZWYsIGFzSHJlZikgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBocmVmOiBhZGRCYXNlUGF0aChmb3JtYXRVcmwoaHJlZikpLFxuICAgICAgYXM6IGFzSHJlZiA/IGFkZEJhc2VQYXRoKGZvcm1hdFVybChhc0hyZWYpKSA6IGFzSHJlZixcbiAgICB9XG4gIH0pXG5cbiAgbGlua0NsaWNrZWQgPSAoZTogUmVhY3QuTW91c2VFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHsgbm9kZU5hbWUsIHRhcmdldCB9ID0gZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gICAgaWYgKFxuICAgICAgbm9kZU5hbWUgPT09ICdBJyAmJlxuICAgICAgKCh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgICAgICBlLm1ldGFLZXkgfHxcbiAgICAgICAgZS5jdHJsS2V5IHx8XG4gICAgICAgIGUuc2hpZnRLZXkgfHxcbiAgICAgICAgKGUubmF0aXZlRXZlbnQgJiYgZS5uYXRpdmVFdmVudC53aGljaCA9PT0gMikpXG4gICAgKSB7XG4gICAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIG5ldyB0YWIgLyBuZXcgd2luZG93IGJlaGF2aW9yXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgeyBocmVmLCBhcyB9ID0gdGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZiwgdGhpcy5wcm9wcy5hcylcblxuICAgIGlmICghaXNMb2NhbChocmVmKSkge1xuICAgICAgLy8gaWdub3JlIGNsaWNrIGlmIGl0J3Mgb3V0c2lkZSBvdXIgc2NvcGUgKGUuZy4gaHR0cHM6Ly9nb29nbGUuY29tKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gd2luZG93LmxvY2F0aW9uXG4gICAgaHJlZiA9IHJlc29sdmUocGF0aG5hbWUsIGhyZWYpXG4gICAgYXMgPSBhcyA/IHJlc29sdmUocGF0aG5hbWUsIGFzKSA6IGhyZWZcblxuICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gICAgbGV0IHsgc2Nyb2xsIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gICAgfVxuXG4gICAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gICAgUm91dGVyW3RoaXMucHJvcHMucmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICAgIHNoYWxsb3c6IHRoaXMucHJvcHMuc2hhbGxvdyxcbiAgICB9KS50aGVuKChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHByZWZldGNoKG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnMpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucCB8fCB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gICAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAgIGNvbnN0IHBhdGhzID0gdGhpcy5nZXRQYXRocygpXG4gICAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAgIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAgIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICAgIFJvdXRlci5wcmVmZXRjaChwYXRoc1svKiBocmVmICovIDBdLCBwYXRoc1svKiBhc1BhdGggKi8gMV0sIG9wdGlvbnMpLmNhdGNoKFxuICAgICAgKGVycikgPT4ge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgICAgICB0aHJvdyBlcnJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIClcbiAgICBwcmVmZXRjaGVkW1xuICAgICAgcGF0aHMuam9pbihcbiAgICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgICAgJyUnXG4gICAgICApXG4gICAgXSA9IHRydWVcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgaHJlZiwgYXMgfSA9IHRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsIHRoaXMucHJvcHMuYXMpXG4gICAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgICB9XG5cbiAgICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgICBjb25zdCBwcm9wczoge1xuICAgICAgb25Nb3VzZUVudGVyOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICAgIGhyZWY/OiBzdHJpbmdcbiAgICAgIHJlZj86IGFueVxuICAgIH0gPSB7XG4gICAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuaGFuZGxlUmVmKGVsKVxuXG4gICAgICAgIGlmIChjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZikge1xuICAgICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGNoaWxkLnJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbk1vdXNlRW50ZXI6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcmVmZXRjaCh7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgICB9LFxuICAgICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgICB9XG4gICAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgdGhpcy5saW5rQ2xpY2tlZChlKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgIH1cblxuICAgIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAgIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICAgIGlmIChcbiAgICAgIHRoaXMucHJvcHMucGFzc0hyZWYgfHxcbiAgICAgIChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKVxuICAgICkge1xuICAgICAgcHJvcHMuaHJlZiA9IGFzIHx8IGhyZWZcbiAgICB9XG5cbiAgICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gICAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5LlxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgaWYgKFxuICAgICAgICBwcm9wcy5ocmVmICYmXG4gICAgICAgIHR5cGVvZiBfX05FWFRfREFUQV9fICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICBfX05FWFRfREFUQV9fLm5leHRFeHBvcnRcbiAgICAgICkge1xuICAgICAgICBwcm9wcy5ocmVmID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQocHJvcHMuaHJlZilcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBwcm9wcylcbiAgfVxufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgY29uc3Qgd2FybiA9IGV4ZWNPbmNlKGNvbnNvbGUuZXJyb3IpXG5cbiAgLy8gVGhpcyBtb2R1bGUgZ2V0cyByZW1vdmVkIGJ5IHdlYnBhY2suSWdub3JlUGx1Z2luXG4gIGNvbnN0IFByb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKVxuICBjb25zdCBleGFjdCA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMtZXhhY3QnKVxuICAvLyBAdHMtaWdub3JlIHRoZSBwcm9wZXJ0eSBpcyBzdXBwb3J0ZWQsIHdoZW4gZGVjbGFyaW5nIGl0IG9uIHRoZSBjbGFzcyBpdCBvdXRwdXRzIGFuIGV4dHJhIGJpdCBvZiBjb2RlIHdoaWNoIGlzIG5vdCBuZWVkZWQuXG4gIExpbmsucHJvcFR5cGVzID0gZXhhY3Qoe1xuICAgIGhyZWY6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKS5pc1JlcXVpcmVkLFxuICAgIGFzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSksXG4gICAgcHJlZmV0Y2g6IFByb3BUeXBlcy5ib29sLFxuICAgIHJlcGxhY2U6IFByb3BUeXBlcy5ib29sLFxuICAgIHNoYWxsb3c6IFByb3BUeXBlcy5ib29sLFxuICAgIHBhc3NIcmVmOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzY3JvbGw6IFByb3BUeXBlcy5ib29sLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5lbGVtZW50LFxuICAgICAgKHByb3BzOiBhbnksIHByb3BOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBwcm9wc1twcm9wTmFtZV1cblxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICBgV2FybmluZzogWW91J3JlIHVzaW5nIGEgc3RyaW5nIGRpcmVjdGx5IGluc2lkZSA8TGluaz4uIFRoaXMgdXNhZ2UgaGFzIGJlZW4gZGVwcmVjYXRlZC4gUGxlYXNlIGFkZCBhbiA8YT4gdGFnIGFzIGNoaWxkIG9mIDxMaW5rPmBcbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfSxcbiAgICBdKS5pc1JlcXVpcmVkLFxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbih7fSwgX3JvdXRlcltwcm9wZXJ0eV0pIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBwYXJzZSwgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSAhPT0gMCA/IGJhc2VQYXRoICsgcGF0aCA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpID09PSAwXG4gICAgPyBwYXRoLnN1YnN0cihiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xuICAgIDogcGF0aFxufVxuXG5mdW5jdGlvbiB0b1JvdXRlKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nXG59XG5cbmNvbnN0IHByZXBhcmVSb3V0ZSA9IChwYXRoOiBzdHJpbmcpID0+XG4gIHRvUm91dGUoIXBhdGggfHwgcGF0aCA9PT0gJy8nID8gJy9pbmRleCcgOiBwYXRoKVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG50eXBlIENvbXBvbmVudFJlcyA9IHsgcGFnZTogQ29tcG9uZW50VHlwZTsgbW9kOiBhbnkgfVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbn1cblxudHlwZSBSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IGFueVxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBSb3V0ZUluZm8sIEFwcD86IENvbXBvbmVudFR5cGUpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBhbnkpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoXG4gIHBhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSB8IG51bGwsXG4gIGlzU2VydmVyUmVuZGVyOiBib29sZWFuLFxuICBjYj86ICguLi5hcmdzOiBhbnkpID0+IGFueVxuKSB7XG4gIGxldCBhdHRlbXB0cyA9IGlzU2VydmVyUmVuZGVyID8gMyA6IDFcbiAgZnVuY3Rpb24gZ2V0UmVzcG9uc2UoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gZmV0Y2goXG4gICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIF9fTkVYVF9EQVRBX19cbiAgICAgICAgICBgL19uZXh0L2RhdGEvJHtfX05FWFRfREFUQV9fLmJ1aWxkSWR9JHtkZWxCYXNlUGF0aChwYXRobmFtZSl9Lmpzb25gXG4gICAgICAgICksXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgfSksXG4gICAgICB7XG4gICAgICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgICAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgICAgICAvLyA+IG9wdGlvbi5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgICAgICAvL1xuICAgICAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgICAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgfVxuICAgICkudGhlbigocmVzKSA9PiB7XG4gICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICBpZiAoLS1hdHRlbXB0cyA+IDAgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgICByZXR1cm4gZ2V0UmVzcG9uc2UoKVxuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBnZXRSZXNwb25zZSgpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHJldHVybiBjYiA/IGNiKGRhdGEpIDogZGF0YVxuICAgIH0pXG4gICAgLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgICAvLyBsb29wLlxuICAgICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgICA7KGVyciBhcyBhbnkpLmNvZGUgPSAnUEFHRV9MT0FEX0VSUk9SJ1xuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IENvbXBvbmVudFR5cGUpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBBcHA6IENvbXBvbmVudFR5cGVcbiAgICAgIHdyYXBBcHA6IChBcHA6IENvbXBvbmVudFR5cGUpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHsgQ29tcG9uZW50OiBBcHAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgYXNcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG4gICAgfVxuICB9XG5cbiAgLy8gQGRlcHJlY2F0ZWQgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgZXZlbiB0aG91Z2ggaXQncyBhIHByaXZhdGUgbWV0aG9kLlxuICBzdGF0aWMgX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgIHJldHVybiByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1cmxcbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBpZiAoIWUuc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKFxuICAgICAgZS5zdGF0ZSAmJlxuICAgICAgdGhpcy5pc1NzciAmJlxuICAgICAgZS5zdGF0ZS5hcyA9PT0gdGhpcy5hc1BhdGggJiZcbiAgICAgIHBhcnNlKGUuc3RhdGUudXJsKS5wYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZVxuICAgICkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKGUuc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IGUuc3RhdGVcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB1cmwgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBhcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdgcG9wc3RhdGVgIGV2ZW50IHRyaWdnZXJlZCBidXQgYGV2ZW50LnN0YXRlYCBkaWQgbm90IGhhdmUgYHVybGAgb3IgYGFzYCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wb3BzdGF0ZS1zdGF0ZS1lbXB0eSdcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnJlcGxhY2UodXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIHVwZGF0ZShyb3V0ZTogc3RyaW5nLCBtb2Q6IGFueSkge1xuICAgIGNvbnN0IENvbXBvbmVudDogQ29tcG9uZW50VHlwZSA9IG1vZC5kZWZhdWx0IHx8IG1vZFxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCB1cGRhdGUgdW5hdmFpbGFibGUgcm91dGU6ICR7cm91dGV9YClcbiAgICB9XG5cbiAgICBjb25zdCBuZXdEYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge1xuICAgICAgQ29tcG9uZW50LFxuICAgICAgX19OX1NTRzogbW9kLl9fTl9TU0csXG4gICAgICBfX05fU1NQOiBtb2QuX19OX1NTUCxcbiAgICB9KVxuICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSBuZXdEYXRhXG5cbiAgICAvLyBwYWdlcy9fYXBwLmpzIHVwZGF0ZWRcbiAgICBpZiAocm91dGUgPT09ICcvX2FwcCcpIHtcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChyb3V0ZSA9PT0gdGhpcy5yb3V0ZSkge1xuICAgICAgdGhpcy5ub3RpZnkobmV3RGF0YSlcbiAgICB9XG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgX3VybDogVXJsLFxuICAgIF9hczogVXJsLFxuICAgIG9wdGlvbnM6IGFueVxuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCFvcHRpb25zLl9oKSB7XG4gICAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgICAgfVxuICAgICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgICAgaWYgKFNUKSB7XG4gICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICAgIH1cblxuICAgICAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gICAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICAgICAgbGV0IHVybCA9IHR5cGVvZiBfdXJsID09PSAnb2JqZWN0JyA/IGZvcm1hdFdpdGhWYWxpZGF0aW9uKF91cmwpIDogX3VybFxuICAgICAgbGV0IGFzID0gdHlwZW9mIF9hcyA9PT0gJ29iamVjdCcgPyBmb3JtYXRXaXRoVmFsaWRhdGlvbihfYXMpIDogX2FzXG5cbiAgICAgIHVybCA9IGFkZEJhc2VQYXRoKHVybClcbiAgICAgIGFzID0gYWRkQmFzZVBhdGgoYXMpXG5cbiAgICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAgIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseSBmb3IgdGhlIFNTUiBwYWdlLlxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICAgIGlmIChfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpIHtcbiAgICAgICAgICBhcyA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KGFzKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKGFzKVxuXG4gICAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICAgIGlmICghb3B0aW9ucy5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShhcykpIHtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhc1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goYXMpXG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5LCBwcm90b2NvbCB9ID0gcGFyc2UodXJsLCB0cnVlKVxuXG4gICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpXG4gICAgICB9XG5cbiAgICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgICBpZiAoIXRoaXMudXJsSXNOZXcoYXMpKSB7XG4gICAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSlcbiAgICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgICAgY29uc3QgeyBwYXRobmFtZTogYXNQYXRobmFtZSB9ID0gcGFyc2UoYXMpXG4gICAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgICAgKVxuXG4gICAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgIGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYCBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KFxuICAgICAgICAgICAgICBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCArXG4gICAgICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbmNvbXBhdGlibGUtaHJlZi1hc2BcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICAgIC8vIElmIHNoYWxsb3cgaXMgdHJ1ZSBhbmQgdGhlIHJvdXRlIGV4aXN0cyBpbiB0aGUgcm91dGVyIGNhY2hlIHdlIHJldXNlIHRoZSBwcmV2aW91cyByZXN1bHRcbiAgICAgIHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBzaGFsbG93KS50aGVuKFxuICAgICAgICAocm91dGVJbmZvKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBlcnJvciB9ID0gcm91dGVJbmZvXG5cbiAgICAgICAgICBpZiAoZXJyb3IgJiYgZXJyb3IuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlSW5mbykudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGFzKVxuICAgICAgICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgcmVqZWN0XG4gICAgICApXG4gICAgfSlcbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICB9LFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8Um91dGVJbmZvPiB7XG4gICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgLy8gSWYgdGhlcmUgaXMgYSBzaGFsbG93IHJvdXRlIHRyYW5zaXRpb24gcG9zc2libGVcbiAgICAvLyBJZiB0aGUgcm91dGUgaXMgYWxyZWFkeSByZW5kZXJlZCBvbiB0aGUgc2NyZWVuLlxuICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlRXJyb3IgPSAoXG4gICAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgICApID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBpZiAoZXJyLmNvZGUgPT09ICdQQUdFX0xPQURfRVJST1InIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgICAgIC8vIFNvLCB3ZSBuZWVkIHRvIG1hcmsgaXQgYXMgYSBjYW5jZWxsZWQgZXJyb3IgYW5kIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXNvbHZlKFxuICAgICAgICAgIHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCB9ID0gcmVzXG4gICAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbzogUm91dGVJbmZvID0geyBDb21wb25lbnQsIGVyciB9XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICB9IGFzIGFueSkudGhlbihcbiAgICAgICAgICAgICAgICAgIChwcm9wcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgKGdpcEVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLFxuICAgICAgICAgICAgICAgICAgICAgIGdpcEVyclxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVyclxuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbylcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pIGFzIFByb21pc2U8Um91dGVJbmZvPlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBoYW5kbGVFcnJvcihlcnIsIHRydWUpKVxuICAgICAgICApXG4gICAgICB9KSBhcyBQcm9taXNlPFJvdXRlSW5mbz5cbiAgICB9XG5cbiAgICByZXR1cm4gKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmIChjYWNoZWRSb3V0ZUluZm8pIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmUoY2FjaGVkUm91dGVJbmZvKVxuICAgICAgfVxuXG4gICAgICB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKFxuICAgICAgICAocmVzKSA9PlxuICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSxcbiAgICAgICAgcmVqZWN0XG4gICAgICApXG4gICAgfSkgYXMgUHJvbWlzZTxSb3V0ZUluZm8+KVxuICAgICAgLnRoZW4oKHJvdXRlSW5mbzogUm91dGVJbmZvKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldERhdGE8Um91dGVJbmZvPigoKSA9PlxuICAgICAgICAgIF9fTl9TU0dcbiAgICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShhcylcbiAgICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGFzKVxuICAgICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgICApXG4gICAgICAgICkudGhlbigocHJvcHMpID0+IHtcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGhhbmRsZUVycm9yKVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHByb3RvY29sIH0gPSBwYXJzZSh1cmwpXG5cbiAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBjb25zdCByb3V0ZSA9IGRlbEJhc2VQYXRoKHRvUm91dGUocGF0aG5hbWUpKVxuICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKHVybCwgZGVsQmFzZVBhdGgoYXNQYXRoKSksXG4gICAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICAgIF0pLnRoZW4oKCkgPT4gcmVzb2x2ZSgpLCByZWplY3QpXG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPENvbXBvbmVudFJlcz4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuICAgIHJvdXRlID0gZGVsQmFzZVBhdGgocm91dGUpXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEgPSAoYXNQYXRoOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4gPT4ge1xuICAgIGNvbnN0IHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHBhcnNlKGFzUGF0aCkucGF0aG5hbWUhKVxuXG4gICAgcmV0dXJuIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbcGF0aG5hbWVdXG4gICAgICA/IFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1twYXRobmFtZV0pXG4gICAgICA6IGZldGNoTmV4dERhdGEoXG4gICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICB0aGlzLmlzU3NyLFxuICAgICAgICAgIChkYXRhKSA9PiAodGhpcy5zZGNbcGF0aG5hbWVdID0gZGF0YSlcbiAgICAgICAgKVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEgPSAoYXNQYXRoOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4gPT4ge1xuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2UoYXNQYXRoLCB0cnVlKVxuICAgIHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHBhdGhuYW1lISlcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgcXVlcnksIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwKVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIGNvbnN0IGUgPSBuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpXG4gICAgICA7KGUgYXMgYW55KS5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlLCBhcylcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsIi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IHsgcG9zOiBudW1iZXI7IHJlcGVhdDogYm9vbGVhbiB9IH1cbn0ge1xuICAvLyBFc2NhcGUgYWxsIGNoYXJhY3RlcnMgdGhhdCBjb3VsZCBiZSBjb25zaWRlcmVkIFJlZ0V4XG4gIGNvbnN0IGVzY2FwZWRSb3V0ZSA9IGVzY2FwZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogeyBwb3M6IG51bWJlcjsgcmVwZWF0OiBib29sZWFuIH0gfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IGVzY2FwZWRSb3V0ZS5yZXBsYWNlKFxuICAgIC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csXG4gICAgKF8sICQxKSA9PiB7XG4gICAgICBjb25zdCBpc09wdGlvbmFsID0gL15cXFxcXFxbLipcXFxcXFxdJC8udGVzdCgkMSlcbiAgICAgIGlmIChpc09wdGlvbmFsKSB7XG4gICAgICAgICQxID0gJDEuc2xpY2UoMiwgLTIpXG4gICAgICB9XG4gICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpXG4gICAgICBpZiAoaXNDYXRjaEFsbCkge1xuICAgICAgICAkMSA9ICQxLnNsaWNlKDYpXG4gICAgICB9XG4gICAgICBncm91cHNbXG4gICAgICAgICQxXG4gICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgIC5yZXBsYWNlKC9cXFxcKFt8XFxcXHt9KClbXFxdXiQrKj8uLV0pL2csICckMScpXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIF0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQ6IGlzQ2F0Y2hBbGwgfVxuICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGwgPyAoaXNPcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgIH1cbiAgKVxuXG4gIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZTogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoXG4gICAgICAvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLFxuICAgICAgKF8sICQxKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSlcbiAgICAgICAgY29uc3Qga2V5ID0gJDFcbiAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgICAucmVwbGFjZSgvXlxcLnszfS8sICcnKVxuXG4gICAgICAgIHJldHVybiBpc0NhdGNoQWxsXG4gICAgICAgICAgPyBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+Lis/KWBcbiAgICAgICAgICA6IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT5bXi9dKz8pYFxuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoJ14nICsgcGFyYW1ldGVyaXplZFJvdXRlICsgJyg/Oi8pPyQnLCAnaScpLFxuICAgIGdyb3VwcyxcbiAgICBuYW1lZFJlZ2V4OiBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZVxuICAgICAgPyBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGBcbiAgICAgIDogdW5kZWZpbmVkLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBmb3JtYXQsIFVSTEZvcm1hdE9wdGlvbnMsIFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnLi4vLi4vbGliL2xvYWQtZW52LWNvbmZpZydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogYW55XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgaW50ZXJmYWNlLW5hbWVcbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgc3RhdGljTWFya3VwOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZGV2RmlsZXM6IHN0cmluZ1tdXG4gIGZpbGVzOiBzdHJpbmdbXVxuICBsb3dQcmlvcml0eUZpbGVzOiBzdHJpbmdbXVxuICBwb2x5ZmlsbEZpbGVzOiBzdHJpbmdbXVxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGh0bWxQcm9wczogYW55XG4gIGJvZHlUYWdzOiBhbnlbXVxuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2Vcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgdXJsOiBVcmxPYmplY3QsXG4gIG9wdGlvbnM/OiBVUkxGb3JtYXRPcHRpb25zXG4pOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0KHVybCBhcyBVUkwsIG9wdGlvbnMpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvRGFzaGJvYXJkL0Rhc2hib2FyZFwiO1xyXG5cclxuY29uc3QgaW5kZXhQYWdlID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxEYXNoYm9hcmQgLz5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4UGFnZTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZS1mZXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXMtZXhhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cmxcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==