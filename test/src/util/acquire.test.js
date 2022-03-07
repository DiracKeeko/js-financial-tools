import { acquire } from "@/util";
import assert from "assert";

const { getIntPartLength, getMonetaryUnit, getMaxDate, getMinDate } = acquire;

describe("acquire test", () => {
  describe("getIntPartLength", () => {
    it("getIntPartLength 01", () => {
      assert(getIntPartLength(12) === 2);
    });
    it("getIntPartLength 02", () => {
      assert(getIntPartLength(128) === 3);
    });
    it("getIntPartLength 03", () => {
      assert(getIntPartLength(128.4) === 3);
    });
    it("getIntPartLength 04", () => {
      assert(getIntPartLength(-1100.23) === 4);
    });
  });

  describe("getMonetaryUnit", () => {
    it("getMonetaryUnit 01", () => {
      assert(getMonetaryUnit("13") === "");
    });
    it("getMonetaryUnit 02", () => {
      assert(getMonetaryUnit(13.3) === "");
    });
    it("getMonetaryUnit 03", () => {
      assert(getMonetaryUnit(2 * 10 ** 9) === "亿");
    });
    it("getMonetaryUnit 04", () => {
      assert(getMonetaryUnit(2 * 10 ** 6) === "万");
    });
  });

  describe("getMaxDate", () => {
    it("getMaxDate 01", () => {
      const dateArr = ["2022-01-01", "2019-10-12", "2018-05-18"]
      assert(getMaxDate(dateArr) === "2022-01-01");
    });
  });

  describe("getMinDate", () => {
    it("getMinDate 01", () => {
      const dateArr = ["2022-01-01", "2019-10-12", "2018-05-18"]
      assert(getMinDate(dateArr) === "2018-05-18");
    });
  });

});
