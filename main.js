/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/JScode.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/JScode.js":
/*!***********************!*\
  !*** ./src/JScode.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _JScode2_3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JScode2.3.js */ \"./src/JScode2.3.js\");\n/* harmony import */ var _JScode2_3_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_JScode2_3_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _JScode4_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JScode4.js */ \"./src/JScode4.js\");\n/* harmony import */ var _JScode4_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_JScode4_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _JScode5_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./JScode5.js */ \"./src/JScode5.js\");\n/* harmony import */ var _JScode5_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_JScode5_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _JScode6_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./JScode6.js */ \"./src/JScode6.js\");\n/* harmony import */ var _JScode6_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_JScode6_js__WEBPACK_IMPORTED_MODULE_3__);\n\r\n\r\n\r\n\r\n\r\nwindow.years = function () { \r\n    \r\n    let year = prompt('?')\r\n    let yearEnd = prompt('?')\r\n\r\n    if ((isNaN(year)) && (isNaN(yearEnd))) {\r\n        year == 1019;\r\n        yearEnd == 2019;\r\n\r\n        for (let i = year; i < yearEnd; i++) {\r\n            let a = i % 4;\r\n            if (a == 0) {\r\n                console.log(i);\r\n            }\r\n        }\r\n    }\r\n    else {\r\n        for (let i = year; i < yearEnd; i++) {\r\n            let a = i % 4;\r\n            if (a == 0) {\r\n                console.log(i);\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/JScode.js?");

/***/ }),

/***/ "./src/JScode2.3.js":
/*!**************************!*\
  !*** ./src/JScode2.3.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window.MakeArr = function () {\r\n    var arr = [];\r\n    var maxN = 0;\r\n    var maxP = 0;\r\n    var i = 0;\r\n  \r\n    \r\n    \r\n\r\n    var find = function (array, value) {\r\n        for (var i = 0; i < array.length; i++) {\r\n            if (array[i] === value) return i;\r\n        }\r\n\r\n        return -1;\r\n    }\r\n\r\n    while (arr.length !== 50) {\r\n        let a = ~~Math.floor(Math.random() * 100);\r\n        if (find(arr, a) == -1) {\r\n            arr[i] = a;\r\n            i++;\r\n        }\r\n    }\r\nfunction quick_Sort(origArray) {\r\n\tif (origArray.length <= 1) { \r\n\t\treturn origArray;\r\n\t} else {\r\n\r\n\t\tvar left = [];\r\n\t\tvar right = [];\r\n\t\tvar newArray = [];\r\n\t\tvar pivot = origArray.pop();\r\n\t\tvar length = origArray.length;\r\n\r\n\t\tfor (var i = 0; i < length; i++) {\r\n\t\t\tif (origArray[i] <= pivot) {\r\n\t\t\t\tleft.push(origArray[i]);\r\n\t\t\t} else {\r\n\t\t\t\tright.push(origArray[i]);\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\treturn newArray.concat(quick_Sort(left), pivot, quick_Sort(right));\r\n\t}\r\n}\r\n\r\nvar sortedArray = quick_Sort(arr)\r\n    for (let i = 0; i < 50; i++) {\r\n        console.log(sortedArray[i]);\r\n    }\r\n    for (let i = 0; i < 50; i++) {\r\n        let k = sortedArray[i] % 2;\r\n        if (k == 0) {\r\n            if (sortedArray[i] > maxP) {\r\n                maxP = sortedArray[i];\r\n            }\r\n        }\r\n        else {\r\n            if (sortedArray[i] > maxN) {\r\n                maxN = sortedArray[i];\r\n            }\r\n        }\r\n    }\r\n    console.log(\"макс парное->\"+maxP);\r\n    console.log(\"макс не парное->\"+maxN);\r\n\r\n\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/JScode2.3.js?");

/***/ }),

/***/ "./src/JScode4.js":
/*!************************!*\
  !*** ./src/JScode4.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nwindow.MakeObj = function  (){\r\nvar a = [\r\n    {id: 1,\r\n      name: 'Mihail'\r\n     },\r\n     {id: 2,\r\n         name: 'Marina'\r\n     },\r\n     {id: 3,\r\n         name: 'andrew'\r\n     },\r\n     {id: 4,\r\n         name: 'Ilya'\r\n     },\r\n ] \r\n var b = a.reduce((acc, item, index) => {\r\n    acc[index]=item.name;\r\n    return acc;\r\n}, {});\r\nconsole.log(b)\r\n\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/JScode4.js?");

/***/ }),

/***/ "./src/JScode5.js":
/*!************************!*\
  !*** ./src/JScode5.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nwindow.isEmpty = function (obj) {\r\n    for (var key in obj) {\r\n      return false;\r\n    }\r\n    return true;\r\n  }\r\n  \r\n  let som={};\r\n  console.log(isEmpty(som));\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/JScode5.js?");

/***/ }),

/***/ "./src/JScode6.js":
/*!************************!*\
  !*** ./src/JScode6.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\n\r\nwindow.factorial = function (n) {\r\n  return (n != 1) ? n * factorial(n - 1) : 1;\r\n}\r\n\r\n\r\nconsole.log( factorial(7) )\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/JScode6.js?");

/***/ })

/******/ });