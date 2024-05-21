/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    let idxDiff = []

    for (let i=0;i<s1.length;i++){
        if (s1[i] !== s2[i]){
            idxDiff.push(i)
        }
    }

    if (s2 === s1) return true
    if (idxDiff.length > 2) return false
    let [i,j] = idxDiff
    return s1[i] === s2[j] && s1[j] === s2[i]
};