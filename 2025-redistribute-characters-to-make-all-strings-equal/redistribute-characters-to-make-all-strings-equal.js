/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function(words) {
    let count = {};
    let totalWords = words.length;

    if (totalWords === 1) return true;

    // Count the occurrences of each character in all words
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            let char = words[i][j];
            if (!count[char]) count[char] = 0;
            count[char]++;
        }
    }

    // Check if each character count is divisible by the number of words
    for (let key in count) {
        if (count[key] % totalWords !== 0) return false;
    }

    return true;
};
