/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    let count = [0, 0];
    let visited = new Set();
    visited.add(count.toString());

    for (let i = 0; i < path.length; i++) {
        if (path[i] == "N") count[1]++;
        if (path[i] == "E") count[0]++;
        if (path[i] == "S") count[1]--;
        if (path[i] == "W") count[0]--;

        console.log("journey", [...visited]);
        console.log("count", count);

        if (visited.has(count.toString())) {
            return true;
        }
        visited.add(count.toString());
    }
    return false;
};
