import { isRealNumber } from "@/calc/number";

import {
  getDateTime,
  wholeQuarterRangeMap,
  wholeYearRangeArr,
} from "./constant";

type DateRange = [number, number];
type DateStrRange = [string, string] | [];

function getIntPartLength(num: number): number {
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function getMonetaryUnit(val: number | string | undefined) {
  if (isRealNumber(val)) {
    const intPartLength = getIntPartLength(val as number);
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
function getMaxDate(dateArr: string[]): string {
  const timestampArr = dateArr.map((item) => getDateTime(item));
  const maxTimestamp = Math.max(...timestampArr);
  const maxTimeIndex = timestampArr.indexOf(maxTimestamp);
  return dateArr[maxTimeIndex];
}

function getMinDate(dateArr: string[]): string {
  const timestampArr = dateArr.map((item) => getDateTime(item));
  const minTimestamp = Math.min(...timestampArr);
  const minTimeIndex = timestampArr.indexOf(minTimestamp);
  return dateArr[minTimeIndex];
}

/**
 * @param {[startTimestamp1, endTimestamp1]} range1
 * @param {[startTimestamp2, endTimestamp2]} range2
 *
 * @returns [startTimestamp, endTimeStamp] || []
 */
function getTimeRangeIntersection(
  range1: DateRange,
  range2: DateRange
): number[] {
  const [startTimestamp1, endTimestamp1] = range1;
  const [startTimestamp2, endTimestamp2] = range2;
  const startTimestamp = Math.max(startTimestamp1, startTimestamp2);
  const endTimestamp = Math.min(endTimestamp1, endTimestamp2);
  if (startTimestamp < endTimestamp) {
    return [startTimestamp, endTimestamp];
  }
  return [];
}

/**
 * Helper function: 
 *  Converts a time string in 'HH:mm' format to the total number of minutes for the current day.
 * @param timeStr
 * case1: "09:30"
 */
const getMinutesFromTimeStr = (timeStr: string): number => {
  const [hour, minute] = timeStr.split(":").map(Number);
  return hour * 60 + minute;
};

/**
 * Determine whether the current time falls within the specified interval
 *  get result of (startTime <= currentTime && currentTime < endTime)
 * @param {[string, string]} timeRange
 * case1: ["09:00", "17:00"]
 * case2: ["13:00", "15:30"]
 */
const checkTimeInRange = (
  timeRange: [string, string] | readonly [string, string]
): boolean => {
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const startMinutes = getMinutesFromTimeStr(timeRange[0]);
  const endMinutes = getMinutesFromTimeStr(timeRange[1]);

  return startMinutes <= currentMinutes && currentMinutes < endMinutes;
};

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
function checkQuarterInRange(
  year: string | number,
  quarter: string,
  dateRange: DateStrRange
): boolean {
  if (dateRange.length === 0) {
    return false;
  }
  const [startDate, endDate] = dateRange;
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

function checkYearInRange(
  year: string | number,
  dateRange: DateStrRange
): boolean {
  if (dateRange.length === 0) {
    return false;
  }
  const [startDate, endDate] = dateRange;
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

/**
 * Create a full quarter array that includes the dateRange
 *
 * @param {Array} dateRange = [startDate, endDate]
 * @returns ["2019Q1", "2019Q2", "2019Q3", "2019Q4", "2020Q1"]
 */
function createQuarterArr(dateRange: DateStrRange): string[] {
  const quarterArr: string[] = [];
  if (dateRange.length === 0) {
    return quarterArr;
  }
  const [startDate, endDate] = dateRange;
  const yearArr = []; // ["2019", "2020", ...]
  const startYear = startDate.split("-")[0];
  const endYear = endDate.split("-")[0];
  for (let i = parseInt(startYear, 10); i <= parseInt(endYear, 10); i++) {
    yearArr.push(i.toString());
    const fullQuarter = ["Q1", "Q2", "Q3", "Q4"];
    fullQuarter.forEach((item) => {
      if (checkQuarterInRange(i, item, dateRange)) {
        const quarterStr = `${i}${item}`;
        quarterArr.push(quarterStr);
      }
    });
  }
  return quarterArr;
}

/**
 * Get the incoming date's week number within the date's month;
 */
/* 
  dayNum:
    0 (Sunday)
    1 (Monday)
    2 (Tuesday)
    3 (Wednesday)
    4 (Thursday)
    5 (Friday)
    6 (Saturday)
*/
function getWeekNumberInTheDateMonth(
  incomingDate: Date | string | number
): number {
  const curDate = new Date(incomingDate);
  const dayNum: number = curDate.getDay();
  const dateNum: number = curDate.getDate();
  return Math.ceil((dateNum + 6 - dayNum) / 7);
}

/**
 * Calculate the string length for some strings containing East Asian characters.
 * (such as Chinese characters and Japanese characters)
 *
 * The length of letters, numbers, and whitespace characters is 1, and the length of other characters is 2.
 *
 */
function calcAsianStringLength(str: string): number {
  let len = 0;
  const lengthOneReg = /[A-Za-z0-9\s]/;
  for (let i = 0; i < str.length; i++) {
    const el = str[i];
    if (lengthOneReg.test(el)) {
      len += 1;
    } else {
      len += 2;
    }
  }
  return len;
}

export {
  getIntPartLength,
  getMonetaryUnit,
  getMaxDate,
  getMinDate,
  getTimeRangeIntersection,
  checkTimeInRange,
  checkQuarterInRange,
  checkYearInRange,
  createQuarterArr,
  getWeekNumberInTheDateMonth,
  calcAsianStringLength,
};
