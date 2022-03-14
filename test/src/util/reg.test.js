import { reg } from "@/util";
import assert from "assert";

const {
  gtZeroNumReg,
  gteZeroNumReg,
  gtZeroNumStrictReg,
  gteZeroNumStrictReg,
  intReg,
  gtZeroIntReg,
  gteZeroIntReg,
  floatReg,
  floatStrictReg,
  gtZeroFloatReg,
  gteZeroFloatReg,
  gtZeroFloatStrictReg,
  specialCharacterReg,
} = reg;

describe("reg test", () => {
  describe("gtZeroNumReg", () => {
    it("gtZeroNumReg 01", () => {
      assert(gtZeroNumReg.test("0.1") === true);
    });
    it("gtZeroNumReg 02", () => {
      assert(gtZeroNumReg.test("0.10") === true);
    });
    it("gtZeroNumReg 03", () => {
      assert(gtZeroNumReg.test("1.23") === true);
    });
    it("gtZeroNumReg 04", () => {
      assert(gtZeroNumReg.test("11") === true);
    });
    it("gtZeroNumReg 05", () => {
      assert(gtZeroNumReg.test("11.") === false);
    });
    it("gtZeroNumReg 06", () => {
      assert(gtZeroNumReg.test("0") === false);
    });
    it("gtZeroNumReg 07", () => {
      assert(gtZeroNumReg.test("0.") === false);
    });
    it("gtZeroNumReg 08", () => {
      assert(gtZeroNumReg.test("0.00") === false);
    });
    it("gtZeroNumReg 09", () => {
      assert(gtZeroNumReg.test("-22") === false);
    });
  });

  describe("gteZeroNumReg", () => {
    it("gteZeroNumReg 01", () => {
      assert(gteZeroNumReg.test("0.1") === true);
    });
    it("gteZeroNumReg 02", () => {
      assert(gteZeroNumReg.test("0.10") === true);
    });
    it("gteZeroNumReg 03", () => {
      assert(gteZeroNumReg.test("1.23") === true);
    });
    it("gteZeroNumReg 04", () => {
      assert(gteZeroNumReg.test("11") === true);
    });
    it("gteZeroNumReg 05", () => {
      assert(gteZeroNumReg.test("11.") === false);
    });
    it("gteZeroNumReg 06", () => {
      assert(gteZeroNumReg.test("0") === true);
    });
    it("gteZeroNumReg 07", () => {
      assert(gteZeroNumReg.test("0.") === false);
    });
    it("gteZeroNumReg 08", () => {
      assert(gteZeroNumReg.test("0.00") === true);
    });
    it("gteZeroNumReg 09", () => {
      assert(gteZeroNumReg.test("-0.00") === false);
    });
  });

  describe("gtZeroNumStrictReg", () => {
    it("gtZeroNumStrictReg 01", () => {
      assert(gtZeroNumStrictReg.test("0.1") === true);
    });
    it("gtZeroNumStrictReg 02", () => {
      assert(gtZeroNumStrictReg.test("0.10") === false);
    });
    it("gtZeroNumStrictReg 03", () => {
      assert(gtZeroNumStrictReg.test("1.23") === true);
    });
    it("gtZeroNumStrictReg 04", () => {
      assert(gtZeroNumStrictReg.test("11") === true);
    });
    it("gtZeroNumStrictReg 05", () => {
      assert(gtZeroNumStrictReg.test("11.") === false);
    });
    it("gtZeroNumStrictReg 06", () => {
      assert(gtZeroNumStrictReg.test("0") === false);
    });
    it("gtZeroNumStrictReg 07", () => {
      assert(gtZeroNumStrictReg.test("0.") === false);
    });
    it("gtZeroNumStrictReg 08", () => {
      assert(gtZeroNumStrictReg.test("0.00") === false);
    });
    it("gtZeroNumStrictReg 09", () => {
      assert(gtZeroNumStrictReg.test("-1.11") === false);
    });
  });

  describe("gteZeroNumStrictReg", () => {
    it("gteZeroNumStrictReg 01", () => {
      assert(gteZeroNumStrictReg.test("0.1") === true);
    });
    it("gteZeroNumStrictReg 02", () => {
      assert(gteZeroNumStrictReg.test("0.10") === false);
    });
    it("gteZeroNumStrictReg 03", () => {
      assert(gteZeroNumStrictReg.test("1.23") === true);
    });
    it("gteZeroNumStrictReg 04", () => {
      assert(gteZeroNumStrictReg.test("11") === true);
    });
    it("gteZeroNumStrictReg 05", () => {
      assert(gteZeroNumStrictReg.test("11.") === false);
    });
    it("gteZeroNumStrictReg 06", () => {
      assert(gteZeroNumStrictReg.test("0") === true);
    });
    it("gteZeroNumStrictReg 07", () => {
      assert(gteZeroNumStrictReg.test("0.") === false);
    });
    it("gteZeroNumStrictReg 08", () => {
      assert(gteZeroNumStrictReg.test("0.00") === false);
    });
    it("gteZeroNumStrictReg 09", () => {
      assert(gteZeroNumStrictReg.test("-0.00") === false);
    });
  });

  describe("intReg", () => {
    it("intReg 01", () => {
      assert(intReg.test("0.1") === false);
    });
    it("intReg 02", () => {
      assert(intReg.test("0") === true);
    });
    it("intReg 03", () => {
      assert(intReg.test("-0") === false);
    });
    it("intReg 04", () => {
      assert(intReg.test("11") === true);
    });
    it("intReg 05", () => {
      assert(intReg.test("-11") === true);
    });
  });

  describe("gtZeroIntReg", () => {
    it("gtZeroIntReg 01", () => {
      assert(gtZeroIntReg.test("0.1") === false);
    });
    it("gtZeroIntReg 02", () => {
      assert(gtZeroIntReg.test("0") === false);
    });
    it("gtZeroIntReg 03", () => {
      assert(gtZeroIntReg.test("11") === true);
    });
    it("gtZeroIntReg 04", () => {
      assert(gtZeroIntReg.test("-11") === false);
    });
  });

  describe("gteZeroIntReg", () => {
    it("gteZeroIntReg 01", () => {
      assert(gteZeroIntReg.test("0.1") === false);
    });
    it("gteZeroIntReg 02", () => {
      assert(gteZeroIntReg.test("0") === true);
    });
    it("gteZeroIntReg 03", () => {
      assert(gteZeroIntReg.test("11") === true);
    });
    it("gteZeroIntReg 04", () => {
      assert(gteZeroIntReg.test("-11") === false);
    });
  });

  describe("floatReg", () => {
    it("floatReg 01", () => {
      assert(floatReg.test("0.1") === true);
    });
    it("floatReg 02", () => {
      assert(floatReg.test("0.10") === true);
    });
    it("floatReg 03", () => {
      assert(floatReg.test("1.23") === true);
    });
    it("floatReg 04", () => {
      assert(floatReg.test("11") === false);
    });
    it("floatReg 05", () => {
      assert(floatReg.test("-1.23") === true);
    });
    it("floatReg 06", () => {
      assert(floatReg.test("0") === false);
    });
    it("floatReg 07", () => {
      assert(floatReg.test("0.") === false);
    });
    it("floatReg 08", () => {
      assert(floatReg.test("0.00") === true);
    });
    it("floatReg 08", () => {
      assert(floatReg.test("-0.00") === false);
    });
    it("floatReg 09", () => {
      assert(floatReg.test("-0.01") === true);
    });
  });

  describe("floatStrictReg", () => {
    it("floatStrictReg 01", () => {
      assert(floatStrictReg.test("0.1") === true);
    });
    it("floatStrictReg 02", () => {
      assert(floatStrictReg.test("0.10") === false);
    });
    it("floatStrictReg 03", () => {
      assert(floatStrictReg.test("-1.23") === true);
    });
    it("floatStrictReg 04", () => {
      assert(floatStrictReg.test("11") === false);
    });
    it("floatStrictReg 05", () => {
      assert(floatStrictReg.test("-1.23") === true);
    });
    it("floatStrictReg 06", () => {
      assert(floatStrictReg.test("0") === false);
    });
    it("floatStrictReg 07", () => {
      assert(floatStrictReg.test("0.") === false);
    });
    it("floatStrictReg 08", () => {
      assert(floatStrictReg.test("0.00") === false);
    });
    it("floatStrictReg 08", () => {
      assert(floatStrictReg.test("-0.00") === false);
    });
  });

  describe("gtZeroFloatReg", () => {
    it("gtZeroFloatReg 01", () => {
      assert(gtZeroFloatReg.test("0.1") === true);
    });
    it("gtZeroFloatReg 02", () => {
      assert(gtZeroFloatReg.test("0.10") === true);
    });
    it("gtZeroFloatReg 03", () => {
      assert(gtZeroFloatReg.test("1.23") === true);
    });
    it("gtZeroFloatReg 04", () => {
      assert(gtZeroFloatReg.test("11") === false);
    });
    it("gtZeroFloatReg 05", () => {
      assert(gtZeroFloatReg.test("-1.23") === false);
    });
    it("gtZeroFloatReg 06", () => {
      assert(gtZeroFloatReg.test("0") === false);
    });
    it("gtZeroFloatReg 07", () => {
      assert(gtZeroFloatReg.test("0.") === false);
    });
    it("gtZeroFloatReg 08", () => {
      assert(gtZeroFloatReg.test("0.00") === false);
    });
  });

  describe("gteZeroFloatReg", () => {
    it("gteZeroFloatReg 01", () => {
      assert(gteZeroFloatReg.test("0.1") === true);
    });
    it("gteZeroFloatReg 02", () => {
      assert(gteZeroFloatReg.test("0.10") === true);
    });
    it("gteZeroFloatReg 03", () => {
      assert(gteZeroFloatReg.test("1.23") === true);
    });
    it("gteZeroFloatReg 04", () => {
      assert(gteZeroFloatReg.test("11") === false);
    });
    it("gteZeroFloatReg 05", () => {
      assert(gteZeroFloatReg.test("-1.23") === false);
    });
    it("gteZeroFloatReg 06", () => {
      assert(gteZeroFloatReg.test("0") === false);
    });
    it("gteZeroFloatReg 07", () => {
      assert(gteZeroFloatReg.test("0.00") === true);
    });
    it("gteZeroFloatReg 08", () => {
      assert(gteZeroFloatReg.test("-0.00") === false);
    });
  });

  describe("gtZeroFloatStrictReg", () => {
    it("gtZeroFloatStrictReg 01", () => {
      assert(gtZeroFloatStrictReg.test("0.1") === true);
    });
    it("gtZeroFloatStrictReg 02", () => {
      assert(gtZeroFloatStrictReg.test("0.10") === false);
    });
    it("gtZeroFloatStrictReg 03", () => {
      assert(gtZeroFloatStrictReg.test("1.23") === true);
    });
    it("gtZeroFloatStrictReg 04", () => {
      assert(gtZeroFloatStrictReg.test("11") === false);
    });
    it("gtZeroFloatStrictReg 05", () => {
      assert(gtZeroFloatStrictReg.test("-1.23") === false);
    });
    it("gtZeroFloatStrictReg 06", () => {
      assert(gtZeroFloatStrictReg.test("0") === false);
    });
    it("gtZeroFloatStrictReg 07", () => {
      assert(gtZeroFloatStrictReg.test("0.") === false);
    });
    it("gtZeroFloatStrictReg 08", () => {
      assert(gtZeroFloatStrictReg.test("0.00") === false);
    });
  });

  describe("specialCharacterReg", () => {
    it("specialCharacterReg 01", () => {
      assert(specialCharacterReg.test("[") === true);
    });
    it("specialCharacterReg 02", () => {
      assert(specialCharacterReg.test(".") === true);
    });
    it("specialCharacterReg 03", () => {
      assert(specialCharacterReg.test("1.23") === true);
    });
    it("specialCharacterReg 04", () => {
      assert(specialCharacterReg.test("123") === false);
    });
    it("specialCharacterReg 05", () => {
      assert(specialCharacterReg.test("1.23") === true);
    });
  });
});
