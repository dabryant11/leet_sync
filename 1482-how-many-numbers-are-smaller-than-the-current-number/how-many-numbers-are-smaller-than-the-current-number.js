/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
  let sortedNums = nums.slice().sort((a,b) => a-b)
  let ans = []

  for (let i =0 ; i< nums.length ; i++) {
    let count = 0
    for (let j =0 ; j< nums.length ; j++) {
        if (sortedNums[j] < nums[i]) count ++ 
        else break
    }
    ans.push(count)
  }
  return ans
};
