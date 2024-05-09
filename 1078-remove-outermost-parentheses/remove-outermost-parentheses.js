/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let stack = []
    let pointer = 0
    let ans = ""

    while (pointer < s.length){
        if (s[pointer] === "("){
            if ( stack.length > 0) ans += "("
            stack.push("(")
        }else if (s[pointer] === ")"){
            stack.pop()
            if ( stack.length > 0) ans += ")"
        }
        pointer ++
    }

    return ans
};