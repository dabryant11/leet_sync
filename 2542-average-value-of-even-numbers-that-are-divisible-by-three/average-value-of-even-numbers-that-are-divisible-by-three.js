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

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var averageValue = function(nums) {
//     let temp = []
//     let ans= 0
//     for ( let num of nums) {
//         if ( num %2==0 && num% 3== 0) temp.push(num)
//     }

//     for ( let num of temp) {
//         ans += num
//     }

//     if (temp.length) ans = ans / temp.length

//     return ans
// };