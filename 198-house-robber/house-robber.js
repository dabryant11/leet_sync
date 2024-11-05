/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 0) return 0; // No houses to rob
    if (nums.length === 1) return nums[0]; // Only one house to rob

    let prev1 = 0; // Maximum amount up to the previous house
    let prev2 = 0; // Maximum amount up to the house before the previous one

    for (let num of nums) {
        let temp = prev1;
        prev1 = Math.max(prev1, prev2 + num); // Max of robbing this house or skipping it
        prev2 = temp; // Move prev1 to prev2 for the next iteration
    }

    return prev1; // The maximum amount robbed without adjacent houses
};
