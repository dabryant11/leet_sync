/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let newNum = num.toString().split('');  // Convert number to string, then to array
    for (let i = 0; i < newNum.length; i++) {
        if (newNum[i] === '6') {
            newNum[i] = '9';  // Modify the first '6' to '9'
            break;  // Stop after changing the first '6'
        }
    }
    
    return parseInt(newNum.join(''));  // Convert array back to string and then to number
};
