/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits.length === 0) return []

        const map = {
        2: ["a", "b", "c"],
        3: ["d", "e", "f"],
        4: ["g", "h", "i"],
        5: ["j", "k", "l"],
        6: ["m", "n", "o"],
        7: ["p", "q", "r", "s"],
        8: ["t", "u", "v"],
        9: ["w", "x", "y", "z"]
    };

    let ans =[]
    function dfs(idx,path){
        if(idx === digits.length){
            ans.push(path.join(""))
            return
        }
        let currDig = digits[idx]
        for(let letter of map[currDig]){
            path.push(letter)
            dfs(idx+1,path)
            path.pop()
        }
    }

    dfs(0,[])
    return ans
};