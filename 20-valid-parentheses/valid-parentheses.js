/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []

    for (let char of s){
        if(char == "(" || char == "[" || char == "{") stack.push(char)
        else {
            if(char == ")" ){
                let prev = stack.pop()
                if (prev !== "(") return false
            }
            if(char == "]" ){
                let prev = stack.pop()
                if (prev !== "[") return false
            }
            if(char == "}" ) {
                let prev = stack.pop()
                if (prev !== "{") return false
            }           
        }
    }
    return stack.length == 0
};