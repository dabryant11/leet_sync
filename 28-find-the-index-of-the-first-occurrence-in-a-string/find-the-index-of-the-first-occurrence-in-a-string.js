/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
 let n = haystack.length
 let m = needle.length

 for(let i = 0;i<=n-m;i++){
    let j= 0 
    while( j< m && haystack[i+j] ===  needle[j]) j++
    if( j == m) return i
 }
 return -1
};