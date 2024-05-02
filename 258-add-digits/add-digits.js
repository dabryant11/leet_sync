/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let newNum = num.toString()
    let currSum = 0

    for (let i=0; i< newNum.length;i++) {
        currSum += parseInt(newNum[i])
    }
    if(currSum >= 10){
      return  addDigits(currSum)
    } else return currSum

    
};