"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./context/Connect.js":
/*!****************************!*\
  !*** ./context/Connect.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setup\": function() { return /* binding */ setup; },\n/* harmony export */   \"connectWalletBeacon\": function() { return /* binding */ connectWalletBeacon; },\n/* harmony export */   \"checkWalletconc\": function() { return /* binding */ checkWalletconc; }\n/* harmony export */ });\n/* harmony import */ var C_SolWag_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var C_SolWag_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var C_SolWag_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_SolWag_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.json */ \"./context/config.json\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _taquito_beacon_wallet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taquito/beacon-wallet */ \"./node_modules/@taquito/beacon-wallet/dist/taquito-beacon-wallet.es6.js\");\n/* harmony import */ var _taquito_taquito__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taquito/taquito */ \"./node_modules/@taquito/taquito/dist/taquito.es6.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\nvar _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(),\n    currentAccount = _useState[0],\n    setCurrentAccount = _useState[1];\n\nvar setup = /*#__PURE__*/function () {\n  var _ref = (0,C_SolWag_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/C_SolWag_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n    var Tezos;\n    return C_SolWag_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            Tezos = new _taquito_taquito__WEBPACK_IMPORTED_MODULE_5__.TezosToolkit(_config_json__WEBPACK_IMPORTED_MODULE_2__.rpc);\n            return _context.abrupt(\"return\", Tezos);\n\n          case 2:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function setup() {\n    return _ref.apply(this, arguments);\n  };\n}();\nvar connectWalletBeacon = /*#__PURE__*/function () {\n  var _ref2 = (0,C_SolWag_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/C_SolWag_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {\n    var options, wallet;\n    return C_SolWag_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            options = {\n              name: _config_json__WEBPACK_IMPORTED_MODULE_2__.name,\n              iconUrl: 'https://tezostaquito.io/img/favicon.png',\n              preferredNetwork: _config_json__WEBPACK_IMPORTED_MODULE_2__.network\n            };\n            wallet = new _taquito_beacon_wallet__WEBPACK_IMPORTED_MODULE_4__.BeaconWallet(options); // const router = useRouter();\n            // wallet.disconnect();\n\n            _context2.next = 4;\n            return wallet.requestPermissions({\n              network: {\n                type: _config_json__WEBPACK_IMPORTED_MODULE_2__.network\n              }\n            });\n\n          case 4:\n            return _context2.abrupt(\"return\", wallet);\n\n          case 5:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function connectWalletBeacon() {\n    return _ref2.apply(this, arguments);\n  };\n}();\nvar checkWalletconc = /*#__PURE__*/function () {\n  var _ref3 = (0,C_SolWag_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/C_SolWag_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {\n    var activeAccount;\n    return C_SolWag_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.next = 2;\n            return wallet.client.getActiveAccount();\n\n          case 2:\n            activeAccount = _context3.sent;\n\n            if (!activeAccount) {\n              _context3.next = 8;\n              break;\n            }\n\n            console.log(\"Already connected:\", activeAccount.address);\n            return _context3.abrupt(\"return\", activeAccount);\n\n          case 8:\n            // The user is not connected. A button should be displayed where the user can connect to his wallet.\n            console.log(\"Not connected!\");\n\n          case 9:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n\n  return function checkWalletconc() {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0Nvbm5lY3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQU1BO0FBR0E7QUFJQTs7QUFJQSxnQkFBNENFLCtDQUFRLEVBQXBEO0FBQUEsSUFBT0ssY0FBUDtBQUFBLElBQXVCQyxpQkFBdkI7O0FBQ08sSUFBTUMsS0FBSztBQUFBLDBRQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNiQyxZQUFBQSxLQURhLEdBQ0wsSUFBSUwsMERBQUosQ0FBaUJMLDZDQUFqQixDQURLO0FBQUEsNkNBRVpVLEtBRlk7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBTEQsS0FBSztBQUFBO0FBQUE7QUFBQSxHQUFYO0FBS0ksSUFBTUcsbUJBQW1CO0FBQUEsMlFBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRTNCQyxZQUFBQSxPQUYyQixHQUVqQjtBQUNkQyxjQUFBQSxJQUFJLEVBQUVkLDhDQURRO0FBRWRlLGNBQUFBLE9BQU8sRUFBRSx5Q0FGSztBQUdkQyxjQUFBQSxnQkFBZ0IsRUFBRWhCLGlEQUFjaUI7QUFIbEIsYUFGaUI7QUFPM0JDLFlBQUFBLE1BUDJCLEdBT2xCLElBQUlkLGdFQUFKLENBQWlCUyxPQUFqQixDQVBrQixFQVFqQztBQUNBOztBQVRpQztBQUFBLG1CQVUzQkssTUFBTSxDQUFDQyxrQkFBUCxDQUEwQjtBQUM5QkYsY0FBQUEsT0FBTyxFQUFFO0FBQ1BHLGdCQUFBQSxJQUFJLEVBQUVwQixpREFBY2lCO0FBRGI7QUFEcUIsYUFBMUIsQ0FWMkI7O0FBQUE7QUFBQSw4Q0FnQjFCQyxNQWhCMEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBbkJOLG1CQUFtQjtBQUFBO0FBQUE7QUFBQSxHQUF6QjtBQWtCQSxJQUFNUyxlQUFlO0FBQUEsMlFBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDREgsTUFBTSxDQUFDSSxNQUFQLENBQWNDLGdCQUFkLEVBREM7O0FBQUE7QUFDdkJDLFlBQUFBLGFBRHVCOztBQUFBLGlCQUV6QkEsYUFGeUI7QUFBQTtBQUFBO0FBQUE7O0FBRzNCQyxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWixFQUFrQ0YsYUFBYSxDQUFDRyxPQUFoRDtBQUgyQiw4Q0FJdEJILGFBSnNCOztBQUFBO0FBTTdCO0FBQ0FDLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaOztBQVA2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFmTCxlQUFlO0FBQUE7QUFBQTtBQUFBLEdBQXJCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRleHQvQ29ubmVjdC5qcz84NTEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNvbmZpZyBmcm9tIFwiLi9jb25maWcuanNvblwiO1xyXG5pbXBvcnQge1xyXG4gIGNyZWF0ZUNvbnRleHQsXHJcbiAgdXNlU3RhdGUsXHJcbiAgdXNlRWZmZWN0XHJcbn0gZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQge1xyXG4gIEJlYWNvbldhbGxldFxyXG59IGZyb20gJ0B0YXF1aXRvL2JlYWNvbi13YWxsZXQnO1xyXG5pbXBvcnQge1xyXG4gIFRlem9zVG9vbGtpdFxyXG59IGZyb20gXCJAdGFxdWl0by90YXF1aXRvXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIHVzZVJvdXRlclxyXG59IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IFtjdXJyZW50QWNjb3VudCwgc2V0Q3VycmVudEFjY291bnRdID0gdXNlU3RhdGUoKVxyXG5leHBvcnQgY29uc3Qgc2V0dXAgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgVGV6b3MgPSBuZXcgVGV6b3NUb29sa2l0KGNvbmZpZy5ycGMpO1xyXG4gIHJldHVybiBUZXpvcztcclxufTtcclxuXHJcbiAgICBleHBvcnQgY29uc3QgY29ubmVjdFdhbGxldEJlYWNvbiA9IGFzeW5jICgpID0+IHtcclxuXHJcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgbmFtZTogY29uZmlnLm5hbWUsXHJcbiAgICAgICAgaWNvblVybDogJ2h0dHBzOi8vdGV6b3N0YXF1aXRvLmlvL2ltZy9mYXZpY29uLnBuZycsXHJcbiAgICAgICAgcHJlZmVycmVkTmV0d29yazogY29uZmlnLm5ldHdvcmssXHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgd2FsbGV0ID0gbmV3IEJlYWNvbldhbGxldChvcHRpb25zKTtcclxuICAgICAgLy8gY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICAgIC8vIHdhbGxldC5kaXNjb25uZWN0KCk7XHJcbiAgICAgIGF3YWl0IHdhbGxldC5yZXF1ZXN0UGVybWlzc2lvbnMoe1xyXG4gICAgICAgIG5ldHdvcms6IHtcclxuICAgICAgICAgIHR5cGU6IGNvbmZpZy5uZXR3b3JrLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgIFxyXG4gICAgICByZXR1cm4gd2FsbGV0O1xyXG4gICAgfTtcclxuICAgIGV4cG9ydCBjb25zdCBjaGVja1dhbGxldGNvbmMgPSBhc3luYyAoKT0+e1xyXG4gICAgICBjb25zdCBhY3RpdmVBY2NvdW50ID0gYXdhaXQgd2FsbGV0LmNsaWVudC5nZXRBY3RpdmVBY2NvdW50KCk7XHJcbiAgICAgIGlmIChhY3RpdmVBY2NvdW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJBbHJlYWR5IGNvbm5lY3RlZDpcIiwgYWN0aXZlQWNjb3VudC5hZGRyZXNzKTtcclxuICAgICAgcmV0dXJuIGFjdGl2ZUFjY291bnQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBUaGUgdXNlciBpcyBub3QgY29ubmVjdGVkLiBBIGJ1dHRvbiBzaG91bGQgYmUgZGlzcGxheWVkIHdoZXJlIHRoZSB1c2VyIGNhbiBjb25uZWN0IHRvIGhpcyB3YWxsZXQuXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiTm90IGNvbm5lY3RlZCFcIik7XHJcbiAgICB9XHJcbiAgICB9Il0sIm5hbWVzIjpbImNvbmZpZyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkJlYWNvbldhbGxldCIsIlRlem9zVG9vbGtpdCIsInVzZVJvdXRlciIsImN1cnJlbnRBY2NvdW50Iiwic2V0Q3VycmVudEFjY291bnQiLCJzZXR1cCIsIlRlem9zIiwicnBjIiwiY29ubmVjdFdhbGxldEJlYWNvbiIsIm9wdGlvbnMiLCJuYW1lIiwiaWNvblVybCIsInByZWZlcnJlZE5ldHdvcmsiLCJuZXR3b3JrIiwid2FsbGV0IiwicmVxdWVzdFBlcm1pc3Npb25zIiwidHlwZSIsImNoZWNrV2FsbGV0Y29uYyIsImNsaWVudCIsImdldEFjdGl2ZUFjY291bnQiLCJhY3RpdmVBY2NvdW50IiwiY29uc29sZSIsImxvZyIsImFkZHJlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/Connect.js\n");

/***/ })

});