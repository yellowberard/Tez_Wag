"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Login",{

/***/ "./context/connect.js":
/*!****************************!*\
  !*** ./context/connect.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setup\": function() { return /* binding */ setup; },\n/* harmony export */   \"connectWalletBeacon\": function() { return /* binding */ connectWalletBeacon; }\n/* harmony export */ });\n/* harmony import */ var C_SolWag_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var C_SolWag_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var C_SolWag_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_SolWag_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.json */ \"./context/config.json\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _taquito_beacon_wallet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taquito/beacon-wallet */ \"./node_modules/@taquito/beacon-wallet/dist/taquito-beacon-wallet.es6.js\");\n/* harmony import */ var _taquito_taquito__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taquito/taquito */ \"./node_modules/@taquito/taquito/dist/taquito.es6.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nvar setup = /*#__PURE__*/function () {\n  var _ref = (0,C_SolWag_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/C_SolWag_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n    var Tezos;\n    return C_SolWag_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            Tezos = new _taquito_taquito__WEBPACK_IMPORTED_MODULE_5__.TezosToolkit(_config_json__WEBPACK_IMPORTED_MODULE_2__.rpc);\n            return _context.abrupt(\"return\", Tezos);\n\n          case 2:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function setup() {\n    return _ref.apply(this, arguments);\n  };\n}();\nvar connectWalletBeacon = /*#__PURE__*/function () {\n  var _s = $RefreshSig$();\n\n  var _ref2 = (0,C_SolWag_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_s( /*#__PURE__*/C_SolWag_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {\n    var options, wallet, router;\n    return C_SolWag_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _s();\n\n            options = {\n              name: _config_json__WEBPACK_IMPORTED_MODULE_2__.name,\n              iconUrl: 'https://tezostaquito.io/img/favicon.png',\n              preferredNetwork: _config_json__WEBPACK_IMPORTED_MODULE_2__.network\n            };\n            wallet = new _taquito_beacon_wallet__WEBPACK_IMPORTED_MODULE_4__.BeaconWallet(options);\n            router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)(); // wallet.disconnect();\n\n            _context2.next = 6;\n            return wallet.requestPermissions({\n              network: {\n                type: _config_json__WEBPACK_IMPORTED_MODULE_2__.network\n              }\n            });\n\n          case 6:\n            router.push('/');\n            return _context2.abrupt(\"return\", wallet);\n\n          case 8:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }), \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n    return [next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter];\n  }));\n\n  return function connectWalletBeacon() {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2Nvbm5lY3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBTUE7QUFHQTtBQUlBO0FBSU8sSUFBTU8sS0FBSztBQUFBLDBRQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNiQyxZQUFBQSxLQURhLEdBQ0wsSUFBSUgsMERBQUosQ0FBaUJMLDZDQUFqQixDQURLO0FBQUEsNkNBRVpRLEtBRlk7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBTEQsS0FBSztBQUFBO0FBQUE7QUFBQSxHQUFYO0FBS0EsSUFBTUcsbUJBQW1CO0FBQUE7O0FBQUEsOFFBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRTNCQyxZQUFBQSxPQUYyQixHQUVqQjtBQUNkQyxjQUFBQSxJQUFJLEVBQUVaLDhDQURRO0FBRWRhLGNBQUFBLE9BQU8sRUFBRSx5Q0FGSztBQUdkQyxjQUFBQSxnQkFBZ0IsRUFBRWQsaURBQWNlO0FBSGxCLGFBRmlCO0FBTzNCQyxZQUFBQSxNQVAyQixHQU9sQixJQUFJWixnRUFBSixDQUFpQk8sT0FBakIsQ0FQa0I7QUFRM0JNLFlBQUFBLE1BUjJCLEdBUWxCWCxzREFBUyxFQVJTLEVBU2pDOztBQVRpQztBQUFBLG1CQVUzQlUsTUFBTSxDQUFDRSxrQkFBUCxDQUEwQjtBQUM5QkgsY0FBQUEsT0FBTyxFQUFFO0FBQ1BJLGdCQUFBQSxJQUFJLEVBQUVuQixpREFBY2U7QUFEYjtBQURxQixhQUExQixDQVYyQjs7QUFBQTtBQWVqQ0UsWUFBQUEsTUFBTSxDQUFDRyxJQUFQLENBQVksR0FBWjtBQWZpQyw4Q0FnQjFCSixNQWhCMEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDtBQUFBLFlBUWZWLGtEQVJlO0FBQUE7O0FBQUEsa0JBQW5CSSxtQkFBbUI7QUFBQTtBQUFBO0FBQUEsR0FBekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9jb25uZWN0LmpzPzJmNmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY29uZmlnIGZyb20gXCIuL2NvbmZpZy5qc29uXCI7XHJcbmltcG9ydCB7XHJcbiAgY3JlYXRlQ29udGV4dCxcclxuICB1c2VTdGF0ZSxcclxuICB1c2VFZmZlY3RcclxufSBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCB7XHJcbiAgQmVhY29uV2FsbGV0XHJcbn0gZnJvbSAnQHRhcXVpdG8vYmVhY29uLXdhbGxldCc7XHJcbmltcG9ydCB7XHJcbiAgVGV6b3NUb29sa2l0XHJcbn0gZnJvbSBcIkB0YXF1aXRvL3RhcXVpdG9cIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgdXNlUm91dGVyXHJcbn0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldHVwID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IFRlem9zID0gbmV3IFRlem9zVG9vbGtpdChjb25maWcucnBjKTtcclxuICByZXR1cm4gVGV6b3M7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY29ubmVjdFdhbGxldEJlYWNvbiA9IGFzeW5jICgpID0+IHtcclxuXHJcbiAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIG5hbWU6IGNvbmZpZy5uYW1lLFxyXG4gICAgaWNvblVybDogJ2h0dHBzOi8vdGV6b3N0YXF1aXRvLmlvL2ltZy9mYXZpY29uLnBuZycsXHJcbiAgICBwcmVmZXJyZWROZXR3b3JrOiBjb25maWcubmV0d29yayxcclxuICB9XHJcbiAgY29uc3Qgd2FsbGV0ID0gbmV3IEJlYWNvbldhbGxldChvcHRpb25zKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAvLyB3YWxsZXQuZGlzY29ubmVjdCgpO1xyXG4gIGF3YWl0IHdhbGxldC5yZXF1ZXN0UGVybWlzc2lvbnMoe1xyXG4gICAgbmV0d29yazoge1xyXG4gICAgICB0eXBlOiBjb25maWcubmV0d29yayxcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgcm91dGVyLnB1c2goJy8nKTtcclxuICByZXR1cm4gd2FsbGV0O1xyXG59OyJdLCJuYW1lcyI6WyJjb25maWciLCJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJCZWFjb25XYWxsZXQiLCJUZXpvc1Rvb2xraXQiLCJ1c2VSb3V0ZXIiLCJzZXR1cCIsIlRlem9zIiwicnBjIiwiY29ubmVjdFdhbGxldEJlYWNvbiIsIm9wdGlvbnMiLCJuYW1lIiwiaWNvblVybCIsInByZWZlcnJlZE5ldHdvcmsiLCJuZXR3b3JrIiwid2FsbGV0Iiwicm91dGVyIiwicmVxdWVzdFBlcm1pc3Npb25zIiwidHlwZSIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/connect.js\n");

/***/ })

});