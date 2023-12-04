// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {
    return keys.reduce((obj, cur, idx) => {
        // if not enough values, rest of keys should have value of null
        obj[cur] = idx < values.length ? values[idx] : null;
        return obj;
    }, {});

}
