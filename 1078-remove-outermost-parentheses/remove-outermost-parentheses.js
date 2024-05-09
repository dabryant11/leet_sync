/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let stack = [];
    let ans = "";
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            if (stack.length > 0) {
                ans += "("; // Add '(' to the result if it's not the outermost '('
            }
            stack.push("("); // Push '(' to the stack
        } else if (s[i] === ")") {
            stack.pop(); // Pop '(' from the stack
            if (stack.length > 0) {
                ans += ")"; // Add ')' to the result if it's not the outermost ')'
            }
        }
    }
    
    return ans;
};
