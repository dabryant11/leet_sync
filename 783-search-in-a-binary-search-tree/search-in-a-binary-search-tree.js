var searchBST = function(root, val) {
    if (!root) return null;  // Return null if the node doesn't exist
    if (root.val === val) return root;  // Return the node if the value matches
    
    // Since this is a binary search tree, we know:
    // If val is less than the current node's value, search the left subtree.
    if (val < root.val) {
        return searchBST(root.left, val);
    }
    
    // Otherwise, search the right subtree.
    return searchBST(root.right, val);
};
