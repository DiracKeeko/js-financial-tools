import { isRealNumber } from "@/calc/number";

function gt(a: number | undefined, b: number | undefined): boolean {
  if (!isRealNumber(b)) {
    return true;
  }
  if (!isRealNumber(a) && isRealNumber(b)) {
    return false;
  }
  return (a as number) > (b as number);
}

function lte(a: number | undefined, b: number | undefined): boolean {
  if (!isRealNumber(b)) {
    return true;
  }
  if (!isRealNumber(a) && isRealNumber(b)) {
    return false;
  }
  return (a as number) <= (b as number);
}

export { gt, lte };
