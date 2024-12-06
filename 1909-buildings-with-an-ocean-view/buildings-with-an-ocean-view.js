/**
 * @param {number[]} heights
 * @return {number[]}
 */
var findBuildings = function(heights) {
    let ans = []
    let maxHeight = 0

    for ( let i = heights.length-1;i>= 0; i--){
        if(heights[i] > maxHeight){
            ans.unshift(i)
            maxHeight = heights[i]
        }
    }
    return ans

};