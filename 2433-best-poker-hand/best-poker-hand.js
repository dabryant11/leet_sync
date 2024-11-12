/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function(ranks, suits) {
    let rankMap = new Map();
    let suitMap = new Map();

    // Count the occurrences of each rank
    for (let rank of ranks) {
        rankMap.set(rank, (rankMap.get(rank) || 0) + 1);
    }

    // Count the occurrences of each suit
    for (let suit of suits) {
        suitMap.set(suit, (suitMap.get(suit) || 0) + 1);
    }

    // Check for "Flush" (all suits are the same)
    if (suitMap.size === 1) {
        return "Flush";
    }

    // Check for "Three of a Kind" and "Pair"
    let maxRankCount = Math.max(...rankMap.values());
    if (maxRankCount >= 3) {
        return "Three of a Kind";
    } else if (maxRankCount === 2) {
        return "Pair";
    } else {
        return "High Card";
    }
};
