/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    let count = 0;
    
    // Calculate the number of 1's in each row and column
    let rowCounts = new Array(mat.length).fill(0);
    let colCounts = new Array(mat[0].length).fill(0);
    
    // Count the 1's in rows and columns
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if (mat[i][j] === 1) {
                rowCounts[i]++;
                colCounts[j]++;
            }
        }
    }
    
    // Now check for each 1 if it is special
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if (mat[i][j] === 1 && rowCounts[i] === 1 && colCounts[j] === 1) {
                count++;
            }
        }
    }
    
    return count;
};
