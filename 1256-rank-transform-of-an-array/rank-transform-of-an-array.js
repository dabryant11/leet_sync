/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    let sortedArr = [...arr].sort((a, b) => a - b);
    
    let rankMap = {}
    let rank = 1;
    for (let num of sortedArr) {
        if (!rankMap[num]) {
            rankMap[num] = rank++;
        }
    }
    
    let ans = arr.map(num => rankMap[num]);
    
    return ans;
};
