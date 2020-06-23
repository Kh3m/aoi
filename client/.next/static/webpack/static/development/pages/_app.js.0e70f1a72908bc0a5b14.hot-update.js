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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob29rcy9zdG9yZS9hY3Rpb25zL2F1dGguanMiXSwibmFtZXMiOlsiZXhwaXJhdGlvblRpbWVJblNlY3MiLCJleHBpcmF0aW9uRGF0ZSIsIkRhdGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZ2V0VGltZSIsInVzZUF1dGhBY3Rpb25zIiwiZGlzcGF0Y2giLCJ1c2VTdG9yZSIsImF1dGhTdGFydCIsImFjdGlvblR5cGVzIiwiYXV0aExvZ291dCIsInJlbW92ZUl0ZW0iLCJhdXRoRXJyb3IiLCJlcnJvcnMiLCJhdXRoUmVzcG9uc2VTeW5jIiwiZGF0YSIsImF1dGhSZXMiLCJ1c2VyIiwiZXhwaXJlc0luIiwic2V0SXRlbSIsImxvY2FsSWQiLCJ0b2tlbklkIiwiYXV0aExvZ291dEFmdGVyRXhwaXJhdGlvblRpbWUiLCJleHBpcmF0aW9uVGltZSIsImV4cGlyYXRpb25UaW1lTWlsaSIsInNldFRpbWVvdXQiLCJhdXRoTG9naW5BdXRvIiwidG9rZW4iLCJSb3V0ZXIiLCJyZXBsYWNlIiwiZ3JhcGhxbFF1ZXJ5IiwicXVlcnkiLCJ2YXJpYWJsZXMiLCJyZXF1ZXN0IiwicmVzIiwibWFwIiwiZSIsIm1lc3NhZ2UiLCJnZXRVc2VyIiwiYXV0aFJlc3BvbnNlIiwiYXV0aERhdGEiLCJpc0xvZ2luIiwiZW1haWwiLCJwYXNzd29yZCIsImZ1bGxOYW1lIiwiZnVsbG5hbWUiLCJsb2dpblVzZXIiLCJjcmVhdGVVc2VyIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixHQUFNO0FBQy9CLE1BQU1DLGNBQWMsR0FBRyxJQUFJQyxJQUFKLENBQVNDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixnQkFBckIsQ0FBVCxDQUF2QjtBQUNBLFNBQU8sQ0FBQ0gsY0FBYyxDQUFDSSxPQUFmLEtBQTJCLElBQUlILElBQUos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QWhCQSxpQkFBZjtBQXNCSDs7QUF6Q2dCO0FBQUE7QUFBQSxxQkEyQ0tWLGlFQUFPLENBQUNILFlBQUQsQ0EzQ1o7O0FBQUE7QUEyQ1BJLGlCQTNDTzs7QUE0Q2Isa0JBQUdBLEdBQUcsQ0FBQ3JCLE1BQVAsRUFBZTtBQUNYRCx5QkFBUyxDQUFDc0IsR0FBRyxDQUFDckIsTUFBSixDQUFXc0IsR0FBWCxDQUFlLFVBQUFDLENBQUM7QUFBQSx5QkFBSUEsQ0FBQyxDQUFDQyxPQUFOO0FBQUEsaUJBQWhCLENBQUQsQ0FBVDtBQUNIOztBQUNELGtCQUFHSCxHQUFHLENBQUNuQixJQUFQLEVBQWE7QUFDVCxvQkFBRzBCLE9BQUgsRUFBWTtBQUNSekIseUJBQU8sQ0FBRWtCLEdBQUcsQ0FBQ25CLElBQUosQ0FBUytCLFNBQVgsQ0FBUDtBQUNILGlCQUZELE1BRU87QUFDSDlCLHlCQUFPLENBQUVrQixHQUFHLENBQUNuQixJQUFKLENBQVNnQyxVQUFYLENBQVA7QUFDSDs7QUFDRG5CLGtFQUFNLENBQUNvQixJQUFQLENBQVksR0FBWjtBQUNIOztBQXREWTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQXdEYnBDLHVCQUFTLGNBQVQ7O0FBeERhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVoyQixZQUFZO0FBQUE7QUFBQTtBQUFBLEtBQWxCOztBQTREQSxTQUFPO0FBQ0gvQixhQUFTLEVBQVRBLFNBREc7QUFFSEUsY0FBVSxFQUFWQSxVQUZHO0FBR0g2QixnQkFBWSxFQUFaQSxZQUhHO0FBSUhiLGlCQUFhLEVBQWJBO0FBSkcsR0FBUDtBQU1ILENBMUpEOztHQUFNckIsYztVQUNlRSwrQzs7O0FBMEpORiw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy4wZTcwZjFhNzI5MDhiYzBhNWIxNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCAqIGFzIGFjdGlvblR5cGVzIGZyb20gXCIuL2FjdGlvblR5cGVzXCI7XHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tIFwiLi4vLi4vLi4vbGliL2h0dHAvcmVxdWVzdFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VTdG9yZSB9IGZyb20gXCIuLi9zdG9yZVwiO1xyXG5cclxuY29uc3QgZXhwaXJhdGlvblRpbWVJblNlY3MgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBleHBpcmF0aW9uRGF0ZSA9IG5ldyBEYXRlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZXhwaXJhdGlvbkRhdGVcIikpXHJcbiAgICByZXR1cm4gKGV4cGlyYXRpb25EYXRlLmdldFRpbWUoKSAtIG5ldyBEYXRlKCkuZ2V0VGltZSgpKSAvIDEwMDA7OyAgXHJcbn1cclxuXHJcbmNvbnN0IHVzZUF1dGhBY3Rpb25zID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VTdG9yZSgpWzFdO1xyXG5cclxuICAgIC8vIGF1dGggc3RhcnQgYWN0aXZhdGUgc3Bpbm5lclxyXG4gICAgY29uc3QgYXV0aFN0YXJ0ID0gKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKGFjdGlvblR5cGVzLkFVVEhfU1RBUlQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGF1dGggbG9nb3V0IGNsZWFyIGF1dGhlbnRpY2F0aW9uIGRhdGFzXHJcbiAgICBjb25zdCBhdXRoTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwibG9jYWxJZFwiKVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidG9rZW5JZFwiKSAgICAgICAgXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJleHBpcmF0aW9uRGF0ZVwiKTsgXHJcbiAgICAgICAgZGlzcGF0Y2goYWN0aW9uVHlwZXMuQVVUSF9MT0dPVVQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGF1dGggZXJyb3IgLSB0cmlnZ2VycyB3aGVuIHRoZXJlIGlzIGVycm9yIHdpdGggbG9naW5cclxuICAgIGNvbnN0IGF1dGhFcnJvciA9IChlcnJvcnMpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChhY3Rpb25UeXBlcy5BVVRIX0VSUk9SLCBlcnJvcnMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGF1dGggcmVzcG9uc2UgaGVscGVyXHJcbiAgICBjb25zdCBhdXRoUmVzcG9uc2VTeW5jID0gKGRhdGEpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChhY3Rpb25UeXBlcy5BVVRIX1JFU1BPTlNFLCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBoZWxwZXIgZnVuY3Rpb24gZnIgYXV0aCByZXNwb25zZVxyXG4gICAgY29uc3QgYXV0aFJlcyA9ICggdXNlciApID0+IHtcclxuICAgICAgICBjb25zdCBleHBpcmF0aW9uRGF0ZSA9IG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgdXNlci5leHBpcmVzSW4gKiAxMDAwKTtcclxuICAgICAgICAvLyBzdG9yZSB1c2VyJ3MgSWQgYW5kIHRva2VuIGZvciBhdXRob21hdGljIGxvZ2luIHVwb24gcmVmZXJlc2hcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsSWRcIiwgdXNlci5sb2NhbElkKVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5JZFwiLCB1c2VyLnRva2VuSWQpICAgICAgICBcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImV4cGlyYXRpb25EYXRlXCIsIGV4cGlyYXRpb25EYXRlKTsgXHJcbiAgICAgICAgYXV0aFJlc3BvbnNlU3luYyh1c2VyKTsgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLy8gYXV0aCBsb2dvdXQgYWZ0ZXIgZXhwaXJhdGlvbiB0aW1lXHJcbiAgICBjb25zdCBhdXRoTG9nb3V0QWZ0ZXJFeHBpcmF0aW9uVGltZSA9IChleHBpcmF0aW9uVGltZSkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnZlcnQgdG8gbWlsbGlzZWNvbmRzXHJcbiAgICAgICAgY29uc3QgZXhwaXJhdGlvblRpbWVNaWxpID0gZXhwaXJhdGlvblRpbWUgKiAxMDAwXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGF1dGhMb2dvdXQoKSlcclxuICAgICAgICB9LCBleHBpcmF0aW9uVGltZU1pbGkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGF1dGhMb2dpbkF1dG8gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgYXV0aFN0YXJ0KCk7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuSWRcIik7XHJcbiAgICAgICAgaWYoIXRva2VuKSB7XHJcbiAgICAgICAgICAgIGF1dGhMb2dvdXQoKTtcclxuICAgICAgICAgICAgUm91dGVyLnJlcGxhY2UoXCIvXCIpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgZXhwaXJhdGlvbkRhdGUgPSBuZXcgRGF0ZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImV4cGlyYXRpb25EYXRlXCIpKTtcclxuICAgICAgICAgICAgaWYoZXhwaXJhdGlvbkRhdGUgPD0gbmV3IERhdGUoKSkge1xyXG4gICAgICAgICAgICAgICAgYXV0aExvZ291dCgpO1xyXG4gICAgICAgICAgICAgICAgUm91dGVyLnJlcGxhY2UoXCIvXCIpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhdXRoTG9nb3V0QWZ0ZXJFeHBpcmF0aW9uVGltZShleHBpcmF0aW9uVGltZUluU2VjcygpKTtcclxuICAgICAgICAgICAgICAgIGxldCBncmFwaHFsUXVlcnkgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnkgZ2V0VXNlcigkbG9jYWxJZDogSUQhKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldFVzZXIobG9jYWxJZDokbG9jYWxJZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbElkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsTmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGAsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7IGxvY2FsSWQ6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxJZFwiKSB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCByZXF1ZXN0KGdyYXBocWxRdWVyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzLmVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRoRXJyb3IocmVzLmVycm9ycy5tYXAoZSA9PiBlLm1lc3NhZ2UpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzLmRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0aFJlc3BvbnNlU3luYyggcmVzLmRhdGEuZ2V0VXNlciApOyBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhFcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGF1dGggcmVzcG9uc2UgLSBnZXQgdGhlIHVzZXIncyBkYXRhXHJcbiAgICBjb25zdCBhdXRoUmVzcG9uc2UgPSBhc3luYyAoYXV0aERhdGEsIGlzTG9naW4pID0+IHtcclxuICAgICAgICAvLyBzdGFydCBsb2FkaW5nXHJcbiAgICAgICAgYXV0aFN0YXJ0KCk7XHJcbiAgICAgICAgbGV0IGdyYXBocWxRdWVyeSA9IHtcclxuICAgICAgICAgICAgcXVlcnk6IGBcclxuICAgICAgICAgICAgICAgIG11dGF0aW9uIExvZ2luVXNlcigkZW1haWw6IFN0cmluZyEsICRwYXNzd29yZDogU3RyaW5nISl7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9naW5Vc2VyKGVtYWlsOiRlbWFpbCwgcGFzc3dvcmQ6JHBhc3N3b3JkKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2tlbklkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGlyZXNJblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsTmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGAsXHJcbiAgICAgICAgICAgIHZhcmlhYmxlczogeyBlbWFpbDogYXV0aERhdGEuZW1haWwsIHBhc3N3b3JkOiBhdXRoRGF0YS5wYXNzd29yZCB9XHJcbiAgICAgICAgfSBcclxuICAgICAgICBpZighaXNMb2dpbikge1xyXG4gICAgICAgICAgICBncmFwaHFsUXVlcnkgPSB7XHJcbiAgICAgICAgICAgICAgICBxdWVyeTogYFxyXG4gICAgICAgICAgICAgICAgICAgIG11dGF0aW9uIENyZWF0ZVVzZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRlbWFpbDogU3RyaW5nISwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRmdWxsTmFtZTogU3RyaW5nISwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRwYXNzd29yZDogU3RyaW5nISkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVVc2VyKHVzZXJJbnB1dDoge2VtYWlsOiRlbWFpbCwgZnVsbE5hbWU6JGZ1bGxOYW1lLCBwYXNzd29yZDokcGFzc3dvcmQgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuSWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGlyZXNJblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbE5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGAsXHJcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHsgXHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IGF1dGhEYXRhLmVtYWlsLCBcclxuICAgICAgICAgICAgICAgICAgICBmdWxsTmFtZTogYXV0aERhdGEuZnVsbG5hbWUsIFxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBhdXRoRGF0YS5wYXNzd29yZFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgIH0gIFxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJlcXVlc3QoZ3JhcGhxbFF1ZXJ5KTtcclxuICAgICAgICAgICAgaWYocmVzLmVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgYXV0aEVycm9yKHJlcy5lcnJvcnMubWFwKGUgPT4gZS5tZXNzYWdlKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYocmVzLmRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGlmKGlzTG9naW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBhdXRoUmVzKCByZXMuZGF0YS5sb2dpblVzZXIgKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aFJlcyggcmVzLmRhdGEuY3JlYXRlVXNlciApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgICAgICAgYXV0aEVycm9yKGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYXV0aFN0YXJ0LFxyXG4gICAgICAgIGF1dGhMb2dvdXQsXHJcbiAgICAgICAgYXV0aFJlc3BvbnNlLFxyXG4gICAgICAgIGF1dGhMb2dpbkF1dG9cclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCB1c2VBdXRoQWN0aW9uczsiXSwic291cmNlUm9vdCI6IiJ9