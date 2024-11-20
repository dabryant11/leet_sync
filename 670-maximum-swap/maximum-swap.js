/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
    const arr = num.toString().split('').map(Number);
    const lastIndex = new Array(10).fill(-1);
    
    for (let i = 0; i < arr.length; i++) {
        lastIndex[arr[i]] = i;
    }

    for (let i = 0; i < arr.length; i++) {
        for (let digit = 9; digit > arr[i]; digit--) {
            if (lastIndex[digit] > i) {
                [arr[i], arr[lastIndex[digit]]] = [arr[lastIndex[digit]], arr[i]];
                return +arr.join('');
            }
        }
    }

    return num;
};