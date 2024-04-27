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

function calSum(root, low, high, sum) {
    if (!root) return sum; // Return sum if root is null
    if (root.val >= low && root.val <= high) {
        sum += root.val;
    }
    // Update sum with values from left and right subtrees
    sum = calSum(root.left, low, high, sum);
    sum = calSum(root.right, low, high, sum);
    return sum;
}

var rangeSumBST = function(root, low, high) {
    let sum = 0;
    return calSum(root, low, high, sum);
};

// function calSum(root, low, high, sum) {
//     if(!root) return sum
//     if ( root.val >= low && root.val <= high){
//         sum += root.val
//     }
//     calSum(root.left, low, high, sum)
//     calSum(root.right, low, high, sum)

//     return sum
// }


// var rangeSumBST = function(root, low, high) {
//     let sum = 0
//     calSum(root, low, high, sum)

// };


// let calSum = (root, low, high) => {
//     if (!root) return;
//     if (root.val >= low && root.val <= high) {
//         sum += root.val;
//     }
//     calSum(root.left, low, high);
//     calSum(root.right, low, high);
// }

// var rangeSumBST = function(root, low, high) {
//     sum = 0; // Reset sum before each invocation
//     calSum(root, low, high);
//     return sum;
// };