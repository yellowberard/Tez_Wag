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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setup\": function() { return /* binding */ setup; },\n/* harmony export */   \"connectWalletBeacon\": function() { return /* binding */ connectWalletBeacon; },\n/* harmony export */   \"cWalletconc\": function() { return /* binding */ cWalletconc; }\n/* harmony export */ });\n/* harmony import */ var C_SolWag_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var C_SolWag_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var C_SolWag_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_SolWag_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.json */ \"./context/config.json\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _taquito_beacon_wallet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taquito/beacon-wallet */ \"./node_modules/@taquito/beacon-wallet/dist/taquito-beacon-wallet.es6.js\");\n/* harmony import */ var _taquito_taquito__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taquito/taquito */ \"./node_modules/@taquito/taquito/dist/taquito.es6.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nvar setup = /*#__PURE__*/function () {\n  var _ref = (0,C_SolWag_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/C_SolWag_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n    var Tezos;\n    return C_SolWag_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            Tezos = new _taquito_taquito__WEBPACK_IMPORTED_MODULE_5__.TezosToolkit(_config_json__WEBPACK_IMPORTED_MODULE_2__.rpc);\n            return _context.abrupt(\"return\", Tezos);\n\n          case 2:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function setup() {\n    return _ref.apply(this, arguments);\n  };\n}();\nvar connectWalletBeacon = /*#__PURE__*/function () {\n  var _ref2 = (0,C_SolWag_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/C_SolWag_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {\n    var options, wallet;\n    return C_SolWag_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            options = {\n              name: _config_json__WEBPACK_IMPORTED_MODULE_2__.name,\n              iconUrl: 'https://tezostaquito.io/img/favicon.png',\n              preferredNetwork: _config_json__WEBPACK_IMPORTED_MODULE_2__.network\n            };\n            wallet = new _taquito_beacon_wallet__WEBPACK_IMPORTED_MODULE_4__.BeaconWallet(options); // const router = useRouter();\n            // wallet.disconnect();\n\n            _context2.next = 4;\n            return wallet.requestPermissions({\n              network: {\n                type: _config_json__WEBPACK_IMPORTED_MODULE_2__.network\n              }\n            });\n\n          case 4:\n            return _context2.abrupt(\"return\", wallet);\n\n          case 5:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function connectWalletBeacon() {\n    return _ref2.apply(this, arguments);\n  };\n}();\nvar cWalletconc = /*#__PURE__*/function () {\n  var _ref3 = (0,C_SolWag_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/C_SolWag_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {\n    return C_SolWag_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            if (!activeAccount) {\n              _context3.next = 5;\n              break;\n            }\n\n            console.log(\"Already connected:\", activeAccount.address);\n            return _context3.abrupt(\"return\", activeAccount);\n\n          case 5:\n            // The user is not connected. A button should be displayed where the user can connect to his wallet.\n            console.log(\"Not connected!\");\n\n          case 6:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n\n  return function cWalletconc() {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0Nvbm5lY3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQU1BO0FBR0E7QUFJQTtBQUtPLElBQU1PLEtBQUs7QUFBQSwwUUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDYkMsWUFBQUEsS0FEYSxHQUNMLElBQUlILDBEQUFKLENBQWlCTCw2Q0FBakIsQ0FESztBQUFBLDZDQUVaUSxLQUZZOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQUxELEtBQUs7QUFBQTtBQUFBO0FBQUEsR0FBWDtBQUtJLElBQU1HLG1CQUFtQjtBQUFBLDJRQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUUzQkMsWUFBQUEsT0FGMkIsR0FFakI7QUFDZEMsY0FBQUEsSUFBSSxFQUFFWiw4Q0FEUTtBQUVkYSxjQUFBQSxPQUFPLEVBQUUseUNBRks7QUFHZEMsY0FBQUEsZ0JBQWdCLEVBQUVkLGlEQUFjZTtBQUhsQixhQUZpQjtBQU8zQkMsWUFBQUEsTUFQMkIsR0FPbEIsSUFBSVosZ0VBQUosQ0FBaUJPLE9BQWpCLENBUGtCLEVBUWpDO0FBQ0E7O0FBVGlDO0FBQUEsbUJBVTNCSyxNQUFNLENBQUNDLGtCQUFQLENBQTBCO0FBQzlCRixjQUFBQSxPQUFPLEVBQUU7QUFDUEcsZ0JBQUFBLElBQUksRUFBRWxCLGlEQUFjZTtBQURiO0FBRHFCLGFBQTFCLENBVjJCOztBQUFBO0FBQUEsOENBZ0IxQkMsTUFoQjBCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQW5CTixtQkFBbUI7QUFBQTtBQUFBO0FBQUEsR0FBekI7QUFrQkEsSUFBTVMsV0FBVztBQUFBLDJRQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFFckJDLGFBRnFCO0FBQUE7QUFBQTtBQUFBOztBQUd2QkMsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksb0JBQVosRUFBa0NGLGFBQWEsQ0FBQ0csT0FBaEQ7QUFIdUIsOENBSWxCSCxhQUprQjs7QUFBQTtBQU16QjtBQUNBQyxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWjs7QUFQeUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBWEgsV0FBVztBQUFBO0FBQUE7QUFBQSxHQUFqQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb250ZXh0L0Nvbm5lY3QuanM/ODUxMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjb25maWcgZnJvbSBcIi4vY29uZmlnLmpzb25cIjtcclxuaW1wb3J0IHtcclxuICBjcmVhdGVDb250ZXh0LFxyXG4gIHVzZVN0YXRlLFxyXG4gIHVzZUVmZmVjdFxyXG59IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IHtcclxuICBCZWFjb25XYWxsZXRcclxufSBmcm9tICdAdGFxdWl0by9iZWFjb24td2FsbGV0JztcclxuaW1wb3J0IHtcclxuICBUZXpvc1Rvb2xraXRcclxufSBmcm9tIFwiQHRhcXVpdG8vdGFxdWl0b1wiO1xyXG5cclxuaW1wb3J0IHtcclxuICB1c2VSb3V0ZXJcclxufSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHNldHVwID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IFRlem9zID0gbmV3IFRlem9zVG9vbGtpdChjb25maWcucnBjKTtcclxuICByZXR1cm4gVGV6b3M7XHJcbn07XHJcblxyXG4gICAgZXhwb3J0IGNvbnN0IGNvbm5lY3RXYWxsZXRCZWFjb24gPSBhc3luYyAoKSA9PiB7XHJcblxyXG4gICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgIG5hbWU6IGNvbmZpZy5uYW1lLFxyXG4gICAgICAgIGljb25Vcmw6ICdodHRwczovL3Rlem9zdGFxdWl0by5pby9pbWcvZmF2aWNvbi5wbmcnLFxyXG4gICAgICAgIHByZWZlcnJlZE5ldHdvcms6IGNvbmZpZy5uZXR3b3JrLFxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHdhbGxldCA9IG5ldyBCZWFjb25XYWxsZXQob3B0aW9ucyk7XHJcbiAgICAgIC8vIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgICAvLyB3YWxsZXQuZGlzY29ubmVjdCgpO1xyXG4gICAgICBhd2FpdCB3YWxsZXQucmVxdWVzdFBlcm1pc3Npb25zKHtcclxuICAgICAgICBuZXR3b3JrOiB7XHJcbiAgICAgICAgICB0eXBlOiBjb25maWcubmV0d29yayxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgICBcclxuICAgICAgcmV0dXJuIHdhbGxldDtcclxuICAgIH07XHJcbiAgICBleHBvcnQgY29uc3QgY1dhbGxldGNvbmMgPSBhc3luYyAoKT0+e1xyXG4gICAgICBcclxuICAgICAgaWYgKGFjdGl2ZUFjY291bnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkFscmVhZHkgY29ubmVjdGVkOlwiLCBhY3RpdmVBY2NvdW50LmFkZHJlc3MpO1xyXG4gICAgICByZXR1cm4gYWN0aXZlQWNjb3VudDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIFRoZSB1c2VyIGlzIG5vdCBjb25uZWN0ZWQuIEEgYnV0dG9uIHNob3VsZCBiZSBkaXNwbGF5ZWQgd2hlcmUgdGhlIHVzZXIgY2FuIGNvbm5lY3QgdG8gaGlzIHdhbGxldC5cclxuICAgICAgY29uc29sZS5sb2coXCJOb3QgY29ubmVjdGVkIVwiKTtcclxuICAgIH1cclxuICAgIH0iXSwibmFtZXMiOlsiY29uZmlnIiwiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQmVhY29uV2FsbGV0IiwiVGV6b3NUb29sa2l0IiwidXNlUm91dGVyIiwic2V0dXAiLCJUZXpvcyIsInJwYyIsImNvbm5lY3RXYWxsZXRCZWFjb24iLCJvcHRpb25zIiwibmFtZSIsImljb25VcmwiLCJwcmVmZXJyZWROZXR3b3JrIiwibmV0d29yayIsIndhbGxldCIsInJlcXVlc3RQZXJtaXNzaW9ucyIsInR5cGUiLCJjV2FsbGV0Y29uYyIsImFjdGl2ZUFjY291bnQiLCJjb25zb2xlIiwibG9nIiwiYWRkcmVzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/Connect.js\n");

/***/ })

});