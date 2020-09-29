exports.min = function min(array) {
    if (Boolean(array) && array.length > 0) {
        const getMin = (array) => array.reduce((a, b) => Math.min(a, b));
        return min = getMin(array);
    }
    return 0;
};

exports.max = function max(array) {
    if (Boolean(array) && array.length > 0) {
        const getMax = (array) => array.reduce((a, b) => Math.max(a, b));
        return max = getMax(array);
    }
    return 0;
};

exports.avg = function avg(array) {
    if (Boolean(array) && array.length > 0) {
        let result = array.reduce((sum, current) => sum + current, 0);
        return result / array.length;
    }
    return 0;
};


