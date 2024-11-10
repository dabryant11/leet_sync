/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let ans = []

    for ( let num of nums){
        ans.push(num * num)
    }

    return ans.sort((a,b) => a-b)
};