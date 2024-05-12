/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */
var matchPlayersAndTrainers = function(players, trainers) {
 players.sort((a,b) => b-a);
    trainers.sort((a,b) => b-a);
    let playersPointer = 0;
    let trainersPointer = 0;
    let ans = 0;
    
    while (trainersPointer < trainers.length && playersPointer < players.length){
        if ( trainers[trainersPointer] >= players[playersPointer]) {
            trainersPointer ++;
            playersPointer ++;
            ans ++;
        } else {
            playersPointer ++;
        }
    }
    return ans;
};