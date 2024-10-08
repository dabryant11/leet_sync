var findContentChildren = function(g, s) {
    // Sort both arrays to maximize content children
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    let ans = 0;
    let i = 0; // Pointer for greed factors (children)
    let j = 0; // Pointer for cookie sizes

    // Use two pointers to assign cookies to children
    while (i < g.length && j < s.length) {
        if (s[j] >= g[i]) { // If the cookie can satisfy the child's greed
            ans++; // Count this child as content
            i++; // Move to the next child
        }
        j++; // Move to the next cookie
    }

    return ans;
};
