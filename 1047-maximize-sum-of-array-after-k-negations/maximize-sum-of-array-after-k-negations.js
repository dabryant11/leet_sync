var largestSumAfterKNegations = function(nums, k) {
    nums.sort((a, b) => a - b);

    let i = 0;
    while (k > 0 && i < nums.length && nums[i] < 0) {
        nums[i] = -nums[i];
        i++;
        k--;
    }

    nums.sort((a, b) => a - b);

    if (k % 2 !== 0) {
        nums[0] = -nums[0];
    }

    let sum = 0;
    for (let num of nums) {
        sum += num;
    }

    return sum;
};
