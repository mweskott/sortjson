
function sortJson(unsorted) {
    return Object.keys(unsorted).sort().reduce((obj, key) => {obj[key] = unsorted[key]; return obj}, {});
}

function missingRight(left, right) {
    return Object.keys(left).reduce((obj, key) => {
        if (!right[key]) {
            obj[key] = left[key];
        }
        return obj;
    }, {});
}


module.exports = { sortJson,  missingRight };

