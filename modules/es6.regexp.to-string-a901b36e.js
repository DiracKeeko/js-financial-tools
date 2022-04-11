'use strict';

var _toAbsoluteIndex = require('./_to-absolute-index-eab53ef4.js');

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

var $export = _toAbsoluteIndex._export;
var $map = _toAbsoluteIndex._arrayMethods(1);

$export($export.P + $export.F * !_toAbsoluteIndex._strictMethod([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments[1]);
  }
});

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = _toAbsoluteIndex._iobject;
var defined = _toAbsoluteIndex._defined;
var _toIobject = function (it) {
  return IObject(defined(it));
};

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = _toIobject;
var toLength = _toAbsoluteIndex._toLength;
var toAbsoluteIndex = _toAbsoluteIndex._toAbsoluteIndex;
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

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = _toAbsoluteIndex._cof;
var TAG = _toAbsoluteIndex._wks.exports('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

var _classof = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

// 21.2.5.3 get RegExp.prototype.flags
var anObject$1 = _toAbsoluteIndex._anObject;
var _flags = function () {
  var that = anObject$1(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};

// 19.1.3.6 Object.prototype.toString()
var classof = _classof;
var test = {};
test[_toAbsoluteIndex._wks.exports('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  _toAbsoluteIndex._redefine.exports(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}

var DateProto = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING$1 = 'toString';
var $toString$1 = DateProto[TO_STRING$1];
var getTime = DateProto.getTime;
if (new Date(NaN) + '' != INVALID_DATE) {
  _toAbsoluteIndex._redefine.exports(DateProto, TO_STRING$1, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? $toString$1.call(this) : INVALID_DATE;
  });
}

// 21.2.5.3 get RegExp.prototype.flags()
if (_toAbsoluteIndex._descriptors && /./g.flags != 'g') _toAbsoluteIndex._objectDp.f(RegExp.prototype, 'flags', {
  configurable: true,
  get: _flags
});

var anObject = _toAbsoluteIndex._anObject;
var $flags = _flags;
var DESCRIPTORS = _toAbsoluteIndex._descriptors;
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  _toAbsoluteIndex._redefine.exports(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (_toAbsoluteIndex._fails(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}

exports._arrayIncludes = _arrayIncludes;
exports._classof = _classof;
exports._flags = _flags;
exports._toConsumableArray = _toConsumableArray;
exports._toIobject = _toIobject;
exports._unsupportedIterableToArray = _unsupportedIterableToArray;
