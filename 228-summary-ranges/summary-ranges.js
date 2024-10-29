/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
   let ans = []
   let start = nums[0]
   for (let curr=1;curr<=nums.length;curr++){
    if(nums[curr] - nums[curr -1] === 1) continue
    if(start === nums[curr -1]){
        ans.push(`${start}`)
    } else ans.push(`${start}->${nums[curr-1]}`)
    
    start = nums[curr]
   }
   return ans
};