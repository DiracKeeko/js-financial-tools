import { number } from "@/calc";
import assert from "assert";

const { isRealNumber, float, percentage } = number;

describe("number test", () => {
  describe("isRealNumber() test", () => {
    it("isRealNumber(undefined)", () => {
      const res = isRealNumber(undefined);
      assert(res === false);
    });
    it("isRealNumber(null)", () => {
      const res = isRealNumber(null);
      assert(res === false);
    });
    it("isRealNumber(NaN)", () => {
      const res = isRealNumber(NaN);
      assert(res === false);
    });
    it("isRealNumber(string)", () => {
      const res = isRealNumber("33");
      assert(res === false);
    });
    it("isRealNumber(number float)", () => {
      const res = isRealNumber(1.1);
      assert(res === true);
    });
    it("isRealNumber(number int)", () => {
      const res = isRealNumber(22);
      assert(res === true);
    });
  });

  describe("float() test", () => {
    it("float(undefined, 3, '-')", () => {
      const res = float(undefined, 3, "-");
      assert(res === "-");
    });
    it("float(undefined)", () => {
      const res = float(undefined);
      assert(res === "--");
    });
    it("float(null)", () => {
      const res = float(null);
      assert(res === "--");
    });
    it("float(NaN)", () => {
      const res = float(NaN);
      assert(res === "--");
    });
    it("float(string)", () => {
      const res = float("33");
      assert(res === "--");
    });
    it("float(number float)", () => {
      const res = float(1.1);
      assert(res === "1.10");
    });
    it("float(number, precision)", () => {
      const res = float(0.1122, 3);
      assert(res === "0.112");
    });
    it("float(number int)", () => {
      const res = float(22);
      assert(res === "22.00");
    });
  });

  describe("percentage() test", () => {
    it("percentage(undefined, 3, '-')", () => {
      const res = percentage(undefined, 3, "-");
      assert(res === "-");
    });
    it("percentage(undefined)", () => {
      const res = percentage(undefined);
      assert(res === "--");
    });
    it("percentage(null)", () => {
      const res = percentage(null);
      assert(res === "--");
    });
    it("percentage(NaN)", () => {
      const res = percentage(NaN);
      assert(res === "--");
    });
    it("percentage(string)", () => {
      const res = percentage("33");
      assert(res === "--");
    });
    it("percentage(number float)", () => {
      const res = percentage(0.112233);
      assert(res === "11.22%");
    });
    it("percentage(number float)", () => {
      const res = percentage(-0.112233);
      assert(res === "-11.22%");
    });
    it("percentage(number, precision)", () => {
      const res = percentage(-0.112233, 3);
      assert(res === "-11.223%");
    });
    it("percentage(number int)", () => {
      const res = percentage(1.23456, 3);
      assert(res === "123.456%");
    });
  });
});
