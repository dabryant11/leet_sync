/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
    let ans = 0
    if (a>b){
        for (let i=1;i<=a;i++){
            if ( a % i == 0 && b % i === 0) ans ++
        }
    } else {
        for (let i=1;i<=b;i++){
            if ( a % i == 0 && b % i === 0) ans ++
        }

    }
    return ans
};