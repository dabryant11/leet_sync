/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function(nums, k) {
    let count = 0;
    let map = {}; // Map to store indices of each number
    
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        
        // Check if we have previous indices for this number
        if (map[num]) {
            for (let j of map[num]) {
                if (i * j % k === 0) {
                    count++;
                }
            }
        }
        
        // Add the current index to the map for the current number
        if (!map[num]) {
            map[num] = [];
        }
        map[num].push(i);
    }
    
    return count;
};
