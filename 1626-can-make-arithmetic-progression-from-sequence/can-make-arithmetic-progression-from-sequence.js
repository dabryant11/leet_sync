/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    arr.sort((a,b) => a-b)
    let right = 1
    let left = 0
    let diff = 0
    let currDiff

    while (right < arr.length) {
        currDiff = arr[right] - arr[left]
        if (left == 0) diff = currDiff
        if (diff !== currDiff) return false
        right ++
        left ++
    }
    return true
};