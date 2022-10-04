import { isRealNumber } from "@/calc/number";

function gt(a: number, b: number): boolean {
  if (!isRealNumber(b)) {
    return true;
  }
  if (!isRealNumber(a) && isRealNumber(b)) {
    return false;
  }
  return a > b;
}

function lte(a: number, b: number): boolean {
  if (!isRealNumber(b)) {
    return true;
  }
  if (!isRealNumber(a) && isRealNumber(b)) {
    return false;
  }
  return a <= b;
}

export { gt, lte };
