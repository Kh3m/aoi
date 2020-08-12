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
var _jsxFileName = "D:\\Projects\\Github Projects\\aoi\\dashboard\\components\\Dashboard\\Contents\\CarouselForm\\CarouselForm.js";
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
var _jsxFileName = "D:\\Projects\\Github Projects\\aoi\\dashboard\\components\\Dashboard\\Contents\\Contents.js";
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
var _jsxFileName = "D:\\Projects\\Github Projects\\aoi\\dashboard\\components\\Dashboard\\Contents\\DashboardSummary\\DashboardSummary.js";
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
/* harmony import */ var _lib_http_products__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../lib/http/products */ "./lib/http/products.js");
var _jsxFileName = "D:\\Projects\\Github Projects\\aoi\\dashboard\\components\\Dashboard\\Contents\\ProductForm\\ProductForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







 // lib


const productList = [{
  name: "Air Zoom Pegasus 37",
  price: 120.0,
  image: "/images/airzoom.jpg",
  quantity: 10,
  category: "Men",
  colors: ["white", "blue", "red"],
  sizes: ["39", "40", "42"],
  brand: "Addidas"
}, {
  name: "Libron Whitness",
  brand: "Nike",
  price: "57.33",
  image: "/images/running.jpg",
  quantity: 10,
  category: "Men",
  colors: ["white", "blue", "red"],
  sizes: ["39", "40", "42"]
}, {
  name: "Flex Experience Run 9",
  brand: "Nike",
  price: "65.00",
  image: "/images/flex.jpg",
  quantity: 10,
  category: "Men",
  colors: ["white", "blue", "red"],
  sizes: ["39", "40", "42"]
}, {
  name: "Cloudfeel Knit Slip-On Sneaker",
  brand: "Cole Haan",
  price: "100.00",
  image: "/images/cloudfeel.jpg",
  quantity: 10,
  category: "Men",
  colors: ["white", "blue", "red"],
  sizes: ["39", "40", "42"]
}, {
  name: "Revolution 5",
  brand: "Nike",
  price: "65.00",
  image: "/images/revolution.jpg",
  quantity: 10,
  category: "Men",
  colors: ["white", "blue", "red"],
  sizes: ["39", "40", "42"]
}, {
  name: "Cloudfeel Knit Slip-On Sneaker",
  brand: "Cole Haan",
  price: "100.00",
  image: "/images/cloudfeel.jpg",
  quantity: 10,
  category: "Men",
  colors: ["white", "blue", "red"],
  sizes: ["39", "40", "42"]
}];

<<<<<<< HEAD
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
=======
class ProductForm extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
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
>>>>>>> cbc0cfcab8f285809a94661d9a9d8c5a63e3f4f0
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
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    console.log("loading", productLoading);
  }); // product http effects lib

  const {
    sendSaveRequest,
    productLoading
  } = Object(_lib_http_products__WEBPACK_IMPORTED_MODULE_7__["default"])(); //Input Change Handler

  const inputChangeHandler = (event, inputIdentifier) => {
    const updatedProductForm = _objectSpread({}, productForm);

    const updatedFormElement = _objectSpread({}, updatedProductForm[inputIdentifier]);

    updatedFormElement.value = event.target.value;
    updatedProductForm[inputIdentifier] = updatedFormElement;
    setProductForm(updatedProductForm);
  }; // File Change Handler


<<<<<<< HEAD
  const onFileChangeHandler = event => {
    console.log(event.target.files);
    const formData = new FormData();
=======
      const product = {
        productData: formData
      };
      product.productData.sizes = product.productData.sizes.split(/[;,]/gim).map(v => Number.parseFloat(v));
      product.productData.colors = product.productData.colors.split(/[;,]/gim); // destructure product data
>>>>>>> cbc0cfcab8f285809a94661d9a9d8c5a63e3f4f0

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
    const formData = {};

<<<<<<< HEAD
    for (let inputElementIdentifier in productForm) {
      formData[inputElementIdentifier] = productForm[inputElementIdentifier].value;
=======
    if (this.props.update) {
      search = __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226,
          columnNumber: 9
        }
      }, __jsx("form", {
        className: _productForm_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.search,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 11
        }
      }, __jsx("input", {
        type: "text",
        placeholder: "Enter Product Code",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 13
        }
      }), __jsx("input", {
        type: "submit",
        value: "Search",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 13
        }
      })));
>>>>>>> cbc0cfcab8f285809a94661d9a9d8c5a63e3f4f0
    }

    const product = {
      productData: formData
    };
    product.productData.sizes = product.productData.sizes.split(/[;,]/img).map(v => Number.parseFloat(v));
    product.productData.colors = product.productData.colors.split(/[;,]/img); // destructure product data

    const {
      productData
    } = product; // check the state of product form (add / update)

    if (props.title === "Update Product") {
      console.log("Update Product", productData);
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
<<<<<<< HEAD
        lineNumber: 169,
=======
        lineNumber: 243,
>>>>>>> cbc0cfcab8f285809a94661d9a9d8c5a63e3f4f0
        columnNumber: 7
      }
    }, __jsx("form", {
      className: _productForm_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.search,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
<<<<<<< HEAD
        lineNumber: 170,
=======
        lineNumber: 244,
>>>>>>> cbc0cfcab8f285809a94661d9a9d8c5a63e3f4f0
        columnNumber: 9
      }
    }, __jsx("input", {
      type: "text",
      placeholder: "Enter Product Code",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
<<<<<<< HEAD
        lineNumber: 171,
=======
        lineNumber: 245,
>>>>>>> cbc0cfcab8f285809a94661d9a9d8c5a63e3f4f0
        columnNumber: 11
      }
    }), __jsx("input", {
      type: "submit",
      value: "Search",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
<<<<<<< HEAD
        lineNumber: 172,
        columnNumber: 11
      }
    })));
=======
        lineNumber: 247,
        columnNumber: 11
      }
    }, formElementArray.map((formElement, index) => __jsx(_UI_Input_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: formElement.id,
      elementType: formElement.config.elementType,
      elementConfig: formElement.config.elementConfig,
      value: formElement.config.value,
      changed: event => this.inputChangeHandler(event, formElement.id),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 15
      }
    })), __jsx(_UI_Input_InputImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
      change: this.onFileChangeHandler,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 13
      }
    }), __jsx(_UI_ImageCards_ImageCards__WEBPACK_IMPORTED_MODULE_5__["default"], {
      image_urls: this.state.image_urls,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 13
      }
    }), __jsx(_UI_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      clicked: this.addProductHandler,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 13
      }
    }, this.props.title))));
>>>>>>> cbc0cfcab8f285809a94661d9a9d8c5a63e3f4f0
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
      lineNumber: 186,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _productForm_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Form,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 7
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 9
    }
  }, props.title), search, __jsx("form", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
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
      lineNumber: 192,
      columnNumber: 13
    }
  })), __jsx(_UI_Input_InputImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    change: onFileChangeHandler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 11
    }
  }), __jsx(_UI_ImageCards_ImageCards__WEBPACK_IMPORTED_MODULE_5__["default"], {
    image_urls: imageUrls,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 11
    }
  }), __jsx(_UI_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    clicked: addProductHandler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
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
var _jsxFileName = "D:\\Projects\\Github Projects\\aoi\\dashboard\\components\\Dashboard\\Contents\\Products\\Product\\Product.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const product = props => {
  return __jsx("tr", {
    className: _Product_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Product,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: props.product.image,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  })), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, props.product.name), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, "$", props.product.price), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, props.product.colors.join(", ")), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, props.product.sizes.join(", ")), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, props.product.category), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, props.product.brand), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, props.product.quantity), __jsx("td", {
    className: _Product_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Action,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx(_UI_Button_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    clicked: props.showUpdateModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, "Update"), __jsx("button", {
    className: _Product_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Delete,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
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
var _jsxFileName = "D:\\Projects\\Github Projects\\aoi\\dashboard\\components\\Dashboard\\Contents\\Products\\Products.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






 // productData.name,
// productData.description,
// Number.parseFloat(productData.price),
// ["productData.image_urls"],
// Number.parseInt(productData.quantity),
// productData.category,
// productData.colors,
// productData.sizes,
// productData.brand

const productList = [{
  name: "Air Zoom Pegasus 37",
  price: 120.0,
  image: "/images/airzoom.jpg",
  quantity: 10,
  category: "Men",
  colors: ["white", "blue", "red"],
  sizes: ["39", "40", "42"],
  brand: "Addidas"
}, {
  name: "Libron Whitness",
  brand: "Nike",
  price: "57.33",
  image: "/images/running.jpg",
  quantity: 10,
  category: "Men",
  colors: ["white", "blue", "red"],
  sizes: ["39", "40", "42"]
}, {
  name: "Flex Experience Run 9",
  brand: "Nike",
  price: "65.00",
  image: "/images/flex.jpg",
  quantity: 10,
  category: "Men",
  colors: ["white", "blue", "red"],
  sizes: ["39", "40", "42"]
}, {
  name: "Cloudfeel Knit Slip-On Sneaker",
  brand: "Cole Haan",
  price: "100.00",
  image: "/images/cloudfeel.jpg",
  quantity: 10,
  category: "Men",
  colors: ["white", "blue", "red"],
  sizes: ["39", "40", "42"]
}, {
  name: "Revolution 5",
  brand: "Nike",
  price: "65.00",
  image: "/images/revolution.jpg",
  quantity: 10,
  category: "Men",
  colors: ["white", "blue", "red"],
  sizes: ["39", "40", "42"]
}, {
  name: "Cloudfeel Knit Slip-On Sneaker",
  brand: "Cole Haan",
  price: "100.00",
  image: "/images/cloudfeel.jpg",
  quantity: 10,
  category: "Men",
  colors: ["white", "blue", "red"],
  sizes: ["39", "40", "42"]
}];

const products = () => {
  const {
    0: showModal,
    1: setShowModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: modalContent,
    1: setModalContent
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);

  const modalCloseHanlder = () => {
    setShowModal(!showModal);
  };

  const showAddProductModal = () => {
    setModalContent("add");
    setShowModal(true);
  };

  const showUpdateProductModal = () => {
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
          lineNumber: 103,
          columnNumber: 9
        }
      }, __jsx(_ProductForm_ProductForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
        title: "Add Product",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
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
          lineNumber: 110,
          columnNumber: 9
        }
      }, __jsx(_ProductForm_ProductForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
        title: "Update Product",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
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
      lineNumber: 119,
      columnNumber: 5
    }
  }, modal, __jsx("div", {
    className: _Products_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Products,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _Products_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Top,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 11
    }
  }, "Manage Products"), __jsx(_UI_Button_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    clicked: showAddProductModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 11
    }
  }, "Add Product")), __jsx("table", {
    className: _Products_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Table,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 9
    }
  }, __jsx("thead", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 11
    }
  }, __jsx("tr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 13
    }
  }, __jsx("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 15
    }
  }, "Image"), __jsx("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 15
    }
  }, "Name"), __jsx("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 15
    }
  }, "Price"), __jsx("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 15
    }
  }, "Colors"), __jsx("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 15
    }
  }, "Sizes"), __jsx("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 15
    }
  }, "Category"), __jsx("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 15
    }
  }, "Brand"), __jsx("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 15
    }
  }, "Quantity"), __jsx("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 15
    }
  }, "Action"))), __jsx("tbody", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 11
    }
  }, productList.map((product, index) => __jsx(_Product_Product__WEBPACK_IMPORTED_MODULE_3__["default"], {
    product: product,
    key: index,
    showUpdateModal: showUpdateProductModal,
    productId: index,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
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
var _jsxFileName = "D:\\Projects\\Github Projects\\aoi\\dashboard\\components\\Dashboard\\DashCards\\Overviews\\Overview\\Overview.js";
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
var _jsxFileName = "D:\\Projects\\Github Projects\\aoi\\dashboard\\components\\Dashboard\\DashCards\\Overviews\\Overviews.js";
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
var _jsxFileName = "D:\\Projects\\Github Projects\\aoi\\dashboard\\components\\Dashboard\\Dashboard.js";
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
var _jsxFileName = "D:\\Projects\\Github Projects\\aoi\\dashboard\\components\\Dashboard\\SideBar\\SideBar.js";
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
var _jsxFileName = "D:\\Projects\\Github Projects\\aoi\\dashboard\\components\\Dashboard\\ToolBar\\ToolBar.js";
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
var _jsxFileName = "D:\\Projects\\Github Projects\\aoi\\dashboard\\components\\Logo.js";

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
  }, ".logo.jsx-1117299589 h2.jsx-1117299589{color:#1b222b;font-family:\"Open sans\",san-serif;font-weight:700;color:white;}.red.jsx-1117299589{color:#0654b3;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0c1xcR2l0aHViIFByb2plY3RzXFxhb2lcXGRhc2hib2FyZFxcY29tcG9uZW50c1xcTG9nby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFja0IsQUFHeUIsQUFNQSxjQUxxQixBQU1yQyxrQ0FMa0IsZ0JBQ0osWUFDZCIsImZpbGUiOiJEOlxcUHJvamVjdHNcXEdpdGh1YiBQcm9qZWN0c1xcYW9pXFxkYXNoYm9hcmRcXGNvbXBvbmVudHNcXExvZ28uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmNvbnN0IGxvZ28gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxyXG4gICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgIDxhPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImxvZ29cIj5cclxuICAgICAgICAgICAgYXVzdGluPHNwYW4gY2xhc3NOYW1lPVwicmVkXCI+RXhwPC9zcGFuPnJlc3MuY29tXHJcbiAgICAgICAgICA8L2gyPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5sb2dvIGgyIHtcclxuICAgICAgICAgIGNvbG9yOiAjMWIyMjJiO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiT3BlbiBzYW5zXCIsIHNhbi1zZXJpZjtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yZWQge1xyXG4gICAgICAgICAgY29sb3I6ICMwNjU0YjM7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9nbztcclxuIl19 */\n/*@ sourceURL=D:\\\\Projects\\\\Github Projects\\\\aoi\\\\dashboard\\\\components\\\\Logo.js */"));
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
var _jsxFileName = "D:\\Projects\\Github Projects\\aoi\\dashboard\\components\\Spacer.js";

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
  }, ".spacer.jsx-4026738121{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0c1xcR2l0aHViIFByb2plY3RzXFxhb2lcXGRhc2hib2FyZFxcY29tcG9uZW50c1xcU3BhY2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtrQixBQUd1Qix1RUFDZCIsImZpbGUiOiJEOlxcUHJvamVjdHNcXEdpdGh1YiBQcm9qZWN0c1xcYW9pXFxkYXNoYm9hcmRcXGNvbXBvbmVudHNcXFNwYWNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IHNwYWNlciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZXJcIj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5zcGFjZXIge1xyXG4gICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNwYWNlcjtcclxuIl19 */\n/*@ sourceURL=D:\\\\Projects\\\\Github Projects\\\\aoi\\\\dashboard\\\\components\\\\Spacer.js */"));
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
var _jsxFileName = "D:\\Projects\\Github Projects\\aoi\\dashboard\\components\\UI\\Backdrop.js";

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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0c1xcR2l0aHViIFByb2plY3RzXFxhb2lcXGRhc2hib2FyZFxcY29tcG9uZW50c1xcVUlcXEJhY2tkcm9wLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtrQixBQUcwQixlQUNKLFdBQ0MsWUFDeUIsa0NBQzFCLFdBQ0gsUUFDRSxVQUMyQixxQ0FDdkMiLCJmaWxlIjoiRDpcXFByb2plY3RzXFxHaXRodWIgUHJvamVjdHNcXGFvaVxcZGFzaGJvYXJkXFxjb21wb25lbnRzXFxVSVxcQmFja2Ryb3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBiYWNrZHJvcCA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkJhY2tkcm9wXCIgb25DbGljaz17cHJvcHMuY2xpY2tlZH0+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuQmFja2Ryb3Age1xyXG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTMpO1xyXG4gICAgICAgICAgei1pbmRleDogOTA7XHJcbiAgICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiAke3Byb3BzLnNob3cgPyBcImJsb2NrXCIgOiBcIm5vbmVcIn07XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYmFja2Ryb3A7XHJcbiJdfQ== */
/*@ sourceURL=D:\\Projects\\Github Projects\\aoi\\dashboard\\components\\UI\\Backdrop.js */`));
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
var _jsxFileName = "D:\\Projects\\Github Projects\\aoi\\dashboard\\components\\UI\\Button\\Button.js";
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
<<<<<<< HEAD
/* harmony import */ var _lib_requests__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/requests */ "./lib/requests.js");
var _jsxFileName = "C:\\Users\\Kh3m\\Documents\\projects\\austinExpress\\dashboard\\components\\UI\\ImageCards\\ImageCards.js";
=======
var _jsxFileName = "D:\\Projects\\Github Projects\\aoi\\dashboard\\components\\UI\\ImageCards\\ImageCards.js";
>>>>>>> cbc0cfcab8f285809a94661d9a9d8c5a63e3f4f0

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
var _jsxFileName = "D:\\Projects\\Github Projects\\aoi\\dashboard\\components\\UI\\Input\\Input.js";
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
var _jsxFileName = "D:\\Projects\\Github Projects\\aoi\\dashboard\\components\\UI\\Input\\InputImage.js";

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
var _jsxFileName = "D:\\Projects\\Github Projects\\aoi\\dashboard\\components\\UI\\Modal\\Modal.js";
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

/***/ "./lib/http/products.js":
/*!******************************!*\
  !*** ./lib/http/products.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requests */ "./lib/requests.js");
/* harmony import */ var _queries_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../queries/products */ "./lib/queries/products.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




const useProductHttp = () => {
  const {
    0: productLoading,
    1: setProductLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);

  const sendSaveRequest = async (product_name, description, price, image_urls, quantity, category, colors, sizes, brand = "") => {
    try {
      setProductLoading(true);
      const res = await Object(_requests__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_queries_products__WEBPACK_IMPORTED_MODULE_1__["addProductQuery"])(product_name, description, price, image_urls, quantity, category, colors, sizes, brand));
      console.log("product res", res);
      setProductLoading(false);
    } catch (err) {
      console.log("Something went wrong", err);
      setProductLoading(false);
    }
  };

  return {
    productLoading,
    sendSaveRequest
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useProductHttp);

/***/ }),

/***/ "./lib/queries/products.js":
/*!*********************************!*\
  !*** ./lib/queries/products.js ***!
  \*********************************/
/*! exports provided: addProductQuery, updateProductQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProductQuery", function() { return addProductQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateProductQuery", function() { return updateProductQuery; });
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
                    productId
                    product_name
                    description
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
const updateProductQuery = `

`;

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
var _jsxFileName = "D:\\Projects\\Github Projects\\aoi\\dashboard\\pages\\index.js";
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

module.exports = __webpack_require__(/*! D:\Projects\Github Projects\aoi\dashboard\pages\index.js */"./pages/index.js");


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
<<<<<<< HEAD
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rhc2hib2FyZC9Db250ZW50cy9DYXJvdXNlbEZvcm0vQ2Fyb3VzZWxGb3JtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGFzaGJvYXJkL0NvbnRlbnRzL0Nhcm91c2VsRm9ybS9DYXJvdXNlbEZvcm0ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rhc2hib2FyZC9Db250ZW50cy9Db250ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rhc2hib2FyZC9Db250ZW50cy9Db250ZW50cy5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGFzaGJvYXJkL0NvbnRlbnRzL0Rhc2hib2FyZFN1bW1hcnkvRGFzaGJvYXJkU3VtbWFyeS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rhc2hib2FyZC9Db250ZW50cy9EYXNoYm9hcmRTdW1tYXJ5L0Rhc2hib2FyZFN1bW1hcnkubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rhc2hib2FyZC9Db250ZW50cy9Qcm9kdWN0Rm9ybS9Qcm9kdWN0Rm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rhc2hib2FyZC9Db250ZW50cy9Qcm9kdWN0Rm9ybS9wcm9kdWN0Rm9ybS5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGFzaGJvYXJkL0Rhc2hDYXJkcy9PdmVydmlld3MvT3ZlcnZpZXcvT3ZlcnZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EYXNoYm9hcmQvRGFzaENhcmRzL092ZXJ2aWV3cy9PdmVydmlldy9PdmVydmlldy5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGFzaGJvYXJkL0Rhc2hDYXJkcy9PdmVydmlld3MvT3ZlcnZpZXdzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGFzaGJvYXJkL0Rhc2hDYXJkcy9PdmVydmlld3MvT3ZlcnZpZXdzLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EYXNoYm9hcmQvRGFzaGJvYXJkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGFzaGJvYXJkL0Rhc2hib2FyZC5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGFzaGJvYXJkL1NpZGVCYXIvU2lkZUJhci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rhc2hib2FyZC9TaWRlQmFyL1NpZGVCYXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rhc2hib2FyZC9Ub29sQmFyL1Rvb2xCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EYXNoYm9hcmQvVG9vbEJhci9Ub29sQmFyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dvLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU3BhY2VyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvQnV0dG9uL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL0J1dHRvbi9CdXR0b24ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL0ltYWdlQ2FyZHMvSW1hZ2VDYXJkcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL0ltYWdlQ2FyZHMvSW1hZ2VDYXJkcy5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvSW5wdXQvSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9JbnB1dC9JbnB1dC5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvSW5wdXQvSW5wdXRJbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaHR0cC9wcm9kdWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvcXVlcmllcy9wcm9kdWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvcmVxdWVzdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5vZGUtZmV0Y2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlcy1leGFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXJsXCIiXSwibmFtZXMiOlsiY2Fyb3VzZWxzIiwiaW1hZ2UiLCJ0aXRsZSIsIkNhcm91c2VsRm9ybSIsIkNvbXBvbmVudCIsImVsZW1lbnRUeXBlIiwiZWxlbWVudENvbmZpZyIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwicmVuZGVyIiwiY2xhc3NlcyIsIkZvcm1zV3JhcHBlciIsImNvbnRlbnRzIiwicHJvcHMiLCJjb250ZW50IiwiQ29udGVudHMiLCJTaWRlQmFyUmVwbGFjZSIsIk1haW5Db250ZW50cyIsImRhc2hib2FyZFN1bW1hcnkiLCJwcm9kdWN0Rm9ybSIsInNldFByb2R1Y3RGb3JtIiwidXNlU3RhdGUiLCJuYW1lIiwicHJpY2UiLCJxdWFudGl0eSIsInNpemVzIiwiY29sb3JzIiwiY2F0ZWdvcnkiLCJvcHRpb25zIiwiZGlzcGxheVZhbHVlIiwiYnJhbmQiLCJkZXNjcmlwdGlvbiIsImltYWdlVXJscyIsInNldEltYWdlVXJscyIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJwcm9kdWN0TG9hZGluZyIsInNlbmRTYXZlUmVxdWVzdCIsInVzZVByb2R1Y3RIdHRwIiwiaW5wdXRDaGFuZ2VIYW5kbGVyIiwiZXZlbnQiLCJpbnB1dElkZW50aWZpZXIiLCJ1cGRhdGVkUHJvZHVjdEZvcm0iLCJ1cGRhdGVkRm9ybUVsZW1lbnQiLCJ0YXJnZXQiLCJvbkZpbGVDaGFuZ2VIYW5kbGVyIiwiZmlsZXMiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiZmlsZSIsImFwcGVuZCIsImZldGNoIiwiQkFTRV9VUkwiLCJtZXRob2QiLCJib2R5IiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiY2F0Y2giLCJlcnIiLCJhZGRQcm9kdWN0SGFuZGxlciIsInByZXZlbnREZWZhdWx0IiwiaW5wdXRFbGVtZW50SWRlbnRpZmllciIsInByb2R1Y3QiLCJwcm9kdWN0RGF0YSIsInNwbGl0IiwibWFwIiwidiIsIk51bWJlciIsInBhcnNlRmxvYXQiLCJwYXJzZUludCIsInNlYXJjaCIsInVwZGF0ZSIsImZvcm1FbGVtZW50QXJyYXkiLCJrZXkiLCJwdXNoIiwiaWQiLCJjb25maWciLCJGb3JtIiwiZm9ybUVsZW1lbnQiLCJpbmRleCIsIm92ZXJ2aWV3IiwiT3ZlcnZpZXciLCJwcm9wZXJ0aWVzIiwiY2FwdGlvbiIsIm92ZXJ2aWV3cyIsIk92ZXJ2aWV3cyIsImRhc2hvYXJkIiwiY29udGVudFN0YXRlIiwic2V0Q29udGVudFN0YXRlIiwiY2hhbmdlQ29udGVudEhhbmxkZXIiLCJkYXNoYm9hcmQiLCJsaW5rcyIsImljb24iLCJzaWRlQmFyIiwic2lkZU5hdiIsIm5hdiIsImNsaWNrZWQiLCJ0b29sQmFyIiwibG9nb1dyYXBwZXIiLCJOYXYiLCJsb2dvIiwic3BhY2VyIiwiYnV0dG9uIiwiQnV0dG9uIiwiY2hpbGRyZW4iLCJpbWFnZUNhcmRzIiwiaW1hZ2VfdXJscyIsIlByb2R1Y3RJbWFnZUNvbnRhaW5lciIsImltYWdlX3VybCIsIlByb2R1Y3RJbWFnZSIsImlucHV0IiwiaW5wdXRFbGVtZW50IiwiSW5wdXRFbGVtZW50IiwiY2hhbmdlZCIsIm9wdGlvbiIsIklucHV0IiwiTGFiZWwiLCJsYWJlbCIsImlucHV0SW1hZ2UiLCJjaGFuZ2UiLCJzZXRQcm9kdWN0TG9hZGluZyIsInByb2R1Y3RfbmFtZSIsInJlcXVlc3QiLCJhZGRQcm9kdWN0UXVlcnkiLCJxdWVyeSIsInZhcmlhYmxlcyIsInVwZGF0ZVByb2R1Y3RRdWVyeSIsIkdSQVBIUUxVUkwiLCJncmFwaHFsUXVlcnkiLCJyZXNwb25zZSIsImhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5IiwidXJsIiwib3JpZ2luIiwibGFzdEhyZWYiLCJsYXN0QXMiLCJsYXN0UmVzdWx0IiwiaHJlZiIsImFzIiwicmVzdWx0IiwiZm9ybWF0RnVuYyIsImxpc3RlbmVycyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwid2luZG93IiwicHJlZmV0Y2hlZCIsIm9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiY2IiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwiZ2V0T2JzZXJ2ZXIiLCJjb25zdHJ1Y3RvciIsInAiLCJtZW1vaXplZEZvcm1hdFVybCIsImZvcm1hdFVybCIsImFzSHJlZiIsImUiLCJub2RlTmFtZSIsImlzTG9jYWwiLCJzY3JvbGwiLCJSb3V0ZXIiLCJzaGFsbG93Iiwic3VjY2VzcyIsImRvY3VtZW50IiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJnZXRQYXRocyIsInJlc29sdmVkSHJlZiIsInBhcnNlZEFzIiwiaGFuZGxlUmVmIiwicmVmIiwiaXNQcmVmZXRjaGVkIiwicHJlZmV0Y2giLCJwYXRocyIsImNoaWxkIiwiQ2hpbGRyZW4iLCJlbCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5Iiwib25DbGljayIsInByb2Nlc3MiLCJSZWFjdCIsIndhcm4iLCJQcm9wVHlwZXMiLCJyZXF1aXJlIiwiZXhhY3QiLCJMaW5rIiwicmVwbGFjZSIsInBhc3NIcmVmIiwic2luZ2xldG9uUm91dGVyIiwicm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsIk9iamVjdCIsImdldCIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsInBhdGgiLCJwcmVwYXJlUm91dGUiLCJ0b1JvdXRlIiwiYXR0ZW1wdHMiLCJpc1NlcnZlclJlbmRlciIsInBhdGhuYW1lIiwiYWRkQmFzZVBhdGgiLCJfX05FWFRfREFUQV9fIiwiYnVpbGRJZCIsImRlbEJhc2VQYXRoIiwiY3JlZGVudGlhbHMiLCJnZXRSZXNwb25zZSIsInJvdXRlIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJQcm9taXNlIiwiZmV0Y2hOZXh0RGF0YSIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwibW9kIiwibmV3RGF0YSIsInJlbG9hZCIsImJhY2siLCJTVCIsInBlcmZvcm1hbmNlIiwicmVzb2x2ZSIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwibWlzc2luZ1BhcmFtcyIsInBhcmFtIiwicmVqZWN0IiwiYXNQYXRobmFtZSIsInJvdXRlSW5mbyIsImVycm9yIiwiYXBwQ29tcCIsImNoYW5nZVN0YXRlIiwiZ2V0Um91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwiaGFuZGxlRXJyb3IiLCJwYWdlIiwiZ2lwRXJyIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImhhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJjYW5jZWxsZWQiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImZuIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsIlRFU1RfUk9VVEUiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInBhcmFtcyIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJlc2NhcGVkUm91dGUiLCJlc2NhcGVSZWdleCIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJpc09wdGlvbmFsIiwiJDEiLCJpc0NhdGNoQWxsIiwicG9zIiwicmVwZWF0IiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJuYW1lZFJlZ2V4IiwidXNlZCIsInByb3RvY29sIiwiaG9zdG5hbWUiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJpbmRleFBhZ2UiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FB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QWxCLFlBSEs7Ozs7Ozs7Ozs7OztBQzlXUCxpQkFBaUIsbUJBQU8sQ0FBQyxtRUFBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBN0M7QUFDQTs7QUFFQSxNQUFNd0UsU0FBUyxHQUFHLE1BQU07QUFDdEIsU0FDRSxNQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx1RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERjtBQUtELENBTkQ7O0FBUWVBLHdFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsZ0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmNvbnN0IGNhcm91c2VscyA9IFtcclxuICB7XHJcbiAgICBpbWFnZTogXCIvaW1hZ2VzL2hlcm9zL2hlcm8uanBnXCIsXHJcbiAgICB0aXRsZTogXCJKdXN0IEluOiBDbGFya3MgbW9zdCB0cmVuZGluZyBzaG9lc1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9oZXJvcy9oZXJvMS5qcGdcIixcclxuICAgIHRpdGxlOiBcIkp1c3QgSW46IENsYXJrcyBtb3N0IHRyZW5kaW5nIHNob2VzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogXCIvaW1hZ2VzL2hlcm9zL2hlcm8yLmpwZ1wiLFxyXG4gICAgdGl0bGU6IFwiSnVzdCBJbjogQ2xhcmtzIG1vc3QgdHJlbmRpbmcgc2hvZXNcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiBcIi9pbWFnZXMvaGVyb3MvaGVybzMuanBnXCIsXHJcbiAgICB0aXRsZTogXCJKdXN0IEluOiBDbGFya3MgbW9zdCB0cmVuZGluZyBzaG9lc1wiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9DYXJvdXNlbEZvcm0ubW9kdWxlLmNzc1wiO1xyXG5jbGFzcyBDYXJvdXNlbEZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgY2Fyb3VzZWxzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgZWxlbWVudFR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkNhcm91c2VsIFRpdGxlXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdmFsdWU6IGNhcm91c2Vsc1swXS50aXRsZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGltYWdlOiB7XHJcbiAgICAgICAgICBlbGVtZW50VHlwZTogXCJpbnB1dFwiLFxyXG4gICAgICAgICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICAgICAgICB0eXBlOiBcImZpbGVcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB2YWx1ZTogY2Fyb3VzZWxzWzBdLmltYWdlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgZWxlbWVudFR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkNhcm91c2VsIFRpdGxlXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdmFsdWU6IGNhcm91c2Vsc1sxXS50aXRsZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGltYWdlOiB7XHJcbiAgICAgICAgICBlbGVtZW50VHlwZTogXCJpbnB1dFwiLFxyXG4gICAgICAgICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICAgICAgICB0eXBlOiBcImZpbGVcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB2YWx1ZTogY2Fyb3VzZWxzWzFdLmltYWdlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgZWxlbWVudFR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkNhcm91c2VsIFRpdGxlXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdmFsdWU6IGNhcm91c2Vsc1syXS50aXRsZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGltYWdlOiB7XHJcbiAgICAgICAgICBlbGVtZW50VHlwZTogXCJpbnB1dFwiLFxyXG4gICAgICAgICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICAgICAgICB0eXBlOiBcImZpbGVcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB2YWx1ZTogY2Fyb3VzZWxzWzJdLmltYWdlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgZWxlbWVudFR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkNhcm91c2VsIFRpdGxlXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdmFsdWU6IGNhcm91c2Vsc1szXS50aXRsZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGltYWdlOiB7XHJcbiAgICAgICAgICBlbGVtZW50VHlwZTogXCJpbnB1dFwiLFxyXG4gICAgICAgICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICAgICAgICB0eXBlOiBcImZpbGVcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB2YWx1ZTogY2Fyb3VzZWxzWzNdLmltYWdlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH07XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLkZvcm1zV3JhcHBlcn0+PC9kaXY+O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWxGb3JtO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJGb3Jtc1dyYXBwZXJcIjogXCJDYXJvdXNlbEZvcm1fRm9ybXNXcmFwcGVyX18xZ0xwYVwiLFxuXHRcIkZvcm1cIjogXCJDYXJvdXNlbEZvcm1fRm9ybV9fOFZaSUJcIixcblx0XCJkaXNwbGF5XCI6IFwiQ2Fyb3VzZWxGb3JtX2Rpc3BsYXlfXzZoaEdPXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9Db250ZW50cy5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBPdmVydmlld3MgZnJvbSBcIi4uL0Rhc2hDYXJkcy9PdmVydmlld3MvT3ZlcnZpZXdzXCI7XHJcbmltcG9ydCBQcm9kdWN0Rm9ybSBmcm9tIFwiLi9Qcm9kdWN0Rm9ybS9Qcm9kdWN0Rm9ybVwiO1xyXG5pbXBvcnQgQ2Fyb3VzZWxGb3JtIGZyb20gXCIuL0Nhcm91c2VsRm9ybS9DYXJvdXNlbEZvcm1cIjtcclxuaW1wb3J0IERhc2hib2FyZFN1bW1hcnkgZnJvbSBcIi4vRGFzaGJvYXJkU3VtbWFyeS9EYXNoYm9hcmRTdW1tYXJ5XCI7XHJcblxyXG5jb25zdCBjb250ZW50cyA9IChwcm9wcykgPT4ge1xyXG4gIGxldCBjb250ZW50ID0gbnVsbDtcclxuICBzd2l0Y2ggKHByb3BzLnR5cGUpIHtcclxuICAgIGNhc2UgXCJhZGRQcm9kdWN0XCI6XHJcbiAgICAgIGNvbnRlbnQgPSA8UHJvZHVjdEZvcm0gdGl0bGU9XCJBZGQgUHJvZHVjdFwiIC8+O1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlIFwidXBkYXRlUHJvZHVjdFwiOlxyXG4gICAgICBjb250ZW50ID0gPFByb2R1Y3RGb3JtIHRpdGxlPVwiVXBkYXRlIFByb2R1Y3RcIiB1cGRhdGU9e3RydWV9IC8+O1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlIFwiY2Fyb3VzZWxcIjpcclxuICAgICAgY29udGVudCA9IDxDYXJvdXNlbEZvcm0gLz47XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGNvbnRlbnQgPSA8RGFzaGJvYXJkU3VtbWFyeSAvPjtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLkNvbnRlbnRzfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuU2lkZUJhclJlcGxhY2V9PlxyXG4gICAgICAgIDxmb290ZXI+Q29weXJpZ2h0ICZjb3B5OyBhdXN0aW5FeHByZXNzLmNvbTwvZm9vdGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuTWFpbkNvbnRlbnRzfT5cclxuICAgICAgICB7LyogPE92ZXJ2aWV3cyAvPiAqL31cclxuXHJcbiAgICAgICAge2NvbnRlbnR9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnRzO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJDb250ZW50c1wiOiBcIkNvbnRlbnRzX0NvbnRlbnRzX19lWVRFMVwiLFxuXHRcIlNpZGVCYXJSZXBsYWNlXCI6IFwiQ29udGVudHNfU2lkZUJhclJlcGxhY2VfXzJtUEpPXCIsXG5cdFwiTWFpbkNvbnRlbnRzXCI6IFwiQ29udGVudHNfTWFpbkNvbnRlbnRzX182cm0wR1wiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vRGFzaGJvYXJkU3VtbWFyeS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vLi4vLi4vVUkvSW5wdXQvSW5wdXRcIjtcclxuXHJcbmNvbnN0IGRhc2hib2FyZFN1bW1hcnkgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxJbnB1dCBpbnB1dHR5cGU9XCJpbnB1dFwiIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGFzaGJvYXJkU3VtbWFyeTtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL3Byb2R1Y3RGb3JtLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IElucHV0IGZyb20gXCIuLi8uLi8uLi9VSS9JbnB1dC9JbnB1dFwiO1xyXG5pbXBvcnQgSW5wdXRJbWFnZSBmcm9tIFwiLi4vLi4vLi4vVUkvSW5wdXQvSW5wdXRJbWFnZVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi8uLi9VSS9CdXR0b24vQnV0dG9uXCI7XHJcbmltcG9ydCBJbWFnZUNhcmRzIGZyb20gXCIuLi8uLi8uLi9VSS9JbWFnZUNhcmRzL0ltYWdlQ2FyZHNcIjtcclxuaW1wb3J0IHsgQkFTRV9VUkwgfSBmcm9tIFwiLi4vLi4vLi4vLi4vbGliL3JlcXVlc3RzXCI7XHJcblxyXG4vLyBsaWJcclxuaW1wb3J0IHVzZVByb2R1Y3RIdHRwIGZyb20gXCIuLi8uLi8uLi8uLi9saWIvaHR0cC9wcm9kdWN0c1wiO1xyXG5cclxuY29uc3QgcHJvZHVjdEZvcm0gPSAoIHByb3BzICkgPT4ge1xyXG4gIGNvbnN0IFtwcm9kdWN0Rm9ybSwgc2V0UHJvZHVjdEZvcm1dID0gdXNlU3RhdGUoe1xyXG4gICAgbmFtZToge1xyXG4gICAgICBlbGVtZW50VHlwZTogXCJpbnB1dFwiLFxyXG4gICAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IFwiUHJvZHVjdCBOYW1lXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHByaWNlOiB7XHJcbiAgICAgIGVsZW1lbnRUeXBlOiBcImlucHV0XCIsXHJcbiAgICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBcIlByb2R1Y3QgUHJpY2VcIixcclxuICAgICAgfSxcclxuICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAgcXVhbnRpdHk6IHtcclxuICAgICAgZWxlbWVudFR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IFwiUXVhbnRpdHlcIixcclxuICAgICAgfSxcclxuICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAgc2l6ZXM6IHtcclxuICAgICAgZWxlbWVudFR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBcIlNpemVzXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIGNvbG9yczoge1xyXG4gICAgICBlbGVtZW50VHlwZTogXCJpbnB1dFwiLFxyXG4gICAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IFwiQ29sb3JzXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIGNhdGVnb3J5OiB7XHJcbiAgICAgIGVsZW1lbnRUeXBlOiBcInNlbGVjdFwiLFxyXG4gICAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgICAgb3B0aW9uczogW1xyXG4gICAgICAgICAgeyB2YWx1ZTogXCJudWxsXCIsIGRpc3BsYXlWYWx1ZTogXCItLS1TZWxlY3QgQ2F0ZWdvcnktLS1cIiB9LFxyXG4gICAgICAgICAgeyB2YWx1ZTogXCJtZW5cIiwgZGlzcGxheVZhbHVlOiBcIk1lblwiIH0sXHJcbiAgICAgICAgICB7IHZhbHVlOiBcIndvbWVuXCIsIGRpc3BsYXlWYWx1ZTogXCJXb21lblwiIH0sXHJcbiAgICAgICAgICB7IHZhbHVlOiBcImtpZHNcIiwgZGlzcGxheVZhbHVlOiBcIktpZHNcIiB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIGJyYW5kOiB7XHJcbiAgICAgIGVsZW1lbnRUeXBlOiBcInNlbGVjdFwiLFxyXG4gICAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgICAgb3B0aW9uczogW1xyXG4gICAgICAgICAgeyB2YWx1ZTogXCJudWxsXCIsIGRpc3BsYXlWYWx1ZTogXCItLS1TZWxlY3QgQnJhbmQtLS1cIiB9LFxyXG4gICAgICAgICAgeyB2YWx1ZTogXCJuaWtlXCIsIGRpc3BsYXlWYWx1ZTogXCJOaWtlXCIgfSxcclxuICAgICAgICAgIHsgdmFsdWU6IFwiY2xhcmtzXCIsIGRpc3BsYXlWYWx1ZTogXCJDbGFya3NcIiB9LFxyXG4gICAgICAgICAgeyB2YWx1ZTogXCJHdWNjaVwiLCBkaXNwbGF5VmFsdWU6IFwiR3VjY2lcIiB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIGRlc2NyaXB0aW9uOiB7XHJcbiAgICAgIGVsZW1lbnRUeXBlOiBcInRleHRhcmVhXCIsXHJcbiAgICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgICBwbGFjZWhvbGRlcjogXCJQcm9kdWN0IGRlc2NyaXB0aW9uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgW2ltYWdlVXJscywgc2V0SW1hZ2VVcmxzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwibG9hZGluZ1wiLCBwcm9kdWN0TG9hZGluZyk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIHByb2R1Y3QgaHR0cCBlZmZlY3RzIGxpYlxyXG4gIGNvbnN0IHsgc2VuZFNhdmVSZXF1ZXN0LCBwcm9kdWN0TG9hZGluZyB9ID0gdXNlUHJvZHVjdEh0dHAoKTtcclxuXHJcbiAgLy9JbnB1dCBDaGFuZ2UgSGFuZGxlclxyXG4gIGNvbnN0IGlucHV0Q2hhbmdlSGFuZGxlciA9IChldmVudCwgaW5wdXRJZGVudGlmaWVyKSA9PiB7XHJcbiAgICBjb25zdCB1cGRhdGVkUHJvZHVjdEZvcm0gPSB7IC4uLnByb2R1Y3RGb3JtIH07XHJcbiAgICBjb25zdCB1cGRhdGVkRm9ybUVsZW1lbnQgPSB7IC4uLnVwZGF0ZWRQcm9kdWN0Rm9ybVtpbnB1dElkZW50aWZpZXJdIH07XHJcbiAgICB1cGRhdGVkRm9ybUVsZW1lbnQudmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICB1cGRhdGVkUHJvZHVjdEZvcm1baW5wdXRJZGVudGlmaWVyXSA9IHVwZGF0ZWRGb3JtRWxlbWVudDtcclxuICAgIHNldFByb2R1Y3RGb3JtKHVwZGF0ZWRQcm9kdWN0Rm9ybSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gRmlsZSBDaGFuZ2UgSGFuZGxlclxyXG4gIGNvbnN0IG9uRmlsZUNoYW5nZUhhbmRsZXIgPSAoIGV2ZW50ICkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LmZpbGVzKTtcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3IobGV0IGZpbGUgb2YgZXZlbnQudGFyZ2V0LmZpbGVzKSB7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcInByb2R1Y3RzXCIsIGZpbGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZldGNoKEJBU0VfVVJMICsgXCIvYXBpL3VwbG9hZHMvcHJvZHVjdHNcIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgICBib2R5OiBmb3JtRGF0YVxyXG4gICAgfSlcclxuICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBzZXRJbWFnZVVybHMocmVzLmRhdGEuaW1hZ2VVcmxzKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKFwiZXJyb3JcIiwgZXJyKSlcclxuICB9XHJcblxyXG4gIC8vQWRkaW5nIFByb2R1Y3QgSGFuZGxlclxyXG4gIGNvbnN0IGFkZFByb2R1Y3RIYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZm9ybURhdGEgPSB7fTtcclxuICAgIGZvciAobGV0IGlucHV0RWxlbWVudElkZW50aWZpZXIgaW4gcHJvZHVjdEZvcm0pIHtcclxuICAgICAgZm9ybURhdGFbaW5wdXRFbGVtZW50SWRlbnRpZmllcl0gPSBwcm9kdWN0Rm9ybVsgaW5wdXRFbGVtZW50SWRlbnRpZmllciBdLnZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHByb2R1Y3QgPSB7XHJcbiAgICAgIHByb2R1Y3REYXRhOiBmb3JtRGF0YSxcclxuICAgIH07XHJcblxyXG4gICAgcHJvZHVjdC5wcm9kdWN0RGF0YS5zaXplcyA9IHByb2R1Y3QucHJvZHVjdERhdGEuc2l6ZXMuc3BsaXQoL1s7LF0vaW1nKVxyXG4gICAgLm1hcCh2ID0+IE51bWJlci5wYXJzZUZsb2F0KHYpKTtcclxuICAgIHByb2R1Y3QucHJvZHVjdERhdGEuY29sb3JzID0gcHJvZHVjdC5wcm9kdWN0RGF0YS5jb2xvcnMuc3BsaXQoL1s7LF0vaW1nKTtcclxuXHJcbiAgICAvLyBkZXN0cnVjdHVyZSBwcm9kdWN0IGRhdGFcclxuICAgIGNvbnN0IHtcclxuICAgICAgcHJvZHVjdERhdGFcclxuICAgIH0gPSBwcm9kdWN0O1xyXG5cclxuICAgIC8vIGNoZWNrIHRoZSBzdGF0ZSBvZiBwcm9kdWN0IGZvcm0gKGFkZCAvIHVwZGF0ZSlcclxuICAgIGlmKHByb3BzLnRpdGxlID09PSBcIlVwZGF0ZSBQcm9kdWN0XCIpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJVcGRhdGUgUHJvZHVjdFwiLCBwcm9kdWN0RGF0YSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkFkZCBQcm9kdWN0XCIsIHByb2R1Y3REYXRhKTtcclxuICAgICAgLy8gQ3JlYXRlIGFuZCBzYXZlIG5ldyBwcm9kdWN0XHJcbiAgICAgIHNlbmRTYXZlUmVxdWVzdCggXHJcbiAgICAgICAgcHJvZHVjdERhdGEubmFtZSwgXHJcbiAgICAgICAgcHJvZHVjdERhdGEuZGVzY3JpcHRpb24sIFxyXG4gICAgICAgIE51bWJlci5wYXJzZUZsb2F0KHByb2R1Y3REYXRhLnByaWNlKSwgXHJcbiAgICAgICAgaW1hZ2VVcmxzLCBcclxuICAgICAgICBOdW1iZXIucGFyc2VJbnQocHJvZHVjdERhdGEucXVhbnRpdHkpLCBcclxuICAgICAgICBwcm9kdWN0RGF0YS5jYXRlZ29yeSxcclxuICAgICAgICBwcm9kdWN0RGF0YS5jb2xvcnMsXHJcbiAgICAgICAgcHJvZHVjdERhdGEuc2l6ZXMsXHJcbiAgICAgICAgcHJvZHVjdERhdGEuYnJhbmRcclxuICAgICAgKTtcclxuICAgIH0gICBcclxuICB9O1xyXG5cclxuICBsZXQgc2VhcmNoID0gbnVsbDtcclxuICBpZiAocHJvcHMudXBkYXRlKSB7XHJcbiAgICBzZWFyY2ggPSAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaH0+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIFByb2R1Y3QgQ29kZVwiIC8+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU2VhcmNoXCIgLz5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGZvcm1FbGVtZW50QXJyYXkgPSBbXTtcclxuICBmb3IgKGxldCBrZXkgaW4gcHJvZHVjdEZvcm0pIHtcclxuICAgIGZvcm1FbGVtZW50QXJyYXkucHVzaCh7XHJcbiAgICAgIGlkOiBrZXksXHJcbiAgICAgIGNvbmZpZzogcHJvZHVjdEZvcm1ba2V5XSxcclxuICAgIH0pO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuRm9ybXNXcmFwcGVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuRm9ybX0+XHJcbiAgICAgICAgPGgyPntwcm9wcy50aXRsZX08L2gyPlxyXG4gICAgICAgIHtzZWFyY2h9XHJcbiAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICB7Zm9ybUVsZW1lbnRBcnJheS5tYXAoKGZvcm1FbGVtZW50LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICBrZXk9e2Zvcm1FbGVtZW50LmlkfVxyXG4gICAgICAgICAgICAgIGVsZW1lbnRUeXBlPXtmb3JtRWxlbWVudC5jb25maWcuZWxlbWVudFR5cGV9XHJcbiAgICAgICAgICAgICAgZWxlbWVudENvbmZpZz17Zm9ybUVsZW1lbnQuY29uZmlnLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1FbGVtZW50LmNvbmZpZy52YWx1ZX1cclxuICAgICAgICAgICAgICBjaGFuZ2VkPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICBpbnB1dENoYW5nZUhhbmRsZXIoZXZlbnQsIGZvcm1FbGVtZW50LmlkKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPElucHV0SW1hZ2UgY2hhbmdlPXtvbkZpbGVDaGFuZ2VIYW5kbGVyfS8+XHJcbiAgICAgICAgICA8SW1hZ2VDYXJkcyBpbWFnZV91cmxzPXtpbWFnZVVybHN9IC8+XHJcbiAgICAgICAgICA8QnV0dG9uIGNsaWNrZWQ9e2FkZFByb2R1Y3RIYW5kbGVyfT5BZGQgUHJvZHVjdDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0Rm9ybTtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiRm9ybXNXcmFwcGVyXCI6IFwicHJvZHVjdEZvcm1fRm9ybXNXcmFwcGVyX18ydU1ERVwiLFxuXHRcIkZvcm1cIjogXCJwcm9kdWN0Rm9ybV9Gb3JtX18zaVFPaFwiLFxuXHRcInNlYXJjaFwiOiBcInByb2R1Y3RGb3JtX3NlYXJjaF9fMVJWRDZcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL092ZXJ2aWV3Lm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IG92ZXJ2aWV3ID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLk92ZXJ2aWV3fT5cclxuICAgICAgPHA+e3Byb3BzLnByb3BlcnRpZXMudGl0bGV9PC9wPlxyXG4gICAgICA8aDM+e3Byb3BzLnByb3BlcnRpZXMudmFsdWV9PC9oMz5cclxuICAgICAgPHA+e3Byb3BzLnByb3BlcnRpZXMuY2FwdGlvbn08L3A+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgb3ZlcnZpZXc7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIk92ZXJ2aWV3XCI6IFwiT3ZlcnZpZXdfT3ZlcnZpZXdfXzJNaDJNXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9PdmVydmlld3MubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgT3ZlcnZpZXcgZnJvbSBcIi4vT3ZlcnZpZXcvT3ZlcnZpZXdcIjtcclxuaW1wb3J0IG92ZXJ2aWV3IGZyb20gXCIuL092ZXJ2aWV3L092ZXJ2aWV3XCI7XHJcblxyXG5jb25zdCBvdmVydmlld3MgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBvdmVydmlld3MgPSBbXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIlNBTEVTXCIsXHJcbiAgICAgIHZhbHVlOiBcIiQyNiwyMjRcIixcclxuICAgICAgY2FwdGlvbjogXCJUb3RhbCBzYWxlcyBmb3IgdGhpcyBtb250aFwiLFxyXG4gICAgfSxcclxuXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIlVTRVJTXCIsXHJcbiAgICAgIHZhbHVlOiBcIjYwMCBVc2Vyc1wiLFxyXG4gICAgICBjYXB0aW9uOiBcIlRvdGFsIHJlZ2lzdGVyZWQgdXNlcnNcIixcclxuICAgIH0sXHJcblxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJQUk9EVUNUU1wiLFxyXG4gICAgICB2YWx1ZTogXCIxMjAwIFByb2R1Y3RzXCIsXHJcbiAgICAgIGNhcHRpb246IFwiVG90YWwgcHJvZHVjdHMgYXZhaWxhYmxlXCIsXHJcbiAgICB9LFxyXG4gIF07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLk92ZXJ2aWV3c30+XHJcbiAgICAgIHtvdmVydmlld3MubWFwKChvdmVydmlldywgaW5kZXgpID0+IChcclxuICAgICAgICA8T3ZlcnZpZXcga2V5PXtpbmRleH0gcHJvcGVydGllcz17b3ZlcnZpZXd9IC8+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG92ZXJ2aWV3cztcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiT3ZlcnZpZXdzXCI6IFwiT3ZlcnZpZXdzX092ZXJ2aWV3c19fMkk5cXNcIlxufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9EYXNoYm9hcmQubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgVG9vbEJhciBmcm9tIFwiLi9Ub29sQmFyL1Rvb2xCYXJcIjtcclxuaW1wb3J0IFNpZGVCYXIgZnJvbSBcIi4vU2lkZUJhci9TaWRlQmFyXCI7XHJcbmltcG9ydCBDb250ZW50cyBmcm9tIFwiLi9Db250ZW50cy9Db250ZW50c1wiO1xyXG5cclxuY29uc3QgZGFzaG9hcmQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2NvbnRlbnRTdGF0ZSwgc2V0Q29udGVudFN0YXRlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBjaGFuZ2VDb250ZW50SGFubGRlciA9ICh0eXBlKSA9PiB7XHJcbiAgICBzZXRDb250ZW50U3RhdGUodHlwZSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGFzaGJvYXJkfT5cclxuICAgICAgPFRvb2xCYXIgLz5cclxuICAgICAgPFNpZGVCYXIgY2xpY2tlZD17Y2hhbmdlQ29udGVudEhhbmxkZXJ9IC8+XHJcbiAgICAgIDxDb250ZW50cyB0eXBlPXtjb250ZW50U3RhdGV9IC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGFzaG9hcmQ7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImRhc2hib2FyZFwiOiBcIkRhc2hib2FyZF9kYXNoYm9hcmRfX082YjZfXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL1NpZGVCYXIubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgTG9nbyBmcm9tIFwiLi4vLi4vTG9nb1wiO1xyXG5jb25zdCBsaW5rcyA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogXCJEYXNoYm9hcmRcIixcclxuICAgIGljb246IFwiL2ltYWdlcy9ob21lLnBuZ1wiLFxyXG4gICAgdHlwZTogXCJkYXNoYm9hcmRcIixcclxuICB9LFxyXG5cclxuICB7XHJcbiAgICB0aXRsZTogXCJBZGQgUHJvZHVjdFwiLFxyXG4gICAgaWNvbjogXCIvaW1hZ2VzL3BsdXMucG5nXCIsXHJcbiAgICB0eXBlOiBcImFkZFByb2R1Y3RcIixcclxuICB9LFxyXG5cclxuICB7XHJcbiAgICB0aXRsZTogXCJVcGRhdGUgUHJvZHVjdFwiLFxyXG4gICAgaWNvbjogXCIvaW1hZ2VzL2xpc3QucG5nXCIsXHJcbiAgICB0eXBlOiBcInVwZGF0ZVByb2R1Y3RcIixcclxuICB9LFxyXG5cclxuICB7XHJcbiAgICB0aXRsZTogXCJDYXJvdXNlbFwiLFxyXG4gICAgaWNvbjogXCIvaW1hZ2VzL2VkaXQucG5nXCIsXHJcbiAgICB0eXBlOiBcImNhcm91c2VsXCIsXHJcbiAgfSxcclxuXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiUG9wdWxhciBDYXRlZ29yaWVzXCIsXHJcbiAgICBpY29uOiBcIi9pbWFnZXMvZWRpdC5wbmdcIixcclxuICAgIHR5cGU6IFwicG9wdWxhckNhdGVnb3JpZXNcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkZvb3R3ZWFyIEZhdm9yaXRlc1wiLFxyXG4gICAgaWNvbjogXCIvaW1hZ2VzL2VkaXQucG5nXCIsXHJcbiAgICB0eXBlOiBcImZhdm9yaXRlc1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiVHJlbmRpbmcgQnJhbmRzXCIsXHJcbiAgICBpY29uOiBcIi9pbWFnZXMvZWRpdC5wbmdcIixcclxuICAgIHR5cGU6IFwidHJlbmRpbmdCcmFuZHNcIixcclxuICB9LFxyXG5dO1xyXG5jb25zdCBzaWRlQmFyID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNpZGVCYXJ9PlxyXG4gICAgICA8bmF2PlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9e2NsYXNzZXMuc2lkZU5hdn0+XHJcbiAgICAgICAgICB7bGlua3MubWFwKChuYXYsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBvbkNsaWNrPXsoKSA9PiBwcm9wcy5jbGlja2VkKG5hdi50eXBlKX0+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e25hdi5pY29ufSAvPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+e25hdi50aXRsZX08L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3Bvd2VyLnBuZ1wiIGFsdD1cImljb25cIiAvPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPkxvZ291dDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9uYXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2lkZUJhcjtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic2lkZUJhclwiOiBcIlNpZGVCYXJfc2lkZUJhcl9fMkFWVnhcIixcblx0XCJzaWRlTmF2XCI6IFwiU2lkZUJhcl9zaWRlTmF2X18zQWxwUFwiLFxuXHRcInNpZGVBY3RpdmVcIjogXCJTaWRlQmFyX3NpZGVBY3RpdmVfX25LMGJZXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL1Rvb2xCYXIubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgTG9nbyBmcm9tIFwiLi4vLi4vTG9nb1wiO1xyXG5pbXBvcnQgU3BhY2VyIGZyb20gXCIuLi8uLi9TcGFjZXJcIjtcclxuXHJcbmNvbnN0IHRvb2xCYXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnRvb2xCYXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvV3JhcHBlcn0+XHJcbiAgICAgICAgPExvZ28gY29sb3I9XCJ3aGl0ZVwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8U3BhY2VyIC8+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPXtjbGFzc2VzLk5hdn0+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPkdvdG8gUHVibGljIFBhZ2U8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRvb2xCYXI7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRvb2xCYXJcIjogXCJUb29sQmFyX3Rvb2xCYXJfXzJKamNyXCIsXG5cdFwibG9nb1dyYXBwZXJcIjogXCJUb29sQmFyX2xvZ29XcmFwcGVyX18yR05BUVwiLFxuXHRcIk5hdlwiOiBcIlRvb2xCYXJfTmF2X191bkRVZFwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5jb25zdCBsb2dvID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cclxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICA8YT5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJsb2dvXCI+XHJcbiAgICAgICAgICAgIGF1c3RpbjxzcGFuIGNsYXNzTmFtZT1cInJlZFwiPkV4cDwvc3Bhbj5yZXNzLmNvbVxyXG4gICAgICAgICAgPC9oMj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAubG9nbyBoMiB7XHJcbiAgICAgICAgICBjb2xvcjogIzFiMjIyYjtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gc2Fuc1wiLCBzYW4tc2VyaWY7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmVkIHtcclxuICAgICAgICAgIGNvbG9yOiAjMDY1NGIzO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvZ287XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IHNwYWNlciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZXJcIj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5zcGFjZXIge1xyXG4gICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNwYWNlcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vQnV0dG9uLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IGJ1dHRvbiA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uIG9uQ2xpY2s9e3Byb3BzLmNsaWNrZWR9IGNsYXNzTmFtZT17Y2xhc3Nlcy5CdXR0b259PlxyXG4gICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICA8L2J1dHRvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYnV0dG9uO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJCdXR0b25cIjogXCJCdXR0b25fQnV0dG9uX190OTlZQlwiXG59O1xuIiwiXHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL0ltYWdlQ2FyZHMubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBCQVNFX1VSTCB9IGZyb20gXCIuLi8uLi8uLi9saWIvcmVxdWVzdHNcIjtcclxuXHJcbmNvbnN0IGltYWdlQ2FyZHMgPSAoIHsgaW1hZ2VfdXJscyB9ICkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMuUHJvZHVjdEltYWdlQ29udGFpbmVyfT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaW1hZ2VfdXJscy5tYXAoaW1hZ2VfdXJsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW1hZ2VfdXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLlByb2R1Y3RJbWFnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtCQVNFX1VSTCArIGltYWdlX3VybH0gYWx0PVwicHJvZHVjdFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbWFnZUNhcmRzOyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIlByb2R1Y3RJbWFnZVwiOiBcIkltYWdlQ2FyZHNfUHJvZHVjdEltYWdlX18zTXNJNlwiLFxuXHRcIlByb2R1Y3RJbWFnZUNvbnRhaW5lclwiOiBcIkltYWdlQ2FyZHNfUHJvZHVjdEltYWdlQ29udGFpbmVyX18zclFBVVwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vSW5wdXQubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgaW5wdXQgPSAocHJvcHMpID0+IHtcclxuICBsZXQgaW5wdXRFbGVtZW50ID0gbnVsbDtcclxuXHJcbiAgc3dpdGNoIChwcm9wcy5lbGVtZW50VHlwZSkge1xyXG4gICAgY2FzZSBcImlucHV0XCI6XHJcbiAgICAgIGlucHV0RWxlbWVudCA9IChcclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5JbnB1dEVsZW1lbnR9XHJcbiAgICAgICAgICB7Li4ucHJvcHMuZWxlbWVudENvbmZpZ31cclxuICAgICAgICAgIHZhbHVlPXtwcm9wcy52YWx1ZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5jaGFuZ2VkfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcInRleHRhcmVhXCI6XHJcbiAgICAgIGlucHV0RWxlbWVudCA9IChcclxuICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5JbnB1dEVsZW1lbnR9XHJcbiAgICAgICAgICB7Li4ucHJvcHMuZWxlbWVudENvbmZpZ31cclxuICAgICAgICAgIHZhbHVlPXtwcm9wcy52YWx1ZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5jaGFuZ2VkfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcInNlbGVjdFwiOlxyXG4gICAgICBpbnB1dEVsZW1lbnQgPSAoXHJcbiAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLklucHV0RWxlbWVudH1cclxuICAgICAgICAgIHsuLi5wcm9wcy5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgdmFsdWU9e3Byb3BzLnZhbHVlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmNoYW5nZWR9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3Byb3BzLmVsZW1lbnRDb25maWcub3B0aW9ucy5tYXAoKG9wdGlvbiwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2luZGV4fSB2YWx1ZT17b3B0aW9uLnZhbHVlfT5cclxuICAgICAgICAgICAgICB7b3B0aW9uLmRpc3BsYXlWYWx1ZX1cclxuICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgKTtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgaW5wdXRFbGVtZW50ID0gKFxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLklucHV0RWxlbWVudH1cclxuICAgICAgICAgIHsuLi5wcm9wcy5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgdmFsdWU9e3Byb3BzLnZhbHVlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmNoYW5nZWR9XHJcbiAgICAgICAgLz5cclxuICAgICAgKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLklucHV0fT5cclxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT17Y2xhc3Nlcy5MYWJlbH0+e3Byb3BzLmxhYmVsfTwvbGFiZWw+XHJcbiAgICAgIHtpbnB1dEVsZW1lbnR9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5wdXQ7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIklucHV0XCI6IFwiSW5wdXRfSW5wdXRfX2lacmdQXCIsXG5cdFwiTGFiZWxcIjogXCJJbnB1dF9MYWJlbF9fMlVlZVVcIixcblx0XCJJbnB1dEVsZW1lbnRcIjogXCJJbnB1dF9JbnB1dEVsZW1lbnRfX045amlOXCJcbn07XG4iLCJpbXBvcnQgaW5wdXQgZnJvbSBcIi4vSW5wdXRcIlxyXG5cclxuY29uc3QgaW5wdXRJbWFnZSA9ICggeyBjaGFuZ2UgfSApID0+IDxpbnB1dCB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXtjaGFuZ2V9IG11bHRpcGxlLz47XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbnB1dEltYWdlOyIsIlxyXG5pbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi4vcmVxdWVzdHNcIjtcclxuaW1wb3J0IHsgYWRkUHJvZHVjdFF1ZXJ5IH0gZnJvbSBcIi4uL3F1ZXJpZXMvcHJvZHVjdHNcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IHVzZVByb2R1Y3RIdHRwID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IFtwcm9kdWN0TG9hZGluZywgc2V0UHJvZHVjdExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgICAgIGNvbnN0IHNlbmRTYXZlUmVxdWVzdCA9IGFzeW5jIChcclxuICAgICAgICAgICAgcHJvZHVjdF9uYW1lLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgcHJpY2UsXHJcbiAgICAgICAgICAgIGltYWdlX3VybHMsXHJcbiAgICAgICAgICAgIHF1YW50aXR5LFxyXG4gICAgICAgICAgICBjYXRlZ29yeSxcclxuICAgICAgICAgICAgY29sb3JzLFxyXG4gICAgICAgICAgICBzaXplcyxcclxuICAgICAgICAgICAgYnJhbmQ9XCJcIlxyXG4gICAgICAgICkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgc2V0UHJvZHVjdExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCByZXF1ZXN0KGFkZFByb2R1Y3RRdWVyeShcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X25hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VfdXJscyxcclxuICAgICAgICAgICAgICAgICAgICBxdWFudGl0eSxcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeSxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgYnJhbmRcclxuICAgICAgICAgICAgICAgICkpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJwcm9kdWN0IHJlc1wiLCByZXMpO1xyXG4gICAgICAgICAgICAgICAgc2V0UHJvZHVjdExvYWRpbmcoZmFsc2UpOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNvbWV0aGluZyB3ZW50IHdyb25nXCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICBzZXRQcm9kdWN0TG9hZGluZyhmYWxzZSk7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwcm9kdWN0TG9hZGluZyxcclxuICAgICAgICAgICAgc2VuZFNhdmVSZXF1ZXN0ICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VQcm9kdWN0SHR0cDsiLCJcclxuZXhwb3J0IGNvbnN0IGFkZFByb2R1Y3RRdWVyeSA9IChcclxuICAgIHByb2R1Y3RfbmFtZSxcclxuICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgcHJpY2UsXHJcbiAgICBpbWFnZV91cmxzLFxyXG4gICAgcXVhbnRpdHksXHJcbiAgICBjYXRlZ29yeSxcclxuICAgIGNvbG9ycyxcclxuICAgIHNpemVzLFxyXG4gICAgYnJhbmRcclxuKSA9PiB7XHJcbiAgICByZXR1cm4geyBcclxuICAgICAgICBxdWVyeTogYFxyXG4gICAgICAgICAgICBtdXRhdGlvbiBDcmVhdGVQcm9kdWN0KFxyXG4gICAgICAgICAgICAgICAgJHByb2R1Y3RfbmFtZTogU3RyaW5nISxcclxuICAgICAgICAgICAgICAgICRkZXNjcmlwdGlvbjogU3RyaW5nISxcclxuICAgICAgICAgICAgICAgICRwcmljZTogRmxvYXQhLFxyXG4gICAgICAgICAgICAgICAgJGltYWdlX3VybHM6IFtTdHJpbmchXSEsXHJcbiAgICAgICAgICAgICAgICAkcXVhbnRpdHk6IEludCEsXHJcbiAgICAgICAgICAgICAgICAkY2F0ZWdvcnk6IFN0cmluZyEsXHJcbiAgICAgICAgICAgICAgICAkY29sb3JzOiBbU3RyaW5nIV0sXHJcbiAgICAgICAgICAgICAgICAkc2l6ZXM6IFtGbG9hdCFdLFxyXG4gICAgICAgICAgICAgICAgJGJyYW5kOiBTdHJpbmdcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVQcm9kdWN0KGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X25hbWU6ICRwcm9kdWN0X25hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICRkZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBwcmljZTogJHByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlX3VybHM6ICRpbWFnZV91cmxzLFxyXG4gICAgICAgICAgICAgICAgICAgIHF1YW50aXR5OiAkcXVhbnRpdHksXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6ICRjYXRlZ29yeSxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcnM6ICRjb2xvcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZXM6ICRzaXplcyxcclxuICAgICAgICAgICAgICAgICAgICBicmFuZDogJGJyYW5kXHJcbiAgICAgICAgICAgICAgICB9KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdElkXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9uYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGAsXHJcbiAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAgIHByb2R1Y3RfbmFtZSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIHByaWNlLFxyXG4gICAgICAgICAgICBpbWFnZV91cmxzLFxyXG4gICAgICAgICAgICBxdWFudGl0eSxcclxuICAgICAgICAgICAgY2F0ZWdvcnksXHJcbiAgICAgICAgICAgIGNvbG9ycyxcclxuICAgICAgICAgICAgc2l6ZXMsXHJcbiAgICAgICAgICAgIGJyYW5kXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlUHJvZHVjdFF1ZXJ5ID0gYFxyXG5cclxuYCIsIlxyXG5pbXBvcnQgZmV0Y2ggZnJvbSBcIm5vZGUtZmV0Y2hcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBCQVNFX1VSTD1cImh0dHA6Ly9sb2NhbGhvc3Q6MjAyMFwiO1xyXG5leHBvcnQgY29uc3QgR1JBUEhRTFVSTCA9IGAke0JBU0VfVVJMfS9ncmFwaHFsYDtcclxuXHJcbmNvbnN0IHJlcXVlc3QgPSBhc3luYyAoZ3JhcGhxbFF1ZXJ5KSA9PiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKEdSQVBIUUxVUkwsIFxyXG4gICAge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoIGdyYXBocWxRdWVyeSApXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlcXVlc3Q7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiZGVjbGFyZSBjb25zdCBfX05FWFRfREFUQV9fOiBhbnlcblxuaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHBhcnNlLCByZXNvbHZlLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQcmVmZXRjaE9wdGlvbnMgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7XG4gIGV4ZWNPbmNlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCBSb3V0ZXIgZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyBhZGRCYXNlUGF0aCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuXG5mdW5jdGlvbiBpc0xvY2FsKGhyZWY6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBjb25zdCB1cmwgPSBwYXJzZShocmVmLCBmYWxzZSwgdHJ1ZSlcbiAgY29uc3Qgb3JpZ2luID0gcGFyc2UoZ2V0TG9jYXRpb25PcmlnaW4oKSwgZmFsc2UsIHRydWUpXG5cbiAgcmV0dXJuIChcbiAgICAhdXJsLmhvc3QgfHwgKHVybC5wcm90b2NvbCA9PT0gb3JpZ2luLnByb3RvY29sICYmIHVybC5ob3N0ID09PSBvcmlnaW4uaG9zdClcbiAgKVxufVxuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBGb3JtYXRSZXN1bHQgPSB7IGhyZWY6IHN0cmluZzsgYXM/OiBzdHJpbmcgfVxuXG5mdW5jdGlvbiBtZW1vaXplZEZvcm1hdFVybChmb3JtYXRGdW5jOiAoaHJlZjogVXJsLCBhcz86IFVybCkgPT4gRm9ybWF0UmVzdWx0KSB7XG4gIGxldCBsYXN0SHJlZjogbnVsbCB8IFVybCA9IG51bGxcbiAgbGV0IGxhc3RBczogdW5kZWZpbmVkIHwgbnVsbCB8IFVybCA9IG51bGxcbiAgbGV0IGxhc3RSZXN1bHQ6IG51bGwgfCBGb3JtYXRSZXN1bHQgPSBudWxsXG4gIHJldHVybiAoaHJlZjogVXJsLCBhcz86IFVybCkgPT4ge1xuICAgIGlmIChsYXN0UmVzdWx0ICYmIGhyZWYgPT09IGxhc3RIcmVmICYmIGFzID09PSBsYXN0QXMpIHtcbiAgICAgIHJldHVybiBsYXN0UmVzdWx0XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gZm9ybWF0RnVuYyhocmVmLCBhcylcbiAgICBsYXN0SHJlZiA9IGhyZWZcbiAgICBsYXN0QXMgPSBhc1xuICAgIGxhc3RSZXN1bHQgPSByZXN1bHRcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZnVuY3Rpb24gZm9ybWF0VXJsKHVybDogVXJsKTogc3RyaW5nIHtcbiAgcmV0dXJuIHVybCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0JyA/IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybCkgOiB1cmxcbn1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG5cbmxldCBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChvYnNlcnZlcikge1xuICAgIHJldHVybiBvYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmNsYXNzIExpbmsgZXh0ZW5kcyBDb21wb25lbnQ8TGlua1Byb3BzPiB7XG4gIHA6IGJvb2xlYW5cblxuICBjb25zdHJ1Y3Rvcihwcm9wczogTGlua1Byb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChwcm9wcy5wcmVmZXRjaCkge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuICB9XG5cbiAgY2xlYW5VcExpc3RlbmVycyA9ICgpID0+IHt9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhblVwTGlzdGVuZXJzKClcbiAgfVxuXG4gIGdldFBhdGhzKCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgICBjb25zdCB7IGhyZWY6IHBhcnNlZEhyZWYsIGFzOiBwYXJzZWRBcyB9ID0gdGhpcy5mb3JtYXRVcmxzKFxuICAgICAgdGhpcy5wcm9wcy5ocmVmLFxuICAgICAgdGhpcy5wcm9wcy5hc1xuICAgIClcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlKHBhdGhuYW1lLCBwYXJzZWRIcmVmKVxuICAgIHJldHVybiBbcmVzb2x2ZWRIcmVmLCBwYXJzZWRBcyA/IHJlc29sdmUocGF0aG5hbWUsIHBhcnNlZEFzKSA6IHJlc29sdmVkSHJlZl1cbiAgfVxuXG4gIGhhbmRsZVJlZihyZWY6IEVsZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wICYmIEludGVyc2VjdGlvbk9ic2VydmVyICYmIHJlZiAmJiByZWYudGFnTmFtZSkge1xuICAgICAgdGhpcy5jbGVhblVwTGlzdGVuZXJzKClcblxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID1cbiAgICAgICAgcHJlZmV0Y2hlZFtcbiAgICAgICAgICB0aGlzLmdldFBhdGhzKCkuam9pbihcbiAgICAgICAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICAgICAgICAnJSdcbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHRoaXMuY2xlYW5VcExpc3RlbmVycyA9IGxpc3RlblRvSW50ZXJzZWN0aW9ucyhyZWYsICgpID0+IHtcbiAgICAgICAgICB0aGlzLnByZWZldGNoKClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBUaGUgZnVuY3Rpb24gaXMgbWVtb2l6ZWQgc28gdGhhdCBubyBleHRyYSBsaWZlY3ljbGVzIGFyZSBuZWVkZWRcbiAgLy8gYXMgcGVyIGh0dHBzOi8vcmVhY3Rqcy5vcmcvYmxvZy8yMDE4LzA2LzA3L3lvdS1wcm9iYWJseS1kb250LW5lZWQtZGVyaXZlZC1zdGF0ZS5odG1sXG4gIGZvcm1hdFVybHMgPSBtZW1vaXplZEZvcm1hdFVybCgoaHJlZiwgYXNIcmVmKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IGFkZEJhc2VQYXRoKGZvcm1hdFVybChocmVmKSksXG4gICAgICBhczogYXNIcmVmID8gYWRkQmFzZVBhdGgoZm9ybWF0VXJsKGFzSHJlZikpIDogYXNIcmVmLFxuICAgIH1cbiAgfSlcblxuICBsaW5rQ2xpY2tlZCA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3QgeyBub2RlTmFtZSwgdGFyZ2V0IH0gPSBlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgICBpZiAoXG4gICAgICBub2RlTmFtZSA9PT0gJ0EnICYmXG4gICAgICAoKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgICAgIGUubWV0YUtleSB8fFxuICAgICAgICBlLmN0cmxLZXkgfHxcbiAgICAgICAgZS5zaGlmdEtleSB8fFxuICAgICAgICAoZS5uYXRpdmVFdmVudCAmJiBlLm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKSlcbiAgICApIHtcbiAgICAgIC8vIGlnbm9yZSBjbGljayBmb3IgbmV3IHRhYiAvIG5ldyB3aW5kb3cgYmVoYXZpb3JcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCB7IGhyZWYsIGFzIH0gPSB0aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLCB0aGlzLnByb3BzLmFzKVxuXG4gICAgaWYgKCFpc0xvY2FsKGhyZWYpKSB7XG4gICAgICAvLyBpZ25vcmUgY2xpY2sgaWYgaXQncyBvdXRzaWRlIG91ciBzY29wZSAoZS5nLiBodHRwczovL2dvb2dsZS5jb20pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgICBocmVmID0gcmVzb2x2ZShwYXRobmFtZSwgaHJlZilcbiAgICBhcyA9IGFzID8gcmVzb2x2ZShwYXRobmFtZSwgYXMpIDogaHJlZlxuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgICBsZXQgeyBzY3JvbGwgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgICB9XG5cbiAgICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgICBSb3V0ZXJbdGhpcy5wcm9wcy5yZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgICAgc2hhbGxvdzogdGhpcy5wcm9wcy5zaGFsbG93LFxuICAgIH0pLnRoZW4oKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcHJlZmV0Y2gob3B0aW9ucz86IFByZWZldGNoT3B0aW9ucyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wIHx8IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gICAgY29uc3QgcGF0aHMgPSB0aGlzLmdldFBhdGhzKClcbiAgICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gICAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gICAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gICAgUm91dGVyLnByZWZldGNoKHBhdGhzWy8qIGhyZWYgKi8gMF0sIHBhdGhzWy8qIGFzUGF0aCAqLyAxXSwgb3B0aW9ucykuY2F0Y2goXG4gICAgICAoZXJyKSA9PiB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgICAgIHRocm93IGVyclxuICAgICAgICB9XG4gICAgICB9XG4gICAgKVxuICAgIHByZWZldGNoZWRbXG4gICAgICBwYXRocy5qb2luKFxuICAgICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgICAnJSdcbiAgICAgIClcbiAgICBdID0gdHJ1ZVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBocmVmLCBhcyB9ID0gdGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZiwgdGhpcy5wcm9wcy5hcylcbiAgICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICAgIH1cblxuICAgIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICAgIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICAgIGNvbnN0IHByb3BzOiB7XG4gICAgICBvbk1vdXNlRW50ZXI6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgICAgaHJlZj86IHN0cmluZ1xuICAgICAgcmVmPzogYW55XG4gICAgfSA9IHtcbiAgICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5oYW5kbGVSZWYoZWwpXG5cbiAgICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uTW91c2VFbnRlcjogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByZWZldGNoKHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICAgIH0sXG4gICAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICB0aGlzLmxpbmtDbGlja2VkKGUpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfVxuXG4gICAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gICAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gICAgaWYgKFxuICAgICAgdGhpcy5wcm9wcy5wYXNzSHJlZiB8fFxuICAgICAgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpXG4gICAgKSB7XG4gICAgICBwcm9wcy5ocmVmID0gYXMgfHwgaHJlZlxuICAgIH1cblxuICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICBpZiAoXG4gICAgICAgIHByb3BzLmhyZWYgJiZcbiAgICAgICAgdHlwZW9mIF9fTkVYVF9EQVRBX18gIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydFxuICAgICAgKSB7XG4gICAgICAgIHByb3BzLmhyZWYgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChwcm9wcy5ocmVmKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHByb3BzKVxuICB9XG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICBjb25zdCB3YXJuID0gZXhlY09uY2UoY29uc29sZS5lcnJvcilcblxuICAvLyBUaGlzIG1vZHVsZSBnZXRzIHJlbW92ZWQgYnkgd2VicGFjay5JZ25vcmVQbHVnaW5cbiAgY29uc3QgUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpXG4gIGNvbnN0IGV4YWN0ID0gcmVxdWlyZSgncHJvcC10eXBlcy1leGFjdCcpXG4gIC8vIEB0cy1pZ25vcmUgdGhlIHByb3BlcnR5IGlzIHN1cHBvcnRlZCwgd2hlbiBkZWNsYXJpbmcgaXQgb24gdGhlIGNsYXNzIGl0IG91dHB1dHMgYW4gZXh0cmEgYml0IG9mIGNvZGUgd2hpY2ggaXMgbm90IG5lZWRlZC5cbiAgTGluay5wcm9wVHlwZXMgPSBleGFjdCh7XG4gICAgaHJlZjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLmlzUmVxdWlyZWQsXG4gICAgYXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgICBwcmVmZXRjaDogUHJvcFR5cGVzLmJvb2wsXG4gICAgcmVwbGFjZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2hhbGxvdzogUHJvcFR5cGVzLmJvb2wsXG4gICAgcGFzc0hyZWY6IFByb3BUeXBlcy5ib29sLFxuICAgIHNjcm9sbDogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICAocHJvcHM6IGFueSwgcHJvcE5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHByb3BzW3Byb3BOYW1lXVxuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgd2FybihcbiAgICAgICAgICAgIGBXYXJuaW5nOiBZb3UncmUgdXNpbmcgYSBzdHJpbmcgZGlyZWN0bHkgaW5zaWRlIDxMaW5rPi4gVGhpcyB1c2FnZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBQbGVhc2UgYWRkIGFuIDxhPiB0YWcgYXMgY2hpbGQgb2YgPExpbms+YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9LFxuICAgIF0pLmlzUmVxdWlyZWQsXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKHt9LCBfcm91dGVyW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHBhcnNlLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpICE9PSAwID8gYmFzZVBhdGggKyBwYXRoIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgPT09IDBcbiAgICA/IHBhdGguc3Vic3RyKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG4gICAgOiBwYXRoXG59XG5cbmZ1bmN0aW9uIHRvUm91dGUocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGgucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLydcbn1cblxuY29uc3QgcHJlcGFyZVJvdXRlID0gKHBhdGg6IHN0cmluZykgPT5cbiAgdG9Sb3V0ZSghcGF0aCB8fCBwYXRoID09PSAnLycgPyAnL2luZGV4JyA6IHBhdGgpXG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbnR5cGUgQ29tcG9uZW50UmVzID0geyBwYWdlOiBDb21wb25lbnRUeXBlOyBtb2Q6IGFueSB9XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG50eXBlIFJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogYW55XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFJvdXRlSW5mbywgQXBwPzogQ29tcG9uZW50VHlwZSkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IGFueSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5IHwgbnVsbCxcbiAgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4sXG4gIGNiPzogKC4uLmFyZ3M6IGFueSkgPT4gYW55XG4pIHtcbiAgbGV0IGF0dGVtcHRzID0gaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMVxuICBmdW5jdGlvbiBnZXRSZXNwb25zZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBmZXRjaChcbiAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKFxuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgX19ORVhUX0RBVEFfX1xuICAgICAgICAgIGAvX25leHQvZGF0YS8ke19fTkVYVF9EQVRBX18uYnVpbGRJZH0ke2RlbEJhc2VQYXRoKHBhdGhuYW1lKX0uanNvbmBcbiAgICAgICAgKSxcbiAgICAgICAgcXVlcnksXG4gICAgICB9KSxcbiAgICAgIHtcbiAgICAgICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgICAgICAvL1xuICAgICAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgICAgIC8vID4gb3B0aW9uLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAgICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICB9XG4gICAgKS50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgIGlmICgtLWF0dGVtcHRzID4gMCAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgIHJldHVybiBnZXRSZXNwb25zZSgpXG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGdldFJlc3BvbnNlKClcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuIGNiID8gY2IoZGF0YSkgOiBkYXRhXG4gICAgfSlcbiAgICAuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAgIC8vIGxvb3AuXG4gICAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICAgIDsoZXJyIGFzIGFueSkuY29kZSA9ICdQQUdFX0xPQURfRVJST1InXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQ29tcG9uZW50VHlwZVxuICAgICAgd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0geyBDb21wb25lbnQ6IEFwcCB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBhc1xuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcbiAgICB9XG4gIH1cblxuICAvLyBAZGVwcmVjYXRlZCBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBldmVuIHRob3VnaCBpdCdzIGEgcHJpdmF0ZSBtZXRob2QuXG4gIHN0YXRpYyBfcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgcmV0dXJuIHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHVybFxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGlmICghZS5zdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAoXG4gICAgICBlLnN0YXRlICYmXG4gICAgICB0aGlzLmlzU3NyICYmXG4gICAgICBlLnN0YXRlLmFzID09PSB0aGlzLmFzUGF0aCAmJlxuICAgICAgcGFyc2UoZS5zdGF0ZS51cmwpLnBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lXG4gICAgKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoZS5zdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gZS5zdGF0ZVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGFzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ2Bwb3BzdGF0ZWAgZXZlbnQgdHJpZ2dlcmVkIGJ1dCBgZXZlbnQuc3RhdGVgIGRpZCBub3QgaGF2ZSBgdXJsYCBvciBgYXNgIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3BvcHN0YXRlLXN0YXRlLWVtcHR5J1xuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgdXBkYXRlKHJvdXRlOiBzdHJpbmcsIG1vZDogYW55KSB7XG4gICAgY29uc3QgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlID0gbW9kLmRlZmF1bHQgfHwgbW9kXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHVwZGF0ZSB1bmF2YWlsYWJsZSByb3V0ZTogJHtyb3V0ZX1gKVxuICAgIH1cblxuICAgIGNvbnN0IG5ld0RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBDb21wb25lbnQsXG4gICAgICBfX05fU1NHOiBtb2QuX19OX1NTRyxcbiAgICAgIF9fTl9TU1A6IG1vZC5fX05fU1NQLFxuICAgIH0pXG4gICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IG5ld0RhdGFcblxuICAgIC8vIHBhZ2VzL19hcHAuanMgdXBkYXRlZFxuICAgIGlmIChyb3V0ZSA9PT0gJy9fYXBwJykge1xuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHJvdXRlID09PSB0aGlzLnJvdXRlKSB7XG4gICAgICB0aGlzLm5vdGlmeShuZXdEYXRhKVxuICAgIH1cbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICBfdXJsOiBVcmwsXG4gICAgX2FzOiBVcmwsXG4gICAgb3B0aW9uczogYW55XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgICB9XG4gICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgICBpZiAoU1QpIHtcbiAgICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgICAgfVxuXG4gICAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gICAgICBsZXQgdXJsID0gdHlwZW9mIF91cmwgPT09ICdvYmplY3QnID8gZm9ybWF0V2l0aFZhbGlkYXRpb24oX3VybCkgOiBfdXJsXG4gICAgICBsZXQgYXMgPSB0eXBlb2YgX2FzID09PSAnb2JqZWN0JyA/IGZvcm1hdFdpdGhWYWxpZGF0aW9uKF9hcykgOiBfYXNcblxuICAgICAgdXJsID0gYWRkQmFzZVBhdGgodXJsKVxuICAgICAgYXMgPSBhZGRCYXNlUGF0aChhcylcblxuICAgICAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAgICAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5IGZvciB0aGUgU1NSIHBhZ2UuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgICAgaWYgKF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCkge1xuICAgICAgICAgIGFzID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQoYXMpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQoYXMpXG5cbiAgICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGFzKSkge1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgICB0aGlzLnNjcm9sbFRvSGFzaChhcylcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnksIHByb3RvY29sIH0gPSBwYXJzZSh1cmwsIHRydWUpXG5cbiAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSlcbiAgICAgIH1cblxuICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICAgIGlmICghdGhpcy51cmxJc05ldyhhcykpIHtcbiAgICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKVxuICAgICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSBwYXJzZShhcylcbiAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgICApXG5cbiAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZWplY3QoXG4gICAgICAgICAgICAgIG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgICtcbiAgICAgICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgICAgLy8gSWYgc2hhbGxvdyBpcyB0cnVlIGFuZCB0aGUgcm91dGUgZXhpc3RzIGluIHRoZSByb3V0ZXIgY2FjaGUgd2UgcmV1c2UgdGhlIHByZXZpb3VzIHJlc3VsdFxuICAgICAgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cpLnRoZW4oXG4gICAgICAgIChyb3V0ZUluZm8pID0+IHtcbiAgICAgICAgICBjb25zdCB7IGVycm9yIH0gPSByb3V0ZUluZm9cblxuICAgICAgICAgIGlmIChlcnJvciAmJiBlcnJvci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVJbmZvKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgYXMpXG4gICAgICAgICAgICAgIHRocm93IGVycm9yXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSlcbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICByZWplY3RcbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxSb3V0ZUluZm8+IHtcbiAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAvLyBJZiB0aGVyZSBpcyBhIHNoYWxsb3cgcm91dGUgdHJhbnNpdGlvbiBwb3NzaWJsZVxuICAgIC8vIElmIHRoZSByb3V0ZSBpcyBhbHJlYWR5IHJlbmRlcmVkIG9uIHRoZSBzY3JlZW4uXG4gICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNhY2hlZFJvdXRlSW5mbylcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVFcnJvciA9IChcbiAgICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICAgICkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGlmIChlcnIuY29kZSA9PT0gJ1BBR0VfTE9BRF9FUlJPUicgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAgICAgLy8gU28sIHdlIG5lZWQgdG8gbWFyayBpdCBhcyBhIGNhbmNlbGxlZCBlcnJvciBhbmQgc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc29sdmUoXG4gICAgICAgICAgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50IH0gPSByZXNcbiAgICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvOiBSb3V0ZUluZm8gPSB7IENvbXBvbmVudCwgZXJyIH1cbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIH0gYXMgYW55KS50aGVuKFxuICAgICAgICAgICAgICAgICAgKHByb3BzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVyclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbylcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAoZ2lwRXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsXG4gICAgICAgICAgICAgICAgICAgICAgZ2lwRXJyXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSkgYXMgUHJvbWlzZTxSb3V0ZUluZm8+XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IGhhbmRsZUVycm9yKGVyciwgdHJ1ZSkpXG4gICAgICAgIClcbiAgICAgIH0pIGFzIFByb21pc2U8Um91dGVJbmZvPlxuICAgIH1cblxuICAgIHJldHVybiAobmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKGNhY2hlZFJvdXRlSW5mbykge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pXG4gICAgICB9XG5cbiAgICAgIHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oXG4gICAgICAgIChyZXMpID0+XG4gICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pLFxuICAgICAgICByZWplY3RcbiAgICAgIClcbiAgICB9KSBhcyBQcm9taXNlPFJvdXRlSW5mbz4pXG4gICAgICAudGhlbigocm91dGVJbmZvOiBSb3V0ZUluZm8pID0+IHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0RGF0YTxSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgICAgX19OX1NTR1xuICAgICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGFzKVxuICAgICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoYXMpXG4gICAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICAgIClcbiAgICAgICAgKS50aGVuKChwcm9wcykgPT4ge1xuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goaGFuZGxlRXJyb3IpXG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcHJvdG9jb2wgfSA9IHBhcnNlKHVybClcblxuICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGNvbnN0IHJvdXRlID0gZGVsQmFzZVBhdGgodG9Sb3V0ZShwYXRobmFtZSkpXG4gICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEodXJsLCBkZWxCYXNlUGF0aChhc1BhdGgpKSxcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgICAgXSkudGhlbigoKSA9PiByZXNvbHZlKCksIHJlamVjdClcbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8Q29tcG9uZW50UmVzPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG4gICAgcm91dGUgPSBkZWxCYXNlUGF0aChyb3V0ZSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YSA9IChhc1BhdGg6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiA9PiB7XG4gICAgY29uc3QgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGFyc2UoYXNQYXRoKS5wYXRobmFtZSEpXG5cbiAgICByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1twYXRobmFtZV1cbiAgICAgID8gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW3BhdGhuYW1lXSlcbiAgICAgIDogZmV0Y2hOZXh0RGF0YShcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIHRoaXMuaXNTc3IsXG4gICAgICAgICAgKGRhdGEpID0+ICh0aGlzLnNkY1twYXRobmFtZV0gPSBkYXRhKVxuICAgICAgICApXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YSA9IChhc1BhdGg6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiA9PiB7XG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZShhc1BhdGgsIHRydWUpXG4gICAgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGF0aG5hbWUhKVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHApXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgY29uc3QgZSA9IG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJylcbiAgICAgIDsoZSBhcyBhbnkpLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGUsIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogeyBwb3M6IG51bWJlcjsgcmVwZWF0OiBib29sZWFuIH0gfVxufSB7XG4gIC8vIEVzY2FwZSBhbGwgY2hhcmFjdGVycyB0aGF0IGNvdWxkIGJlIGNvbnNpZGVyZWQgUmVnRXhcbiAgY29uc3QgZXNjYXBlZFJvdXRlID0gZXNjYXBlUmVnZXgobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiB7IHBvczogbnVtYmVyOyByZXBlYXQ6IGJvb2xlYW4gfSB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG5cbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoXG4gICAgL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZyxcbiAgICAoXywgJDEpID0+IHtcbiAgICAgIGNvbnN0IGlzT3B0aW9uYWwgPSAvXlxcXFxcXFsuKlxcXFxcXF0kLy50ZXN0KCQxKVxuICAgICAgaWYgKGlzT3B0aW9uYWwpIHtcbiAgICAgICAgJDEgPSAkMS5zbGljZSgyLCAtMilcbiAgICAgIH1cbiAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSlcbiAgICAgIGlmIChpc0NhdGNoQWxsKSB7XG4gICAgICAgICQxID0gJDEuc2xpY2UoNilcbiAgICAgIH1cbiAgICAgIGdyb3Vwc1tcbiAgICAgICAgJDFcbiAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgXSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdDogaXNDYXRjaEFsbCB9XG4gICAgICByZXR1cm4gaXNDYXRjaEFsbCA/IChpc09wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgfVxuICApXG5cbiAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZShcbiAgICAgIC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csXG4gICAgICAoXywgJDEpID0+IHtcbiAgICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKVxuICAgICAgICBjb25zdCBrZXkgPSAkMVxuICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpXG5cbiAgICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGxcbiAgICAgICAgICA/IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT4uKz8pYFxuICAgICAgICAgIDogYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9PlteL10rPylgXG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cCgnXicgKyBwYXJhbWV0ZXJpemVkUm91dGUgKyAnKD86Lyk/JCcsICdpJyksXG4gICAgZ3JvdXBzLFxuICAgIG5hbWVkUmVnZXg6IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlXG4gICAgICA/IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYFxuICAgICAgOiB1bmRlZmluZWQsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGZvcm1hdCwgVVJMRm9ybWF0T3B0aW9ucywgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICcuLi8uLi9saWIvbG9hZC1lbnYtY29uZmlnJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBhbnlcbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBpbnRlcmZhY2UtbmFtZVxuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBzdGF0aWNNYXJrdXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkZXZGaWxlczogc3RyaW5nW11cbiAgZmlsZXM6IHN0cmluZ1tdXG4gIGxvd1ByaW9yaXR5RmlsZXM6IHN0cmluZ1tdXG4gIHBvbHlmaWxsRmlsZXM6IHN0cmluZ1tdXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaHRtbFByb3BzOiBhbnlcbiAgYm9keVRhZ3M6IGFueVtdXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICB1cmw6IFVybE9iamVjdCxcbiAgb3B0aW9ucz86IFVSTEZvcm1hdE9wdGlvbnNcbik6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXQodXJsIGFzIFVSTCwgb3B0aW9ucylcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IERhc2hib2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9EYXNoYm9hcmQvRGFzaGJvYXJkXCI7XHJcblxyXG5jb25zdCBpbmRleFBhZ2UgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPERhc2hib2FyZCAvPlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXhQYWdlO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub2RlLWZldGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlcy1leGFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVybFwiKTsiXSwic291cmNlUm9vdCI6IiJ9
=======
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rhc2hib2FyZC9Db250ZW50cy9DYXJvdXNlbEZvcm0vQ2Fyb3VzZWxGb3JtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGFzaGJvYXJkL0NvbnRlbnRzL0Nhcm91c2VsRm9ybS9DYXJvdXNlbEZvcm0ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rhc2hib2FyZC9Db250ZW50cy9Db250ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rhc2hib2FyZC9Db250ZW50cy9Db250ZW50cy5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGFzaGJvYXJkL0NvbnRlbnRzL0Rhc2hib2FyZFN1bW1hcnkvRGFzaGJvYXJkU3VtbWFyeS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rhc2hib2FyZC9Db250ZW50cy9EYXNoYm9hcmRTdW1tYXJ5L0Rhc2hib2FyZFN1bW1hcnkubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rhc2hib2FyZC9Db250ZW50cy9Qcm9kdWN0Rm9ybS9Qcm9kdWN0Rm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rhc2hib2FyZC9Db250ZW50cy9Qcm9kdWN0Rm9ybS9wcm9kdWN0Rm9ybS5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGFzaGJvYXJkL0NvbnRlbnRzL1Byb2R1Y3RzL1Byb2R1Y3QvUHJvZHVjdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rhc2hib2FyZC9Db250ZW50cy9Qcm9kdWN0cy9Qcm9kdWN0L1Byb2R1Y3QubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rhc2hib2FyZC9Db250ZW50cy9Qcm9kdWN0cy9Qcm9kdWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rhc2hib2FyZC9Db250ZW50cy9Qcm9kdWN0cy9Qcm9kdWN0cy5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGFzaGJvYXJkL0Rhc2hDYXJkcy9PdmVydmlld3MvT3ZlcnZpZXcvT3ZlcnZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EYXNoYm9hcmQvRGFzaENhcmRzL092ZXJ2aWV3cy9PdmVydmlldy9PdmVydmlldy5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGFzaGJvYXJkL0Rhc2hDYXJkcy9PdmVydmlld3MvT3ZlcnZpZXdzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGFzaGJvYXJkL0Rhc2hDYXJkcy9PdmVydmlld3MvT3ZlcnZpZXdzLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EYXNoYm9hcmQvRGFzaGJvYXJkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGFzaGJvYXJkL0Rhc2hib2FyZC5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGFzaGJvYXJkL1NpZGVCYXIvU2lkZUJhci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rhc2hib2FyZC9TaWRlQmFyL1NpZGVCYXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rhc2hib2FyZC9Ub29sQmFyL1Rvb2xCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EYXNoYm9hcmQvVG9vbEJhci9Ub29sQmFyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dvLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU3BhY2VyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvQmFja2Ryb3AuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9CdXR0b24vQnV0dG9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvQnV0dG9uL0J1dHRvbi5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvSW1hZ2VDYXJkcy9JbWFnZUNhcmRzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvSW1hZ2VDYXJkcy9JbWFnZUNhcmRzLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9JbnB1dC9JbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL0lucHV0L0lucHV0Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9JbnB1dC9JbnB1dEltYWdlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvTW9kYWwvTW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9Nb2RhbC9Nb2RhbC5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2xpYi9odHRwL3Byb2R1Y3RzLmpzIiwid2VicGFjazovLy8uL2xpYi9xdWVyaWVzL3Byb2R1Y3RzLmpzIiwid2VicGFjazovLy8uL2xpYi9yZXF1ZXN0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZS1mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzLWV4YWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1qc3gvc3R5bGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiJdLCJuYW1lcyI6WyJjYXJvdXNlbHMiLCJpbWFnZSIsInRpdGxlIiwiQ2Fyb3VzZWxGb3JtIiwiQ29tcG9uZW50IiwiZWxlbWVudFR5cGUiLCJlbGVtZW50Q29uZmlnIiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJyZW5kZXIiLCJjbGFzc2VzIiwiRm9ybXNXcmFwcGVyIiwiY29udGVudHMiLCJwcm9wcyIsImNvbnRlbnQiLCJDb250ZW50cyIsIlNpZGVCYXJSZXBsYWNlIiwiTWFpbkNvbnRlbnRzIiwiZGFzaGJvYXJkU3VtbWFyeSIsInByb2R1Y3RMaXN0IiwibmFtZSIsInByaWNlIiwicXVhbnRpdHkiLCJjYXRlZ29yeSIsImNvbG9ycyIsInNpemVzIiwiYnJhbmQiLCJQcm9kdWN0Rm9ybSIsInByb2R1Y3RGb3JtIiwib3B0aW9ucyIsImRpc3BsYXlWYWx1ZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2VfdXJscyIsImV2ZW50IiwiaW5wdXRJZGVudGlmaWVyIiwidXBkYXRlZFByb2R1Y3RGb3JtIiwic3RhdGUiLCJ1cGRhdGVkRm9ybUVsZW1lbnQiLCJ0YXJnZXQiLCJzZXRTdGF0ZSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJmaWxlcyIsImZldGNoIiwiQkFTRV9VUkwiLCJtZXRob2QiLCJib2R5IiwidGhlbiIsInJlcyIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImltYWdlVXJscyIsImNhdGNoIiwiZXJyIiwicHJldmVudERlZmF1bHQiLCJpbnB1dEVsZW1lbnRJZGVudGlmaWVyIiwicHJvZHVjdCIsInByb2R1Y3REYXRhIiwic3BsaXQiLCJtYXAiLCJ2IiwiTnVtYmVyIiwicGFyc2VGbG9hdCIsIm5ld1Byb2R1Y3QiLCJQcm9kdWN0IiwicGFyc2VJbnQiLCJzZW5kU2F2ZVJlcXVlc3QiLCJzZWFyY2giLCJ1cGRhdGUiLCJmb3JtRWxlbWVudEFycmF5Iiwia2V5IiwicHVzaCIsImlkIiwiY29uZmlnIiwiRm9ybSIsImZvcm1FbGVtZW50IiwiaW5kZXgiLCJpbnB1dENoYW5nZUhhbmRsZXIiLCJvbkZpbGVDaGFuZ2VIYW5kbGVyIiwiYWRkUHJvZHVjdEhhbmRsZXIiLCJqb2luIiwiQWN0aW9uIiwic2hvd1VwZGF0ZU1vZGFsIiwiRGVsZXRlIiwicHJvZHVjdHMiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJ1c2VTdGF0ZSIsIm1vZGFsQ29udGVudCIsInNldE1vZGFsQ29udGVudCIsIm1vZGFsQ2xvc2VIYW5sZGVyIiwic2hvd0FkZFByb2R1Y3RNb2RhbCIsInNob3dVcGRhdGVQcm9kdWN0TW9kYWwiLCJtb2RhbCIsIlByb2R1Y3RzIiwiVG9wIiwiVGFibGUiLCJvdmVydmlldyIsIk92ZXJ2aWV3IiwicHJvcGVydGllcyIsImNhcHRpb24iLCJvdmVydmlld3MiLCJPdmVydmlld3MiLCJkYXNob2FyZCIsImNvbnRlbnRTdGF0ZSIsInNldENvbnRlbnRTdGF0ZSIsImNoYW5nZUNvbnRlbnRIYW5sZGVyIiwiZGFzaGJvYXJkIiwibGlua3MiLCJpY29uIiwic2lkZUJhciIsInNpZGVOYXYiLCJuYXYiLCJjbGlja2VkIiwidG9vbEJhciIsImxvZ29XcmFwcGVyIiwiTmF2IiwibG9nbyIsInNwYWNlciIsImJhY2tkcm9wIiwic2hvdyIsImJ1dHRvbiIsIkJ1dHRvbiIsImNoaWxkcmVuIiwiaW1hZ2VDYXJkcyIsIlByb2R1Y3RJbWFnZUNvbnRhaW5lciIsImltYWdlX3VybCIsIlByb2R1Y3RJbWFnZSIsImlucHV0IiwiaW5wdXRFbGVtZW50IiwiSW5wdXRFbGVtZW50IiwiY2hhbmdlZCIsIm9wdGlvbiIsIklucHV0IiwiTGFiZWwiLCJsYWJlbCIsImlucHV0SW1hZ2UiLCJjaGFuZ2UiLCJtb2RhbENsb3NlZCIsIk1vZGFsIiwidHJhbnNmb3JtIiwib3BhY2l0eSIsImNvbnN0cnVjdG9yIiwicHJvZHVjdF9uYW1lIiwicmVxdWVzdCIsImFkZFByb2R1Y3RRdWVyeSIsInNlbmRGaW5kUmVxdWVzdCIsInF1ZXJ5IiwidmFyaWFibGVzIiwidXBkYXRlUHJvZHVjdFF1ZXJ5IiwiR1JBUEhRTFVSTCIsImdyYXBocWxRdWVyeSIsInJlc3BvbnNlIiwiaGVhZGVycyIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1cmwiLCJvcmlnaW4iLCJsYXN0SHJlZiIsImxhc3RBcyIsImxhc3RSZXN1bHQiLCJocmVmIiwiYXMiLCJyZXN1bHQiLCJmb3JtYXRGdW5jIiwibGlzdGVuZXJzIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJwcmVmZXRjaGVkIiwib2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJjYiIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJnZXRPYnNlcnZlciIsInAiLCJtZW1vaXplZEZvcm1hdFVybCIsImZvcm1hdFVybCIsImFzSHJlZiIsImUiLCJub2RlTmFtZSIsImlzTG9jYWwiLCJzY3JvbGwiLCJSb3V0ZXIiLCJzaGFsbG93Iiwic3VjY2VzcyIsImRvY3VtZW50IiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJnZXRQYXRocyIsInJlc29sdmVkSHJlZiIsInBhcnNlZEFzIiwiaGFuZGxlUmVmIiwicmVmIiwiaXNQcmVmZXRjaGVkIiwicHJlZmV0Y2giLCJwYXRocyIsImNoaWxkIiwiQ2hpbGRyZW4iLCJlbCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5Iiwib25DbGljayIsInByb2Nlc3MiLCJSZWFjdCIsIndhcm4iLCJQcm9wVHlwZXMiLCJyZXF1aXJlIiwiZXhhY3QiLCJMaW5rIiwicmVwbGFjZSIsInBhc3NIcmVmIiwic2luZ2xldG9uUm91dGVyIiwicm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsIk9iamVjdCIsImdldCIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsInBhdGgiLCJwcmVwYXJlUm91dGUiLCJ0b1JvdXRlIiwiYXR0ZW1wdHMiLCJpc1NlcnZlclJlbmRlciIsInBhdGhuYW1lIiwiYWRkQmFzZVBhdGgiLCJfX05FWFRfREFUQV9fIiwiYnVpbGRJZCIsImRlbEJhc2VQYXRoIiwiY3JlZGVudGlhbHMiLCJnZXRSZXNwb25zZSIsInJvdXRlIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJQcm9taXNlIiwiZmV0Y2hOZXh0RGF0YSIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwibW9kIiwibmV3RGF0YSIsInJlbG9hZCIsImJhY2siLCJTVCIsInBlcmZvcm1hbmNlIiwicmVzb2x2ZSIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwibWlzc2luZ1BhcmFtcyIsInBhcmFtIiwicmVqZWN0IiwiYXNQYXRobmFtZSIsInJvdXRlSW5mbyIsImVycm9yIiwiYXBwQ29tcCIsImNoYW5nZVN0YXRlIiwiZ2V0Um91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwiaGFuZGxlRXJyb3IiLCJwYWdlIiwiZ2lwRXJyIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImhhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJjYW5jZWxsZWQiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImZuIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsIlRFU1RfUk9VVEUiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInBhcmFtcyIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJlc2NhcGVkUm91dGUiLCJlc2NhcGVSZWdleCIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJpc09wdGlvbmFsIiwiJDEiLCJpc0NhdGNoQWxsIiwicG9zIiwicmVwZWF0IiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJuYW1lZFJlZ2V4IiwidXNlZCIsInByb3RvY29sIiwiaG9zdG5hbWUiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJpbmRleFBhZ2UiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSx3RTs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0EsTUFBTUEsU0FBUyxHQUFHLENBQ2hCO0FBQ0VDLE9BQUssRUFBRSx3QkFEVDtBQUVFQyxPQUFLLEVBQUU7QUFGVCxDQURnQixFQUtoQjtBQUNFRCxPQUFLLEVBQUUseUJBRFQ7QUFFRUMsT0FBSyxFQUFFO0FBRlQsQ0FMZ0IsRUFTaEI7QUFDRUQsT0FBSyxFQUFFLHlCQURUO0FBRUVDLE9BQUssRUFBRTtBQUZULENBVGdCLEVBYWhCO0FBQ0VELE9BQUssRUFBRSx5QkFEVDtBQUVFQyxPQUFLLEVBQUU7QUFGVCxDQWJnQixDQUFsQjtBQW1CQTs7QUFDQSxNQUFNQyxZQUFOLFNBQTJCQywrQ0FBM0IsQ0FBcUM7QUFBQTtBQUFBOztBQUFBLG1DQUMzQjtBQUNOSixlQUFTLEVBQUUsQ0FDVDtBQUNFRSxhQUFLLEVBQUU7QUFDTEcscUJBQVcsRUFBRSxPQURSO0FBRUxDLHVCQUFhLEVBQUU7QUFDYkMsZ0JBQUksRUFBRSxNQURPO0FBRWJDLHVCQUFXLEVBQUU7QUFGQSxXQUZWO0FBTUxDLGVBQUssRUFBRVQsU0FBUyxDQUFDLENBQUQsQ0FBVCxDQUFhRTtBQU5mLFNBRFQ7QUFTRUQsYUFBSyxFQUFFO0FBQ0xJLHFCQUFXLEVBQUUsT0FEUjtBQUVMQyx1QkFBYSxFQUFFO0FBQ2JDLGdCQUFJLEVBQUU7QUFETyxXQUZWO0FBS0xFLGVBQUssRUFBRVQsU0FBUyxDQUFDLENBQUQsQ0FBVCxDQUFhQztBQUxmO0FBVFQsT0FEUyxFQWtCVDtBQUNFQyxhQUFLLEVBQUU7QUFDTEcscUJBQVcsRUFBRSxPQURSO0FBRUxDLHVCQUFhLEVBQUU7QUFDYkMsZ0JBQUksRUFBRSxNQURPO0FBRWJDLHVCQUFXLEVBQUU7QUFGQSxXQUZWO0FBTUxDLGVBQUssRUFBRVQsU0FBUyxDQUFDLENBQUQsQ0FBVCxDQUFhRTtBQU5mLFNBRFQ7QUFTRUQsYUFBSyxFQUFFO0FBQ0xJLHFCQUFXLEVBQUUsT0FEUjtBQUVMQyx1QkFBYSxFQUFFO0FBQ2JDLGdCQUFJLEVBQUU7QUFETyxXQUZWO0FBS0xFLGVBQUssRUFBRVQsU0FBUyxDQUFDLENBQUQsQ0FBVCxDQUFhQztBQUxmO0FBVFQsT0FsQlMsRUFtQ1Q7QUFDRUMsYUFBSyxFQUFFO0FBQ0xHLHFCQUFXLEVBQUUsT0FEUjtBQUVMQyx1QkFBYSxFQUFFO0FBQ2JDLGdCQUFJLEVBQUUsTUFETztBQUViQyx1QkFBVyxFQUFFO0FBRkEsV0FGVjtBQU1MQyxlQUFLLEVBQUVULFNBQVMsQ0FBQyxDQUFELENBQVQsQ0FBYUU7QUFOZixTQURUO0FBU0VELGFBQUssRUFBRTtBQUNMSSxxQkFBVyxFQUFFLE9BRFI7QUFFTEMsdUJBQWEsRUFBRTtBQUNiQyxnQkFBSSxFQUFFO0FBRE8sV0FGVjtBQUtMRSxlQUFLLEVBQUVULFNBQVMsQ0FBQyxDQUFELENBQVQsQ0FBYUM7QUFMZjtBQVRULE9BbkNTLEVBb0RUO0FBQ0VDLGFBQUssRUFBRTtBQUNMRyxxQkFBVyxFQUFFLE9BRFI7QUFFTEMsdUJBQWEsRUFBRTtBQUNiQyxnQkFBSSxFQUFFLE1BRE87QUFFYkMsdUJBQVcsRUFBRTtBQUZBLFdBRlY7QUFNTEMsZUFBSyxFQUFFVCxTQUFTLENBQUMsQ0FBRCxDQUFULENBQWFFO0FBTmYsU0FEVDtBQVNFRCxhQUFLLEVBQUU7QUFDTEkscUJBQVcsRUFBRSxPQURSO0FBRUxDLHVCQUFhLEVBQUU7QUFDYkMsZ0JBQUksRUFBRTtBQURPLFdBRlY7QUFLTEUsZUFBSyxFQUFFVCxTQUFTLENBQUMsQ0FBRCxDQUFULENBQWFDO0FBTGY7QUFUVCxPQXBEUztBQURMLEtBRDJCO0FBQUE7O0FBeUVuQ1MsUUFBTSxHQUFHO0FBQ1AsV0FBTztBQUFLLGVBQVMsRUFBRUMsK0RBQU8sQ0FBQ0MsWUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFQO0FBQ0Q7O0FBM0VrQzs7QUE4RXRCVCwyRUFBZixFOzs7Ozs7Ozs7OztBQ25HQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNVSxRQUFRLEdBQUlDLEtBQUQsSUFBVztBQUMxQixNQUFJQyxPQUFPLEdBQUcsSUFBZDs7QUFDQSxVQUFRRCxLQUFLLENBQUNQLElBQWQ7QUFDRSxTQUFLLFNBQUw7QUFDRVEsYUFBTyxHQUFHLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFWO0FBQ0E7O0FBRUYsU0FBSyxlQUFMO0FBQ0VBLGFBQU8sR0FBRyxNQUFDLFdBQUQ7QUFBYSxhQUFLLEVBQUMsZ0JBQW5CO0FBQW9DLGNBQU0sRUFBRSxJQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQVY7QUFDQTs7QUFFRixTQUFLLFVBQUw7QUFDRUEsYUFBTyxHQUFHLE1BQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFWO0FBQ0E7O0FBRUY7QUFDRUEsYUFBTyxHQUFHLE1BQUMsMEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFWO0FBZEo7O0FBZ0JBLFNBQ0U7QUFBSyxhQUFTLEVBQUVKLDJEQUFPLENBQUNLLFFBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUwsMkRBQU8sQ0FBQ00sY0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0NBREYsQ0FERixFQUlFO0FBQUssYUFBUyxFQUFFTiwyREFBTyxDQUFDTyxZQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0dILE9BSEgsQ0FKRixDQURGO0FBWUQsQ0E5QkQ7O0FBZ0NlRix1RUFBZixFOzs7Ozs7Ozs7OztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBRUE7QUFDQTs7QUFFQSxNQUFNTSxnQkFBZ0IsR0FBRyxNQUFNO0FBQzdCLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsdURBQUQ7QUFBTyxhQUFTLEVBQUMsT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREY7QUFLRCxDQU5EOztBQVFlQSwrRUFBZixFOzs7Ozs7Ozs7OztBQ2JBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUNBO0FBRUEsTUFBTUMsV0FBVyxHQUFHLENBQ2xCO0FBQ0VDLE1BQUksRUFBRSxxQkFEUjtBQUVFQyxPQUFLLEVBQUUsS0FGVDtBQUdFckIsT0FBSyxFQUFFLHFCQUhUO0FBSUVzQixVQUFRLEVBQUUsRUFKWjtBQUtFQyxVQUFRLEVBQUUsS0FMWjtBQU1FQyxRQUFNLEVBQUUsQ0FBQyxPQUFELEVBQVUsTUFBVixFQUFrQixLQUFsQixDQU5WO0FBT0VDLE9BQUssRUFBRSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixDQVBUO0FBUUVDLE9BQUssRUFBRTtBQVJULENBRGtCLEVBV2xCO0FBQ0VOLE1BQUksRUFBRSxpQkFEUjtBQUVFTSxPQUFLLEVBQUUsTUFGVDtBQUdFTCxPQUFLLEVBQUUsT0FIVDtBQUlFckIsT0FBSyxFQUFFLHFCQUpUO0FBS0VzQixVQUFRLEVBQUUsRUFMWjtBQU1FQyxVQUFRLEVBQUUsS0FOWjtBQU9FQyxRQUFNLEVBQUUsQ0FBQyxPQUFELEVBQVUsTUFBVixFQUFrQixLQUFsQixDQVBWO0FBUUVDLE9BQUssRUFBRSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYjtBQVJULENBWGtCLEVBcUJsQjtBQUNFTCxNQUFJLEVBQUUsdUJBRFI7QUFFRU0sT0FBSyxFQUFFLE1BRlQ7QUFHRUwsT0FBSyxFQUFFLE9BSFQ7QUFJRXJCLE9BQUssRUFBRSxrQkFKVDtBQUtFc0IsVUFBUSxFQUFFLEVBTFo7QUFNRUMsVUFBUSxFQUFFLEtBTlo7QUFPRUMsUUFBTSxFQUFFLENBQUMsT0FBRCxFQUFVLE1BQVYsRUFBa0IsS0FBbEIsQ0FQVjtBQVFFQyxPQUFLLEVBQUUsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWI7QUFSVCxDQXJCa0IsRUErQmxCO0FBQ0VMLE1BQUksRUFBRSxnQ0FEUjtBQUVFTSxPQUFLLEVBQUUsV0FGVDtBQUdFTCxPQUFLLEVBQUUsUUFIVDtBQUlFckIsT0FBSyxFQUFFLHVCQUpUO0FBS0VzQixVQUFRLEVBQUUsRUFMWjtBQU1FQyxVQUFRLEVBQUUsS0FOWjtBQU9FQyxRQUFNLEVBQUUsQ0FBQyxPQUFELEVBQVUsTUFBVixFQUFrQixLQUFsQixDQVBWO0FBUUVDLE9BQUssRUFBRSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYjtBQVJULENBL0JrQixFQXlDbEI7QUFDRUwsTUFBSSxFQUFFLGNBRFI7QUFFRU0sT0FBSyxFQUFFLE1BRlQ7QUFHRUwsT0FBSyxFQUFFLE9BSFQ7QUFJRXJCLE9BQUssRUFBRSx3QkFKVDtBQUtFc0IsVUFBUSxFQUFFLEVBTFo7QUFNRUMsVUFBUSxFQUFFLEtBTlo7QUFPRUMsUUFBTSxFQUFFLENBQUMsT0FBRCxFQUFVLE1BQVYsRUFBa0IsS0FBbEIsQ0FQVjtBQVFFQyxPQUFLLEVBQUUsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWI7QUFSVCxDQXpDa0IsRUFtRGxCO0FBQ0VMLE1BQUksRUFBRSxnQ0FEUjtBQUVFTSxPQUFLLEVBQUUsV0FGVDtBQUdFTCxPQUFLLEVBQUUsUUFIVDtBQUlFckIsT0FBSyxFQUFFLHVCQUpUO0FBS0VzQixVQUFRLEVBQUUsRUFMWjtBQU1FQyxVQUFRLEVBQUUsS0FOWjtBQU9FQyxRQUFNLEVBQUUsQ0FBQyxPQUFELEVBQVUsTUFBVixFQUFrQixLQUFsQixDQVBWO0FBUUVDLE9BQUssRUFBRSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYjtBQVJULENBbkRrQixDQUFwQjs7QUErREEsTUFBTUUsV0FBTixTQUEwQnhCLCtDQUExQixDQUFvQztBQUFBO0FBQUE7O0FBQUEsbUNBQzFCO0FBQ055QixpQkFBVyxFQUFFO0FBQ1hSLFlBQUksRUFBRTtBQUNKaEIscUJBQVcsRUFBRSxPQURUO0FBRUpDLHVCQUFhLEVBQUU7QUFDYkMsZ0JBQUksRUFBRSxNQURPO0FBRWJDLHVCQUFXLEVBQUU7QUFGQSxXQUZYO0FBTUpDLGVBQUssRUFBRTtBQU5ILFNBREs7QUFTWGEsYUFBSyxFQUFFO0FBQ0xqQixxQkFBVyxFQUFFLE9BRFI7QUFFTEMsdUJBQWEsRUFBRTtBQUNiQyxnQkFBSSxFQUFFLFFBRE87QUFFYkMsdUJBQVcsRUFBRTtBQUZBLFdBRlY7QUFNTEMsZUFBSyxFQUFFO0FBTkYsU0FUSTtBQWlCWGMsZ0JBQVEsRUFBRTtBQUNSbEIscUJBQVcsRUFBRSxPQURMO0FBRVJDLHVCQUFhLEVBQUU7QUFDYkMsZ0JBQUksRUFBRSxRQURPO0FBRWJDLHVCQUFXLEVBQUU7QUFGQSxXQUZQO0FBTVJDLGVBQUssRUFBRTtBQU5DLFNBakJDO0FBeUJYaUIsYUFBSyxFQUFFO0FBQ0xyQixxQkFBVyxFQUFFLE9BRFI7QUFFTEMsdUJBQWEsRUFBRTtBQUNiQyxnQkFBSSxFQUFFLE1BRE87QUFFYkMsdUJBQVcsRUFBRTtBQUZBLFdBRlY7QUFNTEMsZUFBSyxFQUFFO0FBTkYsU0F6Qkk7QUFpQ1hnQixjQUFNLEVBQUU7QUFDTnBCLHFCQUFXLEVBQUUsT0FEUDtBQUVOQyx1QkFBYSxFQUFFO0FBQ2JDLGdCQUFJLEVBQUUsTUFETztBQUViQyx1QkFBVyxFQUFFO0FBRkEsV0FGVDtBQU1OQyxlQUFLLEVBQUU7QUFORCxTQWpDRztBQXlDWGUsZ0JBQVEsRUFBRTtBQUNSbkIscUJBQVcsRUFBRSxRQURMO0FBRVJDLHVCQUFhLEVBQUU7QUFDYndCLG1CQUFPLEVBQUUsQ0FDUDtBQUFFckIsbUJBQUssRUFBRSxNQUFUO0FBQWlCc0IsMEJBQVksRUFBRTtBQUEvQixhQURPLEVBRVA7QUFBRXRCLG1CQUFLLEVBQUUsS0FBVDtBQUFnQnNCLDBCQUFZLEVBQUU7QUFBOUIsYUFGTyxFQUdQO0FBQUV0QixtQkFBSyxFQUFFLE9BQVQ7QUFBa0JzQiwwQkFBWSxFQUFFO0FBQWhDLGFBSE8sRUFJUDtBQUFFdEIsbUJBQUssRUFBRSxNQUFUO0FBQWlCc0IsMEJBQVksRUFBRTtBQUEvQixhQUpPO0FBREksV0FGUDtBQVVSdEIsZUFBSyxFQUFFO0FBVkMsU0F6Q0M7QUFxRFhrQixhQUFLLEVBQUU7QUFDTHRCLHFCQUFXLEVBQUUsUUFEUjtBQUVMQyx1QkFBYSxFQUFFO0FBQ2J3QixtQkFBTyxFQUFFLENBQ1A7QUFBRXJCLG1CQUFLLEVBQUUsTUFBVDtBQUFpQnNCLDBCQUFZLEVBQUU7QUFBL0IsYUFETyxFQUVQO0FBQUV0QixtQkFBSyxFQUFFLE1BQVQ7QUFBaUJzQiwwQkFBWSxFQUFFO0FBQS9CLGFBRk8sRUFHUDtBQUFFdEIsbUJBQUssRUFBRSxRQUFUO0FBQW1Cc0IsMEJBQVksRUFBRTtBQUFqQyxhQUhPLEVBSVA7QUFBRXRCLG1CQUFLLEVBQUUsT0FBVDtBQUFrQnNCLDBCQUFZLEVBQUU7QUFBaEMsYUFKTztBQURJLFdBRlY7QUFVTHRCLGVBQUssRUFBRTtBQVZGLFNBckRJO0FBaUVYdUIsbUJBQVcsRUFBRTtBQUNYM0IscUJBQVcsRUFBRSxVQURGO0FBRVhDLHVCQUFhLEVBQUU7QUFDYkUsdUJBQVcsRUFBRTtBQURBLFdBRko7QUFLWEMsZUFBSyxFQUFFO0FBTEk7QUFqRUYsT0FEUDtBQTJFTndCLGdCQUFVLEVBQUU7QUEzRU4sS0FEMEI7O0FBQUEsZ0RBK0ViLENBQUNDLEtBQUQsRUFBUUMsZUFBUixLQUE0QjtBQUMvQyxZQUFNQyxrQkFBa0IscUJBQVEsS0FBS0MsS0FBTCxDQUFXUixXQUFuQixDQUF4Qjs7QUFDQSxZQUFNUyxrQkFBa0IscUJBQVFGLGtCQUFrQixDQUFDRCxlQUFELENBQTFCLENBQXhCOztBQUNBRyx3QkFBa0IsQ0FBQzdCLEtBQW5CLEdBQTJCeUIsS0FBSyxDQUFDSyxNQUFOLENBQWE5QixLQUF4QztBQUNBMkIsd0JBQWtCLENBQUNELGVBQUQsQ0FBbEIsR0FBc0NHLGtCQUF0QztBQUNBLFdBQUtFLFFBQUwsQ0FBYztBQUFFWCxtQkFBVyxFQUFFTztBQUFmLE9BQWQ7QUFDRCxLQXJGaUM7O0FBQUEsaURBd0ZYRixLQUFELElBQVc7QUFDL0IsWUFBTU8sUUFBUSxHQUFHLElBQUlDLFFBQUosRUFBakI7QUFDQUQsY0FBUSxDQUFDRSxNQUFULENBQWdCLGVBQWhCLEVBQWlDVCxLQUFLLENBQUNLLE1BQU4sQ0FBYUssS0FBOUM7QUFDQUMsV0FBSyxDQUFDQyxzREFBUSxHQUFHLHVCQUFaLEVBQXFDO0FBQ3hDQyxjQUFNLEVBQUUsS0FEZ0M7QUFFeENDLFlBQUksRUFBRVA7QUFGa0MsT0FBckMsQ0FBTCxDQUlHUSxJQUpILENBSVNDLEdBQUQsSUFBU0EsR0FBRyxDQUFDQyxJQUFKLEVBSmpCLEVBS0dGLElBTEgsQ0FLU0MsR0FBRCxJQUFTO0FBQ2JFLGVBQU8sQ0FBQ0MsR0FBUixDQUFZSCxHQUFaO0FBQ0EsYUFBS1YsUUFBTCxDQUFjO0FBQUVQLG9CQUFVLEVBQUVpQixHQUFHLENBQUNJLElBQUosQ0FBU0M7QUFBdkIsU0FBZDtBQUNELE9BUkgsRUFTR0MsS0FUSCxDQVNVQyxHQUFELElBQVNMLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBcUJJLEdBQXJCLENBVGxCO0FBVUQsS0FyR2lDOztBQUFBLCtDQXdHYnZCLEtBQUQsSUFBVztBQUM3QkEsV0FBSyxDQUFDd0IsY0FBTjtBQUNBLFlBQU1qQixRQUFRLEdBQUcsRUFBakI7O0FBQ0EsV0FBSyxJQUFJa0Isc0JBQVQsSUFBbUMsS0FBS3RCLEtBQUwsQ0FBV1IsV0FBOUMsRUFBMkQ7QUFDekRZLGdCQUFRLENBQUNrQixzQkFBRCxDQUFSLEdBQW1DLEtBQUt0QixLQUFMLENBQVdSLFdBQVgsQ0FDakM4QixzQkFEaUMsRUFFakNsRCxLQUZGO0FBR0Q7O0FBRUQsWUFBTW1ELE9BQU8sR0FBRztBQUNkQyxtQkFBVyxFQUFFcEI7QUFEQyxPQUFoQjtBQUlBbUIsYUFBTyxDQUFDQyxXQUFSLENBQW9CbkMsS0FBcEIsR0FBNEJrQyxPQUFPLENBQUNDLFdBQVIsQ0FBb0JuQyxLQUFwQixDQUN6Qm9DLEtBRHlCLENBQ25CLFNBRG1CLEVBRXpCQyxHQUZ5QixDQUVwQkMsQ0FBRCxJQUFPQyxNQUFNLENBQUNDLFVBQVAsQ0FBa0JGLENBQWxCLENBRmMsQ0FBNUI7QUFHQUosYUFBTyxDQUFDQyxXQUFSLENBQW9CcEMsTUFBcEIsR0FBNkJtQyxPQUFPLENBQUNDLFdBQVIsQ0FBb0JwQyxNQUFwQixDQUEyQnFDLEtBQTNCLENBQWlDLFNBQWpDLENBQTdCLENBaEI2QixDQWtCN0I7O0FBQ0EsWUFBTTtBQUFFRDtBQUFGLFVBQWtCRCxPQUF4QixDQW5CNkIsQ0FxQjdCOztBQUNBLFVBQUksS0FBSzlDLEtBQUwsQ0FBV1osS0FBWCxLQUFxQixnQkFBekIsRUFBMkM7QUFDekNrRCxlQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWixFQUE4QlEsV0FBOUI7QUFDRCxPQUZELE1BRU87QUFDTFQsZUFBTyxDQUFDQyxHQUFSLENBQVksYUFBWixFQUEyQlEsV0FBM0IsRUFESyxDQUVMOztBQUNBLGNBQU1NLFVBQVUsR0FBRyxJQUFJQywwREFBSixDQUNqQlAsV0FBVyxDQUFDeEMsSUFESyxFQUVqQndDLFdBQVcsQ0FBQzdCLFdBRkssRUFHakJpQyxNQUFNLENBQUNDLFVBQVAsQ0FBa0JMLFdBQVcsQ0FBQ3ZDLEtBQTlCLENBSGlCLEVBSWpCLENBQUMsd0JBQUQsQ0FKaUIsRUFLakIyQyxNQUFNLENBQUNJLFFBQVAsQ0FBZ0JSLFdBQVcsQ0FBQ3RDLFFBQTVCLENBTGlCLEVBTWpCc0MsV0FBVyxDQUFDckMsUUFOSyxFQU9qQnFDLFdBQVcsQ0FBQ3BDLE1BUEssRUFRakJvQyxXQUFXLENBQUNuQyxLQVJLLEVBU2pCbUMsV0FBVyxDQUFDbEMsS0FUSyxDQUFuQjtBQVlBd0Msa0JBQVUsQ0FBQ0csZUFBWDtBQUNEO0FBQ0YsS0FqSmlDO0FBQUE7O0FBa0psQzVELFFBQU0sR0FBRztBQUNQLFFBQUk2RCxNQUFNLEdBQUcsSUFBYjs7QUFDQSxRQUFJLEtBQUt6RCxLQUFMLENBQVcwRCxNQUFmLEVBQXVCO0FBQ3JCRCxZQUFNLEdBQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQU0saUJBQVMsRUFBRTVELDhEQUFPLENBQUM0RCxNQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixtQkFBVyxFQUFDLG9CQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsRUFFRTtBQUFPLFlBQUksRUFBQyxRQUFaO0FBQXFCLGFBQUssRUFBQyxRQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkYsQ0FERixDQURGO0FBUUQ7O0FBRUQsVUFBTUUsZ0JBQWdCLEdBQUcsRUFBekI7O0FBQ0EsU0FBSyxJQUFJQyxHQUFULElBQWdCLEtBQUtyQyxLQUFMLENBQVdSLFdBQTNCLEVBQXdDO0FBQ3RDNEMsc0JBQWdCLENBQUNFLElBQWpCLENBQXNCO0FBQ3BCQyxVQUFFLEVBQUVGLEdBRGdCO0FBRXBCRyxjQUFNLEVBQUUsS0FBS3hDLEtBQUwsQ0FBV1IsV0FBWCxDQUF1QjZDLEdBQXZCO0FBRlksT0FBdEI7QUFJRDs7QUFDRCxXQUNFO0FBQUssZUFBUyxFQUFFL0QsOERBQU8sQ0FBQ0MsWUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFFRCw4REFBTyxDQUFDbUUsSUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSyxLQUFLaEUsS0FBTCxDQUFXWixLQUFoQixDQURGLEVBRUdxRSxNQUZILEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHRSxnQkFBZ0IsQ0FBQ1YsR0FBakIsQ0FBcUIsQ0FBQ2dCLFdBQUQsRUFBY0MsS0FBZCxLQUNwQixNQUFDLHVEQUFEO0FBQ0UsU0FBRyxFQUFFRCxXQUFXLENBQUNILEVBRG5CO0FBRUUsaUJBQVcsRUFBRUcsV0FBVyxDQUFDRixNQUFaLENBQW1CeEUsV0FGbEM7QUFHRSxtQkFBYSxFQUFFMEUsV0FBVyxDQUFDRixNQUFaLENBQW1CdkUsYUFIcEM7QUFJRSxXQUFLLEVBQUV5RSxXQUFXLENBQUNGLE1BQVosQ0FBbUJwRSxLQUo1QjtBQUtFLGFBQU8sRUFBR3lCLEtBQUQsSUFDUCxLQUFLK0Msa0JBQUwsQ0FBd0IvQyxLQUF4QixFQUErQjZDLFdBQVcsQ0FBQ0gsRUFBM0MsQ0FOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREQsQ0FESCxFQVlFLE1BQUMsNERBQUQ7QUFBWSxZQUFNLEVBQUUsS0FBS00sbUJBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFaRixFQWFFLE1BQUMsaUVBQUQ7QUFBWSxnQkFBVSxFQUFFLEtBQUs3QyxLQUFMLENBQVdKLFVBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFiRixFQWNFLE1BQUMseURBQUQ7QUFBUSxhQUFPLEVBQUUsS0FBS2tELGlCQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQTBDLEtBQUtyRSxLQUFMLENBQVdaLEtBQXJELENBZEYsQ0FIRixDQURGLENBREY7QUF3QkQ7O0FBOUxpQzs7QUFpTXJCMEIsMEVBQWYsRTs7Ozs7Ozs7Ozs7QUM1UUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUVBO0FBQ0E7O0FBRUEsTUFBTWdDLE9BQU8sR0FBSTlDLEtBQUQsSUFBVztBQUN6QixTQUNFO0FBQUksYUFBUyxFQUFFSCwwREFBTyxDQUFDeUQsT0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBRXRELEtBQUssQ0FBQzhDLE9BQU4sQ0FBYzNELEtBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLYSxLQUFLLENBQUM4QyxPQUFOLENBQWN2QyxJQUFuQixDQUpGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFNUCxLQUFLLENBQUM4QyxPQUFOLENBQWN0QyxLQUFwQixDQUxGLEVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLUixLQUFLLENBQUM4QyxPQUFOLENBQWNuQyxNQUFkLENBQXFCMkQsSUFBckIsQ0FBMEIsSUFBMUIsQ0FBTCxDQU5GLEVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLdEUsS0FBSyxDQUFDOEMsT0FBTixDQUFjbEMsS0FBZCxDQUFvQjBELElBQXBCLENBQXlCLElBQXpCLENBQUwsQ0FQRixFQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS3RFLEtBQUssQ0FBQzhDLE9BQU4sQ0FBY3BDLFFBQW5CLENBUkYsRUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtWLEtBQUssQ0FBQzhDLE9BQU4sQ0FBY2pDLEtBQW5CLENBVEYsRUFVRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtiLEtBQUssQ0FBQzhDLE9BQU4sQ0FBY3JDLFFBQW5CLENBVkYsRUFXRTtBQUFJLGFBQVMsRUFBRVosMERBQU8sQ0FBQzBFLE1BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHlEQUFEO0FBQVEsV0FBTyxFQUFFdkUsS0FBSyxDQUFDd0UsZUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLEVBRUU7QUFBUSxhQUFTLEVBQUUzRSwwREFBTyxDQUFDNEUsTUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLENBWEYsQ0FERjtBQWtCRCxDQW5CRDs7QUFxQmUzQixzRUFBZixFOzs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNeEMsV0FBVyxHQUFHLENBQ2xCO0FBQ0VDLE1BQUksRUFBRSxxQkFEUjtBQUVFQyxPQUFLLEVBQUUsS0FGVDtBQUdFckIsT0FBSyxFQUFFLHFCQUhUO0FBSUVzQixVQUFRLEVBQUUsRUFKWjtBQUtFQyxVQUFRLEVBQUUsS0FMWjtBQU1FQyxRQUFNLEVBQUUsQ0FBQyxPQUFELEVBQVUsTUFBVixFQUFrQixLQUFsQixDQU5WO0FBT0VDLE9BQUssRUFBRSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixDQVBUO0FBUUVDLE9BQUssRUFBRTtBQVJULENBRGtCLEVBV2xCO0FBQ0VOLE1BQUksRUFBRSxpQkFEUjtBQUVFTSxPQUFLLEVBQUUsTUFGVDtBQUdFTCxPQUFLLEVBQUUsT0FIVDtBQUlFckIsT0FBSyxFQUFFLHFCQUpUO0FBS0VzQixVQUFRLEVBQUUsRUFMWjtBQU1FQyxVQUFRLEVBQUUsS0FOWjtBQU9FQyxRQUFNLEVBQUUsQ0FBQyxPQUFELEVBQVUsTUFBVixFQUFrQixLQUFsQixDQVBWO0FBUUVDLE9BQUssRUFBRSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYjtBQVJULENBWGtCLEVBcUJsQjtBQUNFTCxNQUFJLEVBQUUsdUJBRFI7QUFFRU0sT0FBSyxFQUFFLE1BRlQ7QUFHRUwsT0FBSyxFQUFFLE9BSFQ7QUFJRXJCLE9BQUssRUFBRSxrQkFKVDtBQUtFc0IsVUFBUSxFQUFFLEVBTFo7QUFNRUMsVUFBUSxFQUFFLEtBTlo7QUFPRUMsUUFBTSxFQUFFLENBQUMsT0FBRCxFQUFVLE1BQVYsRUFBa0IsS0FBbEIsQ0FQVjtBQVFFQyxPQUFLLEVBQUUsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWI7QUFSVCxDQXJCa0IsRUErQmxCO0FBQ0VMLE1BQUksRUFBRSxnQ0FEUjtBQUVFTSxPQUFLLEVBQUUsV0FGVDtBQUdFTCxPQUFLLEVBQUUsUUFIVDtBQUlFckIsT0FBSyxFQUFFLHVCQUpUO0FBS0VzQixVQUFRLEVBQUUsRUFMWjtBQU1FQyxVQUFRLEVBQUUsS0FOWjtBQU9FQyxRQUFNLEVBQUUsQ0FBQyxPQUFELEVBQVUsTUFBVixFQUFrQixLQUFsQixDQVBWO0FBUUVDLE9BQUssRUFBRSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYjtBQVJULENBL0JrQixFQXlDbEI7QUFDRUwsTUFBSSxFQUFFLGNBRFI7QUFFRU0sT0FBSyxFQUFFLE1BRlQ7QUFHRUwsT0FBSyxFQUFFLE9BSFQ7QUFJRXJCLE9BQUssRUFBRSx3QkFKVDtBQUtFc0IsVUFBUSxFQUFFLEVBTFo7QUFNRUMsVUFBUSxFQUFFLEtBTlo7QUFPRUMsUUFBTSxFQUFFLENBQUMsT0FBRCxFQUFVLE1BQVYsRUFBa0IsS0FBbEIsQ0FQVjtBQVFFQyxPQUFLLEVBQUUsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWI7QUFSVCxDQXpDa0IsRUFtRGxCO0FBQ0VMLE1BQUksRUFBRSxnQ0FEUjtBQUVFTSxPQUFLLEVBQUUsV0FGVDtBQUdFTCxPQUFLLEVBQUUsUUFIVDtBQUlFckIsT0FBSyxFQUFFLHVCQUpUO0FBS0VzQixVQUFRLEVBQUUsRUFMWjtBQU1FQyxVQUFRLEVBQUUsS0FOWjtBQU9FQyxRQUFNLEVBQUUsQ0FBQyxPQUFELEVBQVUsTUFBVixFQUFrQixLQUFsQixDQVBWO0FBUUVDLE9BQUssRUFBRSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYjtBQVJULENBbkRrQixDQUFwQjs7QUErREEsTUFBTThELFFBQVEsR0FBRyxNQUFNO0FBQ3JCLFFBQU07QUFBQSxPQUFDQyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QkMsc0RBQVEsQ0FBQyxLQUFELENBQTFDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFlBQUQ7QUFBQSxPQUFlQztBQUFmLE1BQWtDRixzREFBUSxDQUFDLElBQUQsQ0FBaEQ7O0FBRUEsUUFBTUcsaUJBQWlCLEdBQUcsTUFBTTtBQUM5QkosZ0JBQVksQ0FBQyxDQUFDRCxTQUFGLENBQVo7QUFDRCxHQUZEOztBQUdBLFFBQU1NLG1CQUFtQixHQUFHLE1BQU07QUFDaENGLG1CQUFlLENBQUMsS0FBRCxDQUFmO0FBQ0FILGdCQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0QsR0FIRDs7QUFJQSxRQUFNTSxzQkFBc0IsR0FBRyxNQUFNO0FBQ25DSCxtQkFBZSxDQUFDLFFBQUQsQ0FBZjtBQUNBSCxnQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUNELEdBSEQ7O0FBS0EsTUFBSU8sS0FBSyxHQUFHLElBQVo7O0FBQ0EsVUFBUUwsWUFBUjtBQUNFLFNBQUssS0FBTDtBQUNFSyxXQUFLLEdBQ0gsTUFBQyx1REFBRDtBQUFPLFlBQUksRUFBRVIsU0FBYjtBQUF3QixtQkFBVyxFQUFFSyxpQkFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsZ0VBQUQ7QUFBYSxhQUFLLEVBQUMsYUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLENBREY7QUFLQTs7QUFDRixTQUFLLFFBQUw7QUFDRUcsV0FBSyxHQUNILE1BQUMsdURBQUQ7QUFBTyxZQUFJLEVBQUVSLFNBQWI7QUFBd0IsbUJBQVcsRUFBRUssaUJBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLGdFQUFEO0FBQWEsYUFBSyxFQUFDLGdCQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsQ0FERjtBQUtBOztBQUNGO0FBQ0U7QUFoQko7O0FBa0JBLFNBQ0UsTUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRyxLQURILEVBRUU7QUFBSyxhQUFTLEVBQUV0RiwyREFBTyxDQUFDdUYsUUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFdkYsMkRBQU8sQ0FBQ3dGLEdBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLEVBRUUsTUFBQyx5REFBRDtBQUFRLFdBQU8sRUFBRUosbUJBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsQ0FERixFQU1FO0FBQU8sYUFBUyxFQUFFcEYsMkRBQU8sQ0FBQ3lGLEtBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRixFQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRixFQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkYsRUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEYsRUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVJGLEVBU0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRGLENBREYsQ0FERixFQWNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR2hGLFdBQVcsQ0FBQzJDLEdBQVosQ0FBZ0IsQ0FBQ0gsT0FBRCxFQUFVb0IsS0FBVixLQUNmLE1BQUMsd0RBQUQ7QUFDRSxXQUFPLEVBQUVwQixPQURYO0FBRUUsT0FBRyxFQUFFb0IsS0FGUDtBQUdFLG1CQUFlLEVBQUVnQixzQkFIbkI7QUFJRSxhQUFTLEVBQUVoQixLQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxDQURILENBZEYsQ0FORixDQUZGLENBREY7QUFxQ0QsQ0F4RUQ7O0FBMEVlUSx1RUFBZixFOzs7Ozs7Ozs7OztBQzVKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFFQTs7QUFFQSxNQUFNYSxRQUFRLEdBQUl2RixLQUFELElBQVc7QUFDMUIsU0FDRTtBQUFLLGFBQVMsRUFBRUgsMkRBQU8sQ0FBQzJGLFFBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUl4RixLQUFLLENBQUN5RixVQUFOLENBQWlCckcsS0FBckIsQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS1ksS0FBSyxDQUFDeUYsVUFBTixDQUFpQjlGLEtBQXRCLENBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlLLEtBQUssQ0FBQ3lGLFVBQU4sQ0FBaUJDLE9BQXJCLENBSEYsQ0FERjtBQU9ELENBUkQ7O0FBVWVILHVFQUFmLEU7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBRUE7QUFDQTtBQUNBOztBQUVBLE1BQU1JLFNBQVMsR0FBSTNGLEtBQUQsSUFBVztBQUMzQixRQUFNMkYsU0FBUyxHQUFHLENBQ2hCO0FBQ0V2RyxTQUFLLEVBQUUsT0FEVDtBQUVFTyxTQUFLLEVBQUUsU0FGVDtBQUdFK0YsV0FBTyxFQUFFO0FBSFgsR0FEZ0IsRUFPaEI7QUFDRXRHLFNBQUssRUFBRSxPQURUO0FBRUVPLFNBQUssRUFBRSxXQUZUO0FBR0UrRixXQUFPLEVBQUU7QUFIWCxHQVBnQixFQWFoQjtBQUNFdEcsU0FBSyxFQUFFLFVBRFQ7QUFFRU8sU0FBSyxFQUFFLGVBRlQ7QUFHRStGLFdBQU8sRUFBRTtBQUhYLEdBYmdCLENBQWxCO0FBbUJBLFNBQ0U7QUFBSyxhQUFTLEVBQUU3Riw0REFBTyxDQUFDK0YsU0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRCxTQUFTLENBQUMxQyxHQUFWLENBQWMsQ0FBQ3NDLFFBQUQsRUFBV3JCLEtBQVgsS0FDYixNQUFDLDBEQUFEO0FBQVUsT0FBRyxFQUFFQSxLQUFmO0FBQXNCLGNBQVUsRUFBRXFCLFFBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxDQURILENBREY7QUFPRCxDQTNCRDs7QUE2QmVJLHdFQUFmLEU7Ozs7Ozs7Ozs7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUUsUUFBUSxHQUFHLE1BQU07QUFDckIsUUFBTTtBQUFBLE9BQUNDLFlBQUQ7QUFBQSxPQUFlQztBQUFmLE1BQWtDbEIsc0RBQVEsQ0FBQyxJQUFELENBQWhEOztBQUVBLFFBQU1tQixvQkFBb0IsR0FBSXZHLElBQUQsSUFBVTtBQUNyQ3NHLG1CQUFlLENBQUN0RyxJQUFELENBQWY7QUFDRCxHQUZEOztBQUdBLFNBQ0U7QUFBSyxhQUFTLEVBQUVJLDREQUFPLENBQUNvRyxTQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLHdEQUFEO0FBQVMsV0FBTyxFQUFFRCxvQkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0UsTUFBQywwREFBRDtBQUFVLFFBQUksRUFBRUYsWUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLENBREY7QUFPRCxDQWJEOztBQWVlRCx1RUFBZixFOzs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0EsTUFBTUssS0FBSyxHQUFHLENBQ1o7QUFDRTlHLE9BQUssRUFBRSxXQURUO0FBRUUrRyxNQUFJLEVBQUUsa0JBRlI7QUFHRTFHLE1BQUksRUFBRTtBQUhSLENBRFksRUFPWjtBQUNFTCxPQUFLLEVBQUUsU0FEVDtBQUVFK0csTUFBSSxFQUFFLGtCQUZSO0FBR0UxRyxNQUFJLEVBQUU7QUFIUixDQVBZLEVBYVo7QUFDRUwsT0FBSyxFQUFFLFVBRFQ7QUFFRTtBQUNBSyxNQUFJLEVBQUU7QUFIUixDQWJZLEVBbUJaO0FBQ0VMLE9BQUssRUFBRSxvQkFEVDtBQUVFK0csTUFBSSxFQUFFLGtCQUZSO0FBR0UxRyxNQUFJLEVBQUU7QUFIUixDQW5CWSxFQXdCWjtBQUNFTCxPQUFLLEVBQUUsb0JBRFQ7QUFFRStHLE1BQUksRUFBRSxrQkFGUjtBQUdFMUcsTUFBSSxFQUFFO0FBSFIsQ0F4QlksRUE2Qlo7QUFDRUwsT0FBSyxFQUFFLGlCQURUO0FBRUUrRyxNQUFJLEVBQUUsa0JBRlI7QUFHRTFHLE1BQUksRUFBRTtBQUhSLENBN0JZLENBQWQ7O0FBbUNBLE1BQU0yRyxPQUFPLEdBQUlwRyxLQUFELElBQVc7QUFDekIsU0FDRTtBQUFLLGFBQVMsRUFBRUgsMERBQU8sQ0FBQ3VHLE9BQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUV2RywwREFBTyxDQUFDd0csT0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSCxLQUFLLENBQUNqRCxHQUFOLENBQVUsQ0FBQ3FELEdBQUQsRUFBTXBDLEtBQU4sS0FDVDtBQUFJLE9BQUcsRUFBRUEsS0FBVDtBQUFnQixXQUFPLEVBQUUsTUFBTWxFLEtBQUssQ0FBQ3VHLE9BQU4sQ0FBY0QsR0FBRyxDQUFDN0csSUFBbEIsQ0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFO0FBQUcsUUFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFhNkcsR0FBRyxDQUFDbEgsS0FBakIsQ0FGRixDQURELENBREgsRUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUMsbUJBQVQ7QUFBNkIsT0FBRyxFQUFDLE1BQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUcsUUFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLENBUEYsQ0FERixDQURGLENBREY7QUFrQkQsQ0FuQkQ7O0FBcUJlZ0gsc0VBQWYsRTs7Ozs7Ozs7Ozs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUksT0FBTyxHQUFHLE1BQU07QUFDcEIsU0FDRTtBQUFRLGFBQVMsRUFBRTNHLDBEQUFPLENBQUMyRyxPQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUUzRywwREFBTyxDQUFDNEcsV0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkNBQUQ7QUFBTSxTQUFLLEVBQUMsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFLE1BQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLEVBS0U7QUFBSyxhQUFTLEVBQUU1RywwREFBTyxDQUFDNkcsR0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURGLENBREYsQ0FERixDQUxGLENBREY7QUFlRCxDQWhCRDs7QUFrQmVGLHNFQUFmLEU7Ozs7Ozs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBOztBQUVBLE1BQU1HLElBQUksR0FBRyxNQUFNO0FBQ2pCLFNBQ0U7QUFBQSx3Q0FBZSxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUEsd0NBQWMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQ1E7QUFBQSx3Q0FBZ0IsS0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURSLGFBREYsQ0FERixDQURGO0FBQUE7QUFBQTtBQUFBLHdpREFERjtBQXVCRCxDQXhCRDs7QUEwQmVBLG1FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBOztBQUVBLE1BQU1DLE1BQU0sR0FBRyxNQUFNO0FBQ25CLFNBQ0U7QUFBQSx3Q0FBZSxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdzdCQURGO0FBU0QsQ0FWRDs7QUFZZUEscUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTs7QUFFQSxNQUFNQyxRQUFRLEdBQUk3RyxLQUFELElBQVc7QUFDMUIsU0FDRTtBQUEwQixXQUFPLEVBQUVBLEtBQUssQ0FBQ3VHLE9BQXpDO0FBQUEsZ0dBVWlCdkcsS0FBSyxDQUFDOEcsSUFBTixHQUFhLE9BQWIsR0FBdUIsTUFWeEMsYUFBZSxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVWlCOUcsS0FBSyxDQUFDOEcsSUFBTixHQUFhLE9BQWIsR0FBdUIsTUFWeEM7QUFBQTtBQUFBLDRKQVVpQjlHLEtBQUssQ0FBQzhHLElBQU4sR0FBYSxPQUFiLEdBQXVCLE1BVnhDOzs0RkFBQSxFQURGO0FBZ0JELENBakJEOztBQW1CZUQsdUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUVBOztBQUVBLE1BQU1FLE1BQU0sR0FBSS9HLEtBQUQsSUFBVztBQUN4QixTQUNFO0FBQVEsV0FBTyxFQUFFQSxLQUFLLENBQUN1RyxPQUF2QjtBQUFnQyxhQUFTLEVBQUUxRyx5REFBTyxDQUFDbUgsTUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHaEgsS0FBSyxDQUFDaUgsUUFEVCxDQURGO0FBS0QsQ0FORDs7QUFRZUYscUVBQWYsRTs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7O0FBRUEsTUFBTUcsVUFBVSxHQUFHLENBQUU7QUFBRS9GO0FBQUYsQ0FBRixLQUFzQjtBQUNyQyxTQUNJO0FBQVMsYUFBUyxFQUFFdEIsNkRBQU8sQ0FBQ3NILHFCQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRVFoRyxVQUFVLENBQUM4QixHQUFYLENBQWVtRSxTQUFTLElBQUk7QUFDeEIsV0FBTztBQUFLLGVBQVMsRUFBRXZILDZEQUFPLENBQUN3SCxZQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0g7QUFBSyxTQUFHLEVBQUVELFNBQVY7QUFBcUIsU0FBRyxFQUFDLFNBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERyxDQUFQO0FBR0gsR0FKRCxDQUZSLENBREo7QUFXSCxDQVpEOztBQWNlRix5RUFBZixFOzs7Ozs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBRUE7O0FBRUEsTUFBTUksS0FBSyxHQUFJdEgsS0FBRCxJQUFXO0FBQ3ZCLE1BQUl1SCxZQUFZLEdBQUcsSUFBbkI7O0FBRUEsVUFBUXZILEtBQUssQ0FBQ1QsV0FBZDtBQUNFLFNBQUssT0FBTDtBQUNFZ0ksa0JBQVksR0FDVjtBQUNFLGlCQUFTLEVBQUUxSCx3REFBTyxDQUFDMkg7QUFEckIsU0FFTXhILEtBQUssQ0FBQ1IsYUFGWjtBQUdFLGFBQUssRUFBRVEsS0FBSyxDQUFDTCxLQUhmO0FBSUUsZ0JBQVEsRUFBRUssS0FBSyxDQUFDeUgsT0FKbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGO0FBUUE7O0FBQ0YsU0FBSyxVQUFMO0FBQ0VGLGtCQUFZLEdBQ1Y7QUFDRSxpQkFBUyxFQUFFMUgsd0RBQU8sQ0FBQzJIO0FBRHJCLFNBRU14SCxLQUFLLENBQUNSLGFBRlo7QUFHRSxhQUFLLEVBQUVRLEtBQUssQ0FBQ0wsS0FIZjtBQUlFLGdCQUFRLEVBQUVLLEtBQUssQ0FBQ3lILE9BSmxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQVFBOztBQUNGLFNBQUssUUFBTDtBQUNFRixrQkFBWSxHQUNWO0FBQ0UsaUJBQVMsRUFBRTFILHdEQUFPLENBQUMySDtBQURyQixTQUVNeEgsS0FBSyxDQUFDUixhQUZaO0FBR0UsYUFBSyxFQUFFUSxLQUFLLENBQUNMLEtBSGY7QUFJRSxnQkFBUSxFQUFFSyxLQUFLLENBQUN5SCxPQUpsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBTUd6SCxLQUFLLENBQUNSLGFBQU4sQ0FBb0J3QixPQUFwQixDQUE0QmlDLEdBQTVCLENBQWdDLENBQUN5RSxNQUFELEVBQVN4RCxLQUFULEtBQy9CO0FBQVEsV0FBRyxFQUFFQSxLQUFiO0FBQW9CLGFBQUssRUFBRXdELE1BQU0sQ0FBQy9ILEtBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRytILE1BQU0sQ0FBQ3pHLFlBRFYsQ0FERCxDQU5ILENBREY7QUFjQTs7QUFFRjtBQUNFc0csa0JBQVksR0FDVjtBQUNFLGlCQUFTLEVBQUUxSCx3REFBTyxDQUFDMkg7QUFEckIsU0FFTXhILEtBQUssQ0FBQ1IsYUFGWjtBQUdFLGFBQUssRUFBRVEsS0FBSyxDQUFDTCxLQUhmO0FBSUUsZ0JBQVEsRUFBRUssS0FBSyxDQUFDeUgsT0FKbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGO0FBdkNKOztBQWdEQSxTQUNFO0FBQUssYUFBUyxFQUFFNUgsd0RBQU8sQ0FBQzhILEtBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFPLGFBQVMsRUFBRTlILHdEQUFPLENBQUMrSCxLQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWtDNUgsS0FBSyxDQUFDNkgsS0FBeEMsQ0FERixFQUVHTixZQUZILENBREY7QUFNRCxDQXpERDs7QUEyRGVELG9FQUFmLEU7Ozs7Ozs7Ozs7O0FDL0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTs7QUFFQSxNQUFNUSxVQUFVLEdBQUcsQ0FBRTtBQUFFQztBQUFGLENBQUYsS0FBa0I7QUFBTyxNQUFJLEVBQUMsTUFBWjtBQUFtQixVQUFRLEVBQUVBLE1BQTdCO0FBQXFDLFVBQVEsTUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUFyQzs7QUFFZUQseUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUVBO0FBQ0E7O0FBRUEsTUFBTTNDLEtBQUssR0FBSW5GLEtBQUQsSUFBVztBQUN2QixTQUNFLE1BQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGlEQUFEO0FBQVUsUUFBSSxFQUFFQSxLQUFLLENBQUM4RyxJQUF0QjtBQUE0QixXQUFPLEVBQUU5RyxLQUFLLENBQUNnSSxXQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUNFLGFBQVMsRUFBRW5JLHdEQUFPLENBQUNvSSxLQURyQjtBQUVFLFNBQUssRUFBRTtBQUNMQyxlQUFTLEVBQUVsSSxLQUFLLENBQUM4RyxJQUFOLEdBQWEsZUFBYixHQUErQixvQkFEckM7QUFFTHFCLGFBQU8sRUFBRW5JLEtBQUssQ0FBQzhHLElBQU4sR0FBYSxHQUFiLEdBQW1CO0FBRnZCLEtBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9HOUcsS0FBSyxDQUFDaUgsUUFQVCxDQUZGLENBREY7QUFjRCxDQWZEOztBQWlCZTlCLG9FQUFmLEU7Ozs7Ozs7Ozs7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQSxNQUFNN0IsT0FBTixDQUFjO0FBQ1Y4RSxhQUFXLENBQ1BDLFlBRE8sRUFFUG5ILFdBRk8sRUFHUFYsS0FITyxFQUlQVyxVQUpPLEVBS1BWLFFBTE8sRUFNUEMsUUFOTyxFQU9QQyxNQVBPLEVBUVBDLEtBUk8sRUFTUEMsS0FBSyxHQUFDLEVBVEMsRUFVVDtBQUNFLFNBQUt3SCxZQUFMLEdBQW9CQSxZQUFwQjtBQUNBLFNBQUtuSCxXQUFMLEdBQW1CQSxXQUFuQjtBQUNBLFNBQUtWLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtXLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsU0FBS1YsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNIOztBQUVELFFBQU0yQyxlQUFOLEdBQXlCO0FBQ3JCLFFBQUk7QUFDQSxZQUFNcEIsR0FBRyxHQUFHLE1BQU1rRyx5REFBTyxDQUFDQyx5RUFBZSxDQUNyQyxLQUFLRixZQURnQyxFQUVyQyxLQUFLbkgsV0FGZ0MsRUFHckMsS0FBS1YsS0FIZ0MsRUFJckMsS0FBS1csVUFKZ0MsRUFLckMsS0FBS1YsUUFMZ0MsRUFNckMsS0FBS0MsUUFOZ0MsRUFPckMsS0FBS0MsTUFQZ0MsRUFRckMsS0FBS0MsS0FSZ0MsRUFTckMsS0FBS0MsS0FUZ0MsQ0FBaEIsQ0FBekI7QUFZQXlCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaLEVBQStCSCxHQUEvQjtBQUNILEtBZEQsQ0FjRSxPQUFPTyxHQUFQLEVBQVk7QUFDVkwsYUFBTyxDQUFDQyxHQUFSLENBQVksc0JBQVosRUFBb0NJLEdBQXBDO0FBQ0g7QUFDSjs7QUFFRCxRQUFNNkYsZUFBTixHQUF5QixDQUV4Qjs7QUE3Q1M7O0FBZ0RDbEYsc0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDbkRBO0FBQUE7QUFBQTtBQUFPLE1BQU1pRixlQUFlLEdBQUcsQ0FDM0JGLFlBRDJCLEVBRTNCbkgsV0FGMkIsRUFHM0JWLEtBSDJCLEVBSTNCVyxVQUoyQixFQUszQlYsUUFMMkIsRUFNM0JDLFFBTjJCLEVBTzNCQyxNQVAyQixFQVEzQkMsS0FSMkIsRUFTM0JDLEtBVDJCLEtBVTFCO0FBQ0QsU0FBTztBQUNINEgsU0FBSyxFQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBREw7QUE4QkhDLGFBQVMsRUFBRTtBQUNQTCxrQkFETztBQUVQbkgsaUJBRk87QUFHUFYsV0FITztBQUlQVyxnQkFKTztBQUtQVixjQUxPO0FBTVBDLGNBTk87QUFPUEMsWUFQTztBQVFQQyxXQVJPO0FBU1BDO0FBVE87QUE5QlIsR0FBUDtBQTBDSCxDQXJETTtBQXVEQSxNQUFNOEgsa0JBQWtCLEdBQUk7O0NBQTVCLEM7Ozs7Ozs7Ozs7OztBQ3ZEUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNM0csUUFBUSxHQUFDLHVCQUFmO0FBQ0EsTUFBTTRHLFVBQVUsR0FBSSxHQUFFNUcsUUFBUyxVQUEvQjs7QUFFUCxNQUFNc0csT0FBTyxHQUFHLE1BQU9PLFlBQVAsSUFBd0I7QUFDcEMsUUFBTUMsUUFBUSxHQUFHLE1BQU0vRyxpREFBSyxDQUFDNkcsVUFBRCxFQUM1QjtBQUNJM0csVUFBTSxFQUFFLE1BRFo7QUFFSThHLFdBQU8sRUFBRTtBQUNMLHNCQUFnQjtBQURYLEtBRmI7QUFLSTdHLFFBQUksRUFBRThHLElBQUksQ0FBQ0MsU0FBTCxDQUFnQkosWUFBaEI7QUFMVixHQUQ0QixDQUE1QjtBQVFBLFNBQU9DLFFBQVEsQ0FBQ3pHLElBQVQsRUFBUDtBQUNILENBVkQ7O0FBYWVpRyxzRUFBZixFOzs7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDOzs7Ozs7Ozs7OztBQ05BLGNBQWMsbUJBQU8sQ0FBQywwRUFBbUI7O0FBRXpDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlDOzs7Ozs7Ozs7OztBQ3REQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBOztBQUNBOztBQUVBOztBQUtBOztBQUNBOztBQUVBLHVCQUF3QztBQUN0QyxRQUFNWSxHQUFHLEdBQUcsNkJBQVosSUFBWSxDQUFaO0FBQ0EsUUFBTUMsTUFBTSxHQUFHLGdCQUFNLFdBQU4saUJBQU0sR0FBTixTQUFmLElBQWUsQ0FBZjtBQUVBLFNBQ0UsQ0FBQ0QsR0FBRyxDQUFKLFFBQWNBLEdBQUcsQ0FBSEEsYUFBaUJDLE1BQU0sQ0FBdkJELFlBQW9DQSxHQUFHLENBQUhBLFNBQWFDLE1BQU0sQ0FEdkU7QUFRRjs7QUFBQSx1Q0FBOEU7QUFDNUUsTUFBSUMsUUFBb0IsR0FBeEI7QUFDQSxNQUFJQyxNQUE4QixHQUFsQztBQUNBLE1BQUlDLFVBQStCLEdBQW5DO0FBQ0EsU0FBTyxjQUF5QjtBQUM5QixRQUFJQSxVQUFVLElBQUlDLElBQUksS0FBbEJELFlBQW1DRSxFQUFFLEtBQXpDLFFBQXNEO0FBQ3BEO0FBR0Y7O0FBQUEsVUFBTUMsTUFBTSxHQUFHQyxVQUFVLE9BQXpCLEVBQXlCLENBQXpCO0FBQ0FOLFlBQVEsR0FBUkE7QUFDQUMsVUFBTSxHQUFOQTtBQUNBQyxjQUFVLEdBQVZBO0FBQ0E7QUFURjtBQWFGOztBQUFBLHdCQUFxQztBQUNuQyxTQUFPSixHQUFHLElBQUksZUFBUEEsV0FBaUMsaUNBQWpDQSxHQUFpQyxDQUFqQ0EsR0FBUDtBQWFGOztBQUFBO0FBQ0EsTUFBTVMsU0FBUyxHQUFHLElBQWxCLEdBQWtCLEVBQWxCO0FBQ0EsTUFBTUMsb0JBQW9CLEdBQ3hCLFFBQWdDQyxTQUFoQyxHQURGO0FBRUEsTUFBTUMsVUFBMkMsR0FBakQ7O0FBRUEsdUJBQXlEO0FBQ3ZEO0FBQ0EsZ0JBQWM7QUFDWjtBQUdGLEdBTnVELENBTXZEOzs7QUFDQSxNQUFJLENBQUosc0JBQTJCO0FBQ3pCO0FBR0Y7O0FBQUEsU0FBUUMsUUFBUSxHQUFHLHlCQUNoQkMsT0FBRCxJQUFhO0FBQ1hBLFdBQU8sQ0FBUEEsUUFBaUJDLEtBQUQsSUFBVztBQUN6QixVQUFJLENBQUNOLFNBQVMsQ0FBVEEsSUFBY00sS0FBSyxDQUF4QixNQUFLTixDQUFMLEVBQWtDO0FBQ2hDO0FBR0Y7O0FBQUEsWUFBTU8sRUFBRSxHQUFHUCxTQUFTLENBQVRBLElBQWNNLEtBQUssQ0FBOUIsTUFBV04sQ0FBWDs7QUFDQSxVQUFJTSxLQUFLLENBQUxBLGtCQUF3QkEsS0FBSyxDQUFMQSxvQkFBNUIsR0FBeUQ7QUFDdkRGLGdCQUFRLENBQVJBLFVBQW1CRSxLQUFLLENBQXhCRjtBQUNBSixpQkFBUyxDQUFUQSxPQUFpQk0sS0FBSyxDQUF0Qk47QUFDQU8sVUFBRTtBQUVMO0FBWERGO0FBRmUsS0FlakI7QUFBRUcsY0FBVSxFQWZkO0FBZUUsR0FmaUIsQ0FBbkI7QUFtQkY7O0FBQUEsTUFBTUMscUJBQXFCLEdBQUcsWUFBaUM7QUFDN0QsUUFBTUwsUUFBUSxHQUFHTSxXQUFqQjs7QUFDQSxNQUFJLENBQUosVUFBZTtBQUNiLFdBQU8sTUFBTSxDQUFiO0FBR0ZOOztBQUFBQSxVQUFRLENBQVJBO0FBQ0FKLFdBQVMsQ0FBVEE7QUFDQSxTQUFPLE1BQU07QUFDWCxRQUFJO0FBQ0ZJLGNBQVEsQ0FBUkE7QUFDQSxLQUZGLENBRUUsWUFBWTtBQUNaekgsYUFBTyxDQUFQQTtBQUVGcUg7O0FBQUFBLGFBQVMsQ0FBVEE7QUFORjtBQVJGOztBQWtCQSxtQkFBbUJySyxnQkFBbkIsQ0FBd0M7QUFHdEM4SSxhQUFXLFFBQW1CO0FBQzVCO0FBRDRCLFNBRjlCa0MsQ0FFOEI7O0FBQUEsNEJBWVgsTUFBTSxDQVpLOztBQUFBLHNCQWlEakJDLGlCQUFpQixDQUFDLGtCQUFrQjtBQUMvQyxhQUFPO0FBQ0xoQixZQUFJLEVBQUUsMEJBQVlpQixTQUFTLENBRHRCLElBQ3NCLENBQXJCLENBREQ7QUFFTGhCLFVBQUUsRUFBRWlCLE1BQU0sR0FBRywwQkFBWUQsU0FBUyxDQUF4QixNQUF3QixDQUFyQixDQUFILEdBRlo7QUFBTyxPQUFQO0FBbEQ0QixLQWlEQSxDQWpEQTs7QUFBQSx1QkF3RGZFLENBQUQsSUFBK0I7QUFDM0MsWUFBTTtBQUFBO0FBQUE7QUFBQSxVQUF1QkEsQ0FBQyxDQUE5Qjs7QUFDQSxVQUNFQyxRQUFRLEtBQVJBLFFBQ0VsSixNQUFNLElBQUlBLE1BQU0sS0FBakIsT0FBQ0EsSUFDQWlKLENBQUMsQ0FERixPQUFDakosSUFFQWlKLENBQUMsQ0FGRixPQUFDakosSUFHQWlKLENBQUMsQ0FIRixRQUFDakosSUFJQ2lKLENBQUMsQ0FBREEsZUFBaUJBLENBQUMsQ0FBREEsc0JBTnRCLENBQ0VDLENBREYsRUFPRTtBQUNBO0FBQ0E7QUFHRjs7QUFBQSxVQUFJO0FBQUE7QUFBQTtBQUFBLFVBQWUsZ0JBQWdCLFdBQWhCLE1BQWlDLFdBQXBELEVBQW1CLENBQW5COztBQUVBLFVBQUksQ0FBQ0MsT0FBTyxDQUFaLElBQVksQ0FBWixFQUFvQjtBQUNsQjtBQUNBO0FBR0Y7O0FBQUEsWUFBTTtBQUFBO0FBQUEsVUFBZWYsTUFBTSxDQUEzQjtBQUNBTixVQUFJLEdBQUcsNEJBQVBBLElBQU8sQ0FBUEE7QUFDQUMsUUFBRSxHQUFHQSxFQUFFLEdBQUcsNEJBQUgsRUFBRyxDQUFILEdBQVBBO0FBRUFrQixPQUFDLENBQURBLGlCQXpCMkMsQ0EyQjNDOztBQUNBLFVBQUk7QUFBQTtBQUFBLFVBQWEsS0FBakI7O0FBQ0EsVUFBSUcsTUFBTSxJQUFWLE1BQW9CO0FBQ2xCQSxjQUFNLEdBQUdyQixFQUFFLENBQUZBLGVBQVRxQjtBQUdGLE9BakMyQyxDQWlDM0M7OztBQUNBQyxzQkFBTyxpQ0FBUEEsa0JBQTBEO0FBQ3hEQyxlQUFPLEVBQUUsV0FEWEQ7QUFBMEQsT0FBMURBLE9BRVNFLE9BQUQsSUFBc0I7QUFDNUIsWUFBSSxDQUFKLFNBQWM7O0FBQ2Qsb0JBQVk7QUFDVm5CLGdCQUFNLENBQU5BO0FBQ0FvQixrQkFBUSxDQUFSQTtBQUVIO0FBUkRIO0FBMUY0Qjs7QUFFNUIsY0FBMkM7QUFDekMsVUFBSTlLLEtBQUssQ0FBVCxVQUFvQjtBQUNsQnNDLGVBQU8sQ0FBUEE7QUFJSDtBQUNEOztBQUFBLGFBQVN0QyxLQUFLLENBQUxBLGFBQVQ7QUFLRmtMOztBQUFBQSxzQkFBb0IsR0FBUztBQUMzQjtBQUdGQzs7QUFBQUEsVUFBUSxHQUFhO0FBQ25CLFVBQU07QUFBQTtBQUFBLFFBQWV0QixNQUFNLENBQTNCO0FBQ0EsVUFBTTtBQUFFTixVQUFJLEVBQU47QUFBb0JDLFFBQUUsRUFBdEI7QUFBQSxRQUFxQyxnQkFDekMsV0FEeUMsTUFFekMsV0FGRixFQUEyQyxDQUEzQztBQUlBLFVBQU00QixZQUFZLEdBQUcsNEJBQXJCLFVBQXFCLENBQXJCO0FBQ0EsV0FBTyxlQUFlQyxRQUFRLEdBQUcsNEJBQUgsUUFBRyxDQUFILEdBQTlCLFlBQU8sQ0FBUDtBQUdGQzs7QUFBQUEsV0FBUyxNQUFxQjtBQUM1QixRQUFJLHlDQUF5Q0MsR0FBRyxDQUFoRCxTQUEwRDtBQUN4RDtBQUVBLFlBQU1DLFlBQVksR0FDaEIxQixVQUFVLENBQ1Isc0JBQ0U7QUFITixTQUVJLENBRFEsQ0FEWjs7QUFPQSxVQUFJLENBQUosY0FBbUI7QUFDakIsZ0NBQXdCTSxxQkFBcUIsTUFBTSxNQUFNO0FBQ3ZEO0FBREYsU0FBNkMsQ0FBN0M7QUFJSDtBQUNGO0FBRUQsR0FsRHNDLENBa0R0QztBQUNBOzs7QUFxREFxQixVQUFRLFVBQWtDO0FBQ3hDLFFBQUksQ0FBQyxLQUFMLENBQUksUUFBSixFQUE4QyxPQUROLENBRXhDOztBQUNBLFVBQU1DLEtBQUssR0FBRyxLQUFkLFFBQWMsRUFBZCxDQUh3QyxDQUl4QztBQUNBO0FBQ0E7O0FBQ0FaLDZCQUFnQlksS0FBSztBQUFDO0FBQXRCWixLQUFxQixDQUFyQkEsRUFBcUNZLEtBQUs7QUFBQztBQUEzQ1osS0FBMEMsQ0FBMUNBLGlCQUNHbkksR0FBRCxJQUFTO0FBQ1AsZ0JBQTJDO0FBQ3pDO0FBQ0E7QUFFSDtBQU5IbUk7O0FBUUEsY0FBVSxDQUNSLEtBQUssQ0FBTCxNQUNFO0FBRkosT0FDRSxDQURRLENBQVY7QUFRRmxMOztBQUFBQSxRQUFNLEdBQUc7QUFDUCxRQUFJO0FBQUE7QUFBQSxRQUFlLEtBQW5CO0FBQ0EsVUFBTTtBQUFBO0FBQUE7QUFBQSxRQUFlLGdCQUFnQixXQUFoQixNQUFpQyxXQUF0RCxFQUFxQixDQUFyQixDQUZPLENBR1A7O0FBQ0EsUUFBSSxvQkFBSixVQUFrQztBQUNoQ3FILGNBQVEsZ0JBQUcsd0NBQVhBLFFBQVcsQ0FBWEE7QUFHRixLQVJPLENBUVA7OztBQUNBLFVBQU0wRSxLQUFVLEdBQUdDLHFCQUFuQixRQUFtQkEsQ0FBbkI7O0FBQ0EsVUFBTTVMLEtBS0wsR0FBRztBQUNGdUwsU0FBRyxFQUFHTSxFQUFELElBQWE7QUFDaEI7O0FBRUEsWUFBSUYsS0FBSyxJQUFJLGlCQUFUQSxZQUFzQ0EsS0FBSyxDQUEvQyxLQUFxRDtBQUNuRCxjQUFJLE9BQU9BLEtBQUssQ0FBWixRQUFKLFlBQXFDQSxLQUFLLENBQUxBLElBQXJDLEVBQXFDQSxFQUFyQyxLQUNLLElBQUksT0FBT0EsS0FBSyxDQUFaLFFBQUosVUFBbUM7QUFDdENBLGlCQUFLLENBQUxBO0FBRUg7QUFDRjtBQVZDO0FBV0ZHLGtCQUFZLEVBQUdwQixDQUFELElBQXlCO0FBQ3JDLFlBQUlpQixLQUFLLENBQUxBLFNBQWUsT0FBT0EsS0FBSyxDQUFMQSxNQUFQLGlCQUFuQixZQUFtRTtBQUNqRUEsZUFBSyxDQUFMQTtBQUVGOztBQUFBLHNCQUFjO0FBQUVJLGtCQUFRLEVBQXhCO0FBQWMsU0FBZDtBQWZBO0FBaUJGQyxhQUFPLEVBQUd0QixDQUFELElBQXlCO0FBQ2hDLFlBQUlpQixLQUFLLENBQUxBLFNBQWUsT0FBT0EsS0FBSyxDQUFMQSxNQUFQLFlBQW5CLFlBQThEO0FBQzVEQSxlQUFLLENBQUxBO0FBRUY7O0FBQUEsWUFBSSxDQUFDakIsQ0FBQyxDQUFOLGtCQUF5QjtBQUN2QjtBQUVIO0FBN0JIO0FBS0ksS0FMSixDQVZPLENBMENQO0FBQ0E7O0FBQ0EsUUFDRSx1QkFDQ2lCLEtBQUssQ0FBTEEsZ0JBQXNCLEVBQUUsVUFBVUEsS0FBSyxDQUYxQyxLQUV5QixDQUZ6QixFQUdFO0FBQ0EzTCxXQUFLLENBQUxBLE9BQWF3SixFQUFFLElBQWZ4SjtBQUdGLEtBbkRPLENBbURQO0FBQ0E7OztBQUNBLFFBQUlpTSxLQUFKLEVBQThDLEVBWTlDOztBQUFBLFdBQU9DLG1DQUFQLEtBQU9BLENBQVA7QUFoTW9DOztBQUFBOztBQW9NeEMsVUFBNEM7QUFDMUMsUUFBTUMsSUFBSSxHQUFHLHFCQUFTN0osT0FBTyxDQUE3QixLQUFhLENBQWIsQ0FEMEMsQ0FHMUM7O0FBQ0EsUUFBTThKLFNBQVMsR0FBR0MsbUJBQU8sQ0FBekIsOEJBQXlCLENBQXpCOztBQUNBLFFBQU1DLEtBQUssR0FBR0QsbUJBQU8sQ0FBckIsMENBQXFCLENBQXJCLENBTDBDLENBTTFDOzs7QUFDQUUsTUFBSSxDQUFKQSxZQUFpQkQsS0FBSyxDQUFDO0FBQ3JCL0MsUUFBSSxFQUFFNkMsU0FBUyxDQUFUQSxVQUFvQixDQUFDQSxTQUFTLENBQVYsUUFBbUJBLFNBQVMsQ0FBaERBLE1BQW9CLENBQXBCQSxFQURlO0FBRXJCNUMsTUFBRSxFQUFFNEMsU0FBUyxDQUFUQSxVQUFvQixDQUFDQSxTQUFTLENBQVYsUUFBbUJBLFNBQVMsQ0FGL0IsTUFFRyxDQUFwQkEsQ0FGaUI7QUFHckJYLFlBQVEsRUFBRVcsU0FBUyxDQUhFO0FBSXJCSSxXQUFPLEVBQUVKLFNBQVMsQ0FKRztBQUtyQnJCLFdBQU8sRUFBRXFCLFNBQVMsQ0FMRztBQU1yQkssWUFBUSxFQUFFTCxTQUFTLENBTkU7QUFPckJ2QixVQUFNLEVBQUV1QixTQUFTLENBUEk7QUFRckJuRixZQUFRLEVBQUVtRixTQUFTLENBQVRBLFVBQW9CLENBQzVCQSxTQUFTLENBRG1CLFNBRTVCLHFCQUFrQztBQUNoQyxZQUFNek0sS0FBSyxHQUFHSyxLQUFLLENBQW5CLFFBQW1CLENBQW5COztBQUVBLFVBQUksaUJBQUosVUFBK0I7QUFDN0JtTSxZQUFJLENBQUpBLGlJQUFJLENBQUpBO0FBS0Y7O0FBQUE7QUFYTUMsS0FBb0IsQ0FBcEJBLEVBUlpHO0FBQXVCLEdBQUQsQ0FBdEJBOzs7ZUF5QmFBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pWZjs7QUFDQTs7Ozs7QUFDQTs7QUFxSEE7OztBQXhIQTs7QUFtQkEsTUFBTUcsZUFBb0MsR0FBRztBQUMzQ0MsUUFBTSxFQURxQztBQUM3QjtBQUNkQyxnQkFBYyxFQUY2Qjs7QUFHM0NDLE9BQUssS0FBaUI7QUFDcEIsUUFBSSxLQUFKLFFBQWlCLE9BQU8zQyxFQUFQOztBQUNqQixlQUFtQyxFQUdwQztBQVJIOztBQUE2QyxDQUE3QyxDLENBV0E7O0FBQ0EsTUFBTTRDLGlCQUFpQixHQUFHLHFFQUExQixVQUEwQixDQUExQjtBQVNBLE1BQU1DLFlBQVksR0FBRywwR0FBckIsb0JBQXFCLENBQXJCO0FBUUEsTUFBTUMsZ0JBQWdCLEdBQUcsa0RBQXpCLGdCQUF5QixDQUF6QixDLENBU0E7O0FBQ0FDLE1BQU0sQ0FBTkEsMENBQWlEO0FBQy9DQyxLQUFHLEdBQUc7QUFDSixXQUFPcEMsaUJBQVA7QUFGSm1DOztBQUFpRCxDQUFqREE7QUFNQUgsaUJBQWlCLENBQWpCQSxRQUEyQkssS0FBRCxJQUFXO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0FGLFFBQU0sQ0FBTkEsdUNBQThDO0FBQzVDQyxPQUFHLEdBQUc7QUFDSixZQUFNUCxNQUFNLEdBQUdTLFNBQWY7QUFDQSxhQUFPVCxNQUFNLENBQWIsS0FBYSxDQUFiO0FBSEpNOztBQUE4QyxHQUE5Q0E7QUFMRkg7QUFhQSxnQkFBZ0IsQ0FBaEIsUUFBMEJLLEtBQUQsSUFBVztBQUNsQztBQUNBOztBQUFFVCxpQkFBRCxPQUFDQSxHQUFpQyxDQUFDLEdBQUQsU0FBb0I7QUFDckQsVUFBTUMsTUFBTSxHQUFHUyxTQUFmO0FBQ0EsV0FBT1QsTUFBTSxDQUFOQSxLQUFNLENBQU5BLENBQWMsR0FBckIsSUFBT0EsQ0FBUDtBQUZELEdBQUNEO0FBRko7QUFRQSxZQUFZLENBQVosUUFBc0J0TCxLQUFELElBQVc7QUFDOUIsaUJBQWUsQ0FBZixNQUFzQixNQUFNO0FBQzFCLHNDQUF3QixDQUFDLEdBQUQsU0FBYTtBQUNuQyxZQUFNaU0sVUFBVSxHQUFJLEtBQUlqTSxLQUFLLENBQUxBLHVCQUE4QixHQUFFQSxLQUFLLENBQUxBLFlBQXhEO0FBR0EsWUFBTWtNLGdCQUFnQixHQUF0Qjs7QUFDQSxVQUFJQSxnQkFBZ0IsQ0FBcEIsVUFBb0IsQ0FBcEIsRUFBa0M7QUFDaEMsWUFBSTtBQUNGQSwwQkFBZ0IsQ0FBaEJBLFVBQWdCLENBQWhCQSxDQUE2QixHQUE3QkE7QUFDQSxTQUZGLENBRUUsWUFBWTtBQUNaO0FBQ0FoTCxpQkFBTyxDQUFQQSxNQUFlLHdDQUF1QytLLFVBQXREL0ssSUFGWSxDQUdaOztBQUNBQSxpQkFBTyxDQUFQQSxNQUFlLEdBQUVLLEdBQUcsQ0FBQzRLLE9BQVEsS0FBSTVLLEdBQUcsQ0FBQzZLLEtBQXJDbEw7QUFFSDtBQUNGO0FBZkQ7QUFERjtBQURGOztBQXFCQSxxQkFBNkI7QUFDM0IsTUFBSSxDQUFDb0ssZUFBZSxDQUFwQixRQUE2QjtBQUMzQixVQUFNYSxPQUFPLEdBQ1gsZ0NBREY7QUFHQSxVQUFNLFVBQU4sT0FBTSxDQUFOO0FBRUY7O0FBQUEsU0FBT2IsZUFBZSxDQUF0QjtBQUdGLEMsQ0FBQTs7O2VBQ2VBLGUsRUFFZjs7OztBQUdPLHFCQUFpQztBQUN0QyxTQUFPUiwwQkFBaUJ1QixlQUF4QixhQUFPdkIsQ0FBUDtBQUdGLEMsQ0FBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUNPLE1BQU13QixZQUFZLEdBQUcsQ0FBQyxHQUFELFNBQWlDO0FBQzNEaEIsaUJBQWUsQ0FBZkEsU0FBeUIsSUFBSTVCLFNBQUosUUFBVyxHQUFwQzRCLElBQXlCLENBQXpCQTtBQUNBQSxpQkFBZSxDQUFmQSx1QkFBd0N4QyxFQUFELElBQVFBLEVBQS9Dd0M7QUFDQUEsaUJBQWUsQ0FBZkE7QUFFQSxTQUFPQSxlQUFlLENBQXRCO0FBTEssRSxDQVFQOzs7OztBQUNPLDBDQUE4RDtBQUNuRSxRQUFNaUIsT0FBTyxHQUFiO0FBQ0EsUUFBTUMsUUFBUSxHQUFkOztBQUVBLE9BQUssTUFBTCwrQkFBMEM7QUFDeEMsUUFBSSxPQUFPRCxPQUFPLENBQWQsUUFBYyxDQUFkLEtBQUosVUFBMkM7QUFDekNDLGNBQVEsQ0FBUkEsUUFBUSxDQUFSQSxHQUFxQlgsTUFBTSxDQUFOQSxXQUFrQlUsT0FBTyxDQUE5Q0MsUUFBOEMsQ0FBekJYLENBQXJCVyxDQUR5QyxDQUNpQjs7QUFDMUQ7QUFHRkE7O0FBQUFBLFlBQVEsQ0FBUkEsUUFBUSxDQUFSQSxHQUFxQkQsT0FBTyxDQUE1QkMsUUFBNEIsQ0FBNUJBO0FBR0YsR0FibUUsQ0FhbkU7OztBQUNBQSxVQUFRLENBQVJBLFNBQWtCOUMsaUJBQWxCOEM7QUFFQVosa0JBQWdCLENBQWhCQSxRQUEwQkcsS0FBRCxJQUFXO0FBQ2xDUyxZQUFRLENBQVJBLEtBQVEsQ0FBUkEsR0FBa0IsQ0FBQyxHQUFELFNBQW9CO0FBQ3BDLGFBQU9ELE9BQU8sQ0FBUEEsS0FBTyxDQUFQQSxDQUFlLEdBQXRCLElBQU9BLENBQVA7QUFERkM7QUFERlo7QUFNQTtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyS0Q7O0FBRUE7O0FBV2UsdUNBSytCO0FBQzVDLG9DQUF1QztBQUNyQyx3QkFBTztBQUFtQixZQUFNLEVBQUUsWUFBM0IsU0FBMkI7QUFBM0IsT0FBUCxLQUFPLEVBQVA7QUFHRjs7QUFBQSxtQkFBaUIsQ0FBakIsa0JBQW9DYSxpQkFBaUIsQ0FBQ0MsZUFBdEQsQ0FDQTtBQURBO0FBRUVDLG1CQUFELG9CQUFDQSxHQUFpREYsaUJBQUQsQ0FBakQsbUJBQUNFOztBQUNGLFlBQTJDO0FBQ3pDLFVBQU14TixJQUFJLEdBQ1JzTixpQkFBaUIsQ0FBakJBLGVBQWlDQSxpQkFBaUIsQ0FBbERBLFFBREY7QUFFQUUscUJBQWlCLENBQWpCQSxjQUFpQyxjQUFheE4sSUFBOUN3TjtBQUdGOztBQUFBO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDRDs7Ozs7OztBQVlBO0FBQ0E7QUFDQTs7QUFVZSxnQkFBNkI7QUFDMUMsUUFBTUMsR0FBK0IsR0FBR2YsTUFBTSxDQUFOQSxPQUF4QyxJQUF3Q0EsQ0FBeEM7QUFFQSxTQUFPO0FBQ0xnQixNQUFFLGdCQUFpQztBQUNqQztBQUFDLE9BQUNELEdBQUcsQ0FBSEEsSUFBRyxDQUFIQSxLQUFjQSxHQUFHLENBQUhBLElBQUcsQ0FBSEEsR0FBZixFQUFDQSxDQUFEO0FBRkU7O0FBS0xFLE9BQUcsZ0JBQWlDO0FBQ2xDLFVBQUlGLEdBQUcsQ0FBUCxJQUFPLENBQVAsRUFBZTtBQUNiO0FBQ0FBLFdBQUcsQ0FBSEEsSUFBRyxDQUFIQSxRQUFpQkEsR0FBRyxDQUFIQSxJQUFHLENBQUhBLHNCQUFqQkE7QUFFSDtBQVZJOztBQVlMRyxRQUFJLE9BQWUsR0FBZixNQUErQjtBQUNqQztBQUNBO0FBQUMsT0FBQ0gsR0FBRyxDQUFIQSxJQUFHLENBQUhBLElBQUQsZ0JBQStCSSxPQUFELElBQXNCO0FBQ25EQSxlQUFPLENBQUMsR0FBUkEsSUFBTyxDQUFQQTtBQUREO0FBZEw7O0FBQU8sR0FBUDtBQW1CRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUNEOztBQUNBOztBQUNBOztBQVFBOztBQUNBOztBQUNBOzs7Ozs7QUFoQkE7QUFBQTtBQUNBOzs7QUFpQkEsTUFBTUMsUUFBUSxHQUFJcEMsVUFBbEI7O0FBRU8sMkJBQTJDO0FBQ2hELFNBQU9xQyxJQUFJLENBQUpBLDBCQUErQkQsUUFBUSxHQUF2Q0MsT0FBUDtBQUdLOztBQUFBLDJCQUEyQztBQUNoRCxTQUFPQSxJQUFJLENBQUpBLDBCQUNIQSxJQUFJLENBQUpBLE9BQVlELFFBQVEsQ0FBcEJDLFdBREdBLE1BQVA7QUFLRjs7QUFBQSx1QkFBdUM7QUFDckMsU0FBT0EsSUFBSSxDQUFKQSxzQkFBUDtBQUdGOztBQUFBLE1BQU1DLFlBQVksR0FBSUQsSUFBRCxJQUNuQkUsT0FBTyxDQUFDLFNBQVNGLElBQUksS0FBYixpQkFEVixJQUNTLENBRFQ7O0FBaURBLDREQUtFO0FBQ0EsTUFBSUcsUUFBUSxHQUFHQyxjQUFjLE9BQTdCOztBQUNBLHlCQUFxQztBQUNuQyxXQUFPLEtBQUssQ0FDVixpQ0FBcUI7QUFDbkJDLGNBQVEsRUFBRUMsV0FBVyxFQUNuQjtBQUNDLHFCQUFjQyxhQUFhLENBQUNDLE9BQVEsR0FBRUMsV0FBVyxVQUhqQyxPQUNFLENBREY7QUFEWDtBQUNXLEtBQXJCLENBRFUsRUFRVjtBQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUMsaUJBQVcsRUFwQlI7QUFRTCxLQVJVLENBQUwsTUFzQkM1TSxHQUFELElBQVM7QUFDZCxVQUFJLENBQUNBLEdBQUcsQ0FBUixJQUFhO0FBQ1gsWUFBSSxrQkFBa0JBLEdBQUcsQ0FBSEEsVUFBdEIsS0FBeUM7QUFDdkMsaUJBQU82TSxXQUFQO0FBRUY7O0FBQUEsY0FBTSxVQUFOLDZCQUFNLENBQU47QUFFRjs7QUFBQSxhQUFPN00sR0FBRyxDQUFWLElBQU9BLEVBQVA7QUE3QkYsS0FBTyxDQUFQO0FBaUNGOztBQUFBLFNBQU8sV0FBVyxHQUFYLEtBQ0VJLElBQUQsSUFBVTtBQUNkLFdBQU8wSCxFQUFFLEdBQUdBLEVBQUUsQ0FBTCxJQUFLLENBQUwsR0FBVDtBQUZHLFdBSUd2SCxHQUFELElBQWdCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLFFBQUksQ0FBSixnQkFBcUI7QUFDbkI7QUFBRUEsU0FBRCxLQUFDQSxHQUFELGlCQUFDQTtBQUVKOztBQUFBO0FBWEosR0FBTyxDQUFQO0FBZWE7O0FBQUEsTUFBTW1JLE1BQU4sQ0FBbUM7QUFPaEQ7OztBQUlBO0FBYUExQyxhQUFXLDBCQUlUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKUztBQUlULEdBSlMsRUF1QlQ7QUFBQSxTQTlDRjhHLEtBOENFO0FBQUEsU0E3Q0ZQLFFBNkNFO0FBQUEsU0E1Q0ZsRyxLQTRDRTtBQUFBLFNBM0NGMEcsTUEyQ0U7QUFBQSxTQTFDRmQsUUEwQ0U7QUFBQSxTQXJDRmUsVUFxQ0U7QUFBQSxTQW5DRkMsR0FtQ0UsR0FuQ2tDLEVBbUNsQztBQUFBLFNBbENGQyxHQWtDRTtBQUFBLFNBakNGQyxHQWlDRTtBQUFBLFNBaENGQyxVQWdDRTtBQUFBLFNBL0JGQyxJQStCRTtBQUFBLFNBOUJGQyxNQThCRTtBQUFBLFNBN0JGQyxRQTZCRTtBQUFBLFNBNUJGQyxLQTRCRTtBQUFBLFNBM0JGQyxVQTJCRTs7QUFBQSxzQkF1RVluRixDQUFELElBQTRCO0FBQ3ZDLFVBQUksQ0FBQ0EsQ0FBQyxDQUFOLE9BQWM7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFNO0FBQUE7QUFBQTtBQUFBLFlBQU47QUFDQSx5Q0FFRSxpQ0FBcUI7QUFBQTtBQUZ2QjtBQUV1QixTQUFyQixDQUZGLEVBR0UsV0FIRixNQUdFLEdBSEY7QUFLQTtBQUdGLE9BcEJ1QyxDQW9CdkM7QUFDQTs7O0FBQ0EsVUFDRUEsQ0FBQyxDQUFEQSxTQUNBLEtBREFBLFNBRUFBLENBQUMsQ0FBREEsYUFBZSxLQUZmQSxVQUdBLGlCQUFNQSxDQUFDLENBQURBLE1BQU4sa0JBQWdDLEtBSmxDLFVBS0U7QUFDQTtBQUdGLE9BL0J1QyxDQStCdkM7QUFDQTs7O0FBQ0EsVUFBSSxhQUFhLENBQUMsVUFBVUEsQ0FBQyxDQUE3QixLQUFrQixDQUFsQixFQUFzQztBQUNwQztBQUdGOztBQUFBLFlBQU07QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUF1QkEsQ0FBQyxDQUE5Qjs7QUFDQSxnQkFBMkM7QUFDekMsWUFBSSw4QkFBOEIsY0FBbEMsYUFBNkQ7QUFDM0RwSSxpQkFBTyxDQUFQQTtBQUlIO0FBQ0Q7O0FBQUE7QUFwSEE7O0FBQUEsMEJBbW5CZ0I2TSxNQUFELElBQXFDO0FBQ3BELFlBQU1SLFFBQVEsR0FBR0osWUFBWSxDQUFDLHlCQUE5QixRQUE2QixDQUE3QjtBQUVBLGFBQU90QyxTQUNINkQsU0FERzdELEdBRUg4RCxhQUFhLGlCQUdYLEtBSFcsT0FJVnZOLElBQUQsSUFBVyxxQkFOakIsSUFFaUIsQ0FGakI7QUF0bkJBOztBQUFBLDBCQWdvQmdCMk0sTUFBRCxJQUFxQztBQUNwRCxVQUFJO0FBQUE7QUFBQTtBQUFBLFVBQXNCLHlCQUExQixJQUEwQixDQUExQjtBQUNBUixjQUFRLEdBQUdKLFlBQVksQ0FBdkJJLFFBQXVCLENBQXZCQTtBQUNBLGFBQU9vQixhQUFhLGtCQUFrQixLQUF0QyxLQUFvQixDQUFwQjtBQW5vQkEsT0FDQTs7O0FBQ0EsaUJBQWF2QixPQUFPLENBQXBCLFNBQW9CLENBQXBCLENBRkEsQ0FJQTs7QUFDQSx5QkFMQSxDQU1BO0FBQ0E7QUFDQTs7QUFDQSxRQUFJRyxTQUFRLEtBQVosV0FBNEI7QUFDMUIsc0JBQWdCLEtBQWhCLFNBQThCO0FBQUE7QUFFNUIzTyxhQUFLLEVBRnVCO0FBQUE7QUFJNUJnUSxlQUFPLEVBQUVDLFlBQVksSUFBSUEsWUFBWSxDQUpUO0FBSzVCQyxlQUFPLEVBQUVELFlBQVksSUFBSUEsWUFBWSxDQUx2QztBQUE4QixPQUE5QjtBQVNGOztBQUFBLCtCQUEyQjtBQUFFM1EsZUFBUyxFQUF0QztBQUEyQixLQUEzQixDQW5CQSxDQXFCQTtBQUNBOztBQUNBLGtCQUFjd0wsTUFBTSxDQUFwQjtBQUVBO0FBQ0E7QUFDQSx3QkEzQkEsQ0E0QkE7QUFDQTs7QUFDQSxrQkFDRTtBQUNBLGlEQUE0QitELGFBQWEsQ0FBekMseUJBRkY7QUFHQTtBQUNBO0FBQ0E7QUFDQSw0QkFwQ0EsQ0FxQ0E7QUFDQTs7QUFDQTtBQUVBOztBQUVBLGVBQW1DLEVBZXBDO0FBRUQsR0EzR2dELENBMkdoRDs7O0FBQ0EsdUNBQXFEO0FBQ25ELFFBQUk1QyxLQUFKLEVBQThDLEVBQTlDLE1BSU87QUFDTDtBQUVIO0FBa0REdkk7O0FBQUFBLFFBQU0sYUFBMEI7QUFDOUIsVUFBTXBFLFNBQXdCLEdBQUc2USxHQUFHLENBQUhBLFdBQWpDO0FBQ0EsVUFBTTNOLElBQUksR0FBRyxnQkFBYixLQUFhLENBQWI7O0FBQ0EsUUFBSSxDQUFKLE1BQVc7QUFDVCxZQUFNLFVBQVcsb0NBQW1DME0sS0FBcEQsRUFBTSxDQUFOO0FBR0Y7O0FBQUEsVUFBTWtCLE9BQU8sR0FBR25ELE1BQU0sQ0FBTkEsaUJBQXdCO0FBQUE7QUFFdEMrQyxhQUFPLEVBQUVHLEdBQUcsQ0FGMEI7QUFHdENELGFBQU8sRUFBRUMsR0FBRyxDQUhkO0FBQXdDLEtBQXhCbEQsQ0FBaEI7QUFLQSxxQ0FaOEIsQ0FjOUI7O0FBQ0EsUUFBSWlDLEtBQUssS0FBVCxTQUF1QjtBQUNyQixrQkFBWSxnQkFBZ0IsS0FBNUIsS0FBWSxDQUFaO0FBQ0E7QUFHRjs7QUFBQSxRQUFJQSxLQUFLLEtBQUssS0FBZCxPQUEwQjtBQUN4QjtBQUVIO0FBRURtQjs7QUFBQUEsUUFBTSxHQUFTO0FBQ2J4RyxVQUFNLENBQU5BO0FBR0Y7QUFBQTs7Ozs7QUFHQXlHLE1BQUksR0FBRztBQUNMekcsVUFBTSxDQUFOQTtBQUdGO0FBQUE7Ozs7Ozs7O0FBTUFoRyxNQUFJLE1BQVcyRixFQUFPLEdBQWxCLEtBQTBCeEksT0FBTyxHQUFqQyxJQUF3QztBQUMxQyxXQUFPLGtDQUFQLE9BQU8sQ0FBUDtBQUdGO0FBQUE7Ozs7Ozs7O0FBTUF3TCxTQUFPLE1BQVdoRCxFQUFPLEdBQWxCLEtBQTBCeEksT0FBTyxHQUFqQyxJQUF3QztBQUM3QyxXQUFPLHFDQUFQLE9BQU8sQ0FBUDtBQUdGK0c7O0FBQUFBLFFBQU0sNkJBS2M7QUFDbEIsV0FBTyxZQUFZLHFCQUFxQjtBQUN0QyxVQUFJLENBQUMvRyxPQUFPLENBQVosSUFBaUI7QUFDZjtBQUVGLE9BSnNDLENBSXRDOzs7QUFDQSxVQUFJdVAsT0FBSixJQUFRO0FBQ05DLG1CQUFXLENBQVhBO0FBR0YsT0FUc0MsQ0FTdEM7QUFDQTs7O0FBQ0EsVUFBSXRILEdBQUcsR0FBRywyQkFBMkIsaUNBQTNCLElBQTJCLENBQTNCLEdBQVY7QUFDQSxVQUFJTSxFQUFFLEdBQUcsMEJBQTBCLGlDQUExQixHQUEwQixDQUExQixHQUFUO0FBRUFOLFNBQUcsR0FBRzBGLFdBQVcsQ0FBakIxRixHQUFpQixDQUFqQkE7QUFDQU0sUUFBRSxHQUFHb0YsV0FBVyxDQUFoQnBGLEVBQWdCLENBQWhCQSxDQWZzQyxDQWlCdEM7QUFDQTs7QUFDQSxVQUFJeUMsS0FBSixFQUE4QyxFQVM5Qzs7QUFBQSxrQ0E1QnNDLENBOEJ0QztBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUNBLFVBQUksQ0FBQ2pMLE9BQU8sQ0FBUixNQUFlLHFCQUFuQixFQUFtQixDQUFuQixFQUE2QztBQUMzQztBQUNBOEosY0FBTSxDQUFOQTtBQUNBO0FBQ0E7QUFDQUEsY0FBTSxDQUFOQTtBQUNBLGVBQU8yRixPQUFPLENBQWQsSUFBYyxDQUFkO0FBR0Y7O0FBQUEsWUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQWdDLHNCQUF0QyxJQUFzQyxDQUF0Qzs7QUFFQSxVQUFJLGFBQUosVUFBMkI7QUFDekIsa0JBQTJDO0FBQ3pDLGdCQUFNLFVBQ0gsa0NBQWlDdkgsR0FEcEMsb0RBQU0sQ0FBTjtBQUlGOztBQUFBLGVBQU91SCxPQUFPLENBQWQsS0FBYyxDQUFkO0FBR0YsT0F4RHNDLENBd0R0QztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxVQUFJLENBQUMsY0FBTCxFQUFLLENBQUwsRUFBd0I7QUFDdEJ4TyxjQUFNLEdBQU5BO0FBR0Y7O0FBQUEsWUFBTWlOLEtBQUssR0FBR1YsT0FBTyxDQUFyQixRQUFxQixDQUFyQjtBQUNBLFlBQU07QUFBRXpELGVBQU8sR0FBVDtBQUFBLFVBQU47O0FBRUEsVUFBSSwrQkFBSixLQUFJLENBQUosRUFBMkI7QUFDekIsY0FBTTtBQUFFNEQsa0JBQVEsRUFBVjtBQUFBLFlBQTJCLGlCQUFqQyxFQUFpQyxDQUFqQztBQUNBLGNBQU0rQixVQUFVLEdBQUcsK0JBQW5CLEtBQW1CLENBQW5CO0FBQ0EsY0FBTUMsVUFBVSxHQUFHLCtDQUFuQixVQUFtQixDQUFuQjs7QUFDQSxZQUFJLENBQUosWUFBaUI7QUFDZixnQkFBTUMsYUFBYSxHQUFHM0QsTUFBTSxDQUFOQSxLQUFZeUQsVUFBVSxDQUF0QnpELGVBQ25CNEQsS0FBRCxJQUFXLENBQUNwSSxLQUFLLENBRG5CLEtBQ21CLENBREd3RSxDQUF0Qjs7QUFJQSxjQUFJMkQsYUFBYSxDQUFiQSxTQUFKLEdBQThCO0FBQzVCLHNCQUEyQztBQUN6Q3RPLHFCQUFPLENBQVBBLEtBQ0UsNkRBQUMsR0FDRSxlQUFjc08sYUFBYSxDQUFiQSxVQUZuQnRPO0FBUUY7O0FBQUEsbUJBQU93TyxNQUFNLENBQ1gsVUFDRyw4QkFBNkJDLFVBQVcsOENBQTZDN0IsS0FBdEYsS0FBQyxHQUZMLCtEQUNFLENBRFcsQ0FBYjtBQU9IO0FBdEJELGVBc0JPO0FBQ0w7QUFDQWpDLGdCQUFNLENBQU5BO0FBRUg7QUFFRG5DOztBQUFBQSxZQUFNLENBQU5BLG9DQXBHc0MsQ0FzR3RDOztBQUNBLGtFQUNHa0csU0FBRCxJQUFlO0FBQ2IsY0FBTTtBQUFBO0FBQUEsWUFBTjs7QUFFQSxZQUFJQyxLQUFLLElBQUlBLEtBQUssQ0FBbEIsV0FBOEI7QUFDNUIsaUJBQU9SLE9BQU8sQ0FBZCxLQUFjLENBQWQ7QUFHRjNGOztBQUFBQSxjQUFNLENBQU5BO0FBQ0E7O0FBRUEsa0JBQTJDO0FBQ3pDLGdCQUFNb0csT0FBWSxHQUFHLHlCQUFyQjtBQUNFckgsZ0JBQUQsS0FBQ0EsQ0FBRCxhQUFDQSxHQUNBcUgsT0FBTyxDQUFQQSxvQkFBNEJBLE9BQU8sQ0FBbkNBLHVCQUNBLENBQUVGLFNBQVMsQ0FBVixTQUFDQSxDQUZILGVBQUNuSDtBQUtKOztBQUFBLDZEQUFxRCxNQUFNO0FBQ3pELHFCQUFXO0FBQ1RpQixrQkFBTSxDQUFOQTtBQUNBO0FBR0ZBOztBQUFBQSxnQkFBTSxDQUFOQTtBQUNBLGlCQUFPMkYsT0FBTyxDQUFkLElBQWMsQ0FBZDtBQVBGO0FBbEJKO0FBdkdGLEtBQU8sQ0FBUDtBQXdJRlU7O0FBQUFBLGFBQVcsa0JBSVRuUSxPQUFPLEdBSkUsSUFLSDtBQUNOLGNBQTJDO0FBQ3pDLFVBQUksT0FBTzZJLE1BQU0sQ0FBYixZQUFKLGFBQTJDO0FBQ3pDdkgsZUFBTyxDQUFQQTtBQUNBO0FBR0Y7O0FBQUEsVUFBSSxPQUFPdUgsTUFBTSxDQUFOQSxRQUFQLE1BQU9BLENBQVAsS0FBSixhQUFtRDtBQUNqRHZILGVBQU8sQ0FBUEEsTUFBZSwyQkFBMEJMLE1BQXpDSztBQUNBO0FBRUg7QUFFRDs7QUFBQSxRQUFJTCxNQUFNLEtBQU5BLGVBQTBCLHlCQUE5QixJQUErQztBQUM3QyxZQUFNLENBQU4sZ0JBQ0U7QUFBQTtBQUFBO0FBREY7QUFDRSxPQURGLEVBTUU7QUFDQTtBQUNBO0FBUkY7QUFhSDtBQUVEbVA7O0FBQUFBLGNBQVksNkJBS1ZyRyxPQUFnQixHQUxOLE9BTVU7QUFDcEIsVUFBTXNHLGVBQWUsR0FBRyxnQkFBeEIsS0FBd0IsQ0FBeEIsQ0FEb0IsQ0FHcEI7QUFDQTs7QUFDQSxRQUFJdEcsT0FBTyxJQUFQQSxtQkFBOEIsZUFBbEMsT0FBd0Q7QUFDdEQsYUFBTytFLE9BQU8sQ0FBUEEsUUFBUCxlQUFPQSxDQUFQO0FBR0Y7O0FBQUEsVUFBTXdCLFdBQVcsR0FBRyx3QkFHZjtBQUNILGFBQU8sWUFBYWIsT0FBRCxJQUFhO0FBQzlCLFlBQUk5TixHQUFHLENBQUhBLDhCQUFKLGVBQXFEO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQWtILGdCQUFNLENBQU5BLG1CQVBtRCxDQVNuRDtBQUNBOztBQUNBbEgsYUFBRyxDQUFIQSxpQkFYbUQsQ0FZbkQ7O0FBQ0EsaUJBQU84TixPQUFPLENBQUM7QUFBRVEsaUJBQUssRUFBdEI7QUFBZSxXQUFELENBQWQ7QUFHRjs7QUFBQSxZQUFJdE8sR0FBRyxDQUFQLFdBQW1CO0FBQ2pCO0FBQ0EsaUJBQU84TixPQUFPLENBQUM7QUFBRVEsaUJBQUssRUFBdEI7QUFBZSxXQUFELENBQWQ7QUFHRlI7O0FBQUFBLGVBQU8sQ0FDTCxvQ0FDU3JPLEdBQUQsSUFBUztBQUNiLGdCQUFNO0FBQUVtUCxnQkFBSSxFQUFOO0FBQUEsY0FBTjtBQUNBLGdCQUFNUCxTQUFvQixHQUFHO0FBQUE7QUFBN0I7QUFBNkIsV0FBN0I7QUFDQSxpQkFBTyxZQUFhUCxPQUFELElBQWE7QUFDOUIsNENBQWdDO0FBQUE7QUFBQTtBQUFoQztBQUFnQyxhQUFoQyxPQUtHelEsS0FBRCxJQUFXO0FBQ1RnUix1QkFBUyxDQUFUQTtBQUNBQSx1QkFBUyxDQUFUQTtBQUNBUCxxQkFBTyxDQUFQQSxTQUFPLENBQVBBO0FBUkosZUFVR2UsTUFBRCxJQUFZO0FBQ1ZsUCxxQkFBTyxDQUFQQTtBQUlBME8sdUJBQVMsQ0FBVEE7QUFDQUEsdUJBQVMsQ0FBVEE7QUFDQVAscUJBQU8sQ0FBUEEsU0FBTyxDQUFQQTtBQWpCSjtBQURGLFdBQU8sQ0FBUDtBQUpKLGlCQTJCVTlOLEdBQUQsSUFBUzJPLFdBQVcsTUE1Qi9CYixJQTRCK0IsQ0EzQjdCLENBREssQ0FBUEE7QUF0QkYsT0FBTyxDQUFQO0FBSkY7O0FBMkRBLFdBQVEsWUFBWSxxQkFBcUI7QUFDdkMsMkJBQXFCO0FBQ25CLGVBQU9BLE9BQU8sQ0FBZCxlQUFjLENBQWQ7QUFHRjs7QUFBQSxzQ0FDR3JPLEdBQUQsSUFDRXFPLE9BQU8sQ0FBQztBQUNOblIsaUJBQVMsRUFBRThDLEdBQUcsQ0FEUjtBQUVONE4sZUFBTyxFQUFFNU4sR0FBRyxDQUFIQSxJQUZIO0FBR044TixlQUFPLEVBQUU5TixHQUFHLENBQUhBLElBTGY7QUFFWSxPQUFELENBRlg7QUFMSyxLQUFDLEVBQUQsSUFBQyxDQWVDNE8sU0FBRCxJQUEwQjtBQUM5QixZQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBTjs7QUFFQSxnQkFBMkM7QUFDekMsY0FBTTtBQUFBO0FBQUEsWUFBeUIzRSxtQkFBTyxDQUF0QywwQkFBc0MsQ0FBdEM7O0FBQ0EsWUFBSSxDQUFDb0Ysa0JBQWtCLENBQXZCLFNBQXVCLENBQXZCLEVBQW9DO0FBQ2xDLGdCQUFNLFVBQ0gseURBQXdEOUMsUUFEM0QsR0FBTSxDQUFOO0FBSUg7QUFFRDs7QUFBQSxhQUFPLGNBQXlCLE1BQzlCcUIsT0FBTyxHQUNILG9CQURHLEVBQ0gsQ0FERyxHQUVIRSxPQUFPLEdBQ1Asb0JBRE8sRUFDUCxDQURPLEdBRVAsZ0NBRUU7QUFDQTtBQUFBO0FBQUE7QUFHRWYsY0FBTSxFQVhUO0FBUUMsT0FIRixDQUxDLE9BY0NuUCxLQUFELElBQVc7QUFDaEJnUixpQkFBUyxDQUFUQTtBQUNBO0FBQ0E7QUFqQkYsT0FBTyxDQUFQO0FBM0JHLEtBQUMsRUFBRCxLQUFDLENBQVIsV0FBUSxDQUFSO0FBa0RGVTs7QUFBQUEsS0FBRyxtQ0FNYztBQUNmO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFPLFlBQVAsSUFBTyxDQUFQO0FBR0Y7QUFBQTs7Ozs7O0FBSUFDLGdCQUFjLEtBQTZCO0FBQ3pDO0FBR0ZDOztBQUFBQSxpQkFBZSxLQUFzQjtBQUNuQyxRQUFJLENBQUMsS0FBTCxRQUFrQjtBQUNsQixVQUFNLDBCQUEwQixrQkFBaEMsR0FBZ0MsQ0FBaEM7QUFDQSxVQUFNLDBCQUEwQnBJLEVBQUUsQ0FBRkEsTUFBaEMsR0FBZ0NBLENBQWhDLENBSG1DLENBS25DOztBQUNBLFFBQUlxSSxPQUFPLElBQUlDLFlBQVksS0FBdkJELGdCQUE0Q0UsT0FBTyxLQUF2RCxTQUFxRTtBQUNuRTtBQUdGLEtBVm1DLENBVW5DOzs7QUFDQSxRQUFJRCxZQUFZLEtBQWhCLGNBQW1DO0FBQ2pDO0FBR0YsS0FmbUMsQ0FlbkM7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFdBQU9DLE9BQU8sS0FBZDtBQUdGQzs7QUFBQUEsY0FBWSxLQUFtQjtBQUM3QixVQUFNLFdBQVd4SSxFQUFFLENBQUZBLE1BQWpCLEdBQWlCQSxDQUFqQixDQUQ2QixDQUU3Qjs7QUFDQSxRQUFJeUksSUFBSSxLQUFSLElBQWlCO0FBQ2ZwSSxZQUFNLENBQU5BO0FBQ0E7QUFHRixLQVI2QixDQVE3Qjs7O0FBQ0EsVUFBTXFJLElBQUksR0FBR2pILFFBQVEsQ0FBUkEsZUFBYixJQUFhQSxDQUFiOztBQUNBLGNBQVU7QUFDUmlILFVBQUksQ0FBSkE7QUFDQTtBQUVGLEtBZDZCLENBYzdCO0FBQ0E7OztBQUNBLFVBQU1DLE1BQU0sR0FBR2xILFFBQVEsQ0FBUkEsd0JBQWYsQ0FBZUEsQ0FBZjs7QUFDQSxnQkFBWTtBQUNWa0gsWUFBTSxDQUFOQTtBQUVIO0FBRURDOztBQUFBQSxVQUFRLFNBQTBCO0FBQ2hDLFdBQU8sZ0JBQVA7QUFHRjtBQUFBOzs7Ozs7OztBQU1BM0csVUFBUSxNQUVOMEQsTUFBYyxHQUZSLEtBR05uTyxPQUF3QixHQUhsQixJQUlTO0FBQ2YsV0FBTyxZQUFZLHFCQUFxQjtBQUN0QyxZQUFNO0FBQUE7QUFBQTtBQUFBLFVBQXlCLGlCQUEvQixHQUErQixDQUEvQjs7QUFFQSxVQUFJLGFBQUosVUFBMkI7QUFDekIsa0JBQTJDO0FBQ3pDLGdCQUFNLFVBQ0gsa0NBQWlDa0ksR0FEcEMsb0RBQU0sQ0FBTjtBQUlGOztBQUFBO0FBR0YsT0Fac0MsQ0FZdEM7OztBQUNBLGdCQUEyQztBQUN6QztBQUVGOztBQUFBLFlBQU1nRyxLQUFLLEdBQUdILFdBQVcsQ0FBQ1AsT0FBTyxDQUFqQyxRQUFpQyxDQUFSLENBQXpCO0FBQ0FzQixhQUFPLENBQVBBLElBQVksQ0FDVixrQ0FBa0NmLFdBQVcsQ0FEbkMsTUFDbUMsQ0FBN0MsQ0FEVSxFQUVWLGdCQUFnQi9OLE9BQU8sQ0FBUEEsd0JBQWhCLFlBRkY4TyxLQUVFLENBRlUsQ0FBWkEsT0FHUSxNQUFNVyxPQUhkWDtBQWpCRixLQUFPLENBQVA7QUF3QkY7O0FBQUEsOEJBQTJEO0FBQ3pELFFBQUl1QyxTQUFTLEdBQWI7O0FBQ0EsVUFBTUMsTUFBTSxHQUFJLFdBQVcsTUFBTTtBQUMvQkQsZUFBUyxHQUFUQTtBQURGOztBQUdBbkQsU0FBSyxHQUFHSCxXQUFXLENBQW5CRyxLQUFtQixDQUFuQkE7QUFFQSxVQUFNcUQsZUFBZSxHQUFHLE1BQU0seUJBQTlCLEtBQThCLENBQTlCOztBQUVBLG1CQUFlO0FBQ2IsWUFBTXRCLEtBQVUsR0FBRyxVQUNoQix3Q0FBdUMvQixLQUQxQyxHQUFtQixDQUFuQjtBQUdBK0IsV0FBSyxDQUFMQTtBQUNBO0FBR0Y7O0FBQUEsUUFBSXFCLE1BQU0sS0FBSyxLQUFmLEtBQXlCO0FBQ3ZCO0FBR0Y7O0FBQUE7QUFHRkU7O0FBQUFBLFVBQVEsS0FBc0M7QUFDNUMsUUFBSUgsU0FBUyxHQUFiOztBQUNBLFVBQU1DLE1BQU0sR0FBRyxNQUFNO0FBQ25CRCxlQUFTLEdBQVRBO0FBREY7O0FBR0E7QUFDQSxXQUFPSSxFQUFFLEdBQUZBLEtBQVdqUSxJQUFELElBQVU7QUFDekIsVUFBSThQLE1BQU0sS0FBSyxLQUFmLEtBQXlCO0FBQ3ZCO0FBR0Y7O0FBQUEscUJBQWU7QUFDYixjQUFNM1AsR0FBUSxHQUFHLFVBQWpCLGlDQUFpQixDQUFqQjtBQUNBQSxXQUFHLENBQUhBO0FBQ0E7QUFHRjs7QUFBQTtBQVhGLEtBQU84UCxDQUFQO0FBa0NGM0U7O0FBQUFBLGlCQUFlLGlCQUdDO0FBQ2QsVUFBTTtBQUFFeE8sZUFBUyxFQUFYO0FBQUEsUUFBcUIsZ0JBQTNCLE9BQTJCLENBQTNCOztBQUNBLFVBQU1vVCxPQUFPLEdBQUcsY0FBaEIsR0FBZ0IsQ0FBaEI7O0FBQ0FDLE9BQUcsQ0FBSEE7QUFDQSxXQUFPLHFDQUFpRDtBQUFBO0FBQUE7QUFHdERoRyxZQUFNLEVBSGdEO0FBQXhEO0FBQXdELEtBQWpELENBQVA7QUFRRmlHOztBQUFBQSxvQkFBa0IsS0FBbUI7QUFDbkMsUUFBSSxLQUFKLEtBQWM7QUFDWixZQUFNbEksQ0FBQyxHQUFHLFVBQVYsaUJBQVUsQ0FBVjtBQUNFQSxPQUFELFVBQUNBLEdBQUQsSUFBQ0E7QUFDRkksWUFBTSxDQUFOQTtBQUNBO0FBQ0E7QUFFSDtBQUVEK0g7O0FBQUFBLFFBQU0sT0FBaUM7QUFDckMsV0FBTyxlQUFlLHlCQUF0QixTQUFPLENBQVA7QUEvc0I4Qzs7QUFBQTs7O0FBQTdCL0gsTSxDQXNCWjRFLE1BdEJZNUUsR0FzQlUsb0JBdEJWQSxDOzs7Ozs7Ozs7Ozs7Ozs7eUNDM0lyQjs7QUFDQSxNQUFNZ0ksVUFBVSxHQUFoQjs7QUFFTywrQkFBZ0Q7QUFDckQsU0FBT0EsVUFBVSxDQUFWQSxLQUFQLEtBQU9BLENBQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0hNLHFDQUF1RTtBQUM1RSxRQUFNO0FBQUE7QUFBQTtBQUFBLE1BQU47QUFDQSxTQUFRbkUsUUFBRCxJQUF5QztBQUM5QyxVQUFNZ0MsVUFBVSxHQUFHb0MsRUFBRSxDQUFGQSxLQUFuQixRQUFtQkEsQ0FBbkI7O0FBQ0EsUUFBSSxDQUFKLFlBQWlCO0FBQ2Y7QUFHRjs7QUFBQSxVQUFNQyxNQUFNLEdBQUluQyxLQUFELElBQW1CO0FBQ2hDLFVBQUk7QUFDRixlQUFPb0Msa0JBQWtCLENBQXpCLEtBQXlCLENBQXpCO0FBQ0EsT0FGRixDQUVFLFVBQVU7QUFDVixjQUFNdFEsR0FBOEIsR0FBRyxVQUF2Qyx3QkFBdUMsQ0FBdkM7QUFHQUEsV0FBRyxDQUFIQTtBQUNBO0FBRUg7QUFWRDs7QUFXQSxVQUFNdVEsTUFBa0QsR0FBeEQ7QUFFQWpHLFVBQU0sQ0FBTkEscUJBQTZCa0csUUFBRCxJQUFzQjtBQUNoRCxZQUFNQyxDQUFDLEdBQUdDLE1BQU0sQ0FBaEIsUUFBZ0IsQ0FBaEI7QUFDQSxZQUFNQyxDQUFDLEdBQUczQyxVQUFVLENBQUN5QyxDQUFDLENBQXRCLEdBQW9CLENBQXBCOztBQUNBLFVBQUlFLENBQUMsS0FBTCxXQUFxQjtBQUNuQkosY0FBTSxDQUFOQSxRQUFNLENBQU5BLEdBQW1CLENBQUNJLENBQUMsQ0FBREEsUUFBRCxHQUFDQSxDQUFELEdBQ2ZBLENBQUMsQ0FBREEsZUFBa0JySixLQUFELElBQVcrSSxNQUFNLENBRG5CLEtBQ21CLENBQWxDTSxDQURlLEdBRWZGLENBQUMsQ0FBREEsU0FDQSxDQUFDSixNQUFNLENBRFBJLENBQ08sQ0FBUCxDQURBQSxHQUVBSixNQUFNLENBSlZFLENBSVUsQ0FKVkE7QUFNSDtBQVZEakc7QUFXQTtBQTlCRjtBQWdDRCxDOzs7Ozs7Ozs7Ozs7Ozs7dUNDcENEO0FBQ0E7O0FBQ0EsMEJBQWtDO0FBQ2hDLFNBQU9zRyxHQUFHLENBQUhBLGdDQUFQLE1BQU9BLENBQVA7QUFHSzs7QUFBQSx3Q0FNTDtBQUNBO0FBQ0EsUUFBTUMsWUFBWSxHQUFHQyxXQUFXLENBQUNDLGVBQWUsQ0FBZkEsc0JBQWpDLEdBQWdDLENBQWhDO0FBRUEsUUFBTUwsTUFBaUUsR0FBdkU7QUFDQSxNQUFJTSxVQUFVLEdBQWQ7QUFFQSxRQUFNQyxrQkFBa0IsR0FBRyxZQUFZLENBQVosdUNBRXpCLFdBQVc7QUFDVCxVQUFNQyxVQUFVLEdBQUcsb0JBQW5CLEVBQW1CLENBQW5COztBQUNBLG9CQUFnQjtBQUNkQyxRQUFFLEdBQUdBLEVBQUUsQ0FBRkEsU0FBWSxDQUFqQkEsQ0FBS0EsQ0FBTEE7QUFFRjs7QUFBQSxVQUFNQyxVQUFVLEdBQUcsa0JBQW5CLEVBQW1CLENBQW5COztBQUNBLG9CQUFnQjtBQUNkRCxRQUFFLEdBQUdBLEVBQUUsQ0FBRkEsTUFBTEEsQ0FBS0EsQ0FBTEE7QUFFRjs7QUFBQSxVQUFNLENBQ0osRUFDRTtBQUFBLEtBREYseUNBREksQ0FJSjtBQUpJLEtBQU4sR0FLSTtBQUFFRSxTQUFHLEVBQUVMLFVBQVA7QUFBcUJNLFlBQU0sRUFML0I7QUFLSSxLQUxKO0FBTUEsV0FBT0YsVUFBVSxHQUFJRixVQUFVLG1CQUFkLFdBQWpCO0FBakJKLEdBQTJCLENBQTNCO0FBcUJBLDhCQTVCQSxDQThCQTtBQUNBOztBQUNBLFlBQW1DO0FBQ2pDSywyQkFBdUIsR0FBR1YsWUFBWSxDQUFaQSx1Q0FFeEIsV0FBVztBQUNULFlBQU1PLFVBQVUsR0FBRyxrQkFBbkIsRUFBbUIsQ0FBbkI7QUFDQSxZQUFNblEsR0FBRyxHQUFHLEVBQ1Y7QUFBQSxPQURVLDREQUFaLEVBQVksQ0FBWjtBQUtBLGFBQU9tUSxVQUFVLEdBQ1osT0FBTU4sV0FBVyxLQURMLFVBRVosT0FBTUEsV0FBVyxLQUZ0QjtBQVRKUyxLQUEwQlYsQ0FBMUJVO0FBZ0JGOztBQUFBLFNBQU87QUFDTG5CLE1BQUUsRUFBRSxXQUFXLDJCQUFYLFdBREMsR0FDRCxDQURDO0FBQUE7QUFHTG9CLGNBQVUsRUFBRUQsdUJBQXVCLEdBQzlCLElBQUdBLHVCQUQyQixZQUhyQztBQUFPLEdBQVA7QUFPRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRUQ7QUE2T0E7Ozs7O0FBR08sc0JBRUY7QUFDSCxNQUFJRSxJQUFJLEdBQVI7QUFDQTtBQUVBLFNBQVEsQ0FBQyxHQUFELFNBQW9CO0FBQzFCLFFBQUksQ0FBSixNQUFXO0FBQ1RBLFVBQUksR0FBSkE7QUFDQTNLLFlBQU0sR0FBR2dKLEVBQUUsQ0FBQyxHQUFaaEosSUFBVyxDQUFYQTtBQUVGOztBQUFBO0FBTEY7QUFTSzs7QUFBQSw2QkFBNkI7QUFDbEMsUUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQStCSSxNQUFNLENBQTNDO0FBQ0EsU0FBUSxHQUFFd0ssUUFBUyxLQUFJQyxRQUFTLEdBQUVDLElBQUksR0FBRyxNQUFILE9BQWdCLEVBQXREO0FBR0s7O0FBQUEsa0JBQWtCO0FBQ3ZCLFFBQU07QUFBQTtBQUFBLE1BQVcxSyxNQUFNLENBQXZCO0FBQ0EsUUFBTVYsTUFBTSxHQUFHcUwsaUJBQWY7QUFDQSxTQUFPakwsSUFBSSxDQUFKQSxVQUFlSixNQUFNLENBQTVCLE1BQU9JLENBQVA7QUFHSzs7QUFBQSxtQ0FBd0Q7QUFDN0QsU0FBTyw0Q0FFSGpLLFNBQVMsQ0FBVEEsZUFBeUJBLFNBQVMsQ0FBbENBLFFBRko7QUFLSzs7QUFBQSx3QkFBd0M7QUFDN0MsU0FBTzhDLEdBQUcsQ0FBSEEsWUFBZ0JBLEdBQUcsQ0FBMUI7QUFHSzs7QUFBQSw2Q0FJa0Q7QUFDdkQsWUFBMkM7QUFBQTs7QUFDekMsMEJBQUlxUyxHQUFHLENBQVAsNERBQUlBLGVBQUosaUJBQW9DO0FBQ2xDLFlBQU1sSCxPQUFPLEdBQUksSUFBR21ILGNBQWMsS0FBbEM7QUFHQSxZQUFNLFVBQU4sT0FBTSxDQUFOO0FBRUg7QUFDRCxHQVR1RCxDQVN2RDs7O0FBQ0EsUUFBTXRTLEdBQUcsR0FBR3VRLEdBQUcsQ0FBSEEsT0FBWUEsR0FBRyxDQUFIQSxPQUFXQSxHQUFHLENBQUhBLElBQW5DOztBQUVBLE1BQUksQ0FBQzhCLEdBQUcsQ0FBUixpQkFBMEI7QUFDeEIsUUFBSTlCLEdBQUcsQ0FBSEEsT0FBV0EsR0FBRyxDQUFsQixXQUE4QjtBQUM1QjtBQUNBLGFBQU87QUFDTGdDLGlCQUFTLEVBQUUsTUFBTUMsbUJBQW1CLENBQUNqQyxHQUFHLENBQUosV0FBZ0JBLEdBQUcsQ0FEekQsR0FDc0M7QUFEL0IsT0FBUDtBQUlGOztBQUFBO0FBR0Y7O0FBQUEsUUFBTTNTLEtBQUssR0FBRyxNQUFNeVUsR0FBRyxDQUFIQSxnQkFBcEIsR0FBb0JBLENBQXBCOztBQUVBLE1BQUlyUyxHQUFHLElBQUl5UyxTQUFTLENBQXBCLEdBQW9CLENBQXBCLEVBQTJCO0FBQ3pCO0FBR0Y7O0FBQUEsTUFBSSxDQUFKLE9BQVk7QUFDVixVQUFNdEgsT0FBTyxHQUFJLElBQUdtSCxjQUFjLEtBRWhDLCtEQUE4RDFVLEtBRmhFO0FBR0EsVUFBTSxVQUFOLE9BQU0sQ0FBTjtBQUdGOztBQUFBLFlBQTJDO0FBQ3pDLFFBQUlpTixNQUFNLENBQU5BLDRCQUFtQyxDQUFDMEYsR0FBRyxDQUEzQyxLQUFpRDtBQUMvQ3JRLGFBQU8sQ0FBUEEsS0FDRyxHQUFFb1MsY0FBYyxLQURuQnBTO0FBTUg7QUFFRDs7QUFBQTtBQUdLOztBQUFBLE1BQU13UyxhQUFhLEdBQUcsd0dBQXRCLFNBQXNCLENBQXRCOzs7QUFlQSw0Q0FHRztBQUNSLFlBQTRDO0FBQzFDLFFBQUk1TCxHQUFHLEtBQUhBLFFBQWdCLGVBQXBCLFVBQTZDO0FBQzNDK0QsWUFBTSxDQUFOQSxrQkFBMEJySixHQUFELElBQVM7QUFDaEMsWUFBSWtSLGFBQWEsQ0FBYkEsaUJBQStCLENBQW5DLEdBQXVDO0FBQ3JDeFMsaUJBQU8sQ0FBUEEsS0FDRyxxREFBb0RzQixHQUR2RHRCO0FBSUg7QUFORDJLO0FBUUg7QUFFRDs7QUFBQSxTQUFPLHNCQUFQLE9BQU8sQ0FBUDtBQUdLOztBQUFBLE1BQU04SCxFQUFFLEdBQUcsdUJBQVg7O0FBQ0EsTUFBTXhFLEVBQUUsR0FDYndFLEVBQUUsSUFDRixPQUFPdkUsV0FBVyxDQUFsQixTQURBdUUsY0FFQSxPQUFPdkUsV0FBVyxDQUFsQixZQUhLOzs7Ozs7Ozs7Ozs7QUM5V1AsaUJBQWlCLG1CQUFPLENBQUMsbUVBQW9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTdDO0FBQ0E7O0FBRUEsTUFBTXdFLFNBQVMsR0FBRyxNQUFNO0FBQ3RCLFNBQ0UsTUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsdUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREY7QUFLRCxDQU5EOztBQVFlQSx3RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGdDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5jb25zdCBjYXJvdXNlbHMgPSBbXHJcbiAge1xyXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9oZXJvcy9oZXJvLmpwZ1wiLFxyXG4gICAgdGl0bGU6IFwiSnVzdCBJbjogQ2xhcmtzIG1vc3QgdHJlbmRpbmcgc2hvZXNcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiBcIi9pbWFnZXMvaGVyb3MvaGVybzEuanBnXCIsXHJcbiAgICB0aXRsZTogXCJKdXN0IEluOiBDbGFya3MgbW9zdCB0cmVuZGluZyBzaG9lc1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9oZXJvcy9oZXJvMi5qcGdcIixcclxuICAgIHRpdGxlOiBcIkp1c3QgSW46IENsYXJrcyBtb3N0IHRyZW5kaW5nIHNob2VzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogXCIvaW1hZ2VzL2hlcm9zL2hlcm8zLmpwZ1wiLFxyXG4gICAgdGl0bGU6IFwiSnVzdCBJbjogQ2xhcmtzIG1vc3QgdHJlbmRpbmcgc2hvZXNcIixcclxuICB9LFxyXG5dO1xyXG5cclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vQ2Fyb3VzZWxGb3JtLm1vZHVsZS5jc3NcIjtcclxuY2xhc3MgQ2Fyb3VzZWxGb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIGNhcm91c2VsczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImlucHV0XCIsXHJcbiAgICAgICAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJDYXJvdXNlbCBUaXRsZVwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHZhbHVlOiBjYXJvdXNlbHNbMF0udGl0bGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbWFnZToge1xyXG4gICAgICAgICAgZWxlbWVudFR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgICAgICAgdHlwZTogXCJmaWxlXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdmFsdWU6IGNhcm91c2Vsc1swXS5pbWFnZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImlucHV0XCIsXHJcbiAgICAgICAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJDYXJvdXNlbCBUaXRsZVwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHZhbHVlOiBjYXJvdXNlbHNbMV0udGl0bGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbWFnZToge1xyXG4gICAgICAgICAgZWxlbWVudFR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgICAgICAgdHlwZTogXCJmaWxlXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdmFsdWU6IGNhcm91c2Vsc1sxXS5pbWFnZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImlucHV0XCIsXHJcbiAgICAgICAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJDYXJvdXNlbCBUaXRsZVwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHZhbHVlOiBjYXJvdXNlbHNbMl0udGl0bGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbWFnZToge1xyXG4gICAgICAgICAgZWxlbWVudFR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgICAgICAgdHlwZTogXCJmaWxlXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdmFsdWU6IGNhcm91c2Vsc1syXS5pbWFnZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImlucHV0XCIsXHJcbiAgICAgICAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJDYXJvdXNlbCBUaXRsZVwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHZhbHVlOiBjYXJvdXNlbHNbM10udGl0bGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbWFnZToge1xyXG4gICAgICAgICAgZWxlbWVudFR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgICAgICAgdHlwZTogXCJmaWxlXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdmFsdWU6IGNhcm91c2Vsc1szXS5pbWFnZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9O1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5Gb3Jtc1dyYXBwZXJ9PjwvZGl2PjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsRm9ybTtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiRm9ybXNXcmFwcGVyXCI6IFwiQ2Fyb3VzZWxGb3JtX0Zvcm1zV3JhcHBlcl9fMWdMcGFcIixcblx0XCJGb3JtXCI6IFwiQ2Fyb3VzZWxGb3JtX0Zvcm1fXzhWWklCXCIsXG5cdFwiZGlzcGxheVwiOiBcIkNhcm91c2VsRm9ybV9kaXNwbGF5X182aGhHT1wiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vQ29udGVudHMubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgT3ZlcnZpZXdzIGZyb20gXCIuLi9EYXNoQ2FyZHMvT3ZlcnZpZXdzL092ZXJ2aWV3c1wiO1xyXG5pbXBvcnQgUHJvZHVjdHMgZnJvbSBcIi4vUHJvZHVjdHMvUHJvZHVjdHNcIjtcclxuaW1wb3J0IENhcm91c2VsRm9ybSBmcm9tIFwiLi9DYXJvdXNlbEZvcm0vQ2Fyb3VzZWxGb3JtXCI7XHJcbmltcG9ydCBEYXNoYm9hcmRTdW1tYXJ5IGZyb20gXCIuL0Rhc2hib2FyZFN1bW1hcnkvRGFzaGJvYXJkU3VtbWFyeVwiO1xyXG5cclxuY29uc3QgY29udGVudHMgPSAocHJvcHMpID0+IHtcclxuICBsZXQgY29udGVudCA9IG51bGw7XHJcbiAgc3dpdGNoIChwcm9wcy50eXBlKSB7XHJcbiAgICBjYXNlIFwicHJvZHVjdFwiOlxyXG4gICAgICBjb250ZW50ID0gPFByb2R1Y3RzIC8+O1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlIFwidXBkYXRlUHJvZHVjdFwiOlxyXG4gICAgICBjb250ZW50ID0gPFByb2R1Y3RGb3JtIHRpdGxlPVwiVXBkYXRlIFByb2R1Y3RcIiB1cGRhdGU9e3RydWV9IC8+O1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlIFwiY2Fyb3VzZWxcIjpcclxuICAgICAgY29udGVudCA9IDxDYXJvdXNlbEZvcm0gLz47XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGNvbnRlbnQgPSA8RGFzaGJvYXJkU3VtbWFyeSAvPjtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLkNvbnRlbnRzfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuU2lkZUJhclJlcGxhY2V9PlxyXG4gICAgICAgIDxmb290ZXI+Q29weXJpZ2h0ICZjb3B5OyBhdXN0aW5FeHByZXNzLmNvbTwvZm9vdGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuTWFpbkNvbnRlbnRzfT5cclxuICAgICAgICB7LyogPE92ZXJ2aWV3cyAvPiAqL31cclxuXHJcbiAgICAgICAge2NvbnRlbnR9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnRzO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJDb250ZW50c1wiOiBcIkNvbnRlbnRzX0NvbnRlbnRzX19lWVRFMVwiLFxuXHRcIlNpZGVCYXJSZXBsYWNlXCI6IFwiQ29udGVudHNfU2lkZUJhclJlcGxhY2VfXzJtUEpPXCIsXG5cdFwiTWFpbkNvbnRlbnRzXCI6IFwiQ29udGVudHNfTWFpbkNvbnRlbnRzX182cm0wR1wiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vRGFzaGJvYXJkU3VtbWFyeS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vLi4vLi4vVUkvSW5wdXQvSW5wdXRcIjtcclxuXHJcbmNvbnN0IGRhc2hib2FyZFN1bW1hcnkgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxJbnB1dCBpbnB1dHR5cGU9XCJpbnB1dFwiIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGFzaGJvYXJkU3VtbWFyeTtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL3Byb2R1Y3RGb3JtLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IElucHV0IGZyb20gXCIuLi8uLi8uLi9VSS9JbnB1dC9JbnB1dFwiO1xyXG5pbXBvcnQgSW5wdXRJbWFnZSBmcm9tIFwiLi4vLi4vLi4vVUkvSW5wdXQvSW5wdXRJbWFnZVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi8uLi9VSS9CdXR0b24vQnV0dG9uXCI7XHJcbmltcG9ydCBJbWFnZUNhcmRzIGZyb20gXCIuLi8uLi8uLi9VSS9JbWFnZUNhcmRzL0ltYWdlQ2FyZHNcIjtcclxuaW1wb3J0IHsgQkFTRV9VUkwgfSBmcm9tIFwiLi4vLi4vLi4vLi4vbGliL3JlcXVlc3RzXCI7XHJcblxyXG4vLyBsaWJcclxuaW1wb3J0IFByb2R1Y3QgZnJvbSBcIi4uLy4uLy4uLy4uL2xpYi9odHRwL3Byb2R1Y3RzXCI7XHJcblxyXG5jb25zdCBwcm9kdWN0TGlzdCA9IFtcclxuICB7XHJcbiAgICBuYW1lOiBcIkFpciBab29tIFBlZ2FzdXMgMzdcIixcclxuICAgIHByaWNlOiAxMjAuMCxcclxuICAgIGltYWdlOiBcIi9pbWFnZXMvYWlyem9vbS5qcGdcIixcclxuICAgIHF1YW50aXR5OiAxMCxcclxuICAgIGNhdGVnb3J5OiBcIk1lblwiLFxyXG4gICAgY29sb3JzOiBbXCJ3aGl0ZVwiLCBcImJsdWVcIiwgXCJyZWRcIl0sXHJcbiAgICBzaXplczogW1wiMzlcIiwgXCI0MFwiLCBcIjQyXCJdLFxyXG4gICAgYnJhbmQ6IFwiQWRkaWRhc1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJMaWJyb24gV2hpdG5lc3NcIixcclxuICAgIGJyYW5kOiBcIk5pa2VcIixcclxuICAgIHByaWNlOiBcIjU3LjMzXCIsXHJcbiAgICBpbWFnZTogXCIvaW1hZ2VzL3J1bm5pbmcuanBnXCIsXHJcbiAgICBxdWFudGl0eTogMTAsXHJcbiAgICBjYXRlZ29yeTogXCJNZW5cIixcclxuICAgIGNvbG9yczogW1wid2hpdGVcIiwgXCJibHVlXCIsIFwicmVkXCJdLFxyXG4gICAgc2l6ZXM6IFtcIjM5XCIsIFwiNDBcIiwgXCI0MlwiXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiRmxleCBFeHBlcmllbmNlIFJ1biA5XCIsXHJcbiAgICBicmFuZDogXCJOaWtlXCIsXHJcbiAgICBwcmljZTogXCI2NS4wMFwiLFxyXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9mbGV4LmpwZ1wiLFxyXG4gICAgcXVhbnRpdHk6IDEwLFxyXG4gICAgY2F0ZWdvcnk6IFwiTWVuXCIsXHJcbiAgICBjb2xvcnM6IFtcIndoaXRlXCIsIFwiYmx1ZVwiLCBcInJlZFwiXSxcclxuICAgIHNpemVzOiBbXCIzOVwiLCBcIjQwXCIsIFwiNDJcIl0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkNsb3VkZmVlbCBLbml0IFNsaXAtT24gU25lYWtlclwiLFxyXG4gICAgYnJhbmQ6IFwiQ29sZSBIYWFuXCIsXHJcbiAgICBwcmljZTogXCIxMDAuMDBcIixcclxuICAgIGltYWdlOiBcIi9pbWFnZXMvY2xvdWRmZWVsLmpwZ1wiLFxyXG4gICAgcXVhbnRpdHk6IDEwLFxyXG4gICAgY2F0ZWdvcnk6IFwiTWVuXCIsXHJcbiAgICBjb2xvcnM6IFtcIndoaXRlXCIsIFwiYmx1ZVwiLCBcInJlZFwiXSxcclxuICAgIHNpemVzOiBbXCIzOVwiLCBcIjQwXCIsIFwiNDJcIl0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlJldm9sdXRpb24gNVwiLFxyXG4gICAgYnJhbmQ6IFwiTmlrZVwiLFxyXG4gICAgcHJpY2U6IFwiNjUuMDBcIixcclxuICAgIGltYWdlOiBcIi9pbWFnZXMvcmV2b2x1dGlvbi5qcGdcIixcclxuICAgIHF1YW50aXR5OiAxMCxcclxuICAgIGNhdGVnb3J5OiBcIk1lblwiLFxyXG4gICAgY29sb3JzOiBbXCJ3aGl0ZVwiLCBcImJsdWVcIiwgXCJyZWRcIl0sXHJcbiAgICBzaXplczogW1wiMzlcIiwgXCI0MFwiLCBcIjQyXCJdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJDbG91ZGZlZWwgS25pdCBTbGlwLU9uIFNuZWFrZXJcIixcclxuICAgIGJyYW5kOiBcIkNvbGUgSGFhblwiLFxyXG4gICAgcHJpY2U6IFwiMTAwLjAwXCIsXHJcbiAgICBpbWFnZTogXCIvaW1hZ2VzL2Nsb3VkZmVlbC5qcGdcIixcclxuICAgIHF1YW50aXR5OiAxMCxcclxuICAgIGNhdGVnb3J5OiBcIk1lblwiLFxyXG4gICAgY29sb3JzOiBbXCJ3aGl0ZVwiLCBcImJsdWVcIiwgXCJyZWRcIl0sXHJcbiAgICBzaXplczogW1wiMzlcIiwgXCI0MFwiLCBcIjQyXCJdLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jbGFzcyBQcm9kdWN0Rm9ybSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBwcm9kdWN0Rm9ybToge1xyXG4gICAgICBuYW1lOiB7XHJcbiAgICAgICAgZWxlbWVudFR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlByb2R1Y3QgTmFtZVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHByaWNlOiB7XHJcbiAgICAgICAgZWxlbWVudFR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IFwiUHJvZHVjdCBQcmljZVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHF1YW50aXR5OiB7XHJcbiAgICAgICAgZWxlbWVudFR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IFwiUXVhbnRpdHlcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICB9LFxyXG4gICAgICBzaXplczoge1xyXG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImlucHV0XCIsXHJcbiAgICAgICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcjogXCJTaXplc1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbG9yczoge1xyXG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImlucHV0XCIsXHJcbiAgICAgICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcjogXCJDb2xvcnNcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICB9LFxyXG4gICAgICBjYXRlZ29yeToge1xyXG4gICAgICAgIGVsZW1lbnRUeXBlOiBcInNlbGVjdFwiLFxyXG4gICAgICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgICAgIG9wdGlvbnM6IFtcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJudWxsXCIsIGRpc3BsYXlWYWx1ZTogXCItLS1TZWxlY3QgQ2F0ZWdvcnktLS1cIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIm1lblwiLCBkaXNwbGF5VmFsdWU6IFwiTWVuXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJ3b21lblwiLCBkaXNwbGF5VmFsdWU6IFwiV29tZW5cIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcImtpZHNcIiwgZGlzcGxheVZhbHVlOiBcIktpZHNcIiB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICB9LFxyXG4gICAgICBicmFuZDoge1xyXG4gICAgICAgIGVsZW1lbnRUeXBlOiBcInNlbGVjdFwiLFxyXG4gICAgICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgICAgIG9wdGlvbnM6IFtcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJudWxsXCIsIGRpc3BsYXlWYWx1ZTogXCItLS1TZWxlY3QgQnJhbmQtLS1cIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIm5pa2VcIiwgZGlzcGxheVZhbHVlOiBcIk5pa2VcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcImNsYXJrc1wiLCBkaXNwbGF5VmFsdWU6IFwiQ2xhcmtzXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJHdWNjaVwiLCBkaXNwbGF5VmFsdWU6IFwiR3VjY2lcIiB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICB9LFxyXG4gICAgICBkZXNjcmlwdGlvbjoge1xyXG4gICAgICAgIGVsZW1lbnRUeXBlOiBcInRleHRhcmVhXCIsXHJcbiAgICAgICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IFwiUHJvZHVjdCBkZXNjcmlwdGlvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIGltYWdlX3VybHM6IFtdLFxyXG4gIH07XHJcbiAgLy9JbnB1dCBDaGFuZ2UgSGFuZGxlclxyXG4gIGlucHV0Q2hhbmdlSGFuZGxlciA9IChldmVudCwgaW5wdXRJZGVudGlmaWVyKSA9PiB7XHJcbiAgICBjb25zdCB1cGRhdGVkUHJvZHVjdEZvcm0gPSB7IC4uLnRoaXMuc3RhdGUucHJvZHVjdEZvcm0gfTtcclxuICAgIGNvbnN0IHVwZGF0ZWRGb3JtRWxlbWVudCA9IHsgLi4udXBkYXRlZFByb2R1Y3RGb3JtW2lucHV0SWRlbnRpZmllcl0gfTtcclxuICAgIHVwZGF0ZWRGb3JtRWxlbWVudC52YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgIHVwZGF0ZWRQcm9kdWN0Rm9ybVtpbnB1dElkZW50aWZpZXJdID0gdXBkYXRlZEZvcm1FbGVtZW50O1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHByb2R1Y3RGb3JtOiB1cGRhdGVkUHJvZHVjdEZvcm0gfSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gRmlsZSBDaGFuZ2UgSGFuZGxlclxyXG4gIG9uRmlsZUNoYW5nZUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJwcm9kdWN0SW1hZ2VzXCIsIGV2ZW50LnRhcmdldC5maWxlcyk7XHJcbiAgICBmZXRjaChCQVNFX1VSTCArIFwiL2FwaS91cGxvYWRzL3Byb2R1Y3RzXCIsIHtcclxuICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICBib2R5OiBmb3JtRGF0YSxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpbWFnZV91cmxzOiByZXMuZGF0YS5pbWFnZVVybHMgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhcImVycm9yXCIsIGVycikpO1xyXG4gIH07XHJcblxyXG4gIC8vQWRkaW5nIFByb2R1Y3QgSGFuZGxlclxyXG4gIGFkZFByb2R1Y3RIYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZm9ybURhdGEgPSB7fTtcclxuICAgIGZvciAobGV0IGlucHV0RWxlbWVudElkZW50aWZpZXIgaW4gdGhpcy5zdGF0ZS5wcm9kdWN0Rm9ybSkge1xyXG4gICAgICBmb3JtRGF0YVtpbnB1dEVsZW1lbnRJZGVudGlmaWVyXSA9IHRoaXMuc3RhdGUucHJvZHVjdEZvcm1bXHJcbiAgICAgICAgaW5wdXRFbGVtZW50SWRlbnRpZmllclxyXG4gICAgICBdLnZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHByb2R1Y3QgPSB7XHJcbiAgICAgIHByb2R1Y3REYXRhOiBmb3JtRGF0YSxcclxuICAgIH07XHJcblxyXG4gICAgcHJvZHVjdC5wcm9kdWN0RGF0YS5zaXplcyA9IHByb2R1Y3QucHJvZHVjdERhdGEuc2l6ZXNcclxuICAgICAgLnNwbGl0KC9bOyxdL2dpbSlcclxuICAgICAgLm1hcCgodikgPT4gTnVtYmVyLnBhcnNlRmxvYXQodikpO1xyXG4gICAgcHJvZHVjdC5wcm9kdWN0RGF0YS5jb2xvcnMgPSBwcm9kdWN0LnByb2R1Y3REYXRhLmNvbG9ycy5zcGxpdCgvWzssXS9naW0pO1xyXG5cclxuICAgIC8vIGRlc3RydWN0dXJlIHByb2R1Y3QgZGF0YVxyXG4gICAgY29uc3QgeyBwcm9kdWN0RGF0YSB9ID0gcHJvZHVjdDtcclxuXHJcbiAgICAvLyBjaGVjayB0aGUgc3RhdGUgb2YgcHJvZHVjdCBmb3JtIChhZGQgLyB1cGRhdGUpXHJcbiAgICBpZiAodGhpcy5wcm9wcy50aXRsZSA9PT0gXCJVcGRhdGUgUHJvZHVjdFwiKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiVXBkYXRlIFByb2R1Y3RcIiwgcHJvZHVjdERhdGEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coXCJBZGQgUHJvZHVjdFwiLCBwcm9kdWN0RGF0YSk7XHJcbiAgICAgIC8vIENyZWF0ZSBhbmQgc2F2ZSBuZXcgcHJvZHVjdFxyXG4gICAgICBjb25zdCBuZXdQcm9kdWN0ID0gbmV3IFByb2R1Y3QoXHJcbiAgICAgICAgcHJvZHVjdERhdGEubmFtZSxcclxuICAgICAgICBwcm9kdWN0RGF0YS5kZXNjcmlwdGlvbixcclxuICAgICAgICBOdW1iZXIucGFyc2VGbG9hdChwcm9kdWN0RGF0YS5wcmljZSksXHJcbiAgICAgICAgW1wicHJvZHVjdERhdGEuaW1hZ2VfdXJsc1wiXSxcclxuICAgICAgICBOdW1iZXIucGFyc2VJbnQocHJvZHVjdERhdGEucXVhbnRpdHkpLFxyXG4gICAgICAgIHByb2R1Y3REYXRhLmNhdGVnb3J5LFxyXG4gICAgICAgIHByb2R1Y3REYXRhLmNvbG9ycyxcclxuICAgICAgICBwcm9kdWN0RGF0YS5zaXplcyxcclxuICAgICAgICBwcm9kdWN0RGF0YS5icmFuZFxyXG4gICAgICApO1xyXG5cclxuICAgICAgbmV3UHJvZHVjdC5zZW5kU2F2ZVJlcXVlc3QoKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGxldCBzZWFyY2ggPSBudWxsO1xyXG4gICAgaWYgKHRoaXMucHJvcHMudXBkYXRlKSB7XHJcbiAgICAgIHNlYXJjaCA9IChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaH0+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgUHJvZHVjdCBDb2RlXCIgLz5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlNlYXJjaFwiIC8+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZm9ybUVsZW1lbnRBcnJheSA9IFtdO1xyXG4gICAgZm9yIChsZXQga2V5IGluIHRoaXMuc3RhdGUucHJvZHVjdEZvcm0pIHtcclxuICAgICAgZm9ybUVsZW1lbnRBcnJheS5wdXNoKHtcclxuICAgICAgICBpZDoga2V5LFxyXG4gICAgICAgIGNvbmZpZzogdGhpcy5zdGF0ZS5wcm9kdWN0Rm9ybVtrZXldLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLkZvcm1zV3JhcHBlcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuRm9ybX0+XHJcbiAgICAgICAgICA8aDI+e3RoaXMucHJvcHMudGl0bGV9PC9oMj5cclxuICAgICAgICAgIHtzZWFyY2h9XHJcbiAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAge2Zvcm1FbGVtZW50QXJyYXkubWFwKChmb3JtRWxlbWVudCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIGtleT17Zm9ybUVsZW1lbnQuaWR9XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZT17Zm9ybUVsZW1lbnQuY29uZmlnLmVsZW1lbnRUeXBlfVxyXG4gICAgICAgICAgICAgICAgZWxlbWVudENvbmZpZz17Zm9ybUVsZW1lbnQuY29uZmlnLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybUVsZW1lbnQuY29uZmlnLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgY2hhbmdlZD17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLmlucHV0Q2hhbmdlSGFuZGxlcihldmVudCwgZm9ybUVsZW1lbnQuaWQpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDxJbnB1dEltYWdlIGNoYW5nZT17dGhpcy5vbkZpbGVDaGFuZ2VIYW5kbGVyfSAvPlxyXG4gICAgICAgICAgICA8SW1hZ2VDYXJkcyBpbWFnZV91cmxzPXt0aGlzLnN0YXRlLmltYWdlX3VybHN9IC8+XHJcbiAgICAgICAgICAgIDxCdXR0b24gY2xpY2tlZD17dGhpcy5hZGRQcm9kdWN0SGFuZGxlcn0+e3RoaXMucHJvcHMudGl0bGV9PC9CdXR0b24+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RGb3JtO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJGb3Jtc1dyYXBwZXJcIjogXCJwcm9kdWN0Rm9ybV9Gb3Jtc1dyYXBwZXJfXzJ1TURFXCIsXG5cdFwiRm9ybVwiOiBcInByb2R1Y3RGb3JtX0Zvcm1fXzNpUU9oXCIsXG5cdFwic2VhcmNoXCI6IFwicHJvZHVjdEZvcm1fc2VhcmNoX18xUlZENlwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vUHJvZHVjdC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uLy4uLy4uL1VJL0J1dHRvbi9CdXR0b25cIjtcclxuXHJcbmNvbnN0IHByb2R1Y3QgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHRyIGNsYXNzTmFtZT17Y2xhc3Nlcy5Qcm9kdWN0fT5cclxuICAgICAgPHRkPlxyXG4gICAgICAgIDxpbWcgc3JjPXtwcm9wcy5wcm9kdWN0LmltYWdlfSAvPlxyXG4gICAgICA8L3RkPlxyXG4gICAgICA8dGQ+e3Byb3BzLnByb2R1Y3QubmFtZX08L3RkPlxyXG4gICAgICA8dGQ+JHtwcm9wcy5wcm9kdWN0LnByaWNlfTwvdGQ+XHJcbiAgICAgIDx0ZD57cHJvcHMucHJvZHVjdC5jb2xvcnMuam9pbihcIiwgXCIpfTwvdGQ+XHJcbiAgICAgIDx0ZD57cHJvcHMucHJvZHVjdC5zaXplcy5qb2luKFwiLCBcIil9PC90ZD5cclxuICAgICAgPHRkPntwcm9wcy5wcm9kdWN0LmNhdGVnb3J5fTwvdGQ+XHJcbiAgICAgIDx0ZD57cHJvcHMucHJvZHVjdC5icmFuZH08L3RkPlxyXG4gICAgICA8dGQ+e3Byb3BzLnByb2R1Y3QucXVhbnRpdHl9PC90ZD5cclxuICAgICAgPHRkIGNsYXNzTmFtZT17Y2xhc3Nlcy5BY3Rpb259PlxyXG4gICAgICAgIDxCdXR0b24gY2xpY2tlZD17cHJvcHMuc2hvd1VwZGF0ZU1vZGFsfT5VcGRhdGU8L0J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5EZWxldGV9PmRlbGV0ZTwvYnV0dG9uPlxyXG4gICAgICA8L3RkPlxyXG4gICAgPC90cj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJvZHVjdDtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiUHJvZHVjdFwiOiBcIlByb2R1Y3RfUHJvZHVjdF9fMlJBelNcIixcblx0XCJBY3Rpb25cIjogXCJQcm9kdWN0X0FjdGlvbl9fMVVPNWNcIixcblx0XCJEZWxldGVcIjogXCJQcm9kdWN0X0RlbGV0ZV9fM0JTbnNcIlxufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vUHJvZHVjdHMubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi8uLi9VSS9CdXR0b24vQnV0dG9uXCI7XHJcbmltcG9ydCBQcm9kdWN0IGZyb20gXCIuL1Byb2R1Y3QvUHJvZHVjdFwiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4uLy4uLy4uL1VJL01vZGFsL01vZGFsXCI7XHJcbmltcG9ydCBQcm9kdWN0Rm9ybSBmcm9tIFwiLi4vUHJvZHVjdEZvcm0vUHJvZHVjdEZvcm1cIjtcclxuaW1wb3J0IG1vZGFsIGZyb20gXCIuLi8uLi8uLi9VSS9Nb2RhbC9Nb2RhbFwiO1xyXG5cclxuLy8gcHJvZHVjdERhdGEubmFtZSxcclxuLy8gcHJvZHVjdERhdGEuZGVzY3JpcHRpb24sXHJcbi8vIE51bWJlci5wYXJzZUZsb2F0KHByb2R1Y3REYXRhLnByaWNlKSxcclxuLy8gW1wicHJvZHVjdERhdGEuaW1hZ2VfdXJsc1wiXSxcclxuLy8gTnVtYmVyLnBhcnNlSW50KHByb2R1Y3REYXRhLnF1YW50aXR5KSxcclxuLy8gcHJvZHVjdERhdGEuY2F0ZWdvcnksXHJcbi8vIHByb2R1Y3REYXRhLmNvbG9ycyxcclxuLy8gcHJvZHVjdERhdGEuc2l6ZXMsXHJcbi8vIHByb2R1Y3REYXRhLmJyYW5kXHJcblxyXG5jb25zdCBwcm9kdWN0TGlzdCA9IFtcclxuICB7XHJcbiAgICBuYW1lOiBcIkFpciBab29tIFBlZ2FzdXMgMzdcIixcclxuICAgIHByaWNlOiAxMjAuMCxcclxuICAgIGltYWdlOiBcIi9pbWFnZXMvYWlyem9vbS5qcGdcIixcclxuICAgIHF1YW50aXR5OiAxMCxcclxuICAgIGNhdGVnb3J5OiBcIk1lblwiLFxyXG4gICAgY29sb3JzOiBbXCJ3aGl0ZVwiLCBcImJsdWVcIiwgXCJyZWRcIl0sXHJcbiAgICBzaXplczogW1wiMzlcIiwgXCI0MFwiLCBcIjQyXCJdLFxyXG4gICAgYnJhbmQ6IFwiQWRkaWRhc1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJMaWJyb24gV2hpdG5lc3NcIixcclxuICAgIGJyYW5kOiBcIk5pa2VcIixcclxuICAgIHByaWNlOiBcIjU3LjMzXCIsXHJcbiAgICBpbWFnZTogXCIvaW1hZ2VzL3J1bm5pbmcuanBnXCIsXHJcbiAgICBxdWFudGl0eTogMTAsXHJcbiAgICBjYXRlZ29yeTogXCJNZW5cIixcclxuICAgIGNvbG9yczogW1wid2hpdGVcIiwgXCJibHVlXCIsIFwicmVkXCJdLFxyXG4gICAgc2l6ZXM6IFtcIjM5XCIsIFwiNDBcIiwgXCI0MlwiXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiRmxleCBFeHBlcmllbmNlIFJ1biA5XCIsXHJcbiAgICBicmFuZDogXCJOaWtlXCIsXHJcbiAgICBwcmljZTogXCI2NS4wMFwiLFxyXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9mbGV4LmpwZ1wiLFxyXG4gICAgcXVhbnRpdHk6IDEwLFxyXG4gICAgY2F0ZWdvcnk6IFwiTWVuXCIsXHJcbiAgICBjb2xvcnM6IFtcIndoaXRlXCIsIFwiYmx1ZVwiLCBcInJlZFwiXSxcclxuICAgIHNpemVzOiBbXCIzOVwiLCBcIjQwXCIsIFwiNDJcIl0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkNsb3VkZmVlbCBLbml0IFNsaXAtT24gU25lYWtlclwiLFxyXG4gICAgYnJhbmQ6IFwiQ29sZSBIYWFuXCIsXHJcbiAgICBwcmljZTogXCIxMDAuMDBcIixcclxuICAgIGltYWdlOiBcIi9pbWFnZXMvY2xvdWRmZWVsLmpwZ1wiLFxyXG4gICAgcXVhbnRpdHk6IDEwLFxyXG4gICAgY2F0ZWdvcnk6IFwiTWVuXCIsXHJcbiAgICBjb2xvcnM6IFtcIndoaXRlXCIsIFwiYmx1ZVwiLCBcInJlZFwiXSxcclxuICAgIHNpemVzOiBbXCIzOVwiLCBcIjQwXCIsIFwiNDJcIl0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlJldm9sdXRpb24gNVwiLFxyXG4gICAgYnJhbmQ6IFwiTmlrZVwiLFxyXG4gICAgcHJpY2U6IFwiNjUuMDBcIixcclxuICAgIGltYWdlOiBcIi9pbWFnZXMvcmV2b2x1dGlvbi5qcGdcIixcclxuICAgIHF1YW50aXR5OiAxMCxcclxuICAgIGNhdGVnb3J5OiBcIk1lblwiLFxyXG4gICAgY29sb3JzOiBbXCJ3aGl0ZVwiLCBcImJsdWVcIiwgXCJyZWRcIl0sXHJcbiAgICBzaXplczogW1wiMzlcIiwgXCI0MFwiLCBcIjQyXCJdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJDbG91ZGZlZWwgS25pdCBTbGlwLU9uIFNuZWFrZXJcIixcclxuICAgIGJyYW5kOiBcIkNvbGUgSGFhblwiLFxyXG4gICAgcHJpY2U6IFwiMTAwLjAwXCIsXHJcbiAgICBpbWFnZTogXCIvaW1hZ2VzL2Nsb3VkZmVlbC5qcGdcIixcclxuICAgIHF1YW50aXR5OiAxMCxcclxuICAgIGNhdGVnb3J5OiBcIk1lblwiLFxyXG4gICAgY29sb3JzOiBbXCJ3aGl0ZVwiLCBcImJsdWVcIiwgXCJyZWRcIl0sXHJcbiAgICBzaXplczogW1wiMzlcIiwgXCI0MFwiLCBcIjQyXCJdLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBwcm9kdWN0cyA9ICgpID0+IHtcclxuICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFttb2RhbENvbnRlbnQsIHNldE1vZGFsQ29udGVudF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgbW9kYWxDbG9zZUhhbmxkZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRTaG93TW9kYWwoIXNob3dNb2RhbCk7XHJcbiAgfTtcclxuICBjb25zdCBzaG93QWRkUHJvZHVjdE1vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0TW9kYWxDb250ZW50KFwiYWRkXCIpO1xyXG4gICAgc2V0U2hvd01vZGFsKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3Qgc2hvd1VwZGF0ZVByb2R1Y3RNb2RhbCA9ICgpID0+IHtcclxuICAgIHNldE1vZGFsQ29udGVudChcInVwZGF0ZVwiKTtcclxuICAgIHNldFNob3dNb2RhbCh0cnVlKTtcclxuICB9O1xyXG5cclxuICBsZXQgbW9kYWwgPSBudWxsO1xyXG4gIHN3aXRjaCAobW9kYWxDb250ZW50KSB7XHJcbiAgICBjYXNlIFwiYWRkXCI6XHJcbiAgICAgIG1vZGFsID0gKFxyXG4gICAgICAgIDxNb2RhbCBzaG93PXtzaG93TW9kYWx9IG1vZGFsQ2xvc2VkPXttb2RhbENsb3NlSGFubGRlcn0+XHJcbiAgICAgICAgICA8UHJvZHVjdEZvcm0gdGl0bGU9XCJBZGQgUHJvZHVjdFwiIC8+XHJcbiAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwidXBkYXRlXCI6XHJcbiAgICAgIG1vZGFsID0gKFxyXG4gICAgICAgIDxNb2RhbCBzaG93PXtzaG93TW9kYWx9IG1vZGFsQ2xvc2VkPXttb2RhbENsb3NlSGFubGRlcn0+XHJcbiAgICAgICAgICA8UHJvZHVjdEZvcm0gdGl0bGU9XCJVcGRhdGUgUHJvZHVjdFwiIC8+XHJcbiAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICBudWxsO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICB7bW9kYWx9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLlByb2R1Y3RzfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5Ub3B9PlxyXG4gICAgICAgICAgPGgxPk1hbmFnZSBQcm9kdWN0czwvaDE+XHJcbiAgICAgICAgICA8QnV0dG9uIGNsaWNrZWQ9e3Nob3dBZGRQcm9kdWN0TW9kYWx9PkFkZCBQcm9kdWN0PC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9e2NsYXNzZXMuVGFibGV9PlxyXG4gICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRoPkltYWdlPC90aD5cclxuICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPlByaWNlPC90aD5cclxuICAgICAgICAgICAgICA8dGg+Q29sb3JzPC90aD5cclxuICAgICAgICAgICAgICA8dGg+U2l6ZXM8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5DYXRlZ29yeTwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPkJyYW5kPC90aD5cclxuICAgICAgICAgICAgICA8dGg+UXVhbnRpdHk8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5BY3Rpb248L3RoPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAge3Byb2R1Y3RMaXN0Lm1hcCgocHJvZHVjdCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8UHJvZHVjdFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdD17cHJvZHVjdH1cclxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICBzaG93VXBkYXRlTW9kYWw9e3Nob3dVcGRhdGVQcm9kdWN0TW9kYWx9XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0SWQ9e2luZGV4fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByb2R1Y3RzO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJQcm9kdWN0c1wiOiBcIlByb2R1Y3RzX1Byb2R1Y3RzX18xaHNiOFwiLFxuXHRcIlRvcFwiOiBcIlByb2R1Y3RzX1RvcF9fMml1eXhcIixcblx0XCJUYWJsZVwiOiBcIlByb2R1Y3RzX1RhYmxlX18zMHQ4UlwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vT3ZlcnZpZXcubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3Qgb3ZlcnZpZXcgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuT3ZlcnZpZXd9PlxyXG4gICAgICA8cD57cHJvcHMucHJvcGVydGllcy50aXRsZX08L3A+XHJcbiAgICAgIDxoMz57cHJvcHMucHJvcGVydGllcy52YWx1ZX08L2gzPlxyXG4gICAgICA8cD57cHJvcHMucHJvcGVydGllcy5jYXB0aW9ufTwvcD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBvdmVydmlldztcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiT3ZlcnZpZXdcIjogXCJPdmVydmlld19PdmVydmlld19fMk1oMk1cIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL092ZXJ2aWV3cy5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBPdmVydmlldyBmcm9tIFwiLi9PdmVydmlldy9PdmVydmlld1wiO1xyXG5pbXBvcnQgb3ZlcnZpZXcgZnJvbSBcIi4vT3ZlcnZpZXcvT3ZlcnZpZXdcIjtcclxuXHJcbmNvbnN0IG92ZXJ2aWV3cyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IG92ZXJ2aWV3cyA9IFtcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiU0FMRVNcIixcclxuICAgICAgdmFsdWU6IFwiJDI2LDIyNFwiLFxyXG4gICAgICBjYXB0aW9uOiBcIlRvdGFsIHNhbGVzIGZvciB0aGlzIG1vbnRoXCIsXHJcbiAgICB9LFxyXG5cclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiVVNFUlNcIixcclxuICAgICAgdmFsdWU6IFwiNjAwIFVzZXJzXCIsXHJcbiAgICAgIGNhcHRpb246IFwiVG90YWwgcmVnaXN0ZXJlZCB1c2Vyc1wiLFxyXG4gICAgfSxcclxuXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIlBST0RVQ1RTXCIsXHJcbiAgICAgIHZhbHVlOiBcIjEyMDAgUHJvZHVjdHNcIixcclxuICAgICAgY2FwdGlvbjogXCJUb3RhbCBwcm9kdWN0cyBhdmFpbGFibGVcIixcclxuICAgIH0sXHJcbiAgXTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuT3ZlcnZpZXdzfT5cclxuICAgICAge292ZXJ2aWV3cy5tYXAoKG92ZXJ2aWV3LCBpbmRleCkgPT4gKFxyXG4gICAgICAgIDxPdmVydmlldyBrZXk9e2luZGV4fSBwcm9wZXJ0aWVzPXtvdmVydmlld30gLz5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgb3ZlcnZpZXdzO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJPdmVydmlld3NcIjogXCJPdmVydmlld3NfT3ZlcnZpZXdzX18ySTlxc1wiXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL0Rhc2hib2FyZC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBUb29sQmFyIGZyb20gXCIuL1Rvb2xCYXIvVG9vbEJhclwiO1xyXG5pbXBvcnQgU2lkZUJhciBmcm9tIFwiLi9TaWRlQmFyL1NpZGVCYXJcIjtcclxuaW1wb3J0IENvbnRlbnRzIGZyb20gXCIuL0NvbnRlbnRzL0NvbnRlbnRzXCI7XHJcblxyXG5jb25zdCBkYXNob2FyZCA9ICgpID0+IHtcclxuICBjb25zdCBbY29udGVudFN0YXRlLCBzZXRDb250ZW50U3RhdGVdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IGNoYW5nZUNvbnRlbnRIYW5sZGVyID0gKHR5cGUpID0+IHtcclxuICAgIHNldENvbnRlbnRTdGF0ZSh0eXBlKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kYXNoYm9hcmR9PlxyXG4gICAgICA8VG9vbEJhciAvPlxyXG4gICAgICA8U2lkZUJhciBjbGlja2VkPXtjaGFuZ2VDb250ZW50SGFubGRlcn0gLz5cclxuICAgICAgPENvbnRlbnRzIHR5cGU9e2NvbnRlbnRTdGF0ZX0gLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkYXNob2FyZDtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZGFzaGJvYXJkXCI6IFwiRGFzaGJvYXJkX2Rhc2hib2FyZF9fTzZiNl9cIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vU2lkZUJhci5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBMb2dvIGZyb20gXCIuLi8uLi9Mb2dvXCI7XHJcbmNvbnN0IGxpbmtzID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiBcIkRhc2hib2FyZFwiLFxyXG4gICAgaWNvbjogXCIvaW1hZ2VzL2hvbWUucG5nXCIsXHJcbiAgICB0eXBlOiBcImRhc2hib2FyZFwiLFxyXG4gIH0sXHJcblxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlByb2R1Y3RcIixcclxuICAgIGljb246IFwiL2ltYWdlcy9wbHVzLnBuZ1wiLFxyXG4gICAgdHlwZTogXCJwcm9kdWN0XCIsXHJcbiAgfSxcclxuXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiQ2Fyb3VzZWxcIixcclxuICAgIC8vIGljb246IFwiL2ltYWdlcy9lZGl0LnBuZ1wiLFxyXG4gICAgdHlwZTogXCJjYXJvdXNlbFwiLFxyXG4gIH0sXHJcblxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlBvcHVsYXIgQ2F0ZWdvcmllc1wiLFxyXG4gICAgaWNvbjogXCIvaW1hZ2VzL2VkaXQucG5nXCIsXHJcbiAgICB0eXBlOiBcInBvcHVsYXJDYXRlZ29yaWVzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJGb290d2VhciBGYXZvcml0ZXNcIixcclxuICAgIGljb246IFwiL2ltYWdlcy9lZGl0LnBuZ1wiLFxyXG4gICAgdHlwZTogXCJmYXZvcml0ZXNcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlRyZW5kaW5nIEJyYW5kc1wiLFxyXG4gICAgaWNvbjogXCIvaW1hZ2VzL2VkaXQucG5nXCIsXHJcbiAgICB0eXBlOiBcInRyZW5kaW5nQnJhbmRzXCIsXHJcbiAgfSxcclxuXTtcclxuY29uc3Qgc2lkZUJhciA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zaWRlQmFyfT5cclxuICAgICAgPG5hdj5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPXtjbGFzc2VzLnNpZGVOYXZ9PlxyXG4gICAgICAgICAge2xpbmtzLm1hcCgobmF2LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gb25DbGljaz17KCkgPT4gcHJvcHMuY2xpY2tlZChuYXYudHlwZSl9PlxyXG4gICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz17bmF2Lmljb259IC8+ICovfVxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+e25hdi50aXRsZX08L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3Bvd2VyLnBuZ1wiIGFsdD1cImljb25cIiAvPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPkxvZ291dDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9uYXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2lkZUJhcjtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic2lkZUJhclwiOiBcIlNpZGVCYXJfc2lkZUJhcl9fMkFWVnhcIixcblx0XCJzaWRlTmF2XCI6IFwiU2lkZUJhcl9zaWRlTmF2X18zQWxwUFwiLFxuXHRcInNpZGVBY3RpdmVcIjogXCJTaWRlQmFyX3NpZGVBY3RpdmVfX25LMGJZXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL1Rvb2xCYXIubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgTG9nbyBmcm9tIFwiLi4vLi4vTG9nb1wiO1xyXG5pbXBvcnQgU3BhY2VyIGZyb20gXCIuLi8uLi9TcGFjZXJcIjtcclxuXHJcbmNvbnN0IHRvb2xCYXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnRvb2xCYXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvV3JhcHBlcn0+XHJcbiAgICAgICAgPExvZ28gY29sb3I9XCJ3aGl0ZVwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8U3BhY2VyIC8+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPXtjbGFzc2VzLk5hdn0+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPkdvdG8gUHVibGljIFBhZ2U8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRvb2xCYXI7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRvb2xCYXJcIjogXCJUb29sQmFyX3Rvb2xCYXJfXzJKamNyXCIsXG5cdFwibG9nb1dyYXBwZXJcIjogXCJUb29sQmFyX2xvZ29XcmFwcGVyX18yR05BUVwiLFxuXHRcIk5hdlwiOiBcIlRvb2xCYXJfTmF2X191bkRVZFwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5jb25zdCBsb2dvID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cclxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICA8YT5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJsb2dvXCI+XHJcbiAgICAgICAgICAgIGF1c3RpbjxzcGFuIGNsYXNzTmFtZT1cInJlZFwiPkV4cDwvc3Bhbj5yZXNzLmNvbVxyXG4gICAgICAgICAgPC9oMj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAubG9nbyBoMiB7XHJcbiAgICAgICAgICBjb2xvcjogIzFiMjIyYjtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gc2Fuc1wiLCBzYW4tc2VyaWY7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmVkIHtcclxuICAgICAgICAgIGNvbG9yOiAjMDY1NGIzO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvZ287XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IHNwYWNlciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZXJcIj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5zcGFjZXIge1xyXG4gICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNwYWNlcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgYmFja2Ryb3AgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJCYWNrZHJvcFwiIG9uQ2xpY2s9e3Byb3BzLmNsaWNrZWR9PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLkJhY2tkcm9wIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEzKTtcclxuICAgICAgICAgIHotaW5kZXg6IDkwO1xyXG4gICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogJHtwcm9wcy5zaG93ID8gXCJibG9ja1wiIDogXCJub25lXCJ9O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJhY2tkcm9wO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9CdXR0b24ubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgYnV0dG9uID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxidXR0b24gb25DbGljaz17cHJvcHMuY2xpY2tlZH0gY2xhc3NOYW1lPXtjbGFzc2VzLkJ1dHRvbn0+XHJcbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvYnV0dG9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBidXR0b247XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIkJ1dHRvblwiOiBcIkJ1dHRvbl9CdXR0b25fX3Q5OVlCXCJcbn07XG4iLCJcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vSW1hZ2VDYXJkcy5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBpbWFnZUNhcmRzID0gKCB7IGltYWdlX3VybHMgfSApID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLlByb2R1Y3RJbWFnZUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGltYWdlX3VybHMubWFwKGltYWdlX3VybCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLlByb2R1Y3RJbWFnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZV91cmx9IGFsdD1cInByb2R1Y3RcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW1hZ2VDYXJkczsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJQcm9kdWN0SW1hZ2VcIjogXCJJbWFnZUNhcmRzX1Byb2R1Y3RJbWFnZV9fM01zSTZcIixcblx0XCJQcm9kdWN0SW1hZ2VDb250YWluZXJcIjogXCJJbWFnZUNhcmRzX1Byb2R1Y3RJbWFnZUNvbnRhaW5lcl9fM3JRQVVcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL0lucHV0Lm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IGlucHV0ID0gKHByb3BzKSA9PiB7XHJcbiAgbGV0IGlucHV0RWxlbWVudCA9IG51bGw7XHJcblxyXG4gIHN3aXRjaCAocHJvcHMuZWxlbWVudFR5cGUpIHtcclxuICAgIGNhc2UgXCJpbnB1dFwiOlxyXG4gICAgICBpbnB1dEVsZW1lbnQgPSAoXHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuSW5wdXRFbGVtZW50fVxyXG4gICAgICAgICAgey4uLnByb3BzLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICB2YWx1ZT17cHJvcHMudmFsdWV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17cHJvcHMuY2hhbmdlZH1cclxuICAgICAgICAvPlxyXG4gICAgICApO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJ0ZXh0YXJlYVwiOlxyXG4gICAgICBpbnB1dEVsZW1lbnQgPSAoXHJcbiAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuSW5wdXRFbGVtZW50fVxyXG4gICAgICAgICAgey4uLnByb3BzLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICB2YWx1ZT17cHJvcHMudmFsdWV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17cHJvcHMuY2hhbmdlZH1cclxuICAgICAgICAvPlxyXG4gICAgICApO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJzZWxlY3RcIjpcclxuICAgICAgaW5wdXRFbGVtZW50ID0gKFxyXG4gICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5JbnB1dEVsZW1lbnR9XHJcbiAgICAgICAgICB7Li4ucHJvcHMuZWxlbWVudENvbmZpZ31cclxuICAgICAgICAgIHZhbHVlPXtwcm9wcy52YWx1ZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5jaGFuZ2VkfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtwcm9wcy5lbGVtZW50Q29uZmlnLm9wdGlvbnMubWFwKChvcHRpb24sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpbmRleH0gdmFsdWU9e29wdGlvbi52YWx1ZX0+XHJcbiAgICAgICAgICAgICAge29wdGlvbi5kaXNwbGF5VmFsdWV9XHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICk7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGlucHV0RWxlbWVudCA9IChcclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5JbnB1dEVsZW1lbnR9XHJcbiAgICAgICAgICB7Li4ucHJvcHMuZWxlbWVudENvbmZpZ31cclxuICAgICAgICAgIHZhbHVlPXtwcm9wcy52YWx1ZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5jaGFuZ2VkfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5JbnB1dH0+XHJcbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2NsYXNzZXMuTGFiZWx9Pntwcm9wcy5sYWJlbH08L2xhYmVsPlxyXG4gICAgICB7aW5wdXRFbGVtZW50fVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGlucHV0O1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJJbnB1dFwiOiBcIklucHV0X0lucHV0X19pWnJnUFwiLFxuXHRcIkxhYmVsXCI6IFwiSW5wdXRfTGFiZWxfXzJVZWVVXCIsXG5cdFwiSW5wdXRFbGVtZW50XCI6IFwiSW5wdXRfSW5wdXRFbGVtZW50X19OOWppTlwiXG59O1xuIiwiaW1wb3J0IGlucHV0IGZyb20gXCIuL0lucHV0XCJcclxuXHJcbmNvbnN0IGlucHV0SW1hZ2UgPSAoIHsgY2hhbmdlIH0gKSA9PiA8aW5wdXQgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17Y2hhbmdlfSBtdWx0aXBsZS8+O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5wdXRJbWFnZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9Nb2RhbC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBCYWNrZHJvcCBmcm9tIFwiLi4vQmFja2Ryb3BcIjtcclxuXHJcbmNvbnN0IG1vZGFsID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPEJhY2tkcm9wIHNob3c9e3Byb3BzLnNob3d9IGNsaWNrZWQ9e3Byb3BzLm1vZGFsQ2xvc2VkfSAvPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLk1vZGFsfVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHByb3BzLnNob3cgPyBcInRyYW5zbGF0ZVkoMClcIiA6IFwidHJhbnNsYXRlWSgtMTAwdmgpXCIsXHJcbiAgICAgICAgICBvcGFjaXR5OiBwcm9wcy5zaG93ID8gXCIxXCIgOiBcIjBcIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1vZGFsO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJNb2RhbFwiOiBcIk1vZGFsX01vZGFsX18zUHlNdlwiXG59O1xuIiwiXHJcbmltcG9ydCByZXF1ZXN0IGZyb20gXCIuLi9yZXF1ZXN0c1wiO1xyXG5pbXBvcnQgeyBhZGRQcm9kdWN0UXVlcnkgfSBmcm9tIFwiLi4vcXVlcmllcy9wcm9kdWN0c1wiO1xyXG5cclxuY2xhc3MgUHJvZHVjdCB7XHJcbiAgICBjb25zdHJ1Y3RvciAoXHJcbiAgICAgICAgcHJvZHVjdF9uYW1lLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICAgIHByaWNlLFxyXG4gICAgICAgIGltYWdlX3VybHMsXHJcbiAgICAgICAgcXVhbnRpdHksXHJcbiAgICAgICAgY2F0ZWdvcnksXHJcbiAgICAgICAgY29sb3JzLFxyXG4gICAgICAgIHNpemVzLFxyXG4gICAgICAgIGJyYW5kPVwiXCJcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMucHJvZHVjdF9uYW1lID0gcHJvZHVjdF9uYW1lO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLnByaWNlID0gcHJpY2U7XHJcbiAgICAgICAgdGhpcy5pbWFnZV91cmxzID0gaW1hZ2VfdXJscztcclxuICAgICAgICB0aGlzLnF1YW50aXR5ID0gcXVhbnRpdHk7XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yeSA9IGNhdGVnb3J5O1xyXG4gICAgICAgIHRoaXMuY29sb3JzID0gY29sb3JzO1xyXG4gICAgICAgIHRoaXMuc2l6ZXMgPSBzaXplcztcclxuICAgICAgICB0aGlzLmJyYW5kID0gYnJhbmQ7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgc2VuZFNhdmVSZXF1ZXN0ICgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCByZXF1ZXN0KGFkZFByb2R1Y3RRdWVyeShcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdF9uYW1lLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgIHRoaXMucHJpY2UsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlX3VybHMsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnF1YW50aXR5LFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXRlZ29yeSxcclxuICAgICAgICAgICAgICAgIHRoaXMuY29sb3JzLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaXplcyxcclxuICAgICAgICAgICAgICAgIHRoaXMuYnJhbmRcclxuICAgICAgICAgICAgKSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFkZCBwcm9kdWN0IHJlc1wiLCByZXMpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNvbWV0aGluZyB3ZW50IHdyb25nXCIsIGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHNlbmRGaW5kUmVxdWVzdCAoKSB7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0OyIsIlxyXG5leHBvcnQgY29uc3QgYWRkUHJvZHVjdFF1ZXJ5ID0gKFxyXG4gICAgcHJvZHVjdF9uYW1lLFxyXG4gICAgZGVzY3JpcHRpb24sXHJcbiAgICBwcmljZSxcclxuICAgIGltYWdlX3VybHMsXHJcbiAgICBxdWFudGl0eSxcclxuICAgIGNhdGVnb3J5LFxyXG4gICAgY29sb3JzLFxyXG4gICAgc2l6ZXMsXHJcbiAgICBicmFuZFxyXG4pID0+IHtcclxuICAgIHJldHVybiB7IFxyXG4gICAgICAgIHF1ZXJ5OiBgXHJcbiAgICAgICAgICAgIG11dGF0aW9uIENyZWF0ZVByb2R1Y3QoXHJcbiAgICAgICAgICAgICAgICAkcHJvZHVjdF9uYW1lOiBTdHJpbmchLFxyXG4gICAgICAgICAgICAgICAgJGRlc2NyaXB0aW9uOiBTdHJpbmchLFxyXG4gICAgICAgICAgICAgICAgJHByaWNlOiBGbG9hdCEsXHJcbiAgICAgICAgICAgICAgICAkaW1hZ2VfdXJsczogW1N0cmluZyFdISxcclxuICAgICAgICAgICAgICAgICRxdWFudGl0eTogSW50ISxcclxuICAgICAgICAgICAgICAgICRjYXRlZ29yeTogU3RyaW5nISxcclxuICAgICAgICAgICAgICAgICRjb2xvcnM6IFtTdHJpbmchXSxcclxuICAgICAgICAgICAgICAgICRzaXplczogW0Zsb2F0IV0sXHJcbiAgICAgICAgICAgICAgICAkYnJhbmQ6IFN0cmluZ1xyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZVByb2R1Y3QoZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfbmFtZTogJHByb2R1Y3RfbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJGRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlOiAkcHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VfdXJsczogJGltYWdlX3VybHMsXHJcbiAgICAgICAgICAgICAgICAgICAgcXVhbnRpdHk6ICRxdWFudGl0eSxcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogJGNhdGVnb3J5LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yczogJGNvbG9ycyxcclxuICAgICAgICAgICAgICAgICAgICBzaXplczogJHNpemVzLFxyXG4gICAgICAgICAgICAgICAgICAgIGJyYW5kOiAkYnJhbmRcclxuICAgICAgICAgICAgICAgIH0pIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0SWRcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X25hbWVcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgYCxcclxuICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgICAgcHJvZHVjdF9uYW1lLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgcHJpY2UsXHJcbiAgICAgICAgICAgIGltYWdlX3VybHMsXHJcbiAgICAgICAgICAgIHF1YW50aXR5LFxyXG4gICAgICAgICAgICBjYXRlZ29yeSxcclxuICAgICAgICAgICAgY29sb3JzLFxyXG4gICAgICAgICAgICBzaXplcyxcclxuICAgICAgICAgICAgYnJhbmRcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVQcm9kdWN0UXVlcnkgPSBgXHJcblxyXG5gIiwiXHJcbmltcG9ydCBmZXRjaCBmcm9tIFwibm9kZS1mZXRjaFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJBU0VfVVJMPVwiaHR0cDovL2xvY2FsaG9zdDoyMDIwXCI7XHJcbmV4cG9ydCBjb25zdCBHUkFQSFFMVVJMID0gYCR7QkFTRV9VUkx9L2dyYXBocWxgO1xyXG5cclxuY29uc3QgcmVxdWVzdCA9IGFzeW5jIChncmFwaHFsUXVlcnkpID0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goR1JBUEhRTFVSTCwgXHJcbiAgICB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSggZ3JhcGhxbFF1ZXJ5IClcclxuICAgIH0pXHJcbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVxdWVzdDsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJkZWNsYXJlIGNvbnN0IF9fTkVYVF9EQVRBX186IGFueVxuXG5pbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcGFyc2UsIHJlc29sdmUsIFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFByZWZldGNoT3B0aW9ucyB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHtcbiAgZXhlY09uY2UsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IFJvdXRlciBmcm9tICcuL3JvdXRlcidcbmltcG9ydCB7IGFkZEJhc2VQYXRoIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5cbmZ1bmN0aW9uIGlzTG9jYWwoaHJlZjogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGNvbnN0IHVybCA9IHBhcnNlKGhyZWYsIGZhbHNlLCB0cnVlKVxuICBjb25zdCBvcmlnaW4gPSBwYXJzZShnZXRMb2NhdGlvbk9yaWdpbigpLCBmYWxzZSwgdHJ1ZSlcblxuICByZXR1cm4gKFxuICAgICF1cmwuaG9zdCB8fCAodXJsLnByb3RvY29sID09PSBvcmlnaW4ucHJvdG9jb2wgJiYgdXJsLmhvc3QgPT09IG9yaWdpbi5ob3N0KVxuICApXG59XG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIEZvcm1hdFJlc3VsdCA9IHsgaHJlZjogc3RyaW5nOyBhcz86IHN0cmluZyB9XG5cbmZ1bmN0aW9uIG1lbW9pemVkRm9ybWF0VXJsKGZvcm1hdEZ1bmM6IChocmVmOiBVcmwsIGFzPzogVXJsKSA9PiBGb3JtYXRSZXN1bHQpIHtcbiAgbGV0IGxhc3RIcmVmOiBudWxsIHwgVXJsID0gbnVsbFxuICBsZXQgbGFzdEFzOiB1bmRlZmluZWQgfCBudWxsIHwgVXJsID0gbnVsbFxuICBsZXQgbGFzdFJlc3VsdDogbnVsbCB8IEZvcm1hdFJlc3VsdCA9IG51bGxcbiAgcmV0dXJuIChocmVmOiBVcmwsIGFzPzogVXJsKSA9PiB7XG4gICAgaWYgKGxhc3RSZXN1bHQgJiYgaHJlZiA9PT0gbGFzdEhyZWYgJiYgYXMgPT09IGxhc3RBcykge1xuICAgICAgcmV0dXJuIGxhc3RSZXN1bHRcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBmb3JtYXRGdW5jKGhyZWYsIGFzKVxuICAgIGxhc3RIcmVmID0gaHJlZlxuICAgIGxhc3RBcyA9IGFzXG4gICAgbGFzdFJlc3VsdCA9IHJlc3VsdFxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5mdW5jdGlvbiBmb3JtYXRVcmwodXJsOiBVcmwpOiBzdHJpbmcge1xuICByZXR1cm4gdXJsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnID8gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsKSA6IHVybFxufVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbn1cblxubGV0IG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKG9ic2VydmVyKSB7XG4gICAgcmV0dXJuIG9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAob2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuY2xhc3MgTGluayBleHRlbmRzIENvbXBvbmVudDxMaW5rUHJvcHM+IHtcbiAgcDogYm9vbGVhblxuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBMaW5rUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHByb3BzLnByZWZldGNoKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG4gIH1cblxuICBjbGVhblVwTGlzdGVuZXJzID0gKCkgPT4ge31cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKVxuICB9XG5cbiAgZ2V0UGF0aHMoKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHdpbmRvdy5sb2NhdGlvblxuICAgIGNvbnN0IHsgaHJlZjogcGFyc2VkSHJlZiwgYXM6IHBhcnNlZEFzIH0gPSB0aGlzLmZvcm1hdFVybHMoXG4gICAgICB0aGlzLnByb3BzLmhyZWYsXG4gICAgICB0aGlzLnByb3BzLmFzXG4gICAgKVxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmUocGF0aG5hbWUsIHBhcnNlZEhyZWYpXG4gICAgcmV0dXJuIFtyZXNvbHZlZEhyZWYsIHBhcnNlZEFzID8gcmVzb2x2ZShwYXRobmFtZSwgcGFyc2VkQXMpIDogcmVzb2x2ZWRIcmVmXVxuICB9XG5cbiAgaGFuZGxlUmVmKHJlZjogRWxlbWVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnAgJiYgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiYgcmVmICYmIHJlZi50YWdOYW1lKSB7XG4gICAgICB0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKVxuXG4gICAgICBjb25zdCBpc1ByZWZldGNoZWQgPVxuICAgICAgICBwcmVmZXRjaGVkW1xuICAgICAgICAgIHRoaXMuZ2V0UGF0aHMoKS5qb2luKFxuICAgICAgICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgICAgICAgICclJ1xuICAgICAgICAgIClcbiAgICAgICAgXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgdGhpcy5jbGVhblVwTGlzdGVuZXJzID0gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKHJlZiwgKCkgPT4ge1xuICAgICAgICAgIHRoaXMucHJlZmV0Y2goKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFRoZSBmdW5jdGlvbiBpcyBtZW1vaXplZCBzbyB0aGF0IG5vIGV4dHJhIGxpZmVjeWNsZXMgYXJlIG5lZWRlZFxuICAvLyBhcyBwZXIgaHR0cHM6Ly9yZWFjdGpzLm9yZy9ibG9nLzIwMTgvMDYvMDcveW91LXByb2JhYmx5LWRvbnQtbmVlZC1kZXJpdmVkLXN0YXRlLmh0bWxcbiAgZm9ybWF0VXJscyA9IG1lbW9pemVkRm9ybWF0VXJsKChocmVmLCBhc0hyZWYpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogYWRkQmFzZVBhdGgoZm9ybWF0VXJsKGhyZWYpKSxcbiAgICAgIGFzOiBhc0hyZWYgPyBhZGRCYXNlUGF0aChmb3JtYXRVcmwoYXNIcmVmKSkgOiBhc0hyZWYsXG4gICAgfVxuICB9KVxuXG4gIGxpbmtDbGlja2VkID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCB7IG5vZGVOYW1lLCB0YXJnZXQgfSA9IGUuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICAgIGlmIChcbiAgICAgIG5vZGVOYW1lID09PSAnQScgJiZcbiAgICAgICgodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICAgICAgZS5tZXRhS2V5IHx8XG4gICAgICAgIGUuY3RybEtleSB8fFxuICAgICAgICBlLnNoaWZ0S2V5IHx8XG4gICAgICAgIChlLm5hdGl2ZUV2ZW50ICYmIGUubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpKVxuICAgICkge1xuICAgICAgLy8gaWdub3JlIGNsaWNrIGZvciBuZXcgdGFiIC8gbmV3IHdpbmRvdyBiZWhhdmlvclxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IHsgaHJlZiwgYXMgfSA9IHRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsIHRoaXMucHJvcHMuYXMpXG5cbiAgICBpZiAoIWlzTG9jYWwoaHJlZikpIHtcbiAgICAgIC8vIGlnbm9yZSBjbGljayBpZiBpdCdzIG91dHNpZGUgb3VyIHNjb3BlIChlLmcuIGh0dHBzOi8vZ29vZ2xlLmNvbSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHdpbmRvdy5sb2NhdGlvblxuICAgIGhyZWYgPSByZXNvbHZlKHBhdGhuYW1lLCBocmVmKVxuICAgIGFzID0gYXMgPyByZXNvbHZlKHBhdGhuYW1lLCBhcykgOiBocmVmXG5cbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICAgIGxldCB7IHNjcm9sbCB9ID0gdGhpcy5wcm9wc1xuICAgIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICAgIH1cblxuICAgIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICAgIFJvdXRlclt0aGlzLnByb3BzLnJlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7XG4gICAgICBzaGFsbG93OiB0aGlzLnByb3BzLnNoYWxsb3csXG4gICAgfSkudGhlbigoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBwcmVmZXRjaChvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnAgfHwgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICAgIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgICBjb25zdCBwYXRocyA9IHRoaXMuZ2V0UGF0aHMoKVxuICAgIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgICBSb3V0ZXIucHJlZmV0Y2gocGF0aHNbLyogaHJlZiAqLyAwXSwgcGF0aHNbLyogYXNQYXRoICovIDFdLCBvcHRpb25zKS5jYXRjaChcbiAgICAgIChlcnIpID0+IHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICAgICAgdGhyb3cgZXJyXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApXG4gICAgcHJlZmV0Y2hlZFtcbiAgICAgIHBhdGhzLmpvaW4oXG4gICAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICAgICclJ1xuICAgICAgKVxuICAgIF0gPSB0cnVlXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGhyZWYsIGFzIH0gPSB0aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLCB0aGlzLnByb3BzLmFzKVxuICAgIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gICAgfVxuXG4gICAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gICAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gICAgY29uc3QgcHJvcHM6IHtcbiAgICAgIG9uTW91c2VFbnRlcjogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgICBocmVmPzogc3RyaW5nXG4gICAgICByZWY/OiBhbnlcbiAgICB9ID0ge1xuICAgICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLmhhbmRsZVJlZihlbClcblxuICAgICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGQucmVmKGVsKVxuICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25Nb3VzZUVudGVyOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJlZmV0Y2goeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgICAgfSxcbiAgICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgIHRoaXMubGlua0NsaWNrZWQoZSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9XG5cbiAgICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgICBpZiAoXG4gICAgICB0aGlzLnByb3BzLnBhc3NIcmVmIHx8XG4gICAgICAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSlcbiAgICApIHtcbiAgICAgIHByb3BzLmhyZWYgPSBhcyB8fCBocmVmXG4gICAgfVxuXG4gICAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAgIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseS5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgIGlmIChcbiAgICAgICAgcHJvcHMuaHJlZiAmJlxuICAgICAgICB0eXBlb2YgX19ORVhUX0RBVEFfXyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0XG4gICAgICApIHtcbiAgICAgICAgcHJvcHMuaHJlZiA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHByb3BzLmhyZWYpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgcHJvcHMpXG4gIH1cbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gIGNvbnN0IHdhcm4gPSBleGVjT25jZShjb25zb2xlLmVycm9yKVxuXG4gIC8vIFRoaXMgbW9kdWxlIGdldHMgcmVtb3ZlZCBieSB3ZWJwYWNrLklnbm9yZVBsdWdpblxuICBjb25zdCBQcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJylcbiAgY29uc3QgZXhhY3QgPSByZXF1aXJlKCdwcm9wLXR5cGVzLWV4YWN0JylcbiAgLy8gQHRzLWlnbm9yZSB0aGUgcHJvcGVydHkgaXMgc3VwcG9ydGVkLCB3aGVuIGRlY2xhcmluZyBpdCBvbiB0aGUgY2xhc3MgaXQgb3V0cHV0cyBhbiBleHRyYSBiaXQgb2YgY29kZSB3aGljaCBpcyBub3QgbmVlZGVkLlxuICBMaW5rLnByb3BUeXBlcyA9IGV4YWN0KHtcbiAgICBocmVmOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSkuaXNSZXF1aXJlZCxcbiAgICBhczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLFxuICAgIHByZWZldGNoOiBQcm9wVHlwZXMuYm9vbCxcbiAgICByZXBsYWNlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaGFsbG93OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBwYXNzSHJlZjogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2Nyb2xsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICAgIChwcm9wczogYW55LCBwcm9wTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcHJvcHNbcHJvcE5hbWVdXG5cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB3YXJuKFxuICAgICAgICAgICAgYFdhcm5pbmc6IFlvdSdyZSB1c2luZyBhIHN0cmluZyBkaXJlY3RseSBpbnNpZGUgPExpbms+LiBUaGlzIHVzYWdlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFBsZWFzZSBhZGQgYW4gPGE+IHRhZyBhcyBjaGlsZCBvZiA8TGluaz5gXG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH0sXG4gICAgXSkuaXNSZXF1aXJlZCxcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oe30sIF9yb3V0ZXJbcHJvcGVydHldKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcGFyc2UsIFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgIT09IDAgPyBiYXNlUGF0aCArIHBhdGggOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSA9PT0gMFxuICAgID8gcGF0aC5zdWJzdHIoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbiAgICA6IHBhdGhcbn1cblxuZnVuY3Rpb24gdG9Sb3V0ZShwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJ1xufVxuXG5jb25zdCBwcmVwYXJlUm91dGUgPSAocGF0aDogc3RyaW5nKSA9PlxuICB0b1JvdXRlKCFwYXRoIHx8IHBhdGggPT09ICcvJyA/ICcvaW5kZXgnIDogcGF0aClcblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxudHlwZSBDb21wb25lbnRSZXMgPSB7IHBhZ2U6IENvbXBvbmVudFR5cGU7IG1vZDogYW55IH1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbnR5cGUgUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBhbnlcbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUm91dGVJbmZvLCBBcHA/OiBDb21wb25lbnRUeXBlKSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogYW55KSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKFxuICBwYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnkgfCBudWxsLFxuICBpc1NlcnZlclJlbmRlcjogYm9vbGVhbixcbiAgY2I/OiAoLi4uYXJnczogYW55KSA9PiBhbnlcbikge1xuICBsZXQgYXR0ZW1wdHMgPSBpc1NlcnZlclJlbmRlciA/IDMgOiAxXG4gIGZ1bmN0aW9uIGdldFJlc3BvbnNlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIGZldGNoKFxuICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgoXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZSBfX05FWFRfREFUQV9fXG4gICAgICAgICAgYC9fbmV4dC9kYXRhLyR7X19ORVhUX0RBVEFfXy5idWlsZElkfSR7ZGVsQmFzZVBhdGgocGF0aG5hbWUpfS5qc29uYFxuICAgICAgICApLFxuICAgICAgICBxdWVyeSxcbiAgICAgIH0pLFxuICAgICAge1xuICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAgICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAgICAgLy8gPiBvcHRpb24uXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgIH1cbiAgICApLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgaWYgKC0tYXR0ZW1wdHMgPiAwICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgICAgcmV0dXJuIGdldFJlc3BvbnNlKClcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZ2V0UmVzcG9uc2UoKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICByZXR1cm4gY2IgPyBjYihkYXRhKSA6IGRhdGFcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgICAgLy8gbG9vcC5cbiAgICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgICAgOyhlcnIgYXMgYW55KS5jb2RlID0gJ1BBR0VfTE9BRF9FUlJPUidcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBDb21wb25lbnRUeXBlKSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgQXBwOiBDb21wb25lbnRUeXBlXG4gICAgICB3cmFwQXBwOiAoQXBwOiBDb21wb25lbnRUeXBlKSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7IENvbXBvbmVudDogQXBwIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGFzXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuICAgIH1cbiAgfVxuXG4gIC8vIEBkZXByZWNhdGVkIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IGV2ZW4gdGhvdWdoIGl0J3MgYSBwcml2YXRlIG1ldGhvZC5cbiAgc3RhdGljIF9yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICByZXR1cm4gcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdXJsXG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgaWYgKCFlLnN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmIChcbiAgICAgIGUuc3RhdGUgJiZcbiAgICAgIHRoaXMuaXNTc3IgJiZcbiAgICAgIGUuc3RhdGUuYXMgPT09IHRoaXMuYXNQYXRoICYmXG4gICAgICBwYXJzZShlLnN0YXRlLnVybCkucGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWVcbiAgICApIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhlLnN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBlLnN0YXRlXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2YgdXJsID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgYXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnYHBvcHN0YXRlYCBldmVudCB0cmlnZ2VyZWQgYnV0IGBldmVudC5zdGF0ZWAgZGlkIG5vdCBoYXZlIGB1cmxgIG9yIGBhc2AgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcG9wc3RhdGUtc3RhdGUtZW1wdHknXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5yZXBsYWNlKHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICB1cGRhdGUocm91dGU6IHN0cmluZywgbW9kOiBhbnkpIHtcbiAgICBjb25zdCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUgPSBtb2QuZGVmYXVsdCB8fCBtb2RcbiAgICBjb25zdCBkYXRhID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuICAgIGlmICghZGF0YSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgdXBkYXRlIHVuYXZhaWxhYmxlIHJvdXRlOiAke3JvdXRlfWApXG4gICAgfVxuXG4gICAgY29uc3QgbmV3RGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIF9fTl9TU0c6IG1vZC5fX05fU1NHLFxuICAgICAgX19OX1NTUDogbW9kLl9fTl9TU1AsXG4gICAgfSlcbiAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gbmV3RGF0YVxuXG4gICAgLy8gcGFnZXMvX2FwcC5qcyB1cGRhdGVkXG4gICAgaWYgKHJvdXRlID09PSAnL19hcHAnKSB7XG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAocm91dGUgPT09IHRoaXMucm91dGUpIHtcbiAgICAgIHRoaXMubm90aWZ5KG5ld0RhdGEpXG4gICAgfVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIF91cmw6IFVybCxcbiAgICBfYXM6IFVybCxcbiAgICBvcHRpb25zOiBhbnlcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghb3B0aW9ucy5faCkge1xuICAgICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICAgIH1cbiAgICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICAgIGlmIChTVCkge1xuICAgICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgICB9XG5cbiAgICAgIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAgICAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgICAgIGxldCB1cmwgPSB0eXBlb2YgX3VybCA9PT0gJ29iamVjdCcgPyBmb3JtYXRXaXRoVmFsaWRhdGlvbihfdXJsKSA6IF91cmxcbiAgICAgIGxldCBhcyA9IHR5cGVvZiBfYXMgPT09ICdvYmplY3QnID8gZm9ybWF0V2l0aFZhbGlkYXRpb24oX2FzKSA6IF9hc1xuXG4gICAgICB1cmwgPSBhZGRCYXNlUGF0aCh1cmwpXG4gICAgICBhcyA9IGFkZEJhc2VQYXRoKGFzKVxuXG4gICAgICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gICAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkgZm9yIHRoZSBTU1IgcGFnZS5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgICBpZiAoX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0KSB7XG4gICAgICAgICAgYXMgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChhcylcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZChhcylcblxuICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoYXMpKSB7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGFzKVxuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKVxuICAgICAgfVxuXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSwgcHJvdG9jb2wgfSA9IHBhcnNlKHVybCwgdHJ1ZSlcblxuICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKVxuICAgICAgfVxuXG4gICAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgICAgaWYgKCF0aGlzLnVybElzTmV3KGFzKSkge1xuICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpXG4gICAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IGFzUGF0aG5hbWUgfSA9IHBhcnNlKGFzKVxuICAgICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICAgIClcblxuICAgICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGAgZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJlamVjdChcbiAgICAgICAgICAgICAgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgIGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGAgK1xuICAgICAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW5jb21wYXRpYmxlLWhyZWYtYXNgXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgICAvLyBJZiBzaGFsbG93IGlzIHRydWUgYW5kIHRoZSByb3V0ZSBleGlzdHMgaW4gdGhlIHJvdXRlciBjYWNoZSB3ZSByZXVzZSB0aGUgcHJldmlvdXMgcmVzdWx0XG4gICAgICB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgc2hhbGxvdykudGhlbihcbiAgICAgICAgKHJvdXRlSW5mbykgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZUluZm8pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBhcylcbiAgICAgICAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIHJlamVjdFxuICAgICAgKVxuICAgIH0pXG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgfSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFJvdXRlSW5mbz4ge1xuICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgIC8vIElmIHRoZXJlIGlzIGEgc2hhbGxvdyByb3V0ZSB0cmFuc2l0aW9uIHBvc3NpYmxlXG4gICAgLy8gSWYgdGhlIHJvdXRlIGlzIGFscmVhZHkgcmVuZGVyZWQgb24gdGhlIHNjcmVlbi5cbiAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY2FjaGVkUm91dGVJbmZvKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUVycm9yID0gKFxuICAgICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICAgKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgaWYgKGVyci5jb2RlID09PSAnUEFHRV9MT0FEX0VSUk9SJyB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgICAgICAvLyBTbywgd2UgbmVlZCB0byBtYXJrIGl0IGFzIGEgY2FuY2VsbGVkIGVycm9yIGFuZCBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmVzb2x2ZShcbiAgICAgICAgICB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJylcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQgfSA9IHJlc1xuICAgICAgICAgICAgICBjb25zdCByb3V0ZUluZm86IFJvdXRlSW5mbyA9IHsgQ29tcG9uZW50LCBlcnIgfVxuICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgfSBhcyBhbnkpLnRoZW4oXG4gICAgICAgICAgICAgICAgICAocHJvcHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIChnaXBFcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAnRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJyxcbiAgICAgICAgICAgICAgICAgICAgICBnaXBFcnJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KSBhcyBQcm9taXNlPFJvdXRlSW5mbz5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gaGFuZGxlRXJyb3IoZXJyLCB0cnVlKSlcbiAgICAgICAgKVxuICAgICAgfSkgYXMgUHJvbWlzZTxSb3V0ZUluZm8+XG4gICAgfVxuXG4gICAgcmV0dXJuIChuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoY2FjaGVkUm91dGVJbmZvKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlKGNhY2hlZFJvdXRlSW5mbylcbiAgICAgIH1cblxuICAgICAgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihcbiAgICAgICAgKHJlcykgPT5cbiAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSksXG4gICAgICAgIHJlamVjdFxuICAgICAgKVxuICAgIH0pIGFzIFByb21pc2U8Um91dGVJbmZvPilcbiAgICAgIC50aGVuKChyb3V0ZUluZm86IFJvdXRlSW5mbykgPT4ge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXREYXRhPFJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgICBfX05fU1NHXG4gICAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoYXMpXG4gICAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShhcylcbiAgICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgICAgKVxuICAgICAgICApLnRoZW4oKHByb3BzKSA9PiB7XG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChoYW5kbGVFcnJvcilcbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBwcm90b2NvbCB9ID0gcGFyc2UodXJsKVxuXG4gICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgY29uc3Qgcm91dGUgPSBkZWxCYXNlUGF0aCh0b1JvdXRlKHBhdGhuYW1lKSlcbiAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YSh1cmwsIGRlbEJhc2VQYXRoKGFzUGF0aCkpLFxuICAgICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgICBdKS50aGVuKCgpID0+IHJlc29sdmUoKSwgcmVqZWN0KVxuICAgIH0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxDb21wb25lbnRSZXM+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcbiAgICByb3V0ZSA9IGRlbEJhc2VQYXRoKHJvdXRlKVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhID0gKGFzUGF0aDogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+ID0+IHtcbiAgICBjb25zdCBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZShwYXJzZShhc1BhdGgpLnBhdGhuYW1lISlcblxuICAgIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW3BhdGhuYW1lXVxuICAgICAgPyBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbcGF0aG5hbWVdKVxuICAgICAgOiBmZXRjaE5leHREYXRhKFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICAgdGhpcy5pc1NzcixcbiAgICAgICAgICAoZGF0YSkgPT4gKHRoaXMuc2RjW3BhdGhuYW1lXSA9IGRhdGEpXG4gICAgICAgIClcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhID0gKGFzUGF0aDogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+ID0+IHtcbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlKGFzUGF0aCwgdHJ1ZSlcbiAgICBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZShwYXRobmFtZSEpXG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEocGF0aG5hbWUsIHF1ZXJ5LCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBjb25zdCBlID0gbmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKVxuICAgICAgOyhlIGFzIGFueSkuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCIvLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiB7IHBvczogbnVtYmVyOyByZXBlYXQ6IGJvb2xlYW4gfSB9XG59IHtcbiAgLy8gRXNjYXBlIGFsbCBjaGFyYWN0ZXJzIHRoYXQgY291bGQgYmUgY29uc2lkZXJlZCBSZWdFeFxuICBjb25zdCBlc2NhcGVkUm91dGUgPSBlc2NhcGVSZWdleChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IHsgcG9zOiBudW1iZXI7IHJlcGVhdDogYm9vbGVhbiB9IH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcblxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZShcbiAgICAvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLFxuICAgIChfLCAkMSkgPT4ge1xuICAgICAgY29uc3QgaXNPcHRpb25hbCA9IC9eXFxcXFxcWy4qXFxcXFxcXSQvLnRlc3QoJDEpXG4gICAgICBpZiAoaXNPcHRpb25hbCkge1xuICAgICAgICAkMSA9ICQxLnNsaWNlKDIsIC0yKVxuICAgICAgfVxuICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKVxuICAgICAgaWYgKGlzQ2F0Y2hBbGwpIHtcbiAgICAgICAgJDEgPSAkMS5zbGljZSg2KVxuICAgICAgfVxuICAgICAgZ3JvdXBzW1xuICAgICAgICAkMVxuICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICBdID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0OiBpc0NhdGNoQWxsIH1cbiAgICAgIHJldHVybiBpc0NhdGNoQWxsID8gKGlzT3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICB9XG4gIClcblxuICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGU6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IGVzY2FwZWRSb3V0ZS5yZXBsYWNlKFxuICAgICAgL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZyxcbiAgICAgIChfLCAkMSkgPT4ge1xuICAgICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpXG4gICAgICAgIGNvbnN0IGtleSA9ICQxXG4gICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgIC5yZXBsYWNlKC9cXFxcKFt8XFxcXHt9KClbXFxdXiQrKj8uLV0pL2csICckMScpXG4gICAgICAgICAgLnJlcGxhY2UoL15cXC57M30vLCAnJylcblxuICAgICAgICByZXR1cm4gaXNDYXRjaEFsbFxuICAgICAgICAgID8gYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9Pi4rPylgXG4gICAgICAgICAgOiBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+W14vXSs/KWBcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKCdeJyArIHBhcmFtZXRlcml6ZWRSb3V0ZSArICcoPzovKT8kJywgJ2knKSxcbiAgICBncm91cHMsXG4gICAgbmFtZWRSZWdleDogbmFtZWRQYXJhbWV0ZXJpemVkUm91dGVcbiAgICAgID8gYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgXG4gICAgICA6IHVuZGVmaW5lZCxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZm9ybWF0LCBVUkxGb3JtYXRPcHRpb25zLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJy4uLy4uL2xpYi9sb2FkLWVudi1jb25maWcnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IGFueVxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIGludGVyZmFjZS1uYW1lXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIHN0YXRpY01hcmt1cDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGRldkZpbGVzOiBzdHJpbmdbXVxuICBmaWxlczogc3RyaW5nW11cbiAgbG93UHJpb3JpdHlGaWxlczogc3RyaW5nW11cbiAgcG9seWZpbGxGaWxlczogc3RyaW5nW11cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBodG1sUHJvcHM6IGFueVxuICBib2R5VGFnczogYW55W11cbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gIHVybDogVXJsT2JqZWN0LFxuICBvcHRpb25zPzogVVJMRm9ybWF0T3B0aW9uc1xuKTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdCh1cmwgYXMgVVJMLCBvcHRpb25zKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0Rhc2hib2FyZC9EYXNoYm9hcmRcIjtcclxuXHJcbmNvbnN0IGluZGV4UGFnZSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8RGFzaGJvYXJkIC8+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleFBhZ2U7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vZGUtZmV0Y2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzLWV4YWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc3R5bGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=
>>>>>>> cbc0cfcab8f285809a94661d9a9d8c5a63e3f4f0
