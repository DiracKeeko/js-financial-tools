(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.jsFinancialTools = factory());
})(this, (function () { 'use strict';

    function isRealNumber(num) {
        return typeof num === "number" && !isNaN(num);
    }
    function float(num, precision = 2, placeholder = "--") {
        const accuracy = isRealNumber(precision) ? precision : 2; // default digit
        if (!isRealNumber(num)) {
            return placeholder;
        }
        return num.toFixed(accuracy);
    }
    function percentage(num, precision = 2, placeholder = "--") {
        const accuracy = isRealNumber(precision) ? precision : 2;
        if (!isRealNumber(num)) {
            return placeholder;
        }
        return `${(num * 100).toFixed(accuracy)}%`;
    }
    /**
     * Implement rounding down to a specified number of decimal places
     * 实现指定小数点位数的向下取值(不进位舍入)
     *
     */
    function decimalFloor(num, decimalPrecision = 2) {
        const multiple = Math.pow(10, decimalPrecision);
        return float(Math.floor(num * multiple) / multiple, decimalPrecision);
    }
    function decimalRound(num, decimalPrecision = 2) {
        const multiple = Math.pow(10, decimalPrecision);
        return float(Math.round(num * multiple) / multiple, decimalPrecision);
    }
    function decimalCeil(num, decimalPrecision = 2) {
        const multiple = Math.pow(10, decimalPrecision);
        return float(Math.ceil(num * multiple) / multiple, decimalPrecision);
    }

    var number = /*#__PURE__*/Object.freeze({
        __proto__: null,
        isRealNumber: isRealNumber,
        float: float,
        percentage: percentage,
        decimalFloor: decimalFloor,
        decimalRound: decimalRound,
        decimalCeil: decimalCeil
    });

    function calcMax3Concentration(arr) {
        const numberArr = arr.filter((item) => isRealNumber(item));
        if (numberArr.length === 0) {
            return undefined;
        }
        numberArr.sort((a, b) => b - a);
        const max3Arr = numberArr.slice(0, 3);
        const sumMax3 = max3Arr.reduce((sum, item) => sum + item, 0);
        const sumAll = numberArr.reduce((sum, item) => sum + item, 0);
        return sumMax3 / sumAll;
    }

    var fund = /*#__PURE__*/Object.freeze({
        __proto__: null,
        calcMax3Concentration: calcMax3Concentration
    });

    var calc = /*#__PURE__*/Object.freeze({
        __proto__: null,
        number: number,
        fund: fund
    });

    function getDateTime(date) {
        return new Date(date).getTime();
    }
    const wholeQuarterRangeMap = {
        Q1: ["01-01", "03-31"],
        Q2: ["04-01", "06-30"],
        Q3: ["07-01", "09-30"],
        Q4: ["10-01", "12-31"],
    };
    const wholeYearRangeArr = ["01-01", "12-31"];

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
     * @param {[startTimestamp1, endTimestamp1]} range1
     * @param {[startTimestamp2, endTimestamp2]} range2
     *
     * @returns [startTimestamp, endTimeStamp] || []
     */
    function getTimeRangeIntersection(range1, range2) {
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
    function checkQuarterInRange(year, quarter, dateRange) {
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
        if (quarterStartTimeStamp >= startTimeStamp &&
            quarterStartTimeStamp <= endTimeStamp &&
            quarterEndTimeStamp >= startTimeStamp &&
            quarterEndTimeStamp <= endTimeStamp) {
            return true;
        }
        return false;
    }
    function checkYearInRange(year, dateRange) {
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
        if (yearStartTimeStamp >= startTimeStamp &&
            yearStartTimeStamp <= endTimeStamp &&
            yearEndTimeStamp >= startTimeStamp &&
            yearEndTimeStamp <= endTimeStamp) {
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
    function createQuarterArr(dateRange) {
        const quarterArr = [];
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

    var acquire = /*#__PURE__*/Object.freeze({
        __proto__: null,
        getIntPartLength: getIntPartLength,
        getMonetaryUnit: getMonetaryUnit,
        getMaxDate: getMaxDate,
        getMinDate: getMinDate,
        getTimeRangeIntersection: getTimeRangeIntersection,
        checkQuarterInRange: checkQuarterInRange,
        checkYearInRange: checkYearInRange,
        createQuarterArr: createQuarterArr
    });

    function formatRank(val) {
        if (!isRealNumber(val)) {
            return "--";
        }
        return `No.${val}`;
    }
    function formatLongText(val, limit = 3) {
        if (!val) {
            return "--";
        }
        if (val.length > limit) {
            return `${val.slice(0, limit)}...`;
        }
        return val;
    }
    function formatWithUnit(val, unitStr = "", precision = 2) {
        if (!isRealNumber(val)) {
            return "--";
        }
        let numStr;
        switch (unitStr) {
            case "万":
                numStr = float(val / Math.pow(10, 4), precision);
                break;
            case "亿":
                numStr = float(val / Math.pow(10, 8), precision);
                break;
            default:
                numStr = String(val);
                break;
        }
        return `${numStr}${unitStr}`;
    }
    function formatToMonetaryShape(val, precision = 2) {
        if (!isRealNumber(val)) {
            return "--";
        }
        const intPartLength = getIntPartLength(val);
        if (intPartLength > 8) {
            const num = val / Math.pow(10, 8);
            return `${float(num, precision)}亿`;
        }
        if (intPartLength > 4) {
            const num = val / Math.pow(10, 4);
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
    function trimJsonStr(jsonStr) {
        return jsonStr
            .replace(/\n/g, "")
            .replace(/\r/g, "")
            .replace(/\s|\xA0/g, "");
    }

    var formatter = /*#__PURE__*/Object.freeze({
        __proto__: null,
        formatRank: formatRank,
        formatLongText: formatLongText,
        formatWithUnit: formatWithUnit,
        formatToMonetaryShape: formatToMonetaryShape,
        formatToFloat: formatToFloat,
        formatToPercent: formatToPercent,
        trimJsonStr: trimJsonStr
    });

    var display = /*#__PURE__*/Object.freeze({
        __proto__: null,
        formatter: formatter
    });

    function gt(a, b) {
        if (!isRealNumber(b)) {
            return true;
        }
        if (!isRealNumber(a) && isRealNumber(b)) {
            return false;
        }
        return a > b;
    }
    function lte(a, b) {
        if (!isRealNumber(b)) {
            return true;
        }
        if (!isRealNumber(a) && isRealNumber(b)) {
            return false;
        }
        return a <= b;
    }

    var compare = /*#__PURE__*/Object.freeze({
        __proto__: null,
        gt: gt,
        lte: lte
    });

    /*
      A complete stock trading timeline is shown below:
      // time format: YYYYMMDDHHmm
      [
        202108220900, 202108220901, ..., 202108221129, 202108221130,
        202108221301, 202108221302, ..., 202108221459, 202108221500,
      ]

      Function completeStockTimeDataArr is used to complete the time data of sotck trading backwards.

      Examples are as follows

      TimeDataArr :
      [ [202108220900, numberA1], [202108220901, numberA2] ] // itemArrLength = 2
      return data :
      [ [202108220900, numberA1], [202108220901, numberA2], ..., [202108221459, undefined], [202108221500, undefined] ]
      // itemArrLength = 2

      TimeDataArr :
      [ [202108220900, numberA1, numberB1], [202108220901, numberA2, numberB2] ] // itemArrLength = 3
      return data :
      [ [202108220900, numberA1, numberB1], [202108220901, numberA2, numberB2], ..., [202108221500, undefined, undefined] ]
      // itemArrLength = 3
    */
    function completeStockTimeDataArr(TimeDataArr, itemArrLength = 2) {
        const data = TimeDataArr.map((item) => {
            return item.slice(0, itemArrLength);
        });
        const undefinedArr = new Array(itemArrLength - 1).fill(undefined);
        const dataMaxStr = data[data.length - 1].toString();
        const dataMaxStrPre = dataMaxStr.slice(0, 8);
        const dataMaxStrAfter = dataMaxStr.slice(8, 12);
        const hour = Number(dataMaxStrAfter.slice(0, 2));
        const minute = Number(dataMaxStrAfter.slice(2, 4));
        let h = hour;
        let m = minute + 1;
        if (h === 11 && m === 31) {
            h = 13;
            m = 1;
        }
        while (h < 15) {
            while (m < 60) {
                const timeNumber = Number(`${dataMaxStrPre}${h < 10 ? `0${h}` : h}${m < 10 ? `0${m}` : m}`);
                data.push([timeNumber, ...undefinedArr]);
                m += 1;
                if (h === 11 && m > 30) {
                    h += 1;
                    break;
                }
            }
            m = h === 12 ? 1 : 0;
            h += 1;
            h === 15 && data.push([Number(`${dataMaxStrPre}1500`), ...undefinedArr]);
        }
        return data;
    }
    function completeStockTimeDataObjArr(TimeDataObjArr) {
        const data = TimeDataObjArr.map((item) => {
            return {
                x: Number(`${item.date}${item.time.slice(0, 4)}`),
                y: item.change,
                z: item.valuation,
            };
        });
        const dataMaxStrPre = TimeDataObjArr[TimeDataObjArr.length - 1].date;
        const dataMaxStrAfter = TimeDataObjArr[TimeDataObjArr.length - 1].time.slice(0, 4);
        const hour = Number(dataMaxStrAfter.slice(0, 2));
        const minute = Number(dataMaxStrAfter.slice(2, 4));
        let h = hour;
        let m = minute + 1;
        if (h === 11 && m === 31) {
            h = 13;
            m = 1;
        }
        while (h < 15) {
            while (m < 60) {
                const timeNumber = Number(`${dataMaxStrPre}${h < 10 ? `0${h}` : h}${m < 10 ? `0${m}` : m}`);
                data.push({ x: timeNumber, y: undefined, z: undefined });
                m += 1;
                if (h === 11 && m > 30) {
                    h += 1;
                    break;
                }
            }
            m = h === 12 ? 1 : 0;
            h += 1;
            h === 15 &&
                data.push({
                    x: Number(`${dataMaxStrPre}1500`),
                    y: undefined,
                    z: undefined,
                });
        }
        return data;
    }

    var complete = /*#__PURE__*/Object.freeze({
        __proto__: null,
        completeStockTimeDataArr: completeStockTimeDataArr,
        completeStockTimeDataObjArr: completeStockTimeDataObjArr
    });

    const gtZeroNumReg = /^([1-9]\d*(\.\d*[1-9]\d*)?|0\.\d*[1-9]\d*)$/; // allow "11.230", ban "11."
    const gteZeroNumReg = /^([1-9]\d*(\.\d*[1-9]\d*)?|0\.\d+|0)$/; // allow "0.00", ban "0."
    const gtZeroNumStrictReg = /^([1-9]\d*(\.\d*[1-9]\d*)?|0\.\d*[1-9])$/; // allow "11.23", ban "11.", ban "11.230"
    const gteZeroNumStrictReg = /^([1-9]\d*(\.\d*[1-9]\d*)?|0\.\d*[1-9]|0)$/; // allow "0", ban "0.", ban "0.00"
    const intReg = /^(-?[1-9]\d*|0)$/;
    const gtZeroIntReg = /^([1-9]\d*)$/;
    const gteZeroIntReg = /^([1-9]\d*|0)$/;
    // ↓ float number must have a point
    const floatReg = /^(-?[1-9]\d*\.\d+|-?0\.\d*[1-9]\d*|0\.0+)$/; // allow "1.23", allow "-0.1", allow "0.00", ban "-0.00"
    const floatStrictReg = /^(-?[1-9]\d*\.\d+|-?0\.\d*[1-9])$/; // allow "1.23", allow "-0.1", ban "1.10", ban "1."
    const gtZeroFloatReg = /^([1-9]\d*\.\d+|0\.\d*[1-9]\d*)$/; // allow "11.230", ban "11", ban "11."
    const gteZeroFloatReg = /^([1-9]\d*|0)\.\d+$/; // allow "0.00", ban "0", ban "0."
    const gtZeroFloatStrictReg = /^([1-9]\d*|0)\.\d*[1-9]$/; // allow "11.23", ban "11.", ban "11.230"
    // const gteZeroFloatStrictReg = null; // float nunmber 0 conflict with strict mode, this rule does not exist
    // special character in ASCII table
    const specialCharacterReg = /[\x21-\x2F\x3A-\x40\x5B-\x60\x7B-\x7E]+/;

    var reg = /*#__PURE__*/Object.freeze({
        __proto__: null,
        gtZeroNumReg: gtZeroNumReg,
        gteZeroNumReg: gteZeroNumReg,
        gtZeroNumStrictReg: gtZeroNumStrictReg,
        gteZeroNumStrictReg: gteZeroNumStrictReg,
        intReg: intReg,
        gtZeroIntReg: gtZeroIntReg,
        gteZeroIntReg: gteZeroIntReg,
        floatReg: floatReg,
        floatStrictReg: floatStrictReg,
        gtZeroFloatReg: gtZeroFloatReg,
        gteZeroFloatReg: gteZeroFloatReg,
        gtZeroFloatStrictReg: gtZeroFloatStrictReg,
        specialCharacterReg: specialCharacterReg
    });

    var util = /*#__PURE__*/Object.freeze({
        __proto__: null,
        acquire: acquire,
        compare: compare,
        complete: complete,
        reg: reg
    });

    var index = Object.assign(Object.assign(Object.assign({}, calc), display), util);

    return index;

}));
