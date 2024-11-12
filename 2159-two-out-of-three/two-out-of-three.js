/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
    let obj={}
    let res=[]
    for(let num of nums1){
        obj[num]=1
    }
    for(let num of nums2){
        if(!obj[num]||obj[num]==2) obj[num]=2
        else if(!res.includes(num)) res.push(num)
    }
    for(let num of nums3){
        if(!obj[num]||obj[num]==3) obj[num]=3
        else if(!res.includes(num)) res.push(num)
    }
    return res
};