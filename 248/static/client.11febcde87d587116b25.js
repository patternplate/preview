/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		"client": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/client.js","vendors~client"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../components/index.js":
/*!******************************!*\
  !*** ../components/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./lib */ "../components/lib/index.js");

/***/ }),

/***/ "../components/lib/button/index.js":
/*!*****************************************!*\
  !*** ../components/lib/button/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");

var styled = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.es.js").default;

var tag = __webpack_require__(/*! tag-hoc */ "../../node_modules/tag-hoc/dist/tag.js").default;

var Icon = __webpack_require__(/*! ../icon */ "../components/lib/icon/index.js");

var Link = __webpack_require__(/*! ../link */ "../components/lib/link/index.js");

function Button(props) {
  var OuterElement = props.type === "link" ? tag(["external", "type"])(Link) : tag(["external"])("button");
  return React.createElement(OuterElement, {
    className: props.className,
    title: props.title,
    onClick: props.onClick,
    external: props.external,
    href: props.href,
    type: props.type
  }, props.children && React.createElement(StyledLabel, null, props.children), props.symbol && React.createElement(StyledIcon, {
    symbol: props.symbol
  }));
}

Button.defaultProps = {
  type: "button"
};
var StyledLabel = styled.span.withConfig({
  displayName: "button__StyledLabel"
})(["font-family:", ";"], function (props) {
  return props.theme.fonts.default;
});

var FRAME = function FRAME(props) {
  return !props.frameless && "\n  padding: 4px;\n  border: 1px solid currentColor\n";
};

var TRANSPARENCY = function TRANSPARENCY(props) {
  return props.transparent && "\n  background: transparent;\n";
};

var StyledButton = styled(Button).withConfig({
  displayName: "button__StyledButton"
})(["appearance:none;display:inline-flex;height:40px;align-items:center;justify-content:center;padding:5px;border:none;outline:0;background:", ";color:", ";font:inherit;box-sizing:border-box;vertical-align:top;", ";", ";"], function (props) {
  return props.theme.colors.background;
}, function (props) {
  return props.theme.colors.color;
}, FRAME, TRANSPARENCY);
var StyledIcon = styled(Icon).withConfig({
  displayName: "button__StyledIcon"
})(["&:not(:first-child){margin-left:5px;}"]);
module.exports = StyledButton;

/***/ }),

/***/ "../components/lib/code-pane/index.js":
/*!********************************************!*\
  !*** ../components/lib/code-pane/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");

var styled = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.es.js").default;

var Code = __webpack_require__(/*! ../code */ "../components/lib/code/index.js");

module.exports = CodePane;

function CodePane(props) {
  return React.createElement(StyledCodePane, {
    className: props.className,
    hermit: props.hermit
  }, React.createElement(StyledScrollbox, null, React.createElement(Code, {
    block: true,
    language: "html"
  }, props.source)));
}

var BORDER_RADIUS = 10;
var StyledCodePane = styled.div.withConfig({
  displayName: "code-pane__StyledCodePane"
})(["position:relative;height:100%;width:100%;box-sizing:border-box;&::before{content:\"\";position:absolute;z-index:1;top:0;right:0;bottom:0;left:0;border-radius:", ";background:", ";}"], function (props) {
  return props.hermit ? "".concat(BORDER_RADIUS, "px") : "0 ".concat(BORDER_RADIUS, "px ").concat(BORDER_RADIUS, "px 0");
}, function (props) {
  return props.theme.colors.background;
});
var StyledScrollbox = styled.div.withConfig({
  displayName: "code-pane__StyledScrollbox"
})(["position:relative;z-index:2;height:100%;width:100%;box-sizing:border-box;overflow:scroll;-webkit-overflow-scrolling:touch;"]);

/***/ }),

/***/ "../components/lib/code/index.js":
/*!***************************************!*\
  !*** ../components/lib/code/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");

var styled = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.es.js").default;

var _require = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js"),
    includes = _require.includes;

var refractor = __webpack_require__(/*! refractor/core.js */ "../../node_modules/refractor/core.js");

var toh = __webpack_require__(/*! hast-to-hyperscript */ "../components/node_modules/hast-to-hyperscript/index.js"); // in core: css


refractor.register(__webpack_require__(/*! refractor/lang/less.js */ "../../node_modules/refractor/lang/less.js"));
refractor.register(__webpack_require__(/*! refractor/lang/scss.js */ "../../node_modules/refractor/lang/scss.js"));
refractor.register(__webpack_require__(/*! refractor/lang/stylus.js */ "../../node_modules/refractor/lang/stylus.js")); // in core: js

refractor.register(__webpack_require__(/*! refractor/lang/jsx.js */ "../../node_modules/refractor/lang/jsx.js"));
refractor.register(__webpack_require__(/*! refractor/lang/typescript.js */ "../../node_modules/refractor/lang/typescript.js"));
refractor.register(__webpack_require__(/*! refractor/lang/tsx.js */ "../../node_modules/refractor/lang/tsx.js"));
refractor.register(__webpack_require__(/*! refractor/lang/json.js */ "../../node_modules/refractor/lang/json.js")); // in core: xml, html, svg

refractor.register(__webpack_require__(/*! refractor/lang/markdown.js */ "../../node_modules/refractor/lang/markdown.js"));
refractor.register(__webpack_require__(/*! refractor/lang/bash.js */ "../../node_modules/refractor/lang/bash.js"));
refractor.register(__webpack_require__(/*! refractor/lang/diff.js */ "../../node_modules/refractor/lang/diff.js"));
module.exports = Code;
module.exports.highlight = highlight;
module.exports.toElements = toElements;

function Code(props) {
  var source = highlightCode(props.language, props.children);
  var code = React.createElement(StyledCode, {
    className: props.className
  }, source);
  return props.block ? React.createElement("pre", null, code) : code;
}

var themes = {
  dark: {
    mono1: "#abb2bf",
    mono2: "#818896",
    mono3: "#5c6370",
    hue1: "#56b6c2",
    hue2: "#61aeee",
    hue3: "#c678dd",
    hue4: "#7ec699",
    hue5: "#e2777a",
    hue52: "#be5046",
    hue6: "#f8c555",
    hue62: "#f08d49"
  },
  light: {
    mono1: "#383a42",
    mono2: "#686b77",
    mono3: "#a0a1a7",
    hue1: "#0184bb",
    hue2: "#4078f2",
    hue3: "#a626a4",
    hue4: "#50a14f",
    hue5: "#e45649",
    hue52: "#c91243",
    hue6: "#f08d49",
    hue62: "#c18401"
  }
};

var themed = function themed(key) {
  return function (props) {
    return themes[props.theme.name][key];
  };
};

var StyledCode = styled.code.withConfig({
  displayName: "code__StyledCode"
})(["display:block;overflow-x:auto;padding:0.5em;color:", ";font-family:", ";.token.comment,.token.block-comment,.token.prolog,.token.doctype,.token.cdata{color:", ";}.token.punctuation{color:", ";}.token.tag,.token.attr-name,.token.namespace,.token.deleted{color:", ";}.token.function-name{color:#6196cc;}.token.boolean,.token.number,.token.function{color:", ";}.token.property,.token.class-name,.token.constant,.token.symbol{color:", ";}.token.selector,.token.important,.token.atrule,.token.keyword,.token.builtin{color:", ";}.token.string,.token.char,.token.attr-value,.token.regex,.token.variable{color:", ";}.token.operator,.token.entity,.token.url{color:", ";}.token.important,.token.bold{font-weight:bold;}.token.italic{font-style:italic;}.token.entity{cursor:help;}.token.inserted{color:green;}"], themed("mono1"), function (props) {
  return props.theme.fonts.code;
}, themed("mono3"), themed("mono1"), themed("hue5"), themed("hue62"), themed("hue6"), themed("hue2"), themed("hue4"), themed("hue5"));

function highlightCode(language) {
  var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

  if (!language) {
    return source;
  }

  if (!source) {
    return source;
  }

  var hast = highlight(language, source);
  return toElements(hast);
}

var ALIASES = {
  md: 'markdown',
  sh: 'bash'
};

function highlight(language, source) {
  var lang = ALIASES[language] || language;

  if (!refractor.registered(lang)) {
    return source;
  }

  return refractor.highlight(source, lang);
}

function toElements(children) {
  if (!Array.isArray(children)) {
    return children;
  }

  var root = toh(React.createElement, {
    type: "element",
    tagName: "div",
    children: children
  });
  return root.props.children;
}

/***/ }),

/***/ "../components/lib/flag/index.js":
/*!***************************************!*\
  !*** ../components/lib/flag/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");

var styled = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.es.js").default;

var text = __webpack_require__(/*! react-addons-text-content */ "../../node_modules/react-addons-text-content/dist/react-addons-text-content.js");

module.exports = Flag;

function Flag(props) {
  return React.createElement(StyledText, {
    className: props.className
  }, props.children);
}

var StyledText = styled.span.withConfig({
  displayName: "flag__StyledText"
})(["display:inline-block;padding:2px 4px;border:1px solid ", ";border-radius:3px;font-family:", ";", ";"], function (props) {
  return props.theme.colors.border;
}, function (props) {
  return props.theme.fonts.default;
}, function (props) {
  var color = getFlagColor(text(props.children), props.theme.colors);
  return "\n\t\t\tborder-color: ".concat(color, ";\n\t\t\tcolor: ").concat(color, ";\n\t\t");
});

function getFlagColor(flag, theme) {
  switch (flag) {
    case "alpha":
      return theme.error;

    case "beta":
      return theme.warning;

    case "rc":
      return theme.info;

    case "stable":
      return theme.success;

    case "deprecated":
      return theme.error;

    default:
      return theme.error;
  }
}

/***/ }),

/***/ "../components/lib/fonts/index.js":
/*!****************************************!*\
  !*** ../components/lib/fonts/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = fonts;
var EMOJI = ["\"Apple Color Emoji\"", "\"Segoe UI Emoji\"", "\"Segoe UI Symbol\""];
var SYSTEM_FONTS = ["-apple-system", "BlinkMacSystemFont", "\"Segoe UI\"", "Helvetica", "Arial", "sans-serif"].concat(EMOJI);
var CODE_FONTS = ["SFMono-Regular", "Consolas", "Liberation Mono", "Menlo", "Courier", "monospace"].concat(EMOJI);

function fonts() {
  return {
    default: SYSTEM_FONTS.join(", "),
    code: CODE_FONTS.join(", ")
  };
}

/***/ }),

/***/ "../components/lib/headline/index.js":
/*!*******************************************!*\
  !*** ../components/lib/headline/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");

var styled = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.es.js").default;

var Text = __webpack_require__(/*! ../text */ "../components/lib/text/index.js");

var ORDERS = {
  0: 72,
  1: 36,
  2: 27,
  3: 23,
  4: 18
};

var Headline = function Headline(props) {
  var is = props.is || 'h1';
  return React.createElement(Text, {
    is: is,
    className: props.className
  }, props.children);
};

module.exports = styled(Headline).withConfig({
  displayName: "headline__exports"
})(["color:", ";font-size:", "px;font-family:", ";margin:60px 0 16px 0;font-weight:300;line-height:1.25;"], function (props) {
  return props.theme.colors.color;
}, function (props) {
  return ORDERS[props.order];
}, function (props) {
  return props.theme.fonts.headline;
});

/***/ }),

/***/ "../components/lib/icon/index.js":
/*!***************************************!*\
  !*** ../components/lib/icon/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");

var ReactDOM = __webpack_require__(/*! react-dom */ "../../node_modules/react-dom/index.js");

var styled = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.es.js").default;

var _require = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js"),
    omit = _require.omit,
    merge = _require.merge,
    uniq = _require.uniq;

var withSideEffect = __webpack_require__(/*! react-side-effect */ "../../node_modules/react-side-effect/lib/index.js");
/* eslint-disable max-len */


var _arrowLeft = "M9.452 13.233c-.14-.148-.258-.31-.344-.494-.215-.465-.215-1.01 0-1.475.085-.184.203-.346.343-.494l3.543-3.544 1.06 1.06c-1.183 1.186-2.46 2.285-3.55 3.558-.058.075-.073.175-.033.262.013.03.033.054.056.078l3.527 3.527-1.06 1.06-3.54-3.54z";
var _arrowRight = "m 14.202,10.767 c 0.14,0.147 0.258,0.31 0.344,0.494 0.215,0.464 0.215,1.01 0,1.474 -0.085,0.185 -0.203,0.347 -0.343,0.494 L 10.66,16.775 9.6,15.715 c 1.183,-1.186 2.46,-2.285 3.55,-3.558 0.058,-0.075 0.073,-0.176 0.033,-0.262 -0.013,-0.03 -0.033,-0.055 -0.056,-0.08 L 9.601,8.29 l 1.06,-1.06 3.54,3.54 z";
var _arrowDown = {
  d: "m 14.202,10.767 c 0.14,0.147 0.258,0.31 0.344,0.494 0.215,0.464 0.215,1.01 0,1.474 -0.085,0.185 -0.203,0.347 -0.343,0.494 L 10.66,16.775 9.6,15.715 c 1.183,-1.186 2.46,-2.285 3.55,-3.558 0.058,-0.075 0.073,-0.176 0.033,-0.262 -0.013,-0.03 -0.033,-0.055 -0.056,-0.08 L 9.601,8.29 l 1.06,-1.06 3.54,3.54 z",
  transform: "rotate(90, 12.1536, 12.0025)"
};
var _code = "M20.54 10.76l-3.313-3.313-.777 1.344 3.03 3.03c.098.1.098.257 0 .354l-3.533 3.538 1.06 1.06 3.536-3.538c.68-.683.68-1.792-.002-2.473zM4.52 11.82L8.05 8.29l-1.06-1.06L3.46 10.76c-.682.683-.683 1.79-.003 2.474l3.316 3.32.777-1.345-3.032-3.036c-.097-.097-.097-.255 0-.353zM7.6 18.12l7.5-12.99 1.3.75-7.5 12.99z";
var _close = ["M11.988 1.333C6.08 1.333 1.274 6.14 1.274 12.047c0 5.908 4.806 10.714 10.714 10.714s10.714-4.806 10.714-10.714c0-5.907-4.807-10.714-10.714-10.714zm0 19.78c-5 0-9.066-4.067-9.066-9.066s4.067-9.065 9.066-9.065 9.065 4.066 9.065 9.065-4.067 9.066-9.065 9.066z", "M17.232 6.802a.824.824 0 0 0-1.165 0l-4.08 4.08-4.079-4.08a.824.824 0 1 0-1.165 1.166l4.08 4.08-4.08 4.079a.824.824 0 1 0 1.165 1.165l4.08-4.08 4.079 4.08a.82.82 0 0 0 1.165 0 .824.824 0 0 0 0-1.165l-4.08-4.08 4.08-4.079a.824.824 0 0 0 0-1.166z"];
var _dark = "M12 16v3.227L5.52 15.15l-.02-6.3L12 4.77V8l-2 2 4 4-2 2zm0-13L4 8.02l.02 7.96L12 21l7.937-5L20 8l-8-5z";
var _dependencies = "M9.453 20.026L6.75 21.378v-4.17l3.256-1.627v3.56c0 .38-.214.73-.553.9m-6.906 0c-.34-.17-.553-.515-.553-.893v-3.55l3.256 1.62v4.17L2.547 20.03zm3.006-7.062c.14-.07.294-.106.447-.106.153 0 .306.036.447.106l2.72 1.36L6 15.906 2.833 14.32l2.72-1.36zm4.57.16L7.12 11.62c-.345-.17-.732-.263-1.118-.263-.386 0-.773.09-1.118.26L1.878 13.12c-.854.423-1.384 1.28-1.384 2.233v3.77c0 .953.53 1.81 1.382 2.237l3.006 1.503c.345.174.732.266 1.118.266.386 0 .773-.09 1.118-.27l3.006-1.505c.852-.427 1.382-1.283 1.382-2.236v-3.77c0-.954-.53-1.81-1.382-2.237m11.33 6.906l-2.704 1.35V17.2l3.256-1.625v3.55c0 .38-.214.728-.553.897m-6.906 0c-.34-.17-.553-.517-.553-.895v-3.55l3.256 1.627v4.17l-2.703-1.353zm3.006-7.064c.14-.07.294-.104.447-.104.153 0 .306.04.447.11l2.72 1.36L18 15.91l-3.167-1.583 2.72-1.36zm4.57.16l-3.005-1.5c-.345-.17-.732-.262-1.118-.262-.386 0-.773.097-1.118.27l-3.006 1.502c-.852.425-1.382 1.28-1.382 2.234v3.772c0 .952.53 1.81 1.382 2.236l3.006 1.503c.345.17.732.262 1.118.262.386 0 .773-.092 1.118-.264l3.006-1.5c.852-.43 1.382-1.287 1.382-2.24v-3.77c0-.953-.53-1.81-1.382-2.236M8.547 9.53c-.34-.17-.553-.516-.553-.894v-3.55l3.256 1.627v4.17L8.547 9.53zm3.006-7.063c.14-.07.294-.106.447-.106.153 0 .306.04.447.11l2.72 1.36L12 5.41 8.833 3.827l2.72-1.36zm3.9 7.063l-2.703 1.352v-4.17l3.256-1.627v3.55c0 .38-.214.726-.553.895m.67 1.342c.853-.427 1.383-1.283 1.383-2.236V4.864c0-.953-.53-1.81-1.382-2.236l-3.006-1.503C12.773.953 12.386.86 12 .86c-.386 0-.773.093-1.118.265L7.876 2.628c-.852.427-1.382 1.283-1.382 2.236v3.772c0 .952.53 1.81 1.382 2.236l3.006 1.503c.345.172.732.264 1.118.264.386 0 .773-.1 1.118-.27l3.006-1.51z";
var _ecospheres = "M18.052 15.315c0 .287-.162.55-.418.677l-5.296 2.648c-.107.053-.222.08-.338.08-.116 0-.232-.027-.34-.08l-5.295-2.648c-.256-.128-.418-.39-.418-.677v-6.63c0-.287.162-.55.418-.677L11.66 5.36c.108-.053.224-.08.34-.08.116 0 .23.027.338.08l5.296 2.648c.256.128.418.39.418.677v6.63zm.253-8.65L13.01 4.02c-.313-.155-.662-.238-1.01-.238-.35 0-.698.083-1.01.238L5.696 6.666c-.77.385-1.248 1.16-1.248 2.02v6.63c0 .86.478 1.633 1.247 2.017l5.296 2.648c.315.16.66.24 1.01.24s.7-.08 1.01-.235l5.298-2.65c.77-.383 1.247-1.157 1.247-2.017v-6.63c0-.86-.478-1.634-1.247-2.02";
var _externalLink = [{
  d: "m20.35093,4.63239l-7.85822,7.85822a0.69591,0.69591 0 0 1 -0.98402,-0.98402l7.85822,-7.85822l-5.27918,0a0.69591,0.69591 0 0 1 0,-1.39182l6.9591,0a0.69591,0.69591 0 0 1 0.69591,0.69591l0,6.95911a0.69591,0.69591 0 0 1 -1.39182,0l0,-5.27918zm-12.52639,0.4078l-3.48095,0c-1.15243,0 -2.08634,0.93113 -2.08634,2.08216l0,12.53892c0,1.14825 0.94505,2.08216 2.09052,2.08216l12.51943,0a2.08773,2.08773 0 0 0 2.09051,-2.09052l0,-3.47677a0.69591,0.69591 0 0 0 -1.39182,0l0,3.47677a0.69591,0.69591 0 0 1 -0.69869,0.6987l-12.51943,0a0.70148,0.70148 0 0 1 -0.69869,-0.69035l0,-12.53892c0,-0.38136 0.31038,-0.69034 0.69452,-0.69034l3.48095,0a0.69591,0.69591 0 0 0 0,-1.39182z",
  fillmode: "nonzero"
}];
var _folder = "M10.5 4.5h-8v14c0 .552.448 1 1 1h17c.552 0 1-.448 1-1v-11h-11v-3zM9 6v3h11v9H4V6h5";
var _fullscreen = "M9 3.75v-1.5l-5 .003c-.966 0-1.75.785-1.75 1.75V9h1.5V4.813L8.38 9.44l1.06-1.06-4.63-4.63H9zm-.62 10.81l-4.63 4.626V15h-1.5v4.997c0 .964.785 1.75 1.75 1.75l5 .002v-1.5l-4.19-.005 4.63-4.626-1.06-1.06zM20 2.25l-5-.005v1.5l4.194.003-4.634 4.63 1.06 1.06 4.63-4.624v4.18h1.5V4c0-.966-.785-1.75-1.75-1.75m.25 16.936l-4.63-4.626-1.06 1.06 4.634 4.63-4.194.005v1.5l5-.004c.965 0 1.75-.782 1.75-1.75v-4.993h-1.5v4.18z";
var _globals = "M12 20.5c-3.046 0-5.716-1.616-7.217-4.03l.16.065 1.75-4.25c.08-.196.075-.416-.015-.607l-1.936-4.08c.595-.977 1.38-1.824 2.305-2.49L8.25 6.31V9c0 .116.028.23.08.335l3 6c.1.2.282.343.498.394.057.01.115.02.172.02.16 0 .32-.06.45-.15l4-3c.167-.13.275-.32.296-.53l.283-2.746 2.83-.543c.404.99.632 2.075.632 3.21 0 4.688-3.814 8.5-8.5 8.5M3.92 9.37l1.258 2.65-1.172 2.848C3.686 13.97 3.5 13.008 3.5 12c0-.92.15-1.802.422-2.63M19.138 7.4l-2.94.564c-.324.06-.57.33-.604.66l-.306 2.972-3.02 2.264L9.75 8.823V6c0-.2-.08-.39-.22-.53L8.38 4.32c1.1-.52 2.325-.82 3.62-.82 2.992 0 5.623 1.558 7.138 3.9M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2";
var _environment = _globals;
var _home = "M12.055 2l-11 10h1.89v9.02c0 .524.422.95.943.95h7.223V18.2H13v3.77l7.103.03h.008c.524 0 .947-.424.947-.95v-9.01l1.89-.04-10.89-10zm-.005 2.032l7.505 6.892v9.574l-5.055-.023V16.7H9.61v3.77H4.445v-9.525L12.05 4.03";
var _light = "M12 8V4.773l6.48 4.078.018 6.3L12 19.23V16l2-2-4-4 2-2zm0 13l8-5.02-.02-7.96L12 3 4.063 8 4 16l8 5z";
var _link = ["M13.836 15.767h-.749c-.05 0-.105 0-.155-.01a3.425 3.425 0 0 1-.935-.151 3.772 3.772 0 0 1-1.918-1.346 3.146 3.146 0 0 1-.321-.502 2.998 2.998 0 0 1-.216-.502c-.146-.393-.222-.814-.222-1.256s.076-.864.222-1.256h1.37c.096 0 .186.01.277.03a2.264 2.264 0 0 0 0 2.45c.1.152.216.293.351.418.136.13.286.241.457.337.321.176.693.281 1.09.281h3.516c1.245 0 2.26-1.014 2.26-2.26s-1.015-2.26-2.26-2.26h-1.487a4.758 4.758 0 0 0-1.28-1.507h2.767a3.768 3.768 0 0 1 0 7.534h-2.767z", "M12.46 10.358a2.156 2.156 0 0 0-.462-.336 2.198 2.198 0 0 0-1.085-.282H7.397c-1.245 0-2.26 1.014-2.26 2.26s1.015 2.26 2.26 2.26h1.492c.316.587.753 1.1 1.275 1.507H7.397a3.768 3.768 0 0 1 0-7.534h3.516c.055 0 .105 0 .156.01.321.005.632.06.929.15a3.73 3.73 0 0 1 1.918 1.347c.13.16.236.326.327.502.085.16.16.326.216.502.146.391.22.814.22 1.256s-.074.863-.22 1.255h-1.371a1.19 1.19 0 0 1-.276-.03c.23-.351.361-.773.361-1.225a2.223 2.223 0 0 0-.714-1.642z"];
var _molecules = "M6.372 4.75h11.255v1.5H6.372zM12.9 16.172c.32.124.617.31.868.56.12.12.222.248.312.383l5.626-9.143c-.514-.06-.99-.274-1.377-.624l-5.43 8.824zM6.08 6.886c-.09.135-.193.263-.312.382-.25.25-.548.437-.87.56l5.43 8.825c.388-.35.864-.564 1.378-.624L6.08 6.883zm4.86 10.554c-.587.586-.587 1.536 0 2.12.585.587 1.535.587 2.12 0 .586-.584.586-1.534 0-2.12-.585-.586-1.535-.586-2.12 0m10.12-13c-.585-.586-1.535-.586-2.12 0-.586.586-.586 1.536 0 2.12.585.587 1.535.587 2.12 0 .587-.584.587-1.534 0-2.12m-16 0c-.585-.586-1.535-.586-2.12 0-.586.586-.586 1.536 0 2.12.585.587 1.535.587 2.12 0 .587-.584.587-1.534 0-2.12";
var _organisms = "M6.475 15.75c.008.084.025.165.025.25 0 .48-.142.922-.376 1.302l3.766 2.37c.287-.455.715-.808 1.224-1.002l-4.64-2.92zm11.05-.004l-4.64 2.923c.51.19.937.54 1.225 1l3.765-2.37c-.233-.38-.375-.83-.375-1.3 0-.09.017-.17.026-.26m2.454-5.25c-.564-.004-1.078-.203-1.495-.524l-.032 4.08c.417-.33.934-.54 1.505-.55l.023-3.005zm-15.973.01l.008 3c.567.003 1.083.203 1.5.524l-.01-4.042c-.418.318-.933.515-1.498.516m13.515-2.28c-.007-.08-.022-.15-.022-.22 0-.49.145-.94.386-1.32l-3.773-2.36c-.285.45-.71.81-1.22 1l4.63 2.893zm-11.046.01l4.635-2.91c-.5-.194-.93-.548-1.22-1.003L6.12 6.69c.237.383.38.83.38 1.31 0 .082-.016.16-.024.238M4 9.5c.828 0 1.5-.672 1.5-1.5S4.828 6.5 4 6.5 2.5 7.172 2.5 8 3.172 9.5 4 9.5m8-5c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5m-8 10c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m8 5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m8-5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m-8-4c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m8-1c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5";
var _pattern = "M12.75 18.948v-7.412c.846-.34 2.457-1.153 5.75-2.892v7.43l-5.75 2.874zM5.5 8.588l5.75 2.874v7.486L5.5 16.073V8.588zm6.5-3.91l5.546 2.772c-3.208 1.687-4.896 2.514-5.47 2.75l-5.56-2.78L12 4.676zm7.447 2.046l-7-3.5c-.14-.07-.294-.106-.447-.106-.153 0-.306.035-.447.106l-7 3.5c-.34.17-.553.515-.553.894v8.764c0 .38.214.725.553.894l7 3.5c.14.07.294.106.447.106.153 0 .307-.035.447-.106l7-3.5c.34-.17.553-.515.553-.894V7.618c0-.38-.214-.725-.553-.894";
var _patternplate = ["M12.002 20.426a1.264 1.264 0 0 1-.675-.189l-9.05-5.63a.86.86 0 1 1 .906-1.455l8.819 5.494 8.815-5.494a.86.86 0 1 1 .906 1.456l-9.047 5.643a1.267 1.267 0 0 1-.674.175z", "M12 17.055a1.244 1.244 0 0 1-.657-.185l-8.886-5.545a1.193 1.193 0 0 1 0-2.023l8.886-5.542a1.25 1.25 0 0 1 1.314 0l8.886 5.542a1.193 1.193 0 0 1 0 2.023l-8.886 5.541a1.24 1.24 0 0 1-.657.19zm-7.99-6.742l7.99 4.98 7.99-4.98L12 5.334l-7.99 4.98z"];
var _polymers = "M6.475 15.75c.008.084.025.165.025.25 0 .48-.142.922-.376 1.302l3.766 2.37c.287-.455.715-.808 1.224-1.002l-4.64-2.92zm11.05-.004l-4.64 2.923c.51.19.937.54 1.225 1l3.765-2.37c-.233-.38-.375-.83-.375-1.3 0-.09.017-.17.026-.26m2.454-5.25c-.564-.008-1.078-.207-1.495-.528l-.032 4.08c.417-.33.934-.54 1.505-.55l.023-3.005zm-15.973.01l.008 3c.567 0 1.083.2 1.5.52l-.01-4.04c-.418.32-.933.514-1.498.515m13.515-2.28c-.007-.08-.022-.15-.022-.22 0-.49.145-.94.386-1.32l-3.773-2.36c-.285.45-.71.81-1.22 1l4.63 2.893zm-11.046.01l4.635-2.91c-.5-.194-.93-.548-1.22-1.003L6.12 6.69c.237.383.38.83.38 1.31 0 .082-.016.16-.024.238m11.064.152l-4.79 2.392v-5.41c-.238.076-.486.127-.75.127-.262 0-.51-.06-.75-.13v5.44l-4.79-2.4c-.088.51-.327.98-.68 1.34l4.512 2.26-4.502 2.24c.35.36.58.82.67 1.34l4.79-2.397v5.42c.24-.074.48-.127.75-.127s.51.05.75.126v-5.38l4.78 2.394c.077-.516.31-.983.653-1.35l-4.543-2.27 4.56-2.27c-.35-.36-.584-.827-.666-1.343M4 9.5c.828 0 1.5-.672 1.5-1.5S4.828 6.5 4 6.5 2.5 7.172 2.5 8 3.172 9.5 4 9.5m8-5c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5m-8 10c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m8 5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m8-5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m0-5c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5";
var _react = "M 16.019531 3 C 15.671125 3.00715 15.300981 3.091375 14.921875 3.2324219 C 14.163662 3.5145156 13.340776 4.0384002 12.503906 4.7753906 C 12.340395 4.9193891 12.176009 5.0979185 12.011719 5.2578125 C 11.901617 5.1513016 11.791835 5.0267433 11.681641 4.9277344 C 10.795655 4.1316628 9.9236686 3.5712298 9.125 3.2695312 C 8.7256657 3.1186821 8.3365968 3.0284378 7.9726562 3.0195312 C 7.6087157 3.0106212 7.270437 3.0833582 6.9726562 3.2578125 C 6.3972498 3.5948924 6.0860013 4.2551581 5.9492188 5.0585938 C 5.8124361 5.8620294 5.8476604 6.8442943 6.0605469 7.9453125 C 6.1031041 8.1654193 6.1740595 8.4036874 6.2304688 8.6328125 C 5.97484 8.7063633 5.7047008 8.7722283 5.46875 8.8554688 C 4.432811 9.2209626 3.5945928 9.6796197 2.9921875 10.201172 C 2.3897822 10.722724 2 11.327349 2 11.984375 C 2 12.662118 2.4082566 13.289795 3.0429688 13.839844 C 3.6776808 14.389892 4.5645597 14.878259 5.65625 15.255859 C 5.8317684 15.316571 6.0331245 15.360088 6.21875 15.414062 C 6.1582822 15.66053 6.0832065 15.917073 6.0390625 16.152344 C 5.8346362 17.241844 5.8098143 18.204961 5.9550781 18.992188 C 6.1003415 19.779412 6.4197964 20.423275 6.9863281 20.753906 C 7.5707485 21.094948 8.3167421 21.047508 9.1054688 20.765625 C 9.8941954 20.483741 10.754805 19.951627 11.623047 19.183594 C 11.761961 19.060717 11.898899 18.906452 12.037109 18.771484 C 12.216283 18.945766 12.396455 19.138171 12.574219 19.292969 C 13.405466 20.016801 14.218158 20.522511 14.966797 20.789062 C 15.715436 21.055615 16.430103 21.095246 16.996094 20.763672 C 17.579942 20.42164 17.910332 19.748024 18.0625 18.917969 C 18.214668 18.087913 18.188624 17.069767 17.964844 15.925781 C 17.929929 15.747281 17.867388 15.554788 17.822266 15.371094 C 17.950462 15.332733 18.093563 15.303037 18.216797 15.261719 C 19.34199 14.884455 20.256474 14.401339 20.914062 13.853516 C 21.571651 13.305692 22 12.675711 22 11.984375 C 22 11.316537 21.592337 10.708795 20.972656 10.185547 C 20.352976 9.6622986 19.494727 9.2034761 18.445312 8.8378906 C 18.238082 8.7656964 18.000825 8.7093156 17.779297 8.6445312 C 17.816133 8.4924793 17.870208 8.3318492 17.900391 8.1835938 C 18.13931 7.0099907 18.183182 5.96782 18.042969 5.1191406 C 17.902756 4.2704612 17.578578 3.5803124 16.982422 3.2324219 C 16.694443 3.0643682 16.367938 2.9928547 16.019531 3 z M 16.023438 3.8652344 C 16.246408 3.8595757 16.422746 3.9010322 16.548828 3.9746094 C 16.815675 4.1303292 17.07873 4.5521623 17.195312 5.2578125 C 17.311895 5.9634627 17.281462 6.9169667 17.058594 8.0117188 C 17.032589 8.1394545 16.984815 8.2822106 16.953125 8.4140625 C 16.134284 8.2234679 15.235015 8.0912672 14.294922 8.0019531 C 13.751908 7.2186476 13.191061 6.4913648 12.617188 5.8652344 C 12.768776 5.7177962 12.922862 5.5514965 13.072266 5.4199219 C 13.849433 4.7355084 14.600382 4.2698533 15.220703 4.0390625 C 15.530864 3.9236671 15.800467 3.8708931 16.023438 3.8652344 z M 7.9667969 3.8847656 C 8.204941 3.8916645 8.4921202 3.9495056 8.8222656 4.0742188 C 9.4825566 4.3236447 10.28203 4.8247788 11.107422 5.5664062 C 11.205243 5.6542984 11.305753 5.7681072 11.404297 5.8632812 C 10.828373 6.4891798 10.260402 7.2150849 9.7109375 8 C 8.7742691 8.0878313 7.878881 8.2210717 7.0605469 8.4082031 C 7.0093893 8.1995211 6.9427183 7.979966 6.9042969 7.78125 C 6.7063246 6.7573656 6.6823383 5.8644203 6.7949219 5.203125 C 6.9075054 4.5418297 7.1543156 4.1475862 7.40625 4 C 7.5395435 3.9219104 7.7286527 3.8778668 7.9667969 3.8847656 z M 12.011719 6.4746094 C 12.406433 6.9082361 12.7994 7.4001799 13.1875 7.9238281 C 12.794349 7.9049913 12.404259 7.8808594 12 7.8808594 C 11.601264 7.8808594 11.215567 7.9055035 10.826172 7.9238281 C 11.218061 7.4011371 11.614064 6.9090918 12.011719 6.4746094 z M 12 8.7402344 C 12.62139 8.7402344 13.227614 8.7668454 13.818359 8.8125 C 14.151039 9.3088157 14.475839 9.8245485 14.785156 10.365234 C 15.09578 10.908201 15.379531 11.451329 15.642578 11.990234 C 15.381336 12.536206 15.099335 13.084929 14.787109 13.632812 C 14.47815 14.17496 14.155199 14.694701 13.826172 15.193359 C 13.231026 15.236716 12.621925 15.263672 12 15.263672 C 11.385158 15.263672 10.783354 15.241979 10.195312 15.203125 C 9.857099 14.704207 9.5270761 14.182489 9.2148438 13.636719 C 8.9026472 13.090995 8.6226165 12.543692 8.3652344 12.001953 C 8.6223479 11.459349 8.9033118 10.912375 9.2128906 10.369141 C 9.5231725 9.8246773 9.8493881 9.3072485 10.183594 8.8125 C 10.77474 8.7671354 11.382161 8.7402344 12 8.7402344 z M 9.0917969 8.9335938 C 8.8809698 9.2664173 8.6672078 9.5936441 8.4667969 9.9453125 C 8.26942 10.29166 8.0992881 10.639079 7.921875 10.986328 C 7.6728423 10.387485 7.4513424 9.8008736 7.2792969 9.2402344 C 7.8448649 9.1122912 8.4555981 9.0142998 9.0917969 8.9335938 z M 14.912109 8.9335938 C 15.551594 9.0156474 16.16691 9.1173252 16.734375 9.2480469 C 16.562073 9.8064733 16.34146 10.391171 16.089844 10.988281 C 15.90762 10.63874 15.729215 10.288907 15.529297 9.9394531 C 15.33083 9.5925325 15.120651 9.264526 14.912109 8.9335938 z M 6.4472656 9.4648438 C 6.6951622 10.278405 7.0319189 11.134632 7.4277344 12.003906 C 7.026288 12.886892 6.6864667 13.756169 6.4355469 14.582031 C 6.272336 14.53433 6.0902943 14.49621 5.9375 14.443359 C 4.9277033 14.094085 4.1309727 13.643168 3.6074219 13.189453 C 3.0838711 12.735738 2.859375 12.295484 2.859375 11.984375 C 2.859375 11.681865 3.0645925 11.275878 3.5546875 10.851562 C 4.0447825 10.427248 4.7971191 10.004273 5.7558594 9.6660156 C 5.9674342 9.5913747 6.2155634 9.5317521 6.4472656 9.4648438 z M 17.5625 9.4765625 C 17.761147 9.5349289 17.977705 9.5841952 18.162109 9.6484375 C 19.135811 9.987647 19.909923 10.414765 20.417969 10.84375 C 20.926014 11.272735 21.140625 11.684825 21.140625 11.984375 C 21.140625 12.30116 20.909935 12.739581 20.365234 13.193359 C 19.820534 13.647138 18.990692 14.096108 17.943359 14.447266 C 17.839835 14.481976 17.715549 14.506445 17.607422 14.539062 C 17.350826 13.718687 16.99339 12.85937 16.583984 11.988281 C 16.977973 11.130028 17.315538 10.284009 17.5625 9.4765625 z M 16.097656 12.992188 C 16.360815 13.600657 16.599902 14.199577 16.779297 14.767578 C 16.197615 14.901882 15.568725 15.005518 14.908203 15.085938 C 15.119082 14.747835 15.331463 14.412597 15.533203 14.058594 C 15.735416 13.703757 15.915097 13.347868 16.097656 12.992188 z M 7.921875 13.021484 C 8.1000429 13.369168 8.2716246 13.716461 8.4707031 14.064453 C 8.6760168 14.423334 8.8964141 14.759151 9.1132812 15.099609 C 8.4651932 15.026399 7.8402627 14.934137 7.2675781 14.808594 C 7.4427132 14.236002 7.6671378 13.634621 7.921875 13.021484 z M 16.994141 15.599609 C 17.033614 15.76138 17.090652 15.934214 17.121094 16.089844 C 17.32857 17.150499 17.342782 18.076459 17.216797 18.763672 C 17.090815 19.450885 16.824358 19.868082 16.5625 20.021484 C 16.307877 20.17065 15.861548 20.194868 15.253906 19.978516 C 14.646267 19.762166 13.908649 19.315011 13.138672 18.644531 C 12.976886 18.503647 12.809552 18.324509 12.644531 18.164062 C 13.213719 17.533605 13.768067 16.796304 14.304688 16.009766 C 15.256548 15.924226 16.164838 15.793207 16.994141 15.599609 z M 7.046875 15.644531 C 7.8734712 15.828556 8.7843105 15.944441 9.7285156 16.021484 C 10.281098 16.80836 10.851201 17.535739 11.429688 18.164062 C 11.304718 18.286056 11.178838 18.429245 11.054688 18.539062 C 10.250844 19.250131 9.4655785 19.725022 8.8164062 19.957031 C 8.1672342 20.18904 7.6820257 20.164669 7.4199219 20.011719 C 7.1650564 19.862976 6.9174785 19.478939 6.7988281 18.835938 C 6.6801777 18.192936 6.695132 17.321208 6.8847656 16.310547 C 6.9241429 16.100681 6.9927179 15.866659 7.046875 15.644531 z M 13.201172 16.083984 C 12.816824 16.612397 12.428545 17.113513 12.037109 17.550781 C 11.636336 17.112875 11.235674 16.616934 10.839844 16.089844 C 11.2244 16.104917 11.606956 16.123047 12 16.123047 C 12.406689 16.123047 12.803605 16.101833 13.201172 16.083984 z";
var _reload = "M17.266 6.664C15.91 5.327 14.05 4.5 12 4.5c-4.135 0-7.5 3.365-7.5 7.5s3.365 7.5 7.5 7.5 7.5-3.365 7.5-7.5c0-.544-.058-1.074-.168-1.586h1.53C20.95 10.93 21 11.46 21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c2.453 0 4.677.98 6.3 2.572v-.986h1.5v3.578h-3.578v-1.5h1.044zM12 13.5c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5c.828 0 1.5.673 1.5 1.5s-.672 1.5-1.5 1.5z";
var _rulers = "M21 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zm-.5 8.5H18V13h-1.5v2.5h-2V13H13v2.5h-2V13H9.5v2.5h-2V13H6v2.5H3.5v-7h17z";
var _search = "M8.65 14.248c-.376-.46-.697-.962-.955-1.496-.335-.695-.56-1.44-.668-2.205-.11-.787-.096-1.59.044-2.373.13-.726.37-1.432.71-2.09.75-1.448 1.96-2.636 3.43-3.343.64-.3 1.32-.52 2.02-.64.35-.05.69-.08 1.04-.09h.29c.35.01.7.03 1.04.09.7.11 1.39.32 2.03.62 1.53.717 2.8 1.95 3.55 3.466.32.63.54 1.31.67 2.006.14.78.16 1.584.05 2.37-.106.76-.332 1.51-.667 2.204-.393.81-.933 1.55-1.586 2.174-.675.643-1.472 1.16-2.34 1.515-.895.365-1.862.553-2.832.553s-1.933-.186-2.83-.553c-.684-.28-1.325-.66-1.9-1.13-2.09 2.21-4.294 4.307-6.437 6.464-.09.08-.186.15-.3.187-.1.034-.205.046-.31.035-.072-.01-.145-.03-.213-.058-.308-.13-.497-.455-.454-.79.02-.15.088-.28.184-.395 2.09-2.23 4.3-4.343 6.46-6.506zM14.377 3.5c-.28.006-.56.027-.836.07-.56.085-1.1.25-1.62.49-1.16.542-2.13 1.457-2.74 2.58-.28.518-.48 1.075-.6 1.65-.13.65-.15 1.318-.07 1.974.08.612.25 1.21.52 1.77.31.655.73 1.253 1.25 1.758.54.523 1.17.945 1.86 1.236.715.302 1.486.462 2.26.472.777.01 1.554-.13 2.277-.416.695-.275 1.34-.682 1.885-1.192.53-.492.97-1.08 1.29-1.726.276-.55.464-1.144.557-1.753.1-.63.09-1.273-.01-1.9-.094-.56-.266-1.103-.51-1.613-.58-1.197-1.555-2.185-2.744-2.776-.505-.252-1.047-.43-1.603-.53-.273-.05-.55-.077-.83-.09-.1-.003-.204-.004-.31-.004z";
var _atoms = ["M12 3c-1.39 0-2.7.324-3.874.886.355.357.608.807.75 1.305.952-.436 2.008-.69 3.124-.69 4.135 0 7.5 3.367 7.5 7.5s-3.365 7.5-7.5 7.5-7.5-3.363-7.5-7.5c0-1.114.252-2.17.69-3.123-.497-.14-.947-.395-1.304-.75C3.324 9.3 3 10.612 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9-4.03-9-9-9", "M13.5 12c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5M6 7.5c.828 0 1.5-.672 1.5-1.5S6.828 4.5 6 4.5 4.5 5.172 4.5 6 5.172 7.5 6 7.5"];
var _arrowDoubleLeft = ["M7.452 13.233c-.14-.148-.258-.31-.344-.494-.215-.465-.215-1.01 0-1.475.085-.184.203-.346.343-.494l3.543-3.544 1.06 1.06c-1.183 1.186-2.46 2.285-3.55 3.558-.058.075-.073.175-.033.262.013.03.033.054.056.078l3.527 3.527-1.06 1.06-3.54-3.54z", "M12.452 13.233c-.14-.148-.258-.31-.344-.494-.215-.465-.215-1.01 0-1.475.085-.184.203-.346.343-.494l3.543-3.544 1.06 1.06c-1.183 1.186-2.46 2.285-3.55 3.558-.058.075-.073.175-.033.262.013.03.033.054.056.078l3.527 3.527-1.06 1.06-3.54-3.54z"];
var _arrowDoubleRight = ["M16.548 10.767c.14.147.258.31.344.494.215.464.215 1.01 0 1.474-.085.185-.203.347-.343.494l-3.543 3.546-1.06-1.06c1.183-1.186 2.46-2.285 3.55-3.558.058-.075.073-.176.033-.262-.013-.03-.033-.055-.056-.08L11.947 8.29l1.06-1.06 3.54 3.54z", "M11.548 10.767c.14.147.258.31.344.494.215.464.215 1.01 0 1.474-.085.185-.203.347-.343.494l-3.543 3.546-1.06-1.06c1.183-1.186 2.46-2.285 3.55-3.558.058-.075.073-.176.033-.262-.013-.03-.033-.055-.056-.08L6.947 8.29l1.06-1.06 3.54 3.54z"];
var _folderOpen = [{
  d: "M20 18H4V9h5v3h11v6zM10.5 7.5v-3h-8v14c0 .552.448 1 1 1h17c.552 0 1-.448 1-1v-11h-11z"
}];
var _documentation = ["M18.375 16.625h-9v-13h9v13zm-10.5-14.5v15c0 .552.447 1 1 1h11v-16h-12z", "M14.125 20.375h-8.25c-.137 0-.25-.112-.25-.25V6.875h1.25v-1.5h-2.75v14.75c0 .965.786 1.75 1.75 1.75h9.75v-2.75h-1.5v1.25z", {
  tagName: "circle",
  cx: 14,
  cy: 6.5,
  r: 1.5
}, "M14.75 9h.75v1.5h-.75v3H16V15h-4v-1.5h1.25v-3h-.75V9h.75v-.004h1.5V9z"];
var _issue = ["M19.98 10.99l-2.647-5.295c-.385-.77-1.158-1.248-2.02-1.248h-6.63c-.858 0-1.633.48-2.018 1.248L4.018 10.99c-.156.313-.238.66-.238 1.01s.082.697.237 1.01l2.648 5.295c.385.77 1.16 1.248 2.02 1.248h6.63c.86 0 1.633-.48 2.018-1.247l2.647-5.296c.156-.312.24-.66.24-1.01s-.083-.697-.24-1.01zm-1.34 1.35l-2.648 5.295c-.127.256-.39.418-.677.418h-6.63c-.287 0-.55-.162-.677-.418L5.36 12.34c-.053-.11-.08-.225-.08-.34 0-.116.026-.23.08-.338l2.647-5.297c.128-.256.39-.418.677-.418h6.63c.287 0 .55.162.677.418l2.65 5.297c.053.106.08.222.08.338 0 .115-.027.23-.08.34z", {
  tagName: "circle",
  cx: 12,
  cy: 15,
  r: 1.5
}, "M11.25 7.474h1.5v4.5h-1.5z"];
var _command = ["M20.5 5.5h-17c-.55 0-1 .45-1 1v11c0 .552.45 1 1 1h17c.552 0 1-.448 1-1v-11c0-.55-.448-1-1-1zM20 17H4V7h16v10z", "M8.375 14.25h7.25v1.5h-7.25zm-2.875-6H7v1.5H5.5zm2.875 0h1.5v1.5h-1.5zm2.875 0h1.5v1.5h-1.5zm5.75 0h1.5v1.5H17zm-2.875 0h1.5v1.5h-1.5zm-4.313 3h1.5v1.5h-1.5zm2.876 0h1.5v1.5h-1.5zm-7.188 0h2.938v1.5H5.5zm10.078 0h2.938v1.5h-2.938zm-10.078 3H7v1.5H5.5zm11.516 0h1.5v1.5h-1.5z"];
var _placeholder = [{
  tagName: "rect",
  x: 0,
  y: 0,
  width: 24,
  height: 24
}];
var _hamburger = ["M7.86 12.83V11.53c0-.24.193-.433.432-.433h12.12c.239 0 .433.194.433.433v1.299c0 .24-.194.433-.432.433H8.292a.433.433 0 0 1-.432-.433zm0 5.194v-1.299c0-.24.193-.433.432-.433h12.12c.239 0 .433.194.433.433v1.299c0 .24-.194.432-.432.432H8.292a.433.433 0 0 1-.432-.432zm0-10.388V6.337c0-.24.193-.432.432-.432h12.12c.239 0 .433.193.433.432v1.299c0 .24-.194.433-.432.433H8.292a.433.433 0 0 1-.432-.433zM3.315 13.05v-1.74a.43.43 0 0 1 .43-.428h1.738a.43.43 0 0 1 .43.429v1.74a.43.43 0 0 1-.43.428H3.744a.43.43 0 0 1-.429-.429zm0 5.194v-1.74a.43.43 0 0 1 .43-.428h1.738a.43.43 0 0 1 .43.429v1.74a.43.43 0 0 1-.43.428H3.744a.43.43 0 0 1-.429-.429zm0-10.388V6.117a.43.43 0 0 1 .43-.429h1.738a.43.43 0 0 1 .43.43v1.738a.43.43 0 0 1-.43.43H3.744a.43.43 0 0 1-.429-.43z"];
var icons = {
  "arrow-double-left": function arrowDoubleLeft() {
    return _arrowDoubleLeft;
  },
  "arrow-double-right": function arrowDoubleRight() {
    return _arrowDoubleRight;
  },
  "arrow-down": function arrowDown() {
    return _arrowDown;
  },
  "arrow-left": function arrowLeft() {
    return _arrowLeft;
  },
  "arrow-right": function arrowRight() {
    return _arrowRight;
  },
  atoms: function atoms() {
    return _atoms;
  },
  "checkers-inverted": function checkersInverted() {
    return _checkers(true);
  },
  checkers: function checkers() {
    return _checkers();
  },
  close: function close() {
    return _close;
  },
  code: function code() {
    return _code;
  },
  command: function command() {
    return _command;
  },
  dark: function dark() {
    return _dark;
  },
  dependencies: function dependencies() {
    return _dependencies;
  },
  documentation: function documentation() {
    return _documentation;
  },
  doc: function doc() {
    return _documentation;
  },
  ecospheres: function ecospheres() {
    return _ecospheres;
  },
  "external-link": function externalLink() {
    return _externalLink;
  },
  environment: function environment() {
    return _environment;
  },
  placeholder: function placeholder() {
    return _placeholder;
  },
  "folder-open": function folderOpen() {
    return _folderOpen;
  },
  folder: function folder() {
    return _folder;
  },
  fullscreen: function fullscreen() {
    return _fullscreen;
  },
  globals: function globals() {
    return _globals;
  },
  hamburger: function hamburger() {
    return _hamburger;
  },
  home: function home() {
    return _home;
  },
  issue: function issue() {
    return _issue;
  },
  light: function light() {
    return _light;
  },
  link: function link() {
    return _link;
  },
  molecules: function molecules() {
    return _molecules;
  },
  organisms: function organisms() {
    return _organisms;
  },
  pattern: function pattern() {
    return _pattern;
  },
  patternplate: function patternplate() {
    return _patternplate;
  },
  polymers: function polymers() {
    return _polymers;
  },
  react: function react() {
    return _react;
  },
  reload: function reload() {
    return _reload;
  },
  rulers: function rulers() {
    return _rulers;
  },
  search: function search() {
    return _search;
  }
};

function _checkers(inverted) {
  var length = 20;
  var count = 5;
  var dim = length / count;
  var offset = (24 - length) / 2;
  var field = count * count / 2;
  var fields = range(count * count).map(function (_, i) {
    var x = i % count;
    var y = (i - x) / count;
    var filled = y % 2 === 0 ? x % 2 === 0 : x % 2 !== 0;

    if (!filled) {
      return null;
    }

    var product = (y + 1) * (x + 1);
    var inArea = inverted ? true : product <= field;

    if (!inArea) {
      return null;
    }

    return rect({
      x: offset + x * dim,
      y: offset + y * dim,
      width: dim,
      height: dim
    });
  }).filter(Boolean);
  return joinPaths(fields);
}

function rect(props) {
  var p = omit(props, ["width", "height", "x", "y"]);
  var d = "M".concat(props.x, ",").concat(props.y, "h").concat(props.width, "v").concat(props.height, "h-").concat(props.width, "z");
  return merge({}, p, {
    d: d
  });
}

function range(count) {
  return Array(count).fill(true);
}

function joinPaths(paths) {
  var d = paths.map(function (path) {
    return path.d;
  }).join("");
  return [{
    d: d
  }];
}

var iconNames = Object.keys(icons);
/**
 * Export ALL THE THINGS
 */

module.exports = withSideEffect(toState, onChange)(Icon);
module.exports.symbols = iconNames;
module.exports.Symbol = _Symbol;
module.exports.definitions = {
  patternplate: _patternplate
};
/**
 * Export ALL THE THINGS
 */

function toState(propsList) {
  var list = propsList.map(function (item) {
    return item.symbol;
  }).sort();
  var symbols = uniq(list);
  return React.createElement(IconRegistry, {
    symbols: symbols
  });
}

function onChange(registry) {
  var element = getRegistryMountPoint();
  ReactDOM.render(registry, element);
}

function getRegistryMountPoint() {
  var _global = global,
      document = _global.document;
  var found = document.querySelector("[data-icon-registry]");

  if (found) {
    return found;
  }

  var created = document.createElement("div");
  created.setAttribute("data-icon-registry", true);
  document.body.appendChild(created);
  return created;
}

var SIZES = {
  s: '14px',
  m: '22px',
  l: '38px',
  text: '.8em'
};

function Icon(props) {
  return React.createElement(StyledIcon, {
    className: props.className,
    size: props.size,
    inline: props.inline
  }, React.createElement("use", {
    title: props.title,
    xlinkHref: "#".concat(props.symbol || "placeholder")
  }));
}

Icon.defaultProps = {
  size: "m",
  symbol: "placeholder"
};
var StyledIcon = styled.svg.withConfig({
  displayName: "icon__StyledIcon"
})(["display:", ";flex-shrink:0;width:", ";height:", ";justify-content:center;align-items:center;color:inherit;fill:currentColor;"], function (props) {
  return props.inline ? 'inline-flex' : 'flex';
}, function (props) {
  return SIZES[props.size];
}, function (props) {
  return SIZES[props.size];
});

function IconRegistry(props) {
  return React.createElement(StyledRegistry, null, props.symbols.map(function (symbol) {
    var creator = typeof icons[symbol] === "function" ? icons[symbol] : icons.placeholder;
    var paths = creator();
    return React.createElement(_Symbol, {
      key: symbol,
      id: symbol,
      definition: paths
    });
  }));
}

IconRegistry.defaultProps = {
  symbols: []
};
var StyledRegistry = styled.svg.withConfig({
  displayName: "icon__StyledRegistry"
})(["position:fixed;height:0;width:0;overflow:hidden;padding:0;visibility:hidden;"]);

function _Symbol(props) {
  var paths = Array.isArray(props.definition) ? props.definition : [props.definition];

  if (props.emit) {
    return React.createElement("g", {
      style: props.style
    }, paths.map(function (p) {
      return React.createElement(Path, {
        key: p,
        definition: p
      });
    }));
  }

  return React.createElement("symbol", {
    className: props.className,
    id: props.id,
    viewBox: "0 0 24 24"
  }, paths.map(function (p) {
    return React.createElement(Path, {
      key: p,
      definition: p
    });
  }));
}

function Path(props) {
  var definition = props.definition;
  var def = typeof definition === "string" ? {
    d: definition
  } : definition;
  var p = omit(def, ["tagName"]);
  var Component = def.tagName || "path";
  return React.createElement(Component, p);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../components/lib/index.js":
/*!**********************************!*\
  !*** ../components/lib/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  Button: __webpack_require__(/*! ./button */ "../components/lib/button/index.js"),
  CodePane: __webpack_require__(/*! ./code-pane */ "../components/lib/code-pane/index.js"),
  css: __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.es.js").css,
  Flag: __webpack_require__(/*! ./flag */ "../components/lib/flag/index.js"),
  Headline: __webpack_require__(/*! ./headline */ "../components/lib/headline/index.js"),
  Icon: __webpack_require__(/*! ./icon */ "../components/lib/icon/index.js"),
  IconDefinitions: __webpack_require__(/*! ./icon */ "../components/lib/icon/index.js").definitions,
  InnerInfoPane: __webpack_require__(/*! ./info-pane */ "../components/lib/info-pane/index.js").InnerInfoPane,
  InfoPane: __webpack_require__(/*! ./info-pane */ "../components/lib/info-pane/index.js"),
  injectGlobal: __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.es.js").injectGlobal,
  injection: __webpack_require__(/*! ./injection */ "../components/lib/injection.js"),
  keyframes: __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.es.js").keyframes,
  Link: __webpack_require__(/*! ./link */ "../components/lib/link/index.js"),
  Logo: __webpack_require__(/*! ./logo */ "../components/lib/logo.js"),
  MainHeader: __webpack_require__(/*! ./main-header */ "../components/lib/main-header/index.js"),
  MainNavigation: __webpack_require__(/*! ./main-navigation */ "../components/lib/main-navigation/index.js"),
  Markdown: __webpack_require__(/*! ./markdown */ "../components/lib/markdown/index.js"),
  NavigationItem: __webpack_require__(/*! ./navigation-item */ "../components/lib/navigation-item/index.js"),
  NavigationLabel: __webpack_require__(/*! ./navigation-label */ "../components/lib/navigation-label/index.js"),
  NavigationToolbar: __webpack_require__(/*! ./navigation-toolbar */ "../components/lib/navigation-toolbar/index.js"),
  NavigationTree: __webpack_require__(/*! ./navigation-tree */ "../components/lib/navigation-tree/index.js"),
  Search: {
    Search: __webpack_require__(/*! ./search */ "../components/lib/search/index.js").default,
    SearchResult: __webpack_require__(/*! ./search */ "../components/lib/search/index.js").SearchResult,
    SearchResultList: __webpack_require__(/*! ./search */ "../components/lib/search/index.js").SearchResultList,
    SearchResultHeading: __webpack_require__(/*! ./search */ "../components/lib/search/index.js").SearchResultHeading,
    SearchResultPreview: __webpack_require__(/*! ./search */ "../components/lib/search/index.js").SearchResultPreview,
    SearchFieldSlot: __webpack_require__(/*! ./search */ "../components/lib/search/index.js").SearchFieldSlot,
    PassThroughSlot: __webpack_require__(/*! ./search */ "../components/lib/search/index.js").PassThroughSlot,
    Close: __webpack_require__(/*! ./search */ "../components/lib/search/index.js").Close
  },
  SearchField: __webpack_require__(/*! ./search-field */ "../components/lib/search-field/index.js"),
  ServerStyleSheet: __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.es.js").ServerStyleSheet,
  styled: __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.es.js").default,
  StyleSheetManager: __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.es.js").StyleSheetManager,
  Symbol: __webpack_require__(/*! ./icon */ "../components/lib/icon/index.js").Symbol,
  Tag: __webpack_require__(/*! ./tag */ "../components/lib/tag/index.js"),
  ThemeProvider: __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.es.js").ThemeProvider,
  Text: __webpack_require__(/*! ./text */ "../components/lib/text/index.js"),
  themes: __webpack_require__(/*! ./themes */ "../components/lib/themes/index.js"),
  svg: __webpack_require__(/*! ./svg */ "../components/lib/svg.js")
};

/***/ }),

/***/ "../components/lib/info-pane/index.js":
/*!********************************************!*\
  !*** ../components/lib/info-pane/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");

var styled = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.es.js").default;

var semver = __webpack_require__(/*! semver */ "../components/node_modules/semver/semver.js");

var text = __webpack_require__(/*! react-addons-text-content */ "../../node_modules/react-addons-text-content/dist/react-addons-text-content.js");

var _require = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js"),
    omit = _require.omit;

var Code = __webpack_require__(/*! ../code */ "../components/lib/code/index.js");

var Link = __webpack_require__(/*! ../link */ "../components/lib/link/index.js");

var Flag = __webpack_require__(/*! ../flag */ "../components/lib/flag/index.js");

var Icon = __webpack_require__(/*! ../icon */ "../components/lib/icon/index.js");

var Text = __webpack_require__(/*! ../text */ "../components/lib/text/index.js");

module.exports = InfoPane;
module.exports.InnerInfoPane = InnerInfoPane;
var BORDER_RADIUS = 10;
var StyledInfoPane = styled.div.withConfig({
  displayName: "info-pane__StyledInfoPane"
})(["position:relative;width:300px;min-height:300px;height:100%;box-sizing:border-box;border-radius:", ";border-right:1px solid ", ";border-right-width:", "px;overflow:scroll;overflow-x:hidden;background:", ";"], function (props) {
  return props.hermit ? "".concat(BORDER_RADIUS, "px") : "".concat(BORDER_RADIUS, "px 0 0 ").concat(BORDER_RADIUS, "px");
}, function (props) {
  return props.theme.colors.border;
}, function (props) {
  return props.hermit ? 0 : 1;
}, function (props) {
  return props.theme.colors.background;
});
var StyledInnerPane = styled.div.withConfig({
  displayName: "info-pane__StyledInnerPane"
})(["position:relative;z-index:1;background:", ";"], function (props) {
  return props.theme.colors.background;
});
var StyledName = styled.div.withConfig({
  displayName: "info-pane__StyledName"
})(["position:relative;z-index:1;display:flex;flex:0 0 auto;align-items:center;margin-bottom:10px;padding:10px 15px 0 15px;"]);
var StyledToolbar = styled.div.withConfig({
  displayName: "info-pane__StyledToolbar"
})(["display:flex;position:relative;z-index:1;align-items:center;padding:0 15px 10px 15px;"]);
var StyledDisplayName = styled(Text).withConfig({
  displayName: "info-pane__StyledDisplayName"
})(["flex:1 0 auto;color:", ";margin-right:10px;"], function (props) {
  return props.theme.colors.color;
});
var StyledId = styled(Text).withConfig({
  displayName: "info-pane__StyledId"
})(["flex:0 1 auto;color:", ";text-align:right;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"], function (props) {
  return props.theme.colors.recess;
});
var StyledData = styled.table.withConfig({
  displayName: "info-pane__StyledData"
})(["position:relative;z-index:1;flex:0 0 auto;width:100%;border-collapse:collapse;border-spacing:0;"]);
var StyledDataCell = styled.td.withConfig({
  displayName: "info-pane__StyledDataCell"
})(["box-sizing:border-box;height:30px;padding:4px 6px;border-top:1px solid ", ";&:first-child{padding-left:20px;}&:last-child{text-align:right;padding-right:15px;}"], function (props) {
  return props.theme.colors.border;
});
var StyledKey = styled(Text).withConfig({
  displayName: "info-pane__StyledKey"
})(["font-weight:bold;color:", ";"], function (props) {
  return props.theme.colors.color;
});

function SearchTrigger(props) {
  return React.createElement(Link, {
    className: props.className,
    query: {
      "search-enabled": true,
      search: "".concat(props.field, "=").concat(props.search)
    },
    title: "Search other patterns with ".concat(props.field, " \"").concat(props.search, "\"")
  }, props.children);
}

var VERSION_COLOR = function VERSION_COLOR(props) {
  var v = text(props.children);

  if (!semver.valid(v)) {
    return props.theme.colors.error;
  }

  if (semver.satisfies(v, "<=0.1")) {
    return props.theme.colors.error;
  }

  if (semver.satisfies(v, "> 0.1 < 1")) {
    return props.theme.colors.color;
  }

  return props.theme.colors.success;
};

var StyledVersion = styled(Version).withConfig({
  displayName: "info-pane__StyledVersion"
})(["color:", ";&:link,&:visited{text-decoration:none;color:", ";}"], VERSION_COLOR, VERSION_COLOR);
var StyledTag = styled(Tag).withConfig({
  displayName: "info-pane__StyledTag"
})(["display:inline-block;padding:2px 4px;margin-top:1.5px;margin-bottom:1.5px;border:1px solid ", ";border-radius:3px;&:link,&:visited,&:active{text-decoration:none;color:", ";}&:nth-child(2n){margin-left:3px;}"], function (props) {
  return props.theme.colors.color;
}, function (props) {
  return props.theme.colors.color;
});
var StyledToggleHead = styled(ToggleHead).withConfig({
  displayName: "info-pane__StyledToggleHead"
})(["display:flex;align-items:center;height:30px;font-weight:bold;color:", ";padding:3px 15px 3px 20px;box-sizing:border-box;border-top:1px solid ", ";cursor:pointer;"], function (props) {
  return props.theme.colors.color;
}, function (props) {
  return props.theme.colors.border;
});
var StyledToggleBody = styled.div.withConfig({
  displayName: "info-pane__StyledToggleBody"
})(["display:flex;color:", ";box-sizing:border-box;width:100%;padding:5px 15px 5px 20px;box-sizing:border-box;background:", ";"], function (props) {
  return props.theme.colors.color;
}, function (props) {
  return props.theme.colors.background;
});
var StyledCode = styled(Code).withConfig({
  displayName: "info-pane__StyledCode"
})(["width:100%;"]);

function InfoPane(props) {
  var className = props.className;
  var innerProps = omit(props, ["className"]);
  return React.createElement(StyledInfoPane, {
    className: className,
    hermit: props.hermit
  }, React.createElement(InnerInfoPane, _extends({}, innerProps, {
    standalone: true
  })));
}

function InnerInfoPane(props) {
  return React.createElement(StyledInnerPane, {
    standalone: props.standalone,
    className: props.className
  }, React.createElement(StyledName, null, React.createElement(StyledDisplayName, null, props.name), React.createElement(StyledId, null, props.id)), props.children && React.createElement(StyledToolbar, null, props.children), React.createElement(StyledData, null, React.createElement("tbody", null, React.createElement("tr", null, React.createElement(StyledDataCell, null, React.createElement(StyledKey, null, "Version")), React.createElement(StyledDataCell, null, React.createElement(StyledVersion, {
    field: "version",
    search: props.version
  }, props.version))), React.createElement("tr", null, React.createElement(StyledDataCell, null, React.createElement(StyledKey, null, "Flag")), React.createElement(StyledDataCell, null, React.createElement(SearchTrigger, {
    field: "flag",
    search: props.flag
  }, React.createElement(Flag, null, props.flag)))), has(props.tags) && React.createElement("tr", null, React.createElement(StyledDataCell, null, React.createElement(StyledKey, null, "Tags")), React.createElement(StyledDataCell, null, props.tags.map(function (t) {
    return React.createElement(StyledTag, {
      key: t,
      tag: t
    });
  }))), has(props.envs) && props.envs.length > 1 && React.createElement("tr", null, React.createElement(StyledDataCell, null, React.createElement(StyledKey, null, "Environment")), React.createElement(StyledDataCell, null, React.createElement(Select, {
    name: "environment",
    onChange: props.onEnvChange,
    value: props.env.name
  }, props.envs.map(function (e) {
    return React.createElement("option", {
      key: e.name,
      value: e.name
    }, e.displayName);
  })))))), has(props.dependencies) && React.createElement(Toggle, {
    head: "Dependencies (".concat(props.dependencies.length, ")"),
    enabled: props.dependenciesEnabled,
    name: "dependencies"
  }, React.createElement(PatternList, null, props.dependencies.map(function (d) {
    return React.createElement(PatternItem, {
      key: d.id,
      pattern: d
    });
  }))), has(props.dependents) && React.createElement(Toggle, {
    head: "Dependents (".concat(props.dependents.length, ")"),
    enabled: props.dependentsEnabled,
    name: "dependents"
  }, React.createElement(PatternList, null, props.dependents.map(function (d) {
    return React.createElement(PatternItem, {
      key: d.id,
      pattern: d
    });
  }))), has(props.demoDependencies) && React.createElement(Toggle, {
    head: "Demo Dependencies (".concat(props.demoDependencies.length, ")"),
    enabled: props.demoDependenciesEnabled,
    name: "demo-dependencies"
  }, React.createElement(PatternList, null, props.demoDependencies.map(function (d) {
    return React.createElement(PatternItem, {
      key: d.id,
      pattern: d
    });
  }))), has(props.demoDependents) && React.createElement(Toggle, {
    head: "Demo Dependents (".concat(props.demoDependents.length, ")"),
    enabled: props.demoDependentsEnabled,
    name: "demo-dependents"
  }, React.createElement(PatternList, null, props.demoDependents.map(function (d) {
    return React.createElement(PatternItem, {
      key: d.id,
      pattern: d
    });
  }))), React.createElement(Toggle, {
    head: "Manifest",
    enabled: props.manifestEnabled,
    name: "manifest"
  }, React.createElement(StyledCode, {
    block: true,
    language: "json"
  }, props.manifest)));
}

var StyledSelectContainer = styled.div.withConfig({
  displayName: "info-pane__StyledSelectContainer"
})(["position:relative;&::after{position:absolute;right:0;top:50%;z-index:1;content:\"\u25BC\";font-size:0.8em;color:", ";transform:translateY(-50%);}"], function (props) {
  return props.theme.colors.color;
});
var StyledSelect = styled.select.withConfig({
  displayName: "info-pane__StyledSelect"
})(["position:relative;z-index:2;appearance:none;color:", ";background:transparent;font-size:16px;border:none;border-radius:none;padding-right:20px;&:focus{outline:none;}"], function (props) {
  return props.theme.colors.color;
});

function Select(props) {
  return React.createElement(StyledSelectContainer, {
    className: props.className
  }, React.createElement(StyledSelect, {
    onChange: props.onChange,
    value: props.value
  }, props.children));
}

function Version(props) {
  return React.createElement(SearchTrigger, {
    className: props.className,
    search: props.search,
    field: "version"
  }, React.createElement(Text, null, props.search));
}

function Tag(props) {
  return React.createElement(SearchTrigger, {
    className: props.className,
    search: props.tag,
    field: "tags"
  }, React.createElement(Text, null, props.tag));
}

var StyledArrow = styled(Text).withConfig({
  displayName: "info-pane__StyledArrow"
})(["font-size:0.8em;transform:", ";"], function (props) {
  return props.rotated ? "rotate(0deg)" : "rotate(-90deg)";
});
var StyledHead = styled(Link).withConfig({
  displayName: "info-pane__StyledHead"
})(["display:flex;align-items:center;justify-content:space-between;text-decoration:none;"]);

function ToggleHead(props) {
  var query = _defineProperty({}, "".concat(props.name, "-enabled"), !props.enabled);

  return React.createElement(StyledHead, {
    query: query,
    className: props.className,
    title: "".concat(props.enabled ? "Hide" : "Show", " ").concat(props.name)
  }, React.createElement(Text, null, props.children), React.createElement(StyledArrow, {
    rotated: props.enabled
  }, "\u25BC"));
}

var StyledPatternList = styled.div.withConfig({
  displayName: "info-pane__StyledPatternList"
})(["width:100%;"]);

function PatternList(props) {
  return React.createElement(StyledPatternList, null, props.children);
}

var StyledPatternItem = styled(Link).withConfig({
  displayName: "info-pane__StyledPatternItem"
})(["display:block;color:", ";text-decoration:none;padding:3px 0;"], function (props) {
  return props.theme.colors.color;
});

function PatternItem(props) {
  return React.createElement(StyledPatternItem, {
    href: "pattern/".concat(props.pattern.id),
    "data-id": props.pattern.id
  }, React.createElement(Text, null, props.pattern.manifest.displayName));
}

var StyledToggle = styled.div.withConfig({
  displayName: "info-pane__StyledToggle"
})(["position:relative;z-index:1;flex:1 1 auto;min-height:30px;"]);

function Toggle(props) {
  return React.createElement(StyledToggle, null, React.createElement(StyledToggleHead, {
    name: props.name,
    enabled: props.enabled
  }, props.head), props.enabled && React.createElement(StyledToggleBody, null, props.children));
}

function has(val) {
  return Array.isArray(val) && val.length > 0;
}

/***/ }),

/***/ "../components/lib/injection.js":
/*!**************************************!*\
  !*** ../components/lib/injection.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");

var PropTypes = __webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js");

var childContextTypes = {
  injections: PropTypes.arrayOf(PropTypes.shape({
    target: PropTypes.any,
    source: PropTypes.any
  }))
};

var InjectionProvider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InjectionProvider, _React$Component);

  function InjectionProvider() {
    _classCallCheck(this, InjectionProvider);

    return _possibleConstructorReturn(this, _getPrototypeOf(InjectionProvider).apply(this, arguments));
  }

  _createClass(InjectionProvider, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        injections: this.props.injections
      };
    }
  }, {
    key: "render",
    value: function render() {
      var props = this.props;
      return React.Children.only(props.children);
    }
  }]);

  return InjectionProvider;
}(React.Component);

InjectionProvider.childContextTypes = childContextTypes;

function inject(RawComponent) {
  var InjectedComponent = function InjectedComponent(props, context) {
    var injections = Array.isArray(context.injections) ? context.injections : [];
    var applicable = injections.find(function (injection) {
      return injection.target === RawComponent || injection.target.RawComponent === RawComponent;
    });

    if (!applicable) {
      return React.createElement(RawComponent, props, props.children);
    }

    var Source = applicable.source;
    return React.createElement(Source, props, props.children);
  };

  InjectedComponent.RawComponent = RawComponent;
  InjectedComponent.contextTypes = childContextTypes;
  return InjectedComponent;
}

module.exports.InjectionProvider = InjectionProvider;
module.exports.inject = inject;

/***/ }),

/***/ "../components/lib/link/index.js":
/*!***************************************!*\
  !*** ../components/lib/link/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");

var styled = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.es.js").default;

var Icon = __webpack_require__(/*! ../icon */ "../components/lib/icon/index.js");

var inject = __webpack_require__(/*! ../injection */ "../components/lib/injection.js").inject;

var Link =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Link, _React$Component);

  function Link() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Link);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Link)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Link, [{
    key: "handleClick",
    value: function handleClick(e) {
      if (typeof this.props.onClick === "function") {
        this.props.onClick(e);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var props = this.props;
      var target = selectTarget(props);
      return React.createElement("a", {
        target: target,
        rel: target === "_blank" ? "noopener noreferrer" : null,
        className: props.className,
        href: props.href,
        onClick: this.handleClick,
        onMouseOver: props.onHover,
        title: props.title,
        "data-id": props["data-id"]
      }, React.createElement(StyledLinkContainer, {
        grow: props.grow,
        external: props.external
      }, React.createElement(StyledLinkLabel, {
        grow: props.grow
      }, props.children), props.external && props.hint && React.createElement(Icon, {
        symbol: "external-link",
        size: props.iconSize || "text",
        inline: true
      })));
    }
  }]);

  return Link;
}(React.Component);

module.exports = inject(Link);
module.exports.RawLink = Link;
Link.defaultProps = {
  external: false,
  onHover: function onHover() {}
};
var StyledLinkContainer = styled.span.withConfig({
  displayName: "link__StyledLinkContainer"
})(["display:inline-flex;align-items:center;flex-grow:", ";> span{display:inline-flex;align-items:", ";}> svg{margin-left:.25em;}"], function (props) {
  return props.grow ? 1 : 0;
}, function (props) {
  return props.external ? 'baseline' : 'center';
});
var StyledLinkLabel = styled.span.withConfig({
  displayName: "link__StyledLinkLabel"
})(["width:", ";"], function (props) {
  return props.grow ? 'calc(100% - 40px)' : 'auto';
});

function selectTarget(props) {
  if (props.target) {
    return props.target;
  }

  return props.external ? "_blank" : null;
}

;

/***/ }),

/***/ "../components/lib/logo.js":
/*!*********************************!*\
  !*** ../components/lib/logo.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");

var styled = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.es.js").default;

var Link = __webpack_require__(/*! ./link */ "../components/lib/link/index.js");

var Icon = __webpack_require__(/*! ./icon */ "../components/lib/icon/index.js");

var svg = __webpack_require__(/*! ./svg */ "../components/lib/svg.js");

var StyledLink = styled(Link).withConfig({
  displayName: "logo__StyledLink"
})(["display:block;margin:0 auto;&:link,&:visited{color:", ";}"], function (props) {
  return props.theme.colors.active;
});

var Logo =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Logo, _React$Component);

  function Logo() {
    _classCallCheck(this, Logo);

    return _possibleConstructorReturn(this, _getPrototypeOf(Logo).apply(this, arguments));
  }

  _createClass(Logo, [{
    key: "render",
    value: function render() {
      var props = this.props;

      if (props.source) {
        return React.createElement("div", {
          className: props.className
        }, React.createElement(StyledLink, {
          dangerouslySetInnerHTML: {
            __html: props.source
          },
          external: "base",
          href: "/",
          query: null,
          target: "_self"
        }, React.createElement("div", {
          dangerouslySetInnerHTML: {
            __html: props.source
          }
        })));
      }

      return React.createElement("div", {
        className: props.className
      }, React.createElement(StyledLink, {
        external: "base",
        href: "/",
        query: null,
        target: "_self"
      }, React.createElement(Icon, {
        symbol: "patternplate",
        size: "l"
      })));
    }
  }]);

  return Logo;
}(React.Component);

module.exports = styled(Logo).withConfig({
  displayName: "logo__exports"
})(["box-sizing:border-box;display:flex;width:100%;fill:currentColor;stroke:currentColor;stroke-width:0;align-items:center;padding:10px;background:", ";"], function (props) {
  return props.theme.colors.backgroundSecondary;
});

/***/ }),

/***/ "../components/lib/main-header/index.js":
/*!**********************************************!*\
  !*** ../components/lib/main-header/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");

var styled = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.es.js").default;

var Icon = __webpack_require__(/*! ../icon */ "../components/lib/icon/index.js");

module.exports = MainHeader;

function MainHeader(props) {
  return React.createElement(StyledMainHeader, {
    className: props.className,
    title: props.title
  }, props.image, props.title && React.createElement(StyledTitle, null, props.title));
}

var StyledMainHeader = styled.div.withConfig({
  displayName: "main-header__StyledMainHeader"
})(["width:100%;height:auto;color:", ";background-color:", ";", ";"], function (props) {
  return props.theme.color;
}, function (props) {
  return props.theme.backgroundSecondary;
}, function (props) {
  return !props.image && "\n\t\tdisplay: flex;\n\t\tpadding: 10px 15px;\n\t\tcolor: ".concat(props.theme.active, ";\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t");
});
var StyledTitle = styled.span.withConfig({
  displayName: "main-header__StyledTitle"
})(["font-family:", ";"], function (props) {
  return props.theme.fonts.default;
});

/***/ }),

/***/ "../components/lib/main-navigation/index.js":
/*!**************************************************!*\
  !*** ../components/lib/main-navigation/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");

var styled = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.es.js").default;

var Link = __webpack_require__(/*! ../link */ "../components/lib/link/index.js");

var Header = __webpack_require__(/*! ../main-header */ "../components/lib/main-header/index.js");

var NavigationTree = __webpack_require__(/*! ../navigation-tree */ "../components/lib/navigation-tree/index.js");

var NavigationToolbar = __webpack_require__(/*! ../navigation-toolbar */ "../components/lib/navigation-toolbar/index.js");

var NavigationLabel = __webpack_require__(/*! ../navigation-label */ "../components/lib/navigation-label/index.js");

var Icon = __webpack_require__(/*! ../icon */ "../components/lib/icon/index.js");

var Navigation =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Navigation, _React$Component);

  function Navigation() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Navigation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Navigation)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.getRef = _this.getRef.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleScrollRequest = _this.handleScrollRequest.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Navigation, [{
    key: "handleScrollRequest",
    value: function handleScrollRequest(e) {// noop
    }
  }, {
    key: "getRef",
    value: function getRef(ref) {
      this.ref = ref;
    }
  }, {
    key: "render",
    value: function render() {
      var props = this.props;
      var children = React.Children.toArray(props.children);
      var toolbar = children.find(function (child) {
        return child.type === NavigationToolbar;
      });
      var header = children.find(function (child) {
        return child.type === NavigationHeader;
      });
      return React.createElement(StyledNavigation, {
        onKeyDown: this.handleKeyDown
      }, header ? header : React.createElement(StyledHeader, {
        title: props.applicationTitle,
        symbol: "patternplate"
      }), React.createElement(StyledNavigationTree, {
        innerRef: this.getRef
      }, React.createElement(Documentation, {
        visible: props.docs.children.length > 0,
        active: props.active,
        docs: props.docs,
        onItemClick: props.onItemClick,
        onLabelClick: props.onLabelClick,
        onScrollRequest: this.handleScrollRequest,
        query: props.query
      }), React.createElement(NavigationLabel, {
        visible: props.navigation.children.length > 0,
        enabled: props.componentsEnabled,
        name: "components",
        highlight: true,
        onClick: props.onLabelClick,
        size: "S"
      }, "Components"), React.createElement(NavigationTree, {
        name: "components",
        visible: props.componentsEnabled && props.navigation.children.length > 0,
        active: props.active,
        data: props.navigation.children,
        onItemClick: props.onItemClick,
        onScrollRequest: this.handleScrollRequest,
        prefix: "/component",
        query: props.query
      })), toolbar && React.createElement(StyledNavigationToolbar, null, toolbar));
    }
  }]);

  return Navigation;
}(React.Component);

module.exports = Navigation;
module.exports.NavigationToolbar = NavigationToolbar;
module.exports.NavigationHeader = NavigationHeader;
Navigation.defaultProps = {
  tools: []
};

function NavigationHeader(props) {
  return React.createElement(StyledNavigatHeader, null, props.children);
}

var StyledNavigatHeader = styled.div.withConfig({
  displayName: "main-navigation__StyledNavigatHeader"
})(["box-sizing:border-box;min-height:60px;background:", ";"], function (props) {
  return props.theme.colors.backgroundSecondary;
});

function getPadding(el) {
  var style = global.getComputedStyle(el, null);
  return function (direction) {
    return parseInt(style.getPropertyValue("padding-".concat(direction)), 10);
  };
}

var StyledHeader = styled(Header).withConfig({
  displayName: "main-navigation__StyledHeader"
})(["height:60px;box-sizing:border-box;flex-shrink:0;"]);
var StyledNavigation = styled.div.withConfig({
  displayName: "main-navigation__StyledNavigation"
})(["display:flex;height:100%;flex-direction:column;justify-content:space-between;position:relative;background-color:", ";"], function (props) {
  return props.theme.colors.background;
});
var PASSAGE_HEIGHT = 50;
var StyledNavigationTree = styled.div.withConfig({
  displayName: "main-navigation__StyledNavigationTree"
})(["flex-grow:1;flex-shrink:1;overflow-x:hidden;overflow-y:scroll;scroll-behavior:smooth;-webkit-overflow-scroll:touch;mask-image:linear-gradient( to top,rgba(0,0,0,0),rgba(0,0,0,1) ", "px );-webkit-mask-image:linear-gradient( to top,rgba(0,0,0,0),rgba(0,0,0,1) ", "px );& > *:last-child{margin-bottom:", "px;}@media screen{mask-image:none;-webkit-mask-image:none;}"], PASSAGE_HEIGHT, PASSAGE_HEIGHT, PASSAGE_HEIGHT);
var StyledNavigationToolbar = styled.div.withConfig({
  displayName: "main-navigation__StyledNavigationToolbar"
})(["flex-grow:0;flex-shrink:0;"]);

function Documentation(props) {
  return React.createElement(StyledDocumentationTree, {
    visible: props.visible,
    active: props.active,
    data: props.docs.children,
    onItemClick: props.onItemClick,
    onLabelClick: props.onLabelClick,
    onScrollRequest: props.onScrollRequest,
    prefix: "/doc",
    query: props.query
  });
}

var StyledDocumentationTree = styled(NavigationTree).withConfig({
  displayName: "main-navigation__StyledDocumentationTree"
})(["margin-bottom:5px;padding-bottom:5px;"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../components/lib/markdown/index.js":
/*!*******************************************!*\
  !*** ../components/lib/markdown/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

var frontmatter = __webpack_require__(/*! front-matter */ "../components/node_modules/front-matter/index.js");

var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");

var remark = __webpack_require__(/*! remark */ "../../node_modules/remark/index.js");

var emoji = __webpack_require__(/*! remark-gemoji-to-emoji */ "../../node_modules/remark-gemoji-to-emoji/index.js");

var reactRenderer = __webpack_require__(/*! remark-react */ "../../node_modules/remark-react/index.js");

var styled = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.es.js").default;

var vm = __webpack_require__(/*! vm */ "../../node_modules/vm-browserify/index.js");

var resizer = __webpack_require__(/*! iframe-resizer */ "../../node_modules/iframe-resizer/index.js");

var MarkdownBlockQuote = __webpack_require__(/*! ./markdown-blockquote */ "../components/lib/markdown/markdown-blockquote.js");

var MarkdownCode = __webpack_require__(/*! ./markdown-code */ "../components/lib/markdown/markdown-code.js");

var MarkdownCodeBlock = __webpack_require__(/*! ./markdown-code-block */ "../components/lib/markdown/markdown-code-block.js");

var MarkdownCopy = __webpack_require__(/*! ./markdown-copy */ "../components/lib/markdown/markdown-copy.js");

var MarkdownHeadline = __webpack_require__(/*! ./markdown-headline */ "../components/lib/markdown/markdown-headline.js");

var MarkdownHr = __webpack_require__(/*! ./markdown-hr */ "../components/lib/markdown/markdown-hr.js");

var MarkdownImage = __webpack_require__(/*! ./markdown-image */ "../components/lib/markdown/markdown-image.js");

var MarkdownItem = __webpack_require__(/*! ./markdown-item */ "../components/lib/markdown/markdown-item.js");

var MarkdownList = __webpack_require__(/*! ./markdown-list */ "../components/lib/markdown/markdown-list.js");

var MarkdownLink = __webpack_require__(/*! ./markdown-link */ "../components/lib/markdown/markdown-link.js");

var Markdown =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Markdown, _React$Component);

  function Markdown() {
    _classCallCheck(this, Markdown);

    return _possibleConstructorReturn(this, _getPrototypeOf(Markdown).apply(this, arguments));
  }

  _createClass(Markdown, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(next) {
      return this.props.source !== next.source;
    }
  }, {
    key: "render",
    value: function render() {
      var props = this.props;
      var Headline = prop("linkable", props.linkable)(MarkdownHeadline);
      return React.createElement(StyledMarkdown, {
        className: props.className
      }, props.source && remark().use(reactRenderer, {
        sanitize: false,
        remarkReactComponents: {
          a: MarkdownLink,
          blockquote: MarkdownBlockQuote,
          code: MarkdownCode,
          h1: is("h1")(Headline),
          h2: is("h2")(Headline),
          h3: is("h3")(Headline),
          h4: is("h4")(Headline),
          h5: is("h5")(Headline),
          h6: is("h6")(Headline),
          hr: MarkdownHr,
          img: MarkdownImage,
          li: MarkdownItem,
          p: MarkdownCopy,
          pre: function pre(preProps) {
            var _preProps$children = _slicedToArray(preProps.children, 1),
                _preProps$children$ = _preProps$children[0],
                child = _preProps$children$ === void 0 ? {} : _preProps$children$;

            var _child$props = child.props,
                childProps = _child$props === void 0 ? {} : _child$props;
            var _childProps$className = childProps.className,
                className = _childProps$className === void 0 ? '' : _childProps$className;
            var type = className.replace(/^language-/, '');

            switch (type) {
              case 'widget':
                {
                  if (typeof props.widgetSrc !== "string") {
                    return null;
                  }

                  var srcdoc = ["<!doctype html>", "<html>", "<head>", "<script src=\"".concat(props.widgetSrc, "\"></script>"), "</head>", "<body>", "<div data-widget-mount></div>", "<textarea data-widget-state style=\"display: none;\">", encodeURIComponent(JSON.stringify({
                    state: props.widgetState,
                    code: childProps.children.join('\n')
                  })), "</textarea>", "</body>", "</html>"].join("");
                  return React.createElement(WidgetFrame, {
                    srcDoc: srcdoc,
                    src: "/"
                  });
                }

              default:
                return React.createElement(MarkdownCodeBlock, preProps);
            }
          },
          ul: is("ul")(MarkdownList),
          ol: is("ol")(MarkdownList)
        }
      }).use(emoji).processSync(frontmatter(props.source).body).contents);
    }
  }]);

  return Markdown;
}(React.Component);

var WidgetFrame =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(WidgetFrame, _React$Component2);

  function WidgetFrame() {
    _classCallCheck(this, WidgetFrame);

    return _possibleConstructorReturn(this, _getPrototypeOf(WidgetFrame).apply(this, arguments));
  }

  _createClass(WidgetFrame, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.ref && !this.resizer) {
        resizer.iframeResizer({
          warningTimeout: 0,
          log: false
        }, this.ref);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var props = this.props;
      return React.createElement(StyledWidgetFrame, _extends({
        innerRef: function innerRef(ref) {
          return _this.ref = ref;
        }
      }, props));
    }
  }]);

  return WidgetFrame;
}(React.Component);

var StyledWidgetFrame = styled.iframe.withConfig({
  displayName: "markdown__StyledWidgetFrame"
})(["width:100%;border:none;"]);
var StyledMarkdown = styled.div.withConfig({
  displayName: "markdown__StyledMarkdown"
})(["& table{text-align:left;display:block;width:100%;overflow:auto;margin:0 0 16px 0;border-spacing:0;border-collapse:collapse;font-size:18px;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";}& tr{color:", ";border-top:1px solid ", ";background:transparent;}& tr:nth-child(2n){background:", ";}& th{padding:6px 13px;border:1px solid ", ";font-weight:600;}& td{padding:6px 13px;border:1px solid ", ";}"], function (props) {
  return props.theme.colors.color;
}, function (props) {
  return props.theme.colors.border;
}, function (props) {
  return props.theme.colors.backgroundTertiary;
}, function (props) {
  return props.theme.colors.border;
}, function (props) {
  return props.theme.colors.border;
});

function is(is) {
  return function (Component) {
    return function (props) {
      return React.createElement(Component, _extends({
        is: is
      }, props));
    };
  };
}

function prop(name, value) {
  return function (Component) {
    return function (props) {
      return React.createElement(Component, _extends({}, props, _defineProperty({}, name, value)));
    };
  };
}

module.exports = Markdown;

/***/ }),

/***/ "../components/lib/markdown/markdown-blockquote.js":
/*!*********************************************************!*\
  !*** ../components/lib/markdown/markdown-blockquote.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");

var styled = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.es.js").default;

var Text = __webpack_require__(/*! ../text */ "../components/lib/text/index.js");

module.exports = styled(MarkdownBlockquote).withConfig({
  displayName: "markdown-blockquote__exports"
})(["margin:0 0 16px 0;font-size:18px;line-height:27px;padding-left:18px;border-left:4.5px solid ", ";color:", ";"], function (props) {
  return props.theme.colors.recess;
}, function (props) {
  return props.theme.colors.recess;
});

function MarkdownBlockquote(props) {
  return React.createElement(Text, {
    className: props.className,
    is: "blockquote"
  }, props.children);
}

/***/ }),

/***/ "../components/lib/markdown/markdown-code-block.js":
/*!*********************************************************!*\
  !*** ../components/lib/markdown/markdown-code-block.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");

var textContent = __webpack_require__(/*! react-addons-text-content */ "../../node_modules/react-addons-text-content/dist/react-addons-text-content.js");

var styled = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.es.js").default;

var Code = __webpack_require__(/*! ../code */ "../components/lib/code/index.js");

module.exports = styled(MarkdownCodeBlock).withConfig({
  displayName: "markdown-code-block__exports"
})(["background:", ";border-radius:3px;font-size:15.3px;line-height:23px;padding:16px;margin-bottom:16px;"], function (props) {
  return props.theme.colors.backgroundSecondary;
});

function MarkdownCodeBlock(props) {
  var langs = getLanguages(props.children);
  var code = textContent(props.children);
  return React.createElement(Code, {
    block: true,
    className: props.className,
    language: langs[0]
  }, code);
}

function getLanguages(children) {
  var _children = _slicedToArray(children, 1),
      child = _children[0];

  if (!child) {
    return [];
  }

  var className = child.props.className;

  if (!className) {
    return [];
  }

  return className.split(" ").map(function (n) {
    return n.replace("language-", "");
  }).find(function (n) {
    return typeof n === "string" && n.length > 0;
  }).split(":");
}

/***/ }),

/***/ "../components/lib/markdown/markdown-code.js":
/*!***************************************************!*\
  !*** ../components/lib/markdown/markdown-code.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var styled = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.es.js").default;

var Code = __webpack_require__(/*! ../code */ "../components/lib/code/index.js");

module.exports = styled(Code).withConfig({
  displayName: "markdown-code__exports"
})(["display:inline;padding:0;background:", ";border-radius:3px;font-size:15.3px;line-height:23px;padding:3px;"], function (props) {
  return props.theme.colors.backgroundSecondary;
});

/***/ }),

/***/ "../components/lib/markdown/markdown-copy.js":
/*!***************************************************!*\
  !*** ../components/lib/markdown/markdown-copy.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");

var styled = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.es.js").default;

var Text = __webpack_require__(/*! ../text */ "../components/lib/text/index.js");

module.exports = styled(MarkdownCopy).withConfig({
  displayName: "markdown-copy__exports"
})(["margin:0 0 16px 0;font-size:18px;line-height:27px;color:", ";"], function (props) {
  return props.theme.colors.color;
});

function MarkdownCopy(props) {
  return React.createElement(Text, {
    is: "p",
    className: props.className
  }, props.children);
}

/***/ }),

/***/ "../components/lib/markdown/markdown-headline.js":
/*!*******************************************************!*\
  !*** ../components/lib/markdown/markdown-headline.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");

var styled = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.es.js").default;

var Headline = __webpack_require__(/*! ../headline */ "../components/lib/headline/index.js");

var Icon = __webpack_require__(/*! ../icon */ "../components/lib/icon/index.js");

var Link = __webpack_require__(/*! ../link */ "../components/lib/link/index.js");

var ORDER = {
  h1: 1,
  h2: 2,
  h3: 3,
  h4: 4,
  h5: 4,
  h6: 4
};
var ThemedIcon = styled(Icon).withConfig({
  displayName: "markdown-headline__ThemedIcon"
})(["position:absolute;right:100%;top:50%;transform:translateY(-50%);padding-right:10px;fill:", ";opacity:0;"], function (props) {
  return props.theme.colors.color;
});
var StyledLink = styled(Link).withConfig({
  displayName: "markdown-headline__StyledLink"
})(["color:", ";text-decoration:none;&:hover ", "{opacity:1;}"], function (props) {
  return props.theme.colors.color;
}, ThemedIcon);
var StyledTarget = styled.div.withConfig({
  displayName: "markdown-headline__StyledTarget"
})(["width:0;height:0;"]);
var StyledHeadline = styled(Headline).withConfig({
  displayName: "markdown-headline__StyledHeadline"
})(["font-family:", ";"], function (props) {
  return props.theme.fonts.headline;
});
module.exports = styled(MarkdownHeadline).withConfig({
  displayName: "markdown-headline__exports"
})(["position:relative;color:", ";margin:60px 0 16px 0;font-weight:300;line-height:1.25;"], function (props) {
  return props.theme.colors.color;
});

function MarkdownHeadline(props) {
  var children = Array.isArray(props.children) ? props.children.join("") : props.children;
  var id = encodeURIComponent((children || "").split(" ").join("-").toLowerCase());
  return React.createElement(StyledHeadline, {
    is: props.is,
    order: ORDER[props.is],
    className: props.className,
    id: id
  }, props.linkable ? React.createElement(MarkdownHeadlineLink, {
    name: children,
    id: id
  }, props.children) : props.children);
}

function MarkdownHeadlineLink(props) {
  return React.createElement(StyledLink, {
    title: "Link to \"".concat(props.name, "\""),
    hash: props.id
  }, React.createElement(StyledTarget, {
    id: props.id
  }), React.createElement(ThemedIcon, {
    symbol: "link",
    size: "m"
  }), props.children);
}

/***/ }),

/***/ "../components/lib/markdown/markdown-hr.js":
/*!*************************************************!*\
  !*** ../components/lib/markdown/markdown-hr.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var styled = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.es.js").default;

module.exports = styled.hr.withConfig({
  displayName: "markdown-hr__exports"
})(["height:0.25em;padding:0;margin:24px 0;background-color:", ";border:0;"], function (props) {
  return props.theme.colors.border;
});

/***/ }),

/***/ "../components/lib/markdown/markdown-image.js":
/*!****************************************************!*\
  !*** ../components/lib/markdown/markdown-image.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var styled = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.es.js").default;

module.exports = styled.img.withConfig({
  displayName: "markdown-image__exports"
})(["max-width:100%;height:auto;"]);

/***/ }),

/***/ "../components/lib/markdown/markdown-item.js":
/*!***************************************************!*\
  !*** ../components/lib/markdown/markdown-item.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");

var styled = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.es.js").default;

var Text = __webpack_require__(/*! ../text */ "../components/lib/text/index.js");

module.exports = styled(MarkdownItem).withConfig({
  displayName: "markdown-item__exports"
})(["font-size:18px;line-height:27px;color:", ";margin-top:4.5px;"], function (props) {
  return props.theme.colors.color;
});

function MarkdownItem(props) {
  return React.createElement(Text, {
    className: props.className,
    is: "li"
  }, props.children);
}

/***/ }),

/***/ "../components/lib/markdown/markdown-link.js":
/*!***************************************************!*\
  !*** ../components/lib/markdown/markdown-link.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");

var styled = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.es.js").default;

var url = __webpack_require__(/*! url */ "../../node_modules/url/url.js");

var queryString = __webpack_require__(/*! query-string */ "../../node_modules/query-string/index.js");

var Link = __webpack_require__(/*! ../link */ "../components/lib/link/index.js");

module.exports = MarkdownLink;

function MarkdownLink(props) {
  var parsed = url.parse(props.href || "./");
  var abs = absolute(props.href);
  var href = abs ? props.href : [parsed.pathname, parsed.hash].join("");
  var query = abs ? {} : queryString.parse(parsed.query);
  return React.createElement(StyledLink, {
    external: abs,
    hint: true,
    href: href,
    query: query
  }, props.children);
}

var StyledLink = styled(Link).withConfig({
  displayName: "markdown-link__StyledLink"
})(["font-size:18px;line-height:27px;color:", ";text-decoration:none;&:link,&:visited{color:", ";}&:hover,&:active{text-decoration:underline;}"], function (props) {
  return props.theme.colors.color;
}, function (props) {
  return props.theme.colors.active;
});

function absolute(href) {
  var parsed = url.parse(href || "./");

  if (parsed.protocol) {
    return true;
  }

  if (href.startsWith("/api/static/")) {
    return true;
  }
}

/***/ }),

/***/ "../components/lib/markdown/markdown-list.js":
/*!***************************************************!*\
  !*** ../components/lib/markdown/markdown-list.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var styled = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.es.js").default;

var tag = __webpack_require__(/*! tag-hoc */ "../../node_modules/tag-hoc/dist/tag.js").default;

module.exports = styled(tag([])("div")).withConfig({
  displayName: "markdown-list__exports"
})(["margin:0 0 16px 0;padding-left:36px;"]);

/***/ }),

/***/ "../components/lib/navigation-item/index.js":
/*!**************************************************!*\
  !*** ../components/lib/navigation-item/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");

var tag = __webpack_require__(/*! tag-hoc */ "../../node_modules/tag-hoc/dist/tag.js").default;

var color = __webpack_require__(/*! color */ "../../node_modules/color/index.js");

var styled = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.es.js").default;

var remark = __webpack_require__(/*! remark */ "../../node_modules/remark/index.js");

var emoji = __webpack_require__(/*! remark-gemoji-to-emoji */ "../../node_modules/remark-gemoji-to-emoji/index.js");

var Icon = __webpack_require__(/*! ../icon */ "../components/lib/icon/index.js");

var Link = __webpack_require__(/*! ../link */ "../components/lib/link/index.js");

var processor = remark().use(emoji);

var NavigationItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NavigationItem, _React$Component);

  function NavigationItem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, NavigationItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(NavigationItem)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.getRef = _this.getRef.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(NavigationItem, [{
    key: "getRef",
    value: function getRef(ref) {
      this.ref = ref;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.active && this.ref) {
        setTimeout(function () {
          _this2.props.onScrollRequest({
            target: _this2.ref,
            props: _this2.props
          });
        });
      }
    }
  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate(next) {
      if (this.props.type === "folder") {
        return;
      }

      if (next.active && this.ref) {
        this.props.onScrollRequest({
          target: this.ref,
          props: next
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var props = this.props;
      var title = props.title || "Navigate to ".concat(props.name, " ").concat(props.type);
      var symbol = props.active ? props.symbolActive : props.symbol;
      var name = processor.processSync(props.name).contents;
      return React.createElement(StyledNavigationItem, {
        active: props.active,
        className: props.className,
        innerRef: this.getRef,
        type: props.type
      }, React.createElement(StyledNavigationLink, {
        active: props.active,
        external: props.external,
        onClick: props.onClick,
        href: props.href,
        sticky: props.type === "folder" && props.active,
        type: props.type,
        title: title,
        nested: props.nested,
        iconSize: "s",
        grow: true,
        hint: true
      }, symbol && React.createElement(StyledIcon, {
        active: props.active,
        size: "m",
        symbol: symbol
      }), React.createElement(StyledName, null, props.name), props.meta && React.createElement(StyledMeta, {
        active: props.active
      }, props.meta)), props.active && props.children);
    }
  }]);

  return NavigationItem;
}(React.Component);

module.exports = NavigationItem;
var StyledIcon = styled(Icon).withConfig({
  displayName: "navigation-item__StyledIcon"
})(["flex:0 0 auto;fill:", ";", ";padding:10px 0 10px 9px;"], function (props) {
  return props.theme.colors.color;
}, function (props) {
  return props.active && "fill: ".concat(color(props.theme.colors.active));
});
var StyledName = styled.div.withConfig({
  displayName: "navigation-item__StyledName"
})(["box-sizing:border-box;flex:1 1 100%;padding:10px;"]);
var StyledMeta = styled.div.withConfig({
  displayName: "navigation-item__StyledMeta"
})(["flex:1 0 auto;margin:0 ", "px 0 auto;"], function (props) {
  return props.active ? 6 : 10;
});
var StyledNavigationItem = styled.div.withConfig({
  displayName: "navigation-item__StyledNavigationItem"
})(["width:100%;box-sizing:border-box;margin-left:1px;"]);
var LinkTag = tag(["active", "type"])(Link);
var StyledNavigationLink = styled(LinkTag).withConfig({
  displayName: "navigation-item__StyledNavigationLink"
})(["box-sizing:border-box;display:flex;width:100%;align-items:center;text-decoration:none;font-size:", "px;line-height:20px;font-family:", ";font-weight:", ";padding-left:", "px;:link,:visited{color:", ";", ";}"], function (props) {
  return props.theme.fonts.fontSize;
}, function (props) {
  return props.theme.fonts.default;
}, function (props) {
  return props.theme.fonts.fontWeight;
}, function (props) {
  return props.nested ? 30 : 0;
}, function (props) {
  return props.theme.colors.color;
}, function (props) {
  return props.active && "color: ".concat(color(props.theme.colors.active));
});

/***/ }),

/***/ "../components/lib/navigation-label/index.js":
/*!***************************************************!*\
  !*** ../components/lib/navigation-label/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");

var styled = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.es.js").default;

var Icon = __webpack_require__(/*! ../icon */ "../components/lib/icon/index.js");

var Link = __webpack_require__(/*! ../link */ "../components/lib/link/index.js");

var remark = __webpack_require__(/*! remark */ "../../node_modules/remark/index.js");

var emoji = __webpack_require__(/*! remark-gemoji-to-emoji */ "../../node_modules/remark-gemoji-to-emoji/index.js");

var processor = remark().use(emoji);
module.exports = NavigationLabel;

function NavigationLabel(props) {
  return React.createElement(StyledLabelContainer, {
    "data-toggle-name": props.name,
    "data-trigger-name": props.name,
    "data-toggle-enabled": props.enabled,
    visible: props.visible,
    highlight: props.highlight
  }, React.createElement(StyledLabel, {
    highlight: props.highlight,
    enabled: props.enabled,
    size: props.size
  }, React.createElement(StyledLabelLink, {
    highlight: props.highlight,
    title: "".concat(props.enabled ? 'Close' : 'Expand', " ").concat(props.children, " list"),
    query: _defineProperty({}, "".concat(props.name, "-enabled"), !props.enabled)
  }, React.createElement(StyledLabelIcon, {
    enabled: props.enabled
  }, React.createElement(Icon, {
    symbol: "arrow-right"
  })), processor.processSync(props.children).contents)));
}

var SIZES = {
  S: 0.9,
  M: 1
};
var StyledLabel = styled.div.withConfig({
  displayName: "navigation-label__StyledLabel"
})(["box-sizing:border-box;padding:10px 10px;display:flex;align-items:center;font-family:", ";font-size:", "px;color:", ";background-color:", ";border-style:solid;border-top-color:", ";border-bottom-color:", ";border-width:", "px 0;width:100%;"], function (props) {
  return props.theme.fonts.default;
}, function (_ref2) {
  var size = _ref2.size,
      theme = _ref2.theme;
  return SIZES[size] * theme.fonts.fontSize;
}, function (props) {
  return props.theme.colors.color;
}, function (_ref3) {
  var enabled = _ref3.enabled,
      theme = _ref3.theme;
  return enabled ? theme.colors.backgroundTertiary : theme.colors.background;
}, function (_ref4) {
  var enabled = _ref4.enabled,
      theme = _ref4.theme;
  return enabled ? theme.colors.backgroundSecondary : theme.colors.border;
}, function (props) {
  return props.enabled ? 'transparent' : props.theme.colors.border;
}, function (props) {
  return props.highlight ? 1 : 0;
});
var StyledLabelIcon = styled.span.withConfig({
  displayName: "navigation-label__StyledLabelIcon"
})(["margin-right:10px;transform-origin:center;transform:rotate(", "deg);"], function (props) {
  return props.enabled ? 90 : 0;
});
var StyledLabelContainer = styled.div.withConfig({
  displayName: "navigation-label__StyledLabelContainer"
})(["display:", ";position:sticky;top:-1px;left:0;&[data-toggle-enabled=\"true\"]{", "{background-color:", ";border-top-color:", ";border-bottom-color:transparent;}", "{transform:rotate(90deg);}}&[data-toggle-enabled=\"false\"]{", "{background-color:", ";border-top-color:", ";border-bottom-color:", ";}", "{transform:rotate(0);}}"], function (props) {
  return props.visible ? "block" : "none";
}, StyledLabel, function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.backgroundTertiary;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.colors.backgroundSecondary;
}, StyledLabelIcon, StyledLabel, function (_ref7) {
  var theme = _ref7.theme;
  return theme.colors.background;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.colors.border;
}, function (props) {
  return props.theme.colors.border;
}, StyledLabelIcon);
var StyledLabelLink = styled(Link).withConfig({
  displayName: "navigation-label__StyledLabelLink"
})(["display:block;color:", ";cursor:pointer;text-decoration:none;width:100%;"], function (props) {
  return props.theme.colors.color;
});

/***/ }),

/***/ "../components/lib/navigation-toolbar/index.js":
/*!*****************************************************!*\
  !*** ../components/lib/navigation-toolbar/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");

var styled = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.es.js").default;

module.exports = NavigationToolbar;

function NavigationToolbar(props) {
  return React.createElement(StyledNavigationToolbar, null, props.children);
}

NavigationToolbar.defaultProps = {
  children: []
};
var StyledNavigationToolbar = styled.div.withConfig({
  displayName: "navigation-toolbar__StyledNavigationToolbar"
})(["display:flex;align-items:center;justify-content:space-between;height:40px;padding:10px 15px;background-color:", ";box-sizing:\"border-box\";"], function (props) {
  return props.theme.colors.backgroundSecondary;
});

/***/ }),

/***/ "../components/lib/navigation-tree/index.js":
/*!**************************************************!*\
  !*** ../components/lib/navigation-tree/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");

var styled = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.es.js").default;

var tag = __webpack_require__(/*! tag-hoc */ "../../node_modules/tag-hoc/dist/tag.js").default;

var NavigationLabel = __webpack_require__(/*! ../navigation-label */ "../components/lib/navigation-label/index.js");

var NavigationItem = __webpack_require__(/*! ../navigation-item */ "../components/lib/navigation-item/index.js");

var Flag = __webpack_require__(/*! ../flag */ "../components/lib/flag/index.js");

module.exports = NavigationTree;

function NavigationTree(props) {
  return React.createElement(StyledNavigationTree, {
    visible: props.visible,
    "data-toggle-name": props.name,
    "data-toggle-enabled": props.visible
  }, props.children, (props.data || []).filter(function (item) {
    return _typeof(item.manifest) === "object";
  }).map(function (item, index) {
    // TODO: this should not have to deal with normalization
    var options = item.manifest.options || {};
    var hidden = options.hidden || false;
    var icon = selectSymbol(item);
    var iconActive = selectActiveSymbol(item);
    var name = selectName(item);
    var enabled = (props.query || {})["".concat(name, "-enabled")] === "true";

    switch (item.type) {
      case "folder":
        return React.createElement(React.Fragment, {
          key: item.id
        }, React.createElement(NavigationLabel, {
          visible: (item.children || []).length > 0,
          enabled: enabled,
          name: name,
          highlight: false,
          size: "M"
        }, item.manifest.displayName || item.manifest.name), React.createElement(NavigationItemList, {
          "data-toggle-name": name,
          "data-toggle-enabled": (item.children || []).length > 0 && enabled,
          visible: (item.children || []).length > 0 && enabled
        }, (item.children || []).map(function (child, index) {
          return React.createElement(NavigationItem, {
            key: child.id,
            active: child.active,
            href: child.href,
            id: child.id,
            meta: (child.warnings || []).map(function (warning) {
              return React.createElement(NavigationMeta, {
                key: warning.value,
                warning: warning
              });
            }),
            name: child.manifest.displayName,
            nested: true,
            onClick: props.onItemClick,
            onScrollRequest: props.onScrollRequest,
            prefix: props.prefix,
            symbol: selectSymbol(child),
            symbolActive: selectActiveSymbol(child),
            type: child.type
          });
        })));

      case "item":
        return React.createElement(NavigationItem, {
          key: item.id,
          active: item.active,
          hidden: hidden,
          href: options.href || item.href,
          external: Boolean(options.href),
          id: item.id,
          meta: (item.warnings || []).map(function (warning) {
            return React.createElement(NavigationMeta, {
              key: warning.value,
              warning: warning
            });
          }),
          name: item.manifest.displayName,
          onClick: props.onItemClick,
          onScrollRequest: props.onScrollRequest,
          prefix: props.prefix,
          symbol: icon,
          symbolActive: iconActive,
          type: item.type
        });
    }
  }));
}

var StyledNavigationTree = styled(tag(["visible"])("div")).withConfig({
  displayName: "navigation-tree__StyledNavigationTree"
})(["display:", ";&[data-toggle-enabled=\"false\"]{display:none;}&[data-toggle-enabled=\"true\"]{display:block;}"], function (props) {
  return props.visible ? "block" : "none";
});
var NavigationItemList = styled(tag(["visible"])("div")).withConfig({
  displayName: "navigation-tree__NavigationItemList"
})(["display:", ";&[data-toggle-enabled=\"false\"]{display:none;}&[data-toggle-enabled=\"true\"]{display:block;}"], function (props) {
  return props.visible ? "block" : "none";
});

function NavigationMeta(props) {
  switch (props.warning.type) {
    case "flag":
    default:
      return React.createElement(Flag, {
        title: props.warning.message
      }, props.warning.value);
  }
}

function selectActiveSymbol(item) {
  if (item.type === "item") {
    return null;
  }

  if (item.manifest.options.iconActive) {
    return item.manifest.options.iconActive;
  }

  if (item.type === "folder") {
    return "arrow-down";
  }

  return null;
}

function selectSymbol(item) {
  if (item.type === "item") {
    return null;
  }

  if (item.manifest.options.icon) {
    return item.manifest.options.icon;
  }

  if (item.type === "folder") {
    return "arrow-right";
  }

  return null;
}

function selectName(item) {
  if (typeof item.manifest.name === "string" && item.manifest.name) {
    return item.manifest.name;
  }

  if (typeof item.manifest.displayName === "string" && item.manifest.displayName) {
    return encodeURIComponent(item.manifest.displayName.replace(/[^\w]/g, '-').toLowerCase());
  }

  return encodeURIComponent(item.id.replace(/[^\w]/g, '-').toLowerCase());
}

/***/ }),

/***/ "../components/lib/search-field/index.js":
/*!***********************************************!*\
  !*** ../components/lib/search-field/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");

var styled = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.es.js").default;

var Icon = __webpack_require__(/*! ../icon */ "../components/lib/icon/index.js");

var StyledSearchField = styled.label.withConfig({
  displayName: "search-field__StyledSearchField"
})(["display:flex;align-items:center;height:60px;padding:10px 15px;"]);
var StyledIcon = styled(Icon).withConfig({
  displayName: "search-field__StyledIcon"
})(["flex-grow:0;flex-shrink:0;fill:", ";"], function (props) {
  return props.theme.colors.color;
});
var StyledInput = styled.input.withConfig({
  displayName: "search-field__StyledInput"
})(["position:relative;z-index:2;width:100%;border:0;border-radius:0;background:transparent;font-size:16px;color:", ";padding:0;appearance:none;border-radius:0;border:none;:focus{outline:none;}"], function (props) {
  return props.theme.colors.color;
});
var StyledInputContainer = styled.div.withConfig({
  displayName: "search-field__StyledInputContainer"
})(["position:relative;display:flex;align-items:center;flex-grow:1;flex-shrink:0;margin-left:10px;"]);
var StyledInputSuggestion = styled(function (p) {
  return React.createElement(StyledInput, _extends({}, p, {
    readOnly: true
  }));
}).withConfig({
  displayName: "search-field__StyledInputSuggestion"
})(["position:absolute;z-index:1;top:0;left:0;opacity:0.3;"]);

var SearchField =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SearchField, _React$Component);

  function SearchField() {
    var _this;

    _classCallCheck(this, SearchField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SearchField).call(this));
    _this.saveRef = _this.saveRef.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(SearchField, [{
    key: "saveRef",
    value: function saveRef(ref) {
      this.ref = ref;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.autoFocus && this.ref) {
        var length = this.props.value.length;
        this.ref.focus();
        this.ref.setSelectionRange(length, length);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var props = this.props;
      return React.createElement(StyledSearchField, null, React.createElement(StyledIcon, {
        symbol: "search"
      }), React.createElement(StyledInputContainer, null, React.createElement(StyledInputSuggestion, {
        value: props.suggestion || ""
      }), React.createElement(StyledInput, {
        autoComplete: "off",
        autoFocus: props.autoFocus,
        name: props.name,
        onBlur: props.onBlur,
        onChange: props.onChange,
        onFocus: props.onFocus,
        onKeyDown: props.onKeyDown,
        placeholder: props.placeholder,
        title: props.title,
        type: "text",
        value: props.value,
        "data-search": props.mark,
        innerRef: this.saveRef
      })), props.children);
    }
  }]);

  return SearchField;
}(React.Component);

module.exports = SearchField;

/***/ }),

/***/ "../components/lib/search/index.js":
/*!*****************************************!*\
  !*** ../components/lib/search/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");

var styled = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.es.js").default;

var Link = __webpack_require__(/*! ../link */ "../components/lib/link/index.js");

var Icon = __webpack_require__(/*! ../icon */ "../components/lib/icon/index.js");

var Text = __webpack_require__(/*! ../text */ "../components/lib/text/index.js");

var InnerInfoPane = __webpack_require__(/*! ../info-pane */ "../components/lib/info-pane/index.js").InnerInfoPane;

var tag = __webpack_require__(/*! tag-hoc */ "../../node_modules/tag-hoc/dist/tag.js").default; // import Outside from "./outside";


var SearchFieldSlot = function SearchFieldSlot(props) {
  return props.children;
};

var PassThroughSlot = function PassThroughSlot(props) {
  return props.children;
};

var NOOP = function NOOP() {};

function Search(props) {
  var children = React.Children.toArray(props.children);
  var searchResultList = children.filter(function (item) {
    return item.type === StyledResultList;
  });
  var searchPreviewChildren = children.filter(function (item) {
    return item.type === StyledResultPreview;
  });
  var searchField = children.filter(function (item) {
    return item.type === SearchFieldSlot;
  });
  var passThrough = children.filter(function (item) {
    return item.type === PassThroughSlot;
  });
  return React.createElement(StyledFormBox, {
    enabled: props.enabled,
    inline: props.inline,
    onClickOutside: props.inline || !props.enabled ? NOOP : props.onClickOutside,
    onClick: props.inline && !props.enabled ? props.onFocus : NOOP,
    value: props.value
  }, React.createElement(StyledForm, {
    onSubmit: props.onSubmit,
    method: "GET"
  }, React.createElement(StyledSearchFieldBox, {
    onClick: props.inline ? props.onClick : NOOP
  }, searchField, passThrough, React.createElement(HiddenSubmit, null), React.createElement(SearchLegend, props.legend)), React.createElement(StyledResults, null, searchResultList, searchPreviewChildren)));
}

var SEARCH_HEIGHT = "55vh";
var SEARCH_FIELD_HEIGHT = "80px";
var SEARCH_LEGEND_HEIGHT = "30px";
var StyledFormBox = styled.div.withConfig({
  displayName: "search__StyledFormBox"
})(["width:100%;height:100%;border-radius:10px;pointer-events:all;overflow:hidden;margin:", ";opacity:", ";"], function (props) {
  return props.inline ? 'calc(12.5vh - 30px) 0 60px 0' : '0';
}, function (props) {
  return props.inline && props.enabled ? '0' : '1';
});
var StyledForm = styled.form.withConfig({
  displayName: "search__StyledForm"
})(["display:flex;flex-direction:column;position:relative;z-index:2;width:100%;max-height:", ";", ""], SEARCH_HEIGHT, function (props) {
  return withTint(props);
});
var StyledSearchFieldBox = styled.div.withConfig({
  displayName: "search__StyledSearchFieldBox"
})(["position:relative;z-index:1;flex:0 0 auto;"]);
var StyledResults = styled.div.withConfig({
  displayName: "search__StyledResults"
})(["position:relative;z-index:1;flex:1 1 auto;display:flex;flex-direction:row;max-height:calc(", " - ", " - ", ");"], SEARCH_HEIGHT, SEARCH_FIELD_HEIGHT, SEARCH_LEGEND_HEIGHT);
var StyledResultPreview = styled.div.withConfig({
  displayName: "search__StyledResultPreview"
})(["flex:1 1 60%;overflow:scroll;-webkit-touch-scroll:auto;"]);
var StyledResultList = styled.div.withConfig({
  displayName: "search__StyledResultList"
})(["flex:1 0 40%;overflow:scroll;-webkit-touch-scroll:auto;border-right:1px solid ", ";"], function (props) {
  return props.theme.colors.border;
});
var StyledResultHeading = styled(Text).withConfig({
  displayName: "search__StyledResultHeading"
})(["box-sizing:border-box;position:-webkit-sticky;position:sticky;z-index:1;top:0;margin:0;font-size:14px;padding:3px 15px;border-width:1px 0;border-style:solid;border-color:", ";color:", ";background:", ";"], function (props) {
  return props.theme.colors.border;
}, function (props) {
  return props.theme.colors.color;
}, function (props) {
  return props.theme.colors.background;
});
var StyledIcon = styled(tag(["active"])(Icon)).withConfig({
  displayName: "search__StyledIcon"
})(["flex:0 0 auto;fill:", ";margin-right:10px;"], function (props) {
  return props.active ? props.theme.colors.active : props.theme.colors.color;
});
var Linkable = tag(["active"])(Link);
var StyledPreviewLink = styled(Linkable).withConfig({
  displayName: "search__StyledPreviewLink"
})(["position:absolute;right:15px;top:50%;transform:translateY(-50%);text-decoration:none;color:", ";opacity:0;&:hover{color:", ";text-decoration:underline;}"], function (props) {
  return props.theme.colors.border;
}, function (props) {
  return props.theme.colors.color;
});
var StyledResultLink = styled(Linkable).withConfig({
  displayName: "search__StyledResultLink"
})(["display:flex;align-items:center;width:100%;padding:10px 15px;&:link,&:visited,&:active{color:", ";text-decoration:none;}"], function (props) {
  return props.active ? props.theme.colors.active : props.theme.colors.color;
});
var StyledResultLinkText = styled(Text).withConfig({
  displayName: "search__StyledResultLinkText"
})(["line-height:20px;color:", ";text-decoration:none;"], function (props) {
  return props.active ? props.theme.colors.active : props.theme.colors.color;
});
var StyledResult = styled.div.withConfig({
  displayName: "search__StyledResult"
})(["position:relative;box-sizing:border-box;display:flex;align-items:center;&:hover{mask-image:linear-gradient( to left,rgba(0,0,0,0) 75px,rgba(0,0,0,1) 125px);-webkit-mask-image:linear-gradient( to left,rgba(0,0,0,0) 75px,rgba(0,0,0,1) 125px);}&:hover{opacity:1;}"]);

var SearchResult =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SearchResult, _React$Component);

  function SearchResult() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SearchResult);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SearchResult)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.getRef = _this.getRef.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(SearchResult, [{
    key: "getRef",
    value: function getRef(ref) {
      this.ref = ref;
    }
  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate(next) {
      if (next.active && this.ref) {
        this.props.onScrollRequest({
          target: this.ref
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var props = this.props;
      return React.createElement(StyledResult, {
        innerRef: this.getRef,
        active: props.active,
        title: "Navigation to pattern ".concat(props.name),
        "data-id": props.id
      }, React.createElement(StyledResultLink, {
        active: props.active,
        href: props.href,
        query: {
          "search-enabled": false
        }
      }, React.createElement(StyledResultLinkText, {
        active: props.active,
        size: "l"
      }, props.name)), React.createElement(StyledPreviewLink, {
        active: props.active,
        query: {
          "search-preview": props.index
        }
      }, React.createElement(Text, {
        active: props.active,
        size: "s"
      }, "\"Preview\"")));
    }
  }]);

  return SearchResult;
}(React.Component);

SearchResult.defaultProps = {
  onScrollRequest: function onScrollRequest() {}
};
var HiddenSubmit = styled.input.attrs({
  type: 'submit'
}).withConfig({
  displayName: "search__HiddenSubmit"
})(["display:none;"]);
var StyledClose = styled(Link).withConfig({
  displayName: "search__StyledClose"
})(["font-size:0;line-height:0;"]);
var StyledCloseIcon = styled(Icon).withConfig({
  displayName: "search__StyledCloseIcon"
})(["fill:", ";"], function (props) {
  return props.theme.colors.color;
});

function Close(props) {
  var verb = props.clears ? "Clear" : "Close";
  var query = props.clears ? {
    search: null
  } : {
    "search-enabled": null
  };
  var symbol = "close"; // TODO: Add and use icon for clearing

  return React.createElement(StyledClose, {
    query: query,
    title: "".concat(verb, " search ").concat(props.shortcut.toString())
  }, React.createElement(StyledCloseIcon, {
    size: "m",
    symbol: symbol
  }), verb);
}

var StyledMarkdown = styled.div.withConfig({
  displayName: "search__StyledMarkdown"
})(["width:80%;margin:0 auto;"]);
var StyledSearchLegend = styled.div.withConfig({
  displayName: "search__StyledSearchLegend"
})(["display:flex;align-items:center;height:30px;position:relative;box-sizing:border-box;width:100%;padding:0 15px;border:1px solid ", ";color:", ";", ";"], function (props) {
  return props.theme.colors.border;
}, function (props) {
  return props.theme.colors.border;
}, function (props) {
  return withTint(props);
});
var StyledSearchLegendBox = styled.div.withConfig({
  displayName: "search__StyledSearchLegendBox"
})(["display:flex;overflow:scroll;-webkit-overflow-scrolling:touch;width:100%;position:relative;z-index:1;::-webkit-scrollbar{display:none;}"]);
var StyledField = styled(Text).withConfig({
  displayName: "search__StyledField"
})(["padding:0 10px;color:", ";&:first-child{padding-left:0;}}"], function (props) {
  return props.theme.colors.color;
});
var StyledLegendName = styled(StyledField).withConfig({
  displayName: "search__StyledLegendName"
})(["padding-right:20px;font-weight:bold;color:", ";position:relative;z-index:1;"], function (props) {
  return props.theme.colors.color;
});
var StyledFieldLink = styled(Link).withConfig({
  displayName: "search__StyledFieldLink"
})(["white-space:nowrap;&:link,&:active,&:visited,&:hover{color:", ""], function (props) {
  return props.theme.colors.color;
});

function SearchLegend(props) {
  return React.createElement(StyledSearchLegend, {
    className: props.className
  }, props.name && React.createElement(StyledLegendName, null, props.name), React.createElement(StyledSearchLegendBox, null, (props.items || []).map(function (l) {
    switch (l.type) {
      case "field":
      default:
        return React.createElement(StyledField, {
          key: l.key
        }, React.createElement(StyledFieldLink, {
          title: l.description,
          query: {
            search: "".concat(l.value)
          }
        }, l.key));
    }
  })));
}

function withTint(props) {
  return "\n\t\t&::before {\n\t\t\tcontent: '';\n\t\t\tposition: absolute;\n\t\t\tz-index: 0;\n\t\t\ttop: 0;\n\t\t\tright: 0;\n\t\t\tbottom: 0;\n\t\t\tleft: 0;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tbackground: ".concat(props.theme.colors.background, ";\n\t\t\topacity: 0.975;\n\t\t}\n\t");
}

module.exports.default = Search;
module.exports.SearchResult = SearchResult;
module.exports.SearchResultList = StyledResultList;
module.exports.SearchResultHeading = StyledResultHeading;
module.exports.SearchResultPreview = StyledResultPreview;
module.exports.SearchFieldSlot = SearchFieldSlot;
module.exports.PassThroughSlot = PassThroughSlot;
module.exports.Close = Close;

/***/ }),

/***/ "../components/lib/svg.js":
/*!********************************!*\
  !*** ../components/lib/svg.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.btoa = btoa;
exports.parse = parse;
exports.png = png;
exports.purge = purge;
exports.render = render;
exports.sanitize = sanitize;
exports.stringify = stringify;

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

var h = __webpack_require__(/*! react */ "../../node_modules/react/index.js").createElement;

var b = __webpack_require__(/*! btoa */ "../../node_modules/btoa/index.js");

var styled = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.es.js").default;

var _require = __webpack_require__(/*! xmldom */ "../../node_modules/xmldom/dom-parser.js"),
    DOMParser = _require.DOMParser,
    XMLSerializer = _require.XMLSerializer;

var _require2 = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js"),
    camelCase = _require2.camelCase;

var parser = new DOMParser();
var serializer = new XMLSerializer();
/**
 * These attributes are valid on all SVG elements and accepted by this
 * renderer.
 * All attributes will be converted to their camelCase version.
 * This allows using valid SVG strings.
 * Extend this list to allow additional default SVG attributes.
 *
 * @type {Array}
 */

var SHARED_ATTRIBUTES = ["fill", "filter", "stroke", "stroke-width"];
var ATTRIBUTES = {
  defs: SHARED_ATTRIBUTES.concat(),
  symbol: ["id"],
  linearGradient: SHARED_ATTRIBUTES.concat(["id", "x1", "y1", "x2", "y2"]),
  stop: ["offset", "stop-color"],
  circle: SHARED_ATTRIBUTES.concat(["cx", "cy", "r", "style"]),
  g: SHARED_ATTRIBUTES.concat(["x", "y"]),
  path: SHARED_ATTRIBUTES.concat(["d", "style"]),
  polygon: SHARED_ATTRIBUTES.concat(["points"]),
  rect: SHARED_ATTRIBUTES.concat(["x", "y", "width", "height", "style"]),
  svg: ["width", "height", "viewBox", "x", "y", "style", "xmlns", "xmlns:xlink"]
};
var TAG_NAMES = Object.keys(ATTRIBUTES);

function attributes(node, key) {
  return (ATTRIBUTES[node.tagName] || []).reduce(function (props, name) {
    var attribute = node.attributes.getNamedItem(name);
    var reactProp = camelCase(name);

    if (attribute && attribute.specified) {
      props[reactProp] = attribute.value;
    }

    return props;
  }, {
    key: key
  });
}

function btoa(source) {
  return "data:image/svg+xml;base64,".concat(b(source));
}

function parse(source) {
  var doc = parser.parseFromString(source, "image/svg+xml");
  var parsed = Array.prototype.slice.call(doc.childNodes).find(function (node) {
    return node.tagName === "svg";
  });
  parsed.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  return parsed;
}

function png(source) {
  return new Promise(function (resolve, reject) {
    var img = new global.Image();
    var canvas = global.document.createElement("canvas");
    var ratio = global.devicePixelRatio || 1;
    canvas.width = 16 * ratio;
    canvas.height = 16 * ratio;
    var context = canvas.getContext("2d");

    img.onload = function () {
      context.drawImage(img, 0, 0);
      resolve(canvas.toDataURL("image/png"));
    };

    img.src = btoa(source);
  });
}

function purge(parsed) {
  return Array.prototype.slice.call(parsed).filter(function (node) {
    return TAG_NAMES.includes(node.tagName);
  }).map(function (node) {
    node.childNodes = purge(node.childNodes);
    var attributes = ATTRIBUTES[node.tagName] || [];

    for (var i = 0; i < node.attributes.length; i++) {
      var attribute = node.attributes[i];

      if (!attributes.includes(attribute.name)) {
        node.removeAttribute(attribute.name);
      }
    }

    return node;
  });
}

function render(element) {
  var _element = _slicedToArray(element, 3),
      tagName = _element[0],
      props = _element[1],
      _element$ = _element[2],
      children = _element$ === void 0 ? [] : _element$;

  var style = props.style,
      rest = _objectWithoutProperties(props, ["style"]);

  var tag = styled(tagName).withConfig({
    displayName: "svg__tag"
  })(["", ";"], style);
  return h(tag, rest, children.map(function (c) {
    return render(c);
  }));
}

function sanitize(parsed) {
  return _toConsumableArray(parsed).map(function (node, i) {
    return [node.tagName, attributes(node, i), sanitize(node.childNodes)];
  });
}

function stringify(tree) {
  return serializer.serializeToString(tree);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../components/lib/tag/index.js":
/*!**************************************!*\
  !*** ../components/lib/tag/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");

var styled = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.es.js").default;

var Text = __webpack_require__(/*! ../text */ "../components/lib/text/index.js");

module.exports = styled(function (props) {
  return React.createElement(Text, {
    className: props.className
  }, props.children);
}).withConfig({
  displayName: "tag__exports"
})(["display:inline-block;padding:2px 4px;margin-top:1.5px;margin-bottom:1.5px;color:", ";border:1px solid ", ";border-radius:3px;&:link,&:visited,&:active{text-decoration:none;color:", ";}&:nth-child(2n){margin-left:3px;}"], function (props) {
  return props.theme.colors.color;
}, function (props) {
  return props.theme.colors.color;
}, function (props) {
  return props.theme.colors.color;
});

/***/ }),

/***/ "../components/lib/text/index.js":
/*!***************************************!*\
  !*** ../components/lib/text/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");

var styled = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.es.js").default;

var tag = __webpack_require__(/*! tag-hoc */ "../../node_modules/tag-hoc/dist/tag.js").default;

module.exports = Text;

function Text(props) {
  return React.createElement(StyledText, {
    is: props.is,
    className: props.className
  }, props.children);
}

var StyledText = styled(tag(["size"])("div")).withConfig({
  displayName: "text__StyledText"
})(["font-family:", ";color:", ";"], function (props) {
  return props.theme.fonts.default;
}, function (props) {
  return props.theme.colors.color;
});

/***/ }),

/***/ "../components/lib/themes/index.js":
/*!*****************************************!*\
  !*** ../components/lib/themes/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var color = __webpack_require__(/*! color */ "../../node_modules/color/index.js");

var _require = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js"),
    merge = _require.merge;

var fonts = __webpack_require__(/*! ../fonts */ "../components/lib/fonts/index.js");

module.exports = function getThemes() {
  var ui = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaultMainColor = color.rgb(51, 153, 255);
  var grayBaseTone = color.hsl(0, 0, 100);
  var colorGroups = {
    lightBlue: {
      300: defaultMainColor.darken(0.3),
      600: defaultMainColor.darken(0.4)
    },
    marine: {
      500: defaultMainColor.desaturate(0.5).darken(0.5),
      700: defaultMainColor.desaturate(0.5).darken(0.8),
      800: defaultMainColor.desaturate(0.5).darken(0.85),
      900: defaultMainColor.desaturate(0.5).darken(0.9)
    },
    gray: {
      50: grayBaseTone.darken(0.05),
      100: grayBaseTone.darken(0.15),
      400: grayBaseTone.darken(0.4),
      700: grayBaseTone.darken(0.735)
    }
  };
  var active = ui.colorActive ? color(ui.colorActive) : defaultMainColor;
  var error = ui.colorError ? color(ui.colorError) : color.rgb(250, 63, 69);
  var warning = ui.colorWarning ? color(ui.colorWarning) : color.rgb(255, 189, 46);
  var info = ui.colorInfo ? color(ui.colorInfo) : color.rgb(80, 179, 221);
  var success = ui.colorSuccess ? color(ui.colorSuccess) : color.rgb(74, 165, 74);
  var background = ui.colorBackgroundDark ? color(ui.colorBackgroundDark) : colorGroups.marine[900];
  var backgroundSecondary = ui.colorBackgroundSecondaryDark ? color(ui.colorBackgroundSecondaryDark) : colorGroups.marine[800];
  var backgroundTertiary = ui.colorBackgroundTertiaryDark ? color(ui.colorBackgroundTertiaryDark) : colorGroups.marine[700];
  var border = ui.colorBorderDark ? color(ui.colorBorderDark) : colorGroups.marine[800];
  var textColor = ui.colorTextDark ? color(ui.colorTextDark) : colorGroups.gray[50];
  var textColorNegated = ui.colorTextNegatedDark ? color(ui.colorTextNegatedDark) : colorGroups.gray[700];
  var recess = ui.colorRecessDark ? color(ui.colorRecessDark) : colorGroups.gray[400];
  var backgroundLight = ui.colorBackgroundLight ? color(ui.colorBackgroundLight) : color.hsl(255, 0, 100);
  var backgroundSecondaryLight = ui.colorBackgroundSecondaryLight ? color(ui.colorBackgroundSecondaryLight) : color.rgb(246, 248, 250);
  var backgroundTertiaryLight = ui.colorBackgroundTertiaryLight ? color(ui.colorBackgroundTertiaryLight) : color.rgb(246, 248, 250);
  var borderLight = ui.colorBorderLight ? color(ui.colorBorderLight) : color.rgb(228, 228, 228);
  var colorLight = ui.colorTextLight ? color(ui.colorTextLight) : color.rgb(68, 68, 68, 1);
  var colorLightNegated = ui.colorTextLightNegated ? color(ui.colorTextLightNegated) : color.rgb(238, 238, 238);
  var colorRecessLight = ui.colorRecessLight ? color(ui.colorRecessLight) : color.rgb(106, 115, 125, 1);
  var fontFaces = fonts();
  var common = {
    colors: {
      active: active.string(),
      error: error.string(),
      warning: warning.string(),
      info: info.string(),
      success: success.string()
    },
    fonts: {
      fontWeight: 100,
      fontSize: 14,
      default: ui.fontDefault || fontFaces.default,
      code: ui.fontCode || fontFaces.code,
      headline: ui.fontHeadline || fontFaces.default
    }
  };
  var dark = merge({}, common, {
    name: "dark",
    colors: {
      background: background.string(),
      backgroundSecondary: backgroundSecondary.string(),
      backgroundTertiary: backgroundTertiary.string(),
      border: border.string(),
      color: textColor.string(),
      colorNegated: textColorNegated.string(),
      recess: recess.string()
    }
  });
  var light = merge({}, common, {
    name: "light",
    colors: {
      background: backgroundLight.string(),
      backgroundSecondary: backgroundSecondaryLight.string(),
      backgroundTertiary: backgroundTertiaryLight.string(),
      border: borderLight.string(),
      color: colorLight.string(),
      colorNegated: colorLightNegated.string(),
      recess: colorRecessLight.string()
    }
  });
  return {
    dark: dark,
    light: light
  };
};

/***/ }),

/***/ "../search/index.js":
/*!**************************!*\
  !*** ../search/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./lib/create-search */ "../search/lib/create-search.js");

/***/ }),

/***/ "../search/lib/create-search.js":
/*!**************************************!*\
  !*** ../search/lib/create-search.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Query = __webpack_require__(/*! ./query */ "../search/lib/query.js");

var Registry = __webpack_require__(/*! ./registry */ "../search/lib/registry.js");

var Search = __webpack_require__(/*! ./search */ "../search/lib/search.js");

var Term = __webpack_require__(/*! ./term */ "../search/lib/term.js");

module.exports = {
  createSearch: createSearch,
  Query: Query,
  Term: Term
};

function createSearch(items) {
  var search = Search.create(items);
  var registry = Registry.create(items);
  return function performSearch(queryString) {
    var query = Query.parse(queryString);
    return Query.perform(query, function (termString) {
      var term = Term.parse(termString);

      if (term.valid) {
        return registry.search(term);
      }

      return search.search(term.raw);
    });
  };
}

/***/ }),

/***/ "../search/lib/query.js":
/*!******************************!*\
  !*** ../search/lib/query.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var flatten = __webpack_require__(/*! lodash.flatten */ "../../node_modules/lodash.flatten/index.js");

var intersection = __webpack_require__(/*! lodash.intersection */ "../../node_modules/lodash.intersection/index.js");

var q = __webpack_require__(/*! logic-query-parser */ "../../node_modules/logic-query-parser/lib/index.js");

module.exports = {
  parse: parse,
  perform: perform
};

function parse(queryString) {
  var values = typeof queryString === "string" ? [queryString] : [];

  try {
    var parsed = q.parse(queryString);
    var query = q.utils.binaryTreeToQueryJson(parsed);

    if (query.type) {
      return query;
    }

    return {
      type: "and",
      values: values
    };
  } catch (err) {
    return {
      type: "and",
      values: values
    };
  }
}

function perform(query, predicate) {
  if (typeof query === "string") {
    return predicate(query);
  }

  var items = function items() {
    return query.values.map(function (value) {
      return perform(value, predicate);
    });
  };

  var value = typeof query.value === "string" ? query.value : "";

  switch (query.type) {
    case "and":
      {
        return intersection.apply(void 0, _toConsumableArray(items()));
      }

    case "or":
      {
        return flatten.apply(void 0, _toConsumableArray(items()));
      }

    case "string":
      {
        return predicate(value);
      }

    default:
      {
        throw new TypeError("@patternplate/search.perform: Unknown query: ".concat(JSON.stringify(query)));
      }
  }
}

/***/ }),

/***/ "../search/lib/registry.js":
/*!*********************************!*\
  !*** ../search/lib/registry.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var semver = __webpack_require__(/*! semver */ "../search/node_modules/semver/semver.js");

module.exports = {
  create: create
};
var FLAGS = {
  deprecated: 0,
  alpha: 0,
  beta: 1,
  rc: 2,
  stable: 3
}; // TODO: create an efficient search data structure

function create(items) {
  return {
    search: function search(term) {
      var matcher = getMatcher(term.field, term.value, term);
      return items.filter(function (item) {
        return _typeof(item.manifest) === "object";
      }).filter(function (item) {
        return term.negated ? !matcher(item) : matcher(item);
      }).map(function (i) {
        return i.id;
      });
    }
  };
}

function getMatcher(field, value, options) {
  var depends = matchDepends(value, options);
  var has = matchHas(value, options);
  var provides = matchProvides(value, options);
  var flag = matchFlag(value, options);
  var tags = matchTags(value, options);
  var version = matchVersion(value, options);
  var is = matchIs(value);
  return function (item) {
    switch (field) {
      case "depends":
        return depends(item);

      case "description":
        return description(item);

      case "flag":
        return flag(item);

      case "has":
        return has(item);

      case "is":
        return is(item);

      case "provides":
        return provides(item);

      case "tag":
      case "tags":
        return tags(item);

      case "version":
        return version(item);

      case "flag":
        return flag(item);

      default:
        return item[field] === value || item.manifest[field] === value;
    }
  };
}

var manifest = function manifest(item) {
  return item.manifest;
};

var flag = function flag(item) {
  return manifest(item).flag;
};

var index = function index(item) {
  return FLAGS[flag(item)] || 0;
};

var version = function version(item) {
  return manifest(item).version;
};

var tags = function tags(item) {
  return manifest(item).tags || [];
};

var depends = function depends(item) {
  return (item.dependencies || []).filter(function (i) {
    return typeof i === "string";
  });
};

var dependents = function dependents(item) {
  return (item.dependents || []).filter(function (i) {
    return typeof i === "string";
  });
};

function matchHas(value) {
  return function (item) {
    switch (value) {
      case "dependencies":
        return (item.dependencies || []).length > 0;

      case "dependents":
        return (item.dependents || []).length > 0;

      case "description":
        return Boolean(item.manifest.description);

      case "displayName":
        return Boolean((item.rawManifest || {}).displayName);

      case "doc":
      case "docs":
        return item.contentType === "pattern" && Boolean(item.contents);

      case "flag":
        return Boolean((item.rawManifest || {}).flag);

      case "tag":
      case "tags":
        return (item.manifest.tags || []).length > 0;

      case "version":
        return Boolean((item.rawManifest || {}).version);

      default:
        return false;
    }
  };
}

function matchIs(value) {
  return function (item) {
    return item.contentType === value;
  };
}

function matchDepends(value, options) {
  if (options.startsWith) {
    return function (item) {
      return depends(item).length > 0 && depends(item).some(function (d) {
        return d.startsWith(value);
      });
    };
  }

  if (options.includes) {
    return function (item) {
      return depends(item).length > 0 && depends(item).some(function (d) {
        return d.includes(value);
      });
    };
  }

  return function (item) {
    return depends(item).includes(value);
  };
}

function matchFlag(value, options) {
  var i = FLAGS[value] || 0;

  if (options.lower) {
    return function (item) {
      return options.equals ? index(item) <= i : index(item) < i;
    };
  }

  if (options.greater) {
    return function (item) {
      return options.equals ? index(item) >= i : index(item) > i;
    };
  }

  if (options.startsWith) {
    return function (item) {
      return flag(item).startsWith(value);
    };
  }

  if (options.includes) {
    return function (item) {
      return flag(item).includes(value);
    };
  }

  return function (item) {
    return flag(item) === value;
  };
}

function matchProvides(value, options) {
  if (options.startsWith) {
    return function (item) {
      return dependents(item).length > 0 && dependents(item).some(function (d) {
        return d.startsWith(value);
      });
    };
  }

  if (options.includes) {
    return function (item) {
      return dependents(item).length > 0 && dependents(item).some(function (d) {
        return d.includes(value);
      });
    };
  }

  return function (item) {
    return dependents(item).includes(value);
  };
}

function matchTags(value, options) {
  if (options.startsWith) {
    return function (item) {
      return tags(item).length > 0 && tags(item).some(function (tag) {
        return tag.startsWith(value);
      });
    };
  }

  if (options.includes) {
    return function (item) {
      return tags(item).length > 0 && tags(item).some(function (tag) {
        return tag.includes(value);
      });
    };
  }

  return function (item) {
    return tags(item).includes(value);
  };
}

function matchVersion(value, options) {
  var modified = options.lower || options.greater || options.startsWith || options.includes;

  var valid = function valid(item) {
    return semver.valid(version(item));
  };

  if (modified) {
    return function (item) {
      return valid(item) ? semver.satisfies(version(item), "".concat(options.operators).concat(options.value)) : false;
    };
  }

  return function (item) {
    return valid(item) ? semver.satisfies(version(item), options.value) : false;
  };
}

/***/ }),

/***/ "../search/lib/search.js":
/*!*******************************!*\
  !*** ../search/lib/search.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Fuse = __webpack_require__(/*! fuse.js */ "../search/node_modules/fuse.js/dist/fuse.js");

module.exports = {
  create: create
};

function create(items) {
  return new Fuse(items, {
    id: "id",
    keys: ["id", "contents", "manifest.displayName", "manifest.description", "manifest.name", "manifest.version", "manifest.tags", "manifest.flag"]
  });
}

/***/ }),

/***/ "../search/lib/term.js":
/*!*****************************!*\
  !*** ../search/lib/term.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = {
  parse: parse
};
var OPERATORS = /([^!><^~\n=]+)?(?:(!)?(>|<|\^|~)?(=)?)([^!><^~\n=]+)?/;

function parse(termString) {
  var found = termString.match(OPERATORS) || [];

  var _found = _slicedToArray(found, 6),
      raw = _found[0],
      field = _found[1],
      negator = _found[2],
      modifier = _found[3],
      equality = _found[4],
      value = _found[5];

  return {
    field: field,
    value: value,
    raw: raw,
    operators: [modifier, equality].join(""),
    negated: negator === "!",
    greater: modifier === ">",
    lower: modifier === "<",
    startsWith: equality === "=" && modifier === "^",
    includes: equality === "=" && modifier === "~",
    equals: equality === "=",
    valid: Boolean(field && value && (typeof modifier === "string" || typeof equality === "string"))
  };
}

/***/ }),

/***/ "../websocket-client/index.js":
/*!************************************!*\
  !*** ../websocket-client/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./lib */ "../websocket-client/lib/index.js");

/***/ }),

/***/ "../websocket-client/lib/index.js":
/*!****************************************!*\
  !*** ../websocket-client/lib/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = __webpack_require__(/*! events */ "../../node_modules/events/events.js"),
    EventEmitter = _require.EventEmitter;

module.exports.WebSocketClient =
/*#__PURE__*/
function () {
  function WebSocketClient(_ref) {
    var src = _ref.src,
        reconnect = _ref.reconnect,
        interval = _ref.interval;

    _classCallCheck(this, WebSocketClient);

    this.src = src;
    this.reconnect = reconnect;
    this.interval = interval;
    this.opened = false;
    this.ended = false;
    this.ee = new EventEmitter();
  }

  _createClass(WebSocketClient, [{
    key: "open",
    value: function open() {
      var _this = this;

      var exec = function exec(type, args) {
        return _this.ee.listeners(type).forEach(function (l) {
          return l.apply(void 0, _toConsumableArray(args));
        });
      };

      var open = function open() {
        _this.instance = new global.WebSocket(_this.src); // Make Chrome behave and close the websocket connection
        // before unloading the browsing context. Ref: https://github.com/websockets/ws/issues/1256

        global.addEventListener("beforeunload", _this.close);

        _this.instance.addEventListener("open", function () {
          _this.opened = true;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          exec("open", args);
        });

        _this.instance.addEventListener("close", function () {
          global.removeEventListener("beforeunload", _this.close);
          _this.opened = false;

          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          exec("close", args);
        });

        _this.instance.addEventListener("error", function () {
          global.removeEventListener("beforeunload", _this.close);
          _this.opened = false;

          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }

          exec("error", args);
        });

        _this.instance.addEventListener("message", function () {
          for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
          }

          exec("message", args);
        });
      };

      open();

      if (this.reconnect) {
        this.loop = setInterval(function () {
          if (_this.ended || _this.opened) {
            return;
          }

          open();
        }, this.interval);
      }
    }
  }, {
    key: "close",
    value: function close() {
      this.ended = true;

      if (this.opened) {
        this.instance.close();
      }
    }
  }, {
    key: "onOpen",
    value: function onOpen(handler) {
      this.ee.on("open", handler);
    }
  }, {
    key: "onClose",
    value: function onClose(handler) {
      this.ee.on("close", handler);
      this.instance.addEventListener("close", handler);
    }
  }, {
    key: "onError",
    value: function onError(handler) {
      this.ee.on("error", handler);
      this.instance.addEventListener("error", handler);
    }
  }, {
    key: "onMessage",
    value: function onMessage(handler) {
      this.ee.on("message", handler);
      this.instance.addEventListener("message", handler);
    }
  }]);

  return WebSocketClient;
}();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/app/actions/activate-node.js":
/*!******************************************!*\
  !*** ./src/app/actions/activate-node.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.type = exports.default = void 0;

var _ = __webpack_require__(/*! ./ */ "./src/app/actions/index.js");

var _default = activateNode;
exports.default = _default;
var type = "ACTIVATE_NODE";
exports.type = type;

function activateNode(id) {
  return function (dispatch) {
    dispatch((0, _.patchLocation)({
      query: {
        "active-node": id
      }
    }));
  };
}

activateNode.key = "";
activateNode.property = "";
activateNode.type = type;

/***/ }),

/***/ "./src/app/actions/apply-state.js":
/*!****************************************!*\
  !*** ./src/app/actions/apply-state.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.type = exports.default = void 0;
var _default = applyState;
exports.default = _default;
var type = "@@APPLY_STATE";
exports.type = type;

function applyState(payload) {
  return {
    type: type,
    payload: payload
  };
}

/***/ }),

/***/ "./src/app/actions/arrow.js":
/*!**********************************!*\
  !*** ./src/app/actions/arrow.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.type = exports.default = void 0;

var _reactRouterRedux = __webpack_require__(/*! react-router-redux */ "../../node_modules/react-router-redux/lib/index.js");

var _toggleNavigation = _interopRequireDefault(__webpack_require__(/*! ./toggle-navigation */ "./src/app/actions/toggle-navigation.js"));

var _pool = __webpack_require__(/*! ../selectors/pool */ "./src/app/selectors/pool.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = arrow;
exports.default = _default;
var type = "ARROW";
exports.type = type;
var OFFSETS = {
  up: -1,
  down: 1,
  default: 0
};

function arrow(payload) {
  return function (dispatch, getState) {
    var state = getState(); // Is handled locally

    if (state.searchEnabled) {
      return;
    }

    switch (payload) {
      case "right":
        {
          if (state.navigationEnabled) {
            return dispatch((0, _toggleNavigation.default)());
          }

          return;
        }

      case "left":
        {
          if (!state.navigationEnabled) {
            return dispatch((0, _toggleNavigation.default)());
          }

          return;
        }

      case "up":
      case "down":
      default:
        {
          if (!state.navigationEnabled) {
            return;
          }

          var offset = payload in OFFSETS ? OFFSETS[payload] : OFFSETS.default;
          var pool = (0, _pool.flat)(state);
          var index = pool.findIndex(function (item) {
            return "".concat(item.contentType, "/").concat(item.id) === state.id || state.id === '/' && item.id === '/root';
          });
          var next = pool[index + offset];

          if (next) {
            go(dispatch)(next.href);
          }
        }
    }
  };
}

function go(dispatch) {
  return function (next) {
    return dispatch((0, _reactRouterRedux.push)(next));
  };
}

/***/ }),

/***/ "./src/app/actions/change-concern.js":
/*!*******************************************!*\
  !*** ./src/app/actions/change-concern.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.type = exports.default = void 0;

var _path = _interopRequireDefault(__webpack_require__(/*! path */ "../../node_modules/path-browserify/index.js"));

var _urlQuery = _interopRequireDefault(__webpack_require__(/*! ../utils/url-query */ "./src/app/utils/url-query.js"));

var _ = __webpack_require__(/*! ./ */ "./src/app/actions/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = changeConcern;
exports.default = _default;
var type = "CHANGE_CONCERN";
exports.type = type;

function changeConcern(concern) {
  return function (dispatch, getState) {
    var state = getState();
    var location = state.routing.locationBeforeTransitions;

    var parsed = _urlQuery.default.parse(location.query.source);

    var previous = parsed.pathname;

    var ext = _path.default.extname(previous);

    var hasDemo = state.pattern.files.some(function (file) {
      return file.concern === "demo" && file.type === ext.slice(1);
    });
    var type = concern === "index" && hasDemo ? "source" : parsed.query.type;

    var source = _urlQuery.default.format({
      pathname: "".concat(_path.default.dirname(previous), "/").concat(concern).concat(ext),
      query: _objectSpread({}, parsed.query, {
        type: type
      })
    });

    dispatch((0, _.patchLocation)({
      query: {
        source: source
      }
    }));
  };
}

changeConcern.type = type;

/***/ }),

/***/ "./src/app/actions/change-type.js":
/*!****************************************!*\
  !*** ./src/app/actions/change-type.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.type = exports.default = void 0;

var _assert = _interopRequireDefault(__webpack_require__(/*! assert */ "../../node_modules/assert/assert.js"));

var _lodash = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");

var _urlQuery = _interopRequireDefault(__webpack_require__(/*! ../utils/url-query */ "./src/app/utils/url-query.js"));

var _ = __webpack_require__(/*! ./ */ "./src/app/actions/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _default = changeType;
exports.default = _default;
var type = "CHANGE_TYPE";
exports.type = type;

function changeType(input) {
  _assert.default.equal(_typeof(input), "string", "input for changeType action must be of type string");

  return function (dispatch, getState) {
    var location = getState().routing.locationBeforeTransitions;

    var parsed = _urlQuery.default.parse(location.query.source || "");

    var type = (0, _lodash.includes)(["source", "transformed"], input) ? input : "source";
    var query = {
      type: type
    };

    var source = _urlQuery.default.format((0, _lodash.merge)({}, parsed, {
      query: query
    }));

    dispatch((0, _.patchLocation)({
      query: {
        source: source
      }
    }));
  };
}

changeType.type = type;

/***/ }),

/***/ "./src/app/actions/close-all-the-things.js":
/*!*************************************************!*\
  !*** ./src/app/actions/close-all-the-things.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.type = exports.default = void 0;

var _ = __webpack_require__(/*! ./ */ "./src/app/actions/index.js");

var _default = closeAllTheThings;
exports.default = _default;
var type = "CLOSE_ALL_THE_THINGS";
exports.type = type;

function closeAllTheThings() {
  return function (dispatch) {
    dispatch((0, _.dismissAllMessages)());
    dispatch((0, _.patchLocation)({
      query: {
        issue: null,
        lightbox: null,
        "menu-enabled": null,
        "network-enabled": null,
        "search-enabled": null,
        source: null,
        "source-expanded": null
      }
    }));
  };
}

closeAllTheThings.type = type;

/***/ }),

/***/ "./src/app/actions/demo-content-resize.js":
/*!************************************************!*\
  !*** ./src/app/actions/demo-content-resize.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reduxActions = __webpack_require__(/*! redux-actions */ "../../node_modules/redux-actions/lib/index.js");

var _default = (0, _reduxActions.createAction)("DEMO_CONTENT_RESIZE", function (_ref) {
  var width = _ref.width,
      height = _ref.height;
  return {
    width: width,
    height: height
  };
});

exports.default = _default;

/***/ }),

/***/ "./src/app/actions/dismiss-all-messages.js":
/*!*************************************************!*\
  !*** ./src/app/actions/dismiss-all-messages.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reduxActions = __webpack_require__(/*! redux-actions */ "../../node_modules/redux-actions/lib/index.js");

var _default = (0, _reduxActions.createAction)("DISMISS_ALL_MESSAGES");

exports.default = _default;

/***/ }),

/***/ "./src/app/actions/dismiss-message.js":
/*!********************************************!*\
  !*** ./src/app/actions/dismiss-message.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reduxActions = __webpack_require__(/*! redux-actions */ "../../node_modules/redux-actions/lib/index.js");

var _default = (0, _reduxActions.createAction)("DISMISS_MESSAGE");

exports.default = _default;

/***/ }),

/***/ "./src/app/actions/handle-dependent-actions.js":
/*!*****************************************************!*\
  !*** ./src/app/actions/handle-dependent-actions.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _assert = _interopRequireDefault(__webpack_require__(/*! assert */ "../../node_modules/assert/assert.js"));

var _reduxActions = __webpack_require__(/*! redux-actions */ "../../node_modules/redux-actions/lib/index.js");

var _lodash = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _default = handleDependentActions;
exports.default = _default;

function partialReduce(deps) {
  return function (handlers) {
    return (0, _lodash.entries)(handlers).reduce(function (registry, entry) {
      var _entry = _slicedToArray(entry, 2),
          name = _entry[0],
          fn = _entry[1];

      registry[name] = function (state, action) {
        return fn(state, action, deps);
      };

      return registry;
    }, {});
  };
}

function handleDependentActions(actionHandlers, options) {
  _assert.default.ok(Array.isArray(options.dependencies), "options.dependencies must be an array");

  var handler = function handler() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _args$ = args[2],
        dependencies = _args$ === void 0 ? {} : _args$;

    if (Object.keys(dependencies).length > 0) {
      var missing = options.dependencies.filter(function (dependency) {
        return !(dependency in dependencies);
      });

      _assert.default.ok(missing.length === 0, "dependencies for ".concat(Object.keys(actionHandlers).join(", "), " must be present in state. missing: ").concat(missing.join(","), ". available: ").concat(Object.keys(dependencies)));
    }

    var deps = (0, _lodash.pick)(dependencies, options.dependencies);
    var handlers = partialReduce(deps)(actionHandlers);
    var reducer = (0, _reduxActions.handleActions)(handlers, options.defaultValue);
    return reducer.apply(void 0, args);
  };

  handler.dependencies = options.dependencies;
  return handler;
}

/***/ }),

/***/ "./src/app/actions/index.js":
/*!**********************************!*\
  !*** ./src/app/actions/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "activateNode", {
  enumerable: true,
  get: function get() {
    return _activateNode.default;
  }
});
Object.defineProperty(exports, "applyState", {
  enumerable: true,
  get: function get() {
    return _applyState.default;
  }
});
Object.defineProperty(exports, "arrow", {
  enumerable: true,
  get: function get() {
    return _arrow.default;
  }
});
Object.defineProperty(exports, "changeConcern", {
  enumerable: true,
  get: function get() {
    return _changeConcern.default;
  }
});
Object.defineProperty(exports, "changeType", {
  enumerable: true,
  get: function get() {
    return _changeType.default;
  }
});
Object.defineProperty(exports, "closeAllTheThings", {
  enumerable: true,
  get: function get() {
    return _closeAllTheThings.default;
  }
});
Object.defineProperty(exports, "demoContentResize", {
  enumerable: true,
  get: function get() {
    return _demoContentResize.default;
  }
});
Object.defineProperty(exports, "dismissAllMessages", {
  enumerable: true,
  get: function get() {
    return _dismissAllMessages.default;
  }
});
Object.defineProperty(exports, "dismissMessage", {
  enumerable: true,
  get: function get() {
    return _dismissMessage.default;
  }
});
Object.defineProperty(exports, "listen", {
  enumerable: true,
  get: function get() {
    return _listen.default;
  }
});
Object.defineProperty(exports, "loadPatternDemo", {
  enumerable: true,
  get: function get() {
    return _loadPatternDemo.default;
  }
});
Object.defineProperty(exports, "loadSchema", {
  enumerable: true,
  get: function get() {
    return _loadSchema.default;
  }
});
Object.defineProperty(exports, "openDocumentation", {
  enumerable: true,
  get: function get() {
    return _openDocumentation.default;
  }
});
Object.defineProperty(exports, "openFullscreen", {
  enumerable: true,
  get: function get() {
    return _openFullscreen.default;
  }
});
Object.defineProperty(exports, "patchLocation", {
  enumerable: true,
  get: function get() {
    return _patchLocation.default;
  }
});
Object.defineProperty(exports, "reload", {
  enumerable: true,
  get: function get() {
    return _reload.default;
  }
});
Object.defineProperty(exports, "resizeDemo", {
  enumerable: true,
  get: function get() {
    return _resizeDemo.default;
  }
});
Object.defineProperty(exports, "scrollDemo", {
  enumerable: true,
  get: function get() {
    return _scrollDemo.default;
  }
});
Object.defineProperty(exports, "scrollTo", {
  enumerable: true,
  get: function get() {
    return _scrollTo.default;
  }
});
Object.defineProperty(exports, "search", {
  enumerable: true,
  get: function get() {
    return _search.default;
  }
});
Object.defineProperty(exports, "searchPreview", {
  enumerable: true,
  get: function get() {
    return _searchPreview.default;
  }
});
Object.defineProperty(exports, "themeLoaded", {
  enumerable: true,
  get: function get() {
    return _themeLoaded.default;
  }
});
Object.defineProperty(exports, "toggleCode", {
  enumerable: true,
  get: function get() {
    return _toggleCode.default;
  }
});
Object.defineProperty(exports, "toggleConsole", {
  enumerable: true,
  get: function get() {
    return _toggleConsole.default;
  }
});
Object.defineProperty(exports, "toggleDependencies", {
  enumerable: true,
  get: function get() {
    return _toggleDependencies.default;
  }
});
Object.defineProperty(exports, "toggleDependents", {
  enumerable: true,
  get: function get() {
    return _toggleDependents.default;
  }
});
Object.defineProperty(exports, "toggleDoc", {
  enumerable: true,
  get: function get() {
    return _toggleDoc.default;
  }
});
Object.defineProperty(exports, "toggleHide", {
  enumerable: true,
  get: function get() {
    return _toggleHide.default;
  }
});
Object.defineProperty(exports, "toggleInfo", {
  enumerable: true,
  get: function get() {
    return _toggleInfo.default;
  }
});
Object.defineProperty(exports, "toggleKeyboardShortcuts", {
  enumerable: true,
  get: function get() {
    return _toggleKeyboardShortcuts.default;
  }
});
Object.defineProperty(exports, "toggleManifest", {
  enumerable: true,
  get: function get() {
    return _toggleManifest.default;
  }
});
Object.defineProperty(exports, "toggleNavigation", {
  enumerable: true,
  get: function get() {
    return _toggleNavigation.default;
  }
});
Object.defineProperty(exports, "toggleNetwork", {
  enumerable: true,
  get: function get() {
    return _toggleNetwork.default;
  }
});
Object.defineProperty(exports, "toggleOpacity", {
  enumerable: true,
  get: function get() {
    return _toggleOpacity.default;
  }
});
Object.defineProperty(exports, "toggleComponentsEnabled", {
  enumerable: true,
  get: function get() {
    return _toggleComponentsEnabled.default;
  }
});
Object.defineProperty(exports, "toggleRulers", {
  enumerable: true,
  get: function get() {
    return _toggleRulers.default;
  }
});
Object.defineProperty(exports, "toggleSearch", {
  enumerable: true,
  get: function get() {
    return _toggleSearch.default;
  }
});
Object.defineProperty(exports, "toggleTheme", {
  enumerable: true,
  get: function get() {
    return _toggleTheme.default;
  }
});
Object.defineProperty(exports, "windowResize", {
  enumerable: true,
  get: function get() {
    return _windowResize.default;
  }
});

var _activateNode = _interopRequireDefault(__webpack_require__(/*! ./activate-node */ "./src/app/actions/activate-node.js"));

var _applyState = _interopRequireDefault(__webpack_require__(/*! ./apply-state */ "./src/app/actions/apply-state.js"));

var _arrow = _interopRequireDefault(__webpack_require__(/*! ./arrow */ "./src/app/actions/arrow.js"));

var _changeConcern = _interopRequireDefault(__webpack_require__(/*! ./change-concern */ "./src/app/actions/change-concern.js"));

var _changeType = _interopRequireDefault(__webpack_require__(/*! ./change-type */ "./src/app/actions/change-type.js"));

var _closeAllTheThings = _interopRequireDefault(__webpack_require__(/*! ./close-all-the-things */ "./src/app/actions/close-all-the-things.js"));

var _demoContentResize = _interopRequireDefault(__webpack_require__(/*! ./demo-content-resize */ "./src/app/actions/demo-content-resize.js"));

var _dismissAllMessages = _interopRequireDefault(__webpack_require__(/*! ./dismiss-all-messages */ "./src/app/actions/dismiss-all-messages.js"));

var _dismissMessage = _interopRequireDefault(__webpack_require__(/*! ./dismiss-message */ "./src/app/actions/dismiss-message.js"));

var _listen = _interopRequireDefault(__webpack_require__(/*! ./listen */ "./src/app/actions/listen.js"));

var _loadPatternDemo = _interopRequireDefault(__webpack_require__(/*! ./load-pattern-demo */ "./src/app/actions/load-pattern-demo.js"));

var _loadSchema = _interopRequireDefault(__webpack_require__(/*! ./load-schema */ "./src/app/actions/load-schema.js"));

var _openDocumentation = _interopRequireDefault(__webpack_require__(/*! ./open-documentation */ "./src/app/actions/open-documentation.js"));

var _openFullscreen = _interopRequireDefault(__webpack_require__(/*! ./open-fullscreen */ "./src/app/actions/open-fullscreen.js"));

var _patchLocation = _interopRequireDefault(__webpack_require__(/*! ./patch-location */ "./src/app/actions/patch-location.js"));

var _reload = _interopRequireDefault(__webpack_require__(/*! ./reload */ "./src/app/actions/reload.js"));

var _resizeDemo = _interopRequireDefault(__webpack_require__(/*! ./resize-demo */ "./src/app/actions/resize-demo.js"));

var _scrollDemo = _interopRequireDefault(__webpack_require__(/*! ./scroll-demo */ "./src/app/actions/scroll-demo.js"));

var _scrollTo = _interopRequireDefault(__webpack_require__(/*! ./scroll-to */ "./src/app/actions/scroll-to.js"));

var _search = _interopRequireDefault(__webpack_require__(/*! ./search */ "./src/app/actions/search.js"));

var _searchPreview = _interopRequireDefault(__webpack_require__(/*! ./search-preview */ "./src/app/actions/search-preview.js"));

var _themeLoaded = _interopRequireDefault(__webpack_require__(/*! ./theme-loaded */ "./src/app/actions/theme-loaded.js"));

var _toggleCode = _interopRequireDefault(__webpack_require__(/*! ./toggle-code */ "./src/app/actions/toggle-code.js"));

var _toggleConsole = _interopRequireDefault(__webpack_require__(/*! ./toggle-console */ "./src/app/actions/toggle-console.js"));

var _toggleDependencies = _interopRequireDefault(__webpack_require__(/*! ./toggle-dependencies */ "./src/app/actions/toggle-dependencies.js"));

var _toggleDependents = _interopRequireDefault(__webpack_require__(/*! ./toggle-dependents */ "./src/app/actions/toggle-dependents.js"));

var _toggleDoc = _interopRequireDefault(__webpack_require__(/*! ./toggle-doc */ "./src/app/actions/toggle-doc.js"));

var _toggleHide = _interopRequireDefault(__webpack_require__(/*! ./toggle-hide */ "./src/app/actions/toggle-hide.js"));

var _toggleInfo = _interopRequireDefault(__webpack_require__(/*! ./toggle-info */ "./src/app/actions/toggle-info.js"));

var _toggleKeyboardShortcuts = _interopRequireDefault(__webpack_require__(/*! ./toggle-keyboard-shortcuts */ "./src/app/actions/toggle-keyboard-shortcuts.js"));

var _toggleManifest = _interopRequireDefault(__webpack_require__(/*! ./toggle-manifest */ "./src/app/actions/toggle-manifest.js"));

var _toggleNavigation = _interopRequireDefault(__webpack_require__(/*! ./toggle-navigation */ "./src/app/actions/toggle-navigation.js"));

var _toggleNetwork = _interopRequireDefault(__webpack_require__(/*! ./toggle-network */ "./src/app/actions/toggle-network.js"));

var _toggleOpacity = _interopRequireDefault(__webpack_require__(/*! ./toggle-opacity */ "./src/app/actions/toggle-opacity.js"));

var _toggleComponentsEnabled = _interopRequireDefault(__webpack_require__(/*! ./toggle-components-enabled */ "./src/app/actions/toggle-components-enabled.js"));

var _toggleRulers = _interopRequireDefault(__webpack_require__(/*! ./toggle-rulers */ "./src/app/actions/toggle-rulers.js"));

var _toggleSearch = _interopRequireDefault(__webpack_require__(/*! ./toggle-search */ "./src/app/actions/toggle-search.js"));

var _toggleTheme = _interopRequireDefault(__webpack_require__(/*! ./toggle-theme */ "./src/app/actions/toggle-theme.js"));

var _windowResize = _interopRequireDefault(__webpack_require__(/*! ./window-resize */ "./src/app/actions/window-resize.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./src/app/actions/listen.js":
/*!***********************************!*\
  !*** ./src/app/actions/listen.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _url = _interopRequireDefault(__webpack_require__(/*! url */ "../../node_modules/url/url.js"));

var _websocketClient = __webpack_require__(/*! @patternplate/websocket-client */ "../websocket-client/index.js");

var _arson = _interopRequireDefault(__webpack_require__(/*! arson */ "../../node_modules/arson/index.js"));

var _promiseThunkAction = __webpack_require__(/*! ./promise-thunk-action */ "./src/app/actions/promise-thunk-action.js");

var _loadPatternDemo = _interopRequireDefault(__webpack_require__(/*! ./load-pattern-demo */ "./src/app/actions/load-pattern-demo.js"));

var _loadSchema = _interopRequireDefault(__webpack_require__(/*! ./load-schema */ "./src/app/actions/load-schema.js"));

var _pool = __webpack_require__(/*! ../selectors/pool */ "./src/app/selectors/pool.js");

var _ = __webpack_require__(/*! ./ */ "./src/app/actions/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = (0, _promiseThunkAction.createPromiseThunkAction)("LISTEN", function (payload, dispatch, getState) {
  var _global = global,
      WebSocket = _global.WebSocket;

  if (!WebSocket) {
    return;
  }

  var state = getState();
  window.addEventListener("message", function (envelope) {
    if (typeof envelope.data !== "string") {
      return;
    }

    if (envelope.data.indexOf("[iFrameSizer]") === 0) {
      return;
    }

    var message = safeParse(envelope.data);

    if (message.type === "navigate") {
      dispatch((0, _.patchLocation)({
        pathname: [message.itemType, message.id].join("/")
      }));
    }
  });

  if (state.isStatic) {
    return;
  }

  var source = _url.default.resolve(state.base, payload.url);

  var ws = new _websocketClient.WebSocketClient({
    src: "ws://".concat(global.location.host).concat(source, "/"),
    reconnect: true,
    interval: 1000
  });
  ws.open();
  ws.onOpen(function () {
    return dispatch({
      type: "LISTEN_HEARTBEAT",
      payload: {}
    });
  });
  ws.onClose(function () {
    return dispatch({
      type: "ERROR_HEARTBEAT",
      payload: {}
    });
  });
  ws.onError(function () {
    return dispatch({
      type: "ERROR_HEARTBEAT",
      payload: {}
    });
  });
  ws.onMessage(
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(envelope) {
      var message, type, payload;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              message = _arson.default.parse(envelope.data);
              type = message.type, payload = message.payload;
              _context.t0 = type;
              _context.next = _context.t0 === "error" ? 5 : _context.t0 === "start" ? 6 : _context.t0 === "done" ? 8 : _context.t0 === "change" ? 9 : 10;
              break;

            case 5:
              return _context.abrupt("return", dispatch({
                type: "ERROR_HEARTBEAT",
                payload: payload
              }));

            case 6:
              dispatch((0, _loadSchema.default)()); // TODO: only reload pattern if the current pattern is affected

              return _context.abrupt("return", dispatch((0, _loadPatternDemo.default)({
                force: false
              })));

            case 8:
              return _context.abrupt("return", dispatch({
                type: "LISTEN_HEARTBEAT",
                payload: {}
              }));

            case 9:
              return _context.abrupt("return", dispatch((0, _loadSchema.default)()));

            case 10:
              throw new TypeError("Received unknown message of type ".concat(type));

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
});

exports.default = _default;

function safeParse(data) {
  try {
    return JSON.parse(data);
  } catch (err) {
    return {};
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/app/actions/load-pattern-demo.js":
/*!**********************************************!*\
  !*** ./src/app/actions/load-pattern-demo.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isomorphicFetch = _interopRequireDefault(__webpack_require__(/*! isomorphic-fetch */ "../../node_modules/isomorphic-fetch/fetch-npm-browserify.js"));

var demo = _interopRequireWildcard(__webpack_require__(/*! ../selectors/demo */ "./src/app/selectors/demo.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = function _default(payload) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(dispatch, getState) {
        var getSrc, uri, response, body;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                getSrc = src(getState);
                uri = getSrc();

                if (uri) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return");

              case 4:
                dispatch({
                  type: "LOAD_PATTERN_DEMO_START",
                  payload: {
                    id: uri
                  }
                });
                _context.next = 7;
                return (0, _isomorphicFetch.default)(uri, {
                  headers: {
                    Accept: "text/html"
                  }
                });

              case 7:
                response = _context.sent;

                if (!(uri !== getSrc())) {
                  _context.next = 10;
                  break;
                }

                return _context.abrupt("return");

              case 10:
                _context.next = 12;
                return response.text();

              case 12:
                body = _context.sent;

                if (!(uri !== getSrc())) {
                  _context.next = 15;
                  break;
                }

                return _context.abrupt("return");

              case 15:
                if (!(response.status >= 400)) {
                  _context.next = 17;
                  break;
                }

                return _context.abrupt("return", dispatch({
                  type: "LOAD_PATTERN_DEMO_ERROR",
                  payload: {
                    id: uri,
                    error: body
                  }
                }));

              case 17:
                dispatch({
                  type: "LOAD_PATTERN_DEMO_SUCCESS",
                  payload: {
                    id: uri,
                    contents: body,
                    force: payload.force
                  }
                });

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};

exports.default = _default;

function src(getState) {
  return function () {
    return demo.selectSrc(getState());
  };
}

/***/ }),

/***/ "./src/app/actions/load-schema.js":
/*!****************************************!*\
  !*** ./src/app/actions/load-schema.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _url = _interopRequireDefault(__webpack_require__(/*! url */ "../../node_modules/url/url.js"));

var _promiseThunkAction = __webpack_require__(/*! ./promise-thunk-action */ "./src/app/actions/promise-thunk-action.js");

var _fetch = _interopRequireDefault(__webpack_require__(/*! ../utils/fetch */ "./src/app/utils/fetch.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = (0, _promiseThunkAction.createPromiseThunkAction)("LOAD_SCHEMA",
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_, __, getState) {
    var response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _fetch.default)("".concat(prefix(getState().base), "/api/state.json"));

          case 2:
            response = _context.sent;
            return _context.abrupt("return", response.json());

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());

exports.default = _default;

function prefix(base) {
  return base.charAt(base.length - 1) === "/" ? base.slice(0, base.length - 1) : base;
}

/***/ }),

/***/ "./src/app/actions/mark-block.js":
/*!***************************************!*\
  !*** ./src/app/actions/mark-block.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reduxActions = __webpack_require__(/*! redux-actions */ "../../node_modules/redux-actions/lib/index.js");

var _default = (0, _reduxActions.createAction)("MARK_BLOCK");

exports.default = _default;

/***/ }),

/***/ "./src/app/actions/open-documentation.js":
/*!***********************************************!*\
  !*** ./src/app/actions/open-documentation.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.type = exports.default = void 0;

var _ = __webpack_require__(/*! ./ */ "./src/app/actions/index.js");

var _default = openDocumentation;
exports.default = _default;
var type = "OPEN_DOCUMENTATION";
exports.type = type;

function openDocumentation() {
  return function (dispatch, getState) {
    var state = getState();
    var pathname = state.base;
    dispatch((0, _.patchLocation)({
      pathname: pathname
    }));
  };
}

openDocumentation.key = "";
openDocumentation.property = "";
openDocumentation.type = type;

/***/ }),

/***/ "./src/app/actions/open-fullscreen.js":
/*!********************************************!*\
  !*** ./src/app/actions/open-fullscreen.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.type = exports.default = void 0;

var _urlQuery = _interopRequireDefault(__webpack_require__(/*! ../utils/url-query */ "./src/app/utils/url-query.js"));

var _item = __webpack_require__(/*! ../selectors/item */ "./src/app/selectors/item.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = openFullscreen;
exports.default = _default;
var type = "OPEN_FULLSCREEN";
exports.type = type;

function openFullscreen() {
  return function (dispatch, getState) {
    if (!global.open) {
      return;
    }

    var state = getState();
    var contentType = (0, _item.selectContentType)(state);

    if (contentType !== "pattern") {
      return;
    }

    var id = (0, _item.selectId)(state);

    if (!id) {
      return;
    }

    var href = _urlQuery.default.format({
      pathname: "".concat(state.base, "api/demo/").concat(id, ".html")
    });

    global.open(href, "_blank");
  };
}

openFullscreen.key = "";
openFullscreen.property = "";
openFullscreen.type = type;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/app/actions/patch-location.js":
/*!*******************************************!*\
  !*** ./src/app/actions/patch-location.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.type = exports.default = void 0;

var _lodash = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");

var _reactRouterRedux = __webpack_require__(/*! react-router-redux */ "../../node_modules/react-router-redux/lib/index.js");

var _url = _interopRequireDefault(__webpack_require__(/*! url */ "../../node_modules/url/url.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = patchLocation;
exports.default = _default;
var type = "PATCH_LOCATION";
exports.type = type;

function patchLocation(payload) {
  return function (dispatch, getState) {
    var state = getState();
    var location = state.routing.locationBeforeTransitions;

    if (payload.hasOwnProperty("pathname")) {
      payload.pathname = payload.pathname.indexOf(state.base) === 0 ? payload.pathname : "".concat(prefix(state.base), "/").concat(payload.pathname);
    }

    dispatch((0, _reactRouterRedux.push)((0, _lodash.merge)({}, location, payload)));
  };
}

patchLocation.type = type;

function prefix(base) {
  return base.charAt(base.length - 1) === "/" ? base.slice(0, base.length - 1) : base;
}

/***/ }),

/***/ "./src/app/actions/promise-thunk-action.js":
/*!*************************************************!*\
  !*** ./src/app/actions/promise-thunk-action.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPromiseThunkAction = createPromiseThunkAction;
exports.handlePromiseThunkAction = handlePromiseThunkAction;

var _reduxActions = __webpack_require__(/*! redux-actions */ "../../node_modules/redux-actions/lib/index.js");

var _handleDependentActions = _interopRequireDefault(__webpack_require__(/*! ./handle-dependent-actions */ "./src/app/actions/handle-dependent-actions.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var ident = function ident(i) {
  return i;
};

var asyncIdent =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(i) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", i);

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function asyncIdent(_x) {
    return _ref.apply(this, arguments);
  };
}();

function createPromiseThunkAction(name, rawCreator) {
  var creator = rawCreator || asyncIdent;

  var fn = function fn(payload) {
    var delayedAction = (0, _reduxActions.createAction)("".concat(name, "_DELAYED"));
    var successAction = (0, _reduxActions.createAction)("".concat(name, "_SUCCESS"));
    var startAction = (0, _reduxActions.createAction)("".concat(name, "_START"));
    var throwsAction = (0, _reduxActions.createAction)("".concat(name, "_THROWS"));
    return (
      /*#__PURE__*/
      function () {
        var _ref2 = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2(dispatch, getState) {
          var delayedTimer, result;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  dispatch(startAction(payload, ident, getState));
                  delayedTimer = global.setTimeout(function () {
                    dispatch(delayedAction(payload, ident, getState));
                  }, 1000);
                  _context2.prev = 2;
                  _context2.next = 5;
                  return Promise.resolve(creator(payload, dispatch, getState));

                case 5:
                  result = _context2.sent;
                  global.clearTimeout(delayedTimer);
                  dispatch(successAction(result));
                  return _context2.abrupt("return", result);

                case 11:
                  _context2.prev = 11;
                  _context2.t0 = _context2["catch"](2);
                  console.error(_context2.t0);
                  global.clearTimeout(delayedTimer);
                  dispatch(throwsAction(_context2.t0));
                  return _context2.abrupt("return", _context2.t0);

                case 17:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this, [[2, 11]]);
        }));

        return function (_x2, _x3) {
          return _ref2.apply(this, arguments);
        };
      }()
    );
  };

  fn.__name = name;
  return fn;
}

function handlePromiseThunkAction(rawName, handler) {
  var _handleDependentActio;

  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var name = rawName.__name || rawName;
  options.dependencies = options.dependencies || [];
  var reducer = (0, _handleDependentActions.default)((_handleDependentActio = {}, _defineProperty(_handleDependentActio, "".concat(name, "_START"), handler.start || ident), _defineProperty(_handleDependentActio, "".concat(name, "_DELAYED"), handler.delayed || ident), _defineProperty(_handleDependentActio, "".concat(name, "_SUCCESS"), handler.success || ident), _defineProperty(_handleDependentActio, "".concat(name, "_THROWS"), handler.throws || ident), _handleDependentActio), options);
  return reducer;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/app/actions/reload.js":
/*!***********************************!*\
  !*** ./src/app/actions/reload.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = __webpack_require__(/*! ./ */ "./src/app/actions/index.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = reload;
exports.default = _default;

function reload() {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(dispatch) {
        var actions;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                actions = [
                /*#__PURE__*/
                _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee() {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.t0 = dispatch;
                          _context.next = 3;
                          return Promise.resolve((0, _.loadSchema)());

                        case 3:
                          _context.t1 = _context.sent;
                          return _context.abrupt("return", (0, _context.t0)(_context.t1));

                        case 5:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, this);
                })), (0, _.loadPatternDemo)({
                  force: true
                })];
                _context2.next = 3;
                return Promise.all(actions.map(dispatch));

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
}

reload.type = "RELOAD";
reload.key = "";
reload.property = "";

/***/ }),

/***/ "./src/app/actions/resize-demo.js":
/*!****************************************!*\
  !*** ./src/app/actions/resize-demo.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.type = exports.default = void 0;

var _ = __webpack_require__(/*! ./ */ "./src/app/actions/index.js");

var _default = resizeDemo;
exports.default = _default;
var type = "RESIZE_DEMO";
exports.type = type;

function resizeDemo(payload) {
  return function (dispatch) {
    dispatch((0, _.patchLocation)({
      query: {
        width: payload.x,
        height: payload.y
      }
    }));
  };
}

resizeDemo.type = type;

/***/ }),

/***/ "./src/app/actions/scroll-demo.js":
/*!****************************************!*\
  !*** ./src/app/actions/scroll-demo.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.type = exports.default = void 0;
var _default = scrollDemo;
exports.default = _default;
var type = "SCROLL_DEMO";
exports.type = type;
var loop;
var frame;

function scrollDemo(payload) {
  return function (dispatch, getState) {
    function run() {
      loop = global.requestAnimationFrame(function () {
        var state = getState();

        if (state.scrollDemoX.x !== frame.x) {
          dispatch({
            type: "SCROLL_DEMO_X",
            payload: frame.x
          });
        }

        if (state.scrollDemoY.y !== frame.y) {
          dispatch({
            type: "SCROLL_DEMO_Y",
            payload: frame.y
          });
        }

        run();
      });
    }

    if (!loop) {
      run();
    }

    frame = payload;
  };
}

scrollDemo.type = type;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/app/actions/scroll-to.js":
/*!**************************************!*\
  !*** ./src/app/actions/scroll-to.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.type = exports.default = void 0;

var _scrollparent = _interopRequireDefault(__webpack_require__(/*! scrollparent */ "../../node_modules/scrollparent/scrollparent.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = scrollTo;
exports.default = _default;
var type = "SCROLL_TO";
exports.type = type;

var NOOP = function NOOP() {};

function scrollTo(to) {
  var _global = global,
      document = _global.document;

  if (!document) {
    return NOOP;
  }

  var target = getTarget(to);

  if (!target) {
    return NOOP;
  }

  var parent = (0, _scrollparent.default)(target);

  if (!parent) {
    return NOOP;
  }

  parent.scrollTop = target.offsetParent.offsetTop;
  return function (dispatch) {
    dispatch({
      type: "SCROLLED_TO",
      payload: to
    });
  };
}

function getTarget(to) {
  if (typeof to === "string") {
    return document.getElementById(to);
  }

  return to;
}

scrollTo.type = type;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/app/actions/search-preview.js":
/*!*******************************************!*\
  !*** ./src/app/actions/search-preview.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.type = exports.default = void 0;

var _ = __webpack_require__(/*! ./ */ "./src/app/actions/index.js");

var _default = searchPreview;
exports.default = _default;
var type = "SEARCH_PREVIEW";
exports.type = type;
var MOVEMENTS = {
  up: -1,
  down: 1
};

function searchPreview(payload) {
  if (typeof payload === "number") {
    return function (dispatch) {
      dispatch((0, _.patchLocation)({
        query: {
          "search-preview": payload
        }
      }));
    };
  }

  return function (dispatch, getState) {
    var state = getState();
    var delta = MOVEMENTS[payload] || 0;
    dispatch((0, _.patchLocation)({
      query: {
        "search-preview": state.searchPreview + delta
      }
    }));
  };
}

searchPreview.type = type;

/***/ }),

/***/ "./src/app/actions/search.js":
/*!***********************************!*\
  !*** ./src/app/actions/search.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.type = exports.default = void 0;

var _raf = _interopRequireDefault(__webpack_require__(/*! raf */ "../../node_modules/raf/index.js"));

var _ = __webpack_require__(/*! ./ */ "./src/app/actions/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = search;
exports.default = _default;
var type = "SEARCH";
exports.type = type;

function search(payload) {
  return function (dispatch, getState) {
    var state = getState();
    dispatch({
      type: "SET_SEARCH",
      payload: payload.value
    });
    (0, _raf.default)(function () {
      if (payload.persist) {
        dispatch((0, _.patchLocation)({
          query: {
            search: payload.value,
            "search-preview": state.search === payload.value ? state.searchPreview : 0
          }
        }));
      } else if (payload.perform) {
        dispatch({
          type: "PERFORM_SEARCH",
          payload: payload.value
        });
      }
    });
  };
}

search.type = type;

/***/ }),

/***/ "./src/app/actions/theme-loaded.js":
/*!*****************************************!*\
  !*** ./src/app/actions/theme-loaded.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reduxActions = __webpack_require__(/*! redux-actions */ "../../node_modules/redux-actions/lib/index.js");

var _default = (0, _reduxActions.createAction)("THEME_LOADED");

exports.default = _default;

/***/ }),

/***/ "./src/app/actions/toggle-code.js":
/*!****************************************!*\
  !*** ./src/app/actions/toggle-code.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toggle = __webpack_require__(/*! ./toggle */ "./src/app/actions/toggle.js");

var _default = (0, _toggle.toggle)("code-enabled");

exports.default = _default;

/***/ }),

/***/ "./src/app/actions/toggle-components-enabled.js":
/*!******************************************************!*\
  !*** ./src/app/actions/toggle-components-enabled.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toggle = __webpack_require__(/*! ./toggle */ "./src/app/actions/toggle.js");

var _default = (0, _toggle.toggle)("components-enabled");

exports.default = _default;

/***/ }),

/***/ "./src/app/actions/toggle-console.js":
/*!*******************************************!*\
  !*** ./src/app/actions/toggle-console.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toggle = __webpack_require__(/*! ./toggle */ "./src/app/actions/toggle.js");

var _default = (0, _toggle.toggle)("console-enabled");

exports.default = _default;

/***/ }),

/***/ "./src/app/actions/toggle-dependencies.js":
/*!************************************************!*\
  !*** ./src/app/actions/toggle-dependencies.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toggle = __webpack_require__(/*! ./toggle */ "./src/app/actions/toggle.js");

var _default = (0, _toggle.toggle)("dependencies-enabled");

exports.default = _default;

/***/ }),

/***/ "./src/app/actions/toggle-dependents.js":
/*!**********************************************!*\
  !*** ./src/app/actions/toggle-dependents.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toggle = __webpack_require__(/*! ./toggle */ "./src/app/actions/toggle.js");

var _default = (0, _toggle.toggle)("dependents-enabled");

exports.default = _default;

/***/ }),

/***/ "./src/app/actions/toggle-doc.js":
/*!***************************************!*\
  !*** ./src/app/actions/toggle-doc.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toggle = __webpack_require__(/*! ./toggle */ "./src/app/actions/toggle.js");

var _default = (0, _toggle.toggle)("doc-enabled");

exports.default = _default;

/***/ }),

/***/ "./src/app/actions/toggle-hide.js":
/*!****************************************!*\
  !*** ./src/app/actions/toggle-hide.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toggle = __webpack_require__(/*! ./toggle */ "./src/app/actions/toggle.js");

var _default = (0, _toggle.toggle)("hide-enabled");

exports.default = _default;

/***/ }),

/***/ "./src/app/actions/toggle-info.js":
/*!****************************************!*\
  !*** ./src/app/actions/toggle-info.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toggle = __webpack_require__(/*! ./toggle */ "./src/app/actions/toggle.js");

var _default = (0, _toggle.toggle)("info-enabled");

exports.default = _default;

/***/ }),

/***/ "./src/app/actions/toggle-keyboard-shortcuts.js":
/*!******************************************************!*\
  !*** ./src/app/actions/toggle-keyboard-shortcuts.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toggle = __webpack_require__(/*! ./toggle */ "./src/app/actions/toggle.js");

var _default = (0, _toggle.toggle)("shortcuts");

exports.default = _default;

/***/ }),

/***/ "./src/app/actions/toggle-manifest.js":
/*!********************************************!*\
  !*** ./src/app/actions/toggle-manifest.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toggle = __webpack_require__(/*! ./toggle */ "./src/app/actions/toggle.js");

var _default = (0, _toggle.toggle)("manifest-enabled");

exports.default = _default;

/***/ }),

/***/ "./src/app/actions/toggle-navigation.js":
/*!**********************************************!*\
  !*** ./src/app/actions/toggle-navigation.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toggle = __webpack_require__(/*! ./toggle */ "./src/app/actions/toggle.js");

var _default = (0, _toggle.toggle)("navigation-enabled");

exports.default = _default;

/***/ }),

/***/ "./src/app/actions/toggle-network.js":
/*!*******************************************!*\
  !*** ./src/app/actions/toggle-network.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toggle = __webpack_require__(/*! ./toggle */ "./src/app/actions/toggle.js");

var _default = (0, _toggle.toggle)("network-enabled");

exports.default = _default;

/***/ }),

/***/ "./src/app/actions/toggle-opacity.js":
/*!*******************************************!*\
  !*** ./src/app/actions/toggle-opacity.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toggle = __webpack_require__(/*! ./toggle */ "./src/app/actions/toggle.js");

var _default = (0, _toggle.toggle)("opacity");

exports.default = _default;

/***/ }),

/***/ "./src/app/actions/toggle-rulers.js":
/*!******************************************!*\
  !*** ./src/app/actions/toggle-rulers.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toggle = __webpack_require__(/*! ./toggle */ "./src/app/actions/toggle.js");

var _default = (0, _toggle.toggle)("rulers");

exports.default = _default;

/***/ }),

/***/ "./src/app/actions/toggle-search.js":
/*!******************************************!*\
  !*** ./src/app/actions/toggle-search.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.type = exports.default = void 0;

var _ = __webpack_require__(/*! ./ */ "./src/app/actions/index.js");

var _default = toggleSearch;
exports.default = _default;
var type = "TOGGLE_SEARCH_ENABLED";
exports.type = type;

function toggleSearch() {
  var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function (dispatch, getState) {
    var state = getState();

    if (payload.sync) {
      focus(state.searchEnabled);
      return;
    }

    var next = "focus" in payload ? payload.focus : !state.searchEnabled;

    if (!next) {
      dispatch((0, _.search)({
        persist: true,
        value: value()
      }));
    }

    dispatch((0, _.patchLocation)({
      query: {
        "search-enabled": next,
        "search-preview": 0
      }
    }));
  };
}

toggleSearch.type = type;
toggleSearch.key = "search-enabled";
toggleSearch.property = "searchEnabled";

function focus(next) {
  if (!next) {
    return;
  }

  if (!("document" in global)) {
    return;
  }

  setTimeout(function () {
    var el = global.document.querySelector("input[data-search]");

    if (!el) {
      return;
    }

    if (global.document.activeElement !== el) {
      el.focus();
    }

    var range = el.value.length;
    el.setSelectionRange(range, range);
  }, 100);
}

function value() {
  if (!("document" in global)) {
    return;
  }

  var el = global.document.querySelector("input[data-search]");

  if (!el) {
    return;
  }

  return el.value;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/app/actions/toggle-theme.js":
/*!*****************************************!*\
  !*** ./src/app/actions/toggle-theme.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.type = exports.default = void 0;

var _ = __webpack_require__(/*! ./ */ "./src/app/actions/index.js");

var _default = toggleTheme;
exports.default = _default;
var type = "TOGGLE_THEME";
exports.type = type;

function toggleTheme(forced) {
  return function (dispatch, getState) {
    var theme = forced ? forced : getState().theme === "dark" ? "light" : "dark";
    dispatch((0, _.patchLocation)({
      query: {
        theme: theme
      }
    }));
  };
}

toggleTheme.type = type;

/***/ }),

/***/ "./src/app/actions/toggle.js":
/*!***********************************!*\
  !*** ./src/app/actions/toggle.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggle = toggle;

var _lodash = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");

var _ = __webpack_require__(/*! ./ */ "./src/app/actions/index.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function toggle(key) {
  var property = (0, _lodash.camelCase)(key);

  var fn = function fn() {
    var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return function (dispatch, getState) {
      var next = "forced" in payload ? payload.forced : !getState()[property];
      dispatch((0, _.patchLocation)({
        query: _defineProperty({}, key, next)
      }));
    };
  };

  fn.type = "TOGGLE_".concat((0, _lodash.snakeCase)(key).toUpperCase());
  fn.property = property;
  fn.key = key;
  return fn;
}

/***/ }),

/***/ "./src/app/actions/window-resize.js":
/*!******************************************!*\
  !*** ./src/app/actions/window-resize.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reduxActions = __webpack_require__(/*! redux-actions */ "../../node_modules/redux-actions/lib/index.js");

var _default = (0, _reduxActions.createAction)("WINDOW_RESIZE", function (_ref) {
  var width = _ref.width,
      height = _ref.height;
  return {
    width: width,
    height: height
  };
});

exports.default = _default;

/***/ }),

/***/ "./src/app/behaviours.js":
/*!*******************************!*\
  !*** ./src/app/behaviours.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mountable = mountable;
exports.skippable = skippable;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function mountable(Component) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(MountableComponent, _React$Component);

      function MountableComponent() {
        _classCallCheck(this, MountableComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(MountableComponent).apply(this, arguments));
      }

      _createClass(MountableComponent, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          if (typeof this.props.onMount === "function") {
            this.props.onMount();
          }
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props = this.props,
              onMount = _this$props.onMount,
              rest = _objectWithoutProperties(_this$props, ["onMount"]);

          return _react.default.createElement(Component, rest);
        }
      }]);

      return MountableComponent;
    }(_react.default.Component)
  );
}

function skippable(Component) {
  var prop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "active";
  return function (props) {
    return props[prop] === true ? _react.default.createElement(Component, props) : null;
  };
}

/***/ }),

/***/ "./src/app/client.js":
/*!***************************!*\
  !*** ./src/app/client.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));

var _reactDom = __webpack_require__(/*! react-dom */ "../../node_modules/react-dom/index.js");

var _reactRouter = __webpack_require__(/*! @marionebl/react-router */ "../../node_modules/@marionebl/react-router/lib/index.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");

var _reactRouterRedux = __webpack_require__(/*! react-router-redux */ "../../node_modules/react-router-redux/lib/index.js");

var _routes = _interopRequireDefault(__webpack_require__(/*! ./routes */ "./src/app/routes.js"));

var _store = _interopRequireDefault(__webpack_require__(/*! ./store */ "./src/app/store.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(data, el) {
  var store = (0, _store.default)(_reactRouter.browserHistory, data);
  var history = (0, _reactRouterRedux.syncHistoryWithStore)(_reactRouter.browserHistory, store);

  var router = _react.default.createElement(_reactRedux.Provider, {
    store: store
  }, _react.default.createElement(_reactRouter.Router, {
    history: history
  }, (0, _routes.default)(store)));

  return (0, _reactDom.hydrate)(router, el);
}

/***/ }),

/***/ "./src/app/components/common/toggle-button.js":
/*!****************************************************!*\
  !*** ./src/app/components/common/toggle-button.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));

var _components = __webpack_require__(/*! @patternplate/components */ "../components/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = ToggleButton;
exports.default = _default;

function ToggleButton(props) {
  var title = props.title || "".concat(props.shortcut.description(props), " ").concat(props.shortcut.toString());

  if (props.active === false) {
    return _react.default.createElement(StandIn, {
      className: props.className,
      title: title
    }, props.children);
  }

  return _react.default.createElement(_components.Link, {
    className: props.className,
    title: title,
    query: _defineProperty({}, props.shortcut.key, !props.enabled)
  }, props.children);
}

var StandIn = _components.styled.div.withConfig({
  displayName: "toggle-button__StandIn"
})(["font-size:0;line-height:0;"]);

/***/ }),

/***/ "./src/app/components/documentation.js":
/*!*********************************************!*\
  !*** ./src/app/components/documentation.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));

var _components = __webpack_require__(/*! @patternplate/components */ "../components/index.js");

var _reactDom = __webpack_require__(/*! react-dom */ "../../node_modules/react-dom/index.js");

var _reactHelmet = _interopRequireDefault(__webpack_require__(/*! react-helmet */ "../../node_modules/react-helmet/lib/Helmet.js"));

var _markdown = _interopRequireDefault(__webpack_require__(/*! ../containers/markdown */ "./src/app/containers/markdown.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Documentation =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Documentation, _React$Component);

  function Documentation() {
    _classCallCheck(this, Documentation);

    return _possibleConstructorReturn(this, _getPrototypeOf(Documentation).apply(this, arguments));
  }

  _createClass(Documentation, [{
    key: "componentWillUpdate",
    value: function componentWillUpdate(nextProps) {
      var props = this.props;
      var changed = props.location.pathname !== nextProps.location.pathname;

      if (changed && typeof props.requestScroll === "function") {
        props.requestScroll((0, _reactDom.findDOMNode)(this.ref));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var props = this.props;
      return _react.default.createElement(StyledDocumentation, {
        ref: function ref(_ref) {
          return _this.ref = _ref;
        }
      }, _react.default.createElement("div", {
        id: "doctop"
      }), _react.default.createElement(_reactHelmet.default, {
        title: props.displayName
      }), _react.default.createElement(_markdown.default, {
        linkable: true,
        source: props.doc
      }));
    }
  }]);

  return Documentation;
}(_react.default.Component);

exports.default = Documentation;

var StyledDocumentation = _components.styled.div.withConfig({
  displayName: "documentation__StyledDocumentation"
})(["box-sizing:border-box;margin:0 auto;width:100%;max-width:860px;padding:80px 15px 15px 15px;@media screen and (min-width:720px){padding:60px;}"]);

/***/ }),

/***/ "./src/app/components/favicon.js":
/*!***************************************!*\
  !*** ./src/app/components/favicon.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));

var _server = __webpack_require__(/*! react-dom/server */ "../../node_modules/react-dom/server.browser.js");

var _reactHelmet = _interopRequireDefault(__webpack_require__(/*! react-helmet */ "../../node_modules/react-helmet/lib/Helmet.js"));

var _components = __webpack_require__(/*! @patternplate/components */ "../components/index.js");

var _platform = _interopRequireDefault(__webpack_require__(/*! platform */ "../../node_modules/platform/platform.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var THEMES = (0, _components.themes)();
var SVG_FAVICON_SUPPORT = ["Firefox"];

var FavIcon =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FavIcon, _React$Component);

  function FavIcon() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, FavIcon);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FavIcon)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {};
    return _this;
  }

  _createClass(FavIcon, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (SVG_FAVICON_SUPPORT.indexOf(_platform.default.name) > -1) {
        return;
      }

      _components.svg.png(getSource(this.props)).then(function (pngHref) {
        return _this2.setState({
          pngHref: pngHref
        });
      }).catch(function (err) {
        console.error(err);

        _this2.setState({
          pngHref: null
        });
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(next) {
      var _this3 = this;

      if (SVG_FAVICON_SUPPORT.indexOf(_platform.default.name) > -1) {
        return;
      }

      _components.svg.png(getSource(next)).then(function (pngHref) {
        return _this3.setState({
          pngHref: pngHref
        });
      }).catch(function (err) {
        console.error(err);

        _this3.setState({
          pngHref: null
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var source = getSource(this.props);

      var svgHref = _components.svg.btoa(source);

      return _react.default.createElement(_reactHelmet.default, {
        link: _toConsumableArray(this.state.pngHref ? [{
          rel: "icon",
          href: this.state.pngHref,
          type: "image/png"
        }] : []).concat([{
          rel: "icon",
          href: svgHref,
          type: "image/svg+xml"
        }])
      });
    }
  }]);

  return FavIcon;
}(_react.default.Component);

var _default = (0, _components.styled)(FavIcon).withConfig({
  displayName: "favicon"
})(["width:100%;height:auto;stroke:", ";stroke-width:0;fill:", ";"], function (props) {
  return props.theme.colors.color;
}, function (props) {
  return props.theme.colors.color;
});

exports.default = _default;

function getSource(props) {
  if (!props.source) {
    return (0, _server.renderToStaticMarkup)(_react.default.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24"
    }, _react.default.createElement(_components.Symbol, {
      definition: _components.IconDefinitions.patternplate,
      emit: true,
      style: {
        fill: getFill(props)
      }
    })));
  }

  var _svg$purge = _components.svg.purge([_components.svg.parse(props.source)]),
      _svg$purge2 = _slicedToArray(_svg$purge, 1),
      purged = _svg$purge2[0];

  return _components.svg.stringify(purged);
}

function getFill(props) {
  if (props.error) {
    return THEMES.dark.error;
  }

  return THEMES.dark.active;
}

/***/ }),

/***/ "./src/app/components/indicator.js":
/*!*****************************************!*\
  !*** ./src/app/components/indicator.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));

var _components = __webpack_require__(/*! @patternplate/components */ "../components/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = Indicator;
exports.default = _default;

function Indicator(props) {
  return _react.default.createElement(StyledIndicator, {
    onClick: props.onClick,
    title: isValid(props.status) ? "Force sync ".concat(props.shortcut.toString()) : ""
  }, _react.default.createElement(StyledLabel, {
    size: "s",
    status: props.status
  }, getLabel(props)), _react.default.createElement(StyledDot, {
    status: props.status
  }));
}

var StyledDot = _components.styled.div.withConfig({
  displayName: "indicator__StyledDot"
})(["position:relative;flex-grow:0;flex-shrink:0;height:7.5px;width:7.5px;margin-right:5px;border-radius:50%;background:", ";transition:background 0.4s ease-in-out,opacity 0.5s ease-in;opacity:", ";cursor:", ";", ";"], function (props) {
  return props.status === "error" || props.status === "offline" ? "rgb(205, 63, 69)" : props.theme.colors.active;
}, function (props) {
  return props.status ? 1 : 0;
}, function (props) {
  return props.status ? "pointer" : "";
}, function (props) {
  return getGlow(props);
});

var StyledIndicator = _components.styled.div.withConfig({
  displayName: "indicator__StyledIndicator"
})(["display:flex;align-items:center;cursor:pointer;position:relative;"]);

var StyledLabel = (0, _components.styled)(_components.Text).withConfig({
  displayName: "indicator__StyledLabel"
})(["position:absolute;right:20px;color:", ";", ";"], function (props) {
  return props.theme.colors.color;
}, function (props) {
  return getOut(props);
});

function getGlow(props) {
  return "\n\t\t&::before {\n\t\t\tcontent: '';\n\t\t\tposition: absolute;\n\t\t\ttop: 50%;\n\t\t\tleft: 50%;\n\t\t\theight: 12px;\n\t\t\twidth: 12px;\n\t\t\tfilter: blur(3px);\n\t\t\tbackground: inherit;\n\t\t\ttransform: translate(-50%, -50%);\n\t\t\topacity: .6;\n\t\t\t".concat(getPulse(props), ";\n\t\t}\n\t");
}

var out = (0, _components.keyframes)(["to{opacity:0;}"]);

function getOut(props) {
  if (props.status !== "loaded") {
    return;
  }

  return (0, _components.css)(["animation:", " 1s 0.15s;animation-fill-mode:forwards;"], out);
}

function getLabel(props) {
  switch (props.status) {
    case "error":
      return "error";

    case "offline":
      return "offline";

    case "loaded":
      return "synced";

    case "loading":
      return "syncing";

    default:
      return "";
  }
}

var pulse = (0, _components.keyframes)(["from{opacity:.6;transform:translate(-50%,-50%) scale(1);}50%{opacity:0;transform:translate(-50%,-50%) scale(.75);}to{opacity:.6;transform:translate(-50%,-50%) scale(1);}"]);

function getPulse(props) {
  if (props.status !== "loading") {
    return;
  }

  return (0, _components.css)(["animation:", " 1s infinite;"], pulse);
}

function isValid(status) {
  return ["loading", "loaded"].includes(status);
}

/***/ }),

/***/ "./src/app/components/message.js":
/*!***************************************!*\
  !*** ./src/app/components/message.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));

var _components = __webpack_require__(/*! @patternplate/components */ "../components/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = Message;
exports.default = _default;

function Message(props) {
  return _react.default.createElement(StyledMessage, null, _react.default.createElement(StyledMessageContent, null, props.message, props.details && _react.default.createElement(StyledDetails, null, props.summary && _react.default.createElement(StyledSummary, null, props.summary), props.details)));
}

var StyledMessage = _components.styled.div.withConfig({
  displayName: "message__StyledMessage"
})(["background:", ";box-sizing:border-box;width:100%;padding:10px 20px;"], function (props) {
  return props.theme.colors.error;
});

var StyledMessageContent = _components.styled.pre.withConfig({
  displayName: "message__StyledMessageContent"
})(["color:#fff;max-height:calc(100vh - 160px);overflow:scroll;"]);

var StyledDetails = _components.styled.details.withConfig({
  displayName: "message__StyledDetails"
})(["margin:10px 0;"]);

var StyledSummary = _components.styled.summary.withConfig({
  displayName: "message__StyledSummary"
})(["outline:none;cursor:pointer;user-select:none;"]);

/***/ }),

/***/ "./src/app/components/outside.js":
/*!***************************************!*\
  !*** ./src/app/components/outside.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var ClickOutside =
/*#__PURE__*/
function (_Component) {
  _inherits(ClickOutside, _Component);

  function ClickOutside(props) {
    var _this;

    _classCallCheck(this, ClickOutside);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ClickOutside).call(this, props));
    _this.handle = _this.handle.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.getContainer = _this.getContainer.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(ClickOutside, [{
    key: "getContainer",
    value: function getContainer(ref) {
      this.container = ref;
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: this.props.className,
        ref: this.getContainer
      }, this.props.children);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      global.document.addEventListener("click", this.handle, true);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      global.document.removeEventListener("click", this.handle, true);
    }
  }, {
    key: "handle",
    value: function handle(e) {
      var props = this.props;
      var el = this.container;

      if (!el.contains(e.target)) {
        props.onClickOutside(e);
      }
    }
  }]);

  return ClickOutside;
}(_react.Component);

exports.default = ClickOutside;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/app/components/pattern/index.js":
/*!*********************************************!*\
  !*** ./src/app/components/pattern/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, Buffer) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));

var _reactHelmet = _interopRequireDefault(__webpack_require__(/*! react-helmet */ "../../node_modules/react-helmet/lib/Helmet.js"));

var _components = __webpack_require__(/*! @patternplate/components */ "../components/index.js");

var _tagHoc = _interopRequireDefault(__webpack_require__(/*! tag-hoc */ "../../node_modules/tag-hoc/dist/tag.js"));

var _Transition = _interopRequireDefault(__webpack_require__(/*! react-transition-group/Transition */ "../../node_modules/react-transition-group/Transition.js"));

var _patternDemo = _interopRequireDefault(__webpack_require__(/*! ./pattern-demo */ "./src/app/components/pattern/pattern-demo.js"));

var _patternSheet = _interopRequireDefault(__webpack_require__(/*! ./pattern-sheet */ "./src/app/components/pattern/pattern-sheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var btoa = global.btoa ? global.btoa : function (input) {
  return Buffer.from(input).toString('base64');
};

var VISIBILITY = function VISIBILITY(props) {
  return props.checkers ? "block" : "none";
};

var CROSSES = function CROSSES(props) {
  return btoa("\n<svg width=\"20\" height=\"20\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path stroke-width=\"1\" stroke=\"#f2f2f2\" fill=\"none\" d=\"M10 6v8M6 10h8\"/>\n</svg>\n");
};

var PAD = function PAD(props) {
  return props.padded ? 50 : 0;
};

var OFF = function OFF(props) {
  return props.navigationEnabled ? 300 : 0;
};

var OFFSET = function OFFSET(props) {
  return PAD(props) + OFF(props);
};

var StyledPattern = (0, _components.styled)((0, _tagHoc.default)(["checkers", "navigationEnabled", "padded"])("div")).withConfig({
  displayName: "pattern__StyledPattern"
})(["position:fixed;width:calc(100% - ", "px);top:", "px;left:", "px;right:", "px;bottom:", "px;box-sizing:border-box;height:100%;&::before{content:\"\";display:", ";position:absolute;z-index:1;top:0;right:0;bottom:0;left:0;width:100%;height:100%;background-image:url(\"data:image/svg+xml;base64,", "\");background-size:20px 20px;background-repeat:repeat;background-position:50% 50%;}"], function (props) {
  return OFFSET(props) + PAD(props);
}, PAD, function (props) {
  return OFFSET(props);
}, PAD, PAD, VISIBILITY, CROSSES);

var StyledPatternFolder = _components.styled.div.withConfig({
  displayName: "pattern__StyledPatternFolder"
})(["height:100%;width:100%;"]);

var StyledPatternDoc = _components.styled.div.withConfig({
  displayName: "pattern__StyledPatternDoc"
})(["width:100%;max-width:800px;margin:0 auto;padding:30px;box-sizing:border-box;"]);

var StyledPatternDemo = _components.styled.div.withConfig({
  displayName: "pattern__StyledPatternDemo"
})(["position:relative;z-index:2;width:100%;height:100%;max-width:1920px;margin:0 auto;"]);

var StyledPatternLoader = _components.styled.div.withConfig({
  displayName: "pattern__StyledPatternLoader"
})(["position:absolute;z-index:3;top:0;right:0;left:0;height:3px;", " &::after{position:absolute;top:0;z-index:2;content:\"\";display:block;width:100%;height:100%;background:", ";opacity:1;transition:", ";", ";}"], function (props) {
  return props.hidden ? 'display: none;' : '';
}, function (props) {
  return props.error ? props.theme.colors.error : props.theme.colors.active;
}, function (props) {
  return props.error ? "none" : "transform 1s ease-in-out";
}, function (props) {
  switch (props.status) {
    case "entering":
      return "\n            transform: translateX(-100%);\n          ";

    case "entered":
      return "".concat(function (props) {
        return props.error ? "" : "transform: translateX(-15%);";
      });

    case "exiting":
      return "\n            transition: transform .3s ease-out;\n            transform: translateX(0);\n          ";

    case "exited":
    default:
      return "\n            transform: translateX(-100%);\n            transition: opacity .3s .25s ease-out;\n          ";
  }
});

var PatternContainer = _components.styled.div.withConfig({
  displayName: "pattern__PatternContainer"
})(["height:100%;padding-left:", "px;"], function (props) {
  return props.navigationEnabled ? 0 : 60;
});

var Pattern =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Pattern, _React$Component);

  function Pattern() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Pattern);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Pattern)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      srcdoc: false
    };
    return _this;
  }

  _createClass(Pattern, [{
    key: "render",
    value: function render() {
      var props = this.props;

      if (props.contentType !== "pattern") {
        return null;
      }

      if (props.type === "folder") {
        return _react.default.createElement(StyledPatternFolder, null, _react.default.createElement(StyledPatternDoc, null, _react.default.createElement(_components.Markdown, {
          source: props.docs
        })));
      }

      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(StyledPattern, {
        padded: props.screenshot,
        checkers: props.opacity,
        navigationEnabled: props.navigationEnabled
      }, _react.default.createElement(_reactHelmet.default, {
        title: [getPrefix(props), props.displayName].filter(Boolean).join(": ")
      }), _react.default.createElement(_Transition.default, {
        in: props.loading || props.error,
        timeout: {
          enter: 1000,
          exit: 850
        }
      }, function (status) {
        return _react.default.createElement(StyledPatternLoader, {
          hidden: props.screenshot,
          status: status,
          error: props.error
        });
      }), _react.default.createElement(StyledPatternDemo, null, _react.default.createElement(PatternContainer, {
        navigationEnabled: props.navigationEnabled
      }, _react.default.createElement(_patternDemo.default, {
        src: props.src,
        contents: props.contents,
        loading: props.loading,
        updated: props.updated
      })))), _react.default.createElement(_patternSheet.default, null));
    }
  }]);

  return Pattern;
}(_react.default.Component);

exports.default = Pattern;

function getPrefix(props) {
  if (props.loading) {
    return "Load";
  }

  if (props.error) {
    return "Error";
  }

  return "";
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../../../../../node_modules/buffer/index.js */ "../../node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./src/app/components/pattern/pattern-demo.js":
/*!****************************************************!*\
  !*** ./src/app/components/pattern/pattern-demo.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));

var _components = __webpack_require__(/*! @patternplate/components */ "../components/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledDemo = _components.styled.iframe.withConfig({
  displayName: "pattern-demo__StyledDemo"
})(["width:100%;height:calc(100% - 30vh);border:0;"]);

function PatternDemo(props) {
  var src = typeof props.updated === "number" ? "".concat(props.src, "?reload=").concat(props.updated) : props.src;
  return _react.default.createElement(StyledDemo, {
    src: src,
    referrerpolicy: "no-referrer"
  });
}

var _default = PatternDemo;
exports.default = _default;

/***/ }),

/***/ "./src/app/components/pattern/pattern-sheet.js":
/*!*****************************************************!*\
  !*** ./src/app/components/pattern/pattern-sheet.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));

var _remark = _interopRequireDefault(__webpack_require__(/*! remark */ "./node_modules/remark/index.js"));

var _remarkGemojiToEmoji = _interopRequireDefault(__webpack_require__(/*! remark-gemoji-to-emoji */ "../../node_modules/remark-gemoji-to-emoji/index.js"));

var _components = __webpack_require__(/*! @patternplate/components */ "../components/index.js");

var item = _interopRequireWildcard(__webpack_require__(/*! ../../selectors/item */ "./src/app/selectors/item.js"));

var _triggerFullscreen = _interopRequireDefault(__webpack_require__(/*! ../../containers/trigger-fullscreen */ "./src/app/containers/trigger-fullscreen.js"));

var _toggleOpacity = _interopRequireDefault(__webpack_require__(/*! ../../containers/toggle-opacity */ "./src/app/containers/toggle-opacity.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var processor = (0, _remark.default)().use(_remarkGemojiToEmoji.default);

var _default = (0, _reactRedux.connect)(mapProps)(PatternSheet);

exports.default = _default;

function PatternSheet(props) {
  return _react.default.createElement(StyledPatternSheet, {
    screenshot: props.screenshot
  }, _react.default.createElement(StyledPatternSheetContainer, null, _react.default.createElement(StyledControlsBox, null, _react.default.createElement(StyledName, null, props.name, _react.default.createElement(StyledVersion, null, "@", props.version)), _react.default.createElement(_components.ThemeProvider, {
    theme: (0, _components.themes)().dark
  }, _react.default.createElement(StyledControlsArea, {
    orient: "right"
  }, _react.default.createElement(StyledControlsItem, null, _react.default.createElement(_toggleOpacity.default, null)), _react.default.createElement(StyledControlsItem, null, _react.default.createElement(_triggerFullscreen.default, null))))), props.description && _react.default.createElement(StyledDescription, null, processor.processSync(props.description).contents), _react.default.createElement(StyledBoxLine, null, _react.default.createElement(SearchTrigger, {
    field: "flag",
    search: props.flag
  }, _react.default.createElement(_components.Flag, null, props.flag)), _react.default.createElement(StyledTagList, null, props.tags.map(function (tag, index) {
    return _react.default.createElement(SearchTrigger, {
      key: "".concat(tag, "-").concat(index),
      field: "tags",
      search: tag
    }, _react.default.createElement(_components.Tag, null, tag));
  }))), typeof props.doc === "string" && _react.default.createElement(StyledMarkdownBox, null, _react.default.createElement(_components.Markdown, {
    linkable: true,
    source: props.doc
  }))));
}

var StyledSearchTrigger = _components.styled.span.withConfig({
  displayName: "pattern-sheet__StyledSearchTrigger"
})(["&:not(:first-child){margin-left:10px;}"]);

var StyledLink = (0, _components.styled)(_components.Link).withConfig({
  displayName: "pattern-sheet__StyledLink"
})(["text-decoration:none;"]);

function SearchTrigger(props) {
  return _react.default.createElement(StyledSearchTrigger, null, _react.default.createElement(StyledLink, {
    className: props.className,
    query: {
      "search-enabled": true,
      search: "".concat(props.field, "=").concat(props.search)
    },
    title: "Search other patterns with ".concat(props.field, " \"").concat(props.search, "\"")
  }, props.children));
}

function mapProps(state) {
  return {
    doc: item.selectContents(state),
    description: item.selectDescription(state),
    id: state.id,
    icon: item.selectIcon(state),
    type: item.selectType(state),
    name: item.selectName(state),
    flag: item.selectFlag(state),
    tags: item.selectTags(state),
    version: item.selectVersion(state),
    screenshot: state.routing.locationBeforeTransitions.query.screenshot === "true"
  };
}

var TOOLBAR_HEIGHT = 60;
var StyledName = (0, _components.styled)(function (props) {
  return _react.default.createElement(_components.Headline, _extends({}, props, {
    is: "h1",
    order: 1
  }));
}).withConfig({
  displayName: "pattern-sheet__StyledName"
})(["margin:0 0 10px 0;"]);
var StyledVersion = (0, _components.styled)(function (props) {
  return _react.default.createElement(_components.Headline, _extends({}, props, {
    is: "small",
    order: 3
  }));
}).withConfig({
  displayName: "pattern-sheet__StyledVersion"
})(["display:inline-block;color:", ";margin:0;"], function (props) {
  return props.theme.colors.color;
});
var StyledDescription = (0, _components.styled)(_components.Text).withConfig({
  displayName: "pattern-sheet__StyledDescription"
})(["color:", ";margin-bottom:20px;"], function (props) {
  return props.theme.colors.recess;
});

var StyledPatternSheet = _components.styled.div.withConfig({
  displayName: "pattern-sheet__StyledPatternSheet"
})(["position:relative;z-index:2;box-sizing:border-box;width:100%;min-height:30vh;margin-top:70vh;padding:30px 60px;border-top:1px solid ", ";background:", ";"], function (props) {
  return props.theme.colors.border;
}, function (props) {
  return props.theme.colors.background;
});

var ORIENTATION = function ORIENTATION(props) {
  var direction = props.orient === "right" ? "left" : "right";
  return "margin-".concat(direction, ": auto");
};

var StyledPatternSheetContainer = _components.styled.div.withConfig({
  displayName: "pattern-sheet__StyledPatternSheetContainer"
})(["margin:0 auto;max-width:1240px;"]);

var StyledControlsArea = _components.styled.div.withConfig({
  displayName: "pattern-sheet__StyledControlsArea"
})(["display:flex;", ";"], ORIENTATION);

var StyledControlsBox = _components.styled.div.withConfig({
  displayName: "pattern-sheet__StyledControlsBox"
})(["display:flex;align-items:center;flex:0 0 auto;position:relative;z-index:2;box-sizing:border-box;background:white;"]);

var StyledControlsItem = _components.styled.div.withConfig({
  displayName: "pattern-sheet__StyledControlsItem"
})(["& + &{padding-left:10px;}"]);

var StyledTagList = _components.styled.div.withConfig({
  displayName: "pattern-sheet__StyledTagList"
})(["display:inline-block;margin-left:10px;padding:2px 10px;border-left:1px solid ", ";"], function (props) {
  return props.theme.colors.border;
});

var StyledBoxLine = _components.styled.div.withConfig({
  displayName: "pattern-sheet__StyledBoxLine"
})(["display:flex;align-items:center;min-height:32px;"]);

var StyledMarkdownBox = _components.styled.div.withConfig({
  displayName: "pattern-sheet__StyledMarkdownBox"
})(["margin-top:30px;"]);

/***/ }),

/***/ "./src/app/components/search-field.js":
/*!********************************************!*\
  !*** ./src/app/components/search-field.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));

var _lodash = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");

var _components = __webpack_require__(/*! @patternplate/components */ "../components/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var SearchField =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SearchField, _React$Component);

  function SearchField() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SearchField);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SearchField)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleKeyDown = _this.handleKeyDown.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleStop = (0, _lodash.debounce)(_this.props.onStop, 300, {
      trailing: true
    });
    _this.timer = null;
    return _this;
  }

  _createClass(SearchField, [{
    key: "handleChange",
    value: function handleChange(e) {
      e.persist();
      this.props.onChange(e);
      this.handleStop(e);
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(e) {
      var target = e.target;
      var hasValue = target.value.length > 0;
      var atEnd = hasValue && target.selectionStart === target.value.length;

      if (e.which === 32 && e.altKey && e.ctrlKey) {
        e.preventDefault();
        this.props.onClose();
      }

      if (e.which !== 27) {
        e.stopPropagation();
      }

      if (e.which === 27 && hasValue) {
        e.preventDefault();
        this.props.onClear();
      }

      if (e.which === 38) {
        this.props.onUp(e);
      }

      if (e.which === 39 && atEnd && this.props.suggestion) {
        e.preventDefault();
        this.props.onComplete(this.props.suggestion);
      }

      if (e.which === 40 && atEnd) {
        e.preventDefault();
        this.props.onDown(e);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var props = this.props;
      return _react.default.createElement(_components.SearchField, {
        autoFocus: props.autoFocus,
        name: props.name,
        onBlur: props.onBlur,
        onChange: this.handleChange,
        onFocus: props.onFocus,
        onKeyDown: this.handleKeyDown,
        placeholder: props.placeholder,
        suggestion: props.suggestion,
        title: props.title,
        value: props.value,
        "data-search": props.mark
      }, props.children);
    }
  }]);

  return SearchField;
}(_react.default.Component);

SearchField.defaultProps = {
  blur: function blur() {},
  onChange: function onChange() {},
  onFocus: function onFocus() {},
  onUp: function onUp() {},
  onDown: function onDown() {},
  onBlur: function onBlur() {},
  onStop: function onStop() {},
  value: ""
};
var _default = SearchField;
exports.default = _default;

/***/ }),

/***/ "./src/app/components/search.js":
/*!**************************************!*\
  !*** ./src/app/components/search.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _url = _interopRequireDefault(__webpack_require__(/*! url */ "../../node_modules/url/url.js"));

var _lodash = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));

var _components = __webpack_require__(/*! @patternplate/components */ "../components/index.js");

var _tagHoc = _interopRequireDefault(__webpack_require__(/*! tag-hoc */ "../../node_modules/tag-hoc/dist/tag.js"));

var _outside = _interopRequireDefault(__webpack_require__(/*! ./outside */ "./src/app/components/outside.js"));

var _searchField = _interopRequireDefault(__webpack_require__(/*! ./search-field */ "./src/app/components/search-field.js"));

var _withToggleStates = _interopRequireDefault(__webpack_require__(/*! ../connectors/with-toggle-states */ "./src/app/connectors/with-toggle-states.js"));

var _passThrough = _interopRequireDefault(__webpack_require__(/*! ../containers/pass-through */ "./src/app/containers/pass-through.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var InfoPane = (0, _withToggleStates.default)(_components.InnerInfoPane);
var SearchComponent = _components.Search.Search,
    SearchResult = _components.Search.SearchResult,
    SearchResultList = _components.Search.SearchResultList,
    SearchResultHeading = _components.Search.SearchResultHeading,
    SearchResultPreview = _components.Search.SearchResultPreview,
    SearchFieldSlot = _components.Search.SearchFieldSlot,
    SearchClose = _components.Search.Close,
    SearchPassThroughSlot = _components.Search.PassThroughSlot;

var NOOP = function NOOP() {};

var Search =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Search, _React$Component);

  function Search() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Search);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Search)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getSearchResult", function (item, type) {
      return _react.default.createElement(SearchResult, {
        active: (_this.props.activeItem || {}).id === item.id,
        href: [item.contentType, item.id].join('/'),
        id: item.id,
        index: item.index,
        icon: item.manifest.icon || item.type,
        name: item.manifest.displayName,
        key: item.id,
        onActivate: _this.props.onActivate,
        onScrollRequest: _this.handleScrollRequest,
        type: type
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getSearchResultPreview", function () {
      var item = _this.props.activeItem;

      switch (item.contentType) {
        case "doc":
          return _react.default.createElement(SearchResultPreview, _this.props, _react.default.createElement(_components.Markdown, {
            source: item.contents
          }));

        default:
          return _react.default.createElement(SearchResultPreview, _this.props, _react.default.createElement(InfoPane, {
            active: true,
            demoDependencies: (0, _lodash.values)(item.demoDependencies),
            demoDependents: (0, _lodash.values)(item.demoDependents),
            dependencies: (0, _lodash.values)(item.dependencies),
            dependents: (0, _lodash.values)(item.dependents),
            flag: item.manifest.flag,
            id: item.id,
            manifest: JSON.stringify(item.manifest, null, "  "),
            name: item.manifest.displayName,
            tags: item.manifest.tags,
            version: item.manifest.version
          }));
      }
    });

    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleUp = _this.handleUp.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleDown = _this.handleDown.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleActivate = _this.handleActivate.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleScrollRequest = _this.handleScrollRequest.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.getListRef = _this.getListRef.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.getSearchResult = _this.getSearchResult.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Search, [{
    key: "handleScrollRequest",
    value: function handleScrollRequest(e) {
      if (!this.list) {
        return;
      }

      var l = this.list.getBoundingClientRect();
      var i = e.target.getBoundingClientRect();

      if (i.bottom > l.bottom) {
        this.list.scrollTop = e.target.offsetTop - l.height + i.height;
      }

      if (i.top < l.top) {
        this.list.scrollTop = e.target.offsetTop - 30;
      }
    }
  }, {
    key: "getListRef",
    value: function getListRef(ref) {
      this.list = ref;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (typeof this.props.onMount === "function") {
        this.props.onMount();
      }
    }
  }, {
    key: "handleActivate",
    value: function handleActivate(e) {
      var id = e.target.getAttribute("data-id");

      var index = _toConsumableArray(this.props.docs).concat(_toConsumableArray(this.props.components)).findIndex(function (i) {
        return i.id === id;
      });

      if (index > -1) {
        this.props.onActivate(index);
      }
    }
  }, {
    key: "handleUp",
    value: function handleUp(e) {
      e.stopPropagation();

      if (this.props.activeItem && this.props.activeItem.index > 0) {
        e.preventDefault();
        this.props.onUp();
      }
    }
  }, {
    key: "handleDown",
    value: function handleDown(e) {
      e.stopPropagation();
      var available = this.props.components.length + this.props.docs.length - 2;

      if (this.props.activeItem && available >= this.props.activeItem.index) {
        this.props.onDown();
      }
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var props = this.props;

      if (!props.activeItem) {
        return props.onSubmit(e);
      }

      var activeItem = props.activeItem;
      props.onNavigate(activeItem);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var props = this.props;
      var withComponents = props.components.length > 0;
      var withDocs = props.docs.length > 0;
      return _react.default.createElement(SearchComponent, {
        activeItem: props.activeItem,
        docs: props.docs,
        enabled: props.enabled,
        inline: props.inline,
        onActivate: props.inline ? NOOP : this.handleActivate,
        onClickOutside: props.inline ? NOOP : props.onClickOutside,
        onBlur: props.inline ? NOOP : props.onBlur,
        onChange: props.inline ? NOOP : props.onChange,
        onClear: props.inline ? NOOP : props.onClear,
        onComplete: props.inline ? NOOP : props.onComplete,
        onDown: props.inline ? NOOP : this.handleDown,
        onFocus: props.inline ? NOOP : props.onFocus,
        onStop: props.inline ? NOOP : props.onStop,
        onSubmit: props.inline ? NOOP : this.handleSubmit,
        onUp: props.inline ? NOOP : this.handleUp,
        shortcuts: props.shortcuts,
        suggestion: props.suggestion,
        legend: props.legend
      }, _react.default.createElement(SearchResultList, {
        innerRef: this.getListRef
      }, withDocs > 0 && _react.default.createElement(SearchResultHeading, null, "Docs (", props.docs.length, ")"), props.docs.map(function (d) {
        return _this2.getSearchResult(d, "doc", props);
      }), withComponents > 0 && _react.default.createElement(SearchResultHeading, {
        navigationEnabled: props.navigationEnabled
      }, "Components (", props.components.length, ")"), props.components.map(function (d) {
        return _this2.getSearchResult(d, "pattern");
      })), (withComponents || withDocs) && this.getSearchResultPreview(), _react.default.createElement(SearchFieldSlot, null, _react.default.createElement(_searchField.default, {
        autoFocus: !props.inline,
        linkTo: "/search",
        mark: props.inline ? null : true,
        name: props.inline ? "inline-search" : "search",
        onBlur: props.onBlur,
        onChange: props.onChange,
        onClear: props.onClear,
        onClose: props.onClose,
        onComplete: props.onComplete,
        onDown: this.handleDown,
        onFocus: props.onFocus,
        onStop: props.onStop,
        onUp: this.handleUp,
        placeholder: "Search",
        suggestion: props.suggestion,
        title: "Search for patterns ".concat(props.shortcuts.toggleSearch.toString()),
        value: props.value
      }, props.enabled && _react.default.createElement(SearchClose, {
        shortcut: props.shortcuts.close,
        clears: typeof props.value === "string" && props.value.length > 0
      }))), _react.default.createElement(SearchPassThroughSlot, null, _react.default.createElement(_passThrough.default, {
        query: {
          "search-enabled": true,
          search: null
        }
      })));
    }
  }]);

  return Search;
}(_react.default.Component);

exports.default = Search;

/***/ }),

/***/ "./src/app/components/toggle-navigation.js":
/*!*************************************************!*\
  !*** ./src/app/components/toggle-navigation.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));

var _components = __webpack_require__(/*! @patternplate/components */ "../components/index.js");

var _toggleButton = _interopRequireDefault(__webpack_require__(/*! ./common/toggle-button */ "./src/app/components/common/toggle-button.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = Hamburger;
exports.default = _default;

function Hamburger(props) {
  return _react.default.createElement(StyledToggleButton, {
    enabled: props.enabled,
    shortcut: props.shortcut
  }, _react.default.createElement(_components.Icon, {
    symbol: "hamburger"
  }), props.shortcut.toString());
}

var StyledToggleButton = (0, _components.styled)(_toggleButton.default).withConfig({
  displayName: "toggle-navigation__StyledToggleButton"
})(["display:flex;align-items:center;justify-content:center;font-size:0;line-height:0;width:60px;height:60px;cursor:pointer;color:inherit;"]);

/***/ }),

/***/ "./src/app/components/toggle-opacity.js":
/*!**********************************************!*\
  !*** ./src/app/components/toggle-opacity.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));

var _components = __webpack_require__(/*! @patternplate/components */ "../components/index.js");

var _toggleButton = _interopRequireDefault(__webpack_require__(/*! ./common/toggle-button */ "./src/app/components/common/toggle-button.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = Opacity;
exports.default = _default;

function Opacity(props) {
  return _react.default.createElement(StyledToggleButton, {
    enabled: props.enabled,
    shortcut: props.shortcut
  }, _react.default.createElement(StyledIcon, {
    symbol: "checkers-inverted"
  }), " ", props.shortcut.toString());
}

var StyledIcon = (0, _components.styled)(_components.Icon).withConfig({
  displayName: "toggle-opacity__StyledIcon"
})(["fill:", ";"], function (props) {
  return props.theme.colors.background;
});
var StyledToggleButton = (0, _components.styled)(_toggleButton.default).withConfig({
  displayName: "toggle-opacity__StyledToggleButton"
})(["font-size:0;line-height:0;"]);

/***/ }),

/***/ "./src/app/components/toggle-search.js":
/*!*********************************************!*\
  !*** ./src/app/components/toggle-search.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));

var _components = __webpack_require__(/*! @patternplate/components */ "../components/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = SearchButton;
exports.default = _default;

function SearchButton(props) {
  return _react.default.createElement(StyledLink, {
    debug: true,
    title: "Enable search ".concat(props.shortcut.toString()),
    query: {
      "search-enabled": !props.enabled
    }
  }, _react.default.createElement(StyledIcon, {
    base: props.base,
    symbol: "search"
  }), "Search");
}

var StyledIcon = (0, _components.styled)(_components.Icon).withConfig({
  displayName: "toggle-search__StyledIcon"
})(["fill:", ";"], function (props) {
  return props.theme.colors.color;
});
var StyledLink = (0, _components.styled)(_components.Link).withConfig({
  displayName: "toggle-search__StyledLink"
})(["font-size:0;"]);

/***/ }),

/***/ "./src/app/components/trigger-fullscreen.js":
/*!**************************************************!*\
  !*** ./src/app/components/trigger-fullscreen.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));

var _components = __webpack_require__(/*! @patternplate/components */ "../components/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = Fullscreen;
exports.default = _default;

function Fullscreen(props) {
  return _react.default.createElement(StyledLink, {
    external: true,
    title: "Open pattern demo for \"".concat(props.id, "\" in a new tab"),
    href: props.href
  }, _react.default.createElement(StyledIcon, {
    symbol: "fullscreen"
  }));
}

var StyledIcon = (0, _components.styled)(_components.Icon).withConfig({
  displayName: "trigger-fullscreen__StyledIcon"
})(["fill:", ";"], function (props) {
  return props.theme.colors.background;
});
var StyledLink = (0, _components.styled)(_components.Link).withConfig({
  displayName: "trigger-fullscreen__StyledLink"
})(["font-size:0;line-height:0;"]);

/***/ }),

/***/ "./src/app/connectors/with-active-for-pattern.js":
/*!*******************************************************!*\
  !*** ./src/app/connectors/with-active-for-pattern.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");

var _item = _interopRequireDefault(__webpack_require__(/*! ../selectors/item */ "./src/app/selectors/item.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _reactRedux.connect)(withActiveForPattern);

exports.default = _default;

function withActiveForPattern(state) {
  var item = (0, _item.default)(state);
  return {
    active: item ? item.contentType === "pattern" : false
  };
}

/***/ }),

/***/ "./src/app/connectors/with-id.js":
/*!***************************************!*\
  !*** ./src/app/connectors/with-id.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");

var _item = _interopRequireDefault(__webpack_require__(/*! ../selectors/item */ "./src/app/selectors/item.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _reactRedux.connect)(withId);

exports.default = _default;

function withId(state) {
  var item = (0, _item.default)(state);
  return {
    id: item ? item.id : null
  };
}

/***/ }),

/***/ "./src/app/connectors/with-toggle-states.js":
/*!**************************************************!*\
  !*** ./src/app/connectors/with-toggle-states.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");

var _default = (0, _reactRedux.connect)(withToggleStates);

exports.default = _default;

function withToggleStates(state) {
  return {
    dependenciesEnabled: state.dependenciesEnabled,
    dependentsEnabled: state.dependentsEnabled,
    manifestEnabled: state.manifestEnabled
  };
}

/***/ }),

/***/ "./src/app/connectors/with-toggle.js":
/*!*******************************************!*\
  !*** ./src/app/connectors/with-toggle.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = withToggle;

var _assert = _interopRequireDefault(__webpack_require__(/*! assert */ "../../node_modules/assert/assert.js"));

var _reactRedux = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");

var _lodash = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");

var _shortcuts = _interopRequireDefault(__webpack_require__(/*! ../shortcuts */ "./src/app/shortcuts.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var s = (0, _lodash.values)((0, _shortcuts.default)());

function withToggle(action) {
  var shortcut = s.find(function (i) {
    return i.key === action.key;
  });
  (0, _assert.default)(shortcut, "".concat(action, " passed to withToggle has no matching shortcut found for ").concat(action.key));
  return function (Component) {
    var mapProps = function mapProps(state) {
      var enabled = state[action.property];
      return {
        enabled: enabled,
        shortcut: shortcut
      };
    };

    return (0, _reactRedux.connect)(mapProps)(Component);
  };
}

/***/ }),

/***/ "./src/app/containers/application.js":
/*!*******************************************!*\
  !*** ./src/app/containers/application.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));

var _reactHelmet = _interopRequireDefault(__webpack_require__(/*! react-helmet */ "../../node_modules/react-helmet/lib/Helmet.js"));

var _tagHoc = _interopRequireDefault(__webpack_require__(/*! tag-hoc */ "../../node_modules/tag-hoc/dist/tag.js"));

var _reactRedux = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");

var _redux = __webpack_require__(/*! redux */ "../../node_modules/redux/es/index.js");

var _reselect = __webpack_require__(/*! reselect */ "../../node_modules/reselect/lib/index.js");

var _components = __webpack_require__(/*! @patternplate/components */ "../components/index.js");

var actions = _interopRequireWildcard(__webpack_require__(/*! ../actions */ "./src/app/actions/index.js"));

var demo = _interopRequireWildcard(__webpack_require__(/*! ../selectors/demo */ "./src/app/selectors/demo.js"));

var _logo = _interopRequireDefault(__webpack_require__(/*! ./logo */ "./src/app/containers/logo.js"));

var _favicon = _interopRequireDefault(__webpack_require__(/*! ./favicon */ "./src/app/containers/favicon.js"));

var _indicator = _interopRequireDefault(__webpack_require__(/*! ./indicator */ "./src/app/containers/indicator.js"));

var _link = _interopRequireDefault(__webpack_require__(/*! ./link */ "./src/app/containers/link.js"));

var _message = _interopRequireDefault(__webpack_require__(/*! ./message */ "./src/app/containers/message.js"));

var _navigation = _interopRequireWildcard(__webpack_require__(/*! ./navigation */ "./src/app/containers/navigation.js"));

var _toggleNavigation = _interopRequireDefault(__webpack_require__(/*! ./toggle-navigation */ "./src/app/containers/toggle-navigation.js"));

var _toggleSearch = _interopRequireDefault(__webpack_require__(/*! ./toggle-search */ "./src/app/containers/toggle-search.js"));

var _search = _interopRequireDefault(__webpack_require__(/*! ./search */ "./src/app/containers/search.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var selectThemes = (0, _reselect.createSelector)(function (state) {
  return state.config.ui;
}, function (ui) {
  return (0, _components.themes)(ui);
});
var selectLines = (0, _reselect.createSelector)(function (state) {
  return state.messages;
}, demo.selectSrc, function (messages, src) {
  return (messages[src] || "").split("\n").filter(Boolean);
});
var selectMessage = (0, _reselect.createSelector)(selectLines, function (lines) {
  return lines.slice(0, 2).map(function (l) {
    return l.trim();
  }).join("\n");
});
var selectHasMessage = (0, _reselect.createSelector)(selectMessage, function (message) {
  return typeof message === "string" && message !== "";
});

function mapProps(state) {
  var q = state.routing.locationBeforeTransitions.query;
  return {
    base: state.base,
    description: state.schema.description,
    lightbox: state.lightbox,
    location: state.routing.locationBeforeTransitions,
    networkEnabled: state.networkEnabled,
    logo: state.config.ui.renderedLogo,
    navigationEnabled: state.navigationEnabled,
    searchEnabled: state.searchEnabled,
    theme: state.theme,
    themes: selectThemes(state),
    title: state.config.title || state.schema.name,
    hasMessage: selectHasMessage(state),
    screenshot: q.screenshot === "true",
    jsWarningEnabled: q["js-warning-enabled"] !== "false" && q["js-warning-enabled"] !== false,
    browserWarningEnabled: q["browser-warning-enabled"] !== "false" && q["browser-warning-enabled"] !== false
  };
}

function mapDispatch(dispatch) {
  return (0, _redux.bindActionCreators)({
    onLoad: function onLoad() {
      return actions.listen({
        url: "api"
      });
    },
    onResize: actions.windowResize
  }, dispatch);
}

var injections = [{
  target: _components.Link,
  source: _link.default
}];

var Application =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Application, _React$Component);

  function Application() {
    _classCallCheck(this, Application);

    return _possibleConstructorReturn(this, _getPrototypeOf(Application).apply(this, arguments));
  }

  _createClass(Application, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.body.style.overflow = this.props.screenshot ? "hidden" : "auto";
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      document.body.style.overflow = this.props.screenshot ? "hidden" : "auto";
    }
  }, {
    key: "render",
    value: function render() {
      var props = this.props;
      return _react.default.createElement(_components.injection.InjectionProvider, {
        injections: injections
      }, _react.default.createElement(_components.ThemeProvider, {
        theme: props.themes[props.theme]
      }, _react.default.createElement(StyledApplication, {
        screenshot: props.screenshot
      }, _react.default.createElement(_reactHelmet.default, {
        meta: meta(props),
        title: props.title
      }), _react.default.createElement(_favicon.default, null), _react.default.createElement(_components.ThemeProvider, {
        theme: props.themes.dark
      }, _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(NavigationControl, {
        "data-toggle-name": "navigation",
        "data-trigger-name": "navigation",
        "data-toggle-enabled": props.navigationEnabled,
        enabled: props.navigationEnabled
      }, _react.default.createElement(_toggleNavigation.default, null)), _react.default.createElement(StyledNavigationBox, {
        "data-toggle-name": "navigation",
        "data-toggle-enabled": props.visible,
        enabled: props.navigationEnabled
      }, _react.default.createElement(_navigation.default, null, _react.default.createElement(_navigation.NavigationHeader, null, _react.default.createElement(_logo.default, null)), _react.default.createElement(_navigation.NavigationToolbar, null, _react.default.createElement("div", null), _react.default.createElement(_toggleSearch.default, null), _react.default.createElement(_indicator.default, null)))))), _react.default.createElement(StyledContentContainer, null, _react.default.createElement(StyledContent, null, props.browserWarningEnabled && _react.default.createElement(StyledBrowserWarning, {
        navigationEnabled: props.navigationEnabled,
        "data-browser-warning": true
      }, _react.default.createElement(StyledBrowserContainer, null, _react.default.createElement(StyledBrowserContent, null, _react.default.createElement(StyledWarningLabel, null, "Nice browser. Is it antique?"), _react.default.createElement(StyledBrowserText, null, "No, seriously - your browser is so old that some features of patternplate don't work as expected."), _react.default.createElement(StyledBrowserText, null, "Don't worry - you can either continue with a restricted version or install an up-to-date browser.")), _react.default.createElement(StyledBrowserContainerClose, {
        title: "Close browser warning",
        query: {
          "browser-warning-enabled": false
        }
      }, _react.default.createElement(_components.Icon, {
        symbol: "close"
      })))), props.jsWarningEnabled && _react.default.createElement(StyledBrowserWarning, {
        navigationEnabled: props.navigationEnabled,
        "data-js-warning": true
      }, _react.default.createElement(StyledBrowserContainer, null, _react.default.createElement(StyledBrowserContent, null, _react.default.createElement(StyledWarningLabel, null, "We messed up."), _react.default.createElement(StyledBrowserText, null, "Sorry, but your user experience might be affected."), _react.default.createElement(_components.Text, null, "- Try reloading the page"), _react.default.createElement(_components.Text, null, "- Report the problem at github.com/patternplate/patternplate")), _react.default.createElement(StyledBrowserContainerClose, {
        title: "Close browser warning",
        query: {
          "js-warning-enabled": false
        }
      }, _react.default.createElement(_components.Icon, {
        symbol: "close"
      })))), props.hasMessage && _react.default.createElement(StyledMessageBox, null, _react.default.createElement(_message.default, null)), props.children, props.searchEnabled && _react.default.createElement(_components.ThemeProvider, {
        theme: props.themes.dark
      }, _react.default.createElement(StyledSearchBox, {
        navigationEnabled: props.navigationEnabled,
        screenshot: props.screenshot
      }, _react.default.createElement(StyledSearchFrame, null, _react.default.createElement(_search.default, null)))))))));
    }
  }]);

  return Application;
}(_react.default.Component);

var _default = (0, _reactRedux.connect)(mapProps, mapDispatch)(Application);

exports.default = _default;
var WIDTH = 300;

var NAVIGATION_WIDTH = function NAVIGATION_WIDTH(props) {
  return props.enabled ? WIDTH : 0;
};

var TOOLBAR_HEIGHT = 60;
var StyledWarningLabel = (0, _components.styled)(_components.Text).withConfig({
  displayName: "application__StyledWarningLabel"
})(["font-weight:bold;margin-bottom:1.3em;"]);

var StyledBrowserWarning = _components.styled.div.withConfig({
  displayName: "application__StyledBrowserWarning"
})(["display:none;box-sizing:border-box;position:absolute;position:sticky;top:0;z-index:4;right:0;left:0;width:100%;padding:15px 20px;padding-left:", "px;background:", ";"], function (props) {
  return props.navigationEnabled ? 20 : 60;
}, function (props) {
  return props.theme.colors.warning;
});

var StyledBrowserContainer = _components.styled.div.withConfig({
  displayName: "application__StyledBrowserContainer"
})(["position:relative;display:flex;align-items:center;width:100%;max-width:1240px;margin:0 auto;justify-content:space-between;"]);

var StyledBrowserContent = _components.styled.div.withConfig({
  displayName: "application__StyledBrowserContent"
})([""]);

var StyledBrowserText = (0, _components.styled)(_components.Text).withConfig({
  displayName: "application__StyledBrowserText"
})(["margin-bottom:1.3em;"]);
var StyledBrowserContainerClose = (0, _components.styled)(_components.Link).withConfig({
  displayName: "application__StyledBrowserContainerClose"
})(["flex-shrink:0;margin-left:15px;&:link,&:visited,&:active{color:", ";}"], function (props) {
  return props.theme.colors.color;
});

var StyledApplication = _components.styled.div.withConfig({
  displayName: "application__StyledApplication"
})(["position:relative;box-sizing:border-box;display:flex;width:100%;height:100%;background:", ";", ";"], function (props) {
  return props.theme.colors.background;
}, function (props) {
  return !props.screenshot ? "" : (0, _components.css)(["height:calc(100vh - 100px);width:calc(100vw - 100px);margin:50px;border-radius:10px;box-shadow:0 0 30px rgba(0,0,0,0.15);overflow:hidden;"]);
});

var StyledNavigationBox = (0, _components.styled)((0, _tagHoc.default)(["enabled"])("div")).withConfig({
  displayName: "application__StyledNavigationBox"
})(["position:relative;z-index:2;height:100%;width:", "px;flex:0 0 ", "px;overflow:hidden;&[data-toggle-enabled=\"true\"]{display:block;}&[data-toggle-enabled=\"false\"]{display:none;}"], NAVIGATION_WIDTH, NAVIGATION_WIDTH);

var StyledMessageBox = _components.styled.div.withConfig({
  displayName: "application__StyledMessageBox"
})(["position:absolute;box-sizing:border-box;z-index:3;padding:15px;width:100%;overflow:hidden;"]);

var StyledContent = _components.styled.div.withConfig({
  displayName: "application__StyledContent"
})(["flex:1 1 100%;width:100%;"]);

var StyledContentContainer = _components.styled.div.withConfig({
  displayName: "application__StyledContentContainer"
})(["flex:1 1 calc(100% - ", "px);width:calc(100% - ", "px);flex-direction:column;overflow:auto;position:relative;"], NAVIGATION_WIDTH, NAVIGATION_WIDTH);

var WITH_SCREENSHOT_OFFSET = function WITH_SCREENSHOT_OFFSET(factor) {
  return function (props) {
    if (props.screenshot) {
      return factor * 50;
    }

    return 0;
  };
};

var WITH_NAVIGATION_OFFSET = function WITH_NAVIGATION_OFFSET(factor) {
  return function (props) {
    if (props.navigationEnabled) {
      return factor * 300;
    }

    return 0;
  };
};

var SUM = function SUM() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return function (props) {
    return args.reduce(function (acc, fn) {
      return acc + fn(props);
    }, 0);
  };
};

var StyledSearchBox = _components.styled.div.withConfig({
  displayName: "application__StyledSearchBox"
})(["position:fixed;top:12.5vh;bottom:10vh;right:", "px;left:", "px;width:calc( 100% - ", "px );pointer-events:none;"], WITH_SCREENSHOT_OFFSET(1), SUM(WITH_NAVIGATION_OFFSET(1), WITH_SCREENSHOT_OFFSET(1)), SUM(WITH_NAVIGATION_OFFSET(1), WITH_SCREENSHOT_OFFSET(2)));

var StyledSearchFrame = _components.styled.div.withConfig({
  displayName: "application__StyledSearchFrame"
})(["width:90%;min-width:320px;max-width:750px;max-height:100%;margin:0 auto;overflow:hidden;"]);

var StyledFloatingBox = _components.styled.div.withConfig({
  displayName: "application__StyledFloatingBox"
})(["position:absolute;pointer-events:none;z-index:2;right:0;bottom:0;left:0;padding:10px 15px;height:300px;display:flex;"]);

var StyledInfoPane = _components.styled.div.withConfig({
  displayName: "application__StyledInfoPane"
})(["flex:0 0 auto;box-sizing:border-box;pointer-events:all;"]);

var StyledPane = _components.styled.div.withConfig({
  displayName: "application__StyledPane"
})(["flex:1 1 auto;box-sizing:border-box;height:100%;width:100%;overflow:hidden;pointer-events:all;"]);

var NavigationControl = _components.styled.div.withConfig({
  displayName: "application__NavigationControl"
})(["display:flex;align-items:center;justify-content:center;position:absolute;z-index:5;top:0;left:", "px;transform:translate(-", "%);color:", ";width:60px;height:60px;background:", ";&[data-toggle-enabled=\"true\"]{left:300;transform:translate(-100%);color:", ";background:", ";}&[data-toggle-enabled=\"false\"]{left:0;transform:translate(0);color:", ";background:#fff;}@media screen and (min-width:720px){background:transparent;&::before{display:none;}}"], function (props) {
  return props.enabled ? 300 : 0;
}, function (props) {
  return props.enabled ? 100 : 0;
}, function (props) {
  return props.enabled ? props.theme.colors.color : props.theme.colors.background;
}, function (props) {
  return props.enabled ? props.theme.colors.backgroundSecondary : "#fff";
}, function (props) {
  return props.theme.colors.color;
}, function (props) {
  return props.theme.colors.backgroundSecondary;
}, function (props) {
  return props.theme.colors.background;
});

function meta(props) {
  return [{
    name: "description",
    content: props.description
  }, {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }];
}

/***/ }),

/***/ "./src/app/containers/documentation.js":
/*!*********************************************!*\
  !*** ./src/app/containers/documentation.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _components = __webpack_require__(/*! @patternplate/components */ "../components/index.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");

var _reselect = __webpack_require__(/*! reselect */ "../../node_modules/reselect/lib/index.js");

var _redux = __webpack_require__(/*! redux */ "../../node_modules/redux/es/index.js");

var actions = _interopRequireWildcard(__webpack_require__(/*! ../actions */ "./src/app/actions/index.js"));

var _documentation = _interopRequireDefault(__webpack_require__(/*! ../components/documentation */ "./src/app/components/documentation.js"));

var _item = _interopRequireDefault(__webpack_require__(/*! ../selectors/item */ "./src/app/selectors/item.js"));

var _pool = __webpack_require__(/*! ../selectors/pool */ "./src/app/selectors/pool.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var _default = (0, _reactRedux.connect)(mapState, mapDispatch)(_documentation.default);

exports.default = _default;
var selectNotFound = (0, _reselect.createSelector)(function (state) {
  return state.routing.locationBeforeTransitions.pathname;
}, function (url) {
  return "\n# Documentation not found\n\n> Pretty sure these aren't the hypertext documents you are looking for.\n\nWe looked everywhere and could not find a single thing at `".concat(url, "`.\n\nYou might want to navigate back to [Home](/) or use the [Search](?search-enabled=true).\n\n---\n\nHelp us to make this message more helpful on [GitHub](https://github.com/patternplate/patternplate)\n");
});

var selectNoDocs = function selectNoDocs() {
  return "\n# :construction: Add documentation\n\n> Undocumented software could not exist just as well.\n>\n> \u2013 The Voice of Common Sense\n\nCurrently there is no readme data at `./patterns/readme.md`, so we left this\nfriendly reminder here to change that soon.\n\nYou could start right away:\n\n```sh\necho \"# Docs\\n This patternplate contains ...\" > patterns/readme.md\n```\n\nSome ideas on what to write into your pattern readme\n\n*  Why this Living Styleguide interface exists, e.g. what problems it should solve\n*  What the components in are intended for, e.g. a brand, website or product\n*  The component hierarchy you use, e.g. Atomic Design\n*  Naming conventions\n*  Rules for dependencies\n*  Browser matrix\n\n---\n\nHelp us to make this message more helpful on [GitHub](https://github.com/patternplate/patternplate).\n";
};

var selectDocItem = (0, _reselect.createSelector)(_item.default, _pool.flat, function (state) {
  return state.id;
}, function (item, pool, id) {
  if (id === "/") {
    var first = pool.find(function (i) {
      return i.contentType === "doc";
    });

    if (first) {
      return first;
    }
  }

  return item;
});
var selectDoc = (0, _reselect.createSelector)(selectDocItem, selectNoDocs, selectNotFound, function (item, noDocs, notFound) {
  if (item && item.contents) {
    return item.contents;
  }

  if (item && !item.contents) {
    return noDocs;
  }

  return notFound;
});
var selectDisplayName = (0, _reselect.createSelector)(selectDocItem, function (item) {
  if (!item) {
    return 'patternplate';
  }

  return item.manifest.displayName;
});
var selectType = (0, _reselect.createSelector)(_item.default, function (match) {
  if (match && match.contents) {
    return "doc";
  }

  if (match && !match.contents) {
    return "fallback";
  }

  return "not-found";
});
var selectThemes = (0, _reselect.createSelector)(function (state) {
  return state.config.color;
}, function (color) {
  return (0, _components.themes)(color);
});

function mapState(state) {
  return {
    displayName: selectDisplayName(state),
    doc: selectDoc(state),
    themes: selectThemes(state),
    type: selectType(state),
    isStatic: state.isStatic
  };
}

function mapDispatch(dispatch) {
  return (0, _redux.bindActionCreators)({
    requestScroll: actions.scrollTo
  }, dispatch);
}

/***/ }),

/***/ "./src/app/containers/favicon.js":
/*!***************************************!*\
  !*** ./src/app/containers/favicon.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");

var _favicon = _interopRequireDefault(__webpack_require__(/*! ../components/favicon */ "./src/app/components/favicon.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _reactRedux.connect)(mapState)(_favicon.default);

exports.default = _default;

function mapState(state) {
  return {
    error: state.demo.error,
    source: state.config.ui.favicon
  };
}

/***/ }),

/***/ "./src/app/containers/indicator.js":
/*!*****************************************!*\
  !*** ./src/app/containers/indicator.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = __webpack_require__(/*! redux */ "../../node_modules/redux/es/index.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");

var actions = _interopRequireWildcard(__webpack_require__(/*! ../actions */ "./src/app/actions/index.js"));

var _indicator = _interopRequireDefault(__webpack_require__(/*! ../components/indicator */ "./src/app/components/indicator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var _default = (0, _reactRedux.connect)(mapProps, mapDispatch)(_indicator.default);

exports.default = _default;

function mapProps(state) {
  return {
    status: selectStatus(state),
    shortcut: state.shortcuts.reload
  };
}

function mapDispatch(dispatch) {
  return (0, _redux.bindActionCreators)({
    onClick: actions.reload
  }, dispatch);
}

function selectStatus(state) {
  if (state.demo.error) {
    return "error";
  }

  return state.connection;
}

/***/ }),

/***/ "./src/app/containers/link.js":
/*!************************************!*\
  !*** ./src/app/containers/link.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _url = _interopRequireDefault(__webpack_require__(/*! url */ "../../node_modules/url/url.js"));

var _querystring = _interopRequireDefault(__webpack_require__(/*! querystring */ "../../node_modules/querystring-es3/index.js"));

var _components = __webpack_require__(/*! @patternplate/components */ "../components/index.js");

var _lodash = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");

var _reactRouterRedux = __webpack_require__(/*! react-router-redux */ "../../node_modules/react-router-redux/lib/index.js");

var _redux = __webpack_require__(/*! redux */ "../../node_modules/redux/es/index.js");

var _actions = __webpack_require__(/*! ../actions */ "./src/app/actions/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _reactRedux.connect)(mapState, mapDispatch)(_components.Link.RawLink);

exports.default = _default;

function mapState(state, own) {
  var location = state.routing.locationBeforeTransitions;
  return Object.assign({}, own, {
    href: getHref(own, {
      base: state.base,
      location: location
    })
  });
}

function mapDispatch(dispatch, ownProps) {
  return (0, _redux.bindActionCreators)({
    onClick: function onClick(e) {
      if (ownProps.external) {
        return {
          type: null
        };
      }

      e.preventDefault();

      var parsed = _url.default.parse(e.currentTarget.href);

      if (parsed.hash) {
        (0, _actions.scrollTo)(parsed.hash.slice(1));
      }

      return (0, _reactRouterRedux.push)([parsed.path, parsed.hash].join(""));
    }
  }, dispatch);
}

function getHref(props, context) {
  if (props.external === true || !context.location) {
    return props.href;
  }

  var parsed = props.href ? _url.default.parse(props.href) : {
    pathname: context.location.pathname,
    query: _querystring.default.stringify(context.location.query)
  };
  parsed.query = _querystring.default.parse(parsed.query);
  var query = props.query === null ? {} : (0, _lodash.pickBy)(Object.assign({}, context.location.query, parsed.query, props.query || context.location.query), function (value, key) {
    // TODO: deduce this for all keys from reduce config
    // special case "navigation-enabled", invert logic
    if (key === "navigation-enabled") {
      return value !== true && value !== "true";
    } // if the key is not in the current query, add it


    if (!context.location.query.hasOwnProperty(key)) {
      return true;
    } // omit "falsy" values to keep url shorter


    return value !== "false" && value !== "0" && !!value;
  });
  var pathname = typeof parsed.pathname === "string" ? prefix(context.base, parsed.pathname) : context.location.pathname;
  return _url.default.format({
    pathname: pathname,
    query: query,
    hash: props.hash || (parsed.hash || "#").slice(1)
  });
}

function prefix(base, pathname) {
  var b = norm(base);
  var p = norm(pathname);

  if (p === '') {
    return "/".concat(b);
  }

  if (p.startsWith(b)) {
    return "/".concat(p);
  }

  return "/".concat([norm(base), norm(pathname)].join("/"));
}

function norm(p) {
  return p.split("/").filter(Boolean).join("/");
}

/***/ }),

/***/ "./src/app/containers/logo.js":
/*!************************************!*\
  !*** ./src/app/containers/logo.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");

var _components = __webpack_require__(/*! @patternplate/components */ "../components/index.js");

var _default = (0, _reactRedux.connect)(mapState)(_components.Logo);

exports.default = _default;

function mapState(state) {
  return {
    source: state.config.ui.renderedLogo
  };
}

/***/ }),

/***/ "./src/app/containers/markdown.js":
/*!****************************************!*\
  !*** ./src/app/containers/markdown.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapDispatch = mapDispatch;
exports.default = void 0;

var _reselect = __webpack_require__(/*! reselect */ "../../node_modules/reselect/lib/index.js");

var _redux = __webpack_require__(/*! redux */ "../../node_modules/redux/es/index.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");

var _components = __webpack_require__(/*! @patternplate/components */ "../components/index.js");

var _pool = __webpack_require__(/*! ../selectors/pool */ "./src/app/selectors/pool.js");

var _actions = __webpack_require__(/*! ../actions */ "./src/app/actions/index.js");

var selectWidgetSrc = (0, _reselect.createSelector)(function (state) {
  return state.staticBase;
}, function (staticBase, manifest) {
  return "".concat(staticBase, "/widgets.js");
});
var selectThemes = (0, _reselect.createSelector)(function (state) {
  return state.config.ui;
}, function (ui) {
  return (0, _components.themes)(ui);
});

function mapProps(state) {
  var location = state.routing.locationBeforeTransitions;
  return {
    base: state.base,
    hash: location.hash,
    pathname: location.pathname,
    query: location.query,
    widgetSrc: selectWidgetSrc(state),
    widgetState: {
      themes: selectThemes(state),
      base: state.base,
      pool: (0, _pool.flat)(state)
    }
  };
}

function mapDispatch(dispatch) {
  return (0, _redux.bindActionCreators)({
    scrollTo: _actions.scrollTo
  }, dispatch);
}

var _default = (0, _reactRedux.connect)(mapProps, mapDispatch)(_components.Markdown);

exports.default = _default;

/***/ }),

/***/ "./src/app/containers/message.js":
/*!***************************************!*\
  !*** ./src/app/containers/message.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");

var _reselect = __webpack_require__(/*! reselect */ "../../node_modules/reselect/lib/index.js");

var _behaviours = __webpack_require__(/*! ../behaviours */ "./src/app/behaviours.js");

var _message = _interopRequireDefault(__webpack_require__(/*! ../components/message */ "./src/app/components/message.js"));

var demo = _interopRequireWildcard(__webpack_require__(/*! ../selectors/demo */ "./src/app/selectors/demo.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _reactRedux.connect)(mapState)((0, _behaviours.skippable)(_message.default));

exports.default = _default;
var selectLines = (0, _reselect.createSelector)(function (state) {
  return state.messages;
}, demo.selectSrc, function (messages, src) {
  return (messages[src] || "").split("\n").filter(Boolean);
});
var selectMessage = (0, _reselect.createSelector)(selectLines, function (lines) {
  return lines.slice(0, 2).map(function (l) {
    return l.trim();
  }).join("\n");
});
var selectDetails = (0, _reselect.createSelector)(selectLines, function (lines) {
  if (lines.length <= 2) {
    return "";
  }

  return lines.join("\n");
});
var selectActive = (0, _reselect.createSelector)(selectMessage, function (message) {
  return typeof message === "string" && message !== "";
});

function mapState(state) {
  return {
    active: selectActive(state),
    message: selectMessage(state),
    details: selectDetails(state),
    summary: "Details"
  };
}

/***/ }),

/***/ "./src/app/containers/navigation.js":
/*!******************************************!*\
  !*** ./src/app/containers/navigation.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavigationToolbar = exports.NavigationHeader = exports.default = void 0;

var _url = _interopRequireDefault(__webpack_require__(/*! url */ "../../node_modules/url/url.js"));

var _reactRedux = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");

var _reactRouterRedux = __webpack_require__(/*! react-router-redux */ "../../node_modules/react-router-redux/lib/index.js");

var _redux = __webpack_require__(/*! redux */ "../../node_modules/redux/es/index.js");

var _components = __webpack_require__(/*! @patternplate/components */ "../components/index.js");

var _actions = __webpack_require__(/*! ../actions */ "./src/app/actions/index.js");

var _navigation = _interopRequireDefault(__webpack_require__(/*! ../selectors/navigation */ "./src/app/selectors/navigation.js"));

var _docs = _interopRequireDefault(__webpack_require__(/*! ../selectors/docs */ "./src/app/selectors/docs.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _reactRedux.connect)(mapProps, mapDispatch)(_components.MainNavigation);

exports.default = _default;
var NavigationHeader = _components.MainNavigation.NavigationHeader;
exports.NavigationHeader = NavigationHeader;
var NavigationToolbar = _components.MainNavigation.NavigationToolbar;
exports.NavigationToolbar = NavigationToolbar;

function mapProps(state) {
  return {
    active: state.id,
    docs: (0, _docs.default)(state),
    componentsEnabled: state.componentsEnabled,
    navigation: (0, _navigation.default)(state),
    query: state.routing.locationBeforeTransitions.query
  };
}

function mapDispatch(dispatch) {
  return (0, _redux.bindActionCreators)({
    onItemClick: function onItemClick(e) {
      e.preventDefault();

      if (!e.currentTarget.href) {
        return {
          type: "noop"
        };
      }

      var parsed = _url.default.parse(e.currentTarget.href);

      return (0, _reactRouterRedux.push)("".concat(parsed.pathname, "?").concat(parsed.query));
    },
    onLabelClick: function onLabelClick(query) {
      return (0, _actions.patchLocation)({
        query: query
      });
    }
  }, dispatch);
}

/***/ }),

/***/ "./src/app/containers/not-found.js":
/*!*****************************************!*\
  !*** ./src/app/containers/not-found.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");

var _documentation = _interopRequireDefault(__webpack_require__(/*! ../components/documentation */ "./src/app/components/documentation.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _reactRedux.connect)(function (state) {
  return {
    base: state.base,
    id: state.id,
    docs: {
      contents: selectNotFound(state)
    }
  };
})(_documentation.default);

exports.default = _default;

function selectNotFound(state) {
  var url = state.routing.locationBeforeTransitions.pathname;
  return "\n# Nothing found\n\n> Pretty sure these aren't the hypertext documents you are looking for.\n\nWe looked everywhere and could not find a single thing at `".concat(url, "`.\n\nYou might want to navigate back to [Home](/) or use the search.\n\n---\n\nHelp us to make this message more helpful on [GitHub](https://github.com/patternplate/patternplate)\n");
}

/***/ }),

/***/ "./src/app/containers/pass-through.js":
/*!********************************************!*\
  !*** ./src/app/containers/pass-through.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));

var _reactRedux = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _default = (0, _reactRedux.connect)(mapProps)(PassThrough);

exports.default = _default;

function PassThrough(props) {
  return _react.default.createElement("div", null, props.items.map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        name = _ref2[0],
        value = _ref2[1];

    return _react.default.createElement("input", {
      type: "hidden",
      key: name,
      name: name,
      value: value
    });
  }));
}

function mapProps(state, own) {
  var query = state.routing.locationBeforeTransitions.query;

  var q = _objectSpread({}, query, own.query || {});

  var items = (0, _lodash.entries)(q).filter(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        value = _ref4[1];

    return value !== null;
  });
  return {
    items: items
  };
}

/***/ }),

/***/ "./src/app/containers/pattern.js":
/*!***************************************!*\
  !*** ./src/app/containers/pattern.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));

var _reactRedux = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");

var _redux = __webpack_require__(/*! redux */ "../../node_modules/redux/es/index.js");

var _reselect = __webpack_require__(/*! reselect */ "../../node_modules/reselect/lib/index.js");

var demo = _interopRequireWildcard(__webpack_require__(/*! ../selectors/demo */ "./src/app/selectors/demo.js"));

var items = _interopRequireWildcard(__webpack_require__(/*! ../selectors/item */ "./src/app/selectors/item.js"));

var _pattern = _interopRequireDefault(__webpack_require__(/*! ../components/pattern */ "./src/app/components/pattern/index.js"));

var actions = _interopRequireWildcard(__webpack_require__(/*! ../actions */ "./src/app/actions/index.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PatternContainer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PatternContainer, _React$Component);

  function PatternContainer() {
    _classCallCheck(this, PatternContainer);

    return _possibleConstructorReturn(this, _getPrototypeOf(PatternContainer).apply(this, arguments));
  }

  _createClass(PatternContainer, [{
    key: "render",
    value: function render() {
      var props = this.props;
      return _react.default.createElement(_pattern.default, {
        contents: props.contents,
        contentType: props.contentType,
        docs: props.docs,
        error: props.error,
        displayName: props.displayName,
        loading: props.loading,
        opacity: props.opacity,
        src: props.src,
        type: props.type,
        updated: props.updated,
        navigationEnabled: props.navigationEnabled,
        screenshot: props.screenshot
      });
    }
  }]);

  return PatternContainer;
}(_react.default.Component);

var _default = (0, _reactRedux.connect)(mapState, mapDispatch)(PatternContainer);

exports.default = _default;
var DEFAULT_PATTERN_CONTENTS = "\n# :construction: Add documentation\n\n> Undocumented software could not exist just as well.\n>\n> \u2013 The Voice of Common Sense\n\nCurrently there is no readme data for this pattern folder.\nWe left this friendly reminder for you to change that soon.\n\n---\n\nHelp us to make this message more helpful on [GitHub](https://github.com/patternplate/patternplate).\n";
var NOT_FOUND = "\n# Pattern not found\n\n> Pretty sure this is not the component you are looking for.\n\nWe looked everywhere and could not find a single thing.\n\nYou might want to navigate back to [Home](/) or use the search.\n\n---\n\nHelp us to make this message more helpful on [GitHub](https://github.com/patternplate/patternplate)\n";
var selectDocs = (0, _reselect.createSelector)(items.default, items.selectType, items.selectContents, function (pattern, type, contents) {
  if (pattern && pattern.type === 'folder') {
    return contents;
  }

  if (type === "not-found") {
    return NOT_FOUND;
  }

  return contents || DEFAULT_PATTERN_CONTENTS;
});

function mapState(state) {
  return {
    contents: state.demo.contents,
    displayName: items.selectName(state),
    docs: selectDocs(state),
    error: state.demo.error,
    loading: state.demo.fetching,
    opacity: state.opacity,
    src: demo.selectSrc(state),
    type: items.selectType(state),
    contentType: items.selectContentType(state),
    updated: state.demo.updated,
    navigationEnabled: state.navigationEnabled,
    screenshot: state.routing.locationBeforeTransitions.query.screenshot === "true"
  };
}

function mapDispatch(dispatch) {
  return (0, _redux.bindActionCreators)({
    onChange: actions.loadPatternDemo
  }, dispatch);
}

/***/ }),

/***/ "./src/app/containers/search.js":
/*!**************************************!*\
  !*** ./src/app/containers/search.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");

var _redux = __webpack_require__(/*! redux */ "../../node_modules/redux/es/index.js");

var _search = _interopRequireDefault(__webpack_require__(/*! ../components/search */ "./src/app/components/search.js"));

var actions = _interopRequireWildcard(__webpack_require__(/*! ../actions */ "./src/app/actions/index.js"));

var found = _interopRequireWildcard(__webpack_require__(/*! ../selectors/found */ "./src/app/selectors/found.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapProps(state) {
  return {
    activeItem: found.selectActiveItem(state),
    // Used for highlight in list
    base: state.base,
    components: found.selectPatterns(state),
    // List of components matching state.components
    docs: found.selectDocs(state),
    // List of docs matching state.search
    enabled: state.searchEnabled,
    // If search is to be displayed
    legend: found.selectLegend(state),
    shortcuts: state.shortcuts,
    // Reference to global shortcuts for help texts
    suggestion: found.selectSuggestion(state),
    // The backdrop search suggestion string
    value: state.searchValue // The synchronous search input value

  };
}

function mapDispatch(dispatch) {
  return (0, _redux.bindActionCreators)({
    onChange: function onChange(e) {
      return actions.search({
        persist: false,
        perform: false,
        value: e.target.value
      });
    },
    onClear: function onClear() {
      return actions.search({
        persist: true,
        perform: true,
        value: ""
      });
    },
    onClick: function onClick() {
      return actions.toggleSearch({
        focus: true
      });
    },
    onClickOutside: function onClickOutside() {
      return actions.toggleSearch({
        focus: false
      });
    },
    onClose: function onClose() {
      return actions.toggleSearch({
        focus: false
      });
    },
    onComplete: function onComplete(value) {
      return actions.search({
        persist: true,
        perform: true,
        value: value
      });
    },
    onFocus: function onFocus() {
      return actions.toggleSearch({
        focus: true
      });
    },
    onMount: function onMount() {
      return actions.toggleSearch({
        sync: true
      });
    },
    onNavigate: function onNavigate(item) {
      var pathname = "".concat(item.contentType, "/").concat(item.id);
      return actions.patchLocation({
        pathname: pathname,
        query: {
          "search-enabled": false
        }
      });
    },
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      return actions.search({
        persist: true,
        perform: true,
        value: e.target.search.value
      });
    },
    onUp: function onUp() {
      return actions.searchPreview("up");
    },
    onDown: function onDown() {
      return actions.searchPreview("down");
    },
    onActivate: function onActivate(index) {
      return actions.searchPreview(index);
    },
    onStop: function onStop(e) {
      return actions.search({
        persist: true,
        perform: true,
        value: e.target.value
      });
    }
  }, dispatch);
}

var _default = (0, _reactRedux.connect)(mapProps, mapDispatch)(_search.default);

exports.default = _default;

/***/ }),

/***/ "./src/app/containers/toggle-navigation.js":
/*!*************************************************!*\
  !*** ./src/app/containers/toggle-navigation.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var actions = _interopRequireWildcard(__webpack_require__(/*! ../actions */ "./src/app/actions/index.js"));

var _toggleNavigation = _interopRequireDefault(__webpack_require__(/*! ../components/toggle-navigation */ "./src/app/components/toggle-navigation.js"));

var _withToggle = _interopRequireDefault(__webpack_require__(/*! ../connectors/with-toggle */ "./src/app/connectors/with-toggle.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var _default = (0, _withToggle.default)(actions.toggleNavigation)(_toggleNavigation.default);

exports.default = _default;

/***/ }),

/***/ "./src/app/containers/toggle-opacity.js":
/*!**********************************************!*\
  !*** ./src/app/containers/toggle-opacity.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var actions = _interopRequireWildcard(__webpack_require__(/*! ../actions */ "./src/app/actions/index.js"));

var _toggleOpacity = _interopRequireDefault(__webpack_require__(/*! ../components/toggle-opacity */ "./src/app/components/toggle-opacity.js"));

var _withToggle = _interopRequireDefault(__webpack_require__(/*! ../connectors/with-toggle */ "./src/app/connectors/with-toggle.js"));

var _withActiveForPattern = _interopRequireDefault(__webpack_require__(/*! ../connectors/with-active-for-pattern */ "./src/app/connectors/with-active-for-pattern.js"));

var _behaviours = __webpack_require__(/*! ../behaviours */ "./src/app/behaviours.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var OpacityToggle = (0, _withToggle.default)(actions.toggleOpacity)(_toggleOpacity.default);

var _default = (0, _withActiveForPattern.default)((0, _behaviours.skippable)(OpacityToggle));

exports.default = _default;

/***/ }),

/***/ "./src/app/containers/toggle-search.js":
/*!*********************************************!*\
  !*** ./src/app/containers/toggle-search.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var actions = _interopRequireWildcard(__webpack_require__(/*! ../actions */ "./src/app/actions/index.js"));

var _toggleSearch = _interopRequireDefault(__webpack_require__(/*! ../components/toggle-search */ "./src/app/components/toggle-search.js"));

var _withToggle = _interopRequireDefault(__webpack_require__(/*! ../connectors/with-toggle */ "./src/app/connectors/with-toggle.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var _default = (0, _withToggle.default)(actions.toggleSearch)(_toggleSearch.default);

exports.default = _default;

/***/ }),

/***/ "./src/app/containers/trigger-fullscreen.js":
/*!**************************************************!*\
  !*** ./src/app/containers/trigger-fullscreen.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _querystring = _interopRequireDefault(__webpack_require__(/*! querystring */ "../../node_modules/querystring-es3/index.js"));

var _reactRedux = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");

var _triggerFullscreen = _interopRequireDefault(__webpack_require__(/*! ../components/trigger-fullscreen */ "./src/app/components/trigger-fullscreen.js"));

var _withActiveForPattern = _interopRequireDefault(__webpack_require__(/*! ../connectors/with-active-for-pattern */ "./src/app/connectors/with-active-for-pattern.js"));

var _withId = _interopRequireDefault(__webpack_require__(/*! ../connectors/with-id */ "./src/app/connectors/with-id.js"));

var demo = _interopRequireWildcard(__webpack_require__(/*! ../selectors/demo */ "./src/app/selectors/demo.js"));

var _behaviours = __webpack_require__(/*! ../behaviours */ "./src/app/behaviours.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SkippableFullscreen = (0, _withActiveForPattern.default)((0, _behaviours.skippable)(_triggerFullscreen.default));

var mapProps = function mapProps(state) {
  var q = _querystring.default.stringify({
    reload: state.isStatic ? null : true
  });

  return {
    href: "".concat(demo.selectSrc(state), "?").concat(q)
  };
};

var _default = (0, _reactRedux.connect)(mapProps)((0, _withId.default)(SkippableFullscreen));

exports.default = _default;

/***/ }),

/***/ "./src/app/reducers/active-block.js":
/*!******************************************!*\
  !*** ./src/app/reducers/active-block.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reduxActions = __webpack_require__(/*! redux-actions */ "../../node_modules/redux-actions/lib/index.js");

var _markBlock = _interopRequireDefault(__webpack_require__(/*! ../actions/mark-block */ "./src/app/actions/mark-block.js"));

var _handleActions;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultValue = null;

var markBlockHandler = function markBlockHandler(state, _ref) {
  var payload = _ref.payload;
  var active = payload.active,
      id = payload.id;

  if (active) {
    return id;
  }

  return defaultValue;
};

var locationChangeHandler = function locationChangeHandler() {
  return defaultValue;
};

var _default = (0, _reduxActions.handleActions)((_handleActions = {}, _defineProperty(_handleActions, _markBlock.default, markBlockHandler), _defineProperty(_handleActions, "@@router/LOCATION_CHANGE", locationChangeHandler), _handleActions), defaultValue);

exports.default = _default;

/***/ }),

/***/ "./src/app/reducers/active-node.js":
/*!*****************************************!*\
  !*** ./src/app/reducers/active-node.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getIdByPathname = _interopRequireDefault(__webpack_require__(/*! ../utils/get-id-by-pathname */ "./src/app/utils/get-id-by-pathname.js"));

var _reduxActions = __webpack_require__(/*! redux-actions */ "../../node_modules/redux-actions/lib/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function handler(_, _ref) {
  var payload = _ref.payload;
  return payload.query["active-node"];
}

var _default = (0, _reduxActions.handleActions)({
  "@@router/LOCATION_CHANGE": handler
});

exports.default = _default;

/***/ }),

/***/ "./src/app/reducers/base.js":
/*!**********************************!*\
  !*** ./src/app/reducers/base.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reduxActions = __webpack_require__(/*! redux-actions */ "../../node_modules/redux-actions/lib/index.js");

var _depth = __webpack_require__(/*! ./depth */ "./src/app/reducers/depth.js");

var _default = function _default(state) {
  return state;
};

exports.default = _default;

/***/ }),

/***/ "./src/app/reducers/code-enabled.js":
/*!******************************************!*\
  !*** ./src/app/reducers/code-enabled.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var actions = _interopRequireWildcard(__webpack_require__(/*! ../actions */ "./src/app/actions/index.js"));

var _toggle = _interopRequireDefault(__webpack_require__(/*! ./toggle */ "./src/app/reducers/toggle.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var _default = (0, _toggle.default)(actions.toggleCode, {
  defaultValue: false
});

exports.default = _default;

/***/ }),

/***/ "./src/app/reducers/components-enabled.js":
/*!************************************************!*\
  !*** ./src/app/reducers/components-enabled.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var actions = _interopRequireWildcard(__webpack_require__(/*! ../actions */ "./src/app/actions/index.js"));

var _toggle = _interopRequireDefault(__webpack_require__(/*! ./toggle */ "./src/app/reducers/toggle.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var _default = (0, _toggle.default)(actions.toggleComponentsEnabled, {
  defaultValue: false
});

exports.default = _default;

/***/ }),

/***/ "./src/app/reducers/config.js":
/*!************************************!*\
  !*** ./src/app/reducers/config.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _server = __webpack_require__(/*! react-dom/server */ "../../node_modules/react-dom/server.browser.js");

var _lodash = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");

var _components = __webpack_require__(/*! @patternplate/components */ "../components/index.js");

var _default = function _default(state, action) {
  var copy;

  switch (action.type) {
    case "LOAD_SCHEMA_SUCCESS":
      {
        copy = (0, _lodash.merge)({}, action.payload.config);
        break;
      }

    default:
      {
        copy = (0, _lodash.merge)({}, state);
      }
  }

  if (!copy.hasOwnProperty("ui")) {
    copy.ui = {};
  }

  var _copy = copy,
      ui = _copy.ui;
  ui.renderedLogo = ui.hasOwnProperty("logo") ? (0, _server.renderToString)(_components.svg.render(_components.svg.sanitize(_components.svg.purge([_components.svg.parse(ui.logo)]))[0])) : "";
  var favicon = ui.favicon || ui.logo;
  ui.renderedFavicon = global.document && favicon ? _components.svg.png(favicon) : Promise.resolve("");
  return copy;
};

exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/app/reducers/connection.js":
/*!****************************************!*\
  !*** ./src/app/reducers/connection.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _handleDependentActions = _interopRequireDefault(__webpack_require__(/*! ../actions/handle-dependent-actions */ "./src/app/actions/handle-dependent-actions.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _handleDependentActions.default)({
  LISTEN_HEARTBEAT: function LISTEN_HEARTBEAT() {
    return handle.apply(void 0, arguments);
  },
  FETCHING: function FETCHING() {
    return handle.apply(void 0, arguments);
  },
  ERROR_HEARTBEAT: function ERROR_HEARTBEAT() {
    return "offline";
  }
}, {
  defaultValue: "",
  dependencies: ["fetching"]
});

exports.default = _default;

function handle() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "loading";
  var action = arguments.length > 1 ? arguments[1] : undefined;

  var _ref = arguments.length > 2 ? arguments[2] : undefined,
      fetching = _ref.fetching;

  return fetching ? "loading" : "loaded";
}

/***/ }),

/***/ "./src/app/reducers/demo.js":
/*!**********************************!*\
  !*** ./src/app/reducers/demo.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = demo;
var DEFAULT = {
  error: null,
  fetching: false,
  id: null,
  contents: null,
  updated: null
};

function demo() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "LOAD_PATTERN_DEMO_START":
      return {
        error: null,
        fetching: true,
        id: action.payload.id,
        contents: state.contents,
        updated: state.updated
      };

    case "LOAD_PATTERN_DEMO_SUCCESS":
      {
        return {
          error: null,
          fetching: false,
          id: action.payload.id,
          contents: action.payload.contents,
          updated: !action.payload.force && state.contents === action.payload.contents && state.id === action.payload.id ? state.updated : Date.now()
        };
      }

    case "LOAD_PATTERN_DEMO_ERROR":
      return {
        error: true,
        fetching: false,
        id: action.payload.id,
        contents: null,
        updated: Date.now()
      };

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/app/reducers/dependencies-enabled.js":
/*!**************************************************!*\
  !*** ./src/app/reducers/dependencies-enabled.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var actions = _interopRequireWildcard(__webpack_require__(/*! ../actions */ "./src/app/actions/index.js"));

var _toggle = _interopRequireDefault(__webpack_require__(/*! ./toggle */ "./src/app/reducers/toggle.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var _default = (0, _toggle.default)(actions.toggleDependencies, {
  defaultValue: false
});

exports.default = _default;

/***/ }),

/***/ "./src/app/reducers/dependents-enabled.js":
/*!************************************************!*\
  !*** ./src/app/reducers/dependents-enabled.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reduxActions = __webpack_require__(/*! redux-actions */ "../../node_modules/redux-actions/lib/index.js");

var defaultValue = false;

function onLocationChange(_, action) {
  return action.payload.query["dependents-enabled"] === "true";
}

var _default = (0, _reduxActions.handleActions)({
  "@@router/LOCATION_CHANGE": onLocationChange
}, defaultValue);

exports.default = _default;

/***/ }),

/***/ "./src/app/reducers/depth.js":
/*!***********************************!*\
  !*** ./src/app/reducers/depth.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDepth = getDepth;
exports.default = void 0;

var _reduxActions = __webpack_require__(/*! redux-actions */ "../../node_modules/redux-actions/lib/index.js");

function getDepth(pathname) {
  var fragments = pathname.split("/").filter(Boolean);
  var fragmentIndex = ["pattern", "doc"].map(function (known) {
    return fragments.indexOf(known);
  }).find(function (index) {
    return index !== -1;
  });
  var index = fragmentIndex === null ? fragments.length : fragmentIndex;
  return fragments.slice(0, index).filter(Boolean).length;
}

var _default = (0, _reduxActions.handleAction)("@@router/LOCATION_CHANGE", {
  next: function next(_, _ref) {
    var pathname = _ref.payload.pathname;
    return getDepth(pathname);
  }
}, ".");

exports.default = _default;

/***/ }),

/***/ "./src/app/reducers/doc-enabled.js":
/*!*****************************************!*\
  !*** ./src/app/reducers/doc-enabled.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var actions = _interopRequireWildcard(__webpack_require__(/*! ../actions */ "./src/app/actions/index.js"));

var _toggle = _interopRequireDefault(__webpack_require__(/*! ./toggle */ "./src/app/reducers/toggle.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var _default = (0, _toggle.default)(actions.toggleDoc, {
  defaultValue: false
});

exports.default = _default;

/***/ }),

/***/ "./src/app/reducers/fetching.js":
/*!**************************************!*\
  !*** ./src/app/reducers/fetching.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _promiseThunkAction = __webpack_require__(/*! ../actions/promise-thunk-action */ "./src/app/actions/promise-thunk-action.js");

var _actions = __webpack_require__(/*! ../actions */ "./src/app/actions/index.js");

var _default = (0, _promiseThunkAction.handlePromiseThunkAction)(_actions.loadSchema, {
  start: function start() {
    return true;
  },
  success: function success() {
    return false;
  },
  error: function error() {
    return false;
  }
}, {
  defaultValue: false
});

exports.default = _default;

/***/ }),

/***/ "./src/app/reducers/hide-enabled.js":
/*!******************************************!*\
  !*** ./src/app/reducers/hide-enabled.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var actions = _interopRequireWildcard(__webpack_require__(/*! ../actions */ "./src/app/actions/index.js"));

var _toggle = _interopRequireDefault(__webpack_require__(/*! ./toggle */ "./src/app/reducers/toggle.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var _default = (0, _toggle.default)(actions.toggleHide, {
  defaultValue: true
});

exports.default = _default;

/***/ }),

/***/ "./src/app/reducers/id.js":
/*!********************************!*\
  !*** ./src/app/reducers/id.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getIdByPathname = _interopRequireDefault(__webpack_require__(/*! ../utils/get-id-by-pathname */ "./src/app/utils/get-id-by-pathname.js"));

var _handleDependentActions = _interopRequireDefault(__webpack_require__(/*! ../actions/handle-dependent-actions */ "./src/app/actions/handle-dependent-actions.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function handler(_, _ref, _ref2) {
  var payload = _ref.payload;
  var base = _ref2.base;
  return (0, _getIdByPathname.default)(payload.pathname, base) || "/";
}

var _default = (0, _handleDependentActions.default)({
  "@@router/LOCATION_CHANGE": handler
}, {
  dependencies: ["base"]
});

exports.default = _default;

/***/ }),

/***/ "./src/app/reducers/index.js":
/*!***********************************!*\
  !*** ./src/app/reducers/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dependencies = exports.default = void 0;

var _activeBlock = _interopRequireDefault(__webpack_require__(/*! ./active-block */ "./src/app/reducers/active-block.js"));

var _activeNode = _interopRequireDefault(__webpack_require__(/*! ./active-node */ "./src/app/reducers/active-node.js"));

var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "./src/app/reducers/base.js"));

var _config = _interopRequireDefault(__webpack_require__(/*! ./config */ "./src/app/reducers/config.js"));

var _codeEnabled = _interopRequireDefault(__webpack_require__(/*! ./code-enabled */ "./src/app/reducers/code-enabled.js"));

var _connection = _interopRequireDefault(__webpack_require__(/*! ./connection */ "./src/app/reducers/connection.js"));

var _depth = _interopRequireDefault(__webpack_require__(/*! ./depth */ "./src/app/reducers/depth.js"));

var _demo = _interopRequireDefault(__webpack_require__(/*! ./demo */ "./src/app/reducers/demo.js"));

var _dependenciesEnabled = _interopRequireDefault(__webpack_require__(/*! ./dependencies-enabled */ "./src/app/reducers/dependencies-enabled.js"));

var _dependentsEnabled = _interopRequireDefault(__webpack_require__(/*! ./dependents-enabled */ "./src/app/reducers/dependents-enabled.js"));

var _docEnabled = _interopRequireDefault(__webpack_require__(/*! ./doc-enabled */ "./src/app/reducers/doc-enabled.js"));

var _fetching = _interopRequireDefault(__webpack_require__(/*! ./fetching */ "./src/app/reducers/fetching.js"));

var _id = _interopRequireDefault(__webpack_require__(/*! ./id */ "./src/app/reducers/id.js"));

var _infoEnabled = _interopRequireDefault(__webpack_require__(/*! ./info-enabled */ "./src/app/reducers/info-enabled.js"));

var _isStatic = _interopRequireDefault(__webpack_require__(/*! ./is-static */ "./src/app/reducers/is-static.js"));

var _manifestEnabled = _interopRequireDefault(__webpack_require__(/*! ./manifest-enabled */ "./src/app/reducers/manifest-enabled.js"));

var _messages = _interopRequireDefault(__webpack_require__(/*! ./messages */ "./src/app/reducers/messages.js"));

var _navigationEnabled = _interopRequireDefault(__webpack_require__(/*! ./navigation-enabled */ "./src/app/reducers/navigation-enabled.js"));

var _networkEnabled = _interopRequireDefault(__webpack_require__(/*! ./network-enabled */ "./src/app/reducers/network-enabled.js"));

var _opacity = _interopRequireDefault(__webpack_require__(/*! ./opacity */ "./src/app/reducers/opacity.js"));

var _componentsEnabled = _interopRequireDefault(__webpack_require__(/*! ./components-enabled */ "./src/app/reducers/components-enabled.js"));

var _search = _interopRequireDefault(__webpack_require__(/*! ./search */ "./src/app/reducers/search.js"));

var _searchEnabled = _interopRequireDefault(__webpack_require__(/*! ./search-enabled */ "./src/app/reducers/search-enabled.js"));

var _searchPreview = _interopRequireDefault(__webpack_require__(/*! ./search-preview */ "./src/app/reducers/search-preview.js"));

var _searchValue = _interopRequireDefault(__webpack_require__(/*! ./search-value */ "./src/app/reducers/search-value.js"));

var _schema = _interopRequireDefault(__webpack_require__(/*! ./schema */ "./src/app/reducers/schema.js"));

var _shortcuts = _interopRequireDefault(__webpack_require__(/*! ./shortcuts */ "./src/app/reducers/shortcuts.js"));

var _theme = _interopRequireDefault(__webpack_require__(/*! ./theme */ "./src/app/reducers/theme.js"));

var _hideEnabled = _interopRequireDefault(__webpack_require__(/*! ./hide-enabled */ "./src/app/reducers/hide-enabled.js"));

var _window = _interopRequireDefault(__webpack_require__(/*! ./window */ "./src/app/reducers/window.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ident = function ident(state) {
  return state || {};
};

var getDependencies = function getDependencies() {
  var reducer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return reducer.dependencies || [];
};

var _default = {
  base: _base.default,
  config: _config.default,
  connection: _connection.default,
  demo: _demo.default,
  depth: _depth.default,
  fetching: _fetching.default,
  hideEnabled: _hideEnabled.default,
  id: _id.default,
  isStatic: _isStatic.default,
  manifest: ident,
  messages: _messages.default,
  navigationEnabled: _navigationEnabled.default,
  opacity: _opacity.default,
  componentsEnabled: _componentsEnabled.default,
  schema: _schema.default,
  search: _search.default,
  searchEnabled: _searchEnabled.default,
  searchPreview: _searchPreview.default,
  searchValue: _searchValue.default,
  shortcuts: _shortcuts.default,
  startBase: ident,
  staticBase: ident,
  theme: _theme.default,
  window: _window.default
};
exports.default = _default;
var dependencies = {
  connection: getDependencies(_connection.default)
};
exports.dependencies = dependencies;

/***/ }),

/***/ "./src/app/reducers/info-enabled.js":
/*!******************************************!*\
  !*** ./src/app/reducers/info-enabled.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var actions = _interopRequireWildcard(__webpack_require__(/*! ../actions */ "./src/app/actions/index.js"));

var _toggle = _interopRequireDefault(__webpack_require__(/*! ./toggle */ "./src/app/reducers/toggle.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var _default = (0, _toggle.default)(actions.toggleInfo, {
  defaultValue: false
});

exports.default = _default;

/***/ }),

/***/ "./src/app/reducers/is-static.js":
/*!***************************************!*\
  !*** ./src/app/reducers/is-static.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return state;
};

exports.default = _default;

/***/ }),

/***/ "./src/app/reducers/manifest-enabled.js":
/*!**********************************************!*\
  !*** ./src/app/reducers/manifest-enabled.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var actions = _interopRequireWildcard(__webpack_require__(/*! ../actions */ "./src/app/actions/index.js"));

var _toggle = _interopRequireDefault(__webpack_require__(/*! ./toggle */ "./src/app/reducers/toggle.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var _default = (0, _toggle.default)(actions.toggleManifest, {
  defaultValue: false
});

exports.default = _default;

/***/ }),

/***/ "./src/app/reducers/messages.js":
/*!**************************************!*\
  !*** ./src/app/reducers/messages.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "LOAD_PATTERN_DEMO_SUCCESS":
      if (action.payload.id in state) {
        return (0, _lodash.omit)(state, action.payload.id);
      }

      return state;

    case "LOAD_PATTERN_DEMO_ERROR":
      return (0, _lodash.merge)({}, state, _defineProperty({}, action.payload.id, action.payload.error));

    default:
      return state;
  }
};

exports.default = _default;

/***/ }),

/***/ "./src/app/reducers/navigation-enabled.js":
/*!************************************************!*\
  !*** ./src/app/reducers/navigation-enabled.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var actions = _interopRequireWildcard(__webpack_require__(/*! ../actions */ "./src/app/actions/index.js"));

var _toggle = _interopRequireDefault(__webpack_require__(/*! ./toggle */ "./src/app/reducers/toggle.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var _default = (0, _toggle.default)(actions.toggleNavigation, {
  defaultValue: true
});

exports.default = _default;

/***/ }),

/***/ "./src/app/reducers/network-enabled.js":
/*!*********************************************!*\
  !*** ./src/app/reducers/network-enabled.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var actions = _interopRequireWildcard(__webpack_require__(/*! ../actions */ "./src/app/actions/index.js"));

var _toggle = _interopRequireDefault(__webpack_require__(/*! ./toggle */ "./src/app/reducers/toggle.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var _default = (0, _toggle.default)(actions.toggleNetwork, {
  defaultValue: null
});

exports.default = _default;

/***/ }),

/***/ "./src/app/reducers/opacity.js":
/*!*************************************!*\
  !*** ./src/app/reducers/opacity.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var actions = _interopRequireWildcard(__webpack_require__(/*! ../actions */ "./src/app/actions/index.js"));

var _toggle = _interopRequireDefault(__webpack_require__(/*! ./toggle */ "./src/app/reducers/toggle.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var _default = (0, _toggle.default)(actions.toggleOpacity, {
  defaultValue: false
});

exports.default = _default;

/***/ }),

/***/ "./src/app/reducers/schema.js":
/*!************************************!*\
  !*** ./src/app/reducers/schema.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _actions = __webpack_require__(/*! ../actions */ "./src/app/actions/index.js");

var _promiseThunkAction = __webpack_require__(/*! ../actions/promise-thunk-action */ "./src/app/actions/promise-thunk-action.js");

var _default = (0, _promiseThunkAction.handlePromiseThunkAction)(_actions.loadSchema, {
  success: function success(state, action) {
    return action.payload;
  }
});

exports.default = _default;

/***/ }),

/***/ "./src/app/reducers/search-enabled.js":
/*!********************************************!*\
  !*** ./src/app/reducers/search-enabled.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var actions = _interopRequireWildcard(__webpack_require__(/*! ../actions */ "./src/app/actions/index.js"));

var _toggle = _interopRequireDefault(__webpack_require__(/*! ./toggle */ "./src/app/reducers/toggle.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var _default = (0, _toggle.default)(actions.toggleSearch, {
  defaultValue: false
});

exports.default = _default;

/***/ }),

/***/ "./src/app/reducers/search-preview.js":
/*!********************************************!*\
  !*** ./src/app/reducers/search-preview.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reduxActions = __webpack_require__(/*! redux-actions */ "../../node_modules/redux-actions/lib/index.js");

var defaultValue = 0;

function onPreviewLocationChange(_, action) {
  var index = Number(action.payload.query["search-preview"]);
  return isNaN(index) ? 0 : Math.max(0, index);
}

function onPerformSeach() {
  return 0;
}

var _default = (0, _reduxActions.handleActions)({
  "@@router/LOCATION_CHANGE": onPreviewLocationChange,
  PERFORM_SEARCH: onPerformSeach
}, defaultValue);

exports.default = _default;

/***/ }),

/***/ "./src/app/reducers/search-value.js":
/*!******************************************!*\
  !*** ./src/app/reducers/search-value.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reduxActions = __webpack_require__(/*! redux-actions */ "../../node_modules/redux-actions/lib/index.js");

var defaultValue = "";

function onSetSearchLocationChange(_, action) {
  return action.payload.query.search;
}

function onSetSearch(_, action) {
  return action.payload;
}

function onPerformSearch(_, action) {
  return action.payload;
}

var _default = (0, _reduxActions.handleActions)({
  "@@router/LOCATION_CHANGE": onSetSearchLocationChange,
  SET_SEARCH: onSetSearch,
  PERFORM_SEARCH: onPerformSearch
}, defaultValue);

exports.default = _default;

/***/ }),

/***/ "./src/app/reducers/search.js":
/*!************************************!*\
  !*** ./src/app/reducers/search.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reduxActions = __webpack_require__(/*! redux-actions */ "../../node_modules/redux-actions/lib/index.js");

var defaultValue = "";

function onSearchLocationChange(_, action) {
  return action.payload.query.search;
}

function onPerformSeach(_, action) {
  return action.payload;
}

var _default = (0, _reduxActions.handleActions)({
  "@@router/LOCATION_CHANGE": onSearchLocationChange,
  PERFORM_SEARCH: onPerformSeach
}, defaultValue);

exports.default = _default;

/***/ }),

/***/ "./src/app/reducers/shortcuts.js":
/*!***************************************!*\
  !*** ./src/app/reducers/shortcuts.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(state) {
  return state;
};

exports.default = _default;

/***/ }),

/***/ "./src/app/reducers/theme.js":
/*!***********************************!*\
  !*** ./src/app/reducers/theme.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reduxActions = __webpack_require__(/*! redux-actions */ "../../node_modules/redux-actions/lib/index.js");

var defaultValue = "light";

var locationChangeHandler = function locationChangeHandler(_, _ref) {
  var payload = _ref.payload;
  return payload.query.theme || defaultValue;
};

var _default = (0, _reduxActions.handleActions)({
  "@@router/LOCATION_CHANGE": locationChangeHandler
}, defaultValue);

exports.default = _default;

/***/ }),

/***/ "./src/app/reducers/toggle.js":
/*!************************************!*\
  !*** ./src/app/reducers/toggle.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _assert = _interopRequireDefault(__webpack_require__(/*! assert */ "../../node_modules/assert/assert.js"));

var _reduxActions = __webpack_require__(/*! redux-actions */ "../../node_modules/redux-actions/lib/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _default = function _default(action) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  (0, _assert.default)(typeof action === "function", "toggle needs an action to create a handler for, received ".concat(action, " of type ").concat(_typeof(action)));
  return (0, _reduxActions.handleActions)({
    "@@router/LOCATION_CHANGE": function routerLOCATION_CHANGE(_, _ref) {
      var payload = _ref.payload;

      if (!(action.key in payload.query)) {
        return options.defaultValue;
      }

      return payload.query[action.key] === "true";
    }
  }, options.defaultValue);
};

exports.default = _default;

/***/ }),

/***/ "./src/app/reducers/window.js":
/*!************************************!*\
  !*** ./src/app/reducers/window.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");

var _reduxActions = __webpack_require__(/*! redux-actions */ "../../node_modules/redux-actions/lib/index.js");

var _actions = __webpack_require__(/*! ../actions */ "./src/app/actions/index.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultValue = {
  height: 0,
  width: 0
};

var _default = (0, _reduxActions.handleActions)(_defineProperty({}, _actions.windowResize, onWindowResize), defaultValue);

exports.default = _default;

function onWindowResize(state, _ref) {
  var payload = _ref.payload;
  var next = {
    width: payload.width,
    height: payload.height
  };

  if (!(0, _lodash.isEqual)(next, state)) {
    return next;
  }

  return state;
}

/***/ }),

/***/ "./src/app/routes.js":
/*!***************************!*\
  !*** ./src/app/routes.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));

var _reactRouter = __webpack_require__(/*! @marionebl/react-router */ "../../node_modules/@marionebl/react-router/lib/index.js");

var _application = _interopRequireDefault(__webpack_require__(/*! ./containers/application */ "./src/app/containers/application.js"));

var _pattern = _interopRequireDefault(__webpack_require__(/*! ./containers/pattern */ "./src/app/containers/pattern.js"));

var _documentation = _interopRequireDefault(__webpack_require__(/*! ./containers/documentation */ "./src/app/containers/documentation.js"));

var _notFound = _interopRequireDefault(__webpack_require__(/*! ./containers/not-found */ "./src/app/containers/not-found.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(store) {
  var state = store.getState();
  return _react.default.createElement(_reactRouter.Route, {
    path: state.base,
    component: _application.default
  }, _react.default.createElement(_reactRouter.IndexRoute, {
    component: _documentation.default
  }), _react.default.createElement(_reactRouter.Route, {
    path: "pattern/*",
    component: _pattern.default
  }), _react.default.createElement(_reactRouter.Route, {
    path: "doc/*",
    component: _documentation.default
  }), _react.default.createElement(_reactRouter.Route, {
    path: "*",
    component: _notFound.default
  }));
}

/***/ }),

/***/ "./src/app/selectors/demo.js":
/*!***********************************!*\
  !*** ./src/app/selectors/demo.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectSrc = void 0;

var _reselect = __webpack_require__(/*! reselect */ "../../node_modules/reselect/lib/index.js");

var _item = _interopRequireDefault(__webpack_require__(/*! ./item */ "./src/app/selectors/item.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var selectSrc = (0, _reselect.createSelector)(_item.default, function (state) {
  return state.base;
}, function (item, base) {
  if (!item) {
    return null;
  }

  if (item.contentType !== "pattern") {
    return null;
  }

  return "".concat(prefix(base), "/api/demo/").concat(item.id, ".html");
});
exports.selectSrc = selectSrc;

function prefix(base) {
  return base.charAt(base.length - 1) === "/" ? base.slice(0, base.length - 1) : base;
}

/***/ }),

/***/ "./src/app/selectors/docs.js":
/*!***********************************!*\
  !*** ./src/app/selectors/docs.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flat = exports.default = void 0;

var _search = __webpack_require__(/*! @patternplate/search */ "../search/index.js");

var _lodash = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");

var _reselect = __webpack_require__(/*! reselect */ "../../node_modules/reselect/lib/index.js");

var _navigation = __webpack_require__(/*! ../selectors/navigation */ "./src/app/selectors/navigation.js");

var _tree = __webpack_require__(/*! ./tree */ "./src/app/selectors/tree.js");

var sd = (0, _reselect.createSelector)(function (state) {
  return state.schema.docs;
}, function (state) {
  return state.id;
}, function (state) {
  return state.hideEnabled;
}, function (state) {
  return state.routing.locationBeforeTransitions;
}, function (state) {
  return state.base;
}, function () {
  return function () {
    return [];
  };
}, function (tree, id, hide, location, base, search) {
  var context = {
    hide: hide,
    id: id,
    prefix: "doc",
    location: location,
    base: base,
    search: search
  };
  return (0, _tree.flatten)((0, _tree.sanitize)((0, _lodash.merge)({}, tree), context)).filter(function (item) {
    return item.type !== "folder";
  });
});
var selectFlatPool = (0, _reselect.createSelector)(sd, _navigation.flat, function (state) {
  return {
    hide: state.hideEnabled,
    id: state.id,
    location: state.routing.locationBeforeTransitions,
    base: state.base,
    prefix: "doc",
    search: function search() {
      return [];
    }
  };
}, function (docs, nav, context) {
  return docs.map(function (d) {
    return (0, _tree.enrich)(d, context);
  }).concat(nav).filter(function (item) {
    return Boolean(item.id) && Boolean(item.contentType);
  });
});
var selectSubSearch = (0, _reselect.createSelector)(selectFlatPool, function (flatPool) {
  var search = (0, _search.createSearch)(flatPool);
  return function (term) {
    var matches = search(term);
    return matches.map(function (item) {
      return flatPool.find(function (p) {
        return p.id === item;
      });
    });
  };
});
var selectDocsTree = (0, _reselect.createSelector)(function (state) {
  return state.schema.docs;
}, function (state) {
  return state.id;
}, function (state) {
  return state.hideEnabled;
}, function (state) {
  return state.routing.locationBeforeTransitions;
}, function (state) {
  return state.base;
}, selectSubSearch, function (tree, id, hide, location, base, search) {
  var context = {
    hide: hide,
    id: id,
    prefix: "doc",
    location: location,
    base: base,
    search: search
  };
  return (0, _tree.sanitize)((0, _lodash.merge)({}, tree), context);
});
var selectFirstItem = (0, _reselect.createSelector)(selectDocsTree, function (tree) {
  var list = (0, _tree.flatten)(tree);
  return list ? list[0] : null;
});
var selectQueries = (0, _reselect.createSelector)(selectDocsTree, function (tree) {
  return (0, _tree.flatten)(tree).map(function (item) {
    return (item.manifest.options || {}).query;
  }).filter(Boolean);
});
var selectQueried = (0, _reselect.createSelector)(selectDocsTree, selectQueries, function (tree, queries) {
  var search = (0, _search.createSearch)((0, _tree.flatten)(tree));
  return queries.reduce(function (acc, query) {
    return acc.concat(search(query).filter(function (r) {
      return acc.indexOf(r) === -1;
    }));
  }, []);
});
var selectDocs = (0, _reselect.createSelector)(selectDocsTree, selectFirstItem, selectQueried, function (state) {
  return state.id;
}, function (tree, first, queried, id) {
  tree.children = tree.children.filter(function (child) {
    return child.type === "folder" || queried.indexOf(child.id) === -1;
  });

  if (id === '/' && first) {
    first.active = true;
  }

  return tree;
});
var _default = selectDocs;
exports.default = _default;
var flat = (0, _reselect.createSelector)(selectDocs, _tree.flatten);
exports.flat = flat;

/***/ }),

/***/ "./src/app/selectors/found.js":
/*!************************************!*\
  !*** ./src/app/selectors/found.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectActiveItem = exports.selectSuggestion = exports.selectDocs = exports.selectLegend = exports.selectPatterns = exports.selectFound = void 0;

var _search = __webpack_require__(/*! @patternplate/search */ "../search/index.js");

var _lodash = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");

var _reselect = __webpack_require__(/*! reselect */ "../../node_modules/reselect/lib/index.js");

var _semver = _interopRequireDefault(__webpack_require__(/*! semver */ "../../node_modules/semver/semver.js"));

var _pool = __webpack_require__(/*! ./pool */ "./src/app/selectors/pool.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FLAGS = {
  alpha: 0,
  beta: 1,
  rc: 2,
  stable: 3,
  deprecated: 4
};
var FIELDS = [
/* {
  type: "field",
  key: "depends",
  value: "depends",
  description: "patterns depending on id",
  operators: ["=", "!=", "^=", "~="]
}, */
{
  type: "field",
  key: "flag",
  value: "flag",
  description: "being flagged as [value]",
  operators: ["=", "!=", ">", ">=", "<", "<=", "^=", "~="]
}, {
  type: "field",
  key: "is",
  value: "is",
  description: "being of type [value]",
  operators: ["=", "!="]
}, {
  type: "field",
  key: "has",
  value: "has",
  description: "having data of [value]",
  operators: ["=", "!="]
},
/* {
  type: "field",
  key: "provides",
  value: "provides",
  description: "patterns providing for id",
  operators: ["=", "!=", "^=", "~="]
}, */
{
  type: "field",
  key: "tags",
  value: "tags",
  description: "having a tag of [value]",
  operators: ["=", "!=", "^=", "~="]
}, {
  type: "field",
  key: "version",
  value: "version",
  description: "having version of [value]",
  operators: ["=", "!=", ">", ">=", "<", "<=", "^=", "~="]
}];
var OPERATORS = [{
  type: "op",
  key: "=",
  description: "exact match"
}, {
  type: "op",
  key: "!=",
  description: "negated match"
}, {
  type: "op",
  key: ">",
  description: "greater than"
}, {
  type: "op",
  key: ">=",
  description: "greater than or equal"
}, {
  type: "op",
  key: "<",
  description: "lesser than"
}, {
  type: "op",
  key: "<=",
  description: "lesser than or equal"
}, {
  type: "op",
  key: "^=",
  description: "starts with"
}, {
  type: "op",
  key: "~=",
  description: "contains"
}];
var selectSearch = (0, _reselect.createSelector)(_pool.flat, _search.createSearch);
var selectMatches = (0, _reselect.createSelector)(selectSearch, function (state) {
  return state.search;
}, function (search, queryString) {
  if (typeof queryString !== "string" || queryString.length < 3) {
    return [];
  }

  return search(queryString);
});
var selectParsedValue = (0, _reselect.createSelector)(function (state) {
  return state.searchValue;
}, function (search) {
  return _search.Query.parse(search);
});
var selectLastQuery = (0, _reselect.createSelector)(selectParsedValue, function (parsed) {
  return last(parsed);
});

function last(query) {
  switch (query.type) {
    case "string":
      return query.value;

    case "and":
    case "or":
    default:
      {
        var q = query || {};
        var values = q.values || [];
        var cand = values[values.length - 1];
        return cand ? last(cand) : "";
      }
  }
}

var selectFields = (0, _reselect.createSelector)(selectLastQuery, function (query) {
  return FIELDS.filter(function (f) {
    return f.value.startsWith(query);
  });
});
var selectFieldHit = (0, _reselect.createSelector)(function (state) {
  return state.searchValue;
}, selectLastQuery, function (value, query) {
  if (query.length === 0) {
    return null;
  }

  return FIELDS.find(function (f) {
    return query.startsWith(f.value);
  });
});
var selectParsedQuery = (0, _reselect.createSelector)(selectLastQuery, function (query) {
  return _search.Term.parse(query);
});
var selectOps = (0, _reselect.createSelector)(selectParsedQuery, selectFieldHit, function (parsed, hit) {
  if (!hit) {
    return [];
  }

  return hit.operators.map(function (o) {
    return OPERATORS.find(function (op) {
      return op.key === o;
    });
  }).filter(function (o) {
    return !parsed.operators || o.key.includes(parsed.operators);
  }).map(function (o) {
    o.value = "".concat(hit.value).concat(o.key);
    return o;
  });
});
var selectOpsHit = (0, _reselect.createSelector)(selectParsedQuery, selectOps, function (query, ops) {
  return ops.find(function (i) {
    if (query.negated) {
      return i.key === "!".concat(query.operators);
    }

    return i.key === query.operators;
  });
});
var selectFound = (0, _reselect.createSelector)(_pool.flat, selectMatches, function (pool, matches) {
  var sorted = (0, _lodash.uniqBy)((0, _lodash.sortBy)(matches.map(function (match) {
    return pool.find(function (p) {
      return p.id === match;
    });
  }), "contentType"), "id");
  return sorted.map(function (s, i) {
    s.index = i;
    return s;
  });
});
exports.selectFound = selectFound;
var selectPatterns = (0, _reselect.createSelector)(selectFound, function (found) {
  return found.filter(function (f) {
    return f.contentType === "pattern";
  });
});
exports.selectPatterns = selectPatterns;
var selectPatternPool = (0, _reselect.createSelector)(_pool.flat, function (pool) {
  return pool.filter(function (f) {
    return f.contentType === "pattern";
  });
});
var selectOptions = (0, _reselect.createSelector)(selectPatternPool, selectParsedQuery, selectFieldHit, selectOpsHit, function (patterns, parsed, field, op) {
  if (!field || !op) {
    return [];
  }

  switch (field.key) {
    case "has":
      return [{
        type: "quality",
        key: "docs",
        value: [field.key, op.key, "docs"].join(""),
        description: "colocated markdown"
      },
      /* {
        type: "quality",
        key: "dependencies",
        value: [field.key, op.key, "dependencies"].join(""),
        description: "patterns with dependencies"
      },
      {
        type: "quality",
        key: "dependents",
        value: [field.key, op.key, "dependents"].join(""),
        description: "patterns with dependents"
      }, */
      {
        type: "quality",
        key: "flag",
        value: [field.key, op.key, "flag"].join(""),
        description: "flag specified"
      }, {
        type: "quality",
        key: "version",
        value: [field.key, op.key, "version"].join(""),
        description: "version specified"
      }, {
        type: "quality",
        key: "description",
        value: [field.key, op.key, "description"].join(""),
        description: "description provided"
      }, {
        type: "quality",
        key: "displayName",
        value: [field.key, op.key, "displayName"].join(""),
        description: "display name provided"
      }, {
        type: "quality",
        key: "tags",
        value: [field.key, op.key, "tags"].join(""),
        description: "tag attached"
      }];

    case "depends":
    case "provides":
      return patterns.filter(function (item) {
        return item.id.startsWith(parsed.value || "");
      }).map(function (item) {
        return {
          type: "pattern",
          key: item.id,
          value: [field.key, op.key, item.id].join(""),
          description: "".concat(item.id)
        };
      });

    case "tags":
      return (0, _lodash.uniq)((0, _lodash.flatten)(patterns.map(function (item) {
        return item.manifest.tags;
      }))).filter(Boolean).map(function (tag) {
        return {
          type: "tag",
          key: tag,
          value: [field.key, op.key, tag].join(""),
          description: tag
        };
      });

    case "version":
      {
        var versions = (0, _lodash.uniqBy)(patterns.filter(function (item) {
          return item.manifest.version.startsWith(parsed.value || "");
        }).map(function (item) {
          return item.manifest.version;
        })).filter(function (version) {
          return _semver.default.valid(version);
        }).sort(function (a, b) {
          return _semver.default.gt(a, b) ? 1 : -1;
        });
        return versions.map(function (v) {
          return {
            type: "version",
            key: v,
            value: [field.key, op.key, v].join(""),
            description: "".concat(v)
          };
        });
      }

    case "flag":
      {
        var flags = (0, _lodash.uniqBy)(patterns.filter(function (item) {
          return item.manifest.flag.startsWith(parsed.value || "");
        }).map(function (item) {
          return item.manifest.flag;
        })).filter(function (flag) {
          return typeof flag === "string";
        }).sort(function (a, b) {
          var delta = (FLAGS[a] || 0) - (FLAGS[b] || 0);
          return delta === 0 ? a.localeCompare(b) : delta;
        });
        return flags.map(function (f) {
          return {
            type: "flag",
            key: f,
            value: [field.key, op.key, f].join(""),
            description: "".concat(f)
          };
        });
      }

    case "is":
      return [{
        type: "is",
        key: "pattern",
        value: [field.key, op.key, "pattern"].join(""),
        description: "is a pattern"
      }, {
        type: "is",
        key: "doc",
        value: [field.key, op.key, "doc"].join(""),
        description: "is a doc"
      }];

    default:
      return [];
  }
});
var selectOptionsHit = (0, _reselect.createSelector)(selectParsedQuery, selectOptions, function (query, ops) {
  return ops.some(function (o) {
    return o.value === query.raw;
  });
});
var selectLegend = (0, _reselect.createSelector)(selectParsedValue, selectParsedQuery, selectFields, selectFieldHit, selectOps, selectOpsHit, selectOptions, selectOptionsHit, function (parsedValue, parsed, fields, fieldHit, ops, opsHit, options, optionsHit) {
  if (!fieldHit) {
    return {
      name: "Fields",
      items: fields
    };
  }

  if (!opsHit && !parsed.value) {
    return {
      name: "Operators",
      items: ops
    };
  }

  if (!optionsHit && fieldHit && opsHit) {
    return {
      name: fieldHit.key,
      items: options
    };
  }

  return {
    name: "",
    items: []
  };
});
exports.selectLegend = selectLegend;
var selectDocs = (0, _reselect.createSelector)(selectFound, function (found) {
  return found.filter(function (f) {
    return f.contentType === "doc";
  });
});
exports.selectDocs = selectDocs;
var selectSuggestion = (0, _reselect.createSelector)(function (state) {
  return state.searchValue;
}, _pool.flat, selectLegend, function (search, pool, legend) {
  if (typeof search !== "string" || search.length === 0) {
    return "";
  }

  var match = pool.find(function (m) {
    return [m.id, m.name, (m.manifest || {}).displayName].some(function (k) {
      return k && k.startsWith(search);
    });
  });

  if (match) {
    return [match.id, match.name, match.manifest.displayName].find(function (k) {
      return k && k.startsWith(search);
    }) || "";
  }

  var lmatch = (legend.items || []).find(function (i) {
    return i.value.startsWith(search);
  });
  return lmatch ? lmatch.value : null;
});
exports.selectSuggestion = selectSuggestion;
var selectActiveItem = (0, _reselect.createSelector)(function (state) {
  return state;
}, selectFound, function (state) {
  return state.searchPreview;
}, function (state, found, preview) {
  var index = Math.min(preview, found.length - 1);
  var item = found[index];
  return item ? Object.assign({}, item, {
    index: index,
    dependents: [],
    // rel("dependents"),
    dependencies: [] // rel("dependencies")

  }) : item;
});
exports.selectActiveItem = selectActiveItem;

/***/ }),

/***/ "./src/app/selectors/item.js":
/*!***********************************!*\
  !*** ./src/app/selectors/item.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectDescription = exports.selectContents = exports.selectId = exports.selectFlag = exports.selectVersion = exports.selectTags = exports.selectName = exports.selectIcon = exports.selectActive = exports.selectType = exports.selectContentType = exports.selectManifest = exports.selectDependents = exports.selectDependencies = exports.default = void 0;

var _reselect = __webpack_require__(/*! reselect */ "../../node_modules/reselect/lib/index.js");

var _docs = __webpack_require__(/*! ./docs */ "./src/app/selectors/docs.js");

var _pool = __webpack_require__(/*! ./pool */ "./src/app/selectors/pool.js");

var _relation = _interopRequireDefault(__webpack_require__(/*! ./relation */ "./src/app/selectors/relation.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var selectVirtual = (0, _reselect.createSelector)(_docs.flat, function (docs) {
  return docs.filter(function (d) {
    var manifest = d.manifest;
    var _manifest$options = manifest.options,
        options = _manifest$options === void 0 ? {} : _manifest$options;
    var _options$query = options.query,
        query = _options$query === void 0 ? "" : _options$query;
    return Boolean(query);
  });
});
var selectItem = (0, _reselect.createSelector)(_pool.flat, function (state) {
  return state.id;
}, function (pool, id) {
  var item = pool.find(function (item) {
    return id === "".concat(item.contentType, "/").concat(item.id);
  });

  if (item) {
    return item;
  }

  if (id === '/') {
    return pool[0];
  }
});
var _default = selectItem;
exports.default = _default;

var filter = function filter(hidden) {
  return hidden ? function (item) {
    return (item.manifest.options || {}).hidden !== true;
  } : function (i) {
    return i;
  };
};

var selectFilter = (0, _reselect.createSelector)(function (state) {
  return state.hide;
}, function (hide) {
  return filter(hide);
});

var relation = function relation(key) {
  return (0, _relation.default)(key, selectItem, selectFilter);
};

var selectDependencies = relation("dependencies");
exports.selectDependencies = selectDependencies;
var selectDependents = relation("dependents");
exports.selectDependents = selectDependents;
var selectManifest = (0, _reselect.createSelector)(selectItem, function (item) {
  return item ? JSON.stringify(item.manifest, null, "  ") : "";
});
exports.selectManifest = selectManifest;
var selectContentType = (0, _reselect.createSelector)(selectItem, function (item) {
  return item ? item.contentType : "";
});
exports.selectContentType = selectContentType;
var selectType = (0, _reselect.createSelector)(selectItem, function (item) {
  return item ? item.type : "";
});
exports.selectType = selectType;
var selectActive = (0, _reselect.createSelector)(selectItem, function (state) {
  return state.searchEnabled;
}, function (item, search) {
  return !search && item !== null && typeof item !== "undefined";
});
exports.selectActive = selectActive;
var selectIcon = (0, _reselect.createSelector)(selectItem, function (item) {
  return item ? item.manifest.icon || item.type : "";
});
exports.selectIcon = selectIcon;
var selectName = (0, _reselect.createSelector)(selectItem, function (item) {
  return item ? item.manifest.displayName : "";
});
exports.selectName = selectName;
var selectTags = (0, _reselect.createSelector)(selectItem, function (item) {
  return item ? item.manifest.tags || [] : [];
});
exports.selectTags = selectTags;
var selectVersion = (0, _reselect.createSelector)(selectItem, function (item) {
  return item ? item.manifest.version : "";
});
exports.selectVersion = selectVersion;
var selectFlag = (0, _reselect.createSelector)(selectItem, function (item) {
  return item ? item.manifest.flag : "";
});
exports.selectFlag = selectFlag;
var selectId = (0, _reselect.createSelector)(selectItem, function (item) {
  return item ? item.id : "";
});
exports.selectId = selectId;
var selectContents = (0, _reselect.createSelector)(selectItem, function (item) {
  if (!item) {
    return null;
  }

  return typeof item.contents === "string" ? item.contents : null;
});
exports.selectContents = selectContents;
var selectDescription = (0, _reselect.createSelector)(selectItem, function (item) {
  return item ? item.manifest.description : "";
});
exports.selectDescription = selectDescription;

/***/ }),

/***/ "./src/app/selectors/navigation.js":
/*!*****************************************!*\
  !*** ./src/app/selectors/navigation.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flat = exports.default = void 0;

var _lodash = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");

var _reselect = __webpack_require__(/*! reselect */ "../../node_modules/reselect/lib/index.js");

var _tree = __webpack_require__(/*! ./tree */ "./src/app/selectors/tree.js");

var navigation = (0, _reselect.createSelector)(function (state) {
  return state.schema.meta;
}, function (state) {
  return state.id;
}, function (state) {
  return state.hideEnabled;
}, function (state) {
  return state.routing.locationBeforeTransitions;
}, function (state) {
  return state.base;
}, function (tree, id, hide, location, base) {
  var context = {
    base: base,
    hide: hide,
    id: id,
    prefix: "pattern",
    location: location
  };
  return (0, _tree.sanitize)((0, _lodash.merge)({}, tree), context);
});
var _default = navigation;
exports.default = _default;
var flat = (0, _reselect.createSelector)(navigation, _tree.flatten);
exports.flat = flat;

/***/ }),

/***/ "./src/app/selectors/pool.js":
/*!***********************************!*\
  !*** ./src/app/selectors/pool.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flat = exports.default = exports.selectFlatPool = void 0;

var _search = __webpack_require__(/*! @patternplate/search */ "../search/index.js");

var _reselect = __webpack_require__(/*! reselect */ "../../node_modules/reselect/lib/index.js");

var _docs = __webpack_require__(/*! ../selectors/docs */ "./src/app/selectors/docs.js");

var _navigation = __webpack_require__(/*! ../selectors/navigation */ "./src/app/selectors/navigation.js");

var _tree = __webpack_require__(/*! ../selectors/tree */ "./src/app/selectors/tree.js");

var selectFlatPool = (0, _reselect.createSelector)(_docs.flat, _navigation.flat, function (state) {
  return {
    hide: state.hideEnabled,
    id: state.id,
    location: state.routing.locationBeforeTransitions,
    base: state.base,
    prefix: "doc",
    search: function search() {
      return [];
    }
  };
}, function (docs, nav, context) {
  var enriched = flatten(docs.map(function (d) {
    return (0, _tree.enrich)(d, context);
  }));
  return enriched.concat(nav).filter(function (item) {
    return Boolean(item.id) && Boolean(item.contentType);
  });
});
exports.selectFlatPool = selectFlatPool;
var selectSearch = (0, _reselect.createSelector)(selectFlatPool, function (flatPool) {
  var search = function search() {
    return [];
  };

  return function (term) {
    var matches = search(term);
    return matches.map(function (item) {
      return flatPool.find(function (p) {
        return p.id === item;
      });
    });
  };
});
var selectPool = (0, _reselect.createSelector)(_docs.flat, _navigation.flat, function (state) {
  return {
    hide: state.hideEnabled,
    id: state.id,
    location: state.routing.locationBeforeTransitions,
    base: state.base,
    prefix: "doc",
    search: selectSearch(state)
  };
}, function (docs, nav, context) {
  var enriched = flatten(docs.map(function (d) {
    return (0, _tree.enrich)(d, context);
  }));
  return enriched.concat(nav).filter(function (item) {
    return Boolean(item.id) && Boolean(item.contentType);
  });
});

function flatten(tree) {
  var initial = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return tree.reduce(function (acc, item) {
    acc.push(item);

    if (Array.isArray(item.children)) {
      flatten(item.children, acc);
    }

    return acc;
  }, initial);
}

var _default = selectPool;
exports.default = _default;
var flat = (0, _reselect.createSelector)(_docs.flat, _navigation.flat, function (docs, nav) {
  return flatten(docs.concat(nav)).filter(function (item) {
    return item.type === "item";
  });
});
exports.flat = flat;

/***/ }),

/***/ "./src/app/selectors/relation.js":
/*!***************************************!*\
  !*** ./src/app/selectors/relation.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createRelationSelector;

var _reselect = __webpack_require__(/*! reselect */ "../../node_modules/reselect/lib/index.js");

var _navigation = _interopRequireDefault(__webpack_require__(/*! ./navigation */ "./src/app/selectors/navigation.js"));

var _find = _interopRequireDefault(__webpack_require__(/*! ../utils/find */ "./src/app/utils/find.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createRelationSelector(key, selectItem) {
  return (0, _reselect.createSelector)(_navigation.default, selectItem, function (patterns, item) {
    if (!item) {
      return [];
    }

    return (item[key] || []).map(function (id) {
      return (0, _find.default)(patterns, "pattern/".concat(id), {
        type: "pattern"
      });
    }).filter(Boolean);
  });
}

/***/ }),

/***/ "./src/app/selectors/tree.js":
/*!***********************************!*\
  !*** ./src/app/selectors/tree.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flatten = flatten;
exports.sanitize = sanitize;
exports.enrich = enrich;

var _path = _interopRequireDefault(__webpack_require__(/*! path */ "../../node_modules/path-browserify/index.js"));

var _querystring = _interopRequireDefault(__webpack_require__(/*! querystring */ "../../node_modules/querystring-es3/index.js"));

var _url = _interopRequireDefault(__webpack_require__(/*! url */ "../../node_modules/url/url.js"));

var _lodash = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WEIGHTS = {
  folder: 0,
  doc: 1,
  pattern: 2
};

function flatten(tree) {
  return tree.children;
}

function sanitize(tree, context) {
  var id = context.id,
      _context$config = context.config,
      config = _context$config === void 0 ? {} : _context$config,
      prefix = context.prefix,
      base = context.base,
      location = context.location,
      search = context.search;
  tree.children = tree.children.map(function (child) {
    var enriched = enrich(child, {
      base: base,
      location: location,
      id: id,
      config: config,
      prefix: prefix,
      search: search
    });
    return enriched.children ? sanitize(enriched, context) : enriched;
  }).sort(function (a, b) {
    var order = (((a.manifest || {}).options || {}).order || 0) - (((b.manifest || {}).options || {}).order || 0);
    var weight = (WEIGHTS[a.type] || 0) - (WEIGHTS[b.type] || 0);
    var comp = a.manifest.displayName.localeCompare(b.manifest.displayName);

    if (order !== 0) {
      return order;
    }

    if (weight !== 0) {
      return weight;
    }

    return comp;
  });
  return enrich(tree, {
    base: base,
    location: location,
    id: id,
    config: config,
    prefix: prefix,
    search: search
  });
}

function enrich(child, context) {
  var id = context.id,
      prefix = context.prefix,
      search = context.search;
  var childid = [child.contentType, child.id].join('/');
  child.active = childid === id || "doc/".concat(context.parent, "/").concat(childid) === id;

  var parsed = _url.default.parse(child.href || _path.default.join(prefix, child.id || child.path));

  var q = typeof parsed.query === "string" ? _querystring.default.parse(parsed.query) : parsed.query;
  child.href = _url.default.format({
    pathname: pre(context.base || '', parsed.pathname || ''),
    query: Object.assign({}, context.location.query, q)
  });
  child.warnings = child.warnings || [];
  child.type = child.contentType === "doc" && typeof (child.manifest.options || {}).query === "string" ? "folder" : "item";

  if (child.type === "folder") {
    child.children = search(child.manifest.options.query).filter(function (item) {
      return item.id !== child.id;
    });
  }

  if (child.manifest && child.type === "pattern" && (child.manifest.flag === "alpha" || child.manifest.flag === "deprecated")) {
    child.warnings.push({
      type: "flag",
      value: child.manifest.flag,
      message: "".concat(child.manifest.displayName, " is flagged as ").concat(child.manifest.flag, ".")
    });
  }

  return child;
}

function pre(base, pathname) {
  var b = norm(base);
  var p = norm(pathname);

  if (p.startsWith(b)) {
    return "/".concat(p);
  }

  return "/".concat([norm(base), norm(pathname)].join("/"));
}

function norm(p) {
  return p.split("/").filter(Boolean).join("/");
}

/***/ }),

/***/ "./src/app/shortcuts.js":
/*!******************************!*\
  !*** ./src/app/shortcuts.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var actions = _interopRequireWildcard(__webpack_require__(/*! ./actions */ "./src/app/actions/index.js"));

var _shortcut = _interopRequireDefault(__webpack_require__(/*! ./utils/shortcut */ "./src/app/utils/shortcut.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var _default = createShortcuts;
exports.default = _default;

function createShortcuts() {
  var bind = function bind(store) {
    Object.keys(bind).forEach(function (name) {
      bind[name].bind(store);
    });
  };

  bind.toggleConsole = new _shortcut.default({
    character: "c",
    description: function description(props) {
      return "".concat(props.enabled ? "Hide" : "Show", " console");
    },
    action: actions.toggleConsole
  });
  bind.toggleDoc = new _shortcut.default({
    character: "d",
    description: function description() {
      return "Open documentation for this pattern";
    },
    action: actions.toggleDoc
  });
  bind.openDocumentation = new _shortcut.default({
    character: "7",
    description: function description() {
      return "Navigate back to / route";
    },
    action: actions.openDocumentation
  });
  bind.openFullscreen = new _shortcut.default({
    character: "f",
    description: function description() {
      return "Open fullscreen view";
    },
    action: actions.openFullscreen
  });
  bind.toggleHide = new _shortcut.default({
    character: "h",
    description: function description(props) {
      return "".concat(props.enabled ? "Show" : "Hide", " hidden items");
    },
    action: actions.toggleHide
  });
  bind.info = new _shortcut.default({
    character: "i",
    description: function description(props) {
      return "".concat(props.enabled ? "Hide" : "Show", " pattern infos");
    },
    action: actions.toggleInfo
  });
  bind.toggleOpacity = new _shortcut.default({
    character: "o",
    description: function description(props) {
      return "".concat(props.enabled ? "Hide" : "Show", " opacity indicators");
    },
    action: actions.toggleOpacity
  });
  bind.toggleShortcuts = new _shortcut.default({
    character: "k",
    description: function description(props) {
      return "".concat(props.enabled ? "Hide" : "Show", " keyboard shortcuts");
    },
    action: actions.toggleKeyboardShortcuts
  });
  bind.toggleRulers = new _shortcut.default({
    character: "l",
    description: function description(props) {
      return "".concat(props.enabled ? "Hide" : "Show", " rulers");
    },
    action: actions.toggleRulers
  });
  bind.toggleCode = new _shortcut.default({
    character: "m",
    description: function description(props) {
      return "".concat(props.enabled ? "Hide" : "Show", " pattern code");
    },
    action: actions.toggleCode
  });
  bind.toggleNavigation = new _shortcut.default({
    character: "n",
    description: function description(props) {
      return "".concat(props.enabled ? "Hide" : "Show", " navigation");
    },
    action: actions.toggleNavigation
  });
  bind.toggleNetwork = new _shortcut.default({
    character: "d",
    description: function description(props) {
      return "".concat(props.enabled ? "Hide" : "Show", " dependency network");
    },
    action: actions.toggleNetwork
  });

  var reload = function reload() {
    return actions.reload({
      reloadTime: Date.now()
    });
  };

  reload.type = actions.reload.type;
  reload.key = actions.reload.key;
  reload.property = actions.reload.property;
  bind.reload = new _shortcut.default({
    character: "r",
    description: function description() {
      return "Force sync";
    },
    action: reload
  });
  bind.toggleSearch = new _shortcut.default({
    character: "space",
    description: function description(props) {
      return "".concat(props.enabled ? "Disable" : "Enable", " search");
    },
    action: actions.toggleSearch
  });
  bind.toggleTheme = new _shortcut.default({
    character: "t",
    description: "Toggle active theme",
    action: actions.toggleTheme
  });
  bind.close = new _shortcut.default({
    character: "esc",
    modifiers: [],
    action: actions.closeAllTheThings
  });
  bind.up = new _shortcut.default({
    character: "arrow-up",
    action: function action() {
      return actions.arrow("up");
    }
  });
  bind.right = new _shortcut.default({
    character: "arrow-right",
    action: function action() {
      return actions.arrow("right");
    }
  });
  bind.down = new _shortcut.default({
    character: "arrow-down",
    action: function action() {
      return actions.arrow("down");
    }
  });
  bind.left = new _shortcut.default({
    character: "arrow-left",
    action: function action() {
      return actions.arrow("left");
    }
  });
  return bind;
}

/***/ }),

/***/ "./src/app/store.js":
/*!**************************!*\
  !*** ./src/app/store.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configureStore;

var _redux = __webpack_require__(/*! redux */ "../../node_modules/redux/es/index.js");

var _reactRouterRedux = __webpack_require__(/*! react-router-redux */ "../../node_modules/react-router-redux/lib/index.js");

var _reduxThunk = _interopRequireDefault(__webpack_require__(/*! redux-thunk */ "../../node_modules/redux-thunk/lib/index.js"));

var _topologicallyCombineReducers = _interopRequireDefault(__webpack_require__(/*! topologically-combine-reducers */ "../../node_modules/topologically-combine-reducers/lib/index.js"));

var actions = _interopRequireWildcard(__webpack_require__(/*! ./actions */ "./src/app/actions/index.js"));

var _shortcuts = _interopRequireDefault(__webpack_require__(/*! ./shortcuts */ "./src/app/shortcuts.js"));

var _reducers = _interopRequireWildcard(__webpack_require__(/*! ./reducers */ "./src/app/reducers/index.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function configureStore(history, initial) {
  var reducer = hydrateable((0, _topologicallyCombineReducers.default)(_objectSpread({
    routing: _reactRouterRedux.routerReducer
  }, _reducers.default), _reducers.dependencies));
  var enhance = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;
  var middlewares = [_reduxThunk.default, (0, _reactRouterRedux.routerMiddleware)(history)];

  var middleware = _redux.applyMiddleware.apply(void 0, middlewares);

  var shortcuts = (0, _shortcuts.default)();
  var store = (0, _redux.createStore)(reducer, _objectSpread({}, initial, {
    shortcuts: shortcuts
  }), enhance(middleware));
  listen(store, {
    url: "/api"
  });
  shortcuts(store);
  return store;
}

function hydrateable(reducer) {
  return function (state, action) {
    switch (action.type) {
      case "@@APPLY_STATE":
        return reducer(action.payload, action);

      default:
        return reducer(state, action);
    }
  };
}

function listen(store, options) {
  store.dispatch(actions.listen({
    url: options.url
  }));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/app/utils/fetch.js":
/*!********************************!*\
  !*** ./src/app/utils/fetch.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

__webpack_require__(/*! isomorphic-fetch */ "../../node_modules/isomorphic-fetch/fetch-npm-browserify.js");

var _lodash = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");

var _default = fetch;
exports.default = _default;
var defaultHeaders = {
  headers: {
    accept: "application/json"
  },
  credentials: "include"
};

function fetch(uri, userHeaders) {
  var headers = userHeaders === false ? defaultHeaders : (0, _lodash.merge)({}, userHeaders, defaultHeaders);
  return global.fetch(uri, headers);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/app/utils/find.js":
/*!*******************************!*\
  !*** ./src/app/utils/find.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = find;
exports.default = _default;

function find(tree, id, _ref) {
  var type = _ref.type;

  if (id === "/") {
    return tree;
  }

  if (!id || !id.startsWith("".concat(type, "/"))) {
    return null;
  }

  var reg = new RegExp("^".concat(type, "/"));
  var frags = id.replace(reg, "").split("/").filter(Boolean);
  var match = tree.children.find(function (child) {
    return child.path.every(function (s, i) {
      return frags[i] === s;
    }) && (child.type === type || child.type === "folder");
  });
  return match;
}

/***/ }),

/***/ "./src/app/utils/get-id-by-pathname.js":
/*!*********************************************!*\
  !*** ./src/app/utils/get-id-by-pathname.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getIdByPathname;

var _path = _interopRequireDefault(__webpack_require__(/*! path */ "../../node_modules/path-browserify/index.js"));

var _urlQuery = _interopRequireDefault(__webpack_require__(/*! ./url-query */ "./src/app/utils/url-query.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getIdByPathname(pathname) {
  var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "/";

  var parsed = _urlQuery.default.parse(pathname);

  return (_path.default.posix || _path.default).relative(base, parsed.pathname);
}

/***/ }),

/***/ "./src/app/utils/shortcut.js":
/*!***********************************!*\
  !*** ./src/app/utils/shortcut.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _arson = _interopRequireDefault(__webpack_require__(/*! arson */ "../../node_modules/arson/index.js"));

var _assert = _interopRequireDefault(__webpack_require__(/*! assert */ "../../node_modules/assert/assert.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CODES = {
  "arrow-up": 38,
  "arrow-right": 39,
  "arrow-down": 40,
  "arrow-left": 37,
  esc: 27,
  space: 32,
  c: 67,
  d: 68,
  e: 69,
  f: 70,
  h: 72,
  i: 73,
  o: 79,
  k: 75,
  l: 76,
  m: 77,
  n: 78,
  r: 82,
  t: 84
};

var Shortcut =
/*#__PURE__*/
function () {
  function Shortcut(_ref) {
    var action = _ref.action,
        character = _ref.character,
        description = _ref.description,
        modifiers = _ref.modifiers;

    _classCallCheck(this, Shortcut);

    this.character = character;
    this.code = CODES[character];
    this.action = action;
    this.key = this.action.key;
    this.active = "document" in global;
    this.description = description;
    this.modifiers = modifiers || ["ctrlKey", "altKey"];
    this.bind = this.bind.bind(this);
  }

  _createClass(Shortcut, [{
    key: "bind",
    value: function bind(store) {
      var _this = this;

      if (!this.active) {
        return;
      }

      var onKeyPress = function onKeyPress(e) {
        if (!_this.modifiers.every(function (m) {
          return e[m];
        })) {
          return;
        }

        if (e.keyCode !== _this.code) {
          return false;
        }

        store.dispatch(_this.action());
      };

      global.addEventListener("message", function (e) {
        try {
          var message = _arson.default.parse(e.data);

          if (message.type === "keydown") {
            onKeyPress(message.payload);
          }
        } catch (err) {}
      }, false);
      global.addEventListener("keydown", function (e) {
        var prevent = onKeyPress({
          altKey: e.altKey,
          ctrlKey: e.ctrlKey,
          keyCode: (e.data || e).keyCode
        });

        if (prevent) {
          e.preventDefault();
        }
      });
    }
  }, {
    key: "toString",
    value: function toString() {
      var keys = _toConsumableArray(this.modifiers).concat([this.character]).map(function (c) {
        return c.replace("Key", "");
      });

      return "[".concat(keys.join("+"), "]");
    }
  }]);

  return Shortcut;
}();

exports.default = Shortcut;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/app/utils/url-query.js":
/*!************************************!*\
  !*** ./src/app/utils/url-query.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.format = format;
exports.parse = parse;
exports.default = void 0;

var _path = _interopRequireDefault(__webpack_require__(/*! path */ "../../node_modules/path-browserify/index.js"));

var _url = _interopRequireDefault(__webpack_require__(/*! url */ "../../node_modules/url/url.js"));

var _lodash = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function has(token) {
  return function (item) {
    return (0, _lodash.includes)(item, token);
  };
}

function div(token) {
  return function (item) {
    return item.split(token).slice(0, 2);
  };
}

function not(fn) {
  return function () {
    return !fn.apply(void 0, arguments);
  };
}

function shove(input) {
  var index = input.length - 1;

  if (input[index] === "/") {
    return input.slice(0, index);
  }

  return input;
}

function format() {
  var parsed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var query = (0, _lodash.entries)(parsed.query || {}).reduce(function (result, entry) {
    return _toConsumableArray(result).concat([entry.join("--")]);
  }, []);

  var extension = _path.default.extname(parsed.pathname || "");

  var before = extension ? _path.default.dirname(parsed.pathname) : shove(parsed.pathname);
  var after = extension ? _path.default.basename(parsed.pathname) : "";
  return [before].concat(_toConsumableArray(query), [after]).filter(Boolean).join("/");
}

function parse() {
  var urlPath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

  var parsed = _url.default.parse(urlPath);

  var raw = parsed.pathname || "";
  var pathname = raw.split("/").filter(not(has("--"))).join("/");
  var query = raw.split("/").filter(has("--")).map(div("--")).reduce(function (registry, entry) {
    var _entry = _slicedToArray(entry, 2),
        key = _entry[0],
        value = _entry[1];

    registry[key] = value;
    return registry;
  }, {});
  return {
    pathname: pathname,
    query: query
  };
}

var _default = {
  parse: parse,
  format: format
};
exports.default = _default;

/***/ }),

/***/ "./src/client.js":
/*!***********************!*\
  !*** ./src/client.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var ARSON = __webpack_require__(/*! arson */ "../../node_modules/arson/index.js");

var url = __webpack_require__(/*! url */ "../../node_modules/url/url.js");

var fetch = __webpack_require__(/*! isomorphic-fetch */ "../../node_modules/isomorphic-fetch/fetch-npm-browserify.js");

var platform = __webpack_require__(/*! platform */ "../../node_modules/platform/platform.js");

var router = __webpack_require__(/*! ./app/client */ "./src/app/client.js").default;

var _require = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js"),
    merge = _require.merge;

var _global = global,
    document = _global.document;
main().catch(function (err) {
  console.error(err);
});

function main() {
  return _main.apply(this, arguments);
}

function _main() {
  _main = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var slot, vault, data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            slot = document.querySelector('[data-application-el="patternplate"]');
            vault = document.querySelector('[data-application-state="patternplate"]');
            _context.next = 4;
            return getData(vault);

          case 4:
            data = _context.sent;

            if (data.isStatic) {
              slot.innerHTML = '';
            }

            router(data, slot);
            document.body.setAttribute("data-mounted", true);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _main.apply(this, arguments);
}

function getData(_x) {
  return _getData.apply(this, arguments);
}

function _getData() {
  _getData = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(vault) {
    var data, schema;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            data = ARSON.parse(decodeURIComponent(vault.textContent));
            _context2.next = 3;
            return getStateData(data.base);

          case 3:
            schema = _context2.sent;
            return _context2.abrupt("return", merge(data, getPlatformData(), getWindowData(), {
              schema: schema,
              navigation: schema.meta
            }));

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _getData.apply(this, arguments);
}

function getStateData(_x2) {
  return _getStateData.apply(this, arguments);
}

function _getStateData() {
  _getStateData = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(base) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return fetch("".concat(prefix(base), "/api/state.json"), {
              credentials: "include"
            });

          case 2:
            return _context3.abrupt("return", _context3.sent.json());

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));
  return _getStateData.apply(this, arguments);
}

function prefix(base) {
  return base.charAt(base.length - 1) === "/" ? base.slice(0, base.length - 1) : base;
}

function getPlatformData() {
  return {
    clientRuntimeName: platform.name,
    clientRuntimeVersion: platform.version,
    clientOsName: platform.os.name,
    clientOsVersion: platform.os.version
  };
}

function getWindowData() {
  return {
    window: {
      width: global.innerWidth,
      height: global.innerHeight
    }
  };
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ })

/******/ });
//# sourceMappingURL=client.11febcde87d587116b25.js.map