/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let stack = []
    let splitS = s.split("")
    let extra = 0
    for(let i =0;i<splitS.length;i++){
        if(splitS[i] === "(")stack.push(i)
        else if ( splitS[i] === ")"){
            if(stack.length> 0) stack.pop()
            else extra++
        }
    }
    return extra + stack.length
};