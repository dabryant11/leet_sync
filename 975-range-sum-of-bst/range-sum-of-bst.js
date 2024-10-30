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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    let sum = 0;

    function helper(node) {
        if (!node) return;

        // Check if the current node's value is within the range
        if (node.val >= low && node.val <= high) {
            sum += node.val;
        }

        // Only explore left subtree if node's value is greater than `low`
        if (node.val > low) {
            helper(node.left);
        }

        // Only explore right subtree if node's value is less than `high`
        if (node.val < high) {
            helper(node.right);
        }
    }

    helper(root);
    return sum;
};
