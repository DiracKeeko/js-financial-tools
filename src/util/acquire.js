import { isRealNumber } from "@/calc/number";

function getIntPartLength(num) {
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function getMonetaryUnit(val) {
  if (isRealNumber(val)) {
    const intPartLength = getIntPartLength(val);
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

export { getIntPartLength, getMonetaryUnit };
