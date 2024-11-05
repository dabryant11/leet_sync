/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    // Step 1: Sort the intervals based on the start time
    intervals.sort((a, b) => a[0] - b[0]);
    
    let ans = [];  // This will store our merged intervals
    let currentInterval = intervals[0];  // Start with the first interval
    
    for (let i = 1; i < intervals.length; i++) {
        let interval = intervals[i];
        
        // Step 2: Check if there’s an overlap
        if (interval[0] <= currentInterval[1]) {
            // Merge by updating the end of the current interval
            currentInterval[1] = Math.max(currentInterval[1], interval[1]);
        } else {
            // No overlap, so push the current interval and move to the next one
            ans.push(currentInterval);
            currentInterval = interval;
        }
    }
    
    // Add the last interval
    ans.push(currentInterval);

    return ans;
};
