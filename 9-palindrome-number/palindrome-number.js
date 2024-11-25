/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let ex = x.toString()
    let left = 0
    let right = ex.length -1

    while ( left < right){
        if (ex[left] !== ex[right]) return false
        left ++
        right --

    }
    return true
};