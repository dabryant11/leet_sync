/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let zerosToDuplicate = 0;
    const len = arr.length;

    // First pass: count zeros to determine effective length
    for (let i = 0; i < len; i++) {
        if (arr[i] === 0) {
            zerosToDuplicate++;
        }
    }

    // Second pass: fill in from the back
    for (let i = len - 1; i >= 0; i--) {
        // Check the current position plus zerosToDuplicate
        if (i + zerosToDuplicate < len) {
            arr[i + zerosToDuplicate] = arr[i];
        }

        // If it's a zero, we need to duplicate it
        if (arr[i] === 0) {
            zerosToDuplicate--;
            if (i + zerosToDuplicate < len) {
                arr[i + zerosToDuplicate] = 0;
            }
        }
    }
};
