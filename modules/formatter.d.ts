declare function formatRank(val: number | string | undefined): string;
declare function formatLongText(val: string | undefined, limit?: number): string;
declare function formatWithUnit(val: number | undefined, unitStr?: string, precision?: number): string;
declare function formatToMonetaryShape(val: number | undefined | string, precision?: number): string;
declare function formatToFloat(val: number | undefined, plusSign?: string, precision?: number, scale?: number): string;
declare function formatToPercent(val: number | undefined, plusSign?: string, precision?: number, scale?: number): string;
declare function trimJsonStr(jsonStr: string): string;

export { formatLongText, formatRank, formatToFloat, formatToMonetaryShape, formatToPercent, formatWithUnit, trimJsonStr };
