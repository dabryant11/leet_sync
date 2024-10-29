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
 * @return {boolean}
 */
var isUnivalTree = function(root) {
    if (!root) return true; // An empty tree is considered univalued by definition

    const value = root.val;

    function checkUnival(node) {
        if (!node) return true; // Reached a leaf node
        
        // If current node's value is not equal to the root's value, return false
        if (node.val !== value) return false;

        // Recursively check left and right children
        return checkUnival(node.left) && checkUnival(node.right);
    }

    return checkUnival(root);
 };