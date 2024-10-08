/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let maxLen = 0
    let currLen = 0
    let fast = 0
    while (fast < nums.length){
        if (nums[fast] === 1) {
            currLen ++
        }
        else {
            maxLen = Math.max(currLen, maxLen)
            currLen = 0
        }
        fast ++
    }
            maxLen = Math.max(currLen, maxLen)

    return maxLen
    
};