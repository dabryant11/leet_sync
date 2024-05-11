var semiOrderedPermutation = function(nums) {
    let counter = 0;
    let first = 0;
    let last = nums.length - 1;
    let highest = Math.max(...nums);
    let lowest = Math.min(...nums);
    let lowestIndex = 0;
    let highestIndex = nums.length - 1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === lowest && i !== 0) {
            lowestIndex = i;
        }
        if (nums[i] === highest && i !== nums.length - 1) {
            highestIndex = i;
        }
    }

    if (highestIndex > lowestIndex) {
        counter += Math.abs(highestIndex - (nums.length - 1));
        counter += Math.abs(lowestIndex - 0);
    } else {
        counter += Math.abs(lowestIndex - 0);
        counter += Math.abs((nums.length - 1) - highestIndex);
        counter --
    }

    return counter;
};
