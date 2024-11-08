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
    const newNode = new _Node(insertVal, null);

    // Case 1: If the list is empty, create a new circular list with the single new node.
    if (!head) {
        newNode.next = newNode;
        return newNode;
    }

    let curr = head;

    while (true) {
        // Case 2: Normal insertion, where insertVal fits between curr and curr.next
        if (curr.val <= insertVal && insertVal <= curr.next.val) {
            newNode.next = curr.next;
            curr.next = newNode;
            break;
        }

        // Case 3: Insert at the boundary between the maximum and minimum node in a circular list
        if (curr.val > curr.next.val && (insertVal >= curr.val || insertVal <= curr.next.val)) {
            newNode.next = curr.next;
            curr.next = newNode;
            break;
        }

        // Move to the next node in the list
        curr = curr.next;

        // Case 4: If we've looped all the way around, insert the node here
        if (curr === head) {
            newNode.next = curr.next;
            curr.next = newNode;
            break;
        }
    }

    return head;
};
