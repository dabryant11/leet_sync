
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let ans = [[],[]]
    let longest = Math.max(nums1.length,nums2.length)

    for ( let i =0;i<longest;i++){
        if( i < nums1.length && !nums2.includes(nums1[i]) && !ans[0].includes(nums1[i])) ans[0].push(nums1[i])
        if( i < nums2.length && !nums1.includes(nums2[i]) && !ans[1].includes(nums2[i])) ans[1].push(nums2[i])
    }
    return ans 
};
