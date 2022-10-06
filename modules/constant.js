function getDateTime(date) {
    return new Date(date).getTime();
}
const wholeQuarterRangeMap = {
    Q1: ["01-01", "03-31"],
    Q2: ["04-01", "06-30"],
    Q3: ["07-01", "09-30"],
    Q4: ["10-01", "12-31"],
};
const wholeYearRangeArr = ["01-01", "12-31"];

export { getDateTime, wholeQuarterRangeMap, wholeYearRangeArr };
