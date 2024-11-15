/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    let root1Arr = [];
    let root2Arr = [];

    function dfs(root, arr) {
        if (!root) return;
        if (!root.left && !root.right) arr.push(root.val);  // Push leaf node value into the array
        dfs(root.left, arr);
        dfs(root.right, arr);
    }

    dfs(root1, root1Arr);  // Fill root1Arr with leaf nodes from root1
    dfs(root2, root2Arr);  // Fill root2Arr with leaf nodes from root2

    return root1Arr.join(",") === root2Arr.join(",");  // Compare arrays as strings
};
