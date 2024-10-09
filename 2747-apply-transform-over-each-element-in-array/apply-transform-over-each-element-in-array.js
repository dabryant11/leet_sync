/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let ans = [];
    arr.forEach((element, index) => {
        ans.push(fn(element, index));  // Call fn with element and index
    });
    return ans;
};
