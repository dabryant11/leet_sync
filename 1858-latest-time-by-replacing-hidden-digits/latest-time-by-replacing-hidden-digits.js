/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function(time) {
    // Convert time string to an array to allow modification
    let timeArr = time.split("");

    for (let i = 0; i < timeArr.length; i++) {
        if (timeArr[i] === "?") {
            if (i === 0) {
                timeArr[i] = (timeArr[1] === "?" || timeArr[1] <= "3") ? "2" : "1";
            } else if (i === 1) {
                timeArr[i] = (timeArr[0] === "2") ? "3" : "9";
            } else if (i === 3) {
                timeArr[i] = "5";
            } else if (i === 4) {
                timeArr[i] = "9";
            }
        }
    }

    // Join array back to string
    return timeArr.join("");
};
