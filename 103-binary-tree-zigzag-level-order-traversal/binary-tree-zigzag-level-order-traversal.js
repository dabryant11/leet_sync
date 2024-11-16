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
    if (!root) return []

    let leftToRight = true
    let queue = [root]
    let ans = []

    while (queue.length > 0){
        let currLevel = []
        let levelSize = queue.length
        for(let i =0;i<levelSize;i++){
            let node = queue.shift()
            currLevel.push(node.val)
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }

        if(!leftToRight) currLevel.reverse()

        ans.push(currLevel)
        leftToRight = !leftToRight
    }   

    return ans
};