/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    // let curr = 1
    // let prev = 0
    // if (nums[curr] > nums[prev]) let asc = true
    // if (nums[curr] < nums[prev]) let desc = true
    // while ( curr < nums.length){
    //     if (asc && curr <= prev) return false
    //     else if (desc && curr >= prev) return false
    //     curr ++
    //     prev ++

    // }
    // return true

      if (nums.length <= 2) return true; // Any array with <= 2 elements is monotonic

    let asc = true;
    let desc = true;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            desc = false;
        } else if (nums[i] < nums[i - 1]) {
            asc = false;
        }
        
        // If both asc and desc become false, it means nums is not monotonic
        if (!asc && !desc) return false;
    }

    return true;
};