/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let balance = 0;
  let result = 0;

  for (const i of s) {
    if (i === 'L') balance--;
    else balance++;
    if (balance === 0) result++;
  }

  return result;
};