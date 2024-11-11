/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {
  var arr = grid.flat(),
    len = grid[0].length,
    res = [];

  while (k--) {
    arr.unshift(arr.pop());
  }

  while (arr.length) {
    res.push(arr.splice(0, len));
  }

  return res;
};