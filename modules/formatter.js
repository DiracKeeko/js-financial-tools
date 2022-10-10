import { isRealNumber, float, percentage } from './number.js';
import { getIntPartLength } from './acquire.js';
import './constant.js';

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

export { formatLongText, formatRank, formatToFloat, formatToMonetaryShape, formatToPercent, formatWithUnit };
