import { formatter } from "@/display";
import assert from "assert";

const {
  formatRank,
  formatWithUnit,
  formatToMonetaryShape,
  formatToFloat,
  formatToPercent,
} = formatter;

describe("formatter test", () => {
  describe("formatRank", () => {
    it("formatRank 01", () => {
      const res = formatRank("a");
      assert(res === "--");
    });
    it("formatRank 02", () => {
      const res = formatRank(1);
      assert(res === "No.1");
    });
  });

  describe("formatWithUnit", () => {
    it("formatWithUnit 01", () => {
      const res = formatWithUnit(2.1 * 10 ** 9, "亿");
      assert(res === "21.00亿");
    });
    it("formatWithUnit 02", () => {
      const res = formatWithUnit(2.12357 * 10 ** 5, "万", 3);
      assert(res === "21.236万");
    });
    it("formatWithUnit 03", () => {
      const res = formatWithUnit(-2.1 * 10 ** 9, "亿");
      assert(res === "-21.00亿");
    });
    it("formatWithUnit 04", () => {
      const res = formatWithUnit(undefined);
      assert(res === "--");
    });
    it("formatWithUnit 05", () => {
      const res = formatWithUnit(100);
      assert(res === "100");
    });
  });

  describe("formatToMonetaryShape", () => {
    it("formatToMonetaryShape 01", () => {
      const res = formatToMonetaryShape("33");
      assert(res === "--");
    });
    it("formatToMonetaryShape 02", () => {
      const res = formatToMonetaryShape(2.12357 * 10 ** 5, 3);
      assert(res === "21.236万");
    });
    it("formatToMonetaryShape 03", () => {
      const res = formatToMonetaryShape(-2.1 * 10 ** 9);
      assert(res === "-21.00亿");
    });
    it("formatToMonetaryShape 04", () => {
      const res = formatToMonetaryShape(0);
      assert(res === "0.00");
    });
  });

  describe("formatToFloat", () => {
    it("formatToFloat 01", () => {
      const res = formatToFloat(undefined);
      assert(res === "--");
    });
    it("formatToFloat 02", () => {
      const res = formatToFloat(2.1234, "+", 3);
      assert(res === "+2.123");
    });
    it("formatToFloat 03", () => {
      const res = formatToFloat(-2.1, "", 3, 10);
      assert(res === "-0.210");
    });
  });

  describe("formatToPercent", () => {
    it("formatToPercent 01", () => {
      const res = formatToPercent(undefined);
      assert(res === "--");
    });
    it("formatToPercent 02", () => {
      const res = formatToPercent(0.1234, "+", 3);
      assert(res === "+12.340%");
    });
    it("formatToPercent 03", () => {
      const res = formatToPercent(-2.123, "", 1, 10);
      assert(res === "-21.2%");
    });
  });
});
