/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let alphanumeric = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    
    let left = 0
    let right = alphanumeric.length -1

    while ( left < right) {
        if (alphanumeric[left] !== alphanumeric[right]) return false
        left ++
        right --
    }
    return true 
};