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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let longestPath = 0
    function dfs(root){
        if (!root) return 0
        let leftPath = dfs(root.left)
        let rightPath = dfs(root.right)
        longestPath = Math.max(longestPath,rightPath + leftPath)
        return Math.max(leftPath, rightPath) +1
    }
    dfs(root)
    return longestPath 
};