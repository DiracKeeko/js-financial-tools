declare type DateRange = [number, number];
declare type DateStrRange = [string, string] | [];
declare function getIntPartLength(num: number): number;
declare function getMonetaryUnit(val: number): "亿" | "万" | "";
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

export { checkQuarterInRange, checkYearInRange, createQuarterArr, getIntPartLength, getMaxDate, getMinDate, getMonetaryUnit, getTimeRangeIntersection };
