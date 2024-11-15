/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */
var calculateTime = function(keyboard, word) {
    let keyboardMap = {}
    for(let i =0;i<keyboard.length;i++){
        let char = keyboard[i]
        keyboardMap[char] = i
    }
    
    let sum = keyboardMap[word[0]] - 0
    for(let i =1;i<word.length;i++){
        let curr = i
        let prev = i-1
        sum += Math.abs(keyboardMap[word[curr]]-keyboardMap[word[prev]])
    }

    
    return sum 
};