import { isRealNumber, float, percentage } from "@/calc/number";

function formatRank(val) {
  if (!isRealNumber(val)) {
    return "--";
  }
  return `$No.${val}`;
}

function formatWithUnit(val, unitStr = "", precision = 2) {
  if (!isRealNumber(val)) {
    return "--";
  }
  let num;
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

function formatToFloat(val, plusSign = "", precision = 2, radio = 1) {
  if (!isRealNumber(val)) { 
    return "--"; 
  } 
  const num = val / radio;
  if (num > 0) {
    return `${plusSign}${float(num, precision)}`;
  } 
  return float(num, precision);
}

function formatToPercent(val, plusSign = "", precision = 2, radio = 1) { 
  if (!isRealNumber(val)) { 
    return "--"; 
  } 
  const num = val / radio; 
  if (num > 0) { 
    return `${plusSign}${percentage(num, precision)}`; 
  }
  return percentage(num, precision); 
}

export { formatRank, formatWithUnit, formatToFloat, formatToPercent };
