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

export { isRealNumber, float, percentage };
