/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    // let ans = 0
    // while (n >= 2) {
    // let oneSmaller = n - 1
    // let twoSmaller = n - 2
    //     n = oneSmaller + twoSmaller
    //     ans ++
    // }
    // return ans

    if(n<=1){
        return n;
    }
    return fib(n-1) + fib(n-2)
};