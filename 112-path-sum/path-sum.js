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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (!root) return false

    function dfs(root,currPathSum){
        if (!root) return false
        currPathSum += root.val
        if (!root.left && !root.right) return currPathSum == targetSum
        return dfs(root.left,currPathSum) || dfs(root.right,currPathSum)

    }

    return dfs(root,0)
    
};