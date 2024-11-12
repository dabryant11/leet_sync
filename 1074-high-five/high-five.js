/**
 * @param {number[][]} items
 * @return {number[][]}
 */
var highFive = function(items) {
    let map = {};
    let ans = [];

    // Step 1: Populate the map with scores for each student
    for (let i = 0; i < items.length; i++) {
        let student = items[i][0];
        let grade = items[i][1];

        if (!map[student]) map[student] = [];
        map[student].push(grade);
    }

    // Step 2: Calculate top 5 average for each student
    for (let key of Object.keys(map)) {
        // Sort scores in descending order to get the top 5
        map[key].sort((a, b) => b - a);
        
        // Sum the top 5 scores
        let sum = 0;
        for (let j = 0; j < 5 && j < map[key].length; j++) {
            sum += map[key][j];
        }

        // Calculate the average of the top 5 scores
        let avgGrade = Math.floor(sum / 5);
        ans.push([parseInt(key), avgGrade]);
    }

    // Sort the answer array by student ID in ascending order
    // ans.sort((a, b) => a[0] - b[0]);

    return ans;
};
