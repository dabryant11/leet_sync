var removeElements = function(head, val) {
    // Create a dummy node to simplify head removal case
    let dummy = new ListNode(0);
    dummy.next = head;

    let curr = dummy;

    while (curr && curr.next) {
        if (curr.next.val === val) {
            curr.next = curr.next.next; // Remove the node with target value
        } else {
            curr = curr.next; // Move to the next node
        }
    }

    return dummy.next; // Return the real head of the modified list
};
