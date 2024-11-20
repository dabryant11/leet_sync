/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    let heap = new MaxPriorityQueue({priority: (val) => val[0]})

    for (let p of points){
        let distance = p[0] * p[0] + p[1] * p[1]
        heap.enqueue([distance,p])
        if ( heap.size() > k) heap.dequeue()
    }

    let ans = []
    while ( heap.size() > 0){
        ans.push(heap.dequeue().element[1])
    }
    return ans
};