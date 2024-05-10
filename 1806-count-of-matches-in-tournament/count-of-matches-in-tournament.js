/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(teams) {
   
    var matches = 0;
    while(teams>1){
        matches+= Math.floor(teams/2);
        if(teams%2==1)
            teams = (teams-1)/2 +1;
        else
            teams = teams/2;
    }
    return matches;
};