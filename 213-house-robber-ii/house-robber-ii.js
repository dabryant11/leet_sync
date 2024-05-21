/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const len = nums.length;
    if (len < 4) return Math.max(...nums);
    
    function robberHelper(start, end) {
        let prev=0, beforePrev=0;
        for (let i=start;i<end;i++) {
            let tmp = prev;
            prev = Math.max(nums[i] + beforePrev, prev);
            beforePrev= tmp;
        }
        return prev;
    }
    return Math.max(robberHelper(0, len-1), robberHelper(1, len));
};