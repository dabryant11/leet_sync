/**
 * // Definition for a _Node.
 * function _Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {_Node} p
 * @param {_Node} q
 * @return {_Node}
 */
var lowestCommonAncestor = function(p, q) {
    let firstDepth = getDepth(p)
    let secondDepth = getDepth(q)

    while (firstDepth !== secondDepth){
        if (firstDepth > secondDepth){
            firstDepth --
            p = p.parent
        } else {
            secondDepth --
            q = q.parent
        }
    }
    
    while (p !== q){
        p = p.parent
        q = q.parent
    }

    return p
};

function getDepth(node){
    let depth = 0

    while (node){
        node = node.parent
        depth++
    }
    return depth
}