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

function getMaxDate(dateArr) {
  // arr = ["2022-01-01", "2019-10-12", "2018-05-18"];
  const timestampArr = dateArr.map((item) => new Date(item).getTime());
  const maxTimestamp = Math.max(...timestampArr);
  const maxTimeIndex = timestampArr.indexOf(maxTimestamp);
  return dateArr[maxTimeIndex];
}

function getMinDate(dateArr) {
  const timestampArr = dateArr.map((item) => new Date(item).getTime());
  const minTimestamp = Math.min(...timestampArr);
  const minTimeIndex = timestampArr.indexOf(minTimestamp);
  return dateArr[minTimeIndex];
}

export { getIntPartLength, getMonetaryUnit, getMaxDate, getMinDate };
