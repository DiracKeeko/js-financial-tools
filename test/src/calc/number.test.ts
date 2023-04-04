import { number } from "@/calc";

const {
  isRealNumber,
  float,
  percentage,
  decimalFloor,
  decimalRound,
  decimalCeil,
} = number;

describe("number test", () => {
  describe("isRealNumber", () => {
    it("isRealNumber 01", () => {
      const res = isRealNumber(undefined);
      expect(res).toBe(false);
    });
    it("isRealNumber 02", () => {
      const res = isRealNumber(null);
      expect(res).toBe(false);
    });
    it("isRealNumber 03", () => {
      const res = isRealNumber(NaN);
      expect(res).toBe(false);
    });
    it("isRealNumber 04", () => {
      const res = isRealNumber("33");
      expect(res).toBe(false);
    });
    it("isRealNumber 05", () => {
      const res = isRealNumber(1.1);
      expect(res).toBe(true);
    });
    it("isRealNumber 06", () => {
      const res = isRealNumber(22);
      expect(res).toBe(true);
    });
  });
  
  describe("float", () => {
    it("float 01", () => {
      const res = float(undefined, 3, "-");
      expect(res).toBe("-");
    });
    it("float 02", () => {
      const res = float(undefined);
      expect(res).toBe("--");
    });
    it("float 03", () => {
      const res = float(null);
      expect(res).toBe("--");
    });
    it("float 04", () => {
      const res = float(NaN);
      expect(res).toBe("--");
    });
    it("float 05", () => {
      const res = float("33");
      expect(res).toBe("--");
    });
    it("float 06", () => {
      const res = float(1.1);
      expect(res).toBe("1.10");
    });
    it("float 07", () => {
      const res = float(0.1122, 3);
      expect(res).toBe("0.112");
    });
    it("float 08", () => {
      const res = float(22, "3");
      expect(res).toBe("22.00");
    });
  });
  
  describe("percentage", () => {
    it("percentage 01", () => {
      const res = percentage(undefined, 3, "-");
      expect(res).toBe("-");
    });
    it("percentage 02", () => {
      const res = percentage(undefined);
      expect(res).toBe("--");
    });
    it("percentage 03", () => {
      const res = percentage(null);
      expect(res).toBe("--");
    });
    it("percentage 04", () => {
      const res = percentage(NaN);
      expect(res).toBe("--");
    });
    it("percentage 05", () => {
      const res = percentage("33");
      expect(res).toBe("--");
    });
    it("percentage 06", () => {
      const res = percentage(0.112233);
      expect(res).toBe("11.22%");
    });
    it("percentage 07", () => {
      const res = percentage(-0.112233, "3");
      expect(res).toBe("-11.22%");
    });
    it("percentage 08", () => {
      const res = percentage(-0.112233, 3);
      expect(res).toBe("-11.223%");
    });
    it("percentage 09", () => {
      const res = percentage(1.23456, 3);
      expect(res).toBe("123.456%");
    });
  });
  
  describe("decimalFloor", () => {
    it("decimalFloor 01", () => {
      const res = decimalFloor(1.2359);
      expect(res).toBe("1.23");
    });
    it("decimalFloor 02", () => {
      const res = decimalFloor(1.2359, 3);
      expect(res).toBe("1.235");
    });
    it("decimalFloor 03", () => {
      const res = decimalFloor(11, 1);
      expect(res).toBe("11.0");
    });
  });
  

  describe("decimalRound", () => {
    it("decimalRound 01", () => {
      const res = decimalRound(1.2329);
      expect(res).toBe("1.23");
    });
    it("decimalRound 02", () => {
      const res = decimalRound(1.2329, 3);
      expect(res).toBe("1.233");
    });
    it("decimalRound 03", () => {
      const res = decimalRound(11, 1);
      expect(res).toBe("11.0");
    });
  });

  describe("decimalCeil", () => {
    it("decimalCeil 01", () => {
      const res = decimalCeil(1.2329);
      expect(res).toBe("1.24");
    });
    it("decimalCeil 02", () => {
      const res = decimalCeil(1.2329, 3);
      expect(res).toBe("1.233");
    });
    it("decimalCeil 03", () => {
      const res = decimalCeil(11, 1);
      expect(res).toBe("11.0");
    });
    it("decimalCeil 04", () => {
      const res = decimalCeil(1.2309);
      expect(res).toBe("1.24");
    });
    it("decimalCeil 05", () => {
      const res = decimalCeil(1.23);
      expect(res).toBe("1.23");
    });
  });
});
