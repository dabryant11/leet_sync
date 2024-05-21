/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
     let newNum = num;
    
    while (newNum.length > 0) {
        // Check if the last character is an odd digit
        if (parseInt(newNum[newNum.length - 1]) % 2 === 1) {
            return newNum;
        }
        // Remove the last character
        newNum = newNum.slice(0, -1);
    }
    
    // If no odd number is found, return an empty string
    return "";
};