/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */

 //find first 0
 //save index
 //lowest is weaker
var kWeakestRows = function(mat, k) {
    let kHeap = []

    for (let i=0; i < mat.length; i++) {
        let sum = 0
        for (let j=0; j < mat[i].length; j++) {
            sum += mat[i][j]
        }          
        kHeap.push([i,sum])
    }
    kHeap.sort((a, b) => a[1] - b[1]);

    
    let answer = []
    for ( let row = 0; row < k; row ++) {
        answer.push(kHeap[row][0])     
    }
    
    return answer
};