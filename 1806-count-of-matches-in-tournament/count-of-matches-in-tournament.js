/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    
    var ans = 0;
    while(n!=1){
        ans+= Math.floor(n/2);
        if(n%2==1)
            n = (n-1)/2 +1;
        else
            n = n/2;
    }
    return ans;
};