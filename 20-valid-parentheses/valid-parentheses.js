/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []

    for ( let i =0;i<s.length;i++){
        let char = s[i]

        if(char === "(")stack.push(")")
        else if(char === "[")stack.push("]")
        else if(char === "{")stack.push("}")
        else {
            if(char !== stack.pop()) return false
        }
    }

    return stack.length === 0
};