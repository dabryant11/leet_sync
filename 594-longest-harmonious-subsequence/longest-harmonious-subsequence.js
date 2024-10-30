/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    let map = {}
    let maxLen = 0

    for (let i =0;i<nums.length;i++){
        if(!map[nums[i]])map[nums[i]] =0
        map[nums[i]] ++
    }

    for (let num in map){
        let currNum = parseInt(num)
        if(map[currNum+1]) maxLen = Math.max(maxLen,map[currNum] + map[currNum+1])
    }
    return maxLen


}
