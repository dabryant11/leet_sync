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
    nums.forEach(val =>{
        if(val % 2 == 0 && val % 3 == 0){ // here we are segregating the elements which meet the condition listed in the question, we are using modular operator 
            temp.push(val) // we are pushing the segregated elements to a new array
        }
    })
    let sum = 0;
    for(i = 0; i < temp.length; i++){ // this loop is to get the sum of all the elements, which is stored in sum
        sum += temp[i]
    }
    sum = sum / temp.length; // we are using temp.length here coz we dont know how many elements will meet the codition and to find the sum..
    if(sum > 0 ){ // this if statement is used in case none of the element meets the condition
	
        return Math.floor(sum) // here we are using Math.floor to round down the no. 
		
    } return 0 // in case none of the element meets the condition this line will be executed
};