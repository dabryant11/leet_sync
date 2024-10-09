/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
    // Split the string into words
    const words = s.split(" ");
    let prevNum = -Infinity; // Initialize prevNum to a very small value

    // Iterate over each word
    for (let word of words) {
        // Check if the word is a number
        if (!isNaN(word)) {
            const currentNum = parseInt(word);

            // If current number is not greater than the previous, return false
            if (currentNum <= prevNum) {
                return false;
            }
            // Update prevNum to the current number
            prevNum = currentNum;
        }
    }

    // If we never returned false, the numbers are ascending
    return true;
};
