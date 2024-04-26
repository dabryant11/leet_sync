/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let hashMap = {
        "b": 0,
        "a": 0,
        "l": 0,
        "o": 0,
        "n": 0,
    };
    
    for (let i = 0; i < text.length; i++) {
        if (text[i] === "l" || text[i] === "o") {
            hashMap[text[i]] += 0.5; // Increment by 0.5 for "l" and "o"
        } else if (hashMap[text[i]] !== undefined) {
            hashMap[text[i]]++; // Increment by 1 for other characters in the map
        }
    }

    let minIndex = Infinity; 

    for (let key in hashMap) {
        if (key === "l" || key === "o") {
            minIndex = Math.min(minIndex, Math.floor(hashMap[key]));
        } else {
            minIndex = Math.min(minIndex, hashMap[key]);
        }
    }

    return minIndex;
};
