/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    let rows = mat.length;
    let cols = mat[0].length;
    let newMat = Array.from({ length: rows }, () => Array(cols).fill(Infinity));
    let queue = [];

    if (!rows || !cols) return newMat;

    // Initialize the queue with all cells containing 0 and set their distance to 0
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (mat[row][col] === 0) {
                newMat[row][col] = 0;
                queue.push([row, col]);
            }
        }
    }

    // Directions for moving up, down, left, and right
    let directions = [
        [0, 1], [0, -1], [1, 0], [-1, 0]
    ];

    // Perform BFS
    while (queue.length > 0) {
        let [currentRow, currentCol] = queue.shift();

        for (let [dx, dy] of directions) {
            let newRow = currentRow + dx;
            let newCol = currentCol + dy;

            // Check if the new cell is within bounds and can be updated
            if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && newMat[newRow][newCol] === Infinity) {
                newMat[newRow][newCol] = newMat[currentRow][currentCol] + 1;
                queue.push([newRow, newCol]);
            }
        }
    }

    return newMat;
};
