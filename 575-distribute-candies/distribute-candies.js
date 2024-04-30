/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    //iterate
    //map check
    //add to count
    // min of count or n/2
    let count = {}
    let unq = 0
    let maxNum = candyType.length  /2

    for ( let num of candyType) {
        if (!count[num]) {
            count[num] = 1
            unq++
        }
        if (unq === Math.floor(candyType.length/2)) return unq;

    }

    return unq 
};