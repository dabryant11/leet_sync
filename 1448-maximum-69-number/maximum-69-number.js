/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let pointer = 0
    let numString = num.toString().split('')
    for ( let i=0; i< numString.length; i++){
        if (numString[i] === "6") {
            numString[i] = "9"
            break
        }
    }

    return parseInt(numString.join(''))

};