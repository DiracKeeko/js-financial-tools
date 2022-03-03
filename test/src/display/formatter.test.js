import { formatter } from "@/display/index";
import assert from "assert";

describe("formatter test", () => {
  it("formatRank", () => {
    const res = formatter.formatRank(1);
    assert(res === "No.1");
  });

  it("formatWithUnit 亿", () => {
    const res = formatter.formatWithUnit(2.1 * 10 ** 9, "亿");
    assert(res === "21.00亿");
  });

})