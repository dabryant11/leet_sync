/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    const rows = mat.length;
    const cols = mat[0].length;
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const queue = [];
    const dist = Array.from({ length: rows }, () => Array(cols).fill(Infinity));

    // Enqueue all cells with 0 and set their distance to 0
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (mat[i][j] === 0) {
                queue.push([i, j]);
                dist[i][j] = 0;
            }
        }
    }

    // BFS from all 0 cells
    while (queue.length > 0) {
        const [i, j] = queue.shift();
        
        for (const [di, dj] of directions) {
            const ni = i + di;
            const nj = j + dj;
            
            if (ni >= 0 && ni < rows && nj >= 0 && nj < cols) {
                if (dist[ni][nj] > dist[i][j] + 1) {
                    dist[ni][nj] = dist[i][j] + 1;
                    queue.push([ni, nj]);
                }
            }
        }
    }

    return dist;
};
