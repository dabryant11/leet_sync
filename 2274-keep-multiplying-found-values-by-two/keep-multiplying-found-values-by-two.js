/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
// var findFinalValue = function(nums, original) {
//     //iterate
//     // num og check
//     // 2 * og  = og
//     let newOriginal = original
//     for ( let num of nums) {
//         if ( num == newOriginal) {
//             newOriginal *= 2
//         }
//     }
//     return newOriginal 
    
// };

var findFinalValue = function(nums, original) {
    let newOriginal = original;
    nums.sort((a,b) => a-b)
    for (let i=0; i < nums.length; i++) {
console.log("nums[i]", nums[i])
console.log("newOriginal", newOriginal)
        if (nums[i] === newOriginal) {
            newOriginal *= 2;
        }
    }
    return newOriginal;
};
