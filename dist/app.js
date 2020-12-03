/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function(e, a) { for(var i in a) e[i] = a[i]; if(a.__esModule) Object.defineProperty(e, "__esModule", { value: true }); }(this,
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Person/Person.ts":
/*!******************************!*\
  !*** ./src/Person/Person.ts ***!
  \******************************/
/*! flagged exports */
/*! export Person [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Person = void 0;\r\nconst Sex_1 = __webpack_require__(/*! ./Sex */ \"./src/Person/Sex.ts\");\r\nclass Person {\r\n    constructor() {\r\n        this.name = \"\\\"name no set!please set your name.\\\"\";\r\n    }\r\n    hello() {\r\n        return `Hello ${this.name}, welcome to world! your age is ${this.age}. your sex is ${Sex_1.Sex[this.sex]}.`;\r\n    }\r\n    setName(val) {\r\n        this.name = val;\r\n        return this;\r\n    }\r\n    setAge(val) {\r\n        this.age = val;\r\n        return this;\r\n    }\r\n    setSex(val) {\r\n        this.sex = val;\r\n        return this;\r\n    }\r\n}\r\nexports.Person = Person;\r\n\n\n//# sourceURL=webpack://browserify-typescript-extension/./src/Person/Person.ts?");

/***/ }),

/***/ "./src/Person/Sex.ts":
/*!***************************!*\
  !*** ./src/Person/Sex.ts ***!
  \***************************/
/*! flagged exports */
/*! export Sex [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Sex = void 0;\r\nvar Sex;\r\n(function (Sex) {\r\n    Sex[Sex[\"man\"] = 0] = \"man\";\r\n    Sex[Sex[\"woman\"] = 1] = \"woman\";\r\n})(Sex = exports.Sex || (exports.Sex = {}));\r\n\n\n//# sourceURL=webpack://browserify-typescript-extension/./src/Person/Sex.ts?");

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! flagged exports */
/*! export __esModule [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export teBase [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.teBase = void 0;\r\nconst Sex_1 = __webpack_require__(/*! ./Person/Sex */ \"./src/Person/Sex.ts\");\r\nconst Person_1 = __webpack_require__(/*! ./Person/Person */ \"./src/Person/Person.ts\");\r\nvar TeApi;\r\n(function (TeApi) {\r\n    class base {\r\n        constructor() {\r\n            this.version = \"0.0.1\";\r\n        }\r\n        showVersion() {\r\n            console.log(`This is teApi, version: ${this.version}`);\r\n        }\r\n        doSomething() {\r\n            const p = new Person_1.Person();\r\n            p.setName(\"richard\").setAge(20).setSex(Sex_1.Sex.man);\r\n            p.hello();\r\n            console.log('global lib do something');\r\n        }\r\n    }\r\n    TeApi.base = base;\r\n})(TeApi || (TeApi = {}));\r\nexports.teBase = new TeApi.base();\r\nexports.teBase.showVersion();\r\n\n\n//# sourceURL=webpack://browserify-typescript-extension/./src/app.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/app.ts");
/******/ })()

));