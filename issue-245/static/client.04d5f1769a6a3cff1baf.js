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

throw new Error("Module build failed: TypeError: Cannot read property 'program' of null\n    at getRuntime (/Users/marneb/Documents/pp/patternplate/node_modules/fast-async/plugin.js:22:47)\n    at PluginPass.exit (/Users/marneb/Documents/pp/patternplate/node_modules/fast-async/plugin.js:87:39)\n    at newFn (/Users/marneb/Documents/pp/patternplate/node_modules/@babel/traverse/lib/visitors.js:193:21)\n    at NodePath._call (/Users/marneb/Documents/pp/patternplate/node_modules/@babel/traverse/lib/path/context.js:53:20)\n    at NodePath.call (/Users/marneb/Documents/pp/patternplate/node_modules/@babel/traverse/lib/path/context.js:40:17)\n    at NodePath.visit (/Users/marneb/Documents/pp/patternplate/node_modules/@babel/traverse/lib/path/context.js:97:8)\n    at TraversalContext.visitQueue (/Users/marneb/Documents/pp/patternplate/node_modules/@babel/traverse/lib/context.js:118:16)\n    at TraversalContext.visitSingle (/Users/marneb/Documents/pp/patternplate/node_modules/@babel/traverse/lib/context.js:90:19)\n    at TraversalContext.visit (/Users/marneb/Documents/pp/patternplate/node_modules/@babel/traverse/lib/context.js:146:19)\n    at Function.traverse.node (/Users/marneb/Documents/pp/patternplate/node_modules/@babel/traverse/lib/index.js:94:17)\n    at traverse (/Users/marneb/Documents/pp/patternplate/node_modules/@babel/traverse/lib/index.js:76:12)\n    at transformFile (/Users/marneb/Documents/pp/patternplate/node_modules/@babel/core/lib/transformation/index.js:88:29)\n    at runSync (/Users/marneb/Documents/pp/patternplate/node_modules/@babel/core/lib/transformation/index.js:45:3)\n    at transformSync (/Users/marneb/Documents/pp/patternplate/node_modules/@babel/core/lib/transform.js:43:38)\n    at Object.transform (/Users/marneb/Documents/pp/patternplate/node_modules/@babel/core/lib/transform.js:22:38)\n    at transpile (/Users/marneb/Documents/pp/patternplate/node_modules/babel-loader/lib/index.js:55:20)\n    at Object.module.exports (/Users/marneb/Documents/pp/patternplate/node_modules/babel-loader/lib/index.js:179:20)");

/***/ })

/******/ });
//# sourceMappingURL=client.04d5f1769a6a3cff1baf.js.map