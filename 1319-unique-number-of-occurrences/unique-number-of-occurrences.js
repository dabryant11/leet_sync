/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let count = {}

    for (let i = 0; i < arr.length; i++) {
        if (!count[arr[i]]) count[arr[i]] = 0
        count[arr[i]]++
    }

    let arr2 = []
    for (let key in count) {
        if (arr2.includes(count[key])) return false
        arr2.push(count[key])
    }
    return true
};
