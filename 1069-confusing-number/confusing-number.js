/**
 * @param {number} n
 * @return {boolean}
 */
var confusingNumber = function(n) {
    const rotations = { '0': '0', '1': '1', '6': '9', '8': '8', '9': '6' };
    const original = n.toString();
    let rotated = '';

    for (let i = original.length - 1; i >= 0; i--) {
        const digit = original[i];
        if (!rotations[digit]) return false; // If digit is 2, 3, 4, 5, or 7
        rotated += rotations[digit];
    }

    return rotated !== original;
};
