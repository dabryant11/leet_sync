/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let ans = []
    for (let i = left;i<=right;i++){
        let selfDividing = true
        let num = i
        let sepDigits = num.toString().split("")
        for (let digit of sepDigits){
            let digitNum = parseInt(digit)
            if(digitNum === 0 || num % digitNum !== 0)  {
                selfDividing = false
                break
            }
        }
        if(selfDividing) ans.push(i)
    }
    return ans
};