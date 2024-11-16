/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let left = 0
    let right = left + 1

    while (right <nums.length){
        if(nums[left] !== 0){
            left ++
            right ++
        } else {
            if (nums[right] !== 0){
                [nums[left], nums[right]] = [nums[right], nums[left]]
                left ++
            }
            right ++
        }
    }

    return nums
};