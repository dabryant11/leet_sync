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
    let secDepth = getDepth(q)

    while ( firstDepth !== secDepth){
        if(firstDepth > secDepth){
            p = p.parent
            firstDepth --
        } else {
            q = q.parent
            secDepth --
        }
    }
    while (p !== q){
        p = p.parent
        q = q.parent
    }
    return q
};

function getDepth(root){
    let depth = 0
    while(root){
        root = root.parent
        depth++
    }
    return depth
}