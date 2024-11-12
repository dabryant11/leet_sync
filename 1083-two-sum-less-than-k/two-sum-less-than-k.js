var twoSumLessThanK = function(nums, k) {
    let e = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let comboNum = nums[i]+nums[j];
            if (comboNum < k) {
                e.push(comboNum);
            }
        }
    }
    if (e.length > 0) {
        return Math.max(...e);
    }
    else {
        return -1;
    }
};