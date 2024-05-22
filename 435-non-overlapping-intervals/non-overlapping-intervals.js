/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a,b) => a[1] - b[1])
    let counter = 0
    let prev = intervals[0]
    for (let i=1;i<intervals.length;i++){
        let curr = intervals[i]
        let start = 0
        let end = 1
        if (curr[start] < prev[end]) counter ++
        else prev = intervals[i]
    }
    return counter 
};