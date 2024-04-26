/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */

 //find first 0
 //save index
 //lowest is weaker
var kWeakestRows = function(mat, k) {
    let distilledArr = []

    for (let i=0; i< mat.length; i++){
        let sum = 0
        for (let j=0; j< mat[i].length; j++){
            if ( mat[i][j] === 1) sum += mat[i][j]
        }   
        distilledArr.push([i, sum])
    }

    distilledArr.sort((a,b) => a[1] - b[1])

    let answer = []
    for (let counter =0; counter< k; counter ++){
        answer.push(distilledArr[counter][0])
    }
    return answer 
};