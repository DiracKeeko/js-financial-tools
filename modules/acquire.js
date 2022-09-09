'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var es6_regexp_toString = require('./es6.regexp.to-string-a901b36e.js');
var _toAbsoluteIndex = require('./_to-absolute-index-eab53ef4.js');
var number = require('./number.js');
var constant = require('./constant.js');

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || es6_regexp_toString._unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

// 20.2.2.21 Math.log10(x)
var $export$2 = _toAbsoluteIndex._export;

$export$2($export$2.S, 'Math', {
  log10: function log10(x) {
    return Math.log(x) * Math.LOG10E;
  }
});

var $export$1 = _toAbsoluteIndex._export;
var $indexOf = es6_regexp_toString._arrayIncludes(false);
var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export$1($export$1.P + $export$1.F * (NEGATIVE_ZERO || !_toAbsoluteIndex._strictMethod($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments[1]);
  }
});

// 7.2.8 IsRegExp(argument)
var isObject = _toAbsoluteIndex._isObject;
var cof = _toAbsoluteIndex._cof;
var MATCH = _toAbsoluteIndex._wks.exports('match');
var _isRegexp = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject$1 = _toAbsoluteIndex._anObject;
var aFunction = _toAbsoluteIndex._aFunction;
var SPECIES$1 = _toAbsoluteIndex._wks.exports('species');
var _speciesConstructor = function (O, D) {
  var C = anObject$1(O).constructor;
  var S;
  return C === undefined || (S = anObject$1(C)[SPECIES$1]) == undefined ? D : aFunction(S);
};

var toInteger = _toAbsoluteIndex._toInteger;
var defined$1 = _toAbsoluteIndex._defined;
// true  -> String#at
// false -> String#codePointAt
var _stringAt = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined$1(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

var at = _stringAt(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
var _advanceStringIndex = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};

var classof = es6_regexp_toString._classof;
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
var _regexpExecAbstract = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};

var regexpFlags = es6_regexp_toString._flags;

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX$1 = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX$1] !== 0 || re2[LAST_INDEX$1] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX$1];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX$1] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

var _regexpExec = patchedExec;

var regexpExec$2 = _regexpExec;
_toAbsoluteIndex._export({
  target: 'RegExp',
  proto: true,
  forced: regexpExec$2 !== /./.exec
}, {
  exec: regexpExec$2
});

var redefine = _toAbsoluteIndex._redefine.exports;
var hide = _toAbsoluteIndex._hide;
var fails$1 = _toAbsoluteIndex._fails;
var defined = _toAbsoluteIndex._defined;
var wks = _toAbsoluteIndex._wks.exports;
var regexpExec$1 = _regexpExec;

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails$1(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

var _fixReWks = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails$1(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails$1(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec$1) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};

var isRegExp = _isRegexp;
var anObject = _toAbsoluteIndex._anObject;
var speciesConstructor = _speciesConstructor;
var advanceStringIndex = _advanceStringIndex;
var toLength = _toAbsoluteIndex._toLength;
var callRegExpExec = _regexpExecAbstract;
var regexpExec = _regexpExec;
var fails = _toAbsoluteIndex._fails;
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
_fixReWks('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});

var $export = _toAbsoluteIndex._export;
var $forEach = _toAbsoluteIndex._arrayMethods(0);
var STRICT = _toAbsoluteIndex._strictMethod([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
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
/**
 *
 * @param {Array} dateArr
 * case1: dateArr = ["2022-01-01", "2019-10-12", "2018-05-18"];
 * @returns maxDateStr
 * case1 result: "2022-01-01"
 */


function getMaxDate(dateArr) {
  var timestampArr = dateArr.map(function (item) {
    return constant.getDateTime(item);
  });
  var maxTimestamp = Math.max.apply(Math, es6_regexp_toString._toConsumableArray(timestampArr));
  var maxTimeIndex = timestampArr.indexOf(maxTimestamp);
  return dateArr[maxTimeIndex];
}

function getMinDate(dateArr) {
  var timestampArr = dateArr.map(function (item) {
    return constant.getDateTime(item);
  });
  var minTimestamp = Math.min.apply(Math, es6_regexp_toString._toConsumableArray(timestampArr));
  var minTimeIndex = timestampArr.indexOf(minTimestamp);
  return dateArr[minTimeIndex];
}
/**
 * @param {[startTimestamp1, endTimestamp1]} range1
 * @param {[startTimestamp2, endTimestamp2]} range2
 *
 * @returns [startTimestamp, endTimeStamp] || []
 */


function getTimeRangeIntersection(range1, range2) {
  var _range = _slicedToArray(range1, 2),
      startTimestamp1 = _range[0],
      endTimestamp1 = _range[1];

  var _range2 = _slicedToArray(range2, 2),
      startTimestamp2 = _range2[0],
      endTimestamp2 = _range2[1];

  var startTimestamp = Math.max(startTimestamp1, startTimestamp2);
  var endTimestamp = Math.min(endTimestamp1, endTimestamp2);

  if (startTimestamp < endTimestamp) {
    return [startTimestamp, endTimestamp];
  }

  return [];
}
/**
 *
 * @param {String|Number} year
 * case1: "2020"
 * @param {String} quarter
 * case1: "Q1"
 * @param {Array} dateRange = [startDate, endDate]
 * case1: ["2020-01-01", "2021-11-11"]
 *
 * @returns Boolean
 */


function checkQuarterInRange(year, quarter, _ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      startDate = _ref2[0],
      endDate = _ref2[1];

  var startTimeStamp = constant.getDateTime(startDate);
  var endTimeStamp = constant.getDateTime(endDate);
  var quarterStartDate = "".concat(year, "-").concat(constant.wholeQuarterRangeMap[quarter][0]);
  var quarterEndDate = "".concat(year, "-").concat(constant.wholeQuarterRangeMap[quarter][1]);
  var quarterStartTimeStamp = constant.getDateTime(quarterStartDate);
  var quarterEndTimeStamp = constant.getDateTime(quarterEndDate);

  if (quarterStartTimeStamp >= startTimeStamp && quarterStartTimeStamp <= endTimeStamp && quarterEndTimeStamp >= startTimeStamp && quarterEndTimeStamp <= endTimeStamp) {
    return true;
  }

  return false;
}

function checkYearInRange(year, _ref3) {
  var _ref4 = _slicedToArray(_ref3, 2),
      startDate = _ref4[0],
      endDate = _ref4[1];

  var startTimeStamp = constant.getDateTime(startDate);
  var endTimeStamp = constant.getDateTime(endDate);
  var yearStartDate = "".concat(year, "-").concat(constant.wholeYearRangeArr[0]);
  var yearEndDate = "".concat(year, "-").concat(constant.wholeYearRangeArr[1]);
  var yearStartTimeStamp = constant.getDateTime(yearStartDate);
  var yearEndTimeStamp = constant.getDateTime(yearEndDate);

  if (yearStartTimeStamp >= startTimeStamp && yearStartTimeStamp <= endTimeStamp && yearEndTimeStamp >= startTimeStamp && yearEndTimeStamp <= endTimeStamp) {
    return true;
  }

  return false;
}
/**
 * Create a full quarter array that includes the dateRange
 * 
 * @param {Array} dateRange = [startDate, endDate]
 * @returns ["2019Q1", "2019Q2", "2019Q3", "2019Q4", "2020Q1"]
 */


function createQuarterArr(dateRange) {
  var quarterArr = [];

  if (dateRange.length === 0) {
    return quarterArr;
  }

  var _dateRange = _slicedToArray(dateRange, 2),
      startDate = _dateRange[0],
      endDate = _dateRange[1];

  var yearArr = []; // ["2019", "2020", ...]

  var startYear = startDate.split("-")[0];
  var endYear = endDate.split("-")[0];

  var _loop = function _loop(i) {
    yearArr.push(i.toString());
    var fullQuarter = ["Q1", "Q2", "Q3", "Q4"];
    fullQuarter.forEach(function (item) {
      if (checkQuarterInRange(i, item, dateRange)) {
        var quarterStr = "".concat(i).concat(item);
        quarterArr.push(quarterStr);
      }
    });
  };

  for (var i = parseInt(startYear, 10); i <= parseInt(endYear, 10); i++) {
    _loop(i);
  }

  return quarterArr;
}

exports.checkQuarterInRange = checkQuarterInRange;
exports.checkYearInRange = checkYearInRange;
exports.createQuarterArr = createQuarterArr;
exports.getIntPartLength = getIntPartLength;
exports.getMaxDate = getMaxDate;
exports.getMinDate = getMinDate;
exports.getMonetaryUnit = getMonetaryUnit;
exports.getTimeRangeIntersection = getTimeRangeIntersection;
