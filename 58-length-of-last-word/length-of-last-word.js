/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {

    let curr = s.length -1
    let currLength = 0
    let ans = 0
    let wordHasStarted = false
    while (curr >= 0){
        if (/[a-zA-Z]/.test(s[curr]) && !wordHasStarted){
            wordHasStarted = true
            currLength ++
        } else if (/[a-zA-Z]/.test(s[curr]) && wordHasStarted){
            currLength ++
        } else if (!/[a-zA-Z]/.test(s[curr]) && wordHasStarted){
            return currLength
        }
        curr --

    }

    return currLength
};