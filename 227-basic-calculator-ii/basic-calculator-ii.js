/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    let num = ""
    let stack = []
    let prevOp = "+"

    for ( let i =0;i<s.length;i++){
        let ch = s[i]

        if(ch >= "0" && ch <= "9") num += ch

        
    
        if ((ch< "0" ||ch > "9") && ch !== " " || i === s.length - 1 ) {
            if(prevOp === "+")stack.push(parseInt(num))
            if(prevOp === "-")stack.push(-parseInt(num))
            if(prevOp === "*")stack.push(stack.pop() * parseInt(num))
            if(prevOp === "/")stack.push( Math.trunc(stack.pop() /parseInt(num)))

            prevOp = ch
            num = ""
        }
    }

    return stack.reduce((acc,curr) => acc+curr,0)
};