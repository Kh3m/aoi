webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./hooks/store/actions/auth.js":
/*!*************************************!*\
  !*** ./hooks/store/actions/auth.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actionTypes */ "./hooks/store/actions/actionTypes.js");
/* harmony import */ var _lib_http_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/http/request */ "./lib/http/request.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store */ "./hooks/store/store.js");



var _s = $RefreshSig$();






var expirationTimeInSecs = function expirationTimeInSecs() {
  var expirationDate = new Date(localStorage.getItem("expirationDate"));
  return (expirationDate.getTime() - new Date().getTime()) / 1000;
  ;
};

var useAuthActions = function useAuthActions() {
  _s();

  var dispatch = Object(_store__WEBPACK_IMPORTED_MODULE_5__["useStore"])()[1]; // auth start activate spinner

  var authStart = function authStart() {
    dispatch(_actionTypes__WEBPACK_IMPORTED_MODULE_2__["AUTH_START"]);
  }; // auth logout clear authentication datas


  var authLogout = function authLogout() {
    localStorage.removeItem("localId");
    localStorage.removeItem("tokenId");
    localStorage.removeItem("expirationDate");
    dispatch(_actionTypes__WEBPACK_IMPORTED_MODULE_2__["AUTH_LOGOUT"]);
  }; // auth error - triggers when there is error with login


  var authError = function authError(errors) {
    dispatch(_actionTypes__WEBPACK_IMPORTED_MODULE_2__["AUTH_ERROR"], errors);
  }; // auth response helper


  var authResponseSync = function authResponseSync(data) {
    dispatch(_actionTypes__WEBPACK_IMPORTED_MODULE_2__["AUTH_RESPONSE"], data);
  }; // helper function fr auth response


  var authRes = function authRes(user) {
    var expirationDate = new Date(new Date().getTime() + user.expiresIn * 1000); // store user's Id and token for authomatic login upon referesh

    localStorage.setItem("localId", user.localId);
    localStorage.setItem("tokenId", user.tokenId);
    localStorage.setItem("expirationDate", expirationDate);
    authResponseSync(user);
  }; // auth logout after expiration time


  var authLogoutAfterExpirationTime = function authLogoutAfterExpirationTime(expirationTime) {
    // convert to milliseconds
    var expirationTimeMili = expirationTime * 1000;
    setTimeout(function () {
      dispatch(authLogout());
    }, expirationTimeMili);
  };

  var authLoginAuto = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var token, expirationDate, graphqlQuery, res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              authStart();
              token = localStorage.getItem("tokenId");

              if (token) {
                _context.next = 7;
                break;
              }

              authLogout();
              next_router__WEBPACK_IMPORTED_MODULE_4___default.a.replace("/");
              _context.next = 26;
              break;

            case 7:
              expirationDate = new Date(localStorage.getItem("expirationDate"));

              if (!(expirationDate <= new Date())) {
                _context.next = 13;
                break;
              }

              authLogout();
              next_router__WEBPACK_IMPORTED_MODULE_4___default.a.replace("/");
              _context.next = 26;
              break;

            case 13:
              authLogoutAfterExpirationTime(expirationTimeInSecs());
              graphqlQuery = {
                query: "\n                        query getUser($localId: ID!){\n                            getUser(localId:$localId)\n                            {\n                                localId\n                                email\n                                fullName\n                            }\n                        },\n                    ",
                variables: {
                  localId: localStorage.getItem("localId")
                }
              };
              _context.prev = 15;
              _context.next = 18;
              return Object(_lib_http_request__WEBPACK_IMPORTED_MODULE_3__["request"])(graphqlQuery);

            case 18:
              res = _context.sent;

              if (res.errors) {
                authError(res.errors.map(function (e) {
                  return e.message;
                }));
              }

              if (res.data) {
                authResponseSync(res.data.getUser);
              }

              _context.next = 26;
              break;

            case 23:
              _context.prev = 23;
              _context.t0 = _context["catch"](15);
              authError(_context.t0);

            case 26:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[15, 23]]);
    }));

    return function authLoginAuto() {
      return _ref.apply(this, arguments);
    };
  }(); // auth response - get the user's data


  var authResponse = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(authData, isLogin) {
      var graphqlQuery, res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              // start loading
              authStart();
              graphqlQuery = {
                query: "\n                mutation LoginUser($email: String!, $password: String!){\n                    loginUser(email:$email, password:$password)\n                    {\n                        localId\n                        email\n                        tokenId\n                        expiresIn\n                        fullName\n                    }\n                },\n            ",
                variables: {
                  email: authData.email,
                  password: authData.password
                }
              };

              if (!isLogin) {
                graphqlQuery = {
                  query: "\n                    mutation CreateUser(\n                        $email: String!, \n                        $fullName: String!, \n                        $password: String!) {\n                        createUser(userInput: {email:$email, fullName:$fullName, password:$password })\n                        {\n                            localId\n                            email\n                            tokenId\n                            expiresIn\n                            fullName\n                        }\n                    }\n                ",
                  variables: {
                    email: authData.email,
                    fullName: authData.fullName,
                    password: authData.password
                  }
                };
              }

              _context2.prev = 3;
              _context2.next = 6;
              return Object(_lib_http_request__WEBPACK_IMPORTED_MODULE_3__["request"])(graphqlQuery);

            case 6:
              res = _context2.sent;

              if (res.errors) {
                authError(res.errors.map(function (e) {
                  return e.message;
                }));
              }

              if (res.data) {
                if (isLogin) {
                  authRes(res.data.loginUser);
                } else {
                  authRes(res.data.createUser);
                }

                next_router__WEBPACK_IMPORTED_MODULE_4___default.a.replace("/");
              }

              _context2.next = 14;
              break;

            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](3);
              authError(_context2.t0);

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[3, 11]]);
    }));

    return function authResponse(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  return {
    authStart: authStart,
    authLogout: authLogout,
    authResponse: authResponse,
    authLoginAuto: authLoginAuto
  };
};

_s(useAuthActions, "tRpAAnpj2/w/nb/IphdrVKKBg0Y=", false, function () {
  return [_store__WEBPACK_IMPORTED_MODULE_5__["useStore"]];
});

/* harmony default export */ __webpack_exports__["default"] = (useAuthActions);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob29rcy9zdG9yZS9hY3Rpb25zL2F1dGguanMiXSwibmFtZXMiOlsiZXhwaXJhdGlvblRpbWVJblNlY3MiLCJleHBpcmF0aW9uRGF0ZSIsIkRhdGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZ2V0VGltZSIsInVzZUF1dGhBY3Rpb25zIiwiZGlzcGF0Y2giLCJ1c2VTdG9yZSIsImF1dGhTdGFydCIsImFjdGlvblR5cGVzIiwiYXV0aExvZ291dCIsInJlbW92ZUl0ZW0iLCJhdXRoRXJyb3IiLCJlcnJvcnMiLCJhdXRoUmVzcG9uc2VTeW5jIiwiZGF0YSIsImF1dGhSZXMiLCJ1c2VyIiwiZXhwaXJlc0luIiwic2V0SXRlbSIsImxvY2FsSWQiLCJ0b2tlbklkIiwiYXV0aExvZ291dEFmdGVyRXhwaXJhdGlvblRpbWUiLCJleHBpcmF0aW9uVGltZSIsImV4cGlyYXRpb25UaW1lTWlsaSIsInNldFRpbWVvdXQiLCJhdXRoTG9naW5BdXRvIiwidG9rZW4iLCJSb3V0ZXIiLCJyZXBsYWNlIiwiZ3JhcGhxbFF1ZXJ5IiwicXVlcnkiLCJ2YXJpYWJsZXMiLCJyZXF1ZXN0IiwicmVzIiwibWFwIiwiZSIsIm1lc3NhZ2UiLCJnZXRVc2VyIiwiYXV0aFJlc3BvbnNlIiwiYXV0aERhdGEiLCJpc0xvZ2luIiwiZW1haWwiLCJwYXNzd29yZCIsImZ1bGxOYW1lIiwibG9naW5Vc2VyIiwiY3JlYXRlVXNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixHQUFNO0FBQy9CLE1BQU1DLGNBQWMsR0FBRyxJQUFJQyxJQUFKLENBQVNDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixnQkFBckIsQ0FBVCxDQUF2QjtBQUNBLFNBQU8sQ0FBQ0gsY0FBYyxDQUFDSSxPQUFmLEtBQTJCLElBQUlILElBQUosR0FBV0csT0FBWCxFQUE1QixJ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QUF6Q2dCO0FBQUE7QUFBQSxxQkEyQ0tWLGlFQUFPLENBQUNILFlBQUQsQ0EzQ1o7O0FBQUE7QUEyQ1BJLGlCQTNDTzs7QUE0Q2Isa0JBQUdBLEdBQUcsQ0FBQ3JCLE1BQVAsRUFBZTtBQUNYRCx5QkFBUyxDQUFDc0IsR0FBRyxDQUFDckIsTUFBSixDQUFXc0IsR0FBWCxDQUFlLFVBQUFDLENBQUM7QUFBQSx5QkFBSUEsQ0FBQyxDQUFDQyxPQUFOO0FBQUEsaUJBQWhCLENBQUQsQ0FBVDtBQUNIOztBQUNELGtCQUFHSCxHQUFHLENBQUNuQixJQUFQLEVBQWE7QUFDVCxvQkFBRzBCLE9BQUgsRUFBWTtBQUNSekIseUJBQU8sQ0FBRWtCLEdBQUcsQ0FBQ25CLElBQUosQ0FBUzhCLFNBQVgsQ0FBUDtBQUNILGlCQUZELE1BRU87QUFDSDdCLHlCQUFPLENBQUVrQixHQUFHLENBQUNuQixJQUFKLENBQVMrQixVQUFYLENBQVA7QUFDSDs7QUFDRGxCLGtFQUFNLENBQUNDLE9BQVAsQ0FBZSxHQUFmO0FBQ0g7O0FBdERZO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBd0RiakIsdUJBQVMsY0FBVDs7QUF4RGE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWjJCLFlBQVk7QUFBQTtBQUFBO0FBQUEsS0FBbEI7O0FBNERBLFNBQU87QUFDSC9CLGFBQVMsRUFBVEEsU0FERztBQUVIRSxjQUFVLEVBQVZBLFVBRkc7QUFHSDZCLGdCQUFZLEVBQVpBLFlBSEc7QUFJSGIsaUJBQWEsRUFBYkE7QUFKRyxHQUFQO0FBTUgsQ0ExSkQ7O0dBQU1yQixjO1VBQ2VFLCtDOzs7QUEwSk5GLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLjYyYTFiYzIwNDE5MzBmZDM1MTgyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0ICogYXMgYWN0aW9uVHlwZXMgZnJvbSBcIi4vYWN0aW9uVHlwZXNcIjtcclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gXCIuLi8uLi8uLi9saWIvaHR0cC9yZXF1ZXN0XCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZVN0b3JlIH0gZnJvbSBcIi4uL3N0b3JlXCI7XHJcblxyXG5jb25zdCBleHBpcmF0aW9uVGltZUluU2VjcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGV4cGlyYXRpb25EYXRlID0gbmV3IERhdGUobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJleHBpcmF0aW9uRGF0ZVwiKSlcclxuICAgIHJldHVybiAoZXhwaXJhdGlvbkRhdGUuZ2V0VGltZSgpIC0gbmV3IERhdGUoKS5nZXRUaW1lKCkpIC8gMTAwMDs7ICBcclxufVxyXG5cclxuY29uc3QgdXNlQXV0aEFjdGlvbnMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZVN0b3JlKClbMV07XHJcblxyXG4gICAgLy8gYXV0aCBzdGFydCBhY3RpdmF0ZSBzcGlubmVyXHJcbiAgICBjb25zdCBhdXRoU3RhcnQgPSAoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goYWN0aW9uVHlwZXMuQVVUSF9TVEFSVCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYXV0aCBsb2dvdXQgY2xlYXIgYXV0aGVudGljYXRpb24gZGF0YXNcclxuICAgIGNvbnN0IGF1dGhMb2dvdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJsb2NhbElkXCIpXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ0b2tlbklkXCIpICAgICAgICBcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImV4cGlyYXRpb25EYXRlXCIpOyBcclxuICAgICAgICBkaXNwYXRjaChhY3Rpb25UeXBlcy5BVVRIX0xPR09VVCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYXV0aCBlcnJvciAtIHRyaWdnZXJzIHdoZW4gdGhlcmUgaXMgZXJyb3Igd2l0aCBsb2dpblxyXG4gICAgY29uc3QgYXV0aEVycm9yID0gKGVycm9ycykgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKGFjdGlvblR5cGVzLkFVVEhfRVJST1IsIGVycm9ycyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYXV0aCByZXNwb25zZSBoZWxwZXJcclxuICAgIGNvbnN0IGF1dGhSZXNwb25zZVN5bmMgPSAoZGF0YSkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKGFjdGlvblR5cGVzLkFVVEhfUkVTUE9OU0UsIGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGhlbHBlciBmdW5jdGlvbiBmciBhdXRoIHJlc3BvbnNlXHJcbiAgICBjb25zdCBhdXRoUmVzID0gKCB1c2VyICkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGV4cGlyYXRpb25EYXRlID0gbmV3IERhdGUobmV3IERhdGUoKS5nZXRUaW1lKCkgKyB1c2VyLmV4cGlyZXNJbiAqIDEwMDApO1xyXG4gICAgICAgIC8vIHN0b3JlIHVzZXIncyBJZCBhbmQgdG9rZW4gZm9yIGF1dGhvbWF0aWMgbG9naW4gdXBvbiByZWZlcmVzaFxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxJZFwiLCB1c2VyLmxvY2FsSWQpXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlbklkXCIsIHVzZXIudG9rZW5JZCkgICAgICAgIFxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZXhwaXJhdGlvbkRhdGVcIiwgZXhwaXJhdGlvbkRhdGUpOyBcclxuICAgICAgICBhdXRoUmVzcG9uc2VTeW5jKHVzZXIpOyAgICBcclxuICAgIH1cclxuXHJcbiAgICAvLyBhdXRoIGxvZ291dCBhZnRlciBleHBpcmF0aW9uIHRpbWVcclxuICAgIGNvbnN0IGF1dGhMb2dvdXRBZnRlckV4cGlyYXRpb25UaW1lID0gKGV4cGlyYXRpb25UaW1lKSA9PiB7XHJcbiAgICAgICAgLy8gY29udmVydCB0byBtaWxsaXNlY29uZHNcclxuICAgICAgICBjb25zdCBleHBpcmF0aW9uVGltZU1pbGkgPSBleHBpcmF0aW9uVGltZSAqIDEwMDBcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goYXV0aExvZ291dCgpKVxyXG4gICAgICAgIH0sIGV4cGlyYXRpb25UaW1lTWlsaSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYXV0aExvZ2luQXV0byA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBhdXRoU3RhcnQoKTtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5JZFwiKTtcclxuICAgICAgICBpZighdG9rZW4pIHtcclxuICAgICAgICAgICAgYXV0aExvZ291dCgpO1xyXG4gICAgICAgICAgICBSb3V0ZXIucmVwbGFjZShcIi9cIilcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBleHBpcmF0aW9uRGF0ZSA9IG5ldyBEYXRlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZXhwaXJhdGlvbkRhdGVcIikpO1xyXG4gICAgICAgICAgICBpZihleHBpcmF0aW9uRGF0ZSA8PSBuZXcgRGF0ZSgpKSB7XHJcbiAgICAgICAgICAgICAgICBhdXRoTG9nb3V0KCk7XHJcbiAgICAgICAgICAgICAgICBSb3V0ZXIucmVwbGFjZShcIi9cIilcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGF1dGhMb2dvdXRBZnRlckV4cGlyYXRpb25UaW1lKGV4cGlyYXRpb25UaW1lSW5TZWNzKCkpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGdyYXBocWxRdWVyeSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeSBnZXRVc2VyKCRsb2NhbElkOiBJRCEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0VXNlcihsb2NhbElkOiRsb2NhbElkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsSWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgYCxcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHsgbG9jYWxJZDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsb2NhbElkXCIpIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJlcXVlc3QoZ3JhcGhxbFF1ZXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICBpZihyZXMuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhFcnJvcihyZXMuZXJyb3JzLm1hcChlID0+IGUubWVzc2FnZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZihyZXMuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRoUmVzcG9uc2VTeW5jKCByZXMuZGF0YS5nZXRVc2VyICk7IFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gY2F0Y2goZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aEVycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYXV0aCByZXNwb25zZSAtIGdldCB0aGUgdXNlcidzIGRhdGFcclxuICAgIGNvbnN0IGF1dGhSZXNwb25zZSA9IGFzeW5jIChhdXRoRGF0YSwgaXNMb2dpbikgPT4ge1xyXG4gICAgICAgIC8vIHN0YXJ0IGxvYWRpbmdcclxuICAgICAgICBhdXRoU3RhcnQoKTtcclxuICAgICAgICBsZXQgZ3JhcGhxbFF1ZXJ5ID0ge1xyXG4gICAgICAgICAgICBxdWVyeTogYFxyXG4gICAgICAgICAgICAgICAgbXV0YXRpb24gTG9naW5Vc2VyKCRlbWFpbDogU3RyaW5nISwgJHBhc3N3b3JkOiBTdHJpbmchKXtcclxuICAgICAgICAgICAgICAgICAgICBsb2dpblVzZXIoZW1haWw6JGVtYWlsLCBwYXNzd29yZDokcGFzc3dvcmQpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbElkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuSWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwaXJlc0luXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYCxcclxuICAgICAgICAgICAgdmFyaWFibGVzOiB7IGVtYWlsOiBhdXRoRGF0YS5lbWFpbCwgcGFzc3dvcmQ6IGF1dGhEYXRhLnBhc3N3b3JkIH1cclxuICAgICAgICB9IFxyXG4gICAgICAgIGlmKCFpc0xvZ2luKSB7XHJcbiAgICAgICAgICAgIGdyYXBocWxRdWVyeSA9IHtcclxuICAgICAgICAgICAgICAgIHF1ZXJ5OiBgXHJcbiAgICAgICAgICAgICAgICAgICAgbXV0YXRpb24gQ3JlYXRlVXNlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGVtYWlsOiBTdHJpbmchLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGZ1bGxOYW1lOiBTdHJpbmchLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHBhc3N3b3JkOiBTdHJpbmchKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZVVzZXIodXNlcklucHV0OiB7ZW1haWw6JGVtYWlsLCBmdWxsTmFtZTokZnVsbE5hbWUsIHBhc3N3b3JkOiRwYXNzd29yZCB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbElkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW5JZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwaXJlc0luXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsTmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYCxcclxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogeyBcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogYXV0aERhdGEuZW1haWwsIFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxOYW1lOiBhdXRoRGF0YS5mdWxsTmFtZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IGF1dGhEYXRhLnBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgfSAgXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgcmVxdWVzdChncmFwaHFsUXVlcnkpO1xyXG4gICAgICAgICAgICBpZihyZXMuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICBhdXRoRXJyb3IocmVzLmVycm9ycy5tYXAoZSA9PiBlLm1lc3NhZ2UpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihyZXMuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgaWYoaXNMb2dpbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhSZXMoIHJlcy5kYXRhLmxvZ2luVXNlciApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhdXRoUmVzKCByZXMuZGF0YS5jcmVhdGVVc2VyICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBSb3V0ZXIucmVwbGFjZShcIi9cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoKGVycikge1xyXG4gICAgICAgICAgICBhdXRoRXJyb3IoZXJyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBhdXRoU3RhcnQsXHJcbiAgICAgICAgYXV0aExvZ291dCxcclxuICAgICAgICBhdXRoUmVzcG9uc2UsXHJcbiAgICAgICAgYXV0aExvZ2luQXV0b1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHVzZUF1dGhBY3Rpb25zOyJdLCJzb3VyY2VSb290IjoiIn0=