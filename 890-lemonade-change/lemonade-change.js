/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let five = 0
    let ten = 0
    let twenty = 0

    for (let i=0; i< bills.length; i++) {
        if (bills[i] == 5) five ++
        if (bills[i] == 10) {
            ten ++
            five --
            if (five < 0)return false
        }
        if (bills[i] == 20) {
            twenty ++
            if (ten > 0 && five > 0 ) {
                ten --
                five --
            } 
            else if (five >= 3){
                five -=3
            } else return false
        }
    }
    return true
};