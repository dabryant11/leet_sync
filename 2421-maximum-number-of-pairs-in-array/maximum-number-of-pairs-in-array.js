/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
    let count = {}
    let pair = 0 
    let single = 0 
    let ans = []

    for ( let num of nums) {
        if ( !count[num]) count[num] = 1
        else {
            count[num] ++
            if ( count[num] == 2) {
                count[num] = 0
                pair ++
            }
        }
    }
    
    for (let key of Object.keys(count)) {
        if ( count[key] == 1) single ++
    }
    ans.push(pair, single)
    
    return ans
};
