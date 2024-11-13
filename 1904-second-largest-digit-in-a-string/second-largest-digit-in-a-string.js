/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    let largestDigit = -1;
    let secondLargestDigit = -1;

    for (let char of s) {
        if (!isNaN(char)) {
            let digit = parseInt(char);

            if (digit > largestDigit) {
                secondLargestDigit = largestDigit;
                largestDigit = digit;
            } else if (digit < largestDigit && digit > secondLargestDigit) {
                secondLargestDigit = digit;
            }
        }
    }
    
    return secondLargestDigit;
};
