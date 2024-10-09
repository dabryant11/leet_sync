/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function(nums) {
    let numChanges = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] <= nums[i - 1]) {
            numChanges++;
            
            if (numChanges > 1) {
                return false;
            }
            
            // Check if skipping nums[i-1] or nums[i] would make the array increasing
            if (i > 1 && nums[i] <= nums[i - 2] && nums[i + 1] <= nums[i - 1]) {
                return false;
            }
        }
    }

    return true;
};
