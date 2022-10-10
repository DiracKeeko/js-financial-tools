import { compare } from "@/util";

const { gt, lte } = compare;

describe("compare test", () => {
  describe("gt", () => {
    it("gt 01", () => {
      expect(gt(2, 1) === true);
    });
    it("gt 02", () => {
      expect(gt(2, 3) === false);
    });
    it("gt 03", () => {
      expect(gt(2, undefined) === true);
    });
    it("gt 04", () => {
      expect(gt(undefined, undefined) === true);
    });
    it("gt 05", () => {
      expect(gt(undefined, 2) === false);
    });
  });

  describe("lte", () => {
    it("lte 01", () => {
      expect(lte(2, 1) === false);
    });
    it("lte 02", () => {
      expect(lte(2, 3) === true);
    });
    it("lte 03", () => {
      expect(lte(2, undefined) === true);
    });
    it("lte 04", () => {
      expect(lte(undefined, undefined) === true);
    });
    it("lte 05", () => {
      expect(lte(undefined, 2) === false);
    });
    it("lte 06", () => {
      expect(lte(2, 2) === true);
    });
  });
});
