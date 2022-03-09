'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var number = require('./number.js');

function gt(a, b) {
  if (!number.isRealNumber(b)) {
    return true;
  }

  if (!number.isRealNumber(a) && number.isRealNumber(b)) {
    return false;
  }

  return a > b;
}

function lte(a, b) {
  if (!number.isRealNumber(b)) {
    return true;
  }

  if (!number.isRealNumber(a) && number.isRealNumber(b)) {
    return false;
  }

  return a <= b;
}

exports.gt = gt;
exports.lte = lte;
