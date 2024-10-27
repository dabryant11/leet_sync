/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    let minNum = nums[0];
    let maxDiff = -1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > minNum) {
            maxDiff = Math.max(maxDiff, nums[i] - minNum);
        } else {
            minNum = nums[i];
        }
    }
    return maxDiff;
};
