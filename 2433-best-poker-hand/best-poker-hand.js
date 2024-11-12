/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function(ranks, suits) {
    let rankMap = new Map()
    let suitMap = new Map()

    for(let rank of ranks){
        rankMap.set(rank,(rankMap.get(rank) || 0) +1)
    }  

    for(let suit of suits){
        suitMap.set(suit,(suitMap.get(suit) || 0) +1)
    }  

    if(suitMap.size === 1) return "Flush"

    let maxRank = Math.max(...rankMap.values())

    if(maxRank>= 3) return "Three of a Kind"
    if(maxRank === 2) return "Pair"
    else return "High Card"

};