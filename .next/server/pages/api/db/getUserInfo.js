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
exports.id = "pages/api/db/getUserInfo";
exports.ids = ["pages/api/db/getUserInfo"];
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

/***/ "(api)/./pages/api/db/getUserInfo.js":
/*!*************************************!*\
  !*** ./pages/api/db/getUserInfo.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/sanity */ \"(api)/./lib/sanity.js\");\n\nconst getUserInfo = async (req, res)=>{\n    try {\n        const query = `\n      *[_type == \"users\" && walletAddress==\"${req.query.walletAddress}\"]{\n          name,\n          walletAddress,\n          \"imageUrl\": profileImage.asset->url\n        }\n    `;\n        const sanityResponse = await _lib_sanity__WEBPACK_IMPORTED_MODULE_0__.client.fetch(query);\n        res.status(200).send({\n            message: 'success',\n            data: sanityResponse[0]\n        });\n    } catch (error) {\n        res.status(500).send({\n            message: 'error',\n            data: error.message\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getUserInfo);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZGIvZ2V0VXNlckluZm8uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBNEM7QUFFNUMsS0FBSyxDQUFDQyxXQUFXLFVBQVVDLEdBQUcsRUFBRUMsR0FBRyxHQUFLLENBQUM7SUFDdkMsR0FBRyxDQUFDLENBQUM7UUFDSCxLQUFLLENBQUNDLEtBQUssSUFBSTs0Q0FDeUIsRUFBRUYsR0FBRyxDQUFDRSxLQUFLLENBQUNDLGFBQWEsQ0FBQzs7Ozs7SUFLbEU7UUFFQSxLQUFLLENBQUNDLGNBQWMsR0FBRyxLQUFLLENBQUNOLHFEQUFZLENBQUNJLEtBQUs7UUFFL0NELEdBQUcsQ0FBQ0ssTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7WUFBQ0MsT0FBTyxFQUFFLENBQVM7WUFBRUMsSUFBSSxFQUFFTCxjQUFjLENBQUMsQ0FBQztRQUFFLENBQUM7SUFDdEUsQ0FBQyxDQUFDLEtBQUssRUFBRU0sS0FBSyxFQUFFLENBQUM7UUFDZlQsR0FBRyxDQUFDSyxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztZQUFDQyxPQUFPLEVBQUUsQ0FBTztZQUFFQyxJQUFJLEVBQUVDLEtBQUssQ0FBQ0YsT0FBTztRQUFDLENBQUM7SUFDaEUsQ0FBQztBQUNILENBQUM7QUFFRCxpRUFBZVQsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL3ViZXItY2xvbmUtYmxvY2tjaGFpbi8uL3BhZ2VzL2FwaS9kYi9nZXRVc2VySW5mby5qcz83MmVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNsaWVudCB9IGZyb20gJy4uLy4uLy4uL2xpYi9zYW5pdHknXHJcblxyXG5jb25zdCBnZXRVc2VySW5mbyA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBxdWVyeSA9IGBcclxuICAgICAgKltfdHlwZSA9PSBcInVzZXJzXCIgJiYgd2FsbGV0QWRkcmVzcz09XCIke3JlcS5xdWVyeS53YWxsZXRBZGRyZXNzfVwiXXtcclxuICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICB3YWxsZXRBZGRyZXNzLFxyXG4gICAgICAgICAgXCJpbWFnZVVybFwiOiBwcm9maWxlSW1hZ2UuYXNzZXQtPnVybFxyXG4gICAgICAgIH1cclxuICAgIGBcclxuXHJcbiAgICBjb25zdCBzYW5pdHlSZXNwb25zZSA9IGF3YWl0IGNsaWVudC5mZXRjaChxdWVyeSlcclxuXHJcbiAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IG1lc3NhZ2U6ICdzdWNjZXNzJywgZGF0YTogc2FuaXR5UmVzcG9uc2VbMF0gfSlcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmVzLnN0YXR1cyg1MDApLnNlbmQoeyBtZXNzYWdlOiAnZXJyb3InLCBkYXRhOiBlcnJvci5tZXNzYWdlIH0pXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRVc2VySW5mb1xyXG4iXSwibmFtZXMiOlsiY2xpZW50IiwiZ2V0VXNlckluZm8iLCJyZXEiLCJyZXMiLCJxdWVyeSIsIndhbGxldEFkZHJlc3MiLCJzYW5pdHlSZXNwb25zZSIsImZldGNoIiwic3RhdHVzIiwic2VuZCIsIm1lc3NhZ2UiLCJkYXRhIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/db/getUserInfo.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/db/getUserInfo.js"));
module.exports = __webpack_exports__;

})();