/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    nums.sort((a, b) => a - b); // Sort the array in ascending order

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        if (nums[right] === -nums[left]) {
            return nums[right]; // Return the positive value when a pair is found
        } else if (nums[right] > -nums[left]) {
            right--; // Move right pointer if the positive number is too large
        } else {
            left++; // Move left pointer if the negative number is too small
        }
    }

    return -1; // Return -1 if no such pair is found
};
