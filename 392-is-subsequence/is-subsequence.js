/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let sPointer = 0
    let tPointer = 0

    while ( tPointer < t.length && sPointer < s.length){
        if (t[tPointer] === s[sPointer]) sPointer ++
        tPointer ++
    }
    return sPointer === s.length
};