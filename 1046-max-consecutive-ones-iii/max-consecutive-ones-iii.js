/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let left = 0; // Left pointer of the window
    let zerosCount = 0; // Counter for zeros in the current window
    let maxLength = 0; // Track the maximum length of 1s

    // Iterate over the array with the right pointer
    for (let right = 0; right < nums.length; right++) {
        // If we encounter a zero, increment the zero counter
        if (nums[right] === 0) {
            zerosCount++;
        }

        // If zerosCount exceeds k, shrink the window from the left
        while (zerosCount > k) {
            if (nums[left] === 0) {
                zerosCount--; // Reduce the count of zeros if left pointer points to zero
            }
            left++; // Move the left pointer to the right to shrink the window
        }

        // Calculate the maximum length of the window
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};
