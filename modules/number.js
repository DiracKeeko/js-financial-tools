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

export { decimalCeil, decimalFloor, decimalRound, float, isRealNumber, percentage };
