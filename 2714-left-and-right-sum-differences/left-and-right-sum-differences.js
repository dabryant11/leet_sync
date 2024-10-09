/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    let leftSumArr =[]
    let leftSum =0
    let rightSumArr =[]
    let rightSum = 0
    let left = 0
    let right = nums.length -1
    while (left < nums.length){
        leftSumArr.push(leftSum)
        rightSumArr.unshift(rightSum)
        leftSum += nums[left]
        rightSum += nums[right]
        left ++
        right --
    }

    let ans = []

    for (let i=0;i<nums.length;i++){
        ans.push(Math.abs(leftSumArr[i] - rightSumArr[i]))
    }
    return ans
};