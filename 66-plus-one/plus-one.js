/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        // If the current digit is less than 9, just increment it and return the array.
        if (digits[i] < 9) {
            digits[i] ++;
            return digits;
        }
        // If the digit is 9, set it to 0 and move to the next digit.
        digits[i] = 0;
    }
    
    // If we finish the loop, all digits were 9, so we need to add a new 1 at the start.
    digits.unshift(1);
    return digits;
};
