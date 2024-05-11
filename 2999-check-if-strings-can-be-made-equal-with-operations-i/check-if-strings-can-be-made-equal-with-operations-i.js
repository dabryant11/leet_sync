/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var canBeEqual = function(s1, s2) {
    let left = 0;
    let right = left + 2;
    let swapCounter = 0;
    
    // Convert strings to arrays
    s1 = s1.split('');
    s2 = s2.split('');
    
    while (left < s1.length - 2) {
        if (s1[left] == s2[left]) {
            right++;
            left++;
        } else {
            let temp = s1[right];
            s1[right] = s1[left];
            s1[left] = temp;
            left++;
            right = left + 2;
        }
    }
    
    // Convert arrays back to strings and check for equality
    return s1.join('') === s2.join('');
};
