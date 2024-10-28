import { acquire } from "@/util";
import { getDateTime } from "@/util/constant";

type DateRange = [number, number];
type DateStrRange = [string, string] | [];

const {
  getIntPartLength,
  getMonetaryUnit,
  getMaxDate,
  getMinDate,
  getTimeRangeIntersection,
  checkQuarterInRange,
  checkYearInRange,
  createQuarterArr,
  getWeekNumberInTheDateMonth,
} = acquire;

describe("acquire test", () => {
  describe("getIntPartLength", () => {
    it("getIntPartLength 01", () => {
      expect(getIntPartLength(12)).toBe(2);
    });
    it("getIntPartLength 02", () => {
      expect(getIntPartLength(128)).toBe(3);
    });
    it("getIntPartLength 03", () => {
      expect(getIntPartLength(128.4)).toBe(3);
    });
    it("getIntPartLength 04", () => {
      expect(getIntPartLength(-1100.23)).toBe(4);
    });
  });

  describe("getMonetaryUnit", () => {
    it("getMonetaryUnit 01", () => {
      expect(getMonetaryUnit("13")).toBe("");
    });
    it("getMonetaryUnit 02", () => {
      expect(getMonetaryUnit(13.3)).toBe("");
    });
    it("getMonetaryUnit 03", () => {
      expect(getMonetaryUnit(2 * 10 ** 9)).toBe("亿");
    });
    it("getMonetaryUnit 04", () => {
      expect(getMonetaryUnit(2 * 10 ** 6)).toBe("万");
    });
  });

  describe("getMaxDate", () => {
    it("getMaxDate 01", () => {
      const dateArr = ["2022-01-01", "2019-10-12", "2018-05-18"];
      expect(getMaxDate(dateArr)).toBe("2022-01-01");
    });
  });

  describe("getMinDate", () => {
    it("getMinDate 01", () => {
      const dateArr = ["2022-01-01", "2019-10-12", "2018-05-18"];
      expect(getMinDate(dateArr)).toBe("2018-05-18");
    });
  });

  describe("getTimeRangeIntersection", () => {
    it("getTimeRangeIntersection 01", () => {
      const dateRange1 = [getDateTime("2021-03-03"), getDateTime("2021-06-06")];
      const dateRange2 = [getDateTime("2021-05-05"), getDateTime("2021-08-08")];
      const dateRangeIntersection = [
        getDateTime("2021-05-05"),
        getDateTime("2021-06-06"),
      ];
      const res = getTimeRangeIntersection(
        dateRange1 as DateRange,
        dateRange2 as DateRange
      );
      expect(res).toEqual(dateRangeIntersection);
    });
    it("getTimeRangeIntersection 02", () => {
      const dateRange1 = [getDateTime("2021-03-03"), getDateTime("2021-05-05")];
      const dateRange2 = [getDateTime("2021-06-06"), getDateTime("2021-08-08")];
      const dateRangeIntersection: [] = [];
      const res = getTimeRangeIntersection(
        dateRange1 as DateRange,
        dateRange2 as DateRange
      );
      expect(res).toEqual(dateRangeIntersection);
    });
  });

  describe("checkQuarterInRange", () => {
    it("checkQuarterInRange 01", () => {
      const dateRange = ["2021-12-12", "2022-04-06"];
      expect(checkQuarterInRange(2022, "Q1", dateRange as DateStrRange)).toBe(
        true
      );
    });
    it("checkQuarterInRange 02", () => {
      const dateRange = ["2021-12-12", "2022-04-06"];
      expect(checkQuarterInRange(2021, "Q4", dateRange as DateStrRange)).toBe(
        false
      );
    });
    it("checkQuarterInRange 03", () => {
      const dateRange: [] = [];
      expect(checkQuarterInRange(2021, "Q4", dateRange as DateStrRange)).toBe(
        false
      );
    });
  });

  describe("checkYearInRange", () => {
    it("checkYearInRange 01", () => {
      const dateRange = ["2020-12-12", "2022-04-06"];
      expect(checkYearInRange(2021, dateRange as DateStrRange)).toBe(true);
    });
    it("checkYearInRange 02", () => {
      const dateRange = ["2020-12-12", "2022-04-06"];
      expect(checkYearInRange(2020, dateRange as DateStrRange)).toBe(false);
    });
    it("checkYearInRange 03", () => {
      const dateRange: [] = [];
      expect(checkYearInRange(2020, dateRange as DateStrRange)).toBe(false);
    });
  });

  describe("createQuarterArr", () => {
    it("createQuarterArr 01", () => {
      const dateRange: [] = [];
      expect(createQuarterArr(dateRange as DateStrRange)).toEqual([]);
    });
    it("createQuarterArr 02", () => {
      const dateRange = ["2020-12-12", "2022-04-06"];
      const expectedRes = ["2021Q1", "2021Q2", "2021Q3", "2021Q4", "2022Q1"];
      expect(createQuarterArr(dateRange as DateStrRange)).toEqual(expectedRes);
    });
  });
  
  describe("getWeekNumberInTheDateMonth", () => {
    it("getWeekNumberInTheDateMonth 01", () => {
      const dateStr = "2024-06-03";
      expect(getWeekNumberInTheDateMonth(dateStr)).toBe(2);
    });
    it("getWeekNumberInTheDateMonth 02", () => {
      const dateStr = "2024-06-05";
      expect(getWeekNumberInTheDateMonth(dateStr)).toBe(2);
    });
    it("getWeekNumberInTheDateMonth 03", () => {
      const dateStr = "2024-06-10";
      expect(getWeekNumberInTheDateMonth(dateStr)).toBe(3);
    });
    it("getWeekNumberInTheDateMonth 04", () => {
      const dateStr = "2024-06-10";
      const dateObj = new Date(dateStr);
      expect(getWeekNumberInTheDateMonth(dateObj)).toBe(3);
    });
    it("getWeekNumberInTheDateMonth 05", () => {
      const dateStr = "2024-06-10";
      const dateTime = new Date(dateStr).getTime();
      expect(getWeekNumberInTheDateMonth(dateTime)).toBe(3);
    });
  });
});
