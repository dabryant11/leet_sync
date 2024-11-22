/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

 var rotate = function(matrix) {
    let n = matrix.length, depth = ~~(n / 2)
    for (let i = 0; i < depth; i++) {
        let len = n - 2 * i - 1, opp = n - 1 - i
        for (let j = 0; j < len; j++) {
            let temp = matrix[i][i+j]
            matrix[i][i+j] = matrix[opp-j][i]
            matrix[opp-j][i] = matrix[opp][opp-j]
            matrix[opp][opp-j] = matrix[i+j][opp]
            matrix[i+j][opp] = temp
        }
    }
    return matrix
};

// var rotate = function(matrix) {
//     let rows = matrix.length
//     let cols = matrix[0].length

//     for(let i = 0; i<rows.length; i++){
//         // let y = rows.length -1
//         for(let j = 0; j<rows.length; j++){
//         // let z = cols.length -1
//             [ matrix[i][j],matrix[i][j] ] = [ matrix[i][j],matrix[i][j] ]
//         }
//     }

//     return matrix
// };