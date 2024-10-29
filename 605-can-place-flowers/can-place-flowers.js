/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let numThatCanBePlanted = 0;

    for (let i = 0; i < flowerbed.length; i++) {
        // Check if the current spot and its neighbors are empty
        if (flowerbed[i] === 0 && 
            (i === 0 || flowerbed[i - 1] === 0) && 
            (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)) {
            numThatCanBePlanted++;
            flowerbed[i] = 1; // Simulate planting a flower
        }
    }

    return numThatCanBePlanted >= n;
};
