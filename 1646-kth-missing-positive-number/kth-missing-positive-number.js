/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let missNum = 0
    let current = 1
    let i = 0

    while (missNum < k){
        if(arr[i] !== current || i >= arr.length){
            missNum ++
            if(missNum === k) return current
        } else {
            i++
        }
        current ++
    }

};