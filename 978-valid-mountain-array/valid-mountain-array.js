/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    if (arr.length < 3) return false;
    
    let i = 0;
    
    // Climb up
    while (i + 1 < arr.length && arr[i] < arr[i + 1]) {
        i++;
    }
    
    // Check if peak is at the start or end (not valid)
    if (i === 0 || i === arr.length - 1) return false;
    
    // Climb down
    while (i + 1 < arr.length && arr[i] > arr[i + 1]) {
        i++;
    }
    
    // If we reached the end, it's a valid mountain array
    return i === arr.length - 1;
};
