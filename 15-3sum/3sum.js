/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let sorted = nums.sort((a,b) => a-b)
    let ans = []

    for ( let i = 0;i<sorted.length -2;i++){
        if(i > 0 && sorted[i] == sorted [i-1]) continue

        let left = i + 1
        let right = sorted.length -1

        while ( left < right){
            let sum = sorted[i] + sorted[left] + sorted[right]
            if (sum == 0){
                ans.push([sorted[i],sorted[left],sorted[right]])
                while (sorted[left] == sorted[left +1]) left ++
                while (sorted[right] == sorted[right -1]) right ++
                left ++ 
                right --
            } else if ( sum > 0) right --
            else  left ++
        }
    }
    return ans
};