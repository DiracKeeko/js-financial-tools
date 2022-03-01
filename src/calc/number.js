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

export { isRealNumber, float };
