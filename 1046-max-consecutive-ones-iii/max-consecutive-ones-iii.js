/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let ans = 0
    let flips = 0
    let left = 0

    for (let right = 0;right <nums.length;right++){
        if(nums[right] === 0) flips ++

        while (flips >k){
            if(nums[left] == 0) flips--
            left++
        }
        ans = Math.max(ans,(right-left) +1)
    }

    return ans
};