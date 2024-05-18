// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var maxFrequencyElements = function(nums) {
//     let maxOcc = -1
//     let count = {}
//     let ansTotal = 0

//     for (let i=0; i <nums.length;i++){
//         if (!count[nums[i]]) count[nums[i]] = 0
//         count[nums[i]] ++
//     }

//     for (let i=0; i < Object.keys(count).length;i++){
//         if (count[i] > maxOcc) {
//             maxOcc = count[i]
//             ansTotal  = 1
//         }
//         if (count[i] == maxOcc) ansTotal += count[i]
//     }


//     return ansTotal
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let maxOcc = -1;
    let count = {};
    let ansTotal = 0;

    // Count the frequency of each element in nums
    for (let i = 0; i < nums.length; i++) {
        if (!count[nums[i]]) count[nums[i]] = 0;
        count[nums[i]]++;
    }

    // Find the maximum frequency
    for (let key in count) {
        if (count[key] > maxOcc) {
            maxOcc = count[key];
            ansTotal = count[key];  // reset ansTotal to 1 because we found a new max frequency
        } else if (count[key] === maxOcc) {
            ansTotal += count[[key]];  // increment by 1 for each element with the max frequency
        }
    }

    return ansTotal;
};
