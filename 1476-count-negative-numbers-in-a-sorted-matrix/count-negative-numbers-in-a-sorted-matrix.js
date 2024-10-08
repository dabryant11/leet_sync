/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
  let ans = 0

  for (let i=0;i<grid.length;i++){
    for (let j=0;j<grid[i].length;j++){
        let row = grid[i]
        if (row[j] < 0) ans ++
    }
  }

  return ans

};