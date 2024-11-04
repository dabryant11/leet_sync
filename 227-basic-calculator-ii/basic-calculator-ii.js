/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    
    let num = '';
    let prevOperator = '+';
    const stack = [];

    for (let i = 0; i <= s.length; i++) {
        const ch = s[i];

        if (ch >= '0' && ch <= '9') {
            num += ch;
        }

        if ((ch < '0' || ch > '9') && ch !== ' ' || i === s.length) {
            if (prevOperator === '+') stack.push(Number(num));
            if (prevOperator === '-') stack.push(-Number(num));
            if (prevOperator === '*') stack.push(stack.pop() * Number(num));
            if (prevOperator === '/') stack.push(Math.trunc(stack.pop() / Number(num)));

            prevOperator = ch;
            num = '';
        }
    }

    return stack.reduce((total, cur) => total + cur, 0);
};