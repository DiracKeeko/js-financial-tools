import { compare } from "@/util";

const { gt, lte } = compare;

describe("compare test", () => {
  describe("gt", () => {
    it("gt 01", () => {
      expect(gt(2, 1)).toBe(true);
    });
    it("gt 02", () => {
      expect(gt(2, 3)).toBe(false);
    });
    it("gt 03", () => {
      expect(gt(2, undefined)).toBe(true);
    });
    it("gt 04", () => {
      expect(gt(undefined, undefined)).toBe(true);
    });
    it("gt 05", () => {
      expect(gt(undefined, 2)).toBe(false);
    });
  });

  describe("lte", () => {
    it("lte 01", () => {
      expect(lte(2, 1)).toBe(false);
    });
    it("lte 02", () => {
      expect(lte(2, 3)).toBe(true);
    });
    it("lte 03", () => {
      expect(lte(2, undefined)).toBe(true);
    });
    it("lte 04", () => {
      expect(lte(undefined, undefined)).toBe(true);
    });
    it("lte 05", () => {
      expect(lte(undefined, 2)).toBe(false);
    });
    it("lte 06", () => {
      expect(lte(2, 2)).toBe(true);
    });
  });
});
