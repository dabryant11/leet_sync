/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number[][]}
 */
var findMissingRanges = function(nums, lower, upper) {
    let ans = []
    nums = [lower -1, ...nums,upper +1]

    for ( let i =1 ;i<nums.length;i++){
        let start = nums[i-1] +1
        let end = nums[i]-1

        if(start === end) ans.push([start,end])
        else if(start < end) ans.push([start,end])
    }
    return ans
};