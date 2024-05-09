/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let ans = []
    let smallerArr = nums1
    let largerArr = nums2
    if (nums1.length > nums2.length) {
        smallerArr = nums2
        largerArr = nums1
    }

    for (let i=0; i< smallerArr.length; i++){
        if (largerArr.includes(smallerArr[i]) && !ans.includes(smallerArr[i])) ans.push(smallerArr[i])
    }
    return ans
};