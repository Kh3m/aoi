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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob29rcy9zdG9yZS9hY3Rpb25zL2F1dGguanMiXSwibmFtZXMiOlsiZXhwaXJhdGlvblRpbWVJblNlY3MiLCJleHBpcmF0aW9uRGF0ZSIsIkRhdGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZ2V0VGltZSIsInVzZUF1dGhBY3Rpb25zIiwiZGlzcGF0Y2giLCJ1c2VTdG9yZSIsImF1dGhTdGFydCIsImFjdGlvblR5cGVzIiwiYXV0aExvZ291dCIsInJlbW92ZUl0ZW0iLCJhdXRoRXJyb3IiLCJlcnJvcnMiLCJhdXRoUmVzcG9uc2VTeW5jIiwiZGF0YSIsImF1dGhSZXMiLCJ1c2VyIiwiZXhwaXJlc0luIiwic2V0SXRlbSIsImxvY2FsSWQiLCJ0b2tlbklkIiwiYXV0aExvZ291dEFmdGVyRXhwaXJhdGlvblRpbWUiLCJleHBpcmF0aW9uVGltZSIsImV4cGlyYXRpb25UaW1lTWlsaSIsInNldFRpbWVvdXQiLCJhdXRoTG9naW5BdXRvIiwidG9rZW4iLCJSb3V0ZXIiLCJyZXBsYWNlIiwiZ3JhcGhxbFF1ZXJ5IiwicXVlcnkiLCJ2YXJpYWJsZXMiLCJyZXF1ZXN0IiwicmVzIiwibWFwIiwiZSIsIm1lc3NhZ2UiLCJnZXRVc2VyIiwiYXV0aFJlc3BvbnNlIiwiYXV0aERhdGEiLCJpc0xvZ2luIiwiZW1haWwiLCJwYXNzd29yZCIsImZ1bGxOYW1lIiwiZnVsbG5hbWUiLCJsb2dpblVzZXIiLCJjcmVhdGVVc2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLEdBQU07QUFDL0IsTUFBTUMsY0FBYyxHQUFHLElBQUlDLElBQUosQ0FBU0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLGdCQUFyQixDQUFULENBQXZCO0FBQ0EsU0FBTyxDQUFDSCxjQUFjLENBQUNJLE9BQWYsS0FBMkIsSUFBSUgsSUFBSixHQUFXRyxP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QUFmO0FBc0JIOztBQXpDZ0I7QUFBQTtBQUFBLHFCQTJDS1YsaUVBQU8sQ0FBQ0gsWUFBRCxDQTNDWjs7QUFBQTtBQTJDUEksaUJBM0NPOztBQTRDYixrQkFBR0EsR0FBRyxDQUFDckIsTUFBUCxFQUFlO0FBQ1hELHlCQUFTLENBQUNzQixHQUFHLENBQUNyQixNQUFKLENBQVdzQixHQUFYLENBQWUsVUFBQUMsQ0FBQztBQUFBLHlCQUFJQSxDQUFDLENBQUNDLE9BQU47QUFBQSxpQkFBaEIsQ0FBRCxDQUFUO0FBQ0g7O0FBQ0Qsa0JBQUdILEdBQUcsQ0FBQ25CLElBQVAsRUFBYTtBQUNULG9CQUFHMEIsT0FBSCxFQUFZO0FBQ1J6Qix5QkFBTyxDQUFFa0IsR0FBRyxDQUFDbkIsSUFBSixDQUFTK0IsU0FBWCxDQUFQO0FBQ0gsaUJBRkQsTUFFTztBQUNIOUIseUJBQU8sQ0FBRWtCLEdBQUcsQ0FBQ25CLElBQUosQ0FBU2dDLFVBQVgsQ0FBUDtBQUNIOztBQUNEbkIsa0VBQU0sQ0FBQ0MsT0FBUCxDQUFlLEdBQWY7QUFDSDs7QUF0RFk7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUF3RGJqQix1QkFBUyxjQUFUOztBQXhEYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFaMkIsWUFBWTtBQUFBO0FBQUE7QUFBQSxLQUFsQjs7QUE0REEsU0FBTztBQUNIL0IsYUFBUyxFQUFUQSxTQURHO0FBRUhFLGNBQVUsRUFBVkEsVUFGRztBQUdINkIsZ0JBQVksRUFBWkEsWUFIRztBQUlIYixpQkFBYSxFQUFiQTtBQUpHLEdBQVA7QUFNSCxDQTFKRDs7R0FBTXJCLGM7VUFDZUUsK0M7OztBQTBKTkYsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuNDJmYjRmMzVkOTViNjcyNDczNzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgKiBhcyBhY3Rpb25UeXBlcyBmcm9tIFwiLi9hY3Rpb25UeXBlc1wiO1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9odHRwL3JlcXVlc3RcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tIFwiLi4vc3RvcmVcIjtcclxuXHJcbmNvbnN0IGV4cGlyYXRpb25UaW1lSW5TZWNzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZXhwaXJhdGlvbkRhdGUgPSBuZXcgRGF0ZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImV4cGlyYXRpb25EYXRlXCIpKVxyXG4gICAgcmV0dXJuIChleHBpcmF0aW9uRGF0ZS5nZXRUaW1lKCkgLSBuZXcgRGF0ZSgpLmdldFRpbWUoKSkgLyAxMDAwOzsgIFxyXG59XHJcblxyXG5jb25zdCB1c2VBdXRoQWN0aW9ucyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlU3RvcmUoKVsxXTtcclxuXHJcbiAgICAvLyBhdXRoIHN0YXJ0IGFjdGl2YXRlIHNwaW5uZXJcclxuICAgIGNvbnN0IGF1dGhTdGFydCA9ICgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChhY3Rpb25UeXBlcy5BVVRIX1NUQVJUKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBhdXRoIGxvZ291dCBjbGVhciBhdXRoZW50aWNhdGlvbiBkYXRhc1xyXG4gICAgY29uc3QgYXV0aExvZ291dCA9ICgpID0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImxvY2FsSWRcIilcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInRva2VuSWRcIikgICAgICAgIFxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiZXhwaXJhdGlvbkRhdGVcIik7IFxyXG4gICAgICAgIGRpc3BhdGNoKGFjdGlvblR5cGVzLkFVVEhfTE9HT1VUKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBhdXRoIGVycm9yIC0gdHJpZ2dlcnMgd2hlbiB0aGVyZSBpcyBlcnJvciB3aXRoIGxvZ2luXHJcbiAgICBjb25zdCBhdXRoRXJyb3IgPSAoZXJyb3JzKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goYWN0aW9uVHlwZXMuQVVUSF9FUlJPUiwgZXJyb3JzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBhdXRoIHJlc3BvbnNlIGhlbHBlclxyXG4gICAgY29uc3QgYXV0aFJlc3BvbnNlU3luYyA9IChkYXRhKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goYWN0aW9uVHlwZXMuQVVUSF9SRVNQT05TRSwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaGVscGVyIGZ1bmN0aW9uIGZyIGF1dGggcmVzcG9uc2VcclxuICAgIGNvbnN0IGF1dGhSZXMgPSAoIHVzZXIgKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZXhwaXJhdGlvbkRhdGUgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSArIHVzZXIuZXhwaXJlc0luICogMTAwMCk7XHJcbiAgICAgICAgLy8gc3RvcmUgdXNlcidzIElkIGFuZCB0b2tlbiBmb3IgYXV0aG9tYXRpYyBsb2dpbiB1cG9uIHJlZmVyZXNoXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhbElkXCIsIHVzZXIubG9jYWxJZClcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRva2VuSWRcIiwgdXNlci50b2tlbklkKSAgICAgICAgXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJleHBpcmF0aW9uRGF0ZVwiLCBleHBpcmF0aW9uRGF0ZSk7IFxyXG4gICAgICAgIGF1dGhSZXNwb25zZVN5bmModXNlcik7ICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8vIGF1dGggbG9nb3V0IGFmdGVyIGV4cGlyYXRpb24gdGltZVxyXG4gICAgY29uc3QgYXV0aExvZ291dEFmdGVyRXhwaXJhdGlvblRpbWUgPSAoZXhwaXJhdGlvblRpbWUpID0+IHtcclxuICAgICAgICAvLyBjb252ZXJ0IHRvIG1pbGxpc2Vjb25kc1xyXG4gICAgICAgIGNvbnN0IGV4cGlyYXRpb25UaW1lTWlsaSA9IGV4cGlyYXRpb25UaW1lICogMTAwMFxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChhdXRoTG9nb3V0KCkpXHJcbiAgICAgICAgfSwgZXhwaXJhdGlvblRpbWVNaWxpKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhdXRoTG9naW5BdXRvID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGF1dGhTdGFydCgpO1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlbklkXCIpO1xyXG4gICAgICAgIGlmKCF0b2tlbikge1xyXG4gICAgICAgICAgICBhdXRoTG9nb3V0KCk7XHJcbiAgICAgICAgICAgIFJvdXRlci5yZXBsYWNlKFwiL1wiKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4cGlyYXRpb25EYXRlID0gbmV3IERhdGUobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJleHBpcmF0aW9uRGF0ZVwiKSk7XHJcbiAgICAgICAgICAgIGlmKGV4cGlyYXRpb25EYXRlIDw9IG5ldyBEYXRlKCkpIHtcclxuICAgICAgICAgICAgICAgIGF1dGhMb2dvdXQoKTtcclxuICAgICAgICAgICAgICAgIFJvdXRlci5yZXBsYWNlKFwiL1wiKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYXV0aExvZ291dEFmdGVyRXhwaXJhdGlvblRpbWUoZXhwaXJhdGlvblRpbWVJblNlY3MoKSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZ3JhcGhxbFF1ZXJ5ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5IGdldFVzZXIoJGxvY2FsSWQ6IElEISl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRVc2VyKGxvY2FsSWQ6JGxvY2FsSWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbE5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBgLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczogeyBsb2NhbElkOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsSWRcIikgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgcmVxdWVzdChncmFwaHFsUXVlcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlcy5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0aEVycm9yKHJlcy5lcnJvcnMubWFwKGUgPT4gZS5tZXNzYWdlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlcy5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhSZXNwb25zZVN5bmMoIHJlcy5kYXRhLmdldFVzZXIgKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBhdXRoRXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBhdXRoIHJlc3BvbnNlIC0gZ2V0IHRoZSB1c2VyJ3MgZGF0YVxyXG4gICAgY29uc3QgYXV0aFJlc3BvbnNlID0gYXN5bmMgKGF1dGhEYXRhLCBpc0xvZ2luKSA9PiB7XHJcbiAgICAgICAgLy8gc3RhcnQgbG9hZGluZ1xyXG4gICAgICAgIGF1dGhTdGFydCgpO1xyXG4gICAgICAgIGxldCBncmFwaHFsUXVlcnkgPSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5OiBgXHJcbiAgICAgICAgICAgICAgICBtdXRhdGlvbiBMb2dpblVzZXIoJGVtYWlsOiBTdHJpbmchLCAkcGFzc3dvcmQ6IFN0cmluZyEpe1xyXG4gICAgICAgICAgICAgICAgICAgIGxvZ2luVXNlcihlbWFpbDokZW1haWwsIHBhc3N3b3JkOiRwYXNzd29yZClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsSWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW5JZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBpcmVzSW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbE5hbWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBgLFxyXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHsgZW1haWw6IGF1dGhEYXRhLmVtYWlsLCBwYXNzd29yZDogYXV0aERhdGEucGFzc3dvcmQgfVxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgaWYoIWlzTG9naW4pIHtcclxuICAgICAgICAgICAgZ3JhcGhxbFF1ZXJ5ID0ge1xyXG4gICAgICAgICAgICAgICAgcXVlcnk6IGBcclxuICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbiBDcmVhdGVVc2VyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkZW1haWw6IFN0cmluZyEsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkZnVsbE5hbWU6IFN0cmluZyEsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkcGFzc3dvcmQ6IFN0cmluZyEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlVXNlcih1c2VySW5wdXQ6IHtlbWFpbDokZW1haWwsIGZ1bGxOYW1lOiRmdWxsTmFtZSwgcGFzc3dvcmQ6JHBhc3N3b3JkIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsSWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbklkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBpcmVzSW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgLFxyXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7IFxyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiBhdXRoRGF0YS5lbWFpbCwgXHJcbiAgICAgICAgICAgICAgICAgICAgZnVsbE5hbWU6IGF1dGhEYXRhLmZ1bGxuYW1lLCBcclxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogYXV0aERhdGEucGFzc3dvcmRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSAgICBcclxuICAgICAgICB9ICBcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCByZXF1ZXN0KGdyYXBocWxRdWVyeSk7XHJcbiAgICAgICAgICAgIGlmKHJlcy5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgIGF1dGhFcnJvcihyZXMuZXJyb3JzLm1hcChlID0+IGUubWVzc2FnZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHJlcy5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBpZihpc0xvZ2luKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aFJlcyggcmVzLmRhdGEubG9naW5Vc2VyICk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhSZXMoIHJlcy5kYXRhLmNyZWF0ZVVzZXIgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFJvdXRlci5yZXBsYWNlKFwiL1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2goZXJyKSB7XHJcbiAgICAgICAgICAgIGF1dGhFcnJvcihlcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGF1dGhTdGFydCxcclxuICAgICAgICBhdXRoTG9nb3V0LFxyXG4gICAgICAgIGF1dGhSZXNwb25zZSxcclxuICAgICAgICBhdXRoTG9naW5BdXRvXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgdXNlQXV0aEFjdGlvbnM7Il0sInNvdXJjZVJvb3QiOiIifQ==