/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let map = {}
    let lowestIdx = Infinity
    let ans = []
    for(let i=list1.length -1; i>=0;i--){
        if(!map[list1[i]]) map[list1[i]] = i
    }
    for(let i=0; i<list2.length;i++){
        if(map[list2[i]] !== undefined) {
            let sum = map[list2[i]] + i
            if(sum < lowestIdx) {
                ans = []
                ans.push(list2[i])
                lowestIdx = sum
            } else if(sum === lowestIdx) {
                ans.push(list2[i])
            } 
        }
    }
    return ans
};