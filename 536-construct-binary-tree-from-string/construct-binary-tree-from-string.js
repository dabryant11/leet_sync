/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} s
 * @return {TreeNode}
 */
let i = 0;

var construct = function (s) {
    let numStr = [];

    while (s[i] === '-' || s[i] >= '0' && s[i] <= '9')
        numStr.push(s[i++]);

    if (numStr.length === 0)
        return null;

    let node = new TreeNode(Number(numStr.join('')));
    if (s[i] === '(')
        i++, node.left = construct(s), i++;
    if (s[i] === '(')
        i++, node.right = construct(s), i++;
    return node;
}

var str2tree = function(s) {
    i = 0;
    return construct(s);
};