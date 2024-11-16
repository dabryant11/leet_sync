/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let stack = []
    let sArr = s.split("")

    for(let i=0;i<sArr.length;i++){
        if(sArr[i] === "(") stack.push(i)
        if(sArr[i] === ")"){
            if (stack.length) stack.pop()
            else sArr[i] = ""
        } 
    }

    for(let i of stack){
        sArr[i] = ""
    }

    return sArr.join("")
};