/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var smallerNumbersThanCurrent = function(nums) {
//     let sortedNums = nums.sort()
//     let ans = []

//     for (let i =1; i< nums.length; i++) {
//         let prev = i -1
//         let count = 0

//         while (sortedNums[i] > sortedNums[prev ]&& prev > 0) {
//             count ++
//             prev--
//         }
//         ans.push(count)
//     }
//     return ans
// };
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  let res = [];

  for (const i of nums) {
    const c = nums.reduce((count, num) => {
      if (num < i) count++;
      return count;
    }, 0);
    res.push(c);
  }

  return res;
};