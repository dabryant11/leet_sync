/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    let count = {};
    // Convert paragraph to lowercase and split into an array of words
    let parArr = paragraph.toLowerCase().split(/\W+/);
    
    // Count occurrences of each word
    for (let i = 0; i < parArr.length; i++) {
        let word = parArr[i];
        if (!banned.includes(word) && word.length > 0) {
            count[word] = (count[word] || 0) + 1;
        }
    }
    
    // Find the most common word
    let mostCommon = '';
    let maxCount = 0;
    for (let word in count) {
        if (count[word] > maxCount) {
            mostCommon = word;
            maxCount = count[word];
        }
    }

    return mostCommon;
};


