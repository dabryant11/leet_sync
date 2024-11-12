/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
    let count = 0
    let stack = []

    //iterate if ast && stack is even

    for (let i =0;i<s.length;i++){
        if (s[i] === "|") stack.push("|")
        if (s[i] === "*" && stack.length % 2 === 0) count ++
    }


    return count
};