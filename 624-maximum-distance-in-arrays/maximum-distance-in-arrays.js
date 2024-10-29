/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function(arrays) {
  let minVal = arrays[0][0]
  let maxVal = arrays[0][arrays[0].length -1]
  let maxDist = 0

    for ( let i = 1; i<arrays.length;i++){
        // maxDist = Math.max(maxDist,Math.abs(maxVal - minVal))
         maxDist = Math.max(
            maxDist,
            Math.abs(arrays[i][arrays[i].length - 1] - minVal),
            Math.abs(maxVal - arrays[i][0])
        );


        minVal = Math.min(minVal,arrays[i][0])
        maxVal = Math.max(maxVal, arrays[i][arrays[i].length - 1])
        maxVal = Math.max(maxVal, arrays[i][arrays[i].length - 1]);

    }

  return maxDist
};

