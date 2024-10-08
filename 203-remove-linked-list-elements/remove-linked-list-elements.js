var removeElements = function(head, val) {
    // Create a dummy node to simplify handling the head removal case
    let dummy = new ListNode(0);
    dummy.next = head;

    let curr = dummy; // Start with the dummy node
    while (curr && curr.next) {
        if (curr.next.val === val) {
            curr.next = curr.next.next; // Skip the node with the target value
        } else {
            curr = curr.next; // Move to the next node
        }
    }

    return dummy.next; // Return the real head (dummy.next)
};
