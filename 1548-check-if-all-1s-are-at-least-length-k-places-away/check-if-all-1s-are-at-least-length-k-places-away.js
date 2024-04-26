/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
    
    let nextAllowed = 0
    ++k
    for (let i =0; i< nums.length; i++) {
        if (nums[i] === 0) continue
        if (nums[i] !== 0 && i < nextAllowed) return false
        nextAllowed = i +k
    }

    return true 
};