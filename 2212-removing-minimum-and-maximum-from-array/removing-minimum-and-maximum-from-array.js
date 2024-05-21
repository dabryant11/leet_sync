/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeletions = function(nums) {
    if (nums.length < 3) return nums.length;
    
    let minIndex = 0;
    let maxIndex = 0;
    
    // Find the indices of the minimum and maximum elements
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[minIndex]) minIndex = i;
        if (nums[i] > nums[maxIndex]) maxIndex = i;
    }
    
    // Calculate the number of deletions for each strategy
    let deleteFromStart = Math.max(minIndex, maxIndex) + 1;
    let deleteFromEnd = nums.length - Math.min(minIndex, maxIndex);
    let deleteFromBothEnds1 = minIndex + 1 + (nums.length - maxIndex);
    let deleteFromBothEnds2 = maxIndex + 1 + (nums.length - minIndex);
    
    // Return the minimum deletions required
    return Math.min(deleteFromStart, deleteFromEnd, deleteFromBothEnds1, deleteFromBothEnds2);
};
