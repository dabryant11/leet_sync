/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let ans = 0
    for(let num of nums){
        let x = num.toString().split("")
        if(x.length % 2 === 0) ans ++
    }
    return ans
};