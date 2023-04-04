function isRealNumber(num: any): boolean {
  return typeof num === "number" && !isNaN(num);
}

function float(
  num: number | string | undefined | null,
  precision: number | string = 2,
  placeholder: string = "--"
): string {
  const accuracy = isRealNumber(precision) ? precision : 2; // default digit
  if (!isRealNumber(num)) {
    return placeholder;
  }
  return (num as number).toFixed(accuracy as number);
}

function percentage(
  num: number | string | undefined | null,
  precision: number | string = 2,
  placeholder: string = "--"
): string {
  const accuracy = isRealNumber(precision) ? precision : 2;
  if (!isRealNumber(num)) {
    return placeholder;
  }
  return `${((num as number) * 100).toFixed(accuracy as number)}%`;
}

/**
 * Implement rounding down to a specified number of decimal places
 * 实现指定小数点位数的向下取值(不进位舍入)
 * 
 */
function decimalFloor(num: number, decimalPrecision: number = 2): string {
  const multiple = 10 ** decimalPrecision;
  return float(Math.floor(num * multiple) / multiple, decimalPrecision);
}

function decimalRound(num: number, decimalPrecision: number = 2): string {
  const multiple = 10 ** decimalPrecision;
  return float(Math.round(num * multiple) / multiple, decimalPrecision);
}

function decimalCeil(num: number, decimalPrecision: number = 2): string {
  const multiple = 10 ** decimalPrecision;
  return float(Math.ceil(num * multiple) / multiple, decimalPrecision);
}

export { isRealNumber, float, percentage, decimalFloor, decimalRound, decimalCeil };
