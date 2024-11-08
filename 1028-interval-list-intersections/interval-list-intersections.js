/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
    let ans = []

    let i = 0
    let j = 0

    while (i<firstList.length && j<secondList.length){
        let firstPair = firstList[i]
        let secPair = secondList[j]

        let start = Math.max(firstPair[0], secPair[0])
        let end = Math.min(firstPair[1], secPair[1])

        if(start <= end) ans.push([start,end])

        if(firstPair[1] < secPair[1]) i++
        else j++

    }
    return ans
};