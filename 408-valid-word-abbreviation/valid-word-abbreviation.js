/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function(word, abbr) {
    let abp = 0, wp = 0, number = 0;

    while (abp < abbr.length && wp < word.length) {
        if (!isNaN(abbr[abp])) {
            number = number * 10 + Number(abbr[abp]);
            if (number === 0) return false;
            abp++;
        } else if (number > 0) {
            wp += number;
            number = 0;
        } else if (abbr[abp] == word[wp]) {
            abp++;
            wp++;
        } else return false;
    }

    return abp === abbr.length && wp + number === word.length;
};
