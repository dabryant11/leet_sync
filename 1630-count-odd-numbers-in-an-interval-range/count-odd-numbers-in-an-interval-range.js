/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    let ans = 0
    while (low<=high){
        if (low % 2 !== 0) ans ++
        low ++
    }
    return ans
};