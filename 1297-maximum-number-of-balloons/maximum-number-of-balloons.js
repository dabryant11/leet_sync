/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let hashMap = {
        "b":0,
        "a":0,
        "l":0,
        "o":0,
        "n":0,
    }
    
    for (let i =0;i< text.length; i++) {
        if (hashMap.hasOwnProperty(text[i])) {
            if (text[i] === "l" || text[i] === "o") hashMap[text[i]] += 0.5
            else hashMap[text[i]] ++
        }
    }

    let minIndex = Infinity; 

    for (let key in hashMap) {
            if ( key === "o"|| key === "l" ) minIndex = Math.min(minIndex,Math.floor(hashMap[key]))
            else{
                minIndex = Math.min(hashMap[key],minIndex)
            }
        
    }



    return minIndex
};