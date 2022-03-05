function isRealNumber(num) {
  return typeof num === "number" && !isNaN(num);
}

function float(num, precision, placeholder = "--") {
  const accuracy = isRealNumber(precision) ? precision : 2; // default digit
  if (!isRealNumber(num)) {
    return placeholder;
  }
  return num.toFixed(accuracy);
}

function percentage(num, precision, placeholder = "--") {
  const accuracy = isRealNumber(precision) ? precision : 2;
  if (!isRealNumber(num)) {
    return placeholder;
  }
  return `${(num * 100).toFixed(accuracy)}%`;
}

function getIntPartLength(num) {
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

export { isRealNumber, float, percentage, getIntPartLength };
