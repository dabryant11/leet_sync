/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    let firstHalf = true
    let firsthVow = 0
    let sechVow = 0
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    for (let i=0;i<s.length;i++){
        if (i >= s.length/2) firstHalf = false
        if (vowels.includes(s[i]) && firstHalf) firsthVow ++
        if (vowels.includes(s[i]) && !firstHalf) sechVow ++
    }

    return firsthVow === sechVow
};