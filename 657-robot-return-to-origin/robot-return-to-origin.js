/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let coord = [0,0]

    let moo = moves.split("")

    for (let i=0;i<moves.length;i++){
        if (moo[i] === "U") coord[0] ++
        if (moo[i] === "D") coord[0] --
        if (moo[i] === "R") coord[1] ++
        if (moo[i] === "L") coord[1] --
        
    }
    return coord[0] === 0 && coord[1] === 0
  
};