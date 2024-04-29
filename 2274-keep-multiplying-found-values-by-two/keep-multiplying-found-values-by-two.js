// /**
//  * @param {number[]} nums
//  * @param {number} original
//  * @return {number}
//  */
// // var findFinalValue = function(nums, original) {
// //     //iterate
// //     // num og check
// //     // 2 * og  = og
// //     let newOriginal = original
// //     for ( let num of nums) {
// //         if ( num == newOriginal) {
// //             newOriginal *= 2
// //         }
// //     }
// //     return newOriginal 
    
// // };

// var findFinalValue = function(nums, original) {
//     let newOriginal = original;
//     nums.sort((a,b) => a-b)
//     for (let num of nums) {
// console.log("num", num)
// console.log("newOriginal", newOriginal)
//         if (num === newOriginal) {
//             newOriginal *= 2;
//         }
//     }
//     return newOriginal;
// };


/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
  while ( nums.includes(original)) original *= 2
  return original 
};