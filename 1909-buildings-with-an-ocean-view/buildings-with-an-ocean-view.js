/**
 * @param {number[]} heights
 * @return {number[]}
 */
var findBuildings = function(heights) {
    let minHeight = 0
    let ans = []
    for (let i = heights.length-1;i>=0;i--){
        let curr = heights[i]
        if(curr > minHeight) {
            ans.push(i)
            minHeight = curr

        }
    }
    return ans.sort((a,b) => a-b)
};