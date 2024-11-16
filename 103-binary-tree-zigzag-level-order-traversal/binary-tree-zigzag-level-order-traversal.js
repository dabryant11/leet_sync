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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (!root) return [];
    
    let ans = [];
    let queue = [root];  // Initialize a queue for BFS
    let leftToRight = true;  // This flag determines the direction of traversal for each level

    while (queue.length > 0) {
        let levelSize = queue.length;
        let currLevel = [];

        // Traverse the current level
        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift(); // Dequeue a node
            
            currLevel.push(node.val); // Add node value to the current level
            
            // Enqueue left and right children
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        // If we are on an odd level (i.e., leftToRight is false), reverse the current level
        if (!leftToRight) {
            currLevel.reverse();
        }

        ans.push(currLevel);  // Add the current level to the result
        leftToRight = !leftToRight;  // Toggle the direction for the next level
    }
    
    return ans;
};
