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
        if(!root) return 0

        // if(!root.left && root.right){
        //     longestPath = Math.max(path,longestPath)

        // } 

        // dfs(root.left,path +1)
        // dfs(root.right,path +1)

         // Recursively find the depth of left and right subtrees
        const leftDepth = dfs(root.left);
        const rightDepth = dfs(root.right);

        // Update the longest path found so far (diameter at this node)
        longestPath = Math.max(longestPath, leftDepth + rightDepth);

        // Return the depth of the subtree rooted at this node
        return Math.max(leftDepth, rightDepth) + 1;
    }


    dfs(root)
    return longestPath
};