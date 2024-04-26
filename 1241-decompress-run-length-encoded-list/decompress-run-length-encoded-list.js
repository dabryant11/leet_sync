/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {

    //two pointer
    let arr = []
    let i=0

    while (i<nums.length - 1) {
        let freq = nums[i]
        let val = nums[i + 1]
        while (freq > 0){
            arr.push(val)
            freq--
        }
         i+=2
    }
    return arr
};