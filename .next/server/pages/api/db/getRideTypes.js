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
exports.id = "pages/api/db/getRideTypes";
exports.ids = ["pages/api/db/getRideTypes"];
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"client\": () => (/* binding */ client)\n/* harmony export */ });\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ \"@sanity/client\");\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = _sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({\n    projectId: process.env.SANITY_PROJECT_ID,\n    dataset: 'production',\n    apiVersion: 'v1',\n    token: process.env.SANITY_TOKEN,\n    useCdn: false\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvc2FuaXR5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF5QztBQUVsQyxLQUFLLENBQUNDLE1BQU0sR0FBR0QscURBQVksQ0FBQyxDQUFDO0lBQ2xDRSxTQUFTLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxpQkFBaUI7SUFDeENDLE9BQU8sRUFBRSxDQUFZO0lBQ3JCQyxVQUFVLEVBQUUsQ0FBSTtJQUNoQkMsS0FBSyxFQUFFTCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0ssWUFBWTtJQUMvQkMsTUFBTSxFQUFFLEtBQUs7QUFDZixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdWJlci1jbG9uZS1ibG9ja2NoYWluLy4vbGliL3Nhbml0eS5qcz9kOGJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzYW5pdHlDbGllbnQgZnJvbSAnQHNhbml0eS9jbGllbnQnXHJcblxyXG5leHBvcnQgY29uc3QgY2xpZW50ID0gc2FuaXR5Q2xpZW50KHtcclxuICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52LlNBTklUWV9QUk9KRUNUX0lELFxyXG4gIGRhdGFzZXQ6ICdwcm9kdWN0aW9uJyxcclxuICBhcGlWZXJzaW9uOiAndjEnLFxyXG4gIHRva2VuOiBwcm9jZXNzLmVudi5TQU5JVFlfVE9LRU4sXHJcbiAgdXNlQ2RuOiBmYWxzZSxcclxufSlcclxuIl0sIm5hbWVzIjpbInNhbml0eUNsaWVudCIsImNsaWVudCIsInByb2plY3RJZCIsInByb2Nlc3MiLCJlbnYiLCJTQU5JVFlfUFJPSkVDVF9JRCIsImRhdGFzZXQiLCJhcGlWZXJzaW9uIiwidG9rZW4iLCJTQU5JVFlfVE9LRU4iLCJ1c2VDZG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/sanity.js\n");

/***/ }),

/***/ "(api)/./pages/api/db/getRideTypes.js":
/*!**************************************!*\
  !*** ./pages/api/db/getRideTypes.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/sanity */ \"(api)/./lib/sanity.js\");\n\nconst query = `\n*[_type==\"rides\"]{\n  \"service\": title,\n  \"iconUrl\": icon.asset->url,\n  priceMultiplier,\n  orderById\n}|order(orderById asc)\n`;\nconst getRideTypes = async (req, res)=>{\n    try {\n        const sanityResponse = await _lib_sanity__WEBPACK_IMPORTED_MODULE_0__.client.fetch(query);\n        res.status(200).send({\n            message: 'success',\n            data: sanityResponse\n        });\n    } catch (error) {\n        res.status(500).send({\n            message: 'error',\n            data: error.message\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getRideTypes);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZGIvZ2V0UmlkZVR5cGVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTRDO0FBRTVDLEtBQUssQ0FBQ0MsS0FBSyxJQUFJOzs7Ozs7O0FBT2Y7QUFFQSxLQUFLLENBQUNDLFlBQVksVUFBVUMsR0FBRyxFQUFFQyxHQUFHLEdBQUssQ0FBQztJQUN4QyxHQUFHLENBQUMsQ0FBQztRQUNILEtBQUssQ0FBQ0MsY0FBYyxHQUFHLEtBQUssQ0FBQ0wscURBQVksQ0FBQ0MsS0FBSztRQUUvQ0csR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztZQUFDQyxPQUFPLEVBQUUsQ0FBUztZQUFFQyxJQUFJLEVBQUVMLGNBQWM7UUFBQyxDQUFDO0lBQ25FLENBQUMsQ0FBQyxLQUFLLEVBQUVNLEtBQUssRUFBRSxDQUFDO1FBQ2ZQLEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7WUFBQ0MsT0FBTyxFQUFFLENBQU87WUFBRUMsSUFBSSxFQUFFQyxLQUFLLENBQUNGLE9BQU87UUFBQyxDQUFDO0lBQ2hFLENBQUM7QUFDSCxDQUFDO0FBRUQsaUVBQWVQLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91YmVyLWNsb25lLWJsb2NrY2hhaW4vLi9wYWdlcy9hcGkvZGIvZ2V0UmlkZVR5cGVzLmpzPzljODMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2xpZW50IH0gZnJvbSAnLi4vLi4vLi4vbGliL3Nhbml0eSdcclxuXHJcbmNvbnN0IHF1ZXJ5ID0gYFxyXG4qW190eXBlPT1cInJpZGVzXCJde1xyXG4gIFwic2VydmljZVwiOiB0aXRsZSxcclxuICBcImljb25VcmxcIjogaWNvbi5hc3NldC0+dXJsLFxyXG4gIHByaWNlTXVsdGlwbGllcixcclxuICBvcmRlckJ5SWRcclxufXxvcmRlcihvcmRlckJ5SWQgYXNjKVxyXG5gXHJcblxyXG5jb25zdCBnZXRSaWRlVHlwZXMgPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc2FuaXR5UmVzcG9uc2UgPSBhd2FpdCBjbGllbnQuZmV0Y2gocXVlcnkpXHJcblxyXG4gICAgcmVzLnN0YXR1cygyMDApLnNlbmQoeyBtZXNzYWdlOiAnc3VjY2VzcycsIGRhdGE6IHNhbml0eVJlc3BvbnNlIH0pXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJlcy5zdGF0dXMoNTAwKS5zZW5kKHsgbWVzc2FnZTogJ2Vycm9yJywgZGF0YTogZXJyb3IubWVzc2FnZSB9KVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0UmlkZVR5cGVzXHJcbiJdLCJuYW1lcyI6WyJjbGllbnQiLCJxdWVyeSIsImdldFJpZGVUeXBlcyIsInJlcSIsInJlcyIsInNhbml0eVJlc3BvbnNlIiwiZmV0Y2giLCJzdGF0dXMiLCJzZW5kIiwibWVzc2FnZSIsImRhdGEiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/db/getRideTypes.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/db/getRideTypes.js"));
module.exports = __webpack_exports__;

})();