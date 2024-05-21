/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function(words) {
    let count = {}
    if (words.length === 1) return true

    for (let i=0; i<words.length;i++){
        for (let j=0; j<words[i].length;j++){
            if (!count[words[i][j]]) count[words[i][j]] = 0
            count[words[i][j]] ++
        }
    }

    for(let key in count){
        console.log("count", count)
        if (count[key] % words.length !== 0) return false
    }
    return true
};