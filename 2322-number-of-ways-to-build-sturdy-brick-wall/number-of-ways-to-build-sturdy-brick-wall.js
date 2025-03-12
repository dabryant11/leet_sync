/**
 * @param {number} height
 * @param {number} width
 * @param {number[]} bricks
 * @return {number}
 */
var buildWall = function(height, width, bricks) {
    let memo = {};
    let res = 0;
    let options = [];
    findAllOptionsForFirstRow(0, 0);
    for (let option of options) {
        res += findAll(1, option);
    }
    return res % 1000000007;
    
    function findAll(h, curRow) {
        let key = `${h},${curRow}`;
        if (h === height) {
            return 1;
        }
        
        if (memo[key] !== undefined) {
            return memo[key];
        }
        
        let sum = 0;
        for (let i = 0; i < options.length; i++) {
            if ((options[i] & curRow) === 0) {
                sum += findAll(h + 1, options[i]);
            }
        }
        
        memo[key] = sum  % 1000000007;
        return sum;
    }
    
    function findAllOptionsForFirstRow(len, cur) {
        for (let brick of bricks) {
            if (len + brick > width) continue;
            if (len + brick === width) {
                options.push(cur);
            }
            
            findAllOptionsForFirstRow(len + brick, cur | (1 << (len + brick)));
        }
    }
};