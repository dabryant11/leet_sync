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
var smallerNumbersThanCurrent = function(nums) {
    let sortedNums = nums.slice().sort((a, b) => a - b); // Make a copy and sort it
    let ans = [];

    for (let i = 0; i < nums.length; i++) {
        let count = 0;

        // Find how many numbers are smaller than the current number in the sorted array
        for (let j = 0; j < sortedNums.length; j++) {
            if (sortedNums[j] < nums[i]) {
                count++;
            } 
        }

        ans.push(count);
    }

    return ans;
};
