var findKthLargest = function(nums, k) {
    const minPriQue = new MinPriorityQueue();
    for(let i = 0; i < nums.length; i++){
        minPriQue.enqueue(nums[i]);
        if(minPriQue.size() > k){
            minPriQue.dequeue();
        }
    }
    return minPriQue.front().element;
};