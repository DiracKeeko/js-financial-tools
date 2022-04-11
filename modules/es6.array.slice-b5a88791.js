'use strict';

var _toAbsoluteIndex = require('./_to-absolute-index-eab53ef4.js');

var document = _toAbsoluteIndex._global.exports.document;
var _html = document && document.documentElement;

var $export = _toAbsoluteIndex._export;
var html = _html;
var cof = _toAbsoluteIndex._cof;
var toAbsoluteIndex = _toAbsoluteIndex._toAbsoluteIndex;
var toLength = _toAbsoluteIndex._toLength;
var arraySlice = [].slice;

// fallback for not array-like ES3 strings and DOM objects
$export($export.P + $export.F * _toAbsoluteIndex._fails(function () {
  if (html) arraySlice.call(html);
}), 'Array', {
  slice: function slice(begin, end) {
    var len = toLength(this.length);
    var klass = cof(this);
    end = end === undefined ? len : end;
    if (klass == 'Array') return arraySlice.call(this, begin, end);
    var start = toAbsoluteIndex(begin, len);
    var upTo = toAbsoluteIndex(end, len);
    var size = toLength(upTo - start);
    var cloned = new Array(size);
    var i = 0;
    for (; i < size; i++) cloned[i] = klass == 'String'
      ? this.charAt(start + i)
      : this[start + i];
    return cloned;
  }
});

exports._html = _html;
