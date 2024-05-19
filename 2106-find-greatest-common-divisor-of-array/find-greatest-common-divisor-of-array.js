/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let greatestNum = Math.max(...nums)
    let smallestNum = Math.min(...nums)

    let divNum = greatestNum
    while (divNum > 0){
        if (greatestNum % divNum === 0 && smallestNum % divNum === 0) return divNum
        divNum --
    }
};