/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
     if (!root) return [];
    
    let stack = [root];
    let result = [];
    
    while (stack.length > 0) {
        let node = stack.pop();
        result.push(node.val);
        
        // Push the children to the stack in the order they appear
        for (let child of node.children) {
            stack.push(child);
        }
    }
    
    // Reverse the result to get the correct postorder
    return result.reverse();
};