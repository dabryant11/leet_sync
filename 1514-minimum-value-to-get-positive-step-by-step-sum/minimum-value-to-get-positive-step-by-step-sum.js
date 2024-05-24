/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
   let minSum = 0;
    let currentSum = 0;

    // Iterate through the nums array to find the minimum running sum
    for (let i = 0; i < nums.length; i++) {
        currentSum += nums[i];
        if (currentSum < minSum) {
            minSum = currentSum;
        }
    }

    // The minimum start value must be such that the smallest running sum is at least 1
    return 1 - minSum;
};