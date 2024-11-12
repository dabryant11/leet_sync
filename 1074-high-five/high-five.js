/**
 * @param {number[][]} items
 * @return {number[][]}
 */
var highFive = function(items) {
    let ans = []
    let map = {}
    for(let i =0;i<items.length;i++){
        let student = items[i][0]
        let grade = items[i][1]
        if(!map[student]) map[student] = []
        map[student].push(grade)
    }    

    for(let key of Object.keys(map)){
        map[key].sort((a,b) => b-a)
        let sum = 0
        let top5 = map[key].slice(0,5)

        sum = top5.reduce((acc,grade) => acc + grade,0)
        let avgGrade = Math.floor(sum/top5.length)
        ans.push([parseInt(key), avgGrade])

    }
    

    
    return ans
};