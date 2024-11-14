/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    for (let i = 0; i < image.length; i++) {
        let row = image[i];
        let left = 0;
        let right = row.length - 1;

        // Flip and invert simultaneously
        while (left <= right) {
            // Swap and invert both elements if they are not in the middle
            if (left < right) {
                [row[left], row[right]] = [1 - row[right], 1 - row[left]];
            } else {
                // If left == right, just invert the middle element
                row[left] = 1 - row[left];
            }
            left++;
            right--;
        }
    }
    return image;
};
