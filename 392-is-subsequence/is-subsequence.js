/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let tPointer = 0
    let sPointer = 0

    while (sPointer<s.length && tPointer < t.length){
        if(t[tPointer] === s[sPointer]) sPointer ++
        tPointer++
    }
    return s.length == sPointer
};