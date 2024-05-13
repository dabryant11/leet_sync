/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let count = {}
    for ( let i=0; i< nums.length; i++){
        if (!count[nums[i]]) count[nums[i]] = 0
        count[nums[i]] ++
    }
    let ans = []
    for ( let key in count){
        if (count[key] <2) ans.push(key)
    }
    return ans
};