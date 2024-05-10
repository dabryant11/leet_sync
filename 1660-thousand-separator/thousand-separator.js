/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {
    let ans = n.toString();
    let counter = ans.length;

    // Check if the number needs any separator
    if (counter <= 3) {
        return ans; // If the number has 3 or fewer digits, no separator needed
    }

    // Start from the right side of the string and insert a separator every 3 digits
    while (counter > 3) {
        counter -= 3;
        ans = ans.slice(0, counter) + "." + ans.slice(counter); // Insert a dot at the current position
    }

    return ans;
};
