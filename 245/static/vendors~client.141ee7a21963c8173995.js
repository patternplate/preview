(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~client"],{

/***/ "../../node_modules/@marionebl/react-router/lib/index.js":
/*!*************************************************************************************************!*\
  !*** /Users/marneb/Documents/pp/patternplate/node_modules/@marionebl/react-router/lib/index.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/marneb/Documents/pp/patternplate/node_modules/@marionebl/react-router/lib/index.js'");

/***/ }),

/***/ "../../node_modules/arson/custom.js":
/*!****************************************************************************!*\
  !*** /Users/marneb/Documents/pp/patternplate/node_modules/arson/custom.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {var toString = Object.prototype.toString;
var dateTag = "[object Date]";
var regExpTag = "[object RegExp]";
var setTag = "[object Set]";
var mapTag = "[object Map]";

var arson = __webpack_require__(/*! ./index.js */ "../../node_modules/arson/index.js");

typeof Buffer === "function" &&
typeof Buffer.isBuffer === "function" &&
arson.registerType("Buffer", {
  deconstruct: function (buf) {
    return Buffer.isBuffer(buf) && [buf.toString("base64"), "base64"];
  },

  // The reconstruct function will be called twice: once with no
  // arguments, which allows it to return a placeholder object reference;
  // and once with one argument, a copy of the array returned by the
  // deconstruct function. For immutable types like Buffer, Date, and
  // RegExp, the reconstruct function should return a falsy value when it
  // receives no arguments, since there is no way to create an empty
  // Buffer or Date and later fill in its contents.  For container types
  // like Map and Set, the reconstruct function must return an empty
  // instance of the container when it receives no arguments, so that we
  // can fill in that empty container later. This two-phased strategy is
  // essential for decoding containers that contain themselves.
  reconstruct: function (args) {
    return args && new Buffer(args[0], args[1]);
  }
});

arson.registerType("Date", {
  deconstruct: function (date) {
    return toString.call(date) === dateTag && [date.toJSON()];
  },

  reconstruct: function (args) {
    return args && new Date(args[0]);
  }
});

arson.registerType("RegExp", {
  deconstruct: function (exp) {
    if (toString.call(exp) === regExpTag) {
      var args = [exp.source];
      var flags = "";

      if (exp.ignoreCase) flags += "i";
      if (exp.multiline) flags += "m";
      if (exp.global) flags += "g";

      if (flags) {
        args.push(flags);
      }

      return args;
    }
  },

  reconstruct: function (args) {
    return args && new RegExp(args[0], args[1]);
  }
});

typeof Set === "function" &&
typeof Array.from === "function" &&
arson.registerType("Set", {
  deconstruct: function (set) {
    if (toString.call(set) === setTag) {
      return Array.from(set);
    }
  },

  reconstruct: function (values) {
    if (values) {
      values.forEach(this.add, this);
    } else {
      return new Set;
    }
  }
});

typeof Map === "function" &&
typeof Array.from === "function" &&
arson.registerType("Map", {
  deconstruct: function (map) {
    if (toString.call(map) === mapTag) {
      return Array.from(map);
    }
  },

  reconstruct: function (entries) {
    if (entries) {
      entries.forEach(function (entry) {
        this.set(entry[0], entry[1]);
      }, this);
    } else {
      return new Map;
    }
  }
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../buffer/index.js */ "../../node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "../../node_modules/arson/index.js":
/*!***************************************************************************!*\
  !*** /Users/marneb/Documents/pp/patternplate/node_modules/arson/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var UNDEFINED_INDEX = -1;
var ARRAY_HOLE_INDEX = -2;
var NAN_INDEX = -3;
var POS_INF_INDEX = -4;
var NEG_INF_INDEX = -5;
var customTypes = Object.create(null);

exports.registerType = function (typeName, handlers) {
  function check(methodName) {
    if (typeof handlers[methodName] !== "function") {
      throw new Error(
        "second argument to ARSON.registerType(" +
          JSON.stringify(typeName) + ", ...) " +
          "must be an object with a " + methodName + " method"
      );
    }
  }

  check("deconstruct");
  check("reconstruct");

  customTypes[typeName] = handlers;

  return exports;
};

__webpack_require__(/*! ./custom.js */ "../../node_modules/arson/custom.js");

exports.encode = exports.stringify =
function encode(value) {
  return JSON.stringify(toTable(value));
}

// This array will grow as needed so that we can slice arrays filled with
// ARRAY_HOLE_INDEX from it.
var HOLY_ARRAY = [];

// Returns an array of the given length filled with ARRAY_HOLE_INDEX.
function getArrayOfHoles(length) {
  var holyLen = HOLY_ARRAY.length;
  if (length > holyLen) {
    HOLY_ARRAY.length = length;
    for (var i = holyLen; i < length; ++i) {
      HOLY_ARRAY[i] = ARRAY_HOLE_INDEX;
    }
  }

  return HOLY_ARRAY.slice(0, length);
}

function toTable(value) {
  var values = [];
  var getIndex = makeGetIndexFunction(values);

  function copy(value) {
    var result = value;

    if (value && typeof value === "object") {
      var keys = Object.keys(value);

      if (isPlainObject(value)) {
        result = {};

      } else if (Array.isArray(value)) {
        result = getArrayOfHoles(value.length);

      } else {
        for (var typeName in customTypes) {
          // If value is not a plain Object, but something exotic like a
          // Date or a RegExp, serialize it as an array with typeName as
          // its first element. These arrays can be distinguished from
          // normal arrays, because all other non-empty arrays will be
          // serialized with a numeric value as their first element.
          var args = customTypes[typeName].deconstruct(value);
          if (args) {
            for (var i = 0; i < args.length; ++i) {
              args[i] = getIndex(args[i]);
            }
            args.unshift(typeName);
            return args;
          }
        }

        result = {};
      }

      keys.forEach(function (key) {
        result[key] = getIndex(value[key]);
      });
    }

    return result;
  }

  // Assigns the root value to values[0].
  var index0 = getIndex(value);
  if (index0 < 0) {
    // If value is something special that gets a negative index, then we
    // don't need to build a table at all, and we can simply return that
    // negative index as a complete serialization. This avoids ambiguity
    // about indexes versus primitive literal values.
    return index0;
  }

  // Note that this for loop cannot be a forEach loop, because
  // values.length is expected to change during iteration.
  for (var table = [], v = 0; v < values.length; ++v) {
    table[v] = copy(values[v]);
  }

  return table;
}

function isPlainObject(value) {
  var isObject = value && typeof value === "object";
  if (isObject) {
    var proto = Object.getPrototypeOf
      ? Object.getPrototypeOf(value)
      : value.__proto__;
    return proto === Object.prototype;
  }
  return false;
}

function makeGetIndexFunction(values) {
  var indexMap = typeof Map === "function" && new Map;

  return function getIndex(value) {
    switch (typeof value) {
    case "undefined":
      return UNDEFINED_INDEX;

    case "number":
      if (isNaN(value)) {
        return NAN_INDEX;
      }

      if (! isFinite(value)) {
        return value < 0 ? NEG_INF_INDEX : POS_INF_INDEX;
      }

      // fall through...
    }

    var index;

    if (indexMap) {
      // If we have Map, use it instead of values.indexOf to accelerate
      // object lookups.
      index = indexMap.get(value);
      if (typeof index === "undefined") {
        index = values.push(value) - 1;
        indexMap.set(value, index);
      }
    } else {
      index = values.indexOf(value);
      if (index < 0) {
        index = values.push(value) - 1;
      }
    }

    return index;
  };
}

exports.decode = exports.parse =
function decode(encoding) {
  return fromTable(JSON.parse(encoding));
}

function fromTable(table) {
  if (typeof table === "number" && table < 0) {
    return getValueWithoutCache(table);
  }

  var getValueCache = new Array(table.length);

  function getValue(index) {
    return index in getValueCache
      ? getValueCache[index]
      : getValueCache[index] = getValueWithoutCache(index);
  }

  function getValueWithoutCache(index) {
    if (index < 0) {
      if (index === UNDEFINED_INDEX) {
        return;
      }

      if (index === ARRAY_HOLE_INDEX) {
        // Never reached because handled specially below.
        return;
      }

      if (index === NAN_INDEX) {
        return NaN;
      }

      if (index === POS_INF_INDEX) {
        return Infinity;
      }

      if (index === NEG_INF_INDEX) {
        return -Infinity;
      }

      throw new Error("invalid ARSON index: " + index);
    }

    var entry = table[index];

    if (entry && typeof entry === "object") {
      if (Array.isArray(entry)) {
        var elem0 = entry[0];
        if (typeof elem0 === "string" && elem0 in customTypes) {
          var rec = customTypes[elem0].reconstruct;
          var empty = rec();
          if (empty) {
            // If the reconstruct handler returns an object, treat it as
            // an empty instance of the desired type, and schedule it to
            // be filled in later. This two-stage process allows exotic
            // container objects to contain themselves.
            containers.push({
              reconstruct: rec,
              empty: empty,
              argIndexes: entry.slice(1)
            });
          }

          // If the reconstruct handler returned a falsy value, then we
          // assume none of its arguments refer to exotic containers, so
          // we can reconstruct the object immediately. Examples: Buffer,
          // Date, RegExp.
          return table[index] = empty || rec(entry.slice(1).map(getValue));
        }
      }

      // Here entry is already the correct array or object reference for
      // this index, but its values are still indexes that will need to be
      // resolved later.
      objects.push(entry);
    }

    return entry;
  }

  var containers = [];
  var objects = [];

  // First pass: make sure all exotic objects are deserialized fist, and
  // keep track of all plain object entries for later.
  table.forEach(function (entry, i) {
    getValue(i);
  });

  // Second pass: now that we have final object references for all exotic
  // objects, we can safely resolve argument indexes for the empty ones.
  containers.forEach(function (c) {
    c.args = c.argIndexes.map(getValue);
  });

  // Third pass: resolve value indexes for ordinary arrays and objects.
  objects.forEach(function (obj) {
    Object.keys(obj).forEach(function (key) {
      var index = obj[key];

      if (typeof index !== "number") {
        // Leave non-numeric indexes untouched.
        return;
      }

      if (index < 0) {
        if (index === ARRAY_HOLE_INDEX) {
          // Array holes have to be handled specially here, since getValue
          // does not have a reference to obj.
          delete obj[key];
          return;
        }

        // This recursion is guaranteed not to add more objects, because
        // we know the index is negative.
        obj[key] = getValue(index);

      } else {
        // Non-negative indexes refer to normal table values.
        obj[key] = table[index];
      }
    });
  });

  // Fourth pass: all possible object references have been established, so
  // we can finally initialize the empty container objects.
  containers.forEach(function (c) {
    c.reconstruct.call(c.empty, c.args);
  });

  return table[0];
}


/***/ }),

/***/ "../../node_modules/assert/assert.js":
/*!*****************************************************************************!*\
  !*** /Users/marneb/Documents/pp/patternplate/node_modules/assert/assert.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

// compare and isBuffer taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
// original notice:

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
function compare(a, b) {
  if (a === b) {
    return 0;
  }

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) {
    return -1;
  }
  if (y < x) {
    return 1;
  }
  return 0;
}
function isBuffer(b) {
  if (global.Buffer && typeof global.Buffer.isBuffer === 'function') {
    return global.Buffer.isBuffer(b);
  }
  return !!(b != null && b._isBuffer);
}

// based on node assert, original notice:

// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
//
// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
//
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

var util = __webpack_require__(/*! util/ */ "../../node_modules/util/util.js");
var hasOwn = Object.prototype.hasOwnProperty;
var pSlice = Array.prototype.slice;
var functionsHaveNames = (function () {
  return function foo() {}.name === 'foo';
}());
function pToString (obj) {
  return Object.prototype.toString.call(obj);
}
function isView(arrbuf) {
  if (isBuffer(arrbuf)) {
    return false;
  }
  if (typeof global.ArrayBuffer !== 'function') {
    return false;
  }
  if (typeof ArrayBuffer.isView === 'function') {
    return ArrayBuffer.isView(arrbuf);
  }
  if (!arrbuf) {
    return false;
  }
  if (arrbuf instanceof DataView) {
    return true;
  }
  if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
    return true;
  }
  return false;
}
// 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.

var assert = module.exports = ok;

// 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })

var regex = /\s*function\s+([^\(\s]*)\s*/;
// based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js
function getName(func) {
  if (!util.isFunction(func)) {
    return;
  }
  if (functionsHaveNames) {
    return func.name;
  }
  var str = func.toString();
  var match = str.match(regex);
  return match && match[1];
}
assert.AssertionError = function AssertionError(options) {
  this.name = 'AssertionError';
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;
  if (options.message) {
    this.message = options.message;
    this.generatedMessage = false;
  } else {
    this.message = getMessage(this);
    this.generatedMessage = true;
  }
  var stackStartFunction = options.stackStartFunction || fail;
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, stackStartFunction);
  } else {
    // non v8 browsers so we can have a stacktrace
    var err = new Error();
    if (err.stack) {
      var out = err.stack;

      // try to strip useless frames
      var fn_name = getName(stackStartFunction);
      var idx = out.indexOf('\n' + fn_name);
      if (idx >= 0) {
        // once we have located the function frame
        // we need to strip out everything before it (and its line)
        var next_line = out.indexOf('\n', idx + 1);
        out = out.substring(next_line + 1);
      }

      this.stack = out;
    }
  }
};

// assert.AssertionError instanceof Error
util.inherits(assert.AssertionError, Error);

function truncate(s, n) {
  if (typeof s === 'string') {
    return s.length < n ? s : s.slice(0, n);
  } else {
    return s;
  }
}
function inspect(something) {
  if (functionsHaveNames || !util.isFunction(something)) {
    return util.inspect(something);
  }
  var rawname = getName(something);
  var name = rawname ? ': ' + rawname : '';
  return '[Function' +  name + ']';
}
function getMessage(self) {
  return truncate(inspect(self.actual), 128) + ' ' +
         self.operator + ' ' +
         truncate(inspect(self.expected), 128);
}

// At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.

// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.

function fail(actual, expected, message, operator, stackStartFunction) {
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
}

// EXTENSION! allows for well behaved errors defined elsewhere.
assert.fail = fail;

// 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, !!guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.

function ok(value, message) {
  if (!value) fail(value, true, message, '==', assert.ok);
}
assert.ok = ok;

// 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);

assert.equal = function equal(actual, expected, message) {
  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
};

// 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);

assert.notEqual = function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, '!=', assert.notEqual);
  }
};

// 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);

assert.deepEqual = function deepEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
  }
};

assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'deepStrictEqual', assert.deepStrictEqual);
  }
};

function _deepEqual(actual, expected, strict, memos) {
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;
  } else if (isBuffer(actual) && isBuffer(expected)) {
    return compare(actual, expected) === 0;

  // 7.2. If the expected value is a Date object, the actual value is
  // equivalent if it is also a Date object that refers to the same time.
  } else if (util.isDate(actual) && util.isDate(expected)) {
    return actual.getTime() === expected.getTime();

  // 7.3 If the expected value is a RegExp object, the actual value is
  // equivalent if it is also a RegExp object with the same source and
  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
    return actual.source === expected.source &&
           actual.global === expected.global &&
           actual.multiline === expected.multiline &&
           actual.lastIndex === expected.lastIndex &&
           actual.ignoreCase === expected.ignoreCase;

  // 7.4. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if ((actual === null || typeof actual !== 'object') &&
             (expected === null || typeof expected !== 'object')) {
    return strict ? actual === expected : actual == expected;

  // If both values are instances of typed arrays, wrap their underlying
  // ArrayBuffers in a Buffer each to increase performance
  // This optimization requires the arrays to have the same type as checked by
  // Object.prototype.toString (aka pToString). Never perform binary
  // comparisons for Float*Arrays, though, since e.g. +0 === -0 but their
  // bit patterns are not identical.
  } else if (isView(actual) && isView(expected) &&
             pToString(actual) === pToString(expected) &&
             !(actual instanceof Float32Array ||
               actual instanceof Float64Array)) {
    return compare(new Uint8Array(actual.buffer),
                   new Uint8Array(expected.buffer)) === 0;

  // 7.5 For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else if (isBuffer(actual) !== isBuffer(expected)) {
    return false;
  } else {
    memos = memos || {actual: [], expected: []};

    var actualIndex = memos.actual.indexOf(actual);
    if (actualIndex !== -1) {
      if (actualIndex === memos.expected.indexOf(expected)) {
        return true;
      }
    }

    memos.actual.push(actual);
    memos.expected.push(expected);

    return objEquiv(actual, expected, strict, memos);
  }
}

function isArguments(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
}

function objEquiv(a, b, strict, actualVisitedObjects) {
  if (a === null || a === undefined || b === null || b === undefined)
    return false;
  // if one is a primitive, the other must be same
  if (util.isPrimitive(a) || util.isPrimitive(b))
    return a === b;
  if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
    return false;
  var aIsArgs = isArguments(a);
  var bIsArgs = isArguments(b);
  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
    return false;
  if (aIsArgs) {
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b, strict);
  }
  var ka = objectKeys(a);
  var kb = objectKeys(b);
  var key, i;
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length !== kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] !== kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects))
      return false;
  }
  return true;
}

// 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);

assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
  }
};

assert.notDeepStrictEqual = notDeepStrictEqual;
function notDeepStrictEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);
  }
}


// 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);

assert.strictEqual = function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, '===', assert.strictEqual);
  }
};

// 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    fail(actual, expected, message, '!==', assert.notStrictEqual);
  }
};

function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }

  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
    return expected.test(actual);
  }

  try {
    if (actual instanceof expected) {
      return true;
    }
  } catch (e) {
    // Ignore.  The instanceof check doesn't work for arrow functions.
  }

  if (Error.isPrototypeOf(expected)) {
    return false;
  }

  return expected.call({}, actual) === true;
}

function _tryBlock(block) {
  var error;
  try {
    block();
  } catch (e) {
    error = e;
  }
  return error;
}

function _throws(shouldThrow, block, expected, message) {
  var actual;

  if (typeof block !== 'function') {
    throw new TypeError('"block" argument must be a function');
  }

  if (typeof expected === 'string') {
    message = expected;
    expected = null;
  }

  actual = _tryBlock(block);

  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
            (message ? ' ' + message : '.');

  if (shouldThrow && !actual) {
    fail(actual, expected, 'Missing expected exception' + message);
  }

  var userProvidedMessage = typeof message === 'string';
  var isUnwantedException = !shouldThrow && util.isError(actual);
  var isUnexpectedException = !shouldThrow && actual && !expected;

  if ((isUnwantedException &&
      userProvidedMessage &&
      expectedException(actual, expected)) ||
      isUnexpectedException) {
    fail(actual, expected, 'Got unwanted exception' + message);
  }

  if ((shouldThrow && actual && expected &&
      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
    throw actual;
  }
}

// 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);

assert.throws = function(block, /*optional*/error, /*optional*/message) {
  _throws(true, block, error, message);
};

// EXTENSION! This is annoying to write outside this module.
assert.doesNotThrow = function(block, /*optional*/error, /*optional*/message) {
  _throws(false, block, error, message);
};

assert.ifError = function(err) { if (err) throw err; };

var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    if (hasOwn.call(obj, key)) keys.push(key);
  }
  return keys;
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../node_modules/btoa/index.js":
/*!**************************************************************************!*\
  !*** /Users/marneb/Documents/pp/patternplate/node_modules/btoa/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/marneb/Documents/pp/patternplate/node_modules/btoa/index.js'");

/***/ }),

/***/ "../../node_modules/buffer/index.js":
/*!****************************************************************************!*\
  !*** /Users/marneb/Documents/pp/patternplate/node_modules/buffer/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/marneb/Documents/pp/patternplate/node_modules/buffer/index.js'");

/***/ }),

/***/ "../../node_modules/color/index.js":
/*!***************************************************************************!*\
  !*** /Users/marneb/Documents/pp/patternplate/node_modules/color/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/marneb/Documents/pp/patternplate/node_modules/color/index.js'");

/***/ }),

/***/ "../../node_modules/comma-separated-tokens/index.js":
/*!********************************************************************************************!*\
  !*** /Users/marneb/Documents/pp/patternplate/node_modules/comma-separated-tokens/index.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/marneb/Documents/pp/patternplate/node_modules/comma-separated-tokens/index.js'");

/***/ }),

/***/ "../../node_modules/events/events.js":
/*!*****************************************************************************!*\
  !*** /Users/marneb/Documents/pp/patternplate/node_modules/events/events.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/marneb/Documents/pp/patternplate/node_modules/events/events.js'");

/***/ }),

/***/ "../../node_modules/iframe-resizer/index.js":
/*!************************************************************************************!*\
  !*** /Users/marneb/Documents/pp/patternplate/node_modules/iframe-resizer/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/marneb/Documents/pp/patternplate/node_modules/iframe-resizer/index.js'");

/***/ }),

/***/ "../../node_modules/is-nan/index.js":
/*!****************************************************************************!*\
  !*** /Users/marneb/Documents/pp/patternplate/node_modules/is-nan/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/marneb/Documents/pp/patternplate/node_modules/is-nan/index.js'");

/***/ }),

/***/ "../../node_modules/isomorphic-fetch/fetch-npm-browserify.js":
/*!*****************************************************************************************************!*\
  !*** /Users/marneb/Documents/pp/patternplate/node_modules/isomorphic-fetch/fetch-npm-browserify.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/marneb/Documents/pp/patternplate/node_modules/isomorphic-fetch/fetch-npm-browserify.js'");

/***/ }),

/***/ "../../node_modules/js-yaml/index.js":
/*!*****************************************************************************!*\
  !*** /Users/marneb/Documents/pp/patternplate/node_modules/js-yaml/index.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/marneb/Documents/pp/patternplate/node_modules/js-yaml/index.js'");

/***/ }),

/***/ "../../node_modules/kebab-case/index.js":
/*!********************************************************************************!*\
  !*** /Users/marneb/Documents/pp/patternplate/node_modules/kebab-case/index.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/marneb/Documents/pp/patternplate/node_modules/kebab-case/index.js'");

/***/ }),

/***/ "../../node_modules/lodash/lodash.js":
/*!*****************************************************************************!*\
  !*** /Users/marneb/Documents/pp/patternplate/node_modules/lodash/lodash.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/marneb/Documents/pp/patternplate/node_modules/lodash/lodash.js'");

/***/ }),

/***/ "../../node_modules/path-browserify/index.js":
/*!*************************************************************************************!*\
  !*** /Users/marneb/Documents/pp/patternplate/node_modules/path-browserify/index.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/marneb/Documents/pp/patternplate/node_modules/path-browserify/index.js'");

/***/ }),

/***/ "../../node_modules/platform/platform.js":
/*!*********************************************************************************!*\
  !*** /Users/marneb/Documents/pp/patternplate/node_modules/platform/platform.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/marneb/Documents/pp/patternplate/node_modules/platform/platform.js'");

/***/ }),

/***/ "../../node_modules/process/browser.js":
/*!*******************************************************************************!*\
  !*** /Users/marneb/Documents/pp/patternplate/node_modules/process/browser.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/marneb/Documents/pp/patternplate/node_modules/process/browser.js'");

/***/ }),

/***/ "../../node_modules/prop-types/index.js":
/*!********************************************************************************!*\
  !*** /Users/marneb/Documents/pp/patternplate/node_modules/prop-types/index.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/marneb/Documents/pp/patternplate/node_modules/prop-types/index.js'");

/***/ }),

/***/ "../../node_modules/property-information/index.js":
/*!******************************************************************************************!*\
  !*** /Users/marneb/Documents/pp/patternplate/node_modules/property-information/index.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/marneb/Documents/pp/patternplate/node_modules/property-information/index.js'");

/***/ }),

/***/ "../../node_modules/query-string/index.js":
/*!**********************************************************************************!*\
  !*** /Users/marneb/Documents/pp/patternplate/node_modules/query-string/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/marneb/Documents/pp/patternplate/node_modules/query-string/index.js'");

/***/ }),

/***/ "../../node_modules/querystring-es3/index.js":
/*!*************************************************************************************!*\
  !*** /Users/marneb/Documents/pp/patternplate/node_modules/querystring-es3/index.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/marneb/Documents/pp/patternplate/node_modules/querystring-es3/index.js'");

/***/ }),

/***/ "../../node_modules/raf/index.js":
/*!*************************************************************************!*\
  !*** /Users/marneb/Documents/pp/patternplate/node_modules/raf/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/marneb/Documents/pp/patternplate/node_modules/raf/index.js'");

/***/ }),

/***/ "../../node_modules/react-addons-text-content/dist/react-addons-text-content.js":
/*!************************************************************************************************************************!*\
  !*** /Users/marneb/Documents/pp/patternplate/node_modules/react-addons-text-content/dist/react-addons-text-content.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/marneb/Documents/pp/patternplate/node_modules/react-addons-text-content/dist/react-addons-text-content.js'");

/***/ }),

/***/ "../../node_modules/react-dom/index.js":
/*!*******************************************************************************!*\
  !*** /Users/marneb/Documents/pp/patternplate/node_modules/react-dom/index.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/marneb/Documents/pp/patternplate/node_modules/react-dom/index.js'");

/***/ }),

/***/ "../../node_modules/react-dom/server.browser.js":
/*!****************************************************************************************!*\
  !*** /Users/marneb/Documents/pp/patternplate/node_modules/react-dom/server.browser.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/marneb/Documents/pp/patternplate/node_modules/react-dom/server.browser.js'");

/***/ }),

/***/ "../../node_modules/react-helmet/lib/Helmet.js":
/*!***************************************************************************************!*\
  !*** /Users/marneb/Documents/pp/patternplate/node_modules/react-helmet/lib/Helmet.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/marneb/Documents/pp/patternplate/node_modules/react-helmet/lib/Helmet.js'");

/***/ }),

/***/ "../../node_modules/react-redux/es/index.js":
/*!************************************************************************************!*\
  !*** /Users/marneb/Documents/pp/patternplate/node_modules/react-redux/es/index.js ***!
  \************************************************************************************/
/*! exports provided: Provider, createProvider, connectAdvanced, connect */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/marneb/Documents/pp/patternplate/node_modules/react-redux/es/index.js'");

/***/ }),

/***/ "../../node_modules/react-router-redux/lib/index.js":
/*!********************************************************************************************!*\
  !*** /Users/marneb/Documents/pp/patternplate/node_modules/react-router-redux/lib/index.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/marneb/Documents/pp/patternplate/node_modules/react-router-redux/lib/index.js'");

/***/ }),

/***/ "../../node_modules/react-side-effect/lib/index.js":
/*!*******************************************************************************************!*\
  !*** /Users/marneb/Documents/pp/patternplate/node_modules/react-side-effect/lib/index.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/marneb/Documents/pp/patternplate/node_modules/react-side-effect/lib/index.js'");

/***/ }),

/***/ "../../node_modules/react-transition-group/Transition.js":
/*!*************************************************************************************************!*\
  !*** /Users/marneb/Documents/pp/patternplate/node_modules/react-transition-group/Transition.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/marneb/Documents/pp/patternplate/node_modules/react-transition-group/Transition.js'");

/***/ }),

/***/ "../../node_modules/react/index.js":
/*!***************************************************************************!*\
  !*** /Users/marneb/Documents/pp/patternplate/node_modules/react/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/marneb/Documents/pp/patternplate/node_modules/react/index.js'");

/***/ }),

/***/ "../../node_modules/redux-actions/lib/index.js":
/*!***************************************************************************************!*\
  !*** /Users/marneb/Documents/pp/patternplate/node_modules/redux-actions/lib/index.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/marneb/Documents/pp/patternplate/node_modules/redux-actions/lib/index.js'");

/***/ }),

/***/ "../../node_modules/redux-thunk/lib/index.js":
/*!*************************************************************************************!*\
  !*** /Users/marneb/Documents/pp/patternplate/node_modules/redux-thunk/lib/index.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/marneb/Documents/pp/patternplate/node_modules/redux-thunk/lib/index.js'");

/***/ }),

/***/ "../../node_modules/redux/es/index.js":
/*!******************************************************************************!*\
  !*** /Users/marneb/Documents/pp/patternplate/node_modules/redux/es/index.js ***!
  \******************************************************************************/
/*! exports provided: createStore, combineReducers, bindActionCreators, applyMiddleware, compose */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/marneb/Documents/pp/patternplate/node_modules/redux/es/index.js'");

/***/ }),

/***/ "../../node_modules/refractor/core.js":
/*!******************************************************************************!*\
  !*** /Users/marneb/Documents/pp/patternplate/node_modules/refractor/core.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/marneb/Documents/pp/patternplate/node_modules/refractor/core.js'");

/***/ }),

/***/ "../../node_modules/refractor/lang/bash.js":
/*!***********************************************************************************!*\
  !*** /Users/marneb/Documents/pp/patternplate/node_modules/refractor/lang/bash.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/marneb/Documents/pp/patternplate/node_modules/refractor/lang/bash.js'");

/***/ }),

/***/ "../../node_modules/refractor/lang/diff.js":
/*!***********************************************************************************!*\
  !*** /Users/marneb/Documents/pp/patternplate/node_modules/refractor/lang/diff.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/marneb/Documents/pp/patternplate/node_modules/refractor/lang/diff.js'");

/***/ }),

/***/ "../../node_modules/refractor/lang/json.js":
/*!***********************************************************************************!*\
  !*** /Users/marneb/Documents/pp/patternplate/node_modules/refractor/lang/json.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/marneb/Documents/pp/patternplate/node_modules/refractor/lang/json.js'");

/***/ }),

/***/ "../../node_modules/refractor/lang/jsx.js":
/*!**********************************************************************************!*\
  !*** /Users/marneb/Documents/pp/patternplate/node_modules/refractor/lang/jsx.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/marneb/Documents/pp/patternplate/node_modules/refractor/lang/jsx.js'");

/***/ }),

/***/ "../../node_modules/refractor/lang/less.js":
/*!***********************************************************************************!*\
  !*** /Users/marneb/Documents/pp/patternplate/node_modules/refractor/lang/less.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/marneb/Documents/pp/patternplate/node_modules/refractor/lang/less.js'");

/***/ }),

/***/ "../../node_modules/refractor/lang/markdown.js":
/*!***************************************************************************************!*\
  !*** /Users/marneb/Documents/pp/patternplate/node_modules/refractor/lang/markdown.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/marneb/Documents/pp/patternplate/node_modules/refractor/lang/markdown.js'");

/***/ }),

/***/ "../../node_modules/refractor/lang/scss.js":
/*!***********************************************************************************!*\
  !*** /Users/marneb/Documents/pp/patternplate/node_modules/refractor/lang/scss.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/marneb/Documents/pp/patternplate/node_modules/refractor/lang/scss.js'");

/***/ }),

/***/ "../../node_modules/refractor/lang/stylus.js":
/*!*************************************************************************************!*\
  !*** /Users/marneb/Documents/pp/patternplate/node_modules/refractor/lang/stylus.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/marneb/Documents/pp/patternplate/node_modules/refractor/lang/stylus.js'");

/***/ }),

/***/ "../../node_modules/refractor/lang/tsx.js":
/*!**********************************************************************************!*\
  !*** /Users/marneb/Documents/pp/patternplate/node_modules/refractor/lang/tsx.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/marneb/Documents/pp/patternplate/node_modules/refractor/lang/tsx.js'");

/***/ }),

/***/ "../../node_modules/refractor/lang/typescript.js":
/*!*****************************************************************************************!*\
  !*** /Users/marneb/Documents/pp/patternplate/node_modules/refractor/lang/typescript.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/marneb/Documents/pp/patternplate/node_modules/refractor/lang/typescript.js'");

/***/ }),

/***/ "../../node_modules/remark-gemoji-to-emoji/index.js":
/*!********************************************************************************************!*\
  !*** /Users/marneb/Documents/pp/patternplate/node_modules/remark-gemoji-to-emoji/index.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/marneb/Documents/pp/patternplate/node_modules/remark-gemoji-to-emoji/index.js'");

/***/ }),

/***/ "../../node_modules/remark-react/index.js":
/*!**********************************************************************************!*\
  !*** /Users/marneb/Documents/pp/patternplate/node_modules/remark-react/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/marneb/Documents/pp/patternplate/node_modules/remark-react/index.js'");

/***/ }),

/***/ "../../node_modules/remark/index.js":
/*!****************************************************************************!*\
  !*** /Users/marneb/Documents/pp/patternplate/node_modules/remark/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/marneb/Documents/pp/patternplate/node_modules/remark/index.js'");

/***/ }),

/***/ "../../node_modules/reselect/lib/index.js":
/*!**********************************************************************************!*\
  !*** /Users/marneb/Documents/pp/patternplate/node_modules/reselect/lib/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/marneb/Documents/pp/patternplate/node_modules/reselect/lib/index.js'");

/***/ }),

/***/ "../../node_modules/scrollparent/scrollparent.js":
/*!*****************************************************************************************!*\
  !*** /Users/marneb/Documents/pp/patternplate/node_modules/scrollparent/scrollparent.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/marneb/Documents/pp/patternplate/node_modules/scrollparent/scrollparent.js'");

/***/ }),

/***/ "../../node_modules/semver/semver.js":
/*!*****************************************************************************!*\
  !*** /Users/marneb/Documents/pp/patternplate/node_modules/semver/semver.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/marneb/Documents/pp/patternplate/node_modules/semver/semver.js'");

/***/ }),

/***/ "../../node_modules/space-separated-tokens/index.js":
/*!********************************************************************************************!*\
  !*** /Users/marneb/Documents/pp/patternplate/node_modules/space-separated-tokens/index.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/marneb/Documents/pp/patternplate/node_modules/space-separated-tokens/index.js'");

/***/ }),

/***/ "../../node_modules/styled-components/dist/styled-components.browser.es.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/marneb/Documents/pp/patternplate/node_modules/styled-components/dist/styled-components.browser.es.js ***!
  \*******************************************************************************************************************/
/*! exports provided: css, keyframes, injectGlobal, isStyledComponent, consolidateStreamedStyles, ThemeProvider, withTheme, ServerStyleSheet, StyleSheetManager, default */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/marneb/Documents/pp/patternplate/node_modules/styled-components/dist/styled-components.browser.es.js'");

/***/ }),

/***/ "../../node_modules/tag-hoc/dist/tag.js":
/*!********************************************************************************!*\
  !*** /Users/marneb/Documents/pp/patternplate/node_modules/tag-hoc/dist/tag.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/marneb/Documents/pp/patternplate/node_modules/tag-hoc/dist/tag.js'");

/***/ }),

/***/ "../../node_modules/timers-browserify/main.js":
/*!**************************************************************************************!*\
  !*** /Users/marneb/Documents/pp/patternplate/node_modules/timers-browserify/main.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/marneb/Documents/pp/patternplate/node_modules/timers-browserify/main.js'");

/***/ }),

/***/ "../../node_modules/topologically-combine-reducers/lib/index.js":
/*!********************************************************************************************************!*\
  !*** /Users/marneb/Documents/pp/patternplate/node_modules/topologically-combine-reducers/lib/index.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/marneb/Documents/pp/patternplate/node_modules/topologically-combine-reducers/lib/index.js'");

/***/ }),

/***/ "../../node_modules/trim/index.js":
/*!**************************************************************************!*\
  !*** /Users/marneb/Documents/pp/patternplate/node_modules/trim/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/marneb/Documents/pp/patternplate/node_modules/trim/index.js'");

/***/ }),

/***/ "../../node_modules/unherit/index.js":
/*!*****************************************************************************!*\
  !*** /Users/marneb/Documents/pp/patternplate/node_modules/unherit/index.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/marneb/Documents/pp/patternplate/node_modules/unherit/index.js'");

/***/ }),

/***/ "../../node_modules/unified/index.js":
/*!*****************************************************************************!*\
  !*** /Users/marneb/Documents/pp/patternplate/node_modules/unified/index.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/marneb/Documents/pp/patternplate/node_modules/unified/index.js'");

/***/ }),

/***/ "../../node_modules/unist-util-is/index.js":
/*!***********************************************************************************!*\
  !*** /Users/marneb/Documents/pp/patternplate/node_modules/unist-util-is/index.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/marneb/Documents/pp/patternplate/node_modules/unist-util-is/index.js'");

/***/ }),

/***/ "../../node_modules/url/url.js":
/*!***********************************************************************!*\
  !*** /Users/marneb/Documents/pp/patternplate/node_modules/url/url.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/marneb/Documents/pp/patternplate/node_modules/url/url.js'");

/***/ }),

/***/ "../../node_modules/util/util.js":
/*!*************************************************************************!*\
  !*** /Users/marneb/Documents/pp/patternplate/node_modules/util/util.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/marneb/Documents/pp/patternplate/node_modules/util/util.js'");

/***/ }),

/***/ "../../node_modules/vm-browserify/index.js":
/*!***********************************************************************************!*\
  !*** /Users/marneb/Documents/pp/patternplate/node_modules/vm-browserify/index.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/marneb/Documents/pp/patternplate/node_modules/vm-browserify/index.js'");

/***/ }),

/***/ "../../node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/marneb/Documents/pp/patternplate/node_modules/webpack/buildin/global.js'");

/***/ }),

/***/ "../../node_modules/xmldom/dom-parser.js":
/*!*********************************************************************************!*\
  !*** /Users/marneb/Documents/pp/patternplate/node_modules/xmldom/dom-parser.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/marneb/Documents/pp/patternplate/node_modules/xmldom/dom-parser.js'");

/***/ }),

/***/ "../../node_modules/xtend/immutable.js":
/*!*******************************************************************************!*\
  !*** /Users/marneb/Documents/pp/patternplate/node_modules/xtend/immutable.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/marneb/Documents/pp/patternplate/node_modules/xtend/immutable.js'");

/***/ }),

/***/ "../components/node_modules/front-matter/index.js":
/*!********************************************************!*\
  !*** ../components/node_modules/front-matter/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {var parser = __webpack_require__(/*! js-yaml */ "../../node_modules/js-yaml/index.js")
var optionalByteOrderMark = '\\ufeff?'
var pattern = '^(' +
  optionalByteOrderMark +
  '(= yaml =|---)' +
  '$([\\s\\S]*?)' +
  '^(?:\\2|\\.\\.\\.)' +
  '$' +
  (process.platform === 'win32' ? '\\r?' : '') +
  '(?:\\n)?)'
// NOTE: If this pattern uses the 'g' flag the `regex` variable definition will
// need to be moved down into the functions that use it.
var regex = new RegExp(pattern, 'm')

module.exports = extractor
module.exports.test = test

function extractor (string) {
  string = string || ''

  var lines = string.split(/(\r?\n)/)
  if (lines[0] && /= yaml =|---/.test(lines[0])) {
    return parse(string)
  } else {
    return { attributes: {}, body: string }
  }
}

function parse (string) {
  var match = regex.exec(string)

  if (!match) {
    return {
      attributes: {},
      body: string
    }
  }

  var yaml = match[match.length - 1].replace(/^\s+|\s+$/g, '')
  var attributes = parser.load(yaml) || {}
  var body = string.replace(match[0], '')

  return { attributes: attributes, body: body, frontmatter: yaml }
}

function test (string) {
  string = string || ''

  return regex.test(string)
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/process/browser.js */ "../../node_modules/process/browser.js")))

/***/ }),

/***/ "../components/node_modules/hast-to-hyperscript/index.js":
/*!***************************************************************!*\
  !*** ../components/node_modules/hast-to-hyperscript/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var trim = __webpack_require__(/*! trim */ "../../node_modules/trim/index.js");
var paramCase = __webpack_require__(/*! kebab-case */ "../../node_modules/kebab-case/index.js");
var information = __webpack_require__(/*! property-information */ "../../node_modules/property-information/index.js");
var spaces = __webpack_require__(/*! space-separated-tokens */ "../../node_modules/space-separated-tokens/index.js");
var commas = __webpack_require__(/*! comma-separated-tokens */ "../../node_modules/comma-separated-tokens/index.js");
var nan = __webpack_require__(/*! is-nan */ "../../node_modules/is-nan/index.js");
var is = __webpack_require__(/*! unist-util-is */ "../../node_modules/unist-util-is/index.js");

module.exports = wrapper;

function wrapper(h, node, prefix) {
  var r;
  var v;

  if (typeof h !== 'function') {
    throw new Error('h is not a function');
  }

  if (!is('element', node)) {
    throw new Error('Expected element, not `' + node + '`');
  }

  r = react(h);
  v = vdom(h);

  if (prefix === null || prefix === undefined) {
    prefix = r === true || v === true ? 'h-' : false;
  }

  return toH(h, node, {
    prefix: prefix,
    key: 0,
    react: r,
    vdom: v,
    hyperscript: hyperscript(h)
  });
}

/* Transform a HAST node through a hyperscript interface
 * to *anything*! */
function toH(h, node, ctx) {
  var selector = node.tagName;
  var properties;
  var attributes;
  var children;
  var property;
  var elements;
  var length;
  var index;
  var value;

  properties = node.properties;
  attributes = {};

  for (property in properties) {
    addAttribute(attributes, property, properties[property], ctx);
  }

  if (ctx.vdom === true) {
    selector = selector.toUpperCase();
  }

  if (ctx.hyperscript === true && attributes.id) {
    selector += '#' + attributes.id;
    delete attributes.id;
  }

  if ((ctx.hyperscript === true || ctx.vdom === true) && attributes.className) {
    selector += '.' + spaces.parse(attributes.className).join('.');
    delete attributes.className;
  }

  if (typeof attributes.style === 'string') {
    /* VDOM expects a `string` style in `attributes`
     * See https://github.com/Matt-Esch/virtual-dom/blob/947ecf9/
     * docs/vnode.md#propertiesstyle-vs-propertiesattributesstyle */
    if (ctx.vdom === true) {
      if (!attributes.attributes) {
        attributes.attributes = {};
      }

      attributes.attributes.style = attributes.style;
      delete attributes.style;
    /* React only accepts `style` as object. */
    } else if (ctx.react === true) {
      attributes.style = parseStyle(attributes.style);
    }
  }

  if (ctx.prefix) {
    ctx.key++;
    attributes.key = ctx.prefix + ctx.key;
  }

  elements = [];
  children = node.children || [];
  length = children.length;
  index = -1;

  while (++index < length) {
    value = children[index];

    if (is('element', value)) {
      elements.push(toH(h, value, ctx));
    } else if (is('text', value)) {
      elements.push(value.value);
    }
  }

  /* Ensure no React warnings are triggered for
   * void elements having children passed in. */
  if (elements.length === 0) {
    elements = undefined;
  }

  return h(selector, attributes, elements);
}

/* Add `name` and its `value` to `props`. */
function addAttribute(props, name, value, ctx) {
  var info = information(name) || {};
  var subprop;

  /* Ignore nully, `false`, `NaN`, and falsey known
   * booleans. */
  if (
    value === null ||
    value === undefined ||
    value === false ||
    nan(value) ||
    (info.boolean && !value)
  ) {
    return;
  }

  name = info.name || paramCase(name);

  if (value !== null && typeof value === 'object' && 'length' in value) {
    /* Accept `array`.  Most props are space-separater. */
    value = (info.commaSeparated ? commas : spaces).stringify(value);
  }

  /* Treat `true` and truthy known booleans. */
  if (info.boolean && ctx.hyperscript === true) {
    value = '';
  }

  if (info.name !== 'class' && (info.mustUseAttribute || !info.name)) {
    if (ctx.vdom === true) {
      subprop = 'attributes';
    } else if (ctx.hyperscript === true) {
      subprop = 'attrs';
    }

    if (subprop) {
      if (props[subprop] === undefined) {
        props[subprop] = {};
      }

      props[subprop][name] = value;

      return;
    }
  }

  props[info.propertyName || name] = value;
}

/* Check if `h` is `react.createElement`.  It doesn’t accept
 * `class` as an attribute, it must be added through the
 * `selector`. */
function react(h) {
  var node = h && h('div');
  return Boolean(node && ('_owner' in node || '_store' in node) && node.key === null);
}

/* Check if `h` is `hyperscript`.  It doesn’t accept
 * `class` as an attribute, it must be added through the
 * `selector`. */
function hyperscript(h) {
  return Boolean(h && h.context && h.cleanup);
}

/**
 * Check if `h` is `virtual-dom/h`.  It’s the only
 * hyperscript “compatible” interface needing `attributes`. */
function vdom(h) {
  try {
    return h('div').type === 'VirtualNode';
  } catch (err) { /* Empty */ }

  /* istanbul ignore next */
  return false;
}

function parseStyle(value) {
  var result = {};
  var declarations = value.split(';');
  var length = declarations.length;
  var index = -1;
  var declaration;
  var prop;
  var pos;

  while (++index < length) {
    declaration = declarations[index];
    pos = declaration.indexOf(':');
    if (pos !== -1) {
      prop = camelCase(trim(declaration.slice(0, pos)));
      result[prop] = trim(declaration.slice(pos + 1));
    }
  }

  return result;
}

function camelCase(val) {
  if (val.slice(0, 4) === '-ms-') {
    val = 'ms-' + val.slice(4);
  }

  return val.replace(/-([a-z])/g, replace);
}

function replace($0, $1) {
  return $1.toUpperCase();
}


/***/ }),

/***/ "../components/node_modules/semver/semver.js":
/*!***************************************************!*\
  !*** ../components/node_modules/semver/semver.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {exports = module.exports = SemVer;

// The debug function is excluded entirely from the minified version.
/* nomin */ var debug;
/* nomin */ if (typeof process === 'object' &&
    /* nomin */ process.env &&
    /* nomin */ process.env.NODE_DEBUG &&
    /* nomin */ /\bsemver\b/i.test(process.env.NODE_DEBUG))
  /* nomin */ debug = function() {
    /* nomin */ var args = Array.prototype.slice.call(arguments, 0);
    /* nomin */ args.unshift('SEMVER');
    /* nomin */ console.log.apply(console, args);
    /* nomin */ };
/* nomin */ else
  /* nomin */ debug = function() {};

// Note: this is the semver.org version of the spec that it implements
// Not necessarily the package version of this code.
exports.SEMVER_SPEC_VERSION = '2.0.0';

var MAX_LENGTH = 256;
var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;

// Max safe segment length for coercion.
var MAX_SAFE_COMPONENT_LENGTH = 16;

// The actual regexps go on exports.re
var re = exports.re = [];
var src = exports.src = [];
var R = 0;

// The following Regular Expressions can be used for tokenizing,
// validating, and parsing SemVer version strings.

// ## Numeric Identifier
// A single `0`, or a non-zero digit followed by zero or more digits.

var NUMERICIDENTIFIER = R++;
src[NUMERICIDENTIFIER] = '0|[1-9]\\d*';
var NUMERICIDENTIFIERLOOSE = R++;
src[NUMERICIDENTIFIERLOOSE] = '[0-9]+';


// ## Non-numeric Identifier
// Zero or more digits, followed by a letter or hyphen, and then zero or
// more letters, digits, or hyphens.

var NONNUMERICIDENTIFIER = R++;
src[NONNUMERICIDENTIFIER] = '\\d*[a-zA-Z-][a-zA-Z0-9-]*';


// ## Main Version
// Three dot-separated numeric identifiers.

var MAINVERSION = R++;
src[MAINVERSION] = '(' + src[NUMERICIDENTIFIER] + ')\\.' +
                   '(' + src[NUMERICIDENTIFIER] + ')\\.' +
                   '(' + src[NUMERICIDENTIFIER] + ')';

var MAINVERSIONLOOSE = R++;
src[MAINVERSIONLOOSE] = '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' +
                        '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' +
                        '(' + src[NUMERICIDENTIFIERLOOSE] + ')';

// ## Pre-release Version Identifier
// A numeric identifier, or a non-numeric identifier.

var PRERELEASEIDENTIFIER = R++;
src[PRERELEASEIDENTIFIER] = '(?:' + src[NUMERICIDENTIFIER] +
                            '|' + src[NONNUMERICIDENTIFIER] + ')';

var PRERELEASEIDENTIFIERLOOSE = R++;
src[PRERELEASEIDENTIFIERLOOSE] = '(?:' + src[NUMERICIDENTIFIERLOOSE] +
                                 '|' + src[NONNUMERICIDENTIFIER] + ')';


// ## Pre-release Version
// Hyphen, followed by one or more dot-separated pre-release version
// identifiers.

var PRERELEASE = R++;
src[PRERELEASE] = '(?:-(' + src[PRERELEASEIDENTIFIER] +
                  '(?:\\.' + src[PRERELEASEIDENTIFIER] + ')*))';

var PRERELEASELOOSE = R++;
src[PRERELEASELOOSE] = '(?:-?(' + src[PRERELEASEIDENTIFIERLOOSE] +
                       '(?:\\.' + src[PRERELEASEIDENTIFIERLOOSE] + ')*))';

// ## Build Metadata Identifier
// Any combination of digits, letters, or hyphens.

var BUILDIDENTIFIER = R++;
src[BUILDIDENTIFIER] = '[0-9A-Za-z-]+';

// ## Build Metadata
// Plus sign, followed by one or more period-separated build metadata
// identifiers.

var BUILD = R++;
src[BUILD] = '(?:\\+(' + src[BUILDIDENTIFIER] +
             '(?:\\.' + src[BUILDIDENTIFIER] + ')*))';


// ## Full Version String
// A main version, followed optionally by a pre-release version and
// build metadata.

// Note that the only major, minor, patch, and pre-release sections of
// the version string are capturing groups.  The build metadata is not a
// capturing group, because it should not ever be used in version
// comparison.

var FULL = R++;
var FULLPLAIN = 'v?' + src[MAINVERSION] +
                src[PRERELEASE] + '?' +
                src[BUILD] + '?';

src[FULL] = '^' + FULLPLAIN + '$';

// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
// common in the npm registry.
var LOOSEPLAIN = '[v=\\s]*' + src[MAINVERSIONLOOSE] +
                 src[PRERELEASELOOSE] + '?' +
                 src[BUILD] + '?';

var LOOSE = R++;
src[LOOSE] = '^' + LOOSEPLAIN + '$';

var GTLT = R++;
src[GTLT] = '((?:<|>)?=?)';

// Something like "2.*" or "1.2.x".
// Note that "x.x" is a valid xRange identifer, meaning "any version"
// Only the first item is strictly required.
var XRANGEIDENTIFIERLOOSE = R++;
src[XRANGEIDENTIFIERLOOSE] = src[NUMERICIDENTIFIERLOOSE] + '|x|X|\\*';
var XRANGEIDENTIFIER = R++;
src[XRANGEIDENTIFIER] = src[NUMERICIDENTIFIER] + '|x|X|\\*';

var XRANGEPLAIN = R++;
src[XRANGEPLAIN] = '[v=\\s]*(' + src[XRANGEIDENTIFIER] + ')' +
                   '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' +
                   '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' +
                   '(?:' + src[PRERELEASE] + ')?' +
                   src[BUILD] + '?' +
                   ')?)?';

var XRANGEPLAINLOOSE = R++;
src[XRANGEPLAINLOOSE] = '[v=\\s]*(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:' + src[PRERELEASELOOSE] + ')?' +
                        src[BUILD] + '?' +
                        ')?)?';

var XRANGE = R++;
src[XRANGE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAIN] + '$';
var XRANGELOOSE = R++;
src[XRANGELOOSE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAINLOOSE] + '$';

// Coercion.
// Extract anything that could conceivably be a part of a valid semver
var COERCE = R++;
src[COERCE] = '(?:^|[^\\d])' +
              '(\\d{1,' + MAX_SAFE_COMPONENT_LENGTH + '})' +
              '(?:\\.(\\d{1,' + MAX_SAFE_COMPONENT_LENGTH + '}))?' +
              '(?:\\.(\\d{1,' + MAX_SAFE_COMPONENT_LENGTH + '}))?' +
              '(?:$|[^\\d])';

// Tilde ranges.
// Meaning is "reasonably at or greater than"
var LONETILDE = R++;
src[LONETILDE] = '(?:~>?)';

var TILDETRIM = R++;
src[TILDETRIM] = '(\\s*)' + src[LONETILDE] + '\\s+';
re[TILDETRIM] = new RegExp(src[TILDETRIM], 'g');
var tildeTrimReplace = '$1~';

var TILDE = R++;
src[TILDE] = '^' + src[LONETILDE] + src[XRANGEPLAIN] + '$';
var TILDELOOSE = R++;
src[TILDELOOSE] = '^' + src[LONETILDE] + src[XRANGEPLAINLOOSE] + '$';

// Caret ranges.
// Meaning is "at least and backwards compatible with"
var LONECARET = R++;
src[LONECARET] = '(?:\\^)';

var CARETTRIM = R++;
src[CARETTRIM] = '(\\s*)' + src[LONECARET] + '\\s+';
re[CARETTRIM] = new RegExp(src[CARETTRIM], 'g');
var caretTrimReplace = '$1^';

var CARET = R++;
src[CARET] = '^' + src[LONECARET] + src[XRANGEPLAIN] + '$';
var CARETLOOSE = R++;
src[CARETLOOSE] = '^' + src[LONECARET] + src[XRANGEPLAINLOOSE] + '$';

// A simple gt/lt/eq thing, or just "" to indicate "any version"
var COMPARATORLOOSE = R++;
src[COMPARATORLOOSE] = '^' + src[GTLT] + '\\s*(' + LOOSEPLAIN + ')$|^$';
var COMPARATOR = R++;
src[COMPARATOR] = '^' + src[GTLT] + '\\s*(' + FULLPLAIN + ')$|^$';


// An expression to strip any whitespace between the gtlt and the thing
// it modifies, so that `> 1.2.3` ==> `>1.2.3`
var COMPARATORTRIM = R++;
src[COMPARATORTRIM] = '(\\s*)' + src[GTLT] +
                      '\\s*(' + LOOSEPLAIN + '|' + src[XRANGEPLAIN] + ')';

// this one has to use the /g flag
re[COMPARATORTRIM] = new RegExp(src[COMPARATORTRIM], 'g');
var comparatorTrimReplace = '$1$2$3';


// Something like `1.2.3 - 1.2.4`
// Note that these all use the loose form, because they'll be
// checked against either the strict or loose comparator form
// later.
var HYPHENRANGE = R++;
src[HYPHENRANGE] = '^\\s*(' + src[XRANGEPLAIN] + ')' +
                   '\\s+-\\s+' +
                   '(' + src[XRANGEPLAIN] + ')' +
                   '\\s*$';

var HYPHENRANGELOOSE = R++;
src[HYPHENRANGELOOSE] = '^\\s*(' + src[XRANGEPLAINLOOSE] + ')' +
                        '\\s+-\\s+' +
                        '(' + src[XRANGEPLAINLOOSE] + ')' +
                        '\\s*$';

// Star ranges basically just allow anything at all.
var STAR = R++;
src[STAR] = '(<|>)?=?\\s*\\*';

// Compile to actual regexp objects.
// All are flag-free, unless they were created above with a flag.
for (var i = 0; i < R; i++) {
  debug(i, src[i]);
  if (!re[i])
    re[i] = new RegExp(src[i]);
}

exports.parse = parse;
function parse(version, loose) {
  if (version instanceof SemVer)
    return version;

  if (typeof version !== 'string')
    return null;

  if (version.length > MAX_LENGTH)
    return null;

  var r = loose ? re[LOOSE] : re[FULL];
  if (!r.test(version))
    return null;

  try {
    return new SemVer(version, loose);
  } catch (er) {
    return null;
  }
}

exports.valid = valid;
function valid(version, loose) {
  var v = parse(version, loose);
  return v ? v.version : null;
}


exports.clean = clean;
function clean(version, loose) {
  var s = parse(version.trim().replace(/^[=v]+/, ''), loose);
  return s ? s.version : null;
}

exports.SemVer = SemVer;

function SemVer(version, loose) {
  if (version instanceof SemVer) {
    if (version.loose === loose)
      return version;
    else
      version = version.version;
  } else if (typeof version !== 'string') {
    throw new TypeError('Invalid Version: ' + version);
  }

  if (version.length > MAX_LENGTH)
    throw new TypeError('version is longer than ' + MAX_LENGTH + ' characters')

  if (!(this instanceof SemVer))
    return new SemVer(version, loose);

  debug('SemVer', version, loose);
  this.loose = loose;
  var m = version.trim().match(loose ? re[LOOSE] : re[FULL]);

  if (!m)
    throw new TypeError('Invalid Version: ' + version);

  this.raw = version;

  // these are actually numbers
  this.major = +m[1];
  this.minor = +m[2];
  this.patch = +m[3];

  if (this.major > MAX_SAFE_INTEGER || this.major < 0)
    throw new TypeError('Invalid major version')

  if (this.minor > MAX_SAFE_INTEGER || this.minor < 0)
    throw new TypeError('Invalid minor version')

  if (this.patch > MAX_SAFE_INTEGER || this.patch < 0)
    throw new TypeError('Invalid patch version')

  // numberify any prerelease numeric ids
  if (!m[4])
    this.prerelease = [];
  else
    this.prerelease = m[4].split('.').map(function(id) {
      if (/^[0-9]+$/.test(id)) {
        var num = +id;
        if (num >= 0 && num < MAX_SAFE_INTEGER)
          return num;
      }
      return id;
    });

  this.build = m[5] ? m[5].split('.') : [];
  this.format();
}

SemVer.prototype.format = function() {
  this.version = this.major + '.' + this.minor + '.' + this.patch;
  if (this.prerelease.length)
    this.version += '-' + this.prerelease.join('.');
  return this.version;
};

SemVer.prototype.toString = function() {
  return this.version;
};

SemVer.prototype.compare = function(other) {
  debug('SemVer.compare', this.version, this.loose, other);
  if (!(other instanceof SemVer))
    other = new SemVer(other, this.loose);

  return this.compareMain(other) || this.comparePre(other);
};

SemVer.prototype.compareMain = function(other) {
  if (!(other instanceof SemVer))
    other = new SemVer(other, this.loose);

  return compareIdentifiers(this.major, other.major) ||
         compareIdentifiers(this.minor, other.minor) ||
         compareIdentifiers(this.patch, other.patch);
};

SemVer.prototype.comparePre = function(other) {
  if (!(other instanceof SemVer))
    other = new SemVer(other, this.loose);

  // NOT having a prerelease is > having one
  if (this.prerelease.length && !other.prerelease.length)
    return -1;
  else if (!this.prerelease.length && other.prerelease.length)
    return 1;
  else if (!this.prerelease.length && !other.prerelease.length)
    return 0;

  var i = 0;
  do {
    var a = this.prerelease[i];
    var b = other.prerelease[i];
    debug('prerelease compare', i, a, b);
    if (a === undefined && b === undefined)
      return 0;
    else if (b === undefined)
      return 1;
    else if (a === undefined)
      return -1;
    else if (a === b)
      continue;
    else
      return compareIdentifiers(a, b);
  } while (++i);
};

// preminor will bump the version up to the next minor release, and immediately
// down to pre-release. premajor and prepatch work the same way.
SemVer.prototype.inc = function(release, identifier) {
  switch (release) {
    case 'premajor':
      this.prerelease.length = 0;
      this.patch = 0;
      this.minor = 0;
      this.major++;
      this.inc('pre', identifier);
      break;
    case 'preminor':
      this.prerelease.length = 0;
      this.patch = 0;
      this.minor++;
      this.inc('pre', identifier);
      break;
    case 'prepatch':
      // If this is already a prerelease, it will bump to the next version
      // drop any prereleases that might already exist, since they are not
      // relevant at this point.
      this.prerelease.length = 0;
      this.inc('patch', identifier);
      this.inc('pre', identifier);
      break;
    // If the input is a non-prerelease version, this acts the same as
    // prepatch.
    case 'prerelease':
      if (this.prerelease.length === 0)
        this.inc('patch', identifier);
      this.inc('pre', identifier);
      break;

    case 'major':
      // If this is a pre-major version, bump up to the same major version.
      // Otherwise increment major.
      // 1.0.0-5 bumps to 1.0.0
      // 1.1.0 bumps to 2.0.0
      if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0)
        this.major++;
      this.minor = 0;
      this.patch = 0;
      this.prerelease = [];
      break;
    case 'minor':
      // If this is a pre-minor version, bump up to the same minor version.
      // Otherwise increment minor.
      // 1.2.0-5 bumps to 1.2.0
      // 1.2.1 bumps to 1.3.0
      if (this.patch !== 0 || this.prerelease.length === 0)
        this.minor++;
      this.patch = 0;
      this.prerelease = [];
      break;
    case 'patch':
      // If this is not a pre-release version, it will increment the patch.
      // If it is a pre-release it will bump up to the same patch version.
      // 1.2.0-5 patches to 1.2.0
      // 1.2.0 patches to 1.2.1
      if (this.prerelease.length === 0)
        this.patch++;
      this.prerelease = [];
      break;
    // This probably shouldn't be used publicly.
    // 1.0.0 "pre" would become 1.0.0-0 which is the wrong direction.
    case 'pre':
      if (this.prerelease.length === 0)
        this.prerelease = [0];
      else {
        var i = this.prerelease.length;
        while (--i >= 0) {
          if (typeof this.prerelease[i] === 'number') {
            this.prerelease[i]++;
            i = -2;
          }
        }
        if (i === -1) // didn't increment anything
          this.prerelease.push(0);
      }
      if (identifier) {
        // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
        // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
        if (this.prerelease[0] === identifier) {
          if (isNaN(this.prerelease[1]))
            this.prerelease = [identifier, 0];
        } else
          this.prerelease = [identifier, 0];
      }
      break;

    default:
      throw new Error('invalid increment argument: ' + release);
  }
  this.format();
  this.raw = this.version;
  return this;
};

exports.inc = inc;
function inc(version, release, loose, identifier) {
  if (typeof(loose) === 'string') {
    identifier = loose;
    loose = undefined;
  }

  try {
    return new SemVer(version, loose).inc(release, identifier).version;
  } catch (er) {
    return null;
  }
}

exports.diff = diff;
function diff(version1, version2) {
  if (eq(version1, version2)) {
    return null;
  } else {
    var v1 = parse(version1);
    var v2 = parse(version2);
    if (v1.prerelease.length || v2.prerelease.length) {
      for (var key in v1) {
        if (key === 'major' || key === 'minor' || key === 'patch') {
          if (v1[key] !== v2[key]) {
            return 'pre'+key;
          }
        }
      }
      return 'prerelease';
    }
    for (var key in v1) {
      if (key === 'major' || key === 'minor' || key === 'patch') {
        if (v1[key] !== v2[key]) {
          return key;
        }
      }
    }
  }
}

exports.compareIdentifiers = compareIdentifiers;

var numeric = /^[0-9]+$/;
function compareIdentifiers(a, b) {
  var anum = numeric.test(a);
  var bnum = numeric.test(b);

  if (anum && bnum) {
    a = +a;
    b = +b;
  }

  return (anum && !bnum) ? -1 :
         (bnum && !anum) ? 1 :
         a < b ? -1 :
         a > b ? 1 :
         0;
}

exports.rcompareIdentifiers = rcompareIdentifiers;
function rcompareIdentifiers(a, b) {
  return compareIdentifiers(b, a);
}

exports.major = major;
function major(a, loose) {
  return new SemVer(a, loose).major;
}

exports.minor = minor;
function minor(a, loose) {
  return new SemVer(a, loose).minor;
}

exports.patch = patch;
function patch(a, loose) {
  return new SemVer(a, loose).patch;
}

exports.compare = compare;
function compare(a, b, loose) {
  return new SemVer(a, loose).compare(new SemVer(b, loose));
}

exports.compareLoose = compareLoose;
function compareLoose(a, b) {
  return compare(a, b, true);
}

exports.rcompare = rcompare;
function rcompare(a, b, loose) {
  return compare(b, a, loose);
}

exports.sort = sort;
function sort(list, loose) {
  return list.sort(function(a, b) {
    return exports.compare(a, b, loose);
  });
}

exports.rsort = rsort;
function rsort(list, loose) {
  return list.sort(function(a, b) {
    return exports.rcompare(a, b, loose);
  });
}

exports.gt = gt;
function gt(a, b, loose) {
  return compare(a, b, loose) > 0;
}

exports.lt = lt;
function lt(a, b, loose) {
  return compare(a, b, loose) < 0;
}

exports.eq = eq;
function eq(a, b, loose) {
  return compare(a, b, loose) === 0;
}

exports.neq = neq;
function neq(a, b, loose) {
  return compare(a, b, loose) !== 0;
}

exports.gte = gte;
function gte(a, b, loose) {
  return compare(a, b, loose) >= 0;
}

exports.lte = lte;
function lte(a, b, loose) {
  return compare(a, b, loose) <= 0;
}

exports.cmp = cmp;
function cmp(a, op, b, loose) {
  var ret;
  switch (op) {
    case '===':
      if (typeof a === 'object') a = a.version;
      if (typeof b === 'object') b = b.version;
      ret = a === b;
      break;
    case '!==':
      if (typeof a === 'object') a = a.version;
      if (typeof b === 'object') b = b.version;
      ret = a !== b;
      break;
    case '': case '=': case '==': ret = eq(a, b, loose); break;
    case '!=': ret = neq(a, b, loose); break;
    case '>': ret = gt(a, b, loose); break;
    case '>=': ret = gte(a, b, loose); break;
    case '<': ret = lt(a, b, loose); break;
    case '<=': ret = lte(a, b, loose); break;
    default: throw new TypeError('Invalid operator: ' + op);
  }
  return ret;
}

exports.Comparator = Comparator;
function Comparator(comp, loose) {
  if (comp instanceof Comparator) {
    if (comp.loose === loose)
      return comp;
    else
      comp = comp.value;
  }

  if (!(this instanceof Comparator))
    return new Comparator(comp, loose);

  debug('comparator', comp, loose);
  this.loose = loose;
  this.parse(comp);

  if (this.semver === ANY)
    this.value = '';
  else
    this.value = this.operator + this.semver.version;

  debug('comp', this);
}

var ANY = {};
Comparator.prototype.parse = function(comp) {
  var r = this.loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
  var m = comp.match(r);

  if (!m)
    throw new TypeError('Invalid comparator: ' + comp);

  this.operator = m[1];
  if (this.operator === '=')
    this.operator = '';

  // if it literally is just '>' or '' then allow anything.
  if (!m[2])
    this.semver = ANY;
  else
    this.semver = new SemVer(m[2], this.loose);
};

Comparator.prototype.toString = function() {
  return this.value;
};

Comparator.prototype.test = function(version) {
  debug('Comparator.test', version, this.loose);

  if (this.semver === ANY)
    return true;

  if (typeof version === 'string')
    version = new SemVer(version, this.loose);

  return cmp(version, this.operator, this.semver, this.loose);
};

Comparator.prototype.intersects = function(comp, loose) {
  if (!(comp instanceof Comparator)) {
    throw new TypeError('a Comparator is required');
  }

  var rangeTmp;

  if (this.operator === '') {
    rangeTmp = new Range(comp.value, loose);
    return satisfies(this.value, rangeTmp, loose);
  } else if (comp.operator === '') {
    rangeTmp = new Range(this.value, loose);
    return satisfies(comp.semver, rangeTmp, loose);
  }

  var sameDirectionIncreasing =
    (this.operator === '>=' || this.operator === '>') &&
    (comp.operator === '>=' || comp.operator === '>');
  var sameDirectionDecreasing =
    (this.operator === '<=' || this.operator === '<') &&
    (comp.operator === '<=' || comp.operator === '<');
  var sameSemVer = this.semver.version === comp.semver.version;
  var differentDirectionsInclusive =
    (this.operator === '>=' || this.operator === '<=') &&
    (comp.operator === '>=' || comp.operator === '<=');
  var oppositeDirectionsLessThan =
    cmp(this.semver, '<', comp.semver, loose) &&
    ((this.operator === '>=' || this.operator === '>') &&
    (comp.operator === '<=' || comp.operator === '<'));
  var oppositeDirectionsGreaterThan =
    cmp(this.semver, '>', comp.semver, loose) &&
    ((this.operator === '<=' || this.operator === '<') &&
    (comp.operator === '>=' || comp.operator === '>'));

  return sameDirectionIncreasing || sameDirectionDecreasing ||
    (sameSemVer && differentDirectionsInclusive) ||
    oppositeDirectionsLessThan || oppositeDirectionsGreaterThan;
};


exports.Range = Range;
function Range(range, loose) {
  if (range instanceof Range) {
    if (range.loose === loose) {
      return range;
    } else {
      return new Range(range.raw, loose);
    }
  }

  if (range instanceof Comparator) {
    return new Range(range.value, loose);
  }

  if (!(this instanceof Range))
    return new Range(range, loose);

  this.loose = loose;

  // First, split based on boolean or ||
  this.raw = range;
  this.set = range.split(/\s*\|\|\s*/).map(function(range) {
    return this.parseRange(range.trim());
  }, this).filter(function(c) {
    // throw out any that are not relevant for whatever reason
    return c.length;
  });

  if (!this.set.length) {
    throw new TypeError('Invalid SemVer Range: ' + range);
  }

  this.format();
}

Range.prototype.format = function() {
  this.range = this.set.map(function(comps) {
    return comps.join(' ').trim();
  }).join('||').trim();
  return this.range;
};

Range.prototype.toString = function() {
  return this.range;
};

Range.prototype.parseRange = function(range) {
  var loose = this.loose;
  range = range.trim();
  debug('range', range, loose);
  // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
  var hr = loose ? re[HYPHENRANGELOOSE] : re[HYPHENRANGE];
  range = range.replace(hr, hyphenReplace);
  debug('hyphen replace', range);
  // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
  range = range.replace(re[COMPARATORTRIM], comparatorTrimReplace);
  debug('comparator trim', range, re[COMPARATORTRIM]);

  // `~ 1.2.3` => `~1.2.3`
  range = range.replace(re[TILDETRIM], tildeTrimReplace);

  // `^ 1.2.3` => `^1.2.3`
  range = range.replace(re[CARETTRIM], caretTrimReplace);

  // normalize spaces
  range = range.split(/\s+/).join(' ');

  // At this point, the range is completely trimmed and
  // ready to be split into comparators.

  var compRe = loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
  var set = range.split(' ').map(function(comp) {
    return parseComparator(comp, loose);
  }).join(' ').split(/\s+/);
  if (this.loose) {
    // in loose mode, throw out any that are not valid comparators
    set = set.filter(function(comp) {
      return !!comp.match(compRe);
    });
  }
  set = set.map(function(comp) {
    return new Comparator(comp, loose);
  });

  return set;
};

Range.prototype.intersects = function(range, loose) {
  if (!(range instanceof Range)) {
    throw new TypeError('a Range is required');
  }

  return this.set.some(function(thisComparators) {
    return thisComparators.every(function(thisComparator) {
      return range.set.some(function(rangeComparators) {
        return rangeComparators.every(function(rangeComparator) {
          return thisComparator.intersects(rangeComparator, loose);
        });
      });
    });
  });
};

// Mostly just for testing and legacy API reasons
exports.toComparators = toComparators;
function toComparators(range, loose) {
  return new Range(range, loose).set.map(function(comp) {
    return comp.map(function(c) {
      return c.value;
    }).join(' ').trim().split(' ');
  });
}

// comprised of xranges, tildes, stars, and gtlt's at this point.
// already replaced the hyphen ranges
// turn into a set of JUST comparators.
function parseComparator(comp, loose) {
  debug('comp', comp);
  comp = replaceCarets(comp, loose);
  debug('caret', comp);
  comp = replaceTildes(comp, loose);
  debug('tildes', comp);
  comp = replaceXRanges(comp, loose);
  debug('xrange', comp);
  comp = replaceStars(comp, loose);
  debug('stars', comp);
  return comp;
}

function isX(id) {
  return !id || id.toLowerCase() === 'x' || id === '*';
}

// ~, ~> --> * (any, kinda silly)
// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0
// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0
// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0
// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0
// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0
function replaceTildes(comp, loose) {
  return comp.trim().split(/\s+/).map(function(comp) {
    return replaceTilde(comp, loose);
  }).join(' ');
}

function replaceTilde(comp, loose) {
  var r = loose ? re[TILDELOOSE] : re[TILDE];
  return comp.replace(r, function(_, M, m, p, pr) {
    debug('tilde', comp, _, M, m, p, pr);
    var ret;

    if (isX(M))
      ret = '';
    else if (isX(m))
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
    else if (isX(p))
      // ~1.2 == >=1.2.0 <1.3.0
      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
    else if (pr) {
      debug('replaceTilde pr', pr);
      if (pr.charAt(0) !== '-')
        pr = '-' + pr;
      ret = '>=' + M + '.' + m + '.' + p + pr +
            ' <' + M + '.' + (+m + 1) + '.0';
    } else
      // ~1.2.3 == >=1.2.3 <1.3.0
      ret = '>=' + M + '.' + m + '.' + p +
            ' <' + M + '.' + (+m + 1) + '.0';

    debug('tilde return', ret);
    return ret;
  });
}

// ^ --> * (any, kinda silly)
// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0
// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0
// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0
// ^1.2.3 --> >=1.2.3 <2.0.0
// ^1.2.0 --> >=1.2.0 <2.0.0
function replaceCarets(comp, loose) {
  return comp.trim().split(/\s+/).map(function(comp) {
    return replaceCaret(comp, loose);
  }).join(' ');
}

function replaceCaret(comp, loose) {
  debug('caret', comp, loose);
  var r = loose ? re[CARETLOOSE] : re[CARET];
  return comp.replace(r, function(_, M, m, p, pr) {
    debug('caret', comp, _, M, m, p, pr);
    var ret;

    if (isX(M))
      ret = '';
    else if (isX(m))
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
    else if (isX(p)) {
      if (M === '0')
        ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
      else
        ret = '>=' + M + '.' + m + '.0 <' + (+M + 1) + '.0.0';
    } else if (pr) {
      debug('replaceCaret pr', pr);
      if (pr.charAt(0) !== '-')
        pr = '-' + pr;
      if (M === '0') {
        if (m === '0')
          ret = '>=' + M + '.' + m + '.' + p + pr +
                ' <' + M + '.' + m + '.' + (+p + 1);
        else
          ret = '>=' + M + '.' + m + '.' + p + pr +
                ' <' + M + '.' + (+m + 1) + '.0';
      } else
        ret = '>=' + M + '.' + m + '.' + p + pr +
              ' <' + (+M + 1) + '.0.0';
    } else {
      debug('no pr');
      if (M === '0') {
        if (m === '0')
          ret = '>=' + M + '.' + m + '.' + p +
                ' <' + M + '.' + m + '.' + (+p + 1);
        else
          ret = '>=' + M + '.' + m + '.' + p +
                ' <' + M + '.' + (+m + 1) + '.0';
      } else
        ret = '>=' + M + '.' + m + '.' + p +
              ' <' + (+M + 1) + '.0.0';
    }

    debug('caret return', ret);
    return ret;
  });
}

function replaceXRanges(comp, loose) {
  debug('replaceXRanges', comp, loose);
  return comp.split(/\s+/).map(function(comp) {
    return replaceXRange(comp, loose);
  }).join(' ');
}

function replaceXRange(comp, loose) {
  comp = comp.trim();
  var r = loose ? re[XRANGELOOSE] : re[XRANGE];
  return comp.replace(r, function(ret, gtlt, M, m, p, pr) {
    debug('xRange', comp, ret, gtlt, M, m, p, pr);
    var xM = isX(M);
    var xm = xM || isX(m);
    var xp = xm || isX(p);
    var anyX = xp;

    if (gtlt === '=' && anyX)
      gtlt = '';

    if (xM) {
      if (gtlt === '>' || gtlt === '<') {
        // nothing is allowed
        ret = '<0.0.0';
      } else {
        // nothing is forbidden
        ret = '*';
      }
    } else if (gtlt && anyX) {
      // replace X with 0
      if (xm)
        m = 0;
      if (xp)
        p = 0;

      if (gtlt === '>') {
        // >1 => >=2.0.0
        // >1.2 => >=1.3.0
        // >1.2.3 => >= 1.2.4
        gtlt = '>=';
        if (xm) {
          M = +M + 1;
          m = 0;
          p = 0;
        } else if (xp) {
          m = +m + 1;
          p = 0;
        }
      } else if (gtlt === '<=') {
        // <=0.7.x is actually <0.8.0, since any 0.7.x should
        // pass.  Similarly, <=7.x is actually <8.0.0, etc.
        gtlt = '<';
        if (xm)
          M = +M + 1;
        else
          m = +m + 1;
      }

      ret = gtlt + M + '.' + m + '.' + p;
    } else if (xm) {
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
    } else if (xp) {
      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
    }

    debug('xRange return', ret);

    return ret;
  });
}

// Because * is AND-ed with everything else in the comparator,
// and '' means "any version", just remove the *s entirely.
function replaceStars(comp, loose) {
  debug('replaceStars', comp, loose);
  // Looseness is ignored here.  star is always as loose as it gets!
  return comp.trim().replace(re[STAR], '');
}

// This function is passed to string.replace(re[HYPHENRANGE])
// M, m, patch, prerelease, build
// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
// 1.2.3 - 3.4 => >=1.2.0 <3.5.0 Any 3.4.x will do
// 1.2 - 3.4 => >=1.2.0 <3.5.0
function hyphenReplace($0,
                       from, fM, fm, fp, fpr, fb,
                       to, tM, tm, tp, tpr, tb) {

  if (isX(fM))
    from = '';
  else if (isX(fm))
    from = '>=' + fM + '.0.0';
  else if (isX(fp))
    from = '>=' + fM + '.' + fm + '.0';
  else
    from = '>=' + from;

  if (isX(tM))
    to = '';
  else if (isX(tm))
    to = '<' + (+tM + 1) + '.0.0';
  else if (isX(tp))
    to = '<' + tM + '.' + (+tm + 1) + '.0';
  else if (tpr)
    to = '<=' + tM + '.' + tm + '.' + tp + '-' + tpr;
  else
    to = '<=' + to;

  return (from + ' ' + to).trim();
}


// if ANY of the sets match ALL of its comparators, then pass
Range.prototype.test = function(version) {
  if (!version)
    return false;

  if (typeof version === 'string')
    version = new SemVer(version, this.loose);

  for (var i = 0; i < this.set.length; i++) {
    if (testSet(this.set[i], version))
      return true;
  }
  return false;
};

function testSet(set, version) {
  for (var i = 0; i < set.length; i++) {
    if (!set[i].test(version))
      return false;
  }

  if (version.prerelease.length) {
    // Find the set of versions that are allowed to have prereleases
    // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
    // That should allow `1.2.3-pr.2` to pass.
    // However, `1.2.4-alpha.notready` should NOT be allowed,
    // even though it's within the range set by the comparators.
    for (var i = 0; i < set.length; i++) {
      debug(set[i].semver);
      if (set[i].semver === ANY)
        continue;

      if (set[i].semver.prerelease.length > 0) {
        var allowed = set[i].semver;
        if (allowed.major === version.major &&
            allowed.minor === version.minor &&
            allowed.patch === version.patch)
          return true;
      }
    }

    // Version has a -pre, but it's not one of the ones we like.
    return false;
  }

  return true;
}

exports.satisfies = satisfies;
function satisfies(version, range, loose) {
  try {
    range = new Range(range, loose);
  } catch (er) {
    return false;
  }
  return range.test(version);
}

exports.maxSatisfying = maxSatisfying;
function maxSatisfying(versions, range, loose) {
  var max = null;
  var maxSV = null;
  try {
    var rangeObj = new Range(range, loose);
  } catch (er) {
    return null;
  }
  versions.forEach(function (v) {
    if (rangeObj.test(v)) { // satisfies(v, range, loose)
      if (!max || maxSV.compare(v) === -1) { // compare(max, v, true)
        max = v;
        maxSV = new SemVer(max, loose);
      }
    }
  })
  return max;
}

exports.minSatisfying = minSatisfying;
function minSatisfying(versions, range, loose) {
  var min = null;
  var minSV = null;
  try {
    var rangeObj = new Range(range, loose);
  } catch (er) {
    return null;
  }
  versions.forEach(function (v) {
    if (rangeObj.test(v)) { // satisfies(v, range, loose)
      if (!min || minSV.compare(v) === 1) { // compare(min, v, true)
        min = v;
        minSV = new SemVer(min, loose);
      }
    }
  })
  return min;
}

exports.validRange = validRange;
function validRange(range, loose) {
  try {
    // Return '*' instead of '' so that truthiness works.
    // This will throw if it's invalid anyway
    return new Range(range, loose).range || '*';
  } catch (er) {
    return null;
  }
}

// Determine if version is less than all the versions possible in the range
exports.ltr = ltr;
function ltr(version, range, loose) {
  return outside(version, range, '<', loose);
}

// Determine if version is greater than all the versions possible in the range.
exports.gtr = gtr;
function gtr(version, range, loose) {
  return outside(version, range, '>', loose);
}

exports.outside = outside;
function outside(version, range, hilo, loose) {
  version = new SemVer(version, loose);
  range = new Range(range, loose);

  var gtfn, ltefn, ltfn, comp, ecomp;
  switch (hilo) {
    case '>':
      gtfn = gt;
      ltefn = lte;
      ltfn = lt;
      comp = '>';
      ecomp = '>=';
      break;
    case '<':
      gtfn = lt;
      ltefn = gte;
      ltfn = gt;
      comp = '<';
      ecomp = '<=';
      break;
    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"');
  }

  // If it satisifes the range it is not outside
  if (satisfies(version, range, loose)) {
    return false;
  }

  // From now on, variable terms are as if we're in "gtr" mode.
  // but note that everything is flipped for the "ltr" function.

  for (var i = 0; i < range.set.length; ++i) {
    var comparators = range.set[i];

    var high = null;
    var low = null;

    comparators.forEach(function(comparator) {
      if (comparator.semver === ANY) {
        comparator = new Comparator('>=0.0.0')
      }
      high = high || comparator;
      low = low || comparator;
      if (gtfn(comparator.semver, high.semver, loose)) {
        high = comparator;
      } else if (ltfn(comparator.semver, low.semver, loose)) {
        low = comparator;
      }
    });

    // If the edge version comparator has a operator then our version
    // isn't outside it
    if (high.operator === comp || high.operator === ecomp) {
      return false;
    }

    // If the lowest version comparator has an operator and our version
    // is less than it then it isn't higher than the range
    if ((!low.operator || low.operator === comp) &&
        ltefn(version, low.semver)) {
      return false;
    } else if (low.operator === ecomp && ltfn(version, low.semver)) {
      return false;
    }
  }
  return true;
}

exports.prerelease = prerelease;
function prerelease(version, loose) {
  var parsed = parse(version, loose);
  return (parsed && parsed.prerelease.length) ? parsed.prerelease : null;
}

exports.intersects = intersects;
function intersects(r1, r2, loose) {
  r1 = new Range(r1, loose)
  r2 = new Range(r2, loose)
  return r1.intersects(r2)
}

exports.coerce = coerce;
function coerce(version) {
  if (version instanceof SemVer)
    return version;

  if (typeof version !== 'string')
    return null;

  var match = version.match(re[COERCE]);

  if (match == null)
    return null;

  return parse((match[1] || '0') + '.' + (match[2] || '0') + '.' + (match[3] || '0')); 
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/process/browser.js */ "../../node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/remark-parse/index.js":
/*!********************************************!*\
  !*** ./node_modules/remark-parse/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var unherit = __webpack_require__(/*! unherit */ "../../node_modules/unherit/index.js");
var xtend = __webpack_require__(/*! xtend */ "../../node_modules/xtend/immutable.js");
var Parser = __webpack_require__(/*! ./lib/parser.js */ "./node_modules/remark-parse/lib/parser.js");

module.exports = parse;
parse.Parser = Parser;

function parse(options) {
  var Local = unherit(Parser);
  Local.prototype.options = xtend(Local.prototype.options, this.data('settings'), options);
  this.Parser = Local;
}


/***/ }),

/***/ "./node_modules/remark-parse/lib/parser.js":
/*!*************************************************!*\
  !*** ./node_modules/remark-parse/lib/parser.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/marneb/Documents/pp/patternplate/packages/client/node_modules/remark-parse/lib/parser.js'");

/***/ }),

/***/ "./node_modules/remark-stringify/index.js":
/*!************************************************!*\
  !*** ./node_modules/remark-stringify/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var unherit = __webpack_require__(/*! unherit */ "../../node_modules/unherit/index.js");
var xtend = __webpack_require__(/*! xtend */ "../../node_modules/xtend/immutable.js");
var Compiler = __webpack_require__(/*! ./lib/compiler.js */ "./node_modules/remark-stringify/lib/compiler.js");

module.exports = stringify;
stringify.Compiler = Compiler;

function stringify(options) {
  var Local = unherit(Compiler);
  Local.prototype.options = xtend(Local.prototype.options, this.data('settings'), options);
  this.Compiler = Local;
}


/***/ }),

/***/ "./node_modules/remark-stringify/lib/compiler.js":
/*!*******************************************************!*\
  !*** ./node_modules/remark-stringify/lib/compiler.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/marneb/Documents/pp/patternplate/packages/client/node_modules/remark-stringify/lib/compiler.js'");

/***/ }),

/***/ "./node_modules/remark/index.js":
/*!**************************************!*\
  !*** ./node_modules/remark/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var unified = __webpack_require__(/*! unified */ "../../node_modules/unified/index.js");
var parse = __webpack_require__(/*! remark-parse */ "./node_modules/remark-parse/index.js");
var stringify = __webpack_require__(/*! remark-stringify */ "./node_modules/remark-stringify/index.js");

module.exports = unified().use(parse).use(stringify).freeze();


/***/ })

}]);
//# sourceMappingURL=vendors~client.141ee7a21963c8173995.js.map