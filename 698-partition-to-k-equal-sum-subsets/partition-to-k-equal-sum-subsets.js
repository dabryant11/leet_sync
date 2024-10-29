/**
 * @param {number[]} nums
 * @param {number} k
 */
 
var canPartitionKSubsets = function(nums, k) {
    const total = nums.reduce((a,b) => a+b);

    if (total%k != 0){
        return false;
    }

    const target = total/k;

    nums.sort((a,b) => b-a)

    function dfs(i,ans){
        if (i == nums.length){

            for (let p = 0; p < k; p++){
                if (ans[p] != target){
                    return false;
                }
            }

            return true;
        }

        for (let j = 0; j < k; j++){
            if (ans[j] + nums[i] <= target){
                ans[j] += nums[i];

                if (dfs(i+1,ans)){
                    return true;
                }

                ans[j] -= nums[i];

                if (!ans[j]) {break;}
            }
        }
        return false;
    }

    let ans = Array(k).fill(0);

    return dfs(0,ans);
};
