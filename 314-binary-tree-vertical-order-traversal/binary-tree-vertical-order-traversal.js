/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalOrder = function(root) {
     if (!root) return [];
  // given constraint: the number of nodes in the tree is 100 at maximum
  let arr = new Array(200);
  let queue = [];
  queue.push({ node: root, col: 100 });
  while (queue.length > 0) {
    let { node, col } = queue.shift();
    if (arr[col]) {
      arr[col].push(node.val);
    } else {
      arr[col] = [node.val];
    }
    if (node.left) queue.push({ node: node.left, col: col - 1 });
    if (node.right) queue.push({ node: node.right, col: col + 1 });
  }
  return arr.filter((x) => x !== undefined);
  // T.C: O(N)
  // S.C: O(N)
};