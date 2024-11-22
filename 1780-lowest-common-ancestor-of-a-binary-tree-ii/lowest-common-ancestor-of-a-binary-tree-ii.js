/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let result = null;
  let foundP = false;
  let foundQ = false;
  const dfs = (node) => {
    if (node === null) {
      return false;
    }
    let left = dfs(node.left);
    let right = dfs(node.right);
    // does node equal p or q and return boolean
    let cur = node === p || node === q;
    if (cur) {
      if (node === p) {
        foundP = true;
      }
      if (node === q) {
        foundQ = true;
      }
    }
    if (left + right + cur >= 2) {
      result = node;
    }
    return left || right || cur;
  };
  dfs(root);
  if (foundP && foundQ) {
    return result;
  }
  return null;
};