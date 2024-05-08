/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function(s) {
    let count = 0
    for (let i=1; i<s.length;i++) {
        let curr = s[i].toLowerCase()
        let prev = s[i -1].toLowerCase()
        if (curr !== prev) count ++
    }
    
    return count
};