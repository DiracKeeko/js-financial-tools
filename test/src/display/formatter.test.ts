import { formatter } from "@/display";

const {
  formatRank,
  formatLongText,
  formatWithUnit,
  formatToMonetaryShape,
  formatToFloat,
  formatToPercent,
  trimJsonStr,
} = formatter;

describe("formatter test", () => {
  describe("formatRank", () => {
    it("formatRank 01", () => {
      const res = formatRank("a");
      expect(res === "--");
    });
    it("formatRank 02", () => {
      const res = formatRank(1);
      expect(res === "No.1");
    });
  });

  describe("formatLongText", () => {
    it("formatLongText 01", () => {
      const res = formatLongText(undefined);
      expect(res === "--");
    });
    it("formatLongText 02", () => {
      const res = formatLongText("hello world", 3);
      expect(res === "hel...");
    });
    it("formatLongText 03", () => {
      const res = formatLongText("hello world", 20);
      expect(res === "hello world");
    });
  });

  describe("formatWithUnit", () => {
    it("formatWithUnit 01", () => {
      const res = formatWithUnit(2.1 * 10 ** 9, "亿");
      expect(res === "21.00亿");
    });
    it("formatWithUnit 02", () => {
      const res = formatWithUnit(2.12357 * 10 ** 5, "万", 3);
      expect(res === "21.236万");
    });
    it("formatWithUnit 03", () => {
      const res = formatWithUnit(-2.1 * 10 ** 9, "亿");
      expect(res === "-21.00亿");
    });
    it("formatWithUnit 04", () => {
      const res = formatWithUnit(undefined);
      expect(res === "--");
    });
    it("formatWithUnit 05", () => {
      const res = formatWithUnit(100);
      expect(res === "100");
    });
  });

  describe("formatToMonetaryShape", () => {
    it("formatToMonetaryShape 01", () => {
      const res = formatToMonetaryShape("33");
      expect(res === "--");
    });
    it("formatToMonetaryShape 02", () => {
      const res = formatToMonetaryShape(2.12357 * 10 ** 5, 3);
      expect(res === "21.236万");
    });
    it("formatToMonetaryShape 03", () => {
      const res = formatToMonetaryShape(-2.1 * 10 ** 9);
      expect(res === "-21.00亿");
    });
    it("formatToMonetaryShape 04", () => {
      const res = formatToMonetaryShape(0);
      expect(res === "0.00");
    });
  });

  describe("formatToFloat", () => {
    it("formatToFloat 01", () => {
      const res = formatToFloat(undefined);
      expect(res === "--");
    });
    it("formatToFloat 02", () => {
      const res = formatToFloat(2.1234, "+", 3);
      expect(res === "+2.123");
    });
    it("formatToFloat 03", () => {
      const res = formatToFloat(-2.1, "", 3, 10);
      expect(res === "-0.210");
    });
  });

  describe("formatToPercent", () => {
    it("formatToPercent 01", () => {
      const res = formatToPercent(undefined);
      expect(res === "--");
    });
    it("formatToPercent 02", () => {
      const res = formatToPercent(0.1234, "+", 3);
      expect(res === "+12.340%");
    });
    it("formatToPercent 03", () => {
      const res = formatToPercent(-2.123, "", 1, 10);
      expect(res === "-21.2%");
    });
  });

  describe("trimJsonStr", () => {
    it("trimJsonStr 01", () => {
      const jsonStr = `{
        "age": "1", 
        "b": "2"
      }`
      const res = trimJsonStr(jsonStr);
      const expectedRes = `{"age":"1","b":"2"}`
      expect(res === expectedRes);
    });
  });
});
