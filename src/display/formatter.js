import { float } from "@/calc/number";

function formatRank(val) {
  if (val === undefined) {
    return "--";
  }
  return `$No.${val}`;
}

function formatWithUnit(val, str = "") {
  if (val === undefined) {
    return "--";
  }
  let number = val;
  if (str === "亿") {
    number = float(number / 10 ** 8);
  }
  return `${number}${str}`;
}

export { formatRank, formatWithUnit };
