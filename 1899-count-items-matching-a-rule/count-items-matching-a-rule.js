/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let ans = 0
    for (let item of items){
        if (ruleKey === "type") {
            if (item[0] == ruleValue) ans ++
        }
        if (ruleKey === "color") {
            if (item[1] == ruleValue) ans ++
        }
        if (ruleKey === "name") {
            if (item[2] == ruleValue) ans ++
        }
    }
    return ans
};