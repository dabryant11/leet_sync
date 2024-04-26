/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */

 //find first 0
 //save index
 //lowest is weaker
// var kWeakestRows = function(mat, k) {
//     let kHeap = []

//     for (let i=0; i < mat.length; i++) {
//         for (let j=0; j < mat[i].length; j++) {
//             if ( mat[i][j] === 0) kHeap.push([i,j])
//         }          
//     }
//     kHeap.sort((a, b) => b[1] - a[1]);

//     let counter = 0
//     let answer = []
//     while ( counter < k) {
//         let addDigit = kHeap.pop()
//         answer.push(addDigit[0])
//         counter ++
//     }
    
//     return answer
// };

var kWeakestRows = function(mat, k) {
    let kHeap = [];

    for (let i = 0; i < mat.length; i++) {
        let sum = 0;
        for (let j = 0; j < mat[i].length; j++) {
            sum += mat[i][j];
        }
        kHeap.push([i, sum]); // Push [row index, sum of elements] to kHeap
    }
    
    kHeap.sort((a, b) => a[1] - b[1]); // Sort based on sum of elements (weakest rows first)

    let answer = [];
    for (let i = 0; i < k; i++) {
        answer.push(kHeap[i][0]); // Push the row indices of the k weakest rows
    }

    return answer;
};
