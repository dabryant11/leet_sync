/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    let common = {}

    for (let char of words[0]) {
        common[char] =  (common[char] || 0) +1
    }

    for (let i = 1; i < words.length; i++) {
        let charCount = {}
        for (let char of words[i]) { 
            charCount[char] =  (charCount[char] || 0) +1
        }
        for (let char in common) {
            charCount[char] ? common[char] = Math.min(common[char], charCount[char]) : delete common[char]
        }
    }

    let ans = []

       for (let char in common) {
        for (let i = 0; i < common[char]; i++) {
            ans.push(char);
        }
    }

    return ans
    
};
