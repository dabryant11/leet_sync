/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function(time) {
    let newTime = time.split("")
    for(let i=0;i<newTime.length;i++){
        if (newTime[i] === "?"){
            if (i === 0){
                newTime[i] = (newTime[1] === "?" || newTime[1] <= 3 ) ? "2" : "1" 
            }
            if (i === 1){
                newTime[i] = (newTime[0] === "2") ? "3" : "9"
            }
            if (i === 3)newTime[i] = "5"
            if (i === 4)newTime[i] = "9"
        }
    }

    return newTime.join("")
};