/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    let rows = mat.length
    let cols = mat[0].length
    let arr = new Array(rows+cols -1).fill(null).map(()=>[])

    for(let row=0; row<rows; row++){
        for(let col=0; col<cols; col++){
            if((row + col) % 2 === 0) arr[row + col].unshift(mat[row][col])
            else arr[row + col].push(mat[row][col])
        }   
    }

    return arr.flat()

};