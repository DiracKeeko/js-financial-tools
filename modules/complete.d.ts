declare function completeStockTimeDataArr(TimeDataArr: number[][], itemArrLength?: number): number[][];
declare type TimeDataObj = {
    date: string;
    time: string;
    change: number;
    valuation: number;
};
declare type ResObj = {
    x: number;
    y: number | undefined;
    z: number | undefined;
};
declare function completeStockTimeDataObjArr(TimeDataObjArr: TimeDataObj[]): ResObj[];

export { completeStockTimeDataArr, completeStockTimeDataObjArr };
