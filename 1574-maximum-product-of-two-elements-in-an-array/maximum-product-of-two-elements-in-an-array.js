/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let high = 0
    let secHigh = 0

    for (let i=0;i<nums.length;i++){
        if(nums[i] > high){
            secHigh = high
            high = nums[i]
        } else if (nums[i] > secHigh){
            secHigh = nums[i]
        }
    }
    return (high - 1) * (secHigh -1) 
};