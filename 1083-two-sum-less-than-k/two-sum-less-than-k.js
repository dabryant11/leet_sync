/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var twoSumLessThanK = function(nums, k) {
    nums.sort((a,b)=> a-b)

    let left = 0
    let right = nums.length -1
    let maxSum = -1

//  [34,23,1,24,75,33,54,8]
//  L                R
//  [1,8,23,24,33,34,54,75]

    while (left<right){
        let sum = nums[left] + nums[right]
        if( sum >= k) right --
        else {
            maxSum = Math.max(maxSum,sum)
            left++
        }
    }
    return maxSum 
};