/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
 let l = 0;
    for (let r = 1; r < nums.length; r++) {
        if (nums[l] !== nums[r]) {
            l += 1;
            [nums[l], nums[r]] = [nums[r], nums[l]];
        }
    }
    return l + 1;
};