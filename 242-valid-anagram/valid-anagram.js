/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // Convert strings to arrays, sort them, and convert them back to strings
    let sortedS = s.split("").sort().join("");
    let sortedT = t.split("").sort().join("");
    
    // Compare the sorted strings
    return sortedS === sortedT;
};
