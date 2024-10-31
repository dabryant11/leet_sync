/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for ( let digit = digits.length -1;digit>= 0 ;digit --){
        if (digits[digit] < 9){
            digits[digit] ++
            return digits
        } 
        digits[digit]  = 0
    }
    digits.unshift(1)
    return digits
};
