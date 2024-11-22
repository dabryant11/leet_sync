/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let stack = []

    for ( let ch of s){
        if ( ch !== "]"){
            stack.push(ch)
            continue
        }

        let currCh = stack.pop()
        let innerString = ""
        while ( currCh !== "["){
            innerString = currCh + innerString
            currCh = stack.pop() 
        }
         currCh = stack.pop()
        let multiplier = ""
        while (!Number.isNaN(Number(currCh))){
            multiplier = currCh + multiplier
            currCh = stack.pop() 
        }
            
            stack.push(currCh)
            stack.push(innerString.repeat(Number(multiplier)))
    }

    return stack.join("")
};