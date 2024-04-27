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
    let sum = 0
    return calSum(root, low, high, sum)

}; 

function calSum(root, low, high, sum) {
    if(!root) return sum 
    if ( root.val >= low && root.val <= high){
        sum += root.val
    }
    sum = calSum(root.left, low, high, sum)
    sum = calSum(root.right, low, high, sum)

    return sum
}