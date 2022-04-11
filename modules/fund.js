'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _toAbsoluteIndex = require('./_to-absolute-index-eab53ef4.js');
require('./es6.array.slice-b5a88791.js');
var number = require('./number.js');

var $export$2 = _toAbsoluteIndex._export;
var $filter = _toAbsoluteIndex._arrayMethods(2);

$export$2($export$2.P + $export$2.F * !_toAbsoluteIndex._strictMethod([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments[1]);
  }
});

var $export$1 = _toAbsoluteIndex._export;
var aFunction$1 = _toAbsoluteIndex._aFunction;
var toObject$1 = _toAbsoluteIndex._toObject;
var fails = _toAbsoluteIndex._fails;
var $sort = [].sort;
var test = [1, 2, 3];

$export$1($export$1.P + $export$1.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !_toAbsoluteIndex._strictMethod($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(toObject$1(this))
      : $sort.call(toObject$1(this), aFunction$1(comparefn));
  }
});

var aFunction = _toAbsoluteIndex._aFunction;
var toObject = _toAbsoluteIndex._toObject;
var IObject = _toAbsoluteIndex._iobject;
var toLength = _toAbsoluteIndex._toLength;

var _arrayReduce = function (that, callbackfn, aLen, memo, isRight) {
  aFunction(callbackfn);
  var O = toObject(that);
  var self = IObject(O);
  var length = toLength(O.length);
  var index = isRight ? length - 1 : 0;
  var i = isRight ? -1 : 1;
  if (aLen < 2) for (;;) {
    if (index in self) {
      memo = self[index];
      index += i;
      break;
    }
    index += i;
    if (isRight ? index < 0 : length <= index) {
      throw TypeError('Reduce of empty array with no initial value');
    }
  }
  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {
    memo = callbackfn(memo, self[index], index, O);
  }
  return memo;
};

var $export = _toAbsoluteIndex._export;
var $reduce = _arrayReduce;

$export($export.P + $export.F * !_toAbsoluteIndex._strictMethod([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});

function calcMax3Concenttration(arr) {
  var numberArr = arr.filter(function (item) {
    return number.isRealNumber(item);
  });

  if (numberArr.length === 0) {
    return undefined;
  }

  numberArr.sort(function (a, b) {
    return b - a;
  });
  var max3Arr = numberArr.slice(0, 3);
  var sumMax3 = max3Arr.reduce(function (sum, item) {
    return sum + item;
  }, 0);
  var sumAll = numberArr.reduce(function (sum, item) {
    return sum + item;
  }, 0);
  return sumMax3 / sumAll;
}

exports.calcMax3Concenttration = calcMax3Concenttration;
