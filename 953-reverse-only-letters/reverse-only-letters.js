/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    let ans = s.split('')
    let left = 0
    let right = s.length -1

    let isLetter = (char) => /^[a-zA-Z]$/.test(char)

    while (left<right){
        if (!isLetter(ans[left])) left ++
        else if (!isLetter(ans[right])) right --
        else {
            [ans[left],ans[right]] = [ans[right],ans[left]] 
            left ++
            right --
        }
    }
    return ans.join('')
};