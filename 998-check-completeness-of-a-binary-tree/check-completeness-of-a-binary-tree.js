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
var isCompleteTree = function(root) {
    if (!root) return true;

    let queue = [root];
    let foundNull = false; // Flag to track if we have encountered a null node

    while (queue.length > 0) {
        let node = queue.shift();

        if (node === null) {
            foundNull = true; // After encountering null, all subsequent nodes must also be null
        } else {
            if (foundNull) return false; // If a non-null node appears after a null, it's not a complete tree
            queue.push(node.left);
            queue.push(node.right);
        }
    }

    return true;
};