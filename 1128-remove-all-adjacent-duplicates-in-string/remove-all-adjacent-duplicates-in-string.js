/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let stack = []
    for (let char of s){
        stack[stack.length -1] === char? stack.pop() : stack.push(char)

    }

    return stack.join("")
};