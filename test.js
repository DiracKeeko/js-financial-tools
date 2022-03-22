// const jsFinancialTools = require("./dist/js-financial-tools.js");
const jsFinancialTools = require("./dist/js-financal-tools.min.js"); // test prd

// console.log("jsFinancialTools->", jsFinancialTools);

// const rank = jsFinancialTools.formatter.formatRank(1);
// console.log("rank->", rank);

// const res = jsFinancialTools.formatter.formatWithUnit(2 * 10 ** 9, "亿");
// console.log("res->", res);

// const res1 = jsFinancialTools.formatter.formatToPercent(0.233578, "+", 3);
// console.log("res1->", res1);

// const res2 = jsFinancialTools.formatter.formatWithUnit(2.12345 * 10 ** 5, "万", 3);
// console.log("res2->", res2);

// const res3 = jsFinancialTools.complete.completeStockTimeDataArr([ [202108220901, 0.2], [202108221100, 0.1] ]);
// console.dir(res3, {'maxArrayLength': null});

const TimeDataObjArr = [ 
  {
    "date": "20210822",
    "time": "110000",
    "change": -0.11,
    "valuation": 1.11
  }, 
  {
    "date": "20210822",
    "time": "110100",
    "change": -0.22,
    "valuation": 2.22
  }, 
]
const res4 = jsFinancialTools.complete.completeStockTimeDataObjArr(TimeDataObjArr);
console.dir(res4, {'maxArrayLength': null});

