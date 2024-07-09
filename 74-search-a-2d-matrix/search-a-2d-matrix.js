/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let ans = false
    for (let i=0;i<matrix.length;i++){
        if (ans) break
        for (let j=0;j<matrix[0].length;j++){
            pointer = matrix[i][j]
            if (pointer > target) return ans
            if (pointer === target) {
                ans = true
                break
            }
            
        }

    }

    return ans

    
};