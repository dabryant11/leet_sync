/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let numsSum = nums.reduce((total,curr) => total + curr, 0) 
    let n = nums.length
    let expectedSum = (n*(n+1)) /2

    return expectedSum - numsSum

};