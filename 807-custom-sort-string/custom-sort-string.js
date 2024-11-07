/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    let charCount = {}

    for (let char of order){
        charCount[char] = 0
    }

    for (let char of s){
        if (charCount[char] !== undefined) charCount[char] ++
    }

    let sortedS = ""

    for (let char of order){
        if (charCount[char]  !== undefined){
            sortedS += char.repeat(charCount[char])
        }
    }

    for (let char of s){
        if (charCount[char] === undefined) sortedS += char
    }

    return sortedS
};