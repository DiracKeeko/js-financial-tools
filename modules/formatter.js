'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./es6.array.slice-b5a88791.js');
var number = require('./number.js');
var acquire = require('./acquire.js');
require('./_to-absolute-index-eab53ef4.js');
require('./es6.regexp.to-string-a901b36e.js');
require('./constant.js');

function formatRank(val) {
  if (!number.isRealNumber(val)) {
    return "--";
  }

  return "No.".concat(val);
}

function formatLongText(val, limit) {
  if (!val) {
    return "--";
  }

  if (val.length > limit) {
    return "".concat(val.slice(0, limit), "...");
  }

  return val;
}

function formatWithUnit(val) {
  var unitStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var precision = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;

  if (!number.isRealNumber(val)) {
    return "--";
  }

  var num = val;

  switch (unitStr) {
    case "万":
      num = number.float(val / Math.pow(10, 4), precision);
      break;

    case "亿":
      num = number.float(val / Math.pow(10, 8), precision);
      break;
  }

  return "".concat(num).concat(unitStr);
}

function formatToMonetaryShape(val) {
  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

  if (!number.isRealNumber(val)) {
    return "--";
  }

  var intPartLength = acquire.getIntPartLength(val);

  if (intPartLength > 8) {
    var num = val / Math.pow(10, 8);
    return "".concat(number.float(num, precision), "\u4EBF");
  }

  if (intPartLength > 4) {
    var _num = val / Math.pow(10, 4);

    return "".concat(number.float(_num, precision), "\u4E07");
  }

  return "".concat(number.float(val, precision));
}

function formatToFloat(val) {
  var plusSign = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var precision = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
  var scale = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

  if (!number.isRealNumber(val)) {
    return "--";
  }

  var num = val / scale;

  if (num > 0) {
    return "".concat(plusSign).concat(number.float(num, precision));
  }

  return number.float(num, precision);
}

function formatToPercent(val) {
  var plusSign = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var precision = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
  var scale = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

  if (!number.isRealNumber(val)) {
    return "--";
  }

  var num = val / scale;

  if (num > 0) {
    return "".concat(plusSign).concat(number.percentage(num, precision));
  }

  return number.percentage(num, precision);
}

exports.formatLongText = formatLongText;
exports.formatRank = formatRank;
exports.formatToFloat = formatToFloat;
exports.formatToMonetaryShape = formatToMonetaryShape;
exports.formatToPercent = formatToPercent;
exports.formatWithUnit = formatWithUnit;
