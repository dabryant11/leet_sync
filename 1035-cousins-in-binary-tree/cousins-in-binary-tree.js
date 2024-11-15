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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    if (!root) return false;

    // Helper function for BFS
    function bfs(root) {
        let queue = [[root, null]]; // Store nodes with their parents (node, parent)
        
        while (queue.length) {
            let levelSize = queue.length;
            let xFound = false, yFound = false;
            let xParent = null, yParent = null;
            
            for (let i = 0; i < levelSize; i++) {
                let [node, parent] = queue.shift();

                // Check if we found x or y
                if (node.val === x) {
                    xFound = true;
                    xParent = parent;
                } 
                if (node.val === y) {
                    yFound = true;
                    yParent = parent;
                }

                // Add children to queue with current node as their parent
                if (node.left) queue.push([node.left, node]);
                if (node.right) queue.push([node.right, node]);
            }

            // If both x and y are found at the same level, check their parents
            if (xFound && yFound) {
                return xParent !== yParent;
            }
            // If we found one but not the other, they are not cousins
            if (xFound || yFound) {
                return false;
            }
        }

        return false; // If we exhaust the tree without finding both x and y, return false
    }

    return bfs(root);
};
