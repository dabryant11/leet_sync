/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function(nums, k) {
    let count = 0;
    let map = {}; // To track count of numbers seen so far
    
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        
        // Try to find a previous index that forms a valid pair with this number
        // For all previous instances of `num`, check if i * j % k == 0
        for (let j = 0; j < i; j++) {
            if (nums[i] === nums[j] && i * j % k === 0) {
                count++;
            }
        }
        
        // Track the number of occurrences of each number
        if (!map[num]) map[num] = 0;
        map[num]++;
    }
    
    return count;
};
