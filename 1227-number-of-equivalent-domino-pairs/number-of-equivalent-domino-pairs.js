/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
    let output = 0;
    const hashmap = new Map();
    
    for (let i = 0 ; i < dominoes.length; i++) {
        const key = dominoes[i].toString();
        const reverseKey = dominoes[i].reverse().toString();

        output += (hashmap.get(key) || 0) + (hashmap.has(reverseKey) && key !== reverseKey ? hashmap.get(reverseKey) : 0);
        
        
        if (!hashmap.has(key)) {
            hashmap.set(key, 1);
        } else {
            hashmap.set(key, hashmap.get(key) + 1);
        }
    }
    
    return output;
};

