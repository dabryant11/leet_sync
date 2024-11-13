/**
 * @param {number[]} arr
 * @return {number}
 */
const missingNumber = function (arr) {
  const len = arr.length;
  const factor = (arr[len - 1] - arr[0]) / len;

  let start = 0;
  let end = len - 1;

  while (start <= end) {
    const mid = Math.floor((end - start) / 2) + start;
    const expectedMidVal = (factor * mid) + arr[0];
    if (expectedMidVal !== arr[mid]) {
        // Left boundary
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return (factor * start) + arr[0];
};