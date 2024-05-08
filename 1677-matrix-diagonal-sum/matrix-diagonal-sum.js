/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let sum = 0
    let prime = 0
    let sec = mat.length -1
    for (let row of mat){
        if (prime !== sec){
            sum += row[prime]
            sum += row[sec]
        } else {
            sum += row[prime]
        }
            sec --
            prime ++
    }
    return sum 
};