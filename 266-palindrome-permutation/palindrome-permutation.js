/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
    let map = {}
    for(let char of s){
        if(!map[char]) map[char] = 0
        map[char] ++
    }
    let unEvenChar = 0
    let wordIsEven = s.length % 2 == 0
    for ( let key in map){
        if(map[key] % 2 !== 0) unEvenChar ++
    }

    if(wordIsEven && unEvenChar >0) return false
    else if(!wordIsEven && unEvenChar !== 1) return false
    else return true
};