var twoSumLessThanK = function(nums, k) {
    nums.sort((a, b) => a - b);
    let left = 0;
    let right = nums.length - 1;
    let maxSum = -1;

    while (left < right) {
        let sum = nums[left] + nums[right];
        if (sum < k) {
            maxSum = Math.max(maxSum, sum);
            left++; // Try a larger sum by moving left pointer right
        } else {
            right--; // Try a smaller sum by moving right pointer left
        }
    }

    return maxSum;
};
