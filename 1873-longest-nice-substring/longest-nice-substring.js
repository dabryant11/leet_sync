/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function(s) {
    if (s.length < 2) return "";  // A single character cannot form a nice substring
    
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        
        // If a character doesn't have both its upper and lower case in the string
        if ((char === char.toLowerCase() && !s.includes(char.toUpperCase())) || 
            (char === char.toUpperCase() && !s.includes(char.toLowerCase()))) {
            
            // Recursively find the longest nice substring on both sides of the breaking character
            let left = longestNiceSubstring(s.slice(0, i));
            let right = longestNiceSubstring(s.slice(i + 1));
            
            // Return the longer of the two substrings
            return left.length >= right.length ? left : right;
        }
    }
    
    // If the entire string is nice, return the string
    return s;
};
