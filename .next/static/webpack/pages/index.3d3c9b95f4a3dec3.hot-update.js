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

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_SolWag_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var C_SolWag_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var C_SolWag_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_SolWag_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _temp_avatar_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../temp/avatar.jpg */ \"./temp/avatar.jpg\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var _context_solWagContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/solWagContext */ \"./context/solWagContext.js\");\n/* harmony import */ var _assets_SolWagLogo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/SolWagLogo.png */ \"./assets/SolWagLogo.png\");\n/* harmony import */ var _taquito_taquito__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @taquito/taquito */ \"./node_modules/@taquito/taquito/dist/taquito.es6.js\");\n/* harmony import */ var _taquito_beacon_wallet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @taquito/beacon-wallet */ \"./node_modules/@taquito/beacon-wallet/dist/taquito-beacon-wallet.es6.js\");\n/* harmony import */ var _context_interact__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../context/interact */ \"./context/interact.js\");\n/* harmony import */ var _context_Connect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../context/Connect */ \"./context/Connect.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);\n\n\nvar _jsxFileName = \"C:\\\\SolWag\\\\components\\\\Navbar.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar style = {\n  wrapper: \"md:h-full md:w-52 h-16 w-full bg-primary text-white flex md:justify-around items-center px-4 fixed z-20 md:flex-col text-sm\",\n  leftMenu: \"gap-3 md:flex-col justify-center flex\",\n  logo: \"md:text-3xl flex cursor-pointer bg-gradient-to-r from-[#D900FA] via-[#00DBFD] to-[#00FF9D] text-transparent bg-clip-text w-full font-bold text-left ml-2\",\n  menuItem: \"md:text-lg text-sm text-white font-medium flex items-center my-4 cursor-pointer hover:text-slate-500\",\n  rightMenu: \"flex gap-3 items-center md:flex-col\",\n  userImageContainer: \"mr-2\",\n  userImage: \"h-10 w-10 mr-4 rounded-full p-px object-cover cursor-pointer\",\n  loginButton: \"flex items-center cursor-pointer rounded-full hover:bg-[#333333] px-4 py-1\",\n  loginText: \"ml-2\",\n  logoContainer: \"flex items-center\"\n};\n\nvar Navbar = function Navbar() {\n  _s();\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_solWagContext__WEBPACK_IMPORTED_MODULE_5__.SolWagContext),\n      currentAccount = _useContext.currentAccount,\n      currentUser = _useContext.currentUser,\n      setRide = _useContext.setRide,\n      setOffer = _useContext.setOffer,\n      offer = _useContext.offer;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(undefined),\n      Tezos = _useState[0],\n      setTezos = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"No Operations Performed\"),\n      status = _useState2[0],\n      setStatus = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),\n      value = _useState3[0],\n      setValue = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true),\n      loader = _useState4[0],\n      setLoader = _useState4[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    console.log(\"run\");\n    (0,_context_Connect__WEBPACK_IMPORTED_MODULE_10__.setup)().then(setTezos)[\"catch\"](console.error);\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    if (Tezos === undefined) return;\n    (0,_context_interact__WEBPACK_IMPORTED_MODULE_9__.getValue)(Tezos).then(setValue).then(function () {\n      return setLoader(false);\n    })[\"catch\"](console.error);\n    var timer = setInterval(function () {\n      (0,_context_interact__WEBPACK_IMPORTED_MODULE_9__.getValue)(Tezos).then(setValue)[\"catch\"](console.error);\n    }, 60000);\n    return function () {\n      clearInterval(timer);\n    };\n  }, [Tezos]);\n\n  var handleEvent = /*#__PURE__*/function () {\n    var _ref = (0,C_SolWag_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/C_SolWag_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e, func, params) {\n      var wal;\n      return C_SolWag_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              e.preventDefault();\n              _context.prev = 1;\n              _context.next = 4;\n              return (0,_context_Connect__WEBPACK_IMPORTED_MODULE_10__.connectWalletBeacon)();\n\n            case 4:\n              wal = _context.sent;\n              Tezos.setWalletProvider(wal);\n              setLoader(true);\n              _context.next = 9;\n              return func(Tezos, params, setStatus);\n\n            case 9:\n              _context.next = 11;\n              return (0,_context_interact__WEBPACK_IMPORTED_MODULE_9__.getValue)(Tezos).then(setValue).then(function () {\n                return setLoader(false);\n              });\n\n            case 11:\n              _context.next = 17;\n              break;\n\n            case 13:\n              _context.prev = 13;\n              _context.t0 = _context[\"catch\"](1);\n              console.error(_context.t0);\n              alert(\"Couldn't connect wallet\");\n\n            case 17:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[1, 13]]);\n    }));\n\n    return function handleEvent(_x, _x2, _x3) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"div\", {\n    className: style.wrapper,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"div\", {\n      className: style.leftMenu,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"div\", {\n        className: style.logoContainer,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n          src: _assets_SolWagLogo_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n          height: 30,\n          width: 30\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"div\", {\n          className: style.logo,\n          children: \"SolWag\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"div\", {\n        className: style.menuItem,\n        onClick: function onClick() {\n          setOffer('hidden');\n          setRide('block');\n          console.log(offer);\n        },\n        children: \"Ride Pool\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"div\", {\n        className: style.menuItem,\n        onClick: function onClick() {\n          setOffer('block');\n          setRide('hidden');\n        },\n        children: \"Offer Pool\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"div\", {\n        className: \"\".concat(style.menuItem, \" md:block hidden\"),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"a\", {\n          href: \"https://docs.google.com/document/d/1zsikHSiVQscm2C_g5148DYDx7WeUF6isvKnBppvdzWg/edit?usp=sharing\",\n          target: \"blank\",\n          rel: \"noreferrer\",\n          children: \"White Paper\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 62\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"div\", {\n      className: \"\".concat(style.rightMenu, \" md:block hidden\"),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"div\", {\n        className: style.menuItem,\n        children: \"Wallet connected\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"div\", {\n        className: style.userImageContainer\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 9\n      }, _this), currentAccount ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"div\", {\n        children: [currentAccount.slice(0, 6), \"...\", currentAccount.slice(39)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 11\n      }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"div\", {\n        className: style.loginButton,\n        onClick: function onClick() {\n          return (0,_context_Connect__WEBPACK_IMPORTED_MODULE_10__.connectWalletBeacon)();\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_12__.BsPerson, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"span\", {\n          className: style.loginText,\n          children: \"Log in\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 68,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Navbar, \"qMCRvUnbbCa+eflR1JCGHsdT9A8=\");\n\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\n\nvar _c;\n\n$RefreshReg$(_c, \"Navbar\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UyxFQUFFRSxLQUFLLENBQUNTLFNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXBCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXVDRCxDQWhGRDs7R0FBTUU7O0tBQUFBO0FBa0ZOLCtEQUFlQSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2YmFyLmpzP2ZiY2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBhdmF0YXIgZnJvbSAnLi4vdGVtcC9hdmF0YXIuanBnJ1xyXG5pbXBvcnQgeyBCc1BlcnNvbiB9IGZyb20gJ3JlYWN0LWljb25zL2JzJ1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFNvbFdhZ0NvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L3NvbFdhZ0NvbnRleHQnXHJcbmltcG9ydCBTb2xXYWdMb2dvIGZyb20gJy4uL2Fzc2V0cy9Tb2xXYWdMb2dvLnBuZydcclxuaW1wb3J0IHsgVGV6b3NUb29sa2l0IH0gZnJvbSBcIkB0YXF1aXRvL3RhcXVpdG9cIjtcclxuaW1wb3J0IHsgQmVhY29uV2FsbGV0IH0gZnJvbSBcIkB0YXF1aXRvL2JlYWNvbi13YWxsZXRcIjtcclxuaW1wb3J0IHsgYWRkLCBnZXRWYWx1ZSwgbXVsdGlwbHksIHVwZGF0ZSB9IGZyb20gXCIuLi9jb250ZXh0L2ludGVyYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3RXYWxsZXRCZWFjb24sIHNldHVwIH0gZnJvbSBcIi4uL2NvbnRleHQvQ29ubmVjdFwiO1xyXG5cclxuY29uc3Qgc3R5bGUgPSB7XHJcbiAgd3JhcHBlcjogYG1kOmgtZnVsbCBtZDp3LTUyIGgtMTYgdy1mdWxsIGJnLXByaW1hcnkgdGV4dC13aGl0ZSBmbGV4IG1kOmp1c3RpZnktYXJvdW5kIGl0ZW1zLWNlbnRlciBweC00IGZpeGVkIHotMjAgbWQ6ZmxleC1jb2wgdGV4dC1zbWAsXHJcbiAgbGVmdE1lbnU6IGBnYXAtMyBtZDpmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBmbGV4YCxcclxuICBsb2dvOiBgbWQ6dGV4dC0zeGwgZmxleCBjdXJzb3ItcG9pbnRlciBiZy1ncmFkaWVudC10by1yIGZyb20tWyNEOTAwRkFdIHZpYS1bIzAwREJGRF0gdG8tWyMwMEZGOURdIHRleHQtdHJhbnNwYXJlbnQgYmctY2xpcC10ZXh0IHctZnVsbCBmb250LWJvbGQgdGV4dC1sZWZ0IG1sLTJgLFxyXG4gIG1lbnVJdGVtOiBgbWQ6dGV4dC1sZyB0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1tZWRpdW0gZmxleCBpdGVtcy1jZW50ZXIgbXktNCBjdXJzb3ItcG9pbnRlciBob3Zlcjp0ZXh0LXNsYXRlLTUwMGAsXHJcbiAgcmlnaHRNZW51OiBgZmxleCBnYXAtMyBpdGVtcy1jZW50ZXIgbWQ6ZmxleC1jb2xgLFxyXG4gIHVzZXJJbWFnZUNvbnRhaW5lcjogYG1yLTJgLFxyXG4gIHVzZXJJbWFnZTogYGgtMTAgdy0xMCBtci00IHJvdW5kZWQtZnVsbCBwLXB4IG9iamVjdC1jb3ZlciBjdXJzb3ItcG9pbnRlcmAsXHJcbiAgbG9naW5CdXR0b246IGBmbGV4IGl0ZW1zLWNlbnRlciBjdXJzb3ItcG9pbnRlciByb3VuZGVkLWZ1bGwgaG92ZXI6YmctWyMzMzMzMzNdIHB4LTQgcHktMWAsXHJcbiAgbG9naW5UZXh0OiBgbWwtMmAsXHJcbiAgbG9nb0NvbnRhaW5lcjogYGZsZXggaXRlbXMtY2VudGVyYFxyXG59XHJcblxyXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBjdXJyZW50QWNjb3VudCxjdXJyZW50VXNlciwgc2V0UmlkZSwgc2V0T2ZmZXIsIG9mZmVyIH0gPSB1c2VDb250ZXh0KFNvbFdhZ0NvbnRleHQpXHJcbiAgY29uc3QgW1Rlem9zLCBzZXRUZXpvc10gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xyXG4gIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZShcIk5vIE9wZXJhdGlvbnMgUGVyZm9ybWVkXCIpO1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2xvYWRlciwgc2V0TG9hZGVyXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwicnVuXCIpO1xyXG4gICAgICBzZXR1cCgpLnRoZW4oc2V0VGV6b3MpLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgaWYgKFRlem9zID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgICAgZ2V0VmFsdWUoVGV6b3MpXHJcbiAgICAgICAgLnRoZW4oc2V0VmFsdWUpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4gc2V0TG9hZGVyKGZhbHNlKSlcclxuICAgICAgICAuY2F0Y2goY29uc29sZS5lcnJvcik7XHJcbiAgICAgIGNvbnN0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIGdldFZhbHVlKFRlem9zKS50aGVuKHNldFZhbHVlKS5jYXRjaChjb25zb2xlLmVycm9yKTtcclxuICAgICAgfSwgNjAwMDApO1xyXG4gIFxyXG4gICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xyXG4gICAgICB9O1xyXG4gICAgfSwgW1Rlem9zXSk7XHJcbiAgXHJcbiAgICBjb25zdCBoYW5kbGVFdmVudCA9IGFzeW5jIChlLCBmdW5jLCBwYXJhbXMpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHdhbCA9IGF3YWl0IGNvbm5lY3RXYWxsZXRCZWFjb24oKTtcclxuICAgICAgICBUZXpvcy5zZXRXYWxsZXRQcm92aWRlcih3YWwpO1xyXG4gICAgICAgIHNldExvYWRlcih0cnVlKTtcclxuICAgICAgICBhd2FpdCBmdW5jKFRlem9zLCBwYXJhbXMsIHNldFN0YXR1cyk7XHJcbiAgICAgICAgYXdhaXQgZ2V0VmFsdWUoVGV6b3MpXHJcbiAgICAgICAgICAudGhlbihzZXRWYWx1ZSlcclxuICAgICAgICAgIC50aGVuKCgpID0+IHNldExvYWRlcihmYWxzZSkpO1xyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgYWxlcnQoXCJDb3VsZG4ndCBjb25uZWN0IHdhbGxldFwiKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS53cmFwcGVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmxlZnRNZW51fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubG9nb0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtTb2xXYWdMb2dvfSBoZWlnaHQ9ezMwfSB3aWR0aD17MzB9IC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubG9nb30+U29sV2FnPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLm1lbnVJdGVtfSBvbkNsaWNrPXsoKT0+e3NldE9mZmVyKCdoaWRkZW4nKTsgc2V0UmlkZSgnYmxvY2snKTsgY29uc29sZS5sb2cob2ZmZXIpfX0+UmlkZSBQb29sPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLm1lbnVJdGVtfSBvbkNsaWNrPXsoKT0+e3NldE9mZmVyKCdibG9jaycpOyBzZXRSaWRlKCdoaWRkZW4nKX19Pk9mZmVyIFBvb2w8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGUubWVudUl0ZW19IG1kOmJsb2NrIGhpZGRlbmB9PjxhIGhyZWY9XCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9kb2N1bWVudC9kLzF6c2lrSFNpVlFzY20yQ19nNTE0OERZRHg3V2VVRjZpc3ZLbkJwcHZkeldnL2VkaXQ/dXNwPXNoYXJpbmdcIiB0YXJnZXQ9XCJibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIj5XaGl0ZSBQYXBlcjwvYT48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZS5yaWdodE1lbnV9IG1kOmJsb2NrIGhpZGRlbmB9PlxyXG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubWVudUl0ZW19PjwvZGl2PiAqL31cclxuICAgICAgIFxyXG4gIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5tZW51SXRlbX0+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIFdhbGxldCBjb25uZWN0ZWQ8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUudXNlckltYWdlQ29udGFpbmVyfT5cclxuICAgICAgICAgIHsvKiA8SW1hZ2VcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS51c2VySW1hZ2V9XHJcbiAgICAgICAgICAgIHNyYz17YXZhdGFyfVxyXG4gICAgICAgICAgICB3aWR0aD17NDB9XHJcbiAgICAgICAgICAgIGhlaWdodD17NDB9XHJcbiAgICAgICAgICAvPiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7Y3VycmVudEFjY291bnQgPyAoXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7Y3VycmVudEFjY291bnQuc2xpY2UoMCwgNil9Li4ue2N1cnJlbnRBY2NvdW50LnNsaWNlKDM5KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubG9naW5CdXR0b259IG9uQ2xpY2s9eygpID0+IGNvbm5lY3RXYWxsZXRCZWFjb24oKX0+XHJcbiAgICAgICAgICAgIDxCc1BlcnNvbiAvPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlLmxvZ2luVGV4dH0+TG9nIGluPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhclxyXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXZhdGFyIiwiQnNQZXJzb24iLCJ1c2VDb250ZXh0IiwiU29sV2FnQ29udGV4dCIsIlNvbFdhZ0xvZ28iLCJUZXpvc1Rvb2xraXQiLCJCZWFjb25XYWxsZXQiLCJhZGQiLCJnZXRWYWx1ZSIsIm11bHRpcGx5IiwidXBkYXRlIiwiY29ubmVjdFdhbGxldEJlYWNvbiIsInNldHVwIiwic3R5bGUiLCJ3cmFwcGVyIiwibGVmdE1lbnUiLCJsb2dvIiwibWVudUl0ZW0iLCJyaWdodE1lbnUiLCJ1c2VySW1hZ2VDb250YWluZXIiLCJ1c2VySW1hZ2UiLCJsb2dpbkJ1dHRvbiIsImxvZ2luVGV4dCIsImxvZ29Db250YWluZXIiLCJOYXZiYXIiLCJjdXJyZW50QWNjb3VudCIsImN1cnJlbnRVc2VyIiwic2V0UmlkZSIsInNldE9mZmVyIiwib2ZmZXIiLCJ1bmRlZmluZWQiLCJUZXpvcyIsInNldFRlem9zIiwic3RhdHVzIiwic2V0U3RhdHVzIiwidmFsdWUiLCJzZXRWYWx1ZSIsImxvYWRlciIsInNldExvYWRlciIsImNvbnNvbGUiLCJsb2ciLCJ0aGVuIiwiZXJyb3IiLCJ0aW1lciIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImhhbmRsZUV2ZW50IiwiZSIsImZ1bmMiLCJwYXJhbXMiLCJwcmV2ZW50RGVmYXVsdCIsIndhbCIsInNldFdhbGxldFByb3ZpZGVyIiwiYWxlcnQiLCJzbGljZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Navbar.js\n");

/***/ })

});