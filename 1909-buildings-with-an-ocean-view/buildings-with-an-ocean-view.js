/**
 * @param {number[]} heights
 * @return {number[]}
 */
var findBuildings = function(heights) {
    let maxHeight = 0
    let ans = []

    for(let i = heights.length -1; i>=0;i--){
        if(heights[i] > maxHeight){
            ans.unshift(i)
            maxHeight = heights[i]
        }
    }
    
    return ans 

};