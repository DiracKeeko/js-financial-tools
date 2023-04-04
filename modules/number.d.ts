declare function isRealNumber(num: any): boolean;
declare function float(num: number | string | undefined | null, precision?: number | string, placeholder?: string): string;
declare function percentage(num: number | string | undefined | null, precision?: number | string, placeholder?: string): string;
/**
 * Implement rounding down to a specified number of decimal places
 * 实现指定小数点位数的向下取值(不进位舍入)
 *
 */
declare function decimalFloor(num: number, decimalPrecision?: number): string;
declare function decimalRound(num: number, decimalPrecision?: number): string;
declare function decimalCeil(num: number, decimalPrecision?: number): string;

export { decimalCeil, decimalFloor, decimalRound, float, isRealNumber, percentage };
