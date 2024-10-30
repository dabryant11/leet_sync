/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    let map = {};
    let maxLen = 0;

    // Count frequencies of each number in nums
    for (let num of nums) {
        map[num] = (map[num] || 0) + 1;
    }

    // Check for harmonious subsequence lengths
    for (let num in map) {
        let currNum = parseInt(num);
        if (map[currNum + 1]) { // Check if there's a number with a difference of 1
            maxLen = Math.max(maxLen, map[currNum] + map[currNum + 1]);
        }
    }

    return maxLen;
};
