import { number } from "@/calc";
import assert from "assert";

const { isRealNumber, float, percentage, getIntPartLength } = number;

describe("number test", () => {
  describe("isRealNumber", () => {
    it("isRealNumber 01", () => {
      const res = isRealNumber(undefined);
      assert(res === false);
    });
    it("isRealNumber 02", () => {
      const res = isRealNumber(null);
      assert(res === false);
    });
    it("isRealNumber 03", () => {
      const res = isRealNumber(NaN);
      assert(res === false);
    });
    it("isRealNumber 04", () => {
      const res = isRealNumber("33");
      assert(res === false);
    });
    it("isRealNumber 05", () => {
      const res = isRealNumber(1.1);
      assert(res === true);
    });
    it("isRealNumber 06", () => {
      const res = isRealNumber(22);
      assert(res === true);
    });
  });

  describe("float", () => {
    it("float 01", () => {
      const res = float(undefined, 3, "-");
      assert(res === "-");
    });
    it("float 02", () => {
      const res = float(undefined);
      assert(res === "--");
    });
    it("float 03", () => {
      const res = float(null);
      assert(res === "--");
    });
    it("float 04", () => {
      const res = float(NaN);
      assert(res === "--");
    });
    it("float 05", () => {
      const res = float("33");
      assert(res === "--");
    });
    it("float 06", () => {
      const res = float(1.1);
      assert(res === "1.10");
    });
    it("float 07", () => {
      const res = float(0.1122, 3);
      assert(res === "0.112");
    });
    it("float 08", () => {
      const res = float(22);
      assert(res === "22.00");
    });
  });

  describe("percentage", () => {
    it("percentage 01", () => {
      const res = percentage(undefined, 3, "-");
      assert(res === "-");
    });
    it("percentage 02", () => {
      const res = percentage(undefined);
      assert(res === "--");
    });
    it("percentage 03", () => {
      const res = percentage(null);
      assert(res === "--");
    });
    it("percentage 04", () => {
      const res = percentage(NaN);
      assert(res === "--");
    });
    it("percentage 05", () => {
      const res = percentage("33");
      assert(res === "--");
    });
    it("percentage 06", () => {
      const res = percentage(0.112233);
      assert(res === "11.22%");
    });
    it("percentage 07", () => {
      const res = percentage(-0.112233);
      assert(res === "-11.22%");
    });
    it("percentage 08", () => {
      const res = percentage(-0.112233, 3);
      assert(res === "-11.223%");
    });
    it("percentage 09", () => {
      const res = percentage(1.23456, 3);
      assert(res === "123.456%");
    });
  });

  describe("getIntPartLength", () => {
    it("getIntPartLength 01", () => {
      assert(getIntPartLength(12) === 2);
    })
    it("getIntPartLength 02", () => {
      assert(getIntPartLength(128) === 3);
    })
    it("getIntPartLength 03", () => {
      assert(getIntPartLength(128.4) === 3);
    })
    it("getIntPartLength 04", () => {
      assert(getIntPartLength(-1100.23) === 4);
    })
  })
});
