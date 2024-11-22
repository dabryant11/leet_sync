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
        if(!root)return
        root.parent = parent
        addParents(root.left,root)
        addParents(root.right,root)
    }

    function getDepth(root,depth = 0){
        if(!root || depth > k) return
        if(visited.has(root)) return
        if(depth === k ) res.push(root.val)
        visited.add(root) 

        getDepth(root.left,depth+1)
        getDepth(root.right,depth+1)
        getDepth(root.parent,depth+1)
    }

    let visited = new Set()
    let res = []
    addParents(root)
    getDepth(target)

    return res
};