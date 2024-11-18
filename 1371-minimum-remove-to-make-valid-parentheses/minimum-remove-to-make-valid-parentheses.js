/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    // change to arr
    // stack
    // push pop re assign remainders
    let sArr = s.split("")
    let stack = []

    for(let i=0;i<sArr.length;i++){
        let ch = sArr[i]
        if(ch == "(") stack.push(i)
        if(ch == ")") {
            if(stack.length > 0) stack.pop()
            else {
                // if(ch == "(") stack.push(i)
                sArr[i] = ""
            }
        }
    }

    for ( let i of stack){
        sArr[i] = ""
    }


    return sArr.join("")
};