/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    let onePointer = 0
    let twoPointer = 0
    while (onePointer < nums1.length && twoPointer < nums2.length){
        if(nums1[onePointer] === nums2[twoPointer]) return nums1[onePointer]
        else if(nums1[onePointer] < nums2[twoPointer]) onePointer ++
        else twoPointer ++
    }
    return -1
};