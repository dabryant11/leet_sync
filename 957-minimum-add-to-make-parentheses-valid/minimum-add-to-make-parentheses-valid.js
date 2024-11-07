/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let ans = 0;
    let extra = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            ans++;
        } else if (s[i] === ")") {
            if (ans <= 0) {
                extra++;
            } else {
                ans--;
            }
        }
    }

    return ans + extra;
};
