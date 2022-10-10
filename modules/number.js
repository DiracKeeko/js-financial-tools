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

export { float, isRealNumber, percentage };
