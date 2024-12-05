/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let left = 0
    let right = s.length -1

    function helper(left,right){
        while ( left < right){
            if (s[left] !== s[right]) return false
            left ++
            right --
        }    
        return true
    }
    while ( left < right){
        if (s[left] !== s[right]){
            return helper(left +1, right) || helper(left, right -1)
        }
        left ++
        right --
    }
    return true
};