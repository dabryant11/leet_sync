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
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
    let closest = root.val

    while (root !== null){

        if (Math.abs(target - closest) > Math.abs(target - root.val) || 
        (Math.abs(target - closest) === Math.abs(target - root.val) && root.val < closest)) {
            closest = root.val;
        }
        
        if ( root.val > target) root = root.left
        else root = root.right
    }
    return closest
};