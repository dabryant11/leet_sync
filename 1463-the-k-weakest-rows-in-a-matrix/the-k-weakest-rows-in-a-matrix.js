/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */

var kWeakestRows = function(mat, k) {
  let newArr = []

  for (let i =0; i< mat.length; i++){
    let sum = 0
    for (let j =0; j< mat[i].length; j++){
        if ( mat[i][j] === 1) sum ++
    }
    newArr.push([i,sum] )
  }

  newArr.sort((a,b) => a[1]- b[1])

  let ans =[]

  for (let x=0; x < k; x++) {
    ans.push(newArr[x][0])
  }

  return ans
};