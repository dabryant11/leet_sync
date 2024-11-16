/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function(word, abbr) {
    let i = 0; // Pointer for word
    let j = 0; // Pointer for abbr
    
    while (i < word.length && j < abbr.length) {
        if (!isNaN(abbr[j]) && abbr[j] !== '0') {
            // Extract the number from abbr
            let num = "";
            while (j < abbr.length && !isNaN(abbr[j])) {
                num += abbr[j];
                j++;
            }
            i += parseInt(num); // Skip characters in word
        } else if (word[i] === abbr[j]) {
            i++;
            j++;
        } else {
            return false;
        }
    }
    
    // Ensure both pointers reach the end
    return i === word.length && j === abbr.length;
};
