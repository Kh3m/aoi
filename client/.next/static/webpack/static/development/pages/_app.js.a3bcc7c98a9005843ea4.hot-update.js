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
                console.log(authData);
                graphqlQuery = {
                  query: "\n                    mutation CreateUser(\n                        $email: String!, \n                        $fullName: String!, \n                        $password: String!) {\n                        createUser(userInput: {email:$email, fullName:$fullName, password:$password })\n                        {\n                            localId\n                            email\n                            tokenId\n                            expiresIn\n                            fullName\n                        }\n                    }\n                ",
                  variables: {
                    email: authData.email,
                    fullName: authData.fullname,
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

                next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob29rcy9zdG9yZS9hY3Rpb25zL2F1dGguanMiXSwibmFtZXMiOlsiZXhwaXJhdGlvblRpbWVJblNlY3MiLCJleHBpcmF0aW9uRGF0ZSIsIkRhdGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZ2V0VGltZSIsInVzZUF1dGhBY3Rpb25zIiwiZGlzcGF0Y2giLCJ1c2VTdG9yZSIsImF1dGhTdGFydCIsImFjdGlvblR5cGVzIiwiYXV0aExvZ291dCIsInJlbW92ZUl0ZW0iLCJhdXRoRXJyb3IiLCJlcnJvcnMiLCJhdXRoUmVzcG9uc2VTeW5jIiwiZGF0YSIsImF1dGhSZXMiLCJ1c2VyIiwiZXhwaXJlc0luIiwic2V0SXRlbSIsImxvY2FsSWQiLCJ0b2tlbklkIiwiYXV0aExvZ291dEFmdGVyRXhwaXJhdGlvblRpbWUiLCJleHBpcmF0aW9uVGltZSIsImV4cGlyYXRpb25UaW1lTWlsaSIsInNldFRpbWVvdXQiLCJhdXRoTG9naW5BdXRvIiwidG9rZW4iLCJSb3V0ZXIiLCJyZXBsYWNlIiwiZ3JhcGhxbFF1ZXJ5IiwicXVlcnkiLCJ2YXJpYWJsZXMiLCJyZXF1ZXN0IiwicmVzIiwibWFwIiwiZSIsIm1lc3NhZ2UiLCJnZXRVc2VyIiwiYXV0aFJlc3BvbnNlIiwiYXV0aERhdGEiLCJpc0xvZ2luIiwiZW1haWwiLCJwYXNzd29yZCIsImNvbnNvbGUiLCJsb2ciLCJmdWxsTmFtZSIsImZ1bGxuYW1lIiwibG9naW5Vc2VyIiwiY3JlYXRlVXNlciIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsR0FBTTtBQUMvQixNQUFNQyxjQUFjLEdBQUcsSUFBSUMsSUFBSixDQUFTQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsZ0JBQXJCLENBQVQsQ0FBdkI7QUFDQSxTQUFPLENBQUNILGNBQWMsQ0FBQ0ksT0FBZixL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QUFRLENBQUNPLFFBRlo7QUFHUEosNEJBQVEsRUFBRUgsUUFBUSxDQUFDRztBQUhaO0FBaEJBLGlCQUFmO0FBc0JIOztBQTFDZ0I7QUFBQTtBQUFBLHFCQTRDS1YsaUVBQU8sQ0FBQ0gsWUFBRCxDQTVDWjs7QUFBQTtBQTRDUEksaUJBNUNPOztBQTZDYixrQkFBR0EsR0FBRyxDQUFDckIsTUFBUCxFQUFlO0FBQ1hELHlCQUFTLENBQUNzQixHQUFHLENBQUNyQixNQUFKLENBQVdzQixHQUFYLENBQWUsVUFBQUMsQ0FBQztBQUFBLHlCQUFJQSxDQUFDLENBQUNDLE9BQU47QUFBQSxpQkFBaEIsQ0FBRCxDQUFUO0FBQ0g7O0FBQ0Qsa0JBQUdILEdBQUcsQ0FBQ25CLElBQVAsRUFBYTtBQUNULG9CQUFHMEIsT0FBSCxFQUFZO0FBQ1J6Qix5QkFBTyxDQUFFa0IsR0FBRyxDQUFDbkIsSUFBSixDQUFTaUMsU0FBWCxDQUFQO0FBQ0gsaUJBRkQsTUFFTztBQUNIaEMseUJBQU8sQ0FBRWtCLEdBQUcsQ0FBQ25CLElBQUosQ0FBU2tDLFVBQVgsQ0FBUDtBQUNIOztBQUNEckIsa0VBQU0sQ0FBQ3NCLElBQVAsQ0FBWSxHQUFaO0FBQ0g7O0FBdkRZO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBeURidEMsdUJBQVMsY0FBVDs7QUF6RGE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWjJCLFlBQVk7QUFBQTtBQUFBO0FBQUEsS0FBbEI7O0FBNkRBLFNBQU87QUFDSC9CLGFBQVMsRUFBVEEsU0FERztBQUVIRSxjQUFVLEVBQVZBLFVBRkc7QUFHSDZCLGdCQUFZLEVBQVpBLFlBSEc7QUFJSGIsaUJBQWEsRUFBYkE7QUFKRyxHQUFQO0FBTUgsQ0EzSkQ7O0dBQU1yQixjO1VBQ2VFLCtDOzs7QUEySk5GLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLmEzYmNjN2M5OGE5MDA1ODQzZWE0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0ICogYXMgYWN0aW9uVHlwZXMgZnJvbSBcIi4vYWN0aW9uVHlwZXNcIjtcclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gXCIuLi8uLi8uLi9saWIvaHR0cC9yZXF1ZXN0XCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZVN0b3JlIH0gZnJvbSBcIi4uL3N0b3JlXCI7XHJcblxyXG5jb25zdCBleHBpcmF0aW9uVGltZUluU2VjcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGV4cGlyYXRpb25EYXRlID0gbmV3IERhdGUobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJleHBpcmF0aW9uRGF0ZVwiKSlcclxuICAgIHJldHVybiAoZXhwaXJhdGlvbkRhdGUuZ2V0VGltZSgpIC0gbmV3IERhdGUoKS5nZXRUaW1lKCkpIC8gMTAwMDs7ICBcclxufVxyXG5cclxuY29uc3QgdXNlQXV0aEFjdGlvbnMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZVN0b3JlKClbMV07XHJcblxyXG4gICAgLy8gYXV0aCBzdGFydCBhY3RpdmF0ZSBzcGlubmVyXHJcbiAgICBjb25zdCBhdXRoU3RhcnQgPSAoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goYWN0aW9uVHlwZXMuQVVUSF9TVEFSVCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYXV0aCBsb2dvdXQgY2xlYXIgYXV0aGVudGljYXRpb24gZGF0YXNcclxuICAgIGNvbnN0IGF1dGhMb2dvdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJsb2NhbElkXCIpXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ0b2tlbklkXCIpICAgICAgICBcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImV4cGlyYXRpb25EYXRlXCIpOyBcclxuICAgICAgICBkaXNwYXRjaChhY3Rpb25UeXBlcy5BVVRIX0xPR09VVCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYXV0aCBlcnJvciAtIHRyaWdnZXJzIHdoZW4gdGhlcmUgaXMgZXJyb3Igd2l0aCBsb2dpblxyXG4gICAgY29uc3QgYXV0aEVycm9yID0gKGVycm9ycykgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKGFjdGlvblR5cGVzLkFVVEhfRVJST1IsIGVycm9ycyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYXV0aCByZXNwb25zZSBoZWxwZXJcclxuICAgIGNvbnN0IGF1dGhSZXNwb25zZVN5bmMgPSAoZGF0YSkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKGFjdGlvblR5cGVzLkFVVEhfUkVTUE9OU0UsIGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGhlbHBlciBmdW5jdGlvbiBmciBhdXRoIHJlc3BvbnNlXHJcbiAgICBjb25zdCBhdXRoUmVzID0gKCB1c2VyICkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGV4cGlyYXRpb25EYXRlID0gbmV3IERhdGUobmV3IERhdGUoKS5nZXRUaW1lKCkgKyB1c2VyLmV4cGlyZXNJbiAqIDEwMDApO1xyXG4gICAgICAgIC8vIHN0b3JlIHVzZXIncyBJZCBhbmQgdG9rZW4gZm9yIGF1dGhvbWF0aWMgbG9naW4gdXBvbiByZWZlcmVzaFxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxJZFwiLCB1c2VyLmxvY2FsSWQpXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlbklkXCIsIHVzZXIudG9rZW5JZCkgICAgICAgIFxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZXhwaXJhdGlvbkRhdGVcIiwgZXhwaXJhdGlvbkRhdGUpOyBcclxuICAgICAgICBhdXRoUmVzcG9uc2VTeW5jKHVzZXIpOyAgICBcclxuICAgIH1cclxuXHJcbiAgICAvLyBhdXRoIGxvZ291dCBhZnRlciBleHBpcmF0aW9uIHRpbWVcclxuICAgIGNvbnN0IGF1dGhMb2dvdXRBZnRlckV4cGlyYXRpb25UaW1lID0gKGV4cGlyYXRpb25UaW1lKSA9PiB7XHJcbiAgICAgICAgLy8gY29udmVydCB0byBtaWxsaXNlY29uZHNcclxuICAgICAgICBjb25zdCBleHBpcmF0aW9uVGltZU1pbGkgPSBleHBpcmF0aW9uVGltZSAqIDEwMDBcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goYXV0aExvZ291dCgpKVxyXG4gICAgICAgIH0sIGV4cGlyYXRpb25UaW1lTWlsaSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYXV0aExvZ2luQXV0byA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBhdXRoU3RhcnQoKTtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5JZFwiKTtcclxuICAgICAgICBpZighdG9rZW4pIHtcclxuICAgICAgICAgICAgYXV0aExvZ291dCgpO1xyXG4gICAgICAgICAgICBSb3V0ZXIucmVwbGFjZShcIi9cIilcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBleHBpcmF0aW9uRGF0ZSA9IG5ldyBEYXRlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZXhwaXJhdGlvbkRhdGVcIikpO1xyXG4gICAgICAgICAgICBpZihleHBpcmF0aW9uRGF0ZSA8PSBuZXcgRGF0ZSgpKSB7XHJcbiAgICAgICAgICAgICAgICBhdXRoTG9nb3V0KCk7XHJcbiAgICAgICAgICAgICAgICBSb3V0ZXIucmVwbGFjZShcIi9cIilcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGF1dGhMb2dvdXRBZnRlckV4cGlyYXRpb25UaW1lKGV4cGlyYXRpb25UaW1lSW5TZWNzKCkpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGdyYXBocWxRdWVyeSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeSBnZXRVc2VyKCRsb2NhbElkOiBJRCEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0VXNlcihsb2NhbElkOiRsb2NhbElkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsSWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgYCxcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHsgbG9jYWxJZDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsb2NhbElkXCIpIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJlcXVlc3QoZ3JhcGhxbFF1ZXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICBpZihyZXMuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhFcnJvcihyZXMuZXJyb3JzLm1hcChlID0+IGUubWVzc2FnZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZihyZXMuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRoUmVzcG9uc2VTeW5jKCByZXMuZGF0YS5nZXRVc2VyICk7IFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gY2F0Y2goZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aEVycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYXV0aCByZXNwb25zZSAtIGdldCB0aGUgdXNlcidzIGRhdGFcclxuICAgIGNvbnN0IGF1dGhSZXNwb25zZSA9IGFzeW5jIChhdXRoRGF0YSwgaXNMb2dpbikgPT4ge1xyXG4gICAgICAgIC8vIHN0YXJ0IGxvYWRpbmdcclxuICAgICAgICBhdXRoU3RhcnQoKTtcclxuICAgICAgICBsZXQgZ3JhcGhxbFF1ZXJ5ID0ge1xyXG4gICAgICAgICAgICBxdWVyeTogYFxyXG4gICAgICAgICAgICAgICAgbXV0YXRpb24gTG9naW5Vc2VyKCRlbWFpbDogU3RyaW5nISwgJHBhc3N3b3JkOiBTdHJpbmchKXtcclxuICAgICAgICAgICAgICAgICAgICBsb2dpblVzZXIoZW1haWw6JGVtYWlsLCBwYXNzd29yZDokcGFzc3dvcmQpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbElkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuSWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwaXJlc0luXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYCxcclxuICAgICAgICAgICAgdmFyaWFibGVzOiB7IGVtYWlsOiBhdXRoRGF0YS5lbWFpbCwgcGFzc3dvcmQ6IGF1dGhEYXRhLnBhc3N3b3JkIH1cclxuICAgICAgICB9IFxyXG4gICAgICAgIGlmKCFpc0xvZ2luKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGF1dGhEYXRhKVxyXG4gICAgICAgICAgICBncmFwaHFsUXVlcnkgPSB7XHJcbiAgICAgICAgICAgICAgICBxdWVyeTogYFxyXG4gICAgICAgICAgICAgICAgICAgIG11dGF0aW9uIENyZWF0ZVVzZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRlbWFpbDogU3RyaW5nISwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRmdWxsTmFtZTogU3RyaW5nISwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRwYXNzd29yZDogU3RyaW5nISkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVVc2VyKHVzZXJJbnB1dDoge2VtYWlsOiRlbWFpbCwgZnVsbE5hbWU6JGZ1bGxOYW1lLCBwYXNzd29yZDokcGFzc3dvcmQgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuSWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGlyZXNJblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbE5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGAsXHJcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHsgXHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IGF1dGhEYXRhLmVtYWlsLCBcclxuICAgICAgICAgICAgICAgICAgICBmdWxsTmFtZTogYXV0aERhdGEuZnVsbG5hbWUsIFxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBhdXRoRGF0YS5wYXNzd29yZFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgIH0gIFxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJlcXVlc3QoZ3JhcGhxbFF1ZXJ5KTtcclxuICAgICAgICAgICAgaWYocmVzLmVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgYXV0aEVycm9yKHJlcy5lcnJvcnMubWFwKGUgPT4gZS5tZXNzYWdlKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYocmVzLmRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGlmKGlzTG9naW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBhdXRoUmVzKCByZXMuZGF0YS5sb2dpblVzZXIgKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aFJlcyggcmVzLmRhdGEuY3JlYXRlVXNlciApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgICAgICAgYXV0aEVycm9yKGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYXV0aFN0YXJ0LFxyXG4gICAgICAgIGF1dGhMb2dvdXQsXHJcbiAgICAgICAgYXV0aFJlc3BvbnNlLFxyXG4gICAgICAgIGF1dGhMb2dpbkF1dG9cclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCB1c2VBdXRoQWN0aW9uczsiXSwic291cmNlUm9vdCI6IiJ9