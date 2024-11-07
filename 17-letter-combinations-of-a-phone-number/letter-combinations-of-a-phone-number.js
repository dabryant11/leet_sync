/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits.length === 0) return [];

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

    let ans = [];
    
    const backtrack = (index, path) => {
        if (index === digits.length) {
            ans.push(path.join(""));
            return;
        }
        
        let currDigit = digits[index];
        for (let letter of map[currDigit]) {
            path.push(letter);
            backtrack(index + 1, path);
            path.pop();
        }
    };

    backtrack(0, []);
    return ans;
};
