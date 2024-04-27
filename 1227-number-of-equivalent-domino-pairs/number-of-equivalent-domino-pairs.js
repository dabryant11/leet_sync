/**
 * @param {number[][]} dominoes
 * @return {number}
 */
// var numEquivDominoPairs = function(dominoes) {
//     let ans = 0
//     for ( let i=0; i< dominoes.length - 1; i++) {
//         if ( dominoes[i][0] === dominoes[i + 1][0] && dominoes[i][1] === dominoes[i + 1][1] || dominoes[i][0] === dominoes[i + 1][1] && dominoes[i][1] === dominoes[i + 1][0] ) {
//             ans ++
//         }
//     }

//     return ans
    
// };

var numEquivDominoPairs = function(dominoes) {
    let ans = 0;
    let count = {}; // Using an object to count occurrences of equivalent dominoes

    for (let i = 0; i < dominoes.length; i++) {
        // Sorting the dominoes to treat equivalent dominoes as identical
        let sortedDomino = dominoes[i].sort((a, b) => a - b);
        let key = sortedDomino.join('_'); // Creating a key to represent this domino

        // If this domino has been seen before, increment the count
        if (count[key]) {
            ans += count[key];
            count[key]++;
        } else {
            count[key] = 1;
        }
    }

    return ans;
};
