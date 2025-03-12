/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    
 let hay = haystack.length
 let need = needle.length;

    for (let i = 0; i <= hay - need; i++) {  // Only iterate until valid start positions
        let j = 0;
        while (j < need && haystack[i + j] === needle[j]) {  
            j++;
        }
        if (j === need) return i;  // If full match found, return starting index
    }

    return -1; // Not found
};