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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/client.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client.js":
/*!***********************!*\
  !*** ./src/client.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: BrowserslistError: [BABEL] /Users/marneb/Documents/pp/patternplate/packages/client/src/client.js: Unknown browser query `ie` (While processing: \"/Users/marneb/Documents/pp/patternplate/node_modules/@babel/preset-env/lib/index.js\")\n    at /Users/marneb/Documents/pp/patternplate/node_modules/@babel/preset-env/node_modules/browserslist/index.js:149:11\n    at Array.reduce (<anonymous>)\n    at resolve (/Users/marneb/Documents/pp/patternplate/node_modules/@babel/preset-env/node_modules/browserslist/index.js:117:18)\n    at browserslist (/Users/marneb/Documents/pp/patternplate/node_modules/@babel/preset-env/node_modules/browserslist/index.js:216:16)\n    at getTargets (/Users/marneb/Documents/pp/patternplate/node_modules/@babel/preset-env/lib/targets-parser.js:178:50)\n    at _default (/Users/marneb/Documents/pp/patternplate/node_modules/@babel/preset-env/lib/index.js:183:46)\n    at /Users/marneb/Documents/pp/patternplate/node_modules/@babel/helper-plugin-utils/lib/index.js:19:12\n    at loadDescriptor (/Users/marneb/Documents/pp/patternplate/node_modules/@babel/core/lib/config/full.js:157:14)\n    at cachedFunction (/Users/marneb/Documents/pp/patternplate/node_modules/@babel/core/lib/config/caching.js:32:19)\n    at loadPresetDescriptor (/Users/marneb/Documents/pp/patternplate/node_modules/@babel/core/lib/config/full.js:227:63)\n    at config.presets.map.descriptor (/Users/marneb/Documents/pp/patternplate/node_modules/@babel/core/lib/config/full.js:72:19)\n    at Array.map (<anonymous>)\n    at recurseDescriptors (/Users/marneb/Documents/pp/patternplate/node_modules/@babel/core/lib/config/full.js:70:38)\n    at recurseDescriptors (/Users/marneb/Documents/pp/patternplate/node_modules/@babel/core/lib/config/full.js:86:27)\n    at loadFullConfig (/Users/marneb/Documents/pp/patternplate/node_modules/@babel/core/lib/config/full.js:100:6)\n    at transformSync (/Users/marneb/Documents/pp/patternplate/node_modules/@babel/core/lib/transform.js:41:38)\n    at Object.transform (/Users/marneb/Documents/pp/patternplate/node_modules/@babel/core/lib/transform.js:22:38)\n    at transpile (/Users/marneb/Documents/pp/patternplate/node_modules/babel-loader/lib/index.js:55:20)\n    at Object.module.exports (/Users/marneb/Documents/pp/patternplate/node_modules/babel-loader/lib/index.js:179:20)");

/***/ })

/******/ });
//# sourceMappingURL=client.c2cb880abe98c03aedb2.js.map