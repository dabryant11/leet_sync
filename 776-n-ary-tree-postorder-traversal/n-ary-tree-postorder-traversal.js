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
    if(!root) return []
    let ans = []
    let stack = [root]
    while(stack.length>0){
        let node = stack.pop()
        ans.push(node.val)
        for(let child of node.children){
            stack.push(child)
        }
    }

    return ans.reverse()
};