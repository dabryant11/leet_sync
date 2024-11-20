/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function(word, abbr) {
    let wp = 0
    let ap = 0

    while ( ap < abbr.length && wp<word.length){
        if(!isNaN(abbr[ap])){
            if(abbr[ap] === "0") return false
            let num = ""
            while(!isNaN(abbr[ap]) && wp<word.length){
                num += abbr[ap]
                ap ++
            }
            wp += parseInt(num)
        } else if ( abbr[ap] === word[wp]){
            wp ++
            ap++
        } else return false
    }
    return wp === word.length && ap === abbr.length

};