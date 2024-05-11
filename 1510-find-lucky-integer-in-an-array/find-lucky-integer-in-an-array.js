/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let count = {}
    arr.sort((a,b) => a-b)
    for (let i = arr.length - 1; i >= 0; i--) {
        if (!count[arr[i]]) count[arr[i]] = 0
        count[arr[i]]++
        if (count[arr[i]] === arr[i] && arr[i] !== arr[i -1] ) return arr[i]
    }
    return -1
};
