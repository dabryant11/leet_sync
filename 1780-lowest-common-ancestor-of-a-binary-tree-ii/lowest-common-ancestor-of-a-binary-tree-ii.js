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
var lowestCommonAncestor = function(root, p, q) {
    let result = null

    function dfs(root){
        if(!root) return 

        let left = dfs(root.left)
        let right = dfs(root.right)

        let curr = root == p || root == q
        if((left && right) || curr&& (left || right)){
            result = root
        }
        return left || right || curr
    }
    dfs(root)
    return result
};