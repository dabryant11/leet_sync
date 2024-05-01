// /**
//  * @param {number} num
//  * @return {number}
//  */
// var addDigits = function(num) {
//     // num to str
//     //newSum
//     //iterate
//     // add to newSum
//     // newSum to s
//     //check newNum len
//     //newNum to int

//     newNum = toString(num)
//     let currNum = 0
//     for ( let i=0; i< newNum.length;i++){
//         currNum += newNum[i]
        
//         parseInt(currSum)
//         if (currSum.length == 1 && !i+1){
//             return currSum
//         }
//     }
// };



/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let newNum = num.toString(); // Convert num to string
    let currSum = 0; // Initialize currSum to accumulate the sum of digits
    for (let i = 0; i < newNum.length; i++) {
        currSum += parseInt(newNum[i]); // Convert each character to number and add to currSum
    }
    // If the sum has more than one digit, recursively call addDigits
    if (currSum >= 10) {
        return addDigits(currSum);
    } else {
        return currSum; // Otherwise, return the sum
    }
};
