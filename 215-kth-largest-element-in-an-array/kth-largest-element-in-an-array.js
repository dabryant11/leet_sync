/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    /// heap min k size
    // iterate
    // dequeue heap
    // TC oN
    // SC oK

    let minHeap = new MinPriorityQueue()

    for(let i =0;i<nums.length;i++){
        minHeap.enqueue(nums[i])
        while(minHeap.size() > k){
            minHeap.dequeue()
        }
    }

    return minHeap.front().element
};