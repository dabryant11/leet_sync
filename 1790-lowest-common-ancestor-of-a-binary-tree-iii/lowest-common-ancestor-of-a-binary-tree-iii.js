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
    let depthFirst = getDepth(p);
    let depthSecond = getDepth(q);
    
    while (depthFirst !== depthSecond) {
        if (depthFirst > depthSecond) {
            p = p.parent;
            depthFirst--;
        } else {
            q = q.parent;
            depthSecond--;
        }
    }
    
    while (p !== q) {
        p = p.parent;
        q = q.parent;
    }
    
    return p;
};

var getDepth = function (node) {
    let depth = 0;
    while (node) {
        node = node.parent;
        depth++;
    }
    
    return depth;
};