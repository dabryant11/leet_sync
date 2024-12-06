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
    if(!root) return []
    let queue = [root]
    let ans = []

    while ( queue.length > 0){
        let levelSize = queue.length
        for(let i =0;i<levelSize;i++){
            let currNode = queue.shift()
            if(i == levelSize -1) ans.push(currNode.val)
            if(currNode.left) queue.push(currNode.left)
            if(currNode.right) queue.push(currNode.right)
        }
    }
    return ans
};