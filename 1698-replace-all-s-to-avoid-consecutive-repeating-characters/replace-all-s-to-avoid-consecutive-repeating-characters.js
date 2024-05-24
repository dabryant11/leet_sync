/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function(s) {
let chars = s.split('');
    
    for (let i = 0; i < chars.length; i++) {
        if (chars[i] === '?') {
            for (let char of ['a', 'b', 'c']) {
                if ((i === 0 || chars[i - 1] !== char) && (i === chars.length - 1 || chars[i + 1] !== char)) {
                    chars[i] = char;
                    break;
                }
            }
        }
    }
    
    return chars.join('');
};