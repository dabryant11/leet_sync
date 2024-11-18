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

    while (firstDepth !== secDepth){
        if(firstDepth > secDepth){
            firstDepth --
            p = p.parent
        } else {
            secDepth --
            q = q.parent
        }
    }

    while ( p !== q){
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