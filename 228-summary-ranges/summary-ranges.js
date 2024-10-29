/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    let result = [];
    let start = nums[0];
    for (let i = 1; i <= nums.length; i++) {
        if (nums[i] - nums[i - 1] === 1) continue;
        if (start === nums[i - 1]) {
            result.push(`${start}`);
        }
        else {
            result.push(`${start}->${nums[i - 1]}`);
        }
        start = nums[i];
    }
    return result;
};