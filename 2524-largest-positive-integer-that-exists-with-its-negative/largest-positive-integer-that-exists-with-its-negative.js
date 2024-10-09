/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    nums.sort((a, b) => a - b)

    let left = 0
    let right = nums.length -1

    while (left < right){
        if ( nums[right] === -nums[left]) return nums[right]
        else if ( nums[right] > - nums[left] ) right --
        else left ++
    }

    return -1
};