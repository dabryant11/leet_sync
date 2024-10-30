/**
 * @param {string} s
 * @return {string}
 */

var minRemoveToMakeValid = function(s) {
    const stack = []; // Initialize a stack to hold indices of opening parentheses
    const str = s.split(''); // Convert the string to an array for efficient modification
    
    // Iterate through each character of the string
    for (let i = 0; i < s.length; i++) {
        const ch = s[i]; // Current character
        
        // If an opening parenthesis is encountered, push its index onto the stack
        if (ch == '(')
            stack.push(i);
        else {
            // If a closing parenthesis is encountered
            if (ch == ')') {
                // If there's a matching opening parenthesis in the stack, pop it
                if (stack.length)
                    stack.pop();
                // If there's no matching opening parenthesis, 
                // remove the current closing parenthesis by setting it to an empty string
                else
                    str[i] = '';
            }
        }
    }
    
    // Remove any remaining unmatched opening parentheses by setting their corresponding characters to an empty string
    for (let i of stack) {
        str[i] = '';
    }
    
    return str.join('');
};
