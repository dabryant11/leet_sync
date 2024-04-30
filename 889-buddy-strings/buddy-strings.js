/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
    let firstSwapIndex = undefined
    let swapComplete = false
// tortilla
// tlrtiooa
    let count = {}
    if (s.length !== goal.length) return false
    if ( s == goal) {
        for ( let char of s){
            if (!count[char]) count[char] =1
            else return true
        }
        return false
    }

    for ( let i =0; i< s.length; i++){
        if ( s[i] !== goal[i]){
            if (swapComplete) return false
            else if (firstSwapIndex === undefined) {
                firstSwapIndex = i
            } else {
                if (s[firstSwapIndex] !== goal[i] || goal[firstSwapIndex] !== s[i]) return false
                swapComplete = true
            }
        }

    }
    return swapComplete
    
};