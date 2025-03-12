/**
 * @param {number} x
 * @param {number} y
 * @param {number} target
 * @return {boolean}
 */
var canMeasureWater = function(x, y, target) {
    if ( target === 0) return true
    if ( target > x + y) return false
    function gcd(a,b){
        while(b!==0){
            let temp = b
            b = a%b
            a = temp
        }
        return a
    }
    return target % gcd(x,y) === 0
};