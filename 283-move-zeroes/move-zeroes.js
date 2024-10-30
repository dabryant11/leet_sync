/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let left = 0
    let right = left+1
    while (right <= nums.length -1){

        if(nums[left] !== 0) {
            left++
            right++
        } else {
            if (nums[right] !== 0){
                [nums[right], nums[left]] = [nums[left], nums[right]]
                left ++
            }
            right ++
        }
        // if(nums[right] === 0 && nums[left] === 0)right --
        // else if(nums[right] !== 0 && nums[left] === 0){
        //     [nums[right], nums[left]] = [nums[left], nums[right]]
        //  }
        //     left ++ 
        //     right --
    }
    return nums
};