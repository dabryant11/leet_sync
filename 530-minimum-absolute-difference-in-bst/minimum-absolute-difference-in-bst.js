var getMinimumDifference = function(root) {
    let prev = null; // To store the previous node in in-order traversal
    let minAbs = Infinity; // Initialize minAbs to a large value

    // Helper function to perform in-order traversal
    const inOrderTraverse = (node) => {
        if (!node) return;

        // Traverse the left subtree
        inOrderTraverse(node.left);

        // Process the current node
        if (prev !== null) {
            minAbs = Math.min(minAbs, Math.abs(node.val - prev.val));
        }
        prev = node;

        // Traverse the right subtree
        inOrderTraverse(node.right);
    };

    inOrderTraverse(root); // Start in-order traversal
    return minAbs;
};
