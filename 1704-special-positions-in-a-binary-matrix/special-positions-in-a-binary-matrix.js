/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    let count = 0
    let rowCount = new Array(mat.length).fill(0)
    let colCount = new Array(mat[0].length).fill(0)

    for(let i=0;i<mat.length;i++){
        for(let j=0;j<mat[i].length;j++){
            if(mat[i][j] === 1){
                rowCount[i] ++ 
                colCount[j] ++ 
            }
        }
    }

    for(let i=0;i<mat.length;i++){
        for(let j=0;j<mat[i].length;j++){
            if(mat[i][j] === 1 && rowCount[i] == 1 && colCount[j] == 1) count ++
        }
    }
    return count 
};