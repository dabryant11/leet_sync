/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    let map = {};
    let ans = [];

    // Build frequency map
    for (let i = 0; i < nums.length; i++) {
        if (!map[nums[i]]) map[nums[i]] = 0;
        map[nums[i]]++;
    }

    // Convert map to array and sort based on frequency
    let sorted = Object.entries(map).sort((a, b) => a[1] - b[1] || b[0] - a[0]);

    // Add the numbers to the result array according to frequency
    sorted.forEach(([num, freq]) => {
        for (let i = 0; i < freq; i++) {
            ans.push(Number(num));
        }
    });

    return ans;
};
