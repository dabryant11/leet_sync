/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let count = {};
    let sum = 0;

    // Count the occurrences of each number in nums
    for (let i = 0; i < nums.length; i++) {
        if (!count[nums[i]]) count[nums[i]] = 0;
        count[nums[i]]++;
    }

    // Sum the numbers that occur exactly once
    for (let key in count) {
        if (count[key] === 1) sum += parseInt(key);
    }

    return sum;
};
