/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    let stack = [];
    
    for (let i = 0; i < s.length; i++) {
        if (stack.length > 0 && Math.abs(stack[stack.length - 1].charCodeAt(0) - s[i].charCodeAt(0)) === 32) {
            stack.pop();  // Remove the last character if it's an uppercase-lowercase pair
        } else {
            stack.push(s[i]);  // Add the current character to the stack
        }
    }
    
    return stack.join('');  // Return the processed string
};
