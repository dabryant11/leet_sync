/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    let largest = -1
    let secLargest = -1
    for(let char of s){
        if(!isNaN(char)){
            let digit = parseInt(char)
            if( digit > largest){
                secLargest = largest
                largest = digit
            } else if (digit < largest && digit > secLargest){
                secLargest = digit
            }
        }
    }
    return secLargest
};