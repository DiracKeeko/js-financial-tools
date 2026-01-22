declare type DateRange = [number, number];
declare type DateStrRange = [string, string] | [];
declare function getIntPartLength(num: number): number;
declare function getMonetaryUnit(val: number | string | undefined): "" | "万" | "亿";
/**
 *
 * @param {Array} dateArr
 * case1: dateArr = ["2022-01-01", "2019-10-12", "2018-05-18"];
 * @returns maxDateStr
 * case1 result: "2022-01-01"
 */
declare function getMaxDate(dateArr: string[]): string;
declare function getMinDate(dateArr: string[]): string;
/**
 * @param {[startTimestamp1, endTimestamp1]} range1
 * @param {[startTimestamp2, endTimestamp2]} range2
 *
 * @returns [startTimestamp, endTimeStamp] || []
 */
declare function getTimeRangeIntersection(range1: DateRange, range2: DateRange): number[];
/**
 * Determine whether the current time falls within the specified interval
 *  get result of (startTime <= currentTime && currentTime < endTime)
 * @param {[string, string]} timeRange
 * case1: ["09:00", "17:00"]
 * case2: ["13:00", "15:30"]
 */
declare const checkCurrentTimeInRange: (timeRange: [
    string,
    string
] | readonly [
    string,
    string
]) => boolean;
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
declare function checkQuarterInRange(year: string | number, quarter: string, dateRange: DateStrRange): boolean;
declare function checkYearInRange(year: string | number, dateRange: DateStrRange): boolean;
/**
 * Create a full quarter array that includes the dateRange
 *
 * @param {Array} dateRange = [startDate, endDate]
 * @returns ["2019Q1", "2019Q2", "2019Q3", "2019Q4", "2020Q1"]
 */
declare function createQuarterArr(dateRange: DateStrRange): string[];
/**
 * Get the incoming date's week number within the date's month;
 */
declare function getWeekNumberInTheDateMonth(incomingDate: Date | string | number): number;
/**
 * Calculate the string length for some strings containing East Asian characters.
 * (such as Chinese characters and Japanese characters)
 *
 * The length of letters, numbers, and whitespace characters is 1, and the length of other characters is 2.
 *
 */
declare function calcAsianStringLength(str: string): number;

export { calcAsianStringLength, checkCurrentTimeInRange, checkQuarterInRange, checkYearInRange, createQuarterArr, getIntPartLength, getMaxDate, getMinDate, getMonetaryUnit, getTimeRangeIntersection, getWeekNumberInTheDateMonth };
