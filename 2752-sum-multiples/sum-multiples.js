var sumOfMultiples = function(n) {
    let ans = 0;

    for (let i = 1; i <= n; i++) {  // Start from 1 instead of 0
        if (i % 3 == 0 || i % 5 == 0 || i % 7 == 0) {
            ans += i;
        }
    }
    return ans;
};
