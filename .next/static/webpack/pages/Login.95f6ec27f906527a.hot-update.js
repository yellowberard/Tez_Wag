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

/***/ "./pages/Login.js":
/*!************************!*\
  !*** ./pages/Login.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_SolWag_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var C_SolWag_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var C_SolWag_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_SolWag_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_phantomLogo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/phantomLogo.png */ \"./assets/phantomLogo.png\");\n/* harmony import */ var _context_solWagContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/solWagContext */ \"./context/solWagContext.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _jsxFileName = \"C:\\\\SolWag\\\\pages\\\\Login.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n // import LoginBg from '../assets/LoginBg.webp';\n\n\nvar style = {\n  wrapper: \"h-screen w-full bg-primary text-white items-center flex justify-center bg-login-bg\",\n  container: \"bg-slate-300/10 p-16 rounded-2xl flex flex-col items-center\",\n  heading: \"bg-gradient-to-r from-[#D900FA] via-[#00DBFD] to-[#00FF9D] text-transparent bg-clip-text w-full font-bold text-left flex items-center text-3xl p-4 overflow-hidden\",\n  connectButton: \"bg-indigo-600 py-2 px-4 rounded-xl hover:bg-indigo-900\" // button: ``\n\n};\n\nvar Login = function Login() {\n  _s();\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_solWagContext__WEBPACK_IMPORTED_MODULE_5__.SolWagContext),\n      connectWallet = _useContext.connectWallet,\n      setCurrentAccount = _useContext.setCurrentAccount;\n\n  var disconnectWallet = /*#__PURE__*/function () {\n    var _ref = (0,C_SolWag_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/C_SolWag_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var _window, solana;\n\n      return C_SolWag_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _window = window, solana = _window.solana;\n\n              if (!solana) {\n                _context.next = 6;\n                break;\n              }\n\n              _context.next = 4;\n              return solana.disconnect();\n\n            case 4:\n              setCurrentAccount(null);\n              console.log(\"disconnect\"); // disconnectWallet()\n\n            case 6:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function disconnectWallet() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n    className: style.wrapper,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      className: style.container,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n        src: _assets_phantomLogo_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        height: 50,\n        width: 50\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"h1\", {\n        className: style.heading,\n        children: \"Sol-Wag\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"button\", {\n        onClick: connectWallet,\n        className: style.connectButton,\n        children: \"Connect to wallet\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"button\", {\n        onClick: disconnectWallet,\n        children: \"Disconnect\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 13\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Login, \"L8D8e4Yr8zeeFkdWCMjHKZqL0HU=\");\n\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\n\nvar _c;\n\n$RefreshReg$(_c, \"Login\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Mb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7O0FBQ0EsSUFBTUssS0FBSyxHQUFHO0FBQ1ZDLEVBQUFBLE9BQU8sc0ZBREc7QUFFVkMsRUFBQUEsU0FBUywrREFGQztBQUdWQyxFQUFBQSxPQUFPLHNLQUhHO0FBSVZDLEVBQUFBLGFBQWEsMERBSkgsQ0FLVjs7QUFMVSxDQUFkOztBQVFBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFDaEIsb0JBQTZDUCxpREFBVSxDQUFDQyxpRUFBRCxDQUF2RDtBQUFBLE1BQVFPLGFBQVIsZUFBUUEsYUFBUjtBQUFBLE1BQXVCQyxpQkFBdkIsZUFBdUJBLGlCQUF2Qjs7QUFHQSxNQUFNQyxnQkFBZ0I7QUFBQSw0UUFBRztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBQ0ZDLE1BREUsRUFDYkMsTUFEYSxXQUNiQSxNQURhOztBQUFBLG1CQUVqQkEsTUFGaUI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxxQkFHYkEsTUFBTSxDQUFDQyxVQUFQLEVBSGE7O0FBQUE7QUFJbkJKLGNBQUFBLGlCQUFpQixDQUFDLElBQUQsQ0FBakI7QUFDRUssY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUxpQixDQU1qQjs7QUFOaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBaEJMLGdCQUFnQjtBQUFBO0FBQUE7QUFBQSxLQUF0Qjs7QUFVQSxzQkFDSTtBQUFLLGFBQVMsRUFBRVIsS0FBSyxDQUFDQyxPQUF0QjtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFFRCxLQUFLLENBQUNFLFNBQXRCO0FBQUEsOEJBQ0ksOERBQUMsbURBQUQ7QUFBTyxXQUFHLEVBQUVMLCtEQUFaO0FBQXlCLGNBQU0sRUFBRSxFQUFqQztBQUFxQyxhQUFLLEVBQUU7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUk7QUFBSSxpQkFBUyxFQUFFRyxLQUFLLENBQUNHLE9BQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosZUFHQTtBQUFRLGVBQU8sRUFBRUcsYUFBakI7QUFBZ0MsaUJBQVMsRUFBRU4sS0FBSyxDQUFDSSxhQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhBLGVBSUE7QUFBUSxlQUFPLEVBQUVJLGdCQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVlILENBMUJEOztHQUFNSDs7S0FBQUE7QUE0Qk4sK0RBQWVBLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvTG9naW4uanM/Y2EwZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IFBoYW50b21Mb2dvIGZyb20gJy4uL2Fzc2V0cy9waGFudG9tTG9nby5wbmcnO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBTb2xXYWdDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9zb2xXYWdDb250ZXh0JztcclxuLy8gaW1wb3J0IExvZ2luQmcgZnJvbSAnLi4vYXNzZXRzL0xvZ2luQmcud2VicCc7XHJcbmNvbnN0IHN0eWxlID0ge1xyXG4gICAgd3JhcHBlcjogYGgtc2NyZWVuIHctZnVsbCBiZy1wcmltYXJ5IHRleHQtd2hpdGUgaXRlbXMtY2VudGVyIGZsZXgganVzdGlmeS1jZW50ZXIgYmctbG9naW4tYmdgLFxyXG4gICAgY29udGFpbmVyOiBgYmctc2xhdGUtMzAwLzEwIHAtMTYgcm91bmRlZC0yeGwgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJgLFxyXG4gICAgaGVhZGluZzogYGJnLWdyYWRpZW50LXRvLXIgZnJvbS1bI0Q5MDBGQV0gdmlhLVsjMDBEQkZEXSB0by1bIzAwRkY5RF0gdGV4dC10cmFuc3BhcmVudCBiZy1jbGlwLXRleHQgdy1mdWxsIGZvbnQtYm9sZCB0ZXh0LWxlZnQgZmxleCBpdGVtcy1jZW50ZXIgdGV4dC0zeGwgcC00IG92ZXJmbG93LWhpZGRlbmAsXHJcbiAgICBjb25uZWN0QnV0dG9uOiBgYmctaW5kaWdvLTYwMCBweS0yIHB4LTQgcm91bmRlZC14bCBob3ZlcjpiZy1pbmRpZ28tOTAwYFxyXG4gICAgLy8gYnV0dG9uOiBgYFxyXG59XHJcblxyXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgY29ubmVjdFdhbGxldCwgc2V0Q3VycmVudEFjY291bnQgfSA9IHVzZUNvbnRleHQoU29sV2FnQ29udGV4dCk7XHJcbiAgXHJcblxyXG4gICAgY29uc3QgZGlzY29ubmVjdFdhbGxldCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCB7IHNvbGFuYSB9ID0gd2luZG93O1xyXG4gICAgICAgIGlmIChzb2xhbmEpIHtcclxuICAgICAgICAgIGF3YWl0IHNvbGFuYS5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICBzZXRDdXJyZW50QWNjb3VudChudWxsKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJkaXNjb25uZWN0XCIpXHJcbiAgICAgICAgICAgIC8vIGRpc2Nvbm5lY3RXYWxsZXQoKVxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS53cmFwcGVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtQaGFudG9tTG9nb30gaGVpZ2h0PXs1MH0gd2lkdGg9ezUwfS8+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZS5oZWFkaW5nfT5Tb2wtV2FnPC9oMT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjb25uZWN0V2FsbGV0fSBjbGFzc05hbWU9e3N0eWxlLmNvbm5lY3RCdXR0b259PkNvbm5lY3QgdG8gd2FsbGV0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17ZGlzY29ubmVjdFdhbGxldH0+RGlzY29ubmVjdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIExvZ2luXHJcbiAgICAgICAgICAgIDxoMT4gV2FsbGV0IEFkZHJlc3M6IHt3YWxsZXRBZGRyZXNzfSA8L2gxPiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJJbWFnZSIsIlBoYW50b21Mb2dvIiwidXNlQ29udGV4dCIsIlNvbFdhZ0NvbnRleHQiLCJzdHlsZSIsIndyYXBwZXIiLCJjb250YWluZXIiLCJoZWFkaW5nIiwiY29ubmVjdEJ1dHRvbiIsIkxvZ2luIiwiY29ubmVjdFdhbGxldCIsInNldEN1cnJlbnRBY2NvdW50IiwiZGlzY29ubmVjdFdhbGxldCIsIndpbmRvdyIsInNvbGFuYSIsImRpc2Nvbm5lY3QiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Login.js\n");

/***/ })

});