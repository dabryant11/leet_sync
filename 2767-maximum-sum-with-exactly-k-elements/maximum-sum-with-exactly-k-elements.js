/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
    nums.sort((a,b) => a-b)
    let ans = nums[nums.length -1]

    while (k -1 > 0) {
        nums[nums.length -1] ++
        ans += nums[nums.length -1]
        k--
    }
    return ans  
};

//   let max = Math.max(...nums);
//     sum = max;

//     /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
// var maximizeSum = function(nums, k) {
//     let max = Math.max(...nums);
//     sum = max;
//     for(let i=1; i<k; i++){
//         sum+= max+i;
//     }
//     return sum;
// };