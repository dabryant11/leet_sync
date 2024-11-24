/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let missingNum = 0
    let idx = 0
    let curr = 1

    while ( missingNum < k){
        if(arr[idx] !== curr) missingNum++
        else idx++
        if (missingNum == k) return curr
        curr++
    }
};