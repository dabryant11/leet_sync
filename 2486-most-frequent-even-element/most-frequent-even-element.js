/**
 * @param {number[]} nums
 * @return {number}
 */
// var mostFrequentEven = function(nums) {
//     nums.sort((a,b) => a-b)
//     let count = {}
//     for (let num of nums){
//         if ( num%2==0 && num !== 0 ) {
//             if (!count[num]) count[num]
//             else count[num] ++
//         }
//     }
//     let ans = -1
//     for (let key in count) {
//         ans = Math.max(count[key], count[ans]) 
//     }
//     return ans? ans : -1
// };

var mostFrequentEven = function(nums) {
    let map = {};
    for (let num of nums) {
        if (num % 2 === 0) {
            if (!map[num]) map[num] = 0;
            map[num]++;
        }
    }
    let arr = Object.keys(map).sort((a, b) => map[b] - map[a]).map(Number);
    if (arr.length === 0) return -1;
    let first = arr.shift();
    let second = arr.shift();
    // if the values are the same, choose the lower one
    if (first && second && map[second] === map[first] && first > second) {
        return second;
    }
    return first;
};