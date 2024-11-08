/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let ans = []

    for (let i=0;i<asteroids.length;i++){
        let last = ans[ans.length-1]
        let curr = asteroids[i]

        if(!ans.length || curr >0 || last < 0) ans.push(curr)
        else if (-curr === last) ans.pop()
        else if(-curr > last){
            ans.pop()
            i--
        }
    }
    return ans
};