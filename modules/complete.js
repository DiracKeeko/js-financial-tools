'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var es6_regexp_toString = require('./es6.regexp.to-string-a901b36e.js');
var es6_array_slice = require('./es6.array.slice-b5a88791.js');
var _toAbsoluteIndex = require('./_to-absolute-index-eab53ef4.js');

var toObject = _toAbsoluteIndex._toObject;
var toAbsoluteIndex = _toAbsoluteIndex._toAbsoluteIndex;
var toLength = _toAbsoluteIndex._toLength;
var _arrayFill = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = _toAbsoluteIndex._wks.exports('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) _toAbsoluteIndex._hide(ArrayProto, UNSCOPABLES, {});
var _addToUnscopables = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export$1 = _toAbsoluteIndex._export;

$export$1($export$1.P, 'Array', { fill: _arrayFill });

_addToUnscopables('fill');

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject$1 = _toAbsoluteIndex._isObject;
var anObject$2 = _toAbsoluteIndex._anObject;
var check = function (O, proto) {
  anObject$2(O);
  if (!isObject$1(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
var _setProto = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = require('./_ctx')(Function.call, require('./_object-gopd').f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};

var isObject = _toAbsoluteIndex._isObject;
var setPrototypeOf = _setProto.set;
var _inheritIfRequired = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};

var _objectGopn = {};

var shared = _toAbsoluteIndex._shared.exports('keys');
var uid = _toAbsoluteIndex._uid;
var _sharedKey = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

var has$2 = _toAbsoluteIndex._has;
var toIObject$1 = es6_regexp_toString._toIobject;
var arrayIndexOf = es6_regexp_toString._arrayIncludes(false);
var IE_PROTO$1 = _sharedKey('IE_PROTO');

var _objectKeysInternal = function (object, names) {
  var O = toIObject$1(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO$1) has$2(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has$2(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

// IE 8- don't enum bug keys
var _enumBugKeys = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys$1 = _objectKeysInternal;
var hiddenKeys = _enumBugKeys.concat('length', 'prototype');

_objectGopn.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys$1(O, hiddenKeys);
};

var _objectGopd = {};

var _objectPie = {};

_objectPie.f = {}.propertyIsEnumerable;

var pIE = _objectPie;
var createDesc = _toAbsoluteIndex._propertyDesc;
var toIObject = es6_regexp_toString._toIobject;
var toPrimitive$1 = _toAbsoluteIndex._toPrimitive;
var has$1 = _toAbsoluteIndex._has;
var IE8_DOM_DEFINE = _toAbsoluteIndex._ie8DomDefine;
var gOPD$1 = Object.getOwnPropertyDescriptor;

_objectGopd.f = _toAbsoluteIndex._descriptors ? gOPD$1 : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive$1(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD$1(O, P);
  } catch (e) { /* empty */ }
  if (has$1(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};

var _stringWs = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

var $export = _toAbsoluteIndex._export;
var defined = _toAbsoluteIndex._defined;
var fails$1 = _toAbsoluteIndex._fails;
var spaces = _stringWs;
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails$1(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

var _stringTrim = exporter;

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = _objectKeysInternal;
var enumBugKeys$1 = _enumBugKeys;

var _objectKeys = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys$1);
};

var dP$1 = _toAbsoluteIndex._objectDp;
var anObject$1 = _toAbsoluteIndex._anObject;
var getKeys = _objectKeys;

var _objectDps = _toAbsoluteIndex._descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$1(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP$1.f(O, P = keys[i++], Properties[P]);
  return O;
};

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = _toAbsoluteIndex._anObject;
var dPs = _objectDps;
var enumBugKeys = _enumBugKeys;
var IE_PROTO = _sharedKey('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = _toAbsoluteIndex._domCreate('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  es6_array_slice._html.appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

var _objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

var global = _toAbsoluteIndex._global.exports;
var has = _toAbsoluteIndex._has;
var cof = _toAbsoluteIndex._cof;
var inheritIfRequired = _inheritIfRequired;
var toPrimitive = _toAbsoluteIndex._toPrimitive;
var fails = _toAbsoluteIndex._fails;
var gOPN = _objectGopn.f;
var gOPD = _objectGopd.f;
var dP = _toAbsoluteIndex._objectDp.f;
var $trim = _stringTrim.trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(_objectCreate(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = _toAbsoluteIndex._descriptors ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  _toAbsoluteIndex._redefine.exports(global, NUMBER, $Number);
}

/* 
  A complete stock trading timeline is shown below:
  // time format: YYYYMMDDHHmm
  [
    202108220900, 202108220901, ..., 202108221129, 202108221130, 
    202108221301, 202108221302, ..., 202108221459, 202108221500,
  ]

  Function completeStockTimeDataArr is used to complete the time data of sotck trading backwards.

  Examples are as follows

  TimeDataArr : 
  [ [202108220900, numberA1], [202108220901, numberA2] ] // itemArrLength = 2
  return data :
  [ [202108220900, numberA1], [202108220901, numberA2], ..., [202108221459, undefined], [202108221500, undefined] ] 
  // itemArrLength = 2

  TimeDataArr : 
  [ [202108220900, numberA1, numberB1], [202108220901, numberA2, numberB2] ] // itemArrLength = 3
  return data :
  [ [202108220900, numberA1, numberB1], [202108220901, numberA2, numberB2], ..., [202108221500, undefined, undefined] ] 
  // itemArrLength = 3
*/
function completeStockTimeDataArr(TimeDataArr) {
  var itemArrLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var data = TimeDataArr.map(function (item) {
    return item.slice(0, itemArrLength);
  });
  var undefinedArr = new Array(itemArrLength - 1).fill(undefined);
  var dataMaxStr = data[data.length - 1].toString();
  var dataMaxStrPre = dataMaxStr.slice(0, 8);
  var dataMaxStrAfter = dataMaxStr.slice(8, 12);
  var hour = Number(dataMaxStrAfter.slice(0, 2));
  var minute = Number(dataMaxStrAfter.slice(2, 4));
  var h = hour;
  var m = minute + 1;

  if (h === 11 && m === 31) {
    h = 13;
    m = 1;
  }

  while (h < 15) {
    while (m < 60) {
      var timeNumber = Number("".concat(dataMaxStrPre).concat(h < 10 ? "0".concat(h) : h).concat(m < 10 ? "0".concat(m) : m));
      data.push([timeNumber].concat(es6_regexp_toString._toConsumableArray(undefinedArr)));
      m += 1;

      if (h === 11 && m > 30) {
        h += 1;
        break;
      }
    }

    m = h === 12 ? 1 : 0;
    h += 1;
    h === 15 && data.push([Number("".concat(dataMaxStrPre, "1500"))].concat(es6_regexp_toString._toConsumableArray(undefinedArr)));
  }

  return data;
}
/* 
completeStockTimeDataObjArr 

TimeDataObjArr : [ 
  {
    "date": "20210822",
    "time": "090000",
    "change": -0.11,
    "valuation": 1.11
  }, 
  {
    "date": "20210822",
    "time": "090100",
    "change": -0.22,
    "valuation": 2.22
  }, 
]
return data :
  [ 
    {
      x: dateTime1,
      y: change1,
      z: valuation1
    },
    {
      x: dateTime2,
      y: change2,
      z: valuation2
    },
    {
      x: dateTime3,
      y: undefined,
      z: undefined
    },
    ...
  ] 
*/


function completeStockTimeDataObjArr(TimeDataObjArr) {
  var data = TimeDataObjArr.map(function (item) {
    return {
      x: Number("".concat(item.date).concat(item.time.slice(0, 4))),
      y: item.change,
      z: item.valuation
    };
  });
  var dataMaxStrPre = TimeDataObjArr[TimeDataObjArr.length - 1].date;
  var dataMaxStrAfter = TimeDataObjArr[TimeDataObjArr.length - 1].time.slice(0, 4);
  var hour = Number(dataMaxStrAfter.slice(0, 2));
  var minute = Number(dataMaxStrAfter.slice(2, 4));
  var h = hour;
  var m = minute + 1;

  if (h === 11 && m === 31) {
    h = 13;
    m = 1;
  }

  while (h < 15) {
    while (m < 60) {
      var timeNumber = Number("".concat(dataMaxStrPre).concat(h < 10 ? "0".concat(h) : h).concat(m < 10 ? "0".concat(m) : m));
      data.push({
        x: timeNumber,
        y: undefined,
        z: undefined
      });
      m += 1;

      if (h === 11 && m > 30) {
        h += 1;
        break;
      }
    }

    m = h === 12 ? 1 : 0;
    h += 1;
    h === 15 && data.push({
      x: Number("".concat(dataMaxStrPre, "1500")),
      y: undefined,
      z: undefined
    });
  }

  return data;
}

exports.completeStockTimeDataArr = completeStockTimeDataArr;
exports.completeStockTimeDataObjArr = completeStockTimeDataObjArr;
