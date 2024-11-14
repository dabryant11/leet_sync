/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    
    let ans = parseInt(date.slice(-2))
    let month = parseInt(date.slice(5,7))
    let year = parseInt(date.slice(0,4))
    
    let monthMap = {
        1: 31,   
        2: 28,  
        3: 31, 
        4: 30, 
        5: 31, 
        6: 30, 
        7: 31, 
        8: 31, 
        9: 30, 
        10: 31,
        11: 30,
        12: 31 
    }

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        monthMap[2] = 29;
    }

    let curr = 1
    while (curr != month){
        ans += monthMap[curr]
        curr++
    }

    return ans
};