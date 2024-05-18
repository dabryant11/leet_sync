/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    if ( num < 10) return 1
    let ans = 0
    let numSplit = num.toString()
    for (let i=0;i<numSplit.length;i++){
        if ( num % parseInt(numSplit[i]) === 0) ans ++
    }
    return ans
};