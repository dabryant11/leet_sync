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
    //DFS o(N)
    // recursive string call
    // once the end is hit join together for a num
    // add those nums together to get an answer
    let ans = 0;
    
    const dfs = (node, path) => {
        if (!node) return;
        if (!node.left && !node.right) {
            ans += path * 10 + node.val;
            return;
        }
        dfs(node.left, path * 10 + node.val);
        dfs(node.right, path * 10 + node.val);
    };
    
    dfs(root, 0);
    return ans;

};