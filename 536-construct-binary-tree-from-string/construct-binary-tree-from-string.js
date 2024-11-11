// Definition for a binary tree node.
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// Function to construct the binary tree from the string.
let i = 0;

const construct = (s) => {
    if (i >= s.length) return null;

    // Parse number (including negative sign).
    let numStr = '';
    while (s[i] === '-' || (s[i] >= '0' && s[i] <= '9')) {
        numStr += s[i++];
    }

    if (!numStr) return null;

    // Create node with parsed number.
    const node = new TreeNode(Number(numStr));

    // If the next character is '(', parse left child.
    if (s[i] === '(') {
        i++;
        node.left = construct(s);
        i++;  // Skip ')'
    }

    // If the next character is '(', parse right child.
    if (s[i] === '(') {
        i++;
        node.right = construct(s);
        i++;  // Skip ')'
    }

    return node;
};

// Main function to initiate parsing.
const str2tree = (s) => {
    i = 0;
    return construct(s);
};
