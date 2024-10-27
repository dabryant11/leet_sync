/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let ans = numBottles;

    while (numBottles >= numExchange) {
        let exchange = Math.floor(numBottles / numExchange); // Bottles obtained by exchanging
        ans += exchange; // Add exchanged bottles to total count
        numBottles = exchange + (numBottles % numExchange); // Update numBottles with new bottles + remaining empty bottles
    }

    return ans;
};
