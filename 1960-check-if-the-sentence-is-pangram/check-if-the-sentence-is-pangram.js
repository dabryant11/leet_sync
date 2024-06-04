/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let count = {}
    for (let i=0;i<sentence.length;i++){
        if (!count[sentence[i]]) count[sentence[i]] = 1
    }

    return Object.keys(count).length === 26
};