import { fund } from "@/calc";
import assert from "assert";

const { calcMax3Concentration } = fund;

describe("fund test", () => {
  describe("calcMax3Concentration", () => {
    it("calcMax3Concentration 01", () => {
      const testCase = ["03", "a", undefined];
      const res = calcMax3Concentration(testCase);
      assert(res === undefined);
    });
    it("calcMax3Concentration 01", () => {
      const testCase = [1, 1, 1];
      const res = calcMax3Concentration(testCase);
      assert(res === 1);
    });
    it("calcMax3Concentration 01", () => {
      const testCase = [1, 1, 1, 1];
      const res = calcMax3Concentration(testCase);
      assert(res === 0.75);
    });
  });
});
