/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let total = nums.reduce((accumulator, currVal) => accumulator + currVal, 0);
    let ans = [total]
    for (let i = nums.length - 2; i >= 0; i--){
        total -= nums[i +1]
        ans.unshift(total)
    }
    return ans


};