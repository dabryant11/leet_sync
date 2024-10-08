/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let ans = []
    let left = 0
    let right = n

    while (right<nums.length){
        ans.push(nums[left])
        ans.push(nums[right])
        left ++
        right ++
    }
    return ans
    
};