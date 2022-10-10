import { number } from "@/calc";

const { isRealNumber, float, percentage } = number;

describe("number test", () => {
  describe("isRealNumber", () => {
    it("isRealNumber 01", () => {
      const res = isRealNumber(undefined);
      expect(res === false);
    });
    it("isRealNumber 02", () => {
      const res = isRealNumber(null);
      expect(res === false);
    });
    it("isRealNumber 03", () => {
      const res = isRealNumber(NaN);
      expect(res === false);
    });
    it("isRealNumber 04", () => {
      const res = isRealNumber("33");
      expect(res === false);
    });
    it("isRealNumber 05", () => {
      const res = isRealNumber(1.1);
      expect(res === true);
    });
    it("isRealNumber 06", () => {
      const res = isRealNumber(22);
      expect(res === true);
    });
  });

  describe("float", () => {
    it("float 01", () => {
      const res = float(undefined, 3, "-");
      expect(res === "-");
    });
    it("float 02", () => {
      const res = float(undefined);
      expect(res === "--");
    });
    it("float 03", () => {
      const res = float(null);
      expect(res === "--");
    });
    it("float 04", () => {
      const res = float(NaN);
      expect(res === "--");
    });
    it("float 05", () => {
      const res = float("33");
      expect(res === "--");
    });
    it("float 06", () => {
      const res = float(1.1);
      expect(res === "1.10");
    });
    it("float 07", () => {
      const res = float(0.1122, 3);
      expect(res === "0.112");
    });
    it("float 08", () => {
      const res = float(22, "3");
      expect(res === "22.00");
    });
  });

  describe("percentage", () => {
    it("percentage 01", () => {
      const res = percentage(undefined, 3, "-");
      expect(res === "-");
    });
    it("percentage 02", () => {
      const res = percentage(undefined);
      expect(res === "--");
    });
    it("percentage 03", () => {
      const res = percentage(null);
      expect(res === "--");
    });
    it("percentage 04", () => {
      const res = percentage(NaN);
      expect(res === "--");
    });
    it("percentage 05", () => {
      const res = percentage("33");
      expect(res === "--");
    });
    it("percentage 06", () => {
      const res = percentage(0.112233);
      expect(res === "11.22%");
    });
    it("percentage 07", () => {
      const res = percentage(-0.112233, "3");
      expect(res === "-11.22%");
    });
    it("percentage 08", () => {
      const res = percentage(-0.112233, 3);
      expect(res === "-11.223%");
    });
    it("percentage 09", () => {
      const res = percentage(1.23456, 3);
      expect(res === "123.456%");
    });
  });
});
