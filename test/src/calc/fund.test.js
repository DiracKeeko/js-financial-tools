import { fund } from "@/calc";
import assert from "assert";

const { calcMax3Concenttration } = fund;

describe("fund test", () => {
  describe("calcMax3Concenttration", () => {
    it("calcMax3Concenttration 01", () => {
      const testCase = ["03", "a", undefined];
      const res = calcMax3Concenttration(testCase);
      assert(res === undefined);
    });
    it("calcMax3Concenttration 01", () => {
      const testCase = [1, 1, 1];
      const res = calcMax3Concenttration(testCase);
      assert(res === 1);
    });
    it("calcMax3Concenttration 01", () => {
      const testCase = [1, 1, 1, 1];
      const res = calcMax3Concenttration(testCase);
      assert(res === 0.75);
    });
  });
});
