/**
 * @param {string} s
 * @return {number}
 */
// var maxPower = function(s) {
//     let unqCheck = {}
//     let ans = 1

//     for (let char of s) {
//         if (!unqCheck[char]){
//             unqCheck[char] = 1
//         } else {
//             unqCheck[char] ++
//             ans = Math.max(ans, unqCheck[char])
//         }
//     }

//     return ans
    
// };
// var maxPower = function(s) {
//     let unqCheck = {};
//     let ans = 1; // Initialize ans with 1, as the minimum power is always 1 for a character

//     for (let char of s) {
//         if (!unqCheck[char]) {
//             unqCheck[char] = 1;
//         } else {
//             unqCheck[char]++;
//             ans = Math.max(ans, unqCheck[char]); // Update ans with the maximum count
//         }
//     }

//     return ans;
// };


// var maxPower = function(s) {
//     let unqCheck = {};
//     let ans = 1; // Initialize ans with 1, as the minimum power is always 1 for a character

//     for (let char of s) {
//         if (unqCheck[char] === undefined) { // Check if the character is not in unqCheck
//             unqCheck[char] = 1;
//         } else {
//             unqCheck[char]++;
//             ans = Math.max(ans, unqCheck[char]); // Update ans with the maximum count
//             delete unqCheck[char] 
//         }
//     }

//     return ans;
// };


// var maxPower = function(s) {
//     let unqCheck = {};
//     let ans = 1; // Initialize ans with 1, as the minimum power is always 1 for a character

//     for (let char of s) {
//         if (unqCheck[char] === undefined) { // Check if the character is not in unqCheck
//             unqCheck[char] = 1;
//         } else {
//             unqCheck[char]++;
//             ans = Math.max(ans, unqCheck[char]); // Update ans with the maximum count
//             unqCheck[char] = 1;
//         }
//     }

//     return ans;
// };

// var maxPower = function (s) {
//     let ans = curr = 1;
//     for (let char of s) {
//         if (s[char] === s[char + 1]) curr++;
//         else {
//             ans = Math.max(ans, curr);
//             curr = 1;
//         }
//     }
//     return ans;
// };

var maxPower = function (s) {
    let res = 1
    let curr = 1;
    for (let i= 0; i< s.length; i++) {
        if (s[i] === s[i + 1]) curr++;
        else {
            res = Math.max(res, curr);
            curr = 1;
        }
    }
    return res;
};
