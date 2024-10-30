/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const words = s.split(' ');
    if (pattern.length !== words.length) return false; // Different lengths mean no possible bijection

    const charToWord = new Map();
    const wordToChar = new Map();

    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        const word = words[i];

        // Check if there's an existing mapping for char to word
        if (charToWord.has(char)) {
            if (charToWord.get(char) !== word) return false;
        } else {
            charToWord.set(char, word);
        }

        // Check if there's an existing mapping for word to char
        if (wordToChar.has(word)) {
            if (wordToChar.get(word) !== char) return false;
        } else {
            wordToChar.set(word, char);
        }
    }

    return true;
};
