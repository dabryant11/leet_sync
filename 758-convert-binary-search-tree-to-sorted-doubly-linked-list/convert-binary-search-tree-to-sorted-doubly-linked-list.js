/**
 * // Definition for a _Node.
 * function _Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var treeToDoublyList = function(root) {
    let stack = []
    let curr = root
    let head = null
    let prev = null
    
    while ( stack.length > 0 || curr){
        while (curr){
            stack.push(curr)
            curr=curr.left
        }

        curr = stack.pop()
        if(head === null) head = curr
        if(prev){
            prev.right = curr
            curr.left = prev
        }
        prev = curr
        curr = curr.right 
    }
    if(head){
        head.left = prev
        prev.right = head
    }
    return head
};