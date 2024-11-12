/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
    let count = 0
    let stack = true

    //iterate if ast && stack is even

    for (let i =0;i<s.length;i++){
        if (s[i] === "|") stack = !stack
        if (s[i] === "*" && stack) count ++
    }


    return count
};