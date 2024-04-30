/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let maxSum = 0
    let currSum = 0

    for (let i =0; i< k; i++){
        currSum += nums[i]
    }
    maxSum = currSum

    for ( let i=k; i<nums.length; i++) {
        currSum += nums[i] - nums[i - k]
        maxSum = Math.max(maxSum, currSum)
    }
    return maxSum / k
    
};