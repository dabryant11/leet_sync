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
var averageOfLevels = function(root) {
    // let curr = root

        if (!root) return [];

    const queue = [root];
    const result = [];

    while (queue.length) {
        let len = queue.length;
        let avg = queue.map((node) => node.val).reduce((accumulator, currentValue) => accumulator + currentValue) / queue.length;

        result.push(avg);

        while (len--) {
            const node = queue.shift();
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
    return result;

};