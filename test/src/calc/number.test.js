import { number } from "@/calc";
import assert from "assert";

describe("number test", () => {

  it("isRealNumber(undefined)", () => {
    const res = number.isRealNumber(undefined);
    assert(res === false);
  });
  it("isRealNumber(null)", () => {
    const res = number.isRealNumber(null);
    assert(res === false);
  });
  it("isRealNumber(NaN)", () => {
    const res = number.isRealNumber(NaN);
    assert(res === false);
  });
  it("isRealNumber(string)", () => {
    const res = number.isRealNumber("33");
    assert(res === false);
  });
  it("isRealNumber(number float)", () => {
    const res = number.isRealNumber(1.1);
    assert(res === true);
  });
  it("isRealNumber(number int)", () => {
    const res = number.isRealNumber(22);
    assert(res === true);
  });

  it("float(undefined)", () => {
    const res = number.float(undefined);
    assert(res === "--");
  });
  it("float(null)", () => {
    const res = number.float(null);
    assert(res === "--");
  });
  it("float(NaN)", () => {
    const res = number.float(NaN);
    assert(res === "--");
  });
  it("float(string)", () => {
    const res = number.float("33");
    assert(res === "--");
  });
  it("float(number float)", () => {
    const res = number.float(1.1);
    assert(res === "1.10");
  });
  it("float(number int)", () => {
    const res = number.float(22);
    assert(res === "22.00");
  });

})
