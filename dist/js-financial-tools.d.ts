declare function isRealNumber(num: any): boolean;
declare function float(num: number, precision: number, placeholder?: string): string;
declare function percentage(num: number, precision: number, placeholder?: string): string;

declare const number_isRealNumber: typeof isRealNumber;
declare const number_float: typeof float;
declare const number_percentage: typeof percentage;
declare namespace number {
  export {
    number_isRealNumber as isRealNumber,
    number_float as float,
    number_percentage as percentage,
  };
}

declare function calcMax3Concentration(arr: (number | string | undefined)[]): number | undefined;

declare const fund_calcMax3Concentration: typeof calcMax3Concentration;
declare namespace fund {
  export {
    fund_calcMax3Concentration as calcMax3Concentration,
  };
}

declare function formatRank(val: number | undefined): string;
declare function formatLongText(val: string | undefined, limit: number): string;
declare function formatWithUnit(val: number | undefined, unitStr?: string, precision?: number): string;
declare function formatToMonetaryShape(val: number | undefined, precision?: number): string;
declare function formatToFloat(val: number | undefined, plusSign?: string, precision?: number, scale?: number): string;
declare function formatToPercent(val: number | undefined, plusSign?: string, precision?: number, scale?: number): string;

declare const formatter_formatRank: typeof formatRank;
declare const formatter_formatLongText: typeof formatLongText;
declare const formatter_formatWithUnit: typeof formatWithUnit;
declare const formatter_formatToMonetaryShape: typeof formatToMonetaryShape;
declare const formatter_formatToFloat: typeof formatToFloat;
declare const formatter_formatToPercent: typeof formatToPercent;
declare namespace formatter {
  export {
    formatter_formatRank as formatRank,
    formatter_formatLongText as formatLongText,
    formatter_formatWithUnit as formatWithUnit,
    formatter_formatToMonetaryShape as formatToMonetaryShape,
    formatter_formatToFloat as formatToFloat,
    formatter_formatToPercent as formatToPercent,
  };
}

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

declare const acquire_getIntPartLength: typeof getIntPartLength;
declare const acquire_getMonetaryUnit: typeof getMonetaryUnit;
declare const acquire_getMaxDate: typeof getMaxDate;
declare const acquire_getMinDate: typeof getMinDate;
declare const acquire_getTimeRangeIntersection: typeof getTimeRangeIntersection;
declare const acquire_checkQuarterInRange: typeof checkQuarterInRange;
declare const acquire_checkYearInRange: typeof checkYearInRange;
declare const acquire_createQuarterArr: typeof createQuarterArr;
declare namespace acquire {
  export {
    acquire_getIntPartLength as getIntPartLength,
    acquire_getMonetaryUnit as getMonetaryUnit,
    acquire_getMaxDate as getMaxDate,
    acquire_getMinDate as getMinDate,
    acquire_getTimeRangeIntersection as getTimeRangeIntersection,
    acquire_checkQuarterInRange as checkQuarterInRange,
    acquire_checkYearInRange as checkYearInRange,
    acquire_createQuarterArr as createQuarterArr,
  };
}

declare function gt(a: number, b: number): boolean;
declare function lte(a: number, b: number): boolean;

declare const compare_gt: typeof gt;
declare const compare_lte: typeof lte;
declare namespace compare {
  export {
    compare_gt as gt,
    compare_lte as lte,
  };
}

declare function completeStockTimeDataArr(TimeDataArr: number[][], itemArrLength?: number): number[][];
declare type TimeDataObj = {
    date: string;
    time: string;
    change: number;
    valuation: number;
};
declare type ResObj = {
    x: number;
    y: number | undefined;
    z: number | undefined;
};
declare function completeStockTimeDataObjArr(TimeDataObjArr: TimeDataObj[]): ResObj[];

declare const complete_completeStockTimeDataArr: typeof completeStockTimeDataArr;
declare const complete_completeStockTimeDataObjArr: typeof completeStockTimeDataObjArr;
declare namespace complete {
  export {
    complete_completeStockTimeDataArr as completeStockTimeDataArr,
    complete_completeStockTimeDataObjArr as completeStockTimeDataObjArr,
  };
}

declare const gtZeroNumReg: RegExp;
declare const gteZeroNumReg: RegExp;
declare const gtZeroNumStrictReg: RegExp;
declare const gteZeroNumStrictReg: RegExp;
declare const intReg: RegExp;
declare const gtZeroIntReg: RegExp;
declare const gteZeroIntReg: RegExp;
declare const floatReg: RegExp;
declare const floatStrictReg: RegExp;
declare const gtZeroFloatReg: RegExp;
declare const gteZeroFloatReg: RegExp;
declare const gtZeroFloatStrictReg: RegExp;
declare const specialCharacterReg: RegExp;

declare const reg_gtZeroNumReg: typeof gtZeroNumReg;
declare const reg_gteZeroNumReg: typeof gteZeroNumReg;
declare const reg_gtZeroNumStrictReg: typeof gtZeroNumStrictReg;
declare const reg_gteZeroNumStrictReg: typeof gteZeroNumStrictReg;
declare const reg_intReg: typeof intReg;
declare const reg_gtZeroIntReg: typeof gtZeroIntReg;
declare const reg_gteZeroIntReg: typeof gteZeroIntReg;
declare const reg_floatReg: typeof floatReg;
declare const reg_floatStrictReg: typeof floatStrictReg;
declare const reg_gtZeroFloatReg: typeof gtZeroFloatReg;
declare const reg_gteZeroFloatReg: typeof gteZeroFloatReg;
declare const reg_gtZeroFloatStrictReg: typeof gtZeroFloatStrictReg;
declare const reg_specialCharacterReg: typeof specialCharacterReg;
declare namespace reg {
  export {
    reg_gtZeroNumReg as gtZeroNumReg,
    reg_gteZeroNumReg as gteZeroNumReg,
    reg_gtZeroNumStrictReg as gtZeroNumStrictReg,
    reg_gteZeroNumStrictReg as gteZeroNumStrictReg,
    reg_intReg as intReg,
    reg_gtZeroIntReg as gtZeroIntReg,
    reg_gteZeroIntReg as gteZeroIntReg,
    reg_floatReg as floatReg,
    reg_floatStrictReg as floatStrictReg,
    reg_gtZeroFloatReg as gtZeroFloatReg,
    reg_gteZeroFloatReg as gteZeroFloatReg,
    reg_gtZeroFloatStrictReg as gtZeroFloatStrictReg,
    reg_specialCharacterReg as specialCharacterReg,
  };
}

declare const _default: {
    acquire: typeof acquire;
    compare: typeof compare;
    complete: typeof complete;
    reg: typeof reg;
    formatter: typeof formatter;
    number: typeof number;
    fund: typeof fund;
};

export { _default as default };
