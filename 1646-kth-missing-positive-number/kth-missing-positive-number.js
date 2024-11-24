/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let curr = 1
    let missingNum = 0
    let i = 0

    while ( missingNum < k){
        if(curr !== arr[i]){
            missingNum ++
            if(missingNum === k) return curr
        } else i ++
        curr ++
    }
};