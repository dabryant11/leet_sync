/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
    let n = points.length;
    if (n == 0) return 0;

    // Initialize the minimum cost to connect each point to the MST as infinity
    let minCost = new Array(n).fill(Infinity);
    minCost[0] = 0;  // Starting from the first point
    let inMST = new Array(n).fill(false);
    let result = 0;

    for (let i = 0; i < n; i++) {
        // Find the minimum cost point not in the MST
        let min = Infinity;
        let minIndex = -1;
        for (let j = 0; j < n; j++) {
            if (!inMST[j] && minCost[j] < min) {
                min = minCost[j];
                minIndex = j;
            }
        }

        // Add this point to the MST
        result += min;
        inMST[minIndex] = true;

        // Update the minimum cost to connect each point to the MST
        for (let j = 0; j < n; j++) {
            if (!inMST[j]) {
                let cost = Math.abs(points[minIndex][0] - points[j][0]) + Math.abs(points[minIndex][1] - points[j][1]);
                if (cost < minCost[j]) {
                    minCost[j] = cost;
                }
            }
        }
    }

    return result;
};
