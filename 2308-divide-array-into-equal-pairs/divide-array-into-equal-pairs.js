/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    
    let ans = []
    let count = {}

    for (let i = 0; i < nums.length; i++){
        if (!count[nums[i]]) count[nums[i]] = 0
        count[nums[i]] ++
    }
    
    for ( let key in count){
    
        if (count[key] % 2 !== 0) return false
    }
    return true
};