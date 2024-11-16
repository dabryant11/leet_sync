/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let n = intervals.length
    let i = 0
    let ans = []

    while ( i<n && intervals[i][1] < newInterval[0]){
        ans.push(intervals[i])
        i ++
    }
    while ( i<n && intervals[i][0] <= newInterval[1]){
        newInterval[0] = Math.min(intervals[i][0],newInterval[0])
        newInterval[1] = Math.max(intervals[i][1],newInterval[1])
        i++
    }

    ans.push(newInterval)
    while ( i<n){
        ans.push(intervals[i])
        i++
    }

    return ans
};