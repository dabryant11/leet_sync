/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let highest = 0
    let secHighest = 0

    for ( let i=0;i<nums.length;i++){
        let curr = nums[i]
        // if (curr > secHighest) highest = Math.max(curr,highest)
        // else secHighest = Math.max(highest,secHighest)


        if (curr > highest) {
            secHighest = highest;
            highest = curr;
        } else if (curr > secHighest) {
            secHighest = curr;
        }
    }
    return (highest - 1) * (secHighest - 1)
};