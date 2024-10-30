/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let words = s.split(" ")

    if (words.length !== pattern.length) return false

    let charToWord = new Map()
    let wordToChar = new Map()

    for (let i=0;i<words.length;i++){
        let char = pattern[i]
        let word = words[i]
        if(charToWord.has(char)){
            if(charToWord.get(char) !== word) return false
        } else{
            charToWord.set(char, word)
        }
        if(wordToChar.has(word)){
            if(wordToChar.get(word) !== char) return false
        } else{
            wordToChar.set(word, char)
        }
    }
    return true
};