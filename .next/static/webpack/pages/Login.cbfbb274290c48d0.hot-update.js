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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_SolWag_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var C_SolWag_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var C_SolWag_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_SolWag_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_phantomLogo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/phantomLogo.png */ \"./assets/phantomLogo.png\");\n/* harmony import */ var _taquito_taquito__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taquito/taquito */ \"./node_modules/@taquito/taquito/dist/taquito.es6.js\");\n/* harmony import */ var _taquito_beacon_wallet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taquito/beacon-wallet */ \"./node_modules/@taquito/beacon-wallet/dist/taquito-beacon-wallet.es6.js\");\n/* harmony import */ var _context_interact__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../context/interact */ \"./context/interact.js\");\n/* harmony import */ var _context_connect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../context/connect */ \"./context/connect.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);\n\n\nvar _jsxFileName = \"C:\\\\SolWag\\\\pages\\\\Login.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n // import { SolWagContext } from '../context/solWagContext';\n// import LoginBg from '../assets/LoginBg.webp';\n\n\n\n\n\n\nvar style = {\n  wrapper: \"h-screen w-full bg-primary text-white items-center flex justify-center bg-login-bg\",\n  container: \"bg-slate-300/10 p-16 rounded-2xl flex flex-col items-center\",\n  heading: \"bg-gradient-to-r from-[#D900FA] via-[#00DBFD] to-[#00FF9D] text-transparent bg-clip-text w-full font-bold text-left flex items-center text-3xl p-4 overflow-hidden\",\n  connectButton: \"bg-indigo-600 py-2 px-4 rounded-xl hover:bg-indigo-900\" // button: ``\n\n};\n\nvar Login = function Login() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined),\n      Tezos = _useState[0],\n      setTezos = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"No Operations Performed\"),\n      status = _useState2[0],\n      setStatus = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),\n      value = _useState3[0],\n      setValue = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),\n      loader = _useState4[0],\n      setLoader = _useState4[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    console.log(\"run\");\n    (0,_context_connect__WEBPACK_IMPORTED_MODULE_8__.setup)().then(setTezos)[\"catch\"](console.error);\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    if (Tezos === undefined) return;\n    (0,_context_interact__WEBPACK_IMPORTED_MODULE_7__.getValue)(Tezos).then(setValue).then(function () {\n      return setLoader(false);\n    })[\"catch\"](console.error);\n    var timer = setInterval(function () {\n      (0,_context_interact__WEBPACK_IMPORTED_MODULE_7__.getValue)(Tezos).then(setValue)[\"catch\"](console.error);\n    }, 60000);\n    return function () {\n      clearInterval(timer);\n    };\n  }, [Tezos]);\n\n  var handleEvent = /*#__PURE__*/function () {\n    var _ref = (0,C_SolWag_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/C_SolWag_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e, func, params) {\n      var wal;\n      return C_SolWag_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              e.preventDefault();\n              _context.prev = 1;\n              _context.next = 4;\n              return (0,_context_connect__WEBPACK_IMPORTED_MODULE_8__.connectWalletBeacon)();\n\n            case 4:\n              wal = _context.sent;\n              Tezos.setWalletProvider(wal);\n              setLoader(true);\n              _context.next = 9;\n              return func(Tezos, params, setStatus);\n\n            case 9:\n              _context.next = 11;\n              return (0,_context_interact__WEBPACK_IMPORTED_MODULE_7__.getValue)(Tezos).then(setValue).then(function () {\n                return setLoader(false);\n              });\n\n            case 11:\n              _context.next = 17;\n              break;\n\n            case 13:\n              _context.prev = 13;\n              _context.t0 = _context[\"catch\"](1);\n              console.error(_context.t0);\n              alert(\"Couldn't connect wallet\");\n\n            case 17:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[1, 13]]);\n    }));\n\n    return function handleEvent(_x, _x2, _x3) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(SolWagContext),\n      connectWallet = _useContext.connectWallet,\n      setCurrentAccount = _useContext.setCurrentAccount;\n\n  var disconnectWallet = /*#__PURE__*/function () {\n    var _ref2 = (0,C_SolWag_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/C_SolWag_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {\n      var _window, solana;\n\n      return C_SolWag_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _window = window, solana = _window.solana;\n\n              if (!solana) {\n                _context2.next = 6;\n                break;\n              }\n\n              _context2.next = 4;\n              return solana.disconnect();\n\n            case 4:\n              setCurrentAccount(null);\n              console.log(\"disconnect\"); // disconnectWallet()\n\n            case 6:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function disconnectWallet() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"div\", {\n    className: style.wrapper,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"div\", {\n      className: style.container,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n        src: _assets_phantomLogo_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        height: 50,\n        width: 50\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"h1\", {\n        className: style.heading,\n        children: \"Sol-Wag\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"button\", {\n        onClick: connectWallet,\n        className: style.connectButton,\n        children: \"Connect to wallet\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"button\", {\n        onClick: disconnectWallet,\n        children: \"Disconnect\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 13\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 73,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Login, \"Jrz0GjtE/UiNWNsCQMUBfL9Ybk0=\");\n\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\n\nvar _c;\n\n$RefreshReg$(_c, \"Login\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBWUgsQ0FoRUQ7O0dBQU01Qjs7S0FBQUE7QUFrRU4sK0RBQWVBLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvTG9naW4uanM/Y2EwZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBQaGFudG9tTG9nbyBmcm9tICcuLi9hc3NldHMvcGhhbnRvbUxvZ28ucG5nJztcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuLy8gaW1wb3J0IHsgU29sV2FnQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvc29sV2FnQ29udGV4dCc7XHJcbi8vIGltcG9ydCBMb2dpbkJnIGZyb20gJy4uL2Fzc2V0cy9Mb2dpbkJnLndlYnAnO1xyXG5pbXBvcnQgeyBUZXpvc1Rvb2xraXQgfSBmcm9tIFwiQHRhcXVpdG8vdGFxdWl0b1wiO1xyXG5pbXBvcnQgeyBCZWFjb25XYWxsZXQgfSBmcm9tIFwiQHRhcXVpdG8vYmVhY29uLXdhbGxldFwiO1xyXG5pbXBvcnQgeyBhZGQsIGdldFZhbHVlLCBtdWx0aXBseSwgdXBkYXRlIH0gZnJvbSBcIi4uL2NvbnRleHQvaW50ZXJhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdFdhbGxldEJlYWNvbiwgc2V0dXAgfSBmcm9tIFwiLi4vY29udGV4dC9jb25uZWN0XCI7XHJcbmNvbnN0IHN0eWxlID0ge1xyXG4gICAgd3JhcHBlcjogYGgtc2NyZWVuIHctZnVsbCBiZy1wcmltYXJ5IHRleHQtd2hpdGUgaXRlbXMtY2VudGVyIGZsZXgganVzdGlmeS1jZW50ZXIgYmctbG9naW4tYmdgLFxyXG4gICAgY29udGFpbmVyOiBgYmctc2xhdGUtMzAwLzEwIHAtMTYgcm91bmRlZC0yeGwgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJgLFxyXG4gICAgaGVhZGluZzogYGJnLWdyYWRpZW50LXRvLXIgZnJvbS1bI0Q5MDBGQV0gdmlhLVsjMDBEQkZEXSB0by1bIzAwRkY5RF0gdGV4dC10cmFuc3BhcmVudCBiZy1jbGlwLXRleHQgdy1mdWxsIGZvbnQtYm9sZCB0ZXh0LWxlZnQgZmxleCBpdGVtcy1jZW50ZXIgdGV4dC0zeGwgcC00IG92ZXJmbG93LWhpZGRlbmAsXHJcbiAgICBjb25uZWN0QnV0dG9uOiBgYmctaW5kaWdvLTYwMCBweS0yIHB4LTQgcm91bmRlZC14bCBob3ZlcjpiZy1pbmRpZ28tOTAwYFxyXG4gICAgLy8gYnV0dG9uOiBgYFxyXG59XHJcblxyXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtUZXpvcywgc2V0VGV6b3NdID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcclxuICAgIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZShcIk5vIE9wZXJhdGlvbnMgUGVyZm9ybWVkXCIpO1xyXG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtsb2FkZXIsIHNldExvYWRlcl0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJydW5cIik7XHJcbiAgICAgICAgc2V0dXAoKS50aGVuKHNldFRlem9zKS5jYXRjaChjb25zb2xlLmVycm9yKTtcclxuICAgICAgfSwgW10pO1xyXG4gICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChUZXpvcyA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICAgICAgZ2V0VmFsdWUoVGV6b3MpXHJcbiAgICAgICAgICAudGhlbihzZXRWYWx1ZSlcclxuICAgICAgICAgIC50aGVuKCgpID0+IHNldExvYWRlcihmYWxzZSkpXHJcbiAgICAgICAgICAuY2F0Y2goY29uc29sZS5lcnJvcik7XHJcbiAgICAgICAgY29uc3QgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICBnZXRWYWx1ZShUZXpvcykudGhlbihzZXRWYWx1ZSkuY2F0Y2goY29uc29sZS5lcnJvcik7XHJcbiAgICAgICAgfSwgNjAwMDApO1xyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgIH0sIFtUZXpvc10pO1xyXG4gICAgXHJcbiAgICAgIGNvbnN0IGhhbmRsZUV2ZW50ID0gYXN5bmMgKGUsIGZ1bmMsIHBhcmFtcykgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3Qgd2FsID0gYXdhaXQgY29ubmVjdFdhbGxldEJlYWNvbigpO1xyXG4gICAgICAgICAgVGV6b3Muc2V0V2FsbGV0UHJvdmlkZXIod2FsKTtcclxuICAgICAgICAgIHNldExvYWRlcih0cnVlKTtcclxuICAgICAgICAgIGF3YWl0IGZ1bmMoVGV6b3MsIHBhcmFtcywgc2V0U3RhdHVzKTtcclxuICAgICAgICAgIGF3YWl0IGdldFZhbHVlKFRlem9zKVxyXG4gICAgICAgICAgICAudGhlbihzZXRWYWx1ZSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gc2V0TG9hZGVyKGZhbHNlKSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICBhbGVydChcIkNvdWxkbid0IGNvbm5lY3Qgd2FsbGV0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIGNvbnN0IHsgY29ubmVjdFdhbGxldCwgc2V0Q3VycmVudEFjY291bnQgfSA9IHVzZUNvbnRleHQoU29sV2FnQ29udGV4dCk7XHJcbiAgXHJcblxyXG4gICAgY29uc3QgZGlzY29ubmVjdFdhbGxldCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCB7IHNvbGFuYSB9ID0gd2luZG93O1xyXG4gICAgICAgIGlmIChzb2xhbmEpIHtcclxuICAgICAgICAgIGF3YWl0IHNvbGFuYS5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICBzZXRDdXJyZW50QWNjb3VudChudWxsKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJkaXNjb25uZWN0XCIpXHJcbiAgICAgICAgICAgIC8vIGRpc2Nvbm5lY3RXYWxsZXQoKVxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS53cmFwcGVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtQaGFudG9tTG9nb30gaGVpZ2h0PXs1MH0gd2lkdGg9ezUwfS8+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZS5oZWFkaW5nfT5Tb2wtV2FnPC9oMT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjb25uZWN0V2FsbGV0fSBjbGFzc05hbWU9e3N0eWxlLmNvbm5lY3RCdXR0b259PkNvbm5lY3QgdG8gd2FsbGV0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17ZGlzY29ubmVjdFdhbGxldH0+RGlzY29ubmVjdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIExvZ2luXHJcbiAgICAgICAgICAgIDxoMT4gV2FsbGV0IEFkZHJlc3M6IHt3YWxsZXRBZGRyZXNzfSA8L2gxPiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiUGhhbnRvbUxvZ28iLCJ1c2VDb250ZXh0IiwiVGV6b3NUb29sa2l0IiwiQmVhY29uV2FsbGV0IiwiYWRkIiwiZ2V0VmFsdWUiLCJtdWx0aXBseSIsInVwZGF0ZSIsImNvbm5lY3RXYWxsZXRCZWFjb24iLCJzZXR1cCIsInN0eWxlIiwid3JhcHBlciIsImNvbnRhaW5lciIsImhlYWRpbmciLCJjb25uZWN0QnV0dG9uIiwiTG9naW4iLCJ1bmRlZmluZWQiLCJUZXpvcyIsInNldFRlem9zIiwic3RhdHVzIiwic2V0U3RhdHVzIiwidmFsdWUiLCJzZXRWYWx1ZSIsImxvYWRlciIsInNldExvYWRlciIsImNvbnNvbGUiLCJsb2ciLCJ0aGVuIiwiZXJyb3IiLCJ0aW1lciIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImhhbmRsZUV2ZW50IiwiZSIsImZ1bmMiLCJwYXJhbXMiLCJwcmV2ZW50RGVmYXVsdCIsIndhbCIsInNldFdhbGxldFByb3ZpZGVyIiwiYWxlcnQiLCJTb2xXYWdDb250ZXh0IiwiY29ubmVjdFdhbGxldCIsInNldEN1cnJlbnRBY2NvdW50IiwiZGlzY29ubmVjdFdhbGxldCIsIndpbmRvdyIsInNvbGFuYSIsImRpc2Nvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Login.js\n");

/***/ })

});