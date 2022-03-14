'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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

exports.floatReg = floatReg;
exports.floatStrictReg = floatStrictReg;
exports.gtZeroFloatReg = gtZeroFloatReg;
exports.gtZeroFloatStrictReg = gtZeroFloatStrictReg;
exports.gtZeroIntReg = gtZeroIntReg;
exports.gtZeroNumReg = gtZeroNumReg;
exports.gtZeroNumStrictReg = gtZeroNumStrictReg;
exports.gteZeroFloatReg = gteZeroFloatReg;
exports.gteZeroIntReg = gteZeroIntReg;
exports.gteZeroNumReg = gteZeroNumReg;
exports.gteZeroNumStrictReg = gteZeroNumStrictReg;
exports.intReg = intReg;
exports.specialCharacterReg = specialCharacterReg;
