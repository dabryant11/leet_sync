/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function(s) {
//     //sliding window
//     // iterate
//     // curr, max
//     // not same curr ++
//     // same math max curr max
//           // curr 0

//     let currSum = 0
//     let maxSum = 0
//     let count = {}

//     for (let char of s){
//         if (!count[char]) currSum ++
//         else {
//             maxSum = Math.max(maxSum, currSum)
//             count = {}
//         }
//     }

//     return maxSum
// };




var lengthOfLongestSubstring = function(s) {
    let currSum = 0;
    let maxSum = 0;
    let count = {};
    let start = 0;

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        //same
        if (count[char] !== undefined && count[char] >= start) {
            start = count[char] + 1;
            currSum = i - start;
        }
        //not same
        currSum++;
        count[char] = i;
        maxSum = Math.max(maxSum, currSum);
    }

    return maxSum;
};
