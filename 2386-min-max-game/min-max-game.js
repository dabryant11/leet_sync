/**
 * @param {number[]} nums
 * @return {number}
 */
var minMaxGame = function(nums) {
    if(nums.length === 1) return nums[0]
    if(nums.length === 2) return Math.min(nums[0],nums[1])

    let newNums = []
    for(let i =0; i<nums.length; i+=4){
        newNums.push(Math.min(nums[i],nums[i+1]))
        newNums.push(Math.max(nums[i+2],nums[i+3]))
    }
    return minMaxGame(newNums)
};