/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if(num === 1) return true
    let curr = 2
    while (curr < num){
        if(curr * curr === num) return true
        if(curr * curr < num) curr ++
        if(curr * curr > num) return false
    }
    
};