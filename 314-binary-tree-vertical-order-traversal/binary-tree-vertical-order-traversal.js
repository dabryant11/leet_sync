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
  let queue = [];
  let m = new Map();
  queue.push({ node: root, col: 0 });
  while (queue.length > 0) {
    let { node, col } = queue.shift();
    if (m.has(col)) m.get(col).push(node.val);
    else m.set(col, [node.val]);
    if (node.left) queue.push({ node: node.left, col: col - 1 });
    if (node.right) queue.push({ node: node.right, col: col + 1 });
  }
  m = Array.from(m.entries());
  m.sort((a, b) => a[0] - b[0]);
  return m.map((x) => x[1]);
  // T.C: O(Nlog(N))
  // S.C: O(N)
};