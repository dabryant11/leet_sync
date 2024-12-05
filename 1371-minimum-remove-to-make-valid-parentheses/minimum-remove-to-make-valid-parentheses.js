/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let stack = []
    let splitS = s.split("")

    for(let i =0;i< splitS.length;i++){
        if(splitS[i] === "(") stack.push(i)
        else if (splitS[i] === ")"){
            if(stack.length>0) stack.pop()
            else splitS[i] = ""
        }
    }

    for(let idx of stack){
        splitS[idx] = ""
    }

    return splitS.join("")
};