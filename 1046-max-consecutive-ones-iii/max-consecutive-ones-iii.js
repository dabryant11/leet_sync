/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let left = 0
    let flips = 0
    let highestStreak = 0

    for (let right =0;right<nums.length;right++){
        if(nums[right] === 0) flips ++

        while (flips>k){
            if(nums[left] === 0) flips --
            left ++
        }
        highestStreak = Math.max(highestStreak,right-left +1)
    }

    return highestStreak
};