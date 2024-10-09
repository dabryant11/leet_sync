/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function(word) {

    const numbersArray = word.match(/\d+/g);
    if(!numbersArray) return 0
        
    
    const numbers = numbersArray.map(BigInt);
    const uniqueArray = new Set(numbers);
    return uniqueArray.size
    
};