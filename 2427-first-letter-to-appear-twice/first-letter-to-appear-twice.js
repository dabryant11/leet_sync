/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    let count = {}

    for ( let letter of s) {
        if (!count[letter]) count[letter] = 1
        else return letter
    }
};