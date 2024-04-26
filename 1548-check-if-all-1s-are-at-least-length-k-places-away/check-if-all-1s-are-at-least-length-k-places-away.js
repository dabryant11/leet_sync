/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
    ++k
   let nextAllowed =  0
   for (let i=0; i< nums.length; i++){
        if ( nums[i]=== 0){
            continue
        } 
        if ( i < nextAllowed) return false

        nextAllowed = i + k
   }
   return true
};