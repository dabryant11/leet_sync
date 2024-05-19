/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function(matrix) {
    let n = matrix.length;
    
    // Function to check if an array contains all numbers from 1 to n
    const isValidArray = (arr) => {
        let seen = new Set();
        for (let num of arr) {
            if (num < 1 || num > n || seen.has(num)) {
                return false;
            }
            seen.add(num);
        }
        return seen.size === n;
    };
    
    // Check each row
    for (let i = 0; i < n; i++) {
        if (!isValidArray(matrix[i])) {
            return false;
        }
    }
    
    // Check each column
    for (let j = 0; j < n; j++) {
        let col = [];
        for (let i = 0; i < n; i++) {
            col.push(matrix[i][j]);
        }
        if (!isValidArray(col)) {
            return false;
        }
    }
    
    return true;
};
