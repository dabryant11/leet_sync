/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    //check asc
    // check biggest 
    // return biggest
    let minNum = nums[0]
    let biggest = -1

    for ( let i=1;i<nums.length;i++){
        if (nums[i] > minNum){
            biggest = Math.max(biggest, nums[i] - minNum)
        } else {
            minNum = nums[i]
        }
    }
    return biggest 
    
};