/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
    let words = s.split(" ")
    let prevNum = -Infinity 

    for ( let word of words){
        if (!isNaN(word)){
            let currNum = Number(word)
            if (prevNum >= currNum) return false
            prevNum = currNum
        }

    }
    return true
};