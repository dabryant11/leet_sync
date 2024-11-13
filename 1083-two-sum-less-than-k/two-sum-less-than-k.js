/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var twoSumLessThanK = function(nums, k) {
    nums.sort((a,b) => a-b)

    let left = 0
    let maxNum = -1
    let right = nums.length -1

    while (left<right){
        let sum = nums[left] + nums[right]
        if(sum < k) {
            maxNum = Math.max(maxNum,sum)
            left ++
        } else {
            right --
        }

    }
    return maxNum
};