(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.jsFinancialTools = factory());
})(this, (function () { 'use strict';

  // 7.2.1 RequireObjectCoercible(argument)
  var _defined = function (it) {
    if (it == undefined) throw TypeError("Can't call method on  " + it);
    return it;
  };

  // 7.1.13 ToObject(argument)
  var defined$4 = _defined;
  var _toObject = function (it) {
    return Object(defined$4(it));
  };

  var hasOwnProperty = {}.hasOwnProperty;
  var _has = function (it, key) {
    return hasOwnProperty.call(it, key);
  };

  var toString$1 = {}.toString;

  var _cof = function (it) {
    return toString$1.call(it).slice(8, -1);
  };

  // fallback for non-array-like ES3 and non-enumerable old V8 strings
  var cof$5 = _cof;
  // eslint-disable-next-line no-prototype-builtins
  var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
    return cof$5(it) == 'String' ? it.split('') : Object(it);
  };

  // to indexed object, toObject with fallback for non-array-like ES3 strings
  var IObject$2 = _iobject;
  var defined$3 = _defined;
  var _toIobject = function (it) {
    return IObject$2(defined$3(it));
  };

  // 7.1.4 ToInteger
  var ceil = Math.ceil;
  var floor = Math.floor;
  var _toInteger = function (it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };

  // 7.1.15 ToLength
  var toInteger$2 = _toInteger;
  var min$1 = Math.min;
  var _toLength = function (it) {
    return it > 0 ? min$1(toInteger$2(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
  };

  var toInteger$1 = _toInteger;
  var max = Math.max;
  var min = Math.min;
  var _toAbsoluteIndex = function (index, length) {
    index = toInteger$1(index);
    return index < 0 ? max(index + length, 0) : min(index, length);
  };

  // false -> Array#indexOf
  // true  -> Array#includes
  var toIObject$6 = _toIobject;
  var toLength$5 = _toLength;
  var toAbsoluteIndex$2 = _toAbsoluteIndex;
  var _arrayIncludes = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIObject$6($this);
      var length = toLength$5(O.length);
      var index = toAbsoluteIndex$2(fromIndex, length);
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

  var _shared = {exports: {}};

  var _core = {exports: {}};

  var core$4 = _core.exports = { version: '2.6.12' };
  if (typeof __e == 'number') __e = core$4; // eslint-disable-line no-undef

  var _global = {exports: {}};

  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global$6 = _global.exports = typeof window != 'undefined' && window.Math == Math
    ? window : typeof self != 'undefined' && self.Math == Math ? self
    // eslint-disable-next-line no-new-func
    : Function('return this')();
  if (typeof __g == 'number') __g = global$6; // eslint-disable-line no-undef

  var _library = false;

  var core$3 = _core.exports;
  var global$5 = _global.exports;
  var SHARED = '__core-js_shared__';
  var store$1 = global$5[SHARED] || (global$5[SHARED] = {});

  (_shared.exports = function (key, value) {
    return store$1[key] || (store$1[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: core$3.version,
    mode: 'global',
    copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
  });

  var id$1 = 0;
  var px = Math.random();
  var _uid = function (key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id$1 + px).toString(36));
  };

  var shared$1 = _shared.exports('keys');
  var uid$2 = _uid;
  var _sharedKey = function (key) {
    return shared$1[key] || (shared$1[key] = uid$2(key));
  };

  var has$6 = _has;
  var toIObject$5 = _toIobject;
  var arrayIndexOf = _arrayIncludes(false);
  var IE_PROTO$1 = _sharedKey('IE_PROTO');

  var _objectKeysInternal = function (object, names) {
    var O = toIObject$5(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) if (key != IE_PROTO$1) has$6(O, key) && result.push(key);
    // Don't enum bug & hidden keys
    while (names.length > i) if (has$6(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }
    return result;
  };

  // IE 8- don't enum bug keys
  var _enumBugKeys = (
    'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
  ).split(',');

  // 19.1.2.14 / 15.2.3.14 Object.keys(O)
  var $keys$3 = _objectKeysInternal;
  var enumBugKeys$1 = _enumBugKeys;

  var _objectKeys = Object.keys || function keys(O) {
    return $keys$3(O, enumBugKeys$1);
  };

  var _objectDp = {};

  var _isObject = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };

  var isObject$8 = _isObject;
  var _anObject = function (it) {
    if (!isObject$8(it)) throw TypeError(it + ' is not an object!');
    return it;
  };

  var _fails = function (exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };

  // Thank's IE8 for his funny defineProperty
  var _descriptors = !_fails(function () {
    return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
  });

  var isObject$7 = _isObject;
  var document$1 = _global.exports.document;
  // typeof document.createElement is 'object' in old IE
  var is = isObject$7(document$1) && isObject$7(document$1.createElement);
  var _domCreate = function (it) {
    return is ? document$1.createElement(it) : {};
  };

  var _ie8DomDefine = !_descriptors && !_fails(function () {
    return Object.defineProperty(_domCreate('div'), 'a', { get: function () { return 7; } }).a != 7;
  });

  // 7.1.1 ToPrimitive(input [, PreferredType])
  var isObject$6 = _isObject;
  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string
  var _toPrimitive = function (it, S) {
    if (!isObject$6(it)) return it;
    var fn, val;
    if (S && typeof (fn = it.toString) == 'function' && !isObject$6(val = fn.call(it))) return val;
    if (typeof (fn = it.valueOf) == 'function' && !isObject$6(val = fn.call(it))) return val;
    if (!S && typeof (fn = it.toString) == 'function' && !isObject$6(val = fn.call(it))) return val;
    throw TypeError("Can't convert object to primitive value");
  };

  var anObject$9 = _anObject;
  var IE8_DOM_DEFINE$1 = _ie8DomDefine;
  var toPrimitive$3 = _toPrimitive;
  var dP$4 = Object.defineProperty;

  _objectDp.f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
    anObject$9(O);
    P = toPrimitive$3(P, true);
    anObject$9(Attributes);
    if (IE8_DOM_DEFINE$1) try {
      return dP$4(O, P, Attributes);
    } catch (e) { /* empty */ }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var _propertyDesc = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var dP$3 = _objectDp;
  var createDesc$3 = _propertyDesc;
  var _hide = _descriptors ? function (object, key, value) {
    return dP$3.f(object, key, createDesc$3(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var _redefine = {exports: {}};

  var _functionToString = _shared.exports('native-function-to-string', Function.toString);

  var global$4 = _global.exports;
  var hide$2 = _hide;
  var has$5 = _has;
  var SRC = _uid('src');
  var $toString$2 = _functionToString;
  var TO_STRING$2 = 'toString';
  var TPL = ('' + $toString$2).split(TO_STRING$2);

  _core.exports.inspectSource = function (it) {
    return $toString$2.call(it);
  };

  (_redefine.exports = function (O, key, val, safe) {
    var isFunction = typeof val == 'function';
    if (isFunction) has$5(val, 'name') || hide$2(val, 'name', key);
    if (O[key] === val) return;
    if (isFunction) has$5(val, SRC) || hide$2(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
    if (O === global$4) {
      O[key] = val;
    } else if (!safe) {
      delete O[key];
      hide$2(O, key, val);
    } else if (O[key]) {
      O[key] = val;
    } else {
      hide$2(O, key, val);
    }
  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  })(Function.prototype, TO_STRING$2, function toString() {
    return typeof this == 'function' && this[SRC] || $toString$2.call(this);
  });

  var _aFunction = function (it) {
    if (typeof it != 'function') throw TypeError(it + ' is not a function!');
    return it;
  };

  // optional / simple context binding
  var aFunction$3 = _aFunction;
  var _ctx = function (fn, that, length) {
    aFunction$3(fn);
    if (that === undefined) return fn;
    switch (length) {
      case 1: return function (a) {
        return fn.call(that, a);
      };
      case 2: return function (a, b) {
        return fn.call(that, a, b);
      };
      case 3: return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
    }
    return function (/* ...args */) {
      return fn.apply(that, arguments);
    };
  };

  var global$3 = _global.exports;
  var core$2 = _core.exports;
  var hide$1 = _hide;
  var redefine$2 = _redefine.exports;
  var ctx$1 = _ctx;
  var PROTOTYPE$2 = 'prototype';

  var $export$f = function (type, name, source) {
    var IS_FORCED = type & $export$f.F;
    var IS_GLOBAL = type & $export$f.G;
    var IS_STATIC = type & $export$f.S;
    var IS_PROTO = type & $export$f.P;
    var IS_BIND = type & $export$f.B;
    var target = IS_GLOBAL ? global$3 : IS_STATIC ? global$3[name] || (global$3[name] = {}) : (global$3[name] || {})[PROTOTYPE$2];
    var exports = IS_GLOBAL ? core$2 : core$2[name] || (core$2[name] = {});
    var expProto = exports[PROTOTYPE$2] || (exports[PROTOTYPE$2] = {});
    var key, own, out, exp;
    if (IS_GLOBAL) source = name;
    for (key in source) {
      // contains in native
      own = !IS_FORCED && target && target[key] !== undefined;
      // export native or passed
      out = (own ? target : source)[key];
      // bind timers to global for call from export context
      exp = IS_BIND && own ? ctx$1(out, global$3) : IS_PROTO && typeof out == 'function' ? ctx$1(Function.call, out) : out;
      // extend global
      if (target) redefine$2(target, key, out, type & $export$f.U);
      // export
      if (exports[key] != out) hide$1(exports, key, exp);
      if (IS_PROTO && expProto[key] != out) expProto[key] = out;
    }
  };
  global$3.core = core$2;
  // type bitmap
  $export$f.F = 1;   // forced
  $export$f.G = 2;   // global
  $export$f.S = 4;   // static
  $export$f.P = 8;   // proto
  $export$f.B = 16;  // bind
  $export$f.W = 32;  // wrap
  $export$f.U = 64;  // safe
  $export$f.R = 128; // real proto method for `library`
  var _export = $export$f;

  // most Object methods by ES6 should accept primitives
  var $export$e = _export;
  var core$1 = _core.exports;
  var fails$6 = _fails;
  var _objectSap = function (KEY, exec) {
    var fn = (core$1.Object || {})[KEY] || Object[KEY];
    var exp = {};
    exp[KEY] = exec(fn);
    $export$e($export$e.S + $export$e.F * fails$6(function () { fn(1); }), 'Object', exp);
  };

  // 19.1.2.14 Object.keys(O)
  var toObject$5 = _toObject;
  var $keys$2 = _objectKeys;

  _objectSap('keys', function () {
    return function keys(it) {
      return $keys$2(toObject$5(it));
    };
  });

  var _meta = {exports: {}};

  var META$1 = _uid('meta');
  var isObject$5 = _isObject;
  var has$4 = _has;
  var setDesc = _objectDp.f;
  var id = 0;
  var isExtensible = Object.isExtensible || function () {
    return true;
  };
  var FREEZE = !_fails(function () {
    return isExtensible(Object.preventExtensions({}));
  });
  var setMeta = function (it) {
    setDesc(it, META$1, { value: {
      i: 'O' + ++id, // object ID
      w: {}          // weak collections IDs
    } });
  };
  var fastKey = function (it, create) {
    // return primitive with prefix
    if (!isObject$5(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
    if (!has$4(it, META$1)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible(it)) return 'F';
      // not necessary to add metadata
      if (!create) return 'E';
      // add missing metadata
      setMeta(it);
    // return object ID
    } return it[META$1].i;
  };
  var getWeak = function (it, create) {
    if (!has$4(it, META$1)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible(it)) return true;
      // not necessary to add metadata
      if (!create) return false;
      // add missing metadata
      setMeta(it);
    // return hash weak collections IDs
    } return it[META$1].w;
  };
  // add metadata on freeze-family methods calling
  var onFreeze = function (it) {
    if (FREEZE && meta.NEED && isExtensible(it) && !has$4(it, META$1)) setMeta(it);
    return it;
  };
  var meta = _meta.exports = {
    KEY: META$1,
    NEED: false,
    fastKey: fastKey,
    getWeak: getWeak,
    onFreeze: onFreeze
  };

  var _wks = {exports: {}};

  var store = _shared.exports('wks');
  var uid$1 = _uid;
  var Symbol$1 = _global.exports.Symbol;
  var USE_SYMBOL = typeof Symbol$1 == 'function';

  var $exports = _wks.exports = function (name) {
    return store[name] || (store[name] =
      USE_SYMBOL && Symbol$1[name] || (USE_SYMBOL ? Symbol$1 : uid$1)('Symbol.' + name));
  };

  $exports.store = store;

  var def = _objectDp.f;
  var has$3 = _has;
  var TAG$1 = _wks.exports('toStringTag');

  var _setToStringTag = function (it, tag, stat) {
    if (it && !has$3(it = stat ? it : it.prototype, TAG$1)) def(it, TAG$1, { configurable: true, value: tag });
  };

  var _wksExt = {};

  _wksExt.f = _wks.exports;

  var global$2 = _global.exports;
  var core = _core.exports;
  var wksExt$1 = _wksExt;
  var defineProperty = _objectDp.f;
  var _wksDefine = function (name) {
    var $Symbol = core.Symbol || (core.Symbol = global$2.Symbol || {});
    if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt$1.f(name) });
  };

  var _objectGops = {};

  _objectGops.f = Object.getOwnPropertySymbols;

  var _objectPie = {};

  _objectPie.f = {}.propertyIsEnumerable;

  // all enumerable object keys, includes symbols
  var getKeys$1 = _objectKeys;
  var gOPS$1 = _objectGops;
  var pIE$1 = _objectPie;
  var _enumKeys = function (it) {
    var result = getKeys$1(it);
    var getSymbols = gOPS$1.f;
    if (getSymbols) {
      var symbols = getSymbols(it);
      var isEnum = pIE$1.f;
      var i = 0;
      var key;
      while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
    } return result;
  };

  // 7.2.2 IsArray(argument)
  var cof$4 = _cof;
  var _isArray = Array.isArray || function isArray(arg) {
    return cof$4(arg) == 'Array';
  };

  var dP$2 = _objectDp;
  var anObject$8 = _anObject;
  var getKeys = _objectKeys;

  var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject$8(O);
    var keys = getKeys(Properties);
    var length = keys.length;
    var i = 0;
    var P;
    while (length > i) dP$2.f(O, P = keys[i++], Properties[P]);
    return O;
  };

  var document = _global.exports.document;
  var _html = document && document.documentElement;

  // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
  var anObject$7 = _anObject;
  var dPs = _objectDps;
  var enumBugKeys = _enumBugKeys;
  var IE_PROTO = _sharedKey('IE_PROTO');
  var Empty = function () { /* empty */ };
  var PROTOTYPE$1 = 'prototype';

  // Create object with fake `null` prototype: use iframe Object with cleared prototype
  var createDict = function () {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = _domCreate('iframe');
    var i = enumBugKeys.length;
    var lt = '<';
    var gt = '>';
    var iframeDocument;
    iframe.style.display = 'none';
    _html.appendChild(iframe);
    iframe.src = 'javascript:'; // eslint-disable-line no-script-url
    // createDict = iframe.contentWindow.Object;
    // html.removeChild(iframe);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
    iframeDocument.close();
    createDict = iframeDocument.F;
    while (i--) delete createDict[PROTOTYPE$1][enumBugKeys[i]];
    return createDict();
  };

  var _objectCreate = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
      Empty[PROTOTYPE$1] = anObject$7(O);
      result = new Empty();
      Empty[PROTOTYPE$1] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO] = O;
    } else result = createDict();
    return Properties === undefined ? result : dPs(result, Properties);
  };

  var _objectGopnExt = {};

  var _objectGopn = {};

  // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
  var $keys$1 = _objectKeysInternal;
  var hiddenKeys = _enumBugKeys.concat('length', 'prototype');

  _objectGopn.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return $keys$1(O, hiddenKeys);
  };

  // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
  var toIObject$4 = _toIobject;
  var gOPN$3 = _objectGopn.f;
  var toString = {}.toString;

  var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
    ? Object.getOwnPropertyNames(window) : [];

  var getWindowNames = function (it) {
    try {
      return gOPN$3(it);
    } catch (e) {
      return windowNames.slice();
    }
  };

  _objectGopnExt.f = function getOwnPropertyNames(it) {
    return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN$3(toIObject$4(it));
  };

  var _objectGopd = {};

  var pIE = _objectPie;
  var createDesc$2 = _propertyDesc;
  var toIObject$3 = _toIobject;
  var toPrimitive$2 = _toPrimitive;
  var has$2 = _has;
  var IE8_DOM_DEFINE = _ie8DomDefine;
  var gOPD$3 = Object.getOwnPropertyDescriptor;

  _objectGopd.f = _descriptors ? gOPD$3 : function getOwnPropertyDescriptor(O, P) {
    O = toIObject$3(O);
    P = toPrimitive$2(P, true);
    if (IE8_DOM_DEFINE) try {
      return gOPD$3(O, P);
    } catch (e) { /* empty */ }
    if (has$2(O, P)) return createDesc$2(!pIE.f.call(O, P), O[P]);
  };

  // ECMAScript 6 symbols shim
  var global$1 = _global.exports;
  var has$1 = _has;
  var DESCRIPTORS$1 = _descriptors;
  var $export$d = _export;
  var redefine$1 = _redefine.exports;
  var META = _meta.exports.KEY;
  var $fails = _fails;
  var shared = _shared.exports;
  var setToStringTag = _setToStringTag;
  var uid = _uid;
  var wks$1 = _wks.exports;
  var wksExt = _wksExt;
  var wksDefine = _wksDefine;
  var enumKeys = _enumKeys;
  var isArray$1 = _isArray;
  var anObject$6 = _anObject;
  var isObject$4 = _isObject;
  var toObject$4 = _toObject;
  var toIObject$2 = _toIobject;
  var toPrimitive$1 = _toPrimitive;
  var createDesc$1 = _propertyDesc;
  var _create = _objectCreate;
  var gOPNExt = _objectGopnExt;
  var $GOPD = _objectGopd;
  var $GOPS = _objectGops;
  var $DP = _objectDp;
  var $keys = _objectKeys;
  var gOPD$2 = $GOPD.f;
  var dP$1 = $DP.f;
  var gOPN$2 = gOPNExt.f;
  var $Symbol = global$1.Symbol;
  var $JSON = global$1.JSON;
  var _stringify = $JSON && $JSON.stringify;
  var PROTOTYPE = 'prototype';
  var HIDDEN = wks$1('_hidden');
  var TO_PRIMITIVE = wks$1('toPrimitive');
  var isEnum = {}.propertyIsEnumerable;
  var SymbolRegistry = shared('symbol-registry');
  var AllSymbols = shared('symbols');
  var OPSymbols = shared('op-symbols');
  var ObjectProto = Object[PROTOTYPE];
  var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
  var QObject = global$1.QObject;
  // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
  var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

  // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
  var setSymbolDesc = DESCRIPTORS$1 && $fails(function () {
    return _create(dP$1({}, 'a', {
      get: function () { return dP$1(this, 'a', { value: 7 }).a; }
    })).a != 7;
  }) ? function (it, key, D) {
    var protoDesc = gOPD$2(ObjectProto, key);
    if (protoDesc) delete ObjectProto[key];
    dP$1(it, key, D);
    if (protoDesc && it !== ObjectProto) dP$1(ObjectProto, key, protoDesc);
  } : dP$1;

  var wrap = function (tag) {
    var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
    sym._k = tag;
    return sym;
  };

  var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
    return typeof it == 'symbol';
  } : function (it) {
    return it instanceof $Symbol;
  };

  var $defineProperty$1 = function defineProperty(it, key, D) {
    if (it === ObjectProto) $defineProperty$1(OPSymbols, key, D);
    anObject$6(it);
    key = toPrimitive$1(key, true);
    anObject$6(D);
    if (has$1(AllSymbols, key)) {
      if (!D.enumerable) {
        if (!has$1(it, HIDDEN)) dP$1(it, HIDDEN, createDesc$1(1, {}));
        it[HIDDEN][key] = true;
      } else {
        if (has$1(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
        D = _create(D, { enumerable: createDesc$1(0, false) });
      } return setSymbolDesc(it, key, D);
    } return dP$1(it, key, D);
  };
  var $defineProperties = function defineProperties(it, P) {
    anObject$6(it);
    var keys = enumKeys(P = toIObject$2(P));
    var i = 0;
    var l = keys.length;
    var key;
    while (l > i) $defineProperty$1(it, key = keys[i++], P[key]);
    return it;
  };
  var $create = function create(it, P) {
    return P === undefined ? _create(it) : $defineProperties(_create(it), P);
  };
  var $propertyIsEnumerable = function propertyIsEnumerable(key) {
    var E = isEnum.call(this, key = toPrimitive$1(key, true));
    if (this === ObjectProto && has$1(AllSymbols, key) && !has$1(OPSymbols, key)) return false;
    return E || !has$1(this, key) || !has$1(AllSymbols, key) || has$1(this, HIDDEN) && this[HIDDEN][key] ? E : true;
  };
  var $getOwnPropertyDescriptor$1 = function getOwnPropertyDescriptor(it, key) {
    it = toIObject$2(it);
    key = toPrimitive$1(key, true);
    if (it === ObjectProto && has$1(AllSymbols, key) && !has$1(OPSymbols, key)) return;
    var D = gOPD$2(it, key);
    if (D && has$1(AllSymbols, key) && !(has$1(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
    return D;
  };
  var $getOwnPropertyNames = function getOwnPropertyNames(it) {
    var names = gOPN$2(toIObject$2(it));
    var result = [];
    var i = 0;
    var key;
    while (names.length > i) {
      if (!has$1(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
    } return result;
  };
  var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
    var IS_OP = it === ObjectProto;
    var names = gOPN$2(IS_OP ? OPSymbols : toIObject$2(it));
    var result = [];
    var i = 0;
    var key;
    while (names.length > i) {
      if (has$1(AllSymbols, key = names[i++]) && (IS_OP ? has$1(ObjectProto, key) : true)) result.push(AllSymbols[key]);
    } return result;
  };

  // 19.4.1.1 Symbol([description])
  if (!USE_NATIVE) {
    $Symbol = function Symbol() {
      if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
      var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
      var $set = function (value) {
        if (this === ObjectProto) $set.call(OPSymbols, value);
        if (has$1(this, HIDDEN) && has$1(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
        setSymbolDesc(this, tag, createDesc$1(1, value));
      };
      if (DESCRIPTORS$1 && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
      return wrap(tag);
    };
    redefine$1($Symbol[PROTOTYPE], 'toString', function toString() {
      return this._k;
    });

    $GOPD.f = $getOwnPropertyDescriptor$1;
    $DP.f = $defineProperty$1;
    _objectGopn.f = gOPNExt.f = $getOwnPropertyNames;
    _objectPie.f = $propertyIsEnumerable;
    $GOPS.f = $getOwnPropertySymbols;

    if (DESCRIPTORS$1 && !_library) {
      redefine$1(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
    }

    wksExt.f = function (name) {
      return wrap(wks$1(name));
    };
  }

  $export$d($export$d.G + $export$d.W + $export$d.F * !USE_NATIVE, { Symbol: $Symbol });

  for (var es6Symbols = (
    // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
    'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
  ).split(','), j$1 = 0; es6Symbols.length > j$1;)wks$1(es6Symbols[j$1++]);

  for (var wellKnownSymbols = $keys(wks$1.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

  $export$d($export$d.S + $export$d.F * !USE_NATIVE, 'Symbol', {
    // 19.4.2.1 Symbol.for(key)
    'for': function (key) {
      return has$1(SymbolRegistry, key += '')
        ? SymbolRegistry[key]
        : SymbolRegistry[key] = $Symbol(key);
    },
    // 19.4.2.5 Symbol.keyFor(sym)
    keyFor: function keyFor(sym) {
      if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
      for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
    },
    useSetter: function () { setter = true; },
    useSimple: function () { setter = false; }
  });

  $export$d($export$d.S + $export$d.F * !USE_NATIVE, 'Object', {
    // 19.1.2.2 Object.create(O [, Properties])
    create: $create,
    // 19.1.2.4 Object.defineProperty(O, P, Attributes)
    defineProperty: $defineProperty$1,
    // 19.1.2.3 Object.defineProperties(O, Properties)
    defineProperties: $defineProperties,
    // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
    getOwnPropertyDescriptor: $getOwnPropertyDescriptor$1,
    // 19.1.2.7 Object.getOwnPropertyNames(O)
    getOwnPropertyNames: $getOwnPropertyNames,
    // 19.1.2.8 Object.getOwnPropertySymbols(O)
    getOwnPropertySymbols: $getOwnPropertySymbols
  });

  // Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
  // https://bugs.chromium.org/p/v8/issues/detail?id=3443
  var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

  $export$d($export$d.S + $export$d.F * FAILS_ON_PRIMITIVES, 'Object', {
    getOwnPropertySymbols: function getOwnPropertySymbols(it) {
      return $GOPS.f(toObject$4(it));
    }
  });

  // 24.3.2 JSON.stringify(value [, replacer [, space]])
  $JSON && $export$d($export$d.S + $export$d.F * (!USE_NATIVE || $fails(function () {
    var S = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    // WebKit converts symbol values to JSON as null
    // V8 throws on boxed symbols
    return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
  })), 'JSON', {
    stringify: function stringify(it) {
      var args = [it];
      var i = 1;
      var replacer, $replacer;
      while (arguments.length > i) args.push(arguments[i++]);
      $replacer = replacer = args[1];
      if (!isObject$4(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray$1(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return _stringify.apply($JSON, args);
    }
  });

  // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
  $Symbol[PROTOTYPE][TO_PRIMITIVE] || _hide($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
  // 19.4.3.5 Symbol.prototype[@@toStringTag]
  setToStringTag($Symbol, 'Symbol');
  // 20.2.1.9 Math[@@toStringTag]
  setToStringTag(Math, 'Math', true);
  // 24.3.3 JSON[@@toStringTag]
  setToStringTag(global$1.JSON, 'JSON', true);

  var isObject$3 = _isObject;
  var isArray = _isArray;
  var SPECIES$2 = _wks.exports('species');

  var _arraySpeciesConstructor = function (original) {
    var C;
    if (isArray(original)) {
      C = original.constructor;
      // cross-realm fallback
      if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
      if (isObject$3(C)) {
        C = C[SPECIES$2];
        if (C === null) C = undefined;
      }
    } return C === undefined ? Array : C;
  };

  // 9.4.2.3 ArraySpeciesCreate(originalArray, length)
  var speciesConstructor$1 = _arraySpeciesConstructor;

  var _arraySpeciesCreate = function (original, length) {
    return new (speciesConstructor$1(original))(length);
  };

  // 0 -> Array#forEach
  // 1 -> Array#map
  // 2 -> Array#filter
  // 3 -> Array#some
  // 4 -> Array#every
  // 5 -> Array#find
  // 6 -> Array#findIndex
  var ctx = _ctx;
  var IObject$1 = _iobject;
  var toObject$3 = _toObject;
  var toLength$4 = _toLength;
  var asc = _arraySpeciesCreate;
  var _arrayMethods = function (TYPE, $create) {
    var IS_MAP = TYPE == 1;
    var IS_FILTER = TYPE == 2;
    var IS_SOME = TYPE == 3;
    var IS_EVERY = TYPE == 4;
    var IS_FIND_INDEX = TYPE == 6;
    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    var create = $create || asc;
    return function ($this, callbackfn, that) {
      var O = toObject$3($this);
      var self = IObject$1(O);
      var f = ctx(callbackfn, that, 3);
      var length = toLength$4(self.length);
      var index = 0;
      var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
      var val, res;
      for (;length > index; index++) if (NO_HOLES || index in self) {
        val = self[index];
        res = f(val, index, O);
        if (TYPE) {
          if (IS_MAP) result[index] = res;   // map
          else if (res) switch (TYPE) {
            case 3: return true;             // some
            case 5: return val;              // find
            case 6: return index;            // findIndex
            case 2: result.push(val);        // filter
          } else if (IS_EVERY) return false; // every
        }
      }
      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
    };
  };

  var fails$5 = _fails;

  var _strictMethod = function (method, arg) {
    return !!method && fails$5(function () {
      // eslint-disable-next-line no-useless-call
      arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
    });
  };

  var $export$c = _export;
  var $filter = _arrayMethods(2);

  $export$c($export$c.P + $export$c.F * !_strictMethod([].filter, true), 'Array', {
    // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
    filter: function filter(callbackfn /* , thisArg */) {
      return $filter(this, callbackfn, arguments[1]);
    }
  });

  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  var toIObject$1 = _toIobject;
  var $getOwnPropertyDescriptor = _objectGopd.f;

  _objectSap('getOwnPropertyDescriptor', function () {
    return function getOwnPropertyDescriptor(it, key) {
      return $getOwnPropertyDescriptor(toIObject$1(it), key);
    };
  });

  var $export$b = _export;
  var $forEach = _arrayMethods(0);
  var STRICT = _strictMethod([].forEach, true);

  $export$b($export$b.P + $export$b.F * !STRICT, 'Array', {
    // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
    forEach: function forEach(callbackfn /* , thisArg */) {
      return $forEach(this, callbackfn, arguments[1]);
    }
  });

  // all object keys, includes non-enumerable and symbols
  var gOPN$1 = _objectGopn;
  var gOPS = _objectGops;
  var anObject$5 = _anObject;
  var Reflect = _global.exports.Reflect;
  var _ownKeys = Reflect && Reflect.ownKeys || function ownKeys(it) {
    var keys = gOPN$1.f(anObject$5(it));
    var getSymbols = gOPS.f;
    return getSymbols ? keys.concat(getSymbols(it)) : keys;
  };

  var $defineProperty = _objectDp;
  var createDesc = _propertyDesc;

  var _createProperty = function (object, index, value) {
    if (index in object) $defineProperty.f(object, index, createDesc(0, value));
    else object[index] = value;
  };

  // https://github.com/tc39/proposal-object-getownpropertydescriptors
  var $export$a = _export;
  var ownKeys$1 = _ownKeys;
  var toIObject = _toIobject;
  var gOPD$1 = _objectGopd;
  var createProperty = _createProperty;

  $export$a($export$a.S, 'Object', {
    getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
      var O = toIObject(object);
      var getDesc = gOPD$1.f;
      var keys = ownKeys$1(O);
      var result = {};
      var i = 0;
      var key, desc;
      while (keys.length > i) {
        desc = getDesc(O, key = keys[i++]);
        if (desc !== undefined) createProperty(result, key, desc);
      }
      return result;
    }
  });

  var $export$9 = _export;
  // 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
  $export$9($export$9.S + $export$9.F * !_descriptors, 'Object', { defineProperties: _objectDps });

  var $export$8 = _export;
  // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
  $export$8($export$8.S + $export$8.F * !_descriptors, 'Object', { defineProperty: _objectDp.f });

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

  var $export$7 = _export;
  var aFunction$2 = _aFunction;
  var toObject$2 = _toObject;
  var fails$4 = _fails;
  var $sort = [].sort;
  var test$1 = [1, 2, 3];

  $export$7($export$7.P + $export$7.F * (fails$4(function () {
    // IE8-
    test$1.sort(undefined);
  }) || !fails$4(function () {
    // V8 bug
    test$1.sort(null);
    // Old WebKit
  }) || !_strictMethod($sort)), 'Array', {
    // 22.1.3.25 Array.prototype.sort(comparefn)
    sort: function sort(comparefn) {
      return comparefn === undefined
        ? $sort.call(toObject$2(this))
        : $sort.call(toObject$2(this), aFunction$2(comparefn));
    }
  });

  var $export$6 = _export;
  var html = _html;
  var cof$3 = _cof;
  var toAbsoluteIndex$1 = _toAbsoluteIndex;
  var toLength$3 = _toLength;
  var arraySlice = [].slice;

  // fallback for not array-like ES3 strings and DOM objects
  $export$6($export$6.P + $export$6.F * _fails(function () {
    if (html) arraySlice.call(html);
  }), 'Array', {
    slice: function slice(begin, end) {
      var len = toLength$3(this.length);
      var klass = cof$3(this);
      end = end === undefined ? len : end;
      if (klass == 'Array') return arraySlice.call(this, begin, end);
      var start = toAbsoluteIndex$1(begin, len);
      var upTo = toAbsoluteIndex$1(end, len);
      var size = toLength$3(upTo - start);
      var cloned = new Array(size);
      var i = 0;
      for (; i < size; i++) cloned[i] = klass == 'String'
        ? this.charAt(start + i)
        : this[start + i];
      return cloned;
    }
  });

  var aFunction$1 = _aFunction;
  var toObject$1 = _toObject;
  var IObject = _iobject;
  var toLength$2 = _toLength;

  var _arrayReduce = function (that, callbackfn, aLen, memo, isRight) {
    aFunction$1(callbackfn);
    var O = toObject$1(that);
    var self = IObject(O);
    var length = toLength$2(O.length);
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

  var $export$5 = _export;
  var $reduce = _arrayReduce;

  $export$5($export$5.P + $export$5.F * !_strictMethod([].reduce, true), 'Array', {
    // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
    reduce: function reduce(callbackfn /* , initialValue */) {
      return $reduce(this, callbackfn, arguments.length, arguments[1], false);
    }
  });

  function calcMax3Concenttration(arr) {
    var numberArr = arr.filter(function (item) {
      return isRealNumber(item);
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

  var fund = /*#__PURE__*/Object.freeze({
    __proto__: null,
    calcMax3Concenttration: calcMax3Concenttration
  });

  var calc = /*#__PURE__*/Object.freeze({
    __proto__: null,
    number: number,
    fund: fund
  });

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

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
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

  // 20.2.2.21 Math.log10(x)
  var $export$4 = _export;

  $export$4($export$4.S, 'Math', {
    log10: function log10(x) {
      return Math.log(x) * Math.LOG10E;
    }
  });

  var $export$3 = _export;
  var $map = _arrayMethods(1);

  $export$3($export$3.P + $export$3.F * !_strictMethod([].map, true), 'Array', {
    // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
    map: function map(callbackfn /* , thisArg */) {
      return $map(this, callbackfn, arguments[1]);
    }
  });

  var $export$2 = _export;
  var $indexOf = _arrayIncludes(false);
  var $native = [].indexOf;
  var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

  $export$2($export$2.P + $export$2.F * (NEGATIVE_ZERO || !_strictMethod($native)), 'Array', {
    // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
    indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
      return NEGATIVE_ZERO
        // convert -0 to +0
        ? $native.apply(this, arguments) || 0
        : $indexOf(this, searchElement, arguments[1]);
    }
  });

  // 7.2.8 IsRegExp(argument)
  var isObject$2 = _isObject;
  var cof$2 = _cof;
  var MATCH = _wks.exports('match');
  var _isRegexp = function (it) {
    var isRegExp;
    return isObject$2(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof$2(it) == 'RegExp');
  };

  // 7.3.20 SpeciesConstructor(O, defaultConstructor)
  var anObject$4 = _anObject;
  var aFunction = _aFunction;
  var SPECIES$1 = _wks.exports('species');
  var _speciesConstructor = function (O, D) {
    var C = anObject$4(O).constructor;
    var S;
    return C === undefined || (S = anObject$4(C)[SPECIES$1]) == undefined ? D : aFunction(S);
  };

  var toInteger = _toInteger;
  var defined$2 = _defined;
  // true  -> String#at
  // false -> String#codePointAt
  var _stringAt = function (TO_STRING) {
    return function (that, pos) {
      var s = String(defined$2(that));
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

  // getting tag from 19.1.3.6 Object.prototype.toString()
  var cof$1 = _cof;
  var TAG = _wks.exports('toStringTag');
  // ES3 wrong here
  var ARG = cof$1(function () { return arguments; }()) == 'Arguments';

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
      : ARG ? cof$1(O)
      // ES3 arguments fallback
      : (B = cof$1(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
  };

  var classof$1 = _classof;
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
    if (classof$1(R) !== 'RegExp') {
      throw new TypeError('RegExp#exec called on incompatible receiver');
    }
    return builtinExec.call(R, S);
  };

  // 21.2.5.3 get RegExp.prototype.flags
  var anObject$3 = _anObject;
  var _flags = function () {
    var that = anObject$3(this);
    var result = '';
    if (that.global) result += 'g';
    if (that.ignoreCase) result += 'i';
    if (that.multiline) result += 'm';
    if (that.unicode) result += 'u';
    if (that.sticky) result += 'y';
    return result;
  };

  var regexpFlags = _flags;

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
  _export({
    target: 'RegExp',
    proto: true,
    forced: regexpExec$2 !== /./.exec
  }, {
    exec: regexpExec$2
  });

  var redefine = _redefine.exports;
  var hide = _hide;
  var fails$3 = _fails;
  var defined$1 = _defined;
  var wks = _wks.exports;
  var regexpExec$1 = _regexpExec;

  var SPECIES = wks('species');

  var REPLACE_SUPPORTS_NAMED_GROUPS = !fails$3(function () {
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

    var DELEGATES_TO_SYMBOL = !fails$3(function () {
      // String methods call symbol-named RegEp methods
      var O = {};
      O[SYMBOL] = function () { return 7; };
      return ''[KEY](O) != 7;
    });

    var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails$3(function () {
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
        defined$1,
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
  var anObject$2 = _anObject;
  var speciesConstructor = _speciesConstructor;
  var advanceStringIndex = _advanceStringIndex;
  var toLength$1 = _toLength;
  var callRegExpExec = _regexpExecAbstract;
  var regexpExec = _regexpExec;
  var fails$2 = _fails;
  var $min = Math.min;
  var $push = [].push;
  var $SPLIT = 'split';
  var LENGTH = 'length';
  var LAST_INDEX = 'lastIndex';
  var MAX_UINT32 = 0xffffffff;

  // babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
  var SUPPORTS_Y = !fails$2(function () { RegExp(MAX_UINT32, 'y'); });

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

        var rx = anObject$2(regexp);
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
            (e = $min(toLength$1(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
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

  // 19.1.3.6 Object.prototype.toString()
  var classof = _classof;
  var test = {};
  test[_wks.exports('toStringTag')] = 'z';
  if (test + '' != '[object z]') {
    _redefine.exports(Object.prototype, 'toString', function toString() {
      return '[object ' + classof(this) + ']';
    }, true);
  }

  var DateProto = Date.prototype;
  var INVALID_DATE = 'Invalid Date';
  var TO_STRING$1 = 'toString';
  var $toString$1 = DateProto[TO_STRING$1];
  var getTime = DateProto.getTime;
  if (new Date(NaN) + '' != INVALID_DATE) {
    _redefine.exports(DateProto, TO_STRING$1, function toString() {
      var value = getTime.call(this);
      // eslint-disable-next-line no-self-compare
      return value === value ? $toString$1.call(this) : INVALID_DATE;
    });
  }

  // 21.2.5.3 get RegExp.prototype.flags()
  if (_descriptors && /./g.flags != 'g') _objectDp.f(RegExp.prototype, 'flags', {
    configurable: true,
    get: _flags
  });

  var anObject$1 = _anObject;
  var $flags = _flags;
  var DESCRIPTORS = _descriptors;
  var TO_STRING = 'toString';
  var $toString = /./[TO_STRING];

  var define = function (fn) {
    _redefine.exports(RegExp.prototype, TO_STRING, fn, true);
  };

  // 21.2.5.14 RegExp.prototype.toString()
  if (_fails(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
    define(function toString() {
      var R = anObject$1(this);
      return '/'.concat(R.source, '/',
        'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
    });
  // FF44- RegExp#toString has a wrong name
  } else if ($toString.name != TO_STRING) {
    define(function toString() {
      return $toString.call(this);
    });
  }

  function getDateTime(date) {
    return new Date(date).getTime();
  }

  var wholeQuarterRangeMap = {
    Q1: ["01-01", "03-31"],
    Q2: ["04-01", "06-30"],
    Q3: ["07-01", "09-30"],
    Q4: ["10-01", "12-31"]
  };
  var wholeYearRangeArr = ["01-01", "12-31"];

  function getIntPartLength(num) {
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  }

  function getMonetaryUnit(val) {
    if (isRealNumber(val)) {
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
      return getDateTime(item);
    });
    var maxTimestamp = Math.max.apply(Math, _toConsumableArray(timestampArr));
    var maxTimeIndex = timestampArr.indexOf(maxTimestamp);
    return dateArr[maxTimeIndex];
  }

  function getMinDate(dateArr) {
    var timestampArr = dateArr.map(function (item) {
      return getDateTime(item);
    });
    var minTimestamp = Math.min.apply(Math, _toConsumableArray(timestampArr));
    var minTimeIndex = timestampArr.indexOf(minTimestamp);
    return dateArr[minTimeIndex];
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

    var startTimeStamp = getDateTime(startDate);
    var endTimeStamp = getDateTime(endDate);
    var quarterStartDate = "".concat(year, "-").concat(wholeQuarterRangeMap[quarter][0]);
    var quarterEndDate = "".concat(year, "-").concat(wholeQuarterRangeMap[quarter][1]);
    var quarterStartTimeStamp = getDateTime(quarterStartDate);
    var quarterEndTimeStamp = getDateTime(quarterEndDate);

    if (quarterStartTimeStamp >= startTimeStamp && quarterStartTimeStamp <= endTimeStamp && quarterEndTimeStamp >= startTimeStamp && quarterEndTimeStamp <= endTimeStamp) {
      return true;
    }

    return false;
  }

  function checkYearInRange(year, _ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        startDate = _ref4[0],
        endDate = _ref4[1];

    var startTimeStamp = getDateTime(startDate);
    var endTimeStamp = getDateTime(endDate);
    var yearStartDate = "".concat(year, "-").concat(wholeYearRangeArr[0]);
    var yearEndDate = "".concat(year, "-").concat(wholeYearRangeArr[1]);
    var yearStartTimeStamp = getDateTime(yearStartDate);
    var yearEndTimeStamp = getDateTime(yearEndDate);

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

  var acquire = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getIntPartLength: getIntPartLength,
    getMonetaryUnit: getMonetaryUnit,
    getMaxDate: getMaxDate,
    getMinDate: getMinDate,
    checkQuarterInRange: checkQuarterInRange,
    checkYearInRange: checkYearInRange,
    createQuarterArr: createQuarterArr
  });

  function formatRank(val) {
    if (!isRealNumber(val)) {
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

    if (!isRealNumber(val)) {
      return "--";
    }

    var num = val;

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

  function formatToMonetaryShape(val) {
    var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

    if (!isRealNumber(val)) {
      return "--";
    }

    var intPartLength = getIntPartLength(val);

    if (intPartLength > 8) {
      var num = val / Math.pow(10, 8);
      return "".concat(_float(num, precision), "\u4EBF");
    }

    if (intPartLength > 4) {
      var _num = val / Math.pow(10, 4);

      return "".concat(_float(_num, precision), "\u4E07");
    }

    return "".concat(_float(val, precision));
  }

  function formatToFloat(val) {
    var plusSign = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var precision = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
    var scale = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

    if (!isRealNumber(val)) {
      return "--";
    }

    var num = val / scale;

    if (num > 0) {
      return "".concat(plusSign).concat(_float(num, precision));
    }

    return _float(num, precision);
  }

  function formatToPercent(val) {
    var plusSign = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var precision = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
    var scale = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

    if (!isRealNumber(val)) {
      return "--";
    }

    var num = val / scale;

    if (num > 0) {
      return "".concat(plusSign).concat(percentage(num, precision));
    }

    return percentage(num, precision);
  }

  var formatter = /*#__PURE__*/Object.freeze({
    __proto__: null,
    formatRank: formatRank,
    formatLongText: formatLongText,
    formatWithUnit: formatWithUnit,
    formatToMonetaryShape: formatToMonetaryShape,
    formatToFloat: formatToFloat,
    formatToPercent: formatToPercent
  });

  var display = /*#__PURE__*/Object.freeze({
    __proto__: null,
    formatter: formatter
  });

  function gt(a, b) {
    if (!isRealNumber(b)) {
      return true;
    }

    if (!isRealNumber(a) && isRealNumber(b)) {
      return false;
    }

    return a > b;
  }

  function lte(a, b) {
    if (!isRealNumber(b)) {
      return true;
    }

    if (!isRealNumber(a) && isRealNumber(b)) {
      return false;
    }

    return a <= b;
  }

  var compare = /*#__PURE__*/Object.freeze({
    __proto__: null,
    gt: gt,
    lte: lte
  });

  var toObject = _toObject;
  var toAbsoluteIndex = _toAbsoluteIndex;
  var toLength = _toLength;
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
  var UNSCOPABLES = _wks.exports('unscopables');
  var ArrayProto = Array.prototype;
  if (ArrayProto[UNSCOPABLES] == undefined) _hide(ArrayProto, UNSCOPABLES, {});
  var _addToUnscopables = function (key) {
    ArrayProto[UNSCOPABLES][key] = true;
  };

  // 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
  var $export$1 = _export;

  $export$1($export$1.P, 'Array', { fill: _arrayFill });

  _addToUnscopables('fill');

  // Works with __proto__ only. Old v8 can't work with null proto objects.
  /* eslint-disable no-proto */
  var isObject$1 = _isObject;
  var anObject = _anObject;
  var check = function (O, proto) {
    anObject(O);
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

  var isObject = _isObject;
  var setPrototypeOf = _setProto.set;
  var _inheritIfRequired = function (that, target, C) {
    var S = target.constructor;
    var P;
    if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
      setPrototypeOf(that, P);
    } return that;
  };

  var _stringWs = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
    '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

  var $export = _export;
  var defined = _defined;
  var fails$1 = _fails;
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

  var global = _global.exports;
  var has = _has;
  var cof = _cof;
  var inheritIfRequired = _inheritIfRequired;
  var toPrimitive = _toPrimitive;
  var fails = _fails;
  var gOPN = _objectGopn.f;
  var gOPD = _objectGopd.f;
  var dP = _objectDp.f;
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
    for (var keys = _descriptors ? gOPN(Base) : (
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
    _redefine.exports(global, NUMBER, $Number);
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
        data.push([timeNumber].concat(_toConsumableArray(undefinedArr)));
        m += 1;

        if (h === 11 && m > 30) {
          h += 1;
          break;
        }
      }

      m = h === 12 ? 1 : 0;
      h += 1;
      h === 15 && data.push([Number("".concat(dataMaxStrPre, "1500"))].concat(_toConsumableArray(undefinedArr)));
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

  var complete = /*#__PURE__*/Object.freeze({
    __proto__: null,
    completeStockTimeDataArr: completeStockTimeDataArr,
    completeStockTimeDataObjArr: completeStockTimeDataObjArr
  });

  var gtZeroNumReg = /^([1-9]\d*(\.\d*[1-9]\d*)?|0\.\d*[1-9]\d*)$/; // allow "11.230", ban "11."

  var gteZeroNumReg = /^([1-9]\d*(\.\d*[1-9]\d*)?|0\.\d+|0)$/; // allow "0.00", ban "0."

  var gtZeroNumStrictReg = /^([1-9]\d*(\.\d*[1-9]\d*)?|0\.\d*[1-9])$/; // allow "11.23", ban "11.", ban "11.230"

  var gteZeroNumStrictReg = /^([1-9]\d*(\.\d*[1-9]\d*)?|0\.\d*[1-9]|0)$/; // allow "0", ban "0.", ban "0.00"

  var intReg = /^(-?[1-9]\d*|0)$/;
  var gtZeroIntReg = /^([1-9]\d*)$/;
  var gteZeroIntReg = /^([1-9]\d*|0)$/; // ↓ float number must have a point

  var floatReg = /^(-?[1-9]\d*\.\d+|-?0\.\d*[1-9]\d*|0\.0+)$/; // allow "1.23", allow "-0.1", allow "0.00", ban "-0.00"

  var floatStrictReg = /^(-?[1-9]\d*\.\d+|-?0\.\d*[1-9])$/; // allow "1.23", allow "-0.1", ban "1.10", ban "1."

  var gtZeroFloatReg = /^([1-9]\d*\.\d+|0\.\d*[1-9]\d*)$/; // allow "11.230", ban "11", ban "11."

  var gteZeroFloatReg = /^([1-9]\d*|0)\.\d+$/; // allow "0.00", ban "0", ban "0."

  var gtZeroFloatStrictReg = /^([1-9]\d*|0)\.\d*[1-9]$/; // allow "11.23", ban "11.", ban "11.230"
  // const gteZeroFloatStrictReg = null; // float nunmber 0 conflict with strict mode, this rule does not exist
  // special character in ASCII table

  var specialCharacterReg = /[\x21-\x2F\x3A-\x40\x5B-\x60\x7B-\x7E]+/;

  var reg = /*#__PURE__*/Object.freeze({
    __proto__: null,
    gtZeroNumReg: gtZeroNumReg,
    gteZeroNumReg: gteZeroNumReg,
    gtZeroNumStrictReg: gtZeroNumStrictReg,
    gteZeroNumStrictReg: gteZeroNumStrictReg,
    intReg: intReg,
    gtZeroIntReg: gtZeroIntReg,
    gteZeroIntReg: gteZeroIntReg,
    floatReg: floatReg,
    floatStrictReg: floatStrictReg,
    gtZeroFloatReg: gtZeroFloatReg,
    gteZeroFloatReg: gteZeroFloatReg,
    gtZeroFloatStrictReg: gtZeroFloatStrictReg,
    specialCharacterReg: specialCharacterReg
  });

  var util = /*#__PURE__*/Object.freeze({
    __proto__: null,
    acquire: acquire,
    compare: compare,
    complete: complete,
    reg: reg
  });

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var index = _objectSpread(_objectSpread(_objectSpread({}, calc), display), util);

  return index;

}));
