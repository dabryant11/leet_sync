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
    function addParents(node,parent=null){
        if(!node)return
        node.parent = parent
        addParents(node.left,node)
        addParents(node.right,node)
    }
    function getDepth(node,depth=0){
        if(!node || depth > k) return
        if(visited.has(node)) return
        if(depth === k) res.push(node.val)
        visited.add(node) 

        getDepth(node.left,depth+1)
        getDepth(node.right,depth+1)
        getDepth(node.parent,depth+1)
    }

    addParents(root)
    let res = []
    let visited = new Set()
    getDepth(target)

    return res
};