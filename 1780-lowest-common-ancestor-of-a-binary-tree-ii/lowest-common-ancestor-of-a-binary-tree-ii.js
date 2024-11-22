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

    function dfs(node){
        if ( !node) return false

        let left = dfs(node.left)
        let right = dfs(node.right)

        let curr = p === node || q === node

        if((left && right) || curr &&(left || right)){
            result = node 
        }
        
        
        return left || right || curr
    }

    dfs(root)
    return result
};