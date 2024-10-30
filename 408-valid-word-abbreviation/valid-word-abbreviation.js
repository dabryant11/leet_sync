/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function(word, abbr) {
    let i = 0, j = 0, number = 0;

    while (i < abbr.length && j < word.length) {
        if (!isNaN(abbr[i])) {
            number = number * 10 + Number(abbr[i]);
            if (number === 0) return false;
            i++;
        } else if (number > 0) {
            j += number;
            number = 0;
        } else if (abbr[i] == word[j]) {
            i++;
            j++;
        } else return false;
    }

    return i === abbr.length && j + number === word.length;
};
