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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setup\": function() { return /* binding */ setup; },\n/* harmony export */   \"connectWalletBeacon\": function() { return /* binding */ connectWalletBeacon; }\n/* harmony export */ });\n/* harmony import */ var C_SolWag_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var C_SolWag_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var C_SolWag_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_SolWag_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.json */ \"./context/config.json\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _taquito_beacon_wallet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taquito/beacon-wallet */ \"./node_modules/@taquito/beacon-wallet/dist/taquito-beacon-wallet.es6.js\");\n/* harmony import */ var _taquito_taquito__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taquito/taquito */ \"./node_modules/@taquito/taquito/dist/taquito.es6.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nvar router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\nvar setup = /*#__PURE__*/function () {\n  var _ref = (0,C_SolWag_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/C_SolWag_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n    var Tezos;\n    return C_SolWag_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            Tezos = new _taquito_taquito__WEBPACK_IMPORTED_MODULE_5__.TezosToolkit(_config_json__WEBPACK_IMPORTED_MODULE_2__.rpc);\n            return _context.abrupt(\"return\", Tezos);\n\n          case 2:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function setup() {\n    return _ref.apply(this, arguments);\n  };\n}();\nvar connectWalletBeacon = /*#__PURE__*/function () {\n  var _ref2 = (0,C_SolWag_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/C_SolWag_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {\n    var options, wallet;\n    return C_SolWag_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            options = {\n              name: _config_json__WEBPACK_IMPORTED_MODULE_2__.name,\n              iconUrl: 'https://tezostaquito.io/img/favicon.png',\n              preferredNetwork: _config_json__WEBPACK_IMPORTED_MODULE_2__.network\n            };\n            wallet = new _taquito_beacon_wallet__WEBPACK_IMPORTED_MODULE_4__.BeaconWallet(options); // wallet.disconnect();\n\n            _context2.next = 4;\n            return wallet.requestPermissions({\n              network: {\n                type: _config_json__WEBPACK_IMPORTED_MODULE_2__.network\n              }\n            });\n\n          case 4:\n            router.push('/');\n            return _context2.abrupt(\"return\", wallet);\n\n          case 6:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function connectWalletBeacon() {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2Nvbm5lY3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBTUE7QUFHQTtBQUlBO0FBR0EsSUFBTU8sTUFBTSxHQUFHRCxzREFBUyxFQUF4QjtBQUVPLElBQU1FLEtBQUs7QUFBQSwwUUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDYkMsWUFBQUEsS0FEYSxHQUNMLElBQUlKLDBEQUFKLENBQWlCTCw2Q0FBakIsQ0FESztBQUFBLDZDQUVaUyxLQUZZOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQUxELEtBQUs7QUFBQTtBQUFBO0FBQUEsR0FBWDtBQUlBLElBQU1HLG1CQUFtQjtBQUFBLDJRQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUUzQkMsWUFBQUEsT0FGMkIsR0FFakI7QUFDZEMsY0FBQUEsSUFBSSxFQUFFYiw4Q0FEUTtBQUVkYyxjQUFBQSxPQUFPLEVBQUUseUNBRks7QUFHZEMsY0FBQUEsZ0JBQWdCLEVBQUVmLGlEQUFjZ0I7QUFIbEIsYUFGaUI7QUFPM0JDLFlBQUFBLE1BUDJCLEdBT2xCLElBQUliLGdFQUFKLENBQWlCUSxPQUFqQixDQVBrQixFQVNqQzs7QUFUaUM7QUFBQSxtQkFVM0JLLE1BQU0sQ0FBQ0Msa0JBQVAsQ0FBMEI7QUFDOUJGLGNBQUFBLE9BQU8sRUFBRTtBQUNQRyxnQkFBQUEsSUFBSSxFQUFFbkIsaURBQWNnQjtBQURiO0FBRHFCLGFBQTFCLENBVjJCOztBQUFBO0FBZWpDVCxZQUFBQSxNQUFNLENBQUNhLElBQVAsQ0FBWSxHQUFaO0FBZmlDLDhDQWdCMUJILE1BaEIwQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFuQk4sbUJBQW1CO0FBQUE7QUFBQTtBQUFBLEdBQXpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRleHQvY29ubmVjdC5qcz8yZjZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNvbmZpZyBmcm9tIFwiLi9jb25maWcuanNvblwiO1xyXG5pbXBvcnQge1xyXG4gIGNyZWF0ZUNvbnRleHQsXHJcbiAgdXNlU3RhdGUsXHJcbiAgdXNlRWZmZWN0XHJcbn0gZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQge1xyXG4gIEJlYWNvbldhbGxldFxyXG59IGZyb20gJ0B0YXF1aXRvL2JlYWNvbi13YWxsZXQnO1xyXG5pbXBvcnQge1xyXG4gIFRlem9zVG9vbGtpdFxyXG59IGZyb20gXCJAdGFxdWl0by90YXF1aXRvXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIHVzZVJvdXRlclxyXG59IGZyb20gJ25leHQvcm91dGVyJztcclxuY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0dXAgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgVGV6b3MgPSBuZXcgVGV6b3NUb29sa2l0KGNvbmZpZy5ycGMpO1xyXG4gIHJldHVybiBUZXpvcztcclxufTtcclxuZXhwb3J0IGNvbnN0IGNvbm5lY3RXYWxsZXRCZWFjb24gPSBhc3luYyAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICBuYW1lOiBjb25maWcubmFtZSxcclxuICAgIGljb25Vcmw6ICdodHRwczovL3Rlem9zdGFxdWl0by5pby9pbWcvZmF2aWNvbi5wbmcnLFxyXG4gICAgcHJlZmVycmVkTmV0d29yazogY29uZmlnLm5ldHdvcmssXHJcbiAgfVxyXG4gIGNvbnN0IHdhbGxldCA9IG5ldyBCZWFjb25XYWxsZXQob3B0aW9ucyk7XHJcblxyXG4gIC8vIHdhbGxldC5kaXNjb25uZWN0KCk7XHJcbiAgYXdhaXQgd2FsbGV0LnJlcXVlc3RQZXJtaXNzaW9ucyh7XHJcbiAgICBuZXR3b3JrOiB7XHJcbiAgICAgIHR5cGU6IGNvbmZpZy5uZXR3b3JrLFxyXG4gICAgfSxcclxuICB9KTtcclxuICByb3V0ZXIucHVzaCgnLycpO1xyXG4gIHJldHVybiB3YWxsZXQ7XHJcbn07Il0sIm5hbWVzIjpbImNvbmZpZyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkJlYWNvbldhbGxldCIsIlRlem9zVG9vbGtpdCIsInVzZVJvdXRlciIsInJvdXRlciIsInNldHVwIiwiVGV6b3MiLCJycGMiLCJjb25uZWN0V2FsbGV0QmVhY29uIiwib3B0aW9ucyIsIm5hbWUiLCJpY29uVXJsIiwicHJlZmVycmVkTmV0d29yayIsIm5ldHdvcmsiLCJ3YWxsZXQiLCJyZXF1ZXN0UGVybWlzc2lvbnMiLCJ0eXBlIiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/connect.js\n");

/***/ })

});