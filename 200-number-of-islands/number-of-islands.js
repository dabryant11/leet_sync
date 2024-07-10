var numIslands = function(grid) {
    if (!grid.length || !grid[0].length)
        return 0;
    
    const rows = grid.length;
    const cols = grid[0].length;
    let islands = 0;
        console.log("begin grid", grid)
    
    const dfs = (row, col) => {
        if (row < 0 || col < 0 || row >= rows || col >= cols || grid[row][col] !== '1')
            return;
        grid[row][col] = '0';
        
        dfs(row - 1, col);
        dfs(row + 1, col);
        dfs(row, col - 1);
        dfs(row, col + 1);
    };
    
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] === '1') {
                dfs(row, col);
                islands++;
            }
        }
    }
        console.log("islands", islands)
        console.log("grid", grid)
    return islands;
};