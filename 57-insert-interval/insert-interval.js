/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let n = intervals.length
    let i = 0
    let ans = []
//no overlap
    while (i<n && intervals[i][1] < newInterval[0]){
        ans.push(intervals[i])
        i++
    }

    //overlap - find the merge
    while (i<n && intervals[i][0] <= newInterval[1]){
        newInterval[0] = Math.min(newInterval[0],intervals[i][0])
        newInterval[1] = Math.max(newInterval[1],intervals[i][1])
        i++
    }

    ans.push(newInterval)
    /// remainders
    while (i<n){
        ans.push(intervals[i])
        i++
    }

    return ans
};