'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function isRealNumber(num) {
  return typeof num === "number" && !isNaN(num);
}

function _float(num, precision) {
  var placeholder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "--";
  var accuracy = isRealNumber(precision) ? precision : 2; // default digit

  if (!isRealNumber(num)) {
    return placeholder;
  }

  return num.toFixed(accuracy);
}

function percentage(num, precision) {
  var placeholder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "--";
  var accuracy = isRealNumber(precision) ? precision : 2;

  if (!isRealNumber(num)) {
    return placeholder;
  }

  return "".concat((num * 100).toFixed(accuracy), "%");
}

exports.float = _float;
exports.isRealNumber = isRealNumber;
exports.percentage = percentage;
