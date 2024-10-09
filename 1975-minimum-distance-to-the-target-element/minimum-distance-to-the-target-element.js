/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function(nums, target, start) {
      let left = start, right = start;
    
    // While within bounds of the array
    while (left >= 0 || right < nums.length) {
        // Check if the target is found at either left or right position
        if (left >= 0 && nums[left] === target) return Math.abs(left - start);
        if (right < nums.length && nums[right] === target) return Math.abs(right - start);
        
        // Move one step in both directions
        left--;
        right++;
    }
};