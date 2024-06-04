/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    let ans = s.split("")
    for (let i=0;i<ans.length;i++){
        if(ans[i] === ans[i +1] && ans[i+1] === ans[i +2]) ans[i] = ""
    }
    return ans.join("")
};