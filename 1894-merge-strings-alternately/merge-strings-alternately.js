/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let ans = ""
    let onePointer = 0
    let twoPointer = 0
    while (onePointer < word1.length || twoPointer < word2.length){
        if (word1[onePointer]) ans += word1[onePointer]
        if (word2[twoPointer]) ans += word2[twoPointer]
        onePointer ++
        twoPointer ++
    }
    return ans
};