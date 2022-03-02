// const jsFinancialTools = require("./dist/js-financial-tools.js");
const jsFinancialTools = require("./dist/js-financal-tools.min.js"); // test prd

console.log("jsFinancialTools->", jsFinancialTools);
const res = jsFinancialTools.formatter.formatWithUnit(2 * 10 ** 9, "亿");
console.log("res->", res);

const res1 = jsFinancialTools.formatter.formatToPercent(0.233578, "+", 3);
console.log("res1->", res1);