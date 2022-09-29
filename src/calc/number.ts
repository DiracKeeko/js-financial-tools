function isRealNumber(num: any): boolean {
  return typeof num === "number" && !isNaN(num);
}

function float(
  num: number,
  precision: number,
  placeholder: string = "--"
): string {
  const accuracy = isRealNumber(precision) ? precision : 2; // default digit
  if (!isRealNumber(num)) {
    return placeholder;
  }
  return num.toFixed(accuracy);
}

function percentage(
  num: number,
  precision: number,
  placeholder: string = "--"
): string {
  const accuracy = isRealNumber(precision) ? precision : 2;
  if (!isRealNumber(num)) {
    return placeholder;
  }
  return `${(num * 100).toFixed(accuracy)}%`;
}

export { isRealNumber, float, percentage };
