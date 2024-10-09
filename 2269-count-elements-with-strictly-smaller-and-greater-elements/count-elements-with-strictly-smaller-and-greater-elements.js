/**
 * @param {number[]} nums
 * @return {number}
 */
var countElements = function(nums) {
    let noom = nums.sort((a, b) => a - b); // Sort the array numerically
    let min = Math.min(...nums)
    let max = Math.max(...nums)
    let ans = 0;
    // Loop through the array, counting elements strictly between min and max
    for (let i = 0; i < noom.length - 1; i++) {
        if (nums[i] < max && nums[i] > min) ans++;
    }

    return ans;
};
