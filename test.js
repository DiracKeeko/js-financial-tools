// const jsFinancialTools = require("./dist/js-financial-tools.js");
const jsFinancialTools = require("./dist/js-financal-tools.min.js"); // test prd

console.log("jsFinancialTools->", jsFinancialTools);

const rank = jsFinancialTools.formatter.formatRank(1);
console.log("rank->", rank);

const res = jsFinancialTools.formatter.formatWithUnit(2 * 10 ** 9, "亿");
console.log("res->", res);

const res1 = jsFinancialTools.formatter.formatToPercent(0.233578, "+", 3);
console.log("res1->", res1);

const res2 = jsFinancialTools.formatter.formatWithUnit(2.12345 * 10 ** 5, "万", 3);
console.log("res2->", res2);