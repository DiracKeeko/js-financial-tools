/*
  A complete stock trading timeline is shown below:
  // time format: YYYYMMDDHHmm
  [
    202108220900, 202108220901, ..., 202108221129, 202108221130,
    202108221301, 202108221302, ..., 202108221459, 202108221500,
  ]

  Function completeStockTimeDataArr is used to complete the time data of sotck trading backwards.

  Examples are as follows

  TimeDataArr :
  [ [202108220900, numberA1], [202108220901, numberA2] ] // itemArrLength = 2
  return data :
  [ [202108220900, numberA1], [202108220901, numberA2], ..., [202108221459, undefined], [202108221500, undefined] ]
  // itemArrLength = 2

  TimeDataArr :
  [ [202108220900, numberA1, numberB1], [202108220901, numberA2, numberB2] ] // itemArrLength = 3
  return data :
  [ [202108220900, numberA1, numberB1], [202108220901, numberA2, numberB2], ..., [202108221500, undefined, undefined] ]
  // itemArrLength = 3
*/
function completeStockTimeDataArr(TimeDataArr, itemArrLength = 2) {
    const data = TimeDataArr.map((item) => {
        return item.slice(0, itemArrLength);
    });
    const undefinedArr = new Array(itemArrLength - 1).fill(undefined);
    const dataMaxStr = data[data.length - 1].toString();
    const dataMaxStrPre = dataMaxStr.slice(0, 8);
    const dataMaxStrAfter = dataMaxStr.slice(8, 12);
    const hour = Number(dataMaxStrAfter.slice(0, 2));
    const minute = Number(dataMaxStrAfter.slice(2, 4));
    let h = hour;
    let m = minute + 1;
    if (h === 11 && m === 31) {
        h = 13;
        m = 1;
    }
    while (h < 15) {
        while (m < 60) {
            const timeNumber = Number(`${dataMaxStrPre}${h < 10 ? `0${h}` : h}${m < 10 ? `0${m}` : m}`);
            data.push([timeNumber, ...undefinedArr]);
            m += 1;
            if (h === 11 && m > 30) {
                h += 1;
                break;
            }
        }
        m = h === 12 ? 1 : 0;
        h += 1;
        h === 15 && data.push([Number(`${dataMaxStrPre}1500`), ...undefinedArr]);
    }
    return data;
}
function completeStockTimeDataObjArr(TimeDataObjArr) {
    const data = TimeDataObjArr.map((item) => {
        return {
            x: Number(`${item.date}${item.time.slice(0, 4)}`),
            y: item.change,
            z: item.valuation,
        };
    });
    const dataMaxStrPre = TimeDataObjArr[TimeDataObjArr.length - 1].date;
    const dataMaxStrAfter = TimeDataObjArr[TimeDataObjArr.length - 1].time.slice(0, 4);
    const hour = Number(dataMaxStrAfter.slice(0, 2));
    const minute = Number(dataMaxStrAfter.slice(2, 4));
    let h = hour;
    let m = minute + 1;
    if (h === 11 && m === 31) {
        h = 13;
        m = 1;
    }
    while (h < 15) {
        while (m < 60) {
            const timeNumber = Number(`${dataMaxStrPre}${h < 10 ? `0${h}` : h}${m < 10 ? `0${m}` : m}`);
            data.push({ x: timeNumber, y: undefined, z: undefined });
            m += 1;
            if (h === 11 && m > 30) {
                h += 1;
                break;
            }
        }
        m = h === 12 ? 1 : 0;
        h += 1;
        h === 15 &&
            data.push({
                x: Number(`${dataMaxStrPre}1500`),
                y: undefined,
                z: undefined,
            });
    }
    return data;
}

export { completeStockTimeDataArr, completeStockTimeDataObjArr };
