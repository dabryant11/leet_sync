/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let count = {}

    for ( let i =0; i < chars.length; i++){
        if (!count[chars[i]]) count[chars[i]] =0
        count[chars[i]] ++
    }
    let ans = 0
    for (let i=0; i<words.length; i++){
      localCount = {...count}
        for (let j=0; j<words[i].length; j++){
            if (!localCount[words[i][j]] || localCount[words[i][j]] === 0) break
            localCount[words[i][j]] --
            if (j ===  words[i].length -1) ans += words[i].length
        }
    }
    return ans
};