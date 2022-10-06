import { isRealNumber } from "@/calc/number";

function calcMax3Concentration(arr: (number | string | undefined)[]): number | undefined {
  const numberArr = arr.filter((item) => isRealNumber(item));
  if (numberArr.length === 0) {
    return undefined;
  }
  (numberArr as number[]).sort((a, b) => b - a);
  const max3Arr = numberArr.slice(0, 3);
  const sumMax3 = (max3Arr as number[]).reduce((sum, item) => sum + item, 0);
  const sumAll = (numberArr as number[]).reduce((sum, item) => sum + item, 0);
  return sumMax3 / sumAll;
}

export { calcMax3Concentration };
