/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
    let sortedNums = nums.sort((a,b) => a-b)
    let midPoint = Math.floor(nums.length /2)
    let sum = 0
    for (let i=0; i<nums.length;i++){
        sum += Math.abs(sortedNums[midPoint] - nums[i])
    }
    return sum

};