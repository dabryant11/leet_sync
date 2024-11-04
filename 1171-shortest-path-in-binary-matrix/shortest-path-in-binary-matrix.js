/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    let directions = [
        [0,1],
        [0,-1],
        [1,1],
        [-1,-1],
        [1,-1],
        [-1,1],
        [1,0],
        [-1,0],
    ]

    if(grid[0][0] === 1) return -1
    let N = grid.length
    let queue = [[0,0,1]]

    while (queue.length){
        let [row,col,path] = queue.shift()

        if (row === N -1 && col === N -1) return path

        for (let [dx,dy] of directions){
            let x = row + dx
            let y = col + dy
            if(x< 0 || x >= N) continue
            if(y< 0 || y >= N) continue
            if( grid[x][y] !== 0) continue

            queue.push([x,y,path +1])
            grid[x][y] = 1
        }
    }
    return -1
};