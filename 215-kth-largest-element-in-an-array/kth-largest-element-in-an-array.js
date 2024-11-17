/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const minPriQue = new MinPriorityQueue();
    for(let num of nums){
        minPriQue.enqueue(num);
        if(minPriQue.size() > k){
            minPriQue.dequeue();
        }
    }
    return minPriQue.front().element;
};