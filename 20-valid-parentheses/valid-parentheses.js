/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (char === "(") stack.push(")");
        else if (char === "[") stack.push("]");
        else if (char === "{") stack.push("}");
        else {
            if (stack.pop() !== char) return false;
        }
    }

    // If the stack is empty, all brackets matched correctly
    return stack.length === 0;
};
