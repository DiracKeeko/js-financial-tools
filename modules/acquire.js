'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _arrayIncludes = require('./_array-includes-3a6df369.js');
var number = require('./number.js');

// 20.2.2.21 Math.log10(x)
var $export$1 = _arrayIncludes._export;

$export$1($export$1.S, 'Math', {
  log10: function log10(x) {
    return Math.log(x) * Math.LOG10E;
  }
});

var $export = _arrayIncludes._export;
var $indexOf = _arrayIncludes._arrayIncludes(false);
var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !_arrayIncludes._strictMethod($native)), 'Array', {
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
  var maxTimestamp = Math.max.apply(Math, _arrayIncludes._toConsumableArray(timestampArr));
  var maxTimeIndex = timestampArr.indexOf(maxTimestamp);
  return dateArr[maxTimeIndex];
}

function getMinDate(dateArr) {
  var timestampArr = dateArr.map(function (item) {
    return new Date(item).getTime();
  });
  var minTimestamp = Math.min.apply(Math, _arrayIncludes._toConsumableArray(timestampArr));
  var minTimeIndex = timestampArr.indexOf(minTimestamp);
  return dateArr[minTimeIndex];
}

exports.getIntPartLength = getIntPartLength;
exports.getMaxDate = getMaxDate;
exports.getMinDate = getMinDate;
exports.getMonetaryUnit = getMonetaryUnit;
