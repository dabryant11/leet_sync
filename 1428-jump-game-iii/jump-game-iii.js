/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
    let n = arr.length;
    let queue = [start];
    let visited = new Set();
    
    while (queue.length > 0) {
        let curr = queue.shift();
        
        if (arr[curr] === 0) {
            return true;
        }
        
        if (!visited.has(curr)) {
            visited.add(curr);
            
            let forward = curr + arr[curr];
            let backward = curr - arr[curr];
            
            if (forward < n && !visited.has(forward)) {
                queue.push(forward);
            }
            
            if (backward >= 0 && !visited.has(backward)) {
                queue.push(backward);
            }
        }
    }
    
    return false;
};
