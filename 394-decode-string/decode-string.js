/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {

   let stack = []
    for (let ch of s){
        if (ch !== "]"){
            stack.push(ch)
            continue
        }
        let currChar = stack.pop()
        let innerString = ""
        while (currChar !== "["){
            innerString = currChar + innerString
            currChar = stack.pop()
        }
        
        currChar = stack.pop()
        let multiplier = ''
        while (!Number.isNaN(Number(currChar))){
            multiplier = currChar + multiplier
            currChar = stack.pop()
        }
        stack.push(currChar)
        stack.push(innerString.repeat(Number(multiplier)))
    }

   return stack.join("")
};