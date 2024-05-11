/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let prefix = "";
    let index = 0;

    // Find the prefix
    while (index < word.length && word[index] !== ch) {
        prefix += word[index];
        index++;
    }

    if (index === word.length) {
        // If the character 'ch' is not found in the word,
        // return the original word
        return word;
    }

    // Include the character at index 'index' in the prefix
    prefix += word[index];

    // Reverse the prefix
    prefix = prefix.split("").reverse().join("");

    // Append the rest of the word after the prefix
    return prefix + word.substring(index + 1);
};
