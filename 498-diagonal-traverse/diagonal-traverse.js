/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    let rows = mat.length
    let cols = mat[0].length
    let result = new Array(rows + cols -1).fill(null).map(() => [])

    for(let row=0; row<rows;row++){
        for(let col=0; col<cols;col++){
            if((col+row) % 2 == 0) result[col+row].unshift(mat[row][col])
            else result[col+row].push(mat[row][col])
        }
    }

    return result.flat()
};