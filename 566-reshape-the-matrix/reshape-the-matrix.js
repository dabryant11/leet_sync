/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    // create mat wit r/c dimensions
    /// iterate & push into an arr
    //cycle thru arr pushing into newRC arr
    //return rc arr

    let matArr = []

    for(let i=0;i<mat.length;i++){
        for(let j=0;j<mat[0].length;j++){
            matArr.push(mat[i][j])
        }
    }
    if(matArr.length !== r*c) return mat
    let rcMat = []
    for(let i=0;i<r;i++){
        let row = []
        for(let j=0;j<c;j++){
            row.push(matArr[i*c+j])
        }
        rcMat.push(row)
    }
    return rcMat



};