/**
 * @param {number} n
 * @return {boolean}
 */
var confusingNumber = function(n) {
    let rotations = {
        "0":"0",
        "1":"1",
        "6":"9",
        "8":"8",
        "9":"6"
    }
    let numStr = n.toString()
    let ans = ""

    for(let i = numStr.length -1;i>= 0 ;i--){
        if(!rotations[numStr[i]]) return false
        ans += rotations[numStr[i]]
    }
    return ans !== numStr

};