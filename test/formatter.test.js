import { formatter } from "@/display/index";
import assert from "assert";

describe("formatter  test", () => {
  it("formatRank", () => {
    const res = formatter.formatRank(1);
    assert(res === "No.1");
  });
})