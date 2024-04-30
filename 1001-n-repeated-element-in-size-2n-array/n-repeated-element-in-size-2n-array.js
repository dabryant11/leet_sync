/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    // magic number
    // map iterate
    // check for magic num
    // return that num

    let magicNum = nums.length / 2
    let count = {}

    for ( let num of nums) {
        if(!count[num]) count[num] = 1
        else count[num] ++

        if (count[num] === magicNum) return num
    }
    
};