/**
 * @param {string} s
 * @return {string}
 */

var minRemoveToMakeValid = function(s) {

    let stack = []
    let str = s.split("")

    for (let i=0;i<s.length;i++){
        let ch = s[i]
        if(ch == "("){
            stack.push(i)
        } else {
            if(ch == ")"){
                if(stack.length) stack.pop()
                else str[i] = ""
            }
        }
    }
    for (let i of stack){
        str[i] = ""
    }
    return str.join("")

};
