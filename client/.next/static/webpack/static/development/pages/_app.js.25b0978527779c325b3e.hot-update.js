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
/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SwitchEntry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SwitchEntry */ "./container/SwitchEntry.js");
/* harmony import */ var _components_UI_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/UI/Input */ "./components/UI/Input.js");
/* harmony import */ var _components_UI_EntryButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/UI/EntryButton */ "./components/UI/EntryButton.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actionTypes */ "./container/actionTypes.js");
/* harmony import */ var _hooks_store_actions_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/store/actions/auth */ "./hooks/store/actions/auth.js");



var _this = undefined,
    _jsxFileName = "C:\\Users\\Kh3m\\Documents\\projects\\austinExpress\\client\\container\\SignIn.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

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
  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__["default"])(_hooks_store_actions_auth__WEBPACK_IMPORTED_MODULE_7__["default"]);

  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_6__["START_TYPING"]:
      return _objectSpread(_objectSpread({}, state), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, action.field, _objectSpread(_objectSpread({}, state[action.field]), {}, {
        value: action.value
      })));

    default:
      throw new Error("No command found");
  }
};

var SignIn = function SignIn(props) {
  _s();

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_2__["useReducer"])(signInFormReducer, controls),
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
      type: _actionTypes__WEBPACK_IMPORTED_MODULE_6__["START_TYPING"],
      field: field,
      value: event.target.value
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
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
  }, "Sign in"), __jsx(_SwitchEntry__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
    return __jsx(_components_UI_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
  }), __jsx(_components_UI_EntryButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectDestructuringEmpty; });
function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure undefined");
}

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250YWluZXIvU2lnbkluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3REZXN0cnVjdHVyaW5nRW1wdHkuanMiXSwibmFtZXMiOlsiY29udHJvbHMiLCJlbWFpbCIsImVsZVR5cGUiLCJlbGVDb25maWciLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsInZhbGlkYXRpb24iLCJtYXRjaCIsInZhbGlkIiwidmFsdWUiLCJwYXNzd29yZCIsImxlbmd0aCIsIm1pbiIsInNpZ25JbkZvcm1SZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ1c2VBdXRoQWN0aW9ucyIsImFjdGlvblR5cGVzIiwiZmllbGQiLCJFcnJvciIsIlNpZ25JbiIsInByb3BzIiwidXNlUmVkdWNlciIsInNpZ25JbkZvcm1TdGF0ZSIsImRpc3BhdGNoIiwib25TaWduSW5IYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNpZ25JbkZvcm1EYXRhIiwiYXV0aFIiLCJvbklucHV0Q2hhbmdlSGFuZGxlciIsInRhcmdldCIsImd1ZXN0IiwidG9nZ2xlQWNjb3VudCIsIk9iamVjdCIsImtleXMiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFFBQVEsR0FBRztBQUNmQyxPQUFLLEVBQUU7QUFDTEMsV0FBTyxFQUFFLE9BREo7QUFFTEMsYUFBUyxFQUFFO0FBQ1RDLFVBQUksRUFBRSxPQURHO0FBRVRDLGlCQUFXLEVBQUUsT0FGSjtBQUdUQyxjQUFRLEVBQUU7QUFIRCxLQUZOO0FBT0xDLGNBQVUsRUFBRTtBQUNWRCxjQUFRLEVBQUUsSUFEQTtBQUVWRSxXQUFLLEVBQUU7QUFGRyxLQVBQO0FBV0xDLFNBQUssRUFBRSxJQVhGO0FBWUxDLFNBQUssRUFBRTtBQVpG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QUF1QmhCLFNBTHBDO0FBTUUsYUFBTyxFQUFFcUIsZUFBZSxDQUFDTCxLQUFELENBQWYsQ0FBdUJqQixPQU5sQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREY7QUFVRCxHQVhBLENBREgsRUFhRSxNQUFDLGtFQUFEO0FBQWEsUUFBSSxFQUFFLGNBQUN5QixLQUFEO0FBQUEsYUFBV0QsZUFBZSxDQUFDQyxLQUFELENBQTFCO0FBQUEsS0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHLEdBREgsYUFFVSxHQUZWLENBYkYsQ0FSRixDQURGO0FBNkJELENBbEREOztHQUFNTixNOztLQUFBQSxNO0FBb0RTQSxxRUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hHQTtBQUFBO0FBQWU7QUFDZjtBQUNBLEMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuMjViMDk3ODUyNzc3OWMzMjViM2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTd2l0Y2hFbnRyeSBmcm9tIFwiLi9Td2l0Y2hFbnRyeVwiO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvVUkvSW5wdXRcIjtcclxuaW1wb3J0IEVudHJ5QnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL1VJL0VudHJ5QnV0dG9uXCI7XHJcbmltcG9ydCAqIGFzIGFjdGlvblR5cGVzIGZyb20gXCIuL2FjdGlvblR5cGVzXCI7XHJcbmltcG9ydCB1c2VBdXRoQWN0aW9ucyBmcm9tIFwiLi4vaG9va3Mvc3RvcmUvYWN0aW9ucy9hdXRoXCI7XHJcblxyXG5jb25zdCBjb250cm9scyA9IHtcclxuICBlbWFpbDoge1xyXG4gICAgZWxlVHlwZTogXCJpbnB1dFwiLFxyXG4gICAgZWxlQ29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwiZW1haWxcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiRW1haWxcIixcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgbWF0Y2g6IC8oPzpbYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKD86XFwuW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKykqfFwiKD86W1xceDAxLVxceDA4XFx4MGJcXHgwY1xceDBlLVxceDFmXFx4MjFcXHgyMy1cXHg1YlxceDVkLVxceDdmXXxcXFxcW1xceDAxLVxceDA5XFx4MGJcXHgwY1xceDBlLVxceDdmXSkqXCIpQCg/Oig/OlthLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cXC4pK1thLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT98XFxbKD86KD86KDIoNVswLTVdfFswLTRdWzAtOV0pfDFbMC05XVswLTldfFsxLTldP1swLTldKSlcXC4pezN9KD86KDIoNVswLTVdfFswLTRdWzAtOV0pfDFbMC05XVswLTldfFsxLTldP1swLTldKXxbYS16MC05LV0qW2EtejAtOV06KD86W1xceDAxLVxceDA4XFx4MGJcXHgwY1xceDBlLVxceDFmXFx4MjEtXFx4NWFcXHg1My1cXHg3Zl18XFxcXFtcXHgwMS1cXHgwOVxceDBiXFx4MGNcXHgwZS1cXHg3Zl0pKylcXF0pLyxcclxuICAgIH0sXHJcbiAgICB2YWxpZDogdHJ1ZSxcclxuICAgIHZhbHVlOiBcIlwiLFxyXG4gIH0sXHJcbiAgcGFzc3dvcmQ6IHtcclxuICAgIGVsZVR5cGU6IFwiaW5wdXRcIixcclxuICAgIGVsZUNvbmZpZzoge1xyXG4gICAgICB0eXBlOiBcInBhc3N3b3JkXCIsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIlBhc3N3b3JkXCIsXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgIGxlbmd0aDogeyBtaW46IDUgfSxcclxuICAgIH0sXHJcbiAgICB2YWxpZDogdHJ1ZSxcclxuICAgIHZhbHVlOiBcIlwiLFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBzaWduSW5Gb3JtUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgY29uc3Qge30gPSB1c2VBdXRoQWN0aW9ucztcclxuXHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TVEFSVF9UWVBJTkc6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgW2FjdGlvbi5maWVsZF06IHsgLi4uc3RhdGVbYWN0aW9uLmZpZWxkXSwgdmFsdWU6IGFjdGlvbi52YWx1ZSB9LFxyXG4gICAgICB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gY29tbWFuZCBmb3VuZFwiKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBTaWduSW4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbc2lnbkluRm9ybVN0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHNpZ25JbkZvcm1SZWR1Y2VyLCBjb250cm9scyk7XHJcbiAgLy8gc2lnbmluIGNsaWNrIGhhbmRsZXJcclxuICBjb25zdCBvblNpZ25JbkhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBzaWduSW5Gb3JtRGF0YSA9IHtcclxuICAgICAgZW1haWw6IHNpZ25JbkZvcm1TdGF0ZS5lbWFpbC52YWx1ZSxcclxuICAgICAgcGFzc3dvcmQ6IHNpZ25JbkZvcm1TdGF0ZS5wYXNzd29yZC52YWx1ZSxcclxuICAgIH07XHJcblxyXG4gICAgYXV0aFJcclxuICB9O1xyXG5cclxuICAvLyB0d28gd2F5IGJpbmRpbmcuLi5cclxuICBjb25zdCBvbklucHV0Q2hhbmdlSGFuZGxlciA9IChldmVudCwgZmllbGQpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogYWN0aW9uVHlwZXMuU1RBUlRfVFlQSU5HLFxyXG4gICAgICBmaWVsZCxcclxuICAgICAgdmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZSxcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPGgyIGNsYXNzTmFtZT1cInBhZ2UtdGl0bGVcIj5TaWduIGluPC9oMj5cclxuICAgICAgPFN3aXRjaEVudHJ5XHJcbiAgICAgICAgZ3Vlc3Q9e3Byb3BzLmd1ZXN0fVxyXG4gICAgICAgIHRvZ2dsZUFjY291bnQ9e3Byb3BzLnRvZ2dsZUFjY291bnR9XHJcbiAgICAgICAgZW50cnk9XCIgQ3JlYXRlIGFjY291bnRcIlxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPGZvcm0+XHJcbiAgICAgICAge09iamVjdC5rZXlzKHNpZ25JbkZvcm1TdGF0ZSkubWFwKChmaWVsZCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgY2hhbmdlPXsoZXZlbnQpID0+IG9uSW5wdXRDaGFuZ2VIYW5kbGVyKGV2ZW50LCBmaWVsZCl9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3NpZ25JbkZvcm1TdGF0ZVtmaWVsZF0udmFsdWV9XHJcbiAgICAgICAgICAgICAgaW5WYWxpZD17IXNpZ25JbkZvcm1TdGF0ZVtmaWVsZF0udmFsaWR9XHJcbiAgICAgICAgICAgICAga2V5PXtmaWVsZH1cclxuICAgICAgICAgICAgICBlbGVDb25maWc9e3NpZ25JbkZvcm1TdGF0ZVtmaWVsZF0uZWxlQ29uZmlnfVxyXG4gICAgICAgICAgICAgIGVsZVR5cGU9e3NpZ25JbkZvcm1TdGF0ZVtmaWVsZF0uZWxlVHlwZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgICAgPEVudHJ5QnV0dG9uIHNpZ249eyhldmVudCkgPT4gb25TaWduSW5IYW5kbGVyKGV2ZW50KX0+XHJcbiAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICBTaWduIElue1wiIFwifVxyXG4gICAgICAgIDwvRW50cnlCdXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25JbjtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdERlc3RydWN0dXJpbmdFbXB0eShvYmopIHtcbiAgaWYgKG9iaiA9PSBudWxsKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGRlc3RydWN0dXJlIHVuZGVmaW5lZFwiKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9