/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    var heap = new MaxPriorityQueue({priority: (val) => val[0]});

    for (let i of points) {
        var distance = i[0] * i[0] + i[1] * i[1];
        heap.enqueue([distance, i]);
        while (heap.size() > k) heap.dequeue();
    }

    var result = [];
    while(heap.size() > 0) {
        result.push(heap.dequeue().element[1]);
    }
    return result;
};