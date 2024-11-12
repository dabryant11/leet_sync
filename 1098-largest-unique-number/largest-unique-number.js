/**
 * @param {number[]} nums
 * @return {number}
 */
var largestUniqueNumber = function(nums) {
    let map = {}
    
    for(let i =0;i<nums.length;i++){
        if(!map[nums[i]]) map[nums[i]] = 0
        map[nums[i]] ++
    }

    let sortedMap = Object.keys(map).map(Number).sort((a,b) => b-a)
    for (let key of sortedMap){
        if(map[key] <2) return key
    }

    return -1
};