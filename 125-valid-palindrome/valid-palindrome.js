/**
 * @param {string} s
 * @return {boolean}
 */
// var isPalindrome = function(s) {
//     let left = 0
//     let right = s.length -1
//     for (let char of s){
//         if (s[char] !== /^[a-zA-Z0-9 ]+$/) s.splice(char,1)
//     }

//     while ( left < right) {
//         if (s[left].toLowerCase() !== s[right].toLowerCase()) return false
//         left ++
//         right --
//     }
//     return true 
// };


var isPalindrome = function(s) {
    // Remove non-alphanumeric characters and convert to lowercase
    const alphanumeric = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    let left = 0;
    let right = alphanumeric.length - 1;

    while (left < right) {
        if (alphanumeric[left] !== alphanumeric[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};
