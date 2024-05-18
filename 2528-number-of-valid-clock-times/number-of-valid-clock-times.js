/**
 * @param {string} time
 * @return {number}
 */
var countTime = function(time) {
    let possibilities = 1;
    
    // Handle the hours part
    if (time[0] === '?' && time[1] === '?') {
        possibilities *= 24; // 00 to 23 -> 24 possibilities
    } else if (time[0] === '?') {
        if (time[1] >= '0' && time[1] <= '3') {
            possibilities *= 3; // ?0 to ?3 -> 0, 1, 2 -> 3 possibilities
        } else {
            possibilities *= 2; // ?4 to ?9 -> 0, 1 -> 2 possibilities
        }
    } else if (time[1] === '?') {
        if (time[0] === '2') {
            possibilities *= 4; // 20 to 23 -> 0, 1, 2, 3 -> 4 possibilities
        } else {
            possibilities *= 10; // 00 to 19, 10 possibilities for the second digit
        }
    }

    // Handle the minutes part
    if (time[3] === '?' && time[4] === '?') {
        possibilities *= 60; // 00 to 59 -> 60 possibilities
    } else if (time[3] === '?') {
        possibilities *= 6; // ?0 to ?9 -> 0 to 5 -> 6 possibilities
    } else if (time[4] === '?') {
        possibilities *= 10; // 0? to 5? -> 0 to 9 -> 10 possibilities
    }
    
    return possibilities;
};
