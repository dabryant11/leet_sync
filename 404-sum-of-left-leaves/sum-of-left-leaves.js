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
var sumOfLeftLeaves = function(root) {
    if (!root) return 0; // Base case: empty tree

    return helper(root.left, true) + helper(root.right, false);
};

function helper(node, isLeft) {
    if (!node) return 0; // Base case: empty node

    if (!node.left && !node.right && isLeft) {
        // If the node is a leaf and is a left child, return its value
        return node.val;
    }

    // Recursively calculate the sum of left leaves in the left and right subtrees
    return helper(node.left, true) + helper(node.right, false);
}
