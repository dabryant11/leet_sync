/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    let capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let result = ''
    for (let i=0;i<s.length;i++){
        if (capitalLetters.includes(s[i])){
             result += s[i].toLowerCase()
        } else result += s[i]
    }

    return result
};