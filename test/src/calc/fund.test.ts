import { fund } from "@/calc";

const { calcMax3Concentration } = fund;

describe("fund test", () => {
  describe("calcMax3Concentration", () => {
    it("calcMax3Concentration 01", () => {
      const testCase = [undefined, undefined, undefined];
      const res = calcMax3Concentration(testCase);
      expect(res).toBe(undefined);
    });
    it("calcMax3Concentration 02", () => {
      const testCase = [1, 1, 1];
      const res = calcMax3Concentration(testCase);
      expect(res).toBe(1);
    });
    it("calcMax3Concentration 03", () => {
      const testCase = [1, 1, 1, 1];
      const res = calcMax3Concentration(testCase);
      expect(res).toBe(0.75);
    });
  });
});
