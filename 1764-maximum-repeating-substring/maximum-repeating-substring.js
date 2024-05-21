/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {
    let maxRepeat = 0;
    let repeatWord = word;

    while (sequence.includes(repeatWord)) {
        maxRepeat++;
        repeatWord += word;
    }

    return maxRepeat;
};
