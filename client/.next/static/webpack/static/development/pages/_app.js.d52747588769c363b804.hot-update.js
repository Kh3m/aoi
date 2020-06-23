webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./container/SignIn.js":
/*!*****************************!*\
  !*** ./container/SignIn.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SwitchEntry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SwitchEntry */ "./container/SwitchEntry.js");
/* harmony import */ var _components_UI_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/UI/Input */ "./components/UI/Input.js");
/* harmony import */ var _components_UI_EntryButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/UI/EntryButton */ "./components/UI/EntryButton.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actionTypes */ "./container/actionTypes.js");
/* harmony import */ var _hooks_store_actions_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/store/actions/auth */ "./hooks/store/actions/auth.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\Kh3m\\Documents\\projects\\austinExpress\\client\\container\\SignIn.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var controls = {
  email: {
    eleType: "input",
    eleConfig: {
      type: "email",
      placeholder: "Email",
      required: true
    },
    validation: {
      required: true,
      match: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    },
    valid: true,
    value: ""
  },
  password: {
    eleType: "input",
    eleConfig: {
      type: "password",
      placeholder: "Password",
      required: true
    },
    validation: {
      required: true,
      length: {
        min: 5
      }
    },
    valid: true,
    value: ""
  }
};

var signInFormReducer = function signInFormReducer(state, action) {
  var authResponse = _hooks_store_actions_auth__WEBPACK_IMPORTED_MODULE_6__["default"].authResponse;

  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_5__["START_TYPING"]:
      return _objectSpread(_objectSpread({}, state), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, action.field, _objectSpread(_objectSpread({}, state[action.field]), {}, {
        value: action.value
      })));

    default:
      throw new Error("No command found");
  }
};

var SignIn = function SignIn(props) {
  _s();

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(signInFormReducer, controls),
      signInFormState = _useReducer[0],
      dispatch = _useReducer[1]; // signin click handler


  var onSignInHandler = function onSignInHandler(event) {
    event.preventDefault();
    var signInFormData = {
      email: signInFormState.email.value,
      password: signInFormState.password.value
    };
    authR;
  }; // two way binding...


  var onInputChangeHandler = function onInputChangeHandler(event, field) {
    dispatch({
      type: _actionTypes__WEBPACK_IMPORTED_MODULE_5__["START_TYPING"],
      field: field,
      value: event.target.value
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: "page-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }, "Sign in"), __jsx(_SwitchEntry__WEBPACK_IMPORTED_MODULE_2__["default"], {
    guest: props.guest,
    toggleAccount: props.toggleAccount,
    entry: " Create account",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }), __jsx("form", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }, Object.keys(signInFormState).map(function (field) {
    return __jsx(_components_UI_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
      change: function change(event) {
        return onInputChangeHandler(event, field);
      },
      value: signInFormState[field].value,
      inValid: !signInFormState[field].valid,
      key: field,
      eleConfig: signInFormState[field].eleConfig,
      eleType: signInFormState[field].eleType,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 13
      }
    });
  }), __jsx(_components_UI_EntryButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    sign: function sign(event) {
      return onSignInHandler(event);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, " ", "Sign In", " ")));
};

_s(SignIn, "12JA0FxidgsAVkKj8eIkdzEz9iQ=");

_c = SignIn;
/* harmony default export */ __webpack_exports__["default"] = (SignIn);

var _c;

$RefreshReg$(_c, "SignIn");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250YWluZXIvU2lnbkluLmpzIl0sIm5hbWVzIjpbImNvbnRyb2xzIiwiZW1haWwiLCJlbGVUeXBlIiwiZWxlQ29uZmlnIiwidHlwZSIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJ2YWxpZGF0aW9uIiwibWF0Y2giLCJ2YWxpZCIsInZhbHVlIiwicGFzc3dvcmQiLCJsZW5ndGgiLCJtaW4iLCJzaWduSW5Gb3JtUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiYXV0aFJlc3BvbnNlIiwidXNlQXV0aEFjdGlvbnMiLCJhY3Rpb25UeXBlcyIsImZpZWxkIiwiRXJyb3IiLCJTaWduSW4iLCJwcm9wcyIsInVzZVJlZHVjZXIiLCJzaWduSW5Gb3JtU3RhdGUiLCJkaXNwYXRjaCIsIm9uU2lnbkluSGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzaWduSW5Gb3JtRGF0YSIsImF1dGhSIiwib25JbnB1dENoYW5nZUhhbmRsZXIiLCJ0YXJnZXQiLCJndWVzdCIsInRvZ2dsZUFjY291bnQiLCJPYmplY3QiLCJrZXlzIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsUUFBUSxHQUFHO0FBQ2ZDLE9BQUssRUFBRTtBQUNMQyxXQUFPLEVBQUUsT0FESjtBQUVMQyxhQUFTLEVBQUU7QUFDVEMsVUFBSSxFQUFFLE9BREc7QUFFVEMsaUJBQVcsRUFBRSxPQUZKO0FBR1RDLGNBQVEsRUFBRTtBQUhELEtBRk47QUFPTEMsY0FBVSxFQUFFO0FBQ1ZELGNBQVEsRUFBRSxJQURBO0FBRVZFLFdBQUssRUFBRTtBQUZHLEtBUFA7QUFXTEMsU0FBSyxFQUFFLElBWEY7QUFZTEMsU0FBSyxFQUFFO0FBWkYsR0FEUTtBQWVmQyxVQUFRLEVBQUU7QUFDUlQsV0FBTyxFQUFFLE9BREQ7QUFFUkMsYUFBUyxFQUFFO0FBQ1RDLFVBQUks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LENBQWYsQ0FBdUJsQixPQU5sQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREY7QUFVRCxHQVhBLENBREgsRUFhRSxNQUFDLGtFQUFEO0FBQWEsUUFBSSxFQUFFLGNBQUMwQixLQUFEO0FBQUEsYUFBV0QsZUFBZSxDQUFDQyxLQUFELENBQTFCO0FBQUEsS0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHLEdBREgsYUFFVSxHQUZWLENBYkYsQ0FSRixDQURGO0FBNkJELENBbEREOztHQUFNTixNOztLQUFBQSxNO0FBb0RTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy5kNTI3NDc1ODg3NjljMzYzYjgwNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZHVjZXIgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFN3aXRjaEVudHJ5IGZyb20gXCIuL1N3aXRjaEVudHJ5XCI7XHJcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vY29tcG9uZW50cy9VSS9JbnB1dFwiO1xyXG5pbXBvcnQgRW50cnlCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvVUkvRW50cnlCdXR0b25cIjtcclxuaW1wb3J0ICogYXMgYWN0aW9uVHlwZXMgZnJvbSBcIi4vYWN0aW9uVHlwZXNcIjtcclxuaW1wb3J0IHVzZUF1dGhBY3Rpb25zIGZyb20gXCIuLi9ob29rcy9zdG9yZS9hY3Rpb25zL2F1dGhcIjtcclxuXHJcbmNvbnN0IGNvbnRyb2xzID0ge1xyXG4gIGVtYWlsOiB7XHJcbiAgICBlbGVUeXBlOiBcImlucHV0XCIsXHJcbiAgICBlbGVDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJlbWFpbFwiLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCJFbWFpbFwiLFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uOiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICBtYXRjaDogLyg/OlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSsoPzpcXC5bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKSp8XCIoPzpbXFx4MDEtXFx4MDhcXHgwYlxceDBjXFx4MGUtXFx4MWZcXHgyMVxceDIzLVxceDViXFx4NWQtXFx4N2ZdfFxcXFxbXFx4MDEtXFx4MDlcXHgwYlxceDBjXFx4MGUtXFx4N2ZdKSpcIilAKD86KD86W2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP1xcLikrW2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP3xcXFsoPzooPzooMig1WzAtNV18WzAtNF1bMC05XSl8MVswLTldWzAtOV18WzEtOV0/WzAtOV0pKVxcLil7M30oPzooMig1WzAtNV18WzAtNF1bMC05XSl8MVswLTldWzAtOV18WzEtOV0/WzAtOV0pfFthLXowLTktXSpbYS16MC05XTooPzpbXFx4MDEtXFx4MDhcXHgwYlxceDBjXFx4MGUtXFx4MWZcXHgyMS1cXHg1YVxceDUzLVxceDdmXXxcXFxcW1xceDAxLVxceDA5XFx4MGJcXHgwY1xceDBlLVxceDdmXSkrKVxcXSkvLFxyXG4gICAgfSxcclxuICAgIHZhbGlkOiB0cnVlLFxyXG4gICAgdmFsdWU6IFwiXCIsXHJcbiAgfSxcclxuICBwYXNzd29yZDoge1xyXG4gICAgZWxlVHlwZTogXCJpbnB1dFwiLFxyXG4gICAgZWxlQ29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwicGFzc3dvcmRcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiUGFzc3dvcmRcIixcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgbGVuZ3RoOiB7IG1pbjogNSB9LFxyXG4gICAgfSxcclxuICAgIHZhbGlkOiB0cnVlLFxyXG4gICAgdmFsdWU6IFwiXCIsXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IHNpZ25JbkZvcm1SZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBjb25zdCB7IGF1dGhSZXNwb25zZSB9ID0gdXNlQXV0aEFjdGlvbnM7XHJcblxyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU1RBUlRfVFlQSU5HOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIFthY3Rpb24uZmllbGRdOiB7IC4uLnN0YXRlW2FjdGlvbi5maWVsZF0sIHZhbHVlOiBhY3Rpb24udmFsdWUgfSxcclxuICAgICAgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGNvbW1hbmQgZm91bmRcIik7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgU2lnbkluID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW3NpZ25JbkZvcm1TdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihzaWduSW5Gb3JtUmVkdWNlciwgY29udHJvbHMpO1xyXG4gIC8vIHNpZ25pbiBjbGljayBoYW5kbGVyXHJcbiAgY29uc3Qgb25TaWduSW5IYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3Qgc2lnbkluRm9ybURhdGEgPSB7XHJcbiAgICAgIGVtYWlsOiBzaWduSW5Gb3JtU3RhdGUuZW1haWwudmFsdWUsXHJcbiAgICAgIHBhc3N3b3JkOiBzaWduSW5Gb3JtU3RhdGUucGFzc3dvcmQudmFsdWUsXHJcbiAgICB9O1xyXG5cclxuICAgIGF1dGhSXHJcbiAgfTtcclxuXHJcbiAgLy8gdHdvIHdheSBiaW5kaW5nLi4uXHJcbiAgY29uc3Qgb25JbnB1dENoYW5nZUhhbmRsZXIgPSAoZXZlbnQsIGZpZWxkKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IGFjdGlvblR5cGVzLlNUQVJUX1RZUElORyxcclxuICAgICAgZmllbGQsXHJcbiAgICAgIHZhbHVlOiBldmVudC50YXJnZXQudmFsdWUsXHJcbiAgICB9KTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9XCJwYWdlLXRpdGxlXCI+U2lnbiBpbjwvaDI+XHJcbiAgICAgIDxTd2l0Y2hFbnRyeVxyXG4gICAgICAgIGd1ZXN0PXtwcm9wcy5ndWVzdH1cclxuICAgICAgICB0b2dnbGVBY2NvdW50PXtwcm9wcy50b2dnbGVBY2NvdW50fVxyXG4gICAgICAgIGVudHJ5PVwiIENyZWF0ZSBhY2NvdW50XCJcclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxmb3JtPlxyXG4gICAgICAgIHtPYmplY3Qua2V5cyhzaWduSW5Gb3JtU3RhdGUpLm1hcCgoZmllbGQpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIGNoYW5nZT17KGV2ZW50KSA9PiBvbklucHV0Q2hhbmdlSGFuZGxlcihldmVudCwgZmllbGQpfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzaWduSW5Gb3JtU3RhdGVbZmllbGRdLnZhbHVlfVxyXG4gICAgICAgICAgICAgIGluVmFsaWQ9eyFzaWduSW5Gb3JtU3RhdGVbZmllbGRdLnZhbGlkfVxyXG4gICAgICAgICAgICAgIGtleT17ZmllbGR9XHJcbiAgICAgICAgICAgICAgZWxlQ29uZmlnPXtzaWduSW5Gb3JtU3RhdGVbZmllbGRdLmVsZUNvbmZpZ31cclxuICAgICAgICAgICAgICBlbGVUeXBlPXtzaWduSW5Gb3JtU3RhdGVbZmllbGRdLmVsZVR5cGV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICAgIDxFbnRyeUJ1dHRvbiBzaWduPXsoZXZlbnQpID0+IG9uU2lnbkluSGFuZGxlcihldmVudCl9PlxyXG4gICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgU2lnbiBJbntcIiBcIn1cclxuICAgICAgICA8L0VudHJ5QnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWduSW47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=