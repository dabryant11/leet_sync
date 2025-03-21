/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    const directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1],           [0, 1],
        [1, -1],  [1, 0],  [1, 1]
    ];

    const rows = board.length;
    const cols = board[0].length;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            let neighbors = 0;

            for (const [dr, dc] of directions) {
                const nr = r + dr;
                const nc = c + dc;

                if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && Math.abs(board[nr][nc]) === 1) {
                    neighbors++;
                }
            }

            if (board[r][c] === 1) {
                if (neighbors < 2 || neighbors > 3) {
                    board[r][c] = -1; // Alive → Dead
                }
            } else {
                if (neighbors === 3) {
                    board[r][c] = 2; // Dead → Alive
                }
            }
        }
    }

    // Final pass to convert temporary values to final state
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (board[r][c] === -1) {
                board[r][c] = 0; // Mark as dead
            } else if (board[r][c] === 2) {
                board[r][c] = 1; // Mark as alive
            }
        }
    }
};
