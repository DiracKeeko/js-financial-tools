(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.JsFinancialTools = factory());
})(this, (function () { 'use strict';

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

  var number = /*#__PURE__*/Object.freeze({
    __proto__: null,
    isRealNumber: isRealNumber,
    float: _float,
    percentage: percentage
  });

  var calc = /*#__PURE__*/Object.freeze({
    __proto__: null,
    number: number
  });

  function formatRank(val) {
    if (!isRealNumber(val)) {
      return "--";
    }

    return "No.".concat(val);
  }

  function formatWithUnit(val) {
    var unitStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var precision = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;

    if (!isRealNumber(val)) {
      return "--";
    }

    var num;

    switch (unitStr) {
      case "万":
        num = _float(val / Math.pow(10, 4), precision);
        break;

      case "亿":
        num = _float(val / Math.pow(10, 8), precision);
        break;
    }

    return "".concat(num).concat(unitStr);
  }

  function formatToFloat(val) {
    var plusSign = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var precision = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
    var radio = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

    if (!isRealNumber(val)) {
      return "--";
    }

    var num = val / radio;

    if (num > 0) {
      return "".concat(plusSign).concat(_float(num, precision));
    }

    return _float(num, precision);
  }

  function formatToPercent(val) {
    var plusSign = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var precision = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
    var radio = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

    if (!isRealNumber(val)) {
      return "--";
    }

    var num = val / radio;

    if (num > 0) {
      return "".concat(plusSign).concat(percentage(num, precision));
    }

    return percentage(num, precision);
  }

  var formatter = /*#__PURE__*/Object.freeze({
    __proto__: null,
    formatRank: formatRank,
    formatWithUnit: formatWithUnit,
    formatToFloat: formatToFloat,
    formatToPercent: formatToPercent
  });

  var display = /*#__PURE__*/Object.freeze({
    __proto__: null,
    formatter: formatter
  });

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var index = _objectSpread(_objectSpread({}, calc), display);

  return index;

}));
