/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    const n = nums.length;
    if (nums[0] > 0 || nums[n - 1] < 0) return n;
    let left = 0;
    let right = n - 1;
    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);
        if (nums[mid] < 0) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    // now left pointer points the most left position that nums[left] >= 0
    if (nums[left] > 0) {
        return Math.max(left, n - left);
    }
    // if nums[left] is equals to 0, then we need to find the zero on the most right position
    const neg = left;
    right = n - 1;
    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);
        if (nums[mid] > 0) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    // defind the number of pos by checking nums[left]
    const pos = nums[left] === 0 ? n - left - 1 : n - left;
    return Math.max(pos, neg);
};