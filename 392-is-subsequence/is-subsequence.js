/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let sPointer = 0;
    let tPointer = 0;

    // Loop through t and check if characters of s are in sequence
    while (sPointer < s.length && tPointer < t.length) {
        if (s[sPointer] === t[tPointer]) {
            sPointer++; // Move to the next character in s if we have a match
        }
        tPointer++; // Always move to the next character in t
    }

    // If we've matched all characters in s, return true
    return sPointer === s.length;
};
