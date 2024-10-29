/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function(arrays) {
    let minVal = arrays[0][0]; // smallest value from the first array
    let maxVal = arrays[0][arrays[0].length - 1]; // largest value from the first array
    let maxDist = 0;

    for (let i = 1; i < arrays.length; i++) {
        let currArray = arrays[i];
        maxDist = Math.max(maxDist, Math.abs(currArray[currArray.length - 1] - minVal), Math.abs(maxVal - currArray[0]));

        // Update the min and max values for subsequent comparisons
        minVal = Math.min(minVal, currArray[0]);
        maxVal = Math.max(maxVal, currArray[currArray.length - 1]);
    }

    return maxDist;
};

