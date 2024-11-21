/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0])
    let rooms = 0
    let finish = new MinPriorityQueue()

    for(let i =0;i<intervals.length;i++){
        let interval = intervals[i]
        if(!finish.size()) rooms ++
        else {
            let front = finish.front().element
            if(front > interval[0]) rooms ++
            else finish.dequeue()
        }
            finish.enqueue(interval[1])
    }

    return rooms
};