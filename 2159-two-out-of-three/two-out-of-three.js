/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
    let ans = []
    let map = {}

    for (let num of nums1){
        map[num] = 1
    }

    for (let num of nums2){
        if (!map[num] || map[num] == 2) map[num] = 2
        else if (!ans.includes(num)) ans.push(num)
    }

    for (let num of nums3){
        if (!map[num] || map[num] == 3) map[num] = 3
        else if (!ans.includes(num)) ans.push(num)
    }
    return ans
};