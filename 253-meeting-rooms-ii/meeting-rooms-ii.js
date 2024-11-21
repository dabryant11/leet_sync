/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0])
    let finish = new MinPriorityQueue()
    let rooms = 0

    for(let i =0; i<intervals.length; i++){
        let interval = intervals[i]

        if(!finish.size()) rooms ++
        else {
            let front = finish.front().element
            if (front <= interval[0]) finish.dequeue()
            else rooms ++
        }
        finish.enqueue(interval[1])
        

    }
    return rooms
};