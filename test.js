// const jsFinancialTools = require("./dist/js-financial-tools.js");
const jsFinancialTools = require("./dist/js-financal-tools.min.js"); // test prd

console.log("jsFinancialTools->", jsFinancialTools);
const res = jsFinancialTools.formatter.formatWithUnit(2 * 10 ** 9, "亿");
console.log("res->", res);