/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let ans = 0
    for(let i =0;i<nums.length;i++){
        let num = nums[i].toString().split("")
        if(num.length % 2 === 0) ans ++

    }
    return ans
};