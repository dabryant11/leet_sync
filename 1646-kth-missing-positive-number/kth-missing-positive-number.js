/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
   let missingNum = 0
   let curr = 1
   let idx = 0

   while (missingNum < k){
        if (arr[idx] !== curr){
            missingNum++
            if(missingNum == k) return curr
        } else {
            idx++
        }
        curr++
   }

};