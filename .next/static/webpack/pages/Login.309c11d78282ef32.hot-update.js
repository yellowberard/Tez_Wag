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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_SolWag_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var C_SolWag_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var C_SolWag_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_SolWag_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_phantomLogo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/phantomLogo.png */ \"./assets/phantomLogo.png\");\n/* harmony import */ var _taquito_taquito__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taquito/taquito */ \"./node_modules/@taquito/taquito/dist/taquito.es6.js\");\n/* harmony import */ var _taquito_beacon_wallet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taquito/beacon-wallet */ \"./node_modules/@taquito/beacon-wallet/dist/taquito-beacon-wallet.es6.js\");\n/* harmony import */ var _context_interact__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../context/interact */ \"./context/interact.js\");\n/* harmony import */ var _context_connect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../context/connect */ \"./context/connect.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);\n\n\nvar _jsxFileName = \"C:\\\\SolWag\\\\pages\\\\Login.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n // import { SolWagContext } from '../context/solWagContext';\n// import LoginBg from '../assets/LoginBg.webp';\n\n\n\n\n\n\nvar style = {\n  wrapper: \"h-screen w-full bg-primary text-white items-center flex justify-center bg-login-bg\",\n  container: \"bg-slate-300/10 p-16 rounded-2xl flex flex-col items-center\",\n  heading: \"bg-gradient-to-r from-[#D900FA] via-[#00DBFD] to-[#00FF9D] text-transparent bg-clip-text w-full font-bold text-left flex items-center text-3xl p-4 overflow-hidden\",\n  connectButton: \"bg-indigo-600 py-2 px-4 rounded-xl hover:bg-indigo-900\" // button: ``\n\n};\n\nvar Login = function Login() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined),\n      Tezos = _useState[0],\n      setTezos = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"No Operations Performed\"),\n      status = _useState2[0],\n      setStatus = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),\n      value = _useState3[0],\n      setValue = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),\n      loader = _useState4[0],\n      setLoader = _useState4[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    console.log(\"run\");\n    (0,_context_connect__WEBPACK_IMPORTED_MODULE_8__.setup)().then(setTezos)[\"catch\"](console.error);\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    if (Tezos === undefined) return;\n    (0,_context_interact__WEBPACK_IMPORTED_MODULE_7__.getValue)(Tezos).then(setValue).then(function () {\n      return setLoader(false);\n    })[\"catch\"](console.error);\n    var timer = setInterval(function () {\n      (0,_context_interact__WEBPACK_IMPORTED_MODULE_7__.getValue)(Tezos).then(setValue)[\"catch\"](console.error);\n    }, 60000);\n    return function () {\n      clearInterval(timer);\n    };\n  }, [Tezos]);\n\n  var handleEvent = /*#__PURE__*/function () {\n    var _ref = (0,C_SolWag_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/C_SolWag_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e, func, params) {\n      var wal;\n      return C_SolWag_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              e.preventDefault();\n              _context.prev = 1;\n              _context.next = 4;\n              return (0,_context_connect__WEBPACK_IMPORTED_MODULE_8__.connectWalletBeacon)();\n\n            case 4:\n              wal = _context.sent;\n              Tezos.setWalletProvider(wal);\n              setLoader(true);\n              _context.next = 9;\n              return func(Tezos, params, setStatus);\n\n            case 9:\n              _context.next = 11;\n              return (0,_context_interact__WEBPACK_IMPORTED_MODULE_7__.getValue)(Tezos).then(setValue).then(function () {\n                return setLoader(false);\n              });\n\n            case 11:\n              _context.next = 17;\n              break;\n\n            case 13:\n              _context.prev = 13;\n              _context.t0 = _context[\"catch\"](1);\n              console.error(_context.t0);\n              alert(\"Couldn't connect wallet\");\n\n            case 17:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[1, 13]]);\n    }));\n\n    return function handleEvent(_x, _x2, _x3) {\n      return _ref.apply(this, arguments);\n    };\n  }(); // const { connectWallet, setCurrentAccount } = useContext(SolWagContext);\n  // const disconnectWallet = async () => {\n  //     const { solana } = window;\n  //     if (solana) {\n  //       await solana.disconnect();\n  //       setCurrentAccount(null);\n  //         console.log(\"disconnect\")\n  //         // disconnectWallet()\n  //     }\n  //   };\n\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"div\", {\n    className: style.wrapper,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"div\", {\n      className: style.container,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n        src: _assets_phantomLogo_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        height: 50,\n        width: 50\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"h1\", {\n        className: style.heading,\n        children: \"Sol-Wag\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"button\", {\n        onClick: _context_connect__WEBPACK_IMPORTED_MODULE_8__.connectWalletBeacon,\n        className: style.connectButton,\n        children: \"Connect to wallet\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 13\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 13\n    }, _this), \"Login\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"h1\", {\n      children: [\" Wallet Address: \", walletAddress, \" \"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 73,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Login, \"Ca6O8E3KO3A0Szl2VHyzGbhdFPA=\");\n\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\n\nvar _c;\n\n$RefreshReg$(_c, \"Login\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBLEtBQWpCLENBeEJjLENBdUNoQjtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUV0QixLQUFLLENBQUNDLE9BQXRCO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUVELEtBQUssQ0FBQ0UsU0FBdEI7QUFBQSw4QkFDSSw4REFBQyxtREFBRDtBQUFPLFdBQUcsRUFBRVosK0RBQVo7QUFBeUIsY0FBTSxFQUFFLEVBQWpDO0FBQXFDLGFBQUssRUFBRTtBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSTtBQUFJLGlCQUFTLEVBQUVVLEtBQUssQ0FBQ0csT0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSixlQUdBO0FBQVEsZUFBTyxFQUFFTCxpRUFBakI7QUFBc0MsaUJBQVMsRUFBRUUsS0FBSyxDQUFDSSxhQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLHdCQVFJO0FBQUEsc0NBQXNCMEIsYUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFZSCxDQWhFRDs7R0FBTXpCOztLQUFBQTtBQWtFTiwrREFBZUEsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9Mb2dpbi5qcz9jYTBmIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IFBoYW50b21Mb2dvIGZyb20gJy4uL2Fzc2V0cy9waGFudG9tTG9nby5wbmcnO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG4vLyBpbXBvcnQgeyBTb2xXYWdDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9zb2xXYWdDb250ZXh0JztcclxuLy8gaW1wb3J0IExvZ2luQmcgZnJvbSAnLi4vYXNzZXRzL0xvZ2luQmcud2VicCc7XHJcbmltcG9ydCB7IFRlem9zVG9vbGtpdCB9IGZyb20gXCJAdGFxdWl0by90YXF1aXRvXCI7XHJcbmltcG9ydCB7IEJlYWNvbldhbGxldCB9IGZyb20gXCJAdGFxdWl0by9iZWFjb24td2FsbGV0XCI7XHJcbmltcG9ydCB7IGFkZCwgZ2V0VmFsdWUsIG11bHRpcGx5LCB1cGRhdGUgfSBmcm9tIFwiLi4vY29udGV4dC9pbnRlcmFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0V2FsbGV0QmVhY29uLCBzZXR1cCB9IGZyb20gXCIuLi9jb250ZXh0L2Nvbm5lY3RcIjtcclxuY29uc3Qgc3R5bGUgPSB7XHJcbiAgICB3cmFwcGVyOiBgaC1zY3JlZW4gdy1mdWxsIGJnLXByaW1hcnkgdGV4dC13aGl0ZSBpdGVtcy1jZW50ZXIgZmxleCBqdXN0aWZ5LWNlbnRlciBiZy1sb2dpbi1iZ2AsXHJcbiAgICBjb250YWluZXI6IGBiZy1zbGF0ZS0zMDAvMTAgcC0xNiByb3VuZGVkLTJ4bCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlcmAsXHJcbiAgICBoZWFkaW5nOiBgYmctZ3JhZGllbnQtdG8tciBmcm9tLVsjRDkwMEZBXSB2aWEtWyMwMERCRkRdIHRvLVsjMDBGRjlEXSB0ZXh0LXRyYW5zcGFyZW50IGJnLWNsaXAtdGV4dCB3LWZ1bGwgZm9udC1ib2xkIHRleHQtbGVmdCBmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LTN4bCBwLTQgb3ZlcmZsb3ctaGlkZGVuYCxcclxuICAgIGNvbm5lY3RCdXR0b246IGBiZy1pbmRpZ28tNjAwIHB5LTIgcHgtNCByb3VuZGVkLXhsIGhvdmVyOmJnLWluZGlnby05MDBgXHJcbiAgICAvLyBidXR0b246IGBgXHJcbn1cclxuXHJcbmNvbnN0IExvZ2luID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW1Rlem9zLCBzZXRUZXpvc10gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xyXG4gICAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKFwiTm8gT3BlcmF0aW9ucyBQZXJmb3JtZWRcIik7XHJcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2xvYWRlciwgc2V0TG9hZGVyXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJ1blwiKTtcclxuICAgICAgICBzZXR1cCgpLnRoZW4oc2V0VGV6b3MpLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xyXG4gICAgICB9LCBbXSk7XHJcbiAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKFRlem9zID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgICAgICBnZXRWYWx1ZShUZXpvcylcclxuICAgICAgICAgIC50aGVuKHNldFZhbHVlKVxyXG4gICAgICAgICAgLnRoZW4oKCkgPT4gc2V0TG9hZGVyKGZhbHNlKSlcclxuICAgICAgICAgIC5jYXRjaChjb25zb2xlLmVycm9yKTtcclxuICAgICAgICBjb25zdCB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgIGdldFZhbHVlKFRlem9zKS50aGVuKHNldFZhbHVlKS5jYXRjaChjb25zb2xlLmVycm9yKTtcclxuICAgICAgICB9LCA2MDAwMCk7XHJcbiAgICBcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XHJcbiAgICAgICAgfTtcclxuICAgICAgfSwgW1Rlem9zXSk7XHJcbiAgICBcclxuICAgICAgY29uc3QgaGFuZGxlRXZlbnQgPSBhc3luYyAoZSwgZnVuYywgcGFyYW1zKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCB3YWwgPSBhd2FpdCBjb25uZWN0V2FsbGV0QmVhY29uKCk7XHJcbiAgICAgICAgICBUZXpvcy5zZXRXYWxsZXRQcm92aWRlcih3YWwpO1xyXG4gICAgICAgICAgc2V0TG9hZGVyKHRydWUpO1xyXG4gICAgICAgICAgYXdhaXQgZnVuYyhUZXpvcywgcGFyYW1zLCBzZXRTdGF0dXMpO1xyXG4gICAgICAgICAgYXdhaXQgZ2V0VmFsdWUoVGV6b3MpXHJcbiAgICAgICAgICAgIC50aGVuKHNldFZhbHVlKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiBzZXRMb2FkZXIoZmFsc2UpKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgIGFsZXJ0KFwiQ291bGRuJ3QgY29ubmVjdCB3YWxsZXRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgLy8gY29uc3QgeyBjb25uZWN0V2FsbGV0LCBzZXRDdXJyZW50QWNjb3VudCB9ID0gdXNlQ29udGV4dChTb2xXYWdDb250ZXh0KTtcclxuICBcclxuXHJcbiAgICAvLyBjb25zdCBkaXNjb25uZWN0V2FsbGV0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgLy8gICAgIGNvbnN0IHsgc29sYW5hIH0gPSB3aW5kb3c7XHJcbiAgICAvLyAgICAgaWYgKHNvbGFuYSkge1xyXG4gICAgLy8gICAgICAgYXdhaXQgc29sYW5hLmRpc2Nvbm5lY3QoKTtcclxuICAgIC8vICAgICAgIHNldEN1cnJlbnRBY2NvdW50KG51bGwpO1xyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcImRpc2Nvbm5lY3RcIilcclxuICAgIC8vICAgICAgICAgLy8gZGlzY29ubmVjdFdhbGxldCgpXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLndyYXBwZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e1BoYW50b21Mb2dvfSBoZWlnaHQ9ezUwfSB3aWR0aD17NTB9Lz5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlLmhlYWRpbmd9PlNvbC1XYWc8L2gxPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2Nvbm5lY3RXYWxsZXRCZWFjb259IGNsYXNzTmFtZT17c3R5bGUuY29ubmVjdEJ1dHRvbn0+Q29ubmVjdCB0byB3YWxsZXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgey8qIDxidXR0b24gb25DbGljaz17ZGlzY29ubmVjdFdhbGxldH0+RGlzY29ubmVjdDwvYnV0dG9uPiAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICAgIDxoMT4gV2FsbGV0IEFkZHJlc3M6IHt3YWxsZXRBZGRyZXNzfSA8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJQaGFudG9tTG9nbyIsInVzZUNvbnRleHQiLCJUZXpvc1Rvb2xraXQiLCJCZWFjb25XYWxsZXQiLCJhZGQiLCJnZXRWYWx1ZSIsIm11bHRpcGx5IiwidXBkYXRlIiwiY29ubmVjdFdhbGxldEJlYWNvbiIsInNldHVwIiwic3R5bGUiLCJ3cmFwcGVyIiwiY29udGFpbmVyIiwiaGVhZGluZyIsImNvbm5lY3RCdXR0b24iLCJMb2dpbiIsInVuZGVmaW5lZCIsIlRlem9zIiwic2V0VGV6b3MiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJ2YWx1ZSIsInNldFZhbHVlIiwibG9hZGVyIiwic2V0TG9hZGVyIiwiY29uc29sZSIsImxvZyIsInRoZW4iLCJlcnJvciIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiaGFuZGxlRXZlbnQiLCJlIiwiZnVuYyIsInBhcmFtcyIsInByZXZlbnREZWZhdWx0Iiwid2FsIiwic2V0V2FsbGV0UHJvdmlkZXIiLCJhbGVydCIsIndhbGxldEFkZHJlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Login.js\n");

/***/ })

});