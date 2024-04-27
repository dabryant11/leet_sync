/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
     let result = []
    for(let i = 0 ; i < words[0].length ; i++)
        for(let j = 1 ; j < words.length ; j++){
            if(!words[j].includes(words[0][i])) break;
            else  
                words[j] = words[j].replace(words[0][i],'')
            if(j == words.length - 1) result.push(words[0][i]);
        }
    return result;
    
};
