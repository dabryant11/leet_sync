// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var numberOfPairs = function(nums) {
//     //iterate
//     // add to map count
//     // equal 2 then minus 2 to remove
//     //  add to pair count
//     // iterate val of map
//     // greater than zero add to ans
//     //  add to single count
//     // push pair count single count

//     let count = {}
//     let pair = 0 
//     let single = 0 
//     let ans = []

//     for ( let num of nums) {
//         if ( !count[num]) count[num] = 1
//         else {
//             count[num] ++
//             if ( count[num] == 2) {
//                 count[num] = 0
//                 pair ++
//             }
//         }
//     }
    
//     for (let i =0; i<Object.keys.length; i++) {
//         if ( count[i] == 1) {
//                 single ++
//         }
//     }
//     ans.push(pair)
//     ans.push(single)
//     return ans
// };

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
    let count = {};
    let pair = 0;
    let single = 0;
    let ans = [];

    for (let num of nums) {
        if (!count[num]) {
            count[num] = 1;
        } else {
            count[num]++;
            if (count[num] === 2) {
                count[num] = 0;
                pair++;
            }
        }
    }

    for (let key of Object.keys(count)) {
        if (count[key] === 1) {
            single++;
        }
    }
    
    ans.push(pair);
    ans.push(single);
    return ans;
};
