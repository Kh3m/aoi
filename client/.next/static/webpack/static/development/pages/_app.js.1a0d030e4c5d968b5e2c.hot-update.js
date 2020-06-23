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
    authResponse(signInFormData, true);
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250YWluZXIvU2lnbkluLmpzIl0sIm5hbWVzIjpbImNvbnRyb2xzIiwiZW1haWwiLCJlbGVUeXBlIiwiZWxlQ29uZmlnIiwidHlwZSIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJ2YWxpZGF0aW9uIiwibWF0Y2giLCJ2YWxpZCIsInZhbHVlIiwicGFzc3dvcmQiLCJsZW5ndGgiLCJtaW4iLCJzaWduSW5Gb3JtUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiYXV0aFJlc3BvbnNlIiwidXNlQXV0aEFjdGlvbnMiLCJhY3Rpb25UeXBlcyIsImZpZWxkIiwiRXJyb3IiLCJTaWduSW4iLCJwcm9wcyIsInVzZVJlZHVjZXIiLCJzaWduSW5Gb3JtU3RhdGUiLCJkaXNwYXRjaCIsIm9uU2lnbkluSGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzaWduSW5Gb3JtRGF0YSIsIm9uSW5wdXRDaGFuZ2VIYW5kbGVyIiwidGFyZ2V0IiwiZ3Vlc3QiLCJ0b2dnbGVBY2NvdW50IiwiT2JqZWN0Iiwia2V5cyIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFFBQVEsR0FBRztBQUNmQyxPQUFLLEVBQUU7QUFDTEMsV0FBTyxFQUFFLE9BREo7QUFFTEMsYUFBUyxFQUFFO0FBQ1RDLFVBQUksRUFBRSxPQURHO0FBRVRDLGlCQUFXLEVBQUUsT0FGSjtBQUdUQyxjQUFRLEVBQUU7QUFIRCxLQUZOO0FBT0xDLGNBQVUsRUFBRTtBQUNWRCxjQUFRLEVBQUUsSUFEQTtBQUVWRSxXQUFLLEVBQUU7QUFGRyxLQVBQO0FBV0xDLFNBQUssRUFBRSxJQVhGO0FBWUxDLFNBQUssRUFBRTtBQVpGLEdBRFE7QUFlZkMsVUFBUSxFQUFFO0FBQ1JULFdBQU8sRUFBRSxPQUREO0FBRVJDLGFBQVMsRUFBRTtBQUNUQyxVQUFJLEVBQUUsVUFE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QUVzQixlQUFlLENBQUNMLEtBQUQsQ0FBZixDQUF1QmxCLE9BTmxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERjtBQVVELEdBWEEsQ0FESCxFQWFFLE1BQUMsa0VBQUQ7QUFBYSxRQUFJLEVBQUUsY0FBQzBCLEtBQUQ7QUFBQSxhQUFXRCxlQUFlLENBQUNDLEtBQUQsQ0FBMUI7QUFBQSxLQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0csR0FESCxhQUVVLEdBRlYsQ0FiRixDQVJGLENBREY7QUE2QkQsQ0FsREQ7O0dBQU1OLE07O0tBQUFBLE07QUFvRFNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLjFhMGQwMzBlNGM1ZDk2OGI1ZTJjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVkdWNlciB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU3dpdGNoRW50cnkgZnJvbSBcIi4vU3dpdGNoRW50cnlcIjtcclxuaW1wb3J0IElucHV0IGZyb20gXCIuLi9jb21wb25lbnRzL1VJL0lucHV0XCI7XHJcbmltcG9ydCBFbnRyeUJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9VSS9FbnRyeUJ1dHRvblwiO1xyXG5pbXBvcnQgKiBhcyBhY3Rpb25UeXBlcyBmcm9tIFwiLi9hY3Rpb25UeXBlc1wiO1xyXG5pbXBvcnQgdXNlQXV0aEFjdGlvbnMgZnJvbSBcIi4uL2hvb2tzL3N0b3JlL2FjdGlvbnMvYXV0aFwiO1xyXG5cclxuY29uc3QgY29udHJvbHMgPSB7XHJcbiAgZW1haWw6IHtcclxuICAgIGVsZVR5cGU6IFwiaW5wdXRcIixcclxuICAgIGVsZUNvbmZpZzoge1xyXG4gICAgICB0eXBlOiBcImVtYWlsXCIsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIkVtYWlsXCIsXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgIG1hdGNoOiAvKD86W2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKyg/OlxcLlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSspKnxcIig/OltcXHgwMS1cXHgwOFxceDBiXFx4MGNcXHgwZS1cXHgxZlxceDIxXFx4MjMtXFx4NWJcXHg1ZC1cXHg3Zl18XFxcXFtcXHgwMS1cXHgwOVxceDBiXFx4MGNcXHgwZS1cXHg3Zl0pKlwiKUAoPzooPzpbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/XFwuKStbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/fFxcWyg/Oig/OigyKDVbMC01XXxbMC00XVswLTldKXwxWzAtOV1bMC05XXxbMS05XT9bMC05XSkpXFwuKXszfSg/OigyKDVbMC01XXxbMC00XVswLTldKXwxWzAtOV1bMC05XXxbMS05XT9bMC05XSl8W2EtejAtOS1dKlthLXowLTldOig/OltcXHgwMS1cXHgwOFxceDBiXFx4MGNcXHgwZS1cXHgxZlxceDIxLVxceDVhXFx4NTMtXFx4N2ZdfFxcXFxbXFx4MDEtXFx4MDlcXHgwYlxceDBjXFx4MGUtXFx4N2ZdKSspXFxdKS8sXHJcbiAgICB9LFxyXG4gICAgdmFsaWQ6IHRydWUsXHJcbiAgICB2YWx1ZTogXCJcIixcclxuICB9LFxyXG4gIHBhc3N3b3JkOiB7XHJcbiAgICBlbGVUeXBlOiBcImlucHV0XCIsXHJcbiAgICBlbGVDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJwYXNzd29yZFwiLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCJQYXNzd29yZFwiLFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uOiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICBsZW5ndGg6IHsgbWluOiA1IH0sXHJcbiAgICB9LFxyXG4gICAgdmFsaWQ6IHRydWUsXHJcbiAgICB2YWx1ZTogXCJcIixcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3Qgc2lnbkluRm9ybVJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGNvbnN0IHsgYXV0aFJlc3BvbnNlIH0gPSB1c2VBdXRoQWN0aW9ucztcclxuXHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TVEFSVF9UWVBJTkc6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgW2FjdGlvbi5maWVsZF06IHsgLi4uc3RhdGVbYWN0aW9uLmZpZWxkXSwgdmFsdWU6IGFjdGlvbi52YWx1ZSB9LFxyXG4gICAgICB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gY29tbWFuZCBmb3VuZFwiKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBTaWduSW4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbc2lnbkluRm9ybVN0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHNpZ25JbkZvcm1SZWR1Y2VyLCBjb250cm9scyk7XHJcbiAgLy8gc2lnbmluIGNsaWNrIGhhbmRsZXJcclxuICBjb25zdCBvblNpZ25JbkhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBzaWduSW5Gb3JtRGF0YSA9IHtcclxuICAgICAgZW1haWw6IHNpZ25JbkZvcm1TdGF0ZS5lbWFpbC52YWx1ZSxcclxuICAgICAgcGFzc3dvcmQ6IHNpZ25JbkZvcm1TdGF0ZS5wYXNzd29yZC52YWx1ZSxcclxuICAgIH07XHJcblxyXG4gICAgYXV0aFJlc3BvbnNlKHNpZ25JbkZvcm1EYXRhLCB0cnVlKTtcclxuICB9O1xyXG5cclxuICAvLyB0d28gd2F5IGJpbmRpbmcuLi5cclxuICBjb25zdCBvbklucHV0Q2hhbmdlSGFuZGxlciA9IChldmVudCwgZmllbGQpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogYWN0aW9uVHlwZXMuU1RBUlRfVFlQSU5HLFxyXG4gICAgICBmaWVsZCxcclxuICAgICAgdmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZSxcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPGgyIGNsYXNzTmFtZT1cInBhZ2UtdGl0bGVcIj5TaWduIGluPC9oMj5cclxuICAgICAgPFN3aXRjaEVudHJ5XHJcbiAgICAgICAgZ3Vlc3Q9e3Byb3BzLmd1ZXN0fVxyXG4gICAgICAgIHRvZ2dsZUFjY291bnQ9e3Byb3BzLnRvZ2dsZUFjY291bnR9XHJcbiAgICAgICAgZW50cnk9XCIgQ3JlYXRlIGFjY291bnRcIlxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPGZvcm0+XHJcbiAgICAgICAge09iamVjdC5rZXlzKHNpZ25JbkZvcm1TdGF0ZSkubWFwKChmaWVsZCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgY2hhbmdlPXsoZXZlbnQpID0+IG9uSW5wdXRDaGFuZ2VIYW5kbGVyKGV2ZW50LCBmaWVsZCl9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3NpZ25JbkZvcm1TdGF0ZVtmaWVsZF0udmFsdWV9XHJcbiAgICAgICAgICAgICAgaW5WYWxpZD17IXNpZ25JbkZvcm1TdGF0ZVtmaWVsZF0udmFsaWR9XHJcbiAgICAgICAgICAgICAga2V5PXtmaWVsZH1cclxuICAgICAgICAgICAgICBlbGVDb25maWc9e3NpZ25JbkZvcm1TdGF0ZVtmaWVsZF0uZWxlQ29uZmlnfVxyXG4gICAgICAgICAgICAgIGVsZVR5cGU9e3NpZ25JbkZvcm1TdGF0ZVtmaWVsZF0uZWxlVHlwZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgICAgPEVudHJ5QnV0dG9uIHNpZ249eyhldmVudCkgPT4gb25TaWduSW5IYW5kbGVyKGV2ZW50KX0+XHJcbiAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICBTaWduIElue1wiIFwifVxyXG4gICAgICAgIDwvRW50cnlCdXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25JbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==