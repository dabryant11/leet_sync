/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    
    while ( n > 3){
        n = n / 3
    }

    if ( n <= 0  ) return false 
    if ( n % 3 === 0 || n == 1 ) return true
    else return false
};