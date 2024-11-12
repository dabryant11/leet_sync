/**
 * @param {number[][]} items
 * @return {number[][]}
 */
var highFive = function(items) {
    let ans = [];
    let map = {};

    // Organize grades by student
    for (let i = 0; i < items.length; i++) {
        let student = items[i][0];
        let grade = items[i][1];
        if (!map[student]) map[student] = [];
        map[student].push(grade);
    }

    // Calculate the top 5 average for each student
    for (let key of Object.keys(map)) {
        // Sort grades in descending order
        map[key].sort((a, b) => b - a);
        
        // Take the top 5 scores only
        let topFiveGrades = map[key].slice(0, 5);
        
        // Calculate the average of the top 5 grades
        let sum = topFiveGrades.reduce((acc, grade) => acc + grade, 0);
        let avgGrade = Math.floor(sum / topFiveGrades.length);
        
        // Push result to answer array
        ans.push([parseInt(key), avgGrade]);
    }

    return ans;
};
