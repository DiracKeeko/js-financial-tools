import { isRealNumber } from "@/calc/number";

import {
  getDateTime,
  wholeQuarterRangeMap,
  wholeYearRangeArr,
} from "./constant";

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

/**
 *
 * @param {Array} dateArr
 * case1: dateArr = ["2022-01-01", "2019-10-12", "2018-05-18"];
 * @returns maxDateStr
 * case1 result: "2022-01-01"
 */
function getMaxDate(dateArr) {
  const timestampArr = dateArr.map((item) => getDateTime(item));
  const maxTimestamp = Math.max(...timestampArr);
  const maxTimeIndex = timestampArr.indexOf(maxTimestamp);
  return dateArr[maxTimeIndex];
}

function getMinDate(dateArr) {
  const timestampArr = dateArr.map((item) => getDateTime(item));
  const minTimestamp = Math.min(...timestampArr);
  const minTimeIndex = timestampArr.indexOf(minTimestamp);
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
function checkQuarterInRange(year, quarter, [startDate, endDate]) {
  const startTimeStamp = getDateTime(startDate);
  const endTimeStamp = getDateTime(endDate);
  const quarterStartDate = `${year}-${wholeQuarterRangeMap[quarter][0]}`;
  const quarterEndDate = `${year}-${wholeQuarterRangeMap[quarter][1]}`;
  const quarterStartTimeStamp = getDateTime(quarterStartDate);
  const quarterEndTimeStamp = getDateTime(quarterEndDate);
  if (
    quarterStartTimeStamp >= startTimeStamp &&
    quarterStartTimeStamp <= endTimeStamp &&
    quarterEndTimeStamp >= startTimeStamp &&
    quarterEndTimeStamp <= endTimeStamp
  ) {
    return true;
  }
  return false;
}

function checkYearInRange(year, [startDate, endDate]) {
  const startTimeStamp = getDateTime(startDate);
  const endTimeStamp = getDateTime(endDate);
  const yearStartDate = `${year}-${wholeYearRangeArr[0]}`;
  const yearEndDate = `${year}-${wholeYearRangeArr[1]}`;
  const yearStartTimeStamp = getDateTime(yearStartDate);
  const yearEndTimeStamp = getDateTime(yearEndDate);
  if (
    yearStartTimeStamp >= startTimeStamp &&
    yearStartTimeStamp <= endTimeStamp &&
    yearEndTimeStamp >= startTimeStamp &&
    yearEndTimeStamp <= endTimeStamp
  ) {
    return true;
  }
  return false;
}

export {
  getIntPartLength,
  getMonetaryUnit,
  getMaxDate,
  getMinDate,
  checkQuarterInRange,
  checkYearInRange,
};
