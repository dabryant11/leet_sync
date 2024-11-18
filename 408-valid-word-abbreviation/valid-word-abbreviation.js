/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function(word, abbr) {
    let i = 0
    let j = 0

    while ( i<word.length && j <abbr.length){
        if (!isNaN(abbr[j])){
            if( abbr[j] === "0") return false
            let num = ""
            while (j<abbr.length && !isNaN(abbr[j])){
                num += abbr[j]
                j ++
            }
            i += parseInt(num)
        } else if (word[i] === abbr[j]){
            i++
            j++
        } else return false
    }

    return i === word.length && j === abbr.length
};