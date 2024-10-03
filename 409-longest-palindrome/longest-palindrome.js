/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let map = {};

    // Count the frequency of each character
    for (let i = 0; i < s.length; i++) {
        let currChar = s[i];
        if (!map[currChar]) map[currChar] = 0;
        map[currChar]++;
    }

    let ans = 0;
    let oddCount = false;

    // Calculate the length of the longest palindrome
    Object.values(map).forEach(count => {
        // Add the largest even part of the count
        ans += Math.floor(count / 2) * 2;
        // Check if there is any odd count
        if (count % 2 === 1) oddCount = true;
    });

    // If there is at least one odd count, we can place one character in the middle
    if (oddCount) ans++;

    return ans;
};
