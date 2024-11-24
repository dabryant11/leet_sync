/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let missingNum = 0
    let idx = 0
    let curr = 1

    while (missingNum < k){
        if(curr !== arr[idx]){
            missingNum ++
            if(missingNum == k) return curr
        } else idx ++
        curr ++
    }
};