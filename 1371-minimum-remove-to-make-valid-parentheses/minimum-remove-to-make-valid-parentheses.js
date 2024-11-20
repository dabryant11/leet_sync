/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    // iterate
    // push pop stack
    /// iterate tsack remove remainder
    //TC:oN
    //TC:ON
    let stack = []
    let newS = s.split("")

    for(let i=0;i<newS.length;i++){
        if(newS[i] === "(") stack.push(i)
        else if(newS[i] === ")"){
            if(stack.length > 0) stack.pop()
            else newS[i] = ""
        }
    }

    for(let idx of stack){
        newS[idx] = ""
    }
    return newS.join("")

};