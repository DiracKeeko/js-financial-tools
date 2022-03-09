'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var number = require('./number.js');

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

var _global = {exports: {}};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global$3 = _global.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global$3; // eslint-disable-line no-undef

var _core = {exports: {}};

var core$2 = _core.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core$2; // eslint-disable-line no-undef

var _objectDp = {};

var _isObject = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

var isObject$3 = _isObject;
var _anObject = function (it) {
  if (!isObject$3(it)) throw TypeError(it + ' is not an object!');
  return it;
};

var _fails = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

// Thank's IE8 for his funny defineProperty
var _descriptors = !_fails(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

var isObject$2 = _isObject;
var document = _global.exports.document;
// typeof document.createElement is 'object' in old IE
var is = isObject$2(document) && isObject$2(document.createElement);
var _domCreate = function (it) {
  return is ? document.createElement(it) : {};
};

var _ie8DomDefine = !_descriptors && !_fails(function () {
  return Object.defineProperty(_domCreate('div'), 'a', { get: function () { return 7; } }).a != 7;
});

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject$1 = _isObject;
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var _toPrimitive = function (it, S) {
  if (!isObject$1(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject$1(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject$1(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject$1(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

var anObject = _anObject;
var IE8_DOM_DEFINE = _ie8DomDefine;
var toPrimitive = _toPrimitive;
var dP$1 = Object.defineProperty;

_objectDp.f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP$1(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var _propertyDesc = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var dP = _objectDp;
var createDesc = _propertyDesc;
var _hide = _descriptors ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var _redefine = {exports: {}};

var hasOwnProperty = {}.hasOwnProperty;
var _has = function (it, key) {
  return hasOwnProperty.call(it, key);
};

var id = 0;
var px = Math.random();
var _uid = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

var _shared = {exports: {}};

var core$1 = _core.exports;
var global$2 = _global.exports;
var SHARED = '__core-js_shared__';
var store$1 = global$2[SHARED] || (global$2[SHARED] = {});

(_shared.exports = function (key, value) {
  return store$1[key] || (store$1[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core$1.version,
  mode: 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});

var _functionToString = _shared.exports('native-function-to-string', Function.toString);

var global$1 = _global.exports;
var hide$1 = _hide;
var has = _has;
var SRC = _uid('src');
var $toString = _functionToString;
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

_core.exports.inspectSource = function (it) {
  return $toString.call(it);
};

(_redefine.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide$1(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide$1(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global$1) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide$1(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide$1(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});

var _aFunction = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

// optional / simple context binding
var aFunction = _aFunction;
var _ctx = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var global = _global.exports;
var core = _core.exports;
var hide = _hide;
var redefine = _redefine.exports;
var ctx$1 = _ctx;
var PROTOTYPE = 'prototype';

var $export$3 = function (type, name, source) {
  var IS_FORCED = type & $export$3.F;
  var IS_GLOBAL = type & $export$3.G;
  var IS_STATIC = type & $export$3.S;
  var IS_PROTO = type & $export$3.P;
  var IS_BIND = type & $export$3.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx$1(out, global) : IS_PROTO && typeof out == 'function' ? ctx$1(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export$3.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export$3.F = 1;   // forced
$export$3.G = 2;   // global
$export$3.S = 4;   // static
$export$3.P = 8;   // proto
$export$3.B = 16;  // bind
$export$3.W = 32;  // wrap
$export$3.U = 64;  // safe
$export$3.R = 128; // real proto method for `library`
var _export = $export$3;

// 20.2.2.21 Math.log10(x)
var $export$2 = _export;

$export$2($export$2.S, 'Math', {
  log10: function log10(x) {
    return Math.log(x) * Math.LOG10E;
  }
});

var toString = {}.toString;

var _cof = function (it) {
  return toString.call(it).slice(8, -1);
};

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof$1 = _cof;
// eslint-disable-next-line no-prototype-builtins
var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof$1(it) == 'String' ? it.split('') : Object(it);
};

// 7.2.1 RequireObjectCoercible(argument)
var _defined = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

// 7.1.13 ToObject(argument)
var defined$1 = _defined;
var _toObject = function (it) {
  return Object(defined$1(it));
};

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
var _toInteger = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

// 7.1.15 ToLength
var toInteger$1 = _toInteger;
var min$1 = Math.min;
var _toLength = function (it) {
  return it > 0 ? min$1(toInteger$1(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

// 7.2.2 IsArray(argument)
var cof = _cof;
var _isArray = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};

var _wks = {exports: {}};

var store = _shared.exports('wks');
var uid = _uid;
var Symbol$1 = _global.exports.Symbol;
var USE_SYMBOL = typeof Symbol$1 == 'function';

var $exports = _wks.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol$1[name] || (USE_SYMBOL ? Symbol$1 : uid)('Symbol.' + name));
};

$exports.store = store;

var isObject = _isObject;
var isArray = _isArray;
var SPECIES = _wks.exports('species');

var _arraySpeciesConstructor = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = _arraySpeciesConstructor;

var _arraySpeciesCreate = function (original, length) {
  return new (speciesConstructor(original))(length);
};

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = _ctx;
var IObject$1 = _iobject;
var toObject = _toObject;
var toLength$1 = _toLength;
var asc = _arraySpeciesCreate;
var _arrayMethods = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject$1(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength$1(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};

var fails = _fails;

var _strictMethod = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};

var $export$1 = _export;
var $map = _arrayMethods(1);

$export$1($export$1.P + $export$1.F * !_strictMethod([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments[1]);
  }
});

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = _iobject;
var defined = _defined;
var _toIobject = function (it) {
  return IObject(defined(it));
};

var toInteger = _toInteger;
var max = Math.max;
var min = Math.min;
var _toAbsoluteIndex = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = _toIobject;
var toLength = _toLength;
var toAbsoluteIndex = _toAbsoluteIndex;
var _arrayIncludes = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var $export = _export;
var $indexOf = _arrayIncludes(false);
var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !_strictMethod($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments[1]);
  }
});

function getIntPartLength(num) {
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function getMonetaryUnit(val) {
  if (number.isRealNumber(val)) {
    var intPartLength = getIntPartLength(val);

    if (intPartLength > 8) {
      return "亿";
    }

    if (intPartLength > 4) {
      return "万";
    }

    return "";
  }

  return "";
}

function getMaxDate(dateArr) {
  // arr = ["2022-01-01", "2019-10-12", "2018-05-18"];
  var timestampArr = dateArr.map(function (item) {
    return new Date(item).getTime();
  });
  var maxTimestamp = Math.max.apply(Math, _toConsumableArray(timestampArr));
  var maxTimeIndex = timestampArr.indexOf(maxTimestamp);
  return dateArr[maxTimeIndex];
}

function getMinDate(dateArr) {
  var timestampArr = dateArr.map(function (item) {
    return new Date(item).getTime();
  });
  var minTimestamp = Math.min.apply(Math, _toConsumableArray(timestampArr));
  var minTimeIndex = timestampArr.indexOf(minTimestamp);
  return dateArr[minTimeIndex];
}

exports.getIntPartLength = getIntPartLength;
exports.getMaxDate = getMaxDate;
exports.getMinDate = getMinDate;
exports.getMonetaryUnit = getMonetaryUnit;
