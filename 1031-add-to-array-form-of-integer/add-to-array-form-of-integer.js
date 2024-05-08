/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    let carry = 0;
    const result = [];

    for (let i = num.length - 1; i >= 0 || k > 0 || carry > 0; i--) {
        const digit = (i >= 0 ? num[i] : 0) + (k % 10) + carry;
        result.unshift(digit % 10);
        carry = Math.floor(digit / 10);
        k = Math.floor(k / 10);
    }

    return result;
};
