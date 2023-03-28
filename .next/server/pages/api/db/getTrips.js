"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/db/getTrips";
exports.ids = ["pages/api/db/getTrips"];
exports.modules = {

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sanity/client");

/***/ }),

/***/ "(api)/./lib/sanity.js":
/*!***********************!*\
  !*** ./lib/sanity.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"client\": () => (/* binding */ client)\n/* harmony export */ });\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ \"@sanity/client\");\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = _sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({\n  projectId: '4pi9d260',\n  dataset: 'production',\n  apiVersion: 'v1',\n  token: 'skMzewGlLQYaxEhoeq0m5xtIQgXyJ9iUC7rQWRIPrXIQVdEjMId0bfmCZpXlJ1DHvLgXRmNUEtNz8BMJOzlJHeHNh6YGXkgBWJagjBc9xIN05yzwWWgxmXTsjeMll1ZJWJTmjdaVf7DZErWWeFXij4CMmTU1lzhB8ocV6bmQsdkSsVIzwY0q',\n  useCdn: false\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvc2FuaXR5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRU8sTUFBTUMsTUFBTSxHQUFHRCxxREFBWSxDQUFDO0FBQ2pDRSxFQUFBQSxTQUFTLEVBQUUsVUFEc0I7QUFFakNDLEVBQUFBLE9BQU8sRUFBRSxZQUZ3QjtBQUdqQ0MsRUFBQUEsVUFBVSxFQUFFLElBSHFCO0FBSWpDQyxFQUFBQSxLQUFLLEVBQUMsc0xBSjJCO0FBS2pDQyxFQUFBQSxNQUFNLEVBQUU7QUFMeUIsQ0FBRCxDQUEzQiIsInNvdXJjZXMiOlsid2VicGFjazovL3NvbHdhZy8uL2xpYi9zYW5pdHkuanM/ZDhiYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2FuaXR5Q2xpZW50IGZyb20gJ0BzYW5pdHkvY2xpZW50J1xyXG5cclxuZXhwb3J0IGNvbnN0IGNsaWVudCA9IHNhbml0eUNsaWVudCh7XHJcbiAgcHJvamVjdElkOiAnNHBpOWQyNjAnLFxyXG4gIGRhdGFzZXQ6ICdwcm9kdWN0aW9uJyxcclxuICBhcGlWZXJzaW9uOiAndjEnLFxyXG4gIHRva2VuOidza016ZXdHbExRWWF4RWhvZXEwbTV4dElRZ1h5SjlpVUM3clFXUklQclhJUVZkRWpNSWQwYmZtQ1pwWGxKMURIdkxnWFJtTlVFdE56OEJNSk96bEpIZUhOaDZZR1hrZ0JXSmFnakJjOXhJTjA1eXp3V1dneG1YVHNqZU1sbDFaSldKVG1qZGFWZjdEWkVyV1dlRlhpajRDTW1UVTFsemhCOG9jVjZibVFzZGtTc1ZJendZMHEnLFxyXG4gIHVzZUNkbjogZmFsc2UsXHJcbn0pXHJcbiJdLCJuYW1lcyI6WyJzYW5pdHlDbGllbnQiLCJjbGllbnQiLCJwcm9qZWN0SWQiLCJkYXRhc2V0IiwiYXBpVmVyc2lvbiIsInRva2VuIiwidXNlQ2RuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/sanity.js\n");

/***/ }),

/***/ "(api)/./pages/api/db/getTrips.js":
/*!**********************************!*\
  !*** ./pages/api/db/getTrips.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/sanity */ \"(api)/./lib/sanity.js\");\n\nconst query = `*[_type==\"trips\"]`;\n\nconst getTrips = async (req, res) => {\n  try {\n    const sanityResponse = await _lib_sanity__WEBPACK_IMPORTED_MODULE_0__.client.fetch(query);\n    res.status(200).send({\n      message: 'success',\n      data: sanityResponse\n    });\n  } catch (error) {\n    res.status(500).send({\n      message: 'error',\n      data: error.message\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTrips);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZGIvZ2V0VHJpcHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUVBLE1BQU1DLEtBQUssR0FBSSxtQkFBZjs7QUFFQSxNQUFNQyxRQUFRLEdBQUcsT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ2pDLE1BQUk7QUFDQSxVQUFNQyxjQUFjLEdBQUcsTUFBTUwscURBQUEsQ0FBYUMsS0FBYixDQUE3QjtBQUNBRyxJQUFBQSxHQUFHLENBQUNHLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxNQUFBQSxPQUFPLEVBQUUsU0FBWDtBQUFzQkMsTUFBQUEsSUFBSSxFQUFFTDtBQUE1QixLQUFyQjtBQUNELEdBSEgsQ0FHSSxPQUFPTSxLQUFQLEVBQWM7QUFDZFAsSUFBQUEsR0FBRyxDQUFDRyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsTUFBQUEsT0FBTyxFQUFFLE9BQVg7QUFBb0JDLE1BQUFBLElBQUksRUFBRUMsS0FBSyxDQUFDRjtBQUFoQyxLQUFyQjtBQUNEO0FBQ04sQ0FQRDs7QUFTQSxpRUFBZVAsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL3NvbHdhZy8uL3BhZ2VzL2FwaS9kYi9nZXRUcmlwcy5qcz9lZTA1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNsaWVudCB9IGZyb20gJy4uLy4uLy4uL2xpYi9zYW5pdHknXHJcblxyXG5jb25zdCBxdWVyeSA9IGAqW190eXBlPT1cInRyaXBzXCJdYFxyXG5cclxuY29uc3QgZ2V0VHJpcHMgPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgc2FuaXR5UmVzcG9uc2UgPSBhd2FpdCBjbGllbnQuZmV0Y2gocXVlcnkpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoeyBtZXNzYWdlOiAnc3VjY2VzcycsIGRhdGE6IHNhbml0eVJlc3BvbnNlIH0pXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLnNlbmQoeyBtZXNzYWdlOiAnZXJyb3InLCBkYXRhOiBlcnJvci5tZXNzYWdlIH0pXHJcbiAgICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0VHJpcHM7Il0sIm5hbWVzIjpbImNsaWVudCIsInF1ZXJ5IiwiZ2V0VHJpcHMiLCJyZXEiLCJyZXMiLCJzYW5pdHlSZXNwb25zZSIsImZldGNoIiwic3RhdHVzIiwic2VuZCIsIm1lc3NhZ2UiLCJkYXRhIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/db/getTrips.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/db/getTrips.js"));
module.exports = __webpack_exports__;

})();