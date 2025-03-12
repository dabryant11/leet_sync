/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    
 let n = haystack.length
 let m = needle.length;

    for (let i = 0; i <= n - m; i++) {  // Only iterate until valid start positions
        let j = 0;
        while (j < m && haystack[i + j] === needle[j]) {  
            j++;
        }
        if (j === m) return i;  // If full match found, return starting index
    }

    return -1; // Not found
};