import { isRealNumber } from './number.js';

function gt(a, b) {
    if (!isRealNumber(b)) {
        return true;
    }
    if (!isRealNumber(a) && isRealNumber(b)) {
        return false;
    }
    return a > b;
}
function lte(a, b) {
    if (!isRealNumber(b)) {
        return true;
    }
    if (!isRealNumber(a) && isRealNumber(b)) {
        return false;
    }
    return a <= b;
}

export { gt, lte };
