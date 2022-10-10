import { isRealNumber, float, percentage } from "@/calc/number";

import { getIntPartLength } from "@/util/acquire";

function formatRank(val: number | string | undefined): string {
  if (!isRealNumber(val)) {
    return "--";
  }
  return `No.${val}`;
}

function formatLongText(val: string | undefined, limit: number = 3): string {
  if (!val) {
    return "--";
  }
  if (val.length > limit) {
    return `${val.slice(0, limit)}...`;
  }
  return val;
}

function formatWithUnit(
  val: number | undefined,
  unitStr: string = "",
  precision: number = 2
): string {
  if (!isRealNumber(val)) {
    return "--";
  }
  let numStr: string;
  switch (unitStr) {
    case "万":
      numStr = float((val as number) / 10 ** 4, precision);
      break;
    case "亿":
      numStr = float((val as number) / 10 ** 8, precision);
      break;
    default:
      numStr = String(val);
      break;
  }
  return `${numStr}${unitStr}`;
}

function formatToMonetaryShape(
  val: number | undefined | string,
  precision: number = 2
): string {
  if (!isRealNumber(val)) {
    return "--";
  }
  const intPartLength = getIntPartLength(val as number);
  if (intPartLength > 8) {
    const num = (val as number) / 10 ** 8;
    return `${float(num, precision)}亿`;
  }
  if (intPartLength > 4) {
    const num = (val as number) / 10 ** 4;
    return `${float(num, precision)}万`;
  }
  return `${float(val as number, precision)}`;
}

function formatToFloat(
  val: number | undefined,
  plusSign: string = "",
  precision: number = 2,
  scale: number = 1
): string {
  if (!isRealNumber(val)) {
    return "--";
  }
  const num: number = (val as number) / scale;
  if (num > 0) {
    return `${plusSign}${float(num, precision)}`;
  }
  return float(num, precision);
}

function formatToPercent(
  val: number | undefined,
  plusSign: string = "",
  precision: number = 2,
  scale: number = 1
): string {
  if (!isRealNumber(val)) {
    return "--";
  }
  const num = (val as number) / scale;
  if (num > 0) {
    return `${plusSign}${percentage(num, precision)}`;
  }
  return percentage(num, precision);
}

export {
  formatRank,
  formatLongText,
  formatWithUnit,
  formatToMonetaryShape,
  formatToFloat,
  formatToPercent,
};
