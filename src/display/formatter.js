import { isRealNumber, float, percentage } from "@/calc/number";

import { getIntPartLength } from "@/util/acquire";

function formatRank(val) {
  if (!isRealNumber(val)) {
    return "--";
  }
  return `No.${val}`;
}

function formatWithUnit(val, unitStr = "", precision = 2) {
  if (!isRealNumber(val)) {
    return "--";
  }
  let num = val;
  switch (unitStr) {
    case "万":
      num = float(val / 10 ** 4, precision);
      break;
    case "亿":
      num = float(val / 10 ** 8, precision);
      break;
    default:
      break;
  }
  return `${num}${unitStr}`;
}

function formatToMonetaryShape(val, precision = 2) {
  if (!isRealNumber(val)) {
    return "--";
  }
  const intPartLength = getIntPartLength(val);
  if (intPartLength > 8) {
    const num = val / 10 ** 8;
    return `${float(num, precision)}亿`;
  }
  if (intPartLength > 4) {
    const num = val / 10 ** 4;
    return `${float(num, precision)}万`;
  }
  return `${float(val, precision)}`;
}

function formatToFloat(val, plusSign = "", precision = 2, scale = 1) {
  if (!isRealNumber(val)) {
    return "--";
  }
  const num = val / scale;
  if (num > 0) {
    return `${plusSign}${float(num, precision)}`;
  }
  return float(num, precision);
}

function formatToPercent(val, plusSign = "", precision = 2, scale = 1) {
  if (!isRealNumber(val)) {
    return "--";
  }
  const num = val / scale;
  if (num > 0) {
    return `${plusSign}${percentage(num, precision)}`;
  }
  return percentage(num, precision);
}

export {
  formatRank,
  formatWithUnit,
  formatToMonetaryShape,
  formatToFloat,
  formatToPercent,
};
