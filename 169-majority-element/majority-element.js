/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = {}

    for(let num of nums){
        if(!map[num]) map[num] = 0
        map[num] ++
    }

    for(let key in map){
        if(map[key] >= nums.length /2) return parseInt(key)
    }
};