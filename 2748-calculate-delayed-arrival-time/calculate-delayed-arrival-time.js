/**
 * @param {number} arrivalTime
 * @param {number} delayedTime
 * @return {number}
 */
var findDelayedArrivalTime = function(arrivalTime, delayedTime) {
    if (arrivalTime + delayedTime < 24) return arrivalTime + delayedTime
    else return (arrivalTime + delayedTime )% 24
        

    
};