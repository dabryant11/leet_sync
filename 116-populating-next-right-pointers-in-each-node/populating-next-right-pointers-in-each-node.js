/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function(root) {
    if (root == null) return root;

    let queue = [root];
    while(queue.length!=0) {
        let next = [];
        while(queue.length!=0) {
            let node = queue.shift();
            node.next = queue[0]||null;
            if (node.left!=null) next.push(node.left)
            if (node.right!=null) next.push(node.right)
        }
        queue = next;
    }
    return root;
};