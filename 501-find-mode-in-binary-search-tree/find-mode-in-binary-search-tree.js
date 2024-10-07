var findMode = function(root) {
    let map = {};
    let maxCount = 0;
    let ans = [];

    // Helper function to traverse the tree and update the map
    const traverse = (node) => {
        if (!node) return;
        
        // Update the frequency map
        if (!map[node.val]) map[node.val] = 0;
        map[node.val]++;
        
        // Update the max count for mode
        maxCount = Math.max(maxCount, map[node.val]);
        
        // Traverse left and right subtrees
        traverse(node.left);
        traverse(node.right);
    };

    // Traverse the entire tree
    traverse(root);

    // Find the mode(s)
    Object.keys(map).forEach(key => {
        if (map[key] === maxCount) {
            ans.push(Number(key)); // Ensure keys are returned as numbers
        }
    });

    return ans;
};
