/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
    function addParents(root,parent = null){
        if(!root) return
        root.parent = parent
        addParents(root.left,root)
        addParents(root.right,root)
    }

    function getDepth(node,depth = 0){
        if(!node || depth > k) return
        if(visited.has(node)) return
        if(depth == k) res.push(node.val)
        visited.add(node)

        getDepth(node.left,depth+1)
        getDepth(node.right,depth+1)
        getDepth(node.parent,depth+1)
    }

    let res = []
    let visited = new Set()
    addParents(root)
    getDepth(target)

    return res
};