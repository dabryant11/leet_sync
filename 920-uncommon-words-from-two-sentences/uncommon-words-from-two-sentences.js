/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    let new1 = s1.split(" ")
    let new2 = s2.split(" ")
    let ans = []
    let wordCount = {}
    
    for ( let word of new1){
        if(!wordCount[word]) wordCount[word] = 0
        wordCount[word] ++
    }
    
    for ( let word of new2){
        if(!wordCount[word]) wordCount[word] = 0
        wordCount[word] ++
    }

    for(let word of Object.keys(wordCount)){
        if(wordCount[word] === 1) ans.push(word)
    }

    return ans
};