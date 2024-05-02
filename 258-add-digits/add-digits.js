/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let newNum = num.toString()
    let currNum = 0

    for (let i=0;i<newNum.length;i++){
        currNum += parseInt(newNum[i])
    }
    if (currNum >= 10) return addDigits(currNum)
    else return currNum
    
};