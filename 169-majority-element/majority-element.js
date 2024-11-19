/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let majority = Math.floor(nums.length /2)
    let map = {}

    for ( let num of nums){
        if(!map[num]) map[num] = 0
        map[num] ++
        if (map[num] > majority) return num
    }
};