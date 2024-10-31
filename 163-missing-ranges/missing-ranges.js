function findMissingRanges(nums, lower, upper) {
  const res = [];
  nums = [lower - 1, ...nums, upper + 1];

  for (let i = 1; i < nums.length; i++) {
    const start = nums[i - 1] + 1;
    const end = nums[i] - 1;

    if (start === end) {
      res.push([start, end]); // Single missing number as a range
    } else if (start < end) {
      res.push([start, end]); // Range of missing numbers
    }
  }

  return res;
}
