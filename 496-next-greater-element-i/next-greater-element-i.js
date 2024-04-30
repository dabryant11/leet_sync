/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let ans = [];
    let map = {};

    // Create a map of numbers to their indices in nums2
    for (let i = 0; i < nums2.length; i++) {
        map[nums2[i]] = i;
    }

    // Iterate over nums1
    for (let i = 0; i < nums1.length; i++) {
        let found = false;
        let idx = map[nums1[i]] + 1; // Index of the next element in nums2
        // Check if there is a next greater element
        while (idx < nums2.length) {
            if (nums2[idx] > nums1[i]) {
                ans.push(nums2[idx]);
                found = true;
                break;
            }
            idx++;
        }
        // If no greater element found, push -1
        if (!found) {
            ans.push(-1);
        }
    }

    return ans;
};
