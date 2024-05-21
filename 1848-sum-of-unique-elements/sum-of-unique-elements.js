/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let count = {}
    let sum = 0
    for (let i=0; i<nums.length;i++){
        if (!count[nums[i]]) count[nums[i]] = 0
        count[nums[i]] ++
    }

    for ( let key in count){
        if (count[key] === 1) sum += parseInt(key)
        

    }
    return sum
};