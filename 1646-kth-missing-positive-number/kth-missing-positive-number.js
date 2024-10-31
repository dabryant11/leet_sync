/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let missNum = 0; // Counter for missing numbers
    let current = 1; // Start checking from the first positive integer
    let i = 0; // Index for traversing arr
    

    while (missNum < k) {
        // If current is not in arr, it is a missing number
        if (i > arr.length -1 || arr[i] !== current) {
            missNum++;
            if (missNum === k) return current;
        } else {
            i++; // Move to the next element in arr if current matches
        }
        current++; // Move to the next positive integer
    }

};