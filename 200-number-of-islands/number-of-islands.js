var numIslands = function(grid) {
    let rows = grid.length
    let cols = grid[0].length
    let islands = 0

    if (!rows || !cols) return 0

    function dfs(row,col){
        if (row < 0 || col < 0 || row >= rows || col >= cols || grid[row][col] !=='1') return
        grid[row][col] = '0'

        dfs(row, col - 1)
        dfs(row, col + 1)
        dfs(row + 1, col)
        dfs(row - 1, col)
    }
    for (let row=0;row<rows;row++){
        for (let col=0;col<cols;col++){
            if (grid[row][col] === '1'){
                dfs(row,col)
                islands ++
            }
        }
    }
    return islands
};