/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const minHeap = new MinPriorityQueue(); // Create a Min-Heap

    for (let num of nums) {
        minHeap.enqueue(num); // Add the current element to the heap
        if (minHeap.size() > k) {
            minHeap.dequeue(); // Remove the smallest element if size exceeds k
        }
    }

    // The smallest element in the heap is the k-th largest in the array
    return minHeap.front().element;
};
