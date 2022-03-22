import { complete } from "@/util";
import assert from "assert";
import { isEqual } from "lodash";

import {
  completeStockTimeDataArrRes01,
  completeStockTimeDataArrRes02,
  completeStockTimeDataArrExample03,
  completeStockTimeDataObjArrRes01,
  completeStockTimeDataObjArrRes02,
  completeStockTimeDataObjArrExample02,
} from "./constant";

const { completeStockTimeDataArr, completeStockTimeDataObjArr } = complete;

describe("complete test", () => {
  describe("completeStockTimeDataArr", () => {
    it("completeStockTimeDataArr 01", () => {
      const testCase = [
        [202108220900, 0.1],
        [202108220901, 0.2],
      ];
      const res = completeStockTimeDataArr(testCase);
      assert(isEqual(res, completeStockTimeDataArrRes01));
    });
    it("completeStockTimeDataArr 02", () => {
      const testCase = [
        [202108220900, 0.1, 0.11],
        [202108220901, 0.2, 0.22],
      ];
      const res = completeStockTimeDataArr(testCase, 3);
      assert(isEqual(res, completeStockTimeDataArrRes02));
    });
    it("completeStockTimeDataArr 03", () => {
      const testCase = completeStockTimeDataArrExample03;
      const res = completeStockTimeDataArr(testCase);
      assert(isEqual(res, completeStockTimeDataArrRes01));
    });
  });

  describe("completeStockTimeDataObjArr", () => {
    it("completeStockTimeDataObjArr 01", () => {
      const testCase = [
        {
          "date": "20210822",
          "time": "090000",
          "change": -0.11,
          "valuation": 1.11,
        },
        {
          "date": "20210822",
          "time": "090100",
          "change": -0.22,
          "valuation": 2.22,
        },
      ];
      const res = completeStockTimeDataObjArr(testCase);
      assert(isEqual(res, completeStockTimeDataObjArrRes01));
    });
    it("completeStockTimeDataObjArr 02", () => {
      const testCase = [
        {
          "date": "20210822",
          "time": "112900",
          "change": -0.11,
          "valuation": 1.11,
        },
        {
          "date": "20210822",
          "time": "113000",
          "change": -0.22,
          "valuation": 2.22,
        },
      ];
      const res = completeStockTimeDataObjArr(testCase);
      assert(isEqual(res, completeStockTimeDataObjArrRes02));
    });
  });
});
