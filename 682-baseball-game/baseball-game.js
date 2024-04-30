/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let record = [];
    for (let i = 0; i < operations.length; i++) {
        if (operations[i] === "+") {
            record.push(record[record.length - 2] + record[record.length - 1]);
        } else if (operations[i] === "D") {
            record.push(record[record.length - 1] * 2);
        } else if (operations[i] === "C") {
            record.pop(); // Corrected to remove the last element
        } else {
            record.push(parseInt(operations[i])); // Convert string to number
        }
    }

    let ans = 0;
    for (let num of record) {
        ans += num;
    }
    return ans;
};
