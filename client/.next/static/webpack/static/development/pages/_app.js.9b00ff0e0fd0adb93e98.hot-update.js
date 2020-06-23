webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./hooks/store/reducers/auth.js":
/*!**************************************!*\
  !*** ./hooks/store/reducers/auth.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store */ "./hooks/store/store.js");
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/actionTypes */ "./hooks/store/actions/actionTypes.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var initialState = {
  auth: {
    isAuth: false,
    data: {},
    errors: null,
    loading: false
  }
};

var configureAuth = function configureAuth() {
  var _userActions;

  var userActions = (_userActions = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_userActions, _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["AUTH_START"], function (state) {
    return _objectSpread(_objectSpread({}, state), {}, {
      auth: _objectSpread(_objectSpread({}, state.auth), {}, {
        loading: true
      })
    });
  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_userActions, _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["AUTH_RESPONSE"], function (state, data) {
    console.log("AUTH_RESPONSE", data);
    return _objectSpread(_objectSpread({}, state), {}, {
      auth: _objectSpread(_objectSpread({}, state.auth), {}, {
        data: _objectSpread(_objectSpread({}, state.auth.data), data),
        isAuth: true,
        loading: false
      })
    });
  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_userActions, _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["AUTH_ERROR"], function (state, errors) {
    console.log(errors);
    return _objectSpread(_objectSpread({}, state), {}, {
      auth: _objectSpread(_objectSpread({}, state.auth), {}, {
        errors: errors,
        isAuth: false,
        loading: false
      })
    });
  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_userActions, _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["AUTH_LOGOUT"], function (state) {
    return _objectSpread(_objectSpread({}, state), {}, {
      auth: _objectSpread(_objectSpread({}, state.auth), {}, {
        data: {
          profile: {
            imageUrl: "",
            displayName: ""
          }
        },
        errors: null,
        isAuth: false,
        loading: false
      })
    });
  }), _userActions);
  Object(_store__WEBPACK_IMPORTED_MODULE_1__["initStore"])(initialState, userActions);
};

/* harmony default export */ __webpack_exports__["default"] = (configureAuth);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob29rcy9zdG9yZS9yZWR1Y2Vycy9hdXRoLmpzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImF1dGgiLCJpc0F1dGgiLCJkYXRhIiwiZXJyb3JzIiwibG9hZGluZyIsImNvbmZpZ3VyZUF1dGgiLCJ1c2VyQWN0aW9ucyIsImFjdGlvblR5cGVzIiwic3RhdGUiLCJjb25zb2xlIiwibG9nIiwicHJvZmlsZSIsImltYWdlVXJsIiwiZGlzcGxheU5hbWUiLCJpbml0U3RvcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBLElBQU1BLFlBQVksR0FBRztBQUNqQkMsTUFBSSxFQUFFO0FBQ0ZDLFVBQU0sRUFBRSxLQUROO0FBRUZDLFFBQUksRUFBRSxFQUZKO0FBR0ZDLFVBQU0sRUFBRSxJQUhOO0FBSUZDLFdBQU8sRUFBRTtBQUpQO0FBRFcsQ0FBckI7O0FBU0EsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQUE7O0FBQ3hCLE1BQU1DLFdBQVcsK0hBQ1pDLCtEQURZLEVBQ2EsVUFBQ0MsS0FBRCxFQUFXO0FBQ2pDLDJDQUFZQSxLQUFaO0FBQW1CUixVQUFJLGtDQUFNUSxLQUFLLENBQUNSLElBQVo7QUFBa0JJLGVBQU8sRUFBRTtBQUEzQjtBQUF2QjtBQUNILEdBSFksMkdBSVpHLGtFQUpZLEVBSWdCLFVBQUNDLEtBQUQsRUFBUU4sSUFBUixFQUFpQjtBQUMxQ08sV0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWixFQUE2QlIsSUFBN0I7QUFDQSwyQ0FBWU0sS0FBWjtBQUFtQlIsVUFBSSxrQ0FBT1EsS0FBSyxDQUFDUixJQUFiO0FBQW1CRSxZQUFJLGtDQUFPTSxLQUFLLENBQUNSLElBQU4sQ0FBV0UsSUFBbEIsR0FBMkJBLElBQTNCLENBQXZCO0FBQTBERCxjQUFNLEVBQUUsSUFBbEU7QUFBd0VHLGVBQU8sRUFBRTtBQUFqRjtBQUF2QjtBQUNILEdBUFksMkdBUVpHLCtEQVJZLEVBUWEsVUFBQ0MsS0FBRCxFQUFRTCxNQUFSLEVBQW1CO0FBQ3pDTSxXQUFPLENBQUNDLEdBQVIsQ0FBWVAsTUFBWjtBQUNBLDJDQUFZSyxLQUFaO0FBQW1CUixVQUFJLGtDQUFPUSxLQUFLLENBQUNSLElBQWI7QUFBbUJHLGNBQU0sRUFBRUEsTUFBM0I7QUFBbUNGLGNBQU0sRUFBRSxLQUEzQztBQUFrREcsZUFBTyxFQUFFO0FBQTNEO0FBQXZCO0FBQ0gsR0FYWSwyR0FZWkcsZ0VBWlksRUFZYyxVQUFDQyxLQUFELEVBQVc7QUFDbEMsMkNBQVlBLEtBQVo7QUFBbUJSLFVBQUksa0NBQU9RLEtBQUssQ0FBQ1IsSUFBYjtBQUFtQkUsWUFBSSxFQUFDO0FBQUNTLGlCQUFPLEVBQUU7QUFBQ0Msb0JBQVEsRUFBRSxFQUFYO0FBQWVDLHVCQUFXLEVBQUU7QUFBNUI7QUFBVixTQUF4QjtBQUFvRVYsY0FBTSxFQUFFLElBQTVFO0FBQWtGRixjQUFNLEVBQUUsS0FBMUY7QUFBaUdHLGVBQU8sRUFBRTtBQUExRztBQUF2QjtBQUNILEdBZFksZ0JBQWpCO0FBaUJBVSwwREFBUyxDQUFDZixZQUFELEVBQWVPLFdBQWYsQ0FBVDtBQUNILENBbkJEOztBQXFCZUQsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuOWIwMGZmMGUwZmQwYWRiOTNlOTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBpbml0U3RvcmUgfSBmcm9tIFwiLi4vc3RvcmVcIjtcclxuaW1wb3J0ICogYXMgYWN0aW9uVHlwZXMgZnJvbSBcIi4uL2FjdGlvbnMvYWN0aW9uVHlwZXNcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGF1dGg6IHtcclxuICAgICAgICBpc0F1dGg6IGZhbHNlLFxyXG4gICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgIGVycm9yczogbnVsbCxcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBjb25maWd1cmVBdXRoID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdXNlckFjdGlvbnMgPSB7XHJcbiAgICAgICAgW2FjdGlvblR5cGVzLkFVVEhfU1RBUlRdOiAoc3RhdGUpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGF1dGg6IHsuLi5zdGF0ZS5hdXRoLCBsb2FkaW5nOiB0cnVlIH19O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW2FjdGlvblR5cGVzLkFVVEhfUkVTUE9OU0VdOiAoc3RhdGUsIGRhdGEpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJBVVRIX1JFU1BPTlNFXCIsIGRhdGEpO1xyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgYXV0aDogeyAuLi5zdGF0ZS5hdXRoLCBkYXRhOiB7IC4uLnN0YXRlLmF1dGguZGF0YSwgLi4uZGF0YSB9LCBpc0F1dGg6IHRydWUsIGxvYWRpbmc6IGZhbHNlIH19XHJcbiAgICAgICAgfSxcclxuICAgICAgICBbYWN0aW9uVHlwZXMuQVVUSF9FUlJPUl06IChzdGF0ZSwgZXJyb3JzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9ycylcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGF1dGg6IHsgLi4uc3RhdGUuYXV0aCwgZXJyb3JzOiBlcnJvcnMsIGlzQXV0aDogZmFsc2UsIGxvYWRpbmc6IGZhbHNlfX1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFthY3Rpb25UeXBlcy5BVVRIX0xPR09VVF06IChzdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgYXV0aDogeyAuLi5zdGF0ZS5hdXRoLCBkYXRhOntwcm9maWxlOiB7aW1hZ2VVcmw6IFwiXCIsIGRpc3BsYXlOYW1lOiBcIlwifX0sIGVycm9yczogbnVsbCwgaXNBdXRoOiBmYWxzZSwgbG9hZGluZzogZmFsc2V9IH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFN0b3JlKGluaXRpYWxTdGF0ZSwgdXNlckFjdGlvbnMpOyAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29uZmlndXJlQXV0aDsiXSwic291cmNlUm9vdCI6IiJ9