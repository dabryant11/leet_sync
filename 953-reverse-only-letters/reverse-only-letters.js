/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    // Convert the string to an array to allow easy manipulation of characters
    let ans = s.split('');
    let left = 0;
    let right = s.length - 1;

    // Function to check if a character is a letter
    const isLetter = (char) => /^[a-zA-Z]$/.test(char);

    // Use two pointers to swap only letters
    while (left < right) {
        // Move left pointer until we find a letter
        if (!isLetter(ans[left])) {
            left++;
        }
        // Move right pointer until we find a letter
        else if (!isLetter(ans[right])) {
            right--;
        }
        // Both pointers are at letters, so swap them
        else {
            [ans[left], ans[right]] = [ans[right], ans[left]];
            left++;
            right--;
        }
    }

    // Join the array back into a string
    return ans.join('');
};
