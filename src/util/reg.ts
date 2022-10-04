const gtZeroNumReg: RegExp = /^([1-9]\d*(\.\d*[1-9]\d*)?|0\.\d*[1-9]\d*)$/; // allow "11.230", ban "11."

const gteZeroNumReg: RegExp = /^([1-9]\d*(\.\d*[1-9]\d*)?|0\.\d+|0)$/; // allow "0.00", ban "0."

const gtZeroNumStrictReg: RegExp = /^([1-9]\d*(\.\d*[1-9]\d*)?|0\.\d*[1-9])$/; // allow "11.23", ban "11.", ban "11.230"

const gteZeroNumStrictReg: RegExp =
  /^([1-9]\d*(\.\d*[1-9]\d*)?|0\.\d*[1-9]|0)$/; // allow "0", ban "0.", ban "0.00"

const intReg: RegExp = /^(-?[1-9]\d*|0)$/;

const gtZeroIntReg: RegExp = /^([1-9]\d*)$/;

const gteZeroIntReg: RegExp = /^([1-9]\d*|0)$/;

// ↓ float number must have a point
const floatReg: RegExp = /^(-?[1-9]\d*\.\d+|-?0\.\d*[1-9]\d*|0\.0+)$/; // allow "1.23", allow "-0.1", allow "0.00", ban "-0.00"

const floatStrictReg: RegExp = /^(-?[1-9]\d*\.\d+|-?0\.\d*[1-9])$/; // allow "1.23", allow "-0.1", ban "1.10", ban "1."

const gtZeroFloatReg: RegExp = /^([1-9]\d*\.\d+|0\.\d*[1-9]\d*)$/; // allow "11.230", ban "11", ban "11."

const gteZeroFloatReg: RegExp = /^([1-9]\d*|0)\.\d+$/; // allow "0.00", ban "0", ban "0."

const gtZeroFloatStrictReg: RegExp = /^([1-9]\d*|0)\.\d*[1-9]$/; // allow "11.23", ban "11.", ban "11.230"

// const gteZeroFloatStrictReg = null; // float nunmber 0 conflict with strict mode, this rule does not exist

// special character in ASCII table
const specialCharacterReg: RegExp = /[\x21-\x2F\x3A-\x40\x5B-\x60\x7B-\x7E]+/;

export {
  gtZeroNumReg,
  gteZeroNumReg,
  gtZeroNumStrictReg,
  gteZeroNumStrictReg,
  intReg,
  gtZeroIntReg,
  gteZeroIntReg,
  floatReg,
  floatStrictReg,
  gtZeroFloatReg,
  gteZeroFloatReg,
  gtZeroFloatStrictReg,
  specialCharacterReg,
};
