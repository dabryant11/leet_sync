/**
 * // Definition for a _Node.
 * function _Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */

/**
 * @param {_Node} head
 * @param {number} insertVal
 * @return {_Node}
 */
var insert = function(head, insertVal) {
    let newNode = new Node(insertVal)

    if(!head){
        newNode.next = newNode
        return newNode
    }
    let curr = head
    let next = head.next

    while (next !== head){
        let condition1 = (insertVal >= curr.val && insertVal <= next.val)
         // Condition 2 Example: [2, 3, 5, 1]  val = 0
        let condition2 = (insertVal <= curr.val && insertVal <= next.val && next.val < curr.val);
        // Condition 3 Example: [2, 3, 5, 1]  val = 6
        let condition3 = (insertVal >= curr.val && next.val < curr.val);
        if(condition1 || condition2 || condition3){
            curr.next = newNode
            newNode.next = next
            return head
        }
        curr = curr.next
        next = next.next
    }

    curr.next = newNode
    newNode.next = head

    return head
};