/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    // If the strings are already equal, return true
    if (s1 === s2) return true;

    // If the lengths are not equal, return false
    if (s1.length !== s2.length) return false;
    
    // Array to store indices where characters differ
    let diffIndices = [];

    // Loop through the strings and collect indices of mismatched characters
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            diffIndices.push(i);
        }
    }

    // If there are no mismatches, strings are already equal
    if (diffIndices.length === 0) return true;
    
    // If there are exactly two mismatches, check if swapping makes the strings equal
    if (diffIndices.length === 2) {
        let [i, j] = diffIndices;
        return s1[i] === s2[j] && s1[j] === s2[i];
    }

    // More than two mismatches means they can't be made equal with one swap
    return false;
};
