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
exports.id = "pages/api/map/getLocationCoordinates";
exports.ids = ["pages/api/map/getLocationCoordinates"];
exports.modules = {

/***/ "(api)/./pages/api/map/getLocationCoordinates.js":
/*!*************************************************!*\
  !*** ./pages/api/map/getLocationCoordinates.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getLocationCoordinates = async (req, res)=>{\n    const mapboxUrl = `${process.env.MAPBOX_PLACES_API_URL}/${req.body.location}.json?access_token=${\"pk.eyJ1Ijoic29wc2FuaiIsImEiOiJjbDh6bmk3dDkwbWc3M29tdGw1enZkdXhoIn0.Dby_SmixRRrf7OjwiwvNdw\"}`;\n    try {\n        const response = await fetch(mapboxUrl);\n        const data = await response.json();\n        res.status(200).send({\n            message: 'success',\n            data: data.features[0].center\n        });\n    } catch (error) {\n        res.status(500).send({\n            message: 'error',\n            data: error.message\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLocationCoordinates);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbWFwL2dldExvY2F0aW9uQ29vcmRpbmF0ZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLEtBQUssQ0FBQ0Esc0JBQXNCLFVBQVVDLEdBQUcsRUFBRUMsR0FBRyxHQUFLLENBQUM7SUFDbEQsS0FBSyxDQUFDQyxTQUFTLE1BQU1DLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxxQkFBcUIsQ0FBQyxDQUFDLEVBQUVMLEdBQUcsQ0FBQ00sSUFBSSxDQUFDQyxRQUFRLENBQUMsbUJBQW1CLEVBQUVKLDJGQUEyQztJQUU1SSxHQUFHLENBQUMsQ0FBQztRQUNILEtBQUssQ0FBQ00sUUFBUSxHQUFHLEtBQUssQ0FBQ0MsS0FBSyxDQUFDUixTQUFTO1FBQ3RDLEtBQUssQ0FBQ1MsSUFBSSxHQUFHLEtBQUssQ0FBQ0YsUUFBUSxDQUFDRyxJQUFJO1FBRWhDWCxHQUFHLENBQUNZLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO1lBQUNDLE9BQU8sRUFBRSxDQUFTO1lBQUVKLElBQUksRUFBRUEsSUFBSSxDQUFDSyxRQUFRLENBQUMsQ0FBQyxFQUFFQyxNQUFNO1FBQUMsQ0FBQztJQUM1RSxDQUFDLENBQUMsS0FBSyxFQUFFQyxLQUFLLEVBQUUsQ0FBQztRQUNmakIsR0FBRyxDQUFDWSxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztZQUFDQyxPQUFPLEVBQUUsQ0FBTztZQUFFSixJQUFJLEVBQUVPLEtBQUssQ0FBQ0gsT0FBTztRQUFDLENBQUM7SUFDaEUsQ0FBQztBQUNILENBQUM7QUFFRCxpRUFBZWhCLHNCQUFzQiIsInNvdXJjZXMiOlsid2VicGFjazovL3ViZXItY2xvbmUtYmxvY2tjaGFpbi8uL3BhZ2VzL2FwaS9tYXAvZ2V0TG9jYXRpb25Db29yZGluYXRlcy5qcz82NGQ1Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGdldExvY2F0aW9uQ29vcmRpbmF0ZXMgPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICBjb25zdCBtYXBib3hVcmwgPSBgJHtwcm9jZXNzLmVudi5NQVBCT1hfUExBQ0VTX0FQSV9VUkx9LyR7cmVxLmJvZHkubG9jYXRpb259Lmpzb24/YWNjZXNzX3Rva2VuPSR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTUFQQk9YX0FDQ0VTU19UT0tFTn1gXHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKG1hcGJveFVybClcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuXHJcbiAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IG1lc3NhZ2U6ICdzdWNjZXNzJywgZGF0YTogZGF0YS5mZWF0dXJlc1swXS5jZW50ZXIgfSlcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmVzLnN0YXR1cyg1MDApLnNlbmQoeyBtZXNzYWdlOiAnZXJyb3InLCBkYXRhOiBlcnJvci5tZXNzYWdlIH0pXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRMb2NhdGlvbkNvb3JkaW5hdGVzXHJcbiJdLCJuYW1lcyI6WyJnZXRMb2NhdGlvbkNvb3JkaW5hdGVzIiwicmVxIiwicmVzIiwibWFwYm94VXJsIiwicHJvY2VzcyIsImVudiIsIk1BUEJPWF9QTEFDRVNfQVBJX1VSTCIsImJvZHkiLCJsb2NhdGlvbiIsIk5FWFRfUFVCTElDX01BUEJPWF9BQ0NFU1NfVE9LRU4iLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJzdGF0dXMiLCJzZW5kIiwibWVzc2FnZSIsImZlYXR1cmVzIiwiY2VudGVyIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/map/getLocationCoordinates.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/map/getLocationCoordinates.js"));
module.exports = __webpack_exports__;

})();