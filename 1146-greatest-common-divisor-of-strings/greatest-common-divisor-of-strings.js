/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {

    // while (str2.length > 0){
    //     if (str1.includes(str2)) return str2
    //     str2.slice(str2.length-1,0)
    // }
    // return ''7


    // Helper function to check if one string can be formed by repeating another
    const isDivisor = (base, target) => {
        return target.repeat(base.length / target.length) === base;
    };

    // Check if str1 + str2 is equal to str2 + str1 to determine if a common divisor exists
    if (str1 + str2 !== str2 + str1) return '';

    // Get the GCD length of str1 and str2
    const gcdLength = (a, b) => (b === 0 ? a : gcdLength(b, a % b));
    const gcdLen = gcdLength(str1.length, str2.length);

    // The result is the substring from 0 to gcdLen
    return str1.substring(0, gcdLen);
};