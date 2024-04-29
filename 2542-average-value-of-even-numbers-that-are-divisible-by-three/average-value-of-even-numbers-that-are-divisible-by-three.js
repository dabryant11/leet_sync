/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    let temp = []
    let sum = 0;
    for (let num of nums) {
        if(num % 2 == 0 && num % 3 == 0) temp.push(num) 
    }
    for ( let num of temp) {
        sum += num
    }

    if(temp.length ){
        // return sum / temp.length
        return Math.floor(sum / temp.length) 	
    } 

    return 0
};
