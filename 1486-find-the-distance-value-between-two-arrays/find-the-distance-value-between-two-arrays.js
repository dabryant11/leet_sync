/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
    let ans = 0;
    for (let i = 0; i < arr1.length; i++) {
        let lessThan = true; 
        for (let j = 0; j < arr2.length; j++) {
            if (Math.abs(arr1[i] - arr2[j]) <= d) {
                lessThan = false;
                break; // No need to check further if condition is met
            }
        }
        if (lessThan) ans++;
    }
    return ans;
};
