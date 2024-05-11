/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
   
   const pos = []
   const neg = []
   const res = []

    nums.forEach((val)=> val<0? neg.push(val):pos.push(val))

    let l = 0;
    let k = 0;

    for(let i=1; i<=nums.length; i++){
        if(i%2 === 0){
            res.push(neg[l])
            l++
        }else{
            res.push(pos[k])
            k++
        }
    }
    
    return res

};