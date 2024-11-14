/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    /// iterate
    /// use map for char
    // push to str
    // push str to map
    // check map values
    // if 1 add count

    const morseCodeAlphabet = {
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--.."
    };
    let transMap = {}
    for(let word of words){
        let codeString =""
        for(let char of word){
            codeString += morseCodeAlphabet[char]
        }
        if(!transMap[codeString]) transMap[codeString] = 1
    }
    
    return Object.keys(transMap).length
};