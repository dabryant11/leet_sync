/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let posCount = 0
    let negCount = 0
    for (let i=0;i<nums.length;i++){
        if (nums[i]< 0) negCount ++
        if (nums[i]> 0) posCount ++
    }
    let ans = Math.max(posCount,negCount)
    return ans
};