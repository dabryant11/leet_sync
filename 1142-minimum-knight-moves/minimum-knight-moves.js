/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var minKnightMoves = function(x, y) {
    let directions = [
        [2,1],
        [2,-1],
        [-2,-1],
        [-2,1],
        [1,2],
        [1,-2],
        [-1,2],
        [-1,-2],
    ]

    let visited = new Set()
    let moves = 0
    let queue = [[0,0]]

    while (queue.length !== 0){
        let next = []
        while (queue.length !== 0){
        let curr = queue.pop()
        if(curr[0] === x && curr[1] === y) return moves
        
            for(let d of directions){
                let nextX = curr[0] + d[0]
                let nextY = curr[1] + d[1]
                if(!visited.has(nextX+","+nextY)){
                    next.push([nextX,nextY])
                    visited.add(nextX+","+nextY)
                }
            }
        }
        queue = next
        moves ++
    }
};