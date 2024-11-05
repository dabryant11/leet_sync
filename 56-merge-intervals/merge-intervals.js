/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b) => a[0] -b[0])

    let ans = []
    let currentInterval = intervals[0]

    for(let i=1;i<intervals.length;i++){
        let interval = intervals[i]
        if(currentInterval[1] >= interval[0]){
            currentInterval[1] = Math.max(currentInterval[1],interval[1])
        } else {
            ans.push(currentInterval)
            currentInterval = interval
        }
    }

    ans.push(currentInterval)

    return ans
};