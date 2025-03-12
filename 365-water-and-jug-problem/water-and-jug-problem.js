/**
 * @param {number} x
 * @param {number} y
 * @param {number} target
 * @return {boolean}
 */
var canMeasureWater = function(x, y, target) {
   

    if (target > x + y) return false; // if the target exceeds the total capacity of both jugs, it's impossible
    if (target === 0) return true; // target 0 is always achievable (by not filling the jugs)
    
    // Function to calculate GCD
    function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    // Check if target is a multiple of the GCD of x and y
    return target % gcd(x, y) === 0;
    
};