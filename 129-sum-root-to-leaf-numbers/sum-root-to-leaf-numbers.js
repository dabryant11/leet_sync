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
var sumNumbers = function(root) {
  let ans = 0

  function dfs(root,path){
    if(!root) return
    if(!root.left && !root.right){
        ans += path * 10 + root.val
        return
    } 
    dfs(root.left,path * 10 + root.val)
    dfs(root.right,path * 10 + root.val)

  }

  dfs(root,0)

  return ans
};