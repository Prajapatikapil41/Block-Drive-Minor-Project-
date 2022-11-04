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
exports.id = "pages/api/map/getDuration";
exports.ids = ["pages/api/map/getDuration"];
exports.modules = {

/***/ "(api)/./pages/api/map/getDuration.js":
/*!**************************************!*\
  !*** ./pages/api/map/getDuration.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getDuration = async (req, res)=>{\n    const mapboxUrl = `${process.env.MAPBOX_DIRECTIONS_API_URL}/${req.body.pickupCoordinates};${req.body.dropoffCoordinates}.json?access_token=${\"pk.eyJ1Ijoic29wc2FuaiIsImEiOiJjbDh6bmk3dDkwbWc3M29tdGw1enZkdXhoIn0.Dby_SmixRRrf7OjwiwvNdw\"}`;\n    try {\n        const response = await fetch(mapboxUrl);\n        const data = await response.json();\n        res.status(200).send({\n            message: 'success',\n            data: data.routes[0].duration\n        });\n    } catch (error) {\n        res.status(500).send({\n            message: 'error',\n            data: error.message\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDuration);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbWFwL2dldER1cmF0aW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxLQUFLLENBQUNBLFdBQVcsVUFBVUMsR0FBRyxFQUFFQyxHQUFHLEdBQUssQ0FBQztJQUN2QyxLQUFLLENBQUNDLFNBQVMsTUFBTUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLHlCQUF5QixDQUFDLENBQUMsRUFBRUwsR0FBRyxDQUFDTSxJQUFJLENBQUNDLGlCQUFpQixDQUFDLENBQUMsRUFBRVAsR0FBRyxDQUFDTSxJQUFJLENBQUNFLGtCQUFrQixDQUFDLG1CQUFtQixFQUFFTCwyRkFBMkM7SUFFeEwsR0FBRyxDQUFDLENBQUM7UUFDSCxLQUFLLENBQUNPLFFBQVEsR0FBRyxLQUFLLENBQUNDLEtBQUssQ0FBQ1QsU0FBUztRQUN0QyxLQUFLLENBQUNVLElBQUksR0FBRyxLQUFLLENBQUNGLFFBQVEsQ0FBQ0csSUFBSTtRQUVoQ1osR0FBRyxDQUFDYSxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztZQUFDQyxPQUFPLEVBQUUsQ0FBUztZQUFFSixJQUFJLEVBQUVBLElBQUksQ0FBQ0ssTUFBTSxDQUFDLENBQUMsRUFBRUMsUUFBUTtRQUFDLENBQUM7SUFDNUUsQ0FBQyxDQUFDLEtBQUssRUFBRUMsS0FBSyxFQUFFLENBQUM7UUFDZmxCLEdBQUcsQ0FBQ2EsTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7WUFBQ0MsT0FBTyxFQUFFLENBQU87WUFBRUosSUFBSSxFQUFFTyxLQUFLLENBQUNILE9BQU87UUFBQyxDQUFDO0lBQ2hFLENBQUM7QUFDSCxDQUFDO0FBRUQsaUVBQWVqQixXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdWJlci1jbG9uZS1ibG9ja2NoYWluLy4vcGFnZXMvYXBpL21hcC9nZXREdXJhdGlvbi5qcz9kODk2Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGdldER1cmF0aW9uID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgY29uc3QgbWFwYm94VXJsID0gYCR7cHJvY2Vzcy5lbnYuTUFQQk9YX0RJUkVDVElPTlNfQVBJX1VSTH0vJHtyZXEuYm9keS5waWNrdXBDb29yZGluYXRlc307JHtyZXEuYm9keS5kcm9wb2ZmQ29vcmRpbmF0ZXN9Lmpzb24/YWNjZXNzX3Rva2VuPSR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTUFQQk9YX0FDQ0VTU19UT0tFTn1gXHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKG1hcGJveFVybClcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuXHJcbiAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IG1lc3NhZ2U6ICdzdWNjZXNzJywgZGF0YTogZGF0YS5yb3V0ZXNbMF0uZHVyYXRpb24gfSlcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmVzLnN0YXR1cyg1MDApLnNlbmQoeyBtZXNzYWdlOiAnZXJyb3InLCBkYXRhOiBlcnJvci5tZXNzYWdlIH0pXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXREdXJhdGlvblxyXG4iXSwibmFtZXMiOlsiZ2V0RHVyYXRpb24iLCJyZXEiLCJyZXMiLCJtYXBib3hVcmwiLCJwcm9jZXNzIiwiZW52IiwiTUFQQk9YX0RJUkVDVElPTlNfQVBJX1VSTCIsImJvZHkiLCJwaWNrdXBDb29yZGluYXRlcyIsImRyb3BvZmZDb29yZGluYXRlcyIsIk5FWFRfUFVCTElDX01BUEJPWF9BQ0NFU1NfVE9LRU4iLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJzdGF0dXMiLCJzZW5kIiwibWVzc2FnZSIsInJvdXRlcyIsImR1cmF0aW9uIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/map/getDuration.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/map/getDuration.js"));
module.exports = __webpack_exports__;

})();