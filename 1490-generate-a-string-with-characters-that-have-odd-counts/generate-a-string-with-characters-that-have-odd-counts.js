/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
    let ans = "";
    if (n % 2 === 1) {
        // If n is odd, make a string with all 'a's
        ans = 'a'.repeat(n);
    } else {
        // If n is even, use n-1 'a's followed by one 'b'
        ans = 'a'.repeat(n - 1) + 'b';
    }
    return ans;
};
