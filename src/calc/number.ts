function isRealNumber(num: any): boolean {
  return typeof num === "number" && !isNaN(num);
}

function float(
  num: number | string | undefined | null,
  precision: number = 2,
  placeholder: string = "--"
): string {
  const accuracy = isRealNumber(precision) ? precision : 2; // default digit
  if (!isRealNumber(num)) {
    return placeholder;
  }
  return (num as number).toFixed(accuracy);
}

function percentage(
  num: number | string | undefined | null,
  precision: number = 2,
  placeholder: string = "--"
): string {
  const accuracy = isRealNumber(precision) ? precision : 2;
  if (!isRealNumber(num)) {
    return placeholder;
  }
  return `${((num as number) * 100).toFixed(accuracy)}%`;
}

export { isRealNumber, float, percentage };
