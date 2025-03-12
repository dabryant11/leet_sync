/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function(arr) {
    const numsSet = new Set(arr);

    // Initialize a counter to keep track of elements satisfying the condition.
    let counter = 0;

    // Iterate through each number in the original array.
    for (const num of arr) {
        // Check if the Set contains the consecutive number (num + 1).
        // If it does, increment the counter.
        if (numsSet.has(num + 1)) counter++;
    }

    // Return the final count of elements that satisfy the condition.
    return counter;
};