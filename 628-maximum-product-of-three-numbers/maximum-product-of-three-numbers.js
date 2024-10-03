/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
   
   nums.sort((a,b) => a-b)
   let n = nums.length

   let end = nums[n-1] * nums[n-2] * nums[n-3]
   let start = nums[n-1] * nums[1] * nums[0]

   return end > start ? end : start
};