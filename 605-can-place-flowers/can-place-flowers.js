/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let plantsThatCanBePlanted = 0
    for (let i=0;i<flowerbed.length;i++){
        if(flowerbed[i] === 0 && (i === 0 || flowerbed[i-1] === 0) && (flowerbed[i + 1] === 0 || flowerbed.length - 1 === i)){
            plantsThatCanBePlanted ++
            flowerbed[i] = 1
        }
    }
    return plantsThatCanBePlanted >= n
};
