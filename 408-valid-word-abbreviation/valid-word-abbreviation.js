/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function(word, abbr) {
    // 2pointers
    // same check if abbr num  incre word pointer
    // 2 pointer end check

    let wp = 0
    let ap = 0

    while (ap < abbr.length && wp<word.length){
        if(!isNaN(abbr[ap])){
            if( abbr[ap] === "0") return false
            let num = ''
            while (wp<word.length && !isNaN(abbr[ap])){
                num+=abbr[ap]
                ap++
            }
            wp += parseInt(num)
        }
        else if( word[wp] === abbr[ap]){
            ap ++
            wp ++
        }
        else return false
    }
    return wp === word.length  && ap === abbr.length 
};