/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
var maximumBags = function(capacity, rocks, additionalRocks) {
    // number of bags that could have full capacity.
    let result = 0;
    // the number of capacities left in bag ith. For example, 
    // cap = [2,3,4,5], rocks = [1,2,4,4], then we have [2 - 1 = 1,
    // 1, 0, 1].
    for(let i = 0; i < rocks.length; i++){
        rocks[i] = capacity[i] - rocks[i];
        result += rocks[i];
    }
    // check if additional rocks can place in all of the bags. For example, you have 
    // 100 rocks and 10 capacities left, then maximum number of bags always equal to
    // number of bags. 
    if(additionalRocks >= result) return rocks.length;
    // sort rocks array to find least stone first. Greedy approach. For example,
    // [8, 0, 2] => [0, 2, 8].
    rocks.sort(function(a, b){return a - b});
    // Set result to 0 to compute maximum number of bags.
    result = 0;
    // keep adding rocks until there isn't enough rocks to add anymore. 
    // Because additional rocks cant place in all 
    // of the bags (additionalRocks >= result)
    // So don't need to return result because additionalRocks < result. For example, 
    // 8 rocks and 10 space left so just add it.
    for(let i in rocks){
        result += rocks[i];
        if(result > additionalRocks) return i;
    } 
};