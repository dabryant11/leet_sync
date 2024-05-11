/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    let curr = 0;
    let leftArr = [];
    let rightArr = [];
    
    while (nums[curr] !== pivot) {
        if (nums[curr] < pivot) leftArr.push(nums[curr]);
        else rightArr.push(nums[curr]);
        curr++;
    }
    
    while (curr < nums.length) {
        if (nums[curr] < pivot) leftArr.push(nums[curr]);
        else if (nums[curr] === pivot) rightArr.unshift(nums[curr]);
        else rightArr.push(nums[curr]);
        curr++;
    }
    
    return leftArr.concat(rightArr);
};
