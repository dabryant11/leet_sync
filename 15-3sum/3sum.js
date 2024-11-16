/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b); // Sort the array to enable two-pointer approach
    let ans = [];

    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicates for the 'i' pointer
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                ans.push([nums[i], nums[left], nums[right]]);
                // Skip duplicates for the 'left' pointer
                while (left < right && nums[left] === nums[left + 1]) left++;
                // Skip duplicates for the 'right' pointer
                while (left < right && nums[right] === nums[right - 1]) right--;

                // Move both pointers after finding a valid triplet
                left++;
                right--;
            } else if (sum < 0) {
                left++;  // We need a larger sum, so move 'left' pointer right
            } else {
                right--;  // We need a smaller sum, so move 'right' pointer left
            }
        }
    }

    return ans;
};
