/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let highest = 0
    let secondHighest = 0
    for (let i = 0;i<nums.length;i++){
        if ( nums[i] > highest ){
            secondHighest = highest
            highest = nums[i]
        } else if (nums[i] > secondHighest) secondHighest = nums[i]
    }
    return (highest -1) * (secondHighest -1)
};