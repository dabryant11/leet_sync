/**
 * @param {string} word
 * @return {number}
 */
var countVowelSubstrings = function(word) {
    const vowels = new Set(["a", "e", "i", "o", "u"]);
    let count = 0;

    for (let start = 0; start < word.length; start++) {
        const seen = new Set();
        for (let end = start; end < word.length; end++) {
            if (!vowels.has(word[end])) {
                break; // Exit if a non-vowel is encountered
            }
            seen.add(word[end]);
            if (seen.size === 5) {
                count++;
            }
        }
    }
    return count;
};

