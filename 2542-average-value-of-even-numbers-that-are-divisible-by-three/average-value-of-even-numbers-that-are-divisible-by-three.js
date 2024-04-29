/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    let temp = []
    let sum = 0;

    nums.forEach(val =>{
        if(val % 2 == 0 && val % 3 == 0){ 
            temp.push(val) 
        }
    })

    for(i = 0; i < temp.length; i++){ 
        sum += temp[i]
    }
    sum = sum / temp.length; 
    if(sum > 0 ){
        return Math.floor(sum) 	
    } 

    return 0
};