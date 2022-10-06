declare function isRealNumber(num: any): boolean;
declare function float(num: number, precision: number, placeholder?: string): string;
declare function percentage(num: number, precision: number, placeholder?: string): string;

export { float, isRealNumber, percentage };
