/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let words = s.split(" ")
    if ( pattern.length !== words.length) return false

    let wordToPattern = new Map()
    let patternToWord = new Map()

    for ( let i=0;i<pattern.length;i++){
        let word = words[i]
        let char = pattern[i]
        if(wordToPattern.has(word)){
            if(wordToPattern.get(word) !== char) return false
        }
        else {
            wordToPattern.set(word,char)
            
        }

        if(patternToWord.has(char)){
            if(patternToWord.get(char) !== word) return false
        }else {
            patternToWord.set(char, word)

        }
    }
    return true
};