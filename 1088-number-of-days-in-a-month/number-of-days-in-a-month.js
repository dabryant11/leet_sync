/**
 * @param {number} year
 * @param {number} month
 * @return {number}
 */
var numberOfDays = function(year, month) {
    let map = {
    1:31,  // January
    2: 28,  // February (29 in a leap year)
    3: 31,  // March
    4: 30,  // April
    5: 31,  // May
    6: 30,  // June
    7: 31,  // July
    8: 31,  // August
    9: 30,  // September
    10: 31, // October
    11: 30, // November
    12: 31 
    }

    // leap year check

      // Leap year check for February (month 2)
    if (month === 2) {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            map[2] = 29;
        }
    }

    return map[month]
};