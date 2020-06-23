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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob29rcy9zdG9yZS9hY3Rpb25zL2F1dGguanMiXSwibmFtZXMiOlsiZXhwaXJhdGlvblRpbWVJblNlY3MiLCJleHBpcmF0aW9uRGF0ZSIsIkRhdGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZ2V0VGltZSIsInVzZUF1dGhBY3Rpb25zIiwiZGlzcGF0Y2giLCJ1c2VTdG9yZSIsImF1dGhTdGFydCIsImFjdGlvblR5cGVzIiwiYXV0aExvZ291dCIsInJlbW92ZUl0ZW0iLCJhdXRoRXJyb3IiLCJlcnJvcnMiLCJhdXRoUmVzcG9uc2VTeW5jIiwiZGF0YSIsImF1dGhSZXMiLCJ1c2VyIiwiZXhwaXJlc0luIiwic2V0SXRlbSIsImxvY2FsSWQiLCJ0b2tlbklkIiwiYXV0aExvZ291dEFmdGVyRXhwaXJhdGlvblRpbWUiLCJleHBpcmF0aW9uVGltZSIsImV4cGlyYXRpb25UaW1lTWlsaSIsInNldFRpbWVvdXQiLCJhdXRoTG9naW5BdXRvIiwidG9rZW4iLCJSb3V0ZXIiLCJyZXBsYWNlIiwiZ3JhcGhxbFF1ZXJ5IiwicXVlcnkiLCJ2YXJpYWJsZXMiLCJyZXF1ZXN0IiwicmVzIiwibWFwIiwiZSIsIm1lc3NhZ2UiLCJnZXRVc2VyIiwiYXV0aFJlc3BvbnNlIiwiYXV0aERhdGEiLCJpc0xvZ2luIiwiZW1haWwiLCJwYXNzd29yZCIsImNvbnNvbGUiLCJsb2ciLCJmdWxsTmFtZSIsImxvZ2luVXNlciIsImNyZWF0ZVVzZXIiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLEdBQU07QUFDL0IsTUFBTUMsY0FBYyxHQUFHLElBQUlDLElBQUosQ0FBU0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLGdCQUFyQixDQUFULENBQXZCO0FBQ0EsU0FBTyxDQUFDSCxjQUFjLENBQUNJLE9BQWYsS0FBMkIsSUFBSUgs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QUZaO0FBR1BILDRCQUFRLEVBQUVILFFBQVEsQ0FBQ0c7QUFIWjtBQWhCQSxpQkFBZjtBQXNCSDs7QUExQ2dCO0FBQUE7QUFBQSxxQkE0Q0tWLGlFQUFPLENBQUNILFlBQUQsQ0E1Q1o7O0FBQUE7QUE0Q1BJLGlCQTVDTzs7QUE2Q2Isa0JBQUdBLEdBQUcsQ0FBQ3JCLE1BQVAsRUFBZTtBQUNYRCx5QkFBUyxDQUFDc0IsR0FBRyxDQUFDckIsTUFBSixDQUFXc0IsR0FBWCxDQUFlLFVBQUFDLENBQUM7QUFBQSx5QkFBSUEsQ0FBQyxDQUFDQyxPQUFOO0FBQUEsaUJBQWhCLENBQUQsQ0FBVDtBQUNIOztBQUNELGtCQUFHSCxHQUFHLENBQUNuQixJQUFQLEVBQWE7QUFDVCxvQkFBRzBCLE9BQUgsRUFBWTtBQUNSekIseUJBQU8sQ0FBRWtCLEdBQUcsQ0FBQ25CLElBQUosQ0FBU2dDLFNBQVgsQ0FBUDtBQUNILGlCQUZELE1BRU87QUFDSC9CLHlCQUFPLENBQUVrQixHQUFHLENBQUNuQixJQUFKLENBQVNpQyxVQUFYLENBQVA7QUFDSDs7QUFDRHBCLGtFQUFNLENBQUNxQixJQUFQLENBQVksR0FBWjtBQUNIOztBQXZEWTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQXlEYnJDLHVCQUFTLGNBQVQ7O0FBekRhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVoyQixZQUFZO0FBQUE7QUFBQTtBQUFBLEtBQWxCOztBQTZEQSxTQUFPO0FBQ0gvQixhQUFTLEVBQVRBLFNBREc7QUFFSEUsY0FBVSxFQUFWQSxVQUZHO0FBR0g2QixnQkFBWSxFQUFaQSxZQUhHO0FBSUhiLGlCQUFhLEVBQWJBO0FBSkcsR0FBUDtBQU1ILENBM0pEOztHQUFNckIsYztVQUNlRSwrQzs7O0FBMkpORiw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy43ZmQxMzVkMmFmYzg4Mzg3NDFlMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCAqIGFzIGFjdGlvblR5cGVzIGZyb20gXCIuL2FjdGlvblR5cGVzXCI7XHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tIFwiLi4vLi4vLi4vbGliL2h0dHAvcmVxdWVzdFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VTdG9yZSB9IGZyb20gXCIuLi9zdG9yZVwiO1xyXG5cclxuY29uc3QgZXhwaXJhdGlvblRpbWVJblNlY3MgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBleHBpcmF0aW9uRGF0ZSA9IG5ldyBEYXRlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZXhwaXJhdGlvbkRhdGVcIikpXHJcbiAgICByZXR1cm4gKGV4cGlyYXRpb25EYXRlLmdldFRpbWUoKSAtIG5ldyBEYXRlKCkuZ2V0VGltZSgpKSAvIDEwMDA7OyAgXHJcbn1cclxuXHJcbmNvbnN0IHVzZUF1dGhBY3Rpb25zID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VTdG9yZSgpWzFdO1xyXG5cclxuICAgIC8vIGF1dGggc3RhcnQgYWN0aXZhdGUgc3Bpbm5lclxyXG4gICAgY29uc3QgYXV0aFN0YXJ0ID0gKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKGFjdGlvblR5cGVzLkFVVEhfU1RBUlQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGF1dGggbG9nb3V0IGNsZWFyIGF1dGhlbnRpY2F0aW9uIGRhdGFzXHJcbiAgICBjb25zdCBhdXRoTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwibG9jYWxJZFwiKVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidG9rZW5JZFwiKSAgICAgICAgXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJleHBpcmF0aW9uRGF0ZVwiKTsgXHJcbiAgICAgICAgZGlzcGF0Y2goYWN0aW9uVHlwZXMuQVVUSF9MT0dPVVQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGF1dGggZXJyb3IgLSB0cmlnZ2VycyB3aGVuIHRoZXJlIGlzIGVycm9yIHdpdGggbG9naW5cclxuICAgIGNvbnN0IGF1dGhFcnJvciA9IChlcnJvcnMpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChhY3Rpb25UeXBlcy5BVVRIX0VSUk9SLCBlcnJvcnMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGF1dGggcmVzcG9uc2UgaGVscGVyXHJcbiAgICBjb25zdCBhdXRoUmVzcG9uc2VTeW5jID0gKGRhdGEpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChhY3Rpb25UeXBlcy5BVVRIX1JFU1BPTlNFLCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBoZWxwZXIgZnVuY3Rpb24gZnIgYXV0aCByZXNwb25zZVxyXG4gICAgY29uc3QgYXV0aFJlcyA9ICggdXNlciApID0+IHtcclxuICAgICAgICBjb25zdCBleHBpcmF0aW9uRGF0ZSA9IG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgdXNlci5leHBpcmVzSW4gKiAxMDAwKTtcclxuICAgICAgICAvLyBzdG9yZSB1c2VyJ3MgSWQgYW5kIHRva2VuIGZvciBhdXRob21hdGljIGxvZ2luIHVwb24gcmVmZXJlc2hcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsSWRcIiwgdXNlci5sb2NhbElkKVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5JZFwiLCB1c2VyLnRva2VuSWQpICAgICAgICBcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImV4cGlyYXRpb25EYXRlXCIsIGV4cGlyYXRpb25EYXRlKTsgXHJcbiAgICAgICAgYXV0aFJlc3BvbnNlU3luYyh1c2VyKTsgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLy8gYXV0aCBsb2dvdXQgYWZ0ZXIgZXhwaXJhdGlvbiB0aW1lXHJcbiAgICBjb25zdCBhdXRoTG9nb3V0QWZ0ZXJFeHBpcmF0aW9uVGltZSA9IChleHBpcmF0aW9uVGltZSkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnZlcnQgdG8gbWlsbGlzZWNvbmRzXHJcbiAgICAgICAgY29uc3QgZXhwaXJhdGlvblRpbWVNaWxpID0gZXhwaXJhdGlvblRpbWUgKiAxMDAwXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGF1dGhMb2dvdXQoKSlcclxuICAgICAgICB9LCBleHBpcmF0aW9uVGltZU1pbGkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGF1dGhMb2dpbkF1dG8gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgYXV0aFN0YXJ0KCk7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuSWRcIik7XHJcbiAgICAgICAgaWYoIXRva2VuKSB7XHJcbiAgICAgICAgICAgIGF1dGhMb2dvdXQoKTtcclxuICAgICAgICAgICAgUm91dGVyLnJlcGxhY2UoXCIvXCIpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgZXhwaXJhdGlvbkRhdGUgPSBuZXcgRGF0ZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImV4cGlyYXRpb25EYXRlXCIpKTtcclxuICAgICAgICAgICAgaWYoZXhwaXJhdGlvbkRhdGUgPD0gbmV3IERhdGUoKSkge1xyXG4gICAgICAgICAgICAgICAgYXV0aExvZ291dCgpO1xyXG4gICAgICAgICAgICAgICAgUm91dGVyLnJlcGxhY2UoXCIvXCIpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhdXRoTG9nb3V0QWZ0ZXJFeHBpcmF0aW9uVGltZShleHBpcmF0aW9uVGltZUluU2VjcygpKTtcclxuICAgICAgICAgICAgICAgIGxldCBncmFwaHFsUXVlcnkgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnkgZ2V0VXNlcigkbG9jYWxJZDogSUQhKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldFVzZXIobG9jYWxJZDokbG9jYWxJZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbElkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsTmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGAsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7IGxvY2FsSWQ6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxJZFwiKSB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCByZXF1ZXN0KGdyYXBocWxRdWVyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzLmVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRoRXJyb3IocmVzLmVycm9ycy5tYXAoZSA9PiBlLm1lc3NhZ2UpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzLmRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0aFJlc3BvbnNlU3luYyggcmVzLmRhdGEuZ2V0VXNlciApOyBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhFcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGF1dGggcmVzcG9uc2UgLSBnZXQgdGhlIHVzZXIncyBkYXRhXHJcbiAgICBjb25zdCBhdXRoUmVzcG9uc2UgPSBhc3luYyAoYXV0aERhdGEsIGlzTG9naW4pID0+IHtcclxuICAgICAgICAvLyBzdGFydCBsb2FkaW5nXHJcbiAgICAgICAgYXV0aFN0YXJ0KCk7XHJcbiAgICAgICAgbGV0IGdyYXBocWxRdWVyeSA9IHtcclxuICAgICAgICAgICAgcXVlcnk6IGBcclxuICAgICAgICAgICAgICAgIG11dGF0aW9uIExvZ2luVXNlcigkZW1haWw6IFN0cmluZyEsICRwYXNzd29yZDogU3RyaW5nISl7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9naW5Vc2VyKGVtYWlsOiRlbWFpbCwgcGFzc3dvcmQ6JHBhc3N3b3JkKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2tlbklkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGlyZXNJblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsTmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGAsXHJcbiAgICAgICAgICAgIHZhcmlhYmxlczogeyBlbWFpbDogYXV0aERhdGEuZW1haWwsIHBhc3N3b3JkOiBhdXRoRGF0YS5wYXNzd29yZCB9XHJcbiAgICAgICAgfSBcclxuICAgICAgICBpZighaXNMb2dpbikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhdXRoRGF0YSlcclxuICAgICAgICAgICAgZ3JhcGhxbFF1ZXJ5ID0ge1xyXG4gICAgICAgICAgICAgICAgcXVlcnk6IGBcclxuICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbiBDcmVhdGVVc2VyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkZW1haWw6IFN0cmluZyEsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkZnVsbE5hbWU6IFN0cmluZyEsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkcGFzc3dvcmQ6IFN0cmluZyEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlVXNlcih1c2VySW5wdXQ6IHtlbWFpbDokZW1haWwsIGZ1bGxOYW1lOiRmdWxsTmFtZSwgcGFzc3dvcmQ6JHBhc3N3b3JkIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsSWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbklkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBpcmVzSW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgLFxyXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7IFxyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiBhdXRoRGF0YS5lbWFpbCwgXHJcbiAgICAgICAgICAgICAgICAgICAgZnVsbE5hbWU6IGF1dGhEYXRhLmZ1bGxOYW1lLCBcclxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogYXV0aERhdGEucGFzc3dvcmRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSAgICBcclxuICAgICAgICB9ICBcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCByZXF1ZXN0KGdyYXBocWxRdWVyeSk7XHJcbiAgICAgICAgICAgIGlmKHJlcy5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgIGF1dGhFcnJvcihyZXMuZXJyb3JzLm1hcChlID0+IGUubWVzc2FnZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHJlcy5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBpZihpc0xvZ2luKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aFJlcyggcmVzLmRhdGEubG9naW5Vc2VyICk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhSZXMoIHJlcy5kYXRhLmNyZWF0ZVVzZXIgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2goZXJyKSB7XHJcbiAgICAgICAgICAgIGF1dGhFcnJvcihlcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGF1dGhTdGFydCxcclxuICAgICAgICBhdXRoTG9nb3V0LFxyXG4gICAgICAgIGF1dGhSZXNwb25zZSxcclxuICAgICAgICBhdXRoTG9naW5BdXRvXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgdXNlQXV0aEFjdGlvbnM7Il0sInNvdXJjZVJvb3QiOiIifQ==