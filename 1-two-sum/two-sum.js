/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];

        // Check if the complement exists in the map
        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        // Store the index of the current number
        map.set(nums[i], i);
    }

    // Return an empty array if no solution is found (for safety)
    return [];
};
