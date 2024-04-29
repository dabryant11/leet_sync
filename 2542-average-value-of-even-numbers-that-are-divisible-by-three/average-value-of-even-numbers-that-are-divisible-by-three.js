// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var averageValue = function(nums) {
//     //iterate nums
//     //even num && div by 3
//     //ans  - add num to ans
//     // key is ans 
//     //val is num of nums
//     // return ans 
//     let count = {}
//     let ans = 0
//     let numOfNums = 0
//     let keys = Object.keys(count);
//     for ( let i =0; i< nums.length; i++) {
//         if ( nums[i]%2 == 0 && nums[i] % 3 == 0) {
//             numOfNums ++
//             ans += nums[i]
//             count[ans] = numOfNums
//         }
//     }
//     ans = keys[0]/numOfNums
//     return ans
// };


/**
//  * @param {number[]} nums
//  * @return {number}
//  */

// var averageValue = function(nums) {
//     let sum = 0;
//     let count = 0;

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] % 2 === 0 && nums[i] % 3 === 0) {
//             sum += nums[i];
//             count++;
//         }
//     }

//     return count > 0 ? sum / count : 0;
// };


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