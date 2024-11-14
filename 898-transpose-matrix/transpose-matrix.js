/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let newMat = []

    let counter = 0
    let rows = matrix[0].length
    let cols = matrix.length
    while (counter < rows ){
        newMat.push(new Array(cols).fill(0))
        counter ++
    }

    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            newMat[j][i] = matrix[i][j]
        }
    }
    return newMat
};