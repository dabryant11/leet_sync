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

  const dfs = (node) => {
    if (!node) return false;

    // Recursively search in the left and right subtrees
    const left = dfs(node.left);
    const right = dfs(node.right);

    // Check if the current node is either p or q
    const cur = node === p || node === q;

    // If any two of the three flags are true, the current node is the LCA
    if ((left && right) || (cur && (left || right))) {
      result = node;
    }

    // Return true if this node is either p or q, or if either subtree contains p or q
    return left || right || cur;
  };

  dfs(root);
  return result;
};
