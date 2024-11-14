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
var sumRootToLeaf = function(root) {
    let sum = 0
    function bfs(root,currentPath){
        if(!root) return
        currentPath = (currentPath<<1) | root.val
        if(!root.left && !root.right) sum += currentPath
        else{
            bfs(root.left, currentPath)
            bfs(root.right, currentPath)
        }

    }
    bfs(root,0)
    return sum
};