'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var gtZeroNumReg = /^([1-9]\d*(\.\d*[1-9]\d*)?|0\.\d*[1-9]\d*)$/; // allow "11.230", ban "11."

var gteZeroNumReg = /^([1-9]\d*(\.\d*[1-9]\d*)?|0\.\d+|0)$/; // allow "0.00", ban "0."

var gtZeroNumStrictReg = /^([1-9]\d*(\.\d*[1-9]\d*)?|0\.\d*[1-9])$/; // allow "11.23", ban "11.", ban "11.230"

var gteZeroNumStrictReg = /^([1-9]\d*(\.\d*[1-9]\d*)?|0\.\d*[1-9]|0)$/; // allow "0", ban "0.", ban "0.00"

var gtZeroIntReg = /^([1-9]\d*)$/;
var gteZeroIntReg = /^([1-9]\d*|0)$/; // ↓ float number must have a point

var gtZeroFloatReg = /^([1-9]\d*\.\d+|0\.\d*[1-9]\d*)$/; // allow "11.230", ban "11", ban "11."

var gteZeroFloatReg = /^([1-9]\d*|0)\.\d+$/; // allow "0.00", ban "0", ban "0."

var gtZeroFloatStrictReg = /^([1-9]\d*|0)\.\d*[1-9]$/; // allow "11.23", ban "11.", ban "11.230"

exports.gtZeroFloatReg = gtZeroFloatReg;
exports.gtZeroFloatStrictReg = gtZeroFloatStrictReg;
exports.gtZeroIntReg = gtZeroIntReg;
exports.gtZeroNumReg = gtZeroNumReg;
exports.gtZeroNumStrictReg = gtZeroNumStrictReg;
exports.gteZeroFloatReg = gteZeroFloatReg;
exports.gteZeroIntReg = gteZeroIntReg;
exports.gteZeroNumReg = gteZeroNumReg;
exports.gteZeroNumStrictReg = gteZeroNumStrictReg;
