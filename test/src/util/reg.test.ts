import { reg } from "@/util";

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
      expect(gtZeroNumReg.test("0.1")).toBe(true);
    });
    it("gtZeroNumReg 02", () => {
      expect(gtZeroNumReg.test("0.10")).toBe(true);
    });
    it("gtZeroNumReg 03", () => {
      expect(gtZeroNumReg.test("1.23")).toBe(true);
    });
    it("gtZeroNumReg 04", () => {
      expect(gtZeroNumReg.test("11")).toBe(true);
    });
    it("gtZeroNumReg 05", () => {
      expect(gtZeroNumReg.test("11.")).toBe(false);
    });
    it("gtZeroNumReg 06", () => {
      expect(gtZeroNumReg.test("0")).toBe(false);
    });
    it("gtZeroNumReg 07", () => {
      expect(gtZeroNumReg.test("0.")).toBe(false);
    });
    it("gtZeroNumReg 08", () => {
      expect(gtZeroNumReg.test("0.00")).toBe(false);
    });
    it("gtZeroNumReg 09", () => {
      expect(gtZeroNumReg.test("-22")).toBe(false);
    });
  });

  describe("gteZeroNumReg", () => {
    it("gteZeroNumReg 01", () => {
      expect(gteZeroNumReg.test("0.1")).toBe(true);
    });
    it("gteZeroNumReg 02", () => {
      expect(gteZeroNumReg.test("0.10")).toBe(true);
    });
    it("gteZeroNumReg 03", () => {
      expect(gteZeroNumReg.test("1.23")).toBe(true);
    });
    it("gteZeroNumReg 04", () => {
      expect(gteZeroNumReg.test("11")).toBe(true);
    });
    it("gteZeroNumReg 05", () => {
      expect(gteZeroNumReg.test("11.")).toBe(false);
    });
    it("gteZeroNumReg 06", () => {
      expect(gteZeroNumReg.test("0")).toBe(true);
    });
    it("gteZeroNumReg 07", () => {
      expect(gteZeroNumReg.test("0.")).toBe(false);
    });
    it("gteZeroNumReg 08", () => {
      expect(gteZeroNumReg.test("0.00")).toBe(true);
    });
    it("gteZeroNumReg 09", () => {
      expect(gteZeroNumReg.test("-0.00")).toBe(false);
    });
  });

  describe("gtZeroNumStrictReg", () => {
    it("gtZeroNumStrictReg 01", () => {
      expect(gtZeroNumStrictReg.test("0.1")).toBe(true);
    });
    it("gtZeroNumStrictReg 02", () => {
      expect(gtZeroNumStrictReg.test("0.10")).toBe(false);
    });
    it("gtZeroNumStrictReg 03", () => {
      expect(gtZeroNumStrictReg.test("1.23")).toBe(true);
    });
    it("gtZeroNumStrictReg 04", () => {
      expect(gtZeroNumStrictReg.test("11")).toBe(true);
    });
    it("gtZeroNumStrictReg 05", () => {
      expect(gtZeroNumStrictReg.test("11.")).toBe(false);
    });
    it("gtZeroNumStrictReg 06", () => {
      expect(gtZeroNumStrictReg.test("0")).toBe(false);
    });
    it("gtZeroNumStrictReg 07", () => {
      expect(gtZeroNumStrictReg.test("0.")).toBe(false);
    });
    it("gtZeroNumStrictReg 08", () => {
      expect(gtZeroNumStrictReg.test("0.00")).toBe(false);
    });
    it("gtZeroNumStrictReg 09", () => {
      expect(gtZeroNumStrictReg.test("-1.11")).toBe(false);
    });
  });

  describe("gteZeroNumStrictReg", () => {
    it("gteZeroNumStrictReg 01", () => {
      expect(gteZeroNumStrictReg.test("0.1")).toBe(true);
    });
    it("gteZeroNumStrictReg 02", () => {
      expect(gteZeroNumStrictReg.test("0.10")).toBe(false);
    });
    it("gteZeroNumStrictReg 03", () => {
      expect(gteZeroNumStrictReg.test("1.23")).toBe(true);
    });
    it("gteZeroNumStrictReg 04", () => {
      expect(gteZeroNumStrictReg.test("11")).toBe(true);
    });
    it("gteZeroNumStrictReg 05", () => {
      expect(gteZeroNumStrictReg.test("11.")).toBe(false);
    });
    it("gteZeroNumStrictReg 06", () => {
      expect(gteZeroNumStrictReg.test("0")).toBe(true);
    });
    it("gteZeroNumStrictReg 07", () => {
      expect(gteZeroNumStrictReg.test("0.")).toBe(false);
    });
    it("gteZeroNumStrictReg 08", () => {
      expect(gteZeroNumStrictReg.test("0.00")).toBe(false);
    });
    it("gteZeroNumStrictReg 09", () => {
      expect(gteZeroNumStrictReg.test("-0.00")).toBe(false);
    });
  });

  describe("intReg", () => {
    it("intReg 01", () => {
      expect(intReg.test("0.1")).toBe(false);
    });
    it("intReg 02", () => {
      expect(intReg.test("0")).toBe(true);
    });
    it("intReg 03", () => {
      expect(intReg.test("-0")).toBe(false);
    });
    it("intReg 04", () => {
      expect(intReg.test("11")).toBe(true);
    });
    it("intReg 05", () => {
      expect(intReg.test("-11")).toBe(true);
    });
  });

  describe("gtZeroIntReg", () => {
    it("gtZeroIntReg 01", () => {
      expect(gtZeroIntReg.test("0.1")).toBe(false);
    });
    it("gtZeroIntReg 02", () => {
      expect(gtZeroIntReg.test("0")).toBe(false);
    });
    it("gtZeroIntReg 03", () => {
      expect(gtZeroIntReg.test("11")).toBe(true);
    });
    it("gtZeroIntReg 04", () => {
      expect(gtZeroIntReg.test("-11")).toBe(false);
    });
  });

  describe("gteZeroIntReg", () => {
    it("gteZeroIntReg 01", () => {
      expect(gteZeroIntReg.test("0.1")).toBe(false);
    });
    it("gteZeroIntReg 02", () => {
      expect(gteZeroIntReg.test("0")).toBe(true);
    });
    it("gteZeroIntReg 03", () => {
      expect(gteZeroIntReg.test("11")).toBe(true);
    });
    it("gteZeroIntReg 04", () => {
      expect(gteZeroIntReg.test("-11")).toBe(false);
    });
  });

  describe("floatReg", () => {
    it("floatReg 01", () => {
      expect(floatReg.test("0.1")).toBe(true);
    });
    it("floatReg 02", () => {
      expect(floatReg.test("0.10")).toBe(true);
    });
    it("floatReg 03", () => {
      expect(floatReg.test("1.23")).toBe(true);
    });
    it("floatReg 04", () => {
      expect(floatReg.test("11")).toBe(false);
    });
    it("floatReg 05", () => {
      expect(floatReg.test("-1.23")).toBe(true);
    });
    it("floatReg 06", () => {
      expect(floatReg.test("0")).toBe(false);
    });
    it("floatReg 07", () => {
      expect(floatReg.test("0.")).toBe(false);
    });
    it("floatReg 08", () => {
      expect(floatReg.test("0.00")).toBe(true);
    });
    it("floatReg 09", () => {
      expect(floatReg.test("-0.01")).toBe(true);
    });
  });

  describe("floatStrictReg", () => {
    it("floatStrictReg 01", () => {
      expect(floatStrictReg.test("0.1")).toBe(true);
    });
    it("floatStrictReg 02", () => {
      expect(floatStrictReg.test("0.10")).toBe(false);
    });
    it("floatStrictReg 03", () => {
      expect(floatStrictReg.test("-1.23")).toBe(true);
    });
    it("floatStrictReg 04", () => {
      expect(floatStrictReg.test("11")).toBe(false);
    });
    it("floatStrictReg 05", () => {
      expect(floatStrictReg.test("-1.23")).toBe(true);
    });
    it("floatStrictReg 06", () => {
      expect(floatStrictReg.test("0")).toBe(false);
    });
    it("floatStrictReg 07", () => {
      expect(floatStrictReg.test("0.")).toBe(false);
    });
    it("floatStrictReg 08", () => {
      expect(floatStrictReg.test("0.00")).toBe(false);
    });
    it("floatStrictReg 09", () => {
      expect(floatStrictReg.test("-0.00")).toBe(false);
    });
  });

  describe("gtZeroFloatReg", () => {
    it("gtZeroFloatReg 01", () => {
      expect(gtZeroFloatReg.test("0.1")).toBe(true);
    });
    it("gtZeroFloatReg 02", () => {
      expect(gtZeroFloatReg.test("0.10")).toBe(true);
    });
    it("gtZeroFloatReg 03", () => {
      expect(gtZeroFloatReg.test("1.23")).toBe(true);
    });
    it("gtZeroFloatReg 04", () => {
      expect(gtZeroFloatReg.test("11")).toBe(false);
    });
    it("gtZeroFloatReg 05", () => {
      expect(gtZeroFloatReg.test("-1.23")).toBe(false);
    });
    it("gtZeroFloatReg 06", () => {
      expect(gtZeroFloatReg.test("0")).toBe(false);
    });
    it("gtZeroFloatReg 07", () => {
      expect(gtZeroFloatReg.test("0.")).toBe(false);
    });
    it("gtZeroFloatReg 08", () => {
      expect(gtZeroFloatReg.test("0.00")).toBe(false);
    });
  });

  describe("gteZeroFloatReg", () => {
    it("gteZeroFloatReg 01", () => {
      expect(gteZeroFloatReg.test("0.1")).toBe(true);
    });
    it("gteZeroFloatReg 02", () => {
      expect(gteZeroFloatReg.test("0.10")).toBe(true);
    });
    it("gteZeroFloatReg 03", () => {
      expect(gteZeroFloatReg.test("1.23")).toBe(true);
    });
    it("gteZeroFloatReg 04", () => {
      expect(gteZeroFloatReg.test("11")).toBe(false);
    });
    it("gteZeroFloatReg 05", () => {
      expect(gteZeroFloatReg.test("-1.23")).toBe(false);
    });
    it("gteZeroFloatReg 06", () => {
      expect(gteZeroFloatReg.test("0")).toBe(false);
    });
    it("gteZeroFloatReg 07", () => {
      expect(gteZeroFloatReg.test("0.00")).toBe(true);
    });
    it("gteZeroFloatReg 08", () => {
      expect(gteZeroFloatReg.test("-0.00")).toBe(false);
    });
  });

  describe("gtZeroFloatStrictReg", () => {
    it("gtZeroFloatStrictReg 01", () => {
      expect(gtZeroFloatStrictReg.test("0.1")).toBe(true);
    });
    it("gtZeroFloatStrictReg 02", () => {
      expect(gtZeroFloatStrictReg.test("0.10")).toBe(false);
    });
    it("gtZeroFloatStrictReg 03", () => {
      expect(gtZeroFloatStrictReg.test("1.23")).toBe(true);
    });
    it("gtZeroFloatStrictReg 04", () => {
      expect(gtZeroFloatStrictReg.test("11")).toBe(false);
    });
    it("gtZeroFloatStrictReg 05", () => {
      expect(gtZeroFloatStrictReg.test("-1.23")).toBe(false);
    });
    it("gtZeroFloatStrictReg 06", () => {
      expect(gtZeroFloatStrictReg.test("0")).toBe(false);
    });
    it("gtZeroFloatStrictReg 07", () => {
      expect(gtZeroFloatStrictReg.test("0.")).toBe(false);
    });
    it("gtZeroFloatStrictReg 08", () => {
      expect(gtZeroFloatStrictReg.test("0.00")).toBe(false);
    });
  });

  describe("specialCharacterReg", () => {
    it("specialCharacterReg 01", () => {
      expect(specialCharacterReg.test("[")).toBe(true);
    });
    it("specialCharacterReg 02", () => {
      expect(specialCharacterReg.test(".")).toBe(true);
    });
    it("specialCharacterReg 03", () => {
      expect(specialCharacterReg.test("1.23")).toBe(true);
    });
    it("specialCharacterReg 04", () => {
      expect(specialCharacterReg.test("123")).toBe(false);
    });
  });
});
