/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
    let ans = "";
    let spaceIndex = 0;

    for (let i = 0; i < s.length; i++) {
        // If there is a space at the current index
        if (spaceIndex < spaces.length && i === spaces[spaceIndex]) {
            ans += " ";
            spaceIndex++;
        }
        ans += s[i];
    }

    // Add remaining spaces if any
    while (spaceIndex < spaces.length) {
        ans += " ";
        spaceIndex++;
    }

    return ans;
};
