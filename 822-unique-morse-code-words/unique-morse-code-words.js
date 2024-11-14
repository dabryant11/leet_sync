/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const morseCodeAlphabet = {
        "a": ".-", "b": "-...", "c": "-.-.", "d": "-..", "e": ".",
        "f": "..-.", "g": "--.", "h": "....", "i": "..", "j": ".---",
        "k": "-.-", "l": ".-..", "m": "--", "n": "-.", "o": "---",
        "p": ".--.", "q": "--.-", "r": ".-.", "s": "...", "t": "-",
        "u": "..-", "v": "...-", "w": ".--", "x": "-..-", "y": "-.--",
        "z": "--.."
    };

    const transMap = {};

    for (let word of words) {
        let codeString = "";
        for (let char of word) {
            codeString += morseCodeAlphabet[char];
        }
        transMap[codeString] = true;
    }

    return Object.keys(transMap).length;
};
