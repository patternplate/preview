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

throw new Error("Module build failed: Invariant Violation: [BABEL] /Users/marneb/Documents/pp/patternplate/packages/client/src/client.js: Invalid Option: '[object Object]' is not a valid browserslist query (While processing: \"/Users/marneb/Documents/pp/patternplate/node_modules/@babel/preset-env/lib/index.js\")\n    at invariant (/Users/marneb/Documents/pp/patternplate/node_modules/invariant/invariant.js:42:15)\n    at validateBrowsers (/Users/marneb/Documents/pp/patternplate/node_modules/@babel/preset-env/lib/targets-parser.js:74:28)\n    at getTargets (/Users/marneb/Documents/pp/patternplate/node_modules/@babel/preset-env/lib/targets-parser.js:174:25)\n    at _default (/Users/marneb/Documents/pp/patternplate/node_modules/@babel/preset-env/lib/index.js:183:46)\n    at /Users/marneb/Documents/pp/patternplate/node_modules/@babel/helper-plugin-utils/lib/index.js:19:12\n    at loadDescriptor (/Users/marneb/Documents/pp/patternplate/node_modules/@babel/core/lib/config/full.js:157:14)\n    at cachedFunction (/Users/marneb/Documents/pp/patternplate/node_modules/@babel/core/lib/config/caching.js:32:19)\n    at loadPresetDescriptor (/Users/marneb/Documents/pp/patternplate/node_modules/@babel/core/lib/config/full.js:227:63)\n    at config.presets.map.descriptor (/Users/marneb/Documents/pp/patternplate/node_modules/@babel/core/lib/config/full.js:72:19)\n    at Array.map (<anonymous>)\n    at recurseDescriptors (/Users/marneb/Documents/pp/patternplate/node_modules/@babel/core/lib/config/full.js:70:38)\n    at recurseDescriptors (/Users/marneb/Documents/pp/patternplate/node_modules/@babel/core/lib/config/full.js:86:27)\n    at loadFullConfig (/Users/marneb/Documents/pp/patternplate/node_modules/@babel/core/lib/config/full.js:100:6)\n    at process.nextTick (/Users/marneb/Documents/pp/patternplate/node_modules/@babel/core/lib/transform.js:28:33)\n    at _combinedTickCallback (internal/process/next_tick.js:131:7)\n    at process._tickCallback (internal/process/next_tick.js:180:9)");

/***/ })

/******/ });
//# sourceMappingURL=client.f900ba3cfc79f6a66e91.js.map