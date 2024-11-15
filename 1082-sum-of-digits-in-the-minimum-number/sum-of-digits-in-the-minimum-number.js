/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfDigits = function(nums) {
    let smallest = Math.min(...nums)
    let small = smallest.toString()
    let sum = 0
    for(let char of small){
        sum += parseInt(char)
    }


    return (sum % 2 !== 0) ? 0 : 1
};