import { compare } from "@/util";
import assert from "assert";

const { gt, lte } = compare;

describe("compare test", () => {
  describe("gt", () => {
    it("gt 01", () => {
      assert(gt(2, 1) === true);
    });
    it("gt 02", () => {
      assert(gt(2, 3) === false);
    });
    it("gt 03", () => {
      assert(gt(2, undefined) === true);
    });
    it("gt 04", () => {
      assert(gt(undefined, undefined) === true);
    });
    it("gt 05", () => {
      assert(gt(undefined, 2) === false);
    });
  });

  describe("lte", () => {
    it("lte 01", () => {
      assert(lte(2, 1) === false);
    });
    it("lte 02", () => {
      assert(lte(2, 3) === true);
    });
    it("lte 03", () => {
      assert(lte(2, undefined) === true);
    });
    it("lte 04", () => {
      assert(lte(undefined, undefined) === true);
    });
    it("lte 05", () => {
      assert(lte(undefined, 2) === false);
    });
    it("lte 06", () => {
      assert(lte(2, 2) === true);
    });
  });
});
