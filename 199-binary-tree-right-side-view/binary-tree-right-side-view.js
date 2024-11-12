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
 * @return {number[]}
 */
var rightSideView = function(root) {
   if (!root) return [];

    let ans = [];
    let queue = [root];

    while (queue.length > 0) {
        let levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift();

            // Capture the rightmost node at each level
            if (i === levelSize - 1) {
                ans.push(node.val);
            }

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }

    return ans;
};