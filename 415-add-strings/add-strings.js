/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0;
    let ans = [];

    while (i >= 0 || j >= 0 || carry > 0) {
        const digit1 = i >= 0 ? num1.charCodeAt(i) - '0'.charCodeAt(0) : 0;
        const digit2 = j >= 0 ? num2.charCodeAt(j) - '0'.charCodeAt(0) : 0;

        const sum = digit1 + digit2 + carry;
        ans.push(sum % 10);
        carry = Math.floor(sum / 10);

        i--;
        j--;
    }

    return ans.reverse().join('');
};
