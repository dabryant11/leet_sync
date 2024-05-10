/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {
    let ans = n.toString()
    let pointer = ans.length 
    if (pointer <= 3) return ans
    while (pointer > 3){
        pointer -= 3
        ans = ans.slice(0,pointer) + "." + ans.slice(pointer)
    }
    return ans
};