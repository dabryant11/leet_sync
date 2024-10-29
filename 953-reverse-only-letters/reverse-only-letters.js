/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    let ans = s.split("")
    let left = 0
    let right = s.length -1

    let isLetter = (char) => /^[a-zA-Z]$/.test(char)

    while ( left < right){
        if (!isLetter(ans[left])) left ++ 
        else if (!isLetter(ans[right])) right--
        else {
            [ans[right], ans[left]] = [ans[left], ans[right]]
            left ++
            right --
        }
    }

    return ans.join('')
};