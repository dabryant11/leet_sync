/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let left = 0
    let right = 0
    let maxCount = 0
    let flips = 0

    while (right < nums.length){
        if(nums[right] !== 1){
            flips ++
            while(flips > k){
                if(nums[left] == 0 ) flips --
                left ++
            }
        }
        maxCount = Math.max(right - left +1,maxCount)
        right ++
    }
    return maxCount
};