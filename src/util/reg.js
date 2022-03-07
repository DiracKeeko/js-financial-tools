const gtZeroNumReg = /^([1-9]\d*(\.\d*[1-9]\d*)?|0\.\d*[1-9]\d*)$/; // allow "11.230", ban "11."

const gteZeroNumReg = /^([1-9]\d*(\.\d*[1-9]\d*)?|0\.\d+|0)$/; // allow "0.00", ban "0."

const gtZeroNumStrictReg = /^([1-9]\d*(\.\d*[1-9]\d*)?|0\.\d*[1-9])$/; // allow "11.23", ban "11.", ban "11.230"

const gteZeroNumStrictReg = /^([1-9]\d*(\.\d*[1-9]\d*)?|0\.\d*[1-9]|0)$/; // allow "0", ban "0.", ban "0.00"

const gtZeroIntReg = /^([1-9]\d*)$/;

const gteZeroIntReg = /^([1-9]\d*|0)$/;

// ↓ float number must have a point
const gtZeroFloatReg = /^([1-9]\d*\.\d+|0\.\d*[1-9]\d*)$/; // allow "11.230", ban "11", ban "11."

const gteZeroFloatReg = /^([1-9]\d*|0)\.\d+$/; // allow "0.00", ban "0", ban "0."

const gtZeroFloatStrictReg = /^([1-9]\d*|0)\.\d*[1-9]$/; // allow "11.23", ban "11.", ban "11.230"

// const gteZeroFloatStrictReg = null; // float nunmber 0 conflict with strict mode, this rule does not exist

export {
  gtZeroNumReg,
  gteZeroNumReg,
  gtZeroNumStrictReg,
  gteZeroNumStrictReg,
  gtZeroIntReg,
  gteZeroIntReg,
  gtZeroFloatReg,
  gteZeroFloatReg,
  gtZeroFloatStrictReg
};
