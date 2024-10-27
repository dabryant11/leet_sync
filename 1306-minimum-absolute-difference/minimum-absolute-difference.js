/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    // sort
    // compare - find abs
    // min var check
    // push pair

    arr.sort((a,b) => a-b)
    let minDiff = Infinity
    let ans = []
    for (let i=1;i<arr.length;i++){
        let gap = Math.abs(arr[i] - arr[i-1])
        if (gap < minDiff){
            minDiff = gap
            ans = [[arr[i-1],arr[i]]]
        }
        else if (gap === minDiff){
            ans.push([arr[i-1],arr[i]])
        }
    }

    return ans
    
};