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
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: .presets[0][1] must be an object, false, or undefined\n    at assertPluginItem (/Users/marneb/Documents/pp/patternplate/node_modules/@babel/core/lib/config/validation/option-assertions.js:157:15)\n    at /Users/marneb/Documents/pp/patternplate/node_modules/@babel/core/lib/config/validation/option-assertions.js:134:14\n    at Array.forEach (<anonymous>)\n    at assertPluginList (/Users/marneb/Documents/pp/patternplate/node_modules/@babel/core/lib/config/validation/option-assertions.js:133:9)\n    at /Users/marneb/Documents/pp/patternplate/node_modules/@babel/core/lib/config/validation/options.js:83:20\n    at Array.forEach (<anonymous>)\n    at validate (/Users/marneb/Documents/pp/patternplate/node_modules/@babel/core/lib/config/validation/options.js:61:21)\n    at /Users/marneb/Documents/pp/patternplate/node_modules/@babel/core/lib/config/config-chain.js:137:36\n    at cachedFunction (/Users/marneb/Documents/pp/patternplate/node_modules/@babel/core/lib/config/caching.js:40:17)\n    at init (/Users/marneb/Documents/pp/patternplate/node_modules/@babel/core/lib/config/config-chain.js:118:12)\n    at /Users/marneb/Documents/pp/patternplate/node_modules/@babel/core/lib/config/config-chain.js:202:17\n    at buildRootChain (/Users/marneb/Documents/pp/patternplate/node_modules/@babel/core/lib/config/config-chain.js:83:20)\n    at loadConfig (/Users/marneb/Documents/pp/patternplate/node_modules/@babel/core/lib/config/index.js:50:53)\n    at transformSync (/Users/marneb/Documents/pp/patternplate/node_modules/@babel/core/lib/transform-sync.js:13:36)\n    at Object.transform (/Users/marneb/Documents/pp/patternplate/node_modules/@babel/core/lib/transform.js:20:65)\n    at transpile (/Users/marneb/Documents/pp/patternplate/node_modules/babel-loader/lib/index.js:55:20)\n    at Object.module.exports (/Users/marneb/Documents/pp/patternplate/node_modules/babel-loader/lib/index.js:179:20)");

/***/ }),

/***/ "../search/index.js":
/*!**************************!*\
  !*** ../search/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
} //# sourceMappingURL=create-search.js.map

/***/ }),

/***/ "../search/lib/query.js":
/*!******************************!*\
  !*** ../search/lib/query.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
} //# sourceMappingURL=query.js.map

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
} //# sourceMappingURL=registry.js.map

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
} //# sourceMappingURL=search.js.map

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
} //# sourceMappingURL=term.js.map

/***/ }),

/***/ "../websocket-client/index.js":
/*!************************************!*\
  !*** ../websocket-client/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
}(); //# sourceMappingURL=index.js.map
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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
      query: _extends({}, parsed.query, {
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

function _sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _slicedToArray(arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return _sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }

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
/* WEBPACK VAR INJECTION */(function(process, setImmediate, global) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

Function.prototype.$asyncbind = function $asyncbind(self, catcher) {
  "use strict";

  if (!Function.prototype.$asyncbind) {
    Object.defineProperty(Function.prototype, "$asyncbind", {
      value: $asyncbind,
      enumerable: false,
      configurable: true,
      writable: true
    });
  }

  if (!$asyncbind.trampoline) {
    $asyncbind.trampoline = function trampoline(t, x, s, e, u) {
      return function b(q) {
        while (q) {
          if (q.then) {
            q = q.then(b, e);
            return u ? undefined : q;
          }

          try {
            if (q.pop) {
              if (q.length) return q.pop() ? x.call(t) : q;
              q = s;
            } else q = q.call(t);
          } catch (r) {
            return e(r);
          }
        }
      };
    };
  }

  if (!$asyncbind.LazyThenable) {
    $asyncbind.LazyThenable = function () {
      function isThenable(obj) {
        return obj && obj instanceof Object && typeof obj.then === "function";
      }

      function resolution(p, r, how) {
        try {
          var x = how ? how(r) : r;
          if (p === x) return p.reject(new TypeError("Promise resolution loop"));

          if (isThenable(x)) {
            x.then(function (y) {
              resolution(p, y);
            }, function (e) {
              p.reject(e);
            });
          } else {
            p.resolve(x);
          }
        } catch (ex) {
          p.reject(ex);
        }
      }

      function Chained() {}

      ;
      Chained.prototype = {
        resolve: _unchained,
        reject: _unchained,
        then: thenChain
      };

      function _unchained(v) {}

      function thenChain(res, rej) {
        this.resolve = res;
        this.reject = rej;
      }

      function then(res, rej) {
        var chain = new Chained();

        try {
          this._resolver(function (value) {
            return isThenable(value) ? value.then(res, rej) : resolution(chain, value, res);
          }, function (ex) {
            resolution(chain, ex, rej);
          });
        } catch (ex) {
          resolution(chain, ex, rej);
        }

        return chain;
      }

      function Thenable(resolver) {
        this._resolver = resolver;
        this.then = then;
      }

      ;

      Thenable.resolve = function (v) {
        return Thenable.isThenable(v) ? v : {
          then: function then(resolve) {
            return resolve(v);
          }
        };
      };

      Thenable.isThenable = isThenable;
      return Thenable;
    }();

    $asyncbind.EagerThenable = $asyncbind.Thenable = ($asyncbind.EagerThenableFactory = function (tick) {
      tick = tick || (typeof process === "undefined" ? "undefined" : _typeof(process)) === "object" && process.nextTick || typeof setImmediate === "function" && setImmediate || function (f) {
        setTimeout(f, 0);
      };

      var soon = function () {
        var fq = [],
            fqStart = 0,
            bufferSize = 1024;

        function callQueue() {
          while (fq.length - fqStart) {
            try {
              fq[fqStart]();
            } catch (ex) {}

            fq[fqStart++] = undefined;

            if (fqStart === bufferSize) {
              fq.splice(0, bufferSize);
              fqStart = 0;
            }
          }
        }

        return function (fn) {
          fq.push(fn);
          if (fq.length - fqStart === 1) tick(callQueue);
        };
      }();

      function Zousan(func) {
        if (func) {
          var me = this;
          func(function (arg) {
            me.resolve(arg);
          }, function (arg) {
            me.reject(arg);
          });
        }
      }

      Zousan.prototype = {
        resolve: function resolve(value) {
          if (this.state !== undefined) return;
          if (value === this) return this.reject(new TypeError("Attempt to resolve promise with self"));
          var me = this;

          if (value && (typeof value === "function" || _typeof(value) === "object")) {
            try {
              var first = 0;
              var then = value.then;

              if (typeof then === "function") {
                then.call(value, function (ra) {
                  if (!first++) {
                    me.resolve(ra);
                  }
                }, function (rr) {
                  if (!first++) {
                    me.reject(rr);
                  }
                });
                return;
              }
            } catch (e) {
              if (!first) this.reject(e);
              return;
            }
          }

          this.state = STATE_FULFILLED;
          this.v = value;
          if (me.c) soon(function () {
            for (var n = 0, l = me.c.length; n < l; n++) {
              STATE_FULFILLED(me.c[n], value);
            }
          });
        },
        reject: function reject(reason) {
          if (this.state !== undefined) return;
          this.state = STATE_REJECTED;
          this.v = reason;
          var clients = this.c;
          if (clients) soon(function () {
            for (var n = 0, l = clients.length; n < l; n++) {
              STATE_REJECTED(clients[n], reason);
            }
          });
        },
        then: function then(onF, onR) {
          var p = new Zousan();
          var client = {
            y: onF,
            n: onR,
            p: p
          };

          if (this.state === undefined) {
            if (this.c) this.c.push(client);else this.c = [client];
          } else {
            var s = this.state,
                a = this.v;
            soon(function () {
              s(client, a);
            });
          }

          return p;
        }
      };

      function STATE_FULFILLED(c, arg) {
        if (typeof c.y === "function") {
          try {
            var yret = c.y.call(undefined, arg);
            c.p.resolve(yret);
          } catch (err) {
            c.p.reject(err);
          }
        } else c.p.resolve(arg);
      }

      function STATE_REJECTED(c, reason) {
        if (typeof c.n === "function") {
          try {
            var yret = c.n.call(undefined, reason);
            c.p.resolve(yret);
          } catch (err) {
            c.p.reject(err);
          }
        } else c.p.reject(reason);
      }

      Zousan.resolve = function (val) {
        if (val && val instanceof Zousan) return val;
        var z = new Zousan();
        z.resolve(val);
        return z;
      };

      Zousan.reject = function (err) {
        if (err && err instanceof Zousan) return err;
        var z = new Zousan();
        z.reject(err);
        return z;
      };

      Zousan.version = "2.3.3-nodent";
      return Zousan;
    })();
  }

  var resolver = this;

  switch (catcher) {
    case true:
      return new $asyncbind.Thenable(boundThen);

    case 0:
      return new $asyncbind.LazyThenable(boundThen);

    case undefined:
      boundThen.then = boundThen;
      return boundThen;

    default:
      return function () {
        try {
          return resolver.apply(self, arguments);
        } catch (ex) {
          return catcher(ex);
        }
      };
  }

  function boundThen() {
    return resolver.apply(self, arguments);
  }
};

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
  ws.onMessage(function (envelope) {
    return new Promise(function ($return, $error) {
      var message = _arson.default.parse(envelope.data);

      var type = message.type,
          payload = message.payload;

      switch (type) {
        case "error":
          return $return(dispatch({
            type: "ERROR_HEARTBEAT",
            payload: payload
          }));

        case "start":
          dispatch((0, _loadSchema.default)()); // TODO: only reload pattern if the current pattern is affected

          return $return(dispatch((0, _loadPatternDemo.default)({
            force: false
          })));

        case "done":
          return $return(dispatch({
            type: "LISTEN_HEARTBEAT",
            payload: {}
          }));

        case "change":
          return $return(dispatch((0, _loadSchema.default)()));

        default:
          return $error(new TypeError("Received unknown message of type ".concat(type)));
      }

      return $return();
    }.$asyncbind(this));
  });
});

exports.default = _default;

function safeParse(data) {
  try {
    return JSON.parse(data);
  } catch (err) {
    return {};
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/process/browser.js */ "../../node_modules/process/browser.js"), __webpack_require__(/*! ./../../../../../node_modules/timers-browserify/main.js */ "../../node_modules/timers-browserify/main.js").setImmediate, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/app/actions/load-pattern-demo.js":
/*!**********************************************!*\
  !*** ./src/app/actions/load-pattern-demo.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, setImmediate) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isomorphicFetch = _interopRequireDefault(__webpack_require__(/*! isomorphic-fetch */ "../../node_modules/isomorphic-fetch/fetch-npm-browserify.js"));

var demo = _interopRequireWildcard(__webpack_require__(/*! ../selectors/demo */ "./src/app/selectors/demo.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Function.prototype.$asyncbind = function $asyncbind(self, catcher) {
  "use strict";

  if (!Function.prototype.$asyncbind) {
    Object.defineProperty(Function.prototype, "$asyncbind", {
      value: $asyncbind,
      enumerable: false,
      configurable: true,
      writable: true
    });
  }

  if (!$asyncbind.trampoline) {
    $asyncbind.trampoline = function trampoline(t, x, s, e, u) {
      return function b(q) {
        while (q) {
          if (q.then) {
            q = q.then(b, e);
            return u ? undefined : q;
          }

          try {
            if (q.pop) {
              if (q.length) return q.pop() ? x.call(t) : q;
              q = s;
            } else q = q.call(t);
          } catch (r) {
            return e(r);
          }
        }
      };
    };
  }

  if (!$asyncbind.LazyThenable) {
    $asyncbind.LazyThenable = function () {
      function isThenable(obj) {
        return obj && obj instanceof Object && typeof obj.then === "function";
      }

      function resolution(p, r, how) {
        try {
          var x = how ? how(r) : r;
          if (p === x) return p.reject(new TypeError("Promise resolution loop"));

          if (isThenable(x)) {
            x.then(function (y) {
              resolution(p, y);
            }, function (e) {
              p.reject(e);
            });
          } else {
            p.resolve(x);
          }
        } catch (ex) {
          p.reject(ex);
        }
      }

      function Chained() {}

      ;
      Chained.prototype = {
        resolve: _unchained,
        reject: _unchained,
        then: thenChain
      };

      function _unchained(v) {}

      function thenChain(res, rej) {
        this.resolve = res;
        this.reject = rej;
      }

      function then(res, rej) {
        var chain = new Chained();

        try {
          this._resolver(function (value) {
            return isThenable(value) ? value.then(res, rej) : resolution(chain, value, res);
          }, function (ex) {
            resolution(chain, ex, rej);
          });
        } catch (ex) {
          resolution(chain, ex, rej);
        }

        return chain;
      }

      function Thenable(resolver) {
        this._resolver = resolver;
        this.then = then;
      }

      ;

      Thenable.resolve = function (v) {
        return Thenable.isThenable(v) ? v : {
          then: function then(resolve) {
            return resolve(v);
          }
        };
      };

      Thenable.isThenable = isThenable;
      return Thenable;
    }();

    $asyncbind.EagerThenable = $asyncbind.Thenable = ($asyncbind.EagerThenableFactory = function (tick) {
      tick = tick || (typeof process === "undefined" ? "undefined" : _typeof(process)) === "object" && process.nextTick || typeof setImmediate === "function" && setImmediate || function (f) {
        setTimeout(f, 0);
      };

      var soon = function () {
        var fq = [],
            fqStart = 0,
            bufferSize = 1024;

        function callQueue() {
          while (fq.length - fqStart) {
            try {
              fq[fqStart]();
            } catch (ex) {}

            fq[fqStart++] = undefined;

            if (fqStart === bufferSize) {
              fq.splice(0, bufferSize);
              fqStart = 0;
            }
          }
        }

        return function (fn) {
          fq.push(fn);
          if (fq.length - fqStart === 1) tick(callQueue);
        };
      }();

      function Zousan(func) {
        if (func) {
          var me = this;
          func(function (arg) {
            me.resolve(arg);
          }, function (arg) {
            me.reject(arg);
          });
        }
      }

      Zousan.prototype = {
        resolve: function resolve(value) {
          if (this.state !== undefined) return;
          if (value === this) return this.reject(new TypeError("Attempt to resolve promise with self"));
          var me = this;

          if (value && (typeof value === "function" || _typeof(value) === "object")) {
            try {
              var first = 0;
              var then = value.then;

              if (typeof then === "function") {
                then.call(value, function (ra) {
                  if (!first++) {
                    me.resolve(ra);
                  }
                }, function (rr) {
                  if (!first++) {
                    me.reject(rr);
                  }
                });
                return;
              }
            } catch (e) {
              if (!first) this.reject(e);
              return;
            }
          }

          this.state = STATE_FULFILLED;
          this.v = value;
          if (me.c) soon(function () {
            for (var n = 0, l = me.c.length; n < l; n++) {
              STATE_FULFILLED(me.c[n], value);
            }
          });
        },
        reject: function reject(reason) {
          if (this.state !== undefined) return;
          this.state = STATE_REJECTED;
          this.v = reason;
          var clients = this.c;
          if (clients) soon(function () {
            for (var n = 0, l = clients.length; n < l; n++) {
              STATE_REJECTED(clients[n], reason);
            }
          });
        },
        then: function then(onF, onR) {
          var p = new Zousan();
          var client = {
            y: onF,
            n: onR,
            p: p
          };

          if (this.state === undefined) {
            if (this.c) this.c.push(client);else this.c = [client];
          } else {
            var s = this.state,
                a = this.v;
            soon(function () {
              s(client, a);
            });
          }

          return p;
        }
      };

      function STATE_FULFILLED(c, arg) {
        if (typeof c.y === "function") {
          try {
            var yret = c.y.call(undefined, arg);
            c.p.resolve(yret);
          } catch (err) {
            c.p.reject(err);
          }
        } else c.p.resolve(arg);
      }

      function STATE_REJECTED(c, reason) {
        if (typeof c.n === "function") {
          try {
            var yret = c.n.call(undefined, reason);
            c.p.resolve(yret);
          } catch (err) {
            c.p.reject(err);
          }
        } else c.p.reject(reason);
      }

      Zousan.resolve = function (val) {
        if (val && val instanceof Zousan) return val;
        var z = new Zousan();
        z.resolve(val);
        return z;
      };

      Zousan.reject = function (err) {
        if (err && err instanceof Zousan) return err;
        var z = new Zousan();
        z.reject(err);
        return z;
      };

      Zousan.version = "2.3.3-nodent";
      return Zousan;
    })();
  }

  var resolver = this;

  switch (catcher) {
    case true:
      return new $asyncbind.Thenable(boundThen);

    case 0:
      return new $asyncbind.LazyThenable(boundThen);

    case undefined:
      boundThen.then = boundThen;
      return boundThen;

    default:
      return function () {
        try {
          return resolver.apply(self, arguments);
        } catch (ex) {
          return catcher(ex);
        }
      };
  }

  function boundThen() {
    return resolver.apply(self, arguments);
  }
};

var _default = function _default(payload) {
  return function (dispatch, getState) {
    return new Promise(function ($return, $error) {
      var getSrc, uri, response, body;
      getSrc = src(getState);
      uri = getSrc();

      if (!uri) {
        return $return();
      }

      dispatch({
        type: "LOAD_PATTERN_DEMO_START",
        payload: {
          id: uri
        }
      });
      return (0, _isomorphicFetch.default)(uri, {
        headers: {
          Accept: "text/html"
        }
      }).then(function ($await_1) {
        response = $await_1;

        // Bail if the src changed in the meantime
        if (uri !== getSrc()) {
          return $return();
        }

        return response.text().then(function ($await_2) {
          body = $await_2;

          // Bail if the src changed in the meantime
          if (uri !== getSrc()) {
            return $return();
          }

          if (response.status >= 400) {
            return $return(dispatch({
              type: "LOAD_PATTERN_DEMO_ERROR",
              payload: {
                id: uri,
                error: body
              }
            }));
          }

          dispatch({
            type: "LOAD_PATTERN_DEMO_SUCCESS",
            payload: {
              id: uri,
              contents: body,
              force: payload.force
            }
          });
          return $return();
        }.$asyncbind(this, $error), $error);
      }.$asyncbind(this, $error), $error);
    }.$asyncbind(this));
  };
};

exports.default = _default;

function src(getState) {
  return function () {
    return demo.selectSrc(getState());
  };
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/process/browser.js */ "../../node_modules/process/browser.js"), __webpack_require__(/*! ./../../../../../node_modules/timers-browserify/main.js */ "../../node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./src/app/actions/load-schema.js":
/*!****************************************!*\
  !*** ./src/app/actions/load-schema.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, setImmediate) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _url = _interopRequireDefault(__webpack_require__(/*! url */ "../../node_modules/url/url.js"));

var _promiseThunkAction = __webpack_require__(/*! ./promise-thunk-action */ "./src/app/actions/promise-thunk-action.js");

var _fetch = _interopRequireDefault(__webpack_require__(/*! ../utils/fetch */ "./src/app/utils/fetch.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Function.prototype.$asyncbind = function $asyncbind(self, catcher) {
  "use strict";

  if (!Function.prototype.$asyncbind) {
    Object.defineProperty(Function.prototype, "$asyncbind", {
      value: $asyncbind,
      enumerable: false,
      configurable: true,
      writable: true
    });
  }

  if (!$asyncbind.trampoline) {
    $asyncbind.trampoline = function trampoline(t, x, s, e, u) {
      return function b(q) {
        while (q) {
          if (q.then) {
            q = q.then(b, e);
            return u ? undefined : q;
          }

          try {
            if (q.pop) {
              if (q.length) return q.pop() ? x.call(t) : q;
              q = s;
            } else q = q.call(t);
          } catch (r) {
            return e(r);
          }
        }
      };
    };
  }

  if (!$asyncbind.LazyThenable) {
    $asyncbind.LazyThenable = function () {
      function isThenable(obj) {
        return obj && obj instanceof Object && typeof obj.then === "function";
      }

      function resolution(p, r, how) {
        try {
          var x = how ? how(r) : r;
          if (p === x) return p.reject(new TypeError("Promise resolution loop"));

          if (isThenable(x)) {
            x.then(function (y) {
              resolution(p, y);
            }, function (e) {
              p.reject(e);
            });
          } else {
            p.resolve(x);
          }
        } catch (ex) {
          p.reject(ex);
        }
      }

      function Chained() {}

      ;
      Chained.prototype = {
        resolve: _unchained,
        reject: _unchained,
        then: thenChain
      };

      function _unchained(v) {}

      function thenChain(res, rej) {
        this.resolve = res;
        this.reject = rej;
      }

      function then(res, rej) {
        var chain = new Chained();

        try {
          this._resolver(function (value) {
            return isThenable(value) ? value.then(res, rej) : resolution(chain, value, res);
          }, function (ex) {
            resolution(chain, ex, rej);
          });
        } catch (ex) {
          resolution(chain, ex, rej);
        }

        return chain;
      }

      function Thenable(resolver) {
        this._resolver = resolver;
        this.then = then;
      }

      ;

      Thenable.resolve = function (v) {
        return Thenable.isThenable(v) ? v : {
          then: function then(resolve) {
            return resolve(v);
          }
        };
      };

      Thenable.isThenable = isThenable;
      return Thenable;
    }();

    $asyncbind.EagerThenable = $asyncbind.Thenable = ($asyncbind.EagerThenableFactory = function (tick) {
      tick = tick || (typeof process === "undefined" ? "undefined" : _typeof(process)) === "object" && process.nextTick || typeof setImmediate === "function" && setImmediate || function (f) {
        setTimeout(f, 0);
      };

      var soon = function () {
        var fq = [],
            fqStart = 0,
            bufferSize = 1024;

        function callQueue() {
          while (fq.length - fqStart) {
            try {
              fq[fqStart]();
            } catch (ex) {}

            fq[fqStart++] = undefined;

            if (fqStart === bufferSize) {
              fq.splice(0, bufferSize);
              fqStart = 0;
            }
          }
        }

        return function (fn) {
          fq.push(fn);
          if (fq.length - fqStart === 1) tick(callQueue);
        };
      }();

      function Zousan(func) {
        if (func) {
          var me = this;
          func(function (arg) {
            me.resolve(arg);
          }, function (arg) {
            me.reject(arg);
          });
        }
      }

      Zousan.prototype = {
        resolve: function resolve(value) {
          if (this.state !== undefined) return;
          if (value === this) return this.reject(new TypeError("Attempt to resolve promise with self"));
          var me = this;

          if (value && (typeof value === "function" || _typeof(value) === "object")) {
            try {
              var first = 0;
              var then = value.then;

              if (typeof then === "function") {
                then.call(value, function (ra) {
                  if (!first++) {
                    me.resolve(ra);
                  }
                }, function (rr) {
                  if (!first++) {
                    me.reject(rr);
                  }
                });
                return;
              }
            } catch (e) {
              if (!first) this.reject(e);
              return;
            }
          }

          this.state = STATE_FULFILLED;
          this.v = value;
          if (me.c) soon(function () {
            for (var n = 0, l = me.c.length; n < l; n++) {
              STATE_FULFILLED(me.c[n], value);
            }
          });
        },
        reject: function reject(reason) {
          if (this.state !== undefined) return;
          this.state = STATE_REJECTED;
          this.v = reason;
          var clients = this.c;
          if (clients) soon(function () {
            for (var n = 0, l = clients.length; n < l; n++) {
              STATE_REJECTED(clients[n], reason);
            }
          });
        },
        then: function then(onF, onR) {
          var p = new Zousan();
          var client = {
            y: onF,
            n: onR,
            p: p
          };

          if (this.state === undefined) {
            if (this.c) this.c.push(client);else this.c = [client];
          } else {
            var s = this.state,
                a = this.v;
            soon(function () {
              s(client, a);
            });
          }

          return p;
        }
      };

      function STATE_FULFILLED(c, arg) {
        if (typeof c.y === "function") {
          try {
            var yret = c.y.call(undefined, arg);
            c.p.resolve(yret);
          } catch (err) {
            c.p.reject(err);
          }
        } else c.p.resolve(arg);
      }

      function STATE_REJECTED(c, reason) {
        if (typeof c.n === "function") {
          try {
            var yret = c.n.call(undefined, reason);
            c.p.resolve(yret);
          } catch (err) {
            c.p.reject(err);
          }
        } else c.p.reject(reason);
      }

      Zousan.resolve = function (val) {
        if (val && val instanceof Zousan) return val;
        var z = new Zousan();
        z.resolve(val);
        return z;
      };

      Zousan.reject = function (err) {
        if (err && err instanceof Zousan) return err;
        var z = new Zousan();
        z.reject(err);
        return z;
      };

      Zousan.version = "2.3.3-nodent";
      return Zousan;
    })();
  }

  var resolver = this;

  switch (catcher) {
    case true:
      return new $asyncbind.Thenable(boundThen);

    case 0:
      return new $asyncbind.LazyThenable(boundThen);

    case undefined:
      boundThen.then = boundThen;
      return boundThen;

    default:
      return function () {
        try {
          return resolver.apply(self, arguments);
        } catch (ex) {
          return catcher(ex);
        }
      };
  }

  function boundThen() {
    return resolver.apply(self, arguments);
  }
};

var _default = (0, _promiseThunkAction.createPromiseThunkAction)("LOAD_SCHEMA", function (_, __, getState) {
  return new Promise(function ($return, $error) {
    var response;
    return (0, _fetch.default)("".concat(prefix(getState().base), "/api/state.json")).then(function ($await_1) {
      response = $await_1;
      return $return(response.json());
    }.$asyncbind(this, $error), $error);
  }.$asyncbind(this));
});

exports.default = _default;

function prefix(base) {
  return base.charAt(base.length - 1) === "/" ? base.slice(0, base.length - 1) : base;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/process/browser.js */ "../../node_modules/process/browser.js"), __webpack_require__(/*! ./../../../../../node_modules/timers-browserify/main.js */ "../../node_modules/timers-browserify/main.js").setImmediate))

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
/* WEBPACK VAR INJECTION */(function(process, setImmediate, global) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPromiseThunkAction = createPromiseThunkAction;
exports.handlePromiseThunkAction = handlePromiseThunkAction;

var _reduxActions = __webpack_require__(/*! redux-actions */ "../../node_modules/redux-actions/lib/index.js");

var _handleDependentActions = _interopRequireDefault(__webpack_require__(/*! ./handle-dependent-actions */ "./src/app/actions/handle-dependent-actions.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Function.prototype.$asyncbind = function $asyncbind(self, catcher) {
  "use strict";

  if (!Function.prototype.$asyncbind) {
    Object.defineProperty(Function.prototype, "$asyncbind", {
      value: $asyncbind,
      enumerable: false,
      configurable: true,
      writable: true
    });
  }

  if (!$asyncbind.trampoline) {
    $asyncbind.trampoline = function trampoline(t, x, s, e, u) {
      return function b(q) {
        while (q) {
          if (q.then) {
            q = q.then(b, e);
            return u ? undefined : q;
          }

          try {
            if (q.pop) {
              if (q.length) return q.pop() ? x.call(t) : q;
              q = s;
            } else q = q.call(t);
          } catch (r) {
            return e(r);
          }
        }
      };
    };
  }

  if (!$asyncbind.LazyThenable) {
    $asyncbind.LazyThenable = function () {
      function isThenable(obj) {
        return obj && obj instanceof Object && typeof obj.then === "function";
      }

      function resolution(p, r, how) {
        try {
          var x = how ? how(r) : r;
          if (p === x) return p.reject(new TypeError("Promise resolution loop"));

          if (isThenable(x)) {
            x.then(function (y) {
              resolution(p, y);
            }, function (e) {
              p.reject(e);
            });
          } else {
            p.resolve(x);
          }
        } catch (ex) {
          p.reject(ex);
        }
      }

      function Chained() {}

      ;
      Chained.prototype = {
        resolve: _unchained,
        reject: _unchained,
        then: thenChain
      };

      function _unchained(v) {}

      function thenChain(res, rej) {
        this.resolve = res;
        this.reject = rej;
      }

      function then(res, rej) {
        var chain = new Chained();

        try {
          this._resolver(function (value) {
            return isThenable(value) ? value.then(res, rej) : resolution(chain, value, res);
          }, function (ex) {
            resolution(chain, ex, rej);
          });
        } catch (ex) {
          resolution(chain, ex, rej);
        }

        return chain;
      }

      function Thenable(resolver) {
        this._resolver = resolver;
        this.then = then;
      }

      ;

      Thenable.resolve = function (v) {
        return Thenable.isThenable(v) ? v : {
          then: function then(resolve) {
            return resolve(v);
          }
        };
      };

      Thenable.isThenable = isThenable;
      return Thenable;
    }();

    $asyncbind.EagerThenable = $asyncbind.Thenable = ($asyncbind.EagerThenableFactory = function (tick) {
      tick = tick || (typeof process === "undefined" ? "undefined" : _typeof(process)) === "object" && process.nextTick || typeof setImmediate === "function" && setImmediate || function (f) {
        setTimeout(f, 0);
      };

      var soon = function () {
        var fq = [],
            fqStart = 0,
            bufferSize = 1024;

        function callQueue() {
          while (fq.length - fqStart) {
            try {
              fq[fqStart]();
            } catch (ex) {}

            fq[fqStart++] = undefined;

            if (fqStart === bufferSize) {
              fq.splice(0, bufferSize);
              fqStart = 0;
            }
          }
        }

        return function (fn) {
          fq.push(fn);
          if (fq.length - fqStart === 1) tick(callQueue);
        };
      }();

      function Zousan(func) {
        if (func) {
          var me = this;
          func(function (arg) {
            me.resolve(arg);
          }, function (arg) {
            me.reject(arg);
          });
        }
      }

      Zousan.prototype = {
        resolve: function resolve(value) {
          if (this.state !== undefined) return;
          if (value === this) return this.reject(new TypeError("Attempt to resolve promise with self"));
          var me = this;

          if (value && (typeof value === "function" || _typeof(value) === "object")) {
            try {
              var first = 0;
              var then = value.then;

              if (typeof then === "function") {
                then.call(value, function (ra) {
                  if (!first++) {
                    me.resolve(ra);
                  }
                }, function (rr) {
                  if (!first++) {
                    me.reject(rr);
                  }
                });
                return;
              }
            } catch (e) {
              if (!first) this.reject(e);
              return;
            }
          }

          this.state = STATE_FULFILLED;
          this.v = value;
          if (me.c) soon(function () {
            for (var n = 0, l = me.c.length; n < l; n++) {
              STATE_FULFILLED(me.c[n], value);
            }
          });
        },
        reject: function reject(reason) {
          if (this.state !== undefined) return;
          this.state = STATE_REJECTED;
          this.v = reason;
          var clients = this.c;
          if (clients) soon(function () {
            for (var n = 0, l = clients.length; n < l; n++) {
              STATE_REJECTED(clients[n], reason);
            }
          });
        },
        then: function then(onF, onR) {
          var p = new Zousan();
          var client = {
            y: onF,
            n: onR,
            p: p
          };

          if (this.state === undefined) {
            if (this.c) this.c.push(client);else this.c = [client];
          } else {
            var s = this.state,
                a = this.v;
            soon(function () {
              s(client, a);
            });
          }

          return p;
        }
      };

      function STATE_FULFILLED(c, arg) {
        if (typeof c.y === "function") {
          try {
            var yret = c.y.call(undefined, arg);
            c.p.resolve(yret);
          } catch (err) {
            c.p.reject(err);
          }
        } else c.p.resolve(arg);
      }

      function STATE_REJECTED(c, reason) {
        if (typeof c.n === "function") {
          try {
            var yret = c.n.call(undefined, reason);
            c.p.resolve(yret);
          } catch (err) {
            c.p.reject(err);
          }
        } else c.p.reject(reason);
      }

      Zousan.resolve = function (val) {
        if (val && val instanceof Zousan) return val;
        var z = new Zousan();
        z.resolve(val);
        return z;
      };

      Zousan.reject = function (err) {
        if (err && err instanceof Zousan) return err;
        var z = new Zousan();
        z.reject(err);
        return z;
      };

      Zousan.version = "2.3.3-nodent";
      return Zousan;
    })();
  }

  var resolver = this;

  switch (catcher) {
    case true:
      return new $asyncbind.Thenable(boundThen);

    case 0:
      return new $asyncbind.LazyThenable(boundThen);

    case undefined:
      boundThen.then = boundThen;
      return boundThen;

    default:
      return function () {
        try {
          return resolver.apply(self, arguments);
        } catch (ex) {
          return catcher(ex);
        }
      };
  }

  function boundThen() {
    return resolver.apply(self, arguments);
  }
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ident = function ident(i) {
  return i;
};

var asyncIdent = function asyncIdent(i) {
  return new Promise(function ($return, $error) {
    return $return(i);
  }.$asyncbind(this));
};

function createPromiseThunkAction(name, rawCreator) {
  var creator = rawCreator || asyncIdent;

  var fn = function fn(payload) {
    var delayedAction = (0, _reduxActions.createAction)("".concat(name, "_DELAYED"));
    var successAction = (0, _reduxActions.createAction)("".concat(name, "_SUCCESS"));
    var startAction = (0, _reduxActions.createAction)("".concat(name, "_START"));
    var throwsAction = (0, _reduxActions.createAction)("".concat(name, "_THROWS"));
    return function (dispatch, getState) {
      return new Promise(function ($return, $error) {
        var delayedTimer, result;
        dispatch(startAction(payload, ident, getState));
        delayedTimer = global.setTimeout(function () {
          dispatch(delayedAction(payload, ident, getState));
        }, 1000);

        var $Try_1_Post = function () {
          return $return();
        }.$asyncbind(this, $error);

        var $Try_1_Catch = function (error) {
          console.error(error);
          global.clearTimeout(delayedTimer);
          dispatch(throwsAction(error));
          return $return(error);
        }.$asyncbind(this, $error);

        try {
          return Promise.resolve(creator(payload, dispatch, getState)).then(function ($await_2) {
            result = $await_2;
            global.clearTimeout(delayedTimer);
            dispatch(successAction(result));
            return $return(result);
          }.$asyncbind(this, $Try_1_Catch), $Try_1_Catch);
        } catch (error) {
          $Try_1_Catch(error)
        }
      }.$asyncbind(this));
    };
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/process/browser.js */ "../../node_modules/process/browser.js"), __webpack_require__(/*! ./../../../../../node_modules/timers-browserify/main.js */ "../../node_modules/timers-browserify/main.js").setImmediate, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/app/actions/reload.js":
/*!***********************************!*\
  !*** ./src/app/actions/reload.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, setImmediate) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = __webpack_require__(/*! ./ */ "./src/app/actions/index.js");

Function.prototype.$asyncbind = function $asyncbind(self, catcher) {
  "use strict";

  if (!Function.prototype.$asyncbind) {
    Object.defineProperty(Function.prototype, "$asyncbind", {
      value: $asyncbind,
      enumerable: false,
      configurable: true,
      writable: true
    });
  }

  if (!$asyncbind.trampoline) {
    $asyncbind.trampoline = function trampoline(t, x, s, e, u) {
      return function b(q) {
        while (q) {
          if (q.then) {
            q = q.then(b, e);
            return u ? undefined : q;
          }

          try {
            if (q.pop) {
              if (q.length) return q.pop() ? x.call(t) : q;
              q = s;
            } else q = q.call(t);
          } catch (r) {
            return e(r);
          }
        }
      };
    };
  }

  if (!$asyncbind.LazyThenable) {
    $asyncbind.LazyThenable = function () {
      function isThenable(obj) {
        return obj && obj instanceof Object && typeof obj.then === "function";
      }

      function resolution(p, r, how) {
        try {
          var x = how ? how(r) : r;
          if (p === x) return p.reject(new TypeError("Promise resolution loop"));

          if (isThenable(x)) {
            x.then(function (y) {
              resolution(p, y);
            }, function (e) {
              p.reject(e);
            });
          } else {
            p.resolve(x);
          }
        } catch (ex) {
          p.reject(ex);
        }
      }

      function Chained() {}

      ;
      Chained.prototype = {
        resolve: _unchained,
        reject: _unchained,
        then: thenChain
      };

      function _unchained(v) {}

      function thenChain(res, rej) {
        this.resolve = res;
        this.reject = rej;
      }

      function then(res, rej) {
        var chain = new Chained();

        try {
          this._resolver(function (value) {
            return isThenable(value) ? value.then(res, rej) : resolution(chain, value, res);
          }, function (ex) {
            resolution(chain, ex, rej);
          });
        } catch (ex) {
          resolution(chain, ex, rej);
        }

        return chain;
      }

      function Thenable(resolver) {
        this._resolver = resolver;
        this.then = then;
      }

      ;

      Thenable.resolve = function (v) {
        return Thenable.isThenable(v) ? v : {
          then: function then(resolve) {
            return resolve(v);
          }
        };
      };

      Thenable.isThenable = isThenable;
      return Thenable;
    }();

    $asyncbind.EagerThenable = $asyncbind.Thenable = ($asyncbind.EagerThenableFactory = function (tick) {
      tick = tick || (typeof process === "undefined" ? "undefined" : _typeof(process)) === "object" && process.nextTick || typeof setImmediate === "function" && setImmediate || function (f) {
        setTimeout(f, 0);
      };

      var soon = function () {
        var fq = [],
            fqStart = 0,
            bufferSize = 1024;

        function callQueue() {
          while (fq.length - fqStart) {
            try {
              fq[fqStart]();
            } catch (ex) {}

            fq[fqStart++] = undefined;

            if (fqStart === bufferSize) {
              fq.splice(0, bufferSize);
              fqStart = 0;
            }
          }
        }

        return function (fn) {
          fq.push(fn);
          if (fq.length - fqStart === 1) tick(callQueue);
        };
      }();

      function Zousan(func) {
        if (func) {
          var me = this;
          func(function (arg) {
            me.resolve(arg);
          }, function (arg) {
            me.reject(arg);
          });
        }
      }

      Zousan.prototype = {
        resolve: function resolve(value) {
          if (this.state !== undefined) return;
          if (value === this) return this.reject(new TypeError("Attempt to resolve promise with self"));
          var me = this;

          if (value && (typeof value === "function" || _typeof(value) === "object")) {
            try {
              var first = 0;
              var then = value.then;

              if (typeof then === "function") {
                then.call(value, function (ra) {
                  if (!first++) {
                    me.resolve(ra);
                  }
                }, function (rr) {
                  if (!first++) {
                    me.reject(rr);
                  }
                });
                return;
              }
            } catch (e) {
              if (!first) this.reject(e);
              return;
            }
          }

          this.state = STATE_FULFILLED;
          this.v = value;
          if (me.c) soon(function () {
            for (var n = 0, l = me.c.length; n < l; n++) {
              STATE_FULFILLED(me.c[n], value);
            }
          });
        },
        reject: function reject(reason) {
          if (this.state !== undefined) return;
          this.state = STATE_REJECTED;
          this.v = reason;
          var clients = this.c;
          if (clients) soon(function () {
            for (var n = 0, l = clients.length; n < l; n++) {
              STATE_REJECTED(clients[n], reason);
            }
          });
        },
        then: function then(onF, onR) {
          var p = new Zousan();
          var client = {
            y: onF,
            n: onR,
            p: p
          };

          if (this.state === undefined) {
            if (this.c) this.c.push(client);else this.c = [client];
          } else {
            var s = this.state,
                a = this.v;
            soon(function () {
              s(client, a);
            });
          }

          return p;
        }
      };

      function STATE_FULFILLED(c, arg) {
        if (typeof c.y === "function") {
          try {
            var yret = c.y.call(undefined, arg);
            c.p.resolve(yret);
          } catch (err) {
            c.p.reject(err);
          }
        } else c.p.resolve(arg);
      }

      function STATE_REJECTED(c, reason) {
        if (typeof c.n === "function") {
          try {
            var yret = c.n.call(undefined, reason);
            c.p.resolve(yret);
          } catch (err) {
            c.p.reject(err);
          }
        } else c.p.reject(reason);
      }

      Zousan.resolve = function (val) {
        if (val && val instanceof Zousan) return val;
        var z = new Zousan();
        z.resolve(val);
        return z;
      };

      Zousan.reject = function (err) {
        if (err && err instanceof Zousan) return err;
        var z = new Zousan();
        z.reject(err);
        return z;
      };

      Zousan.version = "2.3.3-nodent";
      return Zousan;
    })();
  }

  var resolver = this;

  switch (catcher) {
    case true:
      return new $asyncbind.Thenable(boundThen);

    case 0:
      return new $asyncbind.LazyThenable(boundThen);

    case undefined:
      boundThen.then = boundThen;
      return boundThen;

    default:
      return function () {
        try {
          return resolver.apply(self, arguments);
        } catch (ex) {
          return catcher(ex);
        }
      };
  }

  function boundThen() {
    return resolver.apply(self, arguments);
  }
};

var _default = reload;
exports.default = _default;

function reload() {
  return function (dispatch) {
    return new Promise(function ($return, $error) {
      var actions;
      actions = [function () {
        return new Promise(function ($return, $error) {
          return Promise.resolve((0, _.loadSchema)()).then(function ($await_1) {
            return $return(dispatch($await_1));
          }.$asyncbind(this, $error), $error);
        }.$asyncbind(this));
      }, (0, _.loadPatternDemo)({
        force: true
      })];
      return Promise.all(actions.map(dispatch)).then(function ($await_2) {
        return $return();
      }.$asyncbind(this, $error), $error);
    }.$asyncbind(this));
  };
}

reload.type = "RELOAD";
reload.key = "";
reload.property = "";
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/process/browser.js */ "../../node_modules/process/browser.js"), __webpack_require__(/*! ./../../../../../node_modules/timers-browserify/main.js */ "../../node_modules/timers-browserify/main.js").setImmediate))

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

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function mountable(Component) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(MountableComponent, _React$Component);

      function MountableComponent() {
        _classCallCheck(this, MountableComponent);

        return _possibleConstructorReturn(this, (MountableComponent.__proto__ || Object.getPrototypeOf(MountableComponent)).apply(this, arguments));
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
          var _props = this.props,
              onMount = _props.onMount,
              rest = _objectWithoutProperties(_props, ["onMount"]);

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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Documentation =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Documentation, _React$Component);

  function Documentation() {
    _classCallCheck(this, Documentation);

    return _possibleConstructorReturn(this, (Documentation.__proto__ || Object.getPrototypeOf(Documentation)).apply(this, arguments));
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

function _sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _slicedToArray(arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return _sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var THEMES = (0, _components.themes)();
var SVG_FAVICON_SUPPORT = ["Firefox"];

var FavIcon =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FavIcon, _React$Component);

  function FavIcon() {
    var _ref;

    var _this;

    _classCallCheck(this, FavIcon);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_ref = FavIcon.__proto__ || Object.getPrototypeOf(FavIcon)).call.apply(_ref, [this].concat(args)));
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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var ClickOutside =
/*#__PURE__*/
function (_Component) {
  _inherits(ClickOutside, _Component);

  function ClickOutside(props) {
    var _this;

    _classCallCheck(this, ClickOutside);

    _this = _possibleConstructorReturn(this, (ClickOutside.__proto__ || Object.getPrototypeOf(ClickOutside)).call(this, props));
    _this.handle = _this.handle.bind(_assertThisInitialized(_this));
    _this.getContainer = _this.getContainer.bind(_assertThisInitialized(_this));
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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
    var _ref;

    var _this;

    _classCallCheck(this, Pattern);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_ref = Pattern.__proto__ || Object.getPrototypeOf(Pattern)).call.apply(_ref, [this].concat(args)));
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
        "in": props.loading || props.error,
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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var SearchField =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SearchField, _React$Component);

  function SearchField() {
    var _ref;

    var _this;

    _classCallCheck(this, SearchField);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_ref = SearchField.__proto__ || Object.getPrototypeOf(SearchField)).call.apply(_ref, [this].concat(args)));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleKeyDown = _this.handleKeyDown.bind(_assertThisInitialized(_this));
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

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

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
    var _ref;

    var _this;

    _classCallCheck(this, Search);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_ref = Search.__proto__ || Object.getPrototypeOf(Search)).call.apply(_ref, [this].concat(args)));
    Object.defineProperty(_assertThisInitialized(_this), "getSearchResult", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(item, type) {
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
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "getSearchResultPreview", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
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
      }
    });
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.handleUp = _this.handleUp.bind(_assertThisInitialized(_this));
    _this.handleDown = _this.handleDown.bind(_assertThisInitialized(_this));
    _this.handleActivate = _this.handleActivate.bind(_assertThisInitialized(_this));
    _this.handleScrollRequest = _this.handleScrollRequest.bind(_assertThisInitialized(_this));
    _this.getListRef = _this.getListRef.bind(_assertThisInitialized(_this));
    _this.getSearchResult = _this.getSearchResult.bind(_assertThisInitialized(_this));
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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

    return _possibleConstructorReturn(this, (Application.__proto__ || Object.getPrototypeOf(Application)).apply(this, arguments));
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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _slicedToArray(arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return _sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }

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

  var q = _extends({}, query, own.query || {});

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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PatternContainer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PatternContainer, _React$Component);

  function PatternContainer() {
    _classCallCheck(this, PatternContainer);

    return _possibleConstructorReturn(this, (PatternContainer.__proto__ || Object.getPrototypeOf(PatternContainer)).apply(this, arguments));
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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function configureStore(history, initial) {
  var reducer = hydrateable((0, _topologicallyCombineReducers.default)(_extends({
    routing: _reactRouterRedux.routerReducer
  }, _reducers.default), _reducers.dependencies));
  var enhance = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;
  var middlewares = [_reduxThunk.default, (0, _reactRouterRedux.routerMiddleware)(history)];

  var middleware = _redux.applyMiddleware.apply(void 0, middlewares);

  var shortcuts = (0, _shortcuts.default)();
  var store = (0, _redux.createStore)(reducer, _extends({}, initial, {
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

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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

function _sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _slicedToArray(arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return _sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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

/* WEBPACK VAR INJECTION */(function(process, setImmediate, global) {function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Function.prototype.$asyncbind = function $asyncbind(self, catcher) {
  "use strict";

  if (!Function.prototype.$asyncbind) {
    Object.defineProperty(Function.prototype, "$asyncbind", {
      value: $asyncbind,
      enumerable: false,
      configurable: true,
      writable: true
    });
  }

  if (!$asyncbind.trampoline) {
    $asyncbind.trampoline = function trampoline(t, x, s, e, u) {
      return function b(q) {
        while (q) {
          if (q.then) {
            q = q.then(b, e);
            return u ? undefined : q;
          }

          try {
            if (q.pop) {
              if (q.length) return q.pop() ? x.call(t) : q;
              q = s;
            } else q = q.call(t);
          } catch (r) {
            return e(r);
          }
        }
      };
    };
  }

  if (!$asyncbind.LazyThenable) {
    $asyncbind.LazyThenable = function () {
      function isThenable(obj) {
        return obj && obj instanceof Object && typeof obj.then === "function";
      }

      function resolution(p, r, how) {
        try {
          var x = how ? how(r) : r;
          if (p === x) return p.reject(new TypeError("Promise resolution loop"));

          if (isThenable(x)) {
            x.then(function (y) {
              resolution(p, y);
            }, function (e) {
              p.reject(e);
            });
          } else {
            p.resolve(x);
          }
        } catch (ex) {
          p.reject(ex);
        }
      }

      function Chained() {}

      ;
      Chained.prototype = {
        resolve: _unchained,
        reject: _unchained,
        then: thenChain
      };

      function _unchained(v) {}

      function thenChain(res, rej) {
        this.resolve = res;
        this.reject = rej;
      }

      function then(res, rej) {
        var chain = new Chained();

        try {
          this._resolver(function (value) {
            return isThenable(value) ? value.then(res, rej) : resolution(chain, value, res);
          }, function (ex) {
            resolution(chain, ex, rej);
          });
        } catch (ex) {
          resolution(chain, ex, rej);
        }

        return chain;
      }

      function Thenable(resolver) {
        this._resolver = resolver;
        this.then = then;
      }

      ;

      Thenable.resolve = function (v) {
        return Thenable.isThenable(v) ? v : {
          then: function then(resolve) {
            return resolve(v);
          }
        };
      };

      Thenable.isThenable = isThenable;
      return Thenable;
    }();

    $asyncbind.EagerThenable = $asyncbind.Thenable = ($asyncbind.EagerThenableFactory = function (tick) {
      tick = tick || (typeof process === "undefined" ? "undefined" : _typeof(process)) === "object" && process.nextTick || typeof setImmediate === "function" && setImmediate || function (f) {
        setTimeout(f, 0);
      };

      var soon = function () {
        var fq = [],
            fqStart = 0,
            bufferSize = 1024;

        function callQueue() {
          while (fq.length - fqStart) {
            try {
              fq[fqStart]();
            } catch (ex) {}

            fq[fqStart++] = undefined;

            if (fqStart === bufferSize) {
              fq.splice(0, bufferSize);
              fqStart = 0;
            }
          }
        }

        return function (fn) {
          fq.push(fn);
          if (fq.length - fqStart === 1) tick(callQueue);
        };
      }();

      function Zousan(func) {
        if (func) {
          var me = this;
          func(function (arg) {
            me.resolve(arg);
          }, function (arg) {
            me.reject(arg);
          });
        }
      }

      Zousan.prototype = {
        resolve: function resolve(value) {
          if (this.state !== undefined) return;
          if (value === this) return this.reject(new TypeError("Attempt to resolve promise with self"));
          var me = this;

          if (value && (typeof value === "function" || _typeof(value) === "object")) {
            try {
              var first = 0;
              var then = value.then;

              if (typeof then === "function") {
                then.call(value, function (ra) {
                  if (!first++) {
                    me.resolve(ra);
                  }
                }, function (rr) {
                  if (!first++) {
                    me.reject(rr);
                  }
                });
                return;
              }
            } catch (e) {
              if (!first) this.reject(e);
              return;
            }
          }

          this.state = STATE_FULFILLED;
          this.v = value;
          if (me.c) soon(function () {
            for (var n = 0, l = me.c.length; n < l; n++) {
              STATE_FULFILLED(me.c[n], value);
            }
          });
        },
        reject: function reject(reason) {
          if (this.state !== undefined) return;
          this.state = STATE_REJECTED;
          this.v = reason;
          var clients = this.c;
          if (clients) soon(function () {
            for (var n = 0, l = clients.length; n < l; n++) {
              STATE_REJECTED(clients[n], reason);
            }
          });
        },
        then: function then(onF, onR) {
          var p = new Zousan();
          var client = {
            y: onF,
            n: onR,
            p: p
          };

          if (this.state === undefined) {
            if (this.c) this.c.push(client);else this.c = [client];
          } else {
            var s = this.state,
                a = this.v;
            soon(function () {
              s(client, a);
            });
          }

          return p;
        }
      };

      function STATE_FULFILLED(c, arg) {
        if (typeof c.y === "function") {
          try {
            var yret = c.y.call(undefined, arg);
            c.p.resolve(yret);
          } catch (err) {
            c.p.reject(err);
          }
        } else c.p.resolve(arg);
      }

      function STATE_REJECTED(c, reason) {
        if (typeof c.n === "function") {
          try {
            var yret = c.n.call(undefined, reason);
            c.p.resolve(yret);
          } catch (err) {
            c.p.reject(err);
          }
        } else c.p.reject(reason);
      }

      Zousan.resolve = function (val) {
        if (val && val instanceof Zousan) return val;
        var z = new Zousan();
        z.resolve(val);
        return z;
      };

      Zousan.reject = function (err) {
        if (err && err instanceof Zousan) return err;
        var z = new Zousan();
        z.reject(err);
        return z;
      };

      Zousan.version = "2.3.3-nodent";
      return Zousan;
    })();
  }

  var resolver = this;

  switch (catcher) {
    case true:
      return new $asyncbind.Thenable(boundThen);

    case 0:
      return new $asyncbind.LazyThenable(boundThen);

    case undefined:
      boundThen.then = boundThen;
      return boundThen;

    default:
      return function () {
        try {
          return resolver.apply(self, arguments);
        } catch (ex) {
          return catcher(ex);
        }
      };
  }

  function boundThen() {
    return resolver.apply(self, arguments);
  }
};

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
  return new Promise(function ($return, $error) {
    var slot, vault, data;
    slot = document.querySelector('[data-application-el="patternplate"]');
    vault = document.querySelector('[data-application-state="patternplate"]');
    return getData(vault).then(function ($await_1) {
      data = $await_1;

      if (data.isStatic) {
        slot.innerHTML = '';
      }

      router(data, slot);
      document.body.setAttribute("data-mounted", true);
      return $return();
    }.$asyncbind(this, $error), $error);
  }.$asyncbind(this));
}

function getData(vault) {
  return new Promise(function ($return, $error) {
    var data, schema;
    data = ARSON.parse(decodeURIComponent(vault.textContent));
    return getStateData(data.base).then(function ($await_2) {
      schema = $await_2;
      return $return(merge(data, getPlatformData(), getWindowData(), {
        schema: schema,
        navigation: schema.meta
      }));
    }.$asyncbind(this, $error), $error);
  }.$asyncbind(this));
}

function getStateData(base) {
  return new Promise(function ($return, $error) {
    return fetch("".concat(prefix(base), "/api/state.json"), {
      credentials: "include"
    }).then(function ($await_3) {
      return $return($await_3.json());
    }.$asyncbind(this, $error), $error);
  }.$asyncbind(this));
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/process/browser.js */ "../../node_modules/process/browser.js"), __webpack_require__(/*! ./../../../node_modules/timers-browserify/main.js */ "../../node_modules/timers-browserify/main.js").setImmediate, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ })

/******/ });
//# sourceMappingURL=client.8871a5592c18c492a1bf.js.map