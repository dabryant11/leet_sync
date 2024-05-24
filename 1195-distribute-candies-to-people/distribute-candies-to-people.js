/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
    let arr=new Array(num_people).fill(0);
    let j=1;
    while(candies>0){
          for (let i = 0; i < num_people && candies > 0; i++){
              arr[i] +=Math.min(j,candies);
              candies= candies-j;
              j++
          }
    }
    return arr
};