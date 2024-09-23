/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
  
    let newNum = num.toString().split("")
    for (let i=0;i<newNum.length;i++){
        if(newNum[i] === "6") {
            newNum[i] = "9"
            break
        }

    }

    return parseInt(newNum.join(''))


    
};