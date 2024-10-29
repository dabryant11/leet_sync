/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    // If num is already a single digit, return it
    if (num < 10) {
        return num;
    }

    // Initialize sum to store the digit sum
    let sum = 0;

    // Calculate the sum of digits
    while (num > 0) {
        sum += num % 10;  // Add last digit of num to sum
        num = Math.floor(num / 10);  // Remove the last digit
    }

    // Recursively call addDigits with the calculated sum
    return addDigits(sum);
};
