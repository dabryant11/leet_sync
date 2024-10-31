/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    strs.sort()
    let firstWord = strs[0]
    let lastWord = strs[strs.length -1]
    let ans = ""

    for (let i=0; i < firstWord.length; i++){
        if(firstWord[i] === lastWord[i]) ans += firstWord[i]
        else break
    }
    return ans
};
