/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    const n = code.length;
    const ans = [];

    if (k === 0) return new Array(n).fill(0); // If k is 0, return an array of zeros

    for (let i = 0; i < n; i++) {
        let sum = 0;
        if (k > 0) {
            // Calculate sum for positive k
            for (let j = 1; j <= k; j++) {
                sum += code[(i + j) % n];
            }
        } else {
            // Calculate sum for negative k
            for (let j = -1; j >= k; j--) {
                sum += code[(i + j + n) % n];
            }
        }
        ans.push(sum);
    }

    return ans;
};
