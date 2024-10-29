/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    
    let asc = true
    let desc = true
    
    for ( let i=1;i < nums.length;i++){
        let curr = nums[i]
        let prev = nums[i -1]
        if (curr < prev)  asc = false
        else if (curr > prev) desc = false
    
        if (!asc && !desc) return false
    }
    return true

      
};