webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./container/SignUp.js":
/*!*****************************!*\
  !*** ./container/SignUp.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SwitchEntry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SwitchEntry */ "./container/SwitchEntry.js");
/* harmony import */ var _components_UI_EntryButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/UI/EntryButton */ "./components/UI/EntryButton.js");
/* harmony import */ var _components_UI_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/UI/Input */ "./components/UI/Input.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actionTypes */ "./container/actionTypes.js");
/* harmony import */ var _hooks_store_actions_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/store/actions/auth */ "./hooks/store/actions/auth.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\Kh3m\\Documents\\projects\\austinExpress\\client\\container\\SignUp.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var controls = {
  fullname: {
    eleType: "input",
    eleConfig: {
      type: "text",
      placeholder: "Full Name",
      required: true
    },
    validation: {
      required: true,
      length: {
        min: 5
      },
      match: /(?:^[ a-zA-Z]{5,}$)/
    },
    valid: true,
    value: ""
  },
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

var signUpFormReducer = function signUpFormReducer(state, action) {
  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_5__["START_TYPING"]:
      return _objectSpread(_objectSpread({}, state), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, action.field, _objectSpread(_objectSpread({}, state[action.field]), {}, {
        value: action.value
      })));

    case _actionTypes__WEBPACK_IMPORTED_MODULE_5__["CHECK_VALIDITY"]:
      return _objectSpread(_objectSpread({}, state), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, action.field, _objectSpread(_objectSpread({}, state[action.field]), {}, {
        valid: action.valid
      })));

    default:
      throw new Error("No command found");
  }
};

var SignUp = function SignUp(props) {
  _s();

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(signUpFormReducer, controls),
      signUpFormState = _useReducer[0],
      dispatch = _useReducer[1];

  var _useAuthActions = Object(_hooks_store_actions_auth__WEBPACK_IMPORTED_MODULE_6__["default"])(),
      authResponse = _useAuthActions.authResponse; // check validity


  var chectValidity = function chectValidity(rules, value) {
    var isValid = true;

    if (rules.required) {
      isValid = value !== "" && isValid;
    }

    if (rules.length) {
      if (rules.length.min) {
        isValid = value.length >= rules.length.min && isValid;
      }
    }

    if (rules.match) {
      isValid = rules.match.test(value) && isValid;
    }

    return isValid;
  }; // signup click handler


  var onSignUpHandler = function onSignUpHandler(event) {
    event.preventDefault();
    var signUpFormData = {
      fullName: signUpFormState.fullname.value,
      email: signUpFormState.email.value,
      password: signUpFormState.password.value
    };
    authResponse(signUpFormData, false);
  }; // two way binding...


  var onInputChangeHandler = function onInputChangeHandler(event, field) {
    dispatch({
      type: _actionTypes__WEBPACK_IMPORTED_MODULE_5__["START_TYPING"],
      field: field,
      value: event.target.value
    });
    dispatch({
      type: _actionTypes__WEBPACK_IMPORTED_MODULE_5__["CHECK_VALIDITY"],
      field: field,
      valid: chectValidity(signUpFormState[field].validation, event.target.value)
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: "page-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 7
    }
  }, "Sign up"), __jsx(_SwitchEntry__WEBPACK_IMPORTED_MODULE_2__["default"], {
    guest: props.guest,
    toggleAccount: props.toggleAccount,
    entry: " Sign In",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }
  }), __jsx("form", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }
  }, Object.keys(signUpFormState).map(function (field) {
    return __jsx(_components_UI_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
      change: function change(event) {
        return onInputChangeHandler(event, field);
      },
      value: signUpFormState[field].value,
      inValid: !signUpFormState[field].valid,
      key: field,
      eleConfig: signUpFormState[field].eleConfig,
      eleType: signUpFormState[field].eleType,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 13
      }
    });
  }), __jsx(_components_UI_EntryButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sign: function sign(event) {
      return onSignUpHandler(event);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 9
    }
  }, " ", "Sign Up", " ")));
};

_s(SignUp, "1cQwPPV2V0x1zetIJL/bV+nyFHY=", false, function () {
  return [_hooks_store_actions_auth__WEBPACK_IMPORTED_MODULE_6__["default"]];
});

_c = SignUp;
/* harmony default export */ __webpack_exports__["default"] = (SignUp);

var _c;

$RefreshReg$(_c, "SignUp");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250YWluZXIvU2lnblVwLmpzIl0sIm5hbWVzIjpbImNvbnRyb2xzIiwiZnVsbG5hbWUiLCJlbGVUeXBlIiwiZWxlQ29uZmlnIiwidHlwZSIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJ2YWxpZGF0aW9uIiwibGVuZ3RoIiwibWluIiwibWF0Y2giLCJ2YWxpZCIsInZhbHVlIiwiZW1haWwiLCJwYXNzd29yZCIsInNpZ25VcEZvcm1SZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJhY3Rpb25UeXBlcyIsImZpZWxkIiwiRXJyb3IiLCJTaWduVXAiLCJwcm9wcyIsInVzZVJlZHVjZXIiLCJzaWduVXBGb3JtU3RhdGUiLCJkaXNwYXRjaCIsInVzZUF1dGhBY3Rpb25zIiwiYXV0aFJlc3BvbnNlIiwiY2hlY3RWYWxpZGl0eSIsInJ1bGVzIiwiaXNWYWxpZCIsInRlc3QiLCJvblNpZ25VcEhhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2lnblVwRm9ybURhdGEiLCJmdWxsTmFtZSIsIm9uSW5wdXRDaGFuZ2VIYW5kbGVyIiwidGFyZ2V0IiwiZ3Vlc3QiLCJ0b2dnbGVBY2NvdW50IiwiT2JqZWN0Iiwia2V5cyIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFFBQVEsR0FBRztBQUNmQyxVQUFRLEVBQUU7QUFDUkMsV0FBTyxFQUFFLE9BREQ7QUFFUkMsYUFBUyxFQUFFO0FBQ1RDLFVBQUksRUFBRSxNQURHO0FBRVRDLGlCQUFXLEVBQUUsV0FGSjtBQUdUQyxjQUFRLEVBQUU7QUFIRCxLQUZIO0FBT1JDLGNBQVUsRUFBRTtBQUNWRCxjQUFRLEVBQUUsSUFEQTtBQUVWRSxZQUFNLEVBQUU7QUFBRUMsV0FBRyxFQUFFO0FBQVAsT0FGRTtBQUdWQyxXQUFLLEVBQUU7QUFIRyxLQVBKO0FBWVJDLFNBQUssRUFB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QUE2Qm1CLEdBQTdCLENBQWlDLFVBQUN4QixLQUFELEVBQVc7QUFDM0MsV0FDRSxNQUFDLDREQUFEO0FBQ0UsWUFBTSxFQUFFLGdCQUFDYyxLQUFEO0FBQUEsZUFBV0ksb0JBQW9CLENBQUNKLEtBQUQsRUFBUWQsS0FBUixDQUEvQjtBQUFBLE9BRFY7QUFFRSxXQUFLLEVBQUVLLGVBQWUsQ0FBQ0wsS0FBRCxDQUFmLENBQXVCUCxLQUZoQztBQUdFLGFBQU8sRUFBRSxDQUFDWSxlQUFlLENBQUNMLEtBQUQsQ0FBZixDQUF1QlIsS0FIbkM7QUFJRSxTQUFHLEVBQUVRLEtBSlA7QUFLRSxlQUFTLEVBQUVLLGVBQWUsQ0FBQ0wsS0FBRCxDQUFmLENBQXVCaEIsU0FMcEM7QUFNRSxhQUFPLEVBQUVxQixlQUFlLENBQUNMLEtBQUQsQ0FBZixDQUF1QmpCLE9BTmxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERjtBQVVELEdBWEEsQ0FESCxFQWFFLE1BQUMsa0VBQUQ7QUFBYSxRQUFJLEVBQUUsY0FBQytCLEtBQUQ7QUFBQSxhQUFXRCxlQUFlLENBQUNDLEtBQUQsQ0FBMUI7QUFBQSxLQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0csR0FESCxhQUVVLEdBRlYsQ0FiRixDQVBGLENBREY7QUE0QkQsQ0FoRkQ7O0dBQU1aLE07VUFHcUJLLGlFOzs7S0FIckJMLE07QUFrRlNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLjg5MWFmNzQ2Yzg2YjNiYjQ4NWUwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVkdWNlciB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU3dpdGNoRW50cnkgZnJvbSBcIi4vU3dpdGNoRW50cnlcIjtcclxuaW1wb3J0IEVudHJ5QnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL1VJL0VudHJ5QnV0dG9uXCI7XHJcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vY29tcG9uZW50cy9VSS9JbnB1dFwiO1xyXG5pbXBvcnQgKiBhcyBhY3Rpb25UeXBlcyBmcm9tIFwiLi9hY3Rpb25UeXBlc1wiO1xyXG5pbXBvcnQgdXNlQXV0aEFjdGlvbnMgZnJvbSBcIi4uL2hvb2tzL3N0b3JlL2FjdGlvbnMvYXV0aFwiO1xyXG5cclxuY29uc3QgY29udHJvbHMgPSB7XHJcbiAgZnVsbG5hbWU6IHtcclxuICAgIGVsZVR5cGU6IFwiaW5wdXRcIixcclxuICAgIGVsZUNvbmZpZzoge1xyXG4gICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiRnVsbCBOYW1lXCIsXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgIGxlbmd0aDogeyBtaW46IDUgfSxcclxuICAgICAgbWF0Y2g6IC8oPzpeWyBhLXpBLVpdezUsfSQpLyxcclxuICAgIH0sXHJcbiAgICB2YWxpZDogdHJ1ZSxcclxuICAgIHZhbHVlOiBcIlwiLFxyXG4gIH0sXHJcbiAgZW1haWw6IHtcclxuICAgIGVsZVR5cGU6IFwiaW5wdXRcIixcclxuICAgIGVsZUNvbmZpZzoge1xyXG4gICAgICB0eXBlOiBcImVtYWlsXCIsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIkVtYWlsXCIsXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgIG1hdGNoOiAvKD86W2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKyg/OlxcLlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSspKnxcIig/OltcXHgwMS1cXHgwOFxceDBiXFx4MGNcXHgwZS1cXHgxZlxceDIxXFx4MjMtXFx4NWJcXHg1ZC1cXHg3Zl18XFxcXFtcXHgwMS1cXHgwOVxceDBiXFx4MGNcXHgwZS1cXHg3Zl0pKlwiKUAoPzooPzpbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/XFwuKStbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/fFxcWyg/Oig/OigyKDVbMC01XXxbMC00XVswLTldKXwxWzAtOV1bMC05XXxbMS05XT9bMC05XSkpXFwuKXszfSg/OigyKDVbMC01XXxbMC00XVswLTldKXwxWzAtOV1bMC05XXxbMS05XT9bMC05XSl8W2EtejAtOS1dKlthLXowLTldOig/OltcXHgwMS1cXHgwOFxceDBiXFx4MGNcXHgwZS1cXHgxZlxceDIxLVxceDVhXFx4NTMtXFx4N2ZdfFxcXFxbXFx4MDEtXFx4MDlcXHgwYlxceDBjXFx4MGUtXFx4N2ZdKSspXFxdKS8sXHJcbiAgICB9LFxyXG4gICAgdmFsaWQ6IHRydWUsXHJcbiAgICB2YWx1ZTogXCJcIixcclxuICB9LFxyXG4gIHBhc3N3b3JkOiB7XHJcbiAgICBlbGVUeXBlOiBcImlucHV0XCIsXHJcbiAgICBlbGVDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJwYXNzd29yZFwiLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCJQYXNzd29yZFwiLFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uOiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICBsZW5ndGg6IHsgbWluOiA1IH0sXHJcbiAgICB9LFxyXG4gICAgdmFsaWQ6IHRydWUsXHJcbiAgICB2YWx1ZTogXCJcIixcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3Qgc2lnblVwRm9ybVJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU1RBUlRfVFlQSU5HOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIFthY3Rpb24uZmllbGRdOiB7IC4uLnN0YXRlW2FjdGlvbi5maWVsZF0sIHZhbHVlOiBhY3Rpb24udmFsdWUgfSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuQ0hFQ0tfVkFMSURJVFk6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgW2FjdGlvbi5maWVsZF06IHsgLi4uc3RhdGVbYWN0aW9uLmZpZWxkXSwgdmFsaWQ6IGFjdGlvbi52YWxpZCB9LFxyXG4gICAgICB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gY29tbWFuZCBmb3VuZFwiKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBTaWduVXAgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbc2lnblVwRm9ybVN0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHNpZ25VcEZvcm1SZWR1Y2VyLCBjb250cm9scyk7XHJcblxyXG4gIGNvbnN0IHsgYXV0aFJlc3BvbnNlIH0gPSB1c2VBdXRoQWN0aW9ucygpO1xyXG5cclxuICAvLyBjaGVjayB2YWxpZGl0eVxyXG4gIGNvbnN0IGNoZWN0VmFsaWRpdHkgPSAocnVsZXMsIHZhbHVlKSA9PiB7XHJcbiAgICBsZXQgaXNWYWxpZCA9IHRydWU7XHJcbiAgICBpZiAocnVsZXMucmVxdWlyZWQpIHtcclxuICAgICAgaXNWYWxpZCA9IHZhbHVlICE9PSBcIlwiICYmIGlzVmFsaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJ1bGVzLmxlbmd0aCkge1xyXG4gICAgICBpZiAocnVsZXMubGVuZ3RoLm1pbikge1xyXG4gICAgICAgIGlzVmFsaWQgPSB2YWx1ZS5sZW5ndGggPj0gcnVsZXMubGVuZ3RoLm1pbiAmJiBpc1ZhbGlkO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJ1bGVzLm1hdGNoKSB7XHJcbiAgICAgIGlzVmFsaWQgPSBydWxlcy5tYXRjaC50ZXN0KHZhbHVlKSAmJiBpc1ZhbGlkO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlzVmFsaWQ7XHJcbiAgfTtcclxuXHJcbiAgLy8gc2lnbnVwIGNsaWNrIGhhbmRsZXJcclxuICBjb25zdCBvblNpZ25VcEhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBzaWduVXBGb3JtRGF0YSA9IHtcclxuICAgICAgZnVsbE5hbWU6IHNpZ25VcEZvcm1TdGF0ZS5mdWxsbmFtZS52YWx1ZSxcclxuICAgICAgZW1haWw6IHNpZ25VcEZvcm1TdGF0ZS5lbWFpbC52YWx1ZSxcclxuICAgICAgcGFzc3dvcmQ6IHNpZ25VcEZvcm1TdGF0ZS5wYXNzd29yZC52YWx1ZSxcclxuICAgIH07XHJcblxyXG4gICAgYXV0aFJlc3BvbnNlKHNpZ25VcEZvcm1EYXRhLCBmYWxzZSlcclxuICB9O1xyXG5cclxuICAvLyB0d28gd2F5IGJpbmRpbmcuLi5cclxuICBjb25zdCBvbklucHV0Q2hhbmdlSGFuZGxlciA9IChldmVudCwgZmllbGQpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogYWN0aW9uVHlwZXMuU1RBUlRfVFlQSU5HLFxyXG4gICAgICBmaWVsZCxcclxuICAgICAgdmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZSxcclxuICAgIH0pO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBhY3Rpb25UeXBlcy5DSEVDS19WQUxJRElUWSxcclxuICAgICAgZmllbGQsXHJcbiAgICAgIHZhbGlkOiBjaGVjdFZhbGlkaXR5KFxyXG4gICAgICAgIHNpZ25VcEZvcm1TdGF0ZVtmaWVsZF0udmFsaWRhdGlvbixcclxuICAgICAgICBldmVudC50YXJnZXQudmFsdWVcclxuICAgICAgKSxcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPGgyIGNsYXNzTmFtZT1cInBhZ2UtdGl0bGVcIj5TaWduIHVwPC9oMj5cclxuICAgICAgPFN3aXRjaEVudHJ5XHJcbiAgICAgICAgZ3Vlc3Q9e3Byb3BzLmd1ZXN0fVxyXG4gICAgICAgIHRvZ2dsZUFjY291bnQ9e3Byb3BzLnRvZ2dsZUFjY291bnR9XHJcbiAgICAgICAgZW50cnk9XCIgU2lnbiBJblwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxmb3JtPlxyXG4gICAgICAgIHtPYmplY3Qua2V5cyhzaWduVXBGb3JtU3RhdGUpLm1hcCgoZmllbGQpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIGNoYW5nZT17KGV2ZW50KSA9PiBvbklucHV0Q2hhbmdlSGFuZGxlcihldmVudCwgZmllbGQpfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzaWduVXBGb3JtU3RhdGVbZmllbGRdLnZhbHVlfVxyXG4gICAgICAgICAgICAgIGluVmFsaWQ9eyFzaWduVXBGb3JtU3RhdGVbZmllbGRdLnZhbGlkfVxyXG4gICAgICAgICAgICAgIGtleT17ZmllbGR9XHJcbiAgICAgICAgICAgICAgZWxlQ29uZmlnPXtzaWduVXBGb3JtU3RhdGVbZmllbGRdLmVsZUNvbmZpZ31cclxuICAgICAgICAgICAgICBlbGVUeXBlPXtzaWduVXBGb3JtU3RhdGVbZmllbGRdLmVsZVR5cGV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICAgIDxFbnRyeUJ1dHRvbiBzaWduPXsoZXZlbnQpID0+IG9uU2lnblVwSGFuZGxlcihldmVudCl9PlxyXG4gICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgU2lnbiBVcHtcIiBcIn1cclxuICAgICAgICA8L0VudHJ5QnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWduVXA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=