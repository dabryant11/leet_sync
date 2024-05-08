/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    let ans = []
    let string = ''
    for (let i=0; i<nums.length;i++){
        string+= nums[i]
    }
    for (let i=0;i<string.length;i++){
        ans.push(string[i])
    }
    return ans
};