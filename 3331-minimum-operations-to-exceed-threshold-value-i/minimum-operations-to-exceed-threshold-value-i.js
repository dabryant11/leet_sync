/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    nums.sort((a,b) => a-b)
    let ans = 0
    for (let i=0;i<nums.length;i++){
        if(nums[i] < k) ans ++
        if(nums[i] == k) break
    }
    return ans
};