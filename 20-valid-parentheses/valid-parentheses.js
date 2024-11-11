/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        
        if (char === '(') {
            stack.push(')');
        } else if (char === '[') {
            stack.push(']');
        } else if (char === '{') {
            stack.push('}');
        } else {
            // Check if there's a matching opening bracket
            if (stack.pop() !== char) {
                return false;
            }
        }
    }

    // Stack should be empty if all brackets matched correctly
    return stack.length === 0;
};
