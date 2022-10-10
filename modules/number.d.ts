declare function isRealNumber(num: any): boolean;
declare function float(num: number | string | undefined | null, precision?: number | string, placeholder?: string): string;
declare function percentage(num: number | string | undefined | null, precision?: number | string, placeholder?: string): string;

export { float, isRealNumber, percentage };
