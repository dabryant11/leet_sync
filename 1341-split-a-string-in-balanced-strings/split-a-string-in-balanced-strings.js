/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let balance = 0;
    let result = 0;

    for (let i of s) {
        i === 'L' ? balance-- : balance++
        if (balance === 0) result++;
    }

    return result;
};