/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function(rectangles) {
    
    let counter = 1
    let maxSq = -1
    for ( let sq of rectangles ) {
        let currSq = Math.min(sq[0], sq[1])
        
        if (currSq > maxSq) {
            maxSq = currSq
            counter = 1 
        }
        else if (currSq == maxSq) counter ++
        
    }
    return counter
};