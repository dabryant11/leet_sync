/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    let order=0

   for(let i=0;i<nums.length;i++){
       if(nums[i]>nums[i+1]) order++
   }
   
    nums[0]<nums[nums.length-1] && order++
    
    return order<2
};